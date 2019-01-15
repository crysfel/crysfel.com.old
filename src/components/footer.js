import React from 'react';
import Button from './button';
import BG from '../assets/images/bg.png';

export default function Footer() {

  return (
    <footer className="bg-cover bg-no-repeat bg-right-bottom" style={{ backgroundImage: `url(${BG})`, paddingTop: '300px' }}>
      <div className="container pb-32">
        <div className="bg-white rounded text-center py-16 mb-16 md:mb-32 shadow-lg">
          <h3 className="mb-8 text-lg md:text-xl lg:text-3xl">Would you like to <em className="text-green">hire me</em>? Let’s talk!</h3>
          <Button>Contact Me</Button>
        </div>
        <div className="flex mb-16 md:mb-32">
          <div className="flex-1">
            <h4 className="text-base mb-4">Social</h4>
            <ul className="list-reset">
              <li className="mb-4"><a href="https://github.com/crysfel" className="text-grey-darker no-underline hover:underline">Github</a></li>
              <li className="mb-4"><a href="https://twitter.com/crysfel" className="text-grey-darker no-underline hover:underline">Twitter</a></li>
              <li className="mb-4"><a href="https://www.instagram.com/crysfel" className="text-grey-darker no-underline hover:underline">Instagram</a></li>
              <li className="mb-4"><a href="https://www.youtube.com/channel/UCL863CN9FoIB7IGeL2Lnecw" className="text-grey-darker no-underline hover:underline">YouTube</a></li>
            </ul>
          </div>
          <div className="flex-1">
            <h4 className="text-base mb-4">Tags</h4>
            <ul className="list-reset">
              <li className="mb-4"><a href="#" className="text-grey-darker no-underline hover:underline">JavaScript</a></li>
              <li className="mb-4"><a href="#" className="text-grey-darker no-underline hover:underline">IoT</a></li>
              <li className="mb-4"><a href="#" className="text-grey-darker no-underline hover:underline">Investment</a></li>
              <li className="mb-4"><a href="#" className="text-grey-darker no-underline hover:underline">Projects</a></li>
            </ul>
          </div>
          <div className="flex-1">
            <h4 className="text-base mb-4">Legal</h4>
            <ul className="list-reset">
              <li className="mb-4"><a href="#" className="text-grey-darker no-underline hover:underline">Privacy</a></li>
              <li className="mb-4"><a href="#" className="text-grey-darker no-underline hover:underline">Terms</a></li>
              <li className="mb-4"><a href="#" className="text-grey-darker no-underline hover:underline">Cookies</a></li>
            </ul>
          </div>
          <div className="flex-1 rounded bg-green p-8 hidden md:block">
            <p className="leading-normal text-base text-grey-lighter">You can drop me a line at crysfel@bleext.com</p>
          </div>
        </div>
        <div className="border-t-2 border-grey-light">
          <p className="text-grey-darker text-right text-sm mt-16">© Copyright 2018. Crysfel Villa.</p>
        </div>
      </div>
    </footer>
  );
}
