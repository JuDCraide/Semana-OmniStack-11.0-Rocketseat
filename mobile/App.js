import 'intl';
import 'intl/locale-data/jsonp/pt-BR'

import React from 'react';

import Routes from './src/routes'
/**
 * View -> qq container : div header footer
 * Text -> qq texto  : h1 h2 p span
 * display flex é o padrão
 * camel case ao invés de - 
 * não existe herança de estilos
*/

export default function App() {
  return (
    <Routes />
  );
}

