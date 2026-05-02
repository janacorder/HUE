// HUE Glint — Loyalty & Referral Program Velo Code
// Paste into: Wix Studio > Backend > loyalty.jsw (web module for server-side)
// And: Inner Circle page code for frontend bindings
//
// Requires: Wix Members, Wix Data (collections: GlintMembers, GlintTransactions, GlintReferrals)

import wixData from 'wix-data';
import wixUsers from 'wix-users';
import { generateReferralCode } from 'public/utils.js';

// ─── LOYALTY TIERS ───────────────────────────────────────────────────────────

export const LOYALTY_TIERS = {
  GLINT:     { name: "Glint",     minPoints: 0,    maxPoints: 499,  multiplier: 1.0, color: "#C0C0C0" },
  GOLD:      { name: "Gold",      minPoints: 500,  maxPoints: 1499, multiplier: 1.25, color: "#C9A84C" },
  CHAMPAGNE: { name: "Champagne", minPoints: 1500, maxPoints: 2999, multiplier: 1.5,  color: "#E8D5A3" },
  DIAMOND:   { name: "Diamond",   minPoints: 3000, maxPoints: Infinity, multiplier: 2.0, color: "#E0E8FF" },
};

export const POINT_EVENTS = {
  BOOK_SERVICE:      { points: 100, label: "Booked a service" },
  REFER_FRIEND:      { points: 250, label: "Referred a friend who booked" },
  LEAVE_REVIEW:      { points: 50,  label: "Left a verified review" },
  BUY_PRODUCT:       { points: 25,  label: "Purchased aftercare product" },
  SOCIAL_SHARE:      { points: 75,  label: "Tagged @hueglint on social" },
  BIRTHDAY_BONUS:    { points: 150, label: "Birthday bonus" },
  SIGNUP_BONUS:      { points: 50,  label: "Welcome to the Inner Circle" },
  STACKING_SESSION:  { points: 150, label: "Booked a stacking session (3+ chains)" },
  BRIDAL_EVENT:      { points: 200, label: "Hosted bridal or event session" },
};

export const REDEMPTIONS = {
  T1_CHARM:        { points: 200,  label: "Free Tier 1 charm",              value: 12  },
  DISCOUNT_20:     { points: 400,  label: "$20 off next service",            value: 20  },
  T2_CHARM:        { points: 750,  label: "Free Tier 2 charm upgrade",       value: 28  },
  FREE_WELD:       { points: 1000, label: "Free weld on next appointment",   value: 30  },
  T2_BRACELET:     { points: 2000, label: "Complimentary Tier 2 bracelet",   value: 72  },
  DIAMOND_CONSULT: { points: 500,  label: "Private 30-min diamond consultation", value: 50 },
};

// ─── MEMBER FUNCTIONS (Backend — loyalty.jsw) ─────────────────────────────────

/**
 * getMemberProfile — fetch or create loyalty profile for current logged-in user
 */
export async function getMemberProfile(memberId) {
  const results = await wixData.query("GlintMembers")
    .eq("memberId", memberId)
    .find();

  if (results.items.length > 0) return results.items[0];

  // Create new profile
  const newMember = {
    memberId,
    points: POINT_EVENTS.SIGNUP_BONUS.points,
    tier: "GLINT",
    referralCode: generateReferralCode(memberId),
    referralCount: 0,
    joinDate: new Date(),
    birthday: null,
  };

  const created = await wixData.insert("GlintMembers", newMember);
  await logTransaction(memberId, "SIGNUP_BONUS", POINT_EVENTS.SIGNUP_BONUS.points);
  return created;
}

/**
 * awardPoints — add points to a member's balance
 */
export async function awardPoints(memberId, eventType, notes = "") {
  const event = POINT_EVENTS[eventType];
  if (!event) throw new Error(`Unknown event type: ${eventType}`);

  const profile = await getMemberProfile(memberId);
  const tier = getTierForPoints(profile.points);
  const multiplier = LOYALTY_TIERS[tier].multiplier;
  const pointsEarned = Math.round(event.points * multiplier);
  const newTotal = profile.points + pointsEarned;

  await wixData.update("GlintMembers", {
    ...profile,
    points: newTotal,
    tier: getTierForPoints(newTotal),
  });

  await logTransaction(memberId, eventType, pointsEarned, notes);
  return { pointsEarned, newTotal, tier: getTierForPoints(newTotal) };
}

/**
 * redeemPoints — deduct points for a reward
 */
