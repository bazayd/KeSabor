import Carousel from "../components/Carousel";

function Home() {
  return (
    <main>
      <Carousel />
      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-800">
            Family-Owned Catering
          </p>

          <h2 className="mt-3 text-3xl font-bold text-neutral-950 md:text-4xl">
            Authentic Mexican food made for your special event
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-neutral-600">
            From taco catering and buffets to takeout and in-home cooking, Ke
            Sabor brings freshly prepared food and friendly service to events
            throughout the Bay Area.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="/menu"
              className="rounded-full bg-red-800 px-6 py-3 font-semibold text-white transition hover:bg-red-900"
            >
              View Our Menu
            </a>

            <a
              href="/order-form"
              className="rounded-full border border-red-800 px-6 py-3 font-semibold text-red-800 transition hover:bg-red-50"
            >
              Request a Quote
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
