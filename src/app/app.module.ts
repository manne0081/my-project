import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import { PublicComponent } from './public/public.component';
import { LoginComponent } from './login/login.component';

import { PrivateComponent } from './private/private.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './private/dashboard/dashboard.component';
import { WorkspaceComponent } from './private/workspace/workspace.component';
import { ContactsComponent } from './private/contacts/contacts.component';
import { TasksComponent } from './private/tasks/tasks.component';
import { PlannerComponent } from './private/planner/planner.component';
import { EmailComponent } from './private/email/email.component';
import { CampagneComponent } from './private/campagne/campagne.component';
import { CompanyComponent } from './private/company/company.component';
import { SuppliersComponent } from './private/suppliers/suppliers.component';
import { UserComponent } from './private/user/user.component';
import { ModulePermissionsComponent } from './private/module-permissions/module-permissions.component';
import { InformationGroupsComponent } from './private/information-groups/information-groups.component';
import { DebitorDataComponent } from './private/debitor-data/debitor-data.component';
import { AddressesComponent } from './private/addresses/addresses.component';

@NgModule({
    declarations: [
        AppComponent,
        PublicComponent,
        LoginComponent,
        PrivateComponent,
        HeaderComponent,
        DashboardComponent,
        WorkspaceComponent,
        ContactsComponent,
        TasksComponent,
        PlannerComponent,
        EmailComponent,
        CampagneComponent,
        CompanyComponent,
        SuppliersComponent,
        UserComponent,
        ModulePermissionsComponent,
        InformationGroupsComponent,
        DebitorDataComponent,
        AddressesComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
