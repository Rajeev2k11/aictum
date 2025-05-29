'use client';
import React from 'react';
import * as motion from 'motion/react-client';
import { AboutHero } from './AboutHero';
import { PurposePhilosophy } from './PurposePhilosophy';
import { WhoWeAre } from './WhoWeAre';
import { OurStory } from './OurStory';
import { CoreValues } from './CoreValues';
import { WithUsYouCan } from './WithUsYouCan';
import { Awards } from './Awards';
import { GlobalPresence } from './GlobalPresence';
import { WorkTogether } from './WorkTogether';

const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1b152e] via-voilet-950 to-[#20183d] text-gray-100">
      <main className="mx-auto py-16">
        <AboutHero />
        <PurposePhilosophy />
        <WhoWeAre />
        <OurStory />
        <CoreValues />
        <WithUsYouCan />
        <Awards />
        <GlobalPresence />
        <WorkTogether />
      </main>
    </div>
  );
};

export default AboutUs;