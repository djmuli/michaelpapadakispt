import { motion } from "motion/react";
import { Clock, Shield, UserCheck, Flame, Heart } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import whyImg from "../../imports/UpdateImage4.jpeg";

const reasons = [
  {
    icon: Clock,
    title: "Real Experience.\nReal Results.",
    description: "40+ years helping hundreds of everyday people lose weight, build strength and gain lasting confidence through proven coaching methods.",
  },
  {
    icon: Shield,
    title: "Expert Guidance\nEvery Step",
    description: "Learn proper technique from the start. Every exercise is coached to maximise results and reduce injury risk.",
  },
  {
    icon: UserCheck,
    title: "Personalised\nFor Your Goals",
    description: "No generic programs. Every plan is built around your fitness level, lifestyle and goals.",
  },
  {
    icon: Flame,
    title: "Accountability\nThat Works",
    description: "Consistency is what drives results. Michael provides the motivation and structure to keep you progressing.",
  },
  {
    icon: Heart,
    title: "A Trainer Who\nTruly Cares",
    description: "Your success is the priority. Genuine support, encouragement and professional guidance every step of the way.",
  },
];

export function WhyTrainSection() {
  return (
    <section className="bg-zinc-950 text-white py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header + image */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-red-500 uppercase tracking-[0.3em] mb-4 text-sm">Why Choose Michael</p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl tracking-tight mb-6">
              WHY TRAIN
              <br />
              <span className="text-white/50">WITH MICHAEL</span>
            </h2>
            <p className="text-white/50 leading-relaxed">
              Coaching built on four decades of real-world experience — for everyday people who want results that actually last.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="aspect-[10/9] overflow-hidden"
          >
            <ImageWithFallback
              src={whyImg}
              alt="Michael Papadakis with a client at World Gym Marrickville"
              className="w-full h-full object-cover object-[center_25%]"
            />
          </motion.div>
        </div>

        {/* Reason cards — 1 col mobile, 2 col tablet, 5 col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-black border border-white/10 p-6 hover:border-red-600/30 transition-colors group"
            >
              <div className="w-10 h-10 bg-red-600/10 flex items-center justify-center mb-5 group-hover:bg-red-600/20 transition-colors flex-shrink-0">
                <reason.icon className="w-5 h-5 text-red-500" />
              </div>
              <h3 className="text-sm font-semibold mb-3 tracking-tight leading-snug whitespace-pre-line text-white">
                {reason.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
