// import markdownStyles from './markdown-styles.module.css'
import { MDXProvider } from '@mdx-js/react'
import { ReactNode } from 'react'
import { Heading } from '@/components/Typography/Heading'

type Props = {
  content: string
}



const PostBody = ({ content }: Props) => {

  function H1(props: {children?: ReactNode}) {
    return <Heading level='1'>{props.children}</Heading>
  }

  const components = {
    h1: H1,
  }


  return (
      <MDXProvider components={components}>
        {content}
      </MDXProvider>
  )
}

export default PostBody
