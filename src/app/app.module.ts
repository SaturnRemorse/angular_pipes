import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatePipeComponent } from './pipes-example/date-pipe/date-pipe.component';
import { ImportantPipesComponent } from './pipes-example/important-pipes/important-pipes.component';
import { UppercasePipe } from './pipes-custom/uppercase.pipe';
import { MyDatePipe } from './pipes-custom/myDate.pipe';
import { FarenToCelciusPipe } from './pipes-custom/farenToCelciusConverter.pipe';
import { FarenToCelciusComponent } from './pipes-example/faren-to-celcius/faren-to-celcius.component';
import { TempConverter } from './pipes-custom/tempConverter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DatePipeComponent,
    ImportantPipesComponent,
    UppercasePipe,
    MyDatePipe,
    FarenToCelciusPipe,
    FarenToCelciusComponent,
    TempConverter
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
