import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'ui-button',
    templateUrl: './ui-button.component.html',
    styleUrls: ['./ui-button.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiButtonComponent {
    @Output() buttonClick: EventEmitter<void> = new EventEmitter<void>();

    public onClick(): void {
        this.buttonClick.emit();
    }
}
