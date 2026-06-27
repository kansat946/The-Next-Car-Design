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
    { id: "military", name: "Armored / Military", base: "suv" }
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
        military: ["Armored Toyota LC", "HMMWV (Humvee)", "Rezvani Tank X", "Jeep Willys MB (1941)"]
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
        { id: "wheel-alloy", name: "Velg Alloy Sport", price: 1200, effect: { speed: 10, accel: -0.3, eco: 2, flex: 10, defense: 0 }, desc: "Velg aluminium ringan berkualitas tinggi.", svg: `<svg viewBox="0 0 100 100" width="80" height="80"><circle cx="50" cy="50" r="45" fill="#1a1a1a" stroke="#444" stroke-width="4"/><circle cx="50" cy="50" r="33" fill="#666" stroke="#fff" stroke-width="2"/><circle cx="50" cy="50" r="8" fill="#111"/><line x1="50" y1="17" x2="50" y2="83" stroke="#fff" stroke-width="3"/><line x1="17" y1="50" x2="83" y2="50" stroke="#fff" stroke-width="3"/><line x1="27" y1="27" x2="73" y2="73" stroke="#fff" stroke-width="3"/><line x1="27" y1="73" x2="73" y2="27" stroke="#fff" stroke-width="3"/></svg>` },
        { id: "wheel-monster", name: "Ban Monster Truck", price: 6500, effect: { speed: -30, accel: 1.8, eco: -20, flex: 40, defense: 35 }, desc: "Ban bergerigi raksasa untuk melindas apa saja.", svg: `<svg viewBox="0 0 100 100" width="120" height="120"><circle cx="50" cy="50" r="46" fill="#111"/><circle cx="50" cy="50" r="28" fill="#ffcc00" stroke="#b38f00" stroke-width="3"/><circle cx="50" cy="50" r="15" fill="#333"/><circle cx="50" cy="50" r="6" fill="#111"/></svg>` },
        { id: "wheel-tank", name: "Roda Rantai Tank", price: 12500, effect: { speed: -60, accel: 3.5, eco: -40, flex: 50, defense: 80 }, desc: "Kecepatan berkurang drastis, tapi tidak bisa dihancurkan.", svg: `<svg viewBox="0 0 160 80" width="160" height="80"><rect x="5" y="10" width="150" height="60" rx="30" fill="#2d382c" stroke="#1c241b" stroke-width="4"/><circle cx="35" cy="40" r="20" fill="#445443" stroke="#222" stroke-width="3"/><circle cx="80" cy="40" r="20" fill="#445443" stroke="#222" stroke-width="3"/><circle cx="125" cy="40" r="20" fill="#445443" stroke="#222" stroke-width="3"/><rect x="5" y="10" width="150" height="60" rx="30" fill="none" stroke="#111" stroke-width="4" stroke-dasharray="10,8"/></svg>` },
        { id: "wheel-pizza", name: "Roda Pizza Lezat", price: 450, effect: { speed: -10, accel: -0.5, eco: 15, flex: 35, defense: -15 }, desc: "Licin, wangi oregano, dan bisa dimakan darurat.", svg: `<svg viewBox="0 0 100 100" width="80" height="80"><circle cx="50" cy="50" r="45" fill="#e68a00" stroke="#b36200" stroke-width="3"/><circle cx="50" cy="50" r="40" fill="#ffd699"/><circle cx="35" cy="35" r="7" fill="#cc0000"/><circle cx="68" cy="42" r="6" fill="#cc0000"/><circle cx="45" cy="68" r="8" fill="#cc0000"/><line x1="50" y1="10" x2="50" y2="90" stroke="#b36200" stroke-width="1.5"/><line x1="10" y1="50" x2="90" y2="50" stroke="#b36200" stroke-width="1.5"/></svg>` },
        { id: "wheel-square", name: "Roda Kotak Sempurna", price: 150, effect: { speed: -80, accel: 5.0, eco: -50, flex: 60, defense: 20 }, desc: "Puncak ketidakpraktisan otomotif abad ini.", svg: `<svg viewBox="0 0 100 100" width="80" height="80"><rect x="10" y="10" width="80" height="80" rx="5" fill="#333" stroke="#111" stroke-width="4"/><rect x="25" y="25" width="50" height="50" fill="#888" stroke="#fff" stroke-width="2"/><circle cx="50" cy="50" r="8" fill="#111"/></svg>` }
    ],
    spoilers: [
        { id: "spoiler-carbon", name: "Spoiler Carbon GT", price: 3200, effect: { speed: 20, accel: -0.4, eco: -3, flex: 25, defense: 0 }, desc: "Menambah downforce dan ketampanan mobil.", svg: `<svg viewBox="0 0 120 60" width="120" height="60"><path d="M10,45 L30,10 L50,10 L40,45 Z" fill="#222"/><path d="M110,45 L90,10 L70,10 L80,45 Z" fill="#222"/><rect x="0" y="5" width="120" height="8" rx="3" fill="#111" stroke="#444" stroke-width="1"/><polygon points="0,2 10,0 10,16 0,14" fill="#00ffcc"/><polygon points="120,2 110,0 110,16 120,14" fill="#00ffcc"/></svg>` },
        { id: "spoiler-biplane", name: "Sayap Ganda Biplane", price: 7500, effect: { speed: -10, accel: 0.8, eco: -15, flex: 55, defense: 10 }, desc: "Winglet pesawat untuk gaya aerodinamika maksimal.", svg: `<svg viewBox="0 0 130 80" width="130" height="80"><line x1="30" y1="75" x2="30" y2="10" stroke="#333" stroke-width="4"/><line x1="100" y1="75" x2="100" y2="10" stroke="#333" stroke-width="4"/><rect x="15" y="38" width="100" height="6" rx="2" fill="#222"/><rect x="5" y="8" width="120" height="6" rx="2" fill="#111"/></svg>` },
        { id: "spoiler-rocket", name: "Roket Pendorong Jet", price: 28000, effect: { speed: 180, accel: -3.0, eco: -80, flex: 95, defense: 15 }, desc: "Pendorong jet super bertenaga, polusi tinggi.", svg: `<svg viewBox="0 0 140 70" width="140" height="70"><rect x="20" y="15" width="80" height="35" rx="10" fill="#555" stroke="#333" stroke-width="2"/><rect x="10" y="20" width="10" height="25" fill="#ffaa00"/><path d="M10,20 L-20,15 L-5,32 L-30,32 L-5,40 L-20,48 L10,45 Z" fill="#ff3300"/><path d="M10,25 L-10,22 L-2,32 L-15,32 L-2,38 L-10,42 L10,40 Z" fill="#ffcc00"/><line x1="40" y1="50" x2="30" y2="68" stroke="#333" stroke-width="5"/><line x1="80" y1="50" x2="90" y2="68" stroke="#333" stroke-width="5"/></svg>` }
    ],
    roof: [
        { id: "roof-siren", name: "Sirine Polisi", price: 1800, effect: { speed: 5, accel: -0.1, eco: 0, flex: 20, defense: 10 }, desc: "Sirine darurat pembuat panik jalan raya.", svg: `<svg viewBox="0 0 60 40" width="60" height="40"><ellipse cx="30" cy="30" rx="25" ry="10" fill="#333"/><path d="M15,25 Q30,5 45,25 Z" fill="#0066ff" opacity="0.9"/><path d="M30,25 Q38,10 45,25 Z" fill="#ff3333" opacity="0.9"/><circle cx="30" cy="20" r="5" fill="#fff"/></svg>` },
        { id: "roof-propeller", name: "Baling Helikopter", price: 16500, effect: { speed: 50, accel: -2.0, eco: 15, flex: 70, defense: -10 }, desc: "Baling-baling udara pengurang bobot gesekan sasis.", svg: `<svg viewBox="0 0 200 60" width="200" height="60"><rect x="95" y="30" width="10" height="30" fill="#444"/><ellipse cx="100" cy="30" rx="15" ry="6" fill="#222"/><path d="M100,28 L5,20 L5,32 Z" fill="#111" stroke="#333"/><path d="M100,28 L195,20 L195,32 Z" fill="#111" stroke="#333"/></svg>` },
        { id: "roof-solar", name: "Solar Panel", price: 5200, effect: { speed: -5, accel: 0.2, eco: 50, flex: 15, defense: 5 }, desc: "Mengisi baterai menggunakan sinar matahari gratis.", svg: `<svg viewBox="0 0 120 30" width="120" height="30"><rect x="5" y="5" width="110" height="20" rx="3" fill="#0e2338" stroke="#1d4268" stroke-width="2"/><line x1="22" y1="5" x2="22" y2="25" stroke="#376793"/><line x1="44" y1="5" x2="44" y2="25" stroke="#376793"/><line x1="66" y1="5" x2="66" y2="25" stroke="#376793"/><line x1="5" y1="15" x2="115" y2="15" stroke="#376793"/></svg>` },
        { id: "roof-chimney", name: "Cerobong Asap Klasik", price: 850, effect: { speed: -10, accel: 0.5, eco: -60, flex: 35, defense: 10 }, desc: "Gaya kereta uap abad pertengahan dengan polusi pekat.", svg: `<svg viewBox="0 0 50 80" width="50" height="80"><rect x="15" y="25" width="20" height="55" fill="#4a3b32" stroke="#1a120b" stroke-width="2"/><ellipse cx="25" cy="25" rx="13" ry="5" fill="#8c6a5c" stroke="#1a120b" stroke-width="2"/><circle cx="15" cy="12" r="10" fill="gray" opacity="0.6"/><circle cx="28" cy="5" r="7" fill="lightgray" opacity="0.5"/></svg>` }
    ],
    front: [
        { id: "front-laser", name: "Meriam Laser Plasma", price: 19000, effect: { speed: 0, accel: -0.5, eco: -10, flex: 80, defense: 50 }, desc: "Laser futuristik penghancur rintangan jalan tol.", svg: `<svg viewBox="0 0 100 50" width="100" height="50"><rect x="30" y="15" width="60" height="20" rx="5" fill="#333" stroke="#222" stroke-width="2"/><rect x="90" y="18" width="10" height="14" fill="#00ffcc"/><circle cx="25" cy="25" r="12" fill="#555"/><line x1="100" y1="25" x2="130" y2="25" stroke="#00ffcc" stroke-width="4" stroke-linecap="round" opacity="0.8"/></svg>` },
        { id: "front-ram", name: "Bumper Duri Penabrak", price: 4500, effect: { speed: -5, accel: 0.8, eco: -5, flex: 20, defense: 90 }, desc: "Taji baja kokoh untuk menabrak rintangan.", svg: `<svg viewBox="0 0 60 90" width="60" height="90"><rect x="40" y="10" width="15" height="70" rx="3" fill="#444" stroke="#111"/><polygon points="40,20 10,25 40,30" fill="#888" stroke="#222"/><polygon points="40,45 10,50 40,55" fill="#888" stroke="#222"/><polygon points="40,70 10,75 40,80" fill="#888" stroke="#222"/></svg>` },
        { id: "front-horn", name: "Tanduk Unicorn", price: 8500, effect: { speed: 10, accel: -0.1, eco: 15, flex: 65, defense: 20 }, desc: "Tanduk emas mistis penambah karisma mobil.", svg: `<svg viewBox="0 0 80 50" width="80" height="50"><path d="M75,25 L10,18 L15,25 L10,32 Z" fill="#ffd699" stroke="#cc9900" stroke-width="1.5"/></svg>` }
    ],
    extras: [
        { id: "extra-wings", name: "Sayap Malaikat Samping", price: 15000, effect: { speed: 30, accel: -1.2, eco: 20, flex: 75, defense: -5 }, desc: "Sayap pajangan anggun penambah kecantikan.", svg: `<svg viewBox="0 0 120 80" width="120" height="80"><path d="M5,40 C15,20 45,5 95,5 C105,5 115,15 110,25 C105,35 85,55 55,60 C75,55 95,45 100,35 C95,45 70,55 45,55 C60,52 75,45 80,38 C60,45 35,45 20,40 Z" fill="#fff" stroke="#ddd" stroke-width="1.5"/></svg>` },
        { id: "extra-android", name: "Maskot Robot Ijo", price: 150, effect: { speed: -2, accel: 0, eco: 10, flex: 20, defense: 5 }, desc: "Meningkatkan status pintar sasis mobil.", svg: `<svg viewBox="0 0 60 70" width="60" height="70"><rect x="10" y="25" width="40" height="30" rx="5" fill="#a4c639"/><path d="M10,22 Q30,8 50,22 Z" fill="#a4c639"/><circle cx="22" cy="16" r="3" fill="#fff"/><circle cx="38" cy="16" r="3" fill="#fff"/><line x1="20" y1="10" x2="15" y2="4" stroke="#a4c639" stroke-width="3"/><line x1="40" y1="10" x2="45" y2="4" stroke="#a4c639" stroke-width="3"/></svg>` },
        { id: "extra-steering", name: "Setir Eksternal Konyol", price: 500, effect: { speed: -15, accel: 0.8, eco: 0, flex: 45, defense: -10 }, desc: "Kemudikan mobil dari kap luar mesin.", svg: `<svg viewBox="0 0 80 80" width="80" height="80"><circle cx="40" cy="40" r="30" fill="none" stroke="#6d4c41" stroke-width="8"/><circle cx="40" cy="40" r="5" fill="#3e2723"/><line x1="40" y1="15" x2="40" y2="65" stroke="#3e2723" stroke-width="4"/><line x1="15" y1="40" x2="65" y2="40" stroke="#3e2723" stroke-width="4"/></svg>` }
    ]
};

