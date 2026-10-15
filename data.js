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
    { id: "supercar_ev", name: "Supercar Listrik (EV)", base: "sports" },
    
    // New Legendary Brands
    { id: "mercedes", name: "Mercedes-Benz Spec", base: "sports" },
    { id: "bmw", name: "BMW Motorsport", base: "sports" },
    { id: "subaru", name: "Subaru Performance", base: "sports" },
    { id: "toyota", name: "Toyota Legend", base: "sports" },
    { id: "honda", name: "Honda Type R", base: "sports" },
    { id: "lamborghini", name: "Lamborghini Bull", base: "sports" },
    { id: "ferrari", name: "Ferrari Maranello", base: "sports" },
    { id: "porsche", name: "Porsche Stuttgart", base: "sports" }
];

const VARIANT_METADATA = {
    Cheapest: { label: "Paling Murah", suffix: "Eco", priceMult: 0.6, statMult: 0.8, colorClass: "tag-green" },
    BestSeller: { label: "Paling Laris", suffix: "Plus", priceMult: 1.0, statMult: 1.0, colorClass: "tag-blue" },
    MostExpensive: { label: "Paling Mahal", suffix: "Elite", priceMult: 2.2, statMult: 1.3, colorClass: "tag-orange" },
    Classic: { label: "Paling Lama (Klasik)", suffix: "Classic", priceMult: 1.4, statMult: 0.9, colorClass: "tag-purple" }
};

