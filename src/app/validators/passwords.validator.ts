import { ValidatorFn } from "@angular/forms";

export function passwordsMatch(password:string,rePassword:string):ValidatorFn{
return (control) =>{
    const passFormControl = control.get(password);
    const rePassFormControl = control.get(rePassword);

    const match = passFormControl?.value === rePassFormControl?.value;
    return match ? null : {passwordsMatch: true};
}
}