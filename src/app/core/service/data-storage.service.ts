import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, Subject, take, tap } from 'rxjs';
import { AquaticFood } from 'src/app/core/type/aquatic-food.model';
import { AquaticFoodService } from './aquatic-food.service';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  url = "http://localhost:3000/api/aquatic"

  constructor(private _http: HttpClient,
    private _aquaticFoodService: AquaticFoodService) { }

  saveAquatic(aquatic: AquaticFood): Observable<AquaticFood> {
    return this._http.post<AquaticFood>(this.url, aquatic);
  }

  fetchAquaticById(id: string): Observable<AquaticFood> {
    this._aquaticFoodService.aquaticFoodSubject.next(false);

    return this._http.get<AquaticFood>(`${this.url}/${id}`)
      .pipe(
        tap(() => this._aquaticFoodService.aquaticFoodSubject.next(true)
        )
      );
  }

  fetchAquatic(): Observable<AquaticFood[]> {
    this._aquaticFoodService.aquaticFoodSubject.next(false);

    return this._http.get<AquaticFood[]>(this.url)
      .pipe(
        // take(1),
        tap((aquatic) => {
          if (aquatic) {
            this._aquaticFoodService.aquaticFoodSubject.next(true);
          }
        })
      );
  }

  updateAqutic(id: string, update: AquaticFood): Observable<AquaticFood> {
    return this._http.patch<AquaticFood>(`${this.url}/${id}`, update);
  }

  delete(id: string) {
    this._aquaticFoodService.aquaticChangeSubject.next(false);

    return this._http.delete(`${this.url}/${id}`)
      .pipe(
        tap(() => this._aquaticFoodService.aquaticChangeSubject.next(true)
        )
      );
  }
}
