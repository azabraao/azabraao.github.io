let primaryBackground=document.querySelectorAll(".jsPrimaryBackground"),secondaryBackground=document.querySelectorAll(".jsSecondaryBackground"),secondaryColor=document.querySelectorAll(".jsSecondaryColor"),primaryColor=document.querySelectorAll(".jsPrimaryColor"),primaryFill=document.querySelectorAll(".jsPrimaryFill"),secondaryFill=document.querySelectorAll(".jsSecondaryFill"),secondaryBorder=document.querySelectorAll(".jsSecondaryBorder"),primaryBorder=document.querySelectorAll(".jsPrimaryBorder"),chromeTab=document.querySelector("meta[name=theme-color]"),palletes=[{primary:"#001427",secondary:"#F4D58D"},{primary:"#000000",secondary:"#ffffff"},{primary:"#271F30",secondary:"#D0FCB3"},{primary:"#331E38",secondary:"#A0C1B9"},{primary:"#44355B",secondary:"#ECA72C"},{primary:"#5B7553",secondary:"#C3E8BD"},{primary:"#136F63",secondary:"#E0CA3C"},{primary:"#3E2F5B",secondary:"#E0CA3C"},{primary:"#0353A4",secondary:"#B9D6F2"},{primary:"#424242",secondary:"#FCFC62"}];function randomIndex(e,o){return e=Math.ceil(e),o=Math.floor(o),Math.floor(Math.random()*(o-e+1))+e}function randomizeTheme(){let e=randomIndex(0,palletes.length-1);palleteIsRepeated(e)?randomizeTheme():(primaryBackground.forEach(o=>{o.style.backgroundColor=palletes[e].primary}),secondaryBackground.forEach(o=>{o.style.backgroundColor=palletes[e].secondary}),primaryColor.forEach(o=>{o.style.color=palletes[e].primary}),secondaryColor.forEach(o=>{o.style.color=palletes[e].secondary}),secondaryFill.forEach(o=>{o.style.fill=palletes[e].secondary}),primaryFill.forEach(o=>{o.style.fill=palletes[e].primary}),primaryBorder.forEach(o=>{o.style.borderColor=palletes[e].primary}),secondaryBorder.forEach(o=>{o.style.fill=palletes[e].secondary}),chromeTab.setAttribute("content",palletes[e].primary),window.localStorage.setItem("pallete-index",e))}function palleteIsRepeated(e){return window.localStorage.getItem("pallete-index")==e}randomizeTheme(),document.addEventListener("wheel",handleScroll);let firstSection=document.querySelector(".jsFirstSection"),portifolio=document.querySelector(".jsPortifolio"),portifolioItems=document.querySelectorAll(".jsPortifolioItem"),closeModal=document.querySelector(".jsCloseModal");function hideModal(){let e=document.querySelector(".jsPortifolioModal");e.classList.contains("active")&&e.classList.remove("active"),setTimeout(()=>{e.style.display="none"},500),e.classList.add("inactive"),document.querySelector("body").style.overflowY="scroll"}function activeModal(e){e.style.display="block",e.classList.contains("inactive")&&e.classList.remove("inactive"),e.classList.add("active");document.querySelector("body")}function showModal(e){let o=document.querySelector(".jsPortifolioModal");activeModal(o);let r=matchPortifolioItem(e.path),t=r.querySelector(".item__img"),l=r.querySelector(".jsItemPortifolioDesc").innerHTML,a=document.querySelector(".jsModalImage"),i=document.querySelector(".jsModalContent"),n=r.dataset.brand;i.innerHTML=l,a.src=t.getAttribute("src"),o.dataset.brand=n}function matchPortifolioItem(e){return e.filter(e=>{if(e.classList?e.classList.contains("jsPortifolioItem"):null)return e})[0]}function isClicked(e){return e.classList.contains("clicked")}function handleScroll(e){const o={scrollIndex:0,down(){o.scrollIndex=o.scrollIndex+1},up(){o.scrollIndex=o.scrollIndex-1,console.log(o.scrollIndex)}};if(e.deltaY>0?o.down():o.up(),isScrollingDown(e))firstSection.classList.remove("forward"),firstSection.classList.add("backward"),portifolio.classList.remove("unscrolling"),portifolio.classList.add("scrolling");else{0===window.scrollY&&(firstSection.classList.remove("backward"),firstSection.classList.add("forward"),portifolio.classList.remove("scrolling"),portifolio.classList.add("unscrolling"))}}function isScrollingDown(e){return e.deltaY>0}portifolioItems.forEach(e=>{e.addEventListener("click",showModal)}),closeModal.addEventListener("click",hideModal);let titles=["a Front-end","an Entrepreneur","a Maker","a Web Developer"],transitionalTitle=document.querySelector(".jsTransitional");function changeTitle(e,o=0){resetTitle(),showLetterByLetter(e,o)}function resetTitle(){transitionalTitle.textContent=""}function showLetterByLetter(e,o){let r=e.split("");r.map((e,t)=>{setTimeout(()=>{addLetterToTitle(e),isLastLetter(t,r)&&changeTitleRecursion(o+1)},increaseSeconds(t))})}function addLetterToTitle(e){transitionalTitle.textContent+=e}function increaseSeconds(e){return 100*e}function isLastLetter(e,o){return e===o.length-1}function changeTitleRecursion(e){islastTitle(e)&&(e=0),setTimeout(()=>{changeTitle(titles[e],e)},1e3)}function islastTitle(e){return e===titles.length}changeTitle(titles[0],0);