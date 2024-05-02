import { HiMiniFire } from "react-icons/hi2";
import { IoBusSharp } from "react-icons/io5";
import { TbDropletExclamation } from "react-icons/tb";
import { RiGovernmentFill } from "react-icons/ri";
import { RiFootprintFill } from "react-icons/ri";

const Card = () => {
  return (
    <>
      <div className="card-container" id="reason">
        <div className="reason-container">
          <h1>REASONS</h1>
        </div>

        <div className="card-row">
          <div className="card">
            <div className="card-content">
              <HiMiniFire size={45} />
              <h3>Heat Wave Hurdles</h3>
              <p>
                With temperatures clocking in at 45℃, conducting classes online
                mitigates health risks such as sun strokes, nosebleeds and dizziness, ensuring the safety
                and continuity of learning.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <IoBusSharp size={45} />
              <h3>Scorching Commute Chaos</h3>
              <p>
                Public transport systems are overflowing with passengers turning
                every journey into a struggle. Additionally missing out on our
                designated mode of transport sets us back.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <TbDropletExclamation size={45} />
              <h3>Dehydration Risk</h3>
              <p>
                As the temperature rises, so does the risk of dehydration.
                Excessive heat drains energy levels, leaving us weary and
                dehydrated during transport and classes.
              </p>
            </div>
          </div>
        </div>
        <div className="card-row">
          <div className="card">
            <div className="card-content">
              <RiGovernmentFill size={45} />
              <h3>Government's Response</h3>
              <p>
                In response to the sweltering heatwave sweeping the nation, the
                government has already taken decisive action by declaring a
                holiday and initiating online classes.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <RiFootprintFill size={45} />
              <h3>Cutting Carbon Footprint</h3>
              <p>
                Using air conditioning contributes to increased energy
                consumption and greenhouse gas emissions. Students can help
                lower their carbon footprint by reducing the use of
                transportation fuels.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