// Generates 112 Cars Catalog
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
        supercar_ev: ["Lucid Air Sapphire", "Tesla Model S Plaid", "Pininfarina Battista", "Rimac Nevera R"],
        
        // Brand lists
        mercedes: ["Mercedes 190E Evo II", "Mercedes C63 AMG Black", "Mercedes AMG GT Black", "Mercedes 300SL Gullwing (1954)"],
        bmw: ["BMW 2002 Turbo (1973)", "BMW M3 E30 (1986)", "BMW M5 CS (F90)", "BMW i8 Roadster (Hybrid)"],
        subaru: ["Subaru SVX (1992)", "Subaru Forester STI", "Subaru BRZ tS", "Subaru Impreza WRX STI 22B"],
        toyota: ["Toyota 2000GT (1967)", "Toyota GR Yaris", "Toyota Supra MK4 (JZA80)", "Toyota AE86 Trueno Apex"],
        honda: ["Honda Civic Type R EK9", "Honda Integra Type R DC2", "Honda S2000 Ultimate", "Honda NSX Type R (NA2)"],
        lamborghini: ["Lambo Miura SV (1971)", "Lambo Countach LP5000", "Lambo Revuelto (Hybrid)", "Lambo Aventador SVJ"],
        ferrari: ["Ferrari Dino 246 GT", "Ferrari 458 Italia", "Ferrari LaFerrari", "Ferrari F40 (1987)"],
        porsche: ["Porsche 911 Carrera RS", "Porsche 911 Turbo 930", "Porsche 918 Spyder", "Porsche Carrera GT (2004)"]
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
    ],
    stickers: [
        { id: "sticker-racing-stripes", name: "Racing Stripes", price: 1200, effect: { speed: 5, accel: -0.1, eco: -1, flex: 15, defense: 0 }, desc: "Garis balap ganda sporty yang menambah aura kecepatan.", svg: `<svg viewBox="0 0 100 60" width="100" height="60"><rect x="15" y="10" width="70" height="40" fill="#222" rx="4"/><rect x="35" y="10" width="10" height="40" fill="#fff"/><rect x="55" y="10" width="10" height="40" fill="#fff"/></svg>` },
        { id: "sticker-flame", name: "Flame Decal", price: 1500, effect: { speed: 8, accel: -0.2, eco: -2, flex: 25, defense: 0 }, desc: "Stiker kobaran api samping yang garang dan panas.", svg: `<svg viewBox="0 0 100 60" width="100" height="60"><rect x="15" y="10" width="70" height="40" fill="#111" rx="4"/><path d="M20,30 Q35,15 45,30 T75,30" fill="none" stroke="#ff3300" stroke-width="4"/><path d="M25,35 Q40,25 50,35 T80,35" fill="none" stroke="#ffaa00" stroke-width="3"/></svg>` },
        { id: "sticker-carbon-hood", name: "Carbon Hood Wrap", price: 2500, effect: { speed: 12, accel: -0.3, eco: -1, flex: 30, defense: 2 }, desc: "Melapisi kap mesin depan dengan serat karbon hitam bertekstur.", svg: `<svg viewBox="0 0 100 60" width="100" height="60"><rect x="15" y="10" width="70" height="40" fill="#333" rx="4" stroke="#fff" stroke-width="1"/><rect x="25" y="18" width="50" height="24" fill="#111" stroke-dasharray="2,2" stroke="#444"/></svg>` },
        { id: "sticker-sakura", name: "Sakura Blossom Decal", price: 1000, effect: { speed: 0, accel: 0, eco: 5, flex: 20, defense: 0 }, desc: "Stiker kelopak bunga sakura merah muda bergaya JDM klasik.", svg: `<svg viewBox="0 0 100 60" width="100" height="60"><rect x="15" y="10" width="70" height="40" fill="#2d152a" rx="4"/><circle cx="35" cy="25" r="4" fill="#ffb7c5"/><circle cx="45" cy="35" r="5" fill="#ffb7c5"/><circle cx="65" cy="25" r="4" fill="#ffb7c5"/></svg>` },
        { id: "sticker-sponsor", name: "Sponsor Decals JDM", price: 800, effect: { speed: 3, accel: -0.1, eco: -1, flex: 18, defense: 0 }, desc: "Stiker sponsor otomotif profesional di pintu samping bawah.", svg: `<svg viewBox="0 0 100 60" width="100" height="60"><rect x="15" y="10" width="70" height="40" fill="#222" rx="4"/><text x="50" y="30" fill="#fff" font-size="7" font-weight="bold" font-family="sans-serif" text-anchor="middle">SPONSOR</text><text x="50" y="42" fill="#00ffcc" font-size="5" font-family="sans-serif" text-anchor="middle">TUNING RACING</text></svg>` }
    ],
    interior: [
        { id: "interior-seat-sparco", name: "Jok Balap Sparco (Red)", price: 1800, effect: { speed: 0, accel: 0, eco: 0, flex: 20, defense: 5 }, desc: "Jok balap sport Sparco merah yang nyaman dan memegang erat tubuh.", svg: `<svg viewBox="0 0 100 80" width="80" height="80"><rect x="30" y="10" width="40" height="60" rx="10" fill="#ff2200" stroke="#fff" stroke-width="2"/><rect x="25" y="35" width="50" height="20" rx="5" fill="#ff2200"/><rect x="35" y="55" width="30" height="15" rx="3" fill="#111"/></svg>` },
        { id: "interior-wheel-momo", name: "Setir Balap MOMO Carbon", price: 1200, effect: { speed: 5, accel: -0.1, eco: 0, flex: 15, defense: 0 }, desc: "Setir sport MOMO berbahan serat karbon ultra ringan.", svg: `<svg viewBox="0 0 80 80" width="80" height="80"><circle cx="40" cy="40" r="30" fill="none" stroke="#222" stroke-width="8"/><circle cx="40" cy="40" r="28" fill="none" stroke="#ffff00" stroke-width="2" stroke-dasharray="10,25"/><rect x="37" y="15" width="6" height="50" fill="#333"/><rect x="15" y="37" width="50" height="6" fill="#333"/></svg>` },
        { id: "interior-rollcage", name: "Roll Cage Pengaman Kuning", price: 2500, effect: { speed: -5, accel: 0.2, eco: -2, flex: 10, defense: 45 }, desc: "Struktur pipa pelindung baja untuk memperkuat kabin.", svg: `<svg viewBox="0 0 100 80" width="100" height="80"><rect x="15" y="15" width="70" height="50" rx="8" fill="none" stroke="#ffcc00" stroke-width="5"/><line x1="15" y1="15" x2="85" y2="65" stroke="#ffcc00" stroke-width="5"/><line x1="85" y1="15" x2="15" y2="65" stroke="#ffcc00" stroke-width="5"/></svg>` },
        { id: "interior-led-neon", name: "Dashboard LED Neon", price: 1500, effect: { speed: 0, accel: 0, eco: -1, flex: 25, defense: 0 }, desc: "Lampu pendaran neon dinamis di sepanjang dashboard interior.", svg: `<svg viewBox="0 0 100 30" width="100" height="30"><rect x="5" y="10" width="90" height="8" rx="4" fill="#00ffcc" filter="drop-shadow(0 0 3px #00ffcc)"/><line x1="10" y1="14" x2="90" y2="14" stroke="#fff" stroke-width="1.5"/></svg>` }
    ]
};

