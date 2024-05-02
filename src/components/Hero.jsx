import Navbar from "./Navbar";

const Hero = () => {
  return (
    <>
      <div className="hero-container" id="home">
        <Navbar />
        <main>
          <div className="hero-image">
            <img
              className="hero-image-image"
              src="/images/hero-image.png"
              alt=""
            />
          </div>
          <h1>
            CHUTI DAO
            <br />
            PRAAN BACHAO
          </h1>
          <h3>
            Wanna save yourself from getting a heatstroke in this awful weather? Mail your
            authorities to schedule online classes with our mail generator and all you have to do is just send.
           
          </h3>
          <div className="hero-buttons">
            <a href="#action"><button className="hero-btn card-btn">Let's Do This</button></a>
            <a href="#reason"><button className="hero-btn form-btn">Not Convinced</button></a>
          </div>
        </main>
      </div>
    </>
  );
};

export default Hero;
