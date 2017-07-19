import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {EmailValidators, Phonevalidators} from "../../validators/form.validator";

@Component({
  selector: 'app-new-user',
  templateUrl: './users.component.html'
})
export class NewUserComponent {
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      name: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3)
      ])],
      email: ['', Validators.compose([
        Validators.required,
        EmailValidators.mustHaveDoteAndAtSymbol
      ])],
      phone: ['', Validators.compose([
        Validators.required,
        Phonevalidators.validNumber
      ])],
    })
  }

  form: FormGroup;

}
