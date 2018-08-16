import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { ChildComponent } from './child/child.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HogeHogeComponent } from './hoge-hoge/hoge-hoge.component'; // この行を追加

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    ChildComponent,
    HogeHogeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot() // この行を追加
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
