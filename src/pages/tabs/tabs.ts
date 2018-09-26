import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
/*se importa la clase del la pagina creada*/
import { NosotrosPage } from '../nosotros/nosotros';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  /*se agrega en esta clase*/
  tab4Root = NosotrosPage;

  constructor() {

  }
}
