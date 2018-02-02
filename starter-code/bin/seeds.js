// Iteration #1
const mongoose = require('mongoose');
const Drone = require('../models/Drones');


mongoose.connect('mongodb://localhost/drones-dev').then(() => console.log("Conectado!"));


/*const drones = [

  {
    name: "Modelo1",
    propellers: 1,
    maxSpeed: 17
  },
  {
    name: "Modelo2",
    propellers: 2,
    maxSpeed: 10
  }

];*/

const droneData = [
  { name: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
  { name: 'Racer 57', propellers: 4, maxSpeed: 20 },
  { name: 'Courier 3000i', propellers: 6, maxSpeed: 18 }
];

Drone.collection.drop();

droneData.forEach( d => {
  console.log(d)
  let dr = new Drone(d);
  dr.save( (err, dro) => {

    if(err){
      throw err;
    }
    console.log(`Drone ${dro.name}`);

  });

} );

