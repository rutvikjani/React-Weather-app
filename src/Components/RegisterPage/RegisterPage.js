import Navigation from "../NavigationComponent/Navigation";
import "./RegisterPage.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLock,
  faMapPin,
  faMobile,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

function RegisterPage() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [pinCode, setPinCode] = useState("");

  const navigate = useNavigate("");

  const validatingFields = () => {
    let data = {
      fname,
      lname,
      email,
      username,
      password,
      phoneNumber,
      pinCode,
    };
    if (!fname || !lname || !email || !password || !phoneNumber || !pinCode) {
      alert("All fields are required");
    } else if (phoneNumber.length > 10 || phoneNumber.length < 10) {
      alert("Enter a valid mobile number");
    } else if (password.length < 4) {
      alert("Enter a valid password");
    } else {
      axios
        .post("http://localhost:3200/users", data)
        .then((res) => {
          navigate("/");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <>
      <Navigation firstButton={"Login"} secondButton={"Sign-Up"} />
      <div className="RegisterForm">
        <div>
          <FontAwesomeIcon icon={faUser} />
          <input
            type="text"
            placeholder="Enter your firstname"
            onChange={(e) => {
              setFname(e.target.value);
            }}
          ></input>
        </div>
        <div>
          <FontAwesomeIcon icon={faUser} />
          <input
            type="text"
            placeholder="Enter your lastname"
            onChange={(e) => {
              setLname(e.target.value);
            }}
          ></input>
        </div>
        <div>
          <FontAwesomeIcon icon={faUser} />
          <input
            type="text"
            placeholder="Enter your username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          ></input>
        </div>
        <div>
          <FontAwesomeIcon icon={faEnvelope} />
          <input
            type="email"
            placeholder="Enter your email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>
        </div>
        <div>
          <FontAwesomeIcon icon={faLock} />
          <input
            type="password"
            placeholder="Enter your password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div>
          <FontAwesomeIcon icon={faMobile} />
          <input
            type="number"
            placeholder="Enter your phone number"
            autoComplete="off"
            onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
          ></input>
        </div>
        <div>
          <FontAwesomeIcon icon={faMapPin} />
          <input
            type="text"
            placeholder="Enter your postal Code"
            onChange={(e) => {
              setPinCode(e.target.value);
            }}
          ></input>
        </div>

        <button onClick={validatingFields}> Submit </button>
      </div>
    </>
  );
}

export default RegisterPage;
