import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map'

@Injectable()
export class UsersService {
  constructor(private http: Http) {
  }

  url = "http://jsonplaceholder.typicode.com/users";
  isLoading = true;

  getUsers() {
    return this.http.get(this.url)
      .map(res => res.json())
  }
}
