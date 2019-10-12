import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {


  
inserisci:string;


receiveVariable($event){
this.inserisci=$event;



}



  constructor() { }

  ngOnInit() {
  }

}
