// https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example

const btn=document.querySelector(".app button");
const inputBarValue=document.querySelector("#inputBar");
const imgDiv=document.querySelector(".img");

const qrCode=()=>{
   imgDiv.innerHTML=""
    let inputt=inputBarValue.value;
    if(!(inputt=="")){
        imgDiv.style.display="inherit";
        let link=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputt}`;
        let img=document.createElement("img");
        img.setAttribute("src",link);
      
        imgDiv.appendChild(img);
    }else {
        imgDiv.style.display="none";
        inputBarValue.classList.toggle("error");
        setTimeout(() => {
            inputBarValue.classList.toggle("error");
        }, 1000);
    }

   }
 
btn.addEventListener("click",qrCode)
inputBarValue.addEventListener("keydown",(e)=>{
    if(e.key==="Enter"){
        qrCode();
    }
})
