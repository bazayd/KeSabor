import { useEffect, useState } from 'react'

const slides = [
  {
    image: 'https://placehold.co/1200x600/f97316/ffffff?text=Food+Photo+1',
    alt: 'Catering food',
  },
  {
    image: 'https://placehold.co/1200x600/ea580c/ffffff?text=Food+Photo+2',
    alt: 'Prepared catering food',
  },
  {
    image: 'https://placehold.co/1200x600/c2410c/ffffff?text=Catering+Setup',
    alt: 'Catering setup',
  },
  {
    image: 'https://placehold.co/1200x600/9a3412/ffffff?text=Family+Owned',
    alt: 'Family-owned catering service',
  },
  {
    image: 'https://placehold.co/1200x600/7c2d12/ffffff?text=KeSabor+Catering',
    alt: 'KeSabor catering',
  },
]

function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((previousSlide) =>
        previousSlide === slides.length - 1 ? 0 : previousSlide + 1,
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((previousSlide) =>
      previousSlide === slides.length - 1 ? 0 : previousSlide + 1,
    )
  }

  const previousSlide = () => {
    setCurrentSlide((previousSlide) =>
      previousSlide === 0 ? slides.length - 1 : previousSlide - 1,
    )
  }

  return (
    <section className="relative w-full">
      {/* Carousel images */}
      <div className="relative h-56 overflow-hidden md:h-96">
        <div
          className="flex h-full transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
          }}
        >
          {slides.map((slide) => (
            <div key={slide.image} className="h-full min-w-full">
              <img
                src={slide.image}
                alt={slide.alt}
                className="block h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Slider indicators */}
      <div className="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 gap-3">
        {slides.map((slide, index) => (
          <button
            key={slide.image}
            type="button"
            onClick={() => setCurrentSlide(index)}
            className={`h-3 w-3 rounded-full ${
              currentSlide === index ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={currentSlide === index}
          />
        ))}
      </div>

      {/* Previous button */}
      <button
        type="button"
        onClick={previousSlide}
        className="group absolute left-0 top-0 z-30 flex h-full items-center justify-center px-4 focus:outline-none"
        aria-label="Previous slide"
      >
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 text-white hover:bg-white/50">
          <span className="text-2xl">‹</span>
        </span>
      </button>

      {/* Next button */}
      <button
        type="button"
        onClick={nextSlide}
        className="group absolute right-0 top-0 z-30 flex h-full items-center justify-center px-4 focus:outline-none"
        aria-label="Next slide"
      >
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 text-white hover:bg-white/50">
          <span className="text-2xl">›</span>
        </span>
      </button>
    </section>
  )
}

export default Carousel