export async function redeemPoints(memberId, redemptionType) {
  const redemption = REDEMPTIONS[redemptionType];
  if (!redemption) throw new Error(`Unknown redemption: ${redemptionType}`);

  const profile = await getMemberProfile(memberId);
  if (profile.points < redemption.points) {
    throw new Error(`Insufficient points. Need ${redemption.points}, have ${profile.points}.`);
  }

  const newTotal = profile.points - redemption.points;
  await wixData.update("GlintMembers", {
    ...profile,
    points: newTotal,
    tier: getTierForPoints(newTotal),
  });

  await logTransaction(memberId, `REDEEM_${redemptionType}`, -redemption.points);
  return { redeemed: redemption.label, pointsSpent: redemption.points, remaining: newTotal };
}

/**
 * getTierForPoints — return the tier name for a point balance
 */
export function getTierForPoints(points) {
  if (points >= 3000) return "DIAMOND";
  if (points >= 1500) return "CHAMPAGNE";
  if (points >= 500)  return "GOLD";
  return "GLINT";
}

/**
 * logTransaction — write to GlintTransactions collection
 */
async function logTransaction(memberId, type, points, notes = "") {
  await wixData.insert("GlintTransactions", {
    memberId,
    type,
    points,
    notes,
    createdAt: new Date(),
  });
}

// ─── REFERRAL FUNCTIONS ───────────────────────────────────────────────────────

/**
 * processReferral — called when a new client books using a referral code
 * @param {string} referralCode - the referrer's code
 * @param {string} newMemberId - the new client's member ID
 */
export async function processReferral(referralCode, newMemberId) {
  // Find referrer by code
  const referrerResults = await wixData.query("GlintMembers")
    .eq("referralCode", referralCode)
    .find();

  if (referrerResults.items.length === 0) throw new Error("Invalid referral code.");

  const referrer = referrerResults.items[0];

  // Prevent self-referral
  if (referrer.memberId === newMemberId) throw new Error("Cannot refer yourself.");

  // Check for duplicate referral
  const dupCheck = await wixData.query("GlintReferrals")
    .eq("referrerId", referrer.memberId)
    .eq("refereeId", newMemberId)
    .find();
  if (dupCheck.items.length > 0) throw new Error("Referral already processed.");

  // Award referrer
  await awardPoints(referrer.memberId, "REFER_FRIEND", `Referred member ${newMemberId}`);

  // Log referral
  await wixData.insert("GlintReferrals", {
    referrerId: referrer.memberId,
    refereeId: newMemberId,
    referralCode,
    createdAt: new Date(),
    status: "COMPLETE",
  });

  // New client gets 10% off (handled as discount code in Wix — generate separately)
  return {
    success: true,
    referrerName: referrer.name,
    discountForReferee: "10% off your first service — applied at checkout",
  };
}

// ─── BIRTHDAY AUTOMATION ─────────────────────────────────────────────────────
// Schedule this to run daily via Wix Triggers (or a scheduled job)

export async function checkBirthdays() {
  const today = new Date();
  const todayMMDD = `${String(today.getMonth() + 1).padStart(2,'0')}-${String(today.getDate()).padStart(2,'0')}`;

  const members = await wixData.query("GlintMembers")
    .contains("birthdayMMDD", todayMMDD)
    .find();

  const results = [];
  for (const member of members.items) {
    const alreadyAwarded = await wixData.query("GlintTransactions")
      .eq("memberId", member.memberId)
      .eq("type", "BIRTHDAY_BONUS")
      .ge("createdAt", new Date(today.getFullYear(), 0, 1))
      .find();

    if (alreadyAwarded.items.length === 0) {
      await awardPoints(member.memberId, "BIRTHDAY_BONUS", "Happy Birthday from HUE Glint!");
      results.push(member.memberId);
    }
  }
  return results;
}

// ─── CMS COLLECTIONS NEEDED ──────────────────────────────────────────────────
/*
Create these collections in Wix CMS (Data > Collections):

1. GlintMembers
   Fields: memberId (text), points (number), tier (text), referralCode (text),
           referralCount (number), joinDate (date), birthday (date), birthdayMMDD (text),
           name (text), email (text), phone (text)

2. GlintTransactions
   Fields: memberId (text), type (text), points (number), notes (text), createdAt (date)

3. GlintReferrals
   Fields: referrerId (text), refereeId (text), referralCode (text),
           createdAt (date), status (text)

4. GlintRedemptions
   Fields: memberId (text), redemptionType (text), pointsSpent (number),
           createdAt (date), status (text), redeemedAt (date)
*/
