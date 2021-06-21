import React from "react";
import Header from "./Header";
import Button from '@material-ui/core/Button';
import './Page.css';

function Page() {
  return (
    <div className="pageContainer">
      <Header></Header>
      <span class="dot first"></span>
      <span class="dot second"></span>
      <div className="right">
        <h4>This page is currently under construction. Please check back soon for updates 👋</h4>
        <div class="buttonContainer">
          <Button variant="contained" color="primary">Resume</Button>
        </div>
      </div>
    </div>
  );
}

export default Page;


