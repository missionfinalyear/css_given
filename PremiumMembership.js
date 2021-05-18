import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
//import TextField from '@material-ui/core/TextField';
import styled from "styled-components";
import PaymentPopUp1 from './PaymentPopUp1.js';
import Card from 'react-bootstrap/Card';
import Axios from "axios";



const theme = {
  blue: {
    default: "#283593",
    hover: "blue"
  }
};

const Button = styled.button`
  background-color: ${(props) => theme[props.theme].default};
  color: white;
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 10px;
  margin: 10px 0px;
  cursor: pointer;
  box-shadow: 0px 2px 2px lightgray;
  &:hover {
    background-color: ${(props) => theme[props.theme].hover};
  }
`;

Button.defaultProps = {
  theme: "blue"
};

export default class PremiumMembership extends Component {
        constructor(props){
          super(props);
          
          this.state = { showPopup: false }; 
          this.paymentPopUp1 = this.paymentPopUp1.bind(this);
        }

        paymentPopUp1() {  
          this.setState({  
               showPopup: !this.state.showPopup  
          });  
           } 

  render() {
    return (
      <React.Fragment>
        <Card className="justify-content-center">
                <Card.Body className="text-center" >
                  
                  <Card.Title className="text-center"> Premium Membership Plan</Card.Title>
                  <Card.Text>
                    Upgrade your Free Membership Plan to<br/> <b>Premium Membership</b><br/> and Gain Access to Unlimited Features                  
                  </Card.Text>
                  <Button onClick={this.paymentPopUp1.bind(this)} variant="primary">Click here to Proceed</Button>
                </Card.Body>
                 {this.state.showPopup ?  
          <PaymentPopUp1    
              closePopup={this.paymentPopUp1.bind(this)}  
          />  
          : null  
          }  
        </Card>
      </React.Fragment>
  );
 }
}
