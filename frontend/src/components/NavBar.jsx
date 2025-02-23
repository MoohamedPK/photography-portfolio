import {Link} from "react-router-dom"
import {XIcon, MenuIcon} from "lucide-react"
import { useState } from "react";


function NavBar() {

    const [isDisplayed, setIsDisplayed] = useState(false);

  return (
    <div className="flex justify-between relative">
      <div className="logo">LOGO</div>

      <div className="menu">
        {isDisplayed ? (
            <XIcon className="size-10 cursor-pointer" onClick={() => {setIsDisplayed(!isDisplayed)}}/>
        ) : <MenuIcon className="size-10 cursor-pointer" onClick={() => {setIsDisplayed(!isDisplayed)}}/>}

        {isDisplayed && (
          <div className="dropdown_links absolute left-0 top-20 w-full h-screen text-center">

            <ul className="">
              <Link>
                <li>HOME</li>
              </Link>

              <Link>
                <li>ABOUT ME</li>
              </Link>

              <Link>
                <li>CONTACT</li>
              </Link>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default NavBar