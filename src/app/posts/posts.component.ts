import {Component, OnInit} from '@angular/core';
import {PostsService} from "./posts.service";
import {UsersService} from "../users/users.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  providers: [PostsService, UsersService]
})
export class PostsComponent implements OnInit {
  constructor(private postService: PostsService, private usersService: UsersService) {

  }

  posts;
  isLoading = true;
  currentPost = false;
  postComments = '';
  users;
  dividedPosts = [];
  cluster = [];


  ngOnInit() {
    this.postService.getPosts('any')
      .subscribe(data => {
        this.isLoading = false;
        this.posts = data
      });
    this.usersService.getUsers()
      .subscribe(data => {
        this.users = data
      });
    // for (let i = 0; i < 100; i++) {
    //   if (i % 10) {
    //     this.cluster = [];
    //     this.dividedPosts.push(this.cluster);
    //   }
    //   else
    //     this.cluster.push(this.posts[i]);
    // }
    // console.log(this.dividedPosts);
  }

  filterUsers(id) {
    this.isLoading = true;
    if (id == '')
      id = 'any';
    this.postService.getPosts(id)
      .subscribe(data => {
        this.isLoading = false;
        this.posts = data
      });
  }

  getComments() {
    if (this.currentPost) {
      this.postService.getComments(this.currentPost["id"])
        .subscribe(data => {
          this.postComments = data
        });
    }
  }
}
