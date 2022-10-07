import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";


export const changePasswordMatchValidator: ValidatorFn = (formGroup: AbstractControl): ValidationErrors | null => {
  let password = formGroup.get('newPassword')?.value
  let confirmPassword = formGroup.get('confirmPassword')?.value
  //test dữ liễu

  // console.log(password)
  // console.log(confirmPassword)
  if (password !== confirmPassword) {
    return {changePasswordMismatch: true};
  } else return null;

};

