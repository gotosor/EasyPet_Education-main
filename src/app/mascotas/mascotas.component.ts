import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mascotas',
  templateUrl: './mascotas.component.html',
  styleUrls: ['./mascotas.component.scss'],
})
export class MascotasComponent implements OnInit {
  data: any[] = [
    {
      id: 1,
      nombre: 'Tortuga',
      imagenCmb: '/assets/fotos/tortuga/1.png',
      imagenAli: '/assets/fotos/tortuga/2.png',
      imagenHig: '/assets/fotos/tortuga/3.png',
      imagenAmb: '/assets/fotos/tortuga/4.png',
      imagenRep: '/assets/fotos/tortuga/5.png',
      textoAli: 'Prueba Tortuga PARA QUE PUEDAN VER',
      textoHig: 'Prueba Tortuga',
      textoAmb: 'Prueba Tortuga',
      textoRep: 'Prueba Tortuga',
      videoIzq: '/assets/video/videoIndex.mp4',
      videoCent: '/assets/video/videoIndex.mp4',
      videoDere: '/assets/video/videoIndex.mp4',
    },
    {
      id: 2,
      nombre: 'Hurón',
      imagenCmb: '/assets/fotos/huron/1.jpg',
      imagenAli: '/assets/fotos/huron/2.webp',
      imagenHig: '/assets/fotos/huron/3.jpg',
      imagenAmb: '/assets/fotos/huron/4.png',
      imagenRep: '/assets/fotos/huron/5.png',
      textoAli: 'Prueba Hurón',
      textoHig: 'Prueba Hurón',
      textoAmb: 'Prueba Hurón',
      textoRep: 'Prueba Hurón',
      videoIzq: '/assets/video/videoIndex.mp4',
      videoCent: '/assets/video/videoIndex.mp4',
      videoDere: '/assets/video/videoIndex.mp4',
    },
    {
      id: 3,
      nombre: 'Erizo',
      imagenCmb: '/assets/fotos/erizo/1.jpg',
      imagenAli: '/assets/fotos/erizo/2.jpg',
      imagenHig: '/assets/fotos/erizo/3.jpg',
      imagenAmb: '/assets/fotos/erizo/4.png',
      imagenRep: '/assets/fotos/erizo/5.jfif',
      textoAli: 'Prueba Erizo',
      textoHig: 'Prueba Erizo',
      textoAmb: 'Prueba Erizo',
      textoRep: 'Prueba Erizo',
      videoIzq: '/assets/video/videoIndex.mp4',
      videoCent: '/assets/video/videoIndex.mp4',
      videoDere: '/assets/video/videoIndex.mp4',
    },
    {
      id: 4,
      nombre: 'Serpiente',
      imagenCmb: '/assets/fotos/serpiente/1.jpg',
      imagenAli: '/assets/fotos/serpiente/2.jpg',
      imagenHig: '/assets/fotos/serpiente/3.jpg',
      imagenAmb: '/assets/fotos/serpiente/4.jpg',
      imagenRep: '/assets/fotos/serpiente/5.jpg',
      textoAli: 'Prueba Serpiente',
      textoHig: 'Prueba Serpiente',
      textoAmb: 'Prueba Serpiente',
      textoRep: 'Prueba Serpiente',
      videoIzq: '/assets/video/videoIndex.mp4',
      videoCent: '/assets/video/videoIndex.mp4',
      videoDere: '/assets/video/videoIndex.mp4',
    },
    {
      id: 5,
      nombre: 'Conejo',
      imagenCmb: '/assets/fotos/conejo/1.jpg',
      imagenAli: '/assets/fotos/conejo/2.jpg',
      imagenHig: '/assets/fotos/conejo/3.jpg',
      imagenAmb: '/assets/fotos/conejo/4.jpg',
      imagenRep: '/assets/fotos/conejo/5.jpg',
      textoAli: 'Prueba Conejo',
      textoHig: 'Prueba Conejo',
      textoAmb: 'Prueba Conejo',
      textoRep: 'Prueba Conejo',
      videoIzq: '/assets/video/videoIndex.mp4',
      videoCent: '/assets/video/videoIndex.mp4',
      videoDere: '/assets/video/videoIndex.mp4',
    },
  ];
  seleccion: any = this.data[0];
  constructor() {}

  ngOnInit(): void {}
  cambiarTipo(event: any) {
    this.seleccion = this.data.filter(
      (element) => element.id == event.target.value
    )[0];
    console.log(this.seleccion);
  }
}
