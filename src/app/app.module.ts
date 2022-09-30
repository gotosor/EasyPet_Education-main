import { ComponentesModule } from './componentes/componentes.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './componentes/header/header.component';
import { MascotasComponent } from './mascotas/mascotas.component';
import { FooterComponent } from './componentes/footer/footer.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, MascotasComponent],
  imports: [BrowserModule, AppRoutingModule, ComponentesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
