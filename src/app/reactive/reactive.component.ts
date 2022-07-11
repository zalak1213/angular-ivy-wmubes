import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css'],
})
export class ReactiveComponent implements OnInit {
  zalakform = new FormGroup({
    fName: new FormControl('', [Validators.required,Validators.minLength(3)]),
    lName: new FormControl(''),
    city: new FormControl(''),
    gmail: new FormControl('',[Validators.required,Validators.email]),
  });
  submitForm(zalakform:FormGroup) {
    console.log(zalakform.value);

  }

  constructor() {}

  ngOnInit() {}
}
