import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Users} from '../user-class/users';
import {environment} from '../../environments/environment';
import {Repositories} from '../repositories';
import {from, Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProfileRequestService {
  userName ="anm05";
  user:Users;
  repos:Repositories;
  apiUrl = "https://api.github.com/users/"+this.userName;

  constructor(private http:HttpClient) {
    this.user= new Users("","","",0,0,0,"","","","");
    this.repos=new Repositories("","","");
   }
    
   profileRequest(){
    interface ProfileResponse{
      name:string;
      login:string;
      avatar_url:any;
      public_repos:number;
      followers:number;
      following:number;
      created_at:string;
      html_url:string;
      bio:string;
      location:string;
    }

    let promise=new Promise((resolve,reject)=>{
      this.http.get<ProfileResponse>(this.apiUrl+environment.token).toPromise().then(response=>{
        this.user.name=response.name;
        this.user.login=response.login;
        this.user.avatar_url=response.avatar_url;
        this.user.public_repos=response.public_repos;
        this.user.followers=response.followers;
        this.user.following=response.following;
        this.user.created_at=response.created_at;
        this.user.html_url=response.html_url;
        this.user.bio=response.bio;
        this.user.location=response.location;

        resolve();
      },
      error=>{
        alert("An Error has occurred processing your request");

        reject(error);
      }
      
      )

    });
    console.log(promise);
    return promise;
   }

   reposRequest(): Observable<Repositories[]>{
     return this.http.get<Repositories[]>(this.apiUrl+"/repos"+environment.token)
    
   }
}
