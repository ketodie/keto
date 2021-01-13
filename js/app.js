       var rhost = "https://usa.ketobalanced.com";
//console.log(window.location.href);
        if(rhost+'/male.html#part8' === window.location.href){
var formId= 'ketobalanced';
                var json =  window.localStorage.getItem(formId);
                var previousobj = JSON.parse(json);
var measurementff = previousobj['measurment'];
var wtype=measurementff['type'];
if(measurementff['age_1'] !=''){
var htypeGot = measurementff['htype'];
document.getElementById('age').value=measurementff['age_1'];
/*if(measurementff['email']!=''){
document.getElementById('mail-value').value=measurementff['email'];
}else {document.getElementById('mail-value').value ='';}*/
 
if(htypeGot ==='cm'){
document.getElementById('mtrcal_ht_value').value=Math.round(measurementff['height_1']*2.54);
document.getElementById('hg_rd').checked=true; 
} else if(htypeGot ==='feet') {

document.getElementById('feet').value=Math.floor(measurementff['height_1']/12);
document.getElementById('inch').value=Math.round(measurementff['height_1']%12);
document.getElementById('hg_rd1').checked=true; 
}
if(wtype =='kg'){
document.getElementById('mass-value1').value= Math.round(measurementff['weight_1']*0.453592);
document.getElementById('targetMass-value1').value= Math.round(measurementff['target_1']*0.453592);

document.getElementById('kg_ID').checked=true; 
}else if(wtype =='lb'){
document.getElementById('mass-value').value=measurementff['weight_1'];
document.getElementById('targetMass-value').value=measurementff['target_1'];
document.getElementById('lb_ID').checked=true; 

}
}
console.log(measurementff);

if(document.querySelectorAll("input[name=height]:checked")[0]!=undefined) { var heighlog = document.querySelectorAll("input[name=height]:checked")[0].value; console.log("measurecalled"+heighlog);

		$("div.msure_ht").hide();
        $("#msure_ht" + heighlog).show();
        //measurementdata('');
}
if(document.querySelectorAll("input[name=weight]:checked")[0] !=undefined) { var weightlog = document.querySelectorAll("input[name=weight]:checked")[0].value; console.log("measureweight"+weightlog);

		$("div.msure_wt").hide();
        $("#msure_wt" + weightlog).show();
        //measurementdata('');
}
        } 
 if(rhost+'/female.html#part8' === window.location.href){
var formId= 'ketobalanced';
                var json =  window.localStorage.getItem(formId);
                var previousobj = JSON.parse(json);
var measurementff = previousobj['measurment'];
var wtype=measurementff['type'];
var htypeGot = measurementff['htype'];
if(measurementff['age_1'] !=''){
document.getElementById('age').value=measurementff['age_1'];
//document.getElementById('mail-value').value=measurementff['email'];
 
if(htypeGot ==='cm'){
document.getElementById('mtrcal_ht_value').value=Math.round(measurementff['height_1']*2.54);
document.getElementById('hg_rd').checked=true; 
}else {

document.getElementById('feet').value=Math.floor(measurementff['height_1']/12);
document.getElementById('inch').value=Math.round(measurementff['height_1']%12);
document.getElementById('hg_rd1').checked=true; 
}
if(wtype =='kg'){
document.getElementById('mass-value1').value= Math.round(measurementff['weight_1']*0.453592);
document.getElementById('targetMass-value1').value= Math.round(measurementff['target_1']*0.453592);

document.getElementById('kg_ID').checked=true; 
}else{
document.getElementById('mass-value').value=measurementff['weight_1'];
document.getElementById('targetMass-value').value=measurementff['target_1'];
document.getElementById('lb_ID').checked=true; 

}
}
if(document.querySelectorAll("input[name=height]:checked")[0]!=undefined) { var heighlog = document.querySelectorAll("input[name=height]:checked")[0].value; console.log("measurecalled"+heighlog);

		$("div.msure_ht").hide();
        $("#msure_ht" + heighlog).show();
        //measurementdata('');
}
if(document.querySelectorAll("input[name=weight]:checked")[0] !=undefined) { var weightlog = document.querySelectorAll("input[name=weight]:checked")[0].value; console.log("measureweight"+weightlog);

		$("div.msure_wt").hide();
        $("#msure_wt" + weightlog).show();
        //measurementdata('');
}
        } 
       save('','');
