// ─────────────────────────────────────────────
// GAME CONFIG — tweak balance here, not scattered in code
// ─────────────────────────────────────────────
const CONFIG = {
    // Economy
    STARTING_CASH:          50000,  // initial kas saat game baru / setelah bangkrut
    BANKRUPTCY_THRESHOLD:   5000,   // kas minimum sebelum reset (tanpa aset)
    SPECIAL_ORDER_BASE:     30000,  // reward spesial order: base + rank * SPECIAL_ORDER_PER_RANK
    SPECIAL_ORDER_PER_RANK: 10000,

    // Progression
    MAX_STARS:              10,     // bintang untuk naik rank
    STREAK_BONUS_AT:        3,      // win-streak trigger bonus
    STREAK_STAR_BONUS:      3,      // bintang bonus dari win-streak
    PLACEMENT_STEPS:        7,      // jumlah pembeli berturut-turut untuk Mythic Immortal
    MAX_RANK_INDEX:         5,      // rank terakhir sebelum Mythic (0-indexed)

    // Timers (ms)
    MARKET_EVENT_INTERVAL:  90000,  // seberapa sering event pasar bergulir
    SPECIAL_ORDER_INTERVAL: 60000,  // seberapa sering cek special order baru
    TOOLTIP_DELAY:          700,    // delay tooltip muncul (ms)
    BANNER_HIDE_DELAY:      3500,   // durasi banner notifikasi (ms)

    // Editor
    ROT_STEP:               30,     // derajat rotasi per klik tombol

    // Negotiation
    PATIENCE_EASY:          5,      // turns pembeli Easy
    PATIENCE_MEDIUM:        3,      // turns pembeli Medium
    PATIENCE_HARD:          2,      // turns pembeli Hard

    // AI Advisor
    ADVISOR_HIGH_SCORE:     5,      // skor minimum untuk badge "Sangat Cocok"

    // Special Order trigger chance
    SPECIAL_ORDER_CHANCE:   0.35,   // probabilitas special order saat roll (0–1)
};

// 7 AI Buyers
const AI_BUYERS = [
    {
        id: "tambang",
        name: "🤠 Bos Tambang",
        desc: "Keras, pragmatis, hanya peduli ketahanan sasis dan fungsi nyata.",
        difficulty: "Hard",
        likes: ["wheel-monster", "wheel-tank", "front-ram", "pickup", "offroad", "military", "wheel-at-offroad", "wheel-mt-mud", "engine-v8"],
        hates: ["color-pink", "color-neon", "engine-electric", "neon-blue", "neon-pink", "neon-green"],
        patience: 2,
        persuadeArg: "Ban monster dan bumper pelindung baja ini sangat tangguh untuk melibas batu tambang Anda!"
    },
    {
        id: "eksekutif",
        name: "👔 Eksekutif Korporat",
        desc: "Kaku, elitis, mengedepankan prestise, kenyamanan profesional, dan status ramah lingkungan.",
        difficulty: "Medium",
        likes: ["sedan", "limo", "roof-solar", "color-black", "color-white", "engine-electric"],
        hates: ["exhaust-straight", "roof-siren", "color-neon", "color-pink", "suspension-ceper"],
        patience: 3,
        persuadeArg: "Ini adalah kemewahan masa depan yang tenang dengan motor listrik dan panel surya untuk kenyamanan kerja."
    },
    {
        id: "sultan",
        name: "🎮 Sultan Millennial",
        desc: "Impulsif, suka viralitas, aktif sosmed, menyukai keunikan ekstrim bernilai flex.",
        difficulty: "Easy",
        likes: ["color-neon", "color-pink", "tabung-nos", "wheel-chrome-luxury", "roof-siren", "sports", "supercar", "hypercar", "neon-blue", "neon-pink", "neon-green", "suspension-ceper"],
        hates: ["color-black", "color-white", "van", "kei"],
        patience: 5,
        persuadeArg: "Rancangan ceper dengan neon kolong menyala dan Nitro NOS ini dijamin langsung viral dan trending topik 1 di seluruh media sosial!"
    },
    {
        id: "kolektor",
        name: "👴 Kolektor Tua",
        desc: "Sangat teliti, menghargai sejarah, keaslian klasik, dan rapi.",
        difficulty: "Hard",
        likes: ["classic", "sedan", "convertible", "color-white", "wheel-jdm-classic", "engine-rotary"],
        hates: ["tabung-nos", "engine-electric", "color-neon", "neon-blue", "neon-pink", "neon-green"],
        patience: 2,
        persuadeArg: "Ini adalah sasis restorasi orisinal bernuansa retro klasik dengan pengerjaan vintage."
    },
    {
        id: "sirkus",
        name: "🤡 Sirkus Manager",
        desc: "Penuh kejutan, tidak logis, menyukai mobil paling absurd dan aneh.",
        difficulty: "Easy",
        likes: ["extra-android", "roof-siren", "neon-pink", "color-pink"],
        hates: ["sedan", "hatchback", "color-black", "color-white"],
        patience: 4,
        persuadeArg: "Perpaduan warna pink menyala dengan sirine dan aksesoris maskot ini adalah pertunjukan berjalan terlucu!"
    },
    {
        id: "ibu",
        name: "👩 Ibu Komplek",
        desc: "Peduli keselamatan keluarga, kepraktisan, bagasi luas, ramah lingkungan, dan hemat.",
        difficulty: "Medium",
        likes: ["hatchback", "mpv", "wagon", "van", "roof-solar", "color-white", "Cheapest", "engine-electric"],
        hates: ["exhaust-straight", "tabung-nos", "suspension-ceper", "color-pink", "color-neon"],
        patience: 3,
        persuadeArg: "Sangat aman, hemat bahan bakar berkat motor listrik dan panel surya, serta bagasinya luas untuk belanjaan."
    },
    {
        id: "pembalap",
        name: "🏁 Pembalap Liar",
        desc: "Terobsesi kecepatan murni, spoiler karbon, nitro pendorong, sasis ceper, dan drift.",
        difficulty: "Medium",
        likes: ["sports", "supercar", "hypercar", "drift", "spoiler-carbon", "tabung-nos", "color-neon", "color-black", "wheel-slick-racing", "wheel-drift-hard", "suspension-ceper"],
        hates: ["wheel-tank", "van", "mpv", "military"],
        patience: 3,
        persuadeArg: "Dengan spoiler serat karbon, coilovers ceper, dan tabung NOS, mobil ini akan melesat bagai anak panah di trek!"
    }
];

const RANKS = [
    { name: "Chassis Scrub", class: "rank-scrub" },
    { name: "Street Tuner", class: "rank-tuner" },
    { name: "Pro Customizer", class: "rank-customizer" },
    { name: "Master Designer", class: "rank-master" },
    { name: "Elite Builder", class: "rank-elite" },
    { name: "Automotive Legend", class: "rank-legend" },
    { name: "Mythic Immortal", class: "rank-immortal" }
];

// --- GAME STATE ---
let gameState = {
    cash: 50000,
    rank: 0, // index in RANKS
    stars: 0, // 0 - 10
    winStreak: 0,
    loseStreak: 0,
    slots: [
        { occupied: false, car: null },
        { occupied: false, car: null },
        { occupied: false, car: null }
    ],
    // Mythic Placement
    inPlacement: false,
    placementProgress: 0, // 0 to 7. If hits 7, becomes Mythic Immortal.
    placementStreak: [], // array of booleans/strings
    // Special Order
    activeOrder: null, // order object or null
    orderTimerId: null,
    isPaused: false
};

// Editor temporary variables
let activeSlotIndex = null;
let currentChassis = 'sedan';
let carColor = '#ff0055';
let placedParts = [];
let selectedPartIndex = null;
let viewInteriorActive = false;
let partIdCounter = 0;

// Negotiation session variables
let negoSession = {
    car: null,
    buyer: null,
    initialBid: 0,
    currentBid: 0,
    patience: 0,
    maxPatience: 0,
    counterCount: 0,
    persuaded: false,
    isPlacementDeal: false,
    isSpecialOrder: false
};

// Global timers
let marketEventTimer = null;
let specialOrderTriggerTimer = null;
let activeMarketEvent = null; // { type: 'trend'|'crash', catId: '...', label: '...' }

// --- LANGUAGE SYSTEM ---
const LANG = {
    id: {
        modalKas: 'MODAL KAS',
        winStreak: 'WIN STREAK',
        intro_sub: 'Buat Akun Studio Anda',
        intro_account_title: 'Daftarkan Bengkel Anda',
        label_username: 'Nama Pengguna (Username)',
        label_studioname: 'Nama Studio / Bengkel',
        btn_start: 'Mulai Bermain!',
        bankruptcy_msg: 'Kebangkrutan! Modal Anda habis. Anda menerima bantuan talangan darurat sebesar $50,000 namun reputasi Anda dipotong (-2 Bintang).',
        min_parts_msg: 'Mobil belum selesai dirancang! Pasang minimal 3 komponen di Studio Desain sebelum menjual.',
        workspace_full_msg: 'Workspace Penuh! Selesaikan atau ganti mobil di slot lain terlebih dahulu.',
    },
    en: {
        modalKas: 'CASH FUNDS',
        winStreak: 'WIN STREAK',
        intro_sub: 'Create Your Studio Account',
        intro_account_title: 'Register Your Workshop',
        label_username: 'Username',
        label_studioname: 'Studio / Workshop Name',
        btn_start: 'Start Playing!',
        bankruptcy_msg: 'Bankruptcy! Your funds ran out. You received an emergency bailout of $50,000 but lost 2 Reputation Stars.',
        min_parts_msg: 'Car is not finished! Install at least 3 components in the Design Studio before selling.',
        workspace_full_msg: 'Workspace Full! Finish or replace a car in another slot first.',
    }
};

let currentLang = 'id';
let accountData = null;

function selectLanguage(lang) {
    currentLang = lang;
    // Update step 2 text
    document.getElementById('intro-sub-account').innerText = LANG[lang].intro_sub;
    document.getElementById('intro-account-title').innerHTML = `<i class="fa-solid fa-user-gear"></i> ${LANG[lang].intro_account_title}`;
    document.getElementById('label-username').innerText = LANG[lang].label_username;
    document.getElementById('label-studioname').innerText = LANG[lang].label_studioname;
    document.getElementById('btn-start-label').innerText = LANG[lang].btn_start;
    // Transition to step 2
    const step1 = document.getElementById('intro-step-lang');
    const step2 = document.getElementById('intro-step-account');
    step1.style.opacity = '0';
    step1.style.transform = 'translateY(-20px)';
    setTimeout(() => {
        step1.classList.add('hidden');
        step2.classList.remove('hidden');
        step2.style.animation = 'fadeInUp 0.5s ease both';
    }, 300);
}

function applyLangToHUD() {
    const lblModalKas = document.getElementById('lbl-modal-kas');
    const lblWinStreak = document.getElementById('lbl-win-streak');
    if (lblModalKas) lblModalKas.innerText = LANG[currentLang].modalKas;
    if (lblWinStreak) lblWinStreak.innerText = LANG[currentLang].winStreak;
}

function createAccount() {
    try {
        const username = document.getElementById('input-username').value.trim();
        const studioName = document.getElementById('input-studioname').value.trim();
        if (!username || !studioName) {
            alert(currentLang === 'id' ? 'Nama pengguna dan nama studio tidak boleh kosong!' : 'Username and studio name cannot be empty!');
            return;
        }
        accountData = { username, studioName, lang: currentLang };
        localStorage.setItem('car_lab_account', JSON.stringify(accountData));
        startGame();
    } catch (err) {
        alert("Error in createAccount: " + err.stack);
    }
}

function startGame() {
    try {
        applyLangToHUD();
        // Update HUD avatar & studio name
        const avatar = document.getElementById('hud-avatar');
        const studioEl = document.getElementById('hud-studio-name');
        if (avatar && accountData) {
            avatar.innerText = accountData.username.charAt(0).toUpperCase();
            studioEl.innerText = accountData.studioName;
        }
        // Switch screen
        document.getElementById('intro-screen').classList.remove('active');
        document.getElementById('dashboard-screen').classList.add('active');
        loadGameData();
        updateHUD();
        renderDashboardSlots();
        startMarketEventsTicker();
        startSpecialOrderTriggers();
        // Initial parts drawer
        renderPartsDrawer('wheels');
    } catch (err) {
        alert("Error in startGame: " + err.stack);
    }
}

// --- THREE.JS 3D REALISTIC SYSTEM ---
let studio3D = {
    renderer: null,
    scene: null,
    camera: null,
    controls: null,
    carGroup: null,
    wheels: [],
    smokeSystem: null,
    smokeParticles: [],
    animationId: null,
    clock: new THREE.Clock()
};

let showroom3D = {
    renderer: null,
    scene: null,
    camera: null,
    controls: null,
    carGroup: null,
    wheels: [],
    smokeSystem: null,
    smokeParticles: [],
    animationId: null,
    clock: new THREE.Clock()
};

// Gradient Presets Map
const GRADIENT_PALETTES = {
    'gradient-sunset':    { col1: '#ffaa00', col2: '#ff0055', hex1: 0xffaa00, hex2: 0xff0055 },
    'gradient-chameleon': { col1: '#00ffcc', col2: '#9900ff', hex1: 0x00ffcc, hex2: 0x9900ff },
    'gradient-cyberpunk': { col1: '#ff00ff', col2: '#00ffff', hex1: 0xff00ff, hex2: 0x00ffff },
    'gradient-forest':    { col1: '#006600', col2: '#ffff00', hex1: 0x006600, hex2: 0xffff00 },
    'gradient-aurora':    { col1: '#0000ff', col2: '#00ffaa', hex1: 0x0000ff, hex2: 0x00ffaa },
    'gradient-midnight':  { col1: '#111111', col2: '#444444', hex1: 0x111111, hex2: 0x444444 }
};

// Generates procedural canvas texture for smooth 3D gradients
function createProceduralGradientTexture(gradKey) {
    const pal = GRADIENT_PALETTES[gradKey];
    if (!pal) return null;
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');
    const grad = ctx.createLinearGradient(0, 0, 512, 512);
    grad.addColorStop(0, pal.col1);
    grad.addColorStop(1, pal.col2);
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 512, 512);
    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    return texture;
}

