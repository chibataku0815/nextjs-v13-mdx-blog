import { Box, BoxProps } from '@/components/Box'
import { ReactNode } from 'react'
import * as styles from './ContentBlock.css'

export const ContentBlock = ({
  children,
  withGutters = false,
  size = 'standard',
}: {
  children: ReactNode
  withGutters?: boolean
  size?: BoxProps['maxWidth']
}) => {
  return (
    <Box
      maxWidth={size}
      className={styles.root}
      paddingX={
        withGutters
          ? { mobile: 'large', tablet: 'xlarge', desktop: 'xxlarge' }
          : undefined
      }
    >
      {children}
    </Box>
  )
}
