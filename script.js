/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * DISH DETECTIVE — CORE JAVASCRIPT ENGINE
 * Pure Vanilla JavaScript (ES2022)
 */

// ==========================================================================
// 1. CONFIGURATION (Requirement 6 & 40)
// ==========================================================================
const CONFIG = {
  IMAGE_ANALYSIS_API_KEY: "",
  ENABLE_IMAGE_ANALYSIS: false
};

// ==========================================================================
// 2. DETERMINISTIC DISH IMAGE MAPPING (Requirements 37 & 38)
// Every dish has its own verified, unique, high-resolution image asset.
// ==========================================================================
const DISH_IMAGES = {
  "Chicken Biryani": "/src/assets/images/dish_chicken_biryani_1790750232187.jpg",
  "Margherita Pizza": "/src/assets/images/dish_margherita_pizza_1790750244240.jpg",
  "Tonkotsu Ramen": "/src/assets/images/dish_ramen_bowl_1790750259608.jpg",
  "Ramen": "/src/assets/images/dish_ramen_bowl_1790750259608.jpg",
  "Paneer Tikka": "/src/assets/images/dish_paneer_tikka_1790757295035.jpg",
  "Butter Chicken": "/src/assets/images/dish_butter_chicken_1790757311728.jpg",
  "Sushi Platter": "/src/assets/images/dish_sushi_platter_1790757324097.jpg",
  "Sushi": "/src/assets/images/dish_sushi_platter_1790757324097.jpg",
  "Tacos al Pastor": "/src/assets/images/dish_tacos_pastor_1790757336710.jpg",
  "Tacos": "/src/assets/images/dish_tacos_pastor_1790757336710.jpg",
  "Pad Thai": "/src/assets/images/dish_pad_thai_1790757350473.jpg",
  "Spaghetti Carbonara": "/src/assets/images/dish_carbonara_1790757364473.jpg",
  "Pasta Carbonara": "/src/assets/images/dish_carbonara_1790757364473.jpg",
  "Caesar Salad": "/src/assets/images/dish_caesar_salad_1790757379205.jpg",
  "Classic Gourmet Cheeseburger": "/src/assets/images/dish_cheeseburger_1790757393351.jpg",
  "Cheeseburger": "/src/assets/images/dish_cheeseburger_1790757393351.jpg",
  "Masala Dosa": "/src/assets/images/dish_masala_dosa_1790757404927.jpg"
};

function getDishImage(dishName) {
  if (DISH_IMAGES[dishName]) return DISH_IMAGES[dishName];
  // Normalization lookup
  const clean = (dishName || "").toLowerCase().trim();
  for (const [key, path] of Object.entries(DISH_IMAGES)) {
    if (clean.includes(key.toLowerCase()) || key.toLowerCase().includes(clean)) {
      return path;
    }
  }
  return "/src/assets/images/hero_dish_investigation_1790750214246.jpg";
}

