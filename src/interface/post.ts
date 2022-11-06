
type PostType = {
  meta: PostMeta;
  content: string;
}



export interface PostMeta {
  excerpt: string;
  slug: string;
  title: string;
  tags: string[];
  date: string;
}

export default PostType
