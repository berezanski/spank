import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Filme, FilmesService } from '../filmes.service';
import { ThrowStmt } from '@angular/compiler';
import { Observable } from 'rxjs';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  filmes : Observable<Filme[]>
  status='pendente';
  constructor(
    public router: Router,
    private filmesService:FilmesService,
    private socialSharing: SocialSharing
  ) {}

  ionViewWillEnter(){
    this.listar();
  }

  assistir(filme){
    this.filmesService.assistir(filme);
    this.listar();
  }
  listar(){
    this.filmes=this.filmesService.listar(this.status);
  }

  compartilhar(filme:Filme){
    const mensagem=`Estou compartilhando o filme ${filme.nome} com você!`;
    this.socialSharing.share(mensagem, filme.nome)
    console.log(mensagem);
  }

  remover(filme){
    this.filmesService.remover(filme);
  }

  inserir() {
    this.router.navigate(["cadastro"]);
  }
  comeca() {
    this.router.navigate(["cadastro"]);
  }
}
