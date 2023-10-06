import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output()recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[]=[
    new Recipe('A Test Recipe', 'This is simply a test', 'https://images.pexels.com/photos/7807417/pexels-photo-7807417.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'),
    new Recipe('Another Test Recipe', 'This is simply another test', 'https://images.pexels.com/photos/7807417/pexels-photo-7807417.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')

  ];

  constructor()  {

  }

  ngOnInit(){

  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
