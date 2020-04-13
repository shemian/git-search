import { Component, OnInit } from '@angular/core';
import { UserServiceService } from "../user-service.service";
import { User } from "../user";
import { Repo } from "../repo";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  providers:[UserServiceService],
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
 searchUsers = true;

 user: User;
  repo: Repo;
  username: string;
  constructor(
    public userService: UserServiceService,
    private repoService: UserServiceService
  ) { }
  search(userName) {
    this.userService.searchUser(userName).then(
      (success) => {
        this.user = this.userService.foundUser;
      },
      (error) => {
        console.log(error);
      }
    );
    this.repoService.getRepos(userName).then(
      (results) => {
        this.repo = this.repoService.allRepo;
        console.log(this.repo);
      },
      (error) => {
        console.log(error);
      }
    );
  }


  ngOnInit() {
    this.search('shemian')
  }

}
