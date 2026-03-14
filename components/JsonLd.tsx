import Script from "next/script";

export default function JsonLd() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Nworah Ebuka Augustus",
    "jobTitle": "Senior Software Architect",
    "url": "https://nworahebuka.nworahsoft.codes",
    "sameAs": [
      "https://github.com/King-Austin",
      "https://linkedin.com/in/amkingaustin",
      "https://x.com/KingAustin360",
      "https://www.facebook.com/nworah.ebuka.5"
    ],
    "knowsAbout": [
      "Software Architecture",
      "Backend Engineering",
      "Python",
      "Django",
      "Distributed Systems",
      "Cybersecurity",
      "Cloud Infrastructure"
    ]
  };

  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Nworah Ebuka Augustus Portfolio",
    "image": "https://nworahebuka.nworahsoft.codes/profile.jpg",
    "description": "Expert Backend Engineering and Software Architecture services.",
    "url": "https://nworahebuka.nworahsoft.codes"
  };

  return (
    <>
      <Script
        id="person-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <Script
        id="business-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
    </>
  );
}
