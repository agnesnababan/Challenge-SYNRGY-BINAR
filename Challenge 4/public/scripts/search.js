const data = [
  {
    id: "6e2bc663-5197-441a-957b-bc75e4a2da7c",
    plate: "DBH-3491",
    manufacture: "Ford",
    model: "F150",
    image: "./images/car01.min.jpg",
    rentPerDay: 200000,
    capacity: 2,
    description:
      " Brake assist. Leather-wrapped shift knob. Glove box lamp. Air conditioning w/in-cabin microfilter.",
    availableAt: "2022-03-23T15:49:05.563Z",
    transmission: "Automatic",
    available: true,
    type: "Sedan",
    year: 2022,
    options: [
      "Cruise Control",
      "Tinted Glass",
      "Tinted Glass",
      "Tinted Glass",
      "AM/FM Stereo",
    ],
    specs: [
      "Brake assist",
      "Leather-wrapped shift knob",
      "Glove box lamp",
      "Air conditioning w/in-cabin microfilter",
      "Body color folding remote-controlled pwr mirrors",
      "Dual-stage front airbags w/occupant classification system",
    ],
  },
  {
    id: "9ff03bbc-b18c-4ba7-8f3a-4c4b5c2f6c77",
    plate: "WXB-3984",
    manufacture: "BMW",
    model: "X5",
    image: "./images/car02.min.jpg",
    rentPerDay: 800000,
    capacity: 6,
    description:
      " Rear passenger map pockets. Electrochromic rearview mirror. Dual chrome exhaust tips. Locking glove box.",
    availableAt: "2022-03-23T15:49:05.563Z",
    transmission: "Automatic",
    available: false,
    type: "Convertible",
    year: 2019,
    options: [
      "Keyless Entry",
      "Power Windows",
      "MP3 (Single Disc)",
      "CD (Multi Disc)",
      "Navigation",
    ],
    specs: [
      "Rear passenger map pockets",
      "Electrochromic rearview mirror",
      "Dual chrome exhaust tips",
      "Locking glove box",
      "Pwr front vented disc/rear drum brakes",
    ],
  },
  {
    id: "bf6b5c43-1377-4ae0-8908-310c64266f81",
    plate: "OSL-4224",
    manufacture: "Lincoln",
    model: "MKZ",
    image: "./images/car03.min.jpg",
    rentPerDay: 900000,
    capacity: 6,
    description:
      " Driver & front passenger map pockets. Direct-type tire pressure monitor system. Cargo area lamp. Glove box lamp.",
    availableAt: "2022-03-23T15:49:05.563Z",
    transmission: "Automanual",
    available: true,
    type: "Sedan",
    year: 2021,
    options: [
      "Bucket Seats",
      "Airbag: Passenger",
      "Airbag: Driver",
      "Power Seats",
      "Airbag: Side",
      "Antilock Brakes",
      "CD (Multi Disc)",
    ],
    specs: [
      "Driver & front passenger map pockets",
      "Direct-type tire pressure monitor system",
      "Cargo area lamp",
      "Glove box lamp",
      "Silver finish interior door handles",
      "Driver & front passenger advanced multistage airbags w/occupant sensors",
      "Silver accent IP trim finisher -inc: silver shifter finisher",
      "Fasten seat belt warning light/chime",
    ],
  },
  {
    id: "5b67f1d7-92d4-41c7-8577-4435740aadf1",
    plate: "VPT-9753",
    manufacture: "BMW",
    model: "M5",
    image: "./images/car04.min.jpg",
    rentPerDay: 900000,
    capacity: 6,
    description: ' 6.1L SRT V8 "Hemi" engine.',
    availableAt: "2022-03-23T15:49:05.563Z",
    transmission: "Manual",
    available: true,
    type: "Hatchback",
    year: 2018,
    options: [
      "Alloy Wheels",
      "Power Locks",
      "A/C: Rear",
      "MP3 (Single Disc)",
      "Airbag: Driver",
      "A/C: Front",
      "Tinted Glass",
      "Alloy Wheels",
      "Alarm",
    ],
    specs: [
      '6.1L SRT V8 "Hemi" engine',
      "Multi-info display -inc: driving range, average MPG, current MPG, average speed, outside temp, elapsed time, maintenance & diagnostic messages",
      "Front & rear passenger folding assist grips",
      "Electronic throttle control system w/intelligence (ETCS-i)",
      "Pwr tilt/slide moonroof -inc: 1-touch open/close",
      "Acoustic glass windshield",
    ],
  },
  {
    id: "23574b8f-3e89-4685-a348-67c1f7e5b3c4",
    plate: "BHD-3923",
    manufacture: "Lincoln",
    model: "Navigator",
    image: "./images/car05.min.jpg",
    rentPerDay: 200000,
    capacity: 2,
    description:
      " Body color sill extension. Torsion beam rear suspension w/stabilizer bar. Front & rear passenger folding assist grips.",
    availableAt: "2022-03-23T15:49:05.563Z",
    transmission: "Automatic",
    available: false,
    type: "Minivan",
    year: 2020,
    options: [
      "CD (Multi Disc)",
      "Cruise Control",
      "Power Locks",
      "Alloy Wheels",
      "Tow Package",
    ],
    specs: [
      "Body color sill extension",
      "Torsion beam rear suspension w/stabilizer bar",
      "Front & rear passenger folding assist grips",
      "Electronic control braking (ECB)",
      "Black windshield molding",
    ],
  },
  {
    id: "3eead6db-c536-406b-9bc5-85d4c6e38a76",
    plate: "JPM-5482",
    manufacture: "Ford",
    model: "Fiesta",
    image: "./images/car06.min.jpg",
    rentPerDay: 900000,
    capacity: 4,
    description:
      " Tilt steering column. Carpeted cargo area. Tip start system. Leather-wrapped shift knob.",
    availableAt: "2022-03-23T15:49:05.563Z",
    transmission: "Automanual",
    available: true,
    type: "Hatchback",
    year: 2016,
    options: [
      "Leather Interior",
      "A/C: Rear",
      "CD (Multi Disc)",
      "Airbag: Side",
      "MP3 (Multi Disc)",
    ],
    specs: [
      "Tilt steering column",
      "Carpeted cargo area",
      "Tip start system",
      "Leather-wrapped shift knob",
      "Enhanced accident response system unlocks the doors, shuts off the fuel pump and turns on interior lights after airbag deploys",
      "Compact spare tire",
    ],
  },
  {
    id: "752685ce-dd39-40e5-9af5-93fdd36dea7e",
    plate: "BTW-1960",
    manufacture: "Honda",
    model: "Accord",
    image: "./images/car07.min.jpg",
    rentPerDay: 900000,
    capacity: 4,
    description:
      " Silver finish interior door handles. 160-amp alternator. Tire pressure monitoring system (TPMS). Cloth covered headliner.",
    availableAt: "2022-03-23T15:49:05.563Z",
    transmission: "Automatic",
    available: false,
    type: "Sedan",
    year: 2020,
    options: [
      "AM/FM Stereo",
      "Power Windows",
      "Power Locks",
      "Power Windows",
      "MP3 (Single Disc)",
      "A/C: Rear",
    ],
    specs: [
      "Silver finish interior door handles",
      "160-amp alternator",
      "Tire pressure monitoring system (TPMS)",
      "Cloth covered headliner",
      "625-amp maintenance-free battery",
      "Torsion beam rear suspension w/stabilizer bar",
      "Impact-dissipating upper interior trim",
      "Dual front 2-stage airbags -inc: passenger occupant classification system w/twin-chamber airbag",
    ],
  },
  {
    id: "d97e0af5-2728-4ce3-ba7f-9d83a0837db6",
    plate: "YHD-4104",
    manufacture: "Lincoln",
    model: "Navigator",
    image: "./images/car08.min.jpg",
    rentPerDay: 300000,
    capacity: 2,
    description:
      " XM satellite radio receiver -inc: 90 day trial subscription. Dual front illuminated visor vanity mirrors.",
    availableAt: "2022-03-23T15:49:05.563Z",
    transmission: "Manual",
    available: true,
    type: "Regular Cab Pickup",
    year: 2014,
    options: [
      "Fog Lights",
      "Memory Seats",
      "Rear Window Defroster",
      "Integrated Phone",
      "Power Locks",
      "A/C: Rear",
    ],
    specs: [
      "XM satellite radio receiver -inc: 90 day trial subscription",
      "Dual front illuminated visor vanity mirrors",
      "Front door tinted glass",
      "Body color door handles",
      "Chrome bodyside molding",
    ],
  },
  {
    id: "0d5de078-a5fc-456b-9487-47eb450a01c6",
    plate: "STL-7347",
    manufacture: "Buick",
    model: "LaCrosse",
    image: "./images/car09.min.jpg",
    rentPerDay: 1000000,
    capacity: 6,
    description:
      " Rear reading & courtesy lamps. Zone body construction -inc: front/rear crumple zones, hood deformation point.",
    availableAt: "2022-03-23T15:49:05.563Z",
    transmission: "Automatic",
    available: false,
    type: "Extended Cab Pickup",
    year: 2012,
    options: [
      "CD (Multi Disc)",
      "Keyless Entry",
      "Cassette Player",
      "Power Windows",
      "Rear Window Wiper",
      "CD (Single Disc)",
      "Third Row Seats",
    ],
    specs: [
      "Rear reading & courtesy lamps",
      "Zone body construction -inc: front/rear crumple zones, hood deformation point",
      "4-wheel/4-channel anti-lock brake system (ABS)",
      "Anti-lock 4-wheel performance disc brakes",
      "200mm front axle",
      "Dual front knee airbags",
    ],
  },
  {
    id: "6dfa349e-631c-46c0-a037-5c73902ff738",
    plate: "TJW-7622",
    manufacture: "BMW",
    model: "X5",
    image: "./images/car10.min.jpg",
    rentPerDay: 300000,
    capacity: 6,
    description:
      " Cargo compartment lamp. Body color fascias w/bright insert. Front/rear stabilizer bars.",
    availableAt: "2022-03-23T15:49:05.563Z",
    transmission: "Manual",
    available: true,
    type: "Hatchback",
    year: 2019,
    options: [
      "Third Row Seats",
      "Bucket Seats",
      "Integrated Phone",
      "Navigation",
      "Leather Interior",
    ],
    specs: [
      "Cargo compartment lamp",
      "Body color fascias w/bright insert",
      "Front/rear stabilizer bars",
      "Electrochromic pwr folding heated mirrors w/memory -inc: puddle lamps, integrated turn signals, auto reverse tilt-down",
      "Multi-info display -inc: driving range, average MPG, current MPG, average speed, outside temp, elapsed time, maintenance & diagnostic messages",
    ],
  },
  {
    id: "803593fb-b857-4a01-adc4-651538217a04",
    plate: "YND-1892",
    manufacture: "Chevy",
    model: "Malibu",
    image: "./images/car11.min.jpg",
    rentPerDay: 700000,
    capacity: 2,
    description:
      " Cloth covered headliner. Sentry Key theft deterrent system. Air conditioning w/in-cabin microfilter.",
    availableAt: "2022-03-23T15:49:05.563Z",
    transmission: "Automatic",
    available: false,
    type: "Coupe",
    year: 2019,
    options: [
      "Alloy Wheels",
      "Power Windows",
      "Alloy Wheels",
      "Alloy Wheels",
      "Alarm",
      "Bucket Seats",
      "Bucket Seats",
    ],
    specs: [
      "Cloth covered headliner",
      "Sentry Key theft deterrent system",
      "Air conditioning w/in-cabin microfilter",
      "Driver & front passenger map pockets",
      "Security alarm",
      "Dual bright exhaust tips",
      "Compact spare tire",
    ],
  },
  {
    id: "e0a96736-a2d5-40ca-87de-64b59cac85d8",
    plate: "FZQ-1989",
    manufacture: "BMW",
    model: "X3",
    image: "./images/car12.min.jpg",
    rentPerDay: 800000,
    capacity: 4,
    description: " Multi-reflector halogen headlamps. Speed control.",
    availableAt: "2022-03-23T15:49:05.563Z",
    transmission: "Automanual",
    available: true,
    type: "Passenger Van",
    year: 2018,
    options: [
      "Premium Sound",
      "Fog Lights",
      "Premium Sound",
      "Airbag: Side",
      "Power Seats",
      "Power Steering",
      "Airbag: Driver",
      "Power Steering",
      "Alarm",
    ],
    specs: [
      "Multi-reflector halogen headlamps",
      "Speed control",
      "Anti-lock brake system (ABS) -inc: electronic brake force distribution (EBD), brake assist",
      "Laminated side window glass",
      "Acoustic glass windshield",
      "Back-up camera",
      "Direct-type tire pressure monitor system",
      "All-position 3-point seat belts -inc: outboard pretensioners & force limiters, dual front pwr shoulder height adjusters, rear outboard emergency auto locking retractors, driver emergency locking retractor",
    ],
  },
  {
    id: "e39f2965-57da-4d8f-afdb-74f6c54e69f0",
    plate: "GAG-1943",
    manufacture: "Chevy",
    model: "Malibu",
    image: "./images/car13.min.jpg",
    rentPerDay: 900000,
    capacity: 6,
    description:
      " Leather-wrapped shift knob. Dual front illuminated visor vanity mirrors. Battery saver. Driver & front passenger map pockets.",
    availableAt: "2022-03-23T15:49:05.563Z",
    transmission: "CVT",
    available: true,
    type: "SUV",
    year: 2017,
    options: [
      "Memory Seats",
      "Cassette Player",
      "Alarm",
      "Power Steering",
      "Keyless Entry",
    ],
    specs: [
      "Leather-wrapped shift knob",
      "Dual front illuminated visor vanity mirrors",
      "Battery saver",
      "Driver & front passenger map pockets",
      "Deluxe insulation group",
    ],
  },
  {
    id: "c18a5545-2ce2-4330-aa3b-1bbcf6247519",
    plate: "CVO-9549",
    manufacture: "Chevy",
    model: "Malibu",
    image: "./images/car14.min.jpg",
    rentPerDay: 700000,
    capacity: 2,
    description:
      " Front/rear side curtain airbags. Front & rear side curtain airbags. Body color front license plate brow. Rear body-color spoiler.",
    availableAt: "2022-03-23T15:49:05.563Z",
    transmission: "Manual",
    available: false,
    type: "Regular Cab Pickup",
    year: 2020,
    options: [
      "Bucket Seats",
      "Power Seats",
      "CD (Multi Disc)",
      "Bucket Seats",
      "Navigation",
      "Rear Window Defroster",
      "Fog Lights",
    ],
    specs: [
      "Front/rear side curtain airbags",
      "Front & rear side curtain airbags",
      "Body color front license plate brow",
      "Rear body-color spoiler",
      "Reversible/waterproof cargo storage",
      "Front & rear side curtain airbags",
    ],
  },
  {
    id: "72530cba-051d-49d8-822b-deaf2e5330ca",
    plate: "JWU-8459",
    manufacture: "Lincoln",
    model: "MKS",
    image: "./images/car15.min.jpg",
    rentPerDay: 900000,
    capacity: 4,
    description:
      " Remote fuel lid release. Electronic parking brake. Daytime running lights (DRL). Silver finish interior door handles. Back-up camera.",
    availableAt: "2022-03-23T15:49:05.563Z",
    transmission: "Automanual",
    available: true,
    type: "Regular Cab Pickup",
    year: 2017,
    options: [
      "Third Row Seats",
      "CD (Single Disc)",
      "Alloy Wheels",
      "A/C: Front",
      "Power Windows",
      "A/C: Front",
      "Memory Seats",
      "Cruise Control",
      "CD (Single Disc)",
    ],
    specs: [
      "Remote fuel lid release",
      "Electronic parking brake",
      "Daytime running lights (DRL)",
      "Silver finish interior door handles",
      "Back-up camera",
      "Highline door trim panel",
      "Pwr front vented disc/rear drum brakes",
    ],
  },
  {
    id: "79cc327b-2b0f-4042-acdf-78386b2f8ebd",
    plate: "VOS-8183",
    manufacture: "Chevy",
    model: "Silverado",
    image: "./images/car16.min.jpg",
    rentPerDay: 200000,
    capacity: 6,
    description:
      " Rear window defroster. High performance suspension. 1.8L DOHC 16-valve I4 engine -inc: engine cover.",
    availableAt: "2022-03-23T15:49:05.563Z",
    transmission: "Automanual",
    available: true,
    type: "Convertible",
    year: 2021,
    options: [
      "Leather Interior",
      "Alloy Wheels",
      "MP3 (Single Disc)",
      "Airbag: Driver",
      "Cruise Control",
      "Cassette Player",
    ],
    specs: [
      "Rear window defroster",
      "High performance suspension",
      "1.8L DOHC 16-valve I4 engine -inc: engine cover",
      "Air conditioning w/in-cabin microfilter",
      "4-wheel ventilated pwr disc brakes -inc: brake override system",
    ],
  },
  {
    id: "22c969a7-04ce-4efb-a479-7ab3bc094cb9",
    plate: "ENW-7713",
    manufacture: "Lincoln",
    model: "MKS",
    image: "./images/car17.min.jpg",
    rentPerDay: 1000000,
    capacity: 2,
    description:
      " Energy absorbing steering column. 3-point ELR/ALR front passenger seat belt w/pretensioner & load limiter.",
    availableAt: "2022-03-23T15:49:05.563Z",
    transmission: "Automanual",
    available: false,
    type: "Regular Cab Pickup",
    year: 2015,
    options: [
      "Alarm",
      "Airbag: Passenger",
      "Cassette Player",
      "Moonroof/Sunroof",
      "Moonroof/Sunroof",
      "Antilock Brakes",
    ],
    specs: [
      "Energy absorbing steering column",
      "3-point ELR/ALR front passenger seat belt w/pretensioner & load limiter",
      "HomeLink universal transceiver",
      "Battery saver",
      "(2) aux 12V pwr outlets -inc: (1) in center console, (1) w/cigarette lighter",
      "LATCH-ready child seat anchor system",
      "Passenger assist handles",
      "XM satellite radio receiver -inc: 90 day trial subscription",
    ],
  },
  {
    id: "1bfda124-5175-4b90-bee7-d66affdbcc66",
    plate: "TPM-8174",
    manufacture: "Dodge",
    model: "Ram",
    image: "./images/car18.min.jpg",
    rentPerDay: 700000,
    capacity: 6,
    description:
      " 3-point ELR/ALR front passenger seat belt w/pretensioner & load limiter. Rear passenger map pockets. Black roof molding.",
    availableAt: "2022-03-23T15:49:05.563Z",
    transmission: "CVT",
    available: false,
    type: "Sedan",
    year: 2014,
    options: [
      "Moonroof/Sunroof",
      "Cassette Player",
      "Antilock Brakes",
      "Antilock Brakes",
      "Memory Seats",
      "MP3 (Single Disc)",
      "Leather Interior",
      "CD (Single Disc)",
    ],
    specs: [
      "3-point ELR/ALR front passenger seat belt w/pretensioner & load limiter",
      "Rear passenger map pockets",
      "Black roof molding",
      "Anti-lock brake system (ABS) -inc: electronic brake force distribution (EBD), brake assist",
      "Variable intermittent windshield wipers w/mist function",
      "Roof mounted antenna",
    ],
  },
  {
    id: "08cbd537-497f-4305-b7b4-e7493c703a2c",
    plate: "ZAG-8112",
    manufacture: "Ford",
    model: "F150",
    image: "./images/car19.min.jpg",
    rentPerDay: 600000,
    capacity: 6,
    description: "",
    availableAt: "2022-03-23T15:49:05.563Z",
    transmission: "Automatic",
    available: false,
    type: "Convertible",
    year: 2021,
    options: [
      "CD (Single Disc)",
      "Airbag: Driver",
      "Antilock Brakes",
      "CD (Single Disc)",
      "A/C: Rear",
      "Memory Seats",
      "Third Row Seats",
    ],
    specs: [
      "All-position 3-point seat belts -inc: outboard pretensioners & force limiters, dual front pwr shoulder height adjusters, rear outboard emergency auto locking retractors, driver emergency locking retractor",
      "Body color door handles",
      "Front & rear passenger folding assist grips",
      "Rear-window defogger w/auto-off timer",
      "160-amp alternator",
      "Body color door handles",
      "Battery saver",
      "First aid kit",
      "Immobilizer system",
    ],
  },
  {
    id: "950575d6-958c-422e-a46b-c3ed2e1315ed",
    plate: "MRQ-2982",
    manufacture: "Audi",
    model: "A4",
    image: "./images/car20.min.jpg",
    rentPerDay: 700000,
    capacity: 6,
    description:
      " Pwr accessory delay. Tire pressure monitoring system (TPMS). Tilt/telescoping steering column.",
    availableAt: "2022-03-23T15:49:05.563Z",
    transmission: "Automatic",
    available: false,
    type: "Crew Cab Pickup",
    year: 2012,
    options: [
      "Navigation",
      "Rear Window Wiper",
      "Tow Package",
      "MP3 (Multi Disc)",
      "Bucket Seats",
    ],
    specs: [
      "Pwr accessory delay",
      "Tire pressure monitoring system (TPMS)",
      "Tilt/telescoping steering column",
      "Electronic throttle control system w/intelligence (ETCS-i)",
      "Front/rear crumple zones",
      "Rear door child safety locks",
      "Child safety rear door locks",
    ],
  },
  {
    id: "b89117fc-69e1-4366-ba21-9d6a0b2bfb04",
    plate: "ACT-6027",
    manufacture: "Dodge",
    model: "Durango",
    image: "./images/car21.min.jpg",
    rentPerDay: 400000,
    capacity: 6,
    description:
      " Floor carpeting. Electric speed-sensitive variable-assist pwr steering. Dana 44/226mm rear axle. Roof mounted antenna.",
    availableAt: "2022-03-23T15:49:05.563Z",
    transmission: "Manual",
    available: false,
    type: "SUV",
    year: 2013,
    options: [
      "Memory Seats",
      "Integrated Phone",
      "Airbag: Driver",
      "Leather Interior",
      "Cassette Player",
      "Airbag: Passenger",
    ],
    specs: [
      "Floor carpeting",
      "Electric speed-sensitive variable-assist pwr steering",
      "Dana 44/226mm rear axle",
      "Roof mounted antenna",
      "Fixed long mast antenna",
    ],
  },
  {
    id: "fc1d3297-ab17-40a9-a79c-ca7307ed5faa",
    plate: "LSI-6227",
    manufacture: "Audi",
    model: "S5",
    image: "./images/car22.min.jpg",
    rentPerDay: 300000,
    capacity: 6,
    description:
      " Pwr front vented disc/rear drum brakes. Pwr windows -inc: 1-touch open/close. Cloth covered headliner.",
    availableAt: "2022-03-23T15:49:05.563Z",
    transmission: "Automatic",
    available: false,
    type: "Coupe",
    year: 2020,
    options: [
      "Memory Seats",
      "Power Locks",
      "Fog Lights",
      "Tinted Glass",
      "Rear Window Wiper",
      "Airbag: Passenger",
      "Power Locks",
      "Tow Package",
    ],
    specs: [
      "Pwr front vented disc/rear drum brakes",
      "Pwr windows -inc: 1-touch open/close",
      "Cloth covered headliner",
      "Foldable front door storage pockets",
      "Dual-stage front airbags w/occupant classification system",
      "Battery saver",
      '20" x 9.0" front & 20" x 10.0" rear aluminum wheels',
      "Cargo compartment lamp",
    ],
  },
  {
    id: "432d9ed1-e330-4953-ac33-f51a60a5799b",
    plate: "OAI-9575",
    manufacture: "Toyota",
    model: "Camry",
    image: "./images/car23.min.jpg",
    rentPerDay: 200000,
    capacity: 6,
    description:
      " Intermittent rear wiper w/washer. Energy absorbing front/rear bumpers. Engine mounts -inc: (2) solid, (1) liquid-filled.",
    availableAt: "2022-03-23T15:49:05.563Z",
    transmission: "Automatic",
    available: false,
    type: "Extended Cab Pickup",
    year: 2022,
    options: [
      "Rear Window Defroster",
      "MP3 (Single Disc)",
      "Power Steering",
      "Antilock Brakes",
      "Tow Package",
      "Fog Lights",
      "AM/FM Stereo",
      "Alarm",
    ],
    specs: [
      "Intermittent rear wiper w/washer",
      "Energy absorbing front/rear bumpers",
      "Engine mounts -inc: (2) solid, (1) liquid-filled",
      "Tire pressure monitoring display",
      "Foldable front door storage pockets",
      "Child safety rear door locks",
      "Front/rear aluminum multi-link double joint suspension w/coil springs",
      "Laminated side window glass",
      "Silver accent IP trim finisher -inc: silver shifter finisher",
    ],
  },
  {
    id: "32e7e56f-1a00-455f-bf4b-dbd2c8c4daaf",
    plate: "NHI-3883",
    manufacture: "Nissan",
    model: "Pathfiner",
    image: "./images/car24.min.jpg",
    rentPerDay: 600000,
    capacity: 6,
    description:
      " 200mm front axle. Roof mounted antenna. Cargo compartment cover. Rear bench seat -inc: (3) adjustable headrests.",
    availableAt: "2022-03-23T15:49:05.563Z",
    transmission: "Automatic",
    available: false,
    type: "Sedan",
    year: 2022,
    options: [
      "Moonroof/Sunroof",
      "Power Seats",
      "CD (Single Disc)",
      "Airbag: Passenger",
      "Alarm",
      "Power Seats",
      "Cruise Control",
    ],
    specs: [
      "200mm front axle",
      "Roof mounted antenna",
      "Cargo compartment cover",
      "Rear bench seat -inc: (3) adjustable headrests",
      "Front/rear aluminum multi-link double joint suspension w/coil springs",
      "Reclining front bucket seats -inc: active head restraints, double-thickness foam in front seats",
    ],
  },
  {
    id: "e76e884b-8f3e-4b90-a717-9239676d0191",
    plate: "IDN-5442",
    manufacture: "Honda",
    model: "Civic",
    image: "./images/car25.min.jpg",
    rentPerDay: 1000000,
    capacity: 2,
    description:
      " Electric speed-sensitive variable-assist pwr steering. Steel side-door impact beams. Dual bright exhaust tips.",
    availableAt: "2022-03-23T15:49:05.563Z",
    transmission: "CVT",
    available: false,
    type: "Wagon",
    year: 2015,
    options: [
      "CD (Single Disc)",
      "Airbag: Passenger",
      "A/C: Front",
      "Power Locks",
      "Navigation",
      "Rear Window Defroster",
      "Rear Window Defroster",
      "MP3 (Single Disc)",
      "Airbag: Side",
    ],
    specs: [
      "Electric speed-sensitive variable-assist pwr steering",
      "Steel side-door impact beams",
      "Dual bright exhaust tips",
      "Remote fuel lid release",
      "Traveler/mini trip computer",
    ],
  },
];

