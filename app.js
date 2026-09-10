/**
 * Keystone Global Workforce Solutions - Romania Sourcing Portal
 * Complete Interactive Application Logic & Multilingual Engine
 */

// ==========================================
// 1. DATA REPOSITORIES
// ==========================================

const CANDIDATES_DATA = [
  {
    id: "KGW-RO-2401",
    name: "Tariqul Islam",
    trade: "MIG / MAG 135/136 Welder",
    tradeRo: "Sudor MIG / MAG (135/136)",
    cor: "721208",
    sector: "construction",
    exp: "6 Years (3 yrs Gulf GCC Exp)",
    expRo: "6 Ani (3 ani exp. în Golf GCC)",
    ttc: "Dhaka Technical Teachers Training College",
    score: "96% (Grade A+)",
    lang: "English (B1) / Basic Romanian",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80",
    videoDuration: "03:45",
    videoTitle: "Pipe Joint 6G & Plate Butt Welding Test",
    videoSpecs: ["100% Penetration X-Ray Test Passed", "Slag Inclusion: Zero Defects", "WPS Compliant ISO 9606-1"]
  },
  {
    id: "KGW-RO-2402",
    name: "Mohammad Rasel",
    trade: "Steel Fixer & Rebar Fabricator",
    tradeRo: "Fierar Betonist & Montator Armături",
    cor: "711401",
    sector: "construction",
    exp: "5 Years (High-Rise Construction)",
    expRo: "5 Ani (Construcții civile & poduri)",
    ttc: "Gazipur Technical Training Center (TTC)",
    score: "94% (Grade A)",
    lang: "English (A2) / Basic Romanian",
    img: "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=600&q=80",
    videoDuration: "04:12",
    videoTitle: "Rebar Bending & Beam Binding Blueprint Test",
    videoSpecs: ["Tolerance: ±2mm Architectural Spec", "Tying Speed: 32 Knots/min", "Safety PPE: 100% Verified"]
  },
  {
    id: "KGW-RO-2403",
    name: "Shakil Ahmed",
    trade: "Forklift Operator / Stivuitorist",
    tradeRo: "Stivuitorist / Operator Logistic",
    cor: "834403",
    sector: "logistics",
    exp: "4 Years (Automated Fulfillment Center)",
    expRo: "4 Ani (Depozit logistic automatizat)",
    ttc: "Mirpur Bangladesh-Korea TTC",
    score: "98% (Grade A+)",
    lang: "English (B2 Proficient)",
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80",
    videoDuration: "02:50",
    videoTitle: "High-Bay Precision Stacking & Maneuverability Test",
    videoSpecs: ["Reach Height: 8.5m Multi-tier", "Speed vs Safety Test: Zero Collision", "ISPM-15 Pallet Handling"]
  },
  {
    id: "KGW-RO-2404",
    name: "Kamrul Hasan",
    trade: "Industrial Electrician (3-Phase)",
    tradeRo: "Electrician Industrial & Tablouri",
    cor: "741101",
    sector: "construction",
    exp: "7 Years (Industrial Plant & Substation)",
    expRo: "7 Ani (Instalații industriale & tablouri)",
    ttc: "Chittagong Government TTC",
    score: "95% (Grade A)",
    lang: "English (B1) / Basic Romanian",
    img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80",
    videoDuration: "04:30",
    videoTitle: "PLC Wiring, Cable Trays & Panel Commissioning",
    videoSpecs: ["Circuit Continuity: 100% Correct", "Megger Insulation Test: >100MΩ", "IEC Standard Color Coded"]
  },
  {
    id: "KGW-RO-2405",
    name: "Abdul Mannan",
    trade: "Commercial Chef / Line Cook",
    tradeRo: "Bucătar / Ajutor Bucătar",
    cor: "512001",
    sector: "hospitality",
    exp: "5 Years (Hotel & European Catering)",
    expRo: "5 Ani (Hoteluri 4* & Catering)",
    ttc: "National Hotel & Tourism Training Institute",
    score: "92% (Grade A)",
    lang: "English (B2 Fluent)",
    img: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=600&q=80",
    videoDuration: "03:15",
    videoTitle: "Continental Meat Prep, Hygiene & Fast-Paced Service",
    videoSpecs: ["HACCP Certification: Verified", "Knife Skills: Julienne / Brunoise", "English Kitchen Comms: Excellent"]
  },
  {
    id: "KGW-RO-2406",
    name: "Zahidul Karim",
    trade: "CNC Milling & Lathe Operator",
    tradeRo: "Operator Mașini-Unelte cu Comandă Numerică",
    cor: "722308",
    sector: "manufacturing",
    exp: "6 Years (Precision Automotive Parts)",
    expRo: "6 Ani (Piese auto de precizie)",
    ttc: "Faridpur Technical Training Center",
    score: "97% (Grade A+)",
    lang: "English (B1) / Tech German basics",
    img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80",
    videoDuration: "05:10",
    videoTitle: "G-Code Calibration & 5-Axis Precision Machining",
    videoSpecs: ["Tolerance Level: ±0.005mm", "Tool Wear Compensation: Passed", "Fanuc / Siemens Controller Certified"]
  }
];

