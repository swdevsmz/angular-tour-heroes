import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  // public opneSubject: Subject<number> = new Subject();  // 変更
  // public openState = this.opneSubject.asObservable();  // 追加

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    // setTimeout(() => {
      alert('child born');
    // } , 10000);
    this.opend();
  }
  public opend() {
    this.heroService.openSubject.next();
  }
  // public opend() {
  //   this.heroService.openSubject.next();
  // }



}
