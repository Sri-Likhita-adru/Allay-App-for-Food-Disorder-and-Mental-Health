import React from 'react';
import Chatbot from 'react-simple-chatbot';
import{Segment} from 'semantic-ui-react'


function App(){
    
    const steps = [

    {

      id: "Greet",

      message: "Hello, Welcome to our shop",

      trigger: "Ask name",
    },

    {

      id: "Ask name",

      message: "Please enter your name!",

      trigger: "waiting1",

    },

    {
        id: "waiting1",

        user: true,
  
        trigger: "Name",
  
      },
  
      {
  
        id: "Name",
  
        message: "Hi {previousValue}, How are you feeling today",
  
        trigger: "feeling",
  
      },
  
      {
  
        id: "feeling",
  
        options: [
  
          {
  
            value: "React",
  
            label: "React",
  
            trigger: "React",
  
          },
  
          { value: "HAAPY:)", label: "SAD:(", trigger: "I DON'T KNOW!!" },
  
        ],
  
      },
  
      {
  
        id: "HAPPY:)",
  
        message:
  
          "THAT'S AWESOME!! WHAT MAKES YOU HAPPY TODAY",
  
        end: true,
  
      },
  
      {
  
        id: "SAD:(",
  
        message:
  
          "WANNA TALK ABOUT IT?",
  
        end: true,
  
      },
  
    ]; 

function App(){
    return(<>
   <Segment floated="right">
    <ChatBot steps={steps}/>
    
    
    </Segment> 
   </>
    );
    }
}
