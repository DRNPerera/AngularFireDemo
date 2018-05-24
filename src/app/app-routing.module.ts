import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupInterfaceComponent } from './ui_interfaces/signup-interface/signup-interface.component';
import { LoginInterfaceComponent } from './ui_interfaces/login-interface/login-interface.component';

const appRoutes: Routes = [
    { path:'' , component: SignupInterfaceComponent },
    { path:'login' , component: LoginInterfaceComponent} 
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})



export class AppRoutingModule {

}
