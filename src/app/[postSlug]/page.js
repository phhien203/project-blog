import { MDXRemote } from 'next-mdx-remote/rsc';
import dynamic from 'next/dynamic';

import BlogHero from '@/components/BlogHero';
import CodeSnippet from '@/components/CodeSnippet/CodeSnippet';
import { loadBlogPost } from '@/helpers/file-helpers';

import styles from './postSlug.module.css';
import { BLOG_TITLE } from '@/constants';

export async function generateMetadata({ params }) {
  const { frontmatter } = await loadBlogPost(params.postSlug);

  return {
    title: `${frontmatter.title} • ${BLOG_TITLE}`,
    description: frontmatter.abstract,
  };
}

async function BlogPost({ params }) {
  const { content, frontmatter } = await loadBlogPost(params.postSlug);

  return (
    <article className={styles.wrapper}>
      <BlogHero
        title={frontmatter.title}
        publishedOn={frontmatter.publishedOn}
      />

      <div className={styles.page}>
        <MDXRemote
          source={content}
          components={{
            pre: CodeSnippet,
            DivisionGroupsDemo: dynamic(() =>
              import('@/components/DivisionGroupsDemo/DivisionGroupsDemo')
            ),
          }}
        />
      </div>
    </article>
  );
}

export default BlogPost;
