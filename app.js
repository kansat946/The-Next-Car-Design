// --- CONFIGURATION & DATA ---

// Base visual chassis styles (SVG definitions)
const CHASSIS_SVG = {
    sedan: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
        <path class="car-paintable" d="M120,180 L80,180 C60,180 50,170 50,150 L50,140 C50,120 70,110 100,105 L180,95 L250,50 L420,50 L490,100 L540,110 C565,115 575,130 575,150 L575,180 L520,180 C520,150 490,150 490,180 L230,180 C230,150 200,150 200,180 Z" fill="#ff0055" stroke="#111" stroke-width="3"/>
        <path d="M260,60 L405,60 L460,100 L340,100 L340,60 Z" fill="#1d2731" opacity="0.8" stroke="#111" stroke-width="2"/>
        <path d="M250,60 L330,60 L330,100 L195,100 Z" fill="#1d2731" opacity="0.8" stroke="#111" stroke-width="2"/>
        <polygon points="545,115 570,120 565,135 540,125" fill="#fff5cc" stroke="#111"/>
        <polygon points="550,118 568,122 564,130 545,123" fill="#ffe066"/>
        <path d="M55,125 L75,122 L70,140 L50,140 Z" fill="#ff3333" stroke="#111"/>
        <path d="M45,160 L70,160 M555,165 L575,165" stroke="#333" stroke-width="4" stroke-linecap="round"/>
        <circle cx="200" cy="180" r="35" fill="none" stroke="rgba(255,255,255,0.1)" stroke-dasharray="5,5"/>
        <circle cx="490" cy="180" r="35" fill="none" stroke="rgba(255,255,255,0.1)" stroke-dasharray="5,5"/>
    </svg>`,
    suv: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
        <path class="car-paintable" d="M120,190 L80,190 C60,190 45,175 45,150 L45,120 C45,100 60,95 85,95 L180,95 L220,45 L480,45 L500,95 L550,105 C570,110 575,125 575,150 L575,190 L525,190 C525,160 495,160 495,190 L225,190 C225,160 195,160 195,190 Z" fill="#ff0055" stroke="#111" stroke-width="3"/>
        <path d="M235,55 L350,55 L350,95 L185,95 Z" fill="#1d2731" opacity="0.8" stroke="#111" stroke-width="2"/>
        <path d="M360,55 L465,55 L485,95 L360,95 Z" fill="#1d2731" opacity="0.8" stroke="#111" stroke-width="2"/>
        <polygon points="550,110 570,115 568,135 548,130" fill="#fff5cc" stroke="#111"/>
        <path d="M45,110 L65,110 L65,135 L45,135 Z" fill="#ff3333" stroke="#111"/>
        <line x1="250" y1="38" x2="450" y2="38" stroke="#333" stroke-width="6" stroke-linecap="round"/>
        <line x1="280" y1="38" x2="280" y2="45" stroke="#333" stroke-width="4"/>
        <line x1="420" y1="38" x2="420" y2="45" stroke="#333" stroke-width="4"/>
        <circle cx="195" cy="190" r="35" fill="none" stroke="rgba(255,255,255,0.1)" stroke-dasharray="5,5"/>
        <circle cx="495" cy="190" r="35" fill="none" stroke="rgba(255,255,255,0.1)" stroke-dasharray="5,5"/>
    </svg>`,
    hatchback: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
        <path class="car-paintable" d="M120,180 L80,180 C60,180 50,170 50,150 L50,120 C50,105 70,95 90,95 L170,95 L220,55 L390,55 L450,110 L540,115 C565,120 570,135 570,150 L570,180 L515,180 C515,150 485,150 485,180 L230,180 C230,150 200,150 200,180 Z" fill="#ff0055" stroke="#111" stroke-width="3"/>
        <path d="M230,65 L360,65 L360,95 L175,95 Z" fill="#1d2731" opacity="0.8" stroke="#111" stroke-width="2"/>
        <path d="M370,65 L430,65 L442,95 L370,95 Z" fill="#1d2731" opacity="0.8" stroke="#111" stroke-width="2"/>
        <path d="M545,120 Q565,125 560,140 Q540,135 540,125 Z" fill="#fff5cc" stroke="#111"/>
        <path d="M50,115 Q65,115 65,135 Q50,135 50,125 Z" fill="#ff3333" stroke="#111"/>
        <circle cx="200" cy="180" r="35" fill="none" stroke="rgba(255,255,255,0.1)" stroke-dasharray="5,5"/>
        <circle cx="485" cy="180" r="35" fill="none" stroke="rgba(255,255,255,0.1)" stroke-dasharray="5,5"/>
    </svg>`,
    sports: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
        <path class="car-paintable" d="M120,175 L80,175 C60,175 40,165 40,145 L40,135 C40,115 65,110 90,105 L180,95 L270,55 L420,55 L480,95 L555,105 C575,110 585,125 585,145 L585,175 L525,175 C525,145 495,145 495,175 L235,175 C235,145 205,145 205,175 Z" fill="#ff0055" stroke="#111" stroke-width="3"/>
        <path d="M285,63 L400,63 L450,95 L310,95 Z" fill="#1d2731" opacity="0.8" stroke="#111" stroke-width="2"/>
        <polygon points="550,110 580,112 575,125 545,122" fill="#fff5cc" stroke="#111"/>
        <polygon points="42,120 70,122 68,132 40,130" fill="#ff3333" stroke="#111"/>
        <path d="M270,115 L290,115 L280,135 L260,135 Z" fill="#111"/>
        <circle cx="205" cy="175" r="35" fill="none" stroke="rgba(255,255,255,0.1)" stroke-dasharray="5,5"/>
        <circle cx="495" cy="175" r="35" fill="none" stroke="rgba(255,255,255,0.1)" stroke-dasharray="5,5"/>
    </svg>`,
    pickup: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
        <path class="car-paintable" d="M120,185 L70,185 C55,185 45,175 45,150 L45,125 C45,115 55,110 70,110 L220,110 L220,95 L245,95 L285,50 L435,50 L465,95 L540,105 C565,110 575,125 575,150 L575,185 L520,185 C520,155 490,155 490,185 L230,185 C230,155 200,155 200,185 Z" fill="#ff0055" stroke="#111" stroke-width="3"/>
        <path d="M295,58 L370,58 L370,95 L255,95 Z" fill="#1d2731" opacity="0.8" stroke="#111" stroke-width="2"/>
        <path d="M380,58 L428,58 L450,95 L380,95 Z" fill="#1d2731" opacity="0.8" stroke="#111" stroke-width="2"/>
        <polygon points="545,112 568,118 565,138 542,130" fill="#fff5cc" stroke="#111"/>
        <path d="M45,120 L55,120 L55,150 L45,150 Z" fill="#ff3333" stroke="#111"/>
        <line x1="220" y1="110" x2="220" y2="185" stroke="#111" stroke-width="2"/>
        <circle cx="200" cy="185" r="35" fill="none" stroke="rgba(255,255,255,0.1)" stroke-dasharray="5,5"/>
        <circle cx="490" cy="185" r="35" fill="none" stroke="rgba(255,255,255,0.1)" stroke-dasharray="5,5"/>
    </svg>`
};

// 20 Categories x 4 Varian = 80 Cars Catalog Database
const VEHICLE_CATEGORIES = [
    { id: "sedan", name: "Sedan", base: "sedan" },
    { id: "hatchback", name: "Hatchback", base: "hatchback" },
    { id: "wagon", name: "Station Wagon", base: "sedan" },
    { id: "mpv", name: "MPV / Minivan", base: "hatchback" },
    { id: "suv", name: "SUV", base: "suv" },
    { id: "crossover", name: "Crossover (CUV)", base: "suv" },
    { id: "offroad", name: "Off-Road / 4x4", base: "suv" },
    { id: "pickup", name: "Pickup Truck", base: "pickup" },
    { id: "sports", name: "Sports Car / Coupe", base: "sports" },
    { id: "convertible", name: "Convertible / Roadster", base: "sports" },
    { id: "supercar", name: "Supercar", base: "sports" },
    { id: "hypercar", name: "Hypercar", base: "sports" },
    { id: "drift", name: "Drift Car (JDM)", base: "sports" },
    { id: "muscle", name: "Muscle Car", base: "sports" },
    { id: "van", name: "Van / Cargo Van", base: "pickup" },
    { id: "ev", name: "Electric Car (EV)", base: "sedan" },
    { id: "kei", name: "Micro / Kei Car", base: "hatchback" },
    { id: "limo", name: "Limousine", base: "sedan" },
    { id: "campervan", name: "Campervan", base: "pickup" },
    { id: "military", name: "Armored / Military", base: "suv" },
    { id: "ev_niaga", name: "EV Niaga / EV Pickup", base: "pickup" },
    { id: "pickup_bensin", name: "Pickup Bensin Premium", base: "pickup" },
    { id: "kolektor_langka", name: "Mobil Kolektor Langka", base: "sports" },
    { id: "supercar_ev", name: "Supercar Listrik (EV)", base: "sports" }
];

const VARIANT_METADATA = {
    Cheapest: { label: "Paling Murah", suffix: "Eco", priceMult: 0.6, statMult: 0.8, colorClass: "tag-green" },
    BestSeller: { label: "Paling Laris", suffix: "Plus", priceMult: 1.0, statMult: 1.0, colorClass: "tag-blue" },
    MostExpensive: { label: "Paling Mahal", suffix: "Elite", priceMult: 2.2, statMult: 1.3, colorClass: "tag-orange" },
    Classic: { label: "Paling Lama (Klasik)", suffix: "Classic", priceMult: 1.4, statMult: 0.9, colorClass: "tag-purple" }
};

// Generates 80 Cars Catalog
const CARS_CATALOG = [];
VEHICLE_CATEGORIES.forEach(cat => {
    // Basic names for generator
    const names = {
        sedan: ["Dacia Logan", "Toyota Camry", "Rolls-Royce Ghost", "Toyota Crown (1955)"],
        hatchback: ["Dacia Sandero", "VW Golf", "Mercedes-AMG A45S", "VW Golf Gen 1 (1974)"],
        wagon: ["Skoda Octavia Combi", "VW Passat Variant", "Audi RS6 Avant", "Volvo Amazon Estate (1962)"],
        mpv: ["Suzuki Ertiga", "Toyota Alphard", "Mercedes V-Class AMG", "VW Transporter T1 (1950)"],
        suv: ["Dacia Duster", "Toyota RAV4", "Rolls-Royce Cullinan", "Land Rover Defender (1948)"],
        crossover: ["Kia Stonic", "Honda CR-V", "Porsche Cayenne", "Toyota RAV4 Gen 1 (1994)"],
        offroad: ["Suzuki Jimny", "Toyota Land Cruiser", "Mercedes G63 AMG", "Jeep Willys (1941)"],
        pickup: ["Mitsubishi L200", "Toyota Hilux", "Ram 1500 TRX", "Ford F-Series (1948)"],
        sports: ["Toyota GR86", "Ford Mustang", "Ferrari SF90 Stradale", "Chevrolet Corvette (1953)"],
        convertible: ["Mazda MX-5 Miata", "Porsche Boxster", "McLaren 720S Spider", "Morgan Plus Four (1950)"],
        supercar: ["Lotus Emira", "Ferrari Roma", "Ferrari LaFerrari", "Lamborghini Miura (1966)"],
        hypercar: ["Aston Martin Valkyrie", "Bugatti Chiron", "Bugatti La Voiture Noire", "McLaren F1 (1992)"],
        drift: ["Nissan S13 Silvia", "Nissan S15 Silvia", "Lamborghini Gallardo Drift", "Toyota AE86 Trueno (1983)"],
        muscle: ["Dodge Challenger SXT", "Ford Mustang GT", "Shelby Mustang GT500KR", "Ford Mustang (1964)"],
        van: ["Renault Kangoo", "Ford Transit", "Mercedes Sprinter 4x4", "VW Kombi T1 (1950)"],
        ev: ["Wuling Mini EV", "Tesla Model Y", "Rimac Nevera", "Nissan Leaf (2010)"],
        kei: ["Suzuki Alto", "Honda N-Box", "Honda N-One RS", "Subaru 360 (1958)"],
        limo: ["Lincoln Town Car", "Mercedes S-Class LWB", "Rolls-Royce Phantom Extended", "Cadillac Fleetwood (1934)"],
        campervan: ["VW Caddy California", "VW California T6", "Mercedes Marco Polo Horizon", "VW Kombi T1 (1950)"],
        military: ["Armored Toyota LC", "HMMWV (Humvee)", "Rezvani Tank X", "Jeep Willys MB (1941)"],
        ev_niaga: ["BYD T3", "Rivian R1T", "Tesla Cybertruck", "El Camino Electric (Konsep)"],
        pickup_bensin: ["Ford Maverick", "Toyota Tacoma TRD", "Ram 1500 Rebel", "Chevrolet El Camino (1970)"],
        kolektor_langka: ["Ferrari 250 GTO", "Aston Martin DB5", "Bugatti Type 57", "Mercedes 300SL (1954)"],
        supercar_ev: ["Lucid Air Sapphire", "Tesla Model S Plaid", "Pininfarina Battista", "Rimac Nevera R"]
    };

    const baseChassisPrice = {
        sedan: 25000, suv: 40000, hatchback: 18000, sports: 80000, pickup: 35000
    };

    const variants = ["Cheapest", "BestSeller", "MostExpensive", "Classic"];
    variants.forEach((v, index) => {
        const carName = names[cat.id][index];
        const meta = VARIANT_METADATA[v];
        const finalPrice = Math.round(baseChassisPrice[cat.base] * meta.priceMult);
        
        // Dynamic base stats
        const speed = Math.round((cat.base === "sports" ? 280 : cat.base === "suv" ? 170 : cat.base === "pickup" ? 160 : 180) * meta.statMult);
        const accel = (cat.base === "sports" ? 3.5 : cat.base === "suv" ? 8.5 : cat.base === "pickup" ? 9.0 : 7.5) / meta.statMult;
        const eco = Math.round((cat.id === "ev" ? 95 : cat.base === "hatchback" ? 80 : cat.base === "suv" ? 50 : 65) * (v === "Cheapest" ? 1.2 : 0.9));
        const flex = Math.round((cat.base === "sports" ? 80 : cat.base === "suv" ? 40 : 20) * meta.priceMult * 0.8);
        const defense = Math.round((cat.id === "military" ? 85 : cat.base === "suv" ? 60 : 40) * (v === "Classic" ? 1.1 : 1.0));

        CARS_CATALOG.push({
            id: `${cat.id}-${v.toLowerCase()}`,
            name: carName,
            category: cat.id,
            categoryName: cat.name,
            variant: v,
            variantName: meta.label,
            colorClass: meta.colorClass,
            baseChassis: cat.base,
            price: finalPrice,
            stats: { speed, accel, eco, flex, defense },
            description: `Tipe ${cat.name} Varian ${meta.label}. Model real-world: ${carName}.`
        });
    });
});

// Parts Library
const PARTS_LIBRARY = {
    wheels: [
        { id: "wheel-alloy-sport", name: "Velg Alloy Sport", price: 1200, effect: { speed: 10, accel: -0.3, eco: 2, flex: 10, defense: 0 }, desc: "Velg aluminium ringan modern berkualitas tinggi.", svg: `<svg viewBox="0 0 100 100" width="80" height="80"><circle cx="50" cy="50" r="45" fill="#1a1a1a" stroke="#444" stroke-width="4"/><circle cx="50" cy="50" r="33" fill="#666" stroke="#fff" stroke-width="2"/><circle cx="50" cy="50" r="8" fill="#111"/><line x1="50" y1="17" x2="50" y2="83" stroke="#fff" stroke-width="3"/><line x1="17" y1="50" x2="83" y2="50" stroke="#fff" stroke-width="3"/><line x1="27" y1="27" x2="73" y2="73" stroke="#fff" stroke-width="3"/><line x1="27" y1="73" x2="73" y2="27" stroke="#fff" stroke-width="3"/></svg>` },
        { id: "wheel-jdm-classic", name: "Velg JDM Classic Gold", price: 1500, effect: { speed: 5, accel: -0.1, eco: 0, flex: 18, defense: 2 }, desc: "Velg retro JDM palang jari-jari berwarna emas klasik.", svg: `<svg viewBox="0 0 100 100" width="80" height="80"><circle cx="50" cy="50" r="45" fill="#111" stroke="#333" stroke-width="4"/><circle cx="50" cy="50" r="32" fill="#d4af37" stroke="#fff" stroke-width="2"/><circle cx="50" cy="50" r="10" fill="#111"/><circle cx="50" cy="50" r="5" fill="#fff" opacity="0.8"/></svg>` },
        { id: "wheel-chrome-luxury", name: "Velg Chrome Luxury", price: 4500, effect: { speed: 5, accel: -0.4, eco: -2, flex: 35, defense: 5 }, desc: "Velg krom mewah berukuran besar nan elegan.", svg: `<svg viewBox="0 0 100 100" width="80" height="80"><circle cx="50" cy="50" r="45" fill="#111" stroke="#333" stroke-width="4"/><circle cx="50" cy="50" r="33" fill="#e6e6e6" stroke="#fff" stroke-width="3"/><circle cx="50" cy="50" r="8" fill="#111"/><path d="M50,17 L50,83 M17,50 L83,50 M27,27 L73,73 M27,73 L73,27" stroke="#fff" stroke-width="4" opacity="0.9"/></svg>` },
        { id: "wheel-steelie", name: "Velg Kaleng Steelie", price: 400, effect: { speed: -5, accel: 0.1, eco: 4, flex: -10, defense: 8 }, desc: "Velg kaleng besi hitam polos yang murah dan tangguh.", svg: `<svg viewBox="0 0 100 100" width="80" height="80"><circle cx="50" cy="50" r="45" fill="#111" stroke="#333" stroke-width="4"/><circle cx="50" cy="50" r="30" fill="#333" stroke="#444" stroke-width="2"/><circle cx="50" cy="50" r="8" fill="#111"/><circle cx="50" cy="38" r="3" fill="#fff" opacity="0.3"/><circle cx="50" cy="62" r="3" fill="#fff" opacity="0.3"/><circle cx="38" cy="50" r="3" fill="#fff" opacity="0.3"/><circle cx="62" cy="50" r="3" fill="#fff" opacity="0.3"/></svg>` },
        { id: "wheel-slick-racing", name: "Ban Semi-Slick Balap", price: 6000, effect: { speed: 45, accel: -1.2, eco: -5, flex: 25, defense: 5 }, desc: "Ban gundul khusus sirkuit untuk cengkeraman maksimal.", svg: `<svg viewBox="0 0 100 100" width="85" height="85"><circle cx="50" cy="50" r="46" fill="#000" stroke="#00ff66" stroke-width="2"/><circle cx="50" cy="50" r="30" fill="#222" stroke="#fff" stroke-width="2"/><circle cx="50" cy="50" r="6" fill="#000"/></svg>` },
        { id: "wheel-at-offroad", name: "Ban All-Terrain A/T", price: 3500, effect: { speed: -10, accel: 0.5, eco: -5, flex: 15, defense: 25 }, desc: "Ban segala medan untuk jalan berkerikil dan harian.", svg: `<svg viewBox="0 0 100 100" width="90" height="90"><circle cx="50" cy="50" r="46" fill="#111" stroke="#444" stroke-width="4"/><circle cx="50" cy="50" r="30" fill="#888" stroke="#111" stroke-width="2"/><rect x="47" y="10" width="6" height="8" fill="#111"/><rect x="47" y="82" width="6" height="8" fill="#111"/><rect x="10" y="47" width="8" height="6" fill="#111"/><rect x="82" y="47" width="8" height="6" fill="#111"/></svg>` },
        { id: "wheel-mt-mud", name: "Ban Mud-Terrain M/T", price: 5500, effect: { speed: -25, accel: 1.2, eco: -15, flex: 20, defense: 50 }, desc: "Ban bertapak kasar dan dalam untuk melibas lumpur berat.", svg: `<svg viewBox="0 0 100 100" width="90" height="90"><circle cx="50" cy="50" r="46" fill="#080808" stroke="#111" stroke-width="4"/><circle cx="50" cy="50" r="30" fill="#666" stroke="#222" stroke-width="2"/><rect x="40" y="8" width="20" height="8" fill="#111" rx="2"/><rect x="40" y="84" width="20" height="8" fill="#111" rx="2"/><rect x="8" y="40" width="8" height="20" fill="#111" rx="2"/><rect x="84" y="40" width="8" height="20" fill="#111" rx="2"/></svg>` },
        { id: "wheel-drift-hard", name: "Ban Drift Hard Compound", price: 4000, effect: { speed: 15, accel: 0.3, eco: -3, flex: 35, defense: 2 }, desc: "Ban dengan kompon keras agar mobil mudah oversteer/drift.", svg: `<svg viewBox="0 0 100 100" width="82" height="82"><circle cx="50" cy="50" r="45" fill="#151515" stroke="#333" stroke-width="3"/><circle cx="50" cy="50" r="28" fill="#444" stroke="#d4af37" stroke-width="2"/><circle cx="50" cy="50" r="8" fill="#111"/></svg>` },
        { id: "wheel-monster", name: "Ban Monster Truck", price: 6500, effect: { speed: -30, accel: 1.8, eco: -20, flex: 40, defense: 35 }, desc: "Ban bergerigi raksasa untuk melindas apa saja.", svg: `<svg viewBox="0 0 100 100" width="120" height="120"><circle cx="50" cy="50" r="46" fill="#111"/><circle cx="50" cy="50" r="28" fill="#ffcc00" stroke="#b38f00" stroke-width="3"/><circle cx="50" cy="50" r="15" fill="#333"/><circle cx="50" cy="50" r="6" fill="#111"/></svg>` },
        { id: "wheel-tank", name: "Roda Rantai Tank", price: 12500, effect: { speed: -60, accel: 3.5, eco: -40, flex: 50, defense: 80 }, desc: "Kecepatan berkurang drastis, tapi tidak bisa dihancurkan.", svg: `<svg viewBox="0 0 160 80" width="160" height="80"><rect x="5" y="10" width="150" height="60" rx="30" fill="#2d382c" stroke="#1c241b" stroke-width="4"/><circle cx="35" cy="40" r="20" fill="#445443" stroke="#222" stroke-width="3"/><circle cx="80" cy="40" r="20" fill="#445443" stroke="#222" stroke-width="3"/><circle cx="125" cy="40" r="20" fill="#445443" stroke="#222" stroke-width="3"/><rect x="5" y="10" width="150" height="60" rx="30" fill="none" stroke="#111" stroke-width="4" stroke-dasharray="10,8"/></svg>` }
    ],
    spoilers: [
        { id: "spoiler-carbon", name: "Spoiler Carbon GT", price: 3200, effect: { speed: 20, accel: -0.4, eco: -3, flex: 25, defense: 0 }, desc: "Menambah downforce dan ketampanan mobil.", svg: `<svg viewBox="0 0 120 60" width="120" height="60"><path d="M10,45 L30,10 L50,10 L40,45 Z" fill="#222"/><path d="M110,45 L90,10 L70,10 L80,45 Z" fill="#222"/><rect x="0" y="5" width="120" height="8" rx="3" fill="#111" stroke="#444" stroke-width="1"/><polygon points="0,2 10,0 10,16 0,14" fill="#00ffcc"/><polygon points="120,2 110,0 110,16 120,14" fill="#00ffcc"/></svg>` },
        { id: "spoiler-biplane", name: "Sayap Ganda Biplane", price: 7500, effect: { speed: -10, accel: 0.8, eco: -15, flex: 55, defense: 10 }, desc: "Winglet pesawat untuk gaya aerodinamika maksimal.", svg: `<svg viewBox="0 0 130 80" width="130" height="80"><line x1="30" y1="75" x2="30" y2="10" stroke="#333" stroke-width="4"/><line x1="100" y1="75" x2="100" y2="10" stroke="#333" stroke-width="4"/><rect x="15" y="38" width="100" height="6" rx="2" fill="#222"/><rect x="5" y="8" width="120" height="6" rx="2" fill="#111"/></svg>` },
        { id: "spoiler-ducktail", name: "Spoiler Ducktail Retro", price: 1800, effect: { speed: 10, accel: -0.2, eco: -1, flex: 15, defense: 0 }, desc: "Spoiler ducktail ramping bergaya elegan klasik.", svg: `<svg viewBox="0 0 100 40" width="100" height="40"><path d="M10,35 Q50,25 90,35 L95,15 Q50,5 5,15 Z" fill="#222" stroke="#111" stroke-width="1.5"/></svg>` },
        { id: "spoiler-drag", name: "Spoiler Panjang Drag", price: 4500, effect: { speed: 35, accel: -0.6, eco: -5, flex: 20, defense: 2 }, desc: "Spoiler memanjang lurus untuk kestabilan drag race trek lurus.", svg: `<svg viewBox="0 0 120 50" width="120" height="50"><rect x="10" y="30" width="100" height="8" rx="2" fill="#333"/><path d="M5,10 L115,10 L105,30 L15,30 Z" fill="#111" stroke="#444" stroke-width="2"/></svg>` }
    ],
    engines: [
        { id: "engine-i4", name: "Mesin Inline 4 Standard", price: 3500, effect: { speed: 30, accel: -0.5, eco: 10, flex: 10, defense: 0 }, desc: "Mesin 4 silinder segaris hemat bahan bakar untuk komuter.", svg: `<svg viewBox="0 0 100 80" width="100" height="80"><rect x="20" y="20" width="60" height="40" rx="5" fill="#444" stroke="#222" stroke-width="3"/><rect x="30" y="10" width="40" height="10" fill="#ffaa00"/><circle cx="35" cy="40" r="6" fill="#888"/><circle cx="50" cy="40" r="6" fill="#888"/><circle cx="65" cy="40" r="6" fill="#888"/></svg>` },
        { id: "engine-v6", name: "Mesin V6 Twin Turbo", price: 8500, effect: { speed: 65, accel: -1.4, eco: -5, flex: 20, defense: 2 }, desc: "Mesin V6 bertenaga ganda untuk mobil sport modern.", svg: `<svg viewBox="0 0 100 80" width="100" height="80"><rect x="15" y="15" width="70" height="50" rx="8" fill="#555" stroke="#333" stroke-width="3"/><path d="M30,15 L15,40 L30,65" stroke="#ff3300" stroke-width="4" fill="none"/><path d="M70,15 L85,40 L70,65" stroke="#ff3300" stroke-width="4" fill="none"/></svg>` },
        { id: "engine-v8", name: "Mesin V8 Hemi Muscle", price: 15000, effect: { speed: 110, accel: -2.2, eco: -15, flex: 35, defense: 5 }, desc: "Mesin V8 bersuara gahar dengan torsi instan melimpah.", svg: `<svg viewBox="0 0 100 80" width="100" height="80"><rect x="15" y="15" width="70" height="50" rx="8" fill="#333" stroke="#111" stroke-width="3"/><rect x="25" y="25" width="50" height="30" fill="#990000"/><line x1="30" y1="10" x2="30" y2="15" stroke="#fff" stroke-width="3"/><line x1="40" y1="10" x2="40" y2="15" stroke="#fff" stroke-width="3"/><line x1="50" y1="10" x2="50" y2="15" stroke="#fff" stroke-width="3"/><line x1="60" y1="10" x2="60" y2="15" stroke="#fff" stroke-width="3"/></svg>` },
        { id: "engine-v12", name: "Mesin V12 Naturally Aspirated", price: 35000, effect: { speed: 220, accel: -4.5, eco: -30, flex: 60, defense: 10 }, desc: "Karya seni performa tinggi dengan output tenaga luar biasa.", svg: `<svg viewBox="0 0 120 90" width="120" height="90"><rect x="10" y="10" width="100" height="70" rx="10" fill="#111" stroke="#d4af37" stroke-width="4"/><path d="M30,25 L45,15 L60,25 L75,15 L90,25" stroke="#ff9900" stroke-width="3" fill="none"/></svg>` },
        { id: "engine-rotary", name: "Mesin Rotary Wankel", price: 7500, effect: { speed: 55, accel: -1.0, eco: -8, flex: 25, defense: 0 }, desc: "Mesin rotor Mazda legendaris berputar di RPM tinggi.", svg: `<svg viewBox="0 0 100 80" width="100" height="80"><circle cx="50" cy="40" r="30" fill="#222" stroke="#444" stroke-width="3"/><polygon points="50,18 76,58 24,58" fill="#ff6600" opacity="0.8"/></svg>` },
        { id: "engine-boxer", name: "Mesin Boxer Flat-6", price: 9500, effect: { speed: 70, accel: -1.5, eco: -2, flex: 22, defense: 2 }, desc: "Mesin horizontal Porsche untuk center of gravity yang rendah.", svg: `<svg viewBox="0 0 120 70" width="120" height="70"><rect x="30" y="15" width="60" height="40" rx="5" fill="#444" stroke="#222" stroke-width="3"/><rect x="5" y="25" width="25" height="20" fill="#222"/><rect x="90" y="25" width="25" height="20" fill="#222"/></svg>` },
        { id: "engine-electric", name: "Motor Listrik Dual EV", price: 18000, effect: { speed: 120, accel: -3.5, eco: 45, flex: 30, defense: 5 }, desc: "Torsi instan tanpa emisi gas buang.", svg: `<svg viewBox="0 0 100 80" width="100" height="80"><rect x="20" y="20" width="60" height="40" rx="10" fill="#0066ff" stroke="#003399" stroke-width="3"/><path d="M40,40 L60,40 M50,30 L50,50" stroke="#00ffcc" stroke-width="4"/></svg>` },
        { id: "engine-diesel-inline6", name: "Mesin Diesel Inline-6 Turbo", price: 9000, effect: { speed: 50, accel: -0.8, eco: -8, flex: 15, defense: 5 }, desc: "Mesin diesel torsi besar khas truk premium dan SUV tangguh.", svg: `<svg viewBox="0 0 120 80" width="120" height="80"><rect x="10" y="15" width="100" height="50" rx="6" fill="#2a2a2a" stroke="#555" stroke-width="3"/><rect x="20" y="5" width="80" height="10" fill="#444" rx="3"/><circle cx="30" cy="40" r="8" fill="#666"/><circle cx="50" cy="40" r="8" fill="#666"/><circle cx="70" cy="40" r="8" fill="#666"/><circle cx="90" cy="40" r="8" fill="#666"/><rect x="100" y="25" width="10" height="30" rx="3" fill="#888"/></svg>` },
        { id: "engine-straight8", name: "Mesin Straight-8 Pre-War", price: 22000, effect: { speed: 90, accel: -1.5, eco: -20, flex: 55, defense: 8 }, desc: "Mesin 8 silinder segaris era klasik 1930-an. Sangat langka dan bergengsi.", svg: `<svg viewBox="0 0 150 80" width="150" height="80"><rect x="5" y="20" width="140" height="40" rx="5" fill="#3a2a10" stroke="#d4af37" stroke-width="3"/><circle cx="25" cy="40" r="7" fill="#d4af37"/><circle cx="45" cy="40" r="7" fill="#d4af37"/><circle cx="65" cy="40" r="7" fill="#d4af37"/><circle cx="85" cy="40" r="7" fill="#d4af37"/><circle cx="105" cy="40" r="7" fill="#d4af37"/><circle cx="125" cy="40" r="7" fill="#d4af37"/></svg>` },
        { id: "engine-v10", name: "Mesin V10 Naturally Aspirated", price: 28000, effect: { speed: 180, accel: -3.5, eco: -25, flex: 50, defense: 8 }, desc: "Mesin V10 ikon Lamborghini Gallardo dan BMW M5 E60. Suara meraung.", svg: `<svg viewBox="0 0 110 90" width="110" height="90"><rect x="10" y="15" width="90" height="60" rx="8" fill="#333" stroke="#888" stroke-width="3"/><path d="M20,15 L5,45 L20,75" stroke="#ff4400" stroke-width="4" fill="none"/><path d="M90,15 L105,45 L90,75" stroke="#ff4400" stroke-width="4" fill="none"/><text x="55" y="50" text-anchor="middle" fill="#fff" font-size="14" font-weight="bold">V10</text></svg>` },
        { id: "engine-w16", name: "Mesin W16 Quad Turbo", price: 75000, effect: { speed: 320, accel: -6.5, eco: -50, flex: 90, defense: 15 }, desc: "Mesin paling gila di dunia. Milik Bugatti Chiron/Veyron. 1500 HP.", svg: `<svg viewBox="0 0 120 90" width="120" height="90"><rect x="5" y="5" width="110" height="80" rx="10" fill="#1a0a00" stroke="#ff6600" stroke-width="4"/><text x="60" y="42" text-anchor="middle" fill="#ff6600" font-size="16" font-weight="bold" font-family="monospace">W16</text><text x="60" y="62" text-anchor="middle" fill="#ffaa00" font-size="10" font-family="monospace">QUAD TURBO</text><rect x="10" y="70" width="25" height="8" rx="3" fill="#ff6600"/><rect x="42" y="70" width="25" height="8" rx="3" fill="#ff6600"/><rect x="74" y="70" width="25" height="8" rx="3" fill="#ff6600"/><rect x="96" y="70" width="14" height="8" rx="3" fill="#ff6600"/></svg>` },
        { id: "engine-electric-formula", name: "Formula E Motor Listrik", price: 45000, effect: { speed: 250, accel: -7.0, eco: 60, flex: 45, defense: 3 }, desc: "Motor listrik Formula E. 0-100 km/h di bawah 2 detik. Zero emisi.", svg: `<svg viewBox="0 0 110 80" width="110" height="80"><rect x="10" y="15" width="90" height="50" rx="12" fill="#001133" stroke="#00ffcc" stroke-width="3"/><path d="M30,50 L50,20 L60,35 L80,20 L90,50" stroke="#00ffcc" stroke-width="3" fill="none"/><circle cx="55" cy="40" r="8" fill="#00ffcc" opacity="0.8"/></svg>` },
        { id: "engine-hydrogen", name: "Mesin Hidrogen Fuel Cell", price: 38000, effect: { speed: 100, accel: -2.0, eco: 80, flex: 35, defense: 5 }, desc: "Teknologi masa depan. Menghasilkan uap air bukan emisi. Zero karbon.", svg: `<svg viewBox="0 0 110 80" width="110" height="80"><rect x="10" y="15" width="90" height="50" rx="8" fill="#0a2a0a" stroke="#00ff88" stroke-width="3"/><text x="55" y="42" text-anchor="middle" fill="#00ff88" font-size="22" font-weight="bold" font-family="monospace">H₂</text><path d="M15,55 Q30,45 45,55 Q60,65 75,55 Q90,45 105,55" stroke="#00ff88" stroke-width="2" fill="none" opacity="0.5"/></svg>` },
        { id: "engine-diesel-v8", name: "Mesin Diesel V8 Turbo", price: 18000, effect: { speed: 80, accel: -1.0, eco: -12, flex: 20, defense: 10 }, desc: "V8 Diesel khas truk berat dan SUV offroad mewah. Torsi brutal.", svg: `<svg viewBox="0 0 100 80" width="100" height="80"><rect x="15" y="15" width="70" height="50" rx="8" fill="#1a1a00" stroke="#888833" stroke-width="3"/><path d="M25,15 L10,40 L25,65" stroke="#ffcc00" stroke-width="3" fill="none"/><path d="M75,15 L90,40 L75,65" stroke="#ffcc00" stroke-width="3" fill="none"/><rect x="35" y="25" width="30" height="30" fill="#333322" rx="4"/></svg>` },
        { id: "engine-two-stroke", name: "Mesin 2-Tak Kecil", price: 800, effect: { speed: -20, accel: -0.5, eco: -30, flex: -5, defense: -5 }, desc: "Mesin 2-tak berisik dan haus BBM. Nostalgia tahun 80an.", svg: `<svg viewBox="0 0 80 80" width="80" height="80"><rect x="20" y="20" width="40" height="40" rx="4" fill="#333" stroke="#666" stroke-width="2"/><circle cx="40" cy="40" r="10" fill="#888"/><rect x="35" y="5" width="10" height="15" fill="#666" rx="2"/></svg>` },
        { id: "engine-steam", name: "Mesin Uap Antik", price: 5000, effect: { speed: -60, accel: -4.0, eco: -40, flex: 70, defense: 20 }, desc: "Mesin uap era 1800-an. Lambat, berisik, tapi memiliki wow-factor tinggi!", svg: `<svg viewBox="0 0 120 90" width="120" height="90"><rect x="10" y="35" width="80" height="45" rx="5" fill="#444" stroke="#888" stroke-width="3"/><circle cx="90" cy="57" r="20" fill="#555" stroke="#888" stroke-width="3"/><rect x="30" y="10" width="20" height="30" rx="3" fill="#333" stroke="#666" stroke-width="2"/><circle cx="40" cy="8" r="6" fill="#ff6600" opacity="0.8"/><path d="M38,2 Q42,0 40,5" stroke="#aaa" stroke-width="2" fill="none"/></svg>` }
    ],
    exhausts: [
        { id: "exhaust-standard", name: "Knalpot Standard Muffler", price: 300, effect: { speed: 2, accel: -0.1, eco: 0, flex: 0, defense: 0 }, desc: "Knalpot pabrikan standar berdesain minimalis dan tenang.", svg: `<svg viewBox="0 0 60 30" width="60" height="30"><rect x="5" y="10" width="40" height="10" rx="2" fill="#888" stroke="#555"/><circle cx="48" cy="15" r="5" fill="#111" stroke="#888"/></svg>` },
        { id: "exhaust-dual-sport", name: "Knalpot Dual Exit Sport", price: 1800, effect: { speed: 12, accel: -0.3, eco: -1, flex: 12, defense: 0 }, desc: "Knalpot ganda untuk meningkatkan pembuangan gas mesin sport.", svg: `<svg viewBox="0 0 80 40" width="80" height="40"><rect x="5" y="5" width="50" height="12" rx="2" fill="#555"/><rect x="5" y="23" width="50" height="12" rx="2" fill="#555"/><circle cx="58" cy="11" r="6" fill="#111" stroke="#fff"/><circle cx="58" cy="29" r="6" fill="#111" stroke="#fff"/></svg>` },
        { id: "exhaust-straight", name: "Knalpot Straight Pipe", price: 1200, effect: { speed: 18, accel: -0.4, eco: -10, flex: 20, defense: 0 }, desc: "Knalpot bebas hambatan yang menyemburkan suara sangat bising.", svg: `<svg viewBox="0 0 70 30" width="70" height="30"><line x1="5" y1="15" x2="65" y2="15" stroke="#b87333" stroke-width="8" stroke-linecap="round"/><circle cx="65" cy="15" r="4" fill="#111"/></svg>` },
        { id: "exhaust-titanium", name: "Knalpot Titanium Racing", price: 4500, effect: { speed: 25, accel: -0.6, eco: -2, flex: 30, defense: 0 }, desc: "Knalpot titanium ultra ringan dengan ujung berwarna biru bakar.", svg: `<svg viewBox="0 0 70 30" width="70" height="30"><rect x="5" y="8" width="50" height="14" rx="2" fill="#444"/><circle cx="58" cy="15" r="7" fill="#00ffff" stroke="#0033cc" stroke-width="2"/></svg>` }
    ],
    neon: [
        { id: "neon-blue", name: "Lampu Neon Ice Blue", price: 1500, effect: { speed: 0, accel: 0, eco: -1, flex: 25, defense: 0 }, desc: "Lampu neon kolong mobil berwarna biru es futuristik.", svg: `<svg viewBox="0 0 120 20" width="120" height="20"><rect x="5" y="5" width="110" height="10" rx="5" fill="#00ffff" opacity="0.8" filter="drop-shadow(0 0 5px #00ffff)"/><line x1="10" y1="10" x2="110" y2="10" stroke="#fff" stroke-width="2"/></svg>` },
        { id: "neon-pink", name: "Lampu Neon Hot Pink", price: 1500, effect: { speed: 0, accel: 0, eco: -1, flex: 25, defense: 0 }, desc: "Lampu neon kolong mobil berwarna merah muda terang mencolok.", svg: `<svg viewBox="0 0 120 20" width="120" height="20"><rect x="5" y="5" width="110" height="10" rx="5" fill="#ff00ff" opacity="0.8" filter="drop-shadow(0 0 5px #ff00ff)"/><line x1="10" y1="10" x2="110" y2="10" stroke="#fff" stroke-width="2"/></svg>` },
        { id: "neon-green", name: "Lampu Neon Acid Green", price: 1500, effect: { speed: 0, accel: 0, eco: -1, flex: 25, defense: 0 }, desc: "Lampu neon kolong mobil berwarna hijau asam menyala.", svg: `<svg viewBox="0 0 120 20" width="120" height="20"><rect x="5" y="5" width="110" height="10" rx="5" fill="#00ff00" opacity="0.8" filter="drop-shadow(0 0 5px #00ff00)"/><line x1="10" y1="10" x2="110" y2="10" stroke="#fff" stroke-width="2"/></svg>` }
    ],
    suspension: [
        { id: "suspension-normal", name: "Suspensi Standard", price: 0, effect: { speed: 0, accel: 0, eco: 0, flex: 0, defense: 0 }, desc: "Sistem suspensi bawaan pabrikan.", svg: `<svg viewBox="0 0 60 60" width="60" height="60"><path d="M30,5 L30,55 M10,15 L50,15 M15,25 L45,25 M20,35 L40,35" stroke="#777" stroke-width="4"/></svg>` },
        { id: "suspension-ceper", name: "Suspensi Ceper (Coilovers)", price: 2500, effect: { speed: 25, accel: -0.5, eco: -2, flex: 35, defense: -10 }, desc: "Memotong ground clearance sasis agar ceper, lincah, dan aerodinamis.", svg: `<svg viewBox="0 0 60 60" width="60" height="60"><path d="M30,15 L30,45 M10,20 L50,20 M15,28 L45,28 M20,36 L40,36" stroke="#ff3300" stroke-width="5"/></svg>` }
    ],
    roof: [
        { id: "roof-siren", name: "Sirine Polisi", price: 1800, effect: { speed: 5, accel: -0.1, eco: 0, flex: 20, defense: 10 }, desc: "Sirine darurat pembuat panik jalan raya.", svg: `<svg viewBox="0 0 60 40" width="60" height="40"><ellipse cx="30" cy="30" rx="25" ry="10" fill="#333"/><path d="M15,25 Q30,5 45,25 Z" fill="#0066ff" opacity="0.9"/><path d="M30,25 Q38,10 45,25 Z" fill="#ff3333" opacity="0.9"/><circle cx="30" cy="20" r="5" fill="#fff"/></svg>` },
        { id: "roof-solar", name: "Solar Panel", price: 5200, effect: { speed: -5, accel: 0.2, eco: 50, flex: 15, defense: 5 }, desc: "Mengisi baterai menggunakan sinar matahari gratis.", svg: `<svg viewBox="0 0 120 30" width="120" height="30"><rect x="5" y="5" width="110" height="20" rx="3" fill="#0e2338" stroke="#1d4268" stroke-width="2"/><line x1="22" y1="5" x2="22" y2="25" stroke="#376793"/><line x1="44" y1="5" x2="44" y2="25" stroke="#376793"/><line x1="66" y1="5" x2="66" y2="25" stroke="#376793"/><line x1="5" y1="15" x2="115" y2="15" stroke="#376793"/></svg>` }
    ],
    front: [
        { id: "front-ram", name: "Bumper Bullbar Baja", price: 4500, effect: { speed: -10, accel: 0.8, eco: -5, flex: 15, defense: 90 }, desc: "Taji baja kokoh untuk menabrak rintangan.", svg: `<svg viewBox="0 0 60 90" width="60" height="90"><rect x="40" y="10" width="15" height="70" rx="5" fill="#555" stroke="#111" stroke-width="2"/><line x1="20" y1="20" x2="40" y2="20" stroke="#333" stroke-width="5"/><line x1="20" y1="45" x2="40" y2="45" stroke="#333" stroke-width="5"/><line x1="20" y1="70" x2="40" y2="70" stroke="#333" stroke-width="5"/></svg>` },
        { id: "front-winch", name: "Winch Derek Offroad", price: 2800, effect: { speed: -5, accel: 0.3, eco: -1, flex: 10, defense: 30 }, desc: "Katrol tali baja untuk menarik beban berat di lumpur.", svg: `<svg viewBox="0 0 60 50" width="60" height="50"><rect x="20" y="10" width="30" height="30" rx="3" fill="#333" stroke="#111"/><circle cx="35" cy="25" r="10" fill="#888" stroke="#222"/><line x1="35" y1="25" x2="10" y2="25" stroke="#fff" stroke-width="3" stroke-dasharray="3,2"/></svg>` }
    ],
    extras: [
        { id: "extra-android", name: "Maskot Dashboard Toy", price: 150, effect: { speed: -2, accel: 0, eco: 10, flex: 20, defense: 5 }, desc: "Meningkatkan status pintar sasis mobil.", svg: `<svg viewBox="0 0 60 70" width="60" height="70"><rect x="10" y="25" width="40" height="30" rx="5" fill="#a4c639"/><path d="M10,22 Q30,8 50,22 Z" fill="#a4c639"/><circle cx="22" cy="16" r="3" fill="#fff"/><circle cx="38" cy="16" r="3" fill="#fff"/><line x1="20" y1="10" x2="15" y2="4" stroke="#a4c639" stroke-width="3"/><line x1="40" y1="10" x2="45" y2="4" stroke="#a4c639" stroke-width="3"/></svg>` },
        { id: "tabung-nos", name: "Tabung Nitro NOS Boost", price: 8500, effect: { speed: 120, accel: -2.5, eco: -25, flex: 40, defense: 0 }, desc: "Menyemburkan oksigen murni untuk akselerasi luar biasa.", svg: `<svg viewBox="0 0 80 40" width="80" height="40"><rect x="15" y="10" width="50" height="20" rx="5" fill="#0066ff" stroke="#003399" stroke-width="2"/><rect x="65" y="14" width="8" height="12" fill="#888"/><circle cx="73" cy="20" r="4" fill="#333"/></svg>` }
    ]
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
    orderTimerId: null
};

// Editor temporary variables
let activeSlotIndex = null;
let currentChassis = 'sedan';
let carColor = '#ff0055';
let placedParts = [];
let selectedPartIndex = null;
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
        screens.dashboard.classList.add('active');
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

// --- ROTATION STATE ---
let carRotX = 0;
let carRotY = 0;
const ROT_STEP = 45; // degrees per button click

function applyCanvasRotation() {
    const stage = document.getElementById('car-canvas-stage');
    if (stage) {
        stage.style.transform = `rotateX(${carRotX}deg) rotateY(${carRotY}deg)`;
    }
}

function resetCanvasRotation() {
    carRotX = 0;
    carRotY = 0;
    applyCanvasRotation();
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
const screens = {
    intro: document.getElementById('intro-screen'),
    dashboard: document.getElementById('dashboard-screen'),
    studio: document.getElementById('studio-screen'),
    negotiation: document.getElementById('terminal-negotiation-screen')
};

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
    screens.dashboard.classList.remove('active');
}

// Save and Load logic (LocalStorage Persistence)
function saveGameData() {
    localStorage.setItem('keep_notes_car_lab_save', JSON.stringify(gameState));
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
            previewWrap.innerHTML = CHASSIS_SVG[carModel.baseChassis];
            const paintable = previewWrap.querySelectorAll('.car-paintable');
            paintable.forEach(p => p.setAttribute('fill', slot.car.color));
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

function startSpecialOrderTriggers() {
    function rollSpecialOrder() {
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
        card.innerHTML = `
            <div class="catalog-car-svg-wrap">
                ${CHASSIS_SVG[car.baseChassis]}
            </div>
            <div class="catalog-car-info">
                <span class="category-label">${car.categoryName}</span>
                <span class="tag ${car.colorClass}">${car.variantName}</span>
                <h4>${car.name}</h4>
                <p class="desc">${car.description}</p>
                <div style="display:flex; justify-content:space-between; align-items:center; margin-top:8px;">
                    <span style="font-size:0.75rem; color:var(--text-secondary);">Harga Sasis:</span>
                    <span style="font-family:var(--font-mono); font-weight:700; color:var(--accent);">GRATIS</span>
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
    
    // Setup Header & DOM
    activeSlotName.innerText = `WORKSPACE SLOT ${slotIdx + 1}`;
    studioCarModelName.innerText = carModel.name;
    studioCashVal.innerText = `$${gameState.cash.toLocaleString()}`;
    
    loadChassis(currentChassis);
    applyColor(carColor);
    renderPlacedParts();
    updateStats();
    
    // Swap screen
    screens.dashboard.classList.remove('active');
    screens.studio.classList.add('active');
    // Reset car rotation when entering studio
    resetCanvasRotation();
}

