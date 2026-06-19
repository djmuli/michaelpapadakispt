import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Phone } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import ctaImg from "../../imports/UpdateImage1.jpg";

export function FinalCtaSection() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative py-28 sm:py-36 overflow-hidden">
      <div className="absolute inset-0">
        <ImageWithFallback
          src={ctaImg}
          alt="Michael Papadakis coaching at World Gym"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/88" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-transparent" />
      </div>

      <div className="absolute top-0 left-0 right-0 h-1 bg-red-600" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl text-white mb-5 tracking-tight leading-tight">
            READY TO BECOME
            <span className="text-red-500"> STRONGER,</span>
            <br />
            FITTER AND MORE
            <br />
            CONFIDENT?
          </h2>
          <p className="text-white/55 text-lg mb-10">
            Limited introductory offers available now for new clients.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-red-600 text-white hover:bg-red-700 text-base px-10 py-6 h-auto uppercase tracking-wider"
            >
              Book Your First Session
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-white/30 text-white bg-transparent hover:bg-white/10 text-base px-8 py-6 h-auto uppercase tracking-wider"
            >
              <a href="tel:0400169800" className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                0400 169 800
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
