import React from 'react';
import Button from './button';

import illustration from '../assets/images/hero-image.svg';

export default function Home() {
  return (
    <header className="flex mt-12">
      <div className="md:w-3/5 pt-6 md:pt-10 lg:pt-16">
        <h1 className="mb-6 text-4xl lg:text-5xl">Crysfel Villa</h1>
        <p className="leading-normal text-grey-darkest lg:w-2/3 text-base lg:text-lg mb-8">I’m a JavaScript evengelist! I enjoy working in awesome products and writing about React and IoT. When I’m not writing code I might be playing my guitar, piano or anything that comes to my hands.</p>
        <Button elevated>Contact Me</Button>
      </div>
      <div className="flex-1">
        <img src={illustration} alt="Me chilling out at my workspace" className="hidden md:block w-full h-auto" />
      </div>
    </header>
  );
}
