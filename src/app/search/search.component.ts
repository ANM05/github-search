import { Component, OnInit } from '@angular/core';
import {Users} from '../user-class/users';
import {ProfileRequestService} from '../profile-http/profile-request.service';
import {Repositories} from '../repositories';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  providers:[ProfileRequestService],
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  userName: string;
  user:Users;
  repos:Repositories[] = [];

  searchProfile(){
    this.profileService.update(this.userName);
    this.profileService.profileRequest();
    this.profileService.reposRequest();
  }

  constructor(private profileService:ProfileRequestService) { }


  ngOnInit() {
    this.profileService.profileRequest();
    this.user = this.profileService.user;  
    this.profileService.reposRequest().subscribe(data => {
     // console.log(data);
      data.forEach(repo => {
        this.repos.push(repo);
      });
      
    });
  
  }

}
