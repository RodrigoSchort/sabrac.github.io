import React from 'react';
import { useState } from 'react';

import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from './containers';
import { CTA, Brand, SocialMedia, Navbar } from './components';

import './App.css';

const App = () => {
  const [englishLanguage, setEnglishLanguage] = useState(false);

  return (
    <div className="App">
      <div className="gradient__bg">
        <SocialMedia setEnglishLanguage={setEnglishLanguage} />
        <Navbar englishLanguage={englishLanguage} />
        <Header englishLanguage={englishLanguage} />
      </div>
      <Brand />
      <WhatGPT3 englishLanguage={englishLanguage} />
      <Features englishLanguage={englishLanguage} />
      <Possibility englishLanguage={englishLanguage} />
      <CTA englishLanguage={englishLanguage} />
      <Blog englishLanguage={englishLanguage} />
      <Footer englishLanguage={englishLanguage} />
    </div>
  )
};

export default App;
