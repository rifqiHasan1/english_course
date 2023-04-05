import foto from "../assets/img/bg2.png";

function Footer() {
  return (
   
      <div className="bg-green-600 w-full relative -mb-5 h-[20px]">
      <footer className="flex xl:flex-row lg:flex-row md:flex-col flex-col justify-between w-full items-center xl:px-22 lg:px-16 md:px-10 sm:px-10 px-10 pt-10 text-base bg-grey-500">
        <div className="flex xl:w-1/4 lg:w-1/4 w-1/2 justify-center gap-x-4 xl:my-0 lg:my-0 my-5  items-center">
          <img className="w-40" src={foto} alt="" />
        </div>
        <div className="text-white xl:w-1/2 lg:w-1/2  text-left">
          <h1 className="mb-5 font-bold">Media Social</h1>
          <li style={{ listStyleType: "none" }}>
            <div class="rounded flex h-full items-center">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
              <span class="ml-2 title-font font-medium">
                Islamic English Course
              </span>
            </div>
          </li>
          <li style={{ listStyleType: "none" }}>
            <div class="rounded flex h-full items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-brand-youtube"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                {" "}
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />{" "}
                <rect x="3" y="5" width="18" height="14" rx="4" />{" "}
                <path d="M10 9l5 3l-5 3z" />{" "}
              </svg>
              <span class="ml-2 title-font font-medium">
                Islamic English Course
              </span>
            </div>
          </li>
          <li style={{ listStyleType: "none" }}>
            <div class="rounded flex h-full items-center">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
              <span class="ml-2 title-font font-medium">
                Islamic English Course
              </span>
            </div>
          </li>
          <li style={{ listStyleType: "none" }}>
            <div class="rounded flex h-full items-center">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>
              <span class="ml-2 title-font font-medium">
                www.islamicenglishcourse.com
              </span>
            </div>
          </li>
        </div>
        <div className="text-white text-left xl:w-1/2  xl:mt-0 lg:mt-0 mt-10  mb-10">
          <h1 className="mb-5 font-bold">Alamat :</h1>
          <p className="text-[#242424] font-semibold">
            Gedung Artha Graha, Senayan, Kec. Kby. Baru, Kota Jakarta Selatan,
            Daerah Khusus Ibukota Jakarta 12190
          </p>
        </div>
      </footer>
      <div className=" mt-20">
        <div className="mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row justify-center items-center">
          <p className="text-white text-sm text-center sm:text-left">
            © Copyright 2023 Islamic English Course
          </p>
        </div>
      </div>
      </div>
    
  );
}
export default Footer;
