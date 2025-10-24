const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
    .then(() => {
        console.log("connection successfully");
    })
    .catch((err) => {
        console.log(err);        
    });

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}


//inserting data...
let allChats = [
    {
        from: "Neha",
        to: "Rahul",
        msg: "kya tum bhi coder ho?",
        create_at: new Date()
    },
    {
        from: "Sushrut",
        to: "Riya",
        msg: "Hay!, chalo na ghumne ke liye...",
        create_at: new Date()
    },
    {
        from: "Hanuman",
        to: "Shree Ram",
        msg: "Jay Shree Ram...",
        create_at: new Date()
    },
    {
        from: "Pritam",
        to: "Maa",
        msg: "Maa!, bahut bhok lagu6e...",
        create_at: new Date()
    },
    {
        from: "Tacher 1",
        to: "Student 1",
        msg: "Tum padhai kar rahe ho naa?",
        create_at: new Date()
    },
];

Chat.insertMany(allChats);