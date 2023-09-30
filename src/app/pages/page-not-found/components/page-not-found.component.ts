import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-not-found',
    templateUrl: './page-not-found.component.html',
    styleUrls: ['./page-not-found.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageNotFoundComponent {
    public readonly imgSrc: string = 'assets/404.svg';
}