function loadChassis(type) {
    carChassisWrapper.innerHTML = CHASSIS_SVG[type];
}

function applyColor(color) {
    carColor = color;
    const paintablePaths = carChassisWrapper.querySelectorAll('.car-paintable');
    paintablePaths.forEach(path => {
        path.setAttribute('fill', color);
    });
    
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
    const parts = PARTS_LIBRARY[category];
    
    parts.forEach(part => {
        const card = document.createElement('div');
        card.className = 'part-card';
        card.innerHTML = `
            <div class="part-icon-preview">${part.svg}</div>
            <div class="part-info">
                <div class="part-name">${part.name}</div>
                <div class="part-price">$${part.price.toLocaleString()}</div>
                <div class="part-effect">${part.desc}</div>
            </div>
        `;
        
        card.addEventListener('click', () => {
            // Check if player has enough money to buy this component
            if (gameState.cash < part.price) {
                alert("Modal kas tidak mencukupi untuk membeli komponen ini!");
                return;
            }
            
            // Buy part
            gameState.cash -= part.price;
            studioCashVal.innerText = `$${gameState.cash.toLocaleString()}`;
            saveGameData();
            updateHUD();
            
            addPartToCanvas(part);
        });

        // Attach tooltip on hover/right-click
        attachPartTooltip(card, part);
        
        partsDrawer.appendChild(card);
    });
}

