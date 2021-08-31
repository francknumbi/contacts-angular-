import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable()
export class GalleryService{
  pagePhotos:any;
  currentPage:number=1;
  size:number=10
  pages:Array<number>=[];
  totalPages:number=0;
  motCle:string="";

  private api: string= "https://pixabay.com/api/?key="
  private key: string= "18136630-89f13d806654ac74cf6af716a"
  private requette: string ="q=marrakech&per_page="+this.size+"&page="+this.currentPage


  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  chercher(value: any){
    this.motCle=value.motCle;
    this.requette="&q="+value.motCle+"&per_page="+this.size+"&page="+this.currentPage;
    this.http.get(this.api+this.key+this.requette,{responseType: "json"})
      .subscribe(data=>{
        this.pagePhotos=data
        console.log(data)
        this.totalPages=data.total/this.size;
        if(data.total % this.size !=0) ++this.totalPages;
        this.pages=new Array(this.totalPages);
      })
  }
  AllerPage(i:number){
    this.currentPage=i+1;
    this.chercher(this.motCle)
  }
}
