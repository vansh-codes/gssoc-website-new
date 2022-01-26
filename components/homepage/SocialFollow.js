import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
  return (
    <div className=" absolute object-right text-xs text-right right-0 pr-4 pl-4">
      <h3 className="text-white">Social Follow</h3>
      <a
        href="/"
        target="_blank"
        className="block pr-4 text-center text-black text-base bg-white hover:text-red-600 ease-linear hover:ease-in pt-4"
      >
        <FontAwesomeIcon className="w-10 h-10" icon={faYoutube} size="2x" />
      </a>
      <a
        href="/"
        target="_blank"
        className="block pr-4 text-center text-black text-base bg-white hover:text-blue-600 ease-linear hover:ease-in pt-4"
      >
        <FontAwesomeIcon className="w-10 h-10" icon={faFacebook} size="2x" />
      </a>
      <a
        href="https://www.linkedin.com/company/girlscriptsoc/mycompany/"
        target="_blank"
        className="block pr-4 text-center text-black text-base bg-white hover:text-blue-700 ease-linear hover:ease-in pt-4"
      >
        <FontAwesomeIcon className="w-10 h-10" icon={faLinkedin} size="2x" />
      </a>
      <a
        href="https://twitter.com/girlscriptsoc"
        target="_blank"
        className="block pr-4 text-center text-black text-base bg-white hover:text-blue-400 ease-linear hover:ease-in pt-4"
      >
        <FontAwesomeIcon className="w-10 h-10" icon={faTwitter} size="2x" />
      </a>
      <a
        href="https://www.instagram.com/girlscriptsummerofcode/?hl=en"
        target="_blank"
        className="block pr-4 text-center text-black text-base bg-white hover:text-pink-600 ease-linear hover:ease-in pt-6"
      >
        <FontAwesomeIcon className="w-10 h-10" icon={faInstagram} size="2x" />
      </a>
    </div>
  );
}
