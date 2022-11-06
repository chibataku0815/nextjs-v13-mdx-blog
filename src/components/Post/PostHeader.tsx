import { Box } from '@/components/Box'
import DateFormatter from '@/components/DateFotmatter'
import Author from '@/interface/author'
import PostTitle from './PostTitle'

type Props = {
  title: string
  coverImage: string
  date: string
  author: Author
}

const PostHeader = ({ title, date }: Props) => {
  return (
    <>
      <Box paddingY="xxlarge">
        <PostTitle>{title}</PostTitle>
      </Box>
      <Box>
        <DateFormatter dateString={date} />
      </Box>
    </>
  )
}

export default PostHeader
