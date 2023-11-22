import Navigation from "../NavigationComponent/Navigation";
import "./LoginPage.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey, faUser } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../auth";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const auth = useAuth()

  const checkMail = () => {
    if (username) {
      axios
        .get(
          "http://localhost:3200/users" +
            "?username=" +
            username +
            "&password=" +
            password
        )
        .then((response) => {
          try{
            if(response.data[0].username === username ){
              auth.login(username)
              navigate("home-page", {replace: true})
        }
          }catch(err) {
            console.log(err)
            alert("User Not Found")
          }
        });
      }
    };

  return (
    <div className="LoginContainer">
      <Navigation firstButton={"Login"} secondButton={"Sign-up"} />
      <div className="LoginForm">
        <div>
          <FontAwesomeIcon icon={faUser} />
          <input
            type="email"
            placeholder="Enter Your username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          ></input>
        </div>
        <div>
          <FontAwesomeIcon icon={faKey} />
          <input
            type="password"
            placeholder="Enter Your Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></input>
        </div>
        <button onClick={checkMail}> Submit </button>
      </div>
    </div>
  );
}

export default LoginPage;
