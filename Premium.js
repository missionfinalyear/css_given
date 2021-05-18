import React from 'react';  
import { Modal, Form } from 'react-bootstrap';
import PremiumInfo from './PremiumInfo';
import PremiumMembership from './PremiumMembership';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import axios from 'axios';
import Card from 'react-bootstrap/Card';


export default class Premium extends React.Component {  
    constructor(props) {
    super(props);
       this.state = {isPremium: localStorage.getItem("ispremium")};
  }
 

  render() {
    const isPremium = this.state.isPremium;
    let button;
    if (isPremium) {
      button = <PremiumMembership/>;
    } else {
      button = <PremiumMembership/>;
    }
return (  
        <>  
         <br/>  
       <br/>  
        <br/>  
        
        <Link to="/dashboard">
                 <Button style={{ borderRadius: "12px", fontSize:"30px", fontWeight:"bold", paddingLeft:"10px"}} > Back </Button>
               </Link>
              <div className="container h-100 d-flex justify-content-center">
         <Card style={{width: "500px"}}>
    <Card.Title className="text-center" >
        Catch The Match Premium Plan
      </Card.Title>
      <Card.Body className="text-center" >
         {button}
      </Card.Body>
    </Card>
 </div>
 </>

);  
}  
}  









