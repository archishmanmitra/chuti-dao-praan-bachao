import { GiFist } from "react-icons/gi";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoSunny } from "react-icons/io5";

const Navbar = () => {
  let theme = false;
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
  const nav = document.querySelector("#navvu");
  let lastScrollY = window.scrollY;
  window.addEventListener("scroll", () => {
    if (lastScrollY < window.scrollY) {
      nav.classList.add("hide-the-nav");
    } else {
      nav.classList.remove("hide-the-nav");
    }
    lastScrollY = window.scrollY;
  });
  return (
    <nav id="navvu">
      <div className="left-section">
        <GiFist size={40} className="iconic" color="#054053" />
        <a href="">
          <h2>Chuti Dao</h2>
        </a>
      </div>
      <div className="middle-section">
        <ul>
          <a href="#home">
            <li>HOME</li>
          </a>
          <a href="#reason">
            <li>REASONS</li>
          </a>
          <a href="#action">
            <li>ACTION</li>
          </a>
        </ul>
      </div>
      <div className="right-section">
        <a href="" className="theme">
          {theme ? (
            <GiHamburgerMenu size={30} className="icon" color="#054053" />
          ) : (
            <IoSunny className="icon" size={30} color="#054053" />
          )}
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