// ==========================================================================
// 3. DISH DATASET (12 Real-world Culinary Profiling Objects)
// ==========================================================================
const DISH_DATABASE = [
  {
    id: "chicken-biryani",
    name: "Chicken Biryani",
    cuisine: "Indian",
    category: "Main Course",
    description: "Royal slow-cooked Hyderabadi Dum Biryani layering marinated chicken with aged saffron basmati rice, caramelized golden onions, mint, and whole toasted spices.",
    image: DISH_IMAGES["Chicken Biryani"],
    spiceLevel: 3,
    spiceLabel: "Medium Spice",
    spiceScoville: "15,000 - 30,000 SHU",
    spiceDesc: "Layered warmth delivered by Kashmiri chili, green cardamom, black peppercorns, and cloves rather than pungent raw chili heat.",
    portion: "Individual / Sharing (2-3 Persons)",
    preparationTime: "75 mins (Slow Dum)",
    difficulty: "Complex",
    caloriesEstimate: "680 - 780 kcal (Est.)",
    dietaryInfo: ["Halal Certified", "High Protein", "Gluten-Free"],
    tasteProfile: { umami: 88, salty: 68, sweet: 32, sour: 42, spicy: 65, bitter: 18 },
    textureProfile: { tender: 92, crispy: 45, creamy: 30, chewy: 20, soft: 86, juicy: 84, crunchy: 50 },
    ingredients: [
      { name: "Aged Basmati Rice", role: "Starch Base", percentage: 38, note: "Long-grain rice aged 2+ years for minimal starch stickiness and maximum fluff index." },
      { name: "Bone-in Chicken Thighs", role: "Primary Protein", percentage: 32, note: "Retains high moisture under enclosed heat; releases rich bone gelatin into the rice." },
      { name: "Cultured Yogurt (Dahi)", role: "Acid & Tenderizer", percentage: 10, note: "Lactic acid enzymatically breaks down muscle fibers for succulent texture." },
      { name: "Caramelized Onions (Birista)", role: "Sweetness & Texture", percentage: 8, note: "Slowly fried till mahogany crisp; provides deep umami-sweet contrast." },
      { name: "Clarified Butter (Pure Ghee)", role: "Aromatic Fat", percentage: 6, note: "Carries fat-soluble flavor compounds through every individual rice grain." },
      { name: "Kashmiri Saffron & Whole Spices", role: "Aroma Engine", percentage: 3, note: "Infused in warm milk with green cardamom, mace, cinnamon, and cloves." },
      { name: "Fresh Mint & Coriander", role: "Freshness / Herb", percentage: 3, note: "Balances deep roasted spice notes with cool, herbaceous brightness." }
    ],
    cookingMethod: [
      { stage: "PREPARE", title: "Rice Soaking & Parboil", duration: "30m", temp: "Room Temp", desc: "Basmati rice is soaked in cold water, then parboiled in salted water to 70% doneness." },
      { stage: "MARINATE", title: "Protein Acid Cure", duration: "45m", temp: "Chilled (4°C)", desc: "Chicken is massaged with ginger-garlic, yogurt, garam masala, chili, and mint." },
      { stage: "COOK", title: "The Dum Layering", duration: "10m", temp: "Assembly", desc: "Marinated meat is laid at the base; parboiled rice is layered in moisture tiers." },
      { stage: "SEASON", title: "Hermetic Steam (Dum)", duration: "35m", temp: "Low Flame (110°C)", desc: "Vessel rim sealed with dough. Trapped steam circulates volatile spice oils." },
      { stage: "FINISH", title: "Fluffing & Rest", duration: "10m", temp: "Off Heat", desc: "Allows starches to stabilize before gentle bottom-to-top folding." },
      { stage: "SERVE", title: "Plating with Raita", duration: "Instant", temp: "Hot (65°C)", desc: "Garnished with toasted cashews and crispy birista; served with cooling raita." }
    ],
    allergens: [
      { name: "Dairy (Ghee, Yogurt)", severity: "Contains", note: "Cooked in clarified butter and marinated in whole milk yogurt." },
      { name: "Tree Nuts (Cashew Garnish)", severity: "Optional Traces", note: "Commonly finished with fried cashew nuts." }
    ],
    substitutions: [
      { original: "Bone-in Chicken", substitute: "Marinated Paneer Cubes or Jackfruit", tasteEffect: "Milder savoriness, absorbs spices faster", textureEffect: "Spongy, dense chew replacing shredding meat fibers" },
      { original: "Clarified Butter (Ghee)", substitute: "Cold-Pressed Mustard Oil or Coconut Oil", tasteEffect: "Adds sharp pungent or nutty undertone", textureEffect: "Slightly lighter mouth-coating film" }
    ],
    summaryNote: "A rich, deeply aromatic royal dish characterized by long-grain basmati, slow-steamed tender protein, and warm whole spices with zero heavy synthetic gravies."
  },
  {
    id: "margherita-pizza",
    name: "Margherita Pizza",
    cuisine: "Italian",
    category: "Main Course",
    description: "Authentic Neapolitan artisan pizza featuring a 48-hour fermented leopard-spotted sourdough crust, crushed San Marzano tomatoes, fresh Fior di Latte mozzarella, and fresh basil.",
    image: DISH_IMAGES["Margherita Pizza"],
    spiceLevel: 1,
    spiceLabel: "Mild (Zero Heat)",
    spiceScoville: "0 SHU",
    spiceDesc: "No hot peppers or capsaicin. Natural sweetness of volcanic tomatoes balanced by creamy dairy and fresh basil.",
    portion: "Individual (12-inch Neapolitan round)",
    preparationTime: "90 seconds (Wood-Fired @ 485°C)",
    difficulty: "Moderate",
    caloriesEstimate: "750 - 850 kcal (Whole Pizza)",
    dietaryInfo: ["Vegetarian", "No Preservatives", "Naturally Fermented"],
    tasteProfile: { umami: 82, salty: 64, sweet: 48, sour: 52, spicy: 8, bitter: 14 },
    textureProfile: { tender: 80, crispy: 70, creamy: 78, chewy: 88, soft: 72, juicy: 75, crunchy: 35 },
    ingredients: [
      { name: "Tipo 00 Wheat Flour", role: "Gluten Structure", percentage: 50, note: "Superfine Italian wheat flour yielding an airy, charred cornicione rim." },
      { name: "San Marzano D.O.P. Tomatoes", role: "Acidic Umami Sauce", percentage: 22, note: "Volcanic soil grown; naturally sweet with low acidity, hand-crushed raw." },
      { name: "Fresh Fior di Latte Mozzarella", role: "Melting Dairy Fat", percentage: 20, note: "Cow's milk curd drained to avoid excess water release during high-temp baking." },
      { name: "Extra Virgin Olive Oil", role: "Fruitiness & Gloss", percentage: 4, note: "Cold-extracted single estate oil drizzled raw before and after wood-firing." },
      { name: "Fresh Genovese Basil Leaves", role: "Aromatic Herb", percentage: 2, note: "Freshly torn leaves release pungent eugenol and sweet herbal brightness." },
      { name: "Sea Salt & Water", role: "Hydration & Seasoning", percentage: 2, note: "65% hydration ratio with Mediterranean sea salt regulating yeast fermentation." }
    ],
    cookingMethod: [
      { stage: "PREPARE", title: "Cold Bulk Fermentation", duration: "48h", temp: "Cold (5°C)", desc: "Flour, water, sea salt, and sourdough starter undergo slow cold fermentation." },
      { stage: "MARINATE", title: "Hand Stretching (Slap)", duration: "2m", temp: "Room Temp", desc: "Dough balls are hand-stretched, preserving micro air bubbles inside the rim." },
      { stage: "COOK", title: "Sauce & Cheese Dressing", duration: "1m", temp: "Room Temp", desc: "Hand-crushed tomato sauce is spiraled outward; torn mozzarella is placed evenly." },
      { stage: "SEASON", title: "Wood Oven Firing", duration: "90s", temp: "Oven (485°C)", desc: "Baked on refractory stone. Crust puffs explosively with leopard spotting." },
      { stage: "FINISH", title: "Fresh Basil & Olive Drizzle", duration: "Instant", temp: "Plated", desc: "Torn basil leaves are dropped on bubbling cheese where heat wilts them softly." },
      { stage: "SERVE", title: "Immediate Slicing", duration: "Instant", temp: "Hot (80°C)", desc: "Served fresh while the crust remains supple, airy, and pliable." }
    ],
    allergens: [
      { name: "Wheat (Gluten)", severity: "Contains", note: "Crust is made of wheat flour; contains high gluten content." },
      { name: "Milk / Dairy (Mozzarella)", severity: "Contains", note: "Fior di latte mozzarella contains lactose and milk protein." }
    ],
    substitutions: [
      { original: "Tipo 00 Wheat Flour", substitute: "Gluten-Free Flour (Rice, Tapioca & Psyllium)", tasteEffect: "Milder toasted grain taste", textureEffect: "Slightly less chewy, shorter crumb break" },
      { original: "Fior di Latte Mozzarella", substitute: "Cashew Milk Fermented Vegan Mozzarella", tasteEffect: "Subtle buttery nuttiness", textureEffect: "Good melt, slightly thinner stretch" }
    ],
    summaryNote: "The golden standard of culinary minimalism: 4 basic ingredients transformed by extreme wood heat into an airy, charred, sweet-acidic masterpiece."
  },
  {
    id: "tonkotsu-ramen",
    name: "Tonkotsu Ramen",
    cuisine: "Japanese",
    category: "Soup & Noodles",
    description: "Classic Hakata-style ramen featuring a dense 16-hour emulsified pork bone broth, firm alkaline wheat noodles, melt-in-your-mouth chashu pork belly, marinated ajitsuke tamago egg, and wood ear mushrooms.",
    image: DISH_IMAGES["Tonkotsu Ramen"],
    spiceLevel: 2,
    spiceLabel: "Mild Warmth",
    spiceScoville: "1,500 - 3,000 SHU",
    spiceDesc: "Gentle aromatic bite from white pepper, garlic oil, and ginger; optional rayu chili drizzle.",
    portion: "Individual Generous Bowl",
    preparationTime: "16 hours (Broth Emulsification)",
    difficulty: "Complex",
    caloriesEstimate: "820 - 950 kcal",
    dietaryInfo: ["High Collagen", "High Protein"],
    tasteProfile: { umami: 96, salty: 78, sweet: 28, sour: 16, spicy: 24, bitter: 10 },
    textureProfile: { tender: 94, crispy: 22, creamy: 92, chewy: 82, soft: 78, juicy: 88, crunchy: 65 },
    ingredients: [
      { name: "Pork Femur & Trotters", role: "Broth & Gelatin Base", percentage: 40, note: "Boiled vigorously for 16 hours to dissolve marrow and hydrolyze collagen into gelatin." },
      { name: "Alkaline Wheat Noodles", role: "Chewy Noodle Core", percentage: 25, note: "Made with kansui mineral salts for springy bite and broth adherence." },
      { name: "Braised Chashu Pork Belly", role: "Rich Topping", percentage: 15, note: "Rolled, tied, and slow-simmered in soy, mirin, sake, and aromatics." },
      { name: "Shoyu / Shio Tare Base", role: "Umami Seasoning Core", percentage: 8, note: "Concentrated seasoning sauce brewed from kombu seaweed, dried shiitake, and soy." },
      { name: "Ajitsuke Tamago (Ramen Egg)", role: "Custard Egg Topping", percentage: 6, note: "Soft-boiled for 6 minutes, then cold-cured in soy-dashi mirin brine." },
      { name: "Wood Ear Fungus & Scallions", role: "Texture & Freshness", percentage: 4, note: "Kikurage mushrooms provide crisp snappy crunch against rich creamy broth." },
      { name: "Aromatic Garlic Mayu Oil", role: "Top Aroma Layer", percentage: 2, note: "Blackened caramelized garlic oil drizzled on top right before serving." }
    ],
    cookingMethod: [
      { stage: "PREPARE", title: "Bone Cleansing & Blanching", duration: "1h", temp: "Boiling (100°C)", desc: "Pork bones are boiled hard for 10 minutes, drained, scrubbed clean, and rinsed." },
      { stage: "MARINATE", title: "16-Hour Rolling Boil", duration: "16h", temp: "Vigorous Boil", desc: "Bones are subjected to rolling boil, forcing marrow and fat into a milky emulsion." },
      { stage: "COOK", title: "Tare & Broth Assembly", duration: "2m", temp: "Hot (90°C)", desc: "Pre-measured tare seasoning sauce is whisked into piping hot broth in pre-warmed bowl." },
      { stage: "SEASON", title: "Noodle Blanching (Katame)", duration: "45s", temp: "Boiling Water", desc: "Thin straight noodles are flash-boiled to 'firm' consistency." },
      { stage: "FINISH", title: "Topping Assembly", duration: "1m", temp: "Immediate", desc: "Noodles are folded; topped with seared chashu, halved egg, nori sheet, and scallions." },
      { stage: "SERVE", title: "Immediate Slurping", duration: "Instant", temp: "Hot (85°C)", desc: "Consumed immediately to enjoy noodle springiness before starches soften." }
    ],
    allergens: [
      { name: "Wheat / Gluten (Noodles & Soy)", severity: "Contains", note: "Noodles contain wheat flour; tare seasoning contains brewed soy sauce." },
      { name: "Soy (Tare & Marinade)", severity: "Contains", note: "Soy sauce is fundamental to the broth seasoning." },
      { name: "Eggs (Ramen Egg)", severity: "Contains", note: "Soft-boiled marinated egg is a standard inclusion." }
    ],
    substitutions: [
      { original: "Alkaline Wheat Noodles", substitute: "Buckwheat Soba or Rice Vermicelli", tasteEffect: "Nutty earthy note or neutral broth carrier", textureEffect: "Less bouncy chew, softer bite" },
      { original: "Pork Broth", substitute: "Maitake Mushroom & Oat Milk White Broth", tasteEffect: "Deep woodsy umami with nutty creaminess", textureEffect: "Smooth velvety consistency without animal collagen" }
    ],
    summaryNote: "An intensely rich, savory bowl built on heavy collagen emulsion, snappy alkaline noodles, and layered soy-garlic depth."
  },
  {
    id: "paneer-tikka",
    name: "Paneer Tikka",
    cuisine: "Indian",
    category: "Starter",
    description: "Cubes of firm unaged cottage cheese marinated in spiced hung yogurt, fenugreek, and mustard oil, threaded on skewers with bell peppers and charred in a clay tandoor.",
    image: DISH_IMAGES["Paneer Tikka"],
    spiceLevel: 3,
    spiceLabel: "Medium Warmth",
    spiceScoville: "10,000 - 20,000 SHU",
    spiceDesc: "Smoky punch from carom seeds, ginger, degi mirch chili, and dry mango powder.",
    portion: "Starter / Appetizer (6 Skewered Cubes)",
    preparationTime: "30 mins",
    difficulty: "Moderate",
    caloriesEstimate: "380 - 450 kcal",
    dietaryInfo: ["Vegetarian", "High Calcium", "Gluten-Free"],
    tasteProfile: { umami: 65, salty: 60, sweet: 25, sour: 55, spicy: 60, bitter: 15 },
    textureProfile: { tender: 85, crispy: 55, creamy: 75, chewy: 40, soft: 80, juicy: 70, crunchy: 60 },
    ingredients: [
      { name: "Fresh Cow's Milk Paneer", role: "Dense Protein Core", percentage: 55, note: "Non-melting cottage cheese capable of charring without losing structural integrity." },
      { name: "Hung Curd (Greek Yogurt)", role: "Coating Marinade", percentage: 20, note: "Whey is strained out to create a thick crust adhering to the cheese." },
      { name: "Cold-Pressed Mustard Oil", role: "Pungency & Color", percentage: 8, note: "Heated to smoking point, whisked with red chili powder for vibrant natural color." },
      { name: "Bell Peppers & Red Onion", role: "Crunchy Sweet Buffer", percentage: 10, note: "Cut into matching cubes; blistered edges contrast soft cheese." },
      { name: "Kasuri Methi & Ajwain", role: "Herbal Bitterness", percentage: 4, note: "Crushed dried fenugreek leaves and carom seeds impart distinct earthy notes." },
      { name: "Chaat Masala & Lemon", role: "Finishing Acid", percentage: 3, note: "Black salt and amchur dusted on piping hot paneer for instant flavor pop." }
    ],
    cookingMethod: [
      { stage: "PREPARE", title: "Cube Sizing & Brining", duration: "10m", temp: "Room Temp", desc: "Fresh paneer is sliced into uniform 1.5-inch cubes and lightly salted." },
      { stage: "MARINATE", title: "Mustard Oil & Curd Coating", duration: "25m", temp: "Chilled", desc: "Cubes are coated in whipped hung curd, besan, and spiced mustard oil." },
      { stage: "COOK", title: "Skewering with Aromatics", duration: "5m", temp: "Assembly", desc: "Threaded onto iron skewers alternating with crunchy bell peppers and onions." },
      { stage: "SEASON", title: "Clay Tandoor Blast", duration: "8m", temp: "Tandoor (350°C)", desc: "Lowered into glowing charcoal oven. High heat rapidly chars the marinade." },
      { stage: "FINISH", title: "Ghee Basting & Rest", duration: "1m", temp: "Hot", desc: "Brushed with melted ghee right as skewers emerge, locking in moisture." },
      { stage: "SERVE", title: "Chaat Masala Sprinkle", duration: "Instant", temp: "Hot (70°C)", desc: "Dusted with pungent chaat masala, served with mint-coriander yogurt dip." }
    ],
    allergens: [
      { name: "Dairy (Paneer & Yogurt)", severity: "Contains", note: "Primary ingredient is cow's milk cottage cheese and curd." }
    ],
    substitutions: [
      { original: "Paneer Cheese", substitute: "Extra-Firm Pressed Tofu", tasteEffect: "Slightly earthier soy flavor", textureEffect: "Crispier exterior edges, firmer bite" }
    ],
    summaryNote: "Smoky, charred, and tangy on the outside with a lush, pillow-soft dairy interior accompanied by crunchy blistered bell peppers."
  },
  {
    id: "butter-chicken",
    name: "Butter Chicken",
    cuisine: "Indian",
    category: "Main Course",
    description: "Tandoori charred chicken pieces simmered in a velvety, satin tomato gravy enriched with butter, cashew cream, and sun-dried fenugreek leaves.",
    image: DISH_IMAGES["Butter Chicken"],
    spiceLevel: 2,
    spiceLabel: "Mild & Aromatic",
    spiceScoville: "5,000 - 12,000 SHU",
    spiceDesc: "Low-heat sweet savory sauce where Kashmiri chili provides color and mild warmth without scorching the palate.",
    portion: "Sharing (Serves 2-3 with Naan)",
    preparationTime: "45 mins",
    difficulty: "Moderate",
    caloriesEstimate: "620 - 720 kcal",
    dietaryInfo: ["Gluten-Free", "High Protein"],
    tasteProfile: { umami: 85, salty: 62, sweet: 58, sour: 50, spicy: 35, bitter: 12 },
    textureProfile: { tender: 90, crispy: 15, creamy: 95, chewy: 18, soft: 88, juicy: 85, crunchy: 10 },
    ingredients: [
      { name: "Tandoori Chicken Tikka", role: "Smoked Meat Base", percentage: 38, note: "Pre-charred in a tandoor so charcoal smoke transfers into the tomato gravy." },
      { name: "Ripe Plum Tomatoes", role: "Sweet Acid Gravy", percentage: 30, note: "Simmered with aromatics, then passed through fine mesh for silkiness." },
      { name: "Cultured Butter (Makhan)", role: "Silky Emulsifier", percentage: 12, note: "Whisked into sauce off heat to create velvet sheen and smooth mouth-coating." },
      { name: "Cashew Nut Paste & Cream", role: "Body & Viscosity", percentage: 12, note: "Blended soaked cashews give luxurious viscosity without starchy flour." },
      { name: "Kashmiri Mirch Powder", role: "Ruby Color & Warmth", percentage: 4, note: "High color saturation with mild gentle heat." },
      { name: "Kasuri Methi (Fenugreek)", role: "Signature Bittersweet Aroma", percentage: 4, note: "Hand-rubbed into hot gravy to impart unmistakable restaurant aroma." }
    ],
    cookingMethod: [
      { stage: "PREPARE", title: "Tomato Base Reduction", duration: "25m", temp: "Simmer (90°C)", desc: "Fresh tomatoes, ginger, and garlic simmer till collapsed, then strained." },
      { stage: "MARINATE", title: "Chicken Tikka Pre-Char", duration: "10m", temp: "Charcoal (300°C)", desc: "Boneless chicken is skewered, charred, and kept resting for sauce integration." },
      { stage: "COOK", title: "Gravy Emulsification", duration: "12m", temp: "Low Flame", desc: "Cashew paste and cold butter cubes are whisked into hot tomato purée." },
      { stage: "SEASON", title: "Fenugreek & Honey Infusion", duration: "5m", temp: "Gentle Heat", desc: "Honey, green cardamom, and hand-rubbed kasuri methi are stirred into gravy." },
      { stage: "FINISH", title: "Meat Integration", duration: "5m", temp: "Gentle Simmer", desc: "Tandoori chicken is folded into hot sauce to absorb velvety flavors." },
      { stage: "SERVE", title: "Cream Swirl Plating", duration: "Instant", temp: "Hot (70°C)", desc: "Finished with a swirl of fresh cream and micro coriander; served with naan." }
    ],
    allergens: [
      { name: "Dairy (Butter, Cream, Yogurt)", severity: "Contains", note: "Contains significant quantities of dairy butter and cream." },
      { name: "Tree Nuts (Cashew Paste)", severity: "Contains", note: "Cashew paste forms the thickening foundation." }
    ],
    substitutions: [
      { original: "Dairy Butter & Cream", substitute: "Coconut Cream & Vegan Butter", tasteEffect: "Slight coconut sweetness", textureEffect: "Equally rich and glossy mouthfeel" }
    ],
    summaryNote: "A luxurious symphony of charred tandoori chicken immersed in a silk-smooth tomato gravy balanced with butter, cashew cream, and aromatic fenugreek."
  },
  {
    id: "sushi-platter",
    name: "Sushi Platter",
    cuisine: "Japanese",
    category: "Main Course",
    description: "Traditional Edomae sushi assortment showcasing vinegared short-grain rice paired with sashimi cuts of wild salmon, bluefin tuna, and fresh cucumber maki.",
    image: DISH_IMAGES["Sushi Platter"],
    spiceLevel: 1,
    spiceLabel: "Mild (Custom Wasabi Heat)",
    spiceScoville: "0 - 10,000 SHU (Adjustable)",
    spiceDesc: "No capsaicin; sharp sinus-clearing allyl isothiocyanate warmth from fresh wasabi root.",
    portion: "Individual (8 Nigiri + 6 Maki Rolls)",
    preparationTime: "25 mins (Artisanal Hand Craft)",
    difficulty: "Complex",
    caloriesEstimate: "480 - 560 kcal",
    dietaryInfo: ["High Omega-3", "Lean Protein", "Low Fat"],
    tasteProfile: { umami: 90, salty: 55, sweet: 35, sour: 45, spicy: 15, bitter: 5 },
    textureProfile: { tender: 95, crispy: 10, creamy: 40, chewy: 35, soft: 90, juicy: 60, crunchy: 30 },
    ingredients: [
      { name: "Shari (Seasoned Sushi Rice)", role: "Acidified Grain Foundation", percentage: 50, note: "Short-grain Japonica seasoned with aged red vinegar, sugar, and sea salt." },
      { name: "Sashimi Salmon & Tuna", role: "Pristine Marine Protein", percentage: 38, note: "Wild cold-water fish aged 2-4 days to peak nucleotide umami concentration." },
      { name: "Fresh Grated Hon-Wasabi", role: "Aromatic Heat", percentage: 3, note: "Grated on sharkskin oroshi for volatile sweetness and clean pungent kick." },
      { name: "Roasted Nori Seaweed", role: "Crisp Mineral Wrapper", percentage: 3, note: "Toasted marine seaweed providing mineral crispness to roll edges." },
      { name: "Pickled Ginger (Gari)", role: "Palate Cleanser", percentage: 3, note: "Young ginger sliced wafer-thin and steeped in sweet rice vinegar." },
      { name: "Nikiri Soy Glaze", role: "Umami Top Coat", percentage: 3, note: "Boiled down soy sauce, sake, and mirin brushed across fish prior to presentation." }
    ],
    cookingMethod: [
      { stage: "PREPARE", title: "Rice Steaming & Vinegar Cutting", duration: "30m", temp: "Body Temp (37°C)", desc: "Cooked short grain rice is gently turned while fanning to coat each grain in vinegar." },
      { stage: "MARINATE", title: "Fish Curing & Knife Work", duration: "10m", temp: "Chilled (6°C)", desc: "Sashimi is sliced against the muscle grain with a single continuous stroke." },
      { stage: "COOK", title: "Nigiri Hand Molding", duration: "15s per piece", temp: "Hand Temp", desc: "Chef applies dab of wasabi, lays fish over rice ball, and shapes gently." },
      { stage: "SEASON", title: "Maki Bamboo Rolling", duration: "1m", temp: "Room Temp", desc: "Nori sheet is covered with rice and fillings, then rolled with bamboo mat." },
      { stage: "FINISH", title: "Nikiri Brush Glaze", duration: "Instant", temp: "Room Temp", desc: "A micro-layer of simmered dashi-soy is brushed over the fish." },
      { stage: "SERVE", title: "Immediate Plating", duration: "Instant", temp: "Immediate", desc: "Enjoyed within 15 seconds of plating to prevent seaweed softening." }
    ],
    allergens: [
      { name: "Fish (Salmon, Tuna)", severity: "Contains", note: "Primary ingredient is raw fresh marine fish." },
      { name: "Soy (Soy Sauce Glaze)", severity: "Contains", note: "Soy sauce is used for dipping and glazing." }
    ],
    substitutions: [
      { original: "Raw Fish", substitute: "Marinated Roasted King Oyster Mushroom or Avocado", tasteEffect: "Earthy savory or buttery rich plant profile", textureEffect: "Tender chew or smooth velvet melt" }
    ],
    summaryNote: "The peak of Japanese culinary precision: temperature-controlled seasoned rice crowned with meticulously aged seafood requiring no cooked heat."
  },
  {
    id: "tacos-al-pastor",
    name: "Tacos al Pastor",
    cuisine: "Mexican",
    category: "Street Food",
    description: "Mexico City style spit-roasted pork marinated in achiote paste, guajillo chiles, and pineapple citrus, shaved thin into warm handmade corn tortillas with cilantro, white onion, and roasted pineapple.",
    image: DISH_IMAGES["Tacos al Pastor"],
    spiceLevel: 3,
    spiceLabel: "Medium Heat",
    spiceScoville: "8,000 - 15,000 SHU",
    spiceDesc: "Balanced tingling warmth from dried Guajillo and Ancho chiles complemented by acidic sweet pineapple.",
    portion: "3 Tacos per Serving",
    preparationTime: "20 mins",
    difficulty: "Moderate",
    caloriesEstimate: "520 - 620 kcal",
    dietaryInfo: ["Gluten-Free (Corn)", "High Protein"],
    tasteProfile: { umami: 82, salty: 68, sweet: 52, sour: 65, spicy: 62, bitter: 10 },
    textureProfile: { tender: 88, crispy: 68, creamy: 20, chewy: 35, soft: 75, juicy: 85, crunchy: 70 },
    ingredients: [
      { name: "Pork Shoulder (Spit Roasted)", role: "Spiced Shredded Protein", percentage: 45, note: "Thinly layered on a vertical trompo skewer with fat ribbons that self-baste." },
      { name: "Handmade White Corn Tortillas", role: "Nixtamalized Base", percentage: 25, note: "Made fresh from masa harina; earthy, supple, and sturdy." },
      { name: "Achiote Paste & Guajillo Puree", role: "Crimson Marinade", percentage: 12, note: "Annatto seeds, oregano, cumin, and dried chiles provide bright scarlet color." },
      { name: "Fire-Roasted Pineapple", role: "Sweet Acid Cut", percentage: 8, note: "Roasted atop the meat stack; sliced into taco for caramelized contrast." },
      { name: "Diced White Onion & Cilantro", role: "Crisp Sharpness", percentage: 6, note: "Raw crisp aromatic bite cutting through savory roasted pork fat." },
      { name: "Fresh Lime Wedges", role: "Finishing Citrus", percentage: 4, note: "Squeezed fresh tableside to brighten the earthy chile oils." }
    ],
    cookingMethod: [
      { stage: "PREPARE", title: "Chile Toasting & Pureeing", duration: "10m", temp: "Medium Heat", desc: "Guajillo and Ancho chiles are toasted, then hydrated in vinegar and spices." },
      { stage: "MARINATE", title: "Achiote-Citrus Immersion", duration: "12h", temp: "Cold (4°C)", desc: "Thin pork shoulder steaks are bathed in pureed adobo with pineapple enzyme." },
      { stage: "COOK", title: "Vertical Trompo Skewering", duration: "20m", temp: "Ambient", desc: "Layers of pork are packed tightly onto a vertical spit topped with pineapple." },
      { stage: "SEASON", title: "Direct Flame Spit Roasting", duration: "45m", temp: "Flame (260°C)", desc: "Outer layer crisps and caramelizes under flame while interior stays tender." },
      { stage: "FINISH", title: "Master Shaving", duration: "30s", temp: "Hot (90°C)", desc: "Crisp pork sliced directly into a warm tortilla with a flick of roasted pineapple." },
      { stage: "SERVE", title: "Cilantro & Lime Garnish", duration: "Instant", temp: "Hot", desc: "Topped with diced raw onion, minced cilantro, and roasted salsa verde." }
    ],
    allergens: [
      { name: "No Common Major Allergens", severity: "Low Risk", note: "Corn tortillas are naturally gluten-free. Contains no dairy, nuts, or shellfish." }
    ],
    substitutions: [
      { original: "Pork Shoulder", substitute: "Oyster Mushrooms or Seitan Strips", tasteEffect: "Absorbs adobo marinade deeply with savory roasted finish", textureEffect: "Crisp browned edges with meaty chew" }
    ],
    summaryNote: "A masterclass in flavor contrast: deeply seasoned crispy pork balanced by sweet caramelized roasted pineapple, sharp raw onion, and zesty lime."
  },
  {
    id: "pad-thai",
    name: "Pad Thai",
    cuisine: "Thai",
    category: "Noodles",
    description: "Iconic Bangkok street-style wok-fried rice noodles tossed with wild sea prawns, pressed tofu, sweet preserved radish, egg ribbons, beansprouts, crushed peanuts, and a tart tamarind-palm sugar glaze.",
    image: DISH_IMAGES["Pad Thai"],
    spiceLevel: 2,
    spiceLabel: "Mild to Medium",
    spiceScoville: "3,000 - 8,000 SHU",
    spiceDesc: "Gentle warmth infused into tamarind sauce; ground toasted Thai chili flakes served on the side.",
    portion: "Individual Main Plate",
    preparationTime: "15 mins (High Wok Heat)",
    difficulty: "Moderate",
    caloriesEstimate: "640 - 740 kcal",
    dietaryInfo: ["High Protein", "Gluten-Free (Rice Noodles)"],
    tasteProfile: { umami: 86, salty: 70, sweet: 65, sour: 75, spicy: 40, bitter: 8 },
    textureProfile: { tender: 82, crispy: 40, creamy: 20, chewy: 85, soft: 70, juicy: 75, crunchy: 88 },
    ingredients: [
      { name: "Flat Rice Stick Noodles", role: "Elastic Noodle Base", percentage: 40, note: "Soaked in cool water until pliable; cooked in seconds in the wok." },
      { name: "Fresh Wild Sea Prawns", role: "Sweet Seafood Protein", percentage: 22, note: "Seared over high heat in peanut oil until pink, sweet, and lightly caramelized." },
      { name: "Artisanal Tamarind Paste", role: "Sour Acid Backbone", percentage: 12, note: "Pulp extracted from sour tamarind pods; provides fruity, complex tartness." },
      { name: "Fish Sauce & Palm Sugar", role: "Sweet Umami Counter", percentage: 10, note: "Unrefined palm sugar balances the pungent savory depth of fish sauce." },
      { name: "Pressed Yellow Tofu & Egg", role: "Savory Protein Texture", percentage: 8, note: "Tofu cubes absorb pan juices; egg is scrambled directly into noodle strands." },
      { name: "Toasted Crushed Peanuts & Sprouts", role: "Texture Contrast", percentage: 8, note: "Adds essential crunch and nutty richness against soft, chewy noodles." }
    ],
    cookingMethod: [
      { stage: "PREPARE", title: "Noodle Cold Hydration", duration: "45m", temp: "Room Temp", desc: "Dried rice noodles are soaked until bendable like al dente spaghetti." },
      { stage: "MARINATE", title: "Tamarind-Sugar Sauce Brew", duration: "10m", temp: "Low Simmer", desc: "Tamarind pulp, fish sauce, and palm sugar are melted into a thick glaze." },
      { stage: "COOK", title: "Wok Hei Prawn Sear", duration: "2m", temp: "Wok (220°C)", desc: "Prawns, shallots, and tofu are tossed furiously in screaming hot wok oil." },
      { stage: "SEASON", title: "Noodle & Sauce Glaze", duration: "2m", temp: "High Heat", desc: "Noodles are tossed in; glaze is poured over for instant flash absorption." },
      { stage: "FINISH", title: "Egg Scramble & Sprout Fold", duration: "1m", temp: "Wok Heat", desc: "Egg is scrambled into curds on wok surface, then folded back with sprouts." },
      { stage: "SERVE", title: "Nut & Lime Garnish", duration: "Instant", temp: "Hot (75°C)", desc: "Plated immediately with crushed roasted peanuts, lime wedge, and chives." }
    ],
    allergens: [
      { name: "Shellfish / Prawns", severity: "Contains", note: "Primary protein contains whole sea prawns." },
      { name: "Fish (Fish Sauce)", severity: "Contains", note: "Sauce base relies fundamentally on fermented anchovy extract." },
      { name: "Peanuts (Garnish)", severity: "Contains", note: "Toasted crushed peanuts are folded into and topped on the dish." },
      { name: "Eggs", severity: "Contains", note: "Whole egg is scrambled directly into the noodle mass." }
    ],
    substitutions: [
      { original: "Prawns & Fish Sauce", substitute: "Crispy Tofu & Soy Sauce / Mushroom Umami Sauce", tasteEffect: "Earthy savory profile without marine seafood pungency", textureEffect: "Equally chewy and substantial bite" },
      { original: "Crushed Peanuts", substitute: "Toasted Sunflower or Pumpkin Seeds", tasteEffect: "Pleasant nutty toast without peanut allergens", textureEffect: "Maintains crunchy textural contrast" }
    ],
    summaryNote: "The definitive balance of Thai gastronomy: four contrasting flavors—sweet palm sugar, tart tamarind, salty fish sauce, and spicy dried chile—bound in smoky wok-fired noodles."
  },
  {
    id: "spaghetti-carbonara",
    name: "Spaghetti Carbonara",
    cuisine: "Italian",
    category: "Pasta",
    description: "Roman culinary perfection made exclusively with bronze-die spaghetti, crispy cured pork jowl (guanciale), fresh farm egg yolks, aged Pecorino Romano cheese, and coarse cracked black pepper.",
    image: DISH_IMAGES["Spaghetti Carbonara"],
    spiceLevel: 1,
    spiceLabel: "Mild (Pungent Pepper Warmth)",
    spiceScoville: "500 - 1,000 SHU",
    spiceDesc: "No chili heat. Distinct floral, pungent kick from coarsely cracked Tellicherry black peppercorns toasted in pork fat.",
    portion: "Individual Plate (120g Pasta)",
    preparationTime: "15 mins",
    difficulty: "Complex",
    caloriesEstimate: "720 - 820 kcal",
    dietaryInfo: ["High Protein", "Traditional Roman Formula"],
    tasteProfile: { umami: 94, salty: 76, sweet: 18, sour: 12, spicy: 20, bitter: 8 },
    textureProfile: { tender: 80, crispy: 75, creamy: 92, chewy: 88, soft: 70, juicy: 50, crunchy: 40 },
    ingredients: [
      { name: "Bronze-Cut Spaghetti", role: "Starch & Pasta Core", percentage: 45, note: "Rough porous exterior from bronze dies grips the egg-cheese emulsion without cream." },
      { name: "Cured Pork Jowl (Guanciale)", role: "Crispy Salted Fat", percentage: 25, note: "Cured with black pepper; melts into liquid fat with intensely savory crispy rind." },
      { name: "Fresh Farm Egg Yolks", role: "Emulsion Foundation", percentage: 15, note: "High lecithin content emulsifies rendered pork fat and starchy cooking water into cream." },
      { name: "Aged Pecorino Romano D.O.P.", role: "Sharp Sheep's Milk Cheese", percentage: 12, note: "Aged sheep's milk cheese provides salty, sharp umami bite that defines Roman cuisine." },
      { name: "Coarse Black Peppercorns", role: "Toasted Spice Bloom", percentage: 3, note: "Toasted in the rendered pork fat to bloom volatile piperine oils." }
    ],
    cookingMethod: [
      { stage: "PREPARE", title: "Guanciale Batons & Cheese Whisk", duration: "5m", temp: "Room Temp", desc: "Guanciale cut into batons; egg yolks and finely grated Pecorino beaten into thick paste." },
      { stage: "MARINATE", title: "Pork Fat Rendering", duration: "8m", temp: "Low-Med Heat", desc: "Guanciale is rendered gently in its own fat until golden crisp on outside." },
      { stage: "COOK", title: "Al Dente Pasta Boil", duration: "9m", temp: "Boiling (100°C)", desc: "Spaghetti is boiled in moderately salted water until 1 minute before al dente." },
      { stage: "SEASON", title: "Fat & Starch Water Mantecatura", duration: "1m", temp: "Pan Off Heat", desc: "Spaghetti transferred into warm pork fat with a ladle of starchy pasta water." },
      { stage: "FINISH", title: "Egg-Cheese Tempering", duration: "1m", temp: "Residual Heat (62°C)", desc: "Pan removed from heat. Egg paste poured in and stirred vigorously so yolks thicken into silk." },
      { stage: "SERVE", title: "Warm Bowl Plating", duration: "Instant", temp: "Hot (65°C)", desc: "Twirled onto heated plates, crowned with reserved crispy guanciale and pepper." }
    ],
    allergens: [
      { name: "Wheat / Gluten", severity: "Contains", note: "Traditional pasta is made from durum wheat semolina." },
      { name: "Eggs", severity: "Contains", note: "Primary emulsifying agent is raw pasteurized egg yolk." },
      { name: "Milk / Dairy (Pecorino Romano)", severity: "Contains", note: "Aged sheep's milk cheese contains dairy proteins." }
    ],
    substitutions: [
      { original: "Guanciale (Pork)", substitute: "Pancetta or Smoked King Oyster Mushroom", tasteEffect: "Pancetta gives milder pork note; mushroom provides smoky vegan savoriness", textureEffect: "Equal crispness on exterior" },
      { original: "Egg Yolks & Pecorino", substitute: "Silken Tofu, Nutritional Yeast & Cashew Cream", tasteEffect: "Rich savory cheese substitute with savory nutritional yeast notes", textureEffect: "Silk-smooth sauce coating without dairy or egg" }
    ],
    summaryNote: "The Roman masterpiece of culinary thermodynamics: zero cream, zero peas, zero garlic—only pork fat, egg yolks, starchy water, Pecorino, and cracked pepper bound by friction and residual heat."
  },
  {
    id: "caesar-salad",
    name: "Caesar Salad",
    cuisine: "Continental",
    category: "Starter",
    description: "Crisp chilled Romaine lettuce hearts tossed in an emulsion of garlic, Spanish anchovy fillets, egg yolk, Dijon mustard, Parmigiano-Reggiano, and lemon juice, topped with garlic-herb croutons.",
    image: DISH_IMAGES["Caesar Salad"],
    spiceLevel: 1,
    spiceLabel: "Mild (Zero Heat)",
    spiceScoville: "0 SHU",
    spiceDesc: "No hot peppers. Mild pungency from raw garlic and Dijon mustard balanced by creamy cheese.",
    portion: "Starter / Light Meal",
    preparationTime: "12 mins",
    difficulty: "Easy",
    caloriesEstimate: "320 - 410 kcal",
    dietaryInfo: ["High Fiber", "Low Carb Option"],
    tasteProfile: { umami: 88, salty: 72, sweet: 12, sour: 65, spicy: 10, bitter: 25 },
    textureProfile: { tender: 40, crispy: 92, creamy: 80, chewy: 20, soft: 35, juicy: 85, crunchy: 95 },
    ingredients: [
      { name: "Crisp Romaine Lettuce Hearts", role: "Water-Rich Crunch Base", percentage: 55, note: "Inner leaves only, ice-bath shocked and spun dry for maximum snap." },
      { name: "Spanish Anchovy Fillets", role: "Hidden Umami Bomb", percentage: 12, note: "Mashed with sea salt into paste; dissolves into dressing without overt fishiness." },
      { name: "Aged Parmigiano-Reggiano", role: "Sharp Cheese Crystals", percentage: 12, note: "Both microplaned into dressing and shaved in wide ribbons over top." },
      { name: "Garlic Sourdough Croutons", role: "Toasted Texture", percentage: 10, note: "Torn stale sourdough fried in extra virgin olive oil and crushed garlic." },
      { name: "Fresh Lemon Juice & Dijon", role: "Acidity & Emulsion", percentage: 6, note: "Stabilizes the olive oil emulsion and cuts through rich egg yolk." },
      { name: "Pasture-Raised Egg Yolk", role: "Emulsifier Core", percentage: 5, note: "Whisked with oil into thick creamy consistency." }
    ],
    cookingMethod: [
      { stage: "PREPARE", title: "Ice Water Shocking", duration: "10m", temp: "Ice Water (0°C)", desc: "Romaine leaves immersed in ice water, spun dry to ensure dressing sticks." },
      { stage: "MARINATE", title: "Anchovy-Garlic Paste Mortar", duration: "3m", temp: "Room Temp", desc: "Anchovies, garlic cloves, and sea salt mashed with fork into smooth paste." },
      { stage: "COOK", title: "Sourdough Crouton Toasting", duration: "5m", temp: "Medium Heat", desc: "Torn sourdough pan-fried in olive oil with crushed garlic until deeply golden." },
      { stage: "SEASON", title: "Emulsion Whisking", duration: "3m", temp: "Room Temp", desc: "Egg yolk, Dijon, and lemon whisked while drizzling extra virgin olive oil." },
      { stage: "FINISH", title: "Gentle Hand Tossing", duration: "1m", temp: "Chilled", desc: "Dressing poured around bowl edges and leaves lifted gently with fingertips." },
      { stage: "SERVE", title: "Shaved Parmesan Crown", duration: "Instant", temp: "Chilled (10°C)", desc: "Piled high on chilled plates, topped with warm croutons and Parmesan ribbons." }
    ],
    allergens: [
      { name: "Fish (Anchovies)", severity: "Contains", note: "Authentic dressing contains whole cured anchovy fillets." },
      { name: "Eggs", severity: "Contains", note: "Raw or coddled egg yolk forms the emulsion core." },
      { name: "Milk / Dairy (Parmigiano)", severity: "Contains", note: "Contains aged cow's milk Parmesan cheese." },
      { name: "Wheat (Croutons)", severity: "Contains", note: "Croutons are made of sourdough wheat bread." }
    ],
    substitutions: [
      { original: "Anchovies & Egg", substitute: "Capers, Miso Paste & Olive Oil Mayonnaise", tasteEffect: "Sharp briny umami without seafood components", textureEffect: "Identical velvety coat on leaves" }
    ],
    summaryNote: "The king of composed salads: cold snapping romaine leaves coated in an intense emulsion of garlic, umami-rich anchovies, egg, and sharp Parmesan."
  },
  {
    id: "gourmet-cheeseburger",
    name: "Classic Gourmet Cheeseburger",
    cuisine: "Continental",
    category: "Main Course",
    description: "Dry-aged Angus beef brisket smash patty with caramelized lacy crust, melted Wisconsin sharp cheddar, house dill pickles, and secret burger sauce on a toasted brioche bun.",
    image: DISH_IMAGES["Classic Gourmet Cheeseburger"],
    spiceLevel: 1,
    spiceLabel: "Mild",
    spiceScoville: "500 SHU",
    spiceDesc: "Negligible chili heat. Mild tangy warmth from Dijon mustard and black pepper in secret burger spread.",
    portion: "Individual Burger with Pickles",
    preparationTime: "10 mins",
    difficulty: "Moderate",
    caloriesEstimate: "740 - 860 kcal",
    dietaryInfo: ["High Protein"],
    tasteProfile: { umami: 95, salty: 72, sweet: 45, sour: 48, spicy: 12, bitter: 6 },
    textureProfile: { tender: 88, crispy: 76, creamy: 82, chewy: 45, soft: 90, juicy: 96, crunchy: 60 },
    ingredients: [
      { name: "80/20 Ground Angus Beef Brisket & Chuck", role: "Juicy Patty Core", percentage: 50, note: "Coarsely ground with 20% fat ratio for maximum Maillard crust and moisture." },
      { name: "Toasted Brioche Bun", role: "Sweet Buttery Vessel", percentage: 22, note: "Enriched with eggs and butter; toasted on flat-top in clarified butter." },
      { name: "Aged Sharp Cheddar Cheese", role: "Melting Umami Blanket", percentage: 12, note: "Melted over patty under a cloche for a gooey blanket covering the meat." },
      { name: "House Brined Dill Pickles", role: "Acidic Crunch", percentage: 6, note: "Lactic fermented cucumbers cutting through the rich beef fat." },
      { name: "House Burger Sauce", role: "Creamy Tang Spread", percentage: 6, note: "Emulsion of mayonnaise, Dijon, relish, smoked paprika, and grated onion." },
      { name: "Crisp Butterhead Lettuce & Tomato", role: "Hydrating Freshness", percentage: 4, note: "Acts as moisture barrier preventing bottom bun from getting soggy." }
    ],
    cookingMethod: [
      { stage: "PREPARE", title: "Ball Sizing & Flat Top Heat", duration: "5m", temp: "Griddle (230°C)", desc: "Beef portioned into 120g loose balls without pre-salting to avoid rubbery texture." },
      { stage: "MARINATE", title: "Heavy Weight Smash", duration: "1m", temp: "High Heat", desc: "Ball smashed ultra-thin onto screaming cast iron with parchment paper." },
      { stage: "COOK", title: "Lacy Crust Maillard Sear", duration: "2m", temp: "High Heat", desc: "Meat sears until outer edges turn deep mahogany brown and crispy." },
      { stage: "SEASON", title: "Cheese Cloche Melt", duration: "1m", temp: "Steam Melt", desc: "Flipped once; topped with cheddar cheese and squirt of water under dome." },
      { stage: "FINISH", title: "Bun Toast & Sauce Layering", duration: "1m", temp: "Griddle", desc: "Brioche buns toasted golden; bottom bun layered with sauce, lettuce, and pickles." },
      { stage: "SERVE", title: "Immediate Assembly", duration: "Instant", temp: "Hot (70°C)", desc: "Patty transferred to bun and served immediately while cheese is molten." }
    ],
    allergens: [
      { name: "Wheat / Gluten (Brioche Bun)", severity: "Contains", note: "Bun is made with wheat flour." },
      { name: "Milk / Dairy (Cheddar & Bun)", severity: "Contains", note: "Contains cow's milk cheddar cheese and buttered bun." },
      { name: "Eggs (Brioche & Mayo Sauce)", severity: "Contains", note: "Sauce contains mayonnaise; bun is egg-washed." }
    ],
    substitutions: [
      { original: "Beef Patty", substitute: "Smoked Black Bean & Portobello Patty", tasteEffect: "Earthy, woodsy savory profile", textureEffect: "Dense tender crumb with seared edges" }
    ],
    summaryNote: "A masterclass in texture engineering: lacy, crispy-edged beef patty smothered in gooey cheddar, cushioned by pillowy sweet brioche, punctuated by tart pickles."
  },
  {
    id: "masala-dosa",
    name: "Masala Dosa",
    cuisine: "Indian",
    category: "Breakfast / Main",
    description: "Crispy fermented crepe made from rice and black gram lentils, brushed with ghee, stuffed with turmeric mustard-spiced potato mash, served with fresh coconut chutney and sambar.",
    image: DISH_IMAGES["Masala Dosa"],
    spiceLevel: 2,
    spiceLabel: "Mild to Medium",
    spiceScoville: "4,000 - 8,000 SHU",
    spiceDesc: "Warm comfort from green chilies, mustard seeds, curry leaves, and ginger tempered in ghee.",
    portion: "Individual Large Crepe with 3 Chutneys & Sambar",
    preparationTime: "15 mins (Cooked Live on Tawa)",
    difficulty: "Moderate",
    caloriesEstimate: "390 - 470 kcal",
    dietaryInfo: ["Vegetarian", "Vegan Option", "Gluten-Free", "Naturally Fermented"],
    tasteProfile: { umami: 70, salty: 64, sweet: 30, sour: 60, spicy: 45, bitter: 12 },
    textureProfile: { tender: 78, crispy: 96, creamy: 65, chewy: 30, soft: 70, juicy: 45, crunchy: 92 },
    ingredients: [
      { name: "Fermented Rice & Urad Dal Batter", role: "Crispy Crepe Shell", percentage: 50, note: "3:1 ratio of parboiled rice to black gram lentils fermented overnight with wild lactobacillus." },
      { name: "Mustard-Tempered Potato Mash (Aloo)", role: "Spiced Filling Core", percentage: 32, note: "Boiled potatoes crushed with mustard seeds, turmeric, curry leaves, and green chilies." },
      { name: "Fresh Grated Coconut Chutney", role: "Cooling Creamy Condiment", percentage: 8, note: "Blended with roasted chana dal, green chili, and tempered with mustard seeds." },
      { name: "Vegetable Lentil Sambar", role: "Tangy Tamarind Broth", percentage: 6, note: "Toor dal broth simmered with drumsticks, pumpkin, tamarind, and sambar masala." },
      { name: "Pure Cow's Ghee", role: "Crisping Fat", percentage: 4, note: "Drizzled around dosa rim to create golden lacy honeycomb crunch." }
    ],
    cookingMethod: [
      { stage: "PREPARE", title: "Overnight Natural Fermentation", duration: "12h", temp: "Warm (28°C)", desc: "Rice and lentils are ground and fermented until airy and doubled in volume." },
      { stage: "MARINATE", title: "Aloo Masala Potato Tempering", duration: "15m", temp: "Medium Heat", desc: "Mustard seeds, urad dal, curry leaves, and green chilies sizzle before adding boiled potatoes." },
      { stage: "COOK", title: "Tawa Batter Spiral Spread", duration: "1m", temp: "Cast Iron (200°C)", desc: "Ladle of batter is poured onto seasoned cast iron tawa and spiraled thin." },
      { stage: "SEASON", title: "Ghee Drizzle & Red Chutney Spread", duration: "1m", temp: "High Heat", desc: "Ghee drizzled on edges; spicy garlic-chili paste brushed over the inner surface." },
      { stage: "FINISH", title: "Potato Mash Fold & Roll", duration: "30s", temp: "Tawa Heat", desc: "Spiced potato mash is placed in center; golden crepe is rolled into a cylinder." },
      { stage: "SERVE", title: "Banana Leaf Plating", duration: "Instant", temp: "Hot (80°C)", desc: "Transferred directly onto plate alongside steel bowls of coconut chutney and piping hot sambar." }
    ],
    allergens: [
      { name: "Dairy (Ghee - Optional)", severity: "Low / Optional", note: "Can be prepared with sesame/coconut oil to be 100% vegan." }
    ],
    substitutions: [
      { original: "Pure Ghee", substitute: "Cold-Pressed Sesame (Gingelly) Oil", tasteEffect: "Nutty, earthy South Indian traditional flavor", textureEffect: "Equally crispy, lace-thin texture" }
    ],
    summaryNote: "An iconic South Indian breakfast marvel: a paper-thin, crispy, tangy fermented crepe encasing comforting turmeric-mustard potato mash, paired with cold coconut chutney and hot tangy sambar."
  }
];

