import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import React from "react";

export const SectionComponentNodeByAnima = (): JSX.Element => {
  // Navigation links data
  const quickNavLinks = [
    "Home",
    "Services",
    "Portfolio",
    "Resources",
    "Contact",
    "Book a consultation",
  ];

  // Services links data
  const servicesLinks = [
    "Web Development",
    "Digital Strategy",
    "Branding & Design",
    "Media & Content",
    "Nexus CRM",
  ];

  // Social media icons data
  const socialIcons = [
    { 
      src: "/frame-25.svg", 
      active: true,
      href: "https://www.facebook.com/profile.php?id=61573781046929"
    },
    { 
      src: "/frame.svg", 
      active: false,
      href: "https://www.instagram.com/rivieregroup/"
    },
    { 
      src: "/frame-7.svg", 
      active: false,
      href: "https://x.com/rivieregroup"
    },
  ];

  return (
    <footer className="flex flex-col w-full items-start gap-12 py-16 px-4 lg:px-8">
      <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-[169px] w-full justify-center">
        {/* Company Info Column */}
        <div className="flex flex-col w-full lg:w-[353px] items-center lg:items-start gap-8">
          <div className="flex flex-col items-center lg:items-start gap-6 w-full">
            <div className="relative flex items-center h-[60px]">
              <div className="w-[60px] h-[60px] bg-[#188bf6] rounded-full flex items-center justify-center">
                <div className="relative w-6 h-7">
                  <img
                    className="absolute w-6 h-[27px] top-px left-0"
                    alt="R"
                    src="/r.svg"
                  />
                  <div className="absolute w-0.5 h-[25px] top-0 left-1.5 bg-[#188bf6]" />
                </div>
              </div>
              <img
                className="ml-5 h-6"
                alt="Riviere group"
                src="/riviere-group.svg"
              />
            </div>

            <p className="font-['Poppins',Helvetica] font-normal text-[#2f2f2f] text-lg leading-[26px] text-center lg:text-left">
              Riviere Group® is a full-service media agency specializing in web design, branding, SEO, AI, and music production—empowering brands and artists to thrive.
            </p>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center justify-center lg:justify-start gap-3 w-full">
            {socialIcons.map((icon, index) => (
              <a
                href={icon.href}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
                className={`w-10 h-10 rounded-full overflow-hidden flex items-center justify-center ${
                  icon.active
                    ? "bg-[#188bf6]"
                    : "bg-neutral-50 border border-solid border-[#efefef] hover:border-[#188bf6] transition-colors"
                }`}
              >
                <img
                  className="w-6 h-6"
                  alt="Social media icon"
                  src={icon.src}
                />
              </a>
            ))}
          </div>
        </div>

        {/* Navigation Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full lg:w-[758px]">
          {/* Quick Navigation Column */}
          <div className="flex flex-col items-center lg:items-start gap-5">
            <h3 className="font-['Poppins',Helvetica] font-medium text-black text-lg leading-[26px] text-center lg:text-left">
              Quick Navigation
            </h3>

            {quickNavLinks.map((link, index) => (
              <a
                key={index}
                href="#"
                className="font-['Poppins',Helvetica] font-normal text-[#2f2f2f] text-lg leading-[26px] text-center lg:text-left"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Services Column */}
          <div className="flex flex-col items-center lg:items-start gap-5">
            <h3 className="font-['Poppins',Helvetica] font-medium text-black text-lg leading-[26px] text-center lg:text-left">
              Services
            </h3>

            {servicesLinks.map((service, index) => (
              <a
                key={index}
                href="#"
                className="font-['Poppins',Helvetica] font-normal text-[#2f2f2f] text-lg leading-[26px] text-center lg:text-left"
              >
                {service}
              </a>
            ))}
          </div>

          {/* Company Information Column */}
          <div className="flex flex-col items-center lg:items-start gap-5">
            <h3 className="font-['Poppins',Helvetica] font-medium text-black text-lg leading-[26px] text-center lg:text-left">
              Company Information
            </h3>

            <div className="flex items-center justify-center lg:justify-start gap-2 w-full">
              <MailIcon className="w-6 h-6" />
              <a
                href="mailto:info@rivieregroup.org"
                className="font-['Poppins',Helvetica] font-normal text-[#2f2f2f] text-sm lg:text-base leading-[26px] break-all hover:text-[#188bf6] transition-colors"
              >
                info@rivieregroup.org
              </a>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-2 w-full">
              <PhoneIcon className="w-6 h-6" />
              <a
                href="tel:1-866-814-2287"
                className="font-['Poppins',Helvetica] font-normal text-[#2f2f2f] text-sm lg:text-base leading-[26px] hover:text-[#188bf6] transition-colors"
              >
                1-866-814-2287
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="flex flex-col items-start gap-5 w-full">
        <img
          className="w-full h-px object-cover"
          alt="Divider line"
          src="/line-1.svg"
        />

        <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-0 justify-between w-full">
          <p className="font-['Poppins',Helvetica] font-normal text-[#2f2f2f] text-base lg:text-lg leading-[26px] text-center lg:text-left">
            Copyright © 2025 Riviere Group. All rights reserved.
          </p>

          <p className="font-['Poppins',Helvetica] font-normal text-[#2f2f2f] text-base lg:text-lg leading-[26px] text-center lg:text-left">
            Privacy Policy&nbsp;&nbsp;|&nbsp;&nbsp;Terms &amp; Conditions
          </p>
        </div>
      </div>
    </footer>
  );
};
