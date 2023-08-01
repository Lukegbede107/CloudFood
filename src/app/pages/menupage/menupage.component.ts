import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.component.html',
  styleUrls: ['./menupage.component.css']
})
export class MenupageComponent implements OnInit {
  constructor(private param:ActivatedRoute, private service:OrderDetailsService){}
  getMeunId:any;
  menuData:any;
  ngOnInit(): void{
    this.getMeunId = this.param.snapshot.paramMap.get('id');
    console.log(this.getMeunId, 'getmeun');
    if(this.getMeunId){
      this.menuData = this.service.foodDetails.filter((value)=>{
        return value.Id == this.getMeunId;
        
      });
      console.log(this.menuData, 'menudata>>');
    }
  }
}
