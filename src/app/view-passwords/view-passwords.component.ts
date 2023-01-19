import { HttpClient } from '@angular/common/http';
import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource, MatTableDataSourcePaginator } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { Router } from '@angular/router';
import { ApiService } from 'app/api.service';

@Component({
  selector: 'view-passwords',
  templateUrl: './view-passwords.component.html',
  styleUrls: ['./view-passwords.component.css']
})
export class ViewPasswordsComponent implements OnInit{

  passwords:any;
  //id:any;
  @ViewChild(MatTable) table !: MatTable<any>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  url = 'http://localhost:8080/passwords';

  displayedColumns: string[] = ['S.No', 'Website', 'URL', 'Password', 'DeletePassword'];
  dataSource:any;

  constructor(private http: HttpClient,private api:ApiService){
    
  }
  ngOnInit(): void {
    this.returnPass()
  }

  returnPass(){
    this.api.getPass().subscribe((res: any)=>{
      this.dataSource = new MatTableDataSource(res as any);
      this.dataSource.paginator = this.paginator;
    })
  }

  Deleted(id:any){
    this.api.deletePass(id).subscribe(res=>this.ngOnInit());
    
    //this.router.navigateByUrl('/view-passwords')
  }
}