if(window.location.href=="https://usa.ketobalanced.com/part1.html"){
phyactivy('');
}
if(window.location.href=="https://usa.ketobalanced.com/part3.html"){
meatvalidate('');
}
if(window.location.href=="https://usa.ketobalanced.com/part4.html"){
veggiescornerdata('');
}
if(window.location.href=="https://usa.ketobalanced.com/part5.html"){
productcornerdata('');
}
if(window.location.href=="https://usa.ketobalanced.com/part6.html"){
typicalday();
}
if(window.location.href=="https://usa.ketobalanced.com/part7.html"){
habitsdeta();
}
var isMobile = false; //initiate as false
// device detection
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
    isMobile = true;
}
        function Gnderfunct(el)
        {
	var formId= 'ketobalanced';
    var json =  window.localStorage.getItem(formId);
    var previousobj = JSON.parse(json);
    
     if(previousobj['basic']==undefined){
      localStorage.removeItem(formId); 
      save('','');
     }
        save('gender',el);
        }
        function phyact(pact)
        {
	console.log(document.getElementById('phyact_'+pact).innerHTML); 
        save('physical_activity',pact);  
		window.location.href = "part6.html";
        }
        function meatcorner(meat_tp)
        {
		 save('meat',meatvalidate(meat_tp));    
        }
        function veggiescorner(veg)
        {
        save('veggies',veggiescornerdata(veg));    
        }
        function productcorner(pd)
        {
        save('products',productcornerdata(pd));    
        }
        function everydayfn(ever)
        {
        save('typical_day',ever);
		window.location.href = "part7.html";		
        }
        function habits(hb)
        {
        save('habits',habitsdata(hb));        
        }
        function measurement(ms)
        {
        save('measurment',measurementdata(ms));        
        }
        function save(key,val) {
                var formId= 'ketobalanced';
                var json =  window.localStorage.getItem(formId);
                var previousobj = JSON.parse(json);
                var d=new Date();
		var timestamp=d.getFullYear()+"/"+("0"+(d.getMonth()+1)).slice(-2)+"/"+("0"+(d.getDate())).slice(-2)+" "+("0"+(d.getHours())).slice(-2)+":"+("0"+(d.getMinutes())).slice(-2)+":"+("0"+(d.getSeconds())).slice(-2)+"."+("0"+(d.getMilliseconds())).slice(-2);
		var object={
                        "gender":'',
                        "physical_activity": '', 
                        "meat": {"Chicken":'',"Pork":'',"Beef":'',"Fish":'',"seafood":'',"Lamb":'',"NoMeat":''},
                        "veggies": {"Broccoli":'',"Mushrooms":'',"Zucchini":'',"Cauliflower":'',"Asparagus":'',"Avocado":'',"Green_Beans":'',"Cabbage":'',"Spinach":'',"Lettuce":'',"Brussels_Sprouts":'',"Arugula":'',"Spring_Onions":'',"Bok_Choy":'',"Poblano_Pepper":'',"Radish":''},
                        "products": { "Egg":'',"Nuts":'',"Cheese":'',"Cottage Cheese":'',"Butter":'',"Coconut":'',"Tofu":'',"Eggplant":'',"Bell Pepper":'',"Olives":'',"Strawberry":''},
                        "typical_day":'',
                        "habits":{"i_do_not_get_quality_sleep":'',"i_eat_late_at_night":'',"my_salt_intake_is_more":'',"i_can_not_quit_eating_sweets":'',"i_like_soft_drinks":'',"none_of_the_above":'',"tt":''},
                        "basic": {"height":'',"age":'',"htype":'',"ft":'',"inch":''},
                        "measurment":{"type":'metric',"age_1":'',"height_1":'',"weight_1":'',"target_1":'',"age_2":'',"ft_2":'',"inch_2":'',"weight_2":'', "target_2":'',"bmr":'',"email":'',"htype":'',"ttype":''},
                        "timestamp": timestamp
                }
                if ( json==null || json=="null" || json=="[object Object]" ) {
                //empty
                }else{
                var objAre = ["gender", "physical_activity", "meat", "veggies", "products", "typical_day", "habits", "measurment","basic"];
                for(var t = 0; t < objAre.length; t++)
                {
                if(previousobj[objAre[t]]!='undefined')
                {
                if(key == objAre[t] && val!='')
                {
                object[objAre[t]]= val;
                }else{
                object[objAre[t]]= previousobj[objAre[t]];
                }
                }
                }
                }
                localStorage.setItem(formId, JSON.stringify(object));
	 }
	 
function basicmeasurement()

        {
        
		 var stbms = basicmeasure();
        if(stbms!=false){
        	 save('basic',stbms);  
    		 window.location.href = "part9.html";  }
        }