// ==========================================================================
// 4. APPLICATION STATE & PERSISTENCE
// ==========================================================================
const AppState = {
  activeView: "home",
  activeDish: null,
  uploadedPhoto: null,
  activeFilterCuisine: "all",
  searchQuery: "",
  savedDishes: [],
  history: [],
  theme: "light"
};

function loadStorage() {
  try {
    const saved = localStorage.getItem("dish_detective_saved");
    if (saved) AppState.savedDishes = JSON.parse(saved);
  } catch (e) {
    AppState.savedDishes = [];
  }
  try {
    const hist = localStorage.getItem("dish_detective_history");
    if (hist) AppState.history = JSON.parse(hist);
  } catch (e) {
    AppState.history = [];
  }
  try {
    const th = localStorage.getItem("dish_detective_theme");
    if (th) AppState.theme = th;
  } catch (e) {
    AppState.theme = "light";
  }
}

function persistSaved() {
  try {
    localStorage.setItem("dish_detective_saved", JSON.stringify(AppState.savedDishes));
  } catch (e) {}
  updateNavCounters();
}

function persistHistory() {
  try {
    localStorage.setItem("dish_detective_history", JSON.stringify(AppState.history));
  } catch (e) {}
}

function persistTheme() {
  try {
    localStorage.setItem("dish_detective_theme", AppState.theme);
  } catch (e) {}
}

