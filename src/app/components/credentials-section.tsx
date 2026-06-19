import { motion } from "motion/react";
import { Award, GraduationCap, Heart } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import championCollageImg from "../../imports/wg_pt_image.JPG";

const qualifications = [
  { icon: GraduationCap, title: "Certificate IV in Fitness", code: "SIS40221-01V01" },
  { icon: GraduationCap, title: "Certificate III in Fitness", code: "SIS30321-01V02" },
  { icon: Heart, title: "First Aid & CPR Certified", code: "HLTAID011" },
];

const achievements = [
  { label: "NSW State Bodybuilding Champion", detail: "Multi-time state title winner" },
  { label: "National Bodybuilding Champion", detail: "National Natural Bodybuilding title" },
  { label: "Classic Physique Champion", detail: "Additional national title" },
  { label: "40+ Years Experience", detail: "Coaching & competitive training" },
];

export function CredentialsSection() {
  return (
    <section className="bg-black text-white py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-red-500 uppercase tracking-[0.3em] mb-4 text-sm">Credentials</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl tracking-tight">
            TRAIN WITH A
            <br />
            <span className="text-white/50">PROVEN CHAMPION</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Champion image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square overflow-hidden">
              <ImageWithFallback
                src={championCollageImg}
                alt="Michael Papadakis - Natural Bodybuilding Champion collage"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-8 pb-6">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-red-500" />
                <span className="text-white/90 uppercase tracking-wider text-sm">
                  NSW & National Bodybuilding Champion
                </span>
              </div>
            </div>
          </motion.div>

          {/* Credentials */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            {/* Achievements — highlighted as credibility blocks */}
            <div>
              <p className="text-white/40 uppercase tracking-[0.2em] text-xs mb-6">
                Bodybuilding Achievements
              </p>
              <div className="space-y-3">
                {achievements.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex items-start gap-4 bg-zinc-950 border border-white/10 px-5 py-4 hover:border-red-600/30 transition-colors"
                  >
                    <Award className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-white font-semibold leading-tight">{item.label}</p>
                      <p className="text-white/40 text-xs mt-0.5">{item.detail}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Qualifications */}
            <div>
              <p className="text-white/40 uppercase tracking-[0.2em] text-xs mb-6">
                Professional Qualifications
              </p>
              <div className="space-y-3">
                {qualifications.map((qual, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="bg-zinc-950 border border-white/10 p-4 flex items-start gap-4 hover:border-red-600/30 transition-colors"
                  >
                    <qual.icon className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-white text-sm">{qual.title}</p>
                      <p className="text-white/35 text-xs font-mono mt-0.5">{qual.code}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
