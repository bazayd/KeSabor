import { useEffect, useState } from 'react'

const slides = [
  {
    image: '/catering_09.PNG',
    alt: 'Catering food',
    title: 'Fresh Food for Your Event',
    description: 'Prepared with care by our family.',
  },
  {
    image: '/catering_07.PNG',
    alt: 'Prepared catering food',
    title: 'Authentic Catering',
    description: 'Delicious food made for memorable occasions.',
  },
  {
    image: '/catering_08.PNG',
    alt: 'Catering setup',
    title: 'Ready to Serve',
    description: 'We help make your event special.',
  },
  {
    image: '/catering_04.PNG',
    alt: 'Family-owned catering service',
    title: 'Family-Owned Catering',
    description: 'Serving the Bay Area and surrounding communities.',
  },
  {
    image: '/catering_06.PNG',
    alt: 'KeSabor catering',
    title: 'Build Your Perfect Menu',
    description: 'Choose your proteins, sides, sauces, and drinks.',
  },
]

function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((previousSlide) =>
        previousSlide === slides.length - 1 ? 0 : previousSlide + 1,
      )
    }, 8000)

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
      <div className="relative h-[340px] overflow-hidden md:h-[520px]">
        <div
          className="flex h-full transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
          }}
        >
          {slides.map((slide) => (
            <div
              key={slide.image}
              className="relative h-full min-w-full"
            >
              <img
                src={slide.image}
                alt={slide.alt}
                className="block h-full w-full object-cover"
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/45" />

              {/* Text overlay */}
              <div className="absolute inset-0 flex items-center justify-center px-6 text-center text-white">
                <div className="max-w-3xl">
                  <h2 className="text-4xl font-bold drop-shadow-lg md:text-6xl">
                    {slide.title}
                  </h2>

                  <p className="mt-4 text-lg drop-shadow-md md:text-2xl">
                    {slide.description}
                  </p>
                </div>
              </div>
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
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/30 text-3xl text-white hover:bg-black/60">
          ‹
        </span>
      </button>

      {/* Next button */}
      <button
        type="button"
        onClick={nextSlide}
        className="group absolute right-0 top-0 z-30 flex h-full items-center justify-center px-4 focus:outline-none"
        aria-label="Next slide"
      >
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/30 text-3xl text-white hover:bg-black/60">
          ›
        </span>
      </button>
    </section>
  )
}

export default Carousel