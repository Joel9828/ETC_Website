import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Route, Switch, Router as WouterRouter } from 'wouter';
import { LanguageProvider } from '@/context/LanguageContext';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';

import { Home } from '@/pages/Home';
import { About } from '@/pages/About';
import { Companies } from '@/pages/Companies';
import { CompaniesProgram } from '@/pages/CompaniesProgram';
import { Professionals } from '@/pages/Professionals';
import { Momentum } from '@/pages/Momentum';
import { Workshops } from '@/pages/Workshops';
import { Events } from '@/pages/Events';
import { Blogs } from '@/pages/Blogs';
import { BlogPost } from '@/pages/BlogPost';
import { Pricing } from '@/pages/Pricing';
import { Contact } from '@/pages/Contact';
import NotFound from '@/pages/not-found';

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/companies" component={Companies} />
      <Route path="/companies/program" component={CompaniesProgram} />
      <Route path="/professionals" component={Professionals} />
      <Route path="/momentum" component={Momentum} />
      <Route path="/workshops" component={Workshops} />
      <Route path="/events" component={Events} />
      <Route path="/blogs" component={Blogs} />
      <Route path="/blogs/:slug" component={BlogPost} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <LanguageProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
            <ScrollToTop />
            <div className="min-h-[100dvh] flex flex-col font-sans">
              <Navbar />
              <main className="flex-grow">
                <Router />
              </main>
              <Footer />
            </div>
          </WouterRouter>
          <Toaster />
        </LanguageProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;