import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { site } from '../config/site';

export async function GET() {
  const posts = (await getCollection('news'))
    .filter((p) => p.data.lang === 'es' && !p.data.draft)
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());

  return rss({
    title: site.name,
    description: `Noticias de la ${site.name}`,
    site: `${site.url}${site.base}`,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.excerpt,
      link: `${site.base}/noticias/${post.id.replace('es/', '').replace(/\.md$/, '')}/`,
    })),
  });
}
