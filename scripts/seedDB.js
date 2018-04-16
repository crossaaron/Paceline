const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/paceline",
  {
    useMongoClient: true
  }
);


const memberSeed = [
  {
    name: "Bob The Biker",
    author: "raceguy@gmail.com",
    paidDues: true,
    memberSince: new Date(Date.now())
  },
  {
    name: "Joe The Biker",
    author: "guy@gmail.com",
    paidDues: true,
    memberSince: new Date(Date.now())
  },
  {
    name: "Frank The Tank",
    author: "tankman@gmail.com",
    paidDues: true,
    memberSince: new Date(Date.now())
  },
  {
    name: "Jill The Junk",
    author: "jilly@gmail.com",
    paidDues: true,
    memberSince: new Date(Date.now())
  },
  {
    name: "Sasha the Sweet",
    author: "bonjour@gmail.com",
    paidDues: true,
    memberSince: new Date(Date.now())
  },
  {
    name: "Sleezy Beeze",
    author: "nifong@gmail.com",
    paidDues: true,
    memberSince: new Date(Date.now())
  },
  {
    name: "William Shatner",
    author: "capkirk@gmail.com",
    paidDues: true,
    memberSince: new Date(Date.now())
  },
  {
    name: "Rizzo",
    author: "hooplah@gmail.com",
    paidDues: true,
    memberSince: new Date(Date.now())
  },
  {
    name: "Trish The Dish",
    author: "floozy@gmail.com",
    paidDues: true,
    memberSince: new Date(Date.now())
  },
  {
    name: "Random Guy",
    author: "weirdo@gmail.com",
    paidDues: true,
    memberSince: new Date(Date.now())
  },
  {
    name: "Bodacious Bella",
    author: "notagal@gmail.com",
    paidDues: true,
    memberSince: new Date(Date.now())
  },
  {
    name: "Kensei",
    author: "ninjabike@gmail.com",
    paidDues: true,
    memberSince: new Date(Date.now())
  }
];

db.Member.remove({})
  .then(() => db.Member.collection.insertMany(memberSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
