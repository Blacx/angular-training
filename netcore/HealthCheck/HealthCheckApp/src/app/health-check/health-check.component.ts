import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription, catchError, retry, tap, throwError } from 'rxjs';

@Component({
  selector: 'app-health-check',
  templateUrl: './health-check.component.html',
  styleUrls: ['./health-check.component.css']
})
export class HealthCheckComponent implements OnInit, OnDestroy {
  
  serviceEndPoint: string = 'https://localhost:5001/status';
  public result: Result;
  getSubscription: Subscription;

  constructor(
    private httpClient: HttpClient
  ) { }
 
  ngOnInit(): void {
    this.getSubscription = this.httpClient.get<Result>(this.serviceEndPoint).pipe(retry(1)).subscribe({
      next: (result) => {
        this.result = result;
        console.log(result);
      },
      error: (e) => console.error(e),
      complete: () => console.info('Completed: get all results')
    });
  }

  ngOnDestroy(): void {
    this.getSubscription.unsubscribe();
  }

}

interface Result {
  checks: Check[],
  totalStatus: number,
  totalResponseTime: number
}

interface Check {
  name: string,
  responseTime: number,
  status: number,
  description: string
}