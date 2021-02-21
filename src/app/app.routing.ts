import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes : Routes = [
    {
        path: '',
        loadChildren: () => import('./Components/login/login.module').then(m => m.loginModule)
    },
    {
        path: 'register',
        loadChildren: () => import('./Components/register/register.module').then(m => m.RegisterModule)
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }   
]

@NgModule({
    imports : [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}