import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {GalleryService} from "../services/Gallery.service";
//import * as Http from "http";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  motCle:string="";

  constructor(private http:HttpClient, private galleryService: GalleryService) { }

  ngOnInit(): void {
  }

  onSearch(motCle: any){
    this.galleryService.chercher(motCle);
  }
  goToPage(i:number){
    this.galleryService.AllerPage(i)
  }

}
