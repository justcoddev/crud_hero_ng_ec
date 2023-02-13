import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HeroService } from 'src/app/services/hero.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Hero } from 'src/app/models/hero';

@Component({
  selector: 'app-create-hero',
  templateUrl: './create-hero.component.html',
  styleUrls: ['./create-hero.component.css']
})
export class CreateHeroComponent implements OnInit {


  heroForm: FormGroup;
  title = 'Nuevo Personaje';
  id: string | null;
  constructor(private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private _heroService: HeroService,
    private aRouter: ActivatedRoute) {
    this.heroForm = this.fb.group({
      codigo: ['', Validators.required],
      nombre: ['', Validators.required],
      ciudad: ['', Validators.required],
      poder: ['', Validators.required],
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }
  ngOnInit(): void {
    this.editHero();
  }
  addHero() {
    // console.log(this.heroForm);
    // console.log(this.heroForm.get('codigo')?.value);

    const HERO: Hero = {
      codigo: this.heroForm.get('codigo')?.value,
      nombre: this.heroForm.get('nombre')?.value,
      ciudad: this.heroForm.get('ciudad')?.value,
      poder: this.heroForm.get('poder')?.value
    }
    if (this.id !== null) {
      //editaos Heroe
      this._heroService.editarHero(this.id, HERO).subscribe(data => {
        this.toastr.success('El personaje se actualizo con éxito!', 'Heroe Actualizado!');
        this.router.navigate(['/']);
      }, error => {
        console.log(error);
        this.heroForm.reset();
      })
    } else {
      //Add Heroe
      console.log(HERO);
      this._heroService.createHero(HERO).subscribe(data => {
        this.toastr.success('El personaje fue registrado con éxito!', 'Heroe Registrado!');
        this.router.navigate(['/']);
      }, error => {
        console.log(error);
        this.heroForm.reset();
      })

    }

  }
  editHero() {

    if (this.id !== null) {
      this.title = 'Editar personaje';
      this._heroService.getHero(this.id).subscribe(data => {
        this.heroForm.setValue({
          codigo: data.codigo,
          nombre: data.nombre,
          ciudad: data.ciudad,
          poder: data.poder,
        })
      })
    }
  }

}
