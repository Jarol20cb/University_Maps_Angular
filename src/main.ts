import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { enableProdMode } from '@angular/core';  // Importa enableProdMode


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
  enableProdMode(); // Llama a enableProdMode