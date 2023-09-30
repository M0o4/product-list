import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'widget-top-bar',
    templateUrl: 'top-bar.component.html',
    styleUrls: ['./top-bar.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopBarComponent {}
