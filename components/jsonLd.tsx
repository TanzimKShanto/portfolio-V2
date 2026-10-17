export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://tanzimkshanto.dev/#person",
        name: "Tanzim Khan Shanto",
        givenName: "Tanzim Khan",
        familyName: "Shanto",
        jobTitle: "Full-Stack Developer",
        url: "https://tanzimkshanto.dev",
        sameAs: [
          "https://github.com/tanzimKshanto",
          "https://www.linkedin.com/in/tanzimKshanto/",
          "https://www.facebook.com/TanzimKShanto",
          "https://www.instagram.com/tanzimkshanto/",
        ],
        image: "https://tanzimkshanto.dev/images/self-photo.jpg",
      },
      {
        "@type": "WebSite",
        "@id": "https://tanzimkshanto.dev/#website",
        url: "https://tanzimkshanto.dev",
        name: "Tanzim Khan Shanto",
        description:
          "Full-stack developer building fast, type-safe web apps with Next.js, Astro, and Go.",
        inLanguage: "en-US",
        potentialAction: {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            urlTemplate:
              "https://tanzimkshanto.dev/?s={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
