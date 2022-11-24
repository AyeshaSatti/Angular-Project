import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Test Recipe', 'Test Recipe Description', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyd0LJxe2agAj4xLXCr1V_rPIQkrEH8_3Akw&usqp=CAU'),
        new Recipe('Another Recipe', 'Another Recipe Description', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyd0LJxe2agAj4xLXCr1V_rPIQkrEH8_3Akw&usqp=CAU')
    ];

    getRecipes() {
        return this.recipes.slice();
    }

}