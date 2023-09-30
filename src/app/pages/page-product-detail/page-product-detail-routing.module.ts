import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailComponent } from './components/product-detail.component';

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
