import { Routes, RouterModule } from '@angular/router';

import { CaesarHomeComponent } from './caesar-home/caesar-home.component';
import { CaesarLoginComponent } from './caesar-login/caesar-login.component';
import { LoginGuard } from './caesar-login/guard/caesar-login.guard';

const appRoutes: Routes = [
    { path: '', component: CaesarHomeComponent, canActivate: [LoginGuard], pathMatch: "full" },
    { path: ':location/groups', component: CaesarHomeComponent, canActivate: [LoginGuard] },
    /*if path '/login' - after reloading the page error: 'This application has
    no explicit mapping for /error, so you are seeing this as a fallback'*/
    { path: 'log', component: CaesarLoginComponent },
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes); 