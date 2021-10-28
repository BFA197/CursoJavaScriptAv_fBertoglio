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
