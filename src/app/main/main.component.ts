import { Component, OnInit } from '@angular/core';
import { ApiService } from './../services/api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public users:any =[]
  public count:any =[];
  public page:number=0;
    constructor(public api: ApiService) {}
  
    ngOnInit() {
      // console.log(this.api.testing().data )
     this.testing(1);
    }
    testing(page) {
      this.page = page;
      this.api.GetData('https://swapi.co/api/people/?page='+ this.page).then(
        (data: any) => {
          console.log("swapi data:", data);
          this.users = data.results;
          let allUsers = Math.ceil(data.count / 10) ;
          this.count =  Array(allUsers).fill(0).map((x,i)=>i) ;
         
        },
        error => {
          console.log("Error in recieving data");
        }
      );
    }
    nextP(){
        if(this.page < this.count.length){
          console.log("nextP")
          this.testing(++this.page)
        }else{
          
        }
    }
    prevP(){
      if(this.page > 1){
        console.log("prevP")
        this.testing(--this.page)
      }else{
        
      }
    }
}
