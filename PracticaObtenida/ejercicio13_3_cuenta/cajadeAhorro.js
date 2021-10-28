class Cuenta {
 constructor( numero, saldo) {
 this.num = numero;
 this.sal = saldo;
 }
 acreditar(numero){
   this.sal = numero + this.sal;
 }
 debitar(numero){
   this.sal = numero + this.sal;
 }
}
class CajaDeAhorro extends Cuenta {
 constructor( numero, saldo, interes) {
 super( numero, saldo );
 this.interes = interes;
 }
 debitar(numero){
   this.sal += numero ;
   this.interes += numero * 0.1;
 }
}
