import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("Test Recipe", "This is simply a test recipe", "https://static.onecms.io/wp-content/uploads/sites/9/2017/06/fwx-food-emoji-ramen.jpg")
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
