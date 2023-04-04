import foto from "../assets/img/bg2.png";

function Home() {
  return (
    <div className="bg lg:h-screen  sm:h-full">
      <div className="w-full h-full bg-black bg-opacity-60">
      <div class=" mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
    <img className="w-16 " src={foto} alt="" />
      <span class="ml-3 text-xl">Islamic English</span>
    </a>
    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <a class="mr-5 text-white hover:text-green-500">Home</a>
      <a class="mr-5 text-white hover:text-green-500">Skills</a>
      <a class="mr-5 text-white hover:text-green-500">Daily Reading</a>
      <a class="mr-5 text-white hover:text-green-500">About us</a>
    </nav>
  </div>
        <div className="pt-64">
          <p
            // data-aos="fade-right"
            className="text-5xl font-semibold flex justify-center text-white"
          >
            Welcome To
          </p>
          <p
            // data-aos="fade-left"
            className="text-8xl mt-6 flex justify-center text-purple-100"
          >
            Islamic English Course
          </p>
          <p
            // data-aos="fade-right"
            className="text-2xl mt-48 mb-10 flex justify-center text-purple-100"
          >
            "speak english well with confidence"
          </p>
        </div>
      </div>  
    </div>
  );
}
export default Home;
