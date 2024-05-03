let customers_menu=document.querySelector('.customers-menu');
let products_menu=document.querySelector('.products-menu');
let favorite_menu=document.querySelector('.favorite-menu');
let statistic_menu=document.querySelector('.statistic-menu');
let posts_menu=document.querySelector('.posts-menu');
let sitting_menu=document.querySelector('.sitting-menu');
let menu=document.querySelector('.menu');
let msj_priv=document.querySelector('.msj-priv');
let container=document.querySelector('.container');
let cruds_stoke=document.querySelector('.cruds-stoke');
let login=document.querySelector('.login');
let forget_pass=document.querySelector('.forget-pass');
let content=document.querySelector('.content');
let remouve_st=document.querySelector('.remouve-st');
let item_filter=document.querySelector('.item-filter');
let dell_prod=document.querySelector('.dell-prod');
let dell_s=document.querySelector('.dell-s');
let dell_comments=document.querySelector('.dell-comments');
let dell_c=document.querySelector('.dell-c');
let adup_prod=document.querySelector('.adup-prod');
let bar_add=document.querySelector('.bar-add');
let bar_upd=document.querySelector('.bar-upd');
let bar_dell=document.querySelector('.bar-dell');
let pref_compt=document.querySelector('.pref-compt');
let security=document.querySelector('.security');
let imj_prof=document.querySelector('.imj-prof-sitting');
let user_name=document.querySelector('.inter-compt');
let change_pass=document.querySelector('.inter-securtiy');
let image_compte=document.querySelector('.image-compte');
let submit_login=document.getElementById('submit');
let card_description=document.querySelector('.card-description');
let home_menu=document.querySelector('.home-menu');
let btn_scroll=document.querySelector('.btn-scroll');
let error=document.querySelector('.error');
let num_val=document.querySelectorAll('.num-val');
let forget=document.getElementById('forget');
let home=document.getElementById('home-m');
let customer=document.getElementById('customer-m');
let product=document.getElementById('product-m');
let static=document.getElementById('static-m');
let post=document.getElementById('post-m');
let favorite=document.getElementById('favorite-m');
let sitting=document.getElementById('sitting-m');
let exit=document.getElementById('Exit-m');
let cancle=document.getElementById('cancle');
let croi=document.getElementById('croi');
let cancle_s=document.getElementById('cancle-s');
let croi_s=document.getElementById('croi-s');
let icone_fil=document.getElementById('icone-fil');
let user=document.getElementById('user');
let SKU=document.getElementById('SKU');
let price=document.getElementById('price');
let Quantity=document.getElementById('Quantity');
let tax_class=document.getElementById('tax-class');
let tax_status=document.getElementById('tax-status');
let title=document.getElementById('title');
let total=document.getElementById('total');
let add_adup=document.getElementById('add-adup');
let upd_adup=document.getElementById('upd-adup');
let dell_all_Prod=document.getElementById('dell-ALL-Prod');
cruds_stoke.style.display='none';
container.style.display='';
home_menu.style.display='none';
forget_pass.style.display='none';
login.style.display='';
card_description.style.display='';
home_menu.style.display='none';
customers_menu.style.display='none';
products_menu.style.display='none';
statistic_menu.style.display='none';
posts_menu.style.display='none';
favorite_menu.style.display='none';
sitting_menu.style.display='none';
let x='admin';
let tmp;
//----------------------------------login
function getUser(){
    if((user.value=='admin') && (password.value=='admin')){
        console.log('hello');
        container.style.display='none';
        sitting_menu.style.display='none';
        cruds_stoke.style.display='';
        home_menu.style.display='';
        getValNum();
        console.log('hello login valid.')
        error.innerHTML ='';
        user.value='';
        password.value='';
    }else{
        console.log('hello login not valid !');
        error.innerHTML ='your password or email is not correct !';

    }
}

 submit_login.onclick=function(){//1er methode avec onclick
      getUser();
 }


