import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: 'about.component.html',
  styleUrls: ['./about.component.scss'],
})

export class AboutComponent implements OnInit {
  constructor(private router: ActivatedRoute) { }
  public routeParam: string;

  ngOnInit() {
    this.routeParam = this.router.snapshot.params.id;
  }
}
