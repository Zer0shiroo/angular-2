import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Definir los valores
  valor1: number = 1;
  valor2: number = 2;
  valor3: number = 3;

  // Resultado para mostrar
  resultado: string = '';

  // Método para cambiar los valores o hacer alguna acción al hacer click en "Tirar"
  tirar() {
    // Lógica que quieras implementar, por ejemplo, generar números aleatorios
    this.valor1 = Math.floor(Math.random() * 6) + 1; // Genera un valor aleatorio entre 1 y 6
    this.valor2 = Math.floor(Math.random() * 6) + 1;
    this.valor3 = Math.floor(Math.random() * 6) + 1;

    // Aquí podrías almacenar el resultado de la acción
    this.resultado = `Valores: ${this.valor1}, ${this.valor2}, ${this.valor3}`;
  }
}
