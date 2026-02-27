import { Route, Switch } from 'wouter';
import Header from './components/Header';
import Footer from './components/Footer';
import FixedPhone from './components/FixedPhone';
import Home from './pages/Home';
import Services from './pages/Services';
import CeramicCoating from './pages/CeramicCoating';
import Gallery from './pages/Gallery';
import Reviews from './pages/Reviews';
import About from './pages/About';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';
import { LanguageProvider } from './LanguageContext';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-dark-950 text-white">
        <ScrollToTop />
        <FixedPhone />
        <Header />
        <main className="pt-9">
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/services" component={Services} />
            <Route path="/ceramic-coating" component={CeramicCoating} />
            <Route path="/gallery" component={Gallery} />
            <Route path="/reviews" component={Reviews} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route>
              <div className="flex items-center justify-center min-h-screen">
                <div className="text-center">
                  <h1 className="text-6xl font-bold text-primary-500 mb-4">404</h1>
                  <p className="text-dark-200 text-lg">Page not found</p>
                </div>
              </div>
            </Route>
          </Switch>
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}