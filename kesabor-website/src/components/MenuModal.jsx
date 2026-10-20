function MenuModal({ category, onClose }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="menu-modal-title"
        className="relative max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white p-8 shadow-xl"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-5 top-4 text-2xl text-neutral-500 hover:text-neutral-950"
          aria-label="Close menu options"
        >
          ×
        </button>

        <h2
          id="menu-modal-title"
          className="mb-2 text-3xl font-bold text-neutral-950"
        >
          {category.name}
        </h2>

        <p className="mb-6 text-neutral-600">
          {category.description}
        </p>

        <ul className="grid gap-3 sm:grid-cols-2">
          {category.options.map((option) => (
            <li
              key={option}
              className="rounded-lg bg-stone-100 px-4 py-3 text-neutral-800"
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default MenuModal