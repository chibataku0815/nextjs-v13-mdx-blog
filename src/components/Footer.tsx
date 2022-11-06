import { Box } from '@/components/Box'
import { ContentBlock } from '@/components/ContentBlock/ContentBlock'
import Text from './Typography/Text'

function Footer() {
  return (
    <Box paddingBottom={'xlarge'}>
      <ContentBlock size={{ mobile: 'standard', desktop: 'xxlarge' }}>
        <Text align={'center'} size={'small'}>© 2016 Forestone. All rights reserved.</Text>
      </ContentBlock>
    </Box>
  )
}

export default Footer