function basicmeasure(){ 
var basic=['height','age','htype','ft','inch'];
    var formId= 'ketobalanced';
    var json =  window.localStorage.getItem(formId);
    var previousobj = JSON.parse(json);
    var obj_basic = previousobj['basic'];
    var age_1= document.getElementById("age").value;
    var ft ='';
    var inch = '';

//var mes_chk = validation(); if(mes_chk===1) {return false;}
if(age_1==""){document.getElementById('err_popup1').innerHTML="Please Enter Your Age";return false;
}


if(age_1<18)
{document.getElementById('err_popup1').innerHTML="Please enter a value greater than or equal to 18";return false;}
document.getElementById('err_popup1').innerHTML= "";
if(document.querySelectorAll("input[name=height]:checked")[0]==undefined) {document.getElementById('warnpopup').innerHTML= "Please Select Height";return false;}
var heighlog = document.querySelectorAll("input[name=height]:checked")[0].value

//alert(heighlog); //1 for feet 2 for cm
if(heighlog == '1'){
htype = "feet";
var ft_2= document.getElementById("feet").value; 
	if(ft_2==''){document.getElementById('err_popup3').innerHTML="Please Fill it!";return false;}
	if(ft_2<3){document.getElementById('err_popup3').innerHTML=" Please enter a value greater than or equal to 3ft";return false;}
	if(ft_2>6){document.getElementById('err_popup3').innerHTML=" Ouch!<br>Something went wrong!<br>It seems you probably need expert's supervision to achieve your dream body. Kindly drop an email at <b>support@ketobalanced.com</b> ";return false;}
	document.getElementById('err_popup3').innerHTML="";
var inch_2= document.getElementById("inch").value;
	if(inch_2==""){document.getElementById('err_popup4').innerHTML="Please Fill it!";return false;}
	if(inch_2>11){document.getElementById('err_popup4').innerHTML="Please enter a value less than or equal to 11";return false;}
	document.getElementById('err_popup4').innerHTML="";
height_1 = Math.round(Number(ft_2*12)+ Number(inch_2));
height = height_1;
ft= ft_2;
inch = inch_2;
}
if(heighlog == '2'){
htype = "cm";
var height= document.getElementById("mtrcal_ht_value").value;
if(height==""){document.getElementById('err_popup2').innerHTML="Please Enter your Height";return false;} 
if(height<135)
{document.getElementById('err_popup2').innerHTML="Please enter a value greater than or equal to 135 cms";return false;}
if(height>213.36)
{document.getElementById('err_popup2').innerHTML=" Ouch!<br>Something went wrong!<br>It seems you probably need expert's supervision to achieve your dream body. Kindly drop an email at <b>support@ketobalanced.com</b> ";return false;}
document.getElementById('err_popup2').innerHTML="";
 height_1 = Math.round(height*0.393701);
}
if(height_1=="" && heighlog== 2){document.getElementById('err_popup2').innerHTML="Please enter your Height";return false;}
obj_basic["age"]= age_1;
obj_basic["height"]= height;
obj_basic["htype"]= htype;
obj_basic["ft"]= ft;
obj_basic["inch"]= inch;
console.log(obj_basic);
return obj_basic;
}
function meatvalidate(meattp)
{
    var meatval=['Chicken','Pork','Beef','Fish','seafood','Lamb','NoMeat','Vegan'];
    var formId= 'ketobalanced';
    var json =  window.localStorage.getItem(formId);
    var previousobj = JSON.parse(json);
    var obj_meat = previousobj['meat'];
   
    for(var key in obj_meat) {
	
	var meat=obj_meat[key];
	  if(meat !=='')
	  {
		  document.getElementById(meat).classList.add("active");
		  document.getElementById(meat +"_pm").innerHTML = "+";
	  }
	}
	
    if(meattp > 0){
    var chemeat = meatval[meattp-1];
    if(chemeat=='Vegan'){ document.getElementById("vegonid").value=1;

var obj_products = previousobj['products'];
obj_products['Egg']='';
obj_products['Cheese']='';
obj_products['Cottage_Cheese']='';
obj_products['Butter']='';
document.getElementById("NoMeat_pm").innerHTML ="-";
save('products',obj_products); 

}else {
document.getElementById("NoMeat_pm").innerHTML ="-";
document.getElementById("vegonid").value="";

}

    if(chemeat=='NoMeat'||chemeat=='Vegan')
    {
    for(var r=0 ; r < meatval.length; r ++)
    {
    obj_meat[meatval[r]] = '';  
    }
    obj_meat[chemeat] = chemeat;  
    }else{
    if(chemeat == obj_meat[chemeat])
    {
    obj_meat[chemeat]='';  
    }else{
    obj_meat[chemeat] = chemeat;  
    }  
    obj_meat['NoMeat'] = '';
    obj_meat['Vegan'] = '';    
    }
    }
    
    for(var h=0 ; h < meatval.length; h ++)
    {
     var y = h+1; 
     var myEle = document.getElementById("meatm_"+y);
     if(myEle){
     if(obj_meat[meatval[h]] !== '') 
     {
      document.getElementById("meatm_"+y).style.display='none';  
      document.getElementById("meatp_"+y).style.display='block';  
      document.getElementById("meatimgl_"+y).style.display='none';  
      document.getElementById("meatimgd_"+y).style.display='block';  
      }else{
      document.getElementById("meatm_"+y).style.display='block';  
      document.getElementById("meatp_"+y).style.display='none';  
      document.getElementById("meatimgl_"+y).style.display='block';  
      document.getElementById("meatimgd_"+y).style.display='none';  
     }
    } 
   }
   $('.err_popup').hide();
  return obj_meat;
}
function popsltmore()
{
document.getElementById("modalTwo").style.display='none';    
}


