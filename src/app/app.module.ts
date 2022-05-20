import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

//modulos personalizados
import { AppRouterModule } from './app-router.module';
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';

//cambiar el local de la app
import localeEsEc from "@angular/common/locales/es-EC";
import localeFr from "@angular/common/locales/fr";
import {registerLocaleData} from '@angular/common';
registerLocaleData(localeEsEc);
registerLocaleData(localeFr);
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule, 
    VentasModule,
    AppRouterModule,
    BrowserAnimationsModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'es-EC'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
