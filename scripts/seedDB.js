const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/paceline");


const memberSeed = [
  {
    name: "Bob The Biker",
    email: "raceguy@gmail.com",
    image: "https://randomuser.me/api/portraits/men/0.jpg",
    paidDues: true,
    memberSince: new Date(Date.now())
  },
  {
    name: "Joe The Biker",
    email: "guy@gmail.com",
    image: "https://randomuser.me/api/portraits/men/34.jpg",
    paidDues: true,
    memberSince: new Date(Date.now())
  },
  {
    name: "Frank The Tank",
    email: "tankman@gmail.com",
    image: "https://randomuser.me/api/portraits/men/50.jpg",
    paidDues: true,
    memberSince: new Date(Date.now())
  },
  {
    name: "Jill The Junk",
    email: "jilly@gmail.com",
    image: "https://randomuser.me/api/portraits/women/7.jpg",
    paidDues: true,
    memberSince: new Date(Date.now())
  },
  {
    name: "Sasha the Sweet",
    email: "bonjour@gmail.com",
    image: "https://randomuser.me/api/portraits/women/10.jpg",
    paidDues: true,
    memberSince: new Date(Date.now())
  },
  {
    name: "Sleezy Beeze",
    email: "nifong@gmail.com",
    image: "https://randomuser.me/api/portraits/women/31.jpg",
    paidDues: true,
    memberSince: new Date(Date.now())
  },
  {
    name: "William Shatner",
    email: "capkirk@gmail.com",
    image: "http://78.media.tumblr.com/avatar_6e0e560705f6_128.pnj",
    paidDues: true,
    memberSince: new Date(Date.now())
  },
  {
    name: "Rizzo",
    email: "hooplah@gmail.com",
    image: "https://randomuser.me/api/portraits/women/22.jpg",
    paidDues: true,
    memberSince: new Date(Date.now())
  },
  {
    name: "Trish The Dish",
    email: "floozy@gmail.com",
    image: "https://randomuser.me/api/portraits/women/11.jpg",
    paidDues: true,
    memberSince: new Date(Date.now())
  },
  {
    name: "Random Guy",
    email: "weirdo@gmail.com",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    paidDues: true,
    memberSince: new Date(Date.now())
  },
  {
    name: "Bodacious Bella",
    email: "notagal@gmail.com",
    image: "https://randomuser.me/api/portraits/women/54.jpg",
    paidDues: true,
    memberSince: new Date(Date.now())
  },
  {
    name: "Kensei",
    email: "ninjabike@gmail.com",
    image: "https://randomuser.me/api/portraits/men/15.jpg",
    paidDues: true,
    memberSince: new Date(Date.now())
  }
];

db.Member.remove({})
  .then(() => db.Member.collection.insertMany(memberSeed))
  .then(data => {
    console.log(memberSeed.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
