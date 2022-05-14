import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { LandingComponent } from './landing/landing.component';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [LandingComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HomeRoutingModule,
    FlexLayoutModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule
  ]
})
export class HomeModule { }
