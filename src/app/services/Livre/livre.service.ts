import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { Livre } from 'app/Models/Livre';

@Injectable({
  providedIn: 'root'
})
export class livreService {

  private baseURL = 'https://localhost:44357/api/Livre/'
  


  constructor(private _http:HttpClient) { }


  
  AddLivre(livre: Livre){
    return this._http.post<Livre>(`${this.baseURL}${"AjoutLivre"}`,livre);

  }
  getLivreById(livreId:string): Observable<any> {
    return this._http.get(this.baseURL + 'GetLivre?Id='+livreId);
  }
  updateLivre(livre:Livre,id:string):Observable<any>{
    return this._http.post(this.baseURL + 'UpdateLivre/'+id,livre);

  }
  listOfLivres(): Observable<Livre> {
    return this._http.get<Livre>(this.baseURL + 'GetLivres');
  }

  deleteLivre(livreId:number): Observable<any> {
    return this._http.delete(this.baseURL + 'DeleteLivre?Id='+livreId);
  }

}
