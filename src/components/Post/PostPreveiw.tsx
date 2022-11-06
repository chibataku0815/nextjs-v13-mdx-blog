import { Box } from '@/components/Box'
import DateFormatter from '@/components/DateFotmatter'
import LinkComponent from '@/components/Typography/Link'
import Text from '@/components/Typography/Text'
import { PostMeta } from '@/interface/post'
import { card } from './Post.css'

const PostPreview = (props: PostMeta) => {
  const { slug, title, date } = props
  return (
    <Box className={card} padding="xlarge" borderRadius="small">
      <Box paddingBottom={'large'}>
        <LinkComponent
          color="link"
          underline="never"
          weight="strong"
          href={`/posts/${slug}`}
        >
          {title}
        </LinkComponent>
      </Box>
      {/* <Avatar name={author.name} picture={author.picture} /> */}
      <Box paddingTop={'xxlarge'}>
        <Text size="small">
          <DateFormatter dateString={date} />
        </Text>
      </Box>
    </Box>
  )
}

export default PostPreview
