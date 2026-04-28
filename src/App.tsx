/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import PracticeAreas from './pages/PracticeAreas';
import Contact from './pages/Contact';
import FallbackPage from './pages/FallbackPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="practice-areas" element={<PracticeAreas />} />
          <Route path="practice-areas/:id" element={<FallbackPage title="Practice Area Details" />} />
          <Route path="case-results" element={<FallbackPage title="Case Results" />} />
          <Route path="testimonials" element={<FallbackPage title="Client Testimonials" />} />
          <Route path="blog" element={<FallbackPage title="Legal Blog" />} />
          <Route path="faq" element={<FallbackPage title="Frequently Asked Questions" />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy-policy" element={<FallbackPage title="Privacy Policy" />} />
          <Route path="terms" element={<FallbackPage title="Terms of Use" />} />
          <Route path="disclaimer" element={<FallbackPage title="Legal Disclaimer" />} />
          <Route path="*" element={<FallbackPage title="Page Not Found" />} />
        </Route>
      </Routes>
    </Router>
  );
}
