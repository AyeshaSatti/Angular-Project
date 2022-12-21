import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Chicken Gravy ', 'Something like Fluidii', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyd0LJxe2agAj4xLXCr1V_rPIQkrEH8_3Akw&usqp=CAU'),
        new Recipe('Mighty Burger', 'Buger Of Your Choice', 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=999&q=80')
    ];

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];

    }

}