 //chuoi
 var a = "bach";
 var b = "chu";
 console.log(a+' '+b);
 console.log(`${a} ${b}`);
 //boolean
 var a = true;
 console.log(a);
 var a = 3;
 var b = 4;
 var c = a > b;
 console.log(c);


 console.log(isNaN(a)); 
 console.log(typeof(a));
 console.log(a.toString());  
 
 var c = 3.12;
 console.log(c.toFixed());  

 var a = '    bachdeptraid  ';
 //length
 console.log(a.length);

 if(b == a.trim().length){
     console.log('true');
 }

 //indexOf tim chuoi theo thu tu bao nhieu

 if(a.indexOf('d') < 0){
     console.log(`Khong tim thay ban ${a}`); 
 }else{
     console.log(`tim thay ban ${a}`); 
 }

 console.log(a.lastIndexOf('d'));

 var cat_chuoi = `xoai,chuoi,tao`;
 console.log(cat_chuoi.split(","));//giong ham explone trong php
 console.log(cat_chuoi.split(""));

 console.log(cat_chuoi.charAt("2"));// tim vi tri so 2 trog chuoi
