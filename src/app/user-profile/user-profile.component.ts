import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Livre } from 'app/Models/Livre';
import { livreService } from 'app/services/Livre/livre.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  isCollapsed = true;

  livre: Livre =new Livre();
  disableButton: boolean = false;

  constructor(private router:Router,private us:livreService, private _router:Router) { }


  AddLivre(){
    this.disableButton = true;
    this.us.AddLivre(this.livre).subscribe( (data:any) =>{
      console.log(data);
        if(data.message == "success") {
          this.disableButton = false;
          this.router.navigate(['/table-list'])
      .then(() => {
        window.location.reload();
      });
        }
      },
      (error:any) => console.log(error));  }



  ngOnInit(): void {}
}
