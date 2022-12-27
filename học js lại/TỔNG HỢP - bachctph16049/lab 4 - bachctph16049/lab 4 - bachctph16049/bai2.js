function sinhvien(ht, d){
    this.hoten=ht;
    this.diem=d;
    this.hocluc = function(){
        var kq;
        if (this.diem > 5){
            kq = "đậu"
        }else{
            kq = "Rớt"
        }
        return kq
    }
    this.xuat=function(){
        document.write(`${this.hoten} có điểm là ${this.diem} có học lực là ${this.hocluc()}<br>`)
    }
}
//var sv1=new sinhvien("Nguyen Van A", 9)
sinhvien["sv1"]=new sinhvien("Nguyễn Anh", 7)
sinhvien["sv2"]=new sinhvien("Lê Hoa", 3)
sinhvien["sv3"]=new sinhvien("Quang Huy", 9)
for(var x in sinhvien){
    sinhvien[x].xuat();
}
/*sv1.xuat();
sv2.xuat();
sv3.xuat();*/