import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { UiModule } from '../../ui/ui.module';

import { PageCreateProductComponent } from './components/page-create-product/page-create-product.component';
import { PageCreateProductRoutingModule } from './page-create-product-routing.module';

@NgModule({
    imports: [
        CommonModule,
        PageCreateProductRoutingModule,
        ReactiveFormsModule,
        MatInputModule,
        MatChipsModule,
        MatIconModule,
        MatFormFieldModule,
        UiModule,
    ],
    declarations: [PageCreateProductComponent],
    exports: [PageCreateProductComponent],
})
export class PageCreateProductModule {}
