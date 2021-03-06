import React from "react"
import { Link } from "gatsby"
import Github from "../icons/Github"
import LinkedIn from "../icons/LinkedIn"
import Xing from "../icons/Xing"
import Pinterest from "../icons/Pinterest"

const Footer = () => {
  const link = "p-4 h-16 w-16 md:h-20 md:w-16"

  return (
    <div className="mt-12 w-100 bg-sb-turquoise font-display">
      <div className="flex justify-center p-6 md:p-12">
        <a href="https://github.com/antokro" target="_blank" className={link}>
          <Github />
        </a>
        <a
          href="https://www.linkedin.com/in/antonia-krohn-a404b3182/"
          target="_blank"
          rel="noopener noreferrer"
          className={link}
        >
          <LinkedIn />
        </a>
        <a
          href="https://www.xing.com/profile/Antonia_Krohn/cv"
          target="_blank"
          rel="noopener noreferrer"
          className={link}
        >
          <Xing />
        </a>
        <a
          href="https://www.pinterest.de/antoniakrohn/"
          target="_blank"
          rel="noopener noreferrer"
          className={link}
        >
          <Pinterest />
        </a>
      </div>
      <div className="text-center pb-6 md:pb-12 text-white text-xs md:text-base">
        ©️ 2020 with lots of 🧡 by Antonia -{" "}
        <Link to="/impressum">Impressum</Link>
      </div>
    </div>
  )
}

export default Footer
