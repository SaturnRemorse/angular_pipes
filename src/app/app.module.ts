import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatePipeComponent } from './pipes-example/date-pipe/date-pipe.component';
import { ImportantPipesComponent } from './pipes-example/important-pipes/important-pipes.component';

@NgModule({
  declarations: [
    AppComponent,
    DatePipeComponent,
    ImportantPipesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