// Procedural Highly-Realistic 3D Car Model Builder
function create3DCarGroup(chassisType, colorHex, parts, wheelsArrayRef, smokeParticlesArrayRef, smokeGroup) {
    const group = new THREE.Group();
    
    // Clear array references
    if (wheelsArrayRef) wheelsArrayRef.length = 0;
    if (smokeParticlesArrayRef) smokeParticlesArrayRef.length = 0;

    // Premium Realistic Car Paint Material (MeshPhysicalMaterial with Gradient & Sheen support)
    const isGradient = colorHex && colorHex.startsWith('gradient-');
    const pal = isGradient ? GRADIENT_PALETTES[colorHex] : null;
    const gradTexture = isGradient ? createProceduralGradientTexture(colorHex) : null;

    let baseColor = isGradient ? (pal ? pal.hex1 : 0xff0055) : colorHex;
    let sheenColorVal = pal ? pal.hex2 : null;
    let sheenVal = isGradient ? 1.0 : 0.0;

    const bodyMaterial = new THREE.MeshPhysicalMaterial({
        color: gradTexture ? 0xffffff : new THREE.Color(baseColor),
        map: gradTexture || null,
        metalness: isGradient ? 0.75 : 0.85,
        roughness: isGradient ? 0.12 : 0.08,
        clearcoat: 1.0,
        clearcoatRoughness: 0.05,
        reflectivity: 1.0,
        sheen: sheenVal,
        sheenColor: sheenColorVal ? new THREE.Color(sheenColorVal) : undefined,
        sheenRoughness: 0.15
    });

    // Dark Tinted Realistic Glass Material
    const isViewingInterior = (typeof viewInteriorActive !== 'undefined') && viewInteriorActive;
    const glassMaterial = new THREE.MeshPhysicalMaterial({
        color: isViewingInterior ? 0x00ffcc : 0x0a0a0d,
        metalness: 0.9,
        roughness: 0.05,
        transmission: isViewingInterior ? 0.98 : 0.4,
        transparent: true,
        opacity: isViewingInterior ? 0.05 : 0.85
    });

    // Realistic Rubber Tire Material
    const tireMaterial = new THREE.MeshStandardMaterial({
        color: 0x161616,
        roughness: 0.9
    });
    
    // Shiny Alloy/Chrome Rim Material
    const rimMaterial = new THREE.MeshStandardMaterial({
        color: 0xefefef,
        metalness: 1.0,
        roughness: 0.12
    });

    // Brake Caliper Red Material
    const caliperMaterial = new THREE.MeshStandardMaterial({
        color: 0xd91a1a,
        metalness: 0.8,
        roughness: 0.2
    });

    // Carbon Fiber / Trim Material
    const carbonMaterial = new THREE.MeshStandardMaterial({
        color: 0x1a1a1a,
        roughness: 0.7,
        metalness: 0.2
    });

    // Chrome Trim
    const chromeMaterial = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        metalness: 1.0,
        roughness: 0.05
    });

    let isLowered = parts.some(p => p.templateId === "suspension-ceper");
    let yOffset = isLowered ? -0.16 : 0.0;

    // 1. CAR BODY SHAPES (Procedural Detailed)
    let bodyLower, cabin;
    
    // Decal sticker checks
    const hasCarbonHood = parts.some(p => p.templateId === "sticker-carbon-hood");
    const hasRacingStripes = parts.some(p => p.templateId === "sticker-racing-stripes");
    const hasFlameDecal = parts.some(p => p.templateId === "sticker-flame");
    const hasSakuraDecal = parts.some(p => p.templateId === "sticker-sakura");
    const hasSponsorDecals = parts.some(p => p.templateId === "sticker-sponsor");

    const activeBodyMat = bodyMaterial;

    if (chassisType === 'sedan') {
        // Lower bodi
        bodyLower = new THREE.Mesh(new THREE.BoxGeometry(4.3, 0.5, 1.8), activeBodyMat);
        bodyLower.position.set(0, 0.4 + yOffset, 0);
        group.add(bodyLower);

        // Kabin
        cabin = new THREE.Mesh(new THREE.BoxGeometry(2.1, 0.55, 1.55), glassMaterial);
        cabin.position.set(-0.25, 0.9 + yOffset, 0);
        group.add(cabin);

        // Pillar bodi tipis di kabin untuk realisme
        if (!isViewingInterior) {
            const pillarFront = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.55, 1.57), carbonMaterial);
            pillarFront.position.set(0.75, 0.9 + yOffset, 0);
            const pillarRear = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.55, 1.57), carbonMaterial);
            pillarRear.position.set(-1.25, 0.9 + yOffset, 0);
            group.add(pillarFront, pillarRear);
        }
    } else if (chassisType === 'suv') {
        bodyLower = new THREE.Mesh(new THREE.BoxGeometry(4.0, 0.75, 1.85), activeBodyMat);
        bodyLower.position.set(0, 0.55 + yOffset, 0);
        group.add(bodyLower);

        cabin = new THREE.Mesh(new THREE.BoxGeometry(2.7, 0.7, 1.65), glassMaterial);
        cabin.position.set(-0.1, 1.25 + yOffset, 0);
        group.add(cabin);

        // SUV Pillars
        if (!isViewingInterior) {
            const pillarB = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.7, 1.67), carbonMaterial);
            pillarB.position.set(-0.1, 1.25 + yOffset, 0);
            group.add(pillarB);
        }
    } else if (chassisType === 'hatchback') {
        bodyLower = new THREE.Mesh(new THREE.BoxGeometry(3.7, 0.6, 1.75), activeBodyMat);
        bodyLower.position.set(0, 0.45 + yOffset, 0);
        group.add(bodyLower);

        cabin = new THREE.Mesh(new THREE.BoxGeometry(2.2, 0.6, 1.55), glassMaterial);
        cabin.position.set(-0.2, 1.05 + yOffset, 0);
        group.add(cabin);
    } else if (chassisType === 'sports') {
        bodyLower = new THREE.Mesh(new THREE.BoxGeometry(4.5, 0.38, 1.95), activeBodyMat);
        bodyLower.position.set(0, 0.3 + yOffset, 0);
        group.add(bodyLower);

        cabin = new THREE.Mesh(new THREE.BoxGeometry(1.85, 0.48, 1.6), glassMaterial);
        cabin.position.set(-0.2, 0.7 + yOffset, 0);
        group.add(cabin);
    } else if (chassisType === 'pickup') {
        bodyLower = new THREE.Mesh(new THREE.BoxGeometry(4.5, 0.6, 1.8), activeBodyMat);
        bodyLower.position.set(0, 0.45 + yOffset, 0);
        group.add(bodyLower);

        cabin = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.7, 1.6), glassMaterial);
        cabin.position.set(0.4, 1.1 + yOffset, 0);
        group.add(cabin);

        // Bak belakang pickup
        const bedL = new THREE.Mesh(new THREE.BoxGeometry(2.2, 0.5, 0.08), activeBodyMat);
        bedL.position.set(-1.1, 0.7 + yOffset, 0.86);
        const bedR = new THREE.Mesh(new THREE.BoxGeometry(2.2, 0.5, 0.08), activeBodyMat);
        bedR.position.set(-1.1, 0.7 + yOffset, -0.86);
        const bedBack = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.5, 1.8), activeBodyMat);
        bedBack.position.set(-2.2, 0.7 + yOffset, 0);
        group.add(bedL, bedR, bedBack);
    } else {
        bodyLower = new THREE.Mesh(new THREE.BoxGeometry(4.1, 0.5, 1.8), activeBodyMat);
        bodyLower.position.set(0, 0.4 + yOffset, 0);
        group.add(bodyLower);
    }

    // Underchassis details (Knalpot kolong, drive shaft, fuel tank, engine oil pan)
    const exhaustUnder = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 2.5), chromeMaterial);
    exhaustUnder.rotation.z = Math.PI / 2;
    exhaustUnder.position.set(-0.5, 0.12 + yOffset, 0.15); // knalpot kolong

    const driveShaft = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 2.8), rimMaterial);
    driveShaft.rotation.z = Math.PI / 2;
    driveShaft.position.set(-0.3, 0.12 + yOffset, -0.15); // shaft transfer daya

    const fuelTank = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.22, 1.2), carbonMaterial);
    fuelTank.position.set(-1.4, 0.16 + yOffset, 0); // tangki bensin belakang

    const enginePan = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.15, 1.3), rimMaterial);
    enginePan.position.set(1.4, 0.15 + yOffset, 0); // oil pan depan

    group.add(exhaustUnder, driveShaft, fuelTank, enginePan);

    // 2. STICKER DECALS (3D Mesh Layering)
    if (hasCarbonHood && bodyLower) {
        // Kap depan hitam bermaterial karbon
        const hoodCarbon = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.02, 1.5), carbonMaterial);
        hoodCarbon.position.set(1.4, 0.66 + yOffset, 0);
        group.add(hoodCarbon);
    }
    if (hasRacingStripes) {
        // Dua garis balap putih di kap mesin & atap
        const stripe1 = new THREE.Mesh(new THREE.BoxGeometry(4.2, 0.015, 0.12), new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.1 }));
        stripe1.position.set(0, 0.66 + yOffset, 0.15);
        const stripe2 = new THREE.Mesh(new THREE.BoxGeometry(4.2, 0.015, 0.12), new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.1 }));
        stripe2.position.set(0, 0.66 + yOffset, -0.15);
        group.add(stripe1, stripe2);
    }
    if (hasFlameDecal) {
        // Decal api di samping pintu kiri & kanan
        const flameMat = new THREE.MeshBasicMaterial({ color: 0xff3c00, transparent: true, opacity: 0.9 });
        const flameL = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.22, 0.02), flameMat);
        flameL.position.set(-0.2, 0.48 + yOffset, 0.91);
        flameL.rotation.y = Math.PI / 180 * 2;
        const flameR = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.22, 0.02), flameMat);
        flameR.position.set(-0.2, 0.48 + yOffset, -0.91);
        flameR.rotation.y = -Math.PI / 180 * 2;
        group.add(flameL, flameR);
    }
    if (hasSakuraDecal) {
        const sakuraMat = new THREE.MeshBasicMaterial({ color: 0xffa3be, transparent: true, opacity: 0.85 });
        const sakuraL = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.25, 0.02), sakuraMat);
        sakuraL.position.set(0.1, 0.48 + yOffset, 0.91);
        const sakuraR = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.25, 0.02), sakuraMat);
        sakuraR.position.set(0.1, 0.48 + yOffset, -0.91);
        group.add(sakuraL, sakuraR);
    }
    if (hasSponsorDecals) {
        const sponsorMat = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.9 });
        const sponsorL = new THREE.Mesh(new THREE.BoxGeometry(1.0, 0.08, 0.02), sponsorMat);
        sponsorL.position.set(-0.3, 0.25 + yOffset, 0.91);
        const sponsorR = new THREE.Mesh(new THREE.BoxGeometry(1.0, 0.08, 0.02), sponsorMat);
        sponsorR.position.set(-0.3, 0.25 + yOffset, -0.91);
        group.add(sponsorL, sponsorR);
    }

    // 3. INTERIOR DETAILS
    const hasSparcoSeat = parts.some(p => p.templateId === "interior-seat-sparco");
    const hasMomoWheel = parts.some(p => p.templateId === "interior-wheel-momo");
    const hasRollcage = parts.some(p => p.templateId === "interior-rollcage");
    const hasLedNeon = parts.some(p => p.templateId === "interior-led-neon");

    // Seat Material
    const seatColor = hasSparcoSeat ? 0xff1100 : 0x111111;
    const seatMat = new THREE.MeshStandardMaterial({ 
        color: seatColor, 
        roughness: 0.7,
        metalness: hasSparcoSeat ? 0.3 : 0.0
    });
    
    const seat1 = new THREE.Mesh(new THREE.BoxGeometry(0.45, 0.5, 0.45), seatMat);
    seat1.position.set(0.1, 0.65 + yOffset, 0.35);
    const seat2 = new THREE.Mesh(new THREE.BoxGeometry(0.45, 0.5, 0.45), seatMat);
    seat2.position.set(0.1, 0.65 + yOffset, -0.35);
    group.add(seat1, seat2);

    // Steering Wheel Material
    const wheelMat = hasMomoWheel ? 
        new THREE.MeshStandardMaterial({ color: 0x222222, roughness: 0.3, metalness: 0.9 }) : 
        carbonMaterial;
    const steeringWheel = new THREE.Mesh(new THREE.TorusGeometry(0.15, 0.03, 8, 16), wheelMat);
    steeringWheel.position.set(0.45, 0.78 + yOffset, 0.35);
    steeringWheel.rotation.y = Math.PI / 2;
    steeringWheel.rotation.x = 0.2;
    group.add(steeringWheel);

    // Rollcage
    if (hasRollcage) {
        const rollCageGroup = new THREE.Group();
        const cageMat = new THREE.MeshStandardMaterial({ color: 0xffcc00, metalness: 0.9, roughness: 0.1 });
        
        const barLeft = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 1.4), cageMat);
        barLeft.position.set(0, 0.9 + yOffset, 0.65);
        barLeft.rotation.x = 0.2;
        
        const barRight = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 1.4), cageMat);
        barRight.position.set(0, 0.9 + yOffset, -0.65);
        barRight.rotation.x = -0.2;
        
        const crossBar = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 1.3), cageMat);
        crossBar.position.set(-0.5, 0.8 + yOffset, 0);
        crossBar.rotation.x = Math.PI / 2;
        
        rollCageGroup.add(barLeft, barRight, crossBar);
        group.add(rollCageGroup);
    }

    // Dashboard Neon
    if (hasLedNeon) {
        const neonBar = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.03, 1.2), new THREE.MeshBasicMaterial({ color: 0x00ffcc }));
        neonBar.position.set(0.65, 0.78 + yOffset, 0);
        group.add(neonBar);
        
        const neonLED = new THREE.PointLight(0x00ffcc, 1.8, 2.5);
        neonLED.position.set(0.65, 0.8 + yOffset, 0);
        group.add(neonLED);
    }

    // 4. DETAIL LAMPU (LED/Headlight)
    const headlightGlass = new THREE.MeshPhysicalMaterial({ color: 0xffffee, transmission: 0.9, opacity: 0.9, transparent: true });
    const headlightL = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.14, 0.28), headlightGlass);
    headlightL.position.set(2.15, 0.45 + yOffset, 0.62);
    const headlightR = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.14, 0.28), headlightGlass);
    headlightR.position.set(2.15, 0.45 + yOffset, -0.62);
    group.add(headlightL, headlightR);

    // Taillight
    const taillightMat = new THREE.MeshBasicMaterial({ color: 0xff1111 });
    const taillightL = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.1, 0.38), taillightMat);
    taillightL.position.set(-2.15, 0.48 + yOffset, 0.6);
    const taillightR = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.1, 0.38), taillightMat);
    taillightR.position.set(-2.15, 0.48 + yOffset, -0.6);
    group.add(taillightL, taillightR);

    // Grill Depan Chrome
    const grill = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.25, 0.90), chromeMaterial);
    grill.position.set(2.16, 0.36 + yOffset, 0);
    group.add(grill);

    // 5. WHEELS & CALIPERS (Realistic)
    let wRadius = 0.44;
    let wThickness = 0.30;

    const monsterWheel = parts.find(p => p.templateId === "wheel-monster");
    const tankWheel = parts.find(p => p.templateId === "wheel-tank");
    const slickWheel = parts.find(p => p.templateId === "wheel-slick-racing");
    const chromeWheel = parts.find(p => p.templateId === "wheel-chrome-luxury");
    const alloyWheel = parts.find(p => p.templateId === "wheel-alloy-sport" || p.templateId === "wheel-jdm-classic");
    const steelieWheel = parts.find(p => p.templateId === "wheel-steelie");
    const mudWheel = parts.find(p => p.templateId === "wheel-mt-mud" || p.templateId === "wheel-at-offroad");

    let activeTireMat = tireMaterial;
    let activeRimMat = rimMaterial;

    if (chromeWheel) {
        activeRimMat = chromeMaterial;
        wRadius = 0.48;
    } else if (alloyWheel) {
        activeRimMat = alloyWheel.templateId.includes("classic") ? new THREE.MeshStandardMaterial({ color: 0xd4af37, metalness: 0.95, roughness: 0.15 }) : rimMaterial;
        wRadius = 0.45;
    } else if (steelieWheel) {
        activeRimMat = blackMaterial;
        wRadius = 0.40;
    } else if (slickWheel) {
        activeTireMat = new THREE.MeshStandardMaterial({ color: 0x080808, roughness: 0.2 });
        wRadius = 0.44;
    } else if (monsterWheel) {
        wRadius = 0.75;
        wThickness = 0.6;
    } else if (mudWheel) {
        wRadius = 0.52;
        wThickness = 0.42;
    }

    function addWheelModel(x, z) {
        const wGroup = new THREE.Group();
        
        // Ban Karet
        const tire = new THREE.Mesh(new THREE.CylinderGeometry(wRadius, wRadius, wThickness, 24), activeTireMat);
        tire.rotateX(Math.PI / 2);
        wGroup.add(tire);

        // Jari-jari Velg Detail
        const rimGroup = new THREE.Group();
        const rimBase = new THREE.Mesh(new THREE.CylinderGeometry(wRadius * 0.7, wRadius * 0.7, wThickness + 0.02, 16), activeRimMat);
        rimBase.rotateX(Math.PI / 2);
        rimGroup.add(rimBase);

        // Palang-palang Velg (Spokes)
        const spokeGeo = new THREE.BoxGeometry(wRadius * 0.65, 0.04, 0.04);
        for (let i = 0; i < 5; i++) {
            const spoke = new THREE.Mesh(spokeGeo, activeRimMat);
            spoke.rotation.z = (Math.PI / 180) * (i * 72);
            rimGroup.add(spoke);
        }
        wGroup.add(rimGroup);

        // Brake Caliper (Tidak berputar dengan roda)
        const brakeCaliperGroup = new THREE.Group();
        const disk = new THREE.Mesh(new THREE.CylinderGeometry(wRadius * 0.45, wRadius * 0.45, 0.06, 12), chromeMaterial);
        disk.rotateX(Math.PI / 2);
        const caliper = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.22, wThickness - 0.04), caliperMaterial);
        caliper.position.set(wRadius * 0.22, wRadius * 0.22, 0);
        brakeCaliperGroup.add(disk, caliper);
        brakeCaliperGroup.position.set(x, wRadius - 0.1, z * 0.9);
        group.add(brakeCaliperGroup);

        wGroup.position.set(x, wRadius - 0.1, z);
        
        if (wheelsArrayRef) wheelsArrayRef.push(wGroup);
        group.add(wGroup);
    }

    if (tankWheel) {
        // Tank tracks
        const trackL = new THREE.Mesh(new THREE.BoxGeometry(3.3, 0.78, 0.35), carbonMaterial);
        trackL.position.set(0, 0.28, 0.95);
        const trackR = new THREE.Mesh(new THREE.BoxGeometry(3.3, 0.78, 0.35), carbonMaterial);
        trackR.position.set(0, 0.28, -0.95);
        group.add(trackL, trackR);
    } else {
        let zPos = chassisType === 'suv' ? 0.95 : 0.9;
        let xFront = 1.35;
        let xRear = -1.35;
        addWheelModel(xFront, zPos);
        addWheelModel(xFront, -zPos);
        addWheelModel(xRear, zPos);
        addWheelModel(xRear, -zPos);
    }

    // 6. DYNAMIC EXTRAS / PARTS
    parts.forEach(part => {
        if (part.templateId.startsWith('wheel-') || part.templateId === "suspension-ceper" || part.templateId.startsWith('sticker-')) return;

        const partMeshGroup = new THREE.Group();

        if (part.templateId.includes('spoiler')) {
            let xPos = chassisType === 'suv' || chassisType === 'hatchback' ? -1.75 : -2.0;
            let yPos = chassisType === 'suv' ? 1.52 : chassisType === 'hatchback' ? 1.2 : 0.65;
            
            if (part.templateId === 'spoiler-carbon') {
                const blade = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.04, 1.8), carbonMaterial);
                const supportL = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.25, 0.08), carbonMaterial);
                supportL.position.set(0, -0.125, 0.55);
                const supportR = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.25, 0.08), carbonMaterial);
                supportR.position.set(0, -0.125, -0.55);
                partMeshGroup.add(blade, supportL, supportR);
            } else if (part.templateId === 'spoiler-biplane') {
                const blade1 = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.04, 1.7), carbonMaterial);
                blade1.position.set(0, 0.16, 0);
                const blade2 = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.04, 1.7), carbonMaterial);
                const supportL = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.35, 0.08), carbonMaterial);
                supportL.position.set(0, -0.1, 0.5);
                const supportR = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.35, 0.08), carbonMaterial);
                supportR.position.set(0, -0.1, -0.5);
                partMeshGroup.add(blade1, blade2, supportL, supportR);
            } else {
                const ducktail = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.08, 1.65), carbonMaterial);
                ducktail.rotation.z = -0.3;
                partMeshGroup.add(ducktail);
            }
            partMeshGroup.position.set(xPos, yPos + yOffset, 0);
        }
        
        else if (part.templateId.includes('front-')) {
            if (part.templateId === 'front-ram') {
                const ram = new THREE.Mesh(new THREE.BoxGeometry(0.25, 0.75, 1.65), carbonMaterial);
                partMeshGroup.add(ram);
            } else if (part.templateId === 'front-winch') {
                const block = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.25, 0.45), carbonMaterial);
                const spool = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 0.35), chromeMaterial);
                spool.rotation.z = Math.PI / 2;
                partMeshGroup.add(block, spool);
            }
            partMeshGroup.position.set(2.22, 0.35 + yOffset, 0);
        }
        
        else if (part.templateId.includes('roof-') || part.templateId.includes('solar')) {
            let yPos = chassisType === 'suv' ? 1.65 : chassisType === 'hatchback' ? 1.38 : 1.2;
            
            if (part.templateId === 'roof-siren') {
                const stand = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.08, 0.65), carbonMaterial);
                const blueL = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.14, 0.24), new THREE.MeshBasicMaterial({ color: 0x0055ff }));
                blueL.position.set(0, 0.08, 0.16);
                const redR = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.14, 0.24), new THREE.MeshBasicMaterial({ color: 0xff2222 }));
                redR.position.set(0, 0.08, -0.16);
                partMeshGroup.add(stand, blueL, redR);

                // Add small PointLight sources to siren for real blinking in loop
                const blueLight = new THREE.PointLight(0x0055ff, 2.0, 3.0);
                blueLight.position.set(0, 0.5, 0.5);
                const redLight = new THREE.PointLight(0xff2222, 2.0, 3.0);
                redLight.position.set(0, 0.5, -0.5);
                partMeshGroup.add(blueLight, redLight);
            } else if (part.templateId === 'roof-solar' || part.templateId === 'solar') {
                const cell = new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.04, 1.15), new THREE.MeshStandardMaterial({ color: 0x0c1f38, metalness: 0.95, roughness: 0.08 }));
                partMeshGroup.add(cell);
            }
            partMeshGroup.position.set(0, yPos + yOffset, 0);
        }

        else if (part.templateId.includes('neon-')) {
            let neonColor = 0x00ffcc;
            if (part.templateId.includes('pink')) neonColor = 0xff00cc;
            if (part.templateId.includes('green')) neonColor = 0x00ff00;
            
            const light = new THREE.PointLight(neonColor, 3.0, 2.8);
            light.position.set(0, -0.2, 0);
            partMeshGroup.add(light);
        }
        
        else if (part.templateId.includes('exhaust-')) {
            const tip = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 0.45), chromeMaterial);
            tip.rotation.z = Math.PI / 2;
            partMeshGroup.add(tip);
            partMeshGroup.position.set(-2.18, 0.22 + yOffset, 0.55);

            // Exhaust Smoke Particle System (Local Emitter)
            if (smokeParticlesArrayRef && smokeGroup) {
                for (let i = 0; i < 20; i++) {
                    const smokeGeo = new THREE.SphereGeometry(0.02 + Math.random() * 0.04, 8, 8);
                    const smokeMat = new THREE.MeshBasicMaterial({ color: 0xcccccc, transparent: true, opacity: 0.0 });
                    const sMesh = new THREE.Mesh(smokeGeo, smokeMat);
                    // Spawn behind exhaust
                    sMesh.position.set(-2.3 - Math.random() * 0.2, 0.22 + yOffset, 0.55);
                    
                    // Custom state
                    sMesh.userData = {
                        life: Math.random() * 1.5,
                        maxLife: 1.5,
                        speedX: -0.8 - Math.random() * 0.6,
                        speedY: 0.1 + Math.random() * 0.3,
                        speedZ: (Math.random() - 0.5) * 0.2,
                        exhaustX: -2.3,
                        exhaustY: 0.22 + yOffset,
                        exhaustZ: 0.55
                    };
                    
                    smokeParticlesArrayRef.push(sMesh);
                    smokeGroup.add(sMesh);
                }
            }
        }

        // Offsets & sizing from customization
        partMeshGroup.scale.set(part.scale, part.scale, part.scale);
        partMeshGroup.rotation.y += part.rotation * (Math.PI / 180);
        if (part.flipped) {
            partMeshGroup.scale.x *= -1;
        }

        group.add(partMeshGroup);
    });

    return group;
}

