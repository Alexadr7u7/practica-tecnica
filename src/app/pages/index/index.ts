import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { Hero } from '../../sections/hero/hero';
import { Content } from '../../sections/content/content';
import { Carrusel } from '../../sections/carrusel/carrusel';
import { CtaSection } from '../../sections/cta-section/cta-section';
import { Projects } from '../../sections/projects/projects';
import { Contact } from '../../sections/contact/contact';
@Component({
  selector: 'app-index',
  imports: [
    CarouselModule,
    ButtonModule,
    TagModule,
    CommonModule,
    Hero,
    Content,
    Carrusel,
    CtaSection,
    Projects,
    Contact,
  ],
  templateUrl: './index.html',
  styleUrl: './index.css',
})
export class Index {
  planes = [
    {
      nombre: 'BÁSICO',
      precio: 250,
      megas: 10,
      dispositivos: '4-6 dispositivos',
      pago: 'al mes',
    },
    {
      nombre: 'INTERMEDIO',
      precio: 270,
      megas: 15,
      dispositivos: '6-8 dispositivos',
      pago: 'al mes',
    },

    {
      nombre: 'ALTO',
      precio: 320,
      megas: 20,
      dispositivos: '9-12 dispositivos',
      pago: 'al mes',
    },
    {
      nombre: 'BÁSICO',
      precio: 1300,
      megas: 10,
      dispositivos: '10-15 dispositivos',
      pago: 'cada 6 meses',
      promocion: true,
    },
    {
      nombre: 'INTERMEDIO',
      precio: 1500,
      megas: 15,
      dispositivos: '15-20 dispositivos',
      pago: 'cada 6 meses',
      promocion: true,
    },
    {
      nombre: 'ALTO',
      precio: 2300,
      megas: 20,
      dispositivos: '7-9 dispositivos',
      pago: 'cada 6 meses',
      promocion: true,
    },
    {
      nombre: 'BÁSICO',
      precio: 2300,
      megas: 10,
      dispositivos: '10-15 dispositivos',
      pago: 'al año',

      promocion: true,
    },
    {
      nombre: 'INTERMEDIO',
      precio: 2500,
      megas: 15,
      dispositivos: '15-20 dispositivos',
      pago: 'al año',

      promocion: true,
    },
    {
      nombre: 'ALTO',
      precio: 3200,
      megas: 20,
      dispositivos: '7-9 dispositivos',
      pago: 'al año',
      promocion: true,
    },
  ];
  responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 3,
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 2,
    },
    {
      breakpoint: '560px',
      numVisible: 1.1,
      numScroll: 1,
    },
  ];
}
