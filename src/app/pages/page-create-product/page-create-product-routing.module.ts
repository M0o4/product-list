import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PageCreateProductComponent } from './components/page-create-product/page-create-product.component';

const routes: Routes = [
    {
        path: '',
        component: PageCreateProductComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PageCreateProductRoutingModule {}
