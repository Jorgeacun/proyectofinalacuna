import { Component, OnInit } from '@angular/core';
import {JuzgadoModel } from '../../model/juzgado.model'
import {JuzgadoService } from '../../services/juzgado.service'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-juzgado',
  templateUrl: './juzgado.component.html',
  styleUrls: ['./juzgado.component.css']
})
export class JuzgadoComponent implements OnInit {
  juzgadoList: any = [];
  juzgado = new JuzgadoModel();
  constructor(public juzgadoServicio: JuzgadoService) { 
    this.getjuzgadp();
  }

  ngOnInit(): void {
  }
  getjuzgadp() {
    this.juzgadoServicio.getJuzgado().subscribe(data => {
      this.juzgadoList = data[1];
      console.log(data);
    })
  }
  crearjuzgadp(form: NgForm) {
    if (form.invalid) {
      console.log('Formulario invalido');
      return;
    }
    if (this.juzgado._id) {
      this.juzgadoServicio.putJuzgado(this.juzgado).
      subscribe(resp => {
      console.log(resp);
      this.getjuzgadp();
      });
    }
    else {
      this.juzgadoServicio.postaJuzgado(this.juzgado).
      subscribe(resp => {
        console.log(resp);
    
      this.getjuzgadp();
      }); 
    }
    form.reset();
   
  }

  borrarJuzgado(juzgado: JuzgadoModel, i) {
    this.juzgadoServicio.DeleteJuzgado(juzgado._id).subscribe();
    this.juzgadoList.splice(i, 1);
  }
  actualizar(juzgado: JuzgadoModel) {
    this.juzgado = juzgado;
  }
}
