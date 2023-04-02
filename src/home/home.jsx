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
      <div className="bg-white w-full relative -mb-5 rounded-b-2xl h-[20px]"></div>
      <footer className="flex xl:flex-row lg:flex-row md:flex-col flex-col justify-between w-full items-center xl:px-16 lg:px-16 md:px-10 sm:px-10 px-10 pt-10 text-base bg-[#f5f5fa]">
      <div className="flex xl:w-1/4 lg:w-1/4 w-1/2 justify-center gap-x-4 xl:my-0 lg:my-0 my-5  items-center">
          <img src={foto} alt="" />
        </div>
        <div className="text-left xl:w-1/4 lg:w-1/4 xl:mt-0 lg:mt-0 mt-10  mb-10">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Media Social</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-white hover:text-gray-800">Islamic English Course</a>
          </li>
          <li>
            <a className="text-white hover:text-gray-800">Islamic English Course</a>
          </li>
          <li>
            <a className="text-white hover:text-gray-800">Islamic English Course</a>
          </li>
          <li>
            <a className="text-white hover:text-gray-800">Islamic English Course</a>
          </li>
        </nav>
        </div>
        <div className="xl:w-1/4 lg:w-1/4  text-left">
          <h1 className="mb-5 font-bold">Alamat</h1>
          <p>
            Program Bantuan Pemerintah (Banper) Infrastruktur Ekonomi Kreatif
            merupakan fasilitasi ruang kreatif yang diberikan sebagai stimulan
            kepada pelaku ekonomi kreatif dalam melakukan aktivitasnya, dalam
            bentuk barang yang berkaitan dengan kebutuhan subsektor ekonomi
            kreatif.
          </p>
          <p className="text-gray-500 pt-10">
          Gedung Artha Graha, Senayan, Kec. Kby. Baru, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12190
          </p>
          
        </div>
      </footer>
      <div className="bg-[#142b51]">
        <div className="mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row justify-center items-center">
          <p className="text-white text-sm text-center sm:text-left">
            Copyright 2023 Islamic English Course
          </p>
        </div>
      </div>
    </div>
  );
}
export default Home;
