function *fib() {
 let ant = 0;
 let act = 1;
 let ret = 0;
 yield ret++;
 yield ret;
 while (true){
   ret = act + ant;
   ant = act;
   act = ret;
   yield ret;
 }
}
