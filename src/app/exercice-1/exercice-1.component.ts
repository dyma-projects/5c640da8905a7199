import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-exercice-1',
  templateUrl: './exercice-1.component.html'
})
export class Exercice1Component implements OnInit {

  public newColor: string;

  // Ce Hostlistener permet d'écouter un événement sur l'objet window global;
  // Peut-être que cela vous sera utile pour votre directive ;)
  // (Il vous faudra bien sûr le déplacer dans celle-ci)

  @HostListener('window:click', ['$event']) windowClick($event) {
     console.log("Ohh on m'a clické dessus !!!",$event);
   }
   
  @HostListener('document:keydown', ['$event'])
  handleKeydownEvent(event: KeyboardEvent) {
      console.log(event);
      this.newColor='green';

      if (event.code == "ArrowUp") {
        this.newColor='green';
       }
      else if (event.code == "ArrowDown") {
        this.newColor='red';
      }
      else if (event.code == "ArrowLeft") {
        this.newColor='blue';
      }
      else if (event.code == "ArrowRight") {
        this.newColor='orange';
      }
  }
 
  constructor() {
  }

  ngOnInit() {
  }

}
