import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Livre } from 'app/Models/Livre';
import { livreService } from 'app/services/Livre/livre.service';


@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

    isCollapsed = true;
    livreToUpdate=new Livre();
    livre: Livre =new Livre();
    disableButton: boolean = false;
  
    constructor(private router:Router,private ls:livreService, private _router:Router) { }
  



    getLivreById(livreId) {
        this.ls.getLivreById(livreId).subscribe( (livre:any) =>{
          console.log(livre);
        },
        (error:any) => console.log(error)); 
       
    }
 
  
      updateLivre(){
        this.ls.updateLivre(this.livre,"13").subscribe((r:any)=>{
            console.log(r);
          },(error:any) => console.log(error));
      }
  
    ngOnInit(): void {}
  }
