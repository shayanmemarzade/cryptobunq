import { AbstractControl, FormGroup } from '@angular/forms';

export interface IUser {
    fullname: string;
    email: string;
    password: string;
}

export interface IUserFormGroup extends FormGroup {
    value: IUser;
    controls: {
        fullname: AbstractControl;
        email: AbstractControl;
        password: AbstractControl;
    };
}