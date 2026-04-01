import Hero from '../components/sections/Hero';
import ProblemAgitation from '../components/sections/ProblemAgitation';
import HowItWorks from '../components/sections/HowItWorks';
import FeaturesGrid from '../components/sections/FeaturesGrid';
import CompareAlternatives from '../components/sections/CompareAlternatives';
import TrustLayer from '../components/sections/TrustLayer';
import FAQ from '../components/sections/FAQ';
import FinalCTA from '../components/sections/FinalCTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProblemAgitation />
      <HowItWorks />
      <FeaturesGrid />
      <CompareAlternatives />
      <TrustLayer />
      <FAQ />
      <FinalCTA />
    </>
  );
}
