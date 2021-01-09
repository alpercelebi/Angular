import { Component, OnInit } from '@angular/core';
import { Apimodel } from '../models/apimodel';
import { ProcessService } from '../services/process.service';


@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css'],
  providers:[ProcessService]

})
export class ApiComponent implements OnInit {

    dizi:string[]=[]
    dizi2:string[]=[]

    icerik:string
    tarih:string
    icerikid:string
  constructor(private processService:ProcessService) { }

  ngOnInit(): void {
    this.processService.getalltasktodoist().subscribe(data=>{
      console.log(data);
      this.dizi=data;
      this.dizi2=this.dizi.splice(0,12);
    });

  }

  PostDelete(id:string){
    this.processService.deletetask(parseInt(id));
  }

  PostAdd(icerik:string,tarih:string){
    this.processService.addtask(icerik,tarih);
  }




}
