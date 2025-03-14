const loadLessonButton =()=>{
    fetch('https://openapi.programming-hero.com/api/levels/all')
    .then((res)=>res.json())
    .then((data)=>displayLessonButton(data.data));
}

const displayLessonButton =(data)=>{
    console.log(data);

    //get container
    const lessonBtnContainer = document.getElementById('lesson-btn-container');
    //loop -> button -> append child

    data.forEach(datum => {
        console.log(datum.level_no);
        const div = document.createElement('div');
        div.innerHTML=`
        <button class="btn btn-sm"><i class="fa-solid fa-book-open"></i>Lesson-${datum.level_no}</button>
        `;
        lessonBtnContainer.appendChild(div);
    }); 

}
loadLessonButton();

// {id: 101, level_no: 1, lessonName: 'Basic Vocabulary'} 