// 3D Studio Setup
function init3DStudio() {
    const container = document.getElementById('car-canvas-stage');
    if (!container) return;

    // Dispose old studio scene
    if (studio3D.renderer) {
        cancelAnimationFrame(studio3D.animationId);
        container.removeChild(studio3D.renderer.domElement);
        studio3D.renderer.dispose();
    }

    // Hide old 2D wrappers
    const oldChassis = document.getElementById('car-chassis-wrapper');
    const oldParts = document.getElementById('parts-container');
    if (oldChassis) oldChassis.style.display = 'none';
    if (oldParts) oldParts.style.display = 'none';

    // Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x06080d);
    scene.fog = new THREE.FogExp2(0x06080d, 0.06);

    // Camera
    const camera = new THREE.PerspectiveCamera(40, 600 / 300, 0.1, 100);
    camera.position.set(5.5, 2.5, 7.0);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setSize(600, 300);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    // HTML5 Drag and Drop component installer directly onto 3D stage
    container.addEventListener('dragover', (e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'copy';
        container.classList.add('drag-over');
    });
    container.addEventListener('dragleave', () => {
        container.classList.remove('drag-over');
    });
    container.addEventListener('drop', (e) => {
        e.preventDefault();
        container.classList.remove('drag-over');
        try {
            const dataStr = e.dataTransfer.getData('application/json');
            if (dataStr) {
                const part = JSON.parse(dataStr);
                buyAndInstallPart(part);
            }
        } catch (err) {
            console.error("Drop error:", err);
        }
    });

    // Controls
    const controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.maxPolarAngle = Math.PI - 0.05; // Allow seeing undercarriage
    controls.minDistance = 3.2;
    controls.maxDistance = 12;

    // Lighting (Premium Studio Lights)
    const ambient = new THREE.AmbientLight(0xffffff, 0.45);
    scene.add(ambient);

    const mainLight = new THREE.DirectionalLight(0xffffff, 0.85);
    mainLight.position.set(4, 8, 5);
    mainLight.castShadow = true;
    scene.add(mainLight);

    const fillLight = new THREE.DirectionalLight(0x00ffdd, 0.45);
    fillLight.position.set(-6, 4, -5);
    scene.add(fillLight);

    const rimLight = new THREE.SpotLight(0xffffff, 0.75, 12, Math.PI / 6, 0.4, 1);
    rimLight.position.set(0, 6, 0);
    scene.add(rimLight);

    // Emitter smoke group
    const smokeGroup = new THREE.Group();
    scene.add(smokeGroup);

    // Grid Floor
    const grid = new THREE.GridHelper(22, 22, 0x00ffcc, 0x1a2335);
    scene.add(grid);

    studio3D.scene = scene;
    studio3D.camera = camera;
    studio3D.renderer = renderer;
    studio3D.controls = controls;
    studio3D.smokeSystem = smokeGroup;

    // Render loop
    function animate() {
        studio3D.animationId = requestAnimationFrame(animate);
        const dt = studio3D.clock.getDelta();
        const elapsed = studio3D.clock.getElapsedTime();

        // 1. Suspension Breathing / Hovering Animation
        if (studio3D.carGroup) {
            studio3D.carGroup.position.y = Math.sin(elapsed * 1.5) * 0.04;
        }

        // 2. Rolling Exhaust Smoke Particles Update
        studio3D.smokeParticles.forEach(p => {
            p.userData.life += dt;
            if (p.userData.life >= p.userData.maxLife) {
                // Respawn
                p.userData.life = 0;
                p.position.set(p.userData.exhaustX, p.userData.exhaustY, p.userData.exhaustZ);
                p.material.opacity = 0.0;
            } else {
                p.position.x += p.userData.speedX * dt;
                p.position.y += p.userData.speedY * dt;
                p.position.z += p.userData.speedZ * dt;
                
                // Fade out opacity
                const ratio = p.userData.life / p.userData.maxLife;
                p.material.opacity = (1.0 - ratio) * 0.42;
                p.scale.setScalar(1.0 + ratio * 2.5);
            }
        });

        // 3. Siren Blink Animation
        if (studio3D.carGroup) {
            const sirenLight = studio3D.carGroup.getObjectByProperty('type', 'PointLight');
            if (sirenLight) {
                // Alternating color
                sirenLight.intensity = Math.sin(elapsed * 10) > 0 ? 3.0 : 0.0;
            }
        }

        controls.update();
        renderer.render(scene, camera);
    }
    animate();
}

function dispose3DObject(obj) {
    if (!obj) return;
    obj.traverse(child => {
        if (child.isMesh) {
            if (child.geometry) child.geometry.dispose();
            if (child.material) {
                if (Array.isArray(child.material)) {
                    child.material.forEach(mat => mat.dispose());
                } else {
                    child.material.dispose();
                }
            }
        }
    });
}

function updateStudio3DModel() {
    if (!studio3D.scene) init3DStudio();
    
    if (studio3D.carGroup) {
        dispose3DObject(studio3D.carGroup);
        studio3D.scene.remove(studio3D.carGroup);
    }

    studio3D.wheels = [];
    studio3D.smokeParticles = [];
    if (studio3D.smokeSystem) {
        dispose3DObject(studio3D.smokeSystem);
        studio3D.smokeSystem.clear();
    }

    studio3D.carGroup = create3DCarGroup(
        currentChassis, 
        carColor, 
        placedParts, 
        studio3D.wheels, 
        studio3D.smokeParticles, 
        studio3D.smokeSystem
    );
    studio3D.scene.add(studio3D.carGroup);

    carRotX = 0;
    carRotY = 0;
}

// Showroom WebGL 3D (Negotiation Screen)
function initShowroom3D() {
    const container = document.getElementById('showroom-car-target');
    if (!container) return;
    
    // Reset interior view mode during showroom negotiations
    viewInteriorActive = false;

    if (showroom3D.renderer) {
        cancelAnimationFrame(showroom3D.animationId);
        container.removeChild(showroom3D.renderer.domElement);
        showroom3D.renderer.dispose();
    }

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x020306);
    scene.fog = new THREE.FogExp2(0x020306, 0.05);

    const camera = new THREE.PerspectiveCamera(40, container.clientWidth / container.clientHeight, 0.1, 100);
    camera.position.set(6.2, 2.2, 6.5);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    const controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 3.5; // Constant rot speed
    controls.minDistance = 3.5;
    controls.maxDistance = 10;
    controls.maxPolarAngle = Math.PI - 0.05; // Allow seeing undercarriage

    // Premium Lights
    const ambient = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambient);

    const topSpot = new THREE.SpotLight(0xffffff, 1.8, 15, Math.PI / 4, 0.5, 1);
    topSpot.position.set(0, 7, 0);
    scene.add(topSpot);

    const backAccent = new THREE.DirectionalLight(0xff4c00, 0.65);
    backAccent.position.set(6, 3, 4);
    scene.add(backAccent);

    // Base cylinder pedestal
    const pedestal = new THREE.Mesh(
        new THREE.CylinderGeometry(2.7, 2.9, 0.22, 32),
        new THREE.MeshStandardMaterial({ color: 0x111116, roughness: 0.35, metalness: 0.8 })
    );
    pedestal.position.y = -0.11;
    scene.add(pedestal);

    const smokeGroup = new THREE.Group();
    scene.add(smokeGroup);

    showroom3D.scene = scene;
    showroom3D.camera = camera;
    showroom3D.renderer = renderer;
    showroom3D.controls = controls;
    showroom3D.smokeSystem = smokeGroup;

    function animate() {
        showroom3D.animationId = requestAnimationFrame(animate);
        const dt = showroom3D.clock.getDelta();
        const elapsed = showroom3D.clock.getElapsedTime();

        // 1. Roda berputar (rolling wheels) di showroom
        showroom3D.wheels.forEach(w => {
            w.rotation.z -= 4.0 * dt; // spin
        });

        // 2. Asap knalpot mengepul di showroom
        showroom3D.smokeParticles.forEach(p => {
            p.userData.life += dt;
            if (p.userData.life >= p.userData.maxLife) {
                p.userData.life = 0;
                p.position.set(p.userData.exhaustX, p.userData.exhaustY, p.userData.exhaustZ);
                p.material.opacity = 0.0;
            } else {
                p.position.x += p.userData.speedX * dt;
                p.position.y += p.userData.speedY * dt;
                p.position.z += p.userData.speedZ * dt;
                
                const ratio = p.userData.life / p.userData.maxLife;
                p.material.opacity = (1.0 - ratio) * 0.42;
                p.scale.setScalar(1.0 + ratio * 2.5);
            }
        });

        controls.update();
        renderer.render(scene, camera);
    }
    animate();
}

function updateShowroom3DModel(chassis, color, parts) {
    if (!showroom3D.scene) initShowroom3D();
    
    if (showroom3D.carGroup) {
        dispose3DObject(showroom3D.carGroup);
        showroom3D.scene.remove(showroom3D.carGroup);
    }

    showroom3D.wheels = [];
    showroom3D.smokeParticles = [];
    if (showroom3D.smokeSystem) {
        dispose3DObject(showroom3D.smokeSystem);
        showroom3D.smokeSystem.clear();
    }

    showroom3D.carGroup = create3DCarGroup(
        chassis, 
        color, 
        parts, 
        showroom3D.wheels, 
        showroom3D.smokeParticles, 
        showroom3D.smokeSystem
    );
    showroom3D.scene.add(showroom3D.carGroup);
}

// --- ROTATION STATE ---
let carRotX = 0;
let carRotY = 0;
const ROT_STEP = 30; // degrees per button click

function applyCanvasRotation() {
    if (studio3D.carGroup) {
        studio3D.carGroup.rotation.x = carRotX * (Math.PI / 180);
        studio3D.carGroup.rotation.y = carRotY * (Math.PI / 180);
    }
}

function resetCanvasRotation() {
    carRotX = 0;
    carRotY = 0;
    applyCanvasRotation();
    if (studio3D.controls) {
        studio3D.controls.reset();
    }
}

// --- TOOLTIP SYSTEM ---
let tooltipTimer = null;
function getTooltip() { return document.getElementById('component-tooltip'); }

function showTooltip(part, x, y) {
    const tooltip = getTooltip();
    if (!tooltip) return;
    tooltip.querySelector('.tooltip-name').innerText = part.name;
    tooltip.querySelector('.tooltip-desc').innerText = part.desc;
    tooltip.querySelector('.tooltip-price').innerText = `💰 $${part.price.toLocaleString()}`;

    const statsEl = tooltip.querySelector('.tooltip-stats');
    statsEl.innerHTML = '';
    const statNames = { speed: '⚡ Speed', accel: '🏎 Accel', eco: '🌿 Eco', flex: '😎 Flex', defense: '🛡 Defense' };
    Object.entries(part.effect).forEach(([key, val]) => {
        if (val === 0) return;
        const row = document.createElement('div');
        row.className = 'tooltip-stat-row';
        const prefix = val > 0 ? '+' : '';
        const cls = val > 0 ? 'positive' : val < 0 ? 'negative' : 'neutral';
        const unit = key === 'speed' ? ' km/h' : key === 'accel' ? 's' : '';
        row.innerHTML = `<span class="tooltip-stat-label">${statNames[key]}</span><span class="tooltip-stat-val ${cls}">${prefix}${val}${unit}</span>`;
        statsEl.appendChild(row);
    });

    tooltip.classList.remove('hidden');
    positionTooltip(x, y);
}

function positionTooltip(x, y) {
    const tooltip = getTooltip();
    if (!tooltip) return;
    const tw = tooltip.offsetWidth || 250;
    const th = tooltip.offsetHeight || 180;
    let left = x + 14;
    let top = y + 14;
    if (left + tw > window.innerWidth - 10) left = x - tw - 14;
    if (top + th > window.innerHeight - 10) top = y - th - 14;
    tooltip.style.left = left + 'px';
    tooltip.style.top = top + 'px';
}

function hideTooltip() {
    const tooltip = getTooltip();
    if (tooltip) tooltip.classList.add('hidden');
    if (tooltipTimer) { clearTimeout(tooltipTimer); tooltipTimer = null; }
}

function attachPartTooltip(cardEl, part) {
    cardEl.addEventListener('mousemove', (e) => {
        const tt = getTooltip();
        if (tt && !tt.classList.contains('hidden')) {
            positionTooltip(e.clientX, e.clientY);
        }
    });
    cardEl.addEventListener('mouseenter', (e) => {
        if (tooltipTimer) clearTimeout(tooltipTimer);
        tooltipTimer = setTimeout(() => {
            showTooltip(part, e.clientX, e.clientY);
        }, 1500);
    });
    cardEl.addEventListener('mouseleave', () => {
        hideTooltip();
    });
    cardEl.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        showTooltip(part, e.clientX, e.clientY);
    });
}

document.addEventListener('click', (e) => {
    const tt = getTooltip();
    if (tt && !tt.classList.contains('hidden')) {
        hideTooltip();
    }
});

// --- DOM ELEMENTS ---

// Dashboard Elements
const hudCash = document.getElementById('hud-cash');
const hudRankLabel = document.getElementById('hud-rank-label');
const hudStarsContainer = document.getElementById('hud-stars-container');
const hudStreak = document.getElementById('hud-streak');
const marketEventText = document.getElementById('market-event-text');
const placementCard = document.getElementById('placement-card');
const placementStatusText = document.getElementById('placement-status-text');

// Slots
const slotCards = [
    document.getElementById('slot-1'),
    document.getElementById('slot-2'),
    document.getElementById('slot-3')
];

// Special Order Panel
const specialOrderCard = document.getElementById('special-order-card');
const orderBuyerName = document.getElementById('order-buyer-name');
const orderTimeLeft = document.getElementById('order-time-left');
const orderRequirementText = document.getElementById('order-requirement-text');
const orderRewardCash = document.getElementById('order-reward-cash');
const btnAcceptOrder = document.getElementById('btn-accept-order');

// Catalog Modal
const dealerModal = document.getElementById('dealer-modal');
const categoryTabs = document.getElementById('category-tabs');
const carCatalogGrid = document.getElementById('car-catalog-grid');
const dealerSearch = document.getElementById('dealer-search');
const filterBtns = document.querySelectorAll('.filter-btn');

// Studio Screen Elements
const studioCashVal = document.getElementById('studio-cash-val');
const activeSlotName = document.getElementById('active-slot-name');
const studioCarModelName = document.getElementById('studio-car-model-name');
const carChassisWrapper = document.getElementById('car-chassis-wrapper');
const partsContainer = document.getElementById('parts-container');
const partsDrawer = document.querySelector('.parts-drawer');
const tabButtons = document.querySelectorAll('.tab-btn');
const colorSwatches = document.querySelectorAll('.color-swatch');
const specPrice = document.getElementById('spec-price');
const statSpeed = document.getElementById('stat-speed');
const statAccel = document.getElementById('stat-accel');
const statEco = document.getElementById('stat-eco');
const statFlex = document.getElementById('stat-flex');
const statDefense = document.getElementById('stat-defense');
const fillSpeed = document.getElementById('fill-speed');
const fillAccel = document.getElementById('fill-accel');
const fillEco = document.getElementById('fill-eco');
const fillFlex = document.getElementById('fill-flex');
const fillDefense = document.getElementById('fill-defense');
const productReview = document.getElementById('product-review');
const transformPanel = document.getElementById('transform-panel');

// Showcase & Terminal Split elements
const showroomCarTarget = document.getElementById('showroom-car-target');
const showroomCarTitle = document.getElementById('showroom-car-title');
const showroomCarSpecs = document.getElementById('showroom-car-specs');
const terminalConsole = document.getElementById('terminal-console-output');
const terminalCliInput = document.getElementById('terminal-cli-input');

// --- INITIALIZATION ---
window.addEventListener('DOMContentLoaded', () => {
    try {
        // Detect cloud/url save parameter
        const urlParams = new URLSearchParams(window.location.search);
        const urlSaveData = urlParams.get('save');
        if (urlSaveData) {
            try {
                const decoded = atob(urlSaveData);
                const parsed = JSON.parse(decoded);
                if (parsed.account && parsed.game) {
                    localStorage.setItem('car_lab_account', JSON.stringify(parsed.account));
                    localStorage.setItem('keep_notes_car_lab_save', JSON.stringify(parsed.game));
                    window.history.replaceState({}, document.title, window.location.pathname);
                    alert("⚠️ PROGRES SYNCED: Akun & progres game berhasil dimuat dari URL!");
                }
            } catch(e) {
                console.error("Gagal memuat URL sync:", e);
            }
        }

        setupGlobalEventListeners();
        // Check for existing account
        const saved = localStorage.getItem('car_lab_account');
        if (saved) {
            try {
                accountData = JSON.parse(saved);
                currentLang = accountData.lang || 'id';
                startGame();
            } catch(e) {
                // Corrupt data, show intro
                showIntroScreen();
            }
        } else {
            showIntroScreen();
        }
    } catch (err) {
        alert("Error in DOMContentLoaded: " + err.stack);
    }
});

