import { Routes, RouterModule } from '@angular/router';
 
import { CaesarHomeComponent } from './caesar-home/caesar-home.component';
import { CaesarLoginComponent } from './caesar-login/caesar-login.component';
import { LoginGuard } from './caesar-login/guard/caesar-login.guard';
 
const appRoutes: Routes = [
    { path: '', component: CaesarHomeComponent, canActivate: [LoginGuard] },
    { path: 'log', component: CaesarLoginComponent },

    { path: '**', redirectTo: '' } 
];
 
export const routing = RouterModule.forRoot(appRoutes); 