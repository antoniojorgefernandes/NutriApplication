import { Component, OnInit } from '@angular/core';
import {ICliente} from "./clientes.model";
import {ClienteService} from "./cliente.service";

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
    clientes?: ICliente[] | null;

    constructor(protected clienteService: ClienteService) { }

    ngOnInit(): void {
        this.clienteService.findAll().subscribe(
            data => {
                this.clientes = data.body
            }
        )
    }

}
