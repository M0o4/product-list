import { CommonModule, NgOptimizedImage } from '@angular/common';
import { NgModule } from '@angular/core';

import { UiProductCardComponent } from './components/ui-card/ui-product-card.component';
import { UiButtonComponent } from './components/ui-button/ui-button.component';
import { UiPriceComponent } from './components/ui-price/ui-price.component';

@NgModule({
    imports: [CommonModule, NgOptimizedImage],
    declarations: [UiProductCardComponent, UiPriceComponent, UiButtonComponent],
    exports: [UiProductCardComponent, UiPriceComponent, UiButtonComponent],
    providers: [],
})
export class UiModule {}
