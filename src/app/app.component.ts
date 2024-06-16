import { Component } from '@angular/core';
import { BackgroundTaskService } from './services/update-data-background-task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OutlayUI';
  constructor(private background: BackgroundTaskService) {
    
  }
}
