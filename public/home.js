const menubtn = document.querySelector(".menubtn");
const menu = document.querySelector(".menu");
const menuclose = document.querySelector(".drawerclose");
const banner = document.querySelector(".banner");
const qr = document.querySelector(".qr");
const qrclose = document.querySelector(".qrclose");
const changelangbtn = document.querySelector(".changelang");
const pop = document.querySelector(".pop");
const tailang = document.querySelector(".tailang");
const englang = document.querySelector(".englang");
const chnlang = document.querySelector(".chnlang");
let getlang;
const ttitle = document.querySelector(".title");
const des = document.querySelector(".des");
const c = document.querySelector(".c");
const contact = document.querySelector(".contact");
const donate = document.querySelector(".donate");
const team = document.querySelector(".team");
const news = document.querySelector(".news");
const ctroom = document.querySelector(".ctroom");
const croomf = document.querySelector(".croomf");
const cbroom = document.querySelector(".cbroom");
const jtroom = document.querySelector(".jtroom");
const jroomf = document.querySelector(".jroomf");
const jbroom = document.querySelector(".jbroom");
const tsett = document.querySelector(".tsett");
const rsett = document.querySelector(".rsett");
const bsett = document.querySelector(".bsett");
const howb = document.querySelector(".howb");
const howr = document.querySelector(".howr");
const clangb = document.querySelector(".clangb");
const clangr = document.querySelector(".clangr");
const invite = document.querySelector(".invite");
const st = document.querySelector(".st");
const sdes = document.querySelector(".sdes");

menubtn.addEventListener("click",()=>{
    menu.style.left = "0";
    menubtn.classList.add("show");
})
menuclose.addEventListener("click",()=>{
    menu.style.left = "-369px";
    menubtn.classList.remove("show");
})
window.addEventListener("load",()=>{
    qr.style.display = "block";
    getlang = localStorage.getItem("maisunglang");
    console.log(getlang)
    if(getlang){

    }else{
        localStorage.setItem("maisunglang","tai");
    };
    if(getlang == "tai"){
        ttitle.innerText = "သူင်ႇၾႆႇၼိူဝ်ဢွၼ်ႇလၢႆး";
        des.innerText = "သူင်ႇၾႆႇပၼ်ၵၼ်ၼိူဝ်ဝႅပ်ႉသၢႆႉ ဢမ်ႇလူဝ်ႇတိုဝ်းဢႅပ်ႉသင်";
        c.innerText = "လိူၵ်ႈတၢင်း";
        contact.innerText = "ၵပ်းသိုပ်ႇ";
        donate.innerText = "ၵမ်ႉထႅမ်လႄႈလူႇ";
        team.innerText = "ၸူမ်းႁဝ်းၶႃႈ";
        news.innerText = "မီးၶၢဝ်ႇသင်";
        ctroom.innerText = "သၢင်ႈၶွင်ႉ";
        croomf.innerText = "သၢင်ႈၶွင်ႉ";
        cbroom.innerHTML = "သၢင်ႈၶွင်ႉ<h5>ၽုၺ်ႇၶွင်ႉတႃႇသူင်ႇၾႆႇပၼ်ဢူၺ်းၵေႃႉ</h5>";
        jtroom.innerText = "ၶဝ်ႈၶွင်ႉ";
        jroomf.innerText = "ၶဝ်ႈၶွင်ႉ";
        jbroom.innerHTML = "ၶဝ်ႈၶွင်ႉ<h5>ၶဝ်ႈၶွင်ႉတႃႇႁပ်ႉဢဝ်ၾႆႇဢၼ်သူင်ႇမႃး</h5>";
        tsett.innerText = "မႄးၶွင်ႉ";
        rsett.innerText = "မႄးၶွင်ႉ";
        bsett.innerText = "မႄးၶွင်ႉ";
        howb.innerText = "လၢႆးတိုဝ်း";
        howr.innerText = "လၢႆးတိုဝ်း";
        clangb.innerText = "လၢႆႈၽႃႇသႃႇ";
        clangr.innerText = "လၢႆႈၽႃႇသႃႇ";
        invite.innerText = "ၽိတ်ႈဢူၺ်းၵေႃႉ";
        st.innerText = "လိူၵ်ႈၽႃႇသႃႇ";
        sdes.innerText = "လွင်ႈလိူၵ်ႈဢၼ်ၼႆႇတေႁဵတ်းႁႂ်ႈ ဝႅပ်ႉသၢႆႉလၢႆႈၽႃႇသႃႇ";
    }else if(getlang === "eng"){}else if(getlang === "chn"){
        ttitle.innerText = "在线文件发送者";
        des.innerText = "无需下载任何应用程序即可将文件发送给您的朋友";
        c.innerText = "选择平台";
        contact.innerText = "联系我们";
        donate.innerText = "捐赠或支持";
        team.innerText = "我們的隊伍";
        news.innerText = "有什么消息";
        ctroom.innerText = "创建房间";
        croomf.innerText = "创建房间";
        cbroom.innerHTML = "创建房间<h5>创建空间以将文件发送给您的朋友</h5>";
        jtroom.innerText = "加入房间";
        jroomf.innerText = "加入房间";
        jbroom.innerHTML = "加入房间<h5>加入房间以接收来自朋友的文件</h5>";
        tsett.innerText = "设置";
        rsett.innerText = "设置";
        bsett.innerText = "设置";
        howb.innerText = "如何使用";
        howr.innerText = "如何使用";
        clangb.innerText = "改变语言";
        clangr.innerText = "改变语言";
        invite.innerText = "邀请朋友";
        st.innerText = "选择语言";
        sdes.innerText = "您的选择将更改此网站的语言";
    }
})
window.addEventListener("scroll",()=>{
    if(menubtn.classList.contains("show")){
        menu.style.left = "-369px";
        menubtn.classList.remove("show");
    }
})
qrclose.addEventListener("click",()=>{
    qr.remove();
})
changelangbtn.addEventListener("click",()=>{
    pop.style.display = "flex";
})
pop.addEventListener("click",()=>{
    pop.style.display = "none";
})
tailang.addEventListener("click",()=>{
    localStorage.setItem("maisunglang","tai");
    alert("ဝႅပ်ႉသၢႆႉၼႆႉလိူၵ်ႈၽႃႇသႃႇတႆးယဝ်ႉၶႃႈ");
})
englang.addEventListener("click",()=>{
    localStorage.setItem("maisunglang","eng");
    alert("English language was set as site language");
})
chnlang.addEventListener("click",()=>{
    localStorage.setItem("maisunglang","chn");
    alert("中文被设置为网站语言");
})