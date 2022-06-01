import profile from "../public/profile.png";
import { BsCaretDownFill } from "react-icons/bs";
import { BsBellFill } from "react-icons/bs";

export default function Navbar() {
  return (
    <div className="main">
      <div className="nav">
        <div>
          <div className="navNoti"/>
          <BsBellFill className="navBell" style={{ color: "white" }} />
        </div>
        <img className="navProfile" src={profile} />
        <span className="navName">Panyawat</span>
        <BsCaretDownFill className="navDown" style={{ color: "white" }} />
      </div>
      </div>
  );
}
