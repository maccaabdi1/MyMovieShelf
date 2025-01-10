import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([]), // Add routes here if any
    provideHttpClient(),
    importProvidersFrom(BrowserAnimationsModule), // Add animations module here
  ],
}).catch((err) => console.error(err));
