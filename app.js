/**
 * מחשבון בטון פולימרי ורזין אקרילי - מנוע גרייש הרשמי (Grayish)
 * מותאם במיוחד לאייפון פרו מקס עם פונטים מוגדלים, ברורים וקריאים (ללא בחירה מהירה)
 */

// מאגר חומרי גרייש הרשמי ישירות מאתר grayish.co.il
const GRAYISH_MATERIALS = {
  WHITE: {
    id: 'WHITE',
    label: "שלג פולימרי פרו (Snow Pro)",
    badge: "הנמכר ביותר של גרייש",
    badgeColor: "bg-teal-100 text-teal-800 dark:bg-teal-900/60 dark:text-teal-300",
    x: 0.60,
    y: 3.0,
    yMin: null,
    basis: "powder",
    liquid: "מים",
    description: "בטון פולימרי פרימיום ליצירה, לבן-שמנת עדין, ערבוב במים בלבד. יחס 1 מים ל-3 אבקה.",
    packs: [
      [1.5, 74], [3, 139], [6, 264], [9, 378], [18, 725], [27, 1045], [36, 1345], [54, 2015], [72, 2680], [128, 4377]
    ],
    antiBreakageTips: [
      "שקלו תמיד את המים תחילה לקערת הערבוב, ואז שפכו את האבקה בהדרגה למים.",
      "יחס מדויק של גרייש: על כל 100 גרם מים - 300 גרם אבקה. אל תוסיפו מים מעבר לכך!",
      "לתוצאה דחוסה ומבריקה במיוחד (וחיזוק נוסף נגד שבירה), ניתן לעבוד ביחס 3.5:1 (פחות מים).",
      "זמן שליפה מהתבנית: מומלץ להמתין לפחות 35–45 דקות עד שהיציקה התקררה לגמרי מהחום שלה.",
      "ייבוש מלא: החומר מגיע לחוזק אבן סופי לאחר 24–48 שעות ייבוש באוויר הפתוח."
    ]
  },
  SNOW100: {
    id: 'SNOW100',
    label: "שלג 100% לבן (Pure White)",
    badge: "לבן בוהק במיוחד",
    badgeColor: "bg-blue-100 text-blue-800 dark:bg-blue-900/60 dark:text-blue-300",
    x: 0.55,
    y: 3.2,
    yMin: null,
    basis: "powder",
    liquid: "מים",
    description: "לבן בוהק ונקי ללא צורך בפיגמנט לבן, ערבוב במים. יחס 1 מים ל-3.2 אבקה.",
    packs: [
      [1, 52], [1.5, 76], [3, 145], [9, 395], [18, 850], [27, 1075], [36, 1400], [52, 1910], [72, 2680]
    ],
    antiBreakageTips: [
      "ערבבו ביסודיות 2-3 דקות עד לקבלת בלילה קרמית ללא גושים.",
      "שחרור בועות: הקישו בעדינות רבה על דפנות תבנית הסיליקון כדי להעלות בועות אוויר.",
      "אל תחלצו את הפריט כשהוא חם - חכו להתקררות מוחלטת."
    ]
  },
  GYSMO: {
    id: 'GYSMO',
    label: "GYSMO PRO (גיסמו פרו)",
    badge: "גבס פולימרי מהיר",
    badgeColor: "bg-amber-100 text-amber-800 dark:bg-amber-900/60 dark:text-amber-300",
    x: 0.515,
    y: 3.3,
    yMin: null,
    basis: "powder",
    liquid: "מים",
    description: "גבס פולימרי חזק במיוחד בערבוב מים בלבד. יחס 1 מים ל-3.3 אבקה.",
    packs: [
      [1.5, 91], [3, 180], [6, 313], [9, 456], [18, 865], [27, 1174], [36, 1390], [54, 1920], [72, 2420]
    ],
    antiBreakageTips: [
      "זמן עבודה קצר: מזגו מיד בתום הערבוב (תוך 5–8 דקות).",
      "המתנה של 40 דקות לפחות לפני שליפה מונעת שבירת קצוות."
    ]
  },
  FLEX: {
    id: 'FLEX',
    label: "GYSMO FLEX (גיסמו פלקס)",
    badge: "גמישות ועמידות לשבירה",
    badgeColor: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-300",
    x: 0.515,
    y: 3.5,
    yMin: null,
    basis: "powder",
    liquid: "מים",
    description: "פורמולה מיוחדת עם גמישות משופרת ועמידות גבוהה לנפילות ושברים. יחס 1:3.5.",
    packs: [
      [1, 67], [1.5, 91], [3, 180], [6, 313], [9, 456], [18, 865], [27, 1174], [36, 1390], [72, 2420]
    ],
    antiBreakageTips: [
      "החומר המוביל של גרייש לפריטים דקים או עדינים הנוטים להישבר.",
      "יחס עבודה 1 מים ל-3.5 אבקה - נותן חוזק מבני מרבי."
    ]
  },
  SAHARA: {
    id: 'SAHARA',
    label: "בטון פולימרי סהרה (Sahara)",
    badge: "אפקט אבן חמה טבעית",
    badgeColor: "bg-orange-100 text-orange-800 dark:bg-orange-900/60 dark:text-orange-300",
    x: 0.515,
    y: 3.5,
    yMin: null,
    basis: "powder",
    liquid: "מים",
    description: "בטון מוכן פולימרי בגוון חול מדברי חם ומרקם אבן טבעית. יחס 1 מים ל-3.5 אבקה.",
    packs: [
      [1.5, 99], [3, 168], [6, 335], [9, 470], [18, 938], [27, 1390], [36, 1650], [72, 3000]
    ],
    antiBreakageTips: [
      "מרקם סמיך ועשיר - מומלץ לרטוט היטב את התבנית למניעת חללי אוויר."
    ]
  },
  YELLOW: {
    id: 'YELLOW',
    label: "אבן ירושלמית (Jerusalem Stone)",
    badge: "טקסטורת אבן ירושלמית",
    badgeColor: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/60 dark:text-yellow-300",
    x: 0.515,
    y: 3.8,
    yMin: 3.5,
    basis: "powder",
    liquid: "מים",
    description: "מרקם אבן ירושלמית אותנטית. יחס 1 חלק מים ל-3.5 עד 3.8 חלקי אבקה.",
    packs: [
      [1.5, 93], [3, 186], [6, 367], [9, 507], [18, 940], [27, 1241], [36, 1479], [72, 2738], [100, 3485]
    ],
    antiBreakageTips: [
      "החישוב מבוסס על יחס עליון 3.8 כדי להבטיח דחיסות וחוזק מרביים."
    ]
  },
  MIRAGE: {
    id: 'MIRAGE',
    label: "מיראז׳ – אבן אפריקאית",
    badge: "גוון כהה ואבן טבעית",
    badgeColor: "bg-stone-200 text-stone-800 dark:bg-stone-800 dark:text-stone-300",
    x: 0.38,
    y: 3.5,
    yMin: null,
    basis: "powder",
    liquid: "מים",
    description: "בטון פולימרי כהה בטקסטורת אבן אפריקאית יוקרתית.",
    packs: [
      [1.5, 99], [3, 168], [6, 334], [9, 500], [18, 990], [27, 1125], [36, 1650], [72, 3000]
    ],
    antiBreakageTips: [
      "צריכת מים מופחתת במיוחד (מקדם 0.38) ליצירת חוזק פנימי מקסימלי."
    ]
  },
  KAMIN: {
    id: 'KAMIN',
    label: "שלג אבקת קמין",
    badge: "עמיד בחום",
    badgeColor: "bg-red-100 text-red-800 dark:bg-red-900/60 dark:text-red-300",
    x: 0.60,
    y: 3.0,
    yMin: null,
    basis: "powder",
    liquid: "מים",
    description: "אבקת יציקה עמידה בחום לקמינים, פמוטים וכלי אש. יחס 1 מים ל-3 אבקה.",
    packs: [
      [1.5, 77.7], [3, 145.95], [6, 277.2], [9, 396.9], [18, 761.25], [27, 1097.25], [36, 1412.25], [54, 2115.75], [72, 2814]
    ],
    antiBreakageTips: [
      "המתנה מלאה של 48 שעות לפני כל חשיפה לחום ראשוני."
    ]
  },
  NIKA: {
    id: 'NIKA',
    label: "NIKA A1 (גבס פולימרי דו-רכיבי)",
    badge: "נוזל אקרילי + אבקה",
    badgeColor: "bg-purple-100 text-purple-800 dark:bg-purple-900/60 dark:text-purple-300",
    x: 0.50,
    y: 2.6,
    yMin: null,
    basis: "system",
    liquid: "רכיב נוזלי",
    description: "מערכת דו-רכיבית (בסיס אבקה + נוזל אקרילי). מחלקים מים ב-2 ומכפילים ב-2.6.",
    packs: [
      [2, 95], [4, 180], [8, 335], [20, 820], [40, 1420]
    ],
    antiBreakageTips: [
      "שקלו את הנוזל האקרילי תחילה, הוסיפו אבקה ב-2 פעימות וערבבו 2 דקות."
    ]
  }
};

