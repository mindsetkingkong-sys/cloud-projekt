export type ConfiguratorOption = {
  id: string;
  label: string;
  image: string | null;
  priceDelta: number;
  swatchColor: string;
  thumb?: string;
};

export type ConfiguratorCategory = {
  id: string;
  label: string;
  options: ConfiguratorOption[];
};

export const KITCHEN_LINE = {
  id: "port-xxl",
  name: "Port XXL",
  basePrice: 23000,
};

export const CATEGORIES: ConfiguratorCategory[] = [
  {
    id: "casing",
    label: "Gehäusefarbe",
    options: [
      { id: "anthracite_grey", label: "Anthrazitgrau", image: "/kitchen/casing/anthracite_grey.webp", priceDelta: 0, swatchColor: "#3c4145", thumb: "/kitchen/casing/thumbs/anthracite_grey.webp" },
      { id: "apollo_brushed_metallic", label: "Apollo Brushed Metallic", image: "/kitchen/casing/apollo_brushed_metallic.webp", priceDelta: 0, swatchColor: "#9a958c", thumb: "/kitchen/casing/thumbs/apollo_brushed_metallic.webp" },
      { id: "grey_metallic", label: "Grau Metallic", image: "/kitchen/casing/grey_metallic.webp", priceDelta: 0, swatchColor: "#8b8d8f", thumb: "/kitchen/casing/thumbs/grey_metallic.webp" },
      { id: "dark_grey", label: "Dunkelgrau", image: "/kitchen/casing/dark_grey.webp", priceDelta: 0, swatchColor: "#55585c", thumb: "/kitchen/casing/thumbs/dark_grey.webp" },
      { id: "silver_metallic", label: "Silber Metallic", image: "/kitchen/casing/silver_metallic.webp", priceDelta: 0, swatchColor: "#b7b9bb", thumb: "/kitchen/casing/thumbs/silver_metallic.webp" },
      { id: "black", label: "Schwarz", image: "/kitchen/casing/black.webp", priceDelta: 0, swatchColor: "#16171a", thumb: "/kitchen/casing/thumbs/black.webp" },
      { id: "white", label: "Weiß", image: "/kitchen/casing/white.webp", priceDelta: 0, swatchColor: "#f2f1ee", thumb: "/kitchen/casing/thumbs/white.webp" },
      { id: "carbon", label: "Carbon", image: "/kitchen/casing/carbon.webp", priceDelta: 0, swatchColor: "#23262b", thumb: "/kitchen/casing/thumbs/carbon.webp" },
      { id: "wood_line", label: "Wood-Line", image: "/kitchen/casing/wood_line.webp", priceDelta: 0, swatchColor: "#7a5a3a", thumb: "/kitchen/casing/thumbs/wood_line.webp" },
    ],
  },
  {
    id: "fronts",
    label: "Schrankfronten",
    options: [
      { id: "anthracite", label: "Anthrazit", image: "/kitchen/fronts/Front_anthracite.png", priceDelta: 0, swatchColor: "#34383b", thumb: "/kitchen/fronts/thumbs/anthracite.webp" },
      { id: "anthracite_grey", label: "Anthrazitgrau", image: "/kitchen/fronts/Front_Antracyte_Grey.png", priceDelta: 0, swatchColor: "#3c4145", thumb: "/kitchen/fronts/thumbs/anthracite_grey.webp" },
      { id: "apollo_brushed_metallic", label: "Apollo Brushed Metallic", image: "/kitchen/fronts/Front_Apollo_Brushed_Metallic.png", priceDelta: 0, swatchColor: "#9a958c", thumb: "/kitchen/fronts/thumbs/apollo_brushed_metallic.webp" },
      { id: "black_glass", label: "Schwarzglas", image: "/kitchen/fronts/Front_Black_glass.png", priceDelta: 0, swatchColor: "#0e0f11", thumb: "/kitchen/fronts/thumbs/black_glass.webp" },
      { id: "black_shimmer", label: "Black Shimmer", image: "/kitchen/fronts/Front_Black_shimmer-1.png", priceDelta: 0, swatchColor: "#1c1d20", thumb: "/kitchen/fronts/thumbs/black_shimmer.webp" },
      { id: "copper", label: "Kupfer", image: "/kitchen/fronts/Front_COPPER.png", priceDelta: 0, swatchColor: "#b56a41", thumb: "/kitchen/fronts/thumbs/copper.webp" },
      { id: "carbon", label: "Carbon", image: "/kitchen/fronts/Front_Carbon.png", priceDelta: 0, swatchColor: "#23262b", thumb: "/kitchen/fronts/thumbs/carbon.webp" },
      { id: "dark_grey", label: "Dunkelgrau", image: "/kitchen/fronts/Front_Dark_Grey.png", priceDelta: 0, swatchColor: "#55585c", thumb: "/kitchen/fronts/thumbs/dark_grey.webp" },
      { id: "grey_metallic", label: "Grau Metallic", image: "/kitchen/fronts/Front_Grey_Metallic.png", priceDelta: 0, swatchColor: "#8b8d8f", thumb: "/kitchen/fronts/thumbs/grey_metallic.webp" },
      { id: "iron_grey", label: "Eisengrau", image: "/kitchen/fronts/Front_Iron_Grey.png", priceDelta: 0, swatchColor: "#6e7175", thumb: "/kitchen/fronts/thumbs/iron_grey.jpg" },
      { id: "silver_galaxy", label: "Silver Galaxy", image: "/kitchen/fronts/Front_SILVER_GALAXY.png", priceDelta: 0, swatchColor: "#c7c9cb", thumb: "/kitchen/fronts/thumbs/silver_galaxy.webp" },
      { id: "silver_shine", label: "Silver Shine", image: "/kitchen/fronts/Front_SILVER_SHINE.png", priceDelta: 0, swatchColor: "#d5d6d7", thumb: "/kitchen/fronts/thumbs/silver_shine.webp" },
      { id: "silver_metallic", label: "Silber Metallic", image: "/kitchen/fronts/Front_Silver_Metallic.png", priceDelta: 0, swatchColor: "#b7b9bb", thumb: "/kitchen/fronts/thumbs/silver_metallic.webp" },
      { id: "arctic_storm", label: "Arctic Storm", image: "/kitchen/fronts/Front_artcic_storm.png", priceDelta: 0, swatchColor: "#cfd3d4", thumb: "/kitchen/fronts/thumbs/arctic_storm.webp" },
      { id: "light_aluminium", label: "Helles Aluminium", image: "/kitchen/fronts/Fronty_light_aluminium.png", priceDelta: 0, swatchColor: "#c9cac8", thumb: "/kitchen/fronts/thumbs/light_aluminium.webp" },
      { id: "white", label: "Weiß", image: "/kitchen/fronts/Fronty_white..png", priceDelta: 0, swatchColor: "#f2f1ee", thumb: "/kitchen/fronts/thumbs/white.webp" },
    ],
  },
  {
    id: "countertops",
    label: "Arbeitsplatte",
    options: [
      { id: "astoria_gold", label: "Astoria Gold", image: "/kitchen/countertops/Blat_ASTORIA_GOLD.png", priceDelta: 0, swatchColor: "#c9a15a", thumb: "/kitchen/countertops/thumbs/astoria_gold.webp" },
      { id: "crystal_absolute_black", label: "Crystal Absolute Black", image: "/kitchen/countertops/Blat_CRYSTAL_ABSOLUTE_BLACK-1.png", priceDelta: 0, swatchColor: "#17181a", thumb: "/kitchen/countertops/thumbs/crystal_absolute_black.webp" },
      { id: "crystal_calacatta_amnis", label: "Crystal Calacatta Amnis", image: "/kitchen/countertops/Blat_CRYSTAL_CALACATTA_AMNIS.png", priceDelta: 0, swatchColor: "#e7e2d6", thumb: "/kitchen/countertops/thumbs/crystal_calacatta_amnis.webp" },
      { id: "colonial_cream", label: "Colonial Cream", image: "/kitchen/countertops/Blat_Colonial_cream.png", priceDelta: 0, swatchColor: "#d9c9a8", thumb: "/kitchen/countertops/thumbs/colonial_cream.webp" },
      { id: "crystal_absolute_white", label: "Crystal Absolute White", image: "/kitchen/countertops/Blat_Crystal_Absolute_White.png", priceDelta: 0, swatchColor: "#efece4", thumb: "/kitchen/countertops/thumbs/crystal_absolute_white.webp" },
      { id: "forest_black", label: "Forest Black", image: "/kitchen/countertops/Blat_FOREST_BLACK.png", priceDelta: 0, swatchColor: "#1c1f1c", thumb: "/kitchen/countertops/thumbs/forest_black.webp" },
      { id: "gobi_urban", label: "Gobi Urban", image: "/kitchen/countertops/Blat_Gobi_Urban.png", priceDelta: 0, swatchColor: "#b8ab95", thumb: "/kitchen/countertops/thumbs/gobi_urban.webp" },
      { id: "metropolis_steel", label: "Metropolis Steel", image: "/kitchen/countertops/Blat_METROPOLIS_STEEL.png", priceDelta: 0, swatchColor: "#7b7d7e", thumb: "/kitchen/countertops/thumbs/metropolis_steel.webp" },
      { id: "noble_athos_brown", label: "Noble Athos Brown", image: "/kitchen/countertops/Blat_Noble_Athos_Brown.png", priceDelta: 0, swatchColor: "#6b503c", thumb: "/kitchen/countertops/thumbs/noble_athos_brown.webp" },
      { id: "star_galaxy", label: "Star Galaxy", image: "/kitchen/countertops/Blat_STAR_GALAXY.png", priceDelta: 0, swatchColor: "#232322", thumb: "/kitchen/countertops/thumbs/star_galaxy.webp" },
      { id: "viscount_white", label: "Viscount White", image: "/kitchen/countertops/Blat_VISCOUNT_WHITE.png", priceDelta: 0, swatchColor: "#e4e1d8", thumb: "/kitchen/countertops/thumbs/viscount_white.webp" },
      { id: "nero_zimbabwe", label: "Nero Zimbabwe", image: "/kitchen/countertops/Blat_nero_zimbabwe.png", priceDelta: 0, swatchColor: "#201f1e", thumb: "/kitchen/countertops/thumbs/nero_zimbabwe.webp" },
    ],
  },
];

