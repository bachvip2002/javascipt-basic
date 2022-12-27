
function set(){
	//lấy danh sách các thẻ tr ở phần tbody
	var list_tr=document.querySelectorAll("table tbody tr");
	//duyet danh sách và chọn thẻ input là checkbox trong các tr
	for(var i=0;i<list_tr.length;i++){
		var the_tr=list_tr[i];
		the_tr.style.display="table-row";



		//chọn tiếp thẻ nhập số lượng để gán thuộc tính onchange
		var txt_number=the_tr.querySelector("input[type=number]");
		txt_number.setAttribute("onchange","thanhtien(this)");
	}

}
set();
function mucgia(objSelect){
	var tr=document.querySelectorAll("table tbody tr");
	console.log(tr);
	switch(objSelect.value){
		case "0":
		for(var i=0;i<tr.length;i++){
				tr[i].style.display = "table-row";
			}
		break;
		
		case "1":
		for(var i=0;i<tr.length;i++){
			var td=tr[i].children[2].innerHTML;
			if(Number(td)<100){
				tr[i].style.display = "table-row";
			}else{
				tr[i].style.display = "none";
			}
		}
		break;

		case "2":
		for(var i=0;i<tr.length;i++){
			var td=tr[i].children[2].innerHTML;
			if(Number(td)>100 && Number(td)<500){
				tr[i].style.display = "table-row";
			}else{
				tr[i].style.display = "none";
			}
		}
		break;
		case "3":
		for(var i=0;i<tr.length;i++){
			var td=tr[i].children[2].innerHTML;
			if(Number(td)>500){
				tr[i].style.display = "table-row";
			}else{
				tr[i].style.display = "none";
			}
		}
		break;

		default: 
		for(var i=0;i<tr.length;i++){
				tr[i].style.display = "table-row";
			}
		break;
	}
}

function checkAll(objCheckbox)
{
	var kt = objCheckbox.checked;
	//
	var list_tr = document.querySelectorAll("table tbody tr");

	for(var i=0;i<list_tr.length;i++)
	{
		var tr = list_tr[i];
		var check = tr.querySelector("input[type=checkbox");
		check.checked = kt;

		var number = tr.querySelector("input[type=number]");
		number.disabled = !kt?true:false;
	}
}

 function thanhtien(objNumber){
	var soLuong=objNumber.value;
	var td_dongia =objNumber.parentElement.previousElementSibling.innerHTML;
	var td_thanh_tien =objNumber.parentElement.nextElementSibling;
	var tong_thanh_tien=Number(td_dongia)*soLuong;

	td_thanh_tien.innerHTML=tong_thanh_tien;
	TongTien();

}
function TongTien(){
	var list_tr=document.querySelectorAll("table tbody tr");
	var tong_tien=0;
	for(var i=0;i<list_tr.length;i++){
		var the_tr=list_tr[i];
		if(the_tr.style.display="table-row"){
			var the_th=the_tr.lastElementChild.innerHTML;
			console.log(the_th);
			tong_tien=tong_tien+Number(the_th);
		}

		document.getElementById("tongtien").innerHTML=tong_tien;
	}
}

function checkbox(objCheckbox)
{
	var the_tr=objCheckbox.parentElement.parentElement;
	var kt_true=objCheckbox.checked;
	var txt_number=the_tr.querySelector("input[type=number]");
	txt_number.disabled = !kt_true ? true : false;
}
