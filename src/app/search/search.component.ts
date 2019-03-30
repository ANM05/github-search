import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Users} from '../user-class/users';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  user:Users;

  constructor(private http:HttpClient) { }

  ngOnInit() {
    interface ProfileResponse{
      login:string;
      avatar_url:any;
      public_repos:number;
      followers:number;
      following:number;
    }

    this.http.get<ProfileResponse>("https://api.github.com/users/anm05?access_token=852254f32dd6f78719a0630b5ef4ddf9eaf041f3").subscribe(response=>{
      this.user= new Users(response.login,response.avatar_url, response.public_repos, response.followers, response.following)
      //successfull request
    })
  }

}
