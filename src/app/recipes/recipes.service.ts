import { Injectable } from '@angular/core';
import { Recipe } from './recipe.module';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
 private  recipes: Recipe[] = [
    {id: 'r1',
    title: 'sandwich',
     imgUrl: 'https://www.warburtons.co.uk/images/RecipeImage/115.jpg',
    ingredients: ['bread', 'vegs', 'sausage']
    },
    {
      id: 'r2',
    title: 'burger',
     imgUrl: 'https://www.seriouseats.com/recipes/images/2015/07/20150702-sous-vide-hamburger-anova-primary.jpg',
    ingredients: ['cheese', 'bun', 'cutlet', ' tomato', 'salad']
    }
  ];
  getRecipe(recipeId: string) {
    return {...this.recipes.find(recipe => {
      return recipe.id === recipeId;

    })};
  }

  getAllRecipe() {
    return [...this.recipes];
  }
  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== recipeId;

    });

  }

  constructor() { }
}
