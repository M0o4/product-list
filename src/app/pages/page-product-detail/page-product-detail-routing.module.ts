import { ProductDetailComponent } from './components/product-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const rountes: Routes = [
    {
        path: ':id',
        component: ProductDetailComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(rountes)],
    exports: [RouterModule],
})
export class PageProductDetailRoutingModule {}
