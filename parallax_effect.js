const layer1 = document.getElementsByClassName("layer-1")[0];
const layer2 = document.getElementsByClassName("layer-2")[0];
const layer3 = document.getElementsByClassName("layer-3")[0];
const layer4 = document.getElementsByClassName("layer-4")[0];

window.onscroll = (e) => {
    layer4.style.transform = "translateY(-"+window.scrollY+"px)";
    layer3.style.transform = "translateY(-"+window.scrollY+"px) translateX(-"+window.scrollY/2+"px)";
    layer2.style.transform = "translateY(-"+window.scrollY/2+"px)";
    layer1.style.transform = "translateY(-"+window.scrollY/2+"px)";
}