import {Injectable} from "@angular/core";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {IAlimento} from "./alimentos.model";
import {environment} from "../../environments/environment";

@Injectable({ providedIn: 'root' })
export class AlimentosService {

    constructor(protected http: HttpClient) {}

    findAll(): Observable<HttpResponse<IAlimento[]>> {
        return this.http.get<IAlimento[]>(environment.api+"api/alimentos", { observe: 'response' });
    }
}