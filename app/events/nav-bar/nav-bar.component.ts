import { Component } from "@angular/core";

@Component({
    selector: 'nav-bar',
    templateUrl: '/app/events/nav-bar/nav-bar.component.html',
    styles: [`
        .navbar {
            font-size: 15px;
        }
        .navbar #searchForm {
            margin-right: 75px;
        }
        @media (max-width: 1200px) {
            .navbar #searchForm {
                display: none;
            }
        }
    `]
})

export class NavBarComponent { }