const carsContainer = document.getElementById("cars-container");


class Component {
  constructor(){}
  render() {}
}

class Car extends Component {
  constructor(){
    super();
  }


  filter() {
    const tipeDriver = document.getElementById("specificSizeSelect");
    const passenger = document.getElementById("inputPenumpang");
    const date = document.getElementById("inputTanggal");
    const time = document.getElementById("inputWaktu");
    const tipeDriverSet = tipeDriver.value;
    const passengerSet = passenger.value;
    const dateSet = date.value;
    const timeSet = time.value;
    let inputDateTime = dateSet + "T" + timeSet + "Z";

    if(tipeDriverSet==='' || dateSet==='' | timeSet===''){
      alert('Pastikan kembali tipe driver, tanggal, dan waktu sudah terisi')
    }else{
      let filterCars = data.filter((car)=>{
        if (passengerSet === "") {
          return (
            car.available === tipeDriverSet &&
            Date.parse(car.availableAt) > Date.parse(inputDateTime)
          );
        } else {
          return (
            car.available === tipeDriverSet &&
            Date.parse(car.availableAt) > Date.parse(inputDateTime) &&
            car.capacity >= passengerSet
          );
        }
      });
      filterCars;
    }
  }

  render = () => {
    return data
      .map(
        (car) => `
    <div class="card-deck">
    <div class="search-card" sytle="width=100%">
      <div class="card p-2 mb-2">
        <div class="card-body">
          <div class="image-card ">
            <img src="${
              car.image
            }" class="w-100" alt="" style="max-height: 180px;object-fit: cover"></div>
          <div>
            <p class="mt-4">${car.manufacture}/${car.type}</p>
          </div>
          <div>
            <h5 class="fw-bold">${new Intl.NumberFormat("id-ID", {
              style: "currency",
              currency: "IDR",
            }).format(car.rentPerDay)} / hari</h5>
          </div>
          <div>
            <p class="mt-0">${car.description}</p>
          </div>
          <div style="margin-top:20px">
            <p><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-people" viewbox="0 0 16 16">
            <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/>
            </svg>${car.capacity} Orang</p>
          </div>
          <div>
            <p><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-gear" viewbox="0 0 16 16">
            <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/>
            <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"/>
            </svg>${car.transmission}</p>
          </div>
          <div>
            <p><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-calendar4" viewbox="0 0 16 16">
            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1H2zm13 3H1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5z"/>
            </svg>Tahun ${car.year}</p>
          </div>
        </div>
        <button class="button-global mt-4">Pilih Mobil</button>
      </div>
    </div>
  </div>
  </div>
        `
      )
      .join("");
  }
}

const car = new Car();
carsContainer.innerHTML = car.render();
