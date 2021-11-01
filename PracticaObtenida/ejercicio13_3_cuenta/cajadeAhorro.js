class Cuenta {
 constructor( numero, saldo) {
 this.num = numero;
 this.sal = saldo;
 }
 acreditar(numero){
   this.sal = numero + this.sal;
 }
 debitar(numero){
   this.sal = numero - this.sal;
 }
 toString(){
   return  "<br/>numero: " + this.num + "<br/>saldo: " + this.sal;
 }
}
class CajaDeAhorro extends Cuenta {
 constructor( numero, saldo, interes) {
 super( numero, saldo );
 this.interes = interes;
 }
 debitar(numero ){
   if(numero <= this.sal) this.sal -= numero ;
 }
 toString(){
   return  "Caja de ahorro: " + super.toString() + "<br/>interes: " + this.interes ;
 }
}
