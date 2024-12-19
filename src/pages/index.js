import Head from 'next/head';
import HomePage from './home';

export default function Home() {
  return (
    <>
      <Head>
        <title>BetCep - Solutions Optimisées pour les Projets de Construction</title>
        <meta 
          name="description" 
          content="BetCep offre des solutions personnalisées pour optimiser vos projets de construction, de la planification à la gestion de projet et à la maintenance. Notre équipe fournit des services de qualité pour assurer l'exécution efficace des projets." 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="BetCep - Solutions Optimisées pour les Projets de Construction" />
        <meta property="og:description" content="BetCep offre des solutions personnalisées pour optimiser vos projets de construction, de la planification à la gestion de projet et à la maintenance." />
        <meta property="og:image" content="../assets/images/logo.jpg" />
        <meta property="og:url" content="https://www.betcep.com" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:title" content="BetCep - Solutions Optimisées pour les Projets de Construction" />
        <meta name="twitter:description" content="BetCep offre des solutions personnalisées pour optimiser vos projets de construction, de la planification à la gestion de projet et à la maintenance." />
        <meta name="twitter:image" content="/path-to-your-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />

        {/* Robots Meta Tag */}
        <meta name="robots" content="index, follow" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.betcep.com" />
      </Head>
      <main>
        <div>
          <HomePage />
        </div>
      </main>
    </>
  );
}
