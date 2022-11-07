import { Box } from '@/components/Box'
import { sprinkles, Sprinkles } from '@/components/system/sprinkles.css'
import classnames from 'classnames'
import { ElementType, ReactNode } from 'react'
import * as styles from './typography.css'

const colorMap = {
  neutral: { lightMode: 'gray700', darkMode: 'stone500' },
  strong: { lightMode: 'gray900', darkMode: 'gray100' },
  code: { lightMode: 'stone200' },
  link: { lightMode: 'stone800', darkMode: 'stone100' },
  secondary: { lightMode: 'gray500', darkMode: 'gray400' },
  highlight: { lightMode: 'pink500' },
} as const

interface TextStyleProps {
  size?: keyof typeof styles.text
  color?: keyof typeof colorMap
  weight?: keyof typeof styles.weight
  align?: Sprinkles['textAlign']
  baseline?: boolean
  display?:  'block'
  type?: Exclude<keyof typeof styles.font, 'brand' | 'heading'>
}

export interface TextProps extends TextStyleProps {
  component?: ElementType
  children: ReactNode
}

export const TextStyles = ({
  size = 'standard',
  color = 'neutral',
  weight = 'regular',
  type = 'body',
  align,
  baseline = true,
}: TextStyleProps) =>
  classnames(
    styles.font[type],
    baseline ? styles.text[size].trimmed : styles.text[size].untrimmed,
    sprinkles({ color: colorMap[color], textAlign: align }),
    styles.weight[weight]
  )

const Text = ({
  component = 'span',
  size,
  color,
  weight,
  align,
  baseline = false,
  type,
  display,
  children,
}: TextProps) => {
  return (
    <Box
      component={component}
      display={display}
      className={TextStyles({ size, color, weight, type, align, baseline })}
    >
      {children}
    </Box>
  )
}

export default Text
