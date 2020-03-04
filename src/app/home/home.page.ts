import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Artigo } from '../model/artigo';
import { ArtigoService } from '../artigo/artigo.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public artigos: [];

  constructor(private sartigos: ArtigoService, public router: Router) {
     this.artigos = this.sartigos.getAll();
  }  

  ionViewDidEnter() {
  }

  abrirArtigo(artigo: Artigo) {
    // this.navCtrl.push('ArtigodetailPage', { artigo: artigo });
    this.router.navigate(['/artigodetail', artigo.id]);
  }

}