const COR_OCCUPATIONS_DATABASE = [
  { cor: "721208", roTitle: "Sudor manual cu arc electric / MIG-MAG", enTitle: "Manual Electric Arc / MIG-MAG Welder", sector: "Construction / Heavy Industry", grossRon: "4,200 - 6,500 RON", leadDays: "7 Days" },
  { cor: "711401", roTitle: "Fierar betonist", enTitle: "Steel Fixer / Rebar Worker", sector: "Civil Infrastructure & High-Rise", grossRon: "4,000 - 5,800 RON", leadDays: "5 Days" },
  { cor: "711501", roTitle: "Dulgher restaurator / Cofrajor", enTitle: "Formwork Carpenter / Joiner", sector: "Civil Construction", grossRon: "4,000 - 5,500 RON", leadDays: "5 Days" },
  { cor: "711205", roTitle: "Zidar / Tencuitor", enTitle: "Mason / Plasterer", sector: "Construction & Finishing", grossRon: "3,800 - 5,200 RON", leadDays: "5 Days" },
  { cor: "741101", roTitle: "Electrician în construcții și instalații", enTitle: "Building & Industrial Electrician", sector: "MEP & Electrical", grossRon: "4,500 - 6,800 RON", leadDays: "7 Days" },
  { cor: "712601", roTitle: "Instalator apă, canal și gaze", enTitle: "Plumber & HVAC Pipe Fitter", sector: "MEP Installations", grossRon: "4,200 - 6,000 RON", leadDays: "6 Days" },
  { cor: "834403", roTitle: "Stivuitorist / Conducător utilaje logistice", enTitle: "Forklift Operator / Warehouse Stacker", sector: "Logistics & Supply Chain", grossRon: "3,800 - 5,000 RON", leadDays: "5 Days" },
  { cor: "933303", roTitle: "Manipulant mărfuri / Ambalator", enTitle: "Warehouse Freight Handler / Packer", sector: "E-Commerce & 3PL Logistics", grossRon: "3,500 - 4,500 RON", leadDays: "3 Days" },
  { cor: "512001", roTitle: "Bucătar / Ajutor bucătar", enTitle: "Chef / Line Cook / Kitchen Hand", sector: "Hospitality & HoReCa", grossRon: "3,800 - 6,000 RON", leadDays: "7 Days" },
  { cor: "515301", roTitle: "Lucrător hotelier / Cameristă", enTitle: "Housekeeper / Hotel Room Attendant", sector: "Hospitality & Tourism", grossRon: "3,500 - 4,200 RON", leadDays: "4 Days" },
  { cor: "722308", roTitle: "Operator mașini-unelte CNC", enTitle: "CNC Machine Operator", sector: "Automotive & Precision Eng.", grossRon: "4,800 - 7,200 RON", leadDays: "8 Days" },
  { cor: "815201", roTitle: "Confecționer îmbrăcăminte / Cusător industrial", enTitle: "Industrial Sewing Machine Operator", sector: "Textile & Garment", grossRon: "3,500 - 4,600 RON", leadDays: "4 Days" },
  { cor: "611101", roTitle: "Muncitor necalificat în agricultură și sere", enTitle: "Greenhouse & Agricultural Worker", sector: "Agri-Business & Farming", grossRon: "3,500 - 4,200 RON", leadDays: "3 Days" }
];

