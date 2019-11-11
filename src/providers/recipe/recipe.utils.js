import uniqid from 'uniqid'
import { Fraction } from 'fractional'

export const parseIngrdients = ingredients => {
  const unitsLong = ["tablespoons", "tablespoon", "ounces", "ounce", "teaspoons", "teaspoon", "cups", "pounds"];
  const unitsShort = ["tbsp", "tbsp", "oz", "oz", "tsp", "tsp", "cup", "pound"];
  const units = [...unitsShort, "g", "kg"];

  const newIngredients = ingredients.map(el => {
    // convert unit
    let ingredient = el.toLowerCase();
    unitsLong.forEach((unit, i) => {
      ingredient = ingredient.replace(unit, unitsShort[i]);
    });

    // Remove Parenthesis
    ingredient = ingredient.replace(/ *\([^)]*\) */g, " ");

    // Parse ingredients into count, unit and ingredient
    const arrIng = ingredient.split(" ");
    const unitIndex = arrIng.findIndex(el2 => units.includes(el2));

    let objIng;
    if (unitIndex > -1) {
      const arrCount = arrIng.slice(0, unitIndex);

      let count;
      if (arrCount.length === 1) {
        count = eval(arrIng[0].replace("-", "+"));
      } else {
        count = eval(arrIng.slice(0, unitIndex).join("+"));
      }

      objIng = {
        count,
        unit: arrIng[unitIndex],
        content: arrIng.slice(unitIndex + 1).join(" ")
      };
    } else if (parseInt(arrIng[0], 10)) {
      objIng = {
        count: parseInt(arrIng[0], 10),
        unit: "",
        content: arrIng.slice(1).join(" ")
      };
    } else if (unitIndex === -1) {
      objIng = {
        count: 1,
        unit: "",
        content: ingredient
      };
    }

    return objIng;
  })
  for (let ingredient of newIngredients) {
    ingredient.id = uniqid();
  }
  return newIngredients;
}

export const formatCount = count => {
  if (count) {
      // count = 2.5 --> 5/2 --> 2 1/2
      // count = 0.5 --> 1/2
      const newCount = Math.round(count * 10000) / 10000;
      const [int, dec] = newCount.toString().split('.').map(el => parseInt(el, 10));

      if (!dec) return newCount;

      if (int === 0) {
          const fr = new Fraction(newCount);
          return `${fr.numerator}/${fr.denominator}`;
      } else {
          const fr = new Fraction(newCount - int);
          return `${int} ${fr.numerator}/${fr.denominator}`;
      }
  }
  return '?';
};

export const updateServings = (recipe, curServings, action) => {
  let newServings;
  console.log("CurServing   ", curServings)
  if (action === "plus") {
    newServings = curServings + 1;
  } else {
    newServings = curServings - 1;
  }

  const newIngredients = recipe.ingredients.map(ing => {
    ing.count *= newServings / curServings;
    return ing;
  });

  return {
    ...recipe,
    ingredients: newIngredients
  }
}

export const deleteIngredient = (recipe, id) =>  ({
    ...recipe,
    ingredients: recipe.ingredients.filter(el => el.id !== id)
  })