// 7 AI Buyers
const AI_BUYERS = [
    {
        id: "tambang",
        name: "🤠 Bos Tambang",
        desc: "Keras, pragmatis, hanya peduli ketahanan sasis dan fungsi nyata.",
        difficulty: "Hard",
        likes: ["wheel-monster", "wheel-tank", "front-ram", "pickup", "offroad", "military"],
        hates: ["color-pink", "color-neon", "extra-wings", "spoiler-rocket", "wheel-pizza", "wheel-square"],
        patience: 2,
        persuadeArg: "Ban monster dan duri penabrak ini sangat tangguh untuk melibas batu tambang Anda!"
    },
    {
        id: "eksekutif",
        name: "👔 Eksekutif Korporat",
        desc: "Kaku, elitis, mengedepankan prestise, kenyamanan profesional, dan status ramah lingkungan.",
        difficulty: "Medium",
        likes: ["sedan", "limo", "roof-solar", "front-laser", "color-black", "color-white"],
        hates: ["wheel-square", "wheel-pizza", "roof-siren", "extra-steering", "color-neon", "color-pink"],
        patience: 3,
        persuadeArg: "Ini adalah kemewahan masa depan yang tenang dengan panel surya untuk kenyamanan kerja."
    },
    {
        id: "sultan",
        name: "🎮 Sultan Millennial",
        desc: "Impulsif, suka viralitas, aktif sosmed, menyukai keunikan ekstrim bernilai flex.",
        difficulty: "Easy",
        likes: ["color-neon", "color-pink", "spoiler-rocket", "wheel-pizza", "wheel-square", "roof-siren", "sports", "supercar", "hypercar"],
        hates: ["color-black", "color-white", "van", "kei"],
        patience: 5,
        persuadeArg: "Rancangan gila ini dijamin langsung viral dan trending topik 1 di seluruh media sosial!"
    },
    {
        id: "kolektor",
        name: "👴 Kolektor Tua",
        desc: "Sangat teliti, menghargai sejarah, keaslian klasik, dan rapi.",
        difficulty: "Hard",
        likes: ["classic", "roof-chimney", "extra-steering", "sedan", "convertible", "color-white"],
        hates: ["front-laser", "spoiler-rocket", "wheel-square", "wheel-pizza", "color-neon"],
        patience: 2,
        persuadeArg: "Ini adalah sasis restorasi orisinal bernuansa retro klasik dengan pengerjaan vintage."
    },
    {
        id: "sirkus",
        name: "🤡 Sirkus Manager",
        desc: "Penuh kejutan, tidak logis, menyukai mobil paling absurd dan aneh.",
        difficulty: "Easy",
        likes: ["wheel-square", "wheel-pizza", "roof-propeller", "extra-wings", "extra-steering", "roof-siren"],
        hates: ["sedan", "hatchback", "color-black", "color-white"],
        patience: 4,
        persuadeArg: "Perpaduan roda pizza, baling-baling, dan sayap ini adalah pertunjukan sirkus berjalan terlucu!"
    },
    {
        id: "ibu",
        name: "👩 Ibu Komplek",
        desc: "Peduli keselamatan keluarga, kepraktisan, bagasi luas, ramah lingkungan, dan hemat.",
        difficulty: "Medium",
        likes: ["hatchback", "mpv", "wagon", "van", "roof-solar", "color-white", "Cheapest"],
        hates: ["spoiler-rocket", "front-laser", "extra-steering", "wheel-square", "color-pink", "color-neon"],
        patience: 3,
        persuadeArg: "Sangat aman, hemat bahan bakar berkat panel surya, dan bagasinya luas untuk belanjaan."
    },
    {
        id: "pembalap",
        name: "🏁 Pembalap Liar",
        desc: "Terobsesi kecepatan murni, spoiler karbon, nitro pendorong, sasis ceper, dan drift.",
        difficulty: "Medium",
        likes: ["sports", "supercar", "hypercar", "drift", "spoiler-carbon", "spoiler-rocket", "color-neon", "color-black"],
        hates: ["wheel-tank", "wheel-square", "wheel-pizza", "van", "mpv", "military"],
        patience: 3,
        persuadeArg: "Dengan spoiler serat karbon dan jet booster, mobil ini akan melesat bagai anak panah di trek!"
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

// --- DOM ELEMENTS ---
const screens = {
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
    loadGameData();
    setupGlobalEventListeners();
    updateHUD();
    renderDashboardSlots();
    
    // Core game loops
    startMarketEventsTicker();
    startSpecialOrderTriggers();
});

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
    
    placedParts.forEach((part, index) => {
        const div = document.createElement('div');
        div.className = `placed-part ${index === selectedPartIndex ? 'selected' : ''}`;
        div.style.left = `${part.x}px`;
        div.style.top = `${part.y}px`;
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
        div.style.top = `${part.y}px`;
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
    logToTerminal(`Ketik perintah Anda atau pilih tombol di bawah:`, 'sys');
    logToTerminal(`/terima        - Setujui penjualan senilai $${negoSession.currentBid.toLocaleString()}`, 'sys');
    logToTerminal(`/tawar [harga] - Ajukan tawar balik (contoh: /tawar ${Math.round(negoSession.currentBid * 1.25)})`, 'sys');
    logToTerminal(`/rayu          - Bujuk buyer dengan keunggulan komponen`, 'sys');
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
        executePersuade();
    } else if (cmd === "/lewati") {
        executeSkipNegotiation();
    } else {
        logToTerminal(`ERROR: Perintah '${cmd}' tidak dikenali. Ketik /terima, /tawar, /rayu, atau /lewati.`, 'error');
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
function executePersuade() {
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
    logToTerminal(`Argumen Anda: "${negoSession.buyer.persuadeArg}"`, 'user');
    
    // Persuasion success chance: 60% standard, +20% if car matches likes, -30% if matches hates
    let successChance = 0.65;
    
    // Buff/debuff on components
    negoSession.buyer.likes.forEach(like => {
        if (negoSession.car.parts.some(p => p.templateId === like)) successChance += 0.15;
    });
    negoSession.buyer.hates.forEach(hate => {
        if (negoSession.car.parts.some(p => p.templateId === hate)) successChance -= 0.25;
    });
    
    const success = Math.random() < successChance;
    
    if (success) {
        negoSession.persuaded = true;
        // Raise current bid by 15% as a bonus influence
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
        screens.studio.classList.remove('active');
        screens.dashboard.classList.add('active');
        renderDashboardSlots();
        updateHUD();
    });
    
    // Studio Launch Sell Button
    document.getElementById('btn-launch-sell').addEventListener('click', () => {
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
}
