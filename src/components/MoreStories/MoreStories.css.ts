import { style } from '@vanilla-extract/css'
import { queries } from '@/styles/themeUtils'
import { vars } from '@/styles/themes.css'

export const group = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(1, 1fr)',
  gap: vars.spacing.xlarge,
  '@media': {
    [queries.tablet]: {
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: vars.spacing.xlarge,
    },
    [queries.desktop]: {
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: vars.spacing.xxlarge,
    },
  },
})

export const box = style({
  width: '100%',
  height: '100px',
  backgroundColor: '#666',
})
