import { Router, ActivatedRoute } from '@angular/router';

import { CrudService } from './../Service/crud.service';
import { Contatto } from './../MODEL/Contatto';
import { Component, OnInit } from '@angular/core';
import { runInThisContext } from 'vm';

@Component({
  selector: 'app-modifica',
  templateUrl: './modifica.component.html',
  styleUrls: ['./modifica.component.css']
})
export class ModificaComponent implements OnInit {

id;




  contatto: Contatto = {
    id: null,
    nome: '',
    cognome: '',
    cell: null,
    indirizzo: '',
    professione: ''
    
  }




  modifica(id: number,contatto:Contatto){
    this.crudService.aggiorna(id,contatto).subscribe(()=>this.router.navigateByUrl("/lista_contatti"));



  }

  constructor(private crudService:CrudService,private router:Router,private routerMap:ActivatedRoute) {
    this.routerMap.paramMap.subscribe((param)=>{this.id=param.get("id")
this.crudService.getContatto(this.id).subscribe((informazione)=>{this.contatto=informazione})

    })}
 

ngOnInit() {  }
  }