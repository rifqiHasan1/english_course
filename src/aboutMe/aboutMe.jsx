import Vector from "../assets/img/Vector.png";

function AboutMe() {
  return (
    <div className="bg-gray-100">
      <div>
        <p
          data-aos="fade-right"
          className="flex justify-center font-bold text-3xl text-black pt-10"
        >
          Popular Course
        </p>
      </div>
      <div className="flex space-x-6 justify-center mt-14">
        <div
          data-aos="flip-left"
          className="bg-green-400 h-56 w-56 items-center flex flex-col justify-center rounded-xl"
        >
          <img className="h-30" src={Vector} alt="" />
          <p className="flex justify-center font-semibold text-white text-xl pt-6">
            Listening
          </p>
        </div>
        <div
          data-aos="flip-left"
          className="bg-green-400 h-56 w-56 items-center flex flex-col justify-center rounded-xl"
        >
          <img className="h-30" src={Vector} alt="" />
          <p className="flex justify-center font-semibold text-white text-xl pt-6">
            Reading
          </p>
        </div>
        <div
          data-aos="flip-left"
          className="bg-green-400 h-56 w-56 items-center flex flex-col justify-center rounded-xl"
        >
          <img className="h-30" src={Vector} alt="" />
          <p className="flex justify-center font-semibold text-white text-xl pt-6">
            Writing
          </p>
        </div>
        <div
          data-aos="flip-left"
          className="bg-green-400 h-56 w-56 items-center flex flex-col justify-center rounded-xl"
        >
          <img className="h-30" src={Vector} alt="" />
          <p className="flex justify-center font-semibold text-white text-xl pt-6">
            Speaking
          </p>
        </div>
      </div>
      <div>
        <p
          data-aos="zoom-in"
          className="flex justify-center pt-24 font-bold text-3xl"
        >
          Daily Reading
        </p>
        <p className="flex justify-center pt-5 font-semibold text-gray-500">
          We have some great reads every day for you
        </p>
        <div className="flex space-x-6 justify-center mt-14">
          <div
            data-aos="flip-left"
            className="bg-green-400 h-56 w-56 items-center flex flex-col justify-center rounded-xl"
          >
            <img className="h-30" src={Vector} alt="" />
            <p className="flex justify-center font-semibold text-white text-xl pt-6">
              Vocabularies
            </p>
          </div>
          <div
            data-aos="flip-left"
            className="bg-green-400 h-56 w-56 items-center flex flex-col justify-center rounded-xl"
          >
            <img className="h-30" src={Vector} alt="" />
            <p className="flex justify-center font-semibold text-white text-xl pt-6">
              Newspaper
            </p>
          </div>
          <div
            data-aos="flip-left"
            className="bg-green-400 h-56 w-56 items-center flex flex-col justify-center rounded-xl"
          >
            <img className="h-30" src={Vector} alt="" />
            <p className="flex justify-center font-semibold text-white text-xl pt-6">
              Story Zone
            </p>
          </div>
        </div>
      </div>
      <div className="pt-36 flex justify-center">
        <p className="font-bold text-3xl">What are you waiting for?</p>
      </div>
      <div className="flex justify-center pt-5">
        <p className="bg-green-700 rounded-lg font-semibold text-white px-5 py-3 mb-10">Be Come Member !</p>
      </div>
    </div>
    
  );
}
export default AboutMe;
