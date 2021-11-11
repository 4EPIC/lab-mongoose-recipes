const mongoose = require("mongoose");

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require("./models/Recipe.model");
// Import of the data from './data.json'
const data = require("./data");

const MONGODB_URI =
  "mongodb+srv://4EPIC:cgee81104@cluster0.mbel6.mongodb.net/LabRecipes?retryWrites=true&w=majority";

// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((self) => {
    console.log(`Connected to the database: "${self.connection.name}"`);
    // Before adding any recipes to the database, let's remove all existing ones
    // return Recipe.deleteMany();
  })
  .then(() => {
    // Run your code here, after you have insured that the connection was made
    // Recipe.create({
    //   title: "Cappuccino",
    //   level: "Easy Peasy",
    //   ingredients: ["Coffe", "Milk"],
    //   cuisine: "Italian",
    //   dishType: "breakfast",
    //   duration: 2,
    //   creator: "Marco Santa",
    //   created: new Date(),
    // });
    // Recipe.insertMany(data)
    // Recipe.findOneAndUpdate(
    //   { title: 'Rigatoni alla Genovese' },
    //   { $set: {duration: 100} },
    // );
    Recipe.deleteOne(
      { title: 'Carrot Cake' }
      );
    })
    .catch((error) => {
      console.error("Error connecting to the database", error);
    });
    
    mongoose.disconect()