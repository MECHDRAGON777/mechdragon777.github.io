for (var i=0;i<document.getElementsByTagName("youtube").length;i++) {
    var tag = document.getElementsByTagName("youtube")[i];
    tag.innerHTML = `<iframe width="420" height="315" src="`+"https://www.youtube.com/embed/"+(new URL(tag.getAttribute("href")).searchParams.get("v"))+`"></iframe></td>`
    tag.style.display = "content";
}