function showIntroScreen() {
    document.getElementById('intro-screen').classList.add('active');
    document.getElementById('dashboard-screen').classList.remove('active');
}

// Save and Load logic (LocalStorage Persistence)
function saveGameData() {
    localStorage.setItem('keep_notes_car_lab_save', JSON.stringify(gameState));
    
    // Auto-update URL query string with encoded base64 save data
    try {
        const combined = {
            account: JSON.parse(localStorage.getItem('car_lab_account') || '{}'),
            game: gameState
        };
        const encoded = btoa(JSON.stringify(combined));
        const newUrl = window.location.protocol + "//" + window.location.host + window.location.pathname + "?save=" + encodeURIComponent(encoded);
        window.history.replaceState({ path: newUrl }, '', newUrl);
    } catch (e) {
        console.error("Gagal meng-update URL query save:", e);
    }
}

function loadGameData() {
    const saved = localStorage.getItem('keep_notes_car_lab_save');
    if (saved) {
        try {
            gameState = JSON.parse(saved);
            // Re-sync any missing structures just in case
            if (!gameState.winStreak) gameState.winStreak = 0;
            if (!gameState.loseStreak) gameState.loseStreak = 0;
            if (gameState.inPlacement === undefined) gameState.inPlacement = false;
            if (gameState.placementProgress === undefined) gameState.placementProgress = 0;
            if (!gameState.placementStreak) gameState.placementStreak = [];
        } catch (err) {
            console.error("Gagal load save game, mereset data...", err);
        }
    }
}

// HUD Rendering
function updateHUD() {
    hudCash.innerText = `$${gameState.cash.toLocaleString()}`;
    const rankInfo = RANKS[gameState.rank];
    hudRankLabel.innerText = `RANK: ${rankInfo.name.toUpperCase()}`;
    
    // Star rendering (10 stars maximum)
    hudStarsContainer.innerHTML = '';
    
    if (gameState.rank === 6) {
        // Mythic Immortal (Setara abadi, full gold stars)
        for (let i = 0; i < 10; i++) {
            const star = document.createElement('div');
            star.className = 'star-dot filled';
            hudStarsContainer.appendChild(star);
        }
    } else if (gameState.inPlacement) {
        // Phase Placement: Shows placement streak stars
        for (let i = 0; i < 7; i++) {
            const star = document.createElement('div');
            star.className = 'star-dot';
            if (i < gameState.placementProgress) {
                star.classList.add('filled', 'mythic-placement');
            }
            hudStarsContainer.appendChild(star);
        }
    } else {
        // Regular Tier: 10 Stars maximum
        for (let i = 0; i < 10; i++) {
            const star = document.createElement('div');
            star.className = 'star-dot';
            if (i < gameState.stars) {
                star.classList.add('filled');
            }
            hudStarsContainer.appendChild(star);
        }
    }
    
    // Render Reputation Percentage
    const repPercentEl = document.getElementById('hud-reputation-percent');
    if (repPercentEl) {
        let percentVal = 0;
        if (gameState.rank === 6) {
            percentVal = 100;
        } else if (gameState.inPlacement) {
            percentVal = Math.round((gameState.placementProgress / 7) * 100);
        } else {
            percentVal = Math.round((gameState.stars / 10) * 100);
        }
        repPercentEl.innerText = `${percentVal}%`;
    }

    // Render Pause Button UI
    updatePauseButtonUI();
    
    hudStreak.innerText = `${gameState.winStreak} 🔥`;
    
    // Mythic Placement Board rendering
    if (gameState.inPlacement) {
        placementCard.classList.remove('hidden');
        for (let i = 0; i < 7; i++) {
            const stepDot = document.getElementById(`pstep-${i}`);
            stepDot.className = 'placement-step';
            if (i < gameState.placementProgress) {
                stepDot.classList.add('completed');
            } else if (i === gameState.placementProgress) {
                stepDot.style.borderColor = 'var(--orange)';
            }
        }
        placementStatusText.innerText = `Lolos ${gameState.placementProgress} dari 7 Buyer berturut-turut!`;
    } else {
        placementCard.classList.add('hidden');
    }
    
    // Bankruptcy check
    checkBankruptcy();
}

function updatePauseButtonUI() {
    const btnPause = document.getElementById('btn-pause-game');
    const lblStatus = document.getElementById('lbl-game-status');
    if (!btnPause) return;
    
    if (gameState.isPaused) {
        // Paused state
        btnPause.innerHTML = `<i class="fa-solid fa-play"></i> RESUME`;
        btnPause.className = 'btn btn-danger btn-xs';
        btnPause.style.borderColor = 'rgba(255, 51, 0, 0.4)';
        btnPause.style.boxShadow = '0 0 10px rgba(255, 51, 0, 0.3)';
        if (lblStatus) lblStatus.innerHTML = `GAME SPEED: <span style="color: var(--red); font-weight: bold;">PAUSED</span>`;
    } else {
        // Running state
        btnPause.innerHTML = `<i class="fa-solid fa-pause"></i> PAUSE`;
        btnPause.className = 'btn btn-warning btn-xs';
        btnPause.style.borderColor = 'rgba(255, 170, 0, 0.3)';
        btnPause.style.boxShadow = 'none';
        if (lblStatus) lblStatus.innerHTML = `GAME SPEED: <span style="color: var(--green); font-weight: bold;">NORMAL</span>`;
    }
}


function checkBankruptcy() {
    const hasAssets = gameState.slots.some(s => s.occupied);
    if (gameState.cash < 5000 && !hasAssets) {
        // Trigger Bankruptcy
        gameState.cash = 50000;
        
        // Stars penalty
        if (gameState.rank > 0) {
            if (gameState.stars >= 2) {
                gameState.stars -= 2;
            } else {
                gameState.rank = Math.max(0, gameState.rank - 1);
                gameState.stars = 8;
            }
        } else {
            gameState.stars = 0;
        }
        
        gameState.winStreak = 0;
        gameState.loseStreak = 0;
        gameState.inPlacement = false;
        
        alert("Kebangkrutan! Modal Anda habis. Anda menerima bantuan talangan darurat sebesar $50,000 namun reputasi Anda dipotong (-2 Bintang).");
        saveGameData();
        updateHUD();
    }
}

// Workspace Slot Renderer
function renderDashboardSlots() {
    gameState.slots.forEach((slot, index) => {
        const card = slotCards[index];
        const emptyView = card.querySelector('.slot-content-empty');
        const activeView = card.querySelector('.slot-content-active');
        
        if (slot.occupied) {
            card.classList.remove('empty');
            emptyView.classList.add('hidden');
            activeView.classList.remove('hidden');
            
            // Populate active details
            const carModel = CARS_CATALOG.find(c => c.id === slot.car.carId);
            activeView.querySelector('.slot-car-name').innerText = carModel.name;
            activeView.querySelector('.slot-parts-count').innerText = slot.car.parts.length;
            activeView.querySelector('.slot-invest').innerText = `$${slot.car.investment.toLocaleString()}`;
            
            // Preview
            const previewWrap = activeView.querySelector('.slot-car-preview');
            const svgContent = CHASSIS_SVG[carModel.baseChassis];
            if (slot.car.color && slot.car.color.startsWith('gradient-') && GRADIENT_PALETTES[slot.car.color]) {
                const pal = GRADIENT_PALETTES[slot.car.color];
                const gradId = `slot-grad-${index}`;
                const gradDef = `<defs><linearGradient id="${gradId}" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="${pal.col1}"/><stop offset="100%" stop-color="${pal.col2}"/></linearGradient></defs>`;
                previewWrap.innerHTML = svgContent.replace('<svg ', `<svg >${gradDef}`);
                const paintable = previewWrap.querySelectorAll('.car-paintable');
                paintable.forEach(p => p.setAttribute('fill', `url(#${gradId})`));
            } else {
                previewWrap.innerHTML = svgContent;
                const paintable = previewWrap.querySelectorAll('.car-paintable');
                paintable.forEach(p => p.setAttribute('fill', slot.car.color || '#ff0055'));
            }
        } else {
            card.classList.add('empty');
            emptyView.classList.remove('hidden');
            activeView.classList.add('hidden');
        }
    });
}

// --- GLOBAL TIMERS & EVENT TICKER ---

function startMarketEventsTicker() {
    const marketEvents = [
        { type: 'trend', catId: 'ev', label: 'TREN PASAR: Kesadaran lingkungan meningkat! Mobil EV laku +20% lebih mahal! 🔋' },
        { type: 'trend', catId: 'sports', label: 'TREN PASAR: Antusias balap jalanan meningkat! Mobil Sports laku +20%! 🏎️' },
        { type: 'trend', catId: 'offroad', label: 'TREN PASAR: Musim petualang gunung! Mobil Off-Road & 4x4 naik +20%! ⛰️' },
        { type: 'crash', catId: 'suv', label: 'KRISIS PASAR: Harga BBM naik drastis! Mobil SUV lesu, penawaran turun! 📉' },
        { type: 'crash', catId: 'hypercar', label: 'KRISIS PASAR: Pajak barang mewah meningkat! Hypercar lesu, penawaran turun! 📉' }
    ];
    
    function rollEvent() {
        if (gameState.isPaused) return; // Skip if paused
        const roll = Math.random();
        if (roll < 0.6) {
            const evt = marketEvents[Math.floor(Math.random() * marketEvents.length)];
            activeMarketEvent = evt;
            marketEventText.innerText = evt.label;
            marketEventText.style.color = evt.type === 'trend' ? 'var(--green)' : 'var(--red)';
        } else {
            activeMarketEvent = null;
            marketEventText.innerText = "Kondisi pasar stabil. Tren penjualan berjalan normal.";
            marketEventText.style.color = 'var(--text-secondary)';
        }
    }
    
    rollEvent();
    marketEventTimer = setInterval(rollEvent, 90000); // Roll market updates every 90 seconds
}

function showSpecialOrderNotification() {
    try {
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(880, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(440, audioCtx.currentTime + 0.15);
        gain.gain.setValueAtTime(0.12, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.3);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.3);
    } catch (e) {
        console.log("AudioContext blocked or not supported");
    }

    const banner = document.createElement('div');
    banner.style.cssText = `
        position: fixed;
        top: 25px;
        left: 50%;
        transform: translateX(-50%) translateY(-120px);
        background: rgba(6, 7, 10, 0.95);
        border: 2px solid var(--orange);
        box-shadow: 0 0 25px rgba(255, 102, 0, 0.45), inset 0 0 10px rgba(255, 102, 0, 0.2);
        border-radius: 8px;
        padding: 12px 24px;
        z-index: 99999;
        display: flex;
        align-items: center;
        gap: 15px;
        font-family: 'Orbitron', var(--font-tech), sans-serif;
        color: #fff;
        transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        pointer-events: none;
    `;
    banner.innerHTML = `
        <div style="font-size: 1.6rem; color: var(--orange);"><i class="fa-solid fa-triangle-exclamation"></i></div>
        <div>
            <div style="font-weight: 900; font-size: 0.85rem; letter-spacing: 1.5px; color: var(--orange);">MISI KHUSUS MASUK!</div>
            <div style="font-size: 0.70rem; color: var(--text-secondary); margin-top: 2px;">Seorang klien mengirimkan pesanan spesifikasi khusus ke Terminal!</div>
        </div>
    `;
    document.body.appendChild(banner);

    setTimeout(() => { banner.style.transform = 'translateX(-50%) translateY(0)'; }, 100);
    setTimeout(() => {
        banner.style.transform = 'translateX(-50%) translateY(-150px)';
        setTimeout(() => { banner.remove(); }, 600);
    }, 4200);
}

function startSpecialOrderTriggers() {
    function rollSpecialOrder() {
        if (gameState.isPaused) return; // Skip if paused
        if (gameState.activeOrder) return; // Order is already active
        
        // 25% chance to trigger an order if not in placement challenge
        if (Math.random() < 0.35 && !gameState.inPlacement && gameState.rank >= 2) {
            // Trigger new special order
            const randomBuyer = AI_BUYERS[Math.floor(Math.random() * AI_BUYERS.length)];
            const targetTypes = ["sedan", "suv", "hatchback", "pickup", "sports"];
            const selectedType = targetTypes[Math.floor(Math.random() * targetTypes.length)];
            const reqStatNames = ["speed", "eco", "defense", "flex"];
            const reqStat = reqStatNames[Math.floor(Math.random() * reqStatNames.length)];
            
            // Build targets based on Rank
            const targetStatVal = 50 + (gameState.rank * 8);
            const rewardCash = 30000 + (gameState.rank * 10000);
            
            gameState.activeOrder = {
                buyerId: randomBuyer.id,
                buyerName: randomBuyer.name,
                type: selectedType,
                stat: reqStat,
                targetVal: targetStatVal,
                reward: rewardCash,
                timeLeft: 300 // 5 minutes in seconds
            };
            
            renderSpecialOrder();
            showSpecialOrderNotification(); // Trigger alert banner sound
        }
    }
    
    specialOrderTriggerTimer = setInterval(rollSpecialOrder, 60000); // check every 60 seconds
}

function renderSpecialOrder() {
    if (gameState.activeOrder) {
        specialOrderCard.classList.remove('empty');
        orderBuyerName.innerText = gameState.activeOrder.buyerName;
        orderRewardCash.innerText = `$${gameState.activeOrder.reward.toLocaleString()}`;
        
        const statLabelMap = { speed: "Top Speed (km/h)", eco: "Eco-Friendly", defense: "Crash Defense", flex: "Gaya Flex" };
        let reqText = `Rakit mobil tipe sasis dasar ${gameState.activeOrder.type.toUpperCase()}`;
        if (gameState.activeOrder.stat === "speed") {
            reqText += ` dengan Top Speed minimal ${gameState.activeOrder.targetVal + 100} km/h.`;
        } else {
            reqText += ` dengan status ${statLabelMap[gameState.activeOrder.stat]} minimal ${gameState.activeOrder.targetVal}%.`;
        }
        
        orderRequirementText.innerText = reqText;
        updateOrderTimerDisplay();
        
        // Start countdown timer
        if (gameState.orderTimerId) clearInterval(gameState.orderTimerId);
        gameState.orderTimerId = setInterval(() => {
            if (gameState.isPaused) return; // Skip countdown if paused
            
            gameState.activeOrder.timeLeft--;
            if (gameState.activeOrder.timeLeft <= 0) {
                // Time's up
                clearInterval(gameState.orderTimerId);
                gameState.activeOrder = null;
                specialOrderCard.classList.add('empty');
                alert("Misi Khusus: Waktu habis! Klien membatalkan pesanan khusus mereka.");
            } else {
                updateOrderTimerDisplay();
            }
        }, 1000);
    } else {
        specialOrderCard.classList.add('empty');
    }
}

function updateOrderTimerDisplay() {
    const mins = Math.floor(gameState.activeOrder.timeLeft / 60);
    const secs = gameState.activeOrder.timeLeft % 60;
    orderTimeLeft.innerText = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

// --- CATALOG DEALER LOGIC ---

function openDealerCatalog() {
    dealerModal.classList.remove('hidden');
    renderCategoryTabs();
    renderCatalogGrid("all");
}

function renderCategoryTabs() {
    categoryTabs.innerHTML = '';
    
    // Add "Semua Jenis" link
    const allTab = document.createElement('button');
    allTab.className = 'category-tab-link active';
    allTab.innerHTML = `<span>Semua Jenis</span><span class="badge">${CARS_CATALOG.length}</span>`;
    allTab.addEventListener('click', () => {
        document.querySelectorAll('.category-tab-link').forEach(t => t.classList.remove('active'));
        allTab.classList.add('active');
        renderCatalogGrid("all");
    });
    categoryTabs.appendChild(allTab);
    
    VEHICLE_CATEGORIES.forEach(cat => {
        const count = CARS_CATALOG.filter(c => c.category === cat.id).length;
        const tab = document.createElement('button');
        tab.className = 'category-tab-link';
        tab.innerHTML = `<span>${cat.name}</span><span class="badge">${count}</span>`;
        tab.addEventListener('click', () => {
            document.querySelectorAll('.category-tab-link').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            renderCatalogGrid(cat.id);
        });
        categoryTabs.appendChild(tab);
    });
}

function renderCatalogGrid(catFilter = "all", varFilter = "all", searchStr = "") {
    carCatalogGrid.innerHTML = '';
    
    let list = CARS_CATALOG;
    if (catFilter !== "all") {
        list = list.filter(c => c.category === catFilter);
    }
    if (varFilter !== "all") {
        list = list.filter(c => c.variant === varFilter);
    }
    if (searchStr.trim() !== "") {
        const s = searchStr.toLowerCase();
        list = list.filter(c => c.name.toLowerCase().includes(s) || c.categoryName.toLowerCase().includes(s));
    }
    
    if (list.length === 0) {
        carCatalogGrid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-muted);">Tidak ada mobil yang cocok dengan pencarian.</div>`;
        return;
    }
    
    list.forEach(car => {
        const card = document.createElement('div');
        card.className = 'catalog-car-card';
        const photoUrl = (typeof CAR_PHOTOS !== 'undefined') && CAR_PHOTOS[car.name];
        const visualContent = photoUrl 
            ? `<div class="catalog-car-photo-wrap">
                   <img class="catalog-car-photo" src="${photoUrl}" alt="${car.name}" loading="lazy" onerror="this.onerror=null; this.parentElement.innerHTML=\`${CHASSIS_SVG[car.baseChassis].replace(/`/g, '\\`')}\`;" />
               </div>`
            : `<div class="catalog-car-svg-wrap">
                   ${CHASSIS_SVG[car.baseChassis]}
               </div>`;

        card.innerHTML = `
            ${visualContent}
            <div class="catalog-car-info">
                <span class="category-label">${car.categoryName}</span>
                <span class="tag ${car.colorClass}">${car.variantName}</span>
                <h4>${car.name}</h4>
                <p class="desc">${car.description}</p>
                <div class="catalog-price-row">
                    <span class="catalog-sasis-label">✅ Sasis Gratis</span>
                    <span class="catalog-inv-badge">💰 $${car.price.toLocaleString()}</span>
                </div>
            </div>
        `;
        
        card.addEventListener('click', () => {
            // Put the selected chassis into the active workspace slot
            selectChassisForActiveSlot(car);
        });
        
        carCatalogGrid.appendChild(card);
    });
}

