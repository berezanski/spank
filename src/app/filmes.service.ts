import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmesService {
  private filmesCollection: AngularFirestoreCollection<Filme>;
   
  generos = [
    {descricao: 'Ação'},
    {descricao: 'Aventura'},
    {descricao: 'Terror'},
    {descricao: 'Suspense'},
    {descricao: 'Comédia'}
  ]

  constructor(private afs: AngularFirestore) {
    
  }
  public listar(status: string):Observable<Filme[]>{
    this.filmesCollection = this.afs.collection<Filme>('filmes', ref =>ref.where('status', '==',status));
    return this.filmesCollection.valueChanges();
  }

  public inserir(filme: Filme) {
    const id=this.afs.createId();
    return this.filmesCollection.doc(id).set({...filme,id});
  }

  public remover(filme: Filme){
    return this.filmesCollection.doc(filme.id).delete();
  }

  public assistir(filme: Filme) {
    return this.filmesCollection.doc(filme.id).update({status: 'assistido'});
  }

  public listarGeneros(): Array<Genero> {
    return this.generos;
  }
}

export class Filme {
  id: string;
  nome: string;
  genero: Genero;
  duracao: number;
  status: string;

  constructor(){
    this.status = 'pendente';
  }

}

export class Genero {
  descricao: string;
}