const DOC_STEPS_DATA = [
  {
    step: 1,
    title: "10-Year e-Passport & Biometrics",
    titleRo: "Pașaport Electronic 10 Ani & Verificare Biometrică",
    sla: "24-48 Hours",
    status: "100% Pre-Screened",
    desc: "Every candidate holds an authentic machine-readable Bangladesh 10-year e-Passport with minimum 3.5 years remaining validity. Fully scanned and cross-referenced with national ID database.",
    descRo: "Fiecare candidat deține un pașaport biometric valid minim 3.5 ani, scanat și verificat direct în baza de date națională.",
    checklist: ["Min. 3.5 years validity", "Clean immigration history", "ICAO compliant high-res scan", "National ID verified"],
    sampleName: "e-Passport Biometric Scan Dossier",
    igiReady: "Required for IGI Portal Account & Permit Filing"
  },
  {
    step: 2,
    title: "Clean Police Clearance + MOFA Stamp",
    titleRo: "Cazier Judiciar Curat + Apostilare/Legalizare MAE",
    sla: "3-5 Working Days",
    status: "Ministry Legalized",
    desc: "Official Certificate of Good Conduct issued by Bangladesh Police Headquarters, translated into English, and certified with official stamp and QR verification by the Ministry of Foreign Affairs (MOFA).",
    descRo: "Certificat de cazier judiciar emis de Poliție, tradus în limba engleză și legalizat cu timbru oficial și cod QR de către Ministerul Afacerilor Externe (MOFA).",
    checklist: ["Zero criminal convictions", "MOFA Bangladesh QR verification", "English sworn translation", "Valid for 6 months"],
    sampleName: "Police Clearance MOFA Legalized PDF",
    igiReady: "Mandatory for Romanian Work Visa (D/AM)"
  },
  {
    step: 3,
    title: "Certified Fit-to-Work Medical Clearance",
    titleRo: "Control Medical Complet 'Apt de Muncă'",
    sla: "48 Hours",
    status: "Clinic Certified",
    desc: "Rigorous medical examination at government and embassy-approved diagnostic centers. Complete blood screening, infectious disease check, drug panel, and physical capability clearance.",
    descRo: "Examinare medicală riguroasă la clinici acreditate: radiografie pulmonară, hepatite B/C, HIV, VDRL, teste toxicologice și adeverință clinică de efort.",
    checklist: ["Chest X-Ray (Tuberculosis clear)", "Hepatitis B & C / HIV / VDRL negative", "Urine Drug Screen (5-Panel)", "Color Blindness & Audiometry test"],
    sampleName: "Full Medical Diagnostic Report PDF",
    igiReady: "Required by Romanian Employers & Labour Inspection"
  },
  {
    step: 4,
    title: "COR-Aligned Europass CV & Translation",
    titleRo: "CV Europass Aliniat la Codurile COR din România",
    sla: "24 Hours",
    status: "Standardized",
    desc: "Standardized European Format CV tailored to Romanian COR job classifications. Includes trade certifications, past overseas employment records, language scores, and candidate video link.",
    descRo: "CV format european standardizat, aliniat la Clasificarea Ocupațiilor din România (COR), cu certificate profesionale, istoric de muncă și link video QR.",
    checklist: ["Standard Europass format", "Exact Romanian COR Code", "Verified prior experience references", "Embedded video audition QR"],
    sampleName: "Official Europass CV Template",
    igiReady: "Required for IGI Work Permit File"
  },
  {
    step: 5,
    title: "4K Trade Skill Test Video + QR Stamping",
    titleRo: "Proba Video de Lucru 4K + Ștampilă QR pe Dosar",
    sla: "Recorded at TTC",
    status: "Practical Proof",
    desc: "Live, uncut 4K video recording of practical trade examination supervised by certified TTC instructors. Stamped with candidate ID and dynamic QR code on the physical CV for one-click HR review.",
    descRo: "Înregistrare video 4K a probei practice efectuate în atelierele TTC sub supravegherea instructorilor autorizați. Accesibilă instant prin cod QR.",
    checklist: ["Uncut continuous recording", "Technical measurement checks", "PPE & safety adherence", "English spoken intro"],
    sampleName: "4K Trade Audition Video Link",
    igiReady: "Decisive for Romanian Employer Approval"
  },
  {
    step: 6,
    title: "Single Permit Dossier (Aviz de Muncă Ready)",
    titleRo: "Dosar Complet pentru Aviz de Muncă (IGI)",
    sla: "Instant Digital Dispatch",
    status: "IGI-Format Compliant",
    desc: "Complete digital archive structured specifically for upload to the Romanian IGI immigration portal. All files indexed, compressed, and titled according to Romanian immigration standards.",
    descRo: "Arhivă digitală completă structurată pentru încărcare imediată pe portalul IGI: documente indexate, traduse și pregătite conform normelor legale.",
    checklist: ["1-Click zip download for IGI portal", "Bilingual naming convention", "Contract draft & declaration", "Zero missing attachments"],
    sampleName: "Complete IGI Submission Package",
    igiReady: "100% Turnkey for Romanian Agency Staff"
  },
  {
    step: 7,
    title: "BMET Smart Card Emigration Clearance",
    titleRo: "Aviz de Emigrare Legală BMET Smart Card",
    sla: "Post-Visa (3 Days)",
    status: "Government Cleared",
    desc: "Final clearance by the Bangladesh Bureau of Manpower, Employment and Training (BMET). Includes mandatory briefing, government insurance registration, and biometric Smart Card issuance for legal departure.",
    descRo: "Aprobare finală de emigrare legală eliberată de Ministerul Muncii din Bangladesh (BMET). Include asigurare obligatorie și Card Inteligent Biometric.",
    checklist: ["BMET pre-departure briefing", "Mandatory expat insurance", "Biometric airport immigration pass", "100% legal departure guaranteed"],
    sampleName: "BMET Emigration Smart Card Clearance",
    igiReady: "Ensures Zero Airport Offloading or Legal Delays"
  }
];

// ==========================================
// 2. MULTILINGUAL DICTIONARY (EN / RO)
// ==========================================

