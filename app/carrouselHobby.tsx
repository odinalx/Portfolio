'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const items = [
  { type: 'text', content: 'ANIMES' },
  { type: 'gif', content: '/gifs/animes.gif' },
  { type: 'text', content: 'JEUX' },
  { type: 'gif', content: '/gifs/games.gif' },
  { type: 'text', content: 'VOYAGE' },
  { type: 'gif', content: '/gifs/travel.gif' },
  { type: 'text', content: 'MUSIQUE' },
  { type: 'gif', content: '/gifs/music.gif' },
];

export function CarrouselHobby() {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  let tl = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) {
      console.error('Slider is null');
      return;
    }

    const slides = slider.querySelectorAll<HTMLDivElement>('.slide');
    if (slides.length === 0) {
      console.error('No slides found');
      return;
    }

    const slideWidth = slides[0].offsetWidth;

    slider.innerHTML += slider.innerHTML;

    const totalSlides = slides.length;
    tl.current = gsap.to(slider, {
      x: -slideWidth * totalSlides,
      duration: totalSlides * 5,
      ease: 'linear',
      repeat: -1,
    });

    return () => {
      if (tl.current) {
        tl.current.kill();
      }
    };
  }, []);

  return (
    <div className="overflow-hidden w-full py-28">
      <div className="slider-wrapper">
        <div ref={sliderRef} className="slider flex">
          {items.map((item, idx) => (
            <div key={idx} className="slide flex-shrink-0 flex items-center justify-center">
              {item.type === 'text' ? (
                <span className="font-cursive text-9xl mx-4">{item.content}</span>
              ) : (
                <img
                  src={item.content}
                  alt={`gif-${idx}`}
                  className="w-auto h-48 mx-4 grayscale transition duration-300 ease-in-out hover:grayscale-0"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