function selectChassisForActiveSlot(carCatalogItem) {
    // Confirm logic if active slot has parts
    const currentSlot = gameState.slots[activeSlotIndex];
    if (currentSlot.occupied && currentSlot.car.parts.length > 0) {
        const sure = confirm(`Mengubah sasis di slot aktif akan menghapus ${currentSlot.car.parts.length} komponen terpasang. Investasi sebesar $${currentSlot.car.investment.toLocaleString()} akan HANGUS! Yakin?`);
        if (!sure) return;
    }
    
    // Setup workspace slot
    gameState.slots[activeSlotIndex] = {
        occupied: true,
        car: {
            carId: carCatalogItem.id,
            carName: carCatalogItem.name,
            color: '#ff0055', // default
            parts: [],
            investment: 0
        }
    };
    
    saveGameData();
    dealerModal.classList.add('hidden');
    renderDashboardSlots();
    openStudioEditor(activeSlotIndex);
}

// --- STUDIO EDITOR LOGIC ---

function openStudioEditor(slotIdx) {
    activeSlotIndex = slotIdx;
    const slot = gameState.slots[slotIdx];
    const carModel = CARS_CATALOG.find(c => c.id === slot.car.carId);
    
    // Sync UI to active slot state
    currentChassis = carModel.baseChassis;
    carColor = slot.car.color;
    placedParts = JSON.parse(JSON.stringify(slot.car.parts)); // clone
    selectedPartIndex = null;
    viewInteriorActive = false;
    const btnToggleInterior = document.getElementById('btn-toggle-interior');
    if (btnToggleInterior) {
        btnToggleInterior.innerHTML = `<i class="fa-solid fa-couch"></i> Interior: OFF`;
        btnToggleInterior.style.background = "rgba(0, 255, 204, 0.15)";
    }
    
    // Setup Header & DOM
    activeSlotName.innerText = `WORKSPACE SLOT ${slotIdx + 1}`;
    studioCarModelName.innerText = carModel.name;
    studioCashVal.innerText = `$${gameState.cash.toLocaleString()}`;
    
    // Swap screen
    document.getElementById('dashboard-screen').classList.remove('active');
    document.getElementById('studio-screen').classList.add('active');
    
    // Initialize 3D WebGL Studio
    init3DStudio();
    
    loadChassis(currentChassis);
    applyColor(carColor);
    renderPlacedParts();
    updateStats();
}

function loadChassis(type) {
    currentChassis = type;
    updateStudio3DModel();
}

function applyColor(color) {
    carColor = color;
    updateStudio3DModel();
    
    // Sync swatch borders
    colorSwatches.forEach(swatch => {
        if (swatch.dataset.color === color) {
            swatch.classList.add('active');
        } else {
            swatch.classList.remove('active');
        }
    });
}

function renderPartsDrawer(category) {
    partsDrawer.innerHTML = '';

    // Specialized AI Auto Recommendation Tab in Studio Drawer
    if (category === 'ai_rec') {
        const promptWrap = document.createElement('div');
        promptWrap.className = 'studio-ai-prompt-box';
        promptWrap.innerHTML = `
            <div style="font-size: 0.72rem; font-weight: 700; color: var(--accent); display: flex; align-items: center; gap: 6px;">
                <i class="fa-solid fa-robot"></i> AI Rekomendasi Komponen
            </div>
            <textarea id="studio-ai-input" placeholder="Tulis gaya mobil... (misal: mobil balap cepat, drift JDM, mewah, offroad lumpur)"></textarea>
            <button class="btn btn-primary btn-xs btn-block" id="btn-studio-ai-run">
                <i class="fa-solid fa-wand-magic-sparkles"></i> Cari & Drag Komponen
            </button>
        `;
        partsDrawer.appendChild(promptWrap);

        const recsContainer = document.createElement('div');
        recsContainer.id = 'studio-ai-recs';
        recsContainer.style.display = 'flex';
        recsContainer.style.flexDirection = 'column';
        recsContainer.style.gap = '8px';
        partsDrawer.appendChild(recsContainer);

        function refreshStudioRecs(query) {
            recsContainer.innerHTML = '';
            const recs = runAdvisorAnalysis(query || 'balap kencang keren');
            if (recs.length === 0) {
                recsContainer.innerHTML = '<div style="font-size:0.75rem; color:var(--text-muted); text-align:center; padding:10px;">Tidak ada rekomendasi yang cocok.</div>';
                return;
            }
            recs.forEach(({ part, score }) => {
                const pc = PART_PRO_CON[part.id] || { pro: 'Meningkatkan nilai', con: 'Biaya pemasangan' };
                const card = document.createElement('div');
                card.className = 'part-card';
                card.draggable = true;
                card.innerHTML = `
                    <div class="part-icon-preview">${part.svg}</div>
                    <div class="part-info">
                        <div class="part-name" style="display:flex; justify-content:space-between; align-items:center;">
                            <span>${part.name}</span>
                            <span class="advisor-match-badge advisor-match-${score >= 5 ? 'high' : 'med'}">${score >= 5 ? 'Sangat Cocok' : 'Cocok'}</span>
                        </div>
                        <div class="part-price">$${part.price.toLocaleString()}</div>
                        <div class="part-effect" style="color: var(--green);">✅ ${pc.pro}</div>
                        <div class="part-effect" style="color: var(--red);">⚠️ ${pc.con}</div>
                    </div>
                `;
                card.addEventListener('dragstart', (e) => {
                    e.dataTransfer.setData('application/json', JSON.stringify(part));
                    e.dataTransfer.effectAllowed = 'copy';
                });
                card.addEventListener('click', () => {
                    buyAndInstallPart(part);
                });
                attachPartTooltip(card, part);
                recsContainer.appendChild(card);
            });
        }

        const runBtn = promptWrap.querySelector('#btn-studio-ai-run');
        const inputArea = promptWrap.querySelector('#studio-ai-input');
        runBtn.addEventListener('click', () => {
            refreshStudioRecs(inputArea.value.trim());
        });
        inputArea.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                refreshStudioRecs(inputArea.value.trim());
            }
        });

        // Initial default recommendation
        refreshStudioRecs('');
        return;
    }

    const parts = PARTS_LIBRARY[category];
    if (!parts) return;
    
    parts.forEach(part => {
        const card = document.createElement('div');
        card.className = 'part-card';
        card.draggable = true;
        card.innerHTML = `
            <div class="part-icon-preview">${part.svg}</div>
            <div class="part-info">
                <div class="part-name">${part.name}</div>
                <div class="part-price">$${part.price.toLocaleString()}</div>
                <div class="part-effect">${part.desc}</div>
            </div>
        `;
        
        // Drag and drop event
        card.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('application/json', JSON.stringify(part));
            e.dataTransfer.effectAllowed = 'copy';
        });

        card.addEventListener('click', () => {
            buyAndInstallPart(part);
        });

        // Attach tooltip on hover/right-click
        attachPartTooltip(card, part);
        
        partsDrawer.appendChild(card);
    });
}

function buyAndInstallPart(part) {
    if (gameState.cash < part.price) {
        alert("Modal kas tidak mencukupi untuk membeli komponen ini!");
        return;
    }
    gameState.cash -= part.price;
    studioCashVal.innerText = `$${gameState.cash.toLocaleString()}`;
    saveGameData();
    updateHUD();
    addPartToCanvas(part);
}


// Snap mount points per part type — koordinat default yang presisi di canvas stage (600x300px)
const SNAP_MOUNT_POINTS = {
    'wheel-':     { x: 200, y: 195, scale: 1.0 }, // posisi roda depan
    'spoiler-':   { x: 420, y: 55,  scale: 1.0 }, // belakang atas bodi
    'engine-':    { x: 300, y: 130, scale: 1.0 }, // tengah bodi
    'exhaust-':   { x: 495, y: 170, scale: 1.0 }, // samping belakang kanan
    'neon-':      { x: 300, y: 210, scale: 1.0 }, // bawah bodi tengah
    'suspension-':{ x: 300, y: 185, scale: 1.0 }, // bawah tengah
    'roof-':      { x: 300, y: 60,  scale: 1.0 }, // atap tengah
    'front-':     { x: 65,  y: 145, scale: 1.0 }, // bumper depan
    'extra-':     { x: 320, y: 100, scale: 0.8 }, // interior dashboard
    'tabung-':    { x: 380, y: 145, scale: 0.9 }, // samping tengah
    'sticker-':   { x: 300, y: 140, scale: 1.0 }, // tengah bodi
    'interior-':  { x: 300, y: 120, scale: 0.9 }, // kabin interior
};

function getSnapPoint(partId) {
    for (const [prefix, snap] of Object.entries(SNAP_MOUNT_POINTS)) {
        if (partId.startsWith(prefix)) return { ...snap };
    }
    return { x: 300, y: 150, scale: 1 };
}

function addPartToCanvas(partTemplate, x, y, scale, rotation = 0, flipped = false) {
    // Auto snap: jika x/y tidak diberikan, gunakan mount point default per tipe komponen
    if (x === undefined || x === null) {
        const snap = getSnapPoint(partTemplate.id);
        x = snap.x; y = snap.y; scale = scale ?? snap.scale;
    } else {
        scale = scale ?? 1;
    }

    // Modular auto-replace logic
    let prefix = null;
    if (partTemplate.id.startsWith('wheel-')) prefix = 'wheel-';
    else if (partTemplate.id.startsWith('interior-seat-')) prefix = 'interior-seat-';
    else if (partTemplate.id.startsWith('interior-wheel-')) prefix = 'interior-wheel-';
    else if (partTemplate.id.startsWith('interior-rollcage')) prefix = 'interior-rollcage';
    else if (partTemplate.id.startsWith('interior-led-')) prefix = 'interior-led-';
    else if (partTemplate.id.startsWith('neon-')) prefix = 'neon-';
    else if (partTemplate.id.startsWith('roof-')) prefix = 'roof-';
    else if (partTemplate.id.startsWith('front-')) prefix = 'front-';
    else if (partTemplate.id.startsWith('spoiler-')) prefix = 'spoiler-';

    if (prefix) {
        const existingIndex = placedParts.findIndex(p => p.templateId.startsWith(prefix));
        if (existingIndex !== -1) {
            const refund = Math.round(placedParts[existingIndex].price * 0.5);
            gameState.cash += refund;
            // Notify via studio cash update
            studioCashVal.innerText = `$${gameState.cash.toLocaleString()}`;
            placedParts.splice(existingIndex, 1);
        }
    }

    const id = `placed-${partIdCounter++}`;
    
    const newPart = {
        id: id,
        templateId: partTemplate.id,
        name: partTemplate.name,
        price: partTemplate.price,
        effect: partTemplate.effect,
        svg: partTemplate.svg,
        x: x,
        y: y,
        scale: scale,
        rotation: rotation,
        flipped: flipped
    };
    
    placedParts.push(newPart);
    renderPlacedParts();
    selectPart(placedParts.length - 1);
    saveActiveSlotChanges();
}

function renderPlacedParts() {
    partsContainer.innerHTML = ''; // Keep empty

    // Update 3D studio model
    updateStudio3DModel();

    // Render list komponen terpasang di transform-panel
    const listContainer = document.getElementById('installed-parts-list');
    const controlsWrap = document.getElementById('transform-controls-wrap');
    if (listContainer) {
        listContainer.innerHTML = '';
        if (placedParts.length === 0) {
            listContainer.innerHTML = `<div class="empty-parts-hint">
                <i class="fa-solid fa-hand-pointer"></i>
                <span>Pilih komponen dari tab di kiri untuk memasangnya ke mobil kamu!</span>
            </div>`;
            if (controlsWrap) controlsWrap.style.display = 'none';
        } else {
            placedParts.forEach((part, index) => {
                const item = document.createElement('div');
                item.className = 'installed-part-item';
                item.style.cssText = 'padding: 6px 10px; margin-bottom: 4px; background: rgba(255,255,255,0.05); border-radius: 4px; display: flex; justify-content: space-between; align-items: center; cursor: pointer; border: 1px solid transparent;';
                if (index === selectedPartIndex) {
                    item.style.borderColor = 'var(--accent)';
                    item.style.background = 'rgba(0, 255, 204, 0.1)';
                }

                item.innerHTML = `
                    <span>${part.name}</span>
                    <span style="color: var(--accent); font-weight: bold;">$${part.price.toLocaleString()}</span>
                `;

                item.addEventListener('click', () => {
                    selectPart(index);
                });

                listContainer.appendChild(item);
            });
            if (controlsWrap) {
                controlsWrap.style.display = selectedPartIndex !== null ? 'block' : 'none';
            }
        }
    }
}

function setupPartDragging(element, index) {
    // Deprecated in 3D anchor positioning
}

function selectPart(index) {
    selectedPartIndex = index;
    renderPlacedParts();
}

// Deselect on canvas click
partsContainer.addEventListener('mousedown', (e) => {
    if (e.target === partsContainer) {
        selectPart(null);
    }
});

function saveActiveSlotChanges() {
    // Calculates cumulative investment on components
    let investment = 0;
    placedParts.forEach(p => investment += p.price);
    
    gameState.slots[activeSlotIndex].car.color = carColor;
    gameState.slots[activeSlotIndex].car.parts = placedParts;
    gameState.slots[activeSlotIndex].car.investment = investment;
    
    saveGameData();
    renderDashboardSlots();
    updateStats();
}

function updateStats() {
    const slot = gameState.slots[activeSlotIndex];
    const carModel = CARS_CATALOG.find(c => c.id === slot.car.carId);
    
    let totalInvest = slot.car.investment;
    let speed = carModel.stats.speed;
    let accel = carModel.stats.accel;
    let eco = carModel.stats.eco;
    let flex = carModel.stats.flex;
    let defense = carModel.stats.defense;
    
    placedParts.forEach(p => {
        speed += p.effect.speed;
        accel += p.effect.accel;
        eco += p.effect.eco;
        flex += p.effect.flex;
        defense += p.effect.defense;
    });
    
    speed = Math.max(40, Math.min(650, speed));
    accel = Math.max(0.6, Math.min(25.0, accel));
    eco = Math.max(0, Math.min(100, eco));
    flex = Math.max(0, Math.min(100, flex));
    defense = Math.max(0, Math.min(100, defense));
    
    specPrice.innerText = `$${totalInvest.toLocaleString()}`;
    statSpeed.innerText = `${speed} km/h`;
    statAccel.innerText = `${accel.toFixed(1)}s`;
    
    let ecoText = "Bencana Lingkungan ⚠️";
    if (eco > 80) ecoText = "Bebas Emisi (Hijau)";
    else if (eco > 50) ecoText = "Standar Jalan";
    else if (eco > 25) ecoText = "Polutif";
    statEco.innerText = ecoText;
    
    let flexText = "Biasa Saja";
    if (flex > 80) flexText = "Pamer Maksimal 😎";
    else if (flex > 50) flexText = "Keren Gaul";
    else if (flex > 20) flexText = "Lumayan";
    statFlex.innerText = flexText;
    
    let defenseText = "Rentan";
    if (defense > 80) defenseText = "Baja Lapis Militer 🛡️";
    else if (defense > 50) defenseText = "Sangat Kokoh";
    else if (defense > 30) defenseText = "Standar Keamanan";
    statDefense.innerText = defenseText;
    
    // Fill percent renders
    fillSpeed.style.width = `${Math.min(100, (speed / 500) * 100)}%`;
    const accelPct = 100 - (((accel - 0.8) / (15.0 - 0.8)) * 100);
    fillAccel.style.width = `${Math.max(5, Math.min(100, accelPct))}%`;
    fillEco.style.width = `${eco}%`;
    fillFlex.style.width = `${flex}%`;
    fillDefense.style.width = `${defense}%`;
    
    // Analis product text reviewer
    const hasSquare = placedParts.some(p => p.templateId === "wheel-square");
    const hasRocket = placedParts.some(p => p.templateId === "spoiler-rocket");
    const hasLaser = placedParts.some(p => p.templateId === "front-laser");
    
    let comment = "Konfigurasi mobil solid dan siap pakai jalan raya.";
    if (hasSquare) {
        comment = "Keputusan roda kotak merusak kenyamanan. Sangat tidak praktis untuk mobil komuter.";
    } else if (hasRocket && speed > 350) {
        comment = "Pendorong roket dipadukan dengan mesin performa mengubah mobil ini menjadi pesawat darat.";
    } else if (hasLaser && defense > 75) {
        comment = "Senjata plasma laser depan membuat mobil ini menjadi kendaraan tempur perkotaan.";
    } else if (eco > 75 && speed > 220) {
        comment = "Perpaduan apik antara kecepatan kencang dan emisi hijau nihil.";
    }
    
    productReview.innerText = comment;
}

// Keyword dictionary for custom persuasion arguments
const BUYER_KEYWORDS = {
    tambang: {
        likes: ["ban", "monster", "tank", "rantai", "duri", "penabrak", "taji", "pickup", "truk", "offroad", "jip", "jimny", "militer", "baja", "ground clearance"],
        hates: ["pink", "chrome", "sayap", "malaikat", "roket", "jet", "konyol", "pizza", "kotak", "estetika"]
    },
    eksekutif: {
        likes: ["sedan", "limo", "limousine", "mewah", "hitam", "putih", "solar", "surya", "laser", "premium", "prestige", "elegan"],
        hates: ["kotak", "pizza", "sirene", "polisi", "konyol", "neon", "pink", "sport", "balap", "sayap"]
    },
    sultan: {
        likes: ["neon", "pink", "roket", "jet", "pizza", "kotak", "sirene", "polisi", "sport", "supercar", "hypercar", "viral", "flex", "sosmed"],
        hates: ["hitam", "putih", "abu", "netral", "van", "kei", "standar", "biasa", "bosan"]
    },
    kolektor: {
        likes: ["klasik", "vintage", "retro", "cerobong", "setir", "putih", "sejarah", "orisinal", "tua", "restorasi"],
        hates: ["laser", "roket", "jet", "kotak", "pizza", "neon", "modern", "futuristik"]
    },
    sirkus: {
        likes: ["kotak", "pizza", "baling", "helikopter", "sayap", "setir", "sirene", "polisi", "aneh", "konyol", "lucu", "sirkus"],
        hates: ["standar", "biasa", "keluarga", "sedan", "hatchback", "hitam", "putih"]
    },
    ibu: {
        likes: ["keluarga", "hatchback", "mpv", "wagon", "van", "solar", "surya", "putih", "silver", "murah", "hemat", "ekonomis", "bagasi", "anak"],
        hates: ["roket", "jet", "laser", "ceper", "kemudi", "setir luar", "kotak", "pink", "neon", "berisik", "knalpot"]
    },
    pembalap: {
        likes: ["sport", "supercar", "hypercar", "drift", "balap", "carbon", "roket", "jet", "neon", "hitam", "kencang", "ceper", "kecepatan", "trek", "sirkuit"],
        hates: ["tank", "rantai", "kotak", "pizza", "van", "mpv", "lambat", "lemot", "berat", "armor"]
    }
};

