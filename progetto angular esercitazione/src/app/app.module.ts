import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router'
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ListaContattiComponent } from './lista-contatti/lista-contatti.component';
import { InserisciContattoComponent } from './inserisci-contatto/inserisci-contatto.component';
import { ModificaComponent } from './modifica/modifica.component';

import { DettagliComponent } from './dettagli/dettagli.component';
import { FormComponent } from './form/form.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    DashboardComponent,
    PageNotFoundComponent,
    ListaContattiComponent,
    InserisciContattoComponent,
    ModificaComponent,
    DettagliComponent,
    FormComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: DashboardComponent },
      { path: 'home', redirectTo: '' },
      { path: 'lista_contatti', component: ListaContattiComponent },
      { path: 'inserisci', component: InserisciContattoComponent },
      { path: 'FormComponent', component: FormComponent },
      { path: '**', component: PageNotFoundComponent },

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
