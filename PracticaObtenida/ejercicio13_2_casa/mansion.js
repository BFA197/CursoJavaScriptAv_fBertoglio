class House {
 constructor( address) {
 this.address = address;
 }
}
class Mansion extends House {
 constructor( address, floors ) {
 super( address );
 this.floors = floors;
 }
}