function addPartToCanvas(partTemplate, x = 300, y = 150, scale = 1, rotation = 0, flipped = false) {
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
    partsContainer.innerHTML = '';
    
    // Check if lowering suspension is installed
    const isLowered = placedParts.some(p => p.templateId === "suspension-ceper");
    if (isLowered) {
        carChassisWrapper.style.transform = "translateY(25px)";
    } else {
        carChassisWrapper.style.transform = "none";
    }
    
    placedParts.forEach((part, index) => {
        const div = document.createElement('div');
        div.className = `placed-part ${index === selectedPartIndex ? 'selected' : ''}`;
        div.style.left = `${part.x}px`;
        
        if (isLowered && !part.templateId.startsWith('wheel-')) {
            div.style.top = `${part.y + 25}px`;
        } else {
            div.style.top = `${part.y}px`;
        }
        div.style.width = '100px'; 
        div.style.height = '100px';
        
        let transformStr = `translate(-50%, -50%) rotate(${part.rotation}deg) scale(${part.scale})`;
        if (part.flipped) {
            transformStr += ' scaleX(-1)';
        }
        div.style.transform = transformStr;
        div.innerHTML = part.svg;
        
        setupPartDragging(div, index);
        
        div.addEventListener('mousedown', (e) => {
            e.stopPropagation();
            selectPart(index);
        });
        
        partsContainer.appendChild(div);
    });
}

