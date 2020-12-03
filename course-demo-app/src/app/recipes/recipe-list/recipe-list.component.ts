import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styles: [
  ]
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'Recipe desc', 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Veg_Pulao_with_onion_Raitha_02.jpg'),
    new Recipe('A test recipe', 'Recipe desc', 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Veg_Pulao_with_onion_Raitha_02.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