// מנהל המצב הראשי
class GrayishCalculatorState {
  constructor() {
    this.selectedMaterial = 'WHITE';
    this.inputMode = 'water_weight';
    this.waterWeightInMold = 265;
    this.units = 1;

    this.shape = 'oval';
    this.dimensions = {
      length: 18,
      width: 9.5,
      depth: 1.5,
      diameter: 10,
      ovalLength: 18,
      ovalWidth: 9.5,
      ovalDepth: 1.5,
      outerDiameter: 8.5,
      innerDiameter: 6.5,
      hollowDepth: 7.5,
      bottomThickness: 1.0
    };

    this.savedRecipes = this.loadSavedRecipes();
  }

  loadSavedRecipes() {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        const data = localStorage.getItem('grayish_recipes');
        return data ? JSON.parse(data) : [];
      }
    } catch (e) {
      console.warn('LocalStorage error', e);
    }
    return [];
  }

  saveRecipe(name) {
    const calc = this.calculate();
    const mat = GRAYISH_MATERIALS[this.selectedMaterial];
    const item = {
      id: Date.now().toString(),
      name: name || `${mat.label} - ${this.waterWeightInMold} גרם מים`,
      date: new Date().toLocaleDateString('he-IL', { day: 'numeric', month: 'numeric', hour: '2-digit', minute: '2-digit' }),
      material: this.selectedMaterial,
      materialLabel: mat.label,
      moldWaterWeight: calc.moldWaterWeight,
      units: this.units,
      results: calc
    };
    this.savedRecipes.unshift(item);
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem('grayish_recipes', JSON.stringify(this.savedRecipes));
      }
    } catch (e) {}
    return item;
  }

  deleteRecipe(id) {
    this.savedRecipes = this.savedRecipes.filter(r => r.id !== id);
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem('grayish_recipes', JSON.stringify(this.savedRecipes));
      }
    } catch (e) {}
  }

  calculateVolumeFromDimensions() {
    let vol = 0;
    switch (this.shape) {
      case 'rectangle': {
        const l = Math.max(0, parseFloat(this.dimensions.length) || 0);
        const w = Math.max(0, parseFloat(this.dimensions.width) || 0);
        const d = Math.max(0, parseFloat(this.dimensions.depth) || 0);
        vol = l * w * d;
        break;
      }
      case 'circle': {
        const dia = Math.max(0, parseFloat(this.dimensions.diameter) || 0);
        const r = dia / 2;
        const d = Math.max(0, parseFloat(this.dimensions.depth) || 0);
        vol = Math.PI * r * r * d;
        break;
      }
      case 'oval': {
        const l = Math.max(0, parseFloat(this.dimensions.ovalLength) || 0);
        const w = Math.max(0, parseFloat(this.dimensions.ovalWidth) || 0);
        const d = Math.max(0, parseFloat(this.dimensions.ovalDepth) || 0);
        vol = Math.PI * (l / 2) * (w / 2) * d;
        break;
      }
      default:
        vol = this.waterWeightInMold;
    }
    return Math.round(vol);
  }

  recommendPackage(needKg, packs) {
    if (!packs || packs.length === 0) return null;
    let best = null;
    for (let i = 0; i < packs.length; i++) {
      const packSize = packs[i][0];
      const packPrice = packs[i][1];
      const count = Math.max(1, Math.ceil(needKg / packSize));
      const cover = count * packSize;
      const cost = count * packPrice;
      const candidate = { count, packSize, packPrice, cover, cost };

      if (!best || candidate.cost < best.cost || 
         (candidate.cost === best.cost && candidate.cover < best.cover) ||
         (candidate.cost === best.cost && candidate.cover === best.cover && candidate.count < best.count)) {
        best = candidate;
      }
    }
    return best;
  }

  calculate() {
    const mat = GRAYISH_MATERIALS[this.selectedMaterial] || GRAYISH_MATERIALS.WHITE;
    let moldWaterWeight = parseFloat(this.waterWeightInMold) || 0;
    if (this.inputMode === 'dimensions') {
      moldWaterWeight = this.calculateVolumeFromDimensions();
    }

    const quantity = Math.max(1, parseInt(this.units, 10) || 1);

    const oneLiquid = moldWaterWeight * mat.x;
    const onePowder = oneLiquid * mat.y;

    const totalLiquid = oneLiquid * quantity;
    const totalPowder = onePowder * quantity;
    const totalMixOne = oneLiquid + onePowder;
    const totalMixAll = totalLiquid + totalPowder;

    const purchaseGrams = mat.basis === "system" ? totalPowder + totalLiquid : totalPowder;
    const recommendation = this.recommendPackage(purchaseGrams / 1000, mat.packs);

    return {
      material: mat,
      moldWaterWeight: Math.round(moldWaterWeight),
      quantity,
      oneLiquidGrams: Math.round(oneLiquid * 10) / 10,
      onePowderGrams: Math.round(onePowder * 10) / 10,
      oneLiquidWhole: Math.round(oneLiquid),
      onePowderWhole: Math.round(onePowder),
      totalMixOneWhole: Math.round(totalMixOne),
      totalLiquidGrams: Math.round(totalLiquid * 10) / 10,
      totalPowderGrams: Math.round(totalPowder * 10) / 10,
      totalLiquidWhole: Math.round(totalLiquid),
      totalPowderWhole: Math.round(totalPowder),
      totalMixAllWhole: Math.round(totalMixAll),
      ratioDescription: mat.basis === 'system'
        ? `1 חלק ${mat.liquid} ל-${mat.y} חלקי אבקה (מחלקים משקל מים ב-2 ומכפילים ב-${mat.y})`
        : mat.yMin 
          ? `1 חלק מים ל-${mat.yMin} עד ${mat.y} חלקי אבקה (מחושב לפי ${mat.y}:1)`
          : `1 חלק מים ל-${mat.y} חלקי אבקה (יחס 1:${mat.y})`,
      recommendation,
      antiBreakageTips: mat.antiBreakageTips
    };
  }
}

