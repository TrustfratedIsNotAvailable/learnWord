 const loadLesson = (level) => {
    fetch(`https://openapi.programming-hero.com/api/level/${level}`)
        .then((res) => res.json())
        .then((data) => displayLesson(data.data));
};

const displayLesson =(lessons)=>{
    // console.log(lessons);

    const lessonContainer = document.getElementById('lesson-container');
    lessonContainer.innerHTML='';

    // handle empty lesson 
    if(lessons.length == 0){
        lessonContainer.innerHTML=`
        <div class="flex flex-col items-center p-8 col-span-3">
            <img class="w-20 h-20 mb-2" src="./images/alert-error.png" alt="">
            <p class="mb-2 text-[13px] text-[#79716B]">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
            <h1 class="text-[30px] text-[#292524]">নেক্সট Lesson এ যান</h1>
        </div>
     `;
      return;  
    }

    lessons.forEach(lesson => {
        const div = document.createElement('div');
        div.classList.add("bg-white","pt-10","pb-6","rounded-lg")
        div.innerHTML=`
        <div class="text-center mb-5">
            <h1 class="text-[24px] font-bold">${lesson.word}</h1>
            <p class="text-[16px] font-medium">Meaning/Pronunciation</p>
            <p class="text-[20px] font-semibold text-[#18181B90]">'${lesson.meaning} / ${lesson.pronunciation}'</p>
        </div>
        <div class="flex justify-between px-8">
                <button class="btn btn-sm bg-[#1A91FF10] border-none"><i class="fa-solid fa-circle-info"></i></button>
                <button class="btn btn-sm bg-[#1A91FF10] border-none"><i class="fa-solid fa-volume-high"></i></button>
        </div>
        `;
     
        lessonContainer.appendChild(div);

    });
}


// id: 5
// level: 1
// meaning: "আগ্রহী"
// pronunciation: "ইগার"
// word: "Eager"