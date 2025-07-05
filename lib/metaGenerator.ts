import type { Metadata } from 'next';
import { APP_DESCRIPTION, APP_NAME, BASE_URL, IS_FOLLOW, IS_INDEX } from '@/constants';

interface MetaGeneratorProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  siteName?: string;
  type?: 'website' | 'article' | 'profile';
  isIndex?: boolean;
  isFollow?: boolean;
}

export const metaGenerator = (params: MetaGeneratorProps): Metadata => {
  const title = params.title || APP_NAME || 'NO TITLE';
  const description = params.description || APP_DESCRIPTION || 'NO DESCRIPTION';
  const url = params.url || BASE_URL || 'http://localhost:3000';
  const siteName = params.siteName || APP_NAME || 'NO SITE NAME';
  const image = params.image || `${BASE_URL}/opengraph-image.png` || '';
  const type = params.type || 'website';
  const isIndex = params.isIndex || IS_INDEX || false;
  const isFollow = params.isFollow || IS_FOLLOW || false;

  const metadata: Metadata = {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName,
      locale: 'ja_JP',
      type,
      images: [
        {
          url: image || '',
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: image,
    },
    robots: {
      index: isIndex,
      follow: isFollow,
    },
  };

  return metadata;
};
