import React from "react";
import { useState, useRef } from "react";
import { Envelope, House, Telephone } from "react-bootstrap-icons";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
import { validEmail } from "./Regex";

function Contact() {
  const form = useRef();
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [pesan, setPesan] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    if (nama === "" || email === "" || pesan === "") {
      Swal.fire({
        icon: "error",
        title: "Oops!",
        text: "Please input a valid form ",
      });
      setEmail("");
      setNama("");
      setPesan("");
    } else if (!validEmail.test(email)) {
      Swal.fire({
        icon: "error",
        title: "Oops!",
        text: "Please input a valid Email ",
      });
      setEmail("");
    } else {
      emailjs.sendForm("service_qiow697", "template_hytj71f", form.current, "Q6n3se8JBnmrPR9ST").then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      Swal.fire({
        icon: "success",
        title: "Email sent!",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div className="text-4xl text-white font-signika p-10 py-20  mx-auto" id="contact">
      <div className="grid lg:grid-cols-2 grid-cols-1 w-full mx-auto">
        <div className="text-start w-full mx-auto">
          <div className="mb-5 text-4xl lg:text-start text-center">
            <span className="border-b-4 border-[#01d193] text-white">Contact</span>
          </div>
          <p className="mb-4 text-sm text-gray-400 text-start">
            Let’s make something new, different, important and make thing inovation that is useful for many people. You can contact me via the following form or social media, lets contact with me
          </p>
          <div className="flex mb-2">
            <House size={25} />
            <p className="ml-8 md:text-md text-sm w-full text-gray-400">West Sumbawa - West Nusa Tenggara, 84456</p>
          </div>
          <div className="flex mb-2">
            <Envelope size={25} />
            <p className="ml-8 md:text-md text-sm w-full text-gray-400">sajadhijir@gmail.com</p>
          </div>
          <div className="flex mb-8">
            <Telephone size={25} />
            <p className="ml-8 md:text-md text-sm text-gray-400">(+62) 812 336 231 06</p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:mx-auto w-full lg:pl-10 lg:mt-10 md:mt-10">
          <form ref={form}>
            <div className="mb-6 w-full lg:mx-auto md:mx-auto mx-start">
              <input
                value={nama}
                type="text"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  mx-auto"
                placeholder="Your Name"
                name="user_name"
                required=""
                onChange={(e) => setNama(e.target.value)}
              />
            </div>
            <div className="mb-6 w-full lg:mx-auto md:mx-auto mx-start">
              <input
                type="email"
                id="email"
                name="user_email"
                value={email}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mx-auto"
                placeholder="Your Email"
                required=""
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex items-start mb-6  w-full lg:mx-auto md:mx-auto mx-start">
              <textarea
                value={pesan}
                id="message"
                name="message"
                rows="4"
                className="block p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 w-full lg:mx-auto md:mx-auto mx-start"
                placeholder="Leave a message for me"
                onChange={(e) => setPesan(e.target.value)}
              ></textarea>
            </div>
            <div className="flex items-start mb-6 w-full mx-auto">
              <button
                onClick={sendEmail}
                type="submit"
                className="inline-flex items-center py-2 px-4 text-sm font-medium text-center hover:text-white text-[#01d193] bg-[#171f38] rounded-lg border border-[#01d193] hover:bg-[#01d193] focus:ring-4 focus:outline-none focus:ring-gray-200 mx-start"
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
