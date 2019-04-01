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
  userName = "anm05";
  user:Users;
  repos:Repositories;

  constructor(private profileService:ProfileRequestService) { }

  ngOnInit() {
    this.profileService.profileRequest();
    this.user = this.profileService.user;  
    this.profileService.reposRequest();
    this.repos = this.profileService.repos;
  }

}
