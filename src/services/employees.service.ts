import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  URL = environment.serverUrl;
  constructor(private http: HttpClient) { }

  getAllEmployees(): Observable<any> {
    return this.http.get<any>(this.URL)
      .pipe(
        catchError(this.handleErrorObservable)
      );

  }
  deleteEmployee(empId: any): Observable<any> {
   return this.http.delete<any>(this.URL + 'delete/' + empId)
      .pipe(
        catchError(this.handleErrorObservable)
      );
  }

  saveData(restaurantData: any): Observable<any> {
    return this.http.post<any>(this.URL + 'employees', restaurantData)
      .pipe(
        catchError(this.handleErrorObservable)
      );
  }
  private handleErrorObservable(error: Response | any) {
    console.error(error.message || error);
    return throwError(error);
  }
}
