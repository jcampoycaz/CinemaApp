import { Component, signal, OnInit, OnDestroy } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-hero',
  styleUrl: './hero.css',
  templateUrl: './hero.html',
})
export class Hero implements OnInit, OnDestroy {

  movies = [
    {
      title: 'Bola Negra',
      image: '/movieimg/hero-banner-bola-negra.jpg',
      description: 'Descripción de bola negra.'
    },
    {
      title: 'Resident Evil',
      image: '/movieimg/hero-banner-resident-evil.jpg',
      description: 'Descripción de Resident Evil.'
    },
    {
      title: 'Street Fighter',
      image: '/movieimg/hero-banner-street-fighter.jpg',
      description: 'Descripción de Street Fighter.'
    }
  ];

  currentMovie = signal(0);

  private autoPlayInterval!: ReturnType<typeof setInterval>;

  ngOnInit() {
    this.autoPlayInterval = setInterval(() => {
      this.nextMovie();
    }, 8000);
  }

  ngOnDestroy() {
    clearInterval(this.autoPlayInterval);
  }

  nextMovie() {
    this.currentMovie.update(current => {
      const next = current + 1;

      return next >= this.movies.length ? 0 : next;
    });
  }

  previousMovie() {
    this.currentMovie.update(current => {
      const previous = current - 1;

      return previous < 0 ? this.movies.length - 1 : previous;
    });
  }
}