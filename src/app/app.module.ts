import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';

import { MenuComponent } from "./components/menu/menu.component";
import { MarcaService } from "./services/marca.service";
import { TiposVeiculoComponent } from './components/tipos-veiculo/tipos-veiculo.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotFoundErrorComponent } from './components/not-found-error/not-found-error.component';

import { LayoutModule } from "@angular/cdk/layout";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
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
  declarations: [
    AppComponent,
    MenuComponent,
    TiposVeiculoComponent,
    HomeComponent,
    FooterComponent,
    NotFoundErrorComponent
  ],

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
    FontAwesomeModule
  ],
  providers: [HttpClientModule, MarcaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
