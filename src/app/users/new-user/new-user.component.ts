import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {EmailValidators, PhoneValidators} from "../../protection/form.validator";
import {ActivatedRoute, Router} from "@angular/router";
import {UsersService} from "../users.service";

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  providers: [UsersService]
})
export class NewUserComponent implements OnInit {
  form: FormGroup;
  id;
  subscription;

  constructor(private route: ActivatedRoute,
              private usersService: UsersService) {
  }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      params => {
        this.id = +params["id"];
      }
    );

    let fb = new FormBuilder;

    if (this.id == "new") {
      this.form = fb.group({
        id: [this.id],
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
          PhoneValidators.invalidNumber
        ])],
        address: {
          street: ['', Validators.required],
          suite: ['', Validators.required],
          city: ['', Validators.required],
          zipCode: ['', Validators.required],
        }
      })
    }
    else {
      this.usersService.getUsers()
        .subscribe(data => {
          this.user = data[this.id - 1]
        });

      this.form = fb.group({
        id: [this.id],
        name: [this.user.name, Validators.compose([
          Validators.required,
          Validators.minLength(3)
        ])],
        email: [this.user.email, Validators.compose([
          Validators.required,
          EmailValidators.mustHaveDoteAndAtSymbol
        ])],
        phone: [this.user.phone, Validators.compose([
          Validators.required,
          PhoneValidators.invalidNumber
        ])],
        address: {
          street: [this.user.address.street, Validators.required],
          suite: [this.user.address.suite, Validators.required],
          city: [this.user.address.city, Validators.required],
          zipCode: [this.user.address.zipCode, Validators.required],
        }
      })
    }
  }

  showUser() {
    console.log(this.form);
  }

  user;
}