// Dialog generator helper for 7 AI Buyers
function getBuyerDialogue(buyerId, dialogType, data = {}) {
    const priceStr = data.price ? data.price.toLocaleString() : "";
    const offerStr = data.offer ? data.offer.toLocaleString() : "";
    const compromiseStr = data.compromise ? data.compromise.toLocaleString() : "";

    const carName = negoSession && negoSession.car ? CARS_CATALOG.find(c => c.id === negoSession.car.carId).name : "mobil ini";
    const carType = negoSession && negoSession.car ? negoSession.car.carId.split("_")[0] : "mobil";
    
    const intros = {
        tambang: [
            `Halo bos! Gua liat sasis ${carName} lu ini kokoh banget. Di lokasi tambang batubara gua lagi butuh armada badak begini. Berani lepas di angka $${priceStr} gak?`,
            `Wah, sasisnya keliatan tebel dan gak kaleng-kaleng nih! Buat hantam jalur berlumpur sama bebatuan tajam pas banget. Buka harga santai dulu, gimana kalau $${priceStr}?`,
            `Mantap bener tongkrongannya! Jarang-jarang ada workshop bikin sasis sekuat ini. Gua serius minat, gua buka penawaran pertama $${priceStr}, deal gak?`
        ],
        eksekutif: [
            `Selamat siang rekan. Saya sedang mencari unit kendaraan representatif seperti ${carName} ini untuk operasional direksi. Saya ajukan tawaran pembuka sebesar $${priceStr}.`,
            `Garis bodi mobil ini bersih, elegan, dan punya impresi prestisius. Sangat pantas terparkir di lobi kantor kami. Penawaran pertama dari pihak kami adalah $${priceStr}.`,
            `Kesan pertama saya: berkelas dan efisien. Jika Anda bersedia melepasnya di angka $${priceStr}, kontrak pembelian bisa kita sepakati sekarang.`
        ],
        sultan: [
            `Woy bro! Asli ini mobil gokil parah! Tongkrongan ${carName} lu eye-catching banget, pas buat konten flexing malam minggu di PIK. Gua bayarin $${priceStr} langsung bungkus yuk!`,
            `Gila sih, auranya dapet banget! Kalau gua bawa jalan pasti auto disorot kamera seantero kota. Gua buka penawaran pertama di $${priceStr}, kurang gak tuh bro?`,
            `Nah ini dia yang gua cari-cari! Desainnya antimainstream dan berani beda. Gua gas $${priceStr} sekarang, transfer instan gak pake lama!`
        ],
        kolektor: [
            `Permisi nak... Garis siluet ${carName} ini mengingatkan saya pada masa-masa kejayaan otomotif era dulu. Pengerjaannya rapi sekali. Boleh saya tawar awal $${priceStr}?`,
            `Sungguh langka melihat perakit muda yang masih menaruh rasa hormat pada proporsi klasik seperti ini. Saya ingin memajangnya di museum pribadi saya di angka $${priceStr}.`,
            `Karakter vintage-nya sangat kental dan berjiwa. Sebagai pembuka pembicaraan kita, bagaimana jika di harga $${priceStr}?`
        ],
        sirkus: [
            `Hahaha mantap jiwa! Ini mobil beneran gokil dan nyentrik abis! Pas banget buat pawai karnaval keliling kota. Gua tebus $${priceStr} ya bro?`,
            `Woooww, liat bentuknya aja penonton sirkus gua pasti langsung teriak heboh! Unik parah! Gua buka harga di $${priceStr}, gimana mas bro?`,
            `Gak ada duanya di dunia! Mobil dengan visual se-eksentrik ini wajib masuk sirkus gua. Nih gua buka penawaran awal $${priceStr}!`
        ],
        ibu: [
            `Permisi mas... Saya lagi nyari mobil yang aman buat antar-jemput anak les sama belanja bulanan. ${carName} ini bagasinya lega gak ya? Saya tawar dulu ya mas $${priceStr}.`,
            `Aduh modelnya manis ya, keliatan nyaman buat keluarga. Kalau harganya cocok saya mau ambil nih. Boleh ya dibuka di $${priceStr}?`,
            `Keliatannya stabil dan gak rewel ya mas. Saya suka mobil yang ramah di kantong dan aman. Saya tawar pertama $${priceStr} ya mas ganteng.`
        ],
        pembalap: [
            `Bro, setup sasis ${carName} lu tajem banget downforce-nya. Siap gua bawa track day ke Sentul nih! Buka harga balap dulu ya, $${priceStr} gua tebus.`,
            `Gua perhatiin stance-nya udah center of gravity-nya mantep buat libas tikungan sirkuit. Gua serius mau turunin ke aspal, gua buka di $${priceStr} ya!`,
            `Aura kompetisinya kerasa kenceng banget bro! Mesin sama setup suspensinya pas. Gimana kalau $${priceStr} langsung salaman di pit stop?`
        ]
    };

    const successDialogues = {
        tambang: [
            `Sip bos! Harga $${offerStr} masuk akal banget buat unit sebadak ini. Langsung gua angkut ke site tambang sekarang!`,
            `Nah gitu dong, asik nego sama lu! Gua bayar lunas $${offerStr}, kunci langsung gua bawa ya.`
        ],
        eksekutif: [
            `Angka $${offerStr} disetujui. Tim finance kami akan segera menerbitkan surat transfer pembayaran resmi hari ini. Terima kasih atas profesionalismenya.`,
            `Sangat adil. Kesepakatan $${offerStr} memenuhi standar anggaran pengadaan kami. Senang berbisnis dengan Anda.`
        ],
        sultan: [
            `Gassspoll bro! $${offerStr} langsung gua transfer detik ini juga! Kunci mobilnya sini, mau langsung gua bawa pamer keliling Senopati!`,
            `Sip deal tanpa ribet! $${offerStr} mah receh buat karya sebagus ini bro. Gua mention garasi lu di Instagram gua ya!`
        ],
        kolektor: [
            `Alhamdulillah nak... $${offerStr} adalah penghargaan yang sangat pantas untuk mahakarya seni ini. Mobil ini akan saya rawat sepenuh hati di garasi pribadi.`,
            `Kesepakatan yang indah di harga $${offerStr}. Terima kasih sudah mau melepas permata klasik ini kepada saya.`
        ],
        sirkus: [
            `Horeeee deal! Di harga $${offerStr} ini bakal jadi bintang panggung utama karnaval malam ini! Makasih banyak ya sobat kreatif!`,
            `Asikkk bungkus bro! $${offerStr} siap gua bayar kontan. Penonton sirkus pasti histeris liat mobil ini!`
        ],
        ibu: [
            `Alhamdulillah mas, harga $${offerStr} cocok sama tabungan suami saya. Makasih banyak ya mas, anak-anak pasti seneng banget!`,
            `Wah terima kasih banyak ya mas udah mau kasih harga baik $${offerStr}. Semoga bengkel modifnya tambah berkah dan laris terus!`
        ],
        pembalap: [
            `Gokil bro! Di angka $${offerStr} mobil ini sah jadi senjata baru gua di lintasan balap. Gua tes di sirkuit sore ini juga!`,
            `Deal bro! $${offerStr} harga yang pantas buat karya tuner berkelas kayak lu. Sampai ketemu di podium juara!`
        ]
    };

    const rayuSuksesDialogues = {
        tambang: [
            `Wah bener juga lu bos! Masuk akal penjelasannya, besi sama bannya emang badak. Gua naikin penawaran gua jadi $${priceStr} dah!`,
            `Hahaha pinter lu jelasin fungsi lapangannya! Gua demen orang ngerti alat berat. Gua tambahin deh jadi $${priceStr}!`
        ],
        eksekutif: [
            `Penjelasan Anda mengenai efisiensi dan standar kenyamanan interiornya sangat meyakinkan komite kami. Kami setuju menaikkan pagu menjadi $${priceStr}.`,
            `Argumen yang sangat profesional dan berbasis data teknis. Saya setuju menaikkan alokasi anggaran ke $${priceStr}.`
        ],
        sultan: [
            `Anjayyy bener juga omongan lu bro! Detailnya makin diliat makin eye-catching parah. Oke gua naikin tawaran gua jadi $${priceStr}, puas kan lu?`,
            `Wah gila sih, setelah lu sebut fitur itu gua makin gak sabar pamerin ke tongkrongan gua! Nih gua kasih $${priceStr}!`
        ],
        kolektor: [
            `Pengetahuan Anda tentang orisinalitas dan filosofi komponennya sungguh menyentuh hati saya. Baiklah, saya naikkan penghargaan saya menjadi $${priceStr}.`,
            `Tepat sekali nak... Jarang ada pemuda yang paham nilai historis seperti Anda. Saya hargai itu dengan menaikkan ke $${priceStr}.`
        ],
        sirkus: [
            `Wahahah bener banget! Part itu emang bikin aura mobilnya makin kocak dan spektakuler! Nih gua tambahin jadi $${priceStr}!`
        ],
        ibu: [
            `Oh begitu ya mas? Bagus dong kalau fiturnya beneran bikin anak-anak aman dan nyaman di jalan. Ya udah deh mas, saya naikin jadi $${priceStr} ya.`
        ],
        pembalap: [
            `Gua suka cara lu tuning part itu! Aerodinamika sama traksi grip-nya emang beneran ngaruh di tikungan tajam. Gua naikin jadi $${priceStr} bro!`
        ]
    };

    const rayuGagalDialogues = {
        tambang: `Alah bos, gak ngaruh gituan buat di lumpur tambang! Jangan jualan angin ke gua, lu kira gua anak kemarin sore?`,
        eksekutif: `Mohon maaf, fitur yang Anda sebutkan tidak relevan dengan kriteria kendaraan dinas formal kami. Fokus ke efisiensi saja.`,
        sultan: `Dih apaan dah bro, itu mah standar biasa aja kali di tongkrongan gua. Gak bikin gua terkesan tuh!`,
        kolektor: `Sayang sekali nak, sentuhan itu justru mengurangi kemurnian estetika era aslinya di mata saya.`,
        sirkus: `Kurang heboh ah mas bro! Masa gituan doang dibilang atraksi panggung? Masih terlalu biasa buat sirkus gua!`,
        ibu: `Duh mas, hal-hal begituan mah gak penting buat saya yang penting aman sama gak boros bensin ya mas.`,
        pembalap: `Gimmick doang itu mah bro, gak bakal nambah lap time gua di sirkuit. Gak ngaruh ke kecepatan puncak!`
    };

    const tawarTolakDialogues = {
        tambang: `Waduh bos, $${offerStr} kemahalan! Anggaran operasional gua mentok di $${compromiseStr}. Gimana, mau ambil gak?`,
        eksekutif: `Angka $${offerStr} melampaui otorisasi anggaran dewan direksi. Batas maksimal yang bisa kami setujui adalah $${compromiseStr}.`,
        sultan: `Santuy bro, $${offerStr} mah ketinggian amat! Gua tau mobil keren tapi gua gak mau rugi bandar. Gua mentok di $${compromiseStr} ya!`,
        kolektor: `Tawaran $${offerStr} agak terlalu berlebihan untuk kondisi saat ini nak. Batas apresiasi wajar saya ada di $${compromiseStr}.`,
        sirkus: `Waduh bosku, tiket sirkus belum nutup kalau $${offerStr}! Kasih gua harga bersahabat di $${compromiseStr} dong!`,
        ibu: `Aduh mas, $${offerStr} mah bisa diomelin suami saya di rumah. Kalau boleh $${compromiseStr} saya usahain deh mas ya.`,
        pembalap: `Weits santai bro, $${offerStr} kemahalan buat modal balap gua. Budget tim gua mentok di $${compromiseStr}, deal?`
    };

    const walkoutDialogues = {
        tambang: `Udah bos, gua ada janji sama mandor tambang lain. Gak ketemu harganya, gua cabut dulu ya!`,
        eksekutif: `Mohon maaf, waktu negosiasi kami terbatas dan kita tidak mencapai titik temu. Pertemuan ini kami akhiri.`,
        sultan: `Yaelah alot bener bro kayak makan sandal! Gua cari mobil lain aja deh di dealer sebelah, bye bro!`,
        kolektor: `Rupanya kita belum berjodoh nak. Semoga mobil ini kelak menemukan pemilik yang tepat. Permisi...`,
        sirkus: `Yah penonton udah pada nunggu nih bosku! Gua cabut duluan ya, dadah!`,
        ibu: `Ya ampun mas alot banget, udah jam jemput anak sekolah nih. Saya cari tempat lain aja ya mas, permisi.`,
        pembalap: `Sesi kualifikasi gua udah mau mulai nih bro. Gak dapet harga pas, gua cabut ke paddock sebelah!`
    };

    const buyerKey = intros[buyerId] ? buyerId : 'tambang';

    if (dialogType === 'intro') {
        const list = intros[buyerKey];
        return list[Math.floor(Math.random() * list.length)];
    } else if (dialogType === 'tawar_sukses') {
        const list = successDialogues[buyerKey];
        return list[Math.floor(Math.random() * list.length)];
    } else if (dialogType === 'tawar_tolak') {
        return tawarTolakDialogues[buyerKey] || `Tawaran $${offerStr} terlalu tinggi. Anggaran maksimal saya adalah $${compromiseStr}.`;
    } else if (dialogType === 'rayu_sukses') {
        const list = rayuSuksesDialogues[buyerKey] || [`Poin yang Anda jelaskan masuk akal. Saya naikkan tawaran saya menjadi $${priceStr}.`];
        return list[Math.floor(Math.random() * list.length)];
    } else if (dialogType === 'rayu_gagal') {
        return rayuGagalDialogues[buyerKey] || `Penjelasan Anda kurang relevan dengan kebutuhan prioritas saya.`;
    } else if (dialogType === 'walkout') {
        return walkoutDialogues[buyerKey] || `Waktu negosiasi sudah habis. Saya batalkan transaksi ini.`;
    }

    return "";
}

// --- TERMINAL NEGOTIATION SCREEN LOGIC (SPLIT-SCREEN) ---

function triggerLaunchNegotiation() {
    const slot = gameState.slots[activeSlotIndex];
    const carModel = CARS_CATALOG.find(c => c.id === slot.car.carId);
    
    // Check if slot has active car
    if (!slot.occupied) return;
    
    // Pre-calculate design metrics
    let speed = carModel.stats.speed;
    let accel = carModel.stats.accel;
    let eco = carModel.stats.eco;
    let flex = carModel.stats.flex;
    let defense = carModel.stats.defense;
    
    slot.car.parts.forEach(p => {
        speed += p.effect.speed;
        accel += p.effect.accel;
        eco += p.effect.eco;
        flex += p.effect.flex;
        defense += p.effect.defense;
    });
    
    speed = Math.max(40, Math.min(650, speed));
    accel = Math.max(0.6, Math.min(25.0, accel));
    eco = Math.max(0, Math.min(100, eco));
    flex = Math.max(0, Math.min(100, flex));
    defense = Math.max(0, Math.min(100, defense));
    
    // Determine target prices & market modifiers
    let baseResale = carModel.price; // catalog price
    let partPrices = slot.car.investment;
    
    // Base bid estimation formula
    let valuation = baseResale + (partPrices * 1.3);
    
    // Apply Market Event modifiers
    if (activeMarketEvent) {
        if (activeMarketEvent.type === 'trend' && activeMarketEvent.catId === carModel.category) {
            valuation = valuation * 1.20; // +20%
        } else if (activeMarketEvent.type === 'crash' && activeMarketEvent.catId === carModel.category) {
            valuation = valuation * 0.80; // -20%
        }
    }
    
    // Roll Buyer details
    let currentBuyer = null;
    let isSpecial = false;
    
    // Check if matches active special order
    if (gameState.activeOrder && 
        gameState.activeOrder.type === carModel.baseChassis && 
        validateSpecialOrderCriteria(gameState.activeOrder, speed, eco, flex, defense, slot.car.color)) {
            // Match! Connect to special order buyer
            currentBuyer = AI_BUYERS.find(b => b.id === gameState.activeOrder.buyerId);
            isSpecial = true;
    } else {
        // Roll normal buyer randomly
        currentBuyer = AI_BUYERS[Math.floor(Math.random() * AI_BUYERS.length)];
    }
    
    // Patient roll (Easy, Medium, Hard)
    let finalPatience = 3;
    if (currentBuyer.difficulty === "Easy") finalPatience = 4 + Math.floor(Math.random() * 2); // 4-5
    else if (currentBuyer.difficulty === "Medium") finalPatience = 3;
    else if (currentBuyer.difficulty === "Hard") finalPatience = 2;
    
    // Evaluate Buyer likes & hates to determine starting offer
    let valuationModifier = 1.0;
    
    // Evaluate likes
    currentBuyer.likes.forEach(like => {
        // check chassis base
        if (like === carModel.baseChassis) valuationModifier += 0.15;
        // check variants
        if (like === carModel.variant) valuationModifier += 0.15;
        // check components
        const hasPart = slot.car.parts.some(p => p.templateId === like);
        if (hasPart) valuationModifier += 0.20;
        // check colors
        if (like === "color-pink" && slot.car.color === "#ff0055") valuationModifier += 0.15;
        if (like === "color-neon" && (slot.car.color === "#00ffcc" || slot.car.color === "#00ff00")) valuationModifier += 0.15;
        if (like === "color-black" && slot.car.color === "#1a1a1a") valuationModifier += 0.15;
        if (like === "color-white" && slot.car.color === "#ffffff") valuationModifier += 0.15;
    });
    
    // Evaluate hates
    currentBuyer.hates.forEach(hate => {
        if (hate === carModel.baseChassis) valuationModifier -= 0.20;
        const hasPart = slot.car.parts.some(p => p.templateId === hate);
        if (hasPart) valuationModifier -= 0.25;
        if (hate === "color-pink" && slot.car.color === "#ff0055") valuationModifier -= 0.20;
        if (hate === "color-neon" && (slot.car.color === "#00ffcc" || slot.car.color === "#00ff00")) valuationModifier -= 0.20;
        if (hate === "color-black" && slot.car.color === "#1a1a1a") valuationModifier -= 0.20;
        if (hate === "color-white" && slot.car.color === "#ffffff") valuationModifier -= 0.20;
    });
    
    let initialBid = Math.round(valuation * valuationModifier);
    
    // If special order, price is pre-agreed + reward
    if (isSpecial) {
        initialBid = Math.round(valuation * 1.1) + gameState.activeOrder.reward;
    }
    
    // Set Session State
    negoSession = {
        car: slot.car,
        buyer: currentBuyer,
        initialBid: initialBid,
        currentBid: initialBid,
        patience: finalPatience,
        maxPatience: finalPatience,
        counterCount: 0,
        persuaded: false,
        isPlacementDeal: gameState.inPlacement,
        isSpecialOrder: isSpecial
    };
    
    // Swap to Showroom screen
    document.getElementById('studio-screen').classList.remove('active');
    document.getElementById('terminal-negotiation-screen').classList.add('active');
    
    // Initialize 3D Showroom WebGL
    initShowroom3D();
    updateShowroom3DModel(carModel.baseChassis, slot.car.color, slot.car.parts);
    
    showroomCarTitle.innerText = carModel.name;
    showroomCarSpecs.innerText = `Top Speed: ${speed} km/h | Accel: ${accel.toFixed(1)}s | Investasi: $${partPrices.toLocaleString()}`;
    
    // Initialize Retro Terminal Command
    terminalConsole.innerHTML = '';
    terminalCliInput.value = '';
    
    logToTerminal(`MENGHUBUNGKAN KE DATABASE BUYER... BERHASIL!`, 'sys');
    setTimeout(() => {
        logToTerminal(`MENCARI HUBUNGAN KLIEN YANG SESUAI... ROLLED!`, 'sys');
        setTimeout(() => {
            printBuyerIntro();
        }, 800);
    }, 600);
}

