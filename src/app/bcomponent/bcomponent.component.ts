import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bcomponent',
  templateUrl: './bcomponent.component.html',
  styleUrls: ['./bcomponent.component.css'],
})
export class BcomponentComponent implements OnInit {
  age: any;
  name: any;
  constructor(public activatedRoute: ActivatedRoute, public router: Router) {
    let name = this.activatedRoute.snapshot.paramMap.get('name');
    this.name = name;
  }

  goToCcomp() {
    this.router.navigate(['/ccomponent/', this.name, this.age]);
  }

  ngOnInit(): void {}
}
