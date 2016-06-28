// import { Ingredient } from '../models/ingredient';
// import { Ingredients } from '../collections/ingredients';
const IngredientModel = require('../models/ingredient.js');
// const Ingredient_UserModel = require('../models/ingredient_user.js');
const IngredientsCollection = require('../collections/ingredients.js');
// const Ingredient_UserCollection = require('../collections/ingredient_user.js');
// let ingredientId;
// Note to team: try to do these relationally. If not,
// make use of the req object to obtain userID

module.exports = {
  updateIngredients: (req, res) => {
    const ingredients = req.body.selectedIngredients;
    const userId = req.body.userID;
    console.log('ingredients controller!!!!', ingredients, userId);
    res.send('POST to /api/ingredients, this is ingredients');
    // basic steps needed
    // 1: Check to see if the user has saved any ingredient lists
    // 2: if yes, search through each set/array to find a match
    //    with our current search basically it's an async
    //    deep equal array problem
    // 3: if no match OR user isn't in the table
    // 4: save the list of selected ingredients under their name
    // check if ingredient list already exists
    let alreadySaved = null;
    const ingredientIdArray = [];
    ingredients.forEach((ing) => {
      IngredientModel.where({ ingredient: ing }).fetch()
        .then((foundModel) => {
          if (foundModel) {
            console.log('Model Found, extracting id...');
            ingredientIdArray.push(foundModel.attributes.id);
            console.log(ingredientIdArray);
          } else { // if ingredient not in database,
            // add it, get the id, and set alreadySaved to false
            console.log(ing, ': Ingredient not found, adding it');
            IngredientsCollection.create({ ingredient: ing })
              .then((ingredientModel) => {
                ingredientIdArray.push(ingredientModel.attributes.id);
                alreadySaved = false;
                console.log(ing, 'ing ID:', ingredientModel.attributes.id);
                if (alreadySaved !== false) {
                  // do something
                }
              })
              .catch((error) => { console.log(error); });
          }
        });
    });
  },
};

//   getIngredients: (req, res) => {
//     const ingredients = req.body.selectedIngredients;
//     console.log('GET: ', ingredients);
//     res.send('get to /api/updateingredients, this is ingredients');
//   },
// };
