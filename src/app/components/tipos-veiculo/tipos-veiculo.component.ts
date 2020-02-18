import { Component, OnInit } from "@angular/core";
import { Marcas } from "../../models/marcas";
import { Resultado } from "../../models/resultado"
import { MarcaService } from "../../services/marca.service";

@Component({
  selector: 'app-tipos-veiculo',
  templateUrl: './tipos-veiculo.component.html',
  styleUrls: ['./tipos-veiculo.component.scss']
})
export class TiposVeiculoComponent implements OnInit {

  displayedColumns: string[] = ["name", "fipe_name", "order", "key", "id"];
  dataSourceMarcas: Marcas[] = [];
  dataSourceVeiculos: any[] = [];
  dataSourceModelos: any[] = [];
  tela: number;
  selectedMarca: number;
  selectedVeiculo: number;
  selectedModelo: number;
  dataResultado: Resultado;

  constructor(private marcaService: MarcaService) { }

  ngOnInit() {
    this.tela = 1;
    this.dataResultado = new Resultado();
  }

  listarTodasMarcas(tipoIndex: number) {
    this.marcaService.setUrlTipoVeiculoFipe(tipoIndex);
    this.marcaService.getList<Marcas>().subscribe(
      res => {
        this.dataSourceMarcas = res;
        console.log(this.dataSourceMarcas);
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
        console.log(this.dataSourceVeiculos);
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
        console.log(this.dataSourceModelos);
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
        this.dataResultado = res;
        console.log(this.dataResultado);
      },
      err => {
        console.log(err);
      }
    );
  }

  setTipoveiculo(tipoIndex: number) {
    this.listarTodasMarcas(tipoIndex);
    this.tela = 2;
  }
}
