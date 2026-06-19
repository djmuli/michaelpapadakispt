import { motion } from "motion/react";
import { Check } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import coachingImg from "../../imports/IMG_0716.jpg";
import championImg from "../../imports/LOGO_WG.JPG";

const focusPoints = [
  "Safe and effective exercise technique",
  "Personalised training programs",
  "Sustainable nutrition and lifestyle habits",
  "Accountability and ongoing support",
  "Building strength, fitness and confidence",
  "Long-term results that last",
];

export function AboutSection() {
  return (
    <section id="about" className="bg-black text-white py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-red-500 uppercase tracking-[0.3em] mb-4 text-sm">About Me</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl tracking-tight">
            MEET MICHAEL
            <br />
            <span className="text-white/50">PAPADAKIS</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="col-span-2 aspect-[4/3] overflow-hidden">
              <ImageWithFallback
                src={coachingImg}
                alt="Michael Papadakis coaching a client at World Gym"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square overflow-hidden relative">
              <ImageWithFallback
                src={championImg}
                alt="Michael Papadakis — Natural Bodybuilding Champion"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3">
                <p className="text-white text-xs uppercase tracking-wider">NSW & National Champion</p>
              </div>
            </div>
            <div className="aspect-square bg-red-600 flex flex-col items-center justify-center p-6 text-center">
              <p className="text-5xl text-white mb-2">40+</p>
              <p className="text-white/90 text-sm uppercase tracking-wider leading-tight">Years Training Experience</p>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-5 text-white/70 text-lg leading-relaxed"
          >
            <p>
              With over 40 years of experience in health, fitness and personal training, I've helped hundreds of people transform their bodies, improve their health and build lasting confidence.
            </p>
            <p>
              As a qualified Personal Trainer and multi-time NSW State and National Natural Bodybuilding Champion, I bring a depth of knowledge and experience that few trainers can match. More importantly, I know how to apply proven training principles to help everyday people achieve real, sustainable results.
            </p>
            <p>
              Whether your goal is losing weight, building strength, improving fitness, increasing energy, gaining muscle or simply feeling healthier and more confident — every program is tailored to your individual needs, lifestyle and goals.
            </p>

            <div className="pt-2">
              <p className="text-white uppercase tracking-wider text-sm mb-5">My coaching focuses on:</p>
              <ul className="space-y-3">
                {focusPoints.map((point, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08, duration: 0.5 }}
                    className="flex items-center gap-3"
                  >
                    <Check className="w-4 h-4 text-red-500 flex-shrink-0" />
                    <span className="text-base">{point}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-white/10">
              <p className="text-white/50 italic text-base">
                There are no quick fixes, fad diets or one-size-fits-all programs. Just proven coaching, genuine support and a commitment to helping you become the healthiest, strongest version of yourself.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
