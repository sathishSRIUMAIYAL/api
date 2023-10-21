function Login(){
    alert("Login Success")
}

function Signup(){
    alert("Signup Success")
}

fetch('https://jsonplaceholder.typicode.com/comments')
.then((data)=>{
    return data.json();

})
.then((compl)=>{
   // console.log(compl[4].)
   let n=10
   let data1=''
   compl.slice(0,10).map((vale)=>{
    data1+=`
    <div style='border:solid 2px white'>
      <h4 class=" text-info p-2">Id=${vale.id}</h4>
      <h4 class="text-white p-2">Name=${vale.name}</h4>
      <p class="text-white p-2">Email=${vale.email}</p>
      <p class="text-white p-2">${vale.body}</p>
  </div>`
   })
   document.getElementById('outt').innerHTML=data1



})
.catch((err)=>{
    console.log(err);
})




const form=document.querySelector('#form')
const username=document.querySelector('#username')
const password=document.querySelector('#password')
const confirmpassword=document.querySelector('#confirmpassword');
const email=document.querySelector("#email")




form.addEventListener('submit',(e)=>{
    
    if(!validateInputs()){
        e.preventDefault();
    };
})

function validateInputs(){
    const usernameVAl=username.value.trim()
    const passwordVAl=password.value.trim()
    const confirmpassVAl=confirmpassword.value.trim()
    const emailval=email.value.trim()

    let success = true

    if (usernameVAl===''){
        success=false
        seterror(username,'username is required')
    }
    else{
        setsuccess(username)
    }
    

    if (passwordVAl===''){
        success=false
        seterror(password,'password is required')
    }
    else if (passwordVAl.length<8){
        success=false
        seterror(password,'password must be atleast 8 characters')
    }
    else{
        setsuccess(password)
    }

    if (confirmpassVAl===''){
        success=false
        seterror(confirmpassword,'conform password is required')
    }
    else if (confirmpassVAl !== passwordVAl){
        success=false
        seterror(confirmpassword,'conform password not match')
    }
    else{
        setsuccess(confirmpassword)
    }
    if (emailval===''){
        success=false
        seterror(email,'Email is required')
    }
    
    else{
        setsuccess(email)
    }
    
    



    return success;
}

function seterror(element,message){
    const input=element.parentElement;
    const error=input.querySelector('.error')

    error.innerText = message
    input.classList.add('error')
    input.classList.remove('success')
}


function setsuccess (element,message){
    const input=element.parentElement;
    const error=input.querySelector('.error')

    error.innerText = '';
    input.classList.add('success')
    input.classList.remove('error')
}








form.addEventListener('submit',(e)=>{
    
    if(!validateInputs()){
        e.preventDefault();
    };
})

function validateInputs(){
    const usernameVAl=username.value.trim()
    const passwordVAl=password.value.trim()
    let success = true
    

    if (usernameVAl===''){
        success=false
        seterror(username,'username is required')
    }
    else{
        setsuccess(username)
    }
    

    if (passwordVAl===''){
        success=false
        seterror(password,'password is required')
    }
    else if (passwordVAl.length<8){
        success=false
        seterror(password,'password must be atleast 8 characters')
    }
    else{
        setsuccess(password)
    }
    return success;
}

function seterror(element,message){
    const input=element.parentElement;
    const error=input.querySelector('.error')

    error.innerText = message
    input.classList.add('error')
    input.classList.remove('success')
}


function setsuccess (element,message){
    const input=element.parentElement;
    const error=input.querySelector('.error')

    error.innerText = '';
    input.classList.add('success')
    input.classList.remove('error')
}


















// let select=document.querySelectorAll('.data')
// let btnb=document.getElementById('btn')
// let resultt=document.getElementById('result')


// let apifile="https://jsonplaceholder.typicode.com/comments"

// fetch(apifile)
// .then(x=>x.json())
// .then(res=>display(res))


// function display(res){
//     //console.log(Object.entries(res)[0][1])
//     let out=Object.entries(res)

//     for (let i=0; i<out.length; i++){
//         let opt=`<option value="${out[i][0]}">${out[i][0]}</option>`
//         select[0].innerHTML+=opt
//         let list=out[i][1]
//         let main=Object.entries(list)
//          let sai =main[2]
//         resultt.innerHTML+=sai+'<br>'
//         console.log()
       
        
//     }
// }

// btnb.addEventListener('click',()=>{
//     let r1=select[0].value
//     if (r1===''){
//         alert('enter value')

//     }
//     else{
//         console.log(r1)
//     }
 


// })




