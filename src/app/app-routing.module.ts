import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PublicComponent } from './public/public.component';
import { LoginComponent } from './login/login.component';
import { PrivateComponent } from './private/private.component';

import { DashboardComponent } from './private/dashboard/dashboard.component';
import { WorkspaceComponent } from './private/workspace/workspace.component';
import { ContactsComponent } from './private/contacts/contacts.component';
import { TasksComponent } from './private/tasks/tasks.component';
import { PlannerComponent } from './private/planner/planner.component';
import { CampagneComponent } from './private/campagne/campagne.component';
import { EmailComponent } from './private/email/email.component';
import { CompanyComponent } from './private/company/company.component';
import { SuppliersComponent } from './private/suppliers/suppliers.component';
import { UserComponent } from './private/user/user.component';
import { ModulePermissionsComponent } from './private/module-permissions/module-permissions.component';
import { InformationGroupsComponent } from './private/information-groups/information-groups.component';
import { DebitorDataComponent } from './private/debitor-data/debitor-data.component';
import { AddressesComponent } from './private/addresses/addresses.component';

const routes: Routes = [
    { path: '',   redirectTo: 'home', pathMatch: 'full' },
    { path: 'public', component: PublicComponent },
    { path: 'login', component: LoginComponent },
    { path: 'private', component: PrivateComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'tasks', component: TasksComponent },
            { path: 'planner', component: PlannerComponent },
            { path: 'campagne', component: CampagneComponent },
            { path: 'email', component: EmailComponent },
            { path: 'company', component: CompanyComponent },
            { path: 'suppliers', component: SuppliersComponent },
            { path: 'contacts', component: ContactsComponent },
            { path: 'user', component: UserComponent },
            { path: 'modul-permissions', component: ModulePermissionsComponent },
            { path: 'information-groups', component: InformationGroupsComponent },
            { path: 'debitor-data', component: DebitorDataComponent },
            { path: 'addresses', component: AddressesComponent },
        ]
    },

    { path: '**', component: PublicComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
