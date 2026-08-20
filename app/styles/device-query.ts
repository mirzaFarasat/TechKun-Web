export const deviceBreakpoint = {
    mobileS: 320,
    mobileM: 375,
    mobileL: 425,
    tablet: 768,
    laptop: 1024,
    laptopL: 1440,
    desktop: 2560
};

export const deviceQuery = {
    mobileS: `(min-width: ${deviceBreakpoint.mobileS / 16}rem)`,
    mobileM: `(min-width: ${deviceBreakpoint.mobileM / 16}rem)`,
    mobileL: `(min-width: ${deviceBreakpoint.mobileL / 16}rem)`,
    tablet: `(min-width: ${deviceBreakpoint.tablet / 16}rem)`,
    laptop: `(min-width: ${deviceBreakpoint.laptop / 16}rem)`,
    laptopL: `(min-width: ${deviceBreakpoint.laptopL / 16}rem)`,
    desktop: `(min-width: ${deviceBreakpoint.desktop / 16}rem)`,
};