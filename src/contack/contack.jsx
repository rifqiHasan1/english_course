import * as Yup from "yup";
import { Formik } from "formik";
import Error from "./error";
const RegisterSchema = Yup.object().shape({
  name: Yup.string().required("Fill it, please"),
  email: Yup.string().email().required("Fill it, please"),
  desc: Yup.string().min(8, "Minimum 8 character").required("Fill it, please"),
  url: Yup.string().required("Fill it, please"),
});

function Contack() {
  const initialState = {  
    name: "",
    email: "",
    url: "",
    desc: "",
  };
  return (
    <div>
      <div className="flex space-x-20 justify-center pt-8">
        <div
          data-aos="fade-right"
          className="bg-gray-800 w-20 h-20 rounded-full"
        ></div>
        <p className="text-3xl font-semibold">Contack Us</p>
        <div
          data-aos="fade-left"
          className="bg-gray-400 w-20 h-20 rounded-full"
        ></div>
      </div>
      <div className="flex  space-x-20 ml-40  w-full pt-12">
        <div className="w-44">
          <p>About Our Course</p>
          <p className="flex justify-start">dmsakdnaskldnaslkndasklndkndklasndlkandklasndlkasndklandasklndakslndasklndasklndklasndlkasnfknadkjsfn,dms cdasnfklsnkfldsnflkdsnfklnasfkldnfklnsfkldsnfklndsklfndsm,f cdsnfkldsnf,mdsnfkldsnfklsnfklsnfkldnsalfnasm,fnamfnam</p>
        </div>

        <div
          data-aos="flip-right"
          className="bg-gray-700 w-2/6  h-96 ml-7 space-y-3 pl-16 pt-12 rounded"
        >
          <div className="inline-flex space-x-11 w-full">
            <img
              className="w-14 h-14 rounded-full"
              src="https://tse3.mm.bing.net/th?id=OIP.-EOuZbzcp9rGFmrGUbLb1wHaHa&pid=Api&P=0&w=300&h=300"
              alt=""
            />
            <p className="font-semibold pt-4 text-white">+1 206.905.9614 </p>
          </div>
          <div className="inline-flex space-x-11 w-full">
            <img
              className="w-14 h-14 rounded-full"
              src="https://tse3.mm.bing.net/th?id=OIP.S9L2CNKODLWUGIkpil3TkwHaHa&pid=Api&P=0&w=157&h=157"
              alt=""
            />
            <p className="font-semibold pt-4  text-white">
              info@ropatawebsite.com{" "}
            </p>
          </div>
          <div className="inline-flex space-x-11 w-full">
            <img
              className="w-14 h-14 rounded-full"
              src="https://tse1.mm.bing.net/th?id=OIP.ezztWMi5OmrD3SAaky4MyQHaHa&pid=Api&P=0&w=300&h=300"
              alt=""
            />
            <p className="font-semibold pt-4  text-white">@technoentusiasm </p>
          </div>
          <div className="inline-flex space-x-11 w-full">
            <img
              className="w-14 h-14 rounded-full"
              src="https://tse1.mm.bing.net/th?id=OIP.P8TJylkJcpZVoZvdwxK4uAHaHa&pid=Api&P=0&w=300&h=300"
              alt=""
            />
            <p className="font-semibold pt-4  text-white">
              Auguste Drechsler-parks
            </p>
          </div>
        </div>
      </div>
      
    </div>
  );
}
export default Contack;
