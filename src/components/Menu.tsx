import { BsCardList } from "react-icons/bs";
import logo from "../public/logo.png";

export default function Menu() {
  return (
    <div>
      <div className="menu">
        <div>
          <img src={logo} />
        </div>
        <div className="place">
          <BsCardList className="placeLogo" style={{ color: "white" }} />
          <span>Place</span>
        </div>
      </div>
    </div>
  );
}
