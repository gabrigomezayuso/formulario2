import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup  } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario-reactivo',
  templateUrl: './formulario-reactivo.component.html',
  styleUrls: ['./formulario-reactivo.component.css']
})
export class FormularioReactivoComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }
  usuario: FormGroup;
  submitted = false;

  ngOnInit(): void {
    this.usuario = this.formBuilder.group({
      nombre: ['', Validators.required],
      correo: ['', [Validators.required,Validators.email]]
    })
  }

  get f (){
    return this.usuario.controls;
  }

  enviarDatos(){
    this.submitted = true;
    if(this.usuario.invalid){
      return;
    }
    Swal.fire("Los datos son correctos")
  }

}
