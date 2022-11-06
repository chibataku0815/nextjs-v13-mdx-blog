
import { Box } from '../Box'
import PostPreview from '../Post/PostPreveiw'
import * as styles from './MoreStories.css'
import { PostMeta } from '@/interface/post'

type Props = {
  posts: PostMeta[]
}

const MoreStories = ({posts}: Props) => {
  return (
    <Box className={styles.group}>
      {posts.map((post: PostMeta) => (
        <PostPreview
          key={post.slug}
          {...post}
        />
      ))}
    </Box>
  )
}

export default MoreStories
