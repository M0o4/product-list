import { NgOptimizedImage } from '@angular/common';
import { NgModule } from '@angular/core';

import { PageNotFoundComponent } from './components/page-not-found.component';

@NgModule({
    imports: [NgOptimizedImage],
    declarations: [PageNotFoundComponent],
    exports: [PageNotFoundComponent],
})
export class PageNotFoundModule {}