function validateSpecialOrderCriteria(order, speed, eco, flex, defense, color) {
    if (order.stat === "speed" && speed >= (order.targetVal + 100)) return true;
    if (order.stat === "eco" && eco >= order.targetVal) return true;
    if (order.stat === "flex" && flex >= order.targetVal) return true;
    if (order.stat === "defense" && defense >= order.targetVal) return true;
    return false;
}

function logToTerminal(text, type = 'normal') {
    const log = document.createElement('div');
    log.className = `term-log ${type}`;
    log.innerText = `> ${text}`;
    terminalConsole.appendChild(log);
    
    // Scroll terminal to bottom
    terminalConsole.scrollTop = terminalConsole.scrollHeight;
}

function printBuyerIntro() {
    const info = negoSession.buyer;
    
    let starsStr = "";
    for (let i = 0; i < negoSession.maxPatience; i++) {
        starsStr += i < negoSession.patience ? "■" : "□";
    }
    
    logToTerminal(`============================================================`, 'sys');
    logToTerminal(`KLIEN TERHUBUNG: ${info.name}`, 'sys');
    logToTerminal(`Kesulitan : ${info.difficulty.toUpperCase()} (Kesabaran: [${starsStr}])`, 'sys');
    logToTerminal(`Deskripsi : ${info.desc}`, 'sys');
    logToTerminal(`Suka      : [${info.likes.join(", ")}]`, 'success');
    logToTerminal(`Benci     : [${info.hates.join(", ")}]`, 'error');
    logToTerminal(`============================================================`, 'sys');
    
    if (negoSession.isSpecialOrder) {
        logToTerminal(`[MISI KHUSUS]: Buyer mencocokkan spesifikasi pesanan khusus!`, 'warn');
    }
    
    const introDialogue = getBuyerDialogue(info.id, 'intro', { price: negoSession.currentBid });
    logToTerminal(`${info.name}: "${introDialogue}"`, 'normal');
    logToTerminal(`Ketik perintah Anda di bawah:`, 'sys');
    logToTerminal(`/terima        - Setujui penjualan senilai $${negoSession.currentBid.toLocaleString()}`, 'sys');
    logToTerminal(`/tawar [harga] - Ajukan tawar balik (contoh: /tawar ${Math.round(negoSession.currentBid * 1.25)})`, 'sys');
    logToTerminal(`/rayu [alasan] - Bujuk buyer dengan menyebutkan fitur mobil (contoh: /rayu mobil ini punya ban monster)`, 'sys');
    logToTerminal(`/lewati        - Batalkan nego & cari buyer lain (GRATIS)`, 'sys');
}

function processTerminalCommand(inputLine) {
    const line = inputLine.trim();
    if (line === "") return;
    
    logToTerminal(line, 'user');
    terminalCliInput.value = '';
    
    const parts = line.split(" ");
    const cmd = parts[0].toLowerCase();
    
    if (cmd === "/terima") {
        executeAcceptDeal();
    } else if (cmd === "/tawar") {
        if (parts.length < 2) {
            logToTerminal(`ERROR: Format perintah salah. Gunakan /tawar [angka-harga]`, 'error');
            return;
        }
        const offer = parseInt(parts[1]);
        if (isNaN(offer) || offer <= 0) {
            logToTerminal(`ERROR: Harga penawaran tidak valid.`, 'error');
            return;
        }
        executeCounterOffer(offer);
    } else if (cmd === "/rayu") {
        const reason = parts.slice(1).join(" ");
        if (reason.trim() === "") {
            logToTerminal(`ERROR: Format perintah salah. Gunakan /rayu [alasan/fitur mobil]`, 'error');
            logToTerminal(`Contoh: /rayu mobil ini dilengkapi dengan ban monster dan bumper duri penabrak`, 'sys');
            return;
        }
        executePersuade(reason);
    } else if (cmd === "/lewati") {
        executeSkipNegotiation();
    } else {
        logToTerminal(`ERROR: Perintah '${cmd}' tidak dikenali. Ketik /terima, /tawar [harga], /rayu [alasan], atau /lewati.`, 'error');
    }
}

// 1. Terima Deal
function executeAcceptDeal() {
    const profit = negoSession.currentBid - negoSession.car.investment;
    
    gameState.cash += negoSession.currentBid;
    
    // Clear slot
    gameState.slots[activeSlotIndex] = { occupied: false, car: null };
    
    logToTerminal(`PENGIRIMAN DATA TRANSAKSI... BERHASIL!`, 'sys');
    logToTerminal(`HARGA DEAL SEPAKAT: $${negoSession.currentBid.toLocaleString()}`, 'success');
    logToTerminal(`Kas Studio (Total): $${gameState.cash.toLocaleString()}`, 'sys');
    
    if (negoSession.isSpecialOrder) {
        // Special order success: +1 star, cash reward is already included in bid price
        logToTerminal(`MISI KHUSUS BERHASIL! Anda menyelesaikan pesanan klien tepat waktu!`, 'success');
        clearInterval(gameState.orderTimerId);
        gameState.activeOrder = null;
        specialOrderCard.classList.add('empty');
        
        // Add 1 star bonus
        if (!gameState.inPlacement && gameState.rank < 6) {
            gameState.stars = Math.min(10, gameState.stars + 1);
            if (gameState.stars >= 10) {
                rankUp();
            }
        }
        
        gameState.winStreak++;
        gameState.loseStreak = 0;
    } else {
        // Normal deal success
        if (profit > 0) {
            logToTerminal(`Transaksi sukses! Profit bersih sebesar +$${profit.toLocaleString()}`, 'success');
            
            // Placement mode
            if (gameState.inPlacement) {
                gameState.placementProgress++;
                if (gameState.placementProgress >= 7) {
                    // Complete Placement -> Mythic Immortal!
                    gameState.rank = 6;
                    gameState.inPlacement = false;
                    gameState.stars = 10;
                    alert("🏆 SELAMAT! Anda telah menyelesaikan Tantangan Penempatan Mythic dan resmi mencapai Rank tertinggi: MYTHIC IMMORTAL!");
                }
            } else {
                // Add regular star
                gameState.stars++;
                if (gameState.stars >= 10) {
                    if (gameState.rank === 5) {
                        // Automotive Legend -> Placement Challenge
                        gameState.inPlacement = true;
                        gameState.placementProgress = 0;
                        alert("🔥 ANDA MEMASUKI FASE MYTHIC PLACEMENT! Jual mobil kepada 7 buyer berturut-turut untuk meraih gelar MYTHIC IMMORTAL!");
                    } else {
                        rankUp();
                    }
                }
            }
            
            gameState.winStreak++;
            gameState.loseStreak = 0;
            
            // Win streak bonus
            if (gameState.winStreak >= 3 && !gameState.inPlacement && gameState.rank < 6) {
                gameState.stars = Math.min(10, gameState.stars + 3);
                logToTerminal(`WIN STREAK ${gameState.winStreak}x! Bonus +3 Bintang Reputasi! 🔥`, 'success');
                if (gameState.stars >= 10) {
                    if (gameState.rank === 5) {
                        gameState.inPlacement = true;
                        gameState.placementProgress = 0;
                    } else {
                        rankUp();
                    }
                }
            }
        } else {
            // Successful sale but loss in components (Jual rugi)
            logToTerminal(`Transaksi selesai namun rugi sebesar -$${Math.abs(profit).toLocaleString()}`, 'warn');
            applyFailurePenalty();
        }
    }
    
    saveGameData();
    updateHUD();
    renderDashboardSlots();
    
    setTimeout(() => {
        exitNegotiationScreen();
    }, 3000);
}

// 2. Counter-Offer (Tawar Balik)
function executeCounterOffer(offer) {
    negoSession.counterCount++;
    
    // Evaluation math logic
    const margin = offer / negoSession.initialBid;
    
    // Auto accept up to 1.50x of initialBid
    const success = (margin <= 1.50);
    
    if (success) {
        negoSession.currentBid = offer;
        const dialogue = getBuyerDialogue(negoSession.buyer.id, 'tawar_sukses', { offer: offer });
        logToTerminal(`${negoSession.buyer.name}: "${dialogue}"`, 'success');
        logToTerminal(`AUTO-ACCEPT: Transaksi diterima secara otomatis! Menyelesaikan penjualan...`, 'sys');
        
        // Auto accept deal!
        setTimeout(() => {
            executeAcceptDeal();
        }, 1200);
    } else {
        // Rejection compromise without losing patience (no walkouts)
        const maxNego = Math.round(negoSession.initialBid * 1.50);
        logToTerminal(`${negoSession.buyer.name}: "Tawaran Anda terlalu tinggi! Anggaran maksimal saya adalah $${maxNego.toLocaleString()}. Tolong ajukan penawaran di bawah itu."`, 'normal');
    }
}

// 3. Persuade (Rayu)
function executePersuade(reason) {
    if (negoSession.persuaded) {
        logToTerminal(`Anda sudah merayu buyer sebelumnya. Ulangi bujukan tidak akan menambah pengaruh.`, 'warn');
        return;
    }
    if (negoSession.patience <= 0) {
        logToTerminal(`Kesabaran buyer habis untuk mendengar rayuan Anda.`, 'error');
        return;
    }
    
    negoSession.patience--;
    updateTerminalPatienceDisplay();
    
    logToTerminal(`Anda mencoba membujuk buyer...`, 'user');
    logToTerminal(`Argumen Anda: "${reason}"`, 'user');
    
    // Keyword matching logic
    const text = reason.toLowerCase();
    const buyerKeywords = BUYER_KEYWORDS[negoSession.buyer.id];
    
    let matchedLikes = [];
    let matchedHates = [];
    
    if (buyerKeywords) {
        buyerKeywords.likes.forEach(kw => {
            if (text.includes(kw)) matchedLikes.push(kw);
        });
        buyerKeywords.hates.forEach(kw => {
            if (text.includes(kw)) matchedHates.push(kw);
        });
    }
    
    // Base success chance: 50%
    let successChance = 0.50;
    
    // Add bonus for matched likes in text
    if (matchedLikes.length > 0) {
        successChance += 0.20 * matchedLikes.length;
        logToTerminal(`[INFO]: Klien tampak tertarik karena Anda menyebutkan: [${matchedLikes.join(", ")}]!`, 'success');
    }
    
    // Subtract penalty for matched hates in text
    if (matchedHates.length > 0) {
        successChance -= 0.30 * matchedHates.length;
        logToTerminal(`[WARNING]: Klien tampak kurang senang karena Anda menyebutkan: [${matchedHates.join(", ")}]!`, 'error');
    }
    
    // Add buff/debuff for actual physical components installed on the car
    negoSession.buyer.likes.forEach(like => {
        if (negoSession.car.parts.some(p => p.templateId === like)) successChance += 0.15;
    });
    negoSession.buyer.hates.forEach(hate => {
        if (negoSession.car.parts.some(p => p.templateId === hate)) successChance -= 0.25;
    });
    
    successChance = Math.max(0.05, Math.min(0.95, successChance));
    const success = Math.random() < successChance;
    
    if (success) {
        negoSession.persuaded = true;
        // Raise current bid by 12% as a bonus influence
        const bonus = Math.round(negoSession.currentBid * 0.12);
        negoSession.currentBid += bonus;
        
        const dialogue = getBuyerDialogue(negoSession.buyer.id, 'rayu_sukses', { price: negoSession.currentBid });
        logToTerminal(`${negoSession.buyer.name}: "${dialogue}"`, 'success');
        logToTerminal(`Pengaruh rayuan aktif: Kemungkinan tawar balik sukses meningkat!`, 'sys');
    } else {
        const dialogue = getBuyerDialogue(negoSession.buyer.id, 'rayu_gagal');
        logToTerminal(`${negoSession.buyer.name}: "${dialogue}"`, 'normal');
    }
}

// 4. Skip / Roll Ulang Gratis
function executeSkipNegotiation() {
    logToTerminal(`Membatalkan negosiasi saat ini... GRATIS.`, 'sys');
    logToTerminal(`Mencari hubungan buyer baru...`, 'sys');
    
    setTimeout(() => {
        triggerLaunchNegotiation();
    }, 500);
}

// Walkout Logic
function executeWalkout() {
    const dialogue = getBuyerDialogue(negoSession.buyer.id, 'walkout');
    logToTerminal(`${negoSession.buyer.name}: "${dialogue}"`, 'error');
    applyFailurePenalty();
    
    saveGameData();
    updateHUD();
    
    setTimeout(() => {
        exitNegotiationScreen();
    }, 3000);
}

function applyFailurePenalty() {
    gameState.winStreak = 0;
    gameState.loseStreak++;
    
    // Reputasi penalty
    if (gameState.inPlacement) {
        // Break placement streak!
        gameState.placementProgress = 0;
        logToTerminal(`Tantangan Mythic Placement terputus! Misi direset ke 0/7.`, 'error');
    } else {
        if (gameState.stars > 0) {
            gameState.stars--;
        } else {
            gameState.rank = Math.max(0, gameState.rank - 1);
            gameState.stars = 9;
        }
    }
    
    // Lose streak bonus penalty
    if (gameState.loseStreak >= 2) {
        if (gameState.inPlacement) {
            gameState.placementProgress = 0;
        } else {
            if (gameState.stars >= 2) gameState.stars -= 2;
            else {
                gameState.rank = Math.max(0, gameState.rank - 1);
                gameState.stars = 8;
            }
            logToTerminal(`LOSE STREAK ${gameState.loseStreak}x! Reputasi berkurang tambahan -2 Bintang! 📉`, 'error');
        }
    }
}

function updateTerminalPatienceDisplay() {
    let starsStr = "";
    for (let i = 0; i < negoSession.maxPatience; i++) {
        starsStr += i < negoSession.patience ? "■" : "□";
    }
    logToTerminal(`[Kesabaran Buyer: ${starsStr}]`, 'sys');
}

function rankUp() {
    if (gameState.rank < 5) {
        gameState.rank++;
        gameState.stars = 0;
        alert(`🎉 SELAMAT! Reputasi Anda meningkat. Rank naik menjadi: ${RANKS[gameState.rank].name.toUpperCase()}!`);
    }
}

function exitNegotiationScreen() {
    document.getElementById('terminal-negotiation-screen').classList.remove('active');
    document.getElementById('dashboard-screen').classList.add('active');
}

// --- BUTTONS & EVENT LISTENERS SETUP ---

