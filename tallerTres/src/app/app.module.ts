import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ContenidoComponent } from './contenido/contenido.component';
import { ImagenComponent } from './imagen/imagen.component';
import { DescripcionComponent } from './descripcion/descripcion.component';
import { ValoresComponent } from './valores/valores.component';
import { TituloComponent } from './titulo/titulo.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ContenidoComponent,
    ImagenComponent,
    DescripcionComponent,
    ValoresComponent,
    TituloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
