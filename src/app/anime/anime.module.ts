import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimeListarComponent } from './anime-listar/anime-listar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AnimeListarComponent],
  exports: [AnimeListarComponent]
})
export class AnimeModule { }
