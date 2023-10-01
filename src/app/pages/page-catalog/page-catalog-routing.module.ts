import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

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
