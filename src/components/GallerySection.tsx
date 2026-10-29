import React, { useState } from 'react';
import { X, ZoomIn, Camera, MapPin } from 'lucide-react';

interface GalleryItem {
  id: string;
  title: string;
  caption: string;
  tag: string;
  src: string;
  aspect: string;
}

export const GallerySection: React.FC = () => {
  const [activeImage, setActiveImage] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 'g-1',
      title: 'Architectural Heritage & Sunlit Walkways',
      caption: 'The timeless corridors of Shalom Hills where generations of students have walked and dreamt.',
      tag: 'Campus Grounds',
      src: '/src/assets/images/story_pathway_corridor_1793290595412.jpg',
      aspect: 'col-span-1 md:col-span-2 row-span-2',
    },
    {
      id: 'g-2',
      title: 'Alumni Mentorship Dialogue',
      caption: 'Small-group discussions on career strategy, university selection, and real-world hurdles.',
      tag: 'Mentorship Circles',
      src: '/src/assets/images/mentorship_discussion_1793290597980.jpg',
      aspect: 'col-span-1 row-span-1',
    },
    {
      id: 'g-3',
      title: 'Senior Campus Quadrangle at Dusk',
      caption: 'The academic wing illuminated at twilight before the commencement of evening symposiums.',
      tag: 'Institution Atrium',
      src: '/src/assets/images/campus_grounds_dusk_1793290598629.jpg',
      aspect: 'col-span-1 row-span-1',
    },
    {
      id: 'g-4',
      title: 'Generational Fellowship in the Atrium',
      caption: 'Celebrating shared roots and diverse global paths in an evening of community connections.',
      tag: 'Alumni Fellowship',
      src: '/src/assets/images/hero_alumni_gathering_1793290596997.jpg',
      aspect: 'col-span-1 md:col-span-2 row-span-1',
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#080808] border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="text-xs font-mono tracking-[0.25em] text-[#C9A227] uppercase block mb-3">
              MOMENTS & MEMORIES
            </span>
            <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-normal text-white leading-tight">
              CAMPUS & <span className="italic text-[#E8D9A8]">FELLOWSHIP.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#A1A1AA] font-light mt-3">
              Visual glimpses celebrating the grounds, halls, and vibrant interactions that define the Shalom community.
            </p>
          </div>
          <div className="text-xs font-mono text-[#71717A] flex items-center gap-1.5 shrink-0">
            <Camera className="w-4 h-4 text-[#C9A227]" />
            <span>CLICK ANY PHOTOGRAPH TO EXPAND</span>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveImage(item)}
              className={`${item.aspect} group relative rounded-xl overflow-hidden border border-white/10 hover:border-[#C9A227]/50 transition-all duration-300 cursor-pointer bg-[#141416] min-h-[260px] shadow-lg shadow-black/60`}
            >
              <img
                src={item.src}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              <div className="absolute top-4 right-4 p-2 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity text-white">
                <ZoomIn className="w-4 h-4 text-[#C9A227]" />
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-left">
                <span className="text-[10px] font-mono tracking-wider uppercase text-[#C9A227] block mb-1">
                  {item.tag}
                </span>
                <h3 className="font-editorial text-xl sm:text-2xl text-white font-normal leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-[#A1A1AA] font-light line-clamp-1 mt-1">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
          onClick={() => setActiveImage(null)}
        >
          <div
            className="max-w-4xl w-full bg-[#111113] border border-white/15 rounded-2xl overflow-hidden relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/70 text-white hover:text-[#C9A227] transition-colors"
              aria-label="Close image lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="max-h-[70vh] bg-black flex items-center justify-center overflow-hidden">
              <img
                src={activeImage.src}
                alt={activeImage.title}
                referrerPolicy="no-referrer"
                className="max-h-[70vh] w-auto object-contain"
              />
            </div>

            <div className="p-6 bg-[#111113] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#C9A227] block mb-1">
                  {activeImage.tag}
                </span>
                <h3 className="font-editorial text-2xl text-white font-normal">
                  {activeImage.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#A1A1AA] font-light mt-1">
                  {activeImage.caption}
                </p>
              </div>

              <div className="text-xs font-mono text-[#71717A] shrink-0 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#C9A227]" />
                <span>SHALOM HILLS CAMPUS</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
