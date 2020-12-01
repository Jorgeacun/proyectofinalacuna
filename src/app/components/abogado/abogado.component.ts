import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';

import {abogadoModel } from '../../model/abogado.model'
import { AbogadoService } from '../../services/abogado.service'
@Component({
  selector: 'app-abogado',
  templateUrl: './abogado.component.html',
  styleUrls: ['./abogado.component.css']
})
export class AbogadoComponent implements OnInit {
  abogado = new abogadoModel();
  abogadolist: any = [];
  constructor(public abogadoServicio: AbogadoService) { 
    
    this.getabogados();
    
  }

  ngOnInit(): void {
  }
  getabogados() {
    this.abogadoServicio.getabogado().subscribe(data => {
      this.abogadolist = data[1];
      console.log(data);
    })
  }
  crearAbogado(form: NgForm) {
    if (form.invalid) {
      console.log('Formulario invalido');
      return;
    }
    if (this.abogado._id) {
      console.log("actualizar");
      this.abogadoServicio.putabogado(this.abogado).
      subscribe(resp => {
        console.log(resp);
        this.getabogados();
      });
    }
    else {
      this.abogadoServicio.postabogado(this.abogado).
      subscribe(resp => {
      console.log(resp);
      //  this.abogado = resp;
        this.getabogados();
      }); 
    }
    form.reset();
  }

  borrarAbogodado(abogado: abogadoModel, i) {
    this.abogadoServicio.Deleteabogado(abogado._id).subscribe();
    this.abogadolist.splice(i, 1);
  }

  actualizar(abogado: abogadoModel) {
    this.abogado = abogado;
  }
}
