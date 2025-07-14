import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import LoadingScreen from './components/LoadingScreen';

// Lazy loading des pages
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Services = React.lazy(() => import('./pages/Services'));
const CaseStudies = React.lazy(() => import('./pages/CaseStudies'));
const Contact = React.lazy(() => import('./pages/Contact'));

// Lazy loading des pages de services
const AuditSEO = React.lazy(() => import('./pages/services/AuditSEO'));
const PubliciteMeta = React.lazy(() => import('./pages/services/PubliciteMeta'));
const CreationSiteWeb = React.lazy(() => import('./pages/services/CreationSiteWeb'));
const ReferencementLocal = React.lazy(() => import('./pages/services/ReferencementLocal'));
const EmailMarketing = React.lazy(() => import('./pages/services/EmailMarketing'));
const GestionReseauxSociaux = React.lazy(() => import('./pages/services/GestionReseauxSociaux'));
const StrategieDigitalePersonnalisee = React.lazy(() => import('./pages/services/StrategieDigitalePersonnalisee'));

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-purple-900">
      <Layout>
        <Suspense fallback={<LoadingScreen />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/a-propos" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/audit-seo" element={<AuditSEO />} />
            <Route path="/services/publicite-meta" element={<PubliciteMeta />} />
            <Route path="/services/creation-site-web" element={<CreationSiteWeb />} />
            <Route path="/services/referencement-local" element={<ReferencementLocal />} />
            <Route path="/services/email-marketing" element={<EmailMarketing />} />
            <Route path="/services/gestion-reseaux-sociaux" element={<GestionReseauxSociaux />} />
            <Route path="/services/strategie-digitale-personnalisee" element={<StrategieDigitalePersonnalisee />} />
            <Route path="/etudes-de-cas" element={<CaseStudies />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </Layout>
    </div>
  );
}

export default App;