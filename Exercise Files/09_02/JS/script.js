var extraLinks = document.querySelectorAll('a[href^="http"]');

for(var i =0; i< extraLinks.length; i++){
  if(!extraLinks[i].hasAttribute("target")){
    extraLinks[i].setAttribute("target","_blank");
    console.log(extraLinks[i]);
  }
}
