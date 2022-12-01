import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { IUser, IUserFormGroup } from './model/user'

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  formData: IUser;
  signinForm: IUserFormGroup;
  constructor(private formBuilder: FormBuilder) {
  }
  ngOnInit(): void {
    this.signinForm = this.formBuilder.group({
      fullname: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    }) as IUserFormGroup;
  }
  signin() {
    console.log(this.signinForm.value)
  }
}
