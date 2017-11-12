import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {ActivatedRoute, Router, NavigationEnd} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  private fragment: string;
  public partners: string;
  public Speakers: string;
private scrollExecuted: boolean = false;
  constructor(private route: ActivatedRoute,  private _router:Router) { }
    gotoHashtag(fragment: string) {
    let url = '';
    let urlWithSegments = this._router.url.split('#');

    if(urlWithSegments.length){
      url = urlWithSegments[0];
      //console.log(urlWithSegments[]);
    }

    window.location.hash = fragment;
    const element = document.querySelector("#" + fragment);
    if (element) element.scrollIntoView(element);
}


 ngOnInit() {
  this._router.events.subscribe(s => {
      if (s instanceof NavigationEnd) {
        const tree = this._router.parseUrl(this._router.url);
        if (tree.fragment) {
          const element = document.querySelector("#" + tree.fragment);
          if (element) { element.scrollIntoView(element); }
        }
      }
    });
}

}

