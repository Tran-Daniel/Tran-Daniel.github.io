import React from "react";
import Header from "./Header";
import Button from '@material-ui/core/Button';
import './Page.css';



function Page() {
  function download(fileUrl, fileName) {
    var a = document.createElement('a');
    a.href = fileUrl;
    a.target = '_blank';
    a.download = fileName;
    a.click();
  }

  return (
    <div className="pageContainer">
      <Header></Header>
      <div className="right">
        <h4>This page is currently under construction. Please check back soon for updates 👋</h4>
        <div className="buttonContainer">
          <Button onClick={() => {download("./DanielTran4Av4.pdf", "DanielTranResumsse.pdf")}} variant="contained" color="primary">Resume</Button>
        </div>
      </div>
      <span className="dot first"></span>
      <span className="dot second"></span>
    </div>
  );
}

export default Page;


