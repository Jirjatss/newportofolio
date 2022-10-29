import React from "react";
import { Facebook, Instagram, Twitter } from "react-bootstrap-icons";

function Footer() {
  return (
    <>
      <footer className="bg-gray-800 shadow md:flex md:items-center md:justify-between md:p-3 dark:bg-gray-800  font-signika">
        <div className="grid grid-rows-2 mx-auto">
          <div className="mx-auto">
            <span className="text-sm  text-white sm:text-center dark:text-gray-400">© Coppyright © 2022 - Jirjatss. All Rights Reserved.</span>
          </div>
          <div className="mx-auto -mt-4 -mb-3">
            <ul className="flex flex-wrap items-center  text-sm  text-black sm:mt-0">
              <li>
                <a href="https://www.instagram.com/Jirjatss/" target="_blank" rel="noreferrer" className="mr-4 px-3 hover:underline md:mr-6 ">
                  <Instagram color="whitesmoke" size={20} />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/jirjatss" target="_blank" rel="noreferrer" className="mr-4 px-3 hover:underline md:mr-6 ">
                  <Twitter color="whitesmoke" size={20} />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/profile.php?id=100076359733301" target="_blank" rel="noreferrer" className="mr-4 px-3 hover:underline md:mr-6 ">
                  <Facebook color="whitesmoke" size={20} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
