import { Component, OnInit } from '@angular/core';
import { ConfigService } from './config.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  providers: [ConfigService]
})
export class ConfigComponent implements OnInit {
  error: any;
  headers: string[];
  config;

  constructor(private configService: ConfigService) { }

  ngOnInit() {
  }

  clear() {
    this.config = undefined;
    this.error = undefined;
    this.headers = undefined;
  }

  showConfig() {
    this.configService.getConfig()
      .subscribe(data => this.config = {
        heroesUrl: data['heroesUrl'],
        textfile: data['textfile']
      });
  }
}