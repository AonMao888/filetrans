
    let senderID;
    const getlang = localStorage.getItem("maisunglang");
    const enter = document.querySelector(".enter");
    const joinbtn = document.querySelector(".joinbtn");
    const received = document.querySelector(".received");
    const socket = io();

    //for window loaded
    window.addEventListener("load",()=>{
        if(getlang == "tai"){
            enter.innerText = "တဵမ်ႈသႂ်ႇမၢႆၶွင်ႉဢၼ်ၵေႃႉတေသူင်ႉမႃးၼၼ်ႉ";
            joinbtn.innerText = "ၵပ်းၶွင်ႉ";
            received.innerText = "ၾႆႇဢၼ်ႁပ်ႉလႆႈ";
        }else if(getlang === "eng"){}else if(getlang === "chn"){
            enter.innerText = "输入发件人的房间号";
            joinbtn.innerText = "加入房间";
            received.innerText = "收到的文件";
        }
    })
    //end of window loaded

    let generateID = `${Math.trunc(Math.random()*999)}-${Math.trunc(Math.random()*999)}-${Math.trunc(Math.random()*999)}`
    
    document.querySelector("#receiver-start-con-btn").addEventListener("click",function(){
        senderID = document.querySelector(".join-id").value;
        if(senderID.length==0){
            return;
        }
        let joinID = generateID;
        socket.emit("receiver-join",{
            uid: joinID,
            sender_uid:senderID
        });
        var sound = new Audio("../assets/connect.mp3");
        sound.play();
        document.querySelector(".join-screen").classList.remove("active");
        document.querySelector(".fs-screen").classList.add("active");
    });
    let fileShare = {};
    socket.on("fs-meta",function(metadata){
        fileShare.metadata = metadata;
        fileShare.transmitted = 0;
        fileShare.buffer = [];

        let el = document.createElement("div");
        el.classList.add("item");
        el.innerHTML = `<div class="filename">${metadata.filename}</div><div class="prograss">0%</div>`;
        document.querySelector(".file-list").appendChild(el);

        fileShare.prograss_node = el.querySelector(".prograss");

        socket.emit("fs-start",{
            uid:senderID
        })
    })
    socket.on("fs-share",function(buffer){
        fileShare.buffer.push(buffer);
        fileShare.transmitted += buffer.byteLength;
        fileShare.prograss_node.innerText = Math.trunc(fileShare.transmitted / fileShare.metadata.total_buffer_size * 100)+ "%";
        if(fileShare.transmitted == fileShare.metadata.total_buffer_size){
            download(new Blob(fileShare.buffer),fileShare.metadata.filename);
            fileShare = {};
            var sound = new Audio("../assets/complete.mp3");
            sound.play();
        }else{
            socket.emit("fs-start",{
                uid:senderID
            });
        }
    })
