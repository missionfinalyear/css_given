import React from 'react';
import Axios from "axios";
import { makeStyles } from '@material-ui/core/styles';
import { Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import Card from 'react-bootstrap/Card';


var moment = require('moment');
const url = "http://localhost:3001/upload/"

export default function MyData(props){

	console.log(props.myprofiles);

	const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});
			

	const DisplayMyProfile = (props) => {

		const {myprofiles} = props;
        const classes = useStyles();

		if (myprofiles.length>0){
			console.log(myprofiles.length)

            function toBase64(arr) {
                    arr = new Uint8Array(arr) //if it's an ArrayBuffer
   					return btoa(
     				 arr.reduce((data, byte) => data + String.fromCharCode(byte), '')
   					);
				}

			return(
                myprofiles.map((me,index) => {
                	console.log(me);
                	const {data} = me.dp;
                	
                	return(
                		<div className="Button" style={{paddingLeft:"30px", paddingTop:"10px"}}>
                		<Link to="/dashboard">
    						 <Button style={{ borderRadius: "12px", fontSize:"30px", fontWeight:"bold", paddingLeft:"10px"}} > Back </Button>
     					 </Link>
     					<card>
                		<div className='dp' key={me.userid} style= {{paddingLeft:"400px"}}>
                		
                		<img src={url+me.dp} alt="dp" style={{height:"200px", width:"200px" , paddingTop:"20px",paddingLeft:"20px",paddingRight:"20px",paddingBottom:"20px", border:"5px", borderRadius:"50%"}}/>
                        
                        <p style={{padding:"0px 550px 100px 10px"}}> {me.username},{me.age}
                        <br></br>
                        {me.profession}
                        <br></br>
                        Chat ID: {me.chatid}
                        <hr style={{height:"30px",color:"red"}}/>
                        
		                 <ul>
		                 <li key="{me.dob}"><p  > Date of Birth : {moment(me.dob).format('DD MMM, YYYY') } </p></li>
		                 <li key="{me.gender}"><p  > Gender : {me.gender}</p></li>
		                 <li key="{me.nationality}"><p  > Nationality : {me.nationality}</p></li>
		                 <li key="{me.religion}"><p  > Relogion : {me.religion}</p></li>
		                 <li key="{me.caste}"><p  > Caste : {me.caste}</p></li>
		                 <li key="{me.maritalstatus}"><p  > Marital Status : {me.maritalstatus}</p></li>
		                 <li key="{me.languagesknown}"><p  > Languages known : {me.languagesknown}</p></li>
		                 <li key="{me.address}"><p  > Address : {me.address}</p></li>
		                 <li key="{me.email}"><p  > Email : {me.email}</p></li>
		                 <li key="{me.mobile}"><p  > Mobile : {me.mobile}</p></li>
		                 </ul>
		                 
		                 </p>    
		                 </div>
		                </card>
     					 </div>
                       
                		)
                })
				)
		}
		else{
			return (<h3> No Profile Found </h3>)
		}
	}

	return(
		<>
		{DisplayMyProfile(props)}
		</>
		)
}