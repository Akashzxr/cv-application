import React, { Component } from "react";

class Sidebar extends Component{

    

    render(){
        return(
         <div className="sidebar">
            <h3 className="sidebar-head">Personal Details</h3>
            <div className="details">
                <div>
                  <h4>Address</h4>
                  address
               </div>

               <div>
                  <h4>Phone Number</h4>
                  phone number
               </div>

               <div>
                  <h4>Email</h4>
                  email
               </div>

            </div>

         </div>
        );
    }

}



export default Sidebar;