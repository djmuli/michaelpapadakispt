import { motion } from "motion/react";
import { Button } from "./ui/button";
import { ChevronDown, Phone } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import heroImg from "../../imports/UpdateImage1.jpg";

export function HeroSection() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Darkened background — image visible but messaging takes priority */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src={heroImg}
          alt="Michael Papadakis coaching a client at World Gym Marrickville"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60" />
      </div>

      <div className="relative z-10 h-full flex flex-col justify-center pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl text-white mb-6 tracking-tight leading-tight"
          >
            PERSONAL TRAINING
            <br />
            THAT DELIVERS
            <br />
            <span className="text-red-500">REAL RESULTS.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-base sm:text-lg text-white/65 mb-2 max-w-xl leading-relaxed"
          >
            Personal training on-site at World Gym Marrickville, helping people across Marrickville and Sydney's Inner West lose weight, build strength, improve fitness and gain confidence.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-sm text-red-400 uppercase tracking-wider mb-10"
          >
            40+ years of experience helping everyday people achieve lasting results.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 mb-10"
          >
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-red-600 text-white hover:bg-red-700 text-base sm:text-lg px-10 py-7 h-auto uppercase tracking-wider shadow-lg shadow-red-900/40"
            >
              Book Your Free Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-white/50 text-white bg-transparent hover:bg-white/10 text-base px-8 py-7 h-auto uppercase tracking-wider"
            >
              <a href="tel:0400169800" className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Call Michael
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-wrap gap-x-5 gap-y-2"
          >
            {["40+ Years Experience", "Personalised Coaching", "NSW & National Champion", "Cert IV Qualified"].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />
                <span className="text-white/50 text-xs uppercase tracking-wider">{item}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.button
          onClick={scrollToAbout}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="text-white/40 hover:text-white transition-colors"
        >
          <ChevronDown size={32} />
        </motion.button>
      </motion.div>
    </section>
  );
}
