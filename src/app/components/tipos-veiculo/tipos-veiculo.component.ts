import { Component, OnInit } from "@angular/core";
import { Marcas } from "../../models/marcas";
import { Resultado } from "../../models/resultado"
import { MarcaService } from "../../services/marca.service";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tipos-veiculo',
  templateUrl: './tipos-veiculo.component.html',
  styleUrls: ['./tipos-veiculo.component.scss']
})
export class TiposVeiculoComponent implements OnInit {

  dataSourceMarcas: Marcas[] = [];
  dataSourceVeiculos: any[] = [];
  dataSourceModelos: any[] = [];
  tela: number;
  selectedMarca: number;
  selectedVeiculo: number;
  selectedModelo: number;
  dataSourceResultado: Resultado;


  constructor(private marcaService: MarcaService) { }

  ngOnInit() {
    this.tela = 1;
    this.dataSourceResultado = new Resultado();
  }

  listarTodasMarcas(tipoIndex: number) {
    this.marcaService.setUrlTipoVeiculoFipe(tipoIndex);
    this.marcaService.getList<Marcas>().subscribe(
      res => {
        this.dataSourceMarcas = res;
      },
      err => {
        console.log(err);
      }
    );
  }

  listarTodoVeiculos() {
    this.marcaService.setUrlVeiculoFipe(this.selectedMarca);
    this.marcaService.getList<any>().subscribe(
      res => {
        this.dataSourceVeiculos = res;
      },
      err => {
        console.log(err);
      }
    );
  }

  listarTodoModelos() {
    this.marcaService.setUrlModelosFipe(this.selectedMarca, this.selectedVeiculo);
    this.marcaService.getList<any>().subscribe(
      res => {
        this.dataSourceModelos = res;
      },
      err => {
        console.log(err);
      }
    );
  }

  ObterResultadoTabelaFipe() {
    this.marcaService.setUrlResultadoFipe(this.selectedMarca, this.selectedVeiculo, this.selectedModelo);
    this.marcaService.getObj<Resultado>().subscribe(
      res => {
        this.dataSourceResultado = res;
        console.log(this.dataSourceResultado);
      },
      err => {
        console.log(err);
      }
    );
  }

  setTipoVeiculo(tipoIndex: number) {
    this.listarTodasMarcas(tipoIndex);
    this.tela = 2;
  }

  clearButton() {
    this.selectedModelo = 0;
    this.selectedVeiculo = 0;
    this.selectedMarca = 0;
  }

  pesquisarButton() {
    if (this.selectedMarca == null || this.selectedVeiculo == null || this.selectedModelo == null) {
      Swal.fire(
        'Good job!',
        'You clicked the button!',
        'success'
      );
    } else {
      this.ObterResultadoTabelaFipe();
      this.tela = 3;
    }
  }
}
