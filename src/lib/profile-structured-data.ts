import { absoluteUrl, site } from './site';

export const profileStructuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': absoluteUrl('/#website'),
      url: absoluteUrl('/'),
      name: site.name,
      inLanguage: 'en',
      creator: { '@id': absoluteUrl('/#person') },
    },
    {
      '@type': 'ProfilePage',
      '@id': absoluteUrl('/#profile'),
      url: absoluteUrl('/'),
      name: site.title,
      description: site.description,
      inLanguage: 'en',
      isPartOf: { '@id': absoluteUrl('/#website') },
      mainEntity: { '@id': absoluteUrl('/#person') },
    },
    {
      '@type': 'Person',
      '@id': absoluteUrl('/#person'),
      name: site.name,
      url: absoluteUrl('/'),
      jobTitle: site.jobTitle,
      sameAs: [
        'https://www.linkedin.com/in/ivan-reshevskyi-2639b6a8/',
        'https://github.com/vanokk',
        'https://www.instagram.com/ivanreshevskii/',
      ],
    },
  ],
};
