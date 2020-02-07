import React, { useState } from "react";
import styled from "styled-components";
import TopBar from "./components/TopBar";
import FooterNavbar from "./components/FooterNavbar";
import MainWrapper from "./components/MainWrapper";

const AppStyles = styled.div`
  background: #f0f1f5;
  width: 100%;
  height: 100vh;
  position: relative;
`;

function App(props) {
  const [title, setTitle] = useState("home");
  const [passedHistory, setPassedHistory] = useState(null);
  const extraProps = {
    title,
    setTitle,
    passedHistory,
    setPassedHistory
  };

  return (
    <AppStyles>
      {title !== "charge" ? (
        <TopBar {...props} title={title} passedHistory={passedHistory} />
      ) : (
        <div
          style={{
            display: "block",
            position: "absolute",
            top: 0,
            padding: "10px",
            width: "100%"
          }}
        >
          <input
            type="text"
            name="search bar"
            placeholder="where would you like to charge? "
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "5px",
              border: "1px solid #ccc"
            }}
          />
        </div>
      )}

      <MainWrapper {...props} {...extraProps} />

      <FooterNavbar {...props} />
    </AppStyles>
  );
}

export default App;
