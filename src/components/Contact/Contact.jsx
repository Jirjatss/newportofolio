import React from "react";
import { useState } from "react";
import { Envelope, House, Telephone } from "react-bootstrap-icons";
import Swal from "sweetalert2";

function Contact() {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [pesan, setPesan] = useState("");

  const sendOnWhatsApp = () => {
    let url = "https://api.whatsapp.com/send/?phone=6281233623106&text=" + "Nama : " + nama + "%0a" + "Email : " + email + "%0a" + "Message : " + pesan;
    window.open(url, "_blank");
  };

  const formhandle = () => {
    if (nama === "" || email === "" || pesan === "") {
      Swal.fire({
        icon: "error",
        title: "Oops!",
        text: "Please input a valid form ",
      });
    } else {
      window.location.reload();
      sendOnWhatsApp();
    }
  };

  return (
    <div className="text-4xl text-white font-signika p-10 py-20  mx-auto" id="contact">
      <div className="mb-10 text-4xl text-center">
        <span className="border-b-4 border-[#01d193] text-white">Contact</span>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 w-full mx-auto">
        <div className="text-start lg:w-96 md:w-96 sm:w-10 mx-auto">
          <p className="mb-2 text-2xl text-start">Contact With Me</p>
          <p className="mb-4 md:text-base text-base text-start">
            Let’s make something new, different, important and make thing inovation that is useful for many people. You can contact me via the following form or social media, lets contact with me
          </p>
          <div className="flex mb-2">
            <House size={25} />
            <p className="ml-8 md:text-md text-sm w-full">West Sumbawa - West Nusa Tenggara, 84456</p>
          </div>
          <div className="flex mb-2">
            <Envelope size={25} />
            <p className="ml-8 md:text-md text-sm w-full">sajadhijir@gmail.com</p>
          </div>
          <div className="flex mb-8">
            <Telephone size={25} />
            <p className="ml-8 md:text-md text-sm">(+62) 812 336 231 06</p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:mx-auto">
          <form>
            <div className="mb-6 lg:w-96 md:w-96 sm:w-10 mx-auto">
              <input
                type="text"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  mx-auto"
                placeholder="Your Name"
                required=""
                onChange={(e) => setNama(e.target.value)}
              />
            </div>
            <div className="mb-6 lg:w-96 md:w-96 sm:w-10 mx-auto">
              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mx-auto"
                placeholder="Your Email"
                required=""
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex items-start mb-6 lg:w-96 md:w-96 sm:w-10 mx-auto">
              <textarea
                id="message"
                rows="4"
                className="block p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 w-full mx-auto"
                placeholder="Leave a message for me"
                onChange={(e) => setPesan(e.target.value)}
              ></textarea>
            </div>
            <div className="flex items-start mb-6 lg:w-96 md:w-96 sm:w-10 mx-auto">
              <button
                onClick={formhandle}
                type="submit"
                className="inline-flex items-center py-2 px-4 text-sm font-medium text-center hover:text-white text-[#01d193] bg-[#171f38] rounded-lg border border-[#01d193] hover:bg-[#01d193] focus:ring-4 focus:outline-none focus:ring-gray-200"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