const grayishState = new GrayishCalculatorState();

document.addEventListener('DOMContentLoaded', () => {
  initGrayishMaterialList();
  initEventListeners();
  renderSavedRecipes();
  updateUI();
  if (window.lucide) lucide.createIcons();
});

// כרטיסי החומרים עם פונטים מוגדלים ונוחים לאייפון פרו מקס
function initGrayishMaterialList() {
  const container = document.getElementById('grayish-materials-grid');
  if (!container) return;

  container.innerHTML = Object.values(GRAYISH_MATERIALS).map(m => {
    const isSelected = m.id === grayishState.selectedMaterial;
    return `
      <div onclick="selectMaterial('${m.id}')" class="apple-glass-interactive p-5 rounded-2xl border-2 transition-all text-right ${
        isSelected
          ? 'border-teal-600 bg-teal-50/95 dark:bg-teal-950/60 dark:border-teal-400 shadow-lg ring-2 ring-teal-500/30'
          : 'border-slate-200/90 hover:border-teal-300 dark:border-slate-800 dark:hover:border-slate-700 bg-white/90 dark:bg-slate-900/90'
      }">
        <div class="flex items-center justify-between mb-2.5">
          <span class="text-sm font-extrabold px-3.5 py-1 rounded-full ${m.badgeColor}">${m.badge}</span>
          <div class="w-6 h-6 rounded-full border-2 flex items-center justify-center ${
            isSelected ? 'border-teal-600 bg-teal-600 dark:border-teal-400 dark:bg-teal-400' : 'border-slate-300 dark:border-slate-700'
          }">
            ${isSelected ? '<div class="w-2.5 h-2.5 rounded-full bg-white"></div>' : ''}
          </div>
        </div>
        <h3 class="font-black text-lg sm:text-xl text-slate-900 dark:text-white mb-2">${m.label}</h3>
        <p class="text-sm sm:text-base text-slate-600 dark:text-slate-300 mb-3.5 leading-relaxed font-medium">${m.description}</p>
        <div class="flex items-center justify-between text-sm sm:text-base text-slate-800 dark:text-slate-200 bg-slate-100/90 dark:bg-slate-800/90 px-3.5 py-2.5 rounded-xl font-bold">
          <span>יחס: <strong>1 ${m.liquid} : ${m.y} אבקה</strong></span>
          <span>מקדם: <strong>x=${m.x}</strong></span>
        </div>
      </div>
    `;
  }).join('');
}

