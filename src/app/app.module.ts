import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

//componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MenuComponent } from './components/menu/menu.component';
import { BeaconsComponent } from './components/beacons/beacons.component';
import { NearablesComponent } from './components/nearables/nearables.component';
import { MirrorsComponent } from './components/mirrors/mirrors.component';
import { AppsComponent } from './components/apps/apps.component';
import { LocationComponent } from './components/location/location.component';
import { AnalytiComponent } from './components/analyti/analyti.component';
import { AcountComponent } from './components/acount/acount.component';

//rutas
import { ROUTES } from './app.routes';
import { ContentComponent } from './components/content/content.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MenuComponent,
    BeaconsComponent,
    NearablesComponent,
    MirrorsComponent,
    AppsComponent,
    LocationComponent,
    AnalytiComponent,
    AcountComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot( ROUTES, {useHash: true} )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
