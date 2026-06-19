import { Instagram, Facebook, Phone, MapPin, ArrowUp } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import logoImg from "../../imports/Logo.PNG";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-zinc-950 text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <button onClick={scrollToTop} className="mb-6 block">
              <ImageWithFallback
                src={logoImg}
                alt="Michael Papadakis PT"
                className="h-16 w-auto object-contain"
              />
            </button>
            <p className="text-white/50 mb-6 max-w-sm leading-relaxed">
              Helping everyday people achieve lasting fitness results through personalised coaching at World Gym Marrickville.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/michael.papadakis.pt/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black border border-white/10 p-3 hover:border-red-600/50 hover:text-red-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61588516710099"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black border border-white/10 p-3 hover:border-red-600/50 hover:text-red-500 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="tel:0400169800"
                className="bg-black border border-white/10 p-3 hover:border-red-600/50 hover:text-red-500 transition-colors"
                aria-label="Call Michael"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="uppercase tracking-wider text-xs mb-5 text-white/40">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "Home", id: "" },
                { label: "About", id: "about" },
                { label: "Services", id: "services" },
                { label: "Intro Offers", id: "offers" },
                { label: "Contact", id: "contact" },
              ].map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() =>
                      link.id
                        ? document.getElementById(link.id)?.scrollIntoView({ behavior: "smooth" })
                        : window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                    className="text-white/60 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="uppercase tracking-wider text-xs mb-5 text-white/40">Location</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                <div className="text-white/60 text-sm">
                  <p>World Gym Marrickville</p>
                  <p>4 Carrington Road</p>
                  <p>Marrickville NSW 2204</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-red-500 flex-shrink-0" />
                <a href="tel:0400169800" className="text-white/60 hover:text-white transition-colors text-sm">
                  0400 169 800
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-sm">
            © {new Date().getFullYear()} Michael Papadakis PT. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="bg-black border border-white/10 p-3 hover:border-red-600/50 transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