window.selectMaterial = function(matId) {
  grayishState.selectedMaterial = matId;
  initGrayishMaterialList();
  updateUI();
};

function initEventListeners() {
  document.getElementById('mode-btn-water')?.addEventListener('click', () => {
    grayishState.inputMode = 'water_weight';
    toggleModeButtons('water');
    updateUI();
  });
  document.getElementById('mode-btn-dims')?.addEventListener('click', () => {
    grayishState.inputMode = 'dimensions';
    toggleModeButtons('dims');
    updateUI();
  });

  document.getElementById('water-weight-input')?.addEventListener('input', (e) => {
    grayishState.waterWeightInMold = Math.max(0, parseFloat(e.target.value) || 0);
    updateUI();
  });

  const unitsInp = document.getElementById('grayish-units-input');
  unitsInp?.addEventListener('input', (e) => {
    grayishState.units = Math.max(1, parseInt(e.target.value, 10) || 1);
    updateUI();
  });
  document.getElementById('units-minus-btn')?.addEventListener('click', () => {
    grayishState.units = Math.max(1, grayishState.units - 1);
    if (unitsInp) unitsInp.value = grayishState.units;
    updateUI();
  });
  document.getElementById('units-plus-btn')?.addEventListener('click', () => {
    grayishState.units += 1;
    if (unitsInp) unitsInp.value = grayishState.units;
    updateUI();
  });

  const bindDim = (id, prop) => {
    document.getElementById(id)?.addEventListener('input', (e) => {
      grayishState.dimensions[prop] = parseFloat(e.target.value) || 0;
      updateUI();
    });
  };
  bindDim('dim-rect-l', 'length');
  bindDim('dim-rect-w', 'width');
  bindDim('dim-rect-d', 'depth');
  bindDim('dim-circle-dia', 'diameter');
  bindDim('dim-circle-d', 'depth');
  bindDim('dim-oval-l', 'ovalLength');
  bindDim('dim-oval-w', 'ovalWidth');
  bindDim('dim-oval-d', 'ovalDepth');

  document.querySelectorAll('.dim-shape-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      grayishState.shape = btn.dataset.shape;
      document.querySelectorAll('.dim-shape-btn').forEach(b => b.classList.remove('active-dim-shape'));
      btn.classList.add('active-dim-shape');
      updateShapeDimVisibility();
      updateUI();
    });
  });

  document.getElementById('grayish-copy-btn')?.addEventListener('click', copyGrayishRecipe);
  document.getElementById('grayish-save-btn')?.addEventListener('click', saveGrayishRecipe);
}

