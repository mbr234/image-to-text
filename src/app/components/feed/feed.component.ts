import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CardModule, GridModule } from '@coreui/angular';
import { ImageToTextService } from '../../services/image-to-text.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-feed',
  standalone: true,
  imports: [
    CommonModule,
    GridModule,
    CardModule,
  ],
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.scss'
})
export class FeedComponent implements OnInit {
  feed: String[] = [];

  constructor (private itts: ImageToTextService) {}

  ngOnInit(){
    this.itts.text.subscribe(x => {
      this.feed.push(x);
    });
  }
}
