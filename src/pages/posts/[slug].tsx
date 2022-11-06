import { Box } from '@/components/Box'
import { ColorModeToggle } from '@/components/ColorModeToggle/ColorModeToggle'
import { ContentBlock } from '@/components/ContentBlock/ContentBlock'
import MDX from '@/components/MDX/MDX'
import PostTitle from '@/components/Post/PostTitle'
import Layout from '@/components/templates/layout'
import { Heading } from '@/components/Typography/Heading'
import Text from '@/components/Typography/Text'
import { PostMeta } from '@/interface/post'
import { getPostFromSlug, getSlugs } from '@/lib/api'
import { GetStaticPaths, GetStaticProps } from 'next'
import { MDXRemoteSerializeResult } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import Head from 'next/head'
import { useRouter } from 'next/router'
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypeHighlight from "rehype-highlight"
import rehypeSlug from "rehype-slug"

interface MDXPost {
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
  meta: PostMeta;
}

export default function Post({ source, meta }: MDXPost) {
  const router = useRouter()

  // if (!router.isFallback && !post?.slug) {
  //   return <ErrorPage statusCode={404} />
  // }

  return (
    <Layout>
      <Head>
        <title>Forestone log</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ContentBlock
        size={{ mobile: 'standard', desktop: 'xxlarge' }}
        withGutters
      >
        <Box position="relative">
          <Box
            display="flex"
            justifyContent="flex-end"
            padding={{
              mobile: 'large',
              tablet: 'none',
              desktop: 'large',
            }}
          >
            <ColorModeToggle />
          </Box>
        </Box>
      </ContentBlock>
      <ContentBlock size="xxlarge" withGutters>
        <Box
          display="flex"
          justifyContent="center"
          alignItems={'center'}
          flexDirection={'column'}
          padding="xxlarge"
        >
          <Box marginBottom={'large'}>
            {meta.tags.map(tag => (
              <Box key={tag}>
                <Text size='small' weight='strong'>
                  {tag}
                </Text>
              </Box>
            ))}
          </Box>
          <Heading level='2'>
            {meta.title}
          </Heading>
        </Box>


        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <Box padding={{ desktop: "xlarge" }}>
            <MDX source={source} />
          </Box>
        )}
      </ContentBlock>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string };

  const { content, meta } = getPostFromSlug(slug)
  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, {
          behavior: 'prepend',
          properties: {},// `a` 要素に付与する属性
          content: {
            type: 'element',
            tagName: 'span',
            properties: {
              className: ['icon-header-link']
            },
            children: [{
              type: 'text',
              value: '$'
            }]
          }
        }],
        rehypeHighlight,
      ],
    },
  });

  return { props: { source: mdxSource, meta } };
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getSlugs().map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
}
