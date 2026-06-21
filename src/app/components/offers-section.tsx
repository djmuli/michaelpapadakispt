import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Check } from "lucide-react";

const memberships = [
  {
    tier: "Bronze",
    frequency: "1 Session Per Week",
    pricePerSession: "$120",
    pricePerWeek: "$120",
    description: "Great for ongoing guidance, accountability and steady progress.",
    featured: false,
  },
  {
    tier: "Silver",
    frequency: "2 Sessions Per Week",
    pricePerSession: "$110",
    pricePerWeek: "$220",
    description: "Perfect for building momentum while maintaining flexibility.",
    featured: false,
  },
  {
    tier: "Gold",
    frequency: "3 Sessions Per Week",
    pricePerSession: "$105",
    pricePerWeek: "$315",
    description: "Ideal for accelerated results, maximum accountability and consistent progress.",
    featured: true,
    badge: "Best Results",
  },
];

const includes = [
  "Personalised training program",
  "Technique coaching",
  "Progress tracking",
  "Nutrition guidance",
  "Accountability & support",
  "Ongoing program adjustments",
];

const terms = [
  "An initial two weeks of sessions must be paid in advance before commencing training.",
  "Ongoing membership payments are required fortnightly in advance.",
  "Membership fees are non-refundable.",
  "Sessions cancelled with at least 24 hours' notice may be rescheduled.",
  "Sessions cancelled with less than 24 hours' notice may be forfeited.",
  "Memberships may be cancelled with four weeks' written notice.",
  "Any sessions remaining during the notice period will continue as scheduled.",
];

export function OffersSection() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="offers" className="bg-zinc-950 text-white py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-red-500 uppercase tracking-[0.3em] mb-4 text-sm">Memberships</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl tracking-tight mb-4">
            ONGOING COACHING
            <br />
            <span className="text-white/50">MEMBERSHIPS</span>
          </h2>
          <p className="text-white/50 text-base max-w-xl mx-auto">
            Choose the level of coaching and accountability that best suits your goals.
          </p>
        </motion.div>

        {/* Pricing cards — Gold last so it visually anchors right on desktop */}
        <div className="grid md:grid-cols-3 gap-4 mb-14">
          {memberships.map((m, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, duration: 0.7 }}
              className={`relative flex flex-col border p-8 ${
                m.featured
                  ? "border-red-600 bg-black shadow-lg shadow-red-900/20 md:scale-[1.02]"
                  : "border-white/10 bg-black"
              }`}
            >
              {m.featured && m.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-red-600 text-white text-xs uppercase tracking-wider px-4 py-1">
                    {m.badge}
                  </span>
                </div>
              )}

              {/* Tier label */}
              <p className={`uppercase tracking-[0.3em] text-xs mb-6 ${m.featured ? "text-red-500" : "text-white/40"}`}>
                {m.tier}
              </p>

              {/* Frequency */}
              <p className="text-white text-lg mb-6">{m.frequency}</p>

              {/* Pricing */}
              <div className="mb-2">
                <div className="flex items-end gap-1 mb-1">
                  <span className="text-5xl text-white">{m.pricePerSession}</span>
                  <span className="text-white/40 text-sm mb-2">/ session</span>
                </div>
                <p className={`text-sm font-semibold ${m.featured ? "text-red-400" : "text-white/50"}`}>{m.pricePerWeek} per week</p>
              </div>

              <div className="h-px bg-white/10 my-6" />

              <p className="text-white/55 text-sm leading-relaxed flex-1 mb-8">
                {m.description}
              </p>

              <Button
                className={`w-full uppercase tracking-wider py-5 h-auto ${
                  m.featured
                    ? "bg-red-600 text-white hover:bg-red-700"
                    : "bg-white/8 text-white hover:bg-white/15 border border-white/15"
                }`}
                onClick={scrollToContact}
              >
                Enquire Now
              </Button>
            </motion.div>
          ))}
        </div>

        {/* All memberships include */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="border border-white/10 p-8 mb-8"
        >
          <p className="text-white uppercase tracking-[0.2em] text-xs mb-6 text-center">
            All Memberships Include
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {includes.map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <Check className="w-4 h-4 text-red-500 flex-shrink-0" />
                <span className="text-white/65 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Membership Terms — deliberately low-weight */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="border-t border-white/10 pt-6 mt-2"
        >
          <p className="text-white/25 uppercase tracking-[0.2em] text-xs mb-3">Membership Terms</p>
          <div className="flex flex-wrap gap-x-6 gap-y-1">
            {terms.map((term, i) => (
              <p key={i} className="text-white/25 text-xs leading-relaxed">
                {term}
              </p>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
