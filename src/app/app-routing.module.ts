import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PublicComponent } from './public/public.component';
import { PrivateComponent } from './private/private.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    { path: '',   redirectTo: 'home', pathMatch: 'full' },
    { path: 'public', component: PublicComponent },
    { path: 'login', component: LoginComponent },
    { path: 'private', component: PrivateComponent },
    { path: '**', component: PublicComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
