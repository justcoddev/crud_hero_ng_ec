import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/models/hero';
import { HeroService } from 'src/app/services/hero.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-hero',
  templateUrl: './update-hero.component.html',
  styleUrls: ['./update-hero.component.css']
})
export class UpdateHeroComponent implements OnInit {
  listHeroes: Hero[] = []

  constructor(private _heroService: HeroService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.obtenerHeroes();
  }

  obtenerHeroes() {
    this._heroService.readHero().subscribe(data => {
      console.log(data);
      this.listHeroes = data;

    }, error => {
      console.log(error);

    })
  }


  eliminarHeroes(id: any) {
    this._heroService.deleteHero(id).subscribe(data => {
      this.toastr.error('El heroe fue eliminado con exito', 'Heroe Eliminado');
      this.obtenerHeroes();
    }, error => {
      console.log(error);
    })
  }


}
