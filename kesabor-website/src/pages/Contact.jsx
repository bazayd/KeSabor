const contacts = [
  {
    name: "Brandon Arriaga",
    email: "brandonzarriaga@gmail.com",
    phone: "(408) 910-7199",
  },
  {
    name: "Justin Arriaga",
    email: "justinzayd@gmail.com",
    phone: "(408) 910-5054",
  },
  {
    name: "Adriana Rivera",
    email: "zaydsbj@gmail.com",
    phone: "(408) 903-9837",
  },
];

function Contact() {
  return (
    <main className="min-h-screen bg-stone-100 px-6 py-16">
      <section className="mx-auto max-w-6xl">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-800">
            Get in touch
          </p>

          <h1 className="mt-3 text-4xl font-bold text-neutral-950 md:text-5xl">
            Contact Us
          </h1>

          <p className="mt-4 text-lg text-neutral-600">
            Have questions about catering or want to start planning your event?
            Reach out to one of our team members.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {contacts.map((contact) => (
            <article
              key={contact.email}
              className="rounded-2xl border border-neutral-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-6 h-1 w-12 rounded-full bg-red-800" />

              <h2 className="text-2xl font-bold text-neutral-950">
                {contact.name}
              </h2>

              <div className="mt-6 space-y-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
                    Email
                  </p>

                  <a
                    href={`mailto:${contact.email}`}
                    className="mt-1 block break-all text-base text-neutral-700 no-underline hover:text-red-800 hover:underline"
                  >
                    {contact.email}
                  </a>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
                    Phone
                  </p>

                  <a
                    href={`tel:${contact.phone.replace(/\D/g, "")}`}
                    className="mt-1 block text-lg text-neutral-700 no-underline hover:text-red-800 hover:underline"
                  >
                    {contact.phone}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Contact;