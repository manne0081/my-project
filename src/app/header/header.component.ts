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
    ngClassItemSalesProcess: string = "header-button-bg-1";
    ngClassItemOrderProcessing: string = "header-button-bg-1";
    ngClassItemAccounting: string = "header-button-bg-1";
    ngClassItemProductManagement: string = "header-button-bg-1";
    ngClassItemContractManagement: string = "header-button-bg-1";
    ngClassItemTools: string = "header-button-bg-1";
    ngClassItemPlaceholder: string = "header-button-bg-1";

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
            this.ngClassItemSalesProcess = "header-button-bg-1";
            this.ngClassItemOrderProcessing = "header-button-bg-1";
            this.ngClassItemAccounting = "header-button-bg-1";
            this.ngClassItemProductManagement = "header-button-bg-1";
            this.ngClassItemContractManagement = "header-button-bg-1";
            this.ngClassItemTools = "header-button-bg-1";
            this.ngClassItemPlaceholder = "header-button-bg-1";
		}
        if (route.substring(0,18) == "/private/workspace") {
            this.ngClassItemFavorites = "header-button-bg-1";
			this.ngClassItemDashboard = "header-button-bg-1 pre-active";
			this.ngClassItemWorkspace = "header-button-bg-1 active";
			this.ngClassItemContacts = "header-button-bg-1 post-active";
            this.ngClassItemSalesProcess = "header-button-bg-1";
            this.ngClassItemOrderProcessing = "header-button-bg-1";
            this.ngClassItemAccounting = "header-button-bg-1";
            this.ngClassItemProductManagement = "header-button-bg-1";
            this.ngClassItemContractManagement = "header-button-bg-1";
            this.ngClassItemTools = "header-button-bg-1";
            this.ngClassItemPlaceholder = "header-button-bg-1";
		}
        if (route.substring(0,17) == "/private/contacts") {
            this.ngClassItemFavorites = "header-button-bg-1";
			this.ngClassItemDashboard = "header-button-bg-1";
			this.ngClassItemWorkspace = "header-button-bg-1 pre-active";
			this.ngClassItemContacts = "header-button-bg-1 active";
            this.ngClassItemSalesProcess = "header-button-bg-1 post-active";
            this.ngClassItemOrderProcessing = "header-button-bg-1";
            this.ngClassItemAccounting = "header-button-bg-1";
            this.ngClassItemProductManagement = "header-button-bg-1";
            this.ngClassItemContractManagement = "header-button-bg-1";
            this.ngClassItemTools = "header-button-bg-1";
            this.ngClassItemPlaceholder = "header-button-bg-1";
		}
        if (route.substring(0,22) == "/private/sales-process") {
            this.ngClassItemFavorites = "header-button-bg-1";
			this.ngClassItemDashboard = "header-button-bg-1";
			this.ngClassItemWorkspace = "header-button-bg-1";
			this.ngClassItemContacts = "header-button-bg-1 pre-active";
            this.ngClassItemSalesProcess = "header-button-bg-1 active";
            this.ngClassItemOrderProcessing = "header-button-bg-1 post-active";
            this.ngClassItemAccounting = "header-button-bg-1";
            this.ngClassItemProductManagement = "header-button-bg-1";
            this.ngClassItemContractManagement = "header-button-bg-1";
            this.ngClassItemTools = "header-button-bg-1";
            this.ngClassItemPlaceholder = "header-button-bg-1";
		}
        if (route.substring(0,25) == "/private/order-processing") {
            this.ngClassItemFavorites = "header-button-bg-1";
			this.ngClassItemDashboard = "header-button-bg-1";
			this.ngClassItemWorkspace = "header-button-bg-1";
			this.ngClassItemContacts = "header-button-bg-1";
            this.ngClassItemSalesProcess = "header-button-bg-1 pre-active";
            this.ngClassItemOrderProcessing = "header-button-bg-1 active";
            this.ngClassItemAccounting = "header-button-bg-1 post-active";
            this.ngClassItemProductManagement = "header-button-bg-1";
            this.ngClassItemContractManagement = "header-button-bg-1";
            this.ngClassItemTools = "header-button-bg-1";
            this.ngClassItemPlaceholder = "header-button-bg-1";
		}
        if (route.substring(0,19) == "/private/accounting") {
            this.ngClassItemFavorites = "header-button-bg-1";
			this.ngClassItemDashboard = "header-button-bg-1";
			this.ngClassItemWorkspace = "header-button-bg-1";
			this.ngClassItemContacts = "header-button-bg-1";
            this.ngClassItemSalesProcess = "header-button-bg-1";
            this.ngClassItemOrderProcessing = "header-button-bg-1 pre-active";
            this.ngClassItemAccounting = "header-button-bg-1 active";
            this.ngClassItemProductManagement = "header-button-bg-1 post-active";
            this.ngClassItemContractManagement = "header-button-bg-1";
            this.ngClassItemTools = "header-button-bg-1";
            this.ngClassItemPlaceholder = "header-button-bg-1";
		}
        if (route.substring(0,27) == "/private/product-management") {
            this.ngClassItemFavorites = "header-button-bg-1";
			this.ngClassItemDashboard = "header-button-bg-1";
			this.ngClassItemWorkspace = "header-button-bg-1";
			this.ngClassItemContacts = "header-button-bg-1";
            this.ngClassItemSalesProcess = "header-button-bg-1";
            this.ngClassItemOrderProcessing = "header-button-bg-1";
            this.ngClassItemAccounting = "header-button-bg-1 pre-active";
            this.ngClassItemProductManagement = "header-button-bg-1 active";
            this.ngClassItemContractManagement = "header-button-bg-1 post-active";
            this.ngClassItemTools = "header-button-bg-1";
            this.ngClassItemPlaceholder = "header-button-bg-1";
		}
        if (route.substring(0,28) == "/private/contract-management") {
            this.ngClassItemFavorites = "header-button-bg-1";
			this.ngClassItemDashboard = "header-button-bg-1";
			this.ngClassItemWorkspace = "header-button-bg-1";
			this.ngClassItemContacts = "header-button-bg-1";
            this.ngClassItemSalesProcess = "header-button-bg-1";
            this.ngClassItemOrderProcessing = "header-button-bg-1";
            this.ngClassItemAccounting = "header-button-bg-1";
            this.ngClassItemProductManagement = "header-button-bg-1 pre-active";
            this.ngClassItemContractManagement = "header-button-bg-1 active";
            this.ngClassItemTools = "header-button-bg-1 post-active";
            this.ngClassItemPlaceholder = "header-button-bg-1";
		}
        if (route.substring(0,14) == "/private/tools") {
            this.ngClassItemFavorites = "header-button-bg-1";
			this.ngClassItemDashboard = "header-button-bg-1";
			this.ngClassItemWorkspace = "header-button-bg-1";
			this.ngClassItemContacts = "header-button-bg-1";
            this.ngClassItemSalesProcess = "header-button-bg-1";
            this.ngClassItemOrderProcessing = "header-button-bg-1";
            this.ngClassItemAccounting = "header-button-bg-1";
            this.ngClassItemProductManagement = "header-button-bg-1";
            this.ngClassItemContractManagement = "header-button-bg-1 pre-active";
            this.ngClassItemTools = "header-button-bg-1 active";
            this.ngClassItemPlaceholder = "header-button-bg-1 post-active";
		}
    }
}
