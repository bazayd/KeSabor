function AboutUs() {
  return (
    <section class="py-24 relative">
      <div class="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div class="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">
          <div class="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last">
            <div class="pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
              <img
                class=" rounded-xl object-cover"
                src="https://pagedone.io/asset/uploads/1717741205.png"
                alt="about Us image"
              />
            </div>
            <img
              class="sm:ml-0 ml-auto rounded-xl object-cover"
              src="https://pagedone.io/asset/uploads/1717741215.png"
              alt="about Us image"
            />
          </div>
          <div class="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
            <div class="w-full flex-col justify-center items-start gap-8 flex">
              <div class="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                <h2 class="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                  Providing excellent food service across the bay
                </h2>
                <p class="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                  Every event we have served at has been done with the customer in mind.
                  We look to not only spread our delicious cooking with the world, but to 
                  show excellent customer service to each client.
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
