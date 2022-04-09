const main1=document.querySelector('.main1');
const btnbody=document.body;
const div=document.querySelector('.div');
const p1=document.querySelector('.p1');
const berk1=document.querySelector('.berk1')
const window1=document.querySelector('.window')

  fetch(`https://api.quran.sutanlab.id/surah`).then(function(response){
    return response.json();
  })
  .then(function(res){
    
    console.log(res)
    
    func(res)
    
  })

  
 func=function(obj){
  for(let i=0;i<=114;i++){
  html=` <div class="div" id="${obj.data[i].number}"><div  class="p1" style="float: left;margin-left: 10px;"><p class="p2">${obj.data[i].number}</p></div>
   <p   style="margin-left: 20px;float: left;width: 100px;">${obj.data[i].name.transliteration.id}</p>
   <p  style="width: 100px; margin-left: 10px;">${obj.data[i].name.short}</p>
   <p style="width: 100px;margin-left: 10px;">${obj.data[i].numberOfVerses} Ayahs</p>
   </div>`

   main1.insertAdjacentHTML('beforeend',html);
   

}
}
btnbody.addEventListener('click',function(e){
  window1.classList.toggle('berk')
  let element=e.target.closest('.div');
  console.log(element)
  if(!element) return;
  let elementID=element.getAttribute('id');
  console.log(elementID);
  fetch(`https://api.quran.sutanlab.id/surah/${elementID}`).then(function(response){
    return response.json();
  })
  .then(function(res){
    console.log(res)
    oyna(res)
  })
})

const oyna=function(obj){
  for(let i=0;i<(obj.data.verses).length;i++){
    let html1=`<h3>${obj.data.verses[i].text.arab}</h3>`
    berk1.insertAdjacentHTML('afterbegin',html1)
    console.log(obj.data.verses[i].text.arab)
  }
  

}

