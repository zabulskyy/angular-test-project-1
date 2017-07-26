import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map'

@Injectable()
export class PostsService {
  constructor(private http: Http) {
  }

  url = "http://jsonplaceholder.typicode.com/posts";
  isLoading = true;

  getPosts(id) {
    if (id == "any")
      return this.http.get(this.url)
        .map(res => res.json());
    else
      return this.http.get(this.url + '?userId=' + id)
        .map(res => res.json());
  }

  getComments(id) {
    return this.http.get(this.url + '/' + id + '/comments')
      .map(res => res.json())
  }
}
