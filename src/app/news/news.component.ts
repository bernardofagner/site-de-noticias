import { Component, OnInit } from '@angular/core';
import { PseudoBdService } from '../services/pseudo-bd.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  public news: any

  constructor(private data_base: PseudoBdService) { }

  ngOnInit() {
    this.news = this.data_base.data_on_database
    console.log(this.news)
  }

}
