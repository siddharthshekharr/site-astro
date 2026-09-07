// RSS feed of published posts at /feed.xml.
import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE, url } from '../lib/site';

export async function GET(context) {
  const posts = (await getCollection('blog', (e) => !e.data.draft))
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
  return rss({
    title: SITE.name,
    description: SITE.description,
    // Channel URL includes the base path; item links are base-prefixed too.
    site: new URL(import.meta.env.BASE_URL, context.site).href,
    items: posts.map((p) => ({
      title: p.data.title,
      pubDate: p.data.date,
      description: p.data.description,
      link: url(`/blog/${p.id}/`),
    })),
  });
}
