import React from 'react';

const Footer = () => {
  return (
    <div className="bg-[#00ebc7] p-10">
      <div className="grid font-[Poppins] md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 place-items-start gap-8">
        <div>
          <div className="font-bold mb-6">Get Started</div>
          <p className="text-sm leading-7">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo neque saepe cumque. Veritatis sunt commodi</p>
        </div>
        <div>
          <div className="font-bold mb-6">Services</div>
          <div className="flex flex-col gap-4">
            <a href="/" className="text-sm hover:underline">
              Web Design
            </a>
            <a href="/" className="text-sm hover:underline">
              Web Development
            </a>
            <a href="/" className="text-sm hover:underline">
              Data Science
            </a>
            <a href="/" className="text-sm hover:underline">
              Digital Marketing
            </a>
          </div>
        </div>
        <div>
          <div className="font-bold mb-6">Company</div>
          <div className="flex flex-col gap-4">
            <a href="/" className="text-sm hover:underline">
              Privacy Policy
            </a>
            <a href="/" className="text-sm hover:underline">
              Sitemap
            </a>
            <a href="/" className="text-sm hover:underline">
              Careers
            </a>
            <a href="/" className="text-sm hover:underline">
              Terms & Conditions
            </a>
          </div>
        </div>
        <div>
          <div className="font-bold mb-6">Follow us</div>
          <div className="text-sm mb-4">example.space@gmail.com</div>
          <div className="text-sm">+629883271929</div>
          <div className="flex gap-4 mt-4">
            <a href="/" className="hover:scale-110 text-3xl">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
            <a href="/" className="hover:scale-110 text-3xl">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
            <a href="/" className="hover:scale-110 text-3xl">
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
            <a href="/" className="hover:scale-110 text-3xl">
              <ion-icon name="logo-pinterest"></ion-icon>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
