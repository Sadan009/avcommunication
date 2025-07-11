import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Work", href: "/work" },
  ];

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Logo & Company Info Section */}
          <div>
            {/* Logo */}
            <div className="mb-6">
              <div className="flex items-center gap-3">
                {/* Logo Image */}
                <div>
                  <img
                    src="/assets/Logo-2.png"
                    alt="AV Communication Logo"
                    className="h-24 w-auto"
                  />
                </div>
              </div>
            </div>

            {/* About Company */}
            <div className="mb-8">
              <p className="text-gray-300 leading-relaxed mb-4">
                Our media powers brands to break through, be relevant, and
                connect with audiences like never before. AV Communication
                understands its role in driving cultural impact. We are trusted
                by the millions who engage with our media every day, driving a
                strong relationship between brands and audiences.
              </p>
            </div>

            {/* Social Links */}
            <div>
              <div className="flex gap-3">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
                      aria-label={social.name}
                    >
                      <IconComponent className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="flex flex-col lg:items-center">
            <h4 className="text-xl font-semibold mb-6 text-white">
              Quick Links
            </h4>
            <nav className="space-y-4">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-200 text-base"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info Section */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-white">
              Contact Info
            </h4>
            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="flex gap-2">
                  {/* <p className="text-gray-400 text-sm mb-1">Call Us</p> */}
                  <a
                    href="tel:+919559102222"
                    className="text-white hover:text-blue-400 transition-colors text-base"
                  >
                    +91-9559102222
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  {/* <p className="text-gray-400 text-sm mb-1">Email Us</p> */}
                  <a
                    href="mailto:info@avcommunication.co"
                    className="text-white hover:text-green-400 transition-colors text-base"
                  >
                    info@avcommunication.co
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  {/* <p className="text-gray-400 text-sm mb-1">Visit Us</p> */}
                  <address className="text-white not-italic text-base leading-relaxed">
                    C-32, INDIRA NAGAR LUCKNOW- 226003CALL LUCKNOW- 226003 India
                  </address>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} EventPro. All rights reserved. |
              <span className="hover:text-white transition-colors cursor-pointer">
                {" "}
                Privacy Policy
              </span>{" "}
              |
              <span className="hover:text-white transition-colors cursor-pointer">
                {" "}
                Terms of Service
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