const TRANSLATIONS = {
  en: {
    navSolutions: "Compliance & Solutions",
    navDocs: "7-Step Document Hub",
    navShowroom: "Candidate Showroom",
    navOccupations: "Deficit Occupations (COR)",
    navCalc: "Timeline Calculator",
    navPortalBtn: "Agency Client Portal",
    navContactBtn: "Request Pilot Cohort",
    heroBadge: "Official Sourcing Partner for Romanian R.A.P.S. Agencies",
    heroTitlePrefix: "Direct Technical Sourcing &",
    heroTitleHighlight: "100% Document-Compliant",
    heroTitleSuffix: "Partner in Bangladesh",
    heroSubtitle: "Keystone Global Workforce provides vetted technical craftsmen from Bangladesh's top Government Technical Training Centers (TTCs). We prepare every document with zero errors for fast Romanian IGI Work Permit (Aviz de Muncă) issuance.",
    heroCtaShowroom: "Inspect Candidate Video CVs",
    heroCtaPortal: "Enter Agency Portal Demo",
    statScreened: "Skilled Craftsmen Screened",
    statTtc: "Government TTC Partners",
    statVisa: "Consular Visa Approval Rate",
    statSla: "Average Candidate Shortlist SLA",
    whyTag: "The Anti-Middleman Standard",
    whyTitle: "Why Romanian Agencies Choose Keystone",
    whySubtitle: "We eliminate rogue middlemen and fake papers with our institutional, transparent pipeline backed by Keystone Education Consultancy.",
    compBadTitle: "Traditional Unregulated Brokers",
    compGoodTitle: "Keystone Institutional Sourcing",
    docTag: "Zero-Rejection Protocol",
    docTitle: "The 7-Step End-to-End Document Preparation Lifecycle",
    docSubtitle: "Every candidate arrives with a complete, legalized dossier ready for immediate submission to Inspectoratul General pentru Imigrări (IGI).",
    showTag: "Verified Talent Pool",
    showTitle: "Live Candidate Showroom & Video Auditions",
    showSubtitle: "Browse pre-screened technical workers with authenticated trade test video links and COR codes.",
    corTag: "Market Shortage Alignment",
    corTitle: "Romanian Deficit Occupations Explorer",
    corSubtitle: "Directly aligned with official shortage occupational lists from workinromania.gov.ro.",
    calcTag: "Estimate Lead Times",
    calcTitle: "B2B Quota & Timeline Calculator",
    calcSubtitle: "Calculate deployment milestones for your client orders in Romania.",
    portalDemoTag: "Exclusive B2B Tech",
    portalDemoTitle: "Interactive R.A.P.S. Agency Client Portal Demo",
    portalDemoSubtitle: "Romanian agencies get dedicated access to candidate video auditions, live MOFA status trackers, and one-click bulk document downloads.",
    contactTag: "Start a Risk-Free Pilot",
    contactTitle: "Request a 5-10 Worker Pilot Cohort",
    contactSubtitle: "Partner with Keystone today. Zero upfront sourcing fees for accredited Romanian recruitment agencies. Test our quality on your next hiring wave.",
    formName: "Your Full Name",
    formCompany: "Romanian Agency / Employer Name",
    formEmail: "Corporate Email Address",
    formPhone: "Phone / WhatsApp Number",
    formRaps: "R.A.P.S. License Number (Optional)",
    formTrade: "Required Trade / Occupation",
    formCount: "Number of Workers Needed",
    formMsg: "Specific Job Requirements or Questions",
    formSubmit: "Submit Pilot Cohort Request",
    guaranteeTitle: "Our 90-Day Free Replacement Warranty",
    guaranteeDesc: "If any deployed worker fails to meet on-site trade standards or departs within 90 days of arrival, Keystone will source, document, and deploy a qualified replacement at zero agency sourcing fee.",
    footerText: "Keystone Global Workforce Solutions — A Division of Keystone Education Consultancy.",
    footerAddress: "Rajendrapur Bazar, Gazipur, Dhaka Division, Bangladesh."
  },
  ro: {
    navSolutions: "Soluții & Conformitate",
    navDocs: "Hub 7 Pași Documente",
    navShowroom: "Catalog Candidați",
    navOccupations: "Ocupații Deficitare (COR)",
    navCalc: "Calculator Termene",
    navPortalBtn: "Portal Agenții RAPS",
    navContactBtn: "Solicită Cohortă Pilot",
    heroBadge: "Partener Oficial de Recrutare pentru Agenții R.A.P.S. din România",
    heroTitlePrefix: "Recrutare Tehnică Directă &",
    heroTitleHighlight: "100% Conformitate Documente",
    heroTitleSuffix: "în Bangladesh",
    heroSubtitle: "Keystone Global Workforce livrează muncitori calificați și testați practic în Centrele Guvernamentale de Instruire Tehnică (TTC) din Bangladesh. Pregătim dosarele complete fără erori pentru emiterea rapidă a Avizului de Muncă (IGI).",
    heroCtaShowroom: "Vezi Probele Video ale Candidaților",
    heroCtaPortal: "Accesează Demo Portal Agenții",
    statScreened: "Muncitori Calificați Preselectați",
    statTtc: "Centre Guvernamentale TTC Partenere",
    statVisa: "Rată de Aprobare Vize Consulat",
    statSla: "Timp Mediu Preselecție Candidați",
    whyTag: "Standardul Fără Intermediari",
    whyTitle: "De Ce Agențiile din România Aleg Keystone",
    whySubtitle: "Eliminăm samsarii și dosarele cu acte false printr-un flux instituțional direct, susținut de infrastructura Keystone Education Consultancy.",
    compBadTitle: "Samsari & Intermediari Neautorizați",
    compGoodTitle: "Keystone Sourcing Instituțional",
    docTag: "Protocol Fără Respingeri",
    docTitle: "Ciclul de Viață al Pregătirii Documentelor în 7 Pași",
    docSubtitle: "Fiecare candidat sosește cu dosarul complet legalizat, tradus și pregătit pentru depunerea pe portalul Inspectoratului General pentru Imigrări (IGI).",
    showTag: "Bază de Date Candidați Votați",
    showTitle: "Catalog Candidați & Probe Video Practice",
    showSubtitle: "Explorează profilurile muncitorilor calificați cu probe video 4K de atelier și coduri oficiale COR.",
    corTag: "Aliniere Piață Muncă",
    corTitle: "Explorator Ocupații Deficitare (COR România)",
    corSubtitle: "Actualizat conform listelor oficiale de deficit de pe portalul workinromania.gov.ro.",
    calcTag: "Estimează Termenele",
    calcTitle: "Calculator B2B Cote & Termene de Sosire",
    calcSubtitle: "Calculează etapele și termenele de sosire pentru proiectele tale de recrutare în România.",
    portalDemoTag: "Tehnologie B2B Exclusivă",
    portalDemoTitle: "Demo Interactiv Portal Clienți & Agenții R.A.P.S.",
    portalDemoSubtitle: "Agențiile din România primesc acces dedicat la probele video ale candidaților, urmărirea în timp real a legalizărilor MAE și descărcarea dosarelor complete IGI într-un singur clic.",
    contactTag: "Începe un Parteneriat Fără Risc",
    contactTitle: "Solicită o Cohortă Pilot de 5-10 Muncitori",
    contactSubtitle: "Fără comisioane în avans pentru agențiile licențiate din România. Testează calitatea selecției și viteza noastră de documentare la următoarea ta comandă.",
    formName: "Nume și Prenume",
    formCompany: "Nume Companie / Agenție România",
    formEmail: "Adresă Email Corporativă",
    formPhone: "Număr Telefon / WhatsApp",
    formRaps: "Număr Licență R.A.P.S. (Opțional)",
    formTrade: "Meseria / Ocupația Solicitată",
    formCount: "Număr Muncitori Nevoie",
    formMsg: "Specificații Tehnice sau Întrebări",
    formSubmit: "Trimite Solicitarea de Cohortă Pilot",
    guaranteeTitle: "Garanție 90 de Zile Înlocuire Gratuită",
    guaranteeDesc: "Dacă un muncitor plasat nu corespunde cerințelor la fața locului sau părăsește postul în primele 90 de zile, Keystone furnizează un înlocuitor testat fără niciun comision suplimentar de recrutare.",
    footerText: "Keystone Global Workforce Solutions — Divizie a Keystone Education Consultancy.",
    footerAddress: "Rajendrapur Bazar, Gazipur, Divizia Dhaka, Bangladesh."
  }
};

