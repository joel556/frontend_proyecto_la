import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoriaService } from 'src/app/core/services/categoria.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss'],
})
export class CategoriaComponent {
  categoria_id: number = -1;
  categorias: any = [];

  categoriaForm = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    detalle: new FormControl(''),
  });

  displayModalCategoria: boolean = false;

  constructor(private categoriaService: CategoriaService) {}

  ngOnInit(): void {
    this.listaCategorias();
  }
  listaCategorias() {
    this.categoriaService.listarCategorias().subscribe(
      (res: any) => {
        this.categorias = res;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  enviarCategoria() {
    if (this.categoria_id == -1) {
      this.categoriaService
        .guardarCategorias(this.categoriaForm.value)
        .subscribe(
          (res: any) => {
            this.listaCategorias();
          },
          (error: any) => {
            console.log(error);
          }
        );
    } else {
      this.categoriaService
        .modificarCategorias(this.categoria_id, this.categoriaForm.value)
        .subscribe(
          (res: any) => {
            this.categoria_id = -1;

            this.listaCategorias();
          },
          (error: any) => {
            console.log(error);
          }
        );
    }
  }

  editarCategoria(categoria: any) {
    this.categoria_id = categoria.id;
    this.categoriaForm = new FormGroup({
      nombre: new FormControl(categoria.categoria, [Validators.required]),
      detalle: new FormControl(categoria.detalle),
    });
  }
  eliminarCategoria(categoria: any) {}

  showModalDialogCategoria() {
    this.displayModalCategoria = true;
  }
}
