import { ReactNode } from 'react'
import * as styles from './Blockquote.css'
import { Box } from '@/components/Box'

const Blockquote = (props: { children: ReactNode }) => {
  return (
    <Box
      paddingX={{ mobile: 'large', tablet: 'xlarge' }}
      paddingY="xxlarge"
      position="relative"
      className={styles.root}
    >
      {props.children}
    </Box>
  )
}

export default Blockquote
