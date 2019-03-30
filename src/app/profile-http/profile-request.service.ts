import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Users} from '../user-class/users';
import {environment} from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProfileRequestService {
  user:Users;

  constructor(private http:HttpClient) {
    this.user= new Users("","",0,0,0);
   }

   profileRequest(){
    interface ProfileResponse{
      login:string;
      avatar_url:any;
      public_repos:number;
      followers:number;
      following:number;
    }

    let promise=new Promise((resolve,reject)=>{
      this.http.get<ProfileResponse>(environment.apiUrl).toPromise().then(response=>{
        this.user.login=response.login;
        this.user.avatar_url=response.avatar_url;
        this.user.public_repos=response.public_repos;
        this.user.followers=response.followers;
        this.user.following=response.following;

        resolve();
      },
      error=>{
        alert("An Error has occurred getting your request");

        reject(error);
      }
      
      )

    });
    return promise;
   }
}
