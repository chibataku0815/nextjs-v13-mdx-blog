import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { Box } from '../Box';
import { mdxComponents } from './MdxComponents';

interface MDXPost {
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
}

export default function MDX({ source }: MDXPost) {
  return (
    <Box padding={{ desktop: 'xxlarge', mobile: 'large' }} borderRadius='small' background={{ lightMode: 'stone50', darkMode: 'stone900'}} className='mdx'>
      <MDXRemote {...source} components={mdxComponents} />
    </Box>
  );
}
