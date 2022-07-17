import { Injectable } from '@angular/core';
import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {

  constructor() { }


  patternValidator(): ValidatorFn|null {
 
    return (control: AbstractControl): { [key: string]: any } => {
      let isInValid:boolean=true;
      if (control.value>20) {
        isInValid= false ;
      }
      else{
        isInValid= true ;
      }
   

    return isInValid ? {'invalidPassword':  isInValid} : {};
    };
  }
}


