import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less'],
})
export class AppComponent {
    constructor(private readonly router: Router) {}

    public onCreateClicked(): void {
        this.router.navigate(['create-product']);
    }
}
