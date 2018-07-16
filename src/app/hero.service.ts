import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Subject } from 'rxjs';
// import { Subject } from 'rxjs/Subject'; // 変更

@Injectable({
  providedIn: 'root'
})

export class HeroService {

  public loginSubject: Subject<number> = new Subject();  // 変更
  public loginState = this.loginSubject.asObservable();  // 追加
  public count = 0;  // 追加


  constructor() {
    this.loginState.subscribe((data: number) => { // 変更
      console.log(data);
    });
  }

  getHeroes(): Hero[] {
    return HEROES;
  }

  clickNext() { // 追加
    this.count++;
    this.loginSubject.next(this.count);
  }

}
