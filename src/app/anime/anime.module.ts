import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimeListarComponent } from './anime-listar/anime-listar.component';
import { AnimeDetailComponent } from './anime-detail/anime-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AnimeListarComponent, AnimeDetailComponent],
  exports: [AnimeListarComponent]
})
export class AnimeModule { }