export const BACKGROUND_IMAGE = "/kitchen/background/tlo-kuchnia-dzien-01.jpg";

export const LED_COLORS: { id: string; label: string; image: string }[] = [
  { id: "white", label: "Weiß", image: "/kitchen/led/Glare_Bialy.png" },
  { id: "red", label: "Rot", image: "/kitchen/led/Glare_Czerwony.png" },
  { id: "blue", label: "Blau", image: "/kitchen/led/Glare_Niebieski.png" },
  { id: "orange", label: "Orange", image: "/kitchen/led/Glare_Pomaranczowy.png" },
  { id: "pink", label: "Pink", image: "/kitchen/led/Glare_Rozowy.png" },
  { id: "green", label: "Grün", image: "/kitchen/led/Glare_Zielony.png" },
];

export const LED_PRICE_DELTA = 490;

export type Addon = { id: string; label: string; priceDelta: number };

export const ADDONS: Addon[] = [
  { id: "audio", label: "Audiosystem", priceDelta: 890 },
  { id: "grillZubehoer", label: "Grillzubehör-Set", priceDelta: 350 },
  { id: "besteck", label: "Besteck-Set", priceDelta: 190 },
  { id: "montage", label: "Montage vor Ort", priceDelta: 1200 },
];

export const TRANSPORT_FLAT_FEE = 350;

