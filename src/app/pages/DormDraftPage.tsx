import { useEffect, useState } from 'react';
import { ArrowLeft, ChevronLeft, ChevronRight, ExternalLink, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

type SlideKey = 'explore' | 'arrange' | 'addFurniture' | 'removeFurniture';

const slides: {
  key: SlideKey;
  title: string;
  description: string;
  videoSrc: string;
}[] = [
  {
    key: 'explore',
    title: 'Explore your dorm in 3D',
    description:
      'View a true-to-scale model of your dorm room and understand the space before move-in.',
    videoSrc: '/projects/dormdraft/dormdraft-explore.mp4',
  },
  {
    key: 'arrange',
    title: 'Arrange furniture to scale',
    description:
      'Move and position furniture to test different layouts and make the most of your shared space.',
    videoSrc: '/projects/dormdraft/dormdraft-arrange.mov',
  },
  {
    key: 'addFurniture',
    title: 'Add new furniture to your dorm',
    description:
      'Drag and place new furniture items into the room to see what fits before arriving on campus.',
    videoSrc: '/projects/dormdraft/dormdraft-add-furniture.mov',
  },
  {
    key: 'removeFurniture',
    title: 'Remove furniture and reset your layout',
    description:
      'Quickly remove items from the room to compare layouts, simplify your setup, or start over.',
    videoSrc: '/projects/dormdraft/dormdraft-remove-furniture.mov',
  },
];

export default function DormDraftPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    }, []);

  const currentSlide = slides[activeIndex];

  const goPrev = () => {
    setActiveIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goNext = () => {
    setActiveIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Header */}
      <div className="sticky top-0 z-50 bg-[#232D4B] backdrop-blur border-b border-[#E5E7EB]">
        <div className="max-w-[1440px] mx-auto px-8 py-5 flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white hover:text-[#E57200] transition-colors font-medium"
          >
            <ArrowLeft size={18} />
            Back
          </Link>

          <div className="hidden md:flex items-center gap-8 text-[15px] font-medium text-white">
            <a href="#about" className="hover:text-[#E57200] transition-colors">
              About
            </a>
            <a href="#walkthrough" className="hover:text-[#E57200] transition-colors">
              Walkthrough
            </a>
            <a href="#tech-stack" className="hover:text-[#E57200] transition-colors">
              Tech Stack
            </a>
            <a href="#links" className="hover:text-[#E57200] transition-colors">
              Links
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-[1100px] mx-auto px-8 py-20">
        {/* Title + Tagline */}
        <section className="text-center mb-10">
          <h1
            className="text-[#232D4B] font-bold text-[60px] mb-3"
            style={{ fontFamily: 'Sora, sans-serif' }}
          >
            DormDraft
          </h1>
          {/* <p className="text-[#444] text-[22px] max-w-[740px] mx-auto leading-[1.5]">
            Interactive 3D dorm planner for UVA students
          </p> */}
        </section>

        {/* About the Project */}
        <section id="about" className="mb-14 scroll-mt-24">
          <div className="max-w-[820px] mx-auto text-center">
            <h2
              className="text-[#232D4B] font-bold text-[30px] mb-4"
              style={{ fontFamily: 'Sora, sans-serif' }}
            >
              About the Project
            </h2>
            <p className="text-[#555] text-[16px] leading-[1.9]">
              DormDraft is an interactive 3D dorm planning tool built to help UVA students prepare for move-in before ever seeing their room in person. Users can explore modeled layouts of Watson-Webb, Kellogg, and Cauthen Hall, arrange furniture to scale, and experiment with different setups for shared spaces. The goal is to make it easier for students to understand what fits, plan what to bring, and feel more prepared before arriving on campus.
            </p>
          </div>
        </section>

        {/* Walkthrough */}
        <section id="walkthrough" className="mb-14 scroll-mt-24">
          <div className="rounded-2xl overflow-hidden border border-[#E5E7EB] shadow-md bg-white max-w-[900px] mx-auto">
            <div className="relative w-full aspect-video bg-[#F8F8F8]">
              <video
                key={currentSlide.videoSrc}
                src={currentSlide.videoSrc}
                poster="/projects/dormdraft/dormdraft-poster.jpg"
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                controls={false}
              />

              {/* Left Arrow */}
              <button
                onClick={goPrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 hover:bg-white text-[#232D4B] shadow-md flex items-center justify-center transition-colors"
                aria-label="Previous slide"
              >
                <ChevronLeft size={22} />
              </button>

              {/* Right Arrow */}
              <button
                onClick={goNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 hover:bg-white text-[#232D4B] shadow-md flex items-center justify-center transition-colors"
                aria-label="Next slide"
              >
                <ChevronRight size={22} />
              </button>
            </div>

            <div className="px-8 py-8 text-center">
              <h2
                className="text-[#232D4B] font-bold text-[30px] mb-3"
                style={{ fontFamily: 'Sora, sans-serif' }}
              >
                {currentSlide.title}
              </h2>
              <p className="text-[#555] text-[16px] leading-[1.8] max-w-[700px] mx-auto mb-4">
                {currentSlide.description}
              </p>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section id="tech-stack" className="mb-14 scroll-mt-24">
          <h2
            className="text-[#232D4B] font-bold text-[34px] mb-6 text-center"
            style={{ fontFamily: 'Sora, sans-serif' }}
          >
            Tech Stack
          </h2>

          <div className="flex flex-wrap gap-3 justify-center">
            {['React', 'Three.js', 'Firebase', 'Vercel'].map((tech) => (
              <span
                key={tech}
                className="bg-white border border-[#DDE3F0] text-[#232D4B] px-5 py-3 rounded-xl text-[14px] font-medium shadow-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Links */}
        <section id="links" className="scroll-mt-24">
          <h2
            className="text-[#232D4B] font-bold text-[34px] mb-6 text-center"
            style={{ fontFamily: 'Sora, sans-serif' }}
          >
            Links
          </h2>

          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://dormdesigner.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#E57200] text-white px-8 py-3 rounded-full hover:bg-[#cc6600] transition-colors inline-flex items-center gap-2 font-medium"
            >
              Live Demo
              <ExternalLink size={16} />
            </a>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-[#232D4B] text-[#232D4B] px-8 py-3 rounded-full hover:bg-[#232D4B] hover:text-white transition-colors inline-flex items-center gap-2 font-medium"
            >
              GitHub
              <Github size={16} />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}