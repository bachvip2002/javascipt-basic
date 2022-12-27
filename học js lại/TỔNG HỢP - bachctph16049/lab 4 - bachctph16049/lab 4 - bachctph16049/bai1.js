function GPTB2(tsa,tsb,tsc){
    this.a=tsa
    this.b=tsb
    this.c=tsc
    this.tinhDelta=function(){
        return this.b*this.b-4*this.a*this.c
    }
    this.tinhNghiem=function(){
        if(this.tinhDelta()<0){
            alert("vô nghiệm")
        }
        else if(this.tinhDelta()==0){
            var x=-this.b/2*this.a;
            alert("nghiệm kép "+x)
        }
        else{
            var x1=(-this.b+Math.sqrt(this.tinhDelta())) /2*this.a;
            var x2=(-this.b-Math.sqrt(this.tinhDelta())) /2*this.a;
            alert("2 nghiệm phân biệt : x1="+x1+" ; x2="+x2)
        }
    }
}
var dt = new GPTB2(-0,0,2);
       dt.tinhNghiem();