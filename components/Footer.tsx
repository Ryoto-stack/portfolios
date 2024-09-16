"use client";
import Image from "next/image";
import React from "react";

// Define the footer navigation links
const footerNavs = [
  { href: "#about", name: "About" },
  { href: "#works", name: "Works" },
  { href: "#techstack", name: "TechStack" },
];

// Define the social media icons with image paths
const socialMediaIcons = [
  {
    href: "https://github.com/Ryoto-stack",
    imgSrc: "/github.png",
    alt: "Github"
  },
  {
    href: "https://www.frontendmentor.io/profile/Ryoto-stack",
    imgSrc: "/fementor.png",
    alt: "FrontEndMentor"
  },
  {
    href: "https://www.linkedin.com/in/escalakent/",
    imgSrc: "/linkedin.png",
    alt: "Linkedin"
  },
];

const FooterNav = () => (
  <ul className="items-center justify-center mt-8 space-y-5 sm:flex sm:space-x-4 sm:space-y-0">
    {footerNavs.map((item, idx) => (
      <li key={idx} className="hover:text-gray-800">
        <a href={item.href}>{item.name}</a>
      </li>
    ))}
  </ul>
);

const SocialMediaIcons = () => (
  <ul className="flex items-center space-x-4">
    {socialMediaIcons.map((icon, idx) => (
      <li
        key={idx}
        className="w-10 h-10 border rounded-full flex items-center justify-center"
      >
        <a href={icon.href} target="_blank" rel="noopener noreferrer">
          <Image
            height={36}
            width={36}
            src={icon.imgSrc}
            alt={icon.alt}
            className="object-contain overflow-hidden"
          />
        </a>
      </li>
    ))}
  </ul>
);

const Footer = () => (
  <footer className="dark:bg-[#0b1727] px-4 py-5 w-full mx-auto md:px-8">
    <div className="max-w-lg sm:mx-auto sm:text-center">
      <p className="text-sm md:text-[30px] font-bold mb-6">
        KENT CEDRIC ESCALA
      </p>
    </div>
    <FooterNav />
    <div className="flex items-center justify-center mt-5">
    <SocialMediaIcons />
    </div>
  </footer>
);

export default Footer;
