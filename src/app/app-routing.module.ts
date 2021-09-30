import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CustomerDashboardModule } from './customer-dashboard/customer-dashboard.module';

const routes: Routes = [
    { path: '', redirectTo: 'user', pathMatch: 'full' },
    { path: 'user', component: UserComponent },
    { path: 'admin', component: AdminComponent },
    { path: 'customer',  loadChildren: () => import('./customer-dashboard/customer-dashboard.module').then(m => m.CustomerDashboardModule) },
    { path: '**', component: PageNotFoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
