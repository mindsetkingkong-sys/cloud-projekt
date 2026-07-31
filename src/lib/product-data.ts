export type ConfiguratorOption = {
  id: string;
  label: string;
  image: string | null;
  priceDelta: number;
  swatchColor: string;
};

export type ConfiguratorCategory = {
  id: string;
  label: string;
  options: ConfiguratorOption[];
};

export const KITCHEN_LINE = {
  id: "signature",
  name: "Grilluxe Signature",
  basePrice: 23000,
};

export const CATEGORIES: ConfiguratorCategory[] = [
  {
    id: "casing",
    label: "Gehäusefarbe",
    options: [
      { id: "anthracite_grey", label: "Anthrazitgrau", image: "/kitchen/casing/anthracite_grey.png", priceDelta: 0, swatchColor: "#3c4145" },
      { id: "apollo_brushed_metallic", label: "Apollo Brushed Metallic", image: "/kitchen/casing/apollo_brushed_metallic.png", priceDelta: 0, swatchColor: "#9a958c" },
      { id: "black", label: "Schwarz", image: "/kitchen/casing/black.png", priceDelta: 0, swatchColor: "#16171a" },
      { id: "carbon", label: "Carbon", image: "/kitchen/casing/carbon.png", priceDelta: 0, swatchColor: "#23262b" },
      { id: "dark_grey", label: "Dunkelgrau", image: "/kitchen/casing/dark_grey.png", priceDelta: 0, swatchColor: "#55585c" },
      { id: "grey_metallic", label: "Grau Metallic", image: "/kitchen/casing/grey_metallic.png", priceDelta: 0, swatchColor: "#8b8d8f" },
      { id: "iron_grey", label: "Eisengrau", image: "/kitchen/casing/iron_grey.png", priceDelta: 0, swatchColor: "#6e7175" },
      { id: "silver_metallic", label: "Silber Metallic", image: "/kitchen/casing/silver_metallic.png", priceDelta: 0, swatchColor: "#b7b9bb" },
      { id: "white", label: "Weiß", image: "/kitchen/casing/white.png", priceDelta: 0, swatchColor: "#f2f1ee" },
    ],
  },
  {
    id: "fronts",
    label: "Schrankfronten",
    options: [
      { id: "anthracite", label: "Anthrazit", image: "/kitchen/fronts/Front_anthracite.png", priceDelta: 0, swatchColor: "#34383b" },
      { id: "anthracite_grey", label: "Anthrazitgrau", image: "/kitchen/fronts/Front_Antracyte_Grey.png", priceDelta: 0, swatchColor: "#3c4145" },
      { id: "apollo_brushed_metallic", label: "Apollo Brushed Metallic", image: "/kitchen/fronts/Front_Apollo_Brushed_Metallic.png", priceDelta: 0, swatchColor: "#9a958c" },
      { id: "black_glass", label: "Schwarzglas", image: "/kitchen/fronts/Front_Black_glass.png", priceDelta: 0, swatchColor: "#0e0f11" },
      { id: "black_shimmer", label: "Black Shimmer", image: "/kitchen/fronts/Front_Black_shimmer-1.png", priceDelta: 0, swatchColor: "#1c1d20" },
      { id: "copper", label: "Kupfer", image: "/kitchen/fronts/Front_COPPER.png", priceDelta: 0, swatchColor: "#b56a41" },
      { id: "carbon", label: "Carbon", image: "/kitchen/fronts/Front_Carbon.png", priceDelta: 0, swatchColor: "#23262b" },
      { id: "dark_grey", label: "Dunkelgrau", image: "/kitchen/fronts/Front_Dark_Grey.png", priceDelta: 0, swatchColor: "#55585c" },
      { id: "grey_metallic", label: "Grau Metallic", image: "/kitchen/fronts/Front_Grey_Metallic.png", priceDelta: 0, swatchColor: "#8b8d8f" },
      { id: "iron_grey", label: "Eisengrau", image: "/kitchen/fronts/Front_Iron_Grey.png", priceDelta: 0, swatchColor: "#6e7175" },
      { id: "silver_galaxy", label: "Silver Galaxy", image: "/kitchen/fronts/Front_SILVER_GALAXY.png", priceDelta: 0, swatchColor: "#c7c9cb" },
      { id: "silver_shine", label: "Silver Shine", image: "/kitchen/fronts/Front_SILVER_SHINE.png", priceDelta: 0, swatchColor: "#d5d6d7" },
      { id: "silver_metallic", label: "Silber Metallic", image: "/kitchen/fronts/Front_Silver_Metallic.png", priceDelta: 0, swatchColor: "#b7b9bb" },
      { id: "arctic_storm", label: "Arctic Storm", image: "/kitchen/fronts/Front_artcic_storm.png", priceDelta: 0, swatchColor: "#cfd3d4" },
      { id: "light_aluminium", label: "Helles Aluminium", image: "/kitchen/fronts/Fronty_light_aluminium.png", priceDelta: 0, swatchColor: "#c9cac8" },
      { id: "white", label: "Weiß", image: "/kitchen/fronts/Fronty_white..png", priceDelta: 0, swatchColor: "#f2f1ee" },
    ],
  },
  {
    id: "countertops",
    label: "Arbeitsplatte",
    options: [
      { id: "astoria_gold", label: "Astoria Gold", image: "/kitchen/countertops/Blat_ASTORIA_GOLD.png", priceDelta: 0, swatchColor: "#c9a15a" },
      { id: "crystal_absolute_black", label: "Crystal Absolute Black", image: "/kitchen/countertops/Blat_CRYSTAL_ABSOLUTE_BLACK-1.png", priceDelta: 0, swatchColor: "#17181a" },
      { id: "crystal_calacatta_amnis", label: "Crystal Calacatta Amnis", image: "/kitchen/countertops/Blat_CRYSTAL_CALACATTA_AMNIS.png", priceDelta: 0, swatchColor: "#e7e2d6" },
      { id: "colonial_cream", label: "Colonial Cream", image: "/kitchen/countertops/Blat_Colonial_cream.png", priceDelta: 0, swatchColor: "#d9c9a8" },
      { id: "crystal_absolute_white", label: "Crystal Absolute White", image: "/kitchen/countertops/Blat_Crystal_Absolute_White.png", priceDelta: 0, swatchColor: "#efece4" },
      { id: "forest_black", label: "Forest Black", image: "/kitchen/countertops/Blat_FOREST_BLACK.png", priceDelta: 0, swatchColor: "#1c1f1c" },
      { id: "gobi_urban", label: "Gobi Urban", image: "/kitchen/countertops/Blat_Gobi_Urban.png", priceDelta: 0, swatchColor: "#b8ab95" },
      { id: "metropolis_steel", label: "Metropolis Steel", image: "/kitchen/countertops/Blat_METROPOLIS_STEEL.png", priceDelta: 0, swatchColor: "#7b7d7e" },
      { id: "noble_athos_brown", label: "Noble Athos Brown", image: "/kitchen/countertops/Blat_Noble_Athos_Brown.png", priceDelta: 0, swatchColor: "#6b503c" },
      { id: "star_galaxy", label: "Star Galaxy", image: "/kitchen/countertops/Blat_STAR_GALAXY.png", priceDelta: 0, swatchColor: "#232322" },
      { id: "viscount_white", label: "Viscount White", image: "/kitchen/countertops/Blat_VISCOUNT_WHITE.png", priceDelta: 0, swatchColor: "#e4e1d8" },
      { id: "nero_zimbabwe", label: "Nero Zimbabwe", image: "/kitchen/countertops/Blat_nero_zimbabwe.png", priceDelta: 0, swatchColor: "#201f1e" },
    ],
  },
  {
    id: "ledColor",
    label: "LED-Ambientelicht",
    options: [
      { id: "off", label: "Aus", image: null, priceDelta: 0, swatchColor: "transparent" },
      { id: "white", label: "Weiß", image: "/kitchen/led/Glare_Bialy.png", priceDelta: 0, swatchColor: "#ffffff" },
      { id: "red", label: "Rot", image: "/kitchen/led/Glare_Czerwony.png", priceDelta: 0, swatchColor: "#e0473f" },
      { id: "blue", label: "Blau", image: "/kitchen/led/Glare_Niebieski.png", priceDelta: 0, swatchColor: "#3f7fe0" },
      { id: "orange", label: "Orange", image: "/kitchen/led/Glare_Pomaranczowy.png", priceDelta: 0, swatchColor: "#e08a3f" },
      { id: "pink", label: "Pink", image: "/kitchen/led/Glare_Rozowy.png", priceDelta: 0, swatchColor: "#e05fa0" },
      { id: "green", label: "Grün", image: "/kitchen/led/Glare_Zielony.png", priceDelta: 0, swatchColor: "#4fae5c" },
    ],
  },
];

export const BACKGROUND_IMAGE = "/kitchen/background/tlo-kuchnia-dzien-01.jpg";

export type Selections = Record<string, string>;

export const DEFAULT_SELECTIONS: Selections = Object.fromEntries(
  CATEGORIES.map((category) => [category.id, category.options[0].id])
);

export function findOption(categoryId: string, optionId: string): ConfiguratorOption | undefined {
  return CATEGORIES.find((c) => c.id === categoryId)?.options.find((o) => o.id === optionId);
}

export function calculateTotalPrice(selections: Selections): number {
  let total = KITCHEN_LINE.basePrice;
  for (const category of CATEGORIES) {
    const option = findOption(category.id, selections[category.id]);
    if (option) total += option.priceDelta;
  }
  return total;
}
