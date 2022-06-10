let n , x , sum;

n = 345;
sum = 0;

while(n>0){
    x = n % 10;
    sum = (sum*10) + x;
    n = n-x;
    n = (n/10);
   
}
console.log(+sum);