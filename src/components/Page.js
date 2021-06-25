import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import "./Page.css";

function Page() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(darkMode ? false : true);
    document.body.style.backgroundColor = getComputedStyle(
      document.documentElement
    ).getPropertyValue("--clr-main-100");
  };

  function download(fileUrl, fileName) {
    var a = document.createElement("a");
    a.href = fileUrl;
    a.target = "_blank";
    a.download = fileName;
    a.click();
  }

  const textList = ["SOFTWARE DEVELOPER", "ROCK CLIMBER", "NAP ENTHUSIAST"];

  textSequence(1);

  function textSequence(i) {
    if (textList.length > i) {
      setTimeout(function () {
        var cycle = document.getElementById("cycle");
        cycle.classList.add('pre-animation');
        setTimeout(function(){
          cycle.innerHTML = textList[i];
          textSequence(++i);
          cycle.classList.remove('pre-animation')
        }, 600)
      }, 3000);
    } else if (textList.length == i) {
      textSequence(0);
    }
  }

  return (
    <div className="pageContainer" data-theme={darkMode ? "dark" : "light"}>
      <div className="split">
        <div className="container left">
          <h1>DANIEL TRAN</h1>
          <div id="cycle" className="title">
            SOFTWARE DEVELOPER
          </div>
          <h3>
            4A CS Student at the University of Waterloo looking for a Fall 2021
            Coop position.
          </h3>
          {/* <Link to="/second">Second</Link> */}
        </div>
        <div className="container right">
          <h4>
            This page is currently under construction. Please check back soon
            for updates 👋
          </h4>
          <div className="buttonContainer">
            <Button
              onClick={() => {
                toggleDarkMode();
              }}
              variant="contained"
              color="primary"
            >
              {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            </Button>
          </div>
          <div className="buttonContainer">
            <Button
              onClick={() => {
                download("./DanielTran4Av4.pdf", "DanielTranResume.pdf");
              }}
              variant="contained"
              color="primary"
            >
              Resume
            </Button>
          </div>
        </div>
      </div>
      <span className="dot first"></span>
      <span className="dot second"></span>
    </div>
  );
}

export default Page;
