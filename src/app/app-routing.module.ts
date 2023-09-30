import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './pages/page-not-found/components/page-not-found.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'products',
    },
    {
        path: 'products',
        loadChildren: () => import('./pages/main-page/main-page.module').then((m) => m.MainPageModule),
    },
    {
        path: '404',
        component: PageNotFoundComponent,
    },
    {
        path: '**',
        redirectTo: '404',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
