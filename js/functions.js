$(document).ready(function(){

$('#sendfeedback').click(function(e){
	var user = $("#user").val();
	var number = $("#number").val();
	var email = $("#email").val();
	var comment = $("#comment").val();
	if(comment!=''){
        $.ajax({
           url: "/ajaxMail.php",
           type: "POST",
           data: "ajaxItem=1&user="+user+"&number="+number+"&email="+email+"&comment="+comment,
           success: function(data){
            if(data==1){
            	$(".feedbform").html("<p>თქვენი შეტყობინება მიღებულია, ჩვენ მალე დაგიკავშირდებით</p>");
            }
            else { $(".feedbform").html("<p>თქვენი შეტყობინება ვერ გაიგზავნა</p>"); }
           }
        });
     }
});


$('#number').keydown(function(e){
	var p = this.value.toString().replace("\+995","");
	if(this.value.length <= 15){
		if(e.keyCode !== 8)
		{
			if(p.length == 4 || p.length == 8){
				$(this).val('+995 ' + this.value.replace("+995 ","") + " ");
			}
			else {
				$(this).val('+995 ' + this.value.replace("+995 ",""));
			}
		}
	}
	else {
		if(e.keyCode !== 8)
		{
			return false;
		}
	}
});

$("#user").keypress(restrictNums);

$('#number').keypress(restrictChars);


$("input[name=fname]").keypress(restrictNums);
$("input[name=head]").keypress(restrictNums);
$("input[name=mobile]").keypress(restrictChars);

$("#gagrzeleba").click(function(){
	var companyname = $("input[name=companyname]").val();
	var adress = $("input[name=adress]").val();
	var fname = $("input[name=fname]").val();
	var bank = $("input[name=bank]").val();
	var sid = $("input[name=sid]").val();
	var head = $("input[name=head]").val();
	var mobile = $("input[name=mobile]").val();
	var bamldetail = $("input[name=bamldetail]").val();

	if(document.getElementById('check').checked){
		if(companyname!='' && fname!='' && mobile!=''){
			$(".gilakebi1").hide();
			$(".gilakebi2").show();
		$(".damalinebuli").show();
		$("#danigozebuli").hide();
		}else {

			if(companyname==''){ $("input[name=companyname]").css('border','1px solid red'); }
			if(fname==''){ $("input[name=fname]").css('border','1px solid red'); }
			if(mobile==''){ $("input[name=mobile]").css('border','1px solid red'); }
		}
	}
	else
	{
	}
	

	

	$(".damalinebuli .companyname").html(companyname);
	$(".damalinebuli .adress").html(adress);
	$(".damalinebuli .fname").html(fname);
	$(".damalinebuli .bank").html(bank);
	$(".damalinebuli .sid").html(sid);
	$(".damalinebuli .head").html(head);
	$(".damalinebuli .mobile").html(mobile);
	$(".damalinebuli .bamldetail").html(bamldetail);
	return false;
});

$("#ukan").click(function(){
	$(".gilakebi1").show();

	$(".gilakebi2").hide();

	$(".damalinebuli").hide();
	$("#danigozebuli").show();
});

$("a#submit").click(function(){
	var checked = document.getElementById("check").checked;
	if(checked)
	{
		$("form#orderForm").submit();
	}
	else
	{
		return false;
	}
});

for(i in history){
//	console.log(i);
}

$("div.menu ul li a").click(function(){
	var url = '/page' + this.hash.replace("#","") + '.php';
	console.log(url);
	history.pushState('', '', 'http://livechat.ge' + this.hash.replace("#",""));
	$("div.menu ul li").removeClass("active");
	$(this).parent().addClass('active');
	$.ajax({
		url: url
	}).done(function(result){
		var html = $(result).find("div.mimoxilva").html();
		$("div.mimoxilva").html(html);
	});
	return false;
});

$("nav a").click(function(){
	var name = "a[name=" + this.hash.replace("#","") + "]";
	$("html, body").animate({scrollTop: $(name).offset().top},1000);
	return false;
});


function restrictChars(e){
  if(e.keyCode != 8 && e.keyCode != 9 && e.keyCode != 46 && String.fromCharCode(e.charCode).search(/[0-9]/) == -1)
  {
    return false;
  }
}

function restrictNums(e){
  if(e.keyCode != 8 && e.keyCode != 32 && e.keyCode != 9 && e.keyCode != 46 && String.fromCharCode(e.charCode).search(/[a-z,A-Z,ა-ჰ]/) == -1)
  {
    return false;
  }
}

});
