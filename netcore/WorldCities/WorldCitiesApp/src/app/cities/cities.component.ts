import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { City } from './city';
import { Subscription } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CityService } from '../city.service';



@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit, OnDestroy {
  serviceSubscription: Subscription;
  //cities: City[];
  cities: MatTableDataSource<City>;
  displayedColumns: string[] = ['id', 'name', 'lat', 'lon'];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private httpClient: HttpClient,
    private cityService: CityService
  ) {}

  ngOnInit(): void {
    this.serviceSubscription = this.cityService.getCities().subscribe({
      next: (result) => {
        //this.cities = result;
        this.cities = new MatTableDataSource<City>(result);
        this.cities.paginator = this.paginator;
        console.log(result);
      },
      error: (e) => console.log(e),
      complete: () => console.log('Completed: get all city!')
    });
  }

  ngOnDestroy(): void {
    this.serviceSubscription.unsubscribe();  
  }

}