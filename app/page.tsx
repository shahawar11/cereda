import Banner from '@/components/banner/page';
import ConferenceTheme from '@/components/conference-theme/conference-theme';
import { KeyHighlightsGrid } from '@/components/key-highlights';
import Purpose from '@/components/purpose/purpose-component';
import WelcomeSection from '@/components/welcome/welcome-section';


import React from 'react'

function HomePage() {
  return (
    <div className="flex flex-col gap-y-12">
      <Banner />
      <div className="flex flex-col gap-y-8 px-5 sm:px-10 md:px-12 lg:px-5">
        <WelcomeSection />
        <ConferenceTheme />
        <Purpose/>
        <KeyHighlightsGrid/>
        
      </div>

      {/* <Welcome/>
      <ConferenceTheme/>
      <KeyHighlights/> */}
    </div>
  );
}

export default HomePage
