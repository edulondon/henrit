import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, NavigationEnd} from '@angular/router';
import {Subscription} from "rxjs/Subscription";
import 'rxjs/add/operator/filter';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  private fragment: string;
private scrollExecuted: boolean = false;

  constructor(private route: ActivatedRoute,  private _router:Router) { }
  
 ngAfterViewChecked() {
  if (!this.scrollExecuted) {
    let routeFragmentSubscription: Subscription;
    routeFragmentSubscription = this.route.fragment.subscribe(fragment => {
      if (fragment) {
        let element = document.getElementById(fragment);
        if (element) {
          element.scrollIntoView();
          this.scrollExecuted = true;
          // Free resources
          setTimeout(
            () => {
              routeFragmentSubscription.unsubscribe();
            }, 0);
        }
      }
    });
  }
}

gotoHashtag(fragment: string) {
let url = '';
let urlWithSegments = this._router.url.split('#');

if(urlWithSegments.length){
url = urlWithSegments[0];
//console.log(urlWithSegments[]);
}

window.location.hash = fragment;
const element = document.querySelector("#" + fragment);
if (element) element.scrollIntoView();
}


ngOnInit() {
      this._router.events.subscribe(s => {
      if (s instanceof NavigationEnd) {
      const tree = this._router.parseUrl(this._router.url);
      if (tree.fragment) {
      const element = document.querySelector("#" + tree.fragment);
      if (element) { element.scrollIntoView(); 
      }
      }
      }
      });
}

}