export function isValidPlz(plz: string): boolean {
  return /^\d{5}$/.test(plz.trim());
}

export type KitchenFormat = {
  id: string;
  label: string;
  widthCm: number;
  depthCm: number;
  heightCm: number;
  priceDelta: number;
  hasPreviewImage: boolean;
};

export const FORMATS: KitchenFormat[] = [
  { id: "l", label: "L", widthCm: 241, depthCm: 98, heightCm: 234, priceDelta: 0, hasPreviewImage: false },
  { id: "xl", label: "XL", widthCm: 307, depthCm: 98, heightCm: 234, priceDelta: 0, hasPreviewImage: false },
  { id: "xxl", label: "XXL", widthCm: 366, depthCm: 98, heightCm: 234, priceDelta: 0, hasPreviewImage: true },
];

export const DEFAULT_FORMAT = "xxl";

export function findFormat(formatId: string): KitchenFormat | undefined {
  return FORMATS.find((f) => f.id === formatId);
}

export type Selections = Record<string, string> & { format: string; ledOn: string; plz: string };

export const DEFAULT_SELECTIONS: Selections = {
  format: DEFAULT_FORMAT,
  ledOn: "off",
  plz: "",
  ...Object.fromEntries(ADDONS.map((addon) => [addon.id, "off"])),
  ...Object.fromEntries(CATEGORIES.map((category) => [category.id, category.options[0].id])),
};

export function findOption(categoryId: string, optionId: string): ConfiguratorOption | undefined {
  return CATEGORIES.find((c) => c.id === categoryId)?.options.find((o) => o.id === optionId);
}

export function calculateTotalPrice(selections: Selections): number {
  let total = KITCHEN_LINE.basePrice;
  const format = findFormat(selections.format);
  if (format) total += format.priceDelta;
  for (const category of CATEGORIES) {
    const option = findOption(category.id, selections[category.id]);
    if (option) total += option.priceDelta;
  }
  if (selections.ledOn === "on") total += LED_PRICE_DELTA;
  for (const addon of ADDONS) {
    if (selections[addon.id] === "on") total += addon.priceDelta;
  }
  if (isValidPlz(selections.plz)) total += TRANSPORT_FLAT_FEE;
  return total;
}
