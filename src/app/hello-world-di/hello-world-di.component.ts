import { Component } from '@angular/core';
import { Logger } from '../logger.service';

@Component({
  selector: 'app-hello-world-di',
  templateUrl: './hello-world-di.component.html',
  styleUrls: ['./hello-world-di.component.css']
})
export class HelloWorldDependencyInjectionComponent {

  count = 0;

  constructor(private logger: Logger) {}

  onLogMe() {
    this.logger.writeCount(this.count);
    this.count++;
  }
}