function setupGlobalEventListeners() {
    // Open catalog button in slots
    document.querySelectorAll('.btn-open-dealer').forEach((btn, index) => {
        btn.addEventListener('click', () => {
            activeSlotIndex = index;
            openDealerCatalog();
        });
    });
    
    // Close Catalog Modal
    document.getElementById('btn-close-dealer').addEventListener('click', () => {
        dealerModal.classList.add('hidden');
    });
    
    // Catalog Filter Search
    dealerSearch.addEventListener('input', () => {
        const activeTab = document.querySelector('.category-tab-link.active');
        const activeFilter = document.querySelector('.filter-btn.active');
        const searchVal = dealerSearch.value;
        const catId = activeTab ? activeTab.parentElement.querySelector('button.active span').innerText : "all";
        
        // Find raw cat ID
        const matchedCat = VEHICLE_CATEGORIES.find(c => c.name === catId);
        const catIdFinal = matchedCat ? matchedCat.id : "all";
        
        renderCatalogGrid(catIdFinal, activeFilter.dataset.filter, searchVal);
    });
    
    // Catalog Filter Buttons
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const activeTab = document.querySelector('.category-tab-link.active span').innerText;
            const matchedCat = VEHICLE_CATEGORIES.find(c => c.name === activeTab);
            const catIdFinal = matchedCat ? matchedCat.id : "all";
            
            renderCatalogGrid(catIdFinal, btn.dataset.filter, dealerSearch.value);
        });
    });
    
    // Dashboard Slot action buttons
    document.querySelectorAll('.btn-edit-slot').forEach((btn, index) => {
        btn.addEventListener('click', () => {
            openStudioEditor(index);
        });
    });
    
    document.querySelectorAll('.btn-sell-slot').forEach((btn, index) => {
        btn.addEventListener('click', () => {
            const slot = gameState.slots[index];
            if (slot.occupied && slot.car.parts.length < 3) {
                alert("Mobil belum selesai dirancang! Pasang minimal 3 komponen di Studio Desain sebelum menjual.");
                return;
            }
            activeSlotIndex = index;
            triggerLaunchNegotiation();
        });
    });
    
    // Special Order Accept button
    btnAcceptOrder.addEventListener('click', () => {
        if (!gameState.activeOrder) return;
        
        // Find empty slot to place sasis
        const emptyIdx = gameState.slots.findIndex(s => !s.occupied);
        if (emptyIdx === -1) {
            alert("Workspace Penuh! Selesaikan atau ganti mobil di slot lain terlebih dahulu.");
            return;
        }
        
        // Find any cheapest model of the target sasis class in catalog
        const matchCar = CARS_CATALOG.find(c => c.baseChassis === gameState.activeOrder.type && c.variant === "Cheapest");
        activeSlotIndex = emptyIdx;
        selectChassisForActiveSlot(matchCar);
    });
    
    // Back to Dashboard from Studio
    document.getElementById('btn-back-to-dashboard').addEventListener('click', () => {
        resetCanvasRotation();
        document.getElementById('studio-screen').classList.remove('active');
        document.getElementById('dashboard-screen').classList.add('active');
        renderDashboardSlots();
        updateHUD();
    });
    
    // Studio Launch Sell Button
    document.getElementById('btn-launch-sell').addEventListener('click', () => {
        if (placedParts.length < 3) {
            alert("Mobil belum selesai dirancang! Pasang minimal 3 komponen di Studio Desain sebelum menjual.");
            return;
        }
        triggerLaunchNegotiation();
    });
    
    // Tab switching (Left Sidebar component selection)
    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            tabButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderPartsDrawer(btn.dataset.tab);
        });
    });
    
    // Color picking swatches in Editor
    colorSwatches.forEach(swatch => {
        swatch.addEventListener('click', () => {
            applyColor(swatch.dataset.color);
            saveActiveSlotChanges();
        });
    });
    
    // Clear Canvas Studio
    document.getElementById('btn-clear-canvas').addEventListener('click', () => {
        if (confirm("Apakah kamu yakin ingin menghapus semua aksesoris tambahan di slot ini?")) {
            placedParts = [];
            selectPart(null);
            renderPlacedParts();
            saveActiveSlotChanges();
        }
    });
    
    // Transform operations
    // Transform operations (wrapped in checks since they are replaced in HTML by installed list)
    const btnFlip = document.getElementById('transform-flip');
    if (btnFlip) {
        btnFlip.addEventListener('click', () => {
            if (selectedPartIndex !== null) {
                placedParts[selectedPartIndex].flipped = !placedParts[selectedPartIndex].flipped;
                renderPlacedParts();
                saveActiveSlotChanges();
            }
        });
    }
    const btnScaleUp = document.getElementById('transform-scale-up');
    if (btnScaleUp) {
        btnScaleUp.addEventListener('click', () => {
            if (selectedPartIndex !== null) {
                placedParts[selectedPartIndex].scale = Math.min(2.5, placedParts[selectedPartIndex].scale + 0.1);
                renderPlacedParts();
                saveActiveSlotChanges();
            }
        });
    }
    const btnScaleDown = document.getElementById('transform-scale-down');
    if (btnScaleDown) {
        btnScaleDown.addEventListener('click', () => {
            if (selectedPartIndex !== null) {
                placedParts[selectedPartIndex].scale = Math.max(0.4, placedParts[selectedPartIndex].scale - 0.1);
                renderPlacedParts();
                saveActiveSlotChanges();
            }
        });
    }
    const btnRotLeft = document.getElementById('transform-rotate-left');
    if (btnRotLeft) {
        btnRotLeft.addEventListener('click', () => {
            if (selectedPartIndex !== null) {
                placedParts[selectedPartIndex].rotation = (placedParts[selectedPartIndex].rotation - 15) % 360;
                renderPlacedParts();
                saveActiveSlotChanges();
            }
        });
    }
    const btnRotRight = document.getElementById('transform-rotate-right');
    if (btnRotRight) {
        btnRotRight.addEventListener('click', () => {
            if (selectedPartIndex !== null) {
                placedParts[selectedPartIndex].rotation = (placedParts[selectedPartIndex].rotation + 15) % 360;
                renderPlacedParts();
                saveActiveSlotChanges();
            }
        });
    }
    
    const btnDelete = document.getElementById('transform-delete');
    if (btnDelete) {
        btnDelete.addEventListener('click', () => {
            if (selectedPartIndex !== null) {
                const refund = Math.round(placedParts[selectedPartIndex].price * 0.5);
                gameState.cash += refund;
                studioCashVal.innerText = `$${gameState.cash.toLocaleString()}`;
                alert(`Komponen dihapus! Anda mendapatkan pengembalian kas 50% sebesar $${refund.toLocaleString()}.`);
                
                placedParts.splice(selectedPartIndex, 1);
                selectPart(null);
                renderPlacedParts();
                saveActiveSlotChanges();
                updateHUD();
            }
        });
    }
    
    // Reset game button
    document.getElementById('btn-reset-game').addEventListener('click', () => {
        if (confirm("Yakin ingin menghapus seluruh data progres kas, reputasi rank, dan workspace? Tindakan ini tidak bisa dibatalkan!")) {
            localStorage.removeItem('keep_notes_car_lab_save');
            location.reload();
        }
    });
    
    // Terminal Command Prompt Action Buttons
    document.getElementById('btn-term-accept').addEventListener('click', () => {
        processTerminalCommand("/terima");
    });
    document.getElementById('btn-term-counter').addEventListener('click', () => {
        const val = prompt("Masukkan nilai tawar balik Anda (contoh: 75000):");
        if (val) {
            processTerminalCommand(`/tawar ${val}`);
        }
    });
    document.getElementById('btn-term-persuade').addEventListener('click', () => {
        processTerminalCommand("/rayu");
    });
    document.getElementById('btn-term-skip').addEventListener('click', () => {
        processTerminalCommand("/lewati");
    });
    
    // Terminal real-time text input submit
    terminalCliInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const val = terminalCliInput.value;
            processTerminalCommand(val);
        }
    });
    
    // Active initial load drawer
    renderPartsDrawer('wheels');

    // Create account button
    const btnCreateAcc = document.getElementById('btn-create-account');
    if (btnCreateAcc) {
        btnCreateAcc.addEventListener('click', createAccount);
    }

    // Pause game button
    const btnPauseGame = document.getElementById('btn-pause-game');
    if (btnPauseGame) {
        btnPauseGame.addEventListener('click', () => {
            gameState.isPaused = !gameState.isPaused;
            updatePauseButtonUI();
            saveGameData();
        });
    }

    // Enter key on account inputs
    ['input-username', 'input-studioname'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.addEventListener('keydown', (e) => { if (e.key === 'Enter') createAccount(); });
    });

    // Rotation buttons
    const rotYLeft = document.getElementById('rot-y-left');
    const rotYRight = document.getElementById('rot-y-right');
    const rotXUp = document.getElementById('rot-x-up');
    const rotXDown = document.getElementById('rot-x-down');
    const rotReset = document.getElementById('rot-reset');

    if (rotYLeft) rotYLeft.addEventListener('click', () => { carRotY = (carRotY - ROT_STEP) % 720; applyCanvasRotation(); });
    if (rotYRight) rotYRight.addEventListener('click', () => { carRotY = (carRotY + ROT_STEP) % 720; applyCanvasRotation(); });
    if (rotXUp) rotXUp.addEventListener('click', () => { carRotX = (carRotX - ROT_STEP) % 720; applyCanvasRotation(); });
    if (rotXDown) rotXDown.addEventListener('click', () => { carRotX = (carRotX + ROT_STEP) % 720; applyCanvasRotation(); });
    if (rotReset) rotReset.addEventListener('click', resetCanvasRotation);

    const btnToggleInterior = document.getElementById('btn-toggle-interior');
    if (btnToggleInterior) {
        btnToggleInterior.addEventListener('click', () => {
            viewInteriorActive = !viewInteriorActive;
            if (viewInteriorActive) {
                btnToggleInterior.innerHTML = `<i class="fa-solid fa-couch"></i> Interior: ON`;
                btnToggleInterior.style.background = "rgba(0, 255, 204, 0.35)";
                if (studio3D.controls && studio3D.camera) {
                    studio3D.camera.position.set(0, 1.8, 3.5);
                    studio3D.controls.target.set(0, 0.8, 0);
                    studio3D.controls.update();
                }
            } else {
                btnToggleInterior.innerHTML = `<i class="fa-solid fa-couch"></i> Interior: OFF`;
                btnToggleInterior.style.background = "rgba(0, 255, 204, 0.15)";
                if (studio3D.controls && studio3D.camera) {
                    studio3D.camera.position.set(5.5, 2.5, 7.0);
                    studio3D.controls.target.set(0, 0.4, 0);
                    studio3D.controls.update();
                }
            }
            updateStudio3DModel();
        });
    }

    // Drag to rotate canvas
    const rotWrapper = document.getElementById('canvas-rotation-wrapper');
    if (rotWrapper) {
        let isDragging = false;
        let dragStartX = 0, dragStartY = 0;
        let dragStartRotX = 0, dragStartRotY = 0;

        rotWrapper.addEventListener('mousedown', (e) => {
            // Only start drag if not clicking on a placed part
            if (e.target.closest('.placed-part')) return;
            isDragging = true;
            dragStartX = e.clientX;
            dragStartY = e.clientY;
            dragStartRotX = carRotX;
            dragStartRotY = carRotY;
            rotWrapper.style.cursor = 'grabbing';
        });

        document.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            const dx = e.clientX - dragStartX;
            const dy = e.clientY - dragStartY;
            carRotY = dragStartRotY + dx * 0.5;
            carRotX = dragStartRotX - dy * 0.5;
            // Clamp within 720 degrees
            carRotY = Math.max(-720, Math.min(720, carRotY));
            carRotX = Math.max(-720, Math.min(720, carRotX));
            applyCanvasRotation();
        });

        document.addEventListener('mouseup', () => {
            isDragging = false;
            rotWrapper.style.cursor = 'grab';
        });

        rotWrapper.style.cursor = 'grab';
    }

    // Terminal keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        const termScreen = document.getElementById('terminal-negotiation-screen');
        if (!termScreen || !termScreen.classList.contains('active')) return;
        const input = document.getElementById('terminal-cli-input');
        if (e.key === 'Escape') { e.preventDefault(); processTerminalCommand('/lewati'); }
        else if ((e.key === 'r' || e.key === 'R') && document.activeElement !== input) { e.preventDefault(); processTerminalCommand('/rayu'); }
        else if ((e.key === 't' || e.key === 'T') && document.activeElement !== input) { e.preventDefault(); if (input) { input.value = '/tawar '; input.focus(); } }
    });

    // AI Advisor
    setupAdvisorEvents();
}

// ─────────────────────────────────────────────
// AI CAR ADVISOR
// ─────────────────────────────────────────────
const PART_PRO_CON = {
    'wheel-alloy-sport':     { pro: 'Ringan, tambah speed',           con: 'Kurang kuat di offroad' },
    'wheel-jdm-classic':     { pro: 'Gaya JDM klasik, naik Flex',     con: 'Speed sedikit berkurang' },
    'wheel-chrome-luxury':   { pro: 'Flex tinggi, mewah',             con: 'Berat, eco turun' },
    'wheel-steelie':         { pro: 'Murah, defense naik',            con: 'Flex sangat turun' },
    'wheel-slick-racing':    { pro: 'Speed +45, grip balap',          con: 'Eco turun, mahal' },
    'wheel-at-offroad':      { pro: 'Defense +25, segala medan',      con: 'Speed berkurang' },
    'wheel-mt-mud':          { pro: 'Defense +50, cocok lumpur',      con: 'Speed -25, eco -15' },
    'wheel-drift-hard':      { pro: 'Flex +35, mudah drift',          con: 'Sedikit nambah accel time' },
    'wheel-monster':         { pro: 'Defense +35, wow-factor',        con: 'Speed -30, eco -20' },
    'wheel-tank':            { pro: 'Defense +80, tak terbendung',    con: 'Speed -60, sangat mahal' },
    'spoiler-carbon':        { pro: 'Speed +20, downforce GT',        con: 'Eco sedikit turun' },
    'spoiler-biplane':       { pro: 'Flex +55, super efek visual',    con: 'Speed -10, eco -15' },
    'spoiler-ducktail':      { pro: 'Speed +10, elegan klasik',       con: 'Efek minimal' },
    'spoiler-drag':          { pro: 'Speed +35, stabil lurus',        con: 'Eco turun sedikit' },
    'engine-i4':             { pro: 'Eco +10, hemat BBM',             con: 'Speed sedang' },
    'engine-v6':             { pro: 'Speed +65, performa sport',      con: 'Eco turun' },
    'engine-v8':             { pro: 'Speed +110, tenaga brutal',      con: 'Eco -15, mahal' },
    'engine-v12':            { pro: 'Speed +220, prestise tinggi',    con: 'Eco -30, sangat mahal' },
    'engine-rotary':         { pro: 'Speed +55, JDM iconic',          con: 'Eco turun' },
    'engine-electric':       { pro: 'Eco +45, torsi instan',          con: 'Mahal, tidak bersuara' },
    'engine-hydrogen':       { pro: 'Eco +80, zero karbon',           con: 'Speed moderat, mahal' },
    'engine-w16':            { pro: 'Speed +320, 1500HP',             con: 'Eco -50, sangat mahal' },
    'exhaust-straight':      { pro: 'Speed +18, suara keras',         con: 'Eco -10, berisik' },
    'exhaust-titanium':      { pro: 'Speed +25, Flex +30',            con: 'Mahal' },
    'neon-blue':             { pro: 'Flex +25, tampilan keren',       con: 'Eco sedikit turun' },
    'neon-pink':             { pro: 'Flex +25, mencolok',             con: 'Eco sedikit turun' },
    'suspension-ceper':      { pro: 'Speed +25, Flex +35, JDM',      con: 'Defense -10, keras' },
    'roof-solar':            { pro: 'Eco +50, ramah lingkungan',      con: 'Speed -5, mahal' },
    'front-ram':             { pro: 'Defense +90, intimidasi',        con: 'Speed -10, berat' },
    'tabung-nos':            { pro: 'Speed +120, akselerasi ekstrem', con: 'Eco -25, berbahaya' },
    'sticker-racing-stripes':{ pro: 'Gaya balap, speed +5',          con: 'Efek minimal' },
    'sticker-flame':         { pro: 'Flex +25, garang',              con: 'Efek performa minimal' },
    'sticker-carbon-hood':   { pro: 'Flex +30, karbon keren',        con: 'Biaya ekstra' },
    'interior-seat-sparco':  { pro: 'Flex +20, nyaman balap',        con: 'Tidak pengaruh speed' },
    'interior-rollcage':     { pro: 'Defense +45, safety',           con: 'Speed sedikit turun' },
};

function runAdvisorAnalysis(inputText) {
    const scores = {};
    function add(id, pts) { scores[id] = (scores[id] || 0) + pts; }

    if (/kencang|cepat|speed|balap|drift|drag|sirkuit|turbo|trek/i.test(inputText)) {
        add('engine-v8', 3); add('engine-v6', 2); add('tabung-nos', 2);
        add('spoiler-drag', 2); add('spoiler-carbon', 2); add('wheel-slick-racing', 3); add('exhaust-titanium', 2);
    }
    if (/drift|jdm|jepang|japan|slide|oversteer/i.test(inputText)) {
        add('wheel-drift-hard', 3); add('suspension-ceper', 3); add('engine-rotary', 3);
        add('wheel-jdm-classic', 2); add('exhaust-straight', 2);
    }
    if (/offroad|off-road|lumpur|gunung|tangguh|medan/i.test(inputText)) {
        add('wheel-mt-mud', 3); add('wheel-at-offroad', 3); add('front-ram', 2);
    }
    if (/eco|listrik|elektrik|hijau|hemat|lingkungan|solar|hydrogen|ev/i.test(inputText)) {
        add('engine-electric', 3); add('engine-hydrogen', 3); add('roof-solar', 3); add('engine-i4', 2);
    }
    if (/mewah|luxury|premium|elegan|prestis|bisnis|formal/i.test(inputText)) {
        add('wheel-chrome-luxury', 3); add('engine-v12', 2); add('interior-seat-sparco', 2);
    }
    if (/keren|gaya|flex|tampilan|estetik|visual|stiker|dekorasi/i.test(inputText)) {
        add('neon-blue', 2); add('neon-pink', 2); add('sticker-flame', 2); add('sticker-carbon-hood', 2); add('spoiler-biplane', 2);
    }
    if (/aman|safety|keluarga|pelindung|crash/i.test(inputText)) {
        add('interior-rollcage', 3); add('front-ram', 2);
    }
    if (/murah|budget|hemat|ekonomis|terjangkau/i.test(inputText)) {
        add('wheel-steelie', 2); add('engine-i4', 2);
    }
    if (/muscle|mustang|v8|amerika|brutal|gahar/i.test(inputText)) {
        add('engine-v8', 3); add('exhaust-straight', 2); add('sticker-racing-stripes', 2);
    }

    const allParts = {};
    Object.values(PARTS_LIBRARY).forEach(arr => arr.forEach(p => { allParts[p.id] = p; }));

    return Object.entries(scores)
        .filter(([id, sc]) => sc > 0 && allParts[id])
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5)
        .map(([id, score]) => ({ part: allParts[id], score }));
}

function renderAdvisorResult(recs) {
    const el = document.getElementById('advisor-result');
    if (!el) return;
    el.classList.remove('hidden');
    if (!recs.length) {
        el.innerHTML = '<div class="advisor-empty"><i class="fa-solid fa-robot"></i><br>Coba deskripsikan lebih spesifik! (contoh: kencang, JDM, offroad, eco)</div>';
        return;
    }
    el.innerHTML = '';
    recs.forEach(({ part, score }) => {
        const pc = PART_PRO_CON[part.id] || { pro: 'Menambah nilai sasis', con: 'Biaya tambahan' };
        const lvl = score >= 5 ? 'high' : 'med';
        const lbl = score >= 5 ? 'Sangat Cocok' : 'Cocok';
        const card = document.createElement('div');
        card.className = 'advisor-rec-card';
        card.innerHTML = `
            <div class="advisor-rec-name">
                <span>${part.name}</span>
                <span class="advisor-match-badge advisor-match-${lvl}">${lbl}</span>
            </div>
            <div class="advisor-rec-price">💰 $${part.price.toLocaleString()}</div>
            <div class="advisor-rec-desc">${part.desc}</div>
            <div class="advisor-pro-con">
                <div class="advisor-pro">✅ ${pc.pro}</div>
                <div class="advisor-con">⚠️ ${pc.con}</div>
            </div>
        `;
        el.appendChild(card);
    });
}

function setupAdvisorEvents() {
    const btnAsk    = document.getElementById('btn-ask-advisor');
    const btnToggle = document.getElementById('btn-toggle-advisor');
    const body      = document.getElementById('advisor-body');

    if (btnAsk) {
        btnAsk.addEventListener('click', () => {
            const inp = document.getElementById('advisor-input');
            if (!inp || !inp.value.trim()) return;
            renderAdvisorResult(runAdvisorAnalysis(inp.value));
        });
    }
    if (btnToggle && body) {
        btnToggle.addEventListener('click', () => {
            body.classList.toggle('collapsed');
            const icon = btnToggle.querySelector('i');
            if (icon) icon.className = body.classList.contains('collapsed')
                ? 'fa-solid fa-chevron-right'
                : 'fa-solid fa-chevron-down';
        });
    }
    const ta = document.getElementById('advisor-input');
    if (ta) {
        ta.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); if (btnAsk) btnAsk.click(); }
        });
    }
}
