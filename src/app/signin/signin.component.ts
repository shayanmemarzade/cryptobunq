import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { IUser, IUserFormGroup } from './model/user'
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
  providers: [MessageService]
})
export class SigninComponent implements OnInit {
  formData: IUser;
  signinForm: IUserFormGroup;
  constructor(private formBuilder: FormBuilder, private messageService: MessageService) {
  }
  ngOnInit(): void {
    this.signinForm = this.formBuilder.group({
      fullname: ['', Validators.required],
      email: ['', (Validators.required, Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,6}$"))],
      password: ['', Validators.required]
    }) as IUserFormGroup;
  }
  signin() {
    if (this.signinForm.valid) {
      this.messageService.add({ severity: 'success', summary: 'Service Message', detail: 'Signed in successfully' });
    } else {
      if (!this.signinForm.get('fullname')?.value) {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Please fill Full name' });
      }
      if (!this.signinForm.get('email')?.value) {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Please fill Email' });
      }
      if (!this.signinForm.get('password')?.value) {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Please fill Password' });
      }
      if (this.signinForm.get('email')?.value && !this.signinForm.get('email')?.valid) {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Please enter valid email format' });
      }

    }
    // console.log(this.signinForm.value)
  }
}