// submit_login.addEventListener('click',function(){
// getUser();
// })
//2eme methode avec addeventlistener
//----------------------------------------------------total
function getTotal(){
    if((price.value !='') && (SKU.value<price.value)){
        let result=((+price.value + +tax_class.value + +tax_status.value) - +SKU.value);
        total.innerHTML=result;
        total.style.backgroundColor='green' ; 
    }else{
        total.innerHTML='';
        total.style.backgroundColor='red' ; 
    }
}
//-------------------------------------------------------------------creat
//1er etape creé un object comme newpro
//2eme etape creé un array pour creé plusier object
//3eme etape ajoute dans une local-storage 
//aray
//let dataprod=[];//creation array vide ili tkoun feha plusier object
 let dataprod;
 if(localStorage.productBD !=null){
     dataprod=JSON.parse(localStorage.productBD)
 }else{
    dataprod=[];
 }

 let array;
 add_adup.onclick=function(){
let newPro={//creat object
   title:title.value, 
   SKU:SKU.value,
   price:price.value,
   Quantity:Quantity.value,
   tax_class:tax_class.value,
   tax_status:tax_status.value,
   total:total.innerHTML
}
console.log(newPro)//object
if(price.value !='' &&
tax_class.value !='' &&
tax_status.value !='' &&
title.value !=''
){

    if(Quantity.value>1){
        for(let i=0;newPro.Quantity>i;i++){
            dataprod.push(newPro);//affectation object fi array
            console.log(dataprod)//array
        }
    }else{
        dataprod.push(newPro);//affectation object fi array       
    }
//localstorage prendre le valeur en string fa9t yilzim na3mil JSON.stringify(dataprod)
localStorage.setItem('productBD',JSON.stringify(dataprod));
}
total.style.backgroundColor='red' ; 
clearData();
ReadData();
array=newPro;//methode 2
return newPro;//methode 1
}
//array and object c'est sont des element d'enrigister data mais temporaire avec reload kol chay ydhi-3
//solustion en va enrigister en localstorage(database)
//-------------------------------------------------------------------clear data
function clearData(){
    title.value='';
    SKU.value='';
    price.value='';
    Quantity.value='';
    tax_class.value='';
    tax_status.value='';
    total.innerHTML='';
}
//-------------------------------------------------------------------read data ou affiche data
function ReadData(){
    let table='';
    for(let i=0;i<dataprod.length;i++){
        table +=`
        <tr>
        <td>${dataprod[i].title} </td>
        <td> ${dataprod[i].price}  </td>
        <td>${dataprod[i].SKU}</td>
        <td>  ${dataprod[i].tax_class} </td>
        <td>  ${dataprod[i].tax_status} </td>
        <td>  ${dataprod[i].Quantity} </td>
        <td> ${dataprod[i].total}</td>
        <td><i onclick='updData(${i}) ,InterUPAD()' class="bi bi-arrow-repeat"></i></td>
        <td><i onclick='dellData(${i})' class="bi bi-trash"></i></td>   
        `
    }
    console.log(table);
document.getElementById('tbody').innerHTML=table;
}
//-------------------------------------------------------------------------------
function dellAll(){
   localStorage.clear();//supp min localstorage
   dataprod.splice(0);//supp min array dataprod
 ReadData();//affich auto

}
dell_all_Prod.onclick=function(){
    dellAll();
    console.log('ok');
    dell_prod.style.display='none';
   }
function dellData(i){
dataprod.splice(i,1);
localStorage.productBD=JSON.stringify(dataprod);
ReadData();
console.log(i);
}

//---------------------------update----------------------------------------------------------------
function updData(i){
    title.value=dataprod[i].title;
    SKU.value=dataprod[i].SKU;
    price.value=dataprod[i].price;
    tax_class.value=dataprod[i].tax_class;
    tax_status.value=dataprod[i].tax_status;
    Quantity.disabled=true;
    Quantity.style.background='#999';  
    getTotal();  
    console.log(i);//test
    tmp=i;
}

upd_adup.onclick=function(){
    let obj={//creat object methode zero
        title:title.value, 
        SKU:SKU.value,
        price:price.value,
       Quantity:dataprod[tmp].Quantity,
        tax_class:tax_class.value,
        tax_status:tax_status.value,
        total:total.innerHTML
     }
//let obj=add_adup.onclick();//methode 1
 console.log(obj);//methode 1
 console.log(array);//methode 2
 obj.Quantity=dataprod[tmp].Quantity,
 dataprod[tmp]=obj;
//localStorage.setItem('productBD',JSON.stringify(dataprod));
    console.log(dataprod);
    ReadData();
    clearData();
    Quantity.disabled=false;
    Quantity.style.background='white';  
    }
function InterUPAD(){
    adup_prod.classList.remove("hiden");
}


