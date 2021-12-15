import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { Observable } from 'rxjs';
import { Produit } from '../model/produit';
import { map, filter } from 'rxjs/operators';


@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {

  constructor(private service1: MyserviceService) { }

  count: number = 0;
  obsCatalogue: Observable<Produit[]> = new Observable;
  recherche: string='';



  valuechange(event : any){
    console.log(event)
    this.obsCatalogue = this.service1.getCatalogue()
    .pipe(
      map(
        produit => 
            produit.filter(
              produit => produit.libelle.startsWith(this.recherche))
      ))
  }

  ngOnInit(): void {
    this.obsCatalogue = this.service1.getCatalogue();
  }

  getCount(): void {
    this.count = this.service1.getCount();
  }

}
