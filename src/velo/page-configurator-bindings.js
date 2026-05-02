// HUE Glint — Design Your Chain Page — Wix Velo Page Code
// Paste this into: Wix Studio > Design Your Chain page > {} (Page Code)
//
// Prerequisites:
// 1. Add these elements to the page in Wix Studio:
//    - #step1 through #step7 (boxes/containers, each step collapsible)
//    - #locationDropdown, #lengthInput, #validationMsg
//    - #tierDropdown, #finishDropdown, #chainStyleDropdown
//    - #charmRepeater (repeater with checkbox per charm)
//    - #priceChain, #priceWeld, #priceCharms, #priceTotal, #priceDeposit, #priceBalance (text elements)
//    - #progressBar (progress bar element)
//    - #btnNext1 through #btnNext6 (next step buttons)
//    - #btnBookNow (final CTA)
//    - #bodyMockup (HTML iFrame component, src = body-mockup.html)
//    - #measurementInstructions (text element)

import { calculateChainPrice, validateLength, TIERS, BODY_LOCATIONS, CHAIN_STYLES, CHARMS } from 'public/pricing-engine.js';
import wixLocation from 'wix-location';
import wixPay from 'wix-pay';

// ─── PAGE STATE ───────────────────────────────────────────────────────────────
let config = {
  location:   null,
  lengthRaw:  0,
  lengthFinal: 0,
  tierId:     null,
  finish:     null,
  chainStyle: null,
  charms:     [],
};

let currentStep = 1;
const TOTAL_STEPS = 7;

// ─── ON PAGE READY ────────────────────────────────────────────────────────────
$w.onReady(function () {
  initLocationDropdown();
  initTierDropdown();
  initCharmRepeater();
  showStep(1);
  bindStepButtons();
  bindMockupMessages();
});

// ─── STEP NAVIGATION ─────────────────────────────────────────────────────────
function showStep(n) {
  for (let i = 1; i <= TOTAL_STEPS; i++) {
    $w(`#step${i}`).hide();
  }
  $w(`#step${n}`).show();
  $w('#progressBar').value = Math.round(((n - 1) / (TOTAL_STEPS - 1)) * 100);
  currentStep = n;
}

function bindStepButtons() {
  // Step 1 → 2: body location
  $w('#btnNext1').onClick(() => {
    config.location = $w('#locationDropdown').value;
    if (!config.location) { showError("Please select a body location."); return; }
    const loc = BODY_LOCATIONS[config.location];
    $w('#measurementInstructions').text = loc ? loc.instruction : "";
    postToMockup({ location: config.location });
    showStep(2);
  });

  // Step 2 → 3: length entry
  $w('#btnNext2').onClick(() => {
    const raw = parseFloat($w('#lengthInput').value);
    if (isNaN(raw) || raw <= 0) { $w('#validationMsg').text = "Please enter a valid length in inches."; return; }
    const result = validateLength(config.location, raw);
    if (!result.valid) { $w('#validationMsg').text = result.message; return; }
    $w('#validationMsg').text = "";
    config.lengthRaw = raw;
    config.lengthFinal = result.finalLength;
    showStep(3);
  });

  // Step 3 → 4: tier + finish
  $w('#btnNext3').onClick(() => {
    config.tierId = $w('#tierDropdown').value;
    config.finish  = $w('#finishDropdown').value;
    if (!config.tierId) { showError("Please select a metal tier."); return; }
    updatePriceSummary();
    showStep(4);
  });

  // Step 4 → 5: chain style
  $w('#btnNext4').onClick(() => {
    config.chainStyle = $w('#chainStyleDropdown').value;
    if (!config.chainStyle) { showError("Please select a chain style."); return; }
    showStep(5);
  });

  // Step 5 → 6: charms
  $w('#btnNext5').onClick(() => {
    config.charms = getSelectedCharms();
    updatePriceSummary();
    showStep(6);
  });

  // Step 6 → 7: review + deposit
  $w('#btnNext6').onClick(() => {
    updateFinalSummary();
    showStep(7);
  });

  // Step 7: Book + Pay deposit
  $w('#btnBookNow').onClick(async () => {
    try {
      const pricing = calculateChainPrice(config.tierId, config.lengthFinal, config.charms);
      // Initiate $25 deposit via Wix Pay
      // NOTE: Replace "hue-glint-deposit" with your actual Wix Pay item ID
      const paymentResult = await wixPay.startPayment("hue-glint-deposit-25");
      if (paymentResult.status === "Successful") {
        // Redirect to bookings calendar
        wixLocation.to('/bookings');
      }
    } catch(err) {
      console.error("Payment error:", err);
    }
  });
}

