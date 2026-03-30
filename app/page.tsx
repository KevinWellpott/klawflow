import Hero from '../components/sections/Hero';
import ProblemSolution from '../components/sections/ProblemSolution';
import HowItWorks from '../components/sections/HowItWorks';
import Features from '../components/sections/Features';
import ROI from '../components/sections/ROI';
import FinalCTA from '../components/sections/FinalCTA';
import FAQ from '../components/sections/FAQ';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProblemSolution />
      <HowItWorks />
      <Features />
      <ROI />
      <FinalCTA />
      <FAQ />
    </>
  );
}
