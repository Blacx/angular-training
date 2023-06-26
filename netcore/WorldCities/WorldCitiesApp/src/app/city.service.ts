import { HttpClient } from "@angular/common/http";
import { City } from "./cities/city";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class CityService {
    private serviceEndpoint: string = 'http://localhost:5000/api/cities';

    constructor(
        private httpClient: HttpClient
    ) {}

    getCities(): Observable<City[]> {
        return this.httpClient.get<City[]>(this.serviceEndpoint);
    }

    getCityById(id: number): Observable<City> {
        return this.httpClient.get<City>(this.serviceEndpoint + "/" + id);
    }

    updateCity(city: City): Observable<City> {
        return this.httpClient.put<City>(this.serviceEndpoint + "/" + city.id, city);
    }
}