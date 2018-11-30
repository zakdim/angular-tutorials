import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConfigComponent } from './config/config.component';
import { DownloaderComponent } from './downloader/downloader.component';
import { MessageService } from './message.service';

@NgModule({
  imports: [
    BrowserModule,
    // import HttpClientModule after BrowserModule.
    HttpClientModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    ConfigComponent,
    DownloaderComponent
  ],

  providers: [
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
