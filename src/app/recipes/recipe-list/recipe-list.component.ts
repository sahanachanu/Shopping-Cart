import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[] = [
    new Recipe('A test Recipe', 'This is simply a test','https://cookieandkate.com/images/2018/04/loaded-vegetable-nachos-recipe-2-768x1151.jpg')
  ];

 
  constructor() { }

  ngOnInit() {
  }

}
