const details = (id) =>{
  console.log(id);
  fetch(`https://openapi.programming-hero.com/api/word/${id}`)
  .then((res)=>res.json())
  .then((data)=>detailContent(data.data));
}

const detailContent = (content) =>{
  console.log(content);
      const detail = document.getElementById('detail');
      detail.showModal(); 
      const detailBox = document.getElementById('detail-box'); 
      detailBox.innerHTML=`
        <div class="card-body p-3">
            <h1 class="text-[28px] font-semibold">${content.word} (<i class="fa-solid fa-microphone-lines"></i> :${content.pronunciation})</h1>
            <div class="text-[16px]">
                <p class="font-semibold">Meaning</p>
                <p class="text-[#00000080] hind-siliguri">${content.meaning ? content.meaning : "অর্থ পাওয়া যায়নি"}</p>
                <p class="font-semibold">Example</p>
                <p class="text-[#00000080]">${content.sentence}</p>
                <p class="font-semibold hind-siliguri">সমার্থক শব্দ গুলো</p>
            </div>
           
            <div id="synonym" class="flex gap-1">
                <!-- dynamic synonym  -->
            </div> 
        </div>
        <div class="modal-action  flex justify-start">
          <form method="dialog">

          <button class="btn btn-sm btn-blue btn-effect">Complete Learning</button>
          </form>
        </div>
      `;

      // dynamic button generate
      const synonym = document.getElementById('synonym');
      //empty synonym
      if(content.synonyms.length == 0)
        return;

      content.synonyms.forEach(syn => {
        const synButton = document.createElement('button');
        synButton.classList.add("btn","btn-sm","bg-[#EDF7FF]","text-[12px]");
        synButton.innerText = syn;
        synonym.appendChild(synButton);
      });

      detail.appendChild(detailBox);

}

function pronounceWord(word) {
  const utterance = new SpeechSynthesisUtterance(word);
  utterance.lang = 'en-EN'; // English
  window.speechSynthesis.speak(utterance);
}

// id: 5
// level: 1
// meaning: "আগ্রহী"
// partsOfSpeech: "adjective"
// points: 1
// pronunciation: "ইগার"
// sentence: "The kids were eager to open their gifts."
// synonyms: (3) ['enthusiastic', 'excited', 'keen']
// word: "Eager"