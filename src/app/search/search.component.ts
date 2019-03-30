import { Component, OnInit } from '@angular/core';
import {Users} from '../user-class/users';
import {ProfileRequestService} from '../profile-http/profile-request.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  providers:[ProfileRequestService],
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  user:Users;

  constructor(private profileService:ProfileRequestService) { }

  ngOnInit() {
    this.profileService.profileRequest()
    this.user = this.profileService.user  
  }

}