function toggleModeButtons(mode) {
  const btnWater = document.getElementById('mode-btn-water');
  const btnDims = document.getElementById('mode-btn-dims');
  const boxWater = document.getElementById('box-water-input');
  const boxDims = document.getElementById('box-dims-input');

  if (mode === 'water') {
    btnWater.classList.add('active');
    btnDims.classList.remove('active');
    boxWater.classList.remove('hidden');
    boxDims.classList.add('hidden');
  } else {
    btnDims.classList.add('active');
    btnWater.classList.remove('active');
    boxDims.classList.remove('hidden');
    boxWater.classList.add('hidden');
  }
}

function updateShapeDimVisibility() {
  const shapes = ['rectangle', 'circle', 'oval'];
  shapes.forEach(s => {
    const el = document.getElementById(`dim-group-${s}`);
    if (el) el.classList.toggle('hidden', s !== grayishState.shape);
  });
}

function updateUI() {
  const res = grayishState.calculate();

  document.getElementById('res-mat-name').innerText = res.material.label;
  document.getElementById('res-ratio-summary').innerText = res.ratioDescription;

  // נתוני האבקה והמים נשמרים גדולים ובולטים כמו שביקש המשתמש
  document.getElementById('one-powder-display').innerText = `${res.onePowderWhole} גרם`;
  document.getElementById('one-liquid-display').innerText = `${res.oneLiquidWhole} גרם`;
  document.getElementById('one-liquid-label').innerText = res.material.liquid;
  document.getElementById('one-total-mix').innerText = `${res.totalMixOneWhole} גרם סה"כ לתבנית`;

  document.getElementById('total-powder-display').innerText = `${res.totalPowderWhole} גרם`;
  document.getElementById('total-liquid-display').innerText = `${res.totalLiquidWhole} גרם`;
  document.getElementById('total-liquid-label').innerText = `סך כל ה${res.material.liquid}`;
  document.getElementById('total-mix-all').innerText = `${res.totalMixAllWhole} גרם (${(res.totalMixAllWhole/1000).toFixed(2)} ק"ג)`;

  document.getElementById('res-water-measured').innerText = `${res.moldWaterWeight} גרם מים (${res.moldWaterWeight} סמ"ק)`;

  // Mobile quick summary bar
  const barPowder = document.getElementById('bar-powder');
  const barLiquid = document.getElementById('bar-liquid');
  const barTotal = document.getElementById('bar-total');
  if (barPowder) barPowder.innerText = `${res.totalPowderWhole}ג׳`;
  if (barLiquid) barLiquid.innerText = `${res.totalLiquidWhole}ג׳`;
  if (barTotal) barTotal.innerText = `סה״כ ${res.totalMixAllWhole}ג׳`;

  const recBox = document.getElementById('grayish-buy-box');
  if (recBox && res.recommendation) {
    const rec = res.recommendation;
    recBox.innerHTML = `
      <div class="p-5 apple-metric-card text-sm sm:text-base">
        <span class="text-xs sm:text-sm font-black text-amber-800 dark:text-amber-400 uppercase tracking-wide block mb-1.5">📦 המלצת אריזה מאתר גרייש:</span>
        <div class="flex items-center justify-between mt-1">
          <strong class="text-lg sm:text-xl text-slate-900 dark:text-white font-black">${rec.count} × אריזת ${rec.packSize} ק"ג (${rec.cover} ק"ג סה"כ)</strong>
          <span class="text-lg sm:text-xl font-black text-amber-700 dark:text-amber-400 font-rubik">₪${rec.cost}</span>
        </div>
        <p class="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-2 leading-relaxed font-medium">
          עבור פרויקט זה נדרשים כ-${(res.totalPowderWhole/1000).toFixed(2)} ק"ג אבקה. אריזה זו תספק את הכמות עם עודף ביטחון של ${(rec.cover - res.totalPowderWhole/1000).toFixed(2)} ק"ג.
        </p>
      </div>
    `;
  }

  // 4 כללי הברזל של גרייש מוגדלים וקריאים מאוד
  const tipsList = document.getElementById('grayish-tips-list');
  if (tipsList && res.antiBreakageTips) {
    tipsList.innerHTML = res.antiBreakageTips.map((tip, idx) => `
      <li class="flex items-start gap-3.5 text-base sm:text-lg text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
        <span class="w-7 h-7 rounded-full bg-teal-100 dark:bg-teal-900/60 text-teal-800 dark:text-teal-300 flex items-center justify-center font-black text-sm flex-shrink-0 mt-0.5">${idx+1}</span>
        <span>${tip}</span>
      </li>
    `).join('');
  }
}

