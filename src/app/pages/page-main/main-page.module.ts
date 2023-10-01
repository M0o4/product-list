import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ProductsGridModule } from '../../components/products-grid/products-grid.module';
import { TopBarModule } from '../../widgets/top-bar/top-bar.module';
import { UiModule } from '../../ui/ui.module';

import { ProductListComponent } from './components/product-list/product-list.component';
import { MainPageComponent } from './components/page-main/main-page.component';
import { MainPageRoutingModule } from './main-page-routing.module';

@NgModule({
    imports: [CommonModule, MainPageRoutingModule, TopBarModule, UiModule, MatProgressBarModule, ProductsGridModule],
    declarations: [MainPageComponent, ProductListComponent],
    exports: [],
    providers: [],
})
export class MainPageModule {}
