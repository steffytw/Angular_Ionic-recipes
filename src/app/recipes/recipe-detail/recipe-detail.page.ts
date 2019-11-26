import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../recipe.module';
import { RecipesService } from '../recipes.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {
loadedRecipe: Recipe;

constructor( private activatedRoute: ActivatedRoute,
             private recipeService: RecipesService,
             private router: Router,
             private alertCrl: AlertController ) { }

onDeleteRecipe() {
  this.alertCrl.create({
    header: 'Are you sure ?',
    message: 'Do you want to Delete Recipe',
    buttons: [{
      text: 'Cancel',
      role: 'cancel'
    },
    {
      text: 'delete',
      handler: () => {
        this.recipeService.deleteRecipe(this.loadedRecipe.id);
        this.router.navigate(['/recipes']);
      }
    }]

  }).then((alertEl) => {
    alertEl.present();
  });
}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      if (!paramMap.has('recipeId')) {
        this.router.navigate(['/recipes']);
        return ;

      }
      const recipeId = paramMap.get('recipeId');
      this.loadedRecipe = this.recipeService.getRecipe(recipeId);
    });
  }

}
