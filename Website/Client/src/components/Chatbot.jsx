import React, { useState } from "react";
import ChatBot from "react-simple-chatbot";
import ChatbotImg from "../assets/chatbot.png"
import { ThemeProvider } from "styled-components";

const theme = {
    background: "#F4F5F6",
    fontFamily: "Source Serif Pro",
    headerBgColor: "#C83CB9",
    headerFontColor: "#fff",
    headerFontSize: "18px",
    botBubbleColor: "#4984B8",
    botFontColor: "#fff",
    userBubbleColor: "#439fca",
    userFontColor: "#fff",
    innerHeight: "80%",
    fontWeight: "800"
};

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

        trigger: "issues",

    },

    {

        id: "issues",

        options: [

            {

                value: "HAAPY:)",

                label: "HAAPY:)",

                trigger: "HAAPY:)",
            },

            { value: "SAD:(", label: "SAD:(", trigger: "SAD:(" },

        ],

    },

    {

        id: "HAAPY:)",

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

function Chatbot() {

    return (
        <div className="">
            <ThemeProvider theme={theme}>
                <ChatBot
                    steps={steps}
                    floating={true}
                    floatingIcon={
                        <img
                            src={ChatbotImg}
                            style={{ width: "100%" }}
                            alt="chatBot icon"
                            className="rounded-full"
                        />
                    }
                    floatingStyle={{
                        backgroundColor: "#ffffff",
                        width: "60px",
                        height: "60px",
                        boxShadow: "2px 2px 20px -8px #111",
                    }} />
            </ThemeProvider>
        </div>
    );
}

export default Chatbot;