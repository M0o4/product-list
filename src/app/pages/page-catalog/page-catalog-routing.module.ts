import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageCatalogComponent } from './components/page-catalog/page-catalog.component';

const routes: Routes = [
    {
        path: '',
        component: PageCatalogComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PageCatalogRoutingModule {}