// ==========================================================================
// 5. VIEW SYSTEM CONTROLLER (Critical Fix 41-45: Screen-Based SPA)
// ==========================================================================
function switchView(targetViewId) {
  const views = ["home", "investigate", "saved", "history", "about"];
  const viewMap = {
    "home": "homeView",
    "investigate": "investigateView",
    "saved": "savedView",
    "history": "historyView",
    "about": "aboutView"
  };

  const cleanTarget = targetViewId.replace("View", "").toLowerCase();
  if (!views.includes(cleanTarget)) return;

  AppState.activeView = cleanTarget;

  // 1. Hide all views and show only the selected view
  views.forEach(v => {
    const el = document.getElementById(viewMap[v]);
    if (el) {
      if (v === cleanTarget) {
        el.removeAttribute("hidden");
        el.classList.add("active");
      } else {
        el.setAttribute("hidden", "true");
        el.classList.remove("active");
      }
    }
  });

  // 2. Update navigation active state (Clean orange indicator & pill)
  document.querySelectorAll(".nav-item").forEach(btn => {
    const target = btn.getAttribute("data-target-view");
    if (target === cleanTarget) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  document.querySelectorAll(".mobile-nav-item").forEach(btn => {
    const target = btn.getAttribute("data-target-view");
    if (target === cleanTarget) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  // 3. Close mobile menu drawer if open
  closeMobileMenu();

  // 4. Scroll to top of viewport instantly upon screen switch
  window.scrollTo({ top: 0, behavior: "smooth" });

  // 5. Trigger view-specific renderers
  if (cleanTarget === "saved") renderSavedDishes();
  if (cleanTarget === "history") renderHistory();
  if (cleanTarget === "investigate") {
    // If no active search, show catalog
    if (!AppState.searchQuery) renderDishesCatalog();
  }
}

function setupNavigationListeners() {
  document.querySelectorAll("[data-target-view]").forEach(elem => {
    elem.addEventListener("click", (e) => {
      e.preventDefault();
      const target = elem.getAttribute("data-target-view");
      if (target) switchView(target);
    });
  });

  const mobileToggle = document.getElementById("mobile-menu-toggle");
  if (mobileToggle) {
    mobileToggle.addEventListener("click", () => {
      const drawer = document.getElementById("mobile-nav-drawer");
      const isOpen = drawer.classList.contains("open");
      if (isOpen) {
        closeMobileMenu();
      } else {
        drawer.classList.add("open");
        mobileToggle.classList.add("open");
        mobileToggle.setAttribute("aria-expanded", "true");
      }
    });
  }
}

function closeMobileMenu() {
  const drawer = document.getElementById("mobile-nav-drawer");
  const mobileToggle = document.getElementById("mobile-menu-toggle");
  if (drawer) drawer.classList.remove("open");
  if (mobileToggle) {
    mobileToggle.classList.remove("open");
    mobileToggle.setAttribute("aria-expanded", "false");
  }
}

function updateNavCounters() {
  const savedCount = AppState.savedDishes.length;
  const navCountEl = document.getElementById("saved-nav-count");
  const mobCountEl = document.getElementById("mobile-saved-count");
  if (navCountEl) navCountEl.textContent = savedCount;
  if (mobCountEl) mobCountEl.textContent = savedCount;
}

// ==========================================================================
// 6. ACCURATE SEARCH ALGORITHM (Critical Fix 39)
// Ranked by: Exact name -> Starts-with -> Partial name -> Cuisine -> Category -> Ingredient
// ==========================================================================
function searchDishes(query) {
  if (!query || !query.trim()) return DISH_DATABASE;
  const q = query.toLowerCase().trim();

  const exactMatches = [];
  const startsWithMatches = [];
  const partialNameMatches = [];
  const cuisineMatches = [];
  const categoryMatches = [];
  const ingredientMatches = [];

  DISH_DATABASE.forEach(dish => {
    const name = dish.name.toLowerCase();
    const cuisine = dish.cuisine.toLowerCase();
    const category = dish.category.toLowerCase();
    const hasIng = dish.ingredients.some(i => i.name.toLowerCase().includes(q));

    if (name === q) {
      exactMatches.push(dish);
    } else if (name.startsWith(q)) {
      startsWithMatches.push(dish);
    } else if (name.includes(q)) {
      partialNameMatches.push(dish);
    } else if (cuisine.includes(q)) {
      cuisineMatches.push(dish);
    } else if (category.includes(q)) {
      categoryMatches.push(dish);
    } else if (hasIng) {
      ingredientMatches.push(dish);
    }
  });

  // Combine uniquely preserving ranking priority
  const seen = new Set();
  const results = [];
  [
    ...exactMatches,
    ...startsWithMatches,
    ...partialNameMatches,
    ...cuisineMatches,
    ...categoryMatches,
    ...ingredientMatches
  ].forEach(d => {
    if (!seen.has(d.id)) {
      seen.add(d.id);
      results.push(d);
    }
  });

  return results;
}

function executeSearch(query) {
  AppState.searchQuery = (query || "").trim();
  const clearBtn = document.getElementById("search-clear-btn");
  if (clearBtn) clearBtn.hidden = !AppState.searchQuery;

  const results = searchDishes(AppState.searchQuery);
  const grid = document.getElementById("dishes-cards-grid");
  const feedbackBar = document.getElementById("search-results-feedback");
  const feedbackTitle = document.getElementById("feedback-title");
  const emptyState = document.getElementById("no-search-results");
  const curatedHeader = document.querySelector(".curated-header");

  // Record in recent searches if valid string
  if (AppState.searchQuery.length >= 2) {
    saveRecentSearch(AppState.searchQuery);
  }

  if (AppState.searchQuery) {
    if (feedbackBar) feedbackBar.removeAttribute("hidden");
    if (feedbackTitle) feedbackTitle.textContent = `Search results for "${AppState.searchQuery}" (${results.length} found)`;
    if (curatedHeader) curatedHeader.style.display = "none";
  } else {
    if (feedbackBar) feedbackBar.setAttribute("hidden", "true");
    if (curatedHeader) curatedHeader.style.display = "flex";
  }

  if (results.length === 0) {
    if (grid) grid.innerHTML = "";
    if (emptyState) emptyState.removeAttribute("hidden");
  } else {
    if (emptyState) emptyState.setAttribute("hidden", "true");
    renderDishCards(results);
  }
}

// Live Autocomplete Suggestions
function handleSearchInput(e) {
  const query = e.target.value;
  const clearBtn = document.getElementById("search-clear-btn");
  if (clearBtn) clearBtn.hidden = !query;

  const dropdown = document.getElementById("search-suggestions-dropdown");
  const list = document.getElementById("suggestions-list");

  if (!query || query.trim().length === 0) {
    if (dropdown) dropdown.setAttribute("hidden", "true");
    executeSearch("");
    return;
  }

  const matches = searchDishes(query);
  if (matches.length > 0 && query.trim().length >= 1) {
    list.innerHTML = matches.slice(0, 5).map(dish => `
      <div class="suggestion-item" data-dish-id="${dish.id}">
        <div class="suggestion-left">
          <img src="${dish.image}" alt="${dish.name}" class="suggestion-thumb">
          <span class="suggestion-name">${dish.name}</span>
        </div>
        <div class="suggestion-right">
          <span>${dish.cuisine}</span>
          <span>${dish.spiceLabel}</span>
        </div>
      </div>
    `).join("");
    dropdown.removeAttribute("hidden");

    list.querySelectorAll(".suggestion-item").forEach(item => {
      item.addEventListener("click", () => {
        const dishId = item.getAttribute("data-dish-id");
        const found = DISH_DATABASE.find(d => d.id === dishId);
        if (found) {
          dropdown.setAttribute("hidden", "true");
          document.getElementById("dish-search-input").value = found.name;
          startInvestigation(found, "Name Search");
        }
      });
    });
  } else {
    if (dropdown) dropdown.setAttribute("hidden", "true");
  }

  // Also live-filter catalog if typing
  executeSearch(query);
}

// ==========================================================================
// 7. PHOTO RECOGNITION (Critical Fix 40: NO FAKE IDENTIFICATION)
// ==========================================================================
function setupPhotoInput() {
  const fileInput = document.getElementById("dish-file-input");
  const dropzone = document.getElementById("photo-dropzone");
  const emptyView = document.getElementById("dropzone-empty-view");
  const previewView = document.getElementById("dropzone-preview-view");
  const previewImg = document.getElementById("uploaded-dish-img");
  const removeBtn = document.getElementById("remove-photo-btn");
  const replaceBtn = document.getElementById("replace-photo-btn");
  const analyzeBtn = document.getElementById("analyze-photo-btn");

  const statusDot = document.getElementById("photo-status-dot");
  const statusHeading = document.getElementById("photo-status-heading");
  const statusDesc = document.getElementById("photo-status-desc");
  const manualBox = document.getElementById("photo-manual-input-box");
  const manualInput = document.getElementById("photo-dish-name-input");
  const manualBtn = document.getElementById("photo-manual-investigate-btn");

  function handleFile(file) {
    if (!file || !file.type.startsWith("image/")) {
      showToast("Please provide a valid image file (JPEG, PNG, WEBP)");
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      AppState.uploadedPhoto = e.target.result;
      previewImg.src = AppState.uploadedPhoto;
      emptyView.setAttribute("hidden", "true");
      previewView.removeAttribute("hidden");
      analyzeBtn.removeAttribute("disabled");

      if (statusDot) statusDot.classList.add("active");
      if (statusHeading) statusHeading.textContent = "Photo received";
      
      // Strict requirement 40: Never pretend or assign a random dish.
      if (!CONFIG.ENABLE_IMAGE_ANALYSIS || !CONFIG.IMAGE_ANALYSIS_API_KEY) {
        if (statusDesc) {
          statusDesc.textContent = "We have received your image, but automatic dish recognition is not currently connected. Please enter the dish name below to investigate.";
        }
        if (manualBox) manualBox.removeAttribute("hidden");
      } else {
        if (statusDesc) statusDesc.textContent = "Image ready for API transmission.";
      }
    };
    reader.readAsDataURL(file);
  }

  if (fileInput) {
    fileInput.addEventListener("change", (e) => {
      if (e.target.files && e.target.files[0]) handleFile(e.target.files[0]);
    });
  }

  if (dropzone) {
    dropzone.addEventListener("dragover", (e) => {
      e.preventDefault();
      dropzone.classList.add("drag-over");
    });
    dropzone.addEventListener("dragleave", () => {
      dropzone.classList.remove("drag-over");
    });
    dropzone.addEventListener("drop", (e) => {
      e.preventDefault();
      dropzone.classList.remove("drag-over");
      if (e.dataTransfer.files && e.dataTransfer.files[0]) {
        handleFile(e.dataTransfer.files[0]);
      }
    });
  }

  if (removeBtn) {
    removeBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      AppState.uploadedPhoto = null;
      if (fileInput) fileInput.value = "";
      previewImg.src = "";
      previewView.setAttribute("hidden", "true");
      emptyView.removeAttribute("hidden");
      analyzeBtn.setAttribute("disabled", "true");
      if (manualBox) manualBox.setAttribute("hidden", "true");
      if (statusDot) statusDot.classList.remove("active");
      if (statusHeading) statusHeading.textContent = "Awaiting photo selection";
      if (statusDesc) statusDesc.textContent = "Upload a dish photo. If automatic image-analysis is connected, it will identify the dish. Otherwise, enter the dish name manually.";
    });
  }

  if (replaceBtn) {
    replaceBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      if (fileInput) fileInput.click();
    });
  }

  if (analyzeBtn) {
    analyzeBtn.addEventListener("click", () => {
      if (!CONFIG.ENABLE_IMAGE_ANALYSIS) {
        showToast("Photo received. Please enter the dish name to continue.");
        if (manualBox) manualBox.removeAttribute("hidden");
        if (manualInput) manualInput.focus();
        return;
      }
    });
  }

  if (manualBtn && manualInput) {
    manualBtn.addEventListener("click", () => {
      const val = manualInput.value.trim();
      if (!val) {
        showToast("Please enter a dish name to investigate.");
        return;
      }
      const matches = searchDishes(val);
      if (matches.length > 0) {
        startInvestigation(matches[0], "Photo Search", AppState.uploadedPhoto);
      } else {
        showToast("Dish not found in local culinary database. Try another name.");
      }
    });
  }

  // Combined Dual Search
  const dualBtn = document.getElementById("dual-investigate-btn");
  const dualName = document.getElementById("dual-dish-name");
  const dualFile = document.getElementById("dual-file-input");
  const dualDrop = document.getElementById("dual-dropzone");
  const dualPreview = document.getElementById("dual-preview-img");
  const dualPrompt = document.getElementById("dual-dropzone-prompt");

  if (dualDrop && dualFile) {
    dualDrop.addEventListener("click", () => dualFile.click());
    dualFile.addEventListener("change", (e) => {
      if (e.target.files && e.target.files[0]) {
        const r = new FileReader();
        r.onload = (evt) => {
          dualPreview.src = evt.target.result;
          dualPreview.removeAttribute("hidden");
          if (dualPrompt) dualPrompt.style.display = "none";
        };
        r.readAsDataURL(e.target.files[0]);
      }
    });
  }

  if (dualBtn && dualName) {
    dualBtn.addEventListener("click", () => {
      const q = dualName.value.trim();
      if (!q) {
        showToast("Please enter a dish name for dual investigation.");
        return;
      }
      const matches = searchDishes(q);
      if (matches.length > 0) {
        startInvestigation(matches[0], "Dual (Name + Photo)", dualPreview.src || null);
      } else {
        showToast("No matching dish found for dual investigation.");
      }
    });
  }

  document.querySelectorAll("[data-dual-demo]").forEach(btn => {
    btn.addEventListener("click", () => {
      const dName = btn.getAttribute("data-dual-demo");
      if (dualName) dualName.value = dName;
      if (dualPreview) {
        dualPreview.src = getDishImage(dName);
        dualPreview.removeAttribute("hidden");
        if (dualPrompt) dualPrompt.style.display = "none";
      }
    });
  });
}

