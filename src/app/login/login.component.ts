import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginModalStyle="none";
  regModalStyle="none";
  constructor(private userService:UserService){ }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  regUserStatus:string="";
  loginUserStatus:string="";
  openLoginModal()
  {
      this.loginModalStyle="block";
  }
 closeLoginModal()
  {
      this.loginModalStyle="none";
  }
  openUserRegModal()
  {
      this.regModalStyle="block";
  }
  closeUserRegModal()
  {
      this.regModalStyle="none";
  }
  userLogin(username:string,password:string) : void
  { 
      this.loginModalStyle="none";
      this.userService.authenticateUser(username,password).subscribe((response)=>console.log(response));  
  }
  
  registerUser(uid: any,pwd: any,fname: any,lname: any,mobile: any,email: any)
  {
      this.regModalStyle="none"; 
      let user:User = new User(uid,pwd,fname,lname,email,mobile);
      this.userService.registerUser(user).subscribe((response)=>this.regUserStatus=response);
  }
}



