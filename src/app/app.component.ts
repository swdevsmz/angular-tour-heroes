import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Tour of Heros';

  // p: Parent;

  constructor() {
    // this.p = new Parent();
    // this.p.no = '10';
  }

  async ngOnInit () {

    // this.p = new Parent();
    // await this.getNo();
  }

  // public async getNo(): Promise<string> {
  //   return await this.p.no;
  // }
  // p.no;
}

// export class Parent {
//   no: string;
//   child: Child;
// }

// export class Child {
//   nama: string;
// }
