import {Component, OnInit} from "@angular/core";
import {AlimentosService} from "./alimentos.service";
import {IAlimento} from "./alimentos.model";


@Component({
  selector: 'app-alimentos',
  templateUrl: './alimentos.component.html',
  styleUrls: ['./alimentos.component.css']
})
export class AlimentosComponent implements OnInit {
    alimentos?: IAlimento[] | null;

    constructor(
        protected alimentosService: AlimentosService
    ) {
    }

    ngOnInit(): void {
        this.alimentosService.findAll().subscribe(
            data => {
               this.alimentos = data.body
            }
        )
    }

    viewDetails(id: number | null) {

    }
}
