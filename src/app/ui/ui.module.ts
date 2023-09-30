import { CommonModule, NgOptimizedImage } from '@angular/common';
import { NgModule } from '@angular/core';

import { UiCardComponent } from './components/ui-card/ui-card.component';

@NgModule({
    imports: [CommonModule, NgOptimizedImage],
    declarations: [UiCardComponent],
    exports: [UiCardComponent],
    providers: [],
})
export class UiModule {}
