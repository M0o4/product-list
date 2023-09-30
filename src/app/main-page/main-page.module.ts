import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TopBarModule } from '../widgets/top-bar/top-bar.module';

import { ProductListComponent } from './product-list/product-list.component';
import { MainPageComponent } from './components/main-page.component';
import { MainPageRoutingModule } from './main-page-routing.module';
import { UiModule } from '../ui/ui.module';

@NgModule({
    imports: [CommonModule, MainPageRoutingModule, TopBarModule, UiModule],
    declarations: [MainPageComponent, ProductListComponent],
    exports: [],
    providers: [],
})
export class MainPageModule {}
