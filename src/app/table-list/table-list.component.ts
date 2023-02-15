import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Livre } from 'app/Models/Livre';
import { livreService } from 'app/services/Livre/livre.service';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
  livres:any;
  data: any = [];
  constructor(private ls:livreService, private _router:Router) { }

 

  listOfLivres(){
    this.ls.listOfLivres().subscribe( (data:any) =>{
        console.log(data);
        this.livres=data;
      },
      (error:any) => console.log(error));  }

      ngOnInit() {
        this.listOfLivres();
      }

      getLivreById(livreId) {
        this.ls.getLivreById(livreId).subscribe( (ltu:any) =>{
          console.log(ltu);
        },
        (error:any) => console.log(error));  }

      Delete(livreId) {
        this.ls.deleteLivre(livreId).subscribe( (data:any) =>{
          console.log(data);
        },
        (error:any) => console.log(error));  }
}