let currentLang = 'ro';

// ==========================================
// 3. INITIALIZATION & DOM RENDERING
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
  initLanguageSwitcher();
  setLanguage('ro');
  renderDocumentSteps(0);
  renderCandidateCards('all');
  renderCorTable();
  initCalculator();
  initModals();
  initContactForm();
});

// ------------------------------------------
// Language Switcher Engine
// ------------------------------------------
function initLanguageSwitcher() {
  const btnEn = document.getElementById('lang-en');
  const btnRo = document.getElementById('lang-ro');

  if (btnEn && btnRo) {
    btnEn.addEventListener('click', () => setLanguage('en'));
    btnRo.addEventListener('click', () => setLanguage('ro'));
  }
}

function setLanguage(lang) {
  currentLang = lang;
  const dict = TRANSLATIONS[lang];

  // Update button active state
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
  const activeBtn = document.getElementById(`lang-${lang}`);
  if (activeBtn) activeBtn.classList.add('active');

  // Replace text for all data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  // Re-render language-dependent components
  renderCandidateCards(activeShowroomFilter);
  renderCorTable();
  renderDocumentSteps(activeDocStepIndex);
  updateCalculator();
}

// ------------------------------------------
// 7-Step Document Lifecycle Hub
// ------------------------------------------
let activeDocStepIndex = 0;

function renderDocumentSteps(index) {
  activeDocStepIndex = index;
  const step = DOC_STEPS_DATA[index];
  const navContainer = document.getElementById('doc-nav-list');
  const previewPanel = document.getElementById('doc-preview-panel');

  if (!navContainer || !previewPanel) return;

  // Render Left Navigation List
  navContainer.innerHTML = DOC_STEPS_DATA.map((item, idx) => `
    <button class="doc-nav-item ${idx === index ? 'active' : ''}" onclick="renderDocumentSteps(${idx})">
      <div class="doc-step-num">${item.step}</div>
      <div class="doc-nav-text">
        <h4>${currentLang === 'ro' ? item.titleRo : item.title}</h4>
        <span>SLA: ${item.sla} • <strong class="text-emerald">${item.status}</strong></span>
      </div>
    </button>
  `).join('');

  // Render Right Detail Card
  previewPanel.innerHTML = `
    <div class="doc-panel-header">
      <div>
        <span class="badge badge-blue mb-2">Step ${step.step} of 7 • ${step.status}</span>
        <h3 class="text-xl md:text-2xl font-bold mt-1 text-white">${currentLang === 'ro' ? step.titleRo : step.title}</h3>
        <p class="text-sm text-dim mt-1">${step.igiReady}</p>
      </div>
      <div class="text-right">
        <span class="badge badge-amber">SLA: ${step.sla}</span>
      </div>
    </div>

    <p class="text-muted text-base mb-6">${currentLang === 'ro' ? step.descRo : step.desc}</p>

    <div class="doc-detail-grid">
      <div class="doc-box">
        <h5>${currentLang === 'ro' ? 'Verificări Cheie & Standarde' : 'Key Compliance Verifications'}</h5>
        <ul>
          ${step.checklist.map(chk => `
            <li>
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
              ${chk}
            </li>
          `).join('')}
        </ul>
      </div>

      <div class="doc-box">
        <h5>${currentLang === 'ro' ? 'Format Livrare pentru Agenție' : 'Agency Handover Format'}</h5>
        <div class="flex items-center gap-3 p-3 bg-slate-900/60 rounded border border-slate-700/50">
          <div class="w-10 h-10 rounded bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-sm">
            PDF
          </div>
          <div>
            <div class="text-sm font-semibold text-white">${step.sampleName}</div>
            <div class="text-xs text-dim">Encrypted & Certified Digital File</div>
          </div>
        </div>
        <button class="btn btn-secondary btn-sm w-full mt-3" onclick="showToast('${currentLang === 'ro' ? 'Mostră document descărcată pentru inspectare' : 'Sample document preview generated'}')">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
          ${currentLang === 'ro' ? 'Vizualizează Mostră Document' : 'Preview Document Template'}
        </button>
      </div>
    </div>

    <div class="p-4 rounded-lg bg-blue-900/20 border border-blue-500/30 flex items-center justify-between flex-wrap gap-3">
      <div class="flex items-center gap-2">
        <svg class="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        <span class="text-sm text-slate-200 font-medium">${currentLang === 'ro' ? 'Verificare 100% conformitate IGI & Consulat' : '100% IGI & Romanian Consulate Compliance Guarantee'}</span>
      </div>
      <button class="btn btn-primary btn-sm" onclick="openPortalModal()">
        ${currentLang === 'ro' ? 'Deschide Dosar în Portal' : 'Open in Agency Portal'}
      </button>
    </div>
  `;
}

// ------------------------------------------
// Candidate Showroom & Video Audition
// ------------------------------------------
let activeShowroomFilter = 'all';

