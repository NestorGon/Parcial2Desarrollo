import { Component, OnInit } from '@angular/core';
import { Anime } from '../anime';
import { AnimeService } from '../anime.service';

@Component({
  selector: 'app-anime-listar',
  templateUrl: './anime-listar.component.html',
  styleUrls: ['./anime-listar.component.css']
})
export class AnimeListarComponent implements OnInit {

  animes: Array<Anime>;
  selected = false;
  selectedAnime: Anime;
  constructor(private animeService: AnimeService) { }

  ngOnInit() {
    this.getAnimes();
  }

  getAnimes(): void {
    this.animeService.getAnimes()
      .subscribe(animes => {
        this.animes = animes;
      });
  }

  onSelected(a: Anime): void {
    this.selected = true;
    this.selectedAnime = a;
  }
}
