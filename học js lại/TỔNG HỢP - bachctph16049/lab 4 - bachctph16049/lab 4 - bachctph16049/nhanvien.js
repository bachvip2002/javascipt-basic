function nhanvien(ht,manv,luong,thuong){
    this.hoten =  ht;
    this.maNv =  manv;
    this.luongnv =  luong;
    this.thuongnv =  thuong;
    var thunhap = luong + thuong; 
    this.thue = function(){
       var tn
        if(thunhap<=9000000){
            tn = "không đóng thuế";
        }
        else if(thunhap<=15000000){
            tn = "thuế 10%";
        }
        else{
            tn = " thuế 15%";
        }
        return tn;
    }
    this.xuat = function(){
        document.write(`<h3>${this.hoten} có mã nhân viên ${this.maNv} có lương: ${this.luongnv} có thưởng ${this.thuongnv}  có ${this.thue()}</h3>`)
    }
}

nhanvien["m1"] = new nhanvien("Hoàng Trung Kiên","PH16079",24082000,888);
nhanvien["m2"] = new nhanvien("Lê Đức Thịnh","PH16448",10112002,222);
nhanvien["m3"] = new nhanvien("Hoàng Văn toàn","PH16868",15112002,666);
for(var x in nhanvien){
    nhanvien[x].xuat()
}