// ==========================================================================
// 8. DISH INVESTIGATION EXECUTION & HUD LOADING
// ==========================================================================
function startInvestigation(dish, type = "Name Search", customPhoto = null) {
  AppState.activeDish = dish;

  // Record strictly in History upon investigation (Requirement 21 & 49)
  const historyEntry = {
    id: "hist-" + Date.now(),
    dishId: dish.id,
    dishName: dish.name,
    cuisine: dish.cuisine,
    spiceLabel: dish.spiceLabel,
    image: dish.image,
    date: new Date().toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" }),
    time: new Date().toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit" }),
    type: type
  };
  AppState.history.unshift(historyEntry);
  persistHistory();

  // Show Radar Loading HUD
  const overlay = document.getElementById("loading-overlay");
  const dishNameEl = document.getElementById("loading-dish-name");
  const progressBar = document.getElementById("loading-progress-bar");
  const stageLabel = document.getElementById("loading-stage-label");
  const stageItems = document.querySelectorAll(".loading-stages-list .stage-step");

  if (dishNameEl) dishNameEl.textContent = dish.name;
  if (overlay) overlay.removeAttribute("hidden");

  const stages = [
    { text: "Analyzing ingredients...", pct: 20 },
    { text: "Understanding preparation...", pct: 40 },
    { text: "Mapping flavors & spice...", pct: 60 },
    { text: "Checking allergens & safety...", pct: 80 },
    { text: "Building dish profile...", pct: 100 }
  ];

  let currentStage = 0;
  function step() {
    if (currentStage < stages.length) {
      const s = stages[currentStage];
      if (progressBar) progressBar.style.width = s.pct + "%";
      if (stageLabel) stageLabel.textContent = s.text;

      stageItems.forEach((item, idx) => {
        if (idx === currentStage) {
          item.classList.add("active");
          item.classList.remove("done");
        } else if (idx < currentStage) {
          item.classList.remove("active");
          item.classList.add("done");
        } else {
          item.classList.remove("active", "done");
        }
      });

      currentStage++;
      setTimeout(step, 180);
    } else {
      setTimeout(() => {
        if (overlay) overlay.setAttribute("hidden", "true");
        renderInvestigationDashboard(dish, customPhoto);
      }, 200);
    }
  }
  step();
}