// ─── HELPERS ─────────────────────────────────────────────────────────────────
function initLocationDropdown() {
  const options = Object.entries(BODY_LOCATIONS).map(([id, loc]) => ({
    label: loc.label,
    value: id,
  }));
  $w('#locationDropdown').options = options;
}

function initTierDropdown() {
  const options = Object.entries(TIERS).map(([id, tier]) => ({
    label: `${tier.name} — ${tier.subtitle} (from $${tier.weldFee + (7 * tier.pricePerInch).toFixed(0)})`,
    value: id.toLowerCase(),
  }));
  $w('#tierDropdown').options = options;

  // Bind finish dropdown dynamically on tier change
  $w('#tierDropdown').onChange(() => {
    const tier = TIERS[$w('#tierDropdown').value.toUpperCase()];
    if (!tier) return;
    $w('#finishDropdown').options = tier.finishes.map(f => ({ label: f, value: f }));
  });
}

function initCharmRepeater() {
  $w('#charmRepeater').data = CHARMS.map(c => ({ ...c, selected: false }));
  $w('#charmRepeater').onItemReady(($item, itemData) => {
    $item('#charmName').text = `${itemData.emoji} ${itemData.name}`;
    $item('#charmCheckbox').checked = itemData.selected;
    $item('#charmCheckbox').onChange(() => {
      const selected = getSelectedCharms();
      if (!$item('#charmCheckbox').checked || selected.length < 3) {
        itemData.selected = $item('#charmCheckbox').checked;
      } else {
        $item('#charmCheckbox').checked = false;
        showError("Maximum 3 charms per chain.");
      }
    });
  });
}

function getSelectedCharms() {
  return ($w('#charmRepeater').data || [])
    .filter(c => c.selected)
    .map(c => c.id)
    .slice(0, 3);
}

function updatePriceSummary() {
  if (!config.tierId || !config.lengthFinal) return;
  const pricing = calculateChainPrice(config.tierId, config.lengthFinal, config.charms);
  const tier = TIERS[config.tierId.toUpperCase()];

  $w('#priceChain').text  = `Chain (${config.lengthFinal.toFixed(1)}" × $${tier.pricePerInch}/in): $${pricing.chainCost}`;
  $w('#priceWeld').text   = `Weld Service: $${pricing.weldFee}`;
  $w('#priceCharms').text = `Charms (${config.charms.length}): $${pricing.charmsCost}`;
  $w('#priceTotal').text  = `Your Total: $${pricing.subtotal}`;
  $w('#priceDeposit').text = `Deposit Due Today: $25.00`;
  $w('#priceBalance').text = `Balance at Session: $${pricing.balanceDue}`;

  // Also update mockup price hint
  postToMockup({ priceHint: `${tier.name} | ${config.lengthFinal.toFixed(1)}" | $${pricing.subtotal} total` });
}

function updateFinalSummary() {
  updatePriceSummary();
  const loc   = BODY_LOCATIONS[config.location];
  const tier  = TIERS[(config.tierId || "tier1").toUpperCase()];
  const style = CHAIN_STYLES.find(s => s.id === config.chainStyle);
  const charmNames = config.charms.map(id => CHARMS.find(c => c.id === id)?.name).filter(Boolean);

  $w('#summaryLocation').text  = loc?.label || "";
  $w('#summaryLength').text    = `${config.lengthFinal.toFixed(1)}"`;
  $w('#summaryTier').text      = `${tier?.name} — ${config.finish}`;
  $w('#summaryStyle').text     = style?.name || "";
  $w('#summaryCharms').text    = charmNames.length ? charmNames.join(", ") : "None";
}

function postToMockup(data) {
  try {
    $w('#bodyMockup').postMessage(data);
  } catch(e) {
    console.log("Mockup message:", data);
  }
}

function bindMockupMessages() {
  try {
    $w('#bodyMockup').onMessage((event) => {
      if (event.data?.type === "locationSelected") {
        config.location = event.data.location;
      }
    });
  } catch(e) {}
}

function showError(msg) {
  $w('#validationMsg').text = msg;
  setTimeout(() => { $w('#validationMsg').text = ""; }, 4000);
}
