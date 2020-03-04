import { Artigo } from './../model/artigo';
import { ArtigoService } from './../artigo/artigo.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-artigodetail',
  templateUrl: './artigodetail.page.html',
  styleUrls: ['./artigodetail.page.scss'],
})
export class ArtigodetailPage implements OnInit {
  artigo: Artigo = new Artigo();
  constructor(private route: ActivatedRoute,
              private router: Router,
              private sartigos: ArtigoService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id){
      this.artigo = this.sartigos.getById(parseInt(id));

    }
  }

}
