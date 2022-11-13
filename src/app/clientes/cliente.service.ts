import {Injectable} from "@angular/core";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {ICliente} from "./clientes.model";

@Injectable({ providedIn: 'root' })
export class ClienteService {

    constructor(protected http: HttpClient) {}

    findAll(): Observable<HttpResponse<ICliente[]>> {
        return this.http.get<ICliente[]>(environment.api+"api/clientes", { observe: 'response' });
    }
}