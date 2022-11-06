import { darkMode } from '@/components/system/sprinkles.css'
import '@/styles/global.css'
import { responsiveStyle } from '@/styles/themeUtils'
import { vars } from '@/styles/themes.css'
import { createVar, style } from '@vanilla-extract/css'

export const shadowColorVar = createVar()

export const installBlock = style({
  selectors: {
    [`:not(.${darkMode}) &`]: {
      filter: 'saturate(0.6)',
    },
  },
})

export const featureKeyLine = style({
  transform: 'skew(15deg)',
  ...responsiveStyle({
    mobile: { height: vars.text.standard.mobile.lineHeight },
    desktop: { height: vars.text.standard.desktop.lineHeight },
  }),
})

export const skewedContainer = style({
  // background: vars.themeColors.primary,
  ':after': {
    content: '""',
    position: 'absolute',
    zIndex: -1,
    left: 0,
    right: 0,
    height: '170px',
    // background: 'inherit',
    clipPath: 'polygon(0 0,100% 0,100% 60%,0 100%)',
  },
})

export const footerLayout = style([
  {
    '@media': {
      [`screen and (min-width: 480px)`]: {
        flexBasis: '50%',
      },
    },
  },
  responsiveStyle({
    mobile: { flexBasis: '100%' },
    tablet: { flexBasis: '33%' },
    desktop: { flexBasis: '25%' },
  }),
])