function renderInvestigationDashboard(dish, customPhoto = null) {
  // Ensure we are inside the investigate view
  switchView("investigate");

  const searchHub = document.getElementById("investigation-search-hub");
  const dashView = document.getElementById("investigation-dashboard");

  if (searchHub) searchHub.setAttribute("hidden", "true");
  if (dashView) dashView.removeAttribute("hidden");

  // Hero Card
  const heroImg = document.getElementById("active-dish-img");
  const heroName = document.getElementById("active-dish-name");
  const heroDesc = document.getElementById("active-dish-desc");
  const heroCuisine = document.getElementById("active-dish-cuisine");
  const heroCat = document.getElementById("active-dish-category");
  const heroDiff = document.getElementById("active-dish-difficulty");
  const heroSpice = document.getElementById("active-dish-spice-badge");
  const heroPortion = document.getElementById("active-dish-portion");
  const heroTime = document.getElementById("active-dish-time");
  const heroCal = document.getElementById("active-dish-calories");
  const heroAllergen = document.getElementById("active-dish-allergen-brief");
  const dietaryContainer = document.getElementById("active-dish-dietary-tags");

  // Every dish strictly uses its unique, verified image
  if (heroImg) heroImg.src = customPhoto || dish.image;
  if (heroName) heroName.textContent = dish.name;
  if (heroDesc) heroDesc.textContent = dish.description;
  if (heroCuisine) heroCuisine.textContent = dish.cuisine + " Cuisine";
  if (heroCat) heroCat.textContent = dish.category;
  if (heroDiff) heroDiff.textContent = dish.difficulty + " Technique";
  if (heroSpice) heroSpice.textContent = dish.spiceLabel;
  if (heroPortion) heroPortion.textContent = dish.portion;
  if (heroTime) heroTime.textContent = dish.preparationTime;
  if (heroCal) heroCal.textContent = dish.caloriesEstimate;
  if (heroAllergen) {
    heroAllergen.textContent = dish.allergens && dish.allergens.length ? dish.allergens[0].name : "None Reported";
  }

  if (dietaryContainer && dish.dietaryInfo) {
    dietaryContainer.innerHTML = dish.dietaryInfo.map(t => `<span class="dietary-tag">${t}</span>`).join("");
  }

  // Update Save Button State
  updateSaveButtonUI(dish.id);

  // Breadcrumbs & Quick Facts (Requirement 69 & 72)
  const crumbActive = document.getElementById("crumb-active-dish-name");
  if (crumbActive) crumbActive.textContent = dish.name;
  const heroSpiceFact = document.getElementById("active-dish-spice-fact");
  if (heroSpiceFact) heroSpiceFact.textContent = dish.spiceLabel;

  // Chapter 01: Identify (What should it look like?) (Requirement 59 & 61)
  const identifyImg = document.getElementById("identify-dish-img");
  const visualHeading = document.getElementById("visual-dish-heading");
  const visualDesc = document.getElementById("visual-dish-desc");
  const visualTags = document.getElementById("visual-dietary-tags");

  if (identifyImg) identifyImg.src = customPhoto || dish.image;
  if (visualHeading) visualHeading.textContent = `Authentic ${dish.name} Presentation`;
  if (visualDesc) visualDesc.textContent = dish.description;
  if (visualTags && dish.dietaryInfo) {
    visualTags.innerHTML = dish.dietaryInfo.map(t => `<span class="dietary-tag">${t}</span>`).join("");
  }

  // Chapter 02: Ingredients Anatomy & Constellation
  const anatomyImg = document.getElementById("anatomy-core-img");
  const anatomyCoreName = document.getElementById("anatomy-core-name");
  const anatomyCount = document.getElementById("anatomy-ingredient-count");
  if (anatomyImg) anatomyImg.src = customPhoto || dish.image;
  if (anatomyCoreName) anatomyCoreName.textContent = dish.name;
  if (anatomyCount) anatomyCount.textContent = `${dish.ingredients.length} Elements`;

  const ingGrid = document.getElementById("ingredients-grid");
  if (ingGrid) {
    ingGrid.innerHTML = dish.ingredients.map((ing, idx) => `
      <div class="ingredient-node-card" data-ing-index="${idx}">
        <div class="node-top">
          <span class="node-role">${ing.role}</span>
          <span class="node-percent">${ing.percentage}%</span>
        </div>
        <h4 class="node-name">${ing.name}</h4>
        <p class="node-note">${ing.note}</p>
      </div>
    `).join("");

    ingGrid.querySelectorAll(".ingredient-node-card").forEach(card => {
      card.addEventListener("click", () => {
        ingGrid.querySelectorAll(".ingredient-node-card").forEach(c => c.classList.remove("active"));
        card.classList.add("active");
        const idx = parseInt(card.getAttribute("data-ing-index"), 10);
        inspectIngredient(dish.ingredients[idx]);
      });
    });
    // Default focus first ingredient
    if (dish.ingredients[0]) inspectIngredient(dish.ingredients[0]);
  }

  // Chapter 02: Cooking Journey
  const cookContainer = document.getElementById("cooking-journey-container");
  if (cookContainer) {
    cookContainer.innerHTML = dish.cookingMethod.map((step, idx) => `
      <div class="cooking-step-card ${idx === 0 ? 'expanded' : ''}" data-step-index="${idx}">
        <div class="step-marker">0${idx + 1}</div>
        <div class="step-content">
          <div class="step-meta-row">
            <span class="step-stage-name">${step.stage}</span>
            <span class="step-duration-badge">${step.duration} · ${step.temp}</span>
          </div>
          <h4 class="step-title">${step.title}</h4>
          <p class="step-desc">${step.desc}</p>
        </div>
      </div>
    `).join("");

    cookContainer.querySelectorAll(".cooking-step-card").forEach(card => {
      card.addEventListener("click", () => {
        card.classList.toggle("expanded");
      });
    });
  }

  // Chapter 03: Sensory (Spice, Taste & Texture Meters)
  const spiceRatingText = document.getElementById("spice-rating-text");
  const spiceExplanation = document.getElementById("spice-explanation-text");
  const spiceVisualSteps = document.querySelectorAll("#spice-meters-visual .spice-step");

  if (spiceRatingText) spiceRatingText.textContent = `${dish.spiceLabel.toUpperCase()} (${'●'.repeat(dish.spiceLevel)}${'○'.repeat(5 - dish.spiceLevel)})`;
  if (spiceExplanation) spiceExplanation.textContent = `${dish.spiceDesc} Estimated Scoville: ${dish.spiceScoville}.`;
  spiceVisualSteps.forEach((s, i) => {
    if (i < dish.spiceLevel) {
      s.classList.add("active");
    } else {
      s.classList.remove("active");
    }
  });

  const tasteContainer = document.getElementById("taste-bars-container");
  if (tasteContainer && dish.tasteProfile) {
    const tastes = [
      { key: "umami", label: "Umami", val: dish.tasteProfile.umami },
      { key: "salty", label: "Salty", val: dish.tasteProfile.salty },
      { key: "sweet", label: "Sweet", val: dish.tasteProfile.sweet },
      { key: "sour", label: "Sour", val: dish.tasteProfile.sour },
      { key: "spicy", label: "Spicy", val: dish.tasteProfile.spicy },
      { key: "bitter", label: "Bitter", val: dish.tasteProfile.bitter }
    ];
    tasteContainer.innerHTML = tastes.map(t => `
      <div class="meter-row">
        <div class="meter-header">
          <span class="meter-name">${t.label}</span>
          <span class="meter-val">${t.val}%</span>
        </div>
        <div class="meter-track">
          <div class="meter-fill" style="width: ${t.val}%;"></div>
        </div>
      </div>
    `).join("");
  }

  const textureContainer = document.getElementById("texture-bars-container");
  if (textureContainer && dish.textureProfile) {
    const textures = [
      { key: "tender", label: "Tender", val: dish.textureProfile.tender },
      { key: "crispy", label: "Crispy", val: dish.textureProfile.crispy },
      { key: "creamy", label: "Creamy", val: dish.textureProfile.creamy },
      { key: "chewy", label: "Chewy", val: dish.textureProfile.chewy },
      { key: "soft", label: "Soft", val: dish.textureProfile.soft },
      { key: "juicy", label: "Juicy", val: dish.textureProfile.juicy },
      { key: "crunchy", label: "Crunchy", val: dish.textureProfile.crunchy }
    ];
    textureContainer.innerHTML = textures.map(tx => `
      <div class="meter-row">
        <div class="meter-header">
          <span class="meter-name">${tx.label}</span>
          <span class="meter-val">${tx.val}%</span>
        </div>
        <div class="meter-track">
          <div class="meter-fill meter-fill-texture" style="width: ${tx.val}%;"></div>
        </div>
      </div>
    `).join("");
  }

  // Chapter 04: Allergens
  const allergenGrid = document.getElementById("allergens-cards-grid");
  if (allergenGrid) {
    if (dish.allergens && dish.allergens.length) {
      allergenGrid.innerHTML = dish.allergens.map(a => `
        <div class="allergen-card present">
          <div class="allergen-header">
            <h4 class="allergen-name">${a.name}</h4>
            <span class="allergen-badge">${a.severity}</span>
          </div>
          <p class="allergen-note">${a.note}</p>
        </div>
      `).join("");
    } else {
      allergenGrid.innerHTML = `
        <div class="allergen-card">
          <div class="allergen-header">
            <h4 class="allergen-name">No Common Major Allergens</h4>
            <span class="allergen-badge" style="color: var(--color-primary); border-color: var(--color-primary);">Verified</span>
          </div>
          <p class="allergen-note">No dairy, peanuts, tree nuts, gluten, or shellfish identified in traditional preparation.</p>
        </div>
      `;
    }
  }

  // Chapter 05: Substitutions
  const subGrid = document.getElementById("substitutions-cards-grid");
  if (subGrid) {
    if (dish.substitutions && dish.substitutions.length) {
      subGrid.innerHTML = dish.substitutions.map(s => `
        <div class="sub-card">
          <div class="sub-transfer-row">
            <span class="sub-original">${s.original}</span>
            <span class="sub-arrow">→</span>
            <span class="sub-alternative">${s.substitute}</span>
          </div>
          <div class="sub-impact-grid">
            <div class="impact-box">
              <span class="impact-label">Effect on Taste:</span>
              <p class="impact-val">${s.tasteEffect}</p>
            </div>
            <div class="impact-box">
              <span class="impact-label">Effect on Texture:</span>
              <p class="impact-val">${s.textureEffect}</p>
            </div>
          </div>
        </div>
      `).join("");
    } else {
      subGrid.innerHTML = `<p class="field-hint">No direct culinary substitutions cataloged for this traditional formula.</p>`;
    }
  }

  // Chapter 06: Final Dossier
  const doshDishName = document.getElementById("dossier-dish-name");
  const doshMeta = document.getElementById("dossier-dish-meta");
  const doshQuote = document.getElementById("dossier-summary-quote");
  const doshCuisine = document.getElementById("dossier-cuisine");
  const doshDominant = document.getElementById("dossier-dominant-taste");
  const doshTexture = document.getElementById("dossier-texture-summary");
  const doshSpice = document.getElementById("dossier-spice-summary");
  const doshMethod = document.getElementById("dossier-method-summary");
  const doshAllergens = document.getElementById("dossier-allergens-summary");

  if (doshDishName) doshDishName.textContent = dish.name;
  if (doshMeta) doshMeta.textContent = `${dish.cuisine} · ${dish.category} · ${dish.difficulty} Technique`;
  if (doshQuote) doshQuote.textContent = `“${dish.summaryNote}”`;
  if (doshCuisine) doshCuisine.textContent = dish.cuisine;
  if (doshDominant) doshDominant.textContent = `Umami (${dish.tasteProfile.umami}%) & Salt (${dish.tasteProfile.salty}%)`;
  if (doshTexture) doshTexture.textContent = `Tender (${dish.textureProfile.tender}%), Soft (${dish.textureProfile.soft}%)`;
  if (doshSpice) doshSpice.textContent = `${dish.spiceLabel} (${dish.spiceScoville})`;
  if (doshMethod) doshMethod.textContent = dish.cookingMethod[0].title;
  if (doshAllergens) {
    doshAllergens.textContent = dish.allergens && dish.allergens.length ? dish.allergens.map(a => a.name).join(", ") : "None Detected";
  }

  // Quick 5-Point Checklist (Requirement 70)
  const checkTaste = document.getElementById("check-taste-val");
  const checkTexture = document.getElementById("check-texture-val");
  const checkSpice = document.getElementById("check-spice-val");
  const checkAllergen = document.getElementById("check-allergen-val");
  const checkPrep = document.getElementById("check-prep-val");

  if (checkTaste) checkTaste.textContent = `Umami (${dish.tasteProfile.umami}%), Salt (${dish.tasteProfile.salty}%), Savory balance`;
  if (checkTexture) checkTexture.textContent = `Tender (${dish.textureProfile.tender}%), Soft (${dish.textureProfile.soft}%) mouthfeel`;
  if (checkSpice) checkSpice.textContent = `${dish.spiceLabel} (${dish.spiceScoville})`;
  if (checkAllergen) {
    checkAllergen.textContent = dish.allergens && dish.allergens.length ? dish.allergens.map(a => a.name).join(", ") : "No major allergens identified";
  }
  if (checkPrep) checkPrep.textContent = `${dish.cookingMethod[0].title} · ${dish.preparationTime}`;

  // Window scroll to top of investigation view
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function inspectIngredient(ing) {
  const emptyPrompt = document.getElementById("inspector-empty-prompt");
  const activeContent = document.getElementById("inspector-active-content");
  const roleEl = document.getElementById("inspector-role");
  const nameEl = document.getElementById("inspector-name");
  const pctEl = document.getElementById("inspector-percentage");
  const whatEl = document.getElementById("inspector-what");
  const whyEl = document.getElementById("inspector-why");
  const resultEl = document.getElementById("inspector-result");

  if (emptyPrompt) emptyPrompt.setAttribute("hidden", "true");
  if (activeContent) activeContent.removeAttribute("hidden");

  if (roleEl) roleEl.textContent = ing.role;
  if (nameEl) nameEl.textContent = ing.name;
  if (pctEl) pctEl.textContent = `~${ing.percentage}% by weight`;
  if (whatEl) whatEl.textContent = ing.note || `${ing.name} serving as ${ing.role.toLowerCase()}.`;
  if (whyEl) whyEl.textContent = `Essential for balanced flavor structure and foundational ${ing.role.toLowerCase()} composition.`;
  if (resultEl) resultEl.textContent = `Adds distinct savory richness, proper moisture, and texture complexity to the dish.`;
}

// ==========================================================================
// 9. CATALOG RENDERING (Consistent Unique Dish Images for Every Dish)
// ==========================================================================
function renderDishCards(dishes) {
  const grid = document.getElementById("dishes-cards-grid");
  if (!grid) return;

  grid.innerHTML = dishes.map(dish => `
    <div class="dish-catalog-card" data-dish-id="${dish.id}">
      <div class="card-media">
        <img src="${dish.image}" alt="${dish.name}" loading="lazy">
        <span class="card-cuisine-badge">${dish.cuisine}</span>
        <span class="card-spice-badge">${dish.spiceLabel}</span>
      </div>
      <div class="card-body">
        <h4 class="card-title">${dish.name}</h4>
        <p class="card-description">${dish.description}</p>
        <div class="card-footer">
          <span>${dish.preparationTime}</span>
          <span class="card-investigate-link">
            Investigate
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </span>
        </div>
      </div>
    </div>
  `).join("");

  grid.querySelectorAll(".dish-catalog-card").forEach(card => {
    card.addEventListener("click", () => {
      const id = card.getAttribute("data-dish-id");
      const dish = DISH_DATABASE.find(d => d.id === id);
      if (dish) startInvestigation(dish, "Curated Selection");
    });
  });
}

function renderDishesCatalog() {
  let list = DISH_DATABASE;
  if (AppState.activeFilterCuisine !== "all") {
    list = DISH_DATABASE.filter(d => d.cuisine.toLowerCase() === AppState.activeFilterCuisine.toLowerCase());
  }
  renderDishCards(list);
}

// ==========================================================================
// 10. SAVED DISHES SYSTEM (Critical Fix 48)
// ==========================================================================
function toggleSaveDish(dish) {
  const index = AppState.savedDishes.findIndex(d => d.id === dish.id);
  if (index >= 0) {
    AppState.savedDishes.splice(index, 1);
    showToast(`Removed "${dish.name}" from saved profiles.`);
  } else {
    AppState.savedDishes.push({
      id: dish.id,
      name: dish.name,
      cuisine: dish.cuisine,
      spiceLabel: dish.spiceLabel,
      image: dish.image,
      savedDate: new Date().toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" })
    });
    showToast(`Saved "${dish.name}" to your collection.`);
  }
  persistSaved();
  updateSaveButtonUI(dish.id);
  renderSavedDishes();
}

function updateSaveButtonUI(dishId) {
  const isSaved = AppState.savedDishes.some(d => d.id === dishId);
  const saveBtn = document.getElementById("save-dish-btn");
  const saveText = document.getElementById("save-btn-text");
  const dossierSaveBtn = document.getElementById("dossier-save-btn");
  const dossierSaveLabel = document.getElementById("dossier-save-label");

  if (saveText) saveText.textContent = isSaved ? "Saved" : "Save Profile";
  if (saveBtn) {
    if (isSaved) {
      saveBtn.classList.add("btn-primary");
      saveBtn.classList.remove("btn-secondary");
    } else {
      saveBtn.classList.add("btn-secondary");
      saveBtn.classList.remove("btn-primary");
    }
  }

  if (dossierSaveLabel) dossierSaveLabel.textContent = isSaved ? "Dish Profile Saved" : "Save Dish Profile";
}

function renderSavedDishes() {
  const grid = document.getElementById("saved-dishes-grid");
  const emptyState = document.getElementById("saved-empty-state");
  if (!grid) return;

  if (AppState.savedDishes.length === 0) {
    grid.innerHTML = "";
    if (emptyState) emptyState.removeAttribute("hidden");
    return;
  }

  if (emptyState) emptyState.setAttribute("hidden", "true");

  grid.innerHTML = AppState.savedDishes.map(d => `
    <div class="saved-card" data-dish-id="${d.id}">
      <div class="saved-media">
        <img src="${d.image}" alt="${d.name}">
        <span class="card-cuisine-badge">${d.cuisine}</span>
      </div>
      <div class="saved-card-body">
        <h4 class="card-title">${d.name}</h4>
        <span class="saved-date">Saved on ${d.savedDate}</span>
        <div class="saved-card-actions">
          <button type="button" class="btn btn-primary btn-sm open-saved-btn" data-dish-id="${d.id}">Investigate</button>
          <button type="button" class="btn btn-ghost btn-sm remove-saved-btn" data-dish-id="${d.id}">Remove</button>
        </div>
      </div>
    </div>
  `).join("");

  grid.querySelectorAll(".open-saved-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-dish-id");
      const dish = DISH_DATABASE.find(item => item.id === id);
      if (dish) startInvestigation(dish, "Saved Profile");
    });
  });

  grid.querySelectorAll(".remove-saved-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-dish-id");
      const dish = DISH_DATABASE.find(item => item.id === id);
      if (dish) toggleSaveDish(dish);
    });
  });
}

