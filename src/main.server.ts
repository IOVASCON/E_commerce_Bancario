import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';

// Bootstrap da aplicação com configuração de SSR e tratamento de erros
const bootstrap = () => 
  bootstrapApplication(AppComponent, config)
    .catch(err => console.error('Erro ao inicializar a aplicação no servidor:', err));

export default bootstrap;
