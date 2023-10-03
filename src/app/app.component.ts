import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'counter-angular';
  counter = 0;
  photos: any[] = [];

  increment(){
    this.counter++;
  }
  decrement(){
    this.counter === 0 ? null : this.counter--;
  }
  constructor(private http: HttpClient){
   this.fetchPhotos();
  }

  ngOnInit(): void {
    this.fetchPhotos();
  }

  fetchPhotos(): void{
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/photos')
    .subscribe(data => {
      this.photos = data
    }, error => {
      console.log('Error al obtener las fotos: ', error)
    })
  }

}
