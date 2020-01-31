import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-kclg',
  templateUrl: './kclg.page.html',
  styleUrls: ['./kclg.page.scss'],
})
export class KclgPage implements OnInit {
  constructor(private route: ActivatedRoute,
    private router: Router) {
    this.route.queryParams.subscribe(params => {
    });
  }
  ngOnInit() {
  }
}
