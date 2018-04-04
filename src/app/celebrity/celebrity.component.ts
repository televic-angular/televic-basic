import { Component, OnInit, Input } from '@angular/core';

import { Celebrity } from './celebrity.model';

@Component({
  selector: 'app-celebrity',
  templateUrl: './celebrity.component.html',
  styleUrls: ['./celebrity.component.sass']
})
export class CelebrityComponent implements OnInit {

  @Input()
  celebrity: Celebrity;

  ngOnInit() {}

  voteUp(): boolean {
    this.celebrity.voteUp();
    return false;
  }

  voteDown(): boolean {
    this.celebrity.voteDown();
    return false;
  }
}
