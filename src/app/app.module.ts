import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';

//3rd party modules
import { AngularFireModule } from 'angularfire2';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';

//environment access
import { environment } from './../environments/environment';

//components
import { BodyFatComponent } from './body-fat/body-fat.component';

//routing setup
const routes: Routes = [
	{
		path: '',
		redirectTo: 'bodyfat',
		pathMatch: 'full'
	},
	{
		path: 'bodyfat',
		component: BodyFatComponent
	}
]

@NgModule({
  declarations: [
    AppComponent,
    BodyFatComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    NgbModule.forRoot(),
    RouterModule.forRoot(routes),
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
