import { useEffect, useState } from "react";
import { GiFist } from "react-icons/gi";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoSunny } from "react-icons/io5";
import { ImCross } from "react-icons/im";


const Navbar = () => {
  let theme = false;
  if(window.matchMedia("(max-width: 900px)").matches) {
    theme =true;
  } 
  const [showcross, setShowcross] = useState(false);
  const [sidenav, setSidenav] = useState(false);
  //smooth scroll effect 
  let scrolling=document.querySelectorAll('a[href^="#"]')
  scrolling.forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      }); 
    });
  });
  //hide the navbar effect
  const [show,setShow] = useState (false);
  const [lastScrollY, setLastScrollY] = useState(0);
  // const nav = document.querySelector("#navvu");
  // let lastScrollY = window.scrollY;
  const controlNav=()=>{
    if (lastScrollY < window.scrollY) {
      setShow(true);
    } else {
      setShow(false);
    }
    // lastScrollY = window.scrollY;
    setLastScrollY(window.scrollY);
  } 
  
  useEffect(()=>{
    window.addEventListener("scroll", controlNav);
    return () => {
      window.removeEventListener('scroll', controlNav);
   };
  },[lastScrollY])

  const handleMenu = ()=>{
    setSidenav(true);
    setShowcross(true);
  }

  
  return (
    <nav className={`navvu ${show && 'hide-the-nav'}`}>
      <div className="left-section">
        <GiFist size={40} className="iconic" color="#054053" />
        <a href="">
          <h2>Chuti Dao</h2>
        </a>
      </div>
      <div className="middle-section">
        <ul onClick={()=>{
          setSidenav(false);
        }} className={`ull ${sidenav && 'resp'}`}>
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
        <a  className="theme" onClick={handleMenu}>
          {theme ? (
            <GiHamburgerMenu size={30} className="icon" color="#054053" />
          ) : (
            <IoSunny className="icon" size={30} color="#054053" />
          )}
        </a>
        <ImCross className={`icon cross ${showcross && 'scross'} `} size={30} color="#ffffff"/>

      </div>
    </nav>
  );
};

export default Navbar;
