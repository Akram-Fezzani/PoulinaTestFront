import { AfterViewInit, Component, NgModule, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Livre } from 'app/Models/Livre';
import { livreService } from 'app/services/Livre/livre.service';
import { SearchPipe } from 'app/search.pipe';
import { CommonModule } from '@angular/common';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table'

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})

export class TableListComponent implements OnInit,AfterViewInit  {
  livres: Livre[] = [];
  dataSource!: MatTableDataSource<any>;
  data: any = [];
  searchtext='';
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private ls:livreService, private _router:Router) { }



  listOfLivres(){
    this.ls.listOfLivres().subscribe( (data:any) =>{
       this.dataSource = new MatTableDataSource(data);
       console.log(this.dataSource);

        return this.livres;

      },
      (error:any) => console.log(error));  
  }

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

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}
