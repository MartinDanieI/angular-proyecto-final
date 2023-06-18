import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-registro-usuario',
    templateUrl: './registro-usuario.component.html',
    styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent {

    registroForm: FormGroup
    regexString = /^[a-zA-Z0-9\s]+$/
    regexCorreo = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i


    constructor(private fb:FormBuilder){
        this.registroForm = this.fb.group({
            nombre:['',[Validators.required, Validators.minLength(3)]],
            apellido:['',[Validators.required, Validators.minLength(3)]],
            correo:['',[Validators.required, Validators.pattern(this.regexCorreo) ]],
        })
    }

    registrarUsuario(){
        console.log(this.registroForm)
    }

}
