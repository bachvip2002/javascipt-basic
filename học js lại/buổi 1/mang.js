var a = new Array(
    'javascript',
    'php',
    'html css',
    null,
    NaN,
    undefined,
    function(){
        return 3;
    }
);
var b = {
    1:3,
    b:"okee",
    'c':"dcmm"
}
console.log( b);
console.log(a);

console.log(typeof(a)); //bi trung khi mang kiem tra la object

console.log(Array.isArray(a)); //goi doi tuong array de su dung ham kiem tra co phai la array khong

console.log(Array.isArray(b)); //vi day k phai array nen false 

var cat_chuoi = new Array(
    'javascript',
    'php',
    'java'
);
console.log(cat_chuoi.join(' '))

console.log(cat_chuoi.push('deptrai','galang')); //them phan tu vao mang
console.log(cat_chuoi.unshift('c#','python')); //them nhieu phan tu dau dau mang

console.log(cat_chuoi.splice(4,0,'thay java')); //start phan tu , xoa phan tu neu 0 thi k xoa , chen phan tu

console.log(cat_chuoi.shift()); //xoa phan tu dau mang
console.log(cat_chuoi);

