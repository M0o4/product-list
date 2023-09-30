import { NgModule } from '@angular/core';

import { PageNotFoundComponent } from './components/page-not-found.component';
import { NgOptimizedImage } from '@angular/common';

@NgModule({
    imports: [NgOptimizedImage],
    declarations: [PageNotFoundComponent],
    exports: [PageNotFoundComponent],
})
export class PageNotFoundModule {}
