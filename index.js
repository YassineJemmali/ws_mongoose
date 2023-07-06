// importer Express puis ajouter listner : en même temps, on doit créer un fichier .env et l'importer
const express = require("express");
const app = express();
// importer mongoose / le deuxième paragraf pour eviter les bugs
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

// importer schema depuis person.js
const User = require("./Model/person");

// importer dotenv
const dotenv = require("dotenv");
dotenv.config();

// connecter mongoose à mongodb.com
mongoose.connect(process.env.DB_URL).then(console.log("DB is connected"));

// console.log(User);

//Insertion d'une personne
// async function start() {
//   const person = await User.create({
//     name: "Yassine",
//     age: 15,
//     favoriteFoods: ["Batti5"],
//   });
// }
// start();

//insertion de plusieurs
// async function start() {
//   const arrayOfPeople = [
//     {
//       name: "Yahya",
//       age: 5,
//       favoriteFoods: ["Delle3"],
//     },
//     {
//       name: "Maryam",
//       age: 9,
//       favoriteFoods: ["3neb"],
//     },
//     {
//       name: "Najla",
//       age: 37,
//       favoriteFoods: ["Toute"],
//     },
//   ];
//   await User.create(arrayOfPeople);
// }
// start();

// Trouver toutes les personnes dans la base
// async function start() {
//   const lesPersonnes = await User.find();
//   console.log(lesPersonnes);
// }
// start();

// trouver une personne
// async function start() {
//   const find1Name = await User.findOne({ name: "Yassine" });
//   console.log(find1Name);
// }
// start();

//Trouver une personne avec ID
// async function start() {
//   const find1Id = await User.findById("64a71bc184d400f90514c690");
//   console.log(find1Id);
// }
// start();

//Trouver une personne avec ID et mettre à jour
// async function start() {
//   const find1Id = await User.findByIdAndUpdate(
//     "64a7261a16bf60b8c2dc7bab",
//     {
//       $push: { favoriteFoods: "3sal" },
//     },
//     { new: true }
//   );
// }
// start();

//Trouver une personne avec ID et mettre à jour age
// async function start() {
//   const find1Id = await User.findByIdAndUpdate(
//     "64a7261a16bf60b8c2dc7bab",
//     { age: 39 },
//     { new: true }
//   );
// }
// start();

//Trouver une personne avec ID et supprimer
// async function start() {
//   const find1Id = await User.findByIdAndRemove("64a71d89e5786c390f9494d8");
// }
// start();

// faire des filtres sur la base
//////////////////////////////////
// async function start() {
//   const lesPersonnes = await User.find().sort({ age: 1 });
//   console.log(lesPersonnes);
// }
// start();

// async function start() {
//   const lesPersonnes = await User.find({ favoriteFoods: "3neb" });
//   console.log(lesPersonnes);
// }
// start();

// select multiple
// async function start() {
//   const lesPersonnes = await User.find()
//     .sort({ age: 1 })
//     .limit(2)
//     .select("name age");
//   console.log(lesPersonnes);
// }
// start();

// trouver une personne et supprimer un champ
// async function start() {
//   const find1Name = await User.findOne({ name: "Yassine" }, { age: 0, _id: 0 });
//   console.log(find1Name);
// }
// start();

app.listen(process.env.PORT, () => {
  console.log(`Server is running on ${process.env.PORT}`);
});
