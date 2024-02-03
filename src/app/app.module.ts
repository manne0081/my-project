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

@NgModule({
    declarations: [
        AppComponent,
        PublicComponent,
        LoginComponent,
        PrivateComponent,
        HeaderComponent,
        DashboardComponent,
        WorkspaceComponent
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
