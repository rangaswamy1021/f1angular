import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { Hero } from './hero.messages';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ValidationComponent implements OnInit {

  form: FormGroup;
  num = 5;

  powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];

  model = new Hero(18, 'Dr IQ', this.powers[2], 'Chuck Overstreet');

  submitted = false;
  ngOnInit() {
    const password = new FormControl('', Validators.required);
    const certainPassword = new FormControl('', CustomValidators.notEqualTo(password));

    this.form = new FormGroup({
      password: password,
      certainPassword: certainPassword
    });
  }

  // onSubmit(form) {
  //   console.log(form);
  // }
  onSubmit() { this.submitted = true; }
  newHero() {
    this.model = new Hero(42, '', '');
  }

}
