import { HttpClient } from '@angular/common/http';
import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableDataSourcePaginator } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'view-passwords',
  templateUrl: './view-passwords.component.html',
  styleUrls: ['./view-passwords.component.css']
})
export class ViewPasswordsComponent{

  passwords:any;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  url = 'http://localhost:8080/passwords';

  displayedColumns: string[] = ['S.No', 'Website', 'URL', 'Password'];
  dataSource:any;

  constructor(private http: HttpClient){
    this.http.get(this.url).subscribe(res=>{
        this.dataSource = new MatTableDataSource(res as any);
        this.dataSource.paginator = this.paginator;
    })
  }
}