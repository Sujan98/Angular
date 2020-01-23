import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { HeaderComponent } from './header/header.component';
import { ShareComponent } from './shared/share/share.component';
import { loadingComponent } from './shared/loading-spinner/load.component';
import { DetailComponent } from './recipes/recipe_detail/recipe_detail.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EditComponent } from './shopping/shopping_edit/shopping_edit.component';
import { BasicdirDirective } from './basicdir.directive';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { HttpClientModule } from '@angular/common/http';
import { AccountComponent } from './account/account.component';
import { backComponent } from './shared/backdrop/backdrop.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const appRoutes: Routes = [
  { path: "", component: FormComponent },
  { path: "recipe", component: RecipesComponent },
  { path: "shopping", component: ShoppingComponent },
  { path: "details", component: AccountComponent }
  // { path: "load", component: loadingComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    RecipesComponent,
    ShoppingComponent,
    HeaderComponent,
    ShareComponent,
    DetailComponent,
    EditComponent,
    BasicdirDirective,
    FormComponent,
    AccountComponent,
    backComponent,
    loadingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
