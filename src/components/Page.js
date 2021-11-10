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

  const textList = ["SOFTWARE DEVELOPER", "ROCK CLIMBER", "FOODIE"];

  React.useEffect(() => {
    var cycle;
    var interval;
  
    setTimeout(function () {
      cycle = document.getElementById("cycle");
      interval = setInterval(cycleText, 3000);
    }, 100);
  
    let i = 1;
  
    const cycleText = () => {
      cycle.classList.add('pre-animation');
      setTimeout(function () {
        cycle.innerHTML = textList[i];
        cycle.classList.remove("pre-animation");
        i = ++i % textList.length;
      }, 600);
    };

    return () => window.clearTimeout(interval);
  }, []);


  return (
    <div className="pageContainer" data-theme={darkMode ? "dark" : "light"}>
      <div className="split">
        <div className="container left">
          <h1>DANIEL TRAN</h1>
          <div id="cycle" className="title">
            SOFTWARE DEVELOPER
          </div>
          <h3>
            4A CS Student at the University of Waterloo looking for a New Grad Fulltime Position 
          </h3>
          {/* <Link to="/second">Second</Link> */}
        </div>
        <div className="container right">
          <h4>
            Hello! Welcome to my page. 
          </h4>
          <h5>
            As you can see, my name is Daniel. I am always down to climb and try new things. If you are ever climbing in Toronto, hit me up! 👋
          </h5>
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
                download("./DanielTran5v6.pdf", "TranDanielResume.pdf");
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
