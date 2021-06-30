import {AbstractControl} from "@angular/forms";

export class CustomValidators {


  static addition(target: string, sourceOne: string, sourceTwo: string) {

    return (form: AbstractControl) => {
      const sum = form.value[target]
      const firstVal = form.value[sourceOne];
      const secondVal = form.value[sourceTwo];


      if (firstVal + secondVal === parseInt(sum)) {
        return null
      }

      return {someErr: true}

    };

  }

}
