import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  noindex?: boolean;
  canonical?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = 'NeuroFlow - Marketing Digital & Intelligence Artificielle | Paris',
  description = 'Agence de marketing digital spécialisée en intelligence artificielle. SEO IA, publicité Meta Ads, growth hacking et analytics prédictive pour propulser votre croissance.',
  keywords = 'marketing digital, intelligence artificielle, SEO IA, publicité Meta Ads, growth hacking, copywriting IA, analytics prédictive, automatisation marketing',
  image = 'https://neuroflow.ai/og-image.jpg',
  url = 'https://neuroflow.ai',
  type = 'website',
  noindex = false,
  canonical
}) => {
  const siteTitle = 'NeuroFlow';
  const fullTitle = title.includes(siteTitle) ? title : `${title} | ${siteTitle}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="format-detection" content="telephone=no" />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="NeuroFlow" />
      <meta httpEquiv="x-dns-prefetch-control" content="on" />
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Robots */}
      {noindex && <meta name="robots" content="noindex,nofollow" />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:locale" content="fr_FR" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      <meta property="twitter:creator" content="@neuroflow_ai" />
      
      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#00ffff" />
      <meta name="msapplication-TileColor" content="#000000" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "NeuroFlow",
          "description": description,
          "url": "https://neuroflow.ai",
          "logo": "https://neuroflow.ai/logo.svg",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+33123456789",
            "contactType": "customer service",
            "email": "contact@neuroflow.ai",
            "availableLanguage": "French"
          },
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "42 Avenue des Champs-Élysées",
            "addressLocality": "Paris",
            "postalCode": "75008",
            "addressCountry": "FR"
          },
          "sameAs": [
            "https://www.linkedin.com/company/neuroflow",
            "https://twitter.com/neuroflow_ai",
            "https://www.facebook.com/neuroflow.ai",
            "https://www.instagram.com/neuroflow.ai"
          ],
          "foundingDate": "2020",
          "numberOfEmployees": "15",
          "industry": "Marketing Digital",
          "services": [
            "SEO Intelligence Artificielle",
            "Publicité Meta Ads",
            "Growth Hacking",
            "Copywriting IA",
            "Analytics Prédictive",
            "Automatisation Marketing"
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEO;