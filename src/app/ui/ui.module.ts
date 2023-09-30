import { CommonModule, NgOptimizedImage } from '@angular/common';
import { NgModule } from '@angular/core';

import { UiPriceComponent } from './components/ui-price/ui-price.component';
import { UiProductCardComponent } from './components/ui-card/ui-product-card.component';

@NgModule({
    imports: [CommonModule, NgOptimizedImage],
    declarations: [UiProductCardComponent, UiPriceComponent],
    exports: [UiProductCardComponent, UiPriceComponent],
    providers: [],
})
export class UiModule {}
