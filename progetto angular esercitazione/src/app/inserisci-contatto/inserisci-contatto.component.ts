import { RouterModule, Router } from '@angular/router';
import { CrudService } from './../Service/crud.service';
import { Component, OnInit } from '@angular/core';
import { Contatto } from '../MODEL/Contatto';

@Component({
  selector: 'app-inserisci-contatto',
  templateUrl: './inserisci-contatto.component.html',
  styleUrls: ['./inserisci-contatto.component.css']
})
export class InserisciContattoComponent implements OnInit {

  
inserisci:boolean=true;
 



  contatto: Contatto = {
    id: null,
    nome: '',
    cognome: '',
    cell: null,
    indirizzo: '',
    professione: ''
    
  }
  
constructor(private crudService:CrudService,private router:Router) {




 }

 
  

  aggiungiContatto(contatto:Contatto) {
    this.crudService.inserisci(contatto).subscribe(
      (result) => {
       
        this.router.navigateByUrl("/lista_contatti")
      }
    )
  }


  ngOnInit() {
  }

}
