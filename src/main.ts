import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

// Bootstrap da aplicação Angular no navegador com configuração
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error('Erro ao inicializar a aplicação no navegador:', err));
