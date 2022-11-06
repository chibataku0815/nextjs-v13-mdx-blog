import { createVar, style } from '@vanilla-extract/css'
import { sprinkles } from '@/components/system/sprinkles.css'

export const shadowColorVar = createVar()

export const card = style([
  sprinkles({
    background: {
      lightMode: 'stone200',
      darkMode: 'stone800',
    },
  }),
  {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
])

export const cardTitle = style({
  textDecoration: 'none',
})

export const headingLink = style({
  display: 'flex',
  textDecoration: 'none',
})
