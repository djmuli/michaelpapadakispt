import { motion } from "motion/react";
import { Instagram } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import img1 from "../../imports/IMG_0718.jpg";
import img2 from "../../imports/IMG_0716.jpg";
import img3 from "../../imports/IMG_0884.jpeg";
import img4 from "../../imports/IMG_0479.jpeg";
import img5 from "../../imports/IMG_0488.jpeg";
import img6 from "../../imports/wg_pt_image.JPG";

const instagramPosts = [img1, img2, img3, img4, img5, img6];

export function InstagramSection() {
  return (
    <section className="bg-black text-white py-24 sm:py-36 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-6"
        >
          <div>
            <p className="text-red-500 uppercase tracking-[0.3em] mb-4 text-sm">Follow The Journey</p>
            <h2 className="text-4xl sm:text-5xl tracking-tight">
              @MICHAEL.
              <br className="sm:hidden" />
              PAPADAKIS.PT
            </h2>
          </div>
          <Button
            size="lg"
            variant="outline"
            className="border-white/20 text-white bg-transparent hover:bg-white/10 flex-shrink-0"
            onClick={() => window.open("https://www.instagram.com/michael.papadakis.pt/", "_blank")}
          >
            <Instagram className="mr-2 h-5 w-5 text-red-500" />
            Follow on Instagram
          </Button>
        </motion.div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3">
          {instagramPosts.map((img, index) => (
            <motion.a
              key={index}
              href="https://www.instagram.com/michael.papadakis.pt/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className="group relative aspect-square overflow-hidden cursor-pointer"
            >
              <ImageWithFallback
                src={img}
                alt={`Michael Papadakis PT Instagram post ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Instagram className="w-10 h-10 text-white" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
