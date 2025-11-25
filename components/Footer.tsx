import React from 'react';
import { FacebookIcon, TwitterIcon, YoutubeIcon, InstagramIcon } from './Icons';

const Footer: React.FC = () => {
  const footerLinkSections = {
    'ABOUT': ['Contact Us', 'About Us', 'Careers', 'Flipkart Stories', 'Press', 'Corporate Information'],
    'GROUP COMPANIES': ['Myntra', 'Cleartrip', 'Shopsy'],
    'HELP': ['Payments', 'Shipping', 'Cancellation & Returns', 'FAQ'],
    'CONSUMER POLICY': ['Cancellation & Returns', 'Terms Of Use', 'Security', 'Privacy', 'Sitemap', 'Grievance Redressal', 'EPR Compliance'],
  };

  return (
    <footer className="bg-gray-800 text-gray-400 text-sm">
      <div className="max-w-screen-xl mx-auto py-10 px-4">
        {/* TOP: Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {Object.entries(footerLinkSections).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-gray-500 font-semibold mb-3 tracking-wider uppercase">{title}</h3>
              <ul>
                {links.map(link => (
                  <li key={link} className="mb-2"><a href="#" className="hover:underline text-white">{link}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* MIDDLE: Addresses */}
        <div className="mt-10 pt-10 border-t border-gray-700 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
          <div>
            <h3 className="text-gray-500 font-semibold mb-3 tracking-wider uppercase">Mail Us:</h3>
            <p className="text-white leading-relaxed">
                ShopNcarT Internet Private Limited,<br/>
                Buildings Alyssa, Begonia &amp; Clove Embassy Tech Village,<br/>
                Outer Ring Road, Devarabeesanahalli Village,<br/>
                Bengaluru, 560103, Karnataka, India
            </p>
          </div>
          <div>
            <h3 className="text-gray-500 font-semibold mb-3 tracking-wider uppercase">Registered Office Address:</h3>
            <p className="text-white leading-relaxed">
                ShopNcarT Internet Private Limited,<br/>
                Buildings Alyssa, Begonia &amp; Clove Embassy Tech Village,<br/>
                Outer Ring Road, Devarabeesanahalli Village,<br/>
                Bengaluru, 560103, Karnataka, India<br/>
                CIN : U51109KA2012PTC066107<br/>
                Telephone: <a href="tel:044-45614700" className="text-blue-500 hover:underline">044-45614700</a>
            </p>
          </div>
        </div>
      </div>

      {/* BOTTOM: Copyright, Social, Payments */}
      <div className="border-t border-gray-700 bg-gray-900/50">
        <div className="max-w-screen-xl mx-auto py-4 px-4 flex flex-col md:flex-row justify-between items-center text-xs space-y-4 md:space-y-0">
          <p>&copy; 2007-{new Date().getFullYear()} ShopNcarT. All Rights Reserved.</p>
          <div className="flex items-center space-x-4">
            <a href="#" aria-label="Facebook" className="hover:text-white transition-colors"><FacebookIcon /></a>
            <a href="#" aria-label="Twitter" className="hover:text-white transition-colors"><TwitterIcon /></a>
            <a href="#" aria-label="Youtube" className="hover:text-white transition-colors"><YoutubeIcon /></a>
            <a href="#" aria-label="Instagram" className="hover:text-white transition-colors"><InstagramIcon /></a>
          </div>
          <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/payment-method_69e7ec.svg" alt="Payment Methods" className="h-5"/>
        </div>
      </div>
    </footer>
  );
};

export default Footer;