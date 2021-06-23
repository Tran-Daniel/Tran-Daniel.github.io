import React from "react";
import Header from "./Header";
import Button from '@material-ui/core/Button';
import './Page.css';



function Page() {
  function download() {
    var a = document.createElement('a');
    a.href = "/resources/resume.pdf";
    a.target = '_blank';
    a.download = "DanielTran.pdf";
    a.click();
  }

  return (
    <div className="pageContainer">
      <Header></Header>
      <div className="right">
        <h4>This page is currently under construction. Please check back soon for updates 👋</h4>
        <div className="buttonContainer">
          <Button onClick={() => {download()}} variant="contained" color="primary">Resume</Button>
        </div>
      </div>
      <span className="dot first"></span>
      <span className="dot second"></span>
    </div>
  );
}

export default Page;


