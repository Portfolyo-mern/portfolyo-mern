import React from 'react';

import AppHero from './Home/hero';
import AppAbout from './Home/about';
import AppFeature from './Home/feature';
import AppWorks from './Home/works';
import AppFaq from './Home/faq';
import AppContact from './Home/contact';

function AppHome() {
  return (
    <div className="main">
      <AppHero/>
      <AppAbout/>
      <AppFeature/>
      <AppWorks/>
      <AppFaq/>
      <AppContact/>
    </div>
  );
}

export default AppHome;



