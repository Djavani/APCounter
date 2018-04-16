import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { CounterPage } from '../counter/counter';
import { ConfigPage } from '../config/config';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = CounterPage;
  tab3Root = ConfigPage;

  constructor() {

  }
}
