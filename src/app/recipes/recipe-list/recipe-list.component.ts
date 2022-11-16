import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'Recipe Description', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyd0LJxe2agAj4xLXCr1V_rPIQkrEH8_3Akw&usqp=CAU')
  ];
  constructor() { }
  ngOnInit(): void {
  }

}
