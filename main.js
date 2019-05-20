const main=document.querySelector("main");
const modalOpen=document.querySelector("#add-employee");
const modal=document.querySelector("#simplemodal");
const closeBtn=document.querySelector(".close-btn");
const submit=document.querySelector(".form-button");
const resetButton=document.querySelector("#reset");
var path ="";
let array=[];

getData();
populateData();

function getData(){
    const temp=localStorage.getItem("employees");
    if (temp){
        array=JSON.parse(temp);
    }

}

function storeData(element){
    array.push(element.innerHTML);
    localStorage.setItem("employees",JSON.stringify(array));
}

function populateData(){
    for (let item of array){
        const div=createItem();
        div.innerHTML=item;
        main.appendChild(div);
        const firstchild=div.firstElementChild;
        const next = firstchild.nextElementSibling;
        next.style.display="none";
        firstchild.addEventListener("click",function(){
            if (next.style.display==="none"){
                return next.style.display="inline-block"
            }
            next.style.display="none";
        })
    }
}

function createItem(){
    const div=document.createElement("div");
    div.classList.add("container");
    return div;
}

// form data

resetButton.addEventListener("click",()=>{
    const container=document.querySelectorAll(".container");
    for (let i of container){
        i.remove();
    }
})

const name=document.querySelector("#name");
const designation=document.querySelector("#designation");
const department=document.querySelector("#department");
const dob=document.querySelector("#dob");
const number=document.querySelector("#number");
const email=document.querySelector("#email");
const address=document.querySelector("#address");
const image=document.querySelector("#image");

modalOpen.addEventListener("click",()=>{
    modal.style.display="block"
})

closeBtn.addEventListener("click",()=>{
    modal.style.display="none";
})

window.addEventListener("click",(e)=>{
    if (e.target==modal){
        modal.style.display="none"
    }
})


submit.addEventListener("click",()=>{
    let div=createEmployee(
        name.value,
        designation.value,
        department.value,
        dob.value,
        number.value,
        email.value,
        address.value,
        image.value
    );
    const Image=div.image;
    div=div.employee;
    storeData(div);
    const firstchild=div.firstElementChild;
    div.classList.add("container");
    main.appendChild(div);
    const next = firstchild.nextElementSibling;
    next.appendChild(Image);
    next.style.display="none";
    firstchild.addEventListener("click",function(){
        if (next.style.display==="none"){
           return next.style.display="inline-block"
        }
    	next.style.display="none";
    })
    modal.style.display="none"
})

var loadFile = function(event) {
	
     path = URL.createObjectURL(event.target.files[0]);
     
      
};


function createEmployee(name,designation,department,dob,number,email,address,image) {
    const employeeRecord=document.createElement("div");
    employeeRecord.innerHTML=`
   
       <button class="butn toggle-button">employee</button>
    
     <div>
    
    <div>
        <span class="left">Name:</span>
        <span class="right">${name}</span>
    </div>
    <div>
        <span class="left">Designation:</span>
        <span class="right">${designation}</span>
    </div>
    <div>
        <span class="left">Department:</span>
        <span class="right">${department}</span>
    </div>
    <div>
        <span class="left">Date of Birth:</span>
        <span class="right">${dob}</span>
    </div>
    <div>
        <span class="left">Contact Number:</span>
        <span class="right">${number}</span>
    </div>
    <div>
        <span class="left">Email:</span>
        <span class="right">${email}</span>
    </div>
    <div>
        <span class="left">Address:</span>
        <span class="right">${address}</span>
    </div>
   
  <button class="button"><i class="fas fa-pencil-alt"></i></button>
  <button class="button"><i class="fas fa-trash-alt"></i></button> 
`;
var image = document.createElement("IMG");
image.src = path;
image.id ="gap";

//    employeeRecord.appendChild(image);
   return {employee:employeeRecord,image:image};
 
    
}
function myfun(){
    alert("working");
    var a=document.getElementById("number").value;
    if(a===""){
    document.getElementById("messages").innerHTML="**please fill mobile number";
    
    }
    else if(isNaN(a)){
    document.getElementById("messages").innerHTML="**enter only numeric values";

    }
    else if(a.length<10){
    document.getElementById("messages").innerHTML="**mobile number must be 10 digits";
    
    }
    else if(a.length>10){
    document.getElementById("messages").innerHTML="**mobile number must be 10 digits";
    
    }
    else((a.charAt(0)!=9) && (a.charAt(0)!=8) && (a.charAt(0)!=7))
    {
    document.getElementById("messages").innerHTML="**mobile number must start with 9 or 6 or 7";
    
    }
    }
    
    
 


