function logoChange() {
    document.body.classList.toggle("esb");
  } 

  $(document).ready(function(){
    var src1 = "svg/elchingen.svg";
    var src2 = "svg/esb.svg";
    $("#logo").click(function(){
       var src = $('#logo img').attr('src'); 
       if(src == src1){$('#logo img').attr('src',src2);}
       else{$('#logo img').attr('src',src1);}
    })});