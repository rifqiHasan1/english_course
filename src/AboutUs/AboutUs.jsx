import About from "../assets/img/bangku.png";

function AboutUs() {
  return (
    <div className="bg-gray-100">
      <section class="text-gray-600 body-font overflow-hidden">
        <div class="container px-10 py-24 mx-auto">
          <div class="lg:w-4/5 mx-auto flex items-center ">
            <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <h1 class="text-gray-900 text-3xl title-font font-medium mb-4">
                About Our Course
              </h1>

              <p class="leading-relaxed mb-4 text-xl">
              Learn English online and improve your skills through our high-quality courses and resources. Applying modern learning methods, giving confidence in communicating with English, and equipping learners with English education and skills from elementary to advanced level intensively and effectively.
              </p>
            </div>
            <img
              className="h-auto"
              src={About}
              class="lg:w-1/2 w-full lg:h-auto h-32 object-cover object-center rounded"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
export default AboutUs;
