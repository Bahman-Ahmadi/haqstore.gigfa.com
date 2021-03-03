$('.navbar').on('click', 'a[href^="#"]', function (event) {

    event.preventDefault();


    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});

var repeatTime = 0;
async function goto() {
  if (++repeatTime == 1) {
    lastSource = document.getElementById("program").innerHTML;
  }
  document.getElementById("program"). innerHTML = lastSource;
  document.getElementById("program"). innerHTML += "<a href='index.html#h-"+document.getElementById("req").value+"' id='haqLink'>haq link</a>";
  document.getElementById("haqLink").click();
  
   if(document.URL.split("#").length > 1) {
          
      var requestedObject = document.getElementById(document.URL.split("#")[1]);
            
      var oldSource = document.getElementById("program").innerHTML;
            
        if (requestedObject === null) {
           document.getElementById("program").innerHTML = '<div class="alert btn-outline-dark" style=" border-color: #212121; border-radius: 8px; font-family: iransans;"><center><p><b class="text-danger" style="font-size: 20px;">اوه</b><br>حق موردنظر شما پیدا نشد</p><img src="https://cdn.dribbble.com/users/464652/screenshots/1366618/sheep.gif" alt="this slowpoke moves"  width="250"/><a href="index.html"><button class="btn text-danger" style="margin-top: 20px; border-radius: 50px; background-color: white;">بازگشت به خانه</button></a></center></div>';
          
          
          }else {
           document.getElementById('program').innerHTML = "<div>"+requestedObject.innerHTML+"</div><br/><a href='index.html'><button class='btn btn-warning' style='width: 100%; border-radius: 50px;'>بازگشت به لیست</button></a>" ;
          }
     }
}
function LoadFile(slicingCriteria) {
 
    function reverse(s){return s.split("").reverse().join("");}
    
    var oFrame = document.getElementById("frmFile");
    var strRawContents = oFrame.contentWindow.document.body.childNodes[0].innerHTML;
    while (strRawContents.indexOf("\r") >= 0)
        strRawContents = strRawContents.replace("\r", "");
    var arrLines = strRawContents.split(slicingCriteria);
    var lines = []
    for(var each=0;each<arrLines.length-1;each++){
      lines.push(arrLines[each])
    }
    for (var i = 0; i < lines.length; i++) {
        var curLine = lines[i].split(":");
        
        
        
        var showHaqs = document.getElementById("program");
        
        var name = curLine[0]
        var message = curLine[1]
        var tag = "#"+curLine[2]
        var date = curLine[3]
        try {
          var format = reverse(reverse(message.split("?")[0])[0]+reverse(message.split("?")[0])[1]+reverse(message.split("?")[0])[2])
        } catch (e) {}
        var tamplate = "txt";
        var code;

        if (format == "png" || format == "jpg" || format == "jpeg" || format == "gif") {
  tamplate = "pic"
        }else if(format == "mp4" || format == "mkv" || format == "m4v" || format == "wmv" || format == "mpeg"){
          tamplate = "vid"
        }else {
  tamplate = "txt"
}

        if (tamplate == "pic") {
          code = '<div id="h-'+(i+1)+'"><div class="haq-item col-xs-12 col-sm-12 col-md-12 col-lg-12"><div class="item-header raw" ><center><img src="./Asset/user.png" alt="profile" width="50" height="50"/><h4 class="username">'+name+'</h4></center></div><br><div class="item-content" style="direction: rtl; text-align: right;"><center><div class="iov"><img class="picture" src="'+message.split("?")[0]+'" width="300" alt="haqData" style="border-radius: 10px;"/><br/><br/><strong class="text-white" id="caption">'+message.split("?")[1]+'</strong></div></center></div><br><div class="item-footer"><button class="btn btn-warning tag" style="text-align: left; direction: ltr;">'+tag+'</button><button class="btn btn-warning date">'+date+'</button></div></div></div>';
        }else if (tamplate == "vid") {
          code = '<div id="h-'+(i+1)+'"><div class="haq-item col-xs-12 col-sm-12 col-md-12 col-lg-12"><div class="item-header raw" ><center><img src="./Asset/user.png" alt="profile" width="50" height="50"/><h4 class="username">'+name+'</h4></center></div><br><div class="item-content" style="direction: rtl; text-align: right;"><center><div class="iov"><video width="300" controls><source src="'+message.split("?")[0]+'" type="video/mp4"><source src="'+message.split("?")[0]+'" type="video/mp4">Your browser does not support HTML video. use last version of Google Chrome or Mozilla Firefox!</video><br/><br/><strong class="text-white" id="caption">'+message.split("?")[1]+'</strong></div></center></div><br><div class="item-footer"><button class="btn btn-warning tag" style="text-align: left; direction: ltr;">'+tag+'</button><button class="btn btn-warning date">'+date+'</button></div></div></div>';
        }else {
          code = '<div id="h-'+(i+1)+'"><div class="haq-item col-xs-12 col-sm-12 col-md-12 col-lg-12"><div class="item-header raw" ><center><img src="./Asset/user.png" alt="profile" width="50" height="50"/><h4 class="username">'+name+'</h4></center></div><br><div class="item-content" style="direction: rtl; text-align: right;"><p class="haq-content">'+message+'</p></div><br><div class="item-footer"><button class="btn btn-warning tag" style="text-align: left; direction: ltr;">'+tag+'</button><button class="btn btn-warning date">'+date+'</button></div></div></div>';
    }
    showHaqs.innerHTML += code;
  }
}
function sleep(ms) {
 return new Promise(resolve => setTimeout(resolve,ms));
 }
