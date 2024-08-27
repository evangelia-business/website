# SEO Architecture for Next.js 14.2.5 (App Router with TypeScript)

## 1. **Metadata and Meta Tags**

- **Dynamic Metadata**: Utilize the `metadata` API in the App Router to define metadata dynamically based on the page's content.
- **Canonical Tags**: Set canonical URLs to prevent duplicate content issues. This ensures that search engines understand the primary version of the page.
- **Open Graph Tags**: Implement Open Graph tags for better social media integration, allowing platforms like Facebook and LinkedIn to display rich content when the links are shared.
- **Twitter Cards**: Use Twitter card meta tags to control how the content is displayed on Twitter/X.

```typescript
// Example: src/app/layout.tsx
export const metadata = {
  title: 'My Awesome Site',
  description: 'A description for search engines',
  openGraph: {
    title: 'My Awesome Site',
    description: 'A description for social media previews',
    url: 'https://example.com',
    images: [
      {
        url: 'https://example.com/og-image.jpg',
        width: 800,
        height: 600,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@site_account',
    creator: '@creator_account',
  },
}
```

## 2. **Sitemap and Robots.txt**

- **Sitemap Generation**: Create a `sitemap.ts` file in the `/app` directory that dynamically generates a sitemap based on the routes.
- **Robots.txt**: Implement a `robots.txt` file to manage the crawling behavior of search engines.

```typescript
// Example: src/app/sitemap.ts
export default async function generateSitemap() {
  const routes = await getRoutes() // Function to fetch your routes dynamically
  return [
    '/page-1',
    '/page-2',
    // Additional pages
  ].map((route) => `https://example.com${route}`)
}
```

## 3. **Performance Optimization**

- **Lazy Loading and Code Splitting**: Ensure components are lazy-loaded where appropriate to reduce initial load times.
- **Minification**: Leverage Next.js built-in HTML and CSS minification to decrease page size and improve loading speed.
- **Caching Strategies**: Use Next.js caching features, such as Incremental Static Regeneration (ISR), to serve pages faster.

## 4. **Accessibility and Internationalization**

- **ARIA Tags**: Implement ARIA tags to improve accessibility, ensuring the site is usable by everyone, including those with disabilities.
- **i18n**: Set up internationalization (i18n) to support multiple languages, which can help with global SEO.

```typescript
// Example: next.config.mjs for i18n setup
module.exports = {
  i18n: {
    locales: ['en-US', 'de', 'gr'],
    defaultLocale: 'en-US',
  },
}
```

## 5. **Analytics Integration**

- **Google Analytics**: Integrate Google Analytics to track user behavior and gather insights into the site's performance.
- **Search Console**: Submit the sitemap to Google Search Console for better indexing and monitoring.

## 6. **Content Structure and Schema Markup**

- **Structured Data**: Add JSON-LD schema markup to the pages to help search engines understand the content better.
- **Headings Structure**: Maintain a clear and logical heading structure (H1, H2, etc.) across all pages.

```typescript
// Example: Adding JSON-LD in layout.tsx
export const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  url: 'https://example.com',
  name: 'Example',
}
```

## 7. **Error Handling and Monitoring**

- **Custom Error Pages**: Implement custom 404 and 500 pages to handle errors gracefully and improve user experience.
- **Logging**: Set up logging for SEO-related errors, such as missing metadata or broken links.

## 8. **Use a central repository for all the relevant Information to save once and use many**

siteMetaData.mjs

```mjs
const baseURL = process.env.NEXT_BASE_URL

const siteMetadata = {
  title: 'Main page title',
  siteName: 'xxxxx',
  author: 'xxxxxx',
  headerTitle: 'xxxxxx',
  description: 'xxxxxxxxx',
  keywords: 'xxxxxxxxxxxxxx',
  language: 'en-US',
  theme: 'system', // system, dark or light
  siteUrl: baseURL, // your website URL
  lastModified: '2024-04-27',
  siteLogo: '/logo.png',
  socialBanner: '/social-banner.png', // add social banner in the public folder
  email: 'contact@xxx.xxx',
  github: 'https://github.com/xxxx',
  twitter: 'https://twitter.com/xxxxx',
  facebook: 'https://facebook.com/xxxx',
  instagram: 'https://www.instagram.com/xxxxx',
  youtube: 'https://youtube.com/xxxx',
  linkedin: 'https://www.linkedin.com/in/xxxxx',
  //dribbble: "https://www.dribbble.com",
  locale: 'de-DE',
}
export default siteMetadata
```
