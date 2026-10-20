import { useState } from 'react'
import MenuModal from '../components/MenuModal'

const menuCategories = [
  {
    name: 'Proteins',
    description: 'Choose three meats for your taquiza.',
    image: 'https://placehold.co/800x500/7f1d1d/ffffff?text=Proteins',
    options: [
      'Carne Asada',
      'Al Pastor',
      'Chorizo',
      'Pollo',
      'Carnitas',
      'Birria',
      'Barbacoa',
      'Lengua',
      'Cabeza',
      'Suadero',
    ],
  },
  {
    name: 'Accompaniments',
    description: 'Choose sides to complete your meal.',
    image: 'https://placehold.co/800x500/92400e/ffffff?text=Accompaniments',
    options: [
      'Rice',
      'Beans',
      'Pasta',
      'Salad',
      'Chips and Salsa Botanera',
      'Quesadillas',
      'Sopes',
      'Tortas',
      'Hotdogs',
    ],
  },
  {
    name: 'Sauces',
    description: 'Choose three sauces or toppings.',
    image: 'https://placehold.co/800x500/9a3412/ffffff?text=Sauces',
    options: [
      'Green Sauce',
      'Red Sauce',
      'Habanero Sauce',
      'Habanero Pineapple Sauce',
      'Orange Sauce',
      'Molcajete Sauce',
      'Guacamole',
      'Pico de Gallo',
    ],
  },
  {
    name: 'Aguas Frescas',
    description: 'Choose two refreshing drinks.',
    image: 'https://placehold.co/800x500/166534/ffffff?text=Aguas+Frescas',
    options: [
      'Lemon',
      'Hibiscus',
      'Horchata',
      'Tamarind',
      'Melon',
      'Guava',
      'Papaya',
      'Watermelon',
      'Strawberry',
      'Mango',
      'Pineapple',
      'Mixed Fruits',
      'Coffee',
      'Coco',
      'Pina Colada',
      'Orange',
    ],
  },
  {
    name: 'Condiments',
    description: 'Choose four fresh toppings.',
    image: 'https://placehold.co/800x500/365314/ffffff?text=Condiments',
    options: [
      'Onion',
      'Cilantro',
      'Lemons',
      'Cucumbers',
      'Radishes',
      'Caramelized Onions and Jalapenos',
      'Manzano Chili Tanning',
      'Nopales Salad',
    ],
  },
]

function Menu() {
  const [activeCategory, setActiveCategory] = useState(null)

  return (
    <main className="min-h-screen bg-stone-100">
      {/* Menu banner */}
      <section className="relative flex min-h-[320px] items-center justify-center overflow-hidden bg-neutral-950 px-6 py-20 text-center text-white">
        {/* <div className="absolute inset-0 bg-[url('https://placehold.co/1600x700/292524/ffffff?text=KeSabor+Catering')] bg-cover bg-center opacity-40" /> */}

        <div className="relative z-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-orange-300">
            KeSabor Catering
          </p>

          <h1 className="text-5xl font-bold md:text-7xl">
            Our Menu
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-200">
            Build your perfect taquiza with delicious proteins, sides,
            sauces, drinks, and fresh toppings.
          </p>
        </div>
      </section>

      {/* Pricing section */}
      <section className="mx-auto max-w-5xl px-6 py-12 text-center">
        <div className="rounded-2xl bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-wide text-red-800">
            Taquiza Catering Package
          </p>

          <h2 className="mt-2 text-4xl font-bold text-neutral-950">
            Starting at $40 per person
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-neutral-600">
            Includes selected proteins, aguas frescas, accompaniments,
            sauces, condiments, two hours of service, and disposable tableware.
          </p>

          <a
            href="/order-form"
            className="mt-6 inline-block rounded-full bg-red-800 px-6 py-3 font-semibold text-white no-underline transition hover:bg-red-900"
          >
            Request a Quote
          </a>
        </div>
      </section>

      {/* Category cards */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-neutral-950">
            Explore Our Options
          </h2>

          <p className="mt-2 text-neutral-600">
            Select a category to view the available choices.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {menuCategories.map((category) => (
            <button
              key={category.name}
              type="button"
              onClick={() => setActiveCategory(category)}
              className="group overflow-hidden rounded-2xl bg-white text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <img
                src={category.image}
                alt={category.name}
                className="h-48 w-full object-cover transition duration-300 group-hover:scale-105"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold text-neutral-950">
                  {category.name}
                </h3>

                <p className="mt-2 text-neutral-600">
                  {category.description}
                </p>

                <span className="mt-4 inline-block font-semibold text-red-800">
                  View options →
                </span>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Modal */}
      {activeCategory && (
        <MenuModal
          category={activeCategory}
          onClose={() => setActiveCategory(null)}
        />
      )}
    </main>
  )
}

export default Menu