function copyGrayishRecipe() {
  const res = grayishState.calculate();
  const text = `
📐 מתכון יציקה מדויק לפי מנוע גרייש (Grayish.co.il)
-----------------------------------------------
חומר: ${res.material.label}
מים שנכנסו לתבנית: ${res.moldWaterWeight} גרם
כמות תבניות: ${res.quantity} יחידות
יחס עבודה: ${res.ratioDescription}

⚖️ שקילה לתבנית אחת:
• ${res.material.liquid}: ${res.oneLiquidWhole} גרם
• אבקה: ${res.onePowderWhole} גרם
• סך הכל תערובת: ${res.totalMixOneWhole} גרם

📦 סך הכל לפרויקט (${res.quantity} תבניות):
• סך הכל ${res.material.liquid}: ${res.totalLiquidWhole} גרם
• סך הכל אבקה: ${res.totalPowderWhole} גרם
• סך הכל תערובת: ${res.totalMixAllWhole} גרם (${(res.totalMixAllWhole/1000).toFixed(2)} ק"ג)

💡 הנחיות גרייש למניעת שבירה:
1. שקלו מים קודם לקערה
2. הוסיפו אבקה בהדרגה וערבבו 2-3 דקות
3. המתינו 35-45 דקות לפחות לפני שליפה מהתבנית (עד שהיציקה קרה!)
4. ייבוש מלא 24-48 שעות לפני שימוש או שיוף
  `.trim();

  navigator.clipboard.writeText(text).then(() => {
    showToast('המתכון של גרייש הועתק ללוח בהצלחה! 📋');
  });
}

