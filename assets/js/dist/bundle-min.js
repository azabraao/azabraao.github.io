document.addEventListener("wheel",paralaxing);let firstSection=document.querySelector(".jsFirstSection"),portifolio=document.querySelector(".jsPortifolio"),portifolioItems=document.querySelectorAll(".jsPortifolioItem"),closeModal=document.querySelector(".jsCloseModal");function hideModal(){let e=document.querySelector(".jsPortifolioModal");e.classList.contains("active")&&e.classList.remove("active"),setTimeout(()=>{e.style.display="none"},500),e.classList.add("inactive"),document.querySelector("body").style.overflowY="scroll"}function activeModal(e){e.style.display="block",e.classList.contains("inactive")&&e.classList.remove("inactive"),e.classList.add("active");document.querySelector("body")}function showModal(e){let t=document.querySelector(".jsPortifolioModal");activeModal(t);let o=matchPortifolioItem(e.path),r=o.querySelector(".item__img"),i=o.querySelector(".jsItemPortifolioDesc").innerHTML,l=document.querySelector(".jsModalImage"),n=document.querySelector(".jsModalContent"),a=o.dataset.brand;n.innerHTML=i,l.src=r.getAttribute("src"),t.dataset.brand=a}function matchPortifolioItem(e){return e.filter(e=>{if(e.classList?e.classList.contains("jsPortifolioItem"):null)return e})[0]}function isClicked(e){return e.classList.contains("clicked")}function paralaxing(e){isScrollingDown(e)?(firstSection.classList.remove("forward"),firstSection.classList.add("backward"),portifolio.classList.remove("unscrolling"),portifolio.classList.add("scrolling")):(firstSection.classList.remove("backward"),firstSection.classList.add("forward"),portifolio.classList.remove("scrolling"),portifolio.classList.add("unscrolling"))}function isScrollingDown(e){return 100===e.deltaY}portifolioItems.forEach(e=>{e.addEventListener("click",showModal)}),closeModal.addEventListener("click",hideModal);let header=document.querySelector(".header"),contact=document.querySelector(".contact"),chromeTab=document.querySelector("meta[name=theme-color]"),palletes=[{primary:"#001427",secondary:"#F4D58D"},{primary:"#000000",secondary:"#ffffff"},{primary:"#271F30",secondary:"#D0FCB3"},{primary:"#331E38",secondary:"#A0C1B9"},{primary:"#44355B",secondary:"#ECA72C"},{primary:"#5B7553",secondary:"#C3E8BD"},{primary:"#136F63",secondary:"#E0CA3C"},{primary:"#E0CA3C",secondary:"#3E2F5B"},{primary:"#B9D6F2",secondary:"#0353A4"},{primary:"#424242",secondary:"#FCFC62"}];function randomIndex(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e}function randomizeTheme(){let e=randomIndex(0,palletes.length-1);palleteIsRepeated(e)?randomizeTheme():(header.style.backgroundColor=palletes[e].primary,header.style.color=palletes[e].secondary,contact.style.backgroundColor=palletes[e].secondary,contact.style.color=palletes[e].primary,chromeTab.setAttribute("content",palletes[e].primary),window.localStorage.setItem("pallete-index",e))}function palleteIsRepeated(e){return window.localStorage.getItem("pallete-index")==e}randomizeTheme();let titles=["Front-end","Empreendedor","Maker","Desenvolvedor Web"],transitionalTitle=document.querySelector(".jsTransitional");function changeTitle(e,t=0){resetTitle(),showLetterByLetter(e,t)}function resetTitle(){transitionalTitle.textContent=""}function showLetterByLetter(e,t){let o=e.split("");o.map((e,r)=>{setTimeout(()=>{addLetterToTitle(e),isLastLetter(r,o)&&changeTitleRecursion(t+1)},increaseSeconds(r))})}function addLetterToTitle(e){transitionalTitle.textContent+=e}function increaseSeconds(e){return 100*e}function isLastLetter(e,t){return e===t.length-1}function changeTitleRecursion(e){islastTitle(e)&&(e=0),setTimeout(()=>{changeTitle(titles[e],e)},1e3)}function islastTitle(e){return e===titles.length}changeTitle(titles[0],0);