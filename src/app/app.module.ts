import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';

import { MenuComponent } from "./components/menu/menu.component";
import { MarcasComponent } from "./components/marcas/marcas.component";
import { MarcaService } from "./services/marca.service";

import { LayoutModule } from "@angular/cdk/layout";
import {
  MatToolbarModule,
  MatTableModule,
  MatInputModule,
  MatCardModule,
  MatListModule,
  MatIconModule,
  MatButtonModule,
  MatSidenavModule,
  MatSelectModule,
  MatDividerModule
} from "@angular/material";



@NgModule({
  declarations: [AppComponent, MenuComponent, MarcasComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatInputModule,
    MatTableModule,
    MatSelectModule,
    MatDividerModule,
    FormsModule,

  ],
  providers: [HttpClientModule, MarcaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
