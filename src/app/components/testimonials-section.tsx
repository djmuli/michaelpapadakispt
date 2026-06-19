import { motion } from "motion/react";
import { Star } from "lucide-react";
import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import img1 from "../../imports/UpdateImage2.jpeg";
import img2 from "../../imports/UpdateImage3.jpeg";
import img3 from "../../imports/UpdateImage4.jpeg";
import img4 from "../../imports/IMG_0839.jpeg";
import img5 from "../../imports/IMG_0791.jpeg";

const testimonials = [
  {
    name: "Wayne Brown",
    content: "Michael's knowledge is second to none. After just a few months I'm stronger than I've ever been and my technique has completely transformed. He knows exactly how to push you without overdoing it.",
  },
  {
    name: "Betty Zeritis",
    content: "I was nervous starting the gym at my age but Michael made me feel completely at ease. I've lost weight, gained confidence and actually enjoy coming to the gym now. Couldn't recommend him more.",
  },
  {
    name: "Bethany Millet",
    content: "Training with Michael has been life-changing. He's patient, incredibly knowledgeable and my body has changed more in 3 months than in years training on my own.",
  },
  {
    name: "Dan M",
    content: "Best investment I've made in my health. Michael genuinely cares about your results and adjusts your program as you improve. You can just feel you're in safe, capable hands.",
  },
  {
    name: "Alkira Rose",
    content: "Michael is the most motivating trainer I've worked with. Supportive, professional and knows how to get results. My fitness, strength and confidence have improved so much.",
  },
  {
    name: "Beauty By Vicky",
    content: "I came to Michael not knowing where to start and he made everything so approachable. The personalised program and ongoing support made all the difference. Highly recommend.",
  },
  {
    name: "John-Martin Pryde",
    content: "Michael's experience shows in every session. His coaching is structured, effective and he genuinely invests in your progress. Best trainer I've worked with by a long way.",
  },
  {
    name: "Jennifer Kulow",
    content: "I've trained with a few coaches over the years but Michael stands out. He listens, adapts and really pushes you toward your goals in a way that feels achievable and sustainable.",
  },
  {
    name: "Audrey Doncas",
    content: "No one compares to Michael. He truly personalises every session, teaches you the right way to move and supports you every step of the way. The results speak for themselves.",
  },
];

const clientPhotos = [img1, img2, img3, img4, img5];

function Stars() {
  return (
    <div className="flex gap-1 mb-3">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-3.5 h-3.5 fill-red-500 text-red-500" />
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-zinc-950 text-white py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-lg">★</span>
              ))}
            </div>
            <span className="text-white/50 text-sm uppercase tracking-widest">Real Google Reviews</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl tracking-tight mb-4">
            REAL CLIENTS.
            <br />
            <span className="text-white/50">REAL RESULTS.</span>
          </h2>
          <p className="text-white/40 text-sm">
            Trusted by clients across Marrickville and Sydney's Inner West.
          </p>
        </motion.div>

        {/* Photo grid — portrait aspect ratio shows full bodies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-3 sm:grid-cols-5 gap-2 sm:gap-3 mb-10"
        >
          {clientPhotos.map((img, i) => (
            <div key={i} className="aspect-[3/4] overflow-hidden">
              <ImageWithFallback
                src={img}
                alt="Michael Papadakis PT with a client"
                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </motion.div>

        {/* 3×3 grid — desktop */}
        <div className="hidden md:grid md:grid-cols-3 gap-4">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06, duration: 0.6 }}
              className="bg-black border border-white/10 p-6 hover:border-red-600/30 transition-colors flex flex-col"
            >
              <Stars />
              <p className="text-white/70 mb-5 leading-relaxed text-sm flex-1">"{t.content}"</p>
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <p className="text-white font-semibold text-sm tracking-wide">{t.name}</p>
                <span className="text-white/25 text-xs uppercase tracking-wider">Google</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="md:hidden">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35 }}
            className="bg-black border border-white/10 p-6 mb-5"
          >
            <Stars />
            <p className="text-white/70 mb-5 leading-relaxed">
              "{testimonials[activeIndex].content}"
            </p>
            <div className="flex items-center justify-between pt-4 border-t border-white/10">
              <p className="text-white font-semibold text-sm">{testimonials[activeIndex].name}</p>
              <span className="text-white/25 text-xs uppercase tracking-wider">Google</span>
            </div>
          </motion.div>
          <div className="flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-1.5 rounded-full transition-all ${
                  index === activeIndex ? "bg-red-500 w-8" : "bg-white/20 w-2"
                }`}
                aria-label={`Testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