function setupPartDragging(element, index) {
    let startX, startY;
    let initialX, initialY;
    
    element.addEventListener('mousedown', dragStart);
    element.addEventListener('touchstart', dragStart, { passive: false });
    
    function dragStart(e) {
        e.preventDefault();
        selectPart(index);
        
        const clientX = e.type === 'touchstart' ? e.touches[0].clientX : e.clientX;
        const clientY = e.type === 'touchstart' ? e.touches[0].clientY : e.clientY;
        
        startX = clientX;
        startY = clientY;
        
        initialX = placedParts[index].x;
        initialY = placedParts[index].y;
        
        document.addEventListener('mousemove', dragMove);
        document.addEventListener('mouseup', dragEnd);
        document.addEventListener('touchmove', dragMove, { passive: false });
        document.addEventListener('touchend', dragEnd);
    }
    
    function dragMove(e) {
        if (selectedPartIndex === null) return;
        e.preventDefault();
        
        const clientX = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
        const clientY = e.type === 'touchmove' ? e.touches[0].clientY : e.clientY;
        
        const dx = clientX - startX;
        const dy = clientY - startY;
        
        let newX = initialX + dx;
        let newY = initialY + dy;
        
        newX = Math.max(10, Math.min(590, newX));
        newY = Math.max(10, Math.min(290, newY));
        
        placedParts[index].x = newX;
        placedParts[index].y = newY;
        
        element.style.left = `${newX}px`;
        element.style.top = `${newY}px`;
    }
    
    function dragEnd() {
        document.removeEventListener('mousemove', dragMove);
        document.removeEventListener('mouseup', dragEnd);
        document.removeEventListener('touchmove', dragMove);
        document.removeEventListener('touchend', dragEnd);
        saveActiveSlotChanges();
    }
}

