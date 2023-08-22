import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {ILoginForm} from '../../interfaces/login-form.interface';
import {ValidatorComponent} from '../../../../shared/validator/validator.component';

@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.component.html',
  imports: [
    ReactiveFormsModule,
    ValidatorComponent
  ],
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  userData: ILoginForm;

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router
  ) {

  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  ngOnInit() {
    this.createForm();
    this.parseUserData()
  }

  onSubmit() {
    const formValue: ILoginForm = this.form.value;
    if (this.userCheck(this.userData, formValue)) {
      localStorage.setItem('isLoggedIn', 'true');
      this.router.navigate(['/admin/tables']).catch()
    } else {
      this.toastr.error('Login failed. Invalid username or password.', 'Error', {
        timeOut: 2000,
      });
    }
  }

  private parseUserData(): void {
    const storedData = localStorage.getItem('userData');
    this.userData = storedData ? JSON.parse(storedData) : {};
  }

  private userCheck(storeData: ILoginForm, loginData: ILoginForm): boolean {
    return storeData.login === loginData.login &&
      storeData.password === loginData.password;
  }

  private createForm(): void {
    this.form = this.fb.group({
      login: ['', [Validators.required]],
      password: ['', [Validators.required]],
    })
  }
}
