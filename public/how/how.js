const btn = document.querySelector(".btn");
const des = document.querySelector(".des");
const icon = document.querySelector(".icon");

btn.addEventListener("click",()=>{
    if(btn.classList.contains("fir")){
        btn.classList.add("sec");
        icon.innerHTML = `<img src="../assets/img/code.png">`;
        des.innerText = "Give receiver the room id for him to input it from his side or scan qr code below.";
    }else if(btn.classList.contains("sec")){
        btn.classList.remove("fir");
        btn.classList.add("thi");
        icon.innerHTML = `<img src="../assets/img/enter.png">`;
        des.innerText = "Enter the room id that sender created in the input box.";
    }else{
        btn.classList.add("fir");
        icon.innerHTML = `<i class="fa-solid fa-user-plus"></i>`;
        des.innerText = "Press the above icon to join room and receive files";
    }
    
})