import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {
  contador = 0;
  text:string = '';

  pessoas = [
    {
      nome: "Ivonaldo",
      sobrenome: "Soares",
      cargo: "Instrutor"
    },
    {
      nome: "Ana",
      sobrenome: "Maria",
      cargo: "Apresentadora"
    },
    {
      nome: "Silvio",
      sobrenome: "Santos",
      cargo: "Empreendedor"
    }
  ]

  // criar array

  constructor() { }

  ngOnInit(): void {
    // let interval = setInterval(() => {
    //   this.contador ++;
    //   if(this.contador === 10){
    //     clearInterval(interval);
    //   }
    // }, 1000)
  }

  incrementa(): void{
    this.contador++;
  }

  decrementa(): void {
    this.contador--;
  }
}