function selectPart(index) {
    selectedPartIndex = index;
    const domParts = partsContainer.querySelectorAll('.placed-part');
    domParts.forEach((partEl, idx) => {
        if (idx === index) {
            partEl.classList.add('selected');
        } else {
            partEl.classList.remove('selected');
        }
    });
    
    if (index !== null) {
        transformPanel.classList.remove('hidden');
    } else {
        transformPanel.classList.add('hidden');
    }
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

    const dialogues = {
        tambang: {
            intro: `Bah! Sasisnya kokoh betul. Penampilan paten lah. Langsung aja, saya tawar awal $${priceStr} buat diangkut langsung ke site tambang.`,
            tawar_sukses: `Deal! Harga $${offerStr} masuk akal untuk ketahanan sasis begini. Salaman kita!`,
            tawar_tolak: `Bujang! Jangan serakah kau! Penawaran $${offerStr} terlalu mahal buat sasis ginian. Pasnya $${compromiseStr}, mau tidak?`,
            rayu_sukses: `Hmm... masuk akal juga cakapmu. Dengan spek itu, bisa hemat solar dan tahan banting di medan lumpur. Oke, saya naikkan tawaran jadi $${priceStr}!`,
            rayu_gagal: `Ah, jangan kau tipu-tipu saya pakai sales talk kosmetik begitu. Gak mempan!`,
            walkout: `Sudahlah, bertele-tele kau! Kelamaan nego bikin pusing kepala. Saya cari builder lain saja yang gak banyak cakap!`
        },
        eksekutif: {
            intro: `Selamat siang. Rancangan kendaraan Anda cukup menarik secara estetika korporat. Saya ajukan penawaran awal di angka $${priceStr}.`,
            tawar_sukses: `Setelah saya kalkulasi ulang dampaknya terhadap profitabilitas, angka $${offerStr} masih dalam batas wajar. Saya setuju.`,
            tawar_tolak: `Maaf, nilai $${offerStr} sudah melewati estimasi budget plan kami. Kami tawarkan kesepakatan tengah di angka $${compromiseStr}.`,
            rayu_sukses: `Poin efisiensi dan analisis ROI yang Anda sampaikan cukup krusial bagi kebutuhan operasional kami. Baik, saya revisi penawaran menjadi $${priceStr}.`,
            rayu_gagal: `Argumen Anda kurang memiliki business case yang kuat dan kurang selaras dengan kebutuhan korporasi kami.`,
            walkout: `Sayang sekali, negosiasi ini tidak berjalan efisien dan tidak menguntungkan. Kami batalkan penjajakan ini.`
        },
        sultan: {
            intro: `Gokil parah bro! Rancangannya eye-catching abis, auto jadi pusat perhatian di jalanan. Gimana kalau gw tebus $${priceStr} dulu buat pembukaan?`,
            tawar_sukses: `Anjay, langsung deal! $${offerStr} mah kecil buat konten vlog terbaru gw. Bungkus bro!`,
            tawar_tolak: `Waduh bro, $${offerStr} agak kemahalan buat belanjaan impulsif hari ini. Turunin dikit lah ke $${compromiseStr}, deal gak?`,
            rayu_sukses: `Wah gila sih, bener kata lu! Kalo gw spill spek eksklusif ini di medsos pasti viral parah. Oke lah, gw naikin ke $${priceStr}!`,
            rayu_gagal: `Biasa aja sih penjelasannya, kurang nge-hype dan kurang bikin merinding buat followers gw.`,
            walkout: `Kelamaan nego bro, gak asik ah. Gw cari builder lain aja yang lebih gercep dan gak pake ribet!`
        },
        kolektor: {
            intro: `Sungguh karya yang elok dan sarat estetika klasik, anak muda. Mengingatkan saya pada memori masa lampau. Saya tawarkan $${priceStr} untuk mengawalinya.`,
            tawar_sukses: `Harga $${offerStr} sangat pantas untuk menghargai karya seni bernilai sejarah tinggi ini. Saya setuju.`,
            tawar_tolak: `Aduh, $${offerStr} sepertinya agak terlalu tinggi untuk nilai taksir koleksi saya. Bagaimana kalau jalan tengahnya $${compromiseStr} saja?`,
            rayu_sukses: `Penjelasan Anda mengenai detail sejarah dan filosofi komponennya sungguh menyentuh hati saya. Baik, saya hargai karyamu di angka $${priceStr}.`,
            rayu_gagal: `Hmm, saya rasa modifikasi Anda agak terlalu modern dan merusak cita rasa nostalgia yang saya cari.`,
            walkout: `Sayang sekali, kita tidak sejalan dalam menghargai keindahan historis ini. Permisi dulu, anak muda.`
        },
        sirkus: {
            intro: `Luar biasa! Spektakuler! Desain yang sungguh ajaib, lucu, dan penuh kejutan! Saya buka atraksi penawaran ini di harga $${priceStr}!`,
            tawar_sukses: `Abrakadabra! Harga $${offerStr} disetujui! Mobil ini akan menjadi bintang utama di bawah tenda sirkus kami!`,
            tawar_tolak: `Wah, penonton bisa menangis kalau saya bayar $${offerStr}! Tiket sirkus kami tidak semahal itu. Pasnya $${compromiseStr}!`,
            rayu_sukses: `Hahaha! Penjelasanmu bagai pertunjukan sulap yang memukau hati! Baiklah, saya sulap penawaran saya menjadi $${priceStr}!`,
            rayu_gagal: `Kurang lucu! Leluconmu tidak membuat monyet sirkus saya tertawa atau terhibur.`,
            walkout: `Pertunjukan selesai! Penonton kecewa dengan penawaran bertele-tele ini. Saya harus pergi!`
        },
        ibu: {
            intro: `Aduh Jeng, aduh Kang, mobilnya lucu banget ya. Tapi harganya jangan mahal-mahal dong, saya tawar awal $${priceStr} ya?`,
            tawar_sukses: `Ya sudah deh, harga $${offerStr} saya ambil. Untung dapet uang arisan bulanan kemarin.`,
            tawar_tolak: `Aduh mas, $${offerStr} mah bisa buat belanja beras sekontainer! Dompet ibu-ibu bisa menjerit mas. Tolong dong $${compromiseStr} aja?`,
            rayu_sukses: `Oh, ada panel surya sama bagasi luas ya? Pas banget buat jemput anak sekolah dan belanja mingguan. Ya sudah, saya naikkan tawaran ke $${priceStr}.`,
            rayu_gagal: `Ah, rayuan masnya gak mempan. Saya ini udah biasa nawar cabai dan sayur di pasar induk!`,
            walkout: `Ih, pelit banget masnya gak mau ditawar lagi. Mending saya cari di showroom sebelah aja!`
        },
        pembalap: {
            intro: `Mobil rakitan lu kelihatan kencang di atas kertas. Gw buka penawaran di harga $${priceStr}. Deal?`,
            tawar_sukses: `Oke, harga $${offerStr} dapet spek sepadan buat melibas tikungan sirkuit. Kita deal!`,
            tawar_tolak: `Jangan bercanda lu, $${offerStr} kemahalan buat mobil yang belum gw tes di jalanan. Gw berani di angka $${compromiseStr}.`,
            rayu_sukses: `Spoiler serat karbon dan jet booster ya? Menarik... bisa potong waktu lap gw di sirkuit. Deal, gw bayar $${priceStr}!`,
            rayu_gagal: `Sales talk lu gak bakal bisa nambah tenaga mesin atau traksi ban di atas aspal basah.`,
            walkout: `Terlalu banyak omong lu. Kelamaan nego bikin mesin gw dingin dan ban kehilangan grip. Gw cabut!`
        }
    };

    const defaultDialogues = {
        intro: `Rancangan ini lumayan. Saya tawarkan harga awal $${priceStr}.`,
        tawar_sukses: `Tawaran yang masuk akal. Saya setuju dengan harga $${offerStr}.`,
        tawar_tolak: `Hmm... harga $${offerStr} terlalu mahal. Bagaimana jika $${compromiseStr}?`,
        rayu_sukses: `Bujukan Anda sangat meyakinkan. Saya naikkan tawaran saya menjadi $${priceStr}.`,
        rayu_gagal: `Saya rasa argumen Anda kurang relevan dengan preferensi berkendara saya.`,
        walkout: `Buyer menolak bernegosiasi lagi dan meninggalkan studio Anda!`
    };

    if (dialogues[buyerId] && dialogues[buyerId][dialogType]) {
        return dialogues[buyerId][dialogType];
    }
    return defaultDialogues[dialogType] || "";
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
    screens.studio.classList.remove('active');
    screens.negotiation.classList.add('active');
    
    // Render left split Showroom
    showroomCarTarget.innerHTML = CHASSIS_SVG[carModel.baseChassis];
    const showroomPaint = showroomCarTarget.querySelectorAll('.car-paintable');
    showroomPaint.forEach(p => p.setAttribute('fill', slot.car.color));
    
    // Check if lowering suspension is installed
    const isLoweredShowroom = slot.car.parts.some(p => p.templateId === "suspension-ceper");
    if (isLoweredShowroom) {
        showroomCarTarget.querySelector('svg').style.transform = "translateY(25px)";
    }
    
    // Render placed parts in showroom
    const targetPartsWrap = document.createElement('div');
    targetPartsWrap.style.position = 'absolute';
    targetPartsWrap.style.width = '100%';
    targetPartsWrap.style.height = '100%';
    targetPartsWrap.style.top = '0';
    targetPartsWrap.style.left = '0';
    
    slot.car.parts.forEach(part => {
        const div = document.createElement('div');
        div.className = `placed-part`;
        div.style.left = `${part.x}px`;
        
        if (isLoweredShowroom && !part.templateId.startsWith('wheel-')) {
            div.style.top = `${part.y + 25}px`;
        } else {
            div.style.top = `${part.y}px`;
        }
        
        div.style.width = '100px'; 
        div.style.height = '100px';
        let transformStr = `translate(-50%, -50%) rotate(${part.rotation}deg) scale(${part.scale})`;
        if (part.flipped) transformStr += ' scaleX(-1)';
        div.style.transform = transformStr;
        div.innerHTML = part.svg;
        targetPartsWrap.appendChild(div);
    });
    showroomCarTarget.appendChild(targetPartsWrap);
    
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
    logToTerminal(`Kas Anda saat ini: $${gameState.cash.toLocaleString()}`, 'success');
    
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
    if (negoSession.patience <= 0) {
        logToTerminal(`Kesabaran buyer sudah habis! Buyer menolak tawaran Anda dan walkout.`, 'error');
        executeWalkout();
        return;
    }
    
    negoSession.counterCount++;
    negoSession.patience--;
    
    updateTerminalPatienceDisplay();
    
    // Evaluation math logic
    const margin = offer / negoSession.initialBid;
    let acceptChance = 0;
    
    if (margin <= 1.05) acceptChance = 0.95;
    else if (margin <= 1.15) acceptChance = 0.75;
    else if (margin <= 1.30) acceptChance = 0.40;
    else if (margin <= 1.50) acceptChance = 0.15;
    else acceptChance = 0.02;
    
    // Rayu buff
    if (negoSession.persuaded) {
        acceptChance += 0.25;
    }
    
    const success = Math.random() < acceptChance;
    
    if (success) {
        negoSession.currentBid = offer;
        const dialogue = getBuyerDialogue(negoSession.buyer.id, 'tawar_sukses', { offer: offer });
        logToTerminal(`${negoSession.buyer.name}: "${dialogue}"`, 'success');
        logToTerminal(`Ketik /terima untuk mengonfirmasi penjualan!`, 'sys');
    } else {
        // Buyer rejects counter offer but proposes a compromise
        const compromise = Math.round(negoSession.currentBid * (1 + (acceptChance * 0.15)));
        negoSession.currentBid = Math.max(compromise, negoSession.currentBid);
        
        const dialogue = getBuyerDialogue(negoSession.buyer.id, 'tawar_tolak', { offer: offer, compromise: compromise });
        logToTerminal(`${negoSession.buyer.name}: "${dialogue}"`, 'normal');
        
        if (negoSession.patience <= 0) {
            logToTerminal(`[WARNING]: Kesabaran buyer habis! Nego satu kali lagi akan membuat buyer walkout!`, 'error');
        }
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
    screens.negotiation.classList.remove('active');
    screens.dashboard.classList.add('active');
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
        screens.studio.classList.remove('active');
        screens.dashboard.classList.add('active');
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
    document.getElementById('transform-flip').addEventListener('click', () => {
        if (selectedPartIndex !== null) {
            placedParts[selectedPartIndex].flipped = !placedParts[selectedPartIndex].flipped;
            renderPlacedParts();
            saveActiveSlotChanges();
        }
    });
    document.getElementById('transform-scale-up').addEventListener('click', () => {
        if (selectedPartIndex !== null) {
            placedParts[selectedPartIndex].scale = Math.min(2.5, placedParts[selectedPartIndex].scale + 0.1);
            renderPlacedParts();
            saveActiveSlotChanges();
        }
    });
    document.getElementById('transform-scale-down').addEventListener('click', () => {
        if (selectedPartIndex !== null) {
            placedParts[selectedPartIndex].scale = Math.max(0.4, placedParts[selectedPartIndex].scale - 0.1);
            renderPlacedParts();
            saveActiveSlotChanges();
        }
    });
    document.getElementById('transform-rotate-left').addEventListener('click', () => {
        if (selectedPartIndex !== null) {
            placedParts[selectedPartIndex].rotation = (placedParts[selectedPartIndex].rotation - 15) % 360;
            renderPlacedParts();
            saveActiveSlotChanges();
        }
    });
    document.getElementById('transform-rotate-right').addEventListener('click', () => {
        if (selectedPartIndex !== null) {
            placedParts[selectedPartIndex].rotation = (placedParts[selectedPartIndex].rotation + 15) % 360;
            renderPlacedParts();
            saveActiveSlotChanges();
        }
    });
    document.getElementById('transform-delete').addEventListener('click', () => {
        if (selectedPartIndex !== null) {
            placedParts.splice(selectedPartIndex, 1);
            selectPart(null);
            renderPlacedParts();
            saveActiveSlotChanges();
        }
    });
    
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
}
