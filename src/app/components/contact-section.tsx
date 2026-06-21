import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Phone, MapPin, Instagram, Facebook, Star } from "lucide-react";
import { useState } from "react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    goal: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thanks for getting in touch! Michael will be in contact with you shortly.");
    setFormData({ name: "", email: "", phone: "", goal: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="bg-black text-white py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-red-500 uppercase tracking-[0.3em] mb-4 text-sm">Get In Touch</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl tracking-tight mb-6">
            START YOUR
            <br />
            <span className="text-white/50">FITNESS JOURNEY TODAY</span>
          </h2>
          <p className="text-white/50 text-sm max-w-2xl leading-relaxed">
            Personal training on-site at World Gym Marrickville, for residents of Marrickville, Earlwood, Undercliffe, Dulwich Hill, Petersham, Sydenham, Tempe, St Peters, Newtown and surrounding Inner West suburbs.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <Label htmlFor="name" className="text-white/70 mb-2 block text-sm uppercase tracking-wider">
                  Full Name *
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-zinc-950 border-white/10 text-white focus:border-red-600 h-12 focus-visible:ring-0"
                  placeholder="Your name"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-white/70 mb-2 block text-sm uppercase tracking-wider">
                  Email Address *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-zinc-950 border-white/10 text-white focus:border-red-600 h-12 focus-visible:ring-0"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <Label htmlFor="phone" className="text-white/70 mb-2 block text-sm uppercase tracking-wider">
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-zinc-950 border-white/10 text-white focus:border-red-600 h-12 focus-visible:ring-0"
                  placeholder="0400 000 000"
                />
              </div>

              <div>
                <Label htmlFor="message" className="text-white/70 mb-2 block text-sm uppercase tracking-wider">
                  What Are Your Goals? *
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-zinc-950 border-white/10 text-white focus:border-red-600 min-h-[130px] focus-visible:ring-0"
                  placeholder="Tell me about your fitness goals and what you'd like to achieve..."
                />
              </div>

              <div className="flex gap-4 pt-2">
                <Button
                  type="submit"
                  size="lg"
                  className="flex-1 bg-red-600 text-white hover:bg-red-700 h-12 uppercase tracking-wider"
                >
                  Send Message
                </Button>
              </div>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-between gap-5"
          >
            {/* Location + phone */}
            <div className="bg-zinc-950 border border-white/10 p-5 flex items-start gap-4">
              <MapPin className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-white mb-0.5">World Gym Marrickville</p>
                <p className="text-white/60 text-sm">4 Carrington Road, Marrickville NSW 2204</p>
                <a href="tel:0400169800" className="text-white text-lg font-semibold hover:text-red-400 transition-colors mt-2 flex items-center gap-2">
                  <Phone className="w-4 h-4 text-red-500" />
                  0400 169 800
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="bg-zinc-950 border border-white/10 overflow-hidden flex-1">
              <iframe
                title="World Gym Marrickville"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.5!2d151.155!3d-33.915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12b0b3b3b3b3b3%3A0x0!2sWorld%20Gym%20Marrickville%2C%204%20Carrington%20Rd%2C%20Marrickville%20NSW%202204!5e0!3m2!1sen!2sau!4v1718700000000!5m2!1sen!2sau"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(1) invert(0.9) contrast(0.9)", minHeight: 160 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Social links */}
            <div>
              <p className="text-white/40 uppercase tracking-[0.2em] text-xs mb-3">Follow & Connect</p>
              <div className="flex flex-wrap gap-2">
                <a
                  href="https://www.instagram.com/michael.papadakis.pt/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-w-0 flex-1 items-center gap-2 bg-zinc-950 border border-white/10 px-4 py-3 hover:border-red-600/50 transition-colors"
                >
                  <Instagram className="w-4 h-4 text-red-500" />
                  <span className="text-white/70 text-sm">Instagram</span>
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61588516710099"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-w-0 flex-1 items-center gap-2 bg-zinc-950 border border-white/10 px-4 py-3 hover:border-red-600/50 transition-colors"
                >
                  <Facebook className="w-4 h-4 text-red-500" />
                  <span className="text-white/70 text-sm">Facebook</span>
                </a>
                <a
                  href="https://share.google/ki7opxprUE9uBqXuY"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-w-0 flex-1 items-center gap-2 bg-zinc-950 border border-white/10 px-4 py-3 hover:border-red-600/50 transition-colors"
                >
                  <Star className="w-4 h-4 text-red-500" />
                  <span className="text-white/70 text-sm">Reviews</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