function phyactivy()
{   var formId= 'ketobalanced';
    var json =  window.localStorage.getItem(formId);
    var previousobj = JSON.parse(json);
    var obj_physical_activity = previousobj['physical_activity'];
	if(document.getElementById(obj_physical_activity.replace(/[&\/\\#, +()$~%.'":*?<>{}]/g, '_'))!=undefined){
	document.getElementById(obj_physical_activity.replace(/[&\/\\#, +()$~%.'":*?<>{}]/g, '_')).classList.add("active");
	//document.getElementById(obj_physical_activity.replace(/[&\/\\#, +()$~%.'":*?<>{}]/g, '_')+"pm").innerHTML = "+";
	}
} 
   function typicalday()
{   var formId= 'ketobalanced';
    var json =  window.localStorage.getItem(formId);
    var previousobj = JSON.parse(json);
	var obj_typicalday = previousobj['typical_day'];
	if(document.getElementById(obj_typicalday.replace(/[&\/\\#, +()$~%.'":*?<>{}]/g, '_'))!=undefined){
	document.getElementById(obj_typicalday.replace(/[&\/\\#, +()$~%.'":*?<>{}]/g, '_')).classList.add("active");
	//document.getElementById(obj_typicalday.replace(/[&\/\\#, +()$~%.'":*?<>{}]/g, '_')+"_pm").innerHTML = "+";
	}
}

function habitsdeta()
 {
    var formId= 'ketobalanced';
    var json =  window.localStorage.getItem(formId);
    var previousobj = JSON.parse(json);
    var obj_hbt = previousobj['habits'];
	
	for(var key in obj_hbt) {
	var habitsval=obj_hbt[key];
	  if(habitsval !=='' && document.getElementById(habitsval) != undefined)
	  {
		document.getElementById(habitsval).classList.add("active");
		//document.getElementById(habitsval +"_pm").innerHTML = "+";
	  }
	}
  }
function meatconti()
{
    var formId= 'ketobalanced';
    var json =  window.localStorage.getItem(formId);
    var previousobj = JSON.parse(json);
    var obj_meat = previousobj['meat'];
    var rt = Object.keys(obj_meat).map(function(_) { return obj_meat[_]; });
    var newArray = rt.filter(value => Object.keys(value).length !== 0);
    if(newArray.length < 1)
    {
    document.getElementById("modalTwo").style.display='block'; 
    }else{
     window.location.href = rhost+"/veggies.html";
    }
}
 
 function veggiescornerdata(veg)
 {
    var veggval=['Broccoli','Mushrooms','Zucchini','Cauliflower','Asparagus','Avocado','Green_Beans','Cabbage','Spinach','Lettuce','Brussels_Sprouts','Arugula','Spring_Onions','Bok_Choy','Poblano_Pepper','Radish'];
    var formId= 'ketobalanced';
    var json =  window.localStorage.getItem(formId);
    var previousobj = JSON.parse(json);
    var obj_vegg = previousobj['veggies'];
   //
	for(var key in obj_vegg) {
	var veggies=obj_vegg[key];
	  if(veggies !=='' && document.getElementById(veggies)!=undefined)
	  {
		  document.getElementById(veggies).classList.add("active");
		  document.getElementById(veggies +"_pm").innerHTML = "+";
	  }
	}
   //
    if(veg > 0){
    var chkvegg = veggval[veg-1];
    if(chkvegg == obj_vegg[chkvegg])
    {
    obj_vegg[chkvegg]='';  
    }else{
    obj_vegg[chkvegg] = chkvegg;  
    } 
    }
    
    for(var h=0 ; h < veggval.length; h ++)
    {
     var y = h+1; 
     var myEle = document.getElementById("veggm_"+y);
     if(myEle){
     if(obj_vegg[veggval[h]] != '') 
     {
      document.getElementById("veggm_"+y).style.display='none';  
      document.getElementById("veggp_"+y).style.display='block';  
      document.getElementById("veggimgl_"+y).style.display='none';  
      document.getElementById("veggimgd_"+y).style.display='block';  
      }else{
      document.getElementById("veggm_"+y).style.display='block';  
      document.getElementById("veggp_"+y).style.display='none';  
      document.getElementById("veggimgl_"+y).style.display='block';  
      document.getElementById("veggimgd_"+y).style.display='none';  
     }
     }
    }
	$('.err_popup').hide();
  return obj_vegg;    
 }
 function veggconti(el)
 {
   if(el==1)
   {
    var formId= 'ketobalanced';
    var json =  window.localStorage.getItem(formId);
    var previousobj = JSON.parse(json);
    var obj_vegg = previousobj['veggies'];   
    var rt = Object.keys(obj_vegg).map(function(_) { return obj_vegg[_]; });
    var newArray = rt.filter(value => Object.keys(value).length !== 0);
    if(newArray.length < 1)
    {
    document.getElementById("modalTwo").style.display='block'; 
    }else{
    window.location.href = rhost+"/products.html";    
    }  
    }
   if(el==2)
   {
   window.location.href = rhost+"/products.html";
   } 
 }
 
 function productcornerdata(pd)
 {
    var prodval=['Egg','Nuts','Cheese','Cottage_Cheese','Butter','Coconut','Tofu','Eggplant','Bell_Pepper','Olives','Strawberry'];
    	
    var formId= 'ketobalanced';
    var json =  window.localStorage.getItem(formId);
    var previousobj = JSON.parse(json);
    var obj_prod = previousobj['products'];
    var mealtype = previousobj['meat']['Vegan'];
	for(var key in obj_prod) {
	var products=obj_prod[key];
	  if(products !=='' && document.getElementById(products)!=undefined)
	  {
		  document.getElementById(products).classList.add("active");
		  document.getElementById(products +"_pm").innerHTML = "+";
	  }
	}
	
console.log(mealtype);
if(mealtype =='Vegan'){
document.getElementById("Egg").style.display = "none";
document.getElementById("Egg").classList.remove("active");
document.getElementById("Egg_pm").innerHTML ="-";
document.getElementById("Cheese").style.display = "none";
document.getElementById("Cheese").classList.remove("active");
document.getElementById("Cheese_pm").innerHTML ="-";
document.getElementById("Cottage_Cheese").style.display = "none";
document.getElementById("Cottage_Cheese").classList.remove("active");
document.getElementById("Cottage_Cheese_pm").innerHTML ="-";
document.getElementById("Butter").style.display = "none";
document.getElementById("Butter").classList.remove("active");
document.getElementById("Butter_pm").innerHTML ="-";

//document.getElementById("vegonid").value=2;
for(var r=0 ; r < prodval.length; r ++)
    {
    obj_prod[prodval[r]] = '';  
    }

}
    
    if(pd > 0){
    var chkprod = prodval[pd-1];
    if(chkprod == obj_prod[chkprod])
    {
    obj_prod[chkprod]='';  
    }else{
    obj_prod[chkprod] = chkprod;  
    } 
    }
    
    for(var h=0 ; h < prodval.length; h ++)
    {
     var y = h+1; 
     var myEle = document.getElementById("prodm_"+y);
     if(myEle){
     if(obj_prod[prodval[h]] != '') 
     {
      document.getElementById("prodm_"+y).style.display='none';  
      document.getElementById("prodp_"+y).style.display='block';  
      document.getElementById("prodimgl_"+y).style.display='none';  
      document.getElementById("prodimgd_"+y).style.display='block';  
      }else{
      document.getElementById("prodm_"+y).style.display='block';  
      document.getElementById("prodp_"+y).style.display='none';  
      document.getElementById("prodimgl_"+y).style.display='block';  
      document.getElementById("prodimgd_"+y).style.display='none';  
     }
     }
    }
	$('.err_popup').hide();
  return obj_prod;   
}
function prodcontinus(el)
{
   if(el==1)
   {
    var formId= 'ketobalanced';
    var json =  window.localStorage.getItem(formId);
    var previousobj = JSON.parse(json);
    var obj_prod = previousobj['products'];
    var rt = Object.keys(obj_prod).map(function(_) { return obj_prod[_]; });
    var newArray = rt.filter(value => Object.keys(value).length !== 0);
    if(newArray.length < 1)
    {
    document.getElementById("modalTwo").style.display='block'; 
    }else{
    window.location.href = rhost+"/everyday.html";    
    }  
    }
   if(el==2)
   {
   window.location.href = rhost+"/everyday.html";
   } 
 }
 
 function habitsdata(hb)
 {
    var habitsval=['i_do_not_get_quality_sleep','i_eat_late_at_night','my_salt_intake_is_more','i_can_not_quit_eating_sweets','i_like_soft_drinks','none_of_the_above'];
    var formId= 'ketobalanced';
    var json =  window.localStorage.getItem(formId);
    var previousobj = JSON.parse(json);
    var obj_hbt = previousobj['habits'];
    if(hb > 0){
    var chkhbt = habitsval[hb-1];
    if(chkhbt==='none_of_the_above')
    {
    for(var r=0 ; r < habitsval.length; r ++)
    {
    obj_hbt[habitsval[r]] = '';  
    }
    obj_hbt[chkhbt] = chkhbt;  
    }else{
        
    if(chkhbt == obj_hbt[chkhbt])
    {
    obj_hbt[chkhbt]='';  
    }else{
    obj_hbt[chkhbt] = chkhbt;  
    }  
    obj_hbt['none_of_the_above'] = '';     
    }
    }
    
    var rt = Object.keys(obj_hbt).map(function(_) { return obj_hbt[_]; });
    var newArray = rt.filter(value => Object.keys(value).length !== 0);
    if(newArray.length < 1)
    {
    obj_hbt['none_of_the_above'] = 'none_of_the_above';    
    }
    for(var h=0 ; h < habitsval.length; h ++)
    {
    var y = h+1; 
    var myEle = document.getElementById("badh_"+y);
    if(myEle){
    if(obj_hbt[habitsval[h]] !== '') 
    {
      document.getElementById("badh_"+y).classList.add("selectiv_tab");
      }else{
      document.getElementById("badh_"+y).classList.remove("selectiv_tab");
     }
     }
    }
	$('.err_popup').hide();
 obj_hbt['tt'] = newArray.length;
  return obj_hbt;
}
  
 function validation()
 {  
 //alert(000);
 var val_chk=0;
	if(document.querySelectorAll("input[name=weight]:checked")[0] == undefined){document.getElementById('wtwarnpopup').innerHTML= "Please Select Weight!";
val_chk =1;
}
	
if(document.querySelectorAll("input[name=tarweigt]:checked")[0] == undefined){document.getElementById('twtwarnpopup').innerHTML= "Please Select Target Weight!";
val_chk =1;
}
	
	 	
	return val_chk;
 }
 
 function measurementdata(ms)
 {
    var measurmentval=['type','age_1','height_1','weight_1','target_1','age_2','ft_2','inch_2','weight_2', 'target_2','bmr','email','htype','ttype'];
    var formId= 'ketobalanced';
    var json =  window.localStorage.getItem(formId);
    var previousobj = JSON.parse(json);
    var obj_msnt = previousobj['measurment'];
    var obj_basic = previousobj['basic'];
    var height_1 = "";
     var weight_1 = "";
    var target_1 = "";
    var htype = '';
var tweightType = '';
var email='';
var height = '';
var ft='';
var inch ='';

var age_1= obj_basic["age"];
height_1 = obj_basic["height"];
height = height_1;
htype= obj_basic["htype"];
ft =  obj_basic["ft"];
inch =  obj_basic["inch"];
var mes_chk = validation(); if(mes_chk===1) {return false;}

if(document.querySelectorAll("input[name=weight]:checked")[0] == undefined){document.getElementById('wtwarnpopup').innerHTML= "Please Select Weight"; return false;}
var weighlog = document.querySelectorAll("input[name=weight]:checked")[0].value
var weigh_T = "";
if(weighlog == '1'){ //kg
weigh_T = "kg";
 var weight = document.getElementById("mass-value1").value;
		if(weight==""){document.getElementById('err_popup5').innerHTML="Please enter your weight";return false;}
		if(weight<40)
			{document.getElementById('err_popup5').innerHTML="Please enter a value greater than or equal to 40";return false;}
		if(weight>199)
			{document.getElementById('err_popup5').innerHTML=" Ouch!<br>Something went wrong!<br>It seems you probably need expert's supervision to achieve your dream body. Kindly drop an email at <b>support@ketobalanced.com</b> ";return false;}
		document.getElementById('err_popup5').innerHTML="";
  weight_1 = Math.round(weight*2.20462);
  
}
if(weighlog === '2'){//lb
weigh_T = "lb";
   weight_1= document.getElementById("mass-value").value; 
		if(weight_1==""){document.getElementById('err_popup7').innerHTML="Please enter your weight";return false;}
		if(weight_1<90)
			{document.getElementById('err_popup7').innerHTML="Please enter a value greater than or equal to 90";return false;}
		if(weight_1>441)
			{document.getElementById('err_popup7').innerHTML=" Ouch!<br>Something went wrong!<br>It seems you probably need expert's supervision to achieve your dream body. Kindly drop an email at <b>support@ketobalanced.com</b> ";return false;}
		document.getElementById('err_popup7').innerHTML="";
   
}

if(document.querySelectorAll("input[name=tarweigt]:checked")[0] == undefined){document.getElementById('wtwarnpopup').innerHTML= "Please Select Weight"; return false;}
var tweighlog = document.querySelectorAll("input[name=tarweigt]:checked")[0].value;
var tweightType = "";
 if(tweighlog === '2'){//lb
tweightType = "lb";
target_1= document.getElementById("targetMass-value").value;
		if(target_1==""){document.getElementById('err_popup8').innerHTML="Please enter your target target weight";return false;}
		if(target_1<90)
			{document.getElementById('err_popup8').innerHTML="Please enter a value greater than or equal to 90";return false;}
		if(target_1>400)
			{document.getElementById('err_popup8').innerHTML="Please enter a value less than or equal to 400";return false;}
		if(parseInt(target_1)>parseInt(weight_1))
			{document.getElementById('err_popup8').innerHTML="Oops!<br> Something went wrong!<br> Although our meal plan is not meant for weight gain yet you can drop an email at <b>support@ketobalanced.com</b> for your concern. Our experts will get back to you soon.";return false;}
if(parseInt(target_1) === parseInt(weight_1))
			{document.getElementById('err_popup8').innerHTML="Target weight should always be less than current weight";return false;}
		document.getElementById('err_popup8').innerHTML="";

}
if(tweighlog === '1'){//kg
tweightType = "kg";
var target = document.getElementById("targetMass-value1").value;
		if(target==""){document.getElementById('err_popup6').innerHTML="Please enter your target weight";return false;}
		if(target<40)
			{document.getElementById('err_popup6').innerHTML="Please enter a value greater than or equal to 40";return false;}
		if(target>180)
			{document.getElementById('err_popup6').innerHTML="Please enter a value less than or equal to 180";return false;}
		if(parseInt(target)>parseInt(weight)){document.getElementById('err_popup6').innerHTML="Oops!<br> Something went wrong!<br> Although our meal plan is not meant for weight gain yet you can drop an email at <b>support@ketobalanced.com</b> for your concern. Our experts will get back to you soon.";return false;}
if(parseInt(target) === parseInt(weight))
			{document.getElementById('err_popup6').innerHTML="Target weight should always be less than current weight";return false;}
		document.getElementById('err_popup6').innerHTML="";
 target_1 = Math.round(target*2.20462);
}
    if(height_1!=='' && weight_1!=='') 
    {
      
    var age_2= age_1;
     
    var weight_2= weight_1; 
    var target_2= target_1; 

    obj_msnt['age_1'] = age_1;  
    obj_msnt['height_1'] = height;  
    obj_msnt['weight_1'] = weight_1;  
    obj_msnt['target_1'] = target_1;  
    obj_msnt['age_2'] = age_1;  
    obj_msnt['ft_2'] = ft;  
    obj_msnt['inch_2'] = inch;  
    obj_msnt['weight_2'] = weight_2;  
    obj_msnt['target_2'] = target_2;
obj_msnt['type']=weigh_T;
obj_msnt['email'] = email; 
obj_msnt['htype'] = htype;
obj_msnt['ttype'] = tweightType; 
 obj_msnt['bmr'] = ''; 
     
 //if(confirm("Please make sure all your entries are correct!")){
//window.location.href = rhost+"/process.html";
document.getElementById("modalOne").style.display = "block";
var x = document.createElement('script');
x.src = 'https://usa.ketobalanced.com/js/graph2.js';
document.getElementsByTagName("head")[0].appendChild(x);

setTimeout(function(){
     window.location.href = "plan.html";      
    }, 13000);
//}else { return false;}
 return obj_msnt;
 }
}
 /*function processingnextstp()
 {
    setTimeout(function(){
     window.location.href = rhost+"/plan.html";      
    }, 7000);
 }*/
 function finalresult()
 {
  //alert('show the result here!');
  var formId= 'ketobalanced';
  var json =  window.localStorage.getItem(formId);
  var previousobj = JSON.parse(json);
  var measurement = previousobj['measurment'];
    var gender = previousobj['gender'];
  var habits = previousobj['habits'];
//habits
var habitsval = habits['tt']*10;

var weight ="";
var height = "";
var weight_lb = "";
var height_in = "";
var target ="";
var weight_lbt;
var age = '';
var email = '';
//var height  = measurement['age_2'];
var type = measurement['type']; console.log(type);
var htype = measurement['htype'];
var ttype = measurement['ttype'];
var height_in ='';
if(htype =='cm'){
height_cm = measurement['height_1'];//cm
height = height_cm;//Math.round(height_in*2.54);//cm
height_in = Math.round(height*0.393701);
}
if(htype =='feet'){
height_in = measurement['height_1'];//inch
height = Math.round(height_in*2.54);//cm

}

age = measurement['age_1'];
weight_lb = measurement['weight_1'];//lb
weight = Math.round(weight_lb*0.453592);
weight_lbt = measurement['target_1'];
if(gender==""||age==""){window.location.href = "https://usa.ketobalanced.com";}
document.getElementById("ageid").innerHTML=age;
document.getElementById("heightid").innerHTML=height;


var now = new Date();
var monthNames = ["Jan", "Feb", "Mar", "April", "May", "June","July", "Aug", "Sept", "Oct", "Nov", "Dec"];
var month = now.getMonth();if(month==11){var nexmonth = 0;} else {nexmonth=month+1;}
document.getElementById("nextmonth").innerHTML = monthNames[nexmonth];
document.getElementById("currentmonth").innerHTML = '<b>'+monthNames[month]+'</b>';
console.log('h='+height);console.log('w'+weight);
var bmi = Math.round(weight / Math.pow(height, 2) * 10000);
console.log("bmi="+bmi);
var niddle = document.getElementById('gaugeid');
//var btrcolor = document.getElementById('btscsid');
var emozicolor = document.getElementById('moziid');
var atti = document.getElementById('attid');
var imgstr = document.getElementById('stresmnid');
var bmiimg = document.getElementById('bmiimgmn');

if(bmi==30){
var rm = "Obese";
var bmage = parseInt(age)+parseInt((bmi-25));
var waterconsume = '4-5L';

niddle.value=".69";
emozicolor.src="./images/stress-red.png";
atti.src="./images/attention.png";
imgstr.src="./images/stress-1.png";
bmiimg.src = "./images/bmi-4.png";
document.getElementsByClassName('red_arrowdv')[0].style.display="block";
}
if(bmi>30 && bmi<35 ){
var rm = "Moderately Obese";
var bmage = parseInt(age)+parseInt((bmi-25));
var waterconsume = '4-5L';

niddle.value=".72";
emozicolor.src="./images/stress-red.png";
atti.src="./images/attention.png";
imgstr.src="./images/stress-1.png";
bmiimg.src = "./images/bmi-4.png";
document.getElementsByClassName('red_arrowdv')[0].style.display="block";
}
if(bmi>=35){
var rm = "Morbidly Obese";
var bmage = parseInt(age)+parseInt((bmi-25));
var waterconsume = '4-5L';

niddle.value=".75";
emozicolor.src="./images/stress-red.png";
atti.src="./images/attention.png";
imgstr.src="./images/stress-1.png";
bmiimg.src = "./images/bmi-4.png";
document.getElementsByClassName('red_arrowdv')[0].style.display="block";
}
if(bmi<18.5){
var rm = "Underweight";
var bmage = parseInt(age)+parseInt((18.5 - bmi));
var waterconsume = '3-4L';

niddle.value=".70";
emozicolor.src="./images/stress-red.png";
atti.src="./images/attention.png";
imgstr.src="./images/stress-1.png";
bmiimg.src = "./images/bmi-1.png";
document.getElementsByClassName('red_arrowdv')[0].style.display="block";
}
if(bmi>18.5 && bmi<24.9 ){
var rm = "Normal";
var bmage = age;
var waterconsume = '2-3L';

niddle.value=".30";
emozicolor.src="./images/stress-green.png";
atti.src="./images/attention-2.png";
imgstr.src="./images/stress-2.png";
bmiimg.src = "./images/bmi-2.png";
document.getElementsByClassName('green_arrowdv')[0].style.display="block";
}
if(bmi>24.9 && bmi<30 ){
var rm = "Overweight";
var bmage = parseInt(age)+parseInt((bmi-25));
var waterconsume = '4-5L';
niddle.value=".40";

emozicolor.src ="./images/stress-yellow.png";
atti.src="./images/attention-1.png";
imgstr.src="./images/stress-3.png";
bmiimg.src = "./images/bmi-3.png";
document.getElementsByClassName('yellow_arrowdv')[0].style.display="block";
}
var BMR="";
var img = document.getElementById('id_mblic');

if(bmage < 30){
img.src = "./images/metabolic_kid.png";
}
if(bmage >= 30 && bmage <50){
img.src = "./images/metabolic_yung.png";
}
if(bmage >= 50){
img.src = "./images/metabolic_oldmn.png";
}




//linear-gradient(to right, #ed2738 0%, #f68db9 100%)
console.log('wlb'+weight_lb+"hin"+height_in+"age"+age);
if(gender === 'male')
	{ 
		 //BMR=Math.round(66 + (6.3 * weight_lb) + (12.9 * height_in) - (6.8 * age));
		BMR=Math.round((4.536 * weight_lb) + (15.88 *  height_in) - (5 * age) + 5 );
                 BMRt=Math.round(66 + (6.3 * weight_lbt) + (12.9 * height_in) - (6.8 * age));
	}
	else
	{
		BMR=Math.round((4.536 * weight_lb) + (15.88 *  height_in) - (5 * age) -161);
		 //BMR=Math.round(655 + (4.3 * weight_lb) + (4.7 * height_in) - (4.7 * age));
                 BMRt=Math.round(655 + (4.3 * weight_lbt) + (4.7 * height_in) - (4.7 * age));
	}
        //weight_lb = weight_lbt;
        BMR=BMRt;
console.log('bmr'+BMR);
//localStorage.setItem(formId,json);



var physical_activity = previousobj['physical_activity'];
var calories_current = activityvalue(physical_activity,BMR,gender,habitsval);
measurement['bmr'] = calories_current;
if(target>11){target=11;}
var current_weight =  Math.round(weight_lb *0.453592);
var target_current_weight =  Math.round(weight_lbt *0.453592);
var achieve_weight = Math.round((weight_lb - target)*0.453592);
save('measurment',measurement); //ach_id2
var pounds_daily = target/28;
var targMonth = 5; 
if(type === 'lb'){current_weight = weight_lb; target_current_weight = weight_lbt; targMonth = Math.round(5*2.20462)}
var htmlCurrent = current_weight-targMonth;
//document.getElementById("curweight_id").innerHTML ='<p>'+(htmlCurrent+2)+'</p><p>'+(htmlCurrent+1)+'</p><p class="plan-spcl">'+htmlCurrent+' <span>'+type+'</span></p><p>'+(htmlCurrent-1)+'</p><p>'+(htmlCurrent-2)+'</p>';
//document.getElementById("cur_id").innerHTML="150";
document.getElementById("ach_id2").innerHTML=target_current_weight+'<span>'+type+'</span>';

document.getElementById("cur_id").innerHTML =current_weight+'<span>'+type+'</span>';
document.getElementById("cur_id1").innerHTML =current_weight+'<span>'+type+'</span>';
document.getElementById("ach_id").innerHTML =htmlCurrent+'<span>'+type+'</span>';
document.getElementById("ach_id2a").innerHTML =target_current_weight+'<span>'+type+'</span>';
document.getElementById("bmage").innerHTML =bmage;
document.getElementById("wat_intake").innerHTML =waterconsume;
document.getElementById("bmrid").innerHTML ='<span>'+(calories_current - 100)+'-'+ calories_current+'</span>';
document.getElementById("bmiid").innerHTML =bmi;
document.getElementById("bmitypeid").innerHTML =rm;
console.log(calories_current);
  console.log(previousobj);
//emailsubs(email);
 }
function activityvalue(av,bmr,gender,habitsval){
     var rav = "";
     
     var calories_current ="";
     
 switch(av) {
  case '1'://'ALMOST NO PHYSICAL ACTIVITY':
   rav = 1.2;
   calories_current =  bmr*rav;
   calories_current = Math.round(calories_current -(calories_current*habitsval/100));
   if(calories_current<1200){calories_current=1200;}
   if(calories_current>1700 && gender=="male"){calories_current=1700;}
   if(calories_current>1500 && gender=="female"){calories_current=1500;}
    break;
  case '2'://'I OFTEN GO FOR A WALK':
    rav =1.375;
    calories_current =  bmr*rav;
   calories_current = Math.round(calories_current -(calories_current*habitsval/100));
   if(calories_current<1200){calories_current=1200;}
   if(calories_current>1700 && gender=="male"){calories_current=1700;}
   if(calories_current>1500 && gender=="female"){calories_current=1500;}
    break;
  case '3'://'I EXERCISE 1-2 TIMES A WEEK':
    rav = 1.55;
    calories_current =  bmr*rav;
   calories_current = Math.round(calories_current -(calories_current*habitsval/100));
   if(calories_current<1200){calories_current=1200;}
   if(calories_current>2000 && gender=="male"){calories_current=2000;}
   if(calories_current>1800 && gender=="female"){calories_current=1800;}
    break;
  case '4'://'I EXERCISE 3-5 TIMES A WEEK':
    rav =1.725;
    calories_current =  bmr*rav;
   calories_current = Math.round(calories_current -(calories_current*habitsval/100));
   if(calories_current<1200){calories_current=1200;}
   if(calories_current>2500 && gender=="male"){calories_current=2500;}
   if(calories_current>1900 && gender=="female"){calories_current=1900;}
    break;
  case '5'://'I EXERCISE 5-7 TIMES A WEEK':
    rav = 1.9;
    calories_current =  bmr*rav;
   calories_current = Math.round(calories_current -(calories_current*habitsval/100));
    if(calories_current<1200){calories_current=1200;}
   if(calories_current>2500 && gender=="male"){calories_current=2500;}
   if(calories_current>1900 && gender=="female"){calories_current=1900;}
    break;
  
} 
return calories_current;
 }
function emailsubs(){
	
		//var checkBox = document.getElementById("checkbx");
  //var text = document.getElementById("text");
  //if (checkBox.checked == false){
    //text.style.display = "block";
	//return false;
  //} 
	var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var email = document.getElementById('mail-value').value;
	if(email==''){
		document.getElementById('err_popup').innerHTML="Please Enter your email address";
		return false;
	}else if(reg.test(email) == false){	
		document.getElementById('err_popup').innerHTML="Invalid Email Address";
		return false;
	}else{
	  var formId= 'ketobalanced';
	  var json =  window.localStorage.getItem(formId);
	  var previousobj = JSON.parse(json); 
	  var gender = previousobj['gender'];
	if(gender==""){window.location.href = "https://usa.ketobalanced.com";}
	var reqdata = 'ajd='+json+'&email='+email;
	//console.log(reqdata);
	var xhttp = new XMLHttpRequest();
	  xhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
	//console.log(this.responseText);
window.location.href = this.responseText;
		 /*document.getElementById("emailId").href = this.responseText;
		 document.getElementById("emailId1").href = this.responseText;
		 document.getElementById("emailId2").href = this.responseText;*/
		}
	  };
	var requrl = "https://usa.ketobalanced.com/getemail.php";
	  xhttp.open("POST", requrl, true);
	  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	  xhttp.send(reqdata);	
//console.log(requrl);
	 // xhttp.open("GET", requrl, true);
	  //xhttp.send();
	}

}
