import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([]), // Add routes here if any
    provideHttpClient(withInterceptorsFromDi())
  ]
}).catch((err) => console.error(err));

