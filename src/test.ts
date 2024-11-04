/***************************************************************************************************
 * Arquivo necessário pelo karma.conf.js para carregar recursivamente todos os .spec e arquivos de framework.
 */

// Importa o Zone.js para testes.
import 'zone.js/testing';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

declare const require: {
  context(path: string, deep?: boolean, filter?: RegExp): {
    keys(): string[];
    <T>(id: string): T;
  };
};

// Inicializa o ambiente de teste do Angular.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting(),
);

// Encontra todos os testes.
const context = require.context('./', true, /\.spec\.ts$/);

// Carrega os módulos.
context.keys().forEach(context);
