var kytuemail =  /\S+@\S+\.\S+/;

function kiemtra(){
    //nhập thông tin 
    var manhap = document.getElementById("manhap");
    var hoten = document.getElementById("hoten");
    var email = document.getElementById("email");
    var error = document.querySelectorAll('#error');
    console.log(error)    
    if(manhap.value.length <= 5){
        error[0].innerHTML = 'mã sinh viên bạn nhập ít hơn 5 ký tự';
        error[0].style.color ='red';
    }else{
        error[0].innerHTML =''
    }
    if(hoten.value.length <= 5){
        error[1].innerHTML = 'họ tên sinh viên bạn nhập ít hơn 5 ký tự';
        error[1].style.color ='red';
    }else{
        error[1].innerHTML =''
    }
    if(email.value.length == 0 && !kytuemail.test(email.value)){
        error[2].innerHTML = 'vui lòng nhập email và đúng ký tự';
        error[2].style.color = 'red';
    }
    else{
        error[2].innerHTML = '';
    }
    // giới tính 
    var nam = document.querySelector("#nam");
    var nu = document.querySelector("#nu");
    if(nam.checked != true && nu.checked != true){
        error[3].innerHTML = 'mời bạn chọn giới tính';
        error[3].style.color = 'red'
    }else if(nam.checked){
        error[3].innerHTML = '';
    }else if(nu.checked){
        error[3].innerHTML = '';
    }
    //sở thích
    var kt = 0;
    var sothich = document.querySelectorAll("#sothich");
	for(var i=0;i<sothich.length;i++){
		if(sothich[i].checked == true){
            kt++;
		}
	}
    if(kt == 0){
        error[4].style.color = 'red'
        error[4].innerHTML="Bạn phải chọn ít nhất một sở thích!";
    }else{
        error[4].innerHTML="";
    }

    //quốc tịch
    var quoctich = document.querySelector("#quoctich").value;
    if(quoctich == 0){
        error[5].style.color = 'red';
        error[5].innerHTML = 'bạn phải chọn quốc tịch';
    }else{
        error[5].innerHTML = '';
    }
    //ghi chú
    var ghichu = document.querySelector("#ghichu");
    if(ghichu.value.length == 0){
        error[6].innerHTML = 'bạn chưa viết ghi chú'
        error[6].style.color ='red';
    }else{
        error[6].innerHTML = '';
    }
}