import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { City } from '../cities/city';
import { Subscription } from 'rxjs';
import { CityService } from '../city.service';

export class Parent
{
    constructor() { }
}

@Component({
  selector: 'app-edit-city',
  templateUrl: './edit-city.component.html',
  styleUrls: ['./edit-city.component.css']
})
export class EditCityComponent extends Parent implements OnInit, OnDestroy {
  loadSubscription: Subscription;
  saveSubscription: Subscription;
  city: City;
  form: FormGroup;

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private cityService: CityService
  ) {
    super();
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      lat: new FormControl(''),
      long: new FormControl('')
    });
    this.loadData();
  }
  
  loadData() {
    let id = this.activeRoute.snapshot.params['id'];
    this.loadSubscription = this.cityService.getCityById(id).subscribe({
      next: (result) => {
        this.city = result;
        this.form.patchValue(this.city); // bind to form
        console.log(result);
      },
      error: (e) => console.log(e),
      complete: () => console.log('Completed: get all city!')
    });
  }

  onSubmit() {
    let city = this.city
    city.name = this.form.get("name")?.value;
    city.lat = this.form.get("lat")?.value;
    city.long = this.form.get("long")?.value;

    this.saveSubscription = this.cityService.updateCity(this.city).subscribe({
      next: (result) => {
        this.city = result;
        console.log(result);
        this.router.navigate(['/cities']);
      },
      error: (e) => console.log(e),
      complete: () => console.log('Completed: update city!')
    });

    }

    ngOnDestroy(): void {
      this.loadSubscription?.unsubscribe();
      this.saveSubscription?.unsubscribe();
    }

  }