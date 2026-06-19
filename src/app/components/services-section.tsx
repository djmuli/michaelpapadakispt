import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Check } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import serviceImg from "../../imports/IMG_0884.jpeg";

const features = [
  "Personalised training program",
  "Technique coaching & form correction",
  "Progress tracking",
  "Nutrition guidance",
  "Accountability support",
  "Ongoing program adjustments",
];

const suitableFor = [
  "Beginners",
  "Weight loss",
  "Muscle building",
  "Strength training",
  "General fitness",
  "Competition preparation",
];

export function ServicesSection() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="bg-black text-white py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-red-500 uppercase tracking-[0.3em] mb-4 text-sm">Services</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl tracking-tight">
            1-ON-1
            <br />
            <span className="text-white/50">PERSONAL TRAINING</span>
          </h2>
          <p className="text-red-400 uppercase tracking-widest text-sm mt-4">
            Personalised Coaching. Real Results.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square overflow-hidden">
              <ImageWithFallback
                src={serviceImg}
                alt="Michael Papadakis with a client at World Gym Marrickville"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-red-600 p-5">
              <p className="text-white uppercase tracking-wider text-sm">World Gym</p>
              <p className="text-white/80 text-xs">Marrickville</p>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              Achieve your goals faster with expert guidance, accountability and a training plan built specifically for you.
            </p>

            <div className="grid sm:grid-cols-2 gap-8 mb-10">
              <div>
                <p className="text-white uppercase tracking-wider text-xs mb-4 pb-3 border-b border-white/10">
                  What's Included
                </p>
                <ul className="space-y-3">
                  {features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/70 text-sm">
                      <Check className="w-4 h-4 mt-0.5 flex-shrink-0 text-red-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-white uppercase tracking-wider text-xs mb-4 pb-3 border-b border-white/10">
                  Suitable For
                </p>
                <ul className="space-y-3">
                  {suitableFor.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/70 text-sm">
                      <Check className="w-4 h-4 mt-0.5 flex-shrink-0 text-red-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-red-600 text-white hover:bg-red-700 uppercase tracking-wider px-10 py-6 h-auto"
            >
              Book Your Free Consultation
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
