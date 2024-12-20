import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { 
  faFacebookF, 
  faTwitter, 
  faYoutube
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  const navigationData = {
    pagedone: {
      title: "Deals Cracker",
      links: [
        { text: "Home", href: "javascript:;" },
        { text: "About", href: "javascript:;" },
        { text: "Pricing", href: "javascript:;" },
        { text: "Pro Version", href: "javascript:;" }
      ]
    },
    products: {
      title: "Products",
      links: [
        { text: "Figma UI System", href: "javascript:;" },
        { text: "Icons Assets", href: "javascript:;" },
        { text: "Responsive Blocks", href: "javascript:;" },
        { text: "Components Library", href: "javascript:;" }
      ]
    },
    resources: {
      title: "Resources",
      links: [
        { text: "FAQs", href: "javascript:;" },
        { text: "Quick Start", href: "javascript:;" },
        { text: "Documentation", href: "javascript:;" },
        { text: "User Guide", href: "javascript:;" }
      ]
    }
  };

  const socialIcons = [
    { icon: faFacebookF, href: "www.facebook.com/", hoverColor: "hover:bg-blue-600" },
    { icon: faTwitter, href: "https://x.com/?lang=en", hoverColor: "hover:bg-green-600" },
    { icon: faYoutube, href: "https://www.youtube.com/", hoverColor: "hover:bg-red-600" },
    { icon: faEnvelope, href: "https://mail.google.com/", hoverColor: "hover:bg-orange-500" }
  ];

  const NavSection = ({ title, links }) => (
    <div>
      <h6 className="text-xl font-medium text-white mb-7 max-lg:text-center">{title}</h6>
      <ul className="flex flex-col gap-6 max-lg:items-center">
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.href} 
               className="text-base font-normal text-white transition-all duration-300 whitespace-nowrap hover:text-amber-400 focus-within:outline-0 focus-within:text-amber-400">
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div>
      <section className="pt-16 pb-7 ThemeColor">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          {/* Logo and Social Icons */}
          <div className="flex items-center justify-between gap-8 border-b border-white pb-14">
            <div className="flex items-center gap-3">
            <div className='w-16 h-16 bg-white rounded-full '> 

<img className='object-contain w-full h-full ' src="/assets/logo.png"/>
</div>
              <span className="text-xl font-bold text-white">Deals Cracker</span>
            </div>
            
            {/* Social Media Icons */}
            <div className="flex items-center gap-4">
              {socialIcons.map((social, index) => (
                <a key={index} 
                   href={social.href}
                   className={`p-3 text-gray-700 transition-all duration-500 bg-white rounded-full group ${social.hoverColor} hover:text-white focus-within:outline-0 focus-within:text-white`}>
                  <FontAwesomeIcon icon={social.icon} className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation and Newsletter */}
          <div className="flex flex-col justify-between gap-8 border-b border-white py-14 lg:flex-row">
            <div className="flex flex-col w-full gap-6 max-lg:mx-auto sm:flex-row max-lg:items-center max-lg:justify-between md:gap-12 lg:gap-24">
              {Object.entries(navigationData).map(([key, section]) => (
                <NavSection key={key} title={section.title} links={section.links} />
              ))}
            </div>

            {/* Newsletter Section */}
            <div className="w-full lg:max-w-md max-lg:mx-auto">
              <h6 className="text-lg font-medium text-white mb-7">Newsletter</h6>
              <div className="p-5 bg-white rounded-3xl">
                <form action="#" className="flex flex-col gap-5">
                  <div className="relative">
                    <label className="flex items-center mb-2 text-base font-medium fontColor">
                      Email
                    </label>
                    <input 
                      type="text" 
                      className="block w-full px-5 py-3 text-lg font-normal leading-relaxed placeholder-gray-400 bg-transparent border border-gray-400 rounded-full shadow-xs fontColor focus:outline-none focus-within:border-gray-300"
                      placeholder="someone@gmail.com" 
                      required
                    />
                  </div>
                  <div className="flex flex-col min-[540px]:flex-row items-center justify-between gap-3">
                    <div className="flex items-start black">
                      <input 
                        id="checked-checkbox" 
                        type="checkbox" 
                        className="w-5 h-5 mr-2 bg-transparent border border-gray-600 rounded-md appearance-none cursor-pointer aspect-square hover:border-gray-400 hover:bg-gray-900 checked:bg-no-repeat checked:bg-center checked:border-gray-400 checked:bg-gray-800"
                        defaultChecked
                      />
                      <label htmlFor="checked-checkbox" className="text-sm font-normal text-gray-500 cursor-pointer">
                        I agree with <a href="javascript:;" className="fontColor">Privacy Policy</a> and{" "}
                        <a href="javascript:;" className="fontColor">Terms of Condition</a>
                      </label>
                    </div>
                    <input 
                      type="submit" 
                      value="Send"
                      className="text-white text-base font-semibold py-3 px-7 rounded-full cursor-pointer ThemeColor transition-all duration-500 hover:border-2 hover:border-[#237da0f8] hover:text-gray-900 hover:bg-white"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="flex flex-col-reverse items-center justify-between gap-5 sm:flex-row pt-7">
            <span className="text-sm font-normal text-white">
              <a href="https://pagedone.io/">©DealsCracker</a> 2024, All rights reserved.
            </span>
            <div className="relative text-gray-500 focus-within:text-gray-900">
              <div className="absolute inset-y-0 flex items-center pl-3 pointer-events-none right-6">
                <div className="flex items-center w-5">
                  <div className="w-full border-b-2 border-current"></div>
                </div>
              </div>
              <button 
                type="button"
                className="block w-full lg:min-w-[448px] pr-12 pl-6 py-3 text-base font-normal shadow-xs text-gray-50 bg-transparent border-white border-2 rounded-full placeholder-gray-400 focus:outline-none leading-relaxed transition-all duration-500"
              >
                Have a question? talk to us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;