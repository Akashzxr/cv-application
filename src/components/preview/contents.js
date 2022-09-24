import React, { Component } from "react";

class Contents extends Component{

       render(){
        return(
         <div className="contents">

           <div className="preview-contents">
              <h3 className="cstyle">Description</h3>
              Description
           </div>

           <div className="preview-contents">
              <h3 className="cstyle">Experience</h3>
              <div className="main-details">
                <h4>from - to</h4>
                <div className="content-details">
                    <h4>position</h4>
                    <div>company,city</div>
                </div>
              </div>
           </div>

           <div className="preview-contents">
              <h3 className="cstyle">Education</h3>
              <div className="main-details">
                <h4>from - to</h4>
                <div className="content-details">
                    <h4>university</h4>
                    <div>Degree :degree</div>
                    <div>Subject:subject</div>
                </div>
              </div>
           </div>


         </div>
        );
       }

}

export default Contents;