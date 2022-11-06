import { Box, BoxProps } from '@/components/Box';
import { vars } from '@/styles/themes.css';
import { MDXProvider } from '@mdx-js/react';
import { Props } from '@mdx-js/react/lib';
import dynamic from 'next/dynamic';
import { ReactNode } from 'react';
import Blockquote from '../Blockquote/Blockquote';
import Divider from '../Divider/Divider';
import { Heading } from '../Typography/Heading';
import Text, { TextStyles } from '../Typography/Text';

const Block = ({
  component,
  children,
  maxWidth = 'large',
  style,
  ...restProps
}: Omit<BoxProps, 'paddingBottom'>) => (
  <Box
    component={component}
    paddingBottom="xxlarge"
    {...restProps}
    maxWidth={maxWidth}
    style={{
      margin: '0 auto',
      ...style,
    }}
  >
    {children}
  </Box>
);

const RemoveNestedParagraphs = (props: JSX.IntrinsicAttributes & Props) => {
  return (
    <MDXProvider
      {...props}
      components={{
        p: (props: { children?: ReactNode }) => <Text>{props.children}</Text>,
      }}
    />
  )
}



export const mdxComponents = {
  SandpackComponent: dynamic(() => import('@/components/MDX/SandPackComponents')),
  p: (props: { children?: ReactNode }) => (
    <Block component="p">
      <Text>{props.children}</Text>
    </Block>
  ),
  h1: (props: { children?: ReactNode }) => (<Box marginY={'xxlarge'}><Heading level='1'>{props.children}</Heading></Box>),
  h2: (props: { children?: ReactNode }) => (<Box marginY={'xxlarge'}><Heading level='2'>{props.children}</Heading></Box>),
  h3: (props: { children?: ReactNode }) => (<Box marginY={'xxlarge'}><Heading level='3'>{props.children}</Heading></Box>),
  h4: (props: { children?: ReactNode }) => (<Box marginY={'xxlarge'}><Heading level='4'>{props.children}</Heading></Box>),
  blockquote: (props: { children?: ReactNode }) => (
    <Block component="blockquote">
      <RemoveNestedParagraphs>
        <Blockquote>{props.children}</Blockquote>
      </RemoveNestedParagraphs>
    </Block>
  ),
  th: (props: { children?: ReactNode }) => (<Text component="th" weight="strong">
    {props.children}
  </Text>),
  td: (props: { children?: ReactNode }) => (<Text component="td" weight="strong">
    {props.children}
  </Text>),
  hr: () => (
    <Block>
      <Divider />
    </Block>
  ),
  pre: (props: { children?: ReactNode }) => (
    <Block maxWidth="xlarge" component="pre">
      {props.children}
    </Block>
  ),
  ul: (props: { children?: ReactNode }) => (
    <Block
      component="ul"
      className={TextStyles({ baseline: false })}
      style={{
        listStyle: 'disc',
        paddingLeft: '2em',
        paddingRight: '1em',
        // margin: `calc(${vars.spacing.xlarge} * -1) auto 0`,
      }}
    >
      {props.children}
    </Block>
  ),
  ol: (props: { children?: ReactNode }) => (
    <Block
      component="ol"
      className={TextStyles({ baseline: false })}
      style={{
        listStyle: 'decimal',
        paddingLeft: '2em',
        paddingRight: '1em',
        margin: `calc(${vars.spacing.xlarge} * -1) auto 0`,
      }}
    >
      {props.children}

    </Block>
  ),
};
