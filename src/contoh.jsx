import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="grid grid-cols-4 w-screen">
      <div className=" col-end-2 h-screen bg-gray-100">
        <div className=" w-full px-4 inline-flex space-x-3 ">
          <div className="p-2  flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
          <div className="rounded-3xl flex space-x-5 items-center my-2 p-3 bg-gray-300 w-full  ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input className="bg-gray-300" type="text" placeholder="Search" />
          </div>
        </div>
        <div className="px-3 ">
          <div className="inline-flex  p-3  space-x-2  w-full rounded-2xl">
            <img
              className="col-end-2 bg-gray-200 h-11 w-11 rounded-full"
              src="https://tse4.mm.bing.net/th?id=OIP.exGrD1GgNWq_ttlkWuEjsgHaEK&pid=Api&P=0&w=292&h=164"
              alt=""
            />
            <div className=" w-full">
              <h1>XI RPL</h1>
              <h4 className="text-xs text-gray-700">
                <span className="text-black">Danen</span>: Baik pak
              </h4>
            </div>
          </div>
          <div className="inline-flex grid-cols-4 p-3  space-x-2  w-full rounded-2xl">
            <img
              className="col-end-2 bg-gray-200 h-11 w-11 rounded-full"
              src="https://tse2.mm.bing.net/th?id=OIP.9nyTpzPgpvxBs2vYCYxytgHaG0&pid=Api&P=0&w=191&h=176"
              alt=""
            />
            <div className="col-start-2  col-end-5 w-full">
              <h1>Human</h1>
              <h4 className="text-xs">Assalamualaikum ki apa kabar?</h4>
            </div>
          </div>
          <div className="inline-flex grid-cols-4 p-3  space-x-2  w-full rounded-2xl">
            <img
              className="col-end-2 bg-gray-200 h-11 w-14 rounded-full"
              src="https://tse2.mm.bing.net/th?id=OIP.LLd7x7TIMYZEeR9ofyuPaAHaHa&pid=Api&P=0&w=148&h=148"
              alt=""
            />
            <div className="col-start-2  col-end-5 w-full">
              <h1>Muhyii</h1>
              <h4 className="text-xs">Pb ga ki?</h4>
            </div>
          </div>
          <div className="inline-flex grid-cols-4 p-3  space-x-2  w-full rounded-2xl">
            <img
              className="col-end-2 bg-gray-200 h-11 w-14 rounded-full"
              src="https://tse2.mm.bing.net/th?id=OIP.znexOcthFa6rZ38N93QQtAHaJ4&pid=Api&P=0&w=125&h=166"
              alt=""
            />
            <div className="col-start-2  col-end-5 w-full">
              <h1>Aurelio</h1>
              <h4 className="text-xs">ok</h4>
            </div>
          </div>

          <div className="inline-flex grid-cols-4 p-3  space-x-2  w-full rounded-2xl">
            <img
              className="col-end-2 bg-gray-200 h-11 w-14 rounded-full"
              src="https://tse3.mm.bing.net/th?id=OIP.a1wZFgHBcKDqm_vzWixHXAHaJQ&pid=Api&P=0&w=140&h=175"
              alt=""
            />
            <div className="col-start-2  col-end-5 w-full">
              <h1>Ka nafi</h1>
              <h4 className="text-xs">Sehat ki?</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-green-600 col-start-2 col-end-5">
        <div className="bg-gray-200">
          <div className="inline-flex  grid-cols-4 p-3  space-x-2  w-full rounded-2xl">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
            </div>
            <img
              className="col-end-2 bg-gray-200 h-11 w-11 rounded-full"
              src="https://tse4.mm.bing.net/th?id=OIP.exGrD1GgNWq_ttlkWuEjsgHaEK&pid=Api&P=0&w=292&h=164"
              alt=""
            />
            <div className="col-start-2  col-end-5 w-full ">
              <h1>XI RPL</h1>
              <h4 className="text-xs text-gray-700">13 member, 1 online</h4>
            </div>
            <div className="flex items-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="mt-72">
          <div className="m-auto flex justify-center p-2">
            {" "}
            <p className=" p-1    bg-gray-500 m-auto  rounded-2xl text-white ">
              August 19
            </p>{" "}
          </div>
          <div className="px-64 ">
            <div className=" bg-gray-100 w-auto p-2 rounded-2xl m-auto">
              <h1 className="text-red-400">ihsanabuhanifah</h1>
              <h3 className="text-sm">
                Bismillah, tolong murojaah yang kemarin yh sampai yg terakhir
              </h3>
              <h5 className="flex justify-end text-gray-400 text-sm ">14:20</h5>
            </div>
          </div>
          <div className="px-64 mt-1">
            <div className=" bg-gray-100 w-auto p-2 rounded-2xl ">
              <h1 className="text-red-400">Rifqi Hasan</h1>
              <h3 className="text-sm">Baik pak</h3>
              <h5 className="flex justify-end text-gray-400 text-sm ">14:22</h5>
            </div>
          </div>
        </div>
        <div className="">
          <div className="rounded-xl items-end space-x-5  my-2 p-3 bg-gray-300 flex w-7/12 m-auto   ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <input className="bg-gray-300" type="text" placeholder="Message" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