function saveGrayishRecipe() {
  const name = prompt('הזן שם למתכון זה:');
  if (name !== null) {
    grayishState.saveRecipe(name.trim());
    renderSavedRecipes();
    showToast('המתכון נשמר בהצלחה! ⭐');
  }
}

function renderSavedRecipes() {
  const container = document.getElementById('grayish-saved-recipes');
  if (!container) return;

  if (grayishState.savedRecipes.length === 0) {
    container.innerHTML = `<p class="text-base text-slate-400 py-3 text-center">אין מתכונים שמורים עדיין.</p>`;
    return;
  }

  container.innerHTML = grayishState.savedRecipes.map(r => `
    <div class="p-3.5 rounded-2xl bg-white/90 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 flex items-center justify-between text-base">
      <div>
        <strong class="text-slate-900 dark:text-white font-bold">${r.name}</strong>
        <div class="text-sm text-slate-500 mt-0.5">${r.materialLabel} • ${r.results.onePowderWhole}ג אבקה + ${r.results.oneLiquidWhole}ג מים</div>
      </div>
      <div class="flex items-center gap-2">
        <button onclick="loadRecipe('${r.id}')" class="px-3.5 py-1.5 bg-teal-50 dark:bg-teal-950 text-teal-700 dark:text-teal-300 font-bold rounded-xl hover:bg-teal-100 text-sm">טען ↺</button>
        <button onclick="deleteRecipe('${r.id}')" class="px-2.5 py-1.5 text-rose-500 hover:bg-rose-50 rounded-xl text-sm">✕</button>
      </div>
    </div>
  `).join('');
}

window.loadRecipe = function(id) {
  const r = grayishState.savedRecipes.find(x => x.id === id);
  if (!r) return;
  grayishState.selectedMaterial = r.material;
  grayishState.waterWeightInMold = r.moldWaterWeight;
  grayishState.units = r.units;
  const inp = document.getElementById('water-weight-input');
  if (inp) inp.value = r.moldWaterWeight;
  initGrayishMaterialList();
  updateUI();
  showToast(`המתכון "${r.name}" נטען!`);
};

window.deleteRecipe = function(id) {
  if (confirm('למחוק מתכון זה?')) {
    grayishState.deleteRecipe(id);
    renderSavedRecipes();
  }
};

function showToast(msg) {
  let toast = document.getElementById('grayish-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'grayish-toast';
    toast.className = 'fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-6 py-3.5 bg-slate-900 text-white text-base font-bold rounded-2xl shadow-2xl transition-all duration-300 opacity-0 pointer-events-none transform translate-y-3';
    document.body.appendChild(toast);
  }
  toast.innerText = msg;
  toast.classList.remove('opacity-0', 'translate-y-3', 'pointer-events-none');
  toast.classList.add('opacity-100', 'translate-y-0');
  setTimeout(() => {
    toast.classList.remove('opacity-100', 'translate-y-0');
    toast.classList.add('opacity-0', 'translate-y-3', 'pointer-events-none');
  }, 2500);
}