function  getSearsh(value){
    let table='';
    for(i=0;dataprod.length>i;i++){
        if((dataprod[i].title.includes(value))||(dataprod[i].price.includes(value))){
       // console.log(i); //
       table +=`
       <tr>
       <td>${dataprod[i].title} </td>
       <td> ${dataprod[i].price}  </td>
       <td>${dataprod[i].SKU}</td>
       <td>  ${dataprod[i].tax_class} </td>
       <td>  ${dataprod[i].tax_status} </td>
       <td>  ${dataprod[i].Quantity} </td>
       <td> ${dataprod[i].total}</td>
       <td><i onclick='updData(${i}) ,InterUPAD()' class="bi bi-arrow-repeat"></i></td>
       <td><i onclick='dellData(${i})' class="bi bi-trash"></i></td>   
       `
       
        }
    }
    document.getElementById('tbody').innerHTML=table;
}

window.onscroll=function(){
if(scrollY>=400){
    btn_scroll.style.display='block'
}else{
    btn_scroll.style.display='none'
}
}

btn_scroll.onclick=function(){
    scroll({
        left:0,
        top:0,
        behavior:"smooth",

    });
}


function getValNum(){
    let interval =10000;
    num_val.forEach(value => {
       let startValue=0;
       let endValue=parseFloat(value.getAttribute("data-val")) ;
       let duration =Math.floor(interval/endValue);
       let counter =setInterval(function(){
        startValue +=1;
        value.textContent=startValue;
        if(startValue==endValue){
            clearInterval(counter);
        }
       },duration);
    });
}
//-------------------------------------------------------------------------------------------
forget.onclick=function(){
    
    login.style.display='none';
    card_description.style.display='none';
    container.style.display='';
    forget_pass.style.display='';
}
home.onclick=function(){
    home_menu.style.display='';
    getValNum();
    customers_menu.style.display='none';
    products_menu.style.display='none';
    posts_menu.style.display='none';
    favorite_menu.style.display='none';
    sitting_menu.style.display='none';
    statistic_menu.style.display='none';

}
customer.onclick=function(){
    home_menu.style.display='none';
    products_menu.style.display='none';
    posts_menu.style.display='none';
    favorite_menu.style.display='none';
    sitting_menu.style.display='none';
    statistic_menu.style.display='none';
    customers_menu.style.display='';
    getValNum();
}
product.onclick=function(){
    home_menu.style.display='none';
    statistic_menu.style.display='none';
    customers_menu.style.display='none';
    favorite_menu.style.display='none';
    sitting_menu.style.display='none';
    posts_menu.style.display='none';
    dell_prod.style.display='none';
    adup_prod.style.display='none';
    products_menu.style.display='';
    ReadData();
    getValNum();
}
bar_add.onclick=function(){
    adup_prod.style.display='';  
    adup_prod.classList.toggle("hiden");  

}
bar_upd.onclick=function(){
     adup_prod.style.display=''; 
    adup_prod.classList.toggle("hiden");  
}
bar_dell.onclick=function(){
    dell_prod.style.display='';
    dell_prod.classList.toggle("hiden");  
}
cancle.onclick=function(){
    this.style.background='#777';
    this.style.color='white';
    dell_prod.classList.toggle("hiden"); 
    dell_s.classList.toggle("hiden");  
}
croi.onclick=function(){
    dell_prod.classList.toggle("hiden");  
    dell_s.classList.toggle("hiden");  
}
cancle_s.onclick=function(){
    this.style.background='#777';
    this.style.color='white';
    dell_s.classList.toggle("hiden");  
}
croi_s.onclick=function(){
    dell_s.classList.toggle("hiden");  
}
static.onclick=function(){
    home_menu.style.display='none';
    customers_menu.style.display='none';
    products_menu.style.display='none';
    favorite_menu.style.display='none';
    sitting_menu.style.display='none';
    posts_menu.style.display='none';
    statistic_menu.style.display='';
    getValNum();
}
post.onclick=function(){
    home_menu.style.display='none';
    customers_menu.style.display='none';
    products_menu.style.display='none';
    favorite_menu.style.display='none';
    sitting_menu.style.display='none';
    statistic_menu.style.display='none';
    posts_menu.style.display='';
}
favorite.onclick=function(){
    home_menu.style.display='none';
    customers_menu.style.display='none';
    products_menu.style.display='none';
    statistic_menu.style.display='none';
    sitting_menu.style.display='none';
    posts_menu.style.display='none';
    favorite_menu.style.display='';
}
sitting.onclick=function(){
    home_menu.style.display='none';
    customers_menu.style.display='none';
    products_menu.style.display='none';
    statistic_menu.style.display='none';
    posts_menu.style.display='none';
    favorite_menu.style.display='none';
    sitting_menu.style.display='';
    user_name.style.display='';
    change_pass.style.display='none';
    image_compte.style.display='none';

}
pref_compt.onclick=function(){
    user_name.style.display='';
    change_pass.style.display='none';
    image_compte.style.display='none';
}
security.onclick=function(){
    user_name.style.display='none';
    change_pass.style.display='';
    image_compte.style.display='none';
}
imj_prof.onclick=function(){
    user_name.style.display='none';
    change_pass.style.display='none';
    image_compte.style.display='';
}
exit.onclick=function(){
    cruds_stoke.style.display='none';
    container.style.display='';
}
item_filter.style.display='none';
icone_fil.onclick=function(){
    item_filter.style.display='';
    item_filter.classList.toggle("hiden");  
}
  dell_s.style.display='none';  
