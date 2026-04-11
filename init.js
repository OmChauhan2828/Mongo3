const mongoose = require('mongoose');
const Chat = require('./models/chat.js');


main()
   .then(() => {
    console.log('Connected to MongoDB');
    })
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allchats = [
    {
        from: 'rahul',
        to: 'avnish',
        message: 'Hello, Avinash!',
        created_at: new Date(),
    },
    {
        from: 'akshat',
        to: 'ravi',
        message: 'Hello, Rahul! How are you?',
        created_at: new Date(),
    },
    {
        from: 'abhishek',
        to: 'aditya',
        message: 'I am good, thanks! How about you?',
        created_at: new Date(),
    },
    {
        from: 'akash',
        to: 'yashraj',
        message: 'I am doing well too! Thanks for asking.',
        created_at: new Date(),
    },  
];
Chat.insertMany = (allchats);
