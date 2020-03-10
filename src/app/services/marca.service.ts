import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

const apiUrl = 'https://fipeapi.appspot.com/api/1/';

@Injectable({
  providedIn: 'root'
})
export class MarcaService {
  tiposVeiculos: string[] = ['carros', 'motos', 'caminhoes'];
  url: string;
  indexMarca: number;

  constructor(private http: HttpClient) { }

  getList<T>(): Observable<T[]> {
    return this.getServiceList(this.getUrlFipe());
  }

  getObj<T>(): Observable<T> {
    return this.getServiceObject(this.getUrlFipe());
  }

  getServiceList<T>(url): Observable<T[]> {
    return this.http.get<T[]>(url).pipe(
      tap(marcas => console.log('leu as marcas')),
      catchError(this.handleError('getServiceFipe', []))
    );
  }
  getServiceObject<T>(url): Observable<T> {
    return this.http.get<T>(url);
  }

  getUrlFipe() {
    return this.url;
  }

  setUrlTipoVeiculoFipe(tipoIndex: number) {
    const urlPath = this.tiposVeiculos[tipoIndex - 1] + '/marcas.json';
    this.url = apiUrl + urlPath;
    this.indexMarca = tipoIndex;
  }

  setUrlVeiculoFipe(id: number) {
    const urlPath = this.tiposVeiculos[this.indexMarca - 1] + '/veiculos/' + id + '.json';
    this.url = apiUrl + urlPath;
  }

  setUrlModelosFipe(marcaId: number, veiculoId: number) {
    const urlPath = this.tiposVeiculos[this.indexMarca - 1] + '/veiculo/' + marcaId + '/' + veiculoId + '.json';
    this.url = apiUrl + urlPath;
  }

  setUrlResultadoFipe(marcaId: number, veiculoId: number, modeloId: number) {
    const urlPath = this.tiposVeiculos[this.indexMarca - 1] + '/veiculo/' + marcaId + '/' + veiculoId + '/' + modeloId + '.json';
    this.url = apiUrl + urlPath;
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      return of(result as T);
    };
  }
}
