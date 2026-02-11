"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const feedbacks = [
  { id: 1, image: "/images/feedbacks/feedback-1.jpeg" },
  { id: 2, image: "/images/feedbacks/feedback-2.jpeg" },
  { id: 3, image: "/images/feedbacks/feedback-3.jpeg" },
  { id: 4, image: "/images/feedbacks/feedback-4.jpeg" },
  { id: 5, image: "/images/feedbacks/feedback-5.jpeg" },
  { id: 6, image: "/images/feedbacks/feedback-6.jpeg" },
  { id: 7, image: "/images/feedbacks/feedback-7.jpeg" },
  { id: 8, image: "/images/feedbacks/feedback-8.jpeg" },
  { id: 9, image: "/images/feedbacks/feedback-9.jpeg" },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % feedbacks.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % feedbacks.length);
    setIsAutoPlaying(false);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + feedbacks.length) % feedbacks.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section id="depoimentos" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            O que dizem nossos clientes
          </p>
          <h2 className="mb-4 text-3xl font-bold text-primary sm:text-4xl lg:text-5xl">
            Depoimentos
          </h2>
          <div className="mx-auto h-1 w-20 bg-accent" />
          <p className="mx-auto mt-6 max-w-2xl text-gray-medium">
            Veja o que nossos clientes têm a dizer sobre nossos serviços e
            produtos.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative mx-auto max-w-4xl">
          {/* Main Slide */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-gray-100 shadow-2xl sm:aspect-[16/10]">
            <Image
              src={feedbacks[currentIndex].image}
              alt={`Depoimento de cliente ${feedbacks[currentIndex].id}`}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 896px"
              priority={currentIndex === 0}
            />
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-3 shadow-lg transition-all hover:bg-white hover:scale-110 sm:left-4 sm:p-4"
            aria-label="Depoimento anterior"
          >
            <svg
              className="h-5 w-5 text-primary sm:h-6 sm:w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-3 shadow-lg transition-all hover:bg-white hover:scale-110 sm:right-4 sm:p-4"
            aria-label="Próximo depoimento"
          >
            <svg
              className="h-5 w-5 text-primary sm:h-6 sm:w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="mt-8 flex items-center justify-center gap-2">
            {feedbacks.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2.5 rounded-full transition-all ${
                  index === currentIndex
                    ? "w-8 bg-accent"
                    : "w-2.5 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Ir para depoimento ${index + 1}`}
              />
            ))}
          </div>

          {/* Counter */}
          <div className="mt-4 text-center text-sm text-gray-medium">
            {currentIndex + 1} / {feedbacks.length}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="mb-6 text-lg text-gray-medium">
            Quer fazer parte dos nossos clientes satisfeitos?
          </p>
          <a
            href="https://wa.me/554736331830"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-accent-light hover:shadow-xl"
          >
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Fale Conosco pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
