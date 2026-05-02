// HUE Glint — Shared Utility Functions
// public/utils.js — importable across all Velo page code and backend modules

/**
 * generateReferralCode — creates a unique 8-char referral code from memberId
 */
export function generateReferralCode(memberId) {
  const base = memberId.replace(/[^a-zA-Z0-9]/g, '').toUpperCase();
  const suffix = Math.random().toString(36).substring(2, 6).toUpperCase();
  return `HG-${base.slice(0, 4)}${suffix}`;
}

/**
 * formatCurrency — format a number as USD string
 */
export function formatCurrency(amount) {
  return `$${parseFloat(amount).toFixed(2)}`;
}

/**
 * formatDate — format a date object as readable string
 */
export function formatDate(date) {
  return new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

/**
 * sanitizeInput — basic XSS protection for form inputs before storage
 */
export function sanitizeInput(str) {
  if (typeof str !== 'string') return '';
  return str.replace(/[<>"'&]/g, (char) => ({
    '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#x27;', '&': '&amp;'
  }[char]));
}

/**
 * getMeasurementInstructions — returns instruction string for a body location
 */
export function getMeasurementInstructions(locationId) {
  const instructions = {
    wrist:    "Wrap a flexible tape measure snugly around your wrist bone just below the hand. Note the measurement in inches. We add 0.75\" for a comfortable permanent fit.",
    ankle:    "Measure around the narrowest part of your ankle. Note in inches. We add 1\" for movement ease — permanent ankle chains sit slightly looser than bracelets.",
    neck:     "Choker (14–16\"): Measure around your neck and add 1\". Princess (17–19\"): Measure from collarbone to desired drop. Matinee (20–22\"): Measure desired drape length.",
    belly:    "Measure around your natural waist (at the navel level) while relaxed. We add 1.5\" for comfortable drape. Belly chains sit loosely — don't measure too snugly.",
    upperArm: "Flex your bicep slightly and measure around the widest point of your upper arm. We add 0.5\" for movement. Upper arm bands should slide on but not fall.",
    finger:   "Measure the circumference of your chosen finger at the knuckle — the widest point it must pass over. We add 0.25\" for permanent comfort.",
    toe:      "Measure loosely around the base of your chosen toe. We add 0.25\". Toe rings sit very loosely — measure generously.",
  };
  return instructions[locationId] || "Please measure the circumference of the desired location in inches.";
}

/**
 * buildShareText — pre-written referral caption for social sharing
 */
export function buildShareText(referralCode, discountPercent = 10) {
  return `I just got my bracelet permanently welded on and I'm obsessed. ✨ No clasp. No compromise. Use my link for ${discountPercent}% off your first HUE Glint session. Code: ${referralCode} — glint.hue-co.com`;
}

/**
 * calculateTravelFee — compute travel fee for mobile/event services
 * @param {number} guestCount
 * @param {number} milesFromStudio
 * @param {boolean} isPremiumSetup
 */
export function calculateTravelFee(guestCount = 1, milesFromStudio = 0, isPremiumSetup = false) {
  const BASE_LOCAL   = isPremiumSetup ? 50 : 35;
  const BASE_MILEAGE = 15;
  const RATE_PER_MILE = 2;
  const EVENT_BASE   = guestCount > 10 ? 75 : (guestCount > 5 ? 60 : 50);

  const isEvent = guestCount >= 4;
  const baseFee = isEvent ? EVENT_BASE : BASE_LOCAL;
  const extraMiles = Math.max(0, milesFromStudio - BASE_MILEAGE);
  const mileageFee = extraMiles * RATE_PER_MILE;

  return {
    baseFee,
    mileageFee,
    total: baseFee + mileageFee,
    breakdown: `Base: $${baseFee} + Mileage: $${mileageFee}`,
  };
}

/**
 * getPartyFavorQuote — full party favor estimate
 * @param {string} tierId - "tier1" | "tier2" | "tier3"
 * @param {number} guestCount
 * @param {number} milesFromStudio
 */
export function getPartyFavorQuote(tierId, guestCount, milesFromStudio = 0) {
  const PER_GUEST = { tier1: 38, tier2: 72, tier3: 175 };
  const perGuest = PER_GUEST[tierId];
  if (!perGuest) throw new Error(`Unknown tier: ${tierId}`);

  const guestTotal = perGuest * guestCount;
  const travel = calculateTravelFee(guestCount, milesFromStudio);
  const hostChain = 0; // complimentary

  return {
    perGuest,
    guestCount,
    guestTotal,
    travelFee: travel.total,
    hostChainValue: 38,
    hostChainCost: 0,
    estimatedTotal: guestTotal + travel.total,
    breakdown: {
      chains: `${guestCount} guests × $${perGuest} = $${guestTotal}`,
      travel: travel.breakdown,
      hostBenefit: "1 complimentary Tier 1 chain for host ($38 value) — FREE",
    },
  };
}
