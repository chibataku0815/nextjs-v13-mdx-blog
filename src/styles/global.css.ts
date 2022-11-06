
import '@/components/system/reset.css'
import { darkMode } from '@/components/system/sprinkles.css'
import { globalStyle } from '@vanilla-extract/css'
import { vars } from './themes.css'


globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',
  margin: 0,
  padding: 0,
})

globalStyle('#app', {
  background: vars.palette.stone100,
})

globalStyle(`.${darkMode} #app`, {
  background: vars.palette.stone900,
  color: vars.palette.gray50,
  colorScheme: 'dark',
})

globalStyle(`.mdx`, {
  fontFamily: vars.fonts.body,
  letterSpacing: .4,
  color: vars.palette.gray600,
})
