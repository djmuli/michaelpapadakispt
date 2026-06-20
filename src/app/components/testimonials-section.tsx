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
    content: "What a great guy. So personable with vast knowledge and experience. He has helped my journey so much. I cannot recommend him highly enough. Thanks Michael!",
  },
  {
    name: "Betty Zeritis",
    content: "Best PT ever! Really focused on me as an individual and pushed me beyond what I thought I was capable of. A super nice, positive guy too. Highly recommend.",
  },
  {
    name: "Bethany Millet",
    content: "Michael is a great trainer and has taken my goals seriously from day one. The thing that strikes me about Michael is how knowledgeable he is - he'll explain what we're doing and why, and he's often giving me alternatives to work a muscle group in case different machines are taken.\n\nHe pulls together comprehensive workouts that are the perfect balance of familiar and new, so I am always learning. Michael has a holistic approach - while we are focusing on a primary muscle group, he's reminding me to think about everything else that is working, to keep my posture solid, and keep that mind-body connection.\n\nHe does push me but also reminds me not to rush. On top of all that, Michael is caring and personable and clearly respected in the gym. It's an absolute pleasure to train with him.",
  },
  {
    name: "Dan M",
    content: "Not only does Michael have decades of experience, but he is also the nicest guy going around, listens and takes on board your goals. An absolute amazing PT!! Couldn't have chosen a better one.",
  },
  {
    name: "Alkira Rose",
    content: "I've been training with Michael Papadakis since last year, and I am genuinely amazed by the results I've achieved so far. I've been training for years, but since working with Michael I've learnt more than I ever expected.\n\nHis knowledge, attention to detail, and ability to explain the 'why' behind everything has completely changed the way I approach my training.\n\nI originally started training with Michael because of his extensive bodybuilding knowledge, as I'm preparing for my very first competition this September. From day one, I've had complete confidence in his coaching, and that confidence has only grown as I've seen the progress we've made together.\n\nMichael is incredibly passionate about what he does and truly cares about helping his clients achieve their goals. He knows exactly when to push you, how to adjust your training when needed, and how to bring out your best.\n\nI have full faith that my physique will be on point for comp day because of his guidance and expertise.\n\nIf you're looking for a trainer who is knowledgeable, professional, supportive, and genuinely invested in your success, I couldn't recommend Michael highly enough. Thank you for helping me become the strongest, most confident version of myself!",
  },
  {
    name: "Beauty By Vicky",
    content: "I've been training with Michael and I highly recommend him. He is knowledgeable, professional, and genuinely cares. He takes the time to explain things clearly, is patient and encouraging, and always makes me feel comfortable. He's such a nice guy.\n\nIf you're looking for a personal trainer who is friendly, supportive, and truly invested in your progress, I highly recommend Michael.",
  },
  {
    name: "John-Martin Pryde",
    content: "I've really enjoyed training with Michael. He's super knowledgeable and takes the time to understand what you're trying to achieve rather than using a one-size-fits-all approach.\n\nHe's happy to work with your goals, adjust things when needed, and explain the reasoning behind the training so you know why you're doing what you're doing.\n\nHe's approachable, easy to get along with, and creates a great training environment.\n\nI'd definitely recommend Michael to anyone looking for a PT who's invested in helping you make progress and reach your goals.",
  },
  {
    name: "Jennifer Kulow",
    content: "Michael is one of the best! Such a hype man! He really takes the time to understand your goals. He works through all the exercises to ensure your form is correct. Highly recommend.",
  },
  {
    name: "Audrey Doncas",
    content: "I've been training with Michael almost 3 months now. I have noticed such a change in my physique and also my consistency with attending the gym.\n\nMichael helped me become more confident in the gym by giving me structured workouts, knowledge and motivation.",
  },
];

const clientPhotos = [img1, img2, img3, img4, img5];
const REVIEW_PREVIEW_LENGTH = 250;

function Stars() {
  return (
    <div className="flex gap-1 mb-3">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-3.5 h-3.5 fill-red-500 text-red-500" />
      ))}
    </div>
  );
}

function ReviewText({
  content,
  isExpanded,
  onToggle,
  className = "",
}: {
  content: string;
  isExpanded: boolean;
  onToggle: () => void;
  className?: string;
}) {
  const needsExpansion = content.length > REVIEW_PREVIEW_LENGTH;
  const visibleContent =
    needsExpansion && !isExpanded
      ? content.slice(0, REVIEW_PREVIEW_LENGTH)
      : content;

  return (
    <div className={className}>
      <p className="text-white/70 leading-relaxed whitespace-pre-line">
        "{visibleContent}
        {needsExpansion && !isExpanded ? <span aria-hidden="true">...</span> : null}"
      </p>
      {needsExpansion ? (
        <button
          type="button"
          onClick={onToggle}
          className="mt-3 text-xs uppercase tracking-wider text-red-400 hover:text-red-300 transition-colors"
          aria-expanded={isExpanded}
        >
          {isExpanded ? "Read Less" : "Read More"}
        </button>
      ) : null}
    </div>
  );
}

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [expandedReviews, setExpandedReviews] = useState<Record<number, boolean>>({});

  const toggleReview = (index: number) => {
    setExpandedReviews((current) => ({
      ...current,
      [index]: !current[index],
    }));
  };

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
        <div className="hidden md:block md:columns-2 lg:columns-3 gap-4">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06, duration: 0.6 }}
              className="bg-black border border-white/10 p-6 mb-4 hover:border-red-600/30 transition-colors flex flex-col break-inside-avoid"
            >
              <Stars />
              <ReviewText
                content={t.content}
                isExpanded={!!expandedReviews[index]}
                onToggle={() => toggleReview(index)}
                className="mb-5 text-sm flex-1"
              />
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
            <ReviewText
              content={testimonials[activeIndex].content}
              isExpanded={!!expandedReviews[activeIndex]}
              onToggle={() => toggleReview(activeIndex)}
              className="mb-5"
            />
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
