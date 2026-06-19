import { motion } from "motion/react";
import { Award, Clock, GraduationCap, Users, MapPin } from "lucide-react";

const trustItems = [
  { icon: Clock, label: "40+ Years Experience" },
  { icon: Award, label: "NSW & National Champion" },
  { icon: GraduationCap, label: "Certificate IV Qualified" },
  { icon: Users, label: "Personalised Coaching" },
  { icon: MapPin, label: "World Gym Marrickville" },
];

export function TrustBar() {
  return (
    <section className="bg-zinc-950 border-y border-white/10 py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center items-center gap-3 sm:gap-4"
        >
          {trustItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2.5 bg-white/5 border border-white/10 px-4 py-2.5 rounded-sm"
            >
              <item.icon className="w-3.5 h-3.5 text-red-500 flex-shrink-0" />
              <span className="text-white/85 text-xs uppercase tracking-widest whitespace-nowrap">
                {item.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
