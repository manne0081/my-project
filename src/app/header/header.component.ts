import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
    activeUrl: string = '';
    ngClassItemSearching: string = "header-button-bg-1";
    ngClassItemFavorites: string = "header-button-bg-1";
    ngClassItemDashboard: string = "header-button-bg-1";
    ngClassItemWorkspace: string = "header-button-bg-1";
    ngClassItemContacts: string = "header-button-bg-1";
    ngClassItemDropdown: string = "header-button-bg-1";

    constructor(private router: Router) { }

    ngOnInit(): void {
        // console.log("HeaderComponent > ngOnInit" + this.router.url);
        this.setClassToItem(this.router.url);
    }

    setClassToItem(route: string): void {
        console.log(route);

        if (route.substring(0,18) == "/private/dashboard") {
			this.ngClassItemFavorites = "header-button-bg-1 pre-active";
			this.ngClassItemDashboard = "header-button-bg-1 active";
			this.ngClassItemWorkspace = "header-button-bg-1 post-active";
            this.ngClassItemContacts = "header-button-bg-1";
            this.ngClassItemDropdown = "header-button-bg-1";
		}
        if (route.substring(0,18) == "/private/workspace") {
            this.ngClassItemFavorites = "header-button-bg-1";
			this.ngClassItemDashboard = "header-button-bg-1 pre-active";
			this.ngClassItemWorkspace = "header-button-bg-1 active";
			this.ngClassItemContacts = "header-button-bg-1 post-active";
            this.ngClassItemDropdown = "header-button-bg-1";
		}
        if (route.substring(0,17) == "/private/contacts") {
            this.ngClassItemFavorites = "header-button-bg-1";
			this.ngClassItemDashboard = "header-button-bg-1";
			this.ngClassItemWorkspace = "header-button-bg-1 pre-active";
			this.ngClassItemContacts = "header-button-bg-1 active";
            this.ngClassItemDropdown = "header-button-bg-1 post-acitve";
		}
    }
}
