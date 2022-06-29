const main1=document.querySelector('.main1');
const btnbody=document.body;
const div=document.querySelector('.div');
const p1=document.querySelector('.p1');
const berk1=document.querySelector('.berk1')
const window1=document.querySelector('.window')
const exit=document.querySelector('.exit')
const header=document.querySelector('.header')

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
   <p   style="margin-left: 20px;float: left;width: 100px;">${obj.data[i].name.transliteration.en}</p>
   <p  style="width: 100px; margin-left: 10px;">${obj.data[i].name.short}</p>
   <p style="width: 100px;margin-left: 10px;">${obj.data[i].numberOfVerses} Ayahs</p>
   </div>`

   main1.insertAdjacentHTML('beforeend',html);
   

}

}
let elementID;
main1.addEventListener('click',function(e){
  
  
  let element=e.target.closest('.div');
  console.log(element)
  if(!element) return;
  elementID=element.getAttribute('id');
  console.log(elementID);
  
  
  fetch(`https://api.quran.sutanlab.id/surah/${elementID}`).then(function(response){
    return response.json();
  })
  .then(function(res){
    window1.classList.toggle('berk')
  
    console.log(res)
    oyna(res)
  })
})
// let a;
// let arr=[];
// const uzbek=async function(){
//   await fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/uzb-alaaudeenmansou.json`)
// .then(function(response){
//   return response.json();
// })
// .then(function(res){
//   // console.log(res);
//   for(let i=0;i<6000;i++){
//     if(res.quran[i].chapter==elementID && res.quran[i].verse==i+1){
//       a=res.quran[i].text;
//       arr.push(a);
//       console.log(arr)
//     }
//   }
//   // console.log(arr) 
   
    
  
  
// })

// }
// uzbek()

const oyna=function(obj){
  // window1.innerHTML='';
  let html2=`<h2>${obj.data.name.transliteration.en}</h1>`
  berk1.insertAdjacentHTML('beforeend',html2)
  for(let i=0;i<(obj.data.verses).length;i++){
    
  
    let html1=`
    
    <h4 class="ayah">${i+1} Ayahs</h4>
    <h3>${obj.data.verses[i].text.arab}</h3>
    <h3>${obj.data.verses[i].text.transliteration.en}</h3>
    
    <audio controls>
    <source src="${obj.data.verses[i].audio.secondary[0]}" type="audio/ogg">
    </audio>`
    berk1.insertAdjacentHTML('beforeend',html1)
    // console.log(obj.data.verses[i].audio.secondary[0])
  }
  

}



window1.addEventListener('click',function(e){
  let element1=e.target.closest('.exit');
  console.log(element1)
  if(!element1) return;
  let elementID1=element1.getAttribute('id');
  console.log(elementID1);
  if(elementID1=='exit'){
    document.querySelector('h3').innerHTML='';
    // window1.innerHTML='';
    window1.classList.toggle('berk')
    location.reload();
  }

})