function filterCandidates(category) {
  activeShowroomFilter = category;
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-filter') === category);
  });
  renderCandidateCards(category);
}

function renderCandidateCards(filter) {
  const container = document.getElementById('candidates-grid');
  if (!container) return;

  const filtered = filter === 'all' 
    ? CANDIDATES_DATA 
    : CANDIDATES_DATA.filter(c => c.sector === filter);

  container.innerHTML = filtered.map(c => `
    <div class="candidate-card">
      <div class="cand-media-wrap">
        <img src="${c.img}" alt="${c.name}" class="cand-img" loading="lazy" />
        <div class="cand-top-badges">
          <span class="badge badge-blue">COR ${c.cor}</span>
          <span class="badge badge-amber">★ ${c.score}</span>
        </div>
        <button class="cand-overlay-btn" onclick="openVideoModal('${c.id}')" title="Watch Practical Trade Test Video">
          <svg class="w-6 h-6 ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
        </button>
      </div>

      <div class="cand-body">
        <div class="cand-header">
          <div class="cand-name-row">
            <h4 class="cand-name">${c.name}</h4>
            <span class="cand-id">${c.id}</span>
          </div>
          <div class="cand-trade">${currentLang === 'ro' ? c.tradeRo : c.trade}</div>
        </div>

        <div class="cand-specs-list">
          <div class="cand-spec-item">
            <span class="cand-spec-lbl">${currentLang === 'ro' ? 'Experiență' : 'Experience'}</span>
            <span class="cand-spec-val">${currentLang === 'ro' ? c.expRo : c.exp}</span>
          </div>
          <div class="cand-spec-item">
            <span class="cand-spec-lbl">${currentLang === 'ro' ? 'Limbi Vorbite' : 'Languages'}</span>
            <span class="cand-spec-val">${c.lang}</span>
          </div>
          <div class="cand-spec-item col-span-2">
            <span class="cand-spec-lbl">${currentLang === 'ro' ? 'Centru TTC Acreditat' : 'TTC Training Center'}</span>
            <span class="cand-spec-val text-xs text-blue-300 truncate">${c.ttc}</span>
          </div>
        </div>

        <div class="cand-actions">
          <button class="btn btn-secondary btn-sm" onclick="openVideoModal('${c.id}')">
            <svg class="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
            ${currentLang === 'ro' ? 'Probă Video' : 'Video Test'}
          </button>
          <button class="btn btn-primary btn-sm" onclick="downloadEuropass('${c.id}')">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
            ${currentLang === 'ro' ? 'CV Europass' : 'Europass CV'}
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

// ------------------------------------------
// Video Audition Player Modal
// ------------------------------------------
function openVideoModal(candId) {
  const c = CANDIDATES_DATA.find(item => item.id === candId);
  if (!c) return;

  const modalBody = document.getElementById('video-modal-content');
  if (!modalBody) return;

  modalBody.innerHTML = `
    <div class="p-6">
      <div class="flex items-center justify-between pb-4 mb-4 border-b border-slate-700/60">
        <div>
          <span class="badge badge-emerald mb-1">Authenticated TTC Trade Test</span>
          <h3 class="text-xl font-bold text-white">${c.name} — ${currentLang === 'ro' ? c.tradeRo : c.trade}</h3>
          <p class="text-sm text-slate-400">COR: ${c.cor} • ID: ${c.id} • Training Center: ${c.ttc}</p>
        </div>
      </div>

      <!-- Simulated 4K Video Player -->
      <div class="relative w-full aspect-video bg-black rounded-lg overflow-hidden border border-slate-700 shadow-2xl flex items-center justify-center group mb-4">
        <img src="${c.img}" alt="Video Backdrop" class="w-full h-full object-cover opacity-40 filter blur-xs" />
        
        <!-- Video Simulation UI Elements -->
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 flex flex-col justify-between p-4">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2">
              <span class="px-2 py-0.5 text-xs font-bold bg-red-600 text-white rounded">REC • 4K 60FPS</span>
              <span class="text-xs text-slate-300 font-mono">TTC Workshop Cam 02</span>
            </div>
            <span class="text-xs font-mono bg-black/60 px-2 py-1 rounded text-emerald-400">QR-VERIFIED #99281</span>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 rounded-full bg-blue-600/90 text-white flex items-center justify-center mx-auto mb-2 shadow-lg border-2 border-white/80 cursor-pointer hover:scale-110 transition">
              <svg class="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
            </div>
            <p class="text-white font-semibold text-sm">${c.videoTitle}</p>
            <p class="text-xs text-slate-300">Duration: ${c.videoDuration} • Live Instructor Assessment</p>
          </div>

          <div class="flex items-center justify-between text-xs text-slate-400 font-mono">
            <span>00:00 / ${c.videoDuration}</span>
            <div class="flex-grow mx-4 h-1 bg-slate-700 rounded overflow-hidden">
              <div class="h-full bg-blue-500 w-1/3"></div>
            </div>
            <span>1080p HD</span>
          </div>
        </div>
      </div>

      <!-- Video Assessment Breakdown -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 bg-slate-900/70 p-4 rounded-lg border border-slate-800 mb-6">
        <div>
          <h5 class="text-xs uppercase font-bold text-amber-400 mb-2">Technical Skill Metrics</h5>
          <ul class="text-xs text-slate-300 space-y-1.5">
            ${c.videoSpecs.map(s => `<li class="flex items-center gap-1.5"><span class="text-emerald-400 font-bold">✓</span> ${s}</li>`).join('')}
          </ul>
        </div>
        <div>
          <h5 class="text-xs uppercase font-bold text-blue-400 mb-2">Instructor Remarks & Rating</h5>
          <p class="text-xs text-slate-300">
            "Candidate demonstrates strong safety discipline, precise tool handling, and clear understanding of European fabrication standards."
          </p>
          <div class="mt-2 text-xs font-semibold text-emerald-400">Score: ${c.score} — Ready for immediate IGI deployment.</div>
        </div>
      </div>

      <div class="flex items-center justify-end gap-3">
        <button class="btn btn-secondary btn-sm" onclick="closeModal('video-modal')">Close</button>
        <button class="btn btn-primary btn-sm" onclick="downloadEuropass('${c.id}')">Download Dossier & QR Stamped CV</button>
      </div>
    </div>
  `;

  openModal('video-modal');
}

function downloadEuropass(candId) {
  showToast(currentLang === 'ro' 
    ? `CV Europass descărcat pentru candidatul #${candId}` 
    : `Europass CV + Video QR downloaded for Candidate #${candId}`);
}