// ==========================================================================
// 11. INVESTIGATION HISTORY SYSTEM (Critical Fix 49)
// Strictly contains ONLY dishes actually investigated by the user
// ==========================================================================
function renderHistory() {
  const list = document.getElementById("history-items-list");
  const emptyState = document.getElementById("history-empty-state");
  if (!list) return;

  if (AppState.history.length === 0) {
    list.innerHTML = "";
    if (emptyState) emptyState.removeAttribute("hidden");
    return;
  }

  if (emptyState) emptyState.setAttribute("hidden", "true");

  list.innerHTML = AppState.history.map(item => `
    <div class="history-item-row" data-history-id="${item.id}">
      <div class="history-left">
        <img src="${item.image}" alt="${item.dishName}" class="history-thumb">
        <div>
          <h4 class="history-name">${item.dishName}</h4>
          <span class="history-meta-text">${item.cuisine} · ${item.spiceLabel} · ${item.type} · ${item.date} at ${item.time}</span>
        </div>
      </div>
      <div class="history-actions">
        <button type="button" class="btn btn-primary btn-sm open-history-btn" data-dish-id="${item.dishId}">
          Open Again
        </button>
        <button type="button" class="btn btn-ghost btn-sm delete-history-btn" data-history-id="${item.id}">
          Delete
        </button>
      </div>
    </div>
  `).join("");

  list.querySelectorAll(".open-history-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const dishId = btn.getAttribute("data-dish-id");
      const dish = DISH_DATABASE.find(d => d.id === dishId);
      if (dish) startInvestigation(dish, "History Re-open");
    });
  });

  list.querySelectorAll(".delete-history-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const histId = btn.getAttribute("data-history-id");
      AppState.history = AppState.history.filter(h => h.id !== histId);
      persistHistory();
      renderHistory();
      showToast("History item deleted.");
    });
  });
}

