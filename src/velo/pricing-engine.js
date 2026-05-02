// HUE Glint — Velo Pricing Engine
// Drop into Wix Studio > Code Files > Public > pricing-engine.js
// Then import on the "Design Your Chain" page

// ─── PRICING CONSTANTS ────────────────────────────────────────────────────────

export const TIERS = {
  TIER1: {
    id: "tier1",
    name: "Durable Utility",
    subtitle: "316L Stainless Steel",
    finishes: ["PVD Gold", "PVD Silver"],
    pricePerInch: 1.75,
    weldFee: 30,
    charmPrice: 12,
    minLength: 5,    // inches
    label: "Zero tarnish. Lifetime durability.",
    color: "#C0C0C0",
  },
  TIER2: {
    id: "tier2",
    name: "Refined Luxury",
    subtitle: "14k Gold-Filled / Argentium Silver",
    finishes: ["14k Gold-Filled", "Argentium Silver"],
    pricePerInch: 3.75,
    weldFee: 45,
    charmPrice: 28,
    minLength: 5,
    label: "Hypoallergenic. Heirloom quality.",
    color: "#C9A84C",
  },
  TIER3: {
    id: "tier3",
    name: "Solid Gold",
    subtitle: "14k Solid Gold",
    finishes: ["14k Yellow Gold", "14k White Gold"],
    pricePerInch: 10.00,
    weldFee: 75,
    charmPrice: 75,
    minLength: 5,
    label: "Investment jewelry. Forever yours.",
    color: "#B8960C",
  },
};

export const BODY_LOCATIONS = {
  wrist:     { label: "Wrist",      minInches: 6,  maxInches: 9,  fitBuffer: 0.75, instruction: "Measure snugly around wrist bone. We add 0.75\" for comfort fit." },
  ankle:     { label: "Ankle",      minInches: 8,  maxInches: 13, fitBuffer: 1.0,  instruction: "Measure around narrowest ankle point. We add 1\" for ease of movement." },
  neck:      { label: "Neck",       minInches: 14, maxInches: 22, fitBuffer: 0,    instruction: "Choker: 14–16\". Princess: 17–19\". Matinee: 20–22\". Measure or choose by style." },
  belly:     { label: "Belly",      minInches: 28, maxInches: 40, fitBuffer: 1.5,  instruction: "Measure around natural waist. We add 1.5\" for comfortable drape." },
  upperArm:  { label: "Upper Arm",  minInches: 9,  maxInches: 16, fitBuffer: 0.5,  instruction: "Measure around the bicep. We add 0.5\" for movement." },
  finger:    { label: "Finger",     minInches: 1.5,maxInches: 3,  fitBuffer: 0.25, instruction: "Measure around finger knuckle. We add 0.25\" for comfort." },
  toe:       { label: "Toe",        minInches: 2,  maxInches: 4,  fitBuffer: 0.25, instruction: "Measure around the base of chosen toe." },
};

export const CHAIN_STYLES = [
  { id: "box",    name: "Box Chain",    description: "Clean, square links. Modern and architectural." },
  { id: "cable",  name: "Cable Chain",  description: "Classic oval links. Timeless and versatile." },
  { id: "figaro", name: "Figaro",       description: "Alternating long-short links. Italian-inspired." },
  { id: "rope",   name: "Rope Chain",   description: "Twisted multi-strand. Rich texture." },
  { id: "snake",  name: "Snake Chain",  description: "Smooth, flexible rings. Sleek and sculptural." },
  { id: "curb",   name: "Curb Chain",   description: "Flat interlocking links. Bold and substantial." },
];

export const CHARMS = [
  { id: "star",      name: "Star",       emoji: "⭐" },
  { id: "moon",      name: "Crescent Moon", emoji: "🌙" },
  { id: "heart",     name: "Heart",      emoji: "❤️" },
  { id: "evileye",   name: "Evil Eye",   emoji: "🧿" },
  { id: "initial",   name: "Initial (A–Z)", emoji: "🔤" },
  { id: "butterfly", name: "Butterfly",  emoji: "🦋" },
  { id: "lightning", name: "Lightning",  emoji: "⚡" },
  { id: "cross",     name: "Cross",      emoji: "✝️" },
  { id: "infinity",  name: "Infinity",   emoji: "∞" },
  { id: "pearl",     name: "Pearl Drop", emoji: "🔮" },
  { id: "sunburst",  name: "Sunburst",   emoji: "☀️" },
  { id: "wave",      name: "Wave",       emoji: "🌊" },
];

export const SERVICES = {
  inStudio:    { name: "In-Studio Session", basePrice: 0,   note: "Walk in or book ahead." },
  mobile:      { name: "Mobile Service",    basePrice: 35,  note: "Travel fee from $35. Additional mileage over 15mi: $2/mi." },
  bridal:      { name: "Bridal & Events",   basePrice: 350, note: "Minimum $350 event. Includes setup, champagne styling service, keepsake boxes." },
  popup:       { name: "Pop-Up Collaboration", basePrice: 0, note: "Revenue-share model. Apply to partner." },
  vendor:      { name: "Vendor Event",      basePrice: 150, note: "Booth fee from $150 depending on event." },
  partyFavor:  { name: "Party Favors",      basePrice: 0,   note: "Host selects chain + charm for all guests. Priced per guest by tier." },
};

export const PARTY_FAVOR_PER_GUEST = {
  tier1: 38,   // includes chain (avg 7in × $1.75) + $30 weld + $12 charm - discounted
  tier2: 72,   // includes chain + $45 weld + $28 charm
  tier3: 175,  // includes chain + $75 weld + $75 charm
};

