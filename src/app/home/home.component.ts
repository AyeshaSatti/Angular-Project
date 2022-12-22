import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription, Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  private firstObsSubscription!: Subscription;
  constructor() { }

  ngOnInit() {
    // this.firstObsSubscription = interval(1000).subscribe(count => {
    //   console.log(count)
    // })

    const customIntervalObservable = Observable.create((observer: any) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if (count > 3) {
          observer.error(new Error('Count is greater than 3 '))
        }
        count++;
      }, 1000);
    });

    customIntervalObservable.pipe(map((data: number) => {
      return 'Round: ' + (data + 1)
    }))

    this.firstObsSubscription = customIntervalObservable.pipe(filter((data: number) => {
      return data > 0;
    }), map((data: number) => {
      return 'Round: ' + (data + 1)
    })).subscribe((data: any) => {
      console.log(data)
    }, (error: any) => {
      alert(error.message)
    }
    )
  }

  ngOnDestroy() {
    this.firstObsSubscription.unsubscribe();
  }
}