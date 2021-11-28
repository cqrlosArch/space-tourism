const size = {
  xs: `320px`, // Default
  sm: `480px`, // Mobile-landscape (and larger)
  md: `768px`, // Tablet-portrait (and larger)
  lg: `992px`, // Tablet-landscape (and larger)
  xl: `1220px`, //Laptops (and langer)
};

export const device = {
  xs: `only screen and (min-width: ${size.xs})`,
  sm: `only screen and (min-width: ${size.sm})`,
  md: `only screen and (min-width: ${size.md})`,
  lg: `only screen and (min-width: ${size.lg})`,
  xl: `only screen and (min-width: ${size.xl})`,
};