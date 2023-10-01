import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'widget-search',
    templateUrl: './search-widget.component.html',
    styleUrls: ['./search-widget.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchWidgetComponent {
    public inputValue: string = '';
    constructor(private readonly router: Router) {}

    public onSearch(): void {
        if (!this.inputValue) {
            return;
        }

        this.router.navigate(['catalog'], { queryParams: { search: this.inputValue } });
    }
}
