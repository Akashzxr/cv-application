import React, { Component } from "react";

class Contents extends Component{

       render(){
        const {description,position,company,city,Efrom,Eto, university,ucity,subject,degree,ufrom,uto}=this.props;
        return(
         <div className="contents">

           <div className="preview-contents">
              <h3 className="cstyle">Description</h3>
              {description}
           </div>

           <div className="preview-contents">
              <h3 className="cstyle">Experience</h3>
              <div className="main-details">
                <h4>{Efrom} - {Eto}</h4>
                <div className="content-details">
                    <h4>{position}</h4>
                    <div>{company},</div>
                    <div>{city}</div>
                </div>
              </div>
           </div>

           <div className="preview-contents">
              <h3 className="cstyle">Education</h3>
              <div className="main-details">
                <h4>{ufrom} - {uto}</h4>
                <div className="content-details">
                    <h4>{university},{ucity}</h4>
                    <div>Degree :{degree}</div>
                    <div>Subject:{subject}</div>
                </div>
              </div>
           </div>


         </div>
        );
       }

}

export default Contents;