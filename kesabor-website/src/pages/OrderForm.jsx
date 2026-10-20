function OrderForm() {
  return (
    <main className="min-h-screen bg-stone-100">
      <section className="mx-auto max-w-5xl px-6 py-12 text-center">
        <div className="rounded-2xl bg-white p-8 shadow-sm">
          <h1 className="mb-4 text-4xl font-bold text-neutral-950">
            Request a Quote
          </h1>
          <p className="mb-8 text-neutral-600">
            Tell us about your event and we will get back to you.
          </p>
          <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSdY4Wc6ok4cgvWqiAh-yd_NwHCXsAysqdHmj-Wmwt_sl8k2Nw/viewform?usp=publish-editor"
              width="100%"
              height="1000"
              title="KeSabor Catering Interest Form"
              className="border-0"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </section>
    </main>
  );
}

export default OrderForm;
