import * as styles from './Divider.css'
import { Box } from '@/components/Box'

const Divider = () => {
  return (
    <Box
      component="hr"
      background={{ lightMode: 'pink400', darkMode: 'pink500' }}
      borderRadius="full"
      className={styles.root}
    />
  )
}

export default Divider
