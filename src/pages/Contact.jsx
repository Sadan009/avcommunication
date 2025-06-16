import React, { useState } from "react";
import ContactBanner from "../components/sections/banner-section/contact-banner";
import {
  CheckCircle,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
  User,
} from "lucide-react";

const Contact = () => {
  // Form for contact
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    email: "",
    message: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  // Connect with firebase:
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, mobile, email, message } = form;

    const res = await fetch(
      "https://avcommunication-abd1c-default-rtdb.firebaseio.com/userDataRecords.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          mobile,
          email,
          message,
          timestamp: new Date().toISOString(),
        }),
      }
    );
    if (res) {
      alert("Message sent successfully!");
      setForm({ name: "", mobile: "", email: "", message: "" });
    } else {
      alert("Failed to send message. Please try again later.");
    }
    // Add submission logic here (e.g., Firebase, email API, DB)
    alert("Message sent successfully!");
    setForm({ name: "", mobile: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      info: "+91 123 456 7890",
      subInfo: "Mon - Fri, 9AM - 6PM",
      href: "tel:+911234567890",
    },
    {
      icon: Mail,
      title: "Email Us",
      info: "info@rungreen.com",
      subInfo: "We'll respond within 24hrs",
      href: "mailto:info@rungreen.com",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      info: "123 Business District",
      subInfo: "Lucknow, UP 226001",
      href: "#",
    },
  ];

  return (
    <>
      <ContactBanner />

      <section className="bg-white min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-6 py-3 rounded-full text-sm font-semibold mb-8 border border-blue-100">
              <MessageSquare className="w-4 h-4" />
              Get In Touch
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-black mb-6 leading-tight">
              Contact <span className="text-blue-600">Us</span>
            </h1>

            <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
              Have a question or need a quote? Reach out to us — we're happy to
              help you create your next memorable event.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-black to-gray-900 rounded-3xl p-8 text-white h-full">
                <h3 className="text-2xl font-bold mb-8">Let's Connect</h3>

                <div className="space-y-8">
                  {contactInfo.map((contact, index) => {
                    const IconComponent = contact.icon;
                    return (
                      <div key={index} className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg mb-1">
                            {contact.title}
                          </h4>
                          <a
                            href={contact.href}
                            className="text-blue-400 hover:text-blue-300 transition-colors duration-300 font-medium"
                          >
                            {contact.info}
                          </a>
                          <p className="text-gray-400 text-sm mt-1">
                            {contact.subInfo}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Business Hours */}
                <div className="mt-12 pt-8 border-t border-gray-700">
                  <h4 className="font-semibold text-lg mb-4">Business Hours</h4>
                  <div className="space-y-2 text-gray-300">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span>10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 space-y-8">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-black mb-2">
                    Send us a Message
                  </h3>
                  <p className="text-gray-600">
                    Fill out the form below and we'll get back to you shortly.
                  </p>
                </div>
                <form method="POST">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="flex items-center gap-2 text-sm font-semibold text-black mb-3">
                        <User className="w-4 h-4" />
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent bg-white text-black transition-all duration-300"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label className="flex items-center gap-2 text-sm font-semibold text-black mb-3">
                        <Phone className="w-4 h-4" />
                        Mobile Number
                      </label>
                      <input
                        type="tel"
                        name="mobile"
                        value={form.mobile}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent bg-white text-black transition-all duration-300"
                        placeholder="9876543210"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-sm font-semibold text-black mb-3">
                      <Mail className="w-4 h-4" />
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent bg-white text-black transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-sm font-semibold text-black mb-3">
                      <MessageSquare className="w-4 h-4" />
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={6}
                      required
                      className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent bg-white text-black resize-none transition-all duration-300"
                      placeholder="Tell us more about your event requirements, preferred dates, budget, and any specific needs..."
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={handleSubmit}
                      className="w-full md:w-auto bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-400 hover:to-blue-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-2"
                    >
                      <Send className="w-5 h-5" />
                      Send Message
                    </button>
                  </div>
                </form>

                {/* Privacy Note */}
                <div className="pt-4 border-t border-gray-100">
                  <p className="text-xs text-gray-500 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    Your information is secure and will only be used to respond
                    to your inquiry.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-20 text-center">
            <div className="bg-blue-50 rounded-3xl p-8 md:p-12 border border-blue-100">
              <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">
                Ready to Plan Your Next Event?
              </h3>
              <p className="text-gray-600 text-lg mb-6 max-w-2xl mx-auto">
                From corporate gatherings to sporting events, we're here to make
                your vision come to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 hover:bg-blue-400 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Schedule a Consultation
                </button>
                <button className="bg-white hover:bg-gray-50 text-blue-600 px-8 py-4 rounded-xl font-semibold transition-all duration-300 border-2 border-blue-600 hover:border-blue-400">
                  View Our Portfolio
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