// ------------------------------------------
// Deficit Occupations Explorer (COR)
// ------------------------------------------
function renderCorTable(filterText = '', sectorFilter = 'all') {
  const tbody = document.getElementById('cor-table-body');
  if (!tbody) return;

  const filtered = COR_OCCUPATIONS_DATABASE.filter(item => {
    const textMatch = !filterText || 
      item.cor.toLowerCase().includes(filterText.toLowerCase()) ||
      item.roTitle.toLowerCase().includes(filterText.toLowerCase()) ||
      item.enTitle.toLowerCase().includes(filterText.toLowerCase());
    
    const sectorMatch = sectorFilter === 'all' || item.sector.toLowerCase().includes(sectorFilter.toLowerCase());
    return textMatch && sectorMatch;
  });

  tbody.innerHTML = filtered.map(item => `
    <tr>
      <td class="font-mono font-bold text-blue-400">${item.cor}</td>
      <td>
        <div class="font-semibold text-white">${currentLang === 'ro' ? item.roTitle : item.enTitle}</div>
        <div class="text-xs text-dim">${currentLang === 'ro' ? item.enTitle : item.roTitle}</div>
      </td>
      <td><span class="badge badge-blue">${item.sector}</span></td>
      <td class="font-medium text-amber-400">${item.grossRon}</td>
      <td><span class="badge badge-emerald">~${item.leadDays}</span></td>
      <td>
        <button class="btn btn-secondary btn-sm" onclick="prefillQuotaTrade('${item.roTitle}')">
          ${currentLang === 'ro' ? 'Selectează' : 'Select'}
        </button>
      </td>
    </tr>
  `).join('');
}

function filterCorSearch() {
  const text = document.getElementById('cor-search-input')?.value || '';
  const sector = document.getElementById('cor-sector-select')?.value || 'all';
  renderCorTable(text, sector);
}

// ------------------------------------------
// B2B Quota & Timeline Calculator
// ------------------------------------------
function initCalculator() {
  const slider = document.getElementById('calc-workers-slider');
  const tradeSelect = document.getElementById('calc-trade-select');
  const citySelect = document.getElementById('calc-city-select');

  if (slider) slider.addEventListener('input', updateCalculator);
  if (tradeSelect) tradeSelect.addEventListener('change', updateCalculator);
  if (citySelect) citySelect.addEventListener('change', updateCalculator);

  updateCalculator();
}

function updateCalculator() {
  const slider = document.getElementById('calc-workers-slider');
  const countBadge = document.getElementById('calc-workers-count');
  const count = slider ? parseInt(slider.value, 10) : 10;

  if (countBadge) countBadge.textContent = `${count} ${currentLang === 'ro' ? 'Muncitori' : 'Workers'}`;

  // Milestones Timeline
  const shortlistDays = count <= 15 ? 7 : (count <= 50 ? 12 : 18);
  const mofaDays = 5;
  const igiEstimate = 45; // Standard IGI Aviz issuance in Romania
  const visaDays = 14;
  const totalDays = shortlistDays + mofaDays + igiEstimate + visaDays;

  const totalDaysEl = document.getElementById('calc-total-days');
  const shortDaysEl = document.getElementById('calc-shortlist-days');
  const mofaDaysEl = document.getElementById('calc-mofa-days');
  const igiDaysEl = document.getElementById('calc-igi-days');
  const visaDaysEl = document.getElementById('calc-visa-days');

  if (totalDaysEl) totalDaysEl.textContent = `~${totalDays} Days (${Math.round(totalDays / 30)} Months)`;
  if (shortDaysEl) shortDaysEl.textContent = `${shortlistDays} Days`;
  if (mofaDaysEl) mofaDaysEl.textContent = `${mofaDays} Days`;
  if (igiDaysEl) igiDaysEl.textContent = `${igiEstimate} Days`;
  if (visaDaysEl) visaDaysEl.textContent = `${visaDays} Days`;
}

function prefillQuotaTrade(tradeName) {
  const section = document.getElementById('calculator');
  if (section) section.scrollIntoView({ behavior: 'smooth' });
  showToast(currentLang === 'ro' ? `Meserie selectată: ${tradeName}` : `Trade selected: ${tradeName}`);
}

// ------------------------------------------
// Agency Portal Modal & Interactive Simulation
// ------------------------------------------
function openPortalModal() {
  openModal('portal-modal');
}

