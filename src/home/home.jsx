import foto from "../assets/img/bg2.png";

function Home() {
  return (
    <div className="bg lg:h-screen  sm:h-full">
      <div className="w-full h-full bg-black bg-opacity-40">
        <div className="flex  justify-between ">
          <img className="w-16 ml-16 mt-3" src={foto} alt="" />
          <div className="space-x-8 flex mr-16 mt-5">
            <p className="text-white">Home</p>
            <p className="text-white">Skills</p>
            <p className="text-white">Daily Reading</p>
            <p className="text-white">About Us</p>
          </div>
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
            className="text-2xl mt-48 flex justify-center text-purple-100"
          >
            "speak english well with confidence"
          </p>
        </div>
      </div>
    </div>
  );
}
export default Home;
