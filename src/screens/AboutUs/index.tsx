import React from "react";
import { Button } from "../../components/ui/button";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { SectionComponentNodeByAnima } from "../Homepage/sections/SectionComponentNodeByAnima/SectionComponentNodeByAnima";

export const AboutUs = (): JSX.Element => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { name: "About us", path: "/about-us" },
    { name: "Services", path: "/services" },
    { name: "Products", path: "/products" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Mobile menu button */}
      <button
        className="lg:hidden fixed bottom-4 right-4 z-50 bg-white rounded-full p-3 shadow-lg border border-gray-100"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Mobile menu overlay */}
      {isMenuOpen && (
        <div className="fixed bottom-0 left-0 right-0 bg-white z-40 lg:hidden shadow-lg border-t border-gray-100">
          <div className="flex flex-col items-center py-8 gap-4">
            <a
              href="tel:1-866-814-2287"
              className="font-['Poppins'] font-normal text-black text-xl leading-[26px] cursor-pointer hover:text-[#188bf6] transition-colors"
            >
              Call Us: 1-866-814-2287
            </a>
            {menuItems.map((item, index) => (
              <a
                key={`mobile-menu-${index}`}
                onClick={() => {
                  navigate(item.path);
                  setIsMenuOpen(false);
                }}
                className="font-['Poppins'] font-normal text-black text-xl leading-[26px] cursor-pointer"
              >
                {item.name}
              </a>
            ))}
            <a
              onClick={() => {
                navigate("/nexus");
                setIsMenuOpen(false);
              }}
              className="font-['Poppins'] font-bold text-xl leading-[26px] cursor-pointer gold-glow"
            >
              Nexus
            </a>
            <Button
              className="bg-[#188bf6] text-white rounded-xl px-[26px] py-2.5 font-['Poppins'] font-semibold text-lg mt-4"
              onClick={() => {
                navigate("/contact");
                setIsMenuOpen(false);
              }}
            >
              Contact
            </Button>
          </div>
        </div>
      )}
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 w-full z-50">
        <div className="bg-white bg-opacity-90 backdrop-filter backdrop-blur-md py-11">
          <div className="w-full max-w-[1280px] mx-auto px-5 flex items-center justify-between">
            <div
              className="flex items-center cursor-pointer"
              onClick={() => navigate("/")}
            >
              <div className="w-[60px] h-[60px] bg-[#188bf6] rounded-full flex items-center justify-center">
                <div className="relative w-6 h-7">
                  <img className="absolute w-6 h-[27px]" alt="R" src="/r.svg" />
                  <div className="absolute w-0.5 h-[25px] top-0 left-1.5 bg-[#188bf6]" />
                </div>
              </div>
              <img
                className="ml-5 h-6"
                alt="Riviere group"
                src="/riviere-group.svg"
              />
            </div>

            {/* Desktop menu */}
            <div className="hidden lg:flex items-center gap-8">
              <nav className="hidden lg:flex items-center gap-8">
                {menuItems.map((item, index) => (
                  <a
                    key={`menu-${index}`}
                    onClick={() => navigate(item.path)}
                    className="font-['Poppins'] font-normal text-black text-lg leading-[26px] cursor-pointer"
                  >
                    {item.name}
                  </a>
                ))}
                <a
                  onClick={() => navigate("/nexus")}
                  className="font-['Poppins'] font-bold text-lg leading-[26px] cursor-pointer gold-glow"
                >
                  Nexus
                </a>
              </nav>

              <div className="flex flex-col items-end gap-2">
                <Button
                  className="bg-[#188bf6] text-white rounded-xl px-[26px] py-2.5 font-['Poppins'] font-semibold text-lg"
                  onClick={() => navigate("/contact")}
                  style={{
                    height: "auto",
                    padding: "10px 26px",
                    lineHeight: "1",
                  }}
                >
                  Contact
                </Button>
                <a
                  href="tel:1-866-814-2287"
                  className="font-['Poppins'] font-normal text-black text-sm leading-[26px] cursor-pointer hover:text-[#188bf6] transition-colors"
                >
                  Call Us: 1-866-814-2287
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes goldGlow {
          0%,
          100% {
            color: #ffd700;
            text-shadow: 0 0 10px #ffd700;
          }
          50% {
            color: #ffb700;
            text-shadow: 0 0 20px #ffb700;
          }
        }

        .gold-glow {
          animation: goldGlow 2s ease-in-out infinite;
          font-weight: bold;
        }
      `}</style>

      {/* Main Content */}
      <div className="pt-[160px] pb-24">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8">
          <div className="flex flex-col items-center gap-16">
            {/* Hero Section */}
            <div className="text-center max-w-[800px]">
              <h1 className="font-['Montserrat'] font-bold text-4xl md:text-5xl lg:text-[64px] leading-tight mb-8">
                About Us
              </h1>
              <p className="font-['Poppins'] text-xl md:text-2xl text-[#2f2f2f] leading-relaxed">
                RIVIERE GROUP® IS A FULL-SERVICE MEDIA PRODUCTION AND MARKETING
                AGENCY SPECIALIZING IN CUTTING-EDGE DIGITAL SOLUTIONS FOR BRANDS
                AND CREATIVES.
              </p>
            </div>

            {/* Awards Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex flex-col items-center gap-6">
                  <img
                    src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/8ngdMjJjmckUW3DffAfv/media/67d33e453bd50c3a33042d14.webp"
                    alt="RIAA Gold Certified"
                    className="w-[60px] h-[60px] lg:w-[72px] lg:h-[72px] rounded-md"
                  />
                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-2">
                      🥇 RIAA Gold Certified
                    </h3>
                    <p className="text-gray-600">
                      Recognized for industry-leading music production and sound
                      engineering.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex flex-col items-center gap-6">
                  <img
                    src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/8ngdMjJjmckUW3DffAfv/media/67d23a776028547f34be0919.png"
                    alt="Award-Winning Graphic Design"
                    className="w-28 lg:w-36 rounded-md"
                  />
                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-2">
                      Award-Winning Graphic Design
                    </h3>
                    <p className="text-gray-600">
                      Creative recognized by design publications and peers.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex flex-col items-center gap-6">
                  <img
                    src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/8ngdMjJjmckUW3DffAfv/media/67d33e585f250ce584dcfd26.jpeg"
                    alt="Billboard Top Charted"
                    className="w-[160px] h-[42px] lg:w-[199px] lg:h-[53px] rounded-md mt-[3px]"
                  />
                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-2">
                      6× Billboard Top #1 Charted
                    </h3>
                    <p className="text-gray-600">
                      Trusted by artists and producers behind chart-topping
                      hits.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Expertise Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
              <div className="bg-blue-50 p-8 rounded-2xl">
                <h2 className="font-['Montserrat'] font-bold text-xl mb-4">
                  Digital Solutions
                </h2>
                <p className="font-['Poppins'] text-[#2f2f2f]">
                  WITH EXPERTISE IN WEB DESIGN & DEVELOPMENT, GRAPHIC DESIGN
                </p>
              </div>
              <div className="bg-purple-50 p-8 rounded-2xl">
                <h2 className="font-['Montserrat'] font-bold text-xl mb-4">
                  Technology
                </h2>
                <p className="font-['Poppins'] text-[#2f2f2f]">
                  SEO, AUTOMATION, AI INTEGRATION
                </p>
              </div>
              <div className="bg-yellow-50 p-8 rounded-2xl">
                <h2 className="font-['Montserrat'] font-bold text-xl mb-4">
                  Audio Production
                </h2>
                <p className="font-['Poppins'] text-[#2f2f2f]">
                  MUSIC PRODUCTION, AUDIO ENGINEERING, MASTERING
                </p>
              </div>
            </div>

            {/* Mission Statement */}
            <div className="text-center max-w-[800px] bg-gray-50 p-12 rounded-3xl">
              <p className="font-['Poppins'] text-xl text-[#2f2f2f] leading-relaxed mb-8">
                WE EMPOWER BUSINESSES AND ARTISTS TO BUILD THEIR PRESENCE AND
                MAXIMIZE THEIR IMPACT.
              </p>
              <p className="font-['Poppins'] text-xl text-[#2f2f2f] leading-relaxed">
                BACKED BY A TEAM OF INDUSTRY EXPERTS, WE CRAFT HIGH-PERFORMANCE
                DIGITAL EXPERIENCES THAT DRIVE ENGAGEMENT, ELEVATE BRANDS, AND
                TURN CREATIVE VISIONS INTO REALITY.
              </p>
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <Button
                className="bg-[#188bf6] text-white rounded-xl px-8 py-4 font-['Poppins'] font-semibold text-lg"
                onClick={() =>
                  window.open(
                    "https://api.leadconnectorhq.com/widget/booking/T5JkOudaD7ASIlxFCl9j",
                    "_blank"
                  )
                }
              >
                Schedule a Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <SectionComponentNodeByAnima />
    </div>
  );
};