// ==========================================================================
// 12. RECENT SEARCHES TRACKER
// ==========================================================================
function saveRecentSearch(term) {
  let recents = [];
  try {
    recents = JSON.parse(localStorage.getItem("dish_detective_recents") || "[]");
  } catch (e) {}

  recents = recents.filter(r => r.toLowerCase() !== term.toLowerCase());
  recents.unshift(term);
  if (recents.length > 6) recents.pop();

  try {
    localStorage.setItem("dish_detective_recents", JSON.stringify(recents));
  } catch (e) {}
  renderRecentSearches();
}

function renderRecentSearches() {
  const container = document.getElementById("recent-searches-container");
  const list = document.getElementById("recent-searches-list");
  if (!container || !list) return;

  let recents = [];
  try {
    recents = JSON.parse(localStorage.getItem("dish_detective_recents") || "[]");
  } catch (e) {}

  if (recents.length === 0) {
    container.setAttribute("hidden", "true");
    return;
  }

  container.removeAttribute("hidden");
  list.innerHTML = recents.map(r => `
    <span class="recent-chip" data-search-term="${r}">
      ${r}
      <button type="button" class="recent-chip-remove" data-remove-term="${r}">&times;</button>
    </span>
  `).join("");

  list.querySelectorAll(".recent-chip").forEach(chip => {
    chip.addEventListener("click", (e) => {
      if (e.target.classList.contains("recent-chip-remove")) return;
      const term = chip.getAttribute("data-search-term");
      document.getElementById("dish-search-input").value = term;
      executeSearch(term);
    });
  });

  list.querySelectorAll(".recent-chip-remove").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const term = btn.getAttribute("data-remove-term");
      recents = recents.filter(r => r !== term);
      localStorage.setItem("dish_detective_recents", JSON.stringify(recents));
      renderRecentSearches();
    });
  });
}

// ==========================================================================
// 13. TOAST & MODAL SYSTEMS
// ==========================================================================
function showToast(message) {
  const container = document.getElementById("toast-container");
  if (!container) return;
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  container.appendChild(toast);
  setTimeout(() => {
    toast.remove();
  }, 3500);
}

function showConfirmModal(title, desc, onConfirm) {
  const modal = document.getElementById("confirm-modal-backdrop");
  const titleEl = document.getElementById("modal-title");
  const descEl = document.getElementById("modal-desc");
  const confirmBtn = document.getElementById("modal-confirm-btn");
  const cancelBtn = document.getElementById("modal-cancel-btn");

  if (!modal) return;
  if (titleEl) titleEl.textContent = title;
  if (descEl) descEl.textContent = desc;

  modal.removeAttribute("hidden");

  function cleanUp() {
    modal.setAttribute("hidden", "true");
    confirmBtn.replaceWith(confirmBtn.cloneNode(true));
    cancelBtn.replaceWith(cancelBtn.cloneNode(true));
  }

  document.getElementById("modal-confirm-btn").addEventListener("click", () => {
    cleanUp();
    if (typeof onConfirm === "function") onConfirm();
  }, { once: true });

  document.getElementById("modal-cancel-btn").addEventListener("click", cleanUp, { once: true });
}

// ==========================================================================
// 14. THEME TOGGLE
// ==========================================================================
function setupThemeToggle() {
  const themeBtn = document.getElementById("theme-toggle-btn");
  document.documentElement.setAttribute("data-theme", AppState.theme);

  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      AppState.theme = AppState.theme === "light" ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", AppState.theme);
      persistTheme();
    });
  }
}

// ==========================================================================
// 15. INITIALIZATION
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  loadStorage();
  setupThemeToggle();
  setupNavigationListeners();
  setupPhotoInput();
  updateNavCounters();

  // Search input listeners
  const searchInput = document.getElementById("dish-search-input");
  const searchSubmit = document.getElementById("search-submit-btn");
  const searchClear = document.getElementById("search-clear-btn");

  if (searchInput) {
    searchInput.addEventListener("input", handleSearchInput);
    searchInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        document.getElementById("search-suggestions-dropdown").setAttribute("hidden", "true");
        executeSearch(searchInput.value);
      }
    });
  }

  if (searchSubmit) {
    searchSubmit.addEventListener("click", () => {
      document.getElementById("search-suggestions-dropdown").setAttribute("hidden", "true");
      executeSearch(searchInput ? searchInput.value : "");
    });
  }

  if (searchClear && searchInput) {
    searchClear.addEventListener("click", () => {
      searchInput.value = "";
      searchClear.hidden = true;
      document.getElementById("search-suggestions-dropdown").setAttribute("hidden", "true");
      executeSearch("");
    });
  }

  // Quick suggestions buttons
  document.querySelectorAll(".quick-tag").forEach(tag => {
    tag.addEventListener("click", () => {
      const dishName = tag.getAttribute("data-dish");
      if (searchInput) searchInput.value = dishName;
      executeSearch(dishName);
    });
  });

  // Cuisine category filters
  document.querySelectorAll("#category-filter-bar .filter-tab").forEach(tab => {
    tab.addEventListener("click", () => {
      document.querySelectorAll("#category-filter-bar .filter-tab").forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      AppState.activeFilterCuisine = tab.getAttribute("data-cuisine");
      renderDishesCatalog();
    });
  });

  // Mode tabs (Name vs Photo vs Dual)
  document.querySelectorAll(".mode-tab").forEach(tab => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".mode-tab").forEach(t => {
        t.classList.remove("active");
        t.setAttribute("aria-selected", "false");
      });
      tab.classList.add("active");
      tab.setAttribute("aria-selected", "true");

      const targetPanelId = tab.getAttribute("aria-controls");
      document.querySelectorAll(".search-panel").forEach(p => {
        if (p.id === targetPanelId) {
          p.removeAttribute("hidden");
          p.classList.add("active");
        } else {
          p.setAttribute("hidden", "true");
          p.classList.remove("active");
        }
      });
    });
  });

  // Browse files text button
  const browseFilesBtn = document.getElementById("browse-files-btn");
  const fileInput = document.getElementById("dish-file-input");
  if (browseFilesBtn && fileInput) {
    browseFilesBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      fileInput.click();
    });
  }

  // Back to search selection
  const backToSearchBtn = document.getElementById("back-to-search-btn");
  if (backToSearchBtn) {
    backToSearchBtn.addEventListener("click", () => {
      const searchHub = document.getElementById("investigation-search-hub");
      const dashView = document.getElementById("investigation-dashboard");
      if (dashView) dashView.setAttribute("hidden", "true");
      if (searchHub) searchHub.removeAttribute("hidden");
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Save dish buttons
  const saveDishBtn = document.getElementById("save-dish-btn");
  const dossierSaveBtn = document.getElementById("dossier-save-btn");
  if (saveDishBtn) {
    saveDishBtn.addEventListener("click", () => {
      if (AppState.activeDish) toggleSaveDish(AppState.activeDish);
    });
  }
  if (dossierSaveBtn) {
    dossierSaveBtn.addEventListener("click", () => {
      if (AppState.activeDish) toggleSaveDish(AppState.activeDish);
    });
  }

  // Clear Saved & History
  const clearSavedBtn = document.getElementById("clear-saved-btn");
  if (clearSavedBtn) {
    clearSavedBtn.addEventListener("click", () => {
      if (AppState.savedDishes.length === 0) return;
      showConfirmModal("Clear All Saved Dishes?", "This will remove all your saved dish profiles from this device.", () => {
        AppState.savedDishes = [];
        persistSaved();
        renderSavedDishes();
        showToast("All saved dishes cleared.");
      });
    });
  }

  const clearHistoryBtn = document.getElementById("clear-history-btn");
  if (clearHistoryBtn) {
    clearHistoryBtn.addEventListener("click", () => {
      if (AppState.history.length === 0) return;
      showConfirmModal("Clear All History?", "This will delete all past investigation logs from this device.", () => {
        AppState.history = [];
        persistHistory();
        renderHistory();
        showToast("Investigation history cleared.");
      });
    });
  }

  // Reset search filter buttons
  const resetBtn = document.getElementById("reset-search-filter-btn");
  const browseAllBtn = document.getElementById("browse-all-dishes-btn");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      if (searchInput) searchInput.value = "";
      executeSearch("");
    });
  }
  if (browseAllBtn) {
    browseAllBtn.addEventListener("click", () => {
      if (searchInput) searchInput.value = "";
      executeSearch("");
    });
  }

  // Clear recent searches
  const clearRecentBtn = document.getElementById("clear-recent-btn");
  if (clearRecentBtn) {
    clearRecentBtn.addEventListener("click", () => {
      localStorage.removeItem("dish_detective_recents");
      renderRecentSearches();
    });
  }

  // Share profile
  function handleShare() {
    if (!AppState.activeDish) return;
    const shareData = {
      title: `${AppState.activeDish.name} — Dish Detective Profile`,
      text: `Check out the complete plate anatomy and flavor profile for ${AppState.activeDish.name} on Dish Detective!`,
      url: window.location.href
    };
    if (navigator.share) {
      navigator.share(shareData).catch(() => {});
    } else {
      navigator.clipboard.writeText(`${shareData.title}\n${shareData.text}\n${shareData.url}`).then(() => {
        showToast("Dish profile link copied to clipboard!");
      });
    }
  }

  const shareBtn = document.getElementById("share-profile-btn");
  const dossierShareBtn = document.getElementById("dossier-share-btn");
  if (shareBtn) shareBtn.addEventListener("click", handleShare);
  if (dossierShareBtn) dossierShareBtn.addEventListener("click", handleShare);

  const anotherBtn = document.getElementById("dossier-investigate-another-btn");
  if (anotherBtn) {
    anotherBtn.addEventListener("click", () => {
      const searchHub = document.getElementById("investigation-search-hub");
      const dashView = document.getElementById("investigation-dashboard");
      if (dashView) dashView.setAttribute("hidden", "true");
      if (searchHub) searchHub.removeAttribute("hidden");
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  const printBtn = document.getElementById("dossier-print-btn");
  if (printBtn) {
    printBtn.addEventListener("click", () => {
      window.print();
    });
  }

  // Initial loads
  renderRecentSearches();
  renderDishesCatalog();
  renderSavedDishes();
  renderHistory();
});
