function AboutUs() {
  return (
    <section class="py-24 relative">
      <div class="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div class="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">
          <div class="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last">
            <div class="pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
              <img
                class="sm:ml-0 ml-auto rounded-xl object-cover"
                src="/full_logo.png"
                alt="about Us image"
              />
            </div>
            <img
              class="sm:ml-0 ml-auto rounded-xl object-cover"
              src="/infographic.png"
              alt="about Us image"
            />
          </div>
          <div class="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
            <div class="w-full flex-col justify-center items-start gap-8 flex">
              <div className="flex w-full flex-col items-center justify-start gap-6 lg:items-start">
                <div className="flex flex-col items-center gap-3 lg:items-start">
                  <h2 className="font-manrope text-center text-4xl font-bold leading-normal text-gray-900 lg:text-left">
                    Providing excellent food service across the Bay Area
                  </h2>

                  <p className="text-center text-base font-normal leading-relaxed text-gray-500 lg:text-left">
                    Every event we serve is prepared with the customer in mind.
                    We are passionate about sharing delicious, authentic food
                    while providing friendly and reliable service to every
                    client.
                  </p>
                </div>
                <div class="w-full lg:justify-start justify-center items-center sm:gap-10 gap-5 inline-flex">
                  <div class="flex-col justify-start items-start inline-flex">
                    <h3 class="text-gray-900 text-4xl font-bold font-manrope leading-normal">
                      5+
                    </h3>
                    <h6 class="text-gray-500 text-base font-normal leading-relaxed">
                      Years of Experience
                    </h6>
                  </div>
                  <div class="flex-col justify-start items-start inline-flex">
                    <h4 class="text-gray-900 text-4xl font-bold font-manrope leading-normal">
                      100+
                    </h4>
                    <h6 class="text-gray-500 text-base font-normal leading-relaxed">
                      Successful Events
                    </h6>
                  </div>
                  <div class="flex-col justify-start items-start inline-flex">
                    <h4 class="text-gray-900 text-4xl font-bold font-manrope leading-normal">
                      50+
                    </h4>
                    <h6 class="text-gray-500 text-base font-normal leading-relaxed">
                      Happy Clients
                    </h6>
                  </div>
                </div>
                <div className="w-full">
                  <h3 className="mb-4 text-xl font-bold text-gray-900">
                    Our Services
                  </h3>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-lg bg-red-50 p-4">
                      <h4 className="font-semibold text-red-900">
                        Taco Catering
                      </h4>
                      <p className="mt-1 text-sm text-gray-600">
                        Freshly prepared tacos with your choice of proteins,
                        toppings, and sauces.
                      </p>
                    </div>

                    <div className="rounded-lg bg-red-50 p-4">
                      <h4 className="font-semibold text-red-900">
                        Buffet Catering
                      </h4>
                      <p className="mt-1 text-sm text-gray-600">
                        Complete buffet setups for parties, celebrations, and
                        special events.
                      </p>
                    </div>

                    <div className="rounded-lg bg-red-50 p-4">
                      <h4 className="font-semibold text-red-900">
                        Takeout Orders
                      </h4>
                      <p className="mt-1 text-sm text-gray-600">
                        Convenient catering trays and meals prepared for pickup.
                      </p>
                    </div>

                    <div className="rounded-lg bg-red-50 p-4">
                      <h4 className="font-semibold text-red-900">
                        In-Home Cooking
                      </h4>
                      <p className="mt-1 text-sm text-gray-600">
                        Enjoy freshly prepared meals cooked and served in the
                        comfort of your home.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <button class="sm:w-fit w-full px-3.5 py-2 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex cursor-pointer">
              <span class="px-1.5 text-white text-sm font-medium leading-6">
                Read More
              </span>
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
