import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-page-main',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainPageComponent {}
