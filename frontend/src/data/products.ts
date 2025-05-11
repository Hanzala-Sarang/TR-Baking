import { Product, ProductGroup } from "../types";

// Updated product structure to group similar products
export const productGroups: ProductGroup[] = [
  {
    id: "rotary-rack-oven",
    name: "Rotary Rack Oven",
    category: "Rotary Rack Oven",
    description:
      "We introduce a range of rotary rack ovens suitable for different manufacturing levels. These ovens are equipped with a two-way steamer that enables abundant and homogeneous steam production. Completely built with stainless steel and thicker materials to maintain the absorbed heat and reduce burner ignition and fuel consumption by 40%. Easy to operate and ensures uniform baking. Latest design of heat exchanger has been adapted. You have an option of selecting the burner according to your fuel needs - LPG, diesel, or electric. All sides are covered with mineral wool insulation, with the heating chamber made of SS 304 grade steel and the body constructed in 202 grade steel.",
    primaryImage: "/assets/12-Tray-Rotary-Gas-Oven2.jpg",
    variants: [
      {
        id: 2,
        name: "Rotary Rack Oven TRE-12",
        model: "TRE-12",
        description:
          "The TRE-12 single trolley rotary rack oven is designed for smaller bakeries and cafes. Equipped with a two-way steamer for abundant and homogeneous steam production. Completely built with stainless steel and thicker materials to maintain absorbed heat and reduce fuel consumption by 40%. With capacity for 12 trays, it ensures consistent and precise baking results while maintaining energy efficiency. Easy to operate and ensures uniform baking with the latest design heat exchanger. All sides covered with mineral wool insulation, heating chamber made with SS 304 grade steel, and body in 202 grade steel. Available with LPG, diesel, or electric burner options.",
        features: [
          "Two-way steamer system for abundant and homogeneous steam production",
          "Complete stainless steel construction with thicker materials",
          "Digital temperature and timer controls",
          "40% reduced fuel consumption design",
          "Mineral wool insulation on all sides",
          "SS 304 grade heating chamber with 202 grade body",
          "Multiple fuel options: LPG, diesel, or electric heating",
        ],
        specifications: {
          dimensions: '55" x 53" x 60"',
          motorPower: "2HP and 0.5HP",
          capacity: '12 trays (18" x 18")',
          maxTemperature: "300°C",
          breadOutput: "36 loaves per trolley (400g)",
          cakeOutput: "11.5kg per trolley",
          bunsOutput: "128 pieces per trolley (45g)",
          biscuitsOutput: "5-6kg per trolley",
          dryRuskOutput: "5.5kg per trolley",
          khariOutput: "4kg per trolley",
          warranty: "1 year",
        },
        images: [
          "/assets/rotary rack main.jpg",
          "/assets/12-Tray-Rotary-Gas-Oven.webp",
        ],
      },
      {
        id: 3,
        name: "Rotary Rack Oven TRE-18",
        model: "TRE-18",
        description:
          "The TRE-18 single trolley rotary rack oven provides increased capacity for growing bakery operations. Equipped with a two-way steamer for abundant and homogeneous steam production. Completely built with stainless steel and thicker materials to maintain absorbed heat and reduce fuel consumption by 40%. With room for 18 trays, it delivers consistent baking performance and energy efficiency for a range of bakery products. Easy to operate and ensures uniform baking with the latest design heat exchanger. All sides covered with mineral wool insulation, heating chamber made with SS 304 grade steel, and body in 202 grade steel. Available with LPG, diesel, or electric burner options.",
        features: [
          "Two-way steamer system for abundant and homogeneous steam production",
          "Complete stainless steel construction with thicker materials",
          "Digital temperature and timer controls",
          "40% reduced fuel consumption design",
          "Mineral wool insulation on all sides",
          "SS 304 grade heating chamber with 202 grade body",
          "Multiple fuel options: LPG, diesel, or electric heating",
        ],
        specifications: {
          dimensions: '62" x 53" x 60"',
          motorPower: "2HP and 0.5HP",
          capacity: '18 trays (18" x 18")',
          maxTemperature: "300°C",
          breadOutput: "42 loaves per trolley (400g)",
          cakeOutput: "13kg per trolley",
          bunsOutput: "224 pieces per trolley (45g)",
          biscuitsOutput: "9-10kg per trolley",
          dryRuskOutput: "9.5kg per trolley",
          khariOutput: "7kg per trolley",
          warranty: "1 year",
        },
        images: [
          "/assets/42-tray-rotary-rack-oven-500x500.webp",
          "/assets/42-Tray-Rotary-Rack-Oven2.webp",
        ],
      },
      {
        id: 4,
        name: "Rotary Rack Oven TRE-44",
        model: "TRE-44",
        description:
          "The TRE-44 rotary rack oven is designed for medium to large bakeries with high production needs. Equipped with an enhanced two-way steamer for abundant and homogeneous steam production. Completely built with heavy-duty stainless steel and thicker materials to maintain absorbed heat and reduce fuel consumption by 40%. This powerful unit can handle 44 trays at once while maintaining perfect baking consistency and energy efficiency. Easy to operate with advanced digital controls and ensures uniform baking with a high-efficiency heat exchanger. All sides covered with superior mineral wool insulation, heating chamber made with SS 304 grade steel, and body in 202 grade steel. Available with LPG, diesel, or electric burner options.",
        features: [
          "Enhanced two-way steamer system for abundant and homogeneous steam production",
          "Heavy-duty stainless steel construction with thicker materials",
          "Advanced digital control system",
          "40% reduced fuel consumption with high-efficiency heat exchanger",
          "Superior mineral wool insulation on all sides",
          "SS 304 grade heating chamber with 202 grade body",
          "Multiple fuel options: LPG, diesel, or electric heating",
        ],
        specifications: {
          dimensions: '82" x 77" x 75"',
          motorPower: "2.5HP and 1HP",
          capacity: '44 trays (15" x 18")',
          maxTemperature: "300°C",
          breadOutput: "120 loaves per trolley (400g)",
          cakeOutput: "38kg per trolley",
          bunsOutput: "336 pieces per trolley (45g)",
          biscuitsOutput: "15-16kg per trolley",
          dryRuskOutput: "14-15kg per trolley",
          khariOutput: "9.5kg per trolley",
          warranty: "1 year",
        },
        images: [
          "/assets/42-tray-rotary-rack-oven-500x500.webp",
          "/assets/42-Tray-Rotary-Rack-Oven2.webp",
        ],
      },
      {
        id: 25,
        name: "Rotary Rack Oven TRE-84",
        model: "TRE-84",
        description:
          "The TRE-84 is our highest-capacity rotary rack oven, designed for industrial bakeries and large-scale production environments. Equipped with an industrial-grade two-way steamer for abundant and homogeneous steam production. Completely built with heavy-duty stainless steel and thicker materials to maintain absorbed heat and reduce fuel consumption by 40%. With space for 84 trays, this powerful unit delivers maximum output while maintaining perfect baking consistency and energy efficiency. Easy to operate with advanced digital controls and ensures uniform baking with a maximum-efficiency heat exchanger. All sides covered with premium mineral wool insulation, heating chamber made with SS 304 grade steel, and body in 202 grade steel. Available with LPG, diesel, or electric burner options.",
        features: [
          "Industrial-grade two-way steamer system for abundant and homogeneous steam production",
          "Heavy-duty stainless steel construction with thicker materials",
          "Advanced digital control panel",
          "40% reduced fuel consumption with maximum-efficiency heat exchanger",
          "Premium mineral wool insulation on all sides",
          "SS 304 grade heating chamber with 202 grade body",
          "Multiple fuel options: LPG, diesel, or electric heating",
        ],
        specifications: {
          dimensions: '82" x 77" x 90"',
          motorPower: "3HP and 1HP",
          capacity: '84 trays (15" x 18")',
          maxTemperature: "300°C",
          breadOutput: "240 loaves per trolley (400g)",
          cakeOutput: "54kg per trolley",
          bunsOutput: "525 pieces per trolley (45g)",
          biscuitsOutput: "30kg per trolley",
          dryRuskOutput: "25kg per trolley",
          khariOutput: "25kg per trolley",
          warranty: "1 year",
        },
        images: [
          "/assets/72-tray-rotary-rack-oven.jpg",
          "/assets/72-tray-rotary-rack-oven2.jpeg",
        ],
      },
    ],
  },
  {
    id: "dough-sheeter",
    name: "Dough Sheeter",
    category: "Dough Sheeter",
    description:
      "The Dough Sheeter is a robust machine engineered for bakeries and pastry kitchens. With adjustable thickness settings, it ensures consistent and efficient dough sheeting for various baked goods.",
    primaryImage: "/assets/dough-sheeter-image-1.jpeg",
    variants: [
      {
        id: 1,
        name: "Dough Sheeter Model: TR 520 (Table Top)",
        model: "TR 520 (Table Top)",
        description:
          "The JDR-650 Dough Sheeter is a robust, floor-standing machine engineered for high-volume bakeries and pastry kitchens. With its 650mm wide rollers and adjustable thickness settings, it ensures consistent and efficient dough sheeting for various baked goods.",
        features: [
          "Powerful 0.75 kW Motor",
          "8-quart stainless steel bowl",
          "10 speed settings",
          "Adjustable Thickness Settings",
          "Foldable Design",
          "High Dough Capacity",
        ],
        specifications: {
          Model: "JDR-650",
          dimensions: "2950mm x 1100mm x 1180mm",
          weight: "200 kg",
          BeltWidth: "650 mm",
          TableLength: "1200 mm",
          RollerGapAdjustment: "1 mm to 35 mm",
          MaximumDoughCapacity: "6.5 kg",
          Power: "0.75 kW",
          Voltage: "415V, Three Phase",
          warranty: "1 year",
        },
        images: [
          "/assets/table-top-dough-sheeter-520-image-1.jpg",
          "/assets/table-top-dough-sheeter-520-image-2.jpg",
        ],
      },
      {
        id: 17,
        name: "Dough Sheeter Model: TR 520",
        model: "TR 520",
        description:
          "The JDR-650 Dough Sheeter is a robust, floor-standing machine engineered for high-volume bakeries and pastry kitchens. With its 650mm wide rollers and adjustable thickness settings, it ensures consistent and efficient dough sheeting for various baked goods.",
        features: [
          "Powerful 0.75 kW Motor",
          "8-quart stainless steel bowl",
          "Adjustable Thickness Settings",
          "Durable Construction",
          "Foldable Design",
          "High Dough Capacity",
        ],
        specifications: {
          Model: "JDR-650",
          dimensions: "2950mm x 1100mm x 1180mm",
          weight: "200 kg",
          BeltWidth: "650 mm",
          TableLength: "1200 mm",
          RollerGapAdjustment: "1 mm to 35 mm",
          MaximumDoughCapacity: "6.5 kg",
          Power: "0.75 kW",
          Voltage: "415V, Three Phase",
          warranty: "1 year",
        },
        images: [
          "/assets/dough-sheeter-630-image-1.webp",
          "/assets/dough-sheeter-630-image-2.jpg",
        ],
      },
      {
        id: 18,
        name: "Dough Sheeter Model: TR 630",
        model: "TR 630",
        description:
          "The JDR-650 Dough Sheeter is a robust, floor-standing machine engineered for high-volume bakeries and pastry kitchens. With its 650mm wide rollers and adjustable thickness settings, it ensures consistent and efficient dough sheeting for various baked goods.",
        features: [
          "Powerful 0.75 kW Motor",
          "8-quart stainless steel bowl",
          "10 speed settings",
          "Adjustable Thickness Settings",
          "Durable Construction",
          "Foldable Design",
          "High Dough Capacity",
        ],
        specifications: {
          Model: "JDR-650",
          dimensions: "2950mm x 1100mm x 1180mm",
          weight: "200 kg",
          BeltWidth: "650 mm",
          TableLength: "1200 mm",
          RollerGapAdjustment: "1 mm to 35 mm",
          MaximumDoughCapacity: "6.5 kg",
          Power: "0.75 kW",
          Voltage: "415V, Three Phase",
          warranty: "1 year",
        },
        images: [
          "/assets/dough-sheeter-image-1.jpeg",
          "/assets/dough-sheeter-image-2.jpeg",
          "/assets/dough-sheeter-image-3.jpeg",
        ],
      },
    ],
  },
  // New Convection Oven product group
  {
    id: "convection-oven",
    name: "Convection Oven",
    category: "Convection Oven",
    description:
      "Commercial convection ovens with forced air circulation for faster, more even baking. Ideal for bakeries, restaurants, and commercial kitchens of all sizes.",
    primaryImage: "/assets/convection-oven.jpg",
    variants: [
      {
        id: 19,
        name: "Convection Oven 4 Tray",
        model: "4 Tray",
        description:
          "The 4 Tray Convection Oven is perfect for small bakeries and cafes. Its compact design and efficient performance deliver consistently excellent baking results with minimal space requirements.",
        features: [
          "Forced air circulation system",
          "Digital temperature controls",
          "Programmable timer with alarm",
          "Interior lighting",
          "Stainless steel construction",
          "Energy-efficient operation",
        ],
        specifications: {
          dimensions: '32"W x 28"D x 24"H',
          weight: "120 lbs",
          capacity: "4 standard baking trays",
          temperature: "50°C to 300°C",
          power: "3.5 kW, 220V",
          warranty: "1 year",
        },
        images: ["/assets/convection-oven.jpg"],
      },
      {
        id: 20,
        name: "Convection Oven 8 Tray",
        model: "8 Tray",
        description:
          "The 8 Tray Convection Oven offers expanded capacity for medium-sized operations. With dual fan technology and precise temperature control, it ensures uniform baking across all trays.",
        features: [
          "Dual fan air circulation system",
          "Digital temperature and humidity controls",
          "10 programmable recipe settings",
          "Steam injection system",
          "Heavy-duty stainless steel construction",
          "Advanced insulation for energy efficiency",
          "Easy-clean interior surfaces",
        ],
        specifications: {
          dimensions: '38"W x 36"D x 58"H',
          weight: "220 lbs",
          capacity: "8 standard baking trays",
          temperature: "50°C to 320°C",
          power: "6.5 kW, 220V",
          warranty: "1 year",
        },
        images: ["/assets/convection-oven.jpg"],
      },
      {
        id: 21,
        name: "Convection Oven 10 Tray",
        model: "10 Tray",
        description:
          "The 10 Tray Convection Oven is designed for high-volume bakeries and restaurants. Its advanced airflow technology and precise controls deliver perfect baking results even under heavy use.",
        features: [
          "Triple fan air circulation system",
          "Advanced steam injection system",
          "Multi-stage baking programs",
          "Heavy-duty construction with reinforced door",
          "Self-diagnostic system",
        ],
        specifications: {
          dimensions: '42"W x 40"D x 65"H',
          weight: "320 lbs",
          capacity: "10 standard baking trays",
          temperature: "30°C to 350°C",
          power: "9 kW, 380V Three Phase",
          warranty: "1 year",
        },
        images: ["/assets/convection-oven.jpg"],
      },
    ],
  },
  {
    id: "planetary-mixer",
    name: "Planetary Mixer",
    category: "Planetary Mixer",
    description:
      "The planetary mixer is ideal for producing cookies, cakes, and creams. This mixer is designed for high speeds and has a sturdy exterior. It comes with a stainless steel bowl with scrapper, three sets of agitators (flat beater, whisk, and hook), and its specialities include electronic variable speeds.",
    primaryImage: "/assets/20-L-planetary-mixer.webp",
    variants: [
      {
        id: 12,
        name: "Planetary Mixer TRE-PL 10",
        model: "TRE-PL 10",
        description:
          "The TRE-PL 10 planetary mixer with 10-liter bowl capacity (4kg) is perfect for small bakeries and kitchens. Ideal for producing cookies, cakes, and creams, this mixer is designed for high speeds and features a sturdy exterior. It comes with a stainless steel bowl with scrapper and three sets of agitators (flat beater, whisk, and hook). Its compact design and electronic variable speeds make it ideal for light to medium mixing tasks.",
        features: [
          "10-liter stainless steel bowl with scrapper (4kg capacity)",
          "3 mixing attachments included (flat beater, whisk, hook)",
          "Electronic variable speed control (5-100% of rated RPM)",
          "20-25 minute mixing time per batch",
          "Heavy-duty construction with sturdy exterior",
          "40% power saving compared to conventional mixers",
          "Fine quality texture for cookies, cakes, and creams",
          "Designed for high-speed operation",
        ],
        specifications: {
          dimensions: "Compact countertop size",
          weight: "90 lbs",
          capacity: "10 liters (4kg)",
          power: "0.75 HP, 220V",
          warranty: "1 year",
        },
        images: ["/assets/10-L-planetary-mixer.webp"],
      },
      {
        id: 13,
        name: "Planetary Mixer TRE-PL 20",
        model: "TRE-PL 20",
        description:
          "The TRE-PL 20 planetary mixer with 20-liter bowl capacity (7kg) offers increased capacity for medium-sized bakeries and food service operations. Ideal for producing cookies, cakes, and creams, this mixer is designed for high speeds and features a sturdy exterior. It comes with a stainless steel bowl with scrapper and three sets of agitators (flat beater, whisk, and hook). Its electronic variable speeds and robust construction allow it to handle larger batches with ease and reliability.",
        features: [
          "20-liter stainless steel bowl with scrapper (7kg capacity)",
          "Complete set of mixing attachments (flat beater, whisk, hook)",
          "Electronic variable speed control (5-100% of rated RPM)",
          "20-25 minute mixing time per batch",
          "Robust construction with sturdy exterior",
          "40% power saving compared to conventional mixers",
          "Consistent results for cookies, cakes, and creams",
          "High-speed operation for efficient mixing",
        ],
        specifications: {
          dimensions: "Medium commercial footprint",
          weight: "140 lbs",
          capacity: "20 liters (7kg)",
          power: "1.5 HP, 220V",
          warranty: "1 year",
        },
        images: ["/assets/20-L-planetary-mixer.webp"],
      },
      {
        id: 14,
        name: "Planetary Mixer TRE-PL 30",
        model: "TRE-PL 30",
        description:
          "The TRE-PL 30 planetary mixer with 30-liter bowl capacity (12kg) provides substantial capacity for growing bakeries and food production facilities. Ideal for producing cookies, cakes, and creams, this mixer is designed for high speeds and features a sturdy exterior. It comes with a stainless steel bowl with scrapper and three sets of agitators (flat beater, whisk, and hook). Its electronic variable speeds, powerful motor, and durable design ensure consistent performance for all mixing needs.",
        features: [
          "30-liter stainless steel bowl with scrapper (12kg capacity)",
          "Heavy-duty mixing attachments (flat beater, whisk, hook)",
          "Electronic variable speed control (5-100% of rated RPM)",
          "20-25 minute mixing time per batch",
          "Reinforced frame and components with sturdy exterior",
          "40% power saving compared to conventional mixers",
          "Superior results for cookies, cakes, and creams",
          "High-speed operation for professional results",
        ],
        specifications: {
          dimensions: "Standard commercial size",
          weight: "210 lbs",
          capacity: "30 liters (12kg)",
          power: "2 HP, 220V",
          warranty: "1 year",
        },
        images: ["/assets/30-L-planetary-mixer.webp"],
      },
      {
        id: 15,
        name: "Planetary Mixer TRE-PL 40",
        model: "TRE-PL 40",
        description:
          "The TRE-PL 40 planetary mixer with 40-liter bowl capacity (15kg) is designed for high-volume bakeries and commercial food production. Ideal for producing cookies, cakes, and creams, this mixer is designed for high speeds and features a sturdy exterior. It comes with a stainless steel bowl with scrapper and three sets of agitators (flat beater, whisk, and hook). Its electronic variable speeds, increased capacity, and power handle demanding mixing tasks consistently for all types of bakery products.",
        features: [
          "40-liter stainless steel bowl with scrapper (15kg capacity)",
          "Professional-grade mixing attachments (flat beater, whisk, hook)",
          "Electronic variable speed control (5-100% of rated RPM)",
          "20-25 minute mixing time per batch",
          "Robust all-metal construction with sturdy exterior",
          "40% power saving compared to conventional mixers",
          "Premium results for cookies, cakes, and creams",
          "High-speed operation for industrial-scale mixing",
        ],
        specifications: {
          dimensions: "Large commercial footprint",
          weight: "280 lbs",
          capacity: "40 liters (15kg)",
          power: "3 HP, 220V/380V",
          warranty: "1 year",
        },
        images: ["/assets/30-L-planetary-mixer.webp"],
      },
    ],
  },
  {
    id: "spiral-mixer",
    name: "Spiral Mixer",
    category: "Spiral Mixer",
    description:
      "Spiral mixer for bread, bun, rusk, khari, and more. This mixer is highly efficient with durable spirals built to enhance the kneading quality of dough. It enables the production of high-quality breads, buns, rusk, pizza base and many more. This high-speed spiral mixer is the right kneader for your hard dough and the perfect choice for every baker.",
    primaryImage: "/assets/spiral-mixer-20-kg.webp",
    variants: [
      {
        id: 5,
        name: "Spiral Mixer TRE-SL 20",
        model: "TRE-SL 20",
        description:
          "Our TRE-SL 20 spiral mixer is ideal for small to medium bakeries, with 20kg flour capacity. Highly efficient with durable spirals built to enhance the kneading quality of dough. The spiral hook design ensures efficient mixing while maintaining dough temperature, perfect for artisan bread production. It enables the production of high-quality breads, buns, rusk, pizza base and more. This high-speed spiral mixer is the right kneader for hard dough and the perfect choice for growing bakeries.",
        features: [
          "20kg flour capacity",
          "Powerful 3HP/1HP dual motor system",
          "Heavy-duty stainless steel construction",
          "Dual mixing speeds",
          "Removable bowl for easy cleaning",
          "Safety features and emergency stop",
          "Perfect for bread, bun, rusk, and khari production",
          "Enhanced dough kneading quality",
        ],
        specifications: {
          dimensions: "Standard commercial footprint",
          weight: "180 lbs",
          capacity: "20kg flour capacity",
          power: "3HP/1HP, 220V",
          warranty: "1 year",
        },
        images: ["/assets/spiral-mixer-20-kg.webp"],
      },
      {
        id: 6,
        name: "Spiral Mixer TRE-SL 30",
        model: "TRE-SL 30",
        description:
          "The TRE-SL 30 spiral mixer offers mid-range capacity for growing bakeries, with 30kg flour capacity. Highly efficient with durable spirals built to enhance the kneading quality of dough. With its powerful motor and durable construction, it handles large batches of dough with ease. It enables the production of high-quality breads, buns, rusk, pizza base and more. This high-speed spiral mixer is the right kneader for hard dough and the perfect choice for medium-sized bakery operations.",
        features: [
          "30kg flour capacity",
          "Powerful 3HP/1HP dual motor system",
          "Heavy-duty stainless steel construction",
          "Dual mixing speeds",
          "Two-way mixing action",
          "Safety features and emergency stop",
          "Ideal for high-volume bread and pastry production",
          "Superior dough kneading performance",
        ],
        specifications: {
          dimensions: "Medium commercial footprint",
          weight: "210 lbs",
          capacity: "30kg flour capacity",
          power: "3HP/1HP, 220V",
          warranty: "1 year",
        },
        images: ["/assets/spiral-mixer-20-kg.webp"],
      },
      {
        id: 26,
        name: "Spiral Mixer TRE-SL 40",
        model: "TRE-SL 40",
        description:
          "The TRE-SL 40 spiral mixer with 40kg flour capacity is designed for high-volume bakeries. Highly efficient with durable spirals built to enhance the kneading quality of dough. Its increased power and capacity handle dense doughs and large batches with ease. It enables the production of high-quality breads, buns, rusk, pizza base and more. This high-speed spiral mixer is the right kneader for hard dough and the perfect choice for bakeries with high production requirements.",
        features: [
          "40kg flour capacity",
          "Powerful 5HP/1HP dual motor system",
          "Heavy-duty all-steel construction",
          "Dual mixing speeds with reverse function",
          "Powerful motor for tough doughs",
          "Advanced safety features",
          "High-efficiency dough processing",
          "Enhanced kneading for various dough types",
        ],
        specifications: {
          dimensions: "Large commercial footprint",
          weight: "280 lbs",
          capacity: "40kg flour capacity",
          power: "5HP/1HP, 220V/380V",
          warranty: "1 year",
        },
        images: ["/assets/spiral-mixer-20-kg.webp"],
      },
      {
        id: 8,
        name: "Spiral Mixer TRE-SL 60",
        model: "TRE-SL 60",
        description:
          "The TRE-SL 60 spiral mixer with 60kg flour capacity delivers exceptional performance for large bakeries. Highly efficient with durable spirals built to enhance the kneading quality of dough. Its robust design and powerful motors handle the most demanding mixing tasks consistently. It enables the production of high-quality breads, buns, rusk, pizza base and more at scale. This high-speed spiral mixer is the right kneader for hard dough and the perfect choice for commercial bakery operations.",
        features: [
          "60kg flour capacity",
          "Powerful 7HP/2HP dual motor system",
          "Industrial-grade construction",
          "Multiple mixing speeds",
          "Heavy-duty transmission",
          "Safety guards and sensors",
          "Energy-efficient motor",
          "Professional dough kneading quality",
        ],
        specifications: {
          dimensions: "Large commercial footprint",
          weight: "380 lbs",
          capacity: "60kg flour capacity",
          power: "7HP/2HP, 380V Three Phase",
          warranty: "1 year",
        },
        images: ["/assets/100-kg-spiral-mixer.webp"],
      },
      {
        id: 27,
        name: "Spiral Mixer TRE-SL 90",
        model: "TRE-SL 90",
        description:
          "Our largest TRE-SL 90 spiral mixer with 90kg flour capacity is designed for industrial bakeries and high-volume production facilities. Highly efficient with durable spirals built to enhance the kneading quality of dough. With maximum power and capacity, it's the ultimate solution for major baking operations. It enables the production of high-quality breads, buns, rusk, pizza base and more on an industrial scale. This high-speed spiral mixer is the right kneader for hard dough and the perfect choice for large-scale commercial baking.",
        features: [
          "90kg flour capacity",
          "Powerful 10HP/3HP dual motor system",
          "Heavy-duty industrial construction",
          "Variable speed control system",
          "Comprehensive safety system",
          "Stainless steel throughout",
          "Low maintenance design",
          "Industrial-grade kneading performance",
        ],
        specifications: {
          dimensions: "Industrial footprint",
          weight: "550 lbs",
          capacity: "90kg flour capacity",
          power: "10HP/3HP, 380V Three Phase",
          warranty: "1 year",
        },
        images: ["/assets/100-kg-spiral-mixer.webp"],
      },
    ],
  },
  {
    id: "table-top-slicer",
    name: "Toast/Bread Slicer",
    category: "Toast Bread Slicer",
    description:
      "High Speed Toast Slicer Machine provided by our company is designed for low maintenance with the maintenance manager in mind. This machine is used in the slicing of bread, rusk and toasts. This machine has precision engineering design means reduced maintenance and less wear. This machine uses food grade high grip conveyor belts. High Speed Toast Slicer Machine has soft start, soft stop features reduce machine wear. This machine possesses speed ramp-up and slow-down capabilities for in-line mass production. This has slicing blade angle set for optimum slicing efficiency. This is very cost effective as it requires very low maintenance and operating costs.",
    primaryImage: "/assets/toast-slicer-machine-14mm.webp",
    variants: [
      {
        id: 10,
        name: "Table Top Bread Slicer TRE-SR12",
        model: "TRE-SR12",
        description:
          "The TRE-SR12 stand model bread slicer offers high-speed slicing for commercial bakeries with output capacity of 400-600 loaves per hour. Designed for low maintenance with the maintenance manager in mind, this machine is used in the slicing of bread, rusk and toasts. It features precision engineering design that means reduced maintenance and less wear. The machine uses food grade high grip conveyor belts with soft start, soft stop features to reduce machine wear. It possesses speed ramp-up and slow-down capabilities for in-line mass production with slicing blade angle set for optimum slicing efficiency. Perfect for standard bread loaves with precision slicing, this slicer is very cost effective as it requires very low maintenance and operating costs.",
        features: [
          "Stand model design",
          "Output: 400-600 loaves per hour",
          "1HP powerful motor",
          "Precision engineering for reduced maintenance and less wear",
          "Food-grade high grip conveyor belts",
          "Soft start/stop features to reduce machine wear",
          "Speed ramp-up and slow-down capabilities for in-line mass production",
          "Optimized slicing blade angles for maximum efficiency",
          "Low maintenance and operating costs",
        ],
        specifications: {
          dimensions: "Stand model size",
          weight: "Commercial grade",
          output: "400-600 loaves per hour",
          power: "1HP, 220V",
          warranty: "1 year",
        },
        images: ["/assets/toast-slicer-machine-14mm.webp"],
      },
      {
        id: 11,
        name: "Table Top Toast Slicer TRE-SR14",
        model: "TRE-SR14",
        description:
          "The TRE-SR14 table top toast slicer is specifically designed for smaller bakeries with output capacity of 300 loaves per hour. Designed for low maintenance with the maintenance manager in mind, this machine is used in the slicing of bread, rusk and toasts. It features precision engineering design that means reduced maintenance and less wear. The machine uses food grade high grip conveyor belts with soft start, soft stop features to reduce machine wear. It possesses speed ramp-up and slow-down capabilities for in-line mass production with slicing blade angle set for optimum slicing efficiency. It delivers perfect slices for toasting applications and sandwich preparation while being very cost effective as it requires very low maintenance and operating costs.",
        features: [
          "Compact table top design",
          "Output: 300 loaves per hour",
          "0.5HP efficient motor",
          "Precision engineering for reduced maintenance and less wear",
          "Food-grade high grip conveyor belts",
          "Soft start/stop features to reduce machine wear",
          "Speed ramp-up and slow-down capabilities for in-line production",
          "Optimized blade angles for perfect slicing efficiency",
          "Low maintenance and operating costs",
        ],
        specifications: {
          dimensions: "Compact tabletop size",
          weight: "Light commercial grade",
          output: "300 loaves per hour",
          power: "0.5HP, 220V",
          warranty: "1 year",
        },
        images: ["/assets/toast-slicer-machine-14mm.webp"],
      },
    ],
  },

  // New Deck Oven product group
  {
    id: "deck-oven",
    name: "Deck Oven",
    category: "Deck Oven",
    description:
      "Professional deck ovens with stone baking surfaces for artisan breads, pizzas, and pastries. Available in single, double, and triple deck configurations with varying tray capacities to meet different production needs.",
    primaryImage: "/assets/deck-oven.jpg",
    variants: [
      {
        id: 28,
        name: "Deck Oven 1 Deck 2 Tray",
        model: "1 Deck 2 Tray",
        description:
          "The 1 Deck 2 Tray oven is perfect for small artisan bakeries and cafes. Its compact design provides excellent baking quality for limited production needs.",
        features: [
          "Single deck configuration",
          "2 tray capacity",
          "Natural stone baking surface",
          "Independent top and bottom heating elements",
          "Digital temperature controls",
          "Stainless steel exterior",
          "Energy-efficient design",
        ],
        specifications: {
          dimensions: "Compact commercial size",
          weight: "Standard",
          capacity: "2 standard trays",
          temperature: "Up to 400°C",
          power: "Single phase electric",
          warranty: "1 year",
        },
        images: ["/assets/deck-oven.jpg"],
      },
      {
        id: 29,
        name: "Deck Oven 1 Deck 3 Tray",
        model: "1 Deck 3 Tray",
        description:
          "The 1 Deck 3 Tray oven offers increased capacity in a single deck design. Perfect for growing bakeries that need more output without taking up additional vertical space.",
        features: [
          "Single deck configuration",
          "3 tray capacity",
          "Stone baking surface",
          "Balanced heating system",
          "Digital temperature controls",
          "Heavy-duty construction",
          "Efficient insulation",
        ],
        specifications: {
          dimensions: "Mid-size commercial footprint",
          weight: "Medium duty",
          capacity: "3 standard trays",
          temperature: "Up to 400°C",
          power: "Single or three phase electric",
          warranty: "1 year",
        },
        images: ["/assets/deck-oven.jpg"],
      },
      {
        id: 30,
        name: "Deck Oven 1 Deck 4 Tray",
        model: "1 Deck 4 Tray",
        description:
          "The 1 Deck 4 Tray oven provides substantial capacity in a single deck design. Ideal for bakeries with higher production needs but limited vertical space.",
        features: [
          "Single deck configuration",
          "4 tray capacity",
          "Premium stone baking surface",
          "Advanced heating element design",
          "Digital control panel",
          "Commercial-grade construction",
          "Optimized energy consumption",
        ],
        specifications: {
          dimensions: "Standard commercial size",
          weight: "Heavy duty",
          capacity: "4 standard trays",
          temperature: "Up to 400°C",
          power: "Three phase electric",
          warranty: "1 year",
        },
        images: ["/assets/deck-oven.jpg"],
      },
      {
        id: 31,
        name: "Deck Oven 1 Deck 6 Tray",
        model: "1 Deck 6 Tray",
        description:
          "The 1 Deck 6 Tray oven offers high capacity in a single deck design. Perfect for bakeries with serious production needs but space constraints.",
        features: [
          "Single deck configuration",
          "6 tray capacity",
          "Extra-wide stone baking surface",
          "Multiple heating zones",
          "Programmable digital controls",
          "Heavy-duty commercial construction",
          "Enhanced insulation system",
        ],
        specifications: {
          dimensions: "Large commercial footprint",
          weight: "Heavy duty plus",
          capacity: "6 standard trays",
          temperature: "Up to 400°C",
          power: "Three phase electric",
          warranty: "1 year",
        },
        images: ["/assets/deck-oven.jpg"],
      },
      {
        id: 32,
        name: "Deck Oven 1 Deck 8 Tray",
        model: "1 Deck 8 Tray",
        description:
          "The 1 Deck 8 Tray oven is our largest single deck model, designed for high-volume bakeries. It provides maximum production capacity while maintaining excellent baking quality.",
        features: [
          "Single deck configuration",
          "8 tray capacity",
          "Extra-large stone baking surface",
          "Multi-zone heating system",
          "Advanced digital control panel",
          "Industrial-grade construction",
          "Maximum insulation efficiency",
        ],
        specifications: {
          dimensions: "Extra large commercial footprint",
          weight: "Super heavy duty",
          capacity: "8 standard trays",
          temperature: "Up to 400°C",
          power: "Three phase electric high amperage",
          warranty: "1 year",
        },
        images: ["/assets/deck-oven.jpg"],
      },
      {
        id: 33,
        name: "Deck Oven 2 Deck 4 Tray",
        model: "2 Deck 4 Tray",
        description:
          "The 2 Deck 4 Tray oven provides dual independent baking chambers with 2 trays per deck. Perfect for bakeries that need versatility and separate temperature zones.",
        features: [
          "Double deck configuration",
          "4 tray total capacity (2 per deck)",
          "Dual independent stone baking surfaces",
          "Separate temperature controls for each deck",
          "Digital timers and controls",
          "Space-efficient vertical design",
          "Well-insulated for energy efficiency",
        ],
        specifications: {
          dimensions: "Compact vertical footprint",
          weight: "Medium heavy duty",
          capacity: "4 standard trays total",
          temperature: "Up to 400°C per deck",
          power: "Three phase electric",
          warranty: "1 year",
        },
        images: ["/assets/deck-oven.jpg"],
      },
      {
        id: 34,
        name: "Deck Oven 2 Deck 6 Tray",
        model: "2 Deck 6 Tray",
        description:
          "The 2 Deck 6 Tray oven offers dual independent baking chambers with 3 trays per deck. Ideal for bakeries that need both capacity and versatility.",
        features: [
          "Double deck configuration",
          "6 tray total capacity (3 per deck)",
          "Dual independent stone baking surfaces",
          "Separate temperature and steam controls",
          "Digital control system",
          "Durable commercial construction",
          "Optimized footprint design",
        ],
        specifications: {
          dimensions: "Standard vertical commercial size",
          weight: "Heavy duty",
          capacity: "6 standard trays total",
          temperature: "Up to 400°C per deck",
          power: "Three phase electric",
          warranty: "1 year",
        },
        images: ["/assets/deck-oven.jpg"],
      },
      {
        id: 35,
        name: "Deck Oven 3 Deck 6 Tray",
        model: "3 Deck 6 Tray",
        description:
          "The 3 Deck 6 Tray oven provides triple independent baking chambers with 2 trays per deck. Perfect for bakeries that need maximum versatility with multiple temperature zones.",
        features: [
          "Triple deck configuration",
          "6 tray total capacity (2 per deck)",
          "Three independent stone baking surfaces",
          "Individual controls for each deck",
          "Digital interface with program memory",
          "Vertical space-saving design",
          "Premium insulation between decks",
        ],
        specifications: {
          dimensions: "Tall vertical footprint",
          weight: "Heavy duty",
          capacity: "6 standard trays total",
          temperature: "Up to 400°C per deck",
          power: "Three phase electric",
          warranty: "1 year",
        },
        images: ["/assets/deck-oven.jpg"],
      },
      {
        id: 36,
        name: "Deck Oven 3 Deck 9 Tray",
        model: "3 Deck 9 Tray",
        description:
          "The 3 Deck 9 Tray oven is our most versatile triple deck model, providing maximum production capacity with three separate baking zones. Ideal for high-volume bakeries and production facilities that need to bake different products simultaneously.",
        features: [
          "Triple deck configuration",
          "9 tray total capacity (3 per deck)",
          "Three separate stone baking surfaces",
          "Independent temperature and steam controls for each deck",
          "Advanced digital control system with recipe storage",
          "Professional-grade construction",
          "Superior heat retention and energy efficiency",
        ],
        specifications: {
          dimensions: "Standard tall commercial footprint",
          weight: "Extra heavy duty",
          capacity: "9 standard trays total",
          temperature: "Up to 400°C per deck",
          power: "Three phase electric high capacity",
          warranty: "1 year",
        },
        images: ["/assets/deck-oven.jpg"],
      },
    ],
  },
];

// Helper function to flatten all products for compatibility with existing code
export const getAllProducts = (): Product[] => {
  const allProducts: Product[] = [];

  productGroups.forEach((group) => {
    group.variants.forEach((variant) => {
      allProducts.push({
        ...variant,
        category: group.category,
      });
    });
  });

  return allProducts;
};

// Get all products as a flat array for compatibility with existing code
export const products = getAllProducts();

// Function to find a product group by variant id
export const findProductGroupByVariantId = (
  variantId: number
): ProductGroup | undefined => {
  return productGroups.find((group) =>
    group.variants.some((variant) => variant.id === variantId)
  );
};

// Function to get a specific variant
export const findVariantById = (variantId: number): Product | undefined => {
  for (const group of productGroups) {
    const variant = group.variants.find((v) => v.id === variantId);
    if (variant) {
      return {
        ...variant,
        category: group.category,
      };
    }
  }
  return undefined;
};
