import {Component, OnInit} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
  ValidationErrors,
  ValidatorFn,
  Validators
} from "@angular/forms";
import {MyErrorStateMatcher} from "../../model/ErrorStateMatcher";
import {AuthService} from "../service/auth.service";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  minUsername = 3
  minPassword = 8
  maxPassword = 25
  maxUsername = 25
  username = new FormControl('',
    [Validators.required, Validators.minLength(this.minUsername), Validators.maxLength(this.maxUsername)])
  password = new FormControl('',
    [Validators.required, Validators.minLength(this.minPassword), Validators.maxLength(this.maxPassword),
      this.regexValidator(new RegExp("\\w+([a-z])\\w+"),{lowercase:"false"}),
      this.regexValidator(new RegExp("\\w+([A-Z])\\w+"),{uppercase:"false"}),
      this.regexValidator(new RegExp("\\w+([0-9])\\w+"),{digital:"false"}),
      this.regexValidator(new RegExp("\\w+([!@#&()–{}:;',?/*~$_^+=<>])\\w+"),{characters:"false"}),
    ])
  confirmPassword = new FormControl('',
    [Validators.required, Validators.minLength(this.minPassword), Validators.maxLength(this.maxPassword)])
  matcherUsername = new MyErrorStateMatcher()
  matcherPassword = new MyErrorStateMatcher()
  matcherRePassword = new MyErrorStateMatcher()
  hidePassword = true;
  hideConfirmPassword = true;

  constructor(private formBuilder: FormBuilder ,private authService:AuthService) {
  }


  ngOnInit(): void {
  }
  registerGroup = this.formBuilder.group({
      username: this.username,
      password: this.password,
      confirmPassword: this.confirmPassword
    }
  );

  register() {
    const val = this.registerGroup.value;
    if (val.username && val.password && val.confirmPassword) {
      this.authService.register(val.username,val.password,val.confirmPassword).subscribe(result=>{
        console.log(result)
      })
      window.location.reload();

    }
  }

  //Group Pattern Validator
  private regexValidator(regex: RegExp, error: ValidationErrors): ValidatorFn {
    return (control: AbstractControl): { [p: string]: any } | null => {
      if (!control.value) {
        console.log(control.value)
        return null;
      }
      const valid = regex.test(control.value);
      // @ts-ignore
      return valid ? null : error;
    };
  }

}


