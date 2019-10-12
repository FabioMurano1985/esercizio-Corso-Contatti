import { CrudService } from './../Service/crud.service';
import { Contatto } from './../MODEL/Contatto';
import { Component, OnInit,Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-lista-contatti',
  templateUrl: './lista-contatti.component.html',
  styleUrls: ['./lista-contatti.component.css']
})
export class ListaContattiComponent implements OnInit {
 
 inserisci="false";

@Output() inserisciEvent=new EventEmitter();

sendMeToInserisci(){
  this.inserisci="true";
  this.inserisciEvent.emit(this.inserisci);
this.router.navigateByUrl("/FormComponent");

}

sendMeToModifica(){
  this.inserisci="false";
  this.inserisciEvent.emit(this.inserisci);
  this.router.navigateByUrl("/FormCopmponent")
}



  id;

listaContatti:Contatto[]=[];
 
  

  
 
  
 
  
  
  

  constructor(private crudService:CrudService,private router:Router) {  
    crudService.getContatti().subscribe((value)=>{this.listaContatti=value});
   
  }

  ngOnInit() {
    
 
  }

}


