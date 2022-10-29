import React from "react";
import { useState } from "react";
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
    <div className="text-4xl text-black bg-slate-50 font-signika p-10 py-20  mx-auto" id="contact">
      <div className="mb-10 text-center">
        <span className="border-b-4 border-[#6419e6]">Contact</span>
      </div>
      <div className="grid grid-cols-1 w-96 mx-auto">
        <form>
          <div className="mb-6">
            <input
              type="text"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Your Name"
              required=""
              onChange={(e) => setNama(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Your Email"
              required=""
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex items-start mb-6">
            <textarea
              id="message"
              rows="4"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Leave a message for me"
              onChange={(e) => setPesan(e.target.value)}
            ></textarea>
          </div>
          <button
            onClick={formhandle}
            type="submit"
            className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-[#6419e6] rounded-lg border border-gray-300 hover:bg-[#4f15b9] focus:ring-4 focus:outline-none focus:ring-gray-200"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
