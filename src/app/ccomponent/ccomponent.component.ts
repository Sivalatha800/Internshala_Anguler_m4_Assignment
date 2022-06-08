import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-ccomponent',
  templateUrl: './ccomponent.component.html',
  styleUrls: ['./ccomponent.component.css'],
})
export class CcomponentComponent implements OnInit {
  name: any;
  age: any;
  constructor(public activatedRoute: ActivatedRoute, public router: Router) {
    let name = this.activatedRoute.snapshot.paramMap.get('name');
    let age = Number(this.activatedRoute.snapshot.paramMap.get('age'));
    this.name = name;
    this.age = age;
  }
  goToAcomp() {
    this.router.navigate(['/acomponent']);
  }
  ngOnInit(): void {}
}
