 import { RouterModule, Routes } from '@angular/router';
 import { BeaconsComponent } from './components/beacons/beacons.component';
 import { NearablesComponent } from './components/nearables/nearables.component';
 import { MirrorsComponent } from './components/mirrors/mirrors.component';
 import { AppsComponent } from './components/apps/apps.component';
 import { LocationComponent } from './components/location/location.component';
 import { AnalytiComponent } from './components/analyti/analyti.component';
 import { AcountComponent } from './components/acount/acount.component';

 export const ROUTES: Routes = [

 	{path: 'beacons', component: BeaconsComponent },
 	{path: 'nearables', component: NearablesComponent },
 	{path: 'mirrors', component: MirrorsComponent },
 	{path: 'apps', component: AppsComponent },
 	{path: 'location', component: LocationComponent },
 	{path: 'analyti', component: AnalytiComponent },
 	{path: 'account', component: AcountComponent },
 	{path: '', pathMatch: 'full' , redirectTo: 'beacons'},
 	{path: '**', pathMatch: 'full', redirectTo: 'beacons'}
 ];