function switchPortalTab(tabName) {
  document.querySelectorAll('.portal-menu-link').forEach(l => l.classList.remove('active'));
  const activeLink = document.getElementById(`portal-tab-${tabName}`);
  if (activeLink) activeLink.classList.add('active');

  const content = document.getElementById('portal-view-container');
  if (!content) return;

  if (tabName === 'pipeline') {
    content.innerHTML = `
      <div class="flex items-center justify-between mb-4">
        <h4 class="text-base font-bold text-white">Live Candidate Pipeline (Active Quota: 25 Welders & Fitters)</h4>
        <button class="btn btn-secondary btn-sm" onclick="showToast('Pipeline refreshed with live IGI status')">Refresh Sync</button>
      </div>
      <div class="overflow-x-auto">
        <table class="cor-table">
          <thead>
            <tr>
              <th>Candidate</th>
              <th>Trade</th>
              <th>TTC Score</th>
              <th>MOFA Status</th>
              <th>IGI Permit Dossier</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="font-bold text-white">Tariqul Islam (KGW-RO-2401)</td>
              <td>MIG/MAG Welder (COR 721208)</td>
              <td><span class="badge badge-emerald">96% (Grade A+)</span></td>
              <td><span class="badge badge-blue">MOFA Attested</span></td>
              <td><span class="badge badge-amber">IGI Dossier Ready</span></td>
              <td><button class="btn btn-secondary btn-sm" onclick="showToast('Downloading single-permit zip file...')">Download ZIP</button></td>
            </tr>
            <tr>
              <td class="font-bold text-white">Mohammad Rasel (KGW-RO-2402)</td>
              <td>Steel Fixer (COR 711401)</td>
              <td><span class="badge badge-emerald">94% (Grade A)</span></td>
              <td><span class="badge badge-blue">MOFA Attested</span></td>
              <td><span class="badge badge-amber">IGI Dossier Ready</span></td>
              <td><button class="btn btn-secondary btn-sm" onclick="showToast('Downloading single-permit zip file...')">Download ZIP</button></td>
            </tr>
            <tr>
              <td class="font-bold text-white">Shakil Ahmed (KGW-RO-2403)</td>
              <td>Forklift Stivuitorist (COR 834403)</td>
              <td><span class="badge badge-emerald">98% (Grade A+)</span></td>
              <td><span class="badge badge-blue">MOFA Attested</span></td>
              <td><span class="badge badge-emerald">Aviz de Muncă Issued</span></td>
              <td><button class="btn btn-primary btn-sm" onclick="showToast('Consulate Visa Stamping Scheduled')">Visa File</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    `;
  } else if (tabName === 'documents') {
    content.innerHTML = `
      <div class="mb-4">
        <h4 class="text-base font-bold text-white">Batch Document Repository for Romanian Immigration</h4>
        <p class="text-xs text-slate-400">All dossiers are formatted, translated, and legalized for direct upload to workinromania.gov.ro.</p>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div class="p-4 bg-slate-800/40 border border-slate-700 rounded-lg flex items-center justify-between">
          <div>
            <div class="text-sm font-semibold text-white">Batch_2401_Welder_IGI_Dossiers.zip</div>
            <div class="text-xs text-dim">10 Verified Candidate Files (142 MB)</div>
          </div>
          <button class="btn btn-primary btn-sm" onclick="showToast('Downloading verified batch zip...')">Download</button>
        </div>
        <div class="p-4 bg-slate-800/40 border border-slate-700 rounded-lg flex items-center justify-between">
          <div>
            <div class="text-sm font-semibold text-white">Batch_2402_SteelFixer_MOFA_Packs.zip</div>
            <div class="text-xs text-dim">15 Verified Candidate Files (198 MB)</div>
          </div>
          <button class="btn btn-primary btn-sm" onclick="showToast('Downloading verified batch zip...')">Download</button>
        </div>
      </div>
    `;
  } else if (tabName === 'orders') {
    content.innerHTML = `
      <div class="p-6 text-center">
        <h4 class="text-base font-bold text-white mb-2">Submit New Romanian Client Demand</h4>
        <p class="text-sm text-slate-400 max-width-md mx-auto mb-4">Upload your Romanian employer job order or specify trades for instant TTC testing reservations.</p>
        <button class="btn btn-amber" onclick="closeModal('portal-modal'); document.getElementById('contact').scrollIntoView({behavior: 'smooth'});">
          Create New Pilot Cohort Request
        </button>
      </div>
    `;
  }
}

// ------------------------------------------
// Contact Form & Toast Handling
// ------------------------------------------
function initContactForm() {
  const form = document.getElementById('pilot-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const originalText = btn.textContent;
    btn.disabled = true;
    btn.textContent = currentLang === 'ro' ? 'Se procesează solicitarea...' : 'Processing Submission...';

    setTimeout(() => {
      btn.disabled = false;
      btn.textContent = originalText;
      form.reset();
      showToast(currentLang === 'ro' 
        ? 'Solicitarea a fost trimisă cu succes! Echipa Keystone vă va contacta în 2 ore.' 
        : 'Pilot Cohort Request received! Keystone Enterprise Desk will contact you within 2 hours.');
    }, 1000);
  });
}

function showToast(msg) {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <svg class="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
    <span class="text-sm font-medium">${msg}</span>
  `;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

// ------------------------------------------
// Modal Controls
// ------------------------------------------
function initModals() {
  document.querySelectorAll('.modal-backdrop').forEach(m => {
    m.addEventListener('click', (e) => {
      if (e.target === m) {
        m.classList.remove('open');
      }
    });
  });
}

function openModal(modalId) {
  const m = document.getElementById(modalId);
  if (m) m.classList.add('open');
}

function closeModal(modalId) {
  const m = document.getElementById(modalId);
  if (m) m.classList.remove('open');
}

function toggleMobileNav() {
  const nav = document.getElementById('mobile-nav');
  if (nav) nav.classList.toggle('open');
}
