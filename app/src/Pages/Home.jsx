import React, { useState, useEffect } from "react";
import { getToken } from "../Redux/auth/action";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router";
let tokenLocal = localStorage.getItem("token");

const Home = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { token, isLoading, isError } = useSelector((state) => state.isAuth);
  console.log(token)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);

    dispatch(
      getToken(
        {
          email:email,
        // email:  "eve.holt@reqres.in",
          password: password,
        // password:   "cityslicka"
        },
        navigate
      )
    );
  };

  if (isLoading) {
    return (
      <div>
        Loading....
      </div>
    );
  }
  

  return (
    <div>
     <h1>HOME</h1>
     <div>
         <form onSubmit={(e) => handleSubmit(e)}>
     <h1>Login</h1>
      <div >
        <label>Email :</label>
        <input
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>
      <div >
        <label>Password :</label>
        <input
          type="text"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </div>

      <div >
        <div></div>
        <button type="submit">Submit</button>
      </div>
      </form>
     </div>

    </div>
  )
}

export default Home