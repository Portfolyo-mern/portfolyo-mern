import React from 'react';
import Appcreator from './Home/creator';
import AppHero from './Home/hero';
import AppAbout from './Home/about';
import AppFeature from './Home/feature';
import AppWorks from './Home/works';
import AppFaq from './Home/faq';
import AppContact from './Home/contact';

function AppHome() {
  window.onbeforeunload = null;

  return (
    <div className="main">
      <AppHero/>
      <AppAbout/>
      <Appcreator/>
      <AppFeature/>
      <AppWorks/>
      <AppFaq/>
      <AppContact/>
      
    </div>
  );
}

export default AppHome;



