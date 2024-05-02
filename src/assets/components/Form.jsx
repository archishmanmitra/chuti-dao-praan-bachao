import React, { useRef, useEffect } from "react";

const Form = () => {
  let btn = document.querySelector(".submit");
  const myRef = useRef(null);

  useEffect(() => {
    myRef.current.addEventListener("click", handleClick);
    return () => {
      myRef.current.removeEventListener("click", handleClick);
    };
  }, []);

  const handleClick = (event) => {
    event.preventDefault();
    let name = document.querySelector(".name").value;
    let stream = document.querySelector(".stream").value;
    let batch = document.querySelector(".batch").value;
    let id = document.querySelector(".id").value;
    let college = document.querySelector(".college").value;
    let mail = document.querySelector(".email").value;
    if (
      name !== "" &&
      mail !== "" &&
      stream !== "" &&
      batch !== "" &&
      id !== "" &&
      college !== ""
    ) {
      let body = `Dear Sir,
    
    I hope this email finds you well. My name is ${name}, currently enrolled in ${stream} ${batch} at ${college}, with the student ID ${id}. I am writing to bring to your attention the pressing issue of the escalating temperatures in our region and its potential health risks to our students and faculty.
    
    As you may be aware, the recent surge in temperature has reached unprecedented levels, significantly increasing the risk of dehydration and heat-related illnesses among individuals exposed to prolonged outdoor activities. With forecasts predicting further spikes in temperature, it has become imperative for us to take proactive measures to ensure the well-being of our college community.
    
    In light of this, I kindly request the college administration to consider declaring a holiday and initiating the commencement of online classes. This decision aligns with the recent actions taken by the government, which has already declared holidays in government schools and colleges due to the extreme heatwave.
    
    Moreover, the overcrowding of public transport due to the closure of government institutions poses an additional risk to the health and safety of our students and staff. By transitioning to online classes, we can not only mitigate the risk of heat-related illnesses but also alleviate the strain on public transport infrastructure.
    
    I believe that by implementing these measures, we can ensure the continued academic progress of our students while prioritizing their health and well-being. I trust in your understanding and consideration of this matter and look forward to a swift and positive response.
    
    Thank you for your attention to this urgent issue.
    
    Sincerely,
    ${name}
    ${stream} ${batch}
    ${id}`;
      let to = `${mail}`;
      let subject =
        "Request for Declaration of Holiday and Commencement of Online Classes Due to Excessive Heat";
      let gmailUrl =
        "https://mail.google.com/mail/?view=cm&fs=1&to=" +
        encodeURIComponent(to) +
        "&su=" +
        encodeURIComponent(subject) +
        "&body=" +
        encodeURIComponent(body);
      window.open(gmailUrl);
      document.querySelector("#form").reset();
    } else {
      alert("Please fill out all fields.");
    }
  };

  return (
    <div className="form-container" id="action">
      <div className="form-head">
        <h2>ACTION!</h2>
        <p>Fill this up and tap Generate to take an initiative.</p>
      </div>
      <div className="form-main">
        <div className="left">
          <div className="form-wrapper">
            <form action="" id="form">
              <div className="form-set">
                <input
                  type="text"
                  name="name"
                  className="name"
                  required
                  autoComplete="off"
                  placeholder="Enter your full name"
                />
              </div>
              <div className="form-set">
                <input
                  type="text"
                  name="stream"
                  className="stream"
                  required
                  autoComplete="off"
                  placeholder="Enter your stream"
                />
              </div>
              <div className="form-set">
                <input
                  type="text"
                  name="batch"
                  className="batch"
                  required
                  autoComplete="off"
                  placeholder="Enter your batch"
                />
              </div>
              <div className="form-set">
                <input
                  type="text"
                  name="id"
                  className="id"
                  required
                  autoComplete="off"
                  placeholder="Enter your student id"
                />
              </div>
              <div className="form-set">
                <input
                  type="text"
                  name="college"
                  className="college"
                  required
                  autoComplete="off"
                  placeholder="Enter your college name"
                />
              </div>
              <div className="form-set">
                <input
                  type="email"
                  name="email"
                  className="email"
                  required
                  autoComplete="off"
                  placeholder="Enter your HOD's email id "
                />
              </div>
              <input
                ref={myRef}
                type="submit"
                value="Generate"
                className="submit"
              />
            </form>
          </div>
        </div>
        <div className="right">
          <img src="./src/images/fists-form.png" alt="" />
        </div>
      </div>
      <div className="footer">
        <h4>Copyright &#169; Archishman Mitra 2024</h4>
      </div>
    </div>
  );
};

export default Form;
