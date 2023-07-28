import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Robot from "../assets/robot.gif";
import Logout from "./Logout";
export default function Welcome() {
  const [userName, setUserName] = useState("");
  useEffect(() => {
    (async()=>{setUserName(
      await JSON.parse(
        localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
      ).username
    );})();
  }, []);
  return (
    <Container>
      <Logout></Logout>
      <br></br>
      <div><iframe src="https://giphy.com/embed/Cmr1OMJ2FN0B2" width="100%" height="100%" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/hello-Cmr1OMJ2FN0B2">via GIPHY</a></p>
      <br></br>
      <br></br>
      <br></br>
      <h1>
        Welcome, <span>{userName} !</span>
      </h1>
      <h3>Please select a chat to start messaging.</h3>
      <br></br>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  flex-direction: column;
  img {
    height: 20rem;
  }
  span {
    color: #A90BD4;
  }

  .giphy-embed{
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
`;