remouve_st.onclick=function(){
    dell_s.style.display='';
    dell_s.classList.toggle("hiden");  
}
dell_comments.style.display='none';
dell_c.onclick=function(){
    dell_comments.style.display='';
    dell_comments.classList.toggle("hiden");  
}
function getForget(){
    cruds_stoke.style.display='none';
    forget_pass.style.display='none';
    login.style.display='';
    card_description.style.display='';
}

//interface edit

let optionsButtons =document.querySelectorAll('.option-button');
let advancedOptionButton=document.querySelectorAll('.adv-option-button');
let fontName=document.getElementById('fontName');
let fontSize=document.getElementById('fontSize');

 
//-----------------------------EventList-------------------------------------------------
//-------Affectation fontList---------Affectation fontSize-------------------------------
let fontList=[
    'Serif',
    'sans-serif',
    "Arial",
    "Verdana",
    "Times New Roman",
    "Garamond",
    "Georgia",
    "Courier New",
    "Cursive"];
fontList.map((value)=>{
let option=document.createElement('option');
option.value=value;
option.innerHTML=value;
fontName.appendChild(option);
}) ;  
for(let i=1;i<12;i++){
    let option =document.createElement('option');
    option.value=i;
    option.innerHTML=i;
    fontSize.appendChild(option);

}
fontSize.value='3';

//----------------------------------------EventButton--------------------------------
//bold----itlic---strike----sup---sub---undo---redo---ol---ul---jusLeft
//--jusCenter---jusrught---jusFull--indent---outdent
const modifyText=(command,defaultUi,value)=>{
    document.execCommand(command,defaultUi,value);
    console.log(value)
};

optionsButtons.forEach(button=>{
    button.addEventListener("click",()=>{
        modifyText(button.id,false,null)
    });
});
//--------------------------------------EventlistExcute-------------------------------------------------
//---font-size-----<h1>--<h6>------color----background----------------------------------
advancedOptionButton.forEach((button)=>{
    button.addEventListener("change",()=>{
modifyText(button.id,false,button.value);
    });
});
//----------------------------------------change img--------------------------------------------------------------
let img =document.getElementById('imgf');
let imgprof =document.getElementById('img-prof');
let boxImage =document.querySelector('.box-image');
let upload =document.getElementById('upload');
let boxUpload =document.querySelector('.upl-image');
let valid =document.getElementById('valid');
let reset =document.getElementById('reset');
let label =document.getElementById('label');
window.onload=function(){
    boxImage.style.display='none';
    aff()
}
let resultat;
upload.onchange=function(){
    boxImage.style.display='block';
    boxUpload.style.display='none';
    let file=new FileReader();
    file.readAsDataURL(upload.files[0]);
    file.onload=function(){
    img.src=file.result;
    resultat=img.src;
    }
    file.addEventListener("load",()=>{
        localStorage.setItem('image',resultat);
        });
        return resultat;
}
valid.onclick=function(){
    if(boxUpload.style.display=='block')
    {
    label.style.borderColor='red';
}else if(boxImage.style.display=='block'){
    imgprof.src=resultat ;
    console.log(resultat);
}
}
function aff(){
if(localStorage.image !=null){
    imgprof.src=localStorage.image;
    console.log('Ok')
    console.log(imgprof.src)
}else{console.log('error')}
}
aff()
reset.onclick=function(){
    boxImage.style.display='none';
    boxUpload.style.display='block';
}
