import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Error404Component } from './components/error404/error404.component';
import { RegistroUsuarioComponent } from './components/registro-usuario/registro-usuario.component';


const routes: Routes = [
    { path: '', component: InicioComponent },
    { path:'registro-usuario', component: RegistroUsuarioComponent},
    { path: '404', component: Error404Component },
    { path: '**', redirectTo: '404', pathMatch: 'full' },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
