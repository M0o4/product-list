import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { MainPageComponent } from './components/main-page.component';

const routes: Routes = [
    {
        path: '',
        component: MainPageComponent,
    },
    {
        path: 'product-details',
        loadChildren: () => import('../page-product-detail/page-product-detail.module').then((m) => m.PageProductDetailModule),
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [],
})
export class MainPageRoutingModule {}
