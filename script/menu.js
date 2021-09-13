function nav_over(x){
   document.getElementById('navigation_over'+x).style.display="block";
   
}
function nav_out(x){
    document.getElementById('navigation_over'+x).style.display="none";
    
 }
function course_over(y) {
   var cho = document.getElementById('course_header_over'+y);
   if(cho.style.display=="block"){
     cho.style.display="none";
   }else{
     cho.style.display="block";
   }
   
}


 function cheng_btn(){
     var cheng = document.getElementById('header_btn');
     var sm_nav = document.getElementById('sm_nav');
     if(cheng.className=="fas fa-bars"){
         cheng.className="fa fa-times";
         sm_nav.style.display="flex";
     }else{
        cheng.className="fas fa-bars";
        sm_nav.style.display="none";
     }
     
     
 }

function course_m_btn(y) {
    var course_m_con = document.getElementById('course_menu_con'+y);
    if(course_m_con.style.display=="block"){
         course_m_con.style.display="none";
    }else{
        course_m_con.style.display="block";
    }
   
}

function menu_toggle(){
  var course_menu = document.getElementById('course_menu').style;
  var menu_open_btn = document.getElementById('menu_open_btn');
  if(course_menu.left=="0px"){
    course_menu.left="-250px";
    menu_open_btn.classList.remove('fa-times');
  }else{
    course_menu.left="0px";
    menu_open_btn.classList.add('fa-times');
  }

}