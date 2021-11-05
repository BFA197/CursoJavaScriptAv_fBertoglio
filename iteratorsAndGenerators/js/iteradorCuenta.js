function createIterator( obj ){
 let currentIndex = 0;
 return {
   next(){
     if (currentIndex < obj.length ){
          document.write(`<br/><br/>Cuenta: ${obj[ currentIndex++ ]}`);
          return obj[currentIndex];
  } else
          return false;
         }
        };
}
