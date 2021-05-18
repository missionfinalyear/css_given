import React,{ useState, useCallback } from "react";
import "./ChatContent.css";
import ChatItem from "./ChatItem";
import { useConversations } from '../contexts/ConversationProvider.js'
//import Avatar from "../chatlist/Avatar.js";
import { Form, InputGroup,Button,ListGroup} from "react-bootstrap";
import ReactShadowScroll from 'react-shadow-scroll';
import Web3 from 'web3';
import { ChatAbi } from './ChatAbi.js';
import axios from 'axios';
import 'emoji-mart/css/emoji-mart.css';
import { Picker } from 'emoji-mart';



const web3 = new Web3(Web3.givenProvider);
const contractAddr='0x4599cC461481aB673cc68E709E4Dc76764E779e0';
const Chat = new web3.eth.Contract(ChatAbi, contractAddr);

var sender_name;
var mesg;

export default function OpenConversation() {
  //var mesgfrom =  id 
   const [text, setText] = useState('')
   const [emojiPickerState, SetEmojiPicker] = useState(false);

   let emojiPicker;
  if (emojiPickerState) {
    emojiPicker = (
      <Picker
        title="Pick your emoji…"
        emoji="point_up"
        onSelect={emoji => setText(text + emoji.native)}
      />
    );
  }

  function triggerPicker(event) {
    event.preventDefault();
    SetEmojiPicker(!emojiPickerState);
  }


  const setRef = useCallback(node => {
    if (node) {
      node.scrollIntoView({ smooth: true })
    }
  }, [])
  const { sendMessage, selectedConversation } = useConversations()

  

const userchat = (username,mesg) => async(event) =>  {
   event.preventDefault()
   
   sendMessage(
      selectedConversation.recipients.map(r => r.id),text
    )
    setText('')

   const accounts = await web3.eth.getAccounts();
    const account = accounts[0];
    await Chat.methods.chatlog(web3.utils.fromAscii(username)).send({
      from: accounts[0]
    });

   const data ={
    from : localStorage.getItem("UserChatID-id"),
    to : username,
    mesg : mesg
   }
 
    axios.post("http://localhost:3001/savechat",data
        )
        .then((response) => alert(JSON.stringify(response.data)));
      console.log("geg");


  };

  return(
    <>
     
     <ReactShadowScroll>

     <div className = "main__chatcontent">
            

    <div className="d-flex flex-column flex-grow-1">
     <ReactShadowScroll>
      <div className="flex-grow-1 overflow-auto">
        <div className="d-flex smooth flex-column align-items-start justify-content-end px-3">
            {selectedConversation.messages.map((message, index) => {
            const lastMessage = selectedConversation.messages.length - 1 === index
            sender_name= message.senderName;
            mesg= message.text
            return (
              <div
                ref={lastMessage ? setRef : null}
                key={index}
                className={`my-1 d-flex flex-column ${message.fromMe ? 'align-self-end align-items-end' : 'align-self-start align-items-start'}`}

              >
                <div 
                  className={`rounded px-2 py-1 ${message.fromMe ? 'bg-white text-black' : 'bg-primary text-white'}`}>
                  {message.text}
                </div>
                <div className={`text-muted small ${message.fromMe ? 'text-right text-white align-self-end align-items-end' : 'align-self-start align-items-start'}`}>
                  {message.fromMe ? 'You' : message.senderName}
                </div>
              </div>
            )
          })}
        </div>
      </div>

         </ReactShadowScroll>
         
         </div>
      <div className="content__footer">
          <div className="sendNewMessage"> 
                 {emojiPicker}
                      <button
                        class="ma4 b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                        onClick={triggerPicker}
                      >                       
                                          <span role="img" aria-label="">
                                            😁
                                          </span>
                      </button>   
                      <input
                        type="text"
                        placeholder="Type a message here"
                        required
                        value={text}
                        onChange={e => setText(e.target.value)}
                        style={{ height: '40px', resize: 'none' }}
                      />
                      <button onClick={userchat(sender_name,mesg)} className="btnSendMsg" id="sendMsgBtn">                       
                        <i className="fa fa-paper-plane"></i>
                      </button> 
           
          </div>  
      </div>
        </div>
    
     </ReactShadowScroll>
     </>
  );
}