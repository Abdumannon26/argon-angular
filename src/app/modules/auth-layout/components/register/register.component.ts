import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {LOGIN_PATTERN} from '../../../../core/patterns';
import {PasswordValidator} from '../../../../core/validators/password-validator';
import {ToastrService} from 'ngx-toastr';
import {DestroyableComponent} from '../../../../core/abstract/destroyable.component';
import {Router} from '@angular/router';
import {ValidatorComponent} from '../../../../shared/validator/validator.component';

@Component({
  standalone: true,
  selector: 'app-register',
  templateUrl: './register.component.html',
  imports: [
    ReactiveFormsModule,
    ValidatorComponent
  ],
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent extends DestroyableComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router
  ) {
    super();
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  ngOnInit() {
    this.createForm();
  }

  onSubmit() {
    localStorage.setItem('userData', JSON.stringify(this.form.value));
    this.toastr.success('User added successfully', 'Success', {
      timeOut: 2000,
    });
    this.setTimeout(() => this.router.navigate([
      'login'
    ]), 3000)
  }

  private createForm(): void {
    this.form = this.fb.group({
      login: ['', [Validators.required, Validators.minLength(6), Validators.pattern(LOGIN_PATTERN)]],
      password: ['', [
        PasswordValidator.validate(),
        PasswordValidator.number(),
        PasswordValidator.uppercase(),
        PasswordValidator.lowercase(),
        PasswordValidator.specSymbol(),
        PasswordValidator.minLength(8),
        Validators.required]],
    })
  }

}
