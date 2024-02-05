import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PublicComponent } from './public/public.component';
import { LoginComponent } from './login/login.component';
import { PrivateComponent } from './private/private.component';

import { DashboardComponent } from './private/dashboard/dashboard.component';
import { WorkspaceComponent } from './private/workspace/workspace.component';
import { ContactsComponent } from './private/contacts/contacts.component';

const routes: Routes = [
    { path: '',   redirectTo: 'home', pathMatch: 'full' },
    { path: 'public', component: PublicComponent },
    { path: 'login', component: LoginComponent },
    { path: 'private', component: PrivateComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'workspace', component: WorkspaceComponent },
            { path: 'contacts', component: ContactsComponent },
        ]
    },

    { path: '**', component: PublicComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
