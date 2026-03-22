import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  url?: string;
}

export function SEO({ title, description, keywords, url }: SEOProps) {
  const fullTitle = `${title} | Gaba Associates - Legal & Taxation Firm`;
  
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={`https://gabaassociates.com${url || ""}`} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`https://gabaassociates.com${url || ""}`} />
      
      {/* Schema.org for Local Business / Legal Service */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LegalService",
          "name": "Gaba Associates",
          "image": "https://gabaassociates.com/logo.png",
          "@id": "https://gabaassociates.com",
          "url": "https://gabaassociates.com",
          "telephone": "0124-2310100",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "429A/16, Civil Lines, Near Rajiv Chowk",
            "addressLocality": "Gurugram",
            "addressRegion": "Haryana",
            "postalCode": "122001",
            "addressCountry": "IN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 28.4595,
            "longitude": 77.0266
          },
          "founder": {
            "@type": "Person",
            "name": "Rajesh Gaba"
          },
          "priceRange": "$$"
        })}
      </script>
    </Helmet>
  );
}
