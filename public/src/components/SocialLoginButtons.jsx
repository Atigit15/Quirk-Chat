import React from "react";
import styled from "styled-components";
import { BsGoogle} from "react-icons/bs";
import {
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { firebaseAuth } from "../utils/FirebaseConfig";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { firebaseLoginRoute } from "../utils/APIRoutes";

export default function SocialLoginButtons() {
  const providers = {
    google: new GoogleAuthProvider(),
  };
  const navigate = useNavigate();

  const firebaseLogin = async (loginType) => {
    try {
      const provider = providers[loginType];
      provider.addScope('profile');
      provider.addScope('email');
      const userData = await signInWithPopup(firebaseAuth, provider);
      console.log(userData);
      const email = userData.user.email
        ? userData.user.email
        : userData.user.providerData[0].email;
      const { data } = await axios.post(firebaseLoginRoute, { email });

      if (data.status) {
        localStorage.setItem(
          process.env.REACT_APP_LOCALHOST_KEY,
          JSON.stringify(data.user)
        );
        navigate("/");
      } else {
        navigate("/setusername");
      }
    } catch (err) {}
  };
  return (
    <SocialLoginContainer>
      <button type="button" class="btn" onClick={() => firebaseLogin("google")}>
        Sign in with Google &nbsp; <BsGoogle />
      </button>
    </SocialLoginContainer>
  );
}

const SocialLoginContainer = styled.div`
.btn {
    width: 100%;
    background-color: #EA2088;
    color: white;
    padding: 1rem 2rem;
    border: none;
    font-weight: bold;
    cursor: pointer;
    border-radius: 0.4rem;
    font-size: 1rem;
    text-transform: uppercase;
    &:hover {
      background-color: #A90BD4;
    }
  }
`;