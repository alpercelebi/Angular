import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Apimodel } from '../models/apimodel';

@Injectable({
  providedIn: 'root'
})
export class ProcessService {

  constructor(private httpClient:HttpClient) { }

  getalltasktodoist():Observable<string[]>{
    let apiurl='https://api.todoist.com/rest/v1/tasks'
      return this.httpClient.get<string[]>(apiurl,{headers:{"Authorization": "Bearer 5f667518ea90cc8dccfdf2ea1a53fb21f162961e"}});
  }

  deletetask(id:number){
    let apiurl='https://api.todoist.com/rest/v1/tasks/'+id+'/close'
    let headers = new HttpHeaders();
    headers=headers.append("Authorization","Bearer 5f667518ea90cc8dccfdf2ea1a53fb21f162961e")
    this.httpClient.post(apiurl,"",{headers: headers}
      
    ).subscribe(item=>
    {
      alert("Silme işlemi başarılı");
    }); 
  }

  addtask(icerik:string,tarih:string){
    let apiurl='https://api.todoist.com/rest/v1/tasks'
    const item={
      content: icerik,
      due_string:  tarih,
      due_lang: "en",
    }
    const headers = new HttpHeaders({
      "Authorization": "Bearer 5f667518ea90cc8dccfdf2ea1a53fb21f162961e",
      "Content-Type":"application/json",
      "X-Request-Id": this.randomInt().toString()
      
    });

    this.httpClient.post(apiurl,JSON.stringify(item),{headers}
      
      ).subscribe(item=>
      {
          alert("Başarıyla Kaydedildi");
      });   
  }
  randomInt() {
    return Math.floor(Math.random() * (1000000 - 100000)) + 100000;
  }
}
