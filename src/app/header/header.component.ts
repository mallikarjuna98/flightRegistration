import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  loginModalStyle="none";
  regModalStyle="none";
  isValid:boolean=false;
  signinname='';
  constructor(private userService:UserService,
    private router:Router){ }
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
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
    alert("Successfully LoggedIn")
      this.loginModalStyle="none";
      this.userService.authenticateUser(username,password).subscribe((response)=>{
        this.isValid=true;
        console.log(username)
        this.signinname=username;
        console.log(this.signinname)
      });  
  }
  
  registerUser(uid: any,pwd: any,fname: any,lname: any,mobile: any,email: any)
  {
    alert("Successfully registered")
      this.regModalStyle="none"; 
      let user:User = new User(uid,pwd,fname,lname,email,mobile);
      this.userService.registerUser(user).subscribe((response)=>this.regUserStatus=response);
  }
  myClickFunction(event:any){
    alert("navigating to flightsearch");
    this.router.navigateByUrl('/flightshow')
}
}

  
