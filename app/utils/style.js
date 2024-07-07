export const media =  {
    desktop: 2080,
    laptop: 1680,
    tablet: 1040,
    mobile: 696,
    mobileS: 400,
}

export const numToPx = num => `${num}px`

export const pxToRem = px => `${px / 16}rem`

export const msToNum = msString => Number(msString.replace('ms', ''))