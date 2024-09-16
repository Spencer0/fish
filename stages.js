
const stages = [
    {
        name: 'Ocean',
        waterColor: '#4169E1',
        islandColor: '#D2B48C',
        rippleColor: '#87CEEB',
        rods: [
            { name: 'Basic Rod', price: 0, catchSpeed: 1 },
            { name: 'Better Rod', price: 50, catchSpeed: 0.8 },
            { name: 'Super Rod', price: 200, catchSpeed: 0.5 }
        ],
        fish: [
            { name: 'Sardine', value: 10 },
            { name: 'Mackerel', value: 20 },
            { name: 'Tuna', value: 50 },
            { name: 'Salmon', value: 80 },
            { name: 'Swordfish', value: 100 }
        ]
    },
    {
        name: 'Coral Reef',
        waterColor: '#20B2AA',
        islandColor: '#F4A460',
        rippleColor: '#48D1CC',
        rods: [
            { name: 'Beginner Reef Rod', price: 25, catchSpeed: 0.9 },
            { name: 'Coral Caster', price: 100, catchSpeed: 0.7 },
            { name: 'Reef Master', price: 250, catchSpeed: 0.5 }
        ],
        fish: [
            { name: 'Clownfish', value: 15 },
            { name: 'Butterflyfish', value: 25 },
            { name: 'Parrotfish', value: 40 },
            { name: 'Triggerfish', value: 60 },
            { name: 'Moray Eel', value: 90 }
        ]
    },
    {
        name: 'Mangrove Swamp',
        waterColor: '#8B4513',
        islandColor: '#2E8B57',
        rippleColor: '#A0522D',
        rods: [
            { name: 'Swamp Starter', price: 75, catchSpeed: 0.85 },
            { name: 'Mangrove Maven', price: 175, catchSpeed: 0.65 },
            { name: 'Brackish Pro', price: 350, catchSpeed: 0.45 }
        ],
        fish: [
            { name: 'Mudskipper', value: 20 },
            { name: 'Archer Fish', value: 35 },
            { name: 'Snakehead', value: 55 },
            { name: 'Tarpon', value: 80 },
            { name: 'Bull Shark', value: 120 }
        ]
    },
    {
        name: 'Kelp Forest',
        waterColor: '#008080',
        islandColor: '#8FBC8F',
        rippleColor: '#66CDAA',
        rods: [
            { name: 'Kelp Kayak Rod', price: 150, catchSpeed: 0.8 },
            { name: 'Seaweed Slinger', price: 300, catchSpeed: 0.6 },
            { name: 'Forest Diver', price: 500, catchSpeed: 0.4 }
        ],
        fish: [
            { name: 'Garibaldi', value: 30 },
            { name: 'Leopard Shark', value: 50 },
            { name: 'Sheephead', value: 70 },
            { name: 'Giant Sea Bass', value: 100 },
            { name: 'Giant Pacific Octopus', value: 150 }
        ]
    },
    {
        name: 'Arctic Tundra',
        waterColor: '#B0E0E6',
        islandColor: '#F0FFFF',
        rippleColor: '#E0FFFF',
        rods: [
            { name: 'Ice Hole Driller', price: 250, catchSpeed: 0.75 },
            { name: 'Polar Express', price: 450, catchSpeed: 0.55 },
            { name: 'Arctic Ace', price: 700, catchSpeed: 0.35 }
        ],
        fish: [
            { name: 'Arctic Char', value: 40 },
            { name: 'Lake Trout', value: 65 },
            { name: 'Arctic Grayling', value: 90 },
            { name: 'Greenland Shark', value: 130 },
            { name: 'Beluga Whale', value: 180 }
        ]
    },
    {
        name: 'Amazon River',
        waterColor: '#8B4513',
        islandColor: '#228B22',
        rippleColor: '#CD853F',
        rods: [
            { name: 'Jungle Jigger', price: 400, catchSpeed: 0.7 },
            { name: 'Rainforest Ranger', price: 650, catchSpeed: 0.5 },
            { name: 'Amazon Angler', price: 950, catchSpeed: 0.3 }
        ],
        fish: [
            { name: 'Piranha', value: 55 },
            { name: 'Peacock Bass', value: 85 },
            { name: 'Arapaima', value: 120 },
            { name: 'Electric Eel', value: 160 },
            { name: 'Giant River Otter', value: 210 }
        ]
    },
    {
        name: 'Great Barrier Reef',
        waterColor: '#00CED1',
        islandColor: '#FFD700',
        rippleColor: '#40E0D0',
        rods: [
            { name: 'Barrier Beginner', price: 600, catchSpeed: 0.65 },
            { name: 'Coral Cruncher', price: 900, catchSpeed: 0.45 },
            { name: 'Reef Wrangler', price: 1250, catchSpeed: 0.25 }
        ],
        fish: [
            { name: 'Lionfish', value: 70 },
            { name: 'Grouper', value: 110 },
            { name: 'Potato Cod', value: 150 },
            { name: 'Manta Ray', value: 200 },
            { name: 'Great White Shark', value: 250 }
        ]
    },
    {
        name: 'Mediterranean Sea',
        waterColor: '#4169E1',
        islandColor: '#DEB887',
        rippleColor: '#1E90FF',
        rods: [
            { name: 'Coastal Caster', price: 850, catchSpeed: 0.6 },
            { name: 'Mediterranean Master', price: 1200, catchSpeed: 0.4 },
            { name: 'Poseidons Pride', price: 1600, catchSpeed: 0.2 }
        ],
        fish: [
            { name: 'Sea Bream', value: 90 },
            { name: 'Red Mullet', value: 130 },
            { name: 'Dusky Grouper', value: 180 },
            { name: 'Bluefin Tuna', value: 240 },
            { name: 'Mediterranean Monk Seal', value: 300 }
        ]
    },
    {
        name: 'Mariana Trench',
        waterColor: '#191970',
        islandColor: '#2F4F4F',
        rippleColor: '#000080',
        rods: [
            { name: 'Depth Defier', price: 1150, catchSpeed: 0.55 },
            { name: 'Abyssal Angler', price: 1550, catchSpeed: 0.35 },
            { name: 'Hadal Zone Hero', price: 2000, catchSpeed: 0.15 }
        ],
        fish: [
            { name: 'Fangtooth', value: 110 },
            { name: 'Viperfish', value: 160 },
            { name: 'Giant Isopod', value: 220 },
            { name: 'Frilled Shark', value: 280 },
            { name: 'Giant Squid', value: 350 }
        ]
    },
    {
        name: 'Galapagos Islands',
        waterColor: '#00BFFF',
        islandColor: '#8B4513',
        rippleColor: '#87CEFA',
        rods: [
            { name: 'Evolution Edge', price: 1500, catchSpeed: 0.5 },
            { name: 'Darwins Delight', price: 1950, catchSpeed: 0.3 },
            { name: 'Enchanted Endemic', price: 2500, catchSpeed: 0.1 }
        ],
        fish: [
            { name: 'Galapagos Shark', value: 140 },
            { name: 'Yellowfin Tuna', value: 190 },
            { name: 'Mola Mola', value: 260 },
            { name: 'Galapagos Fur Seal', value: 320 },
            { name: 'Whale Shark', value: 400 }
        ]
    },
    {
        name: 'Icelandic Hot Springs',
        waterColor: '#00CED1',
        islandColor: '#A9A9A9',
        rippleColor: '#48D1CC',
        rods: [
            { name: 'Thermal Thrower', price: 2000, catchSpeed: 0.45 },
            { name: 'Geyser Grappler', price: 2500, catchSpeed: 0.25 },
            { name: 'Hot Spring Hero', price: 3200, catchSpeed: 0.05 }
        ],
        fish: [
            { name: 'Arctic Char', value: 170 },
            { name: 'Brown Trout', value: 230 },
            { name: 'Atlantic Salmon', value: 300 },
            { name: 'Greenland Shark', value: 370 },
            { name: 'Basking Shark', value: 450 }
        ]
    },
    {
        name: 'Lava',
        waterColor: '#FF4500',
        islandColor: '#1C1C1C',
        rippleColor: '#FFA500',
        rods: [
            { name: 'Heat-Resistant Rod', price: 300, catchSpeed: 0.7 },
            { name: 'Magma Rod', price: 500, catchSpeed: 0.5 },
            { name: 'Volcanic Rod', price: 1000, catchSpeed: 0.3 }
        ],
        fish: [
            { name: 'Magma Minnow', value: 30 },
            { name: 'Lava Eel', value: 60 },
            { name: 'Obsidian Carp', value: 100 },
            { name: 'Flame Angelfish', value: 150 },
            { name: 'Phoenix Fish', value: 200 }
        ]
    },
    {
        name: 'Sky',
        waterColor: '#87CEEB',
        islandColor: '#FFFFFF',
        rippleColor: '#E6E6FA',
        rods: [
            { name: 'Cloud Rod', price: 1500, catchSpeed: 0.6 },
            { name: 'Wind Rod', price: 2000, catchSpeed: 0.4 },
            { name: 'Lightning Rod', price: 3000, catchSpeed: 0.2 }
        ],
        fish: [
            { name: 'Sky Sardine', value: 50 },
            { name: 'Cumulus Carp', value: 100 },
            { name: 'Nimbus Trout', value: 200 },
            { name: 'Thundercloud Bass', value: 300 },
            { name: 'Aurora Angelfish', value: 500 }
        ]
    },
    {
        name: 'Deep Sea',
        waterColor: '#000080',
        islandColor: '#2F4F4F',
        rippleColor: '#4169E1',
        rods: [
            { name: 'Pressure-Resistant Rod', price: 3500, catchSpeed: 0.5 },
            { name: 'Bioluminescent Rod', price: 4500, catchSpeed: 0.3 },
            { name: 'Abyssal Rod', price: 6000, catchSpeed: 0.1 }
        ],
        fish: [
            { name: 'Lanternfish', value: 150 },
            { name: 'Anglerfish', value: 300 },
            { name: 'Giant Squid', value: 500 },
            { name: 'Colossal Coelacanth', value: 800 },
            { name: 'Megalodon', value: 1500 }
        ]
    },
    {
        name: 'Alien Planet',
        waterColor: '#4B0082',
        islandColor: '#32CD32',
        rippleColor: '#FF69B4',
        rods: [
            { name: 'Xenomorph Rod', price: 7000, catchSpeed: 0.4 },
            { name: 'Plasma Rod', price: 9000, catchSpeed: 0.2 },
            { name: 'Quantum Rod', price: 12000, catchSpeed: 0.05 }
        ],
        fish: [
            { name: 'Nebula Minnow', value: 300 },
            { name: 'Gravity-Defying Eel', value: 600 },
            { name: 'Telepathic Tuna', value: 1000 },
            { name: 'Shapeshifting Shark', value: 2000 },
            { name: 'Cosmic Kraken', value: 5000 }
        ]
    },
    {
        name: 'Cyberpunk City',
        waterColor: '#00FF00',
        islandColor: '#1A1A1A',
        rippleColor: '#FF00FF',
        rods: [
            { name: 'Neon Rod', price: 15000, catchSpeed: 0.3 },
            { name: 'Cyber-Enhanced Rod', price: 20000, catchSpeed: 0.15 },
            { name: 'AI-Powered Rod', price: 30000, catchSpeed: 0.03 }
        ],
        fish: [
            { name: 'Data Fish', value: 500 },
            { name: 'Holographic Herring', value: 1000 },
            { name: 'Nanobot Shark', value: 2500 },
            { name: 'Cyborg Whale', value: 5000 },
            { name: 'Virtual Reality Leviathan', value: 10000 }
        ]
    },
    {
        name: 'Subatomic Realm',
        waterColor: '#FFD700',
        islandColor: '#0000FF',
        rippleColor: '#FF4500',
        rods: [
            { name: 'Quantum Entanglement Rod', price: 40000, catchSpeed: 0.2 },
            { name: 'String Theory Rod', price: 60000, catchSpeed: 0.1 },
            { name: 'Higgs Boson Rod', price: 100000, catchSpeed: 0.01 }
        ],
        fish: [
            { name: 'Quark Quillfish', value: 1000 },
            { name: 'Neutrino Nautilus', value: 3000 },
            { name: 'Antimatter Anglerfish', value: 7000 },
            { name: 'Dark Matter Dolphin', value: 15000 },
            { name: 'Supernova Sunfish', value: 30000 }
        ]
    },
    {
        name: 'Dreamscape',
        waterColor: '#9400D3',
        islandColor: '#FFDAB9',
        rippleColor: '#7FFFD4',
        rods: [
            { name: 'Lucid Rod', price: 150000, catchSpeed: 0.15 },
            { name: 'Nightmare Rod', price: 250000, catchSpeed: 0.07 },
            { name: 'Astral Projection Rod', price: 500000, catchSpeed: 0.005 }
        ],
        fish: [
            { name: 'Surreal Seahorse', value: 5000 },
            { name: 'Morphing Manta Ray', value: 10000 },
            { name: 'Escher Eel', value: 25000 },
            { name: 'Dalis Dreamfish', value: 50000 },
            { name: 'Inception Icthyosaur', value: 100000 }
        ]
    },
    {
        name: 'Prehistoric Era',
        waterColor: '#8B4513',
        islandColor: '#228B22',
        rippleColor: '#F4A460',
        rods: [
            { name: 'Primordial Rod', price: 750000, catchSpeed: 0.1 },
            { name: 'Jurassic Rod', price: 1500000, catchSpeed: 0.05 },
            { name: 'Extinction Event Rod', price: 3000000, catchSpeed: 0.001 }
        ],
        fish: [
            { name: 'Trilobite', value: 20000 },
            { name: 'Dunkleosteus', value: 50000 },
            { name: 'Liopleurodon', value: 100000 },
            { name: 'Megalodon', value: 250000 },
            { name: 'Kronosaurus', value: 500000 }
        ]
    },
    {
        name: 'Interdimensional Rift',
        waterColor: '#FF1493',
        islandColor: '#00CED1',
        rippleColor: '#FF69B4',
        rods: [
            { name: 'Wormhole Rod', price: 5000000, catchSpeed: 0.07 },
            { name: 'Multiverse Rod', price: 10000000, catchSpeed: 0.03 },
            { name: 'Omniversal Rod', price: 50000000, catchSpeed: 0.0001 }
        ],
        fish: [
            { name: 'Tesseract Trout', value: 100000 },
            { name: 'Möbius Strip Manta', value: 300000 },
            { name: 'Klein Bottle Kraken', value: 750000 },
            { name: 'Hypercube Haddock', value: 2000000 },
            { name: 'Infinite Probability Ichthyosaur', value: 10000000 }
        ]
    }
];