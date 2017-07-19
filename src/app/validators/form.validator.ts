import {FormControl} from "@angular/forms";

export class EmailValidators {
  static mustHaveDoteAndAtSymbol(control: FormControl) {
    if (!(control.value.indexOf('.') >= 0 && control.value.indexOf('@') >= 0)) {
      return {mustHaveDoteAndAtSymbol: true};
    }
    return null;
  }
}

export class Phonevalidators{
  static validNumber(control: FormControl) {
    if (isNaN(control.value)) {
      return {invalidNumber: true};
    }
    return null;
  }

}
