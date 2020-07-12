import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatDrawerContainer, MatSidenavModule } from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatCardModule, MatCard} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  exports: [
      MatSidenavModule,
      MatListModule,
      MatSlideToggleModule,
      MatCardModule,
      MatFormFieldModule,
      FormsModule,
      MatInputModule,
      MatButtonModule,
      BrowserAnimationsModule,
      BrowserModule,
  ],

})
export class SharedModule { }