export const TRAVEL_SETUP_FEES = {
  base: 50,           // under 10 guests, local
  guestThreshold: 10,
  perGuestOver: 5,    // $5/guest over 10
  mileageRate: 2,     // per mile over 15
  baseMileage: 15,
};

// ─── PRICING CALCULATOR ───────────────────────────────────────────────────────

/**
 * calculateChainPrice
 * @param {string} tierId - "tier1" | "tier2" | "tier3"
 * @param {number} lengthInches - customer-entered length
 * @param {string[]} charmIds - array of charm IDs (max 3)
 * @returns {{ chainCost, weldFee, charmsCost, subtotal, deposit, balanceDue }}
 */
export function calculateChainPrice(tierId, lengthInches, charmIds = []) {
  const tier = TIERS[tierId.toUpperCase()];
  if (!tier) throw new Error(`Unknown tier: ${tierId}`);
  if (charmIds.length > 3) throw new Error("Maximum 3 charms per chain.");

  const chainCost  = parseFloat((lengthInches * tier.pricePerInch).toFixed(2));
  const weldFee    = tier.weldFee;
  const charmsCost = parseFloat((charmIds.length * tier.charmPrice).toFixed(2));
  const subtotal   = parseFloat((chainCost + weldFee + charmsCost).toFixed(2));
  const deposit    = 25;
  const balanceDue = parseFloat((subtotal - deposit).toFixed(2));

  return { chainCost, weldFee, charmsCost, subtotal, deposit, balanceDue };
}

/**
 * validateLength — checks measurement against body location limits
 */
export function validateLength(locationId, enteredInches) {
  const loc = BODY_LOCATIONS[locationId];
  if (!loc) return { valid: false, message: "Unknown body location." };
  if (enteredInches < loc.minInches) {
    return { valid: false, message: `Minimum for ${loc.label} is ${loc.minInches}". Please re-measure.` };
  }
  if (enteredInches > loc.maxInches) {
    return { valid: false, message: `Maximum for ${loc.label} is ${loc.maxInches}". Contact us for custom sizing.` };
  }
  return { valid: true, finalLength: enteredInches + loc.fitBuffer };
}

/**
 * calculatePartyFavor
 * @param {string} tierId
 * @param {number} guestCount
 * @param {number} milesFromStudio
 */
export function calculatePartyFavor(tierId, guestCount, milesFromStudio = 0) {
  const perGuest = PARTY_FAVOR_PER_GUEST[tierId];
  if (!perGuest) throw new Error(`Unknown tier: ${tierId}`);

  const guestTotal = perGuest * guestCount;

  let travelFee = TRAVEL_SETUP_FEES.base;
  if (guestCount > TRAVEL_SETUP_FEES.guestThreshold) {
    travelFee += (guestCount - TRAVEL_SETUP_FEES.guestThreshold) * TRAVEL_SETUP_FEES.perGuestOver;
  }
  const extraMiles = Math.max(0, milesFromStudio - TRAVEL_SETUP_FEES.baseMileage);
  const mileageFee = extraMiles * TRAVEL_SETUP_FEES.mileageRate;

  const total = guestTotal + travelFee + mileageFee;

  return { perGuest, guestTotal, travelFee, mileageFee, total };
}

// ─── WIX PAGE BINDINGS (paste into Design Your Chain page code) ───────────────
// import { calculateChainPrice, validateLength, TIERS, BODY_LOCATIONS, CHAIN_STYLES, CHARMS } from 'public/pricing-engine.js';
//
// $w.onReady(function () {
//   let config = { location: null, lengthInches: 0, tierId: null, finish: null, chainStyle: null, charms: [] };
//
//   // Step navigation
//   $w('#btnNextStep1').onClick(() => { config.location = $w('#locationDropdown').value; showStep(2); });
//   $w('#btnNextStep2').onClick(() => {
//     const loc = config.location;
//     const inches = parseFloat($w('#lengthInput').value);
//     const validation = validateLength(loc, inches);
//     if (!validation.valid) { $w('#validationMsg').text = validation.message; return; }
//     config.lengthInches = validation.finalLength;
//     showStep(3);
//   });
//   $w('#btnNextStep3').onClick(() => { config.tierId = $w('#tierDropdown').value; updatePriceSummary(); showStep(4); });
//   $w('#btnNextStep4').onClick(() => { config.chainStyle = $w('#chainStyleDropdown').value; showStep(5); });
//   $w('#btnNextStep5').onClick(() => { config.charms = getSelectedCharms(); updatePriceSummary(); showStep(6); });
//
//   function updatePriceSummary() {
//     if (!config.tierId || !config.lengthInches) return;
//     const pricing = calculateChainPrice(config.tierId, config.lengthInches, config.charms);
//     $w('#priceChain').text = `Chain (${config.lengthInches}" × rate): $${pricing.chainCost}`;
//     $w('#priceWeld').text = `Weld Service: $${pricing.weldFee}`;
//     $w('#priceCharms').text = `Charms (${config.charms.length}): $${pricing.charmsCost}`;
//     $w('#priceTotal').text = `Your Total: $${pricing.subtotal}`;
//     $w('#priceDeposit').text = `Deposit Due Today: $25`;
//     $w('#priceBalance').text = `Balance at Session: $${pricing.balanceDue}`;
//   }
//
//   function showStep(n) {
//     for (let i = 1; i <= 7; i++) $w(`#step${i}`).collapse();
//     $w(`#step${n}`).expand();
//     $w('#progressBar').value = ((n - 1) / 6) * 100;
//   }
//
//   function getSelectedCharms() {
//     return $w('#charmRepeater').data.filter(c => c.selected).map(c => c.id).slice(0, 3);
//   }
//
//   // Booking CTA
//   $w('#btnBookNow').onClick(() => {
//     wixLocation.to('/bookings');
//   });
// });
