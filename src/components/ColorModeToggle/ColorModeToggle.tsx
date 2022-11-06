import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import * as styles from './ColorModeToggle.css'
import { Box } from '@/components/Box'

export const ColorModeToggle = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <Box
      component="button"
      display="flex"
      alignItems="center"
      justifyContent="center"
      borderRadius="full"
      cursor="pointer"
      className={styles.root}
      title="Toggle colour mode"
      onClick={() => (theme === 'light' ? setTheme('dark') : setTheme('light'))}
    />
  )
}
