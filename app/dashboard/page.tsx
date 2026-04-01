'use client';

import DashboardHeroSection from '../../components/sections/dashboard/DashboardHeroSection';
import DashboardFeaturesSection from '../../components/sections/dashboard/DashboardFeaturesSection';
import DashboardChannelSection from '../../components/sections/dashboard/DashboardChannelSection';
import DashboardPricingSection from '../../components/sections/dashboard/DashboardPricingSection';
import DashboardTrustCtaSection from '../../components/sections/dashboard/DashboardTrustCtaSection';

export default function DashboardLandingPage() {
  return (
    <>
      <DashboardHeroSection />
      <DashboardFeaturesSection />
      <DashboardChannelSection />
      <DashboardPricingSection />
      <DashboardTrustCtaSection />
    </>
  );
}
