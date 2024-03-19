
const generateOtp = (num)=>{

    let random = "0123456789"
        var otp = '';
    for(let i = 0;i<num;i++){
        
     otp += random[Math.floor(Math.random() * 10)]

    }
    return otp

}
generateOtp(4);

const container = document.getElementsByClassName("container");
let inputBox = document.getElementById('inputBox')

 const btn = document.getElementsByClassName('btn')[0]

 btn.addEventListener('click',() =>{
    const generateOttp = generateOtp(4)
   
        inputBox.value = generateOttp;
    })
 

  




