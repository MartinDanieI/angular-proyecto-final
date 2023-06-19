import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-inicia-sesion',
    templateUrl: './inicia-sesion.component.html',
    styleUrls: ['./inicia-sesion.component.css']
})
export class IniciaSesionComponent {

    inicioForm:FormGroup

    constructor(private fb:FormBuilder){
        this.inicioForm = this.fb.group({
            nombre:['',[Validators.required]],
            contraseña:['',[Validators.required]]
        })
    }

    inicioUsuario(){
        console.log(this.inicioForm)
    }

}
