
    let receiverID;
    const getlang = localStorage.getItem("maisunglang");
    const p = document.querySelector(".p");
    const createbtn = document.querySelector(".createbtn");
    const rid = document.querySelector(".rid");
    const or = document.querySelector(".or");
    const scan = document.querySelector(".scan");
    const choose = document.querySelector(".choose");
    const shared = document.querySelector(".shared");
    const getdl = localStorage.getItem("maidl");
    const socket = io();

    //for window loaded
    window.addEventListener("load",()=>{
        if(getlang == "tai"){
            p.innerText = "တဵၵ်းတူမ်ႇတီႈတႂ်ႈၼႆႉတႃႇ သၢင်ႈႁဵတ်းမၢႆၶွင်ႉ";
            createbtn.innerText = "သၢင်ႈႁဵတ်းမၢႆၶွင်ႉ";
            rid.innerText = "မၢႆၶွင်ႉ";
            or.innerText = "___ ဢမ်ႇၼၼ် ___";
            scan.innerText = "ၽတ်း QR code ၼႆႉတႃႇၵပ်းၶွင်ႉ";
            choose.innerText = "လိူၵ်ႈၾႆႇ";
            shared.innerText = "ၾႆႇဢၼ်သူင်ႇဢွၵ်ႇ";
        }else if(getlang === "eng"){}else if(getlang === "chn"){
            p.innerText = "按下面的按钮创建房间 ID";
            createbtn.innerText = "创建房间";
            rid.innerText = "房间号";
            or.innerText = "___ 或者 ___";
            scan.innerText = "扫描二维码加入房间";
            choose.innerText = "选择文件";
            shared.innerText = "共享文件";
        }
    })
    //end of window loaded

    let generateID = `${Math.trunc(Math.random()*999)}-${Math.trunc(Math.random()*999)}-${Math.trunc(Math.random()*999)}`
    
    document.querySelector("#sender-start-con-btn").addEventListener("click",function(){
        let joinID = generateID;
        document.querySelector(".p").style.display = "none";
        document.querySelector("#sender-start-con-btn").style.display = "none";
        document.querySelector("#join-id").innerHTML = `<h3 class="rid">Room ID</h3><span>${joinID}</span><p class="or">___ or ___</p><img src="https://chart.googleapis.com/chart?cht=qr&chl=${joinID}&chs=260x260&chld=L|0"><p class="scan">Scan this qr code to join</p>`;
        socket.emit("sender-join",{
            uid: joinID
        });
        socket.on("init",function(uid){
            receiverID = uid;
            document.querySelector(".join-screen").classList.remove("active");
            document.querySelector(".fs-screen").classList.add("active");
            document.querySelector(".ani").style.display = "none";
            var sound = new Audio("../assets/connect.mp3");
            sound.play();
        });
        document.querySelector("#file-input").addEventListener("change",function(e){
            let file = e.target.files[0];
            if(!file){
                return;
            }
            let reader = new FileReader();
            reader.onload = function(e){
                let buffer = new Uint8Array(reader.result);
                let el = document.createElement("div");
                el.classList.add("item");
                el.innerHTML = `<div class="filename">${file.name}</div><div class="prograss">0%</div>`;
                document.querySelector(".file-list").appendChild(el);
                shareFile({
                    filename:file.name,
                    total_buffer_size:buffer.length,
                    buffer_size:1024
                },buffer,el.querySelector(".prograss"));
            }
            reader.readAsArrayBuffer(file);
        });
        function shareFile(metadata,buffer,prograss_node){
            socket.emit("file-meta",{
                uid:receiverID,
                metadata:metadata
            });
            socket.on("fs-share",function(){
                let chunk = buffer.slice(0,metadata.buffer_size);
                buffer = buffer.slice(metadata.buffer_size,buffer.length);
                prograss_node.innerText = Math.trunc((metadata.total_buffer_size - buffer.length) / metadata.total_buffer_size * 100)+"%";
                if(chunk.length !=0){
                    socket.emit("file-raw",{
                        uid:receiverID,
                        buffer:chunk
                    })
                }
            })
        }
    });

    if(getdl === "light"){
        document.documentElement.style.setProperty("--color","#333");
        document.documentElement.style.setProperty("--background","#fff");
    }else{
        document.documentElement.style.setProperty("--color","#fff");
        document.documentElement.style.setProperty("--background","#333");
    }