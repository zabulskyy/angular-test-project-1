import {Injectable} from "@angular/core";
import {CanActivate, CanDeactivate} from "@angular/router";
import {NewUserComponent} from "../users/new-user/new-user.component";

@Injectable()
export class PreventUnsavedChanges implements CanDeactivate<NewUserComponent> {

  canDeactivate(component: NewUserComponent) {
    if (component.form.dirty)
      return  confirm("Are you sure?");
    return true;
  }
}
