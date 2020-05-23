
//今日の日付をdateへ入れる
var date = new Date();

        var yyyy = date.getFullYear();
        var mm = ("0"+(date.getMonth()+1)).slice(-2);
        var dd = ("0"+date.getDate()).slice(-2);

    document.querySelector("#today").value=yyyy+'-'+mm+'-'+dd;



const addTask = document.querySelector('.add');
const list = document.querySelector('#todo');
const doneList = document.querySelector('#done');
const taskName = document.querySelectorAll('.task_name');
const bgColor = document .querySelector('.bg');
const colors =['bg1','bg2','bg3','bg4','bg5','bg6','bg7','bg8','bg9','bg10'];

 const createTodoList = (task,limit,note=none )=>{
     const html = `<li class="addedTask"><div class="task_name">${task}</div><span>${limit}</span><small>${note}</small><img class="delete" src="/img/flower.svg"></li>`;
     list.innerHTML += html;    
    }

    addTask.addEventListener('submit', e =>{
        e.preventDefault();

        const task = addTask.add.value.trim();
        const limit = addTask.date.value;
        const note = addTask.note.value;
        if(task.length){
            createTodoList(task,limit,note);
            addTask.reset();
        }
    });

    list.addEventListener('click', e => {
        if (e.target.classList.contains('delete')){

          
            const donehtml = `<li class="doneTask">${e.target.parentElement.firstChild.innerHTML}</li>`;
            donelist.innerHTML += donehtml; 
            e.target.parentElement.classList.add('fade-out');
            const newBg = colors[Math.floor(Math.random()*colors.length)];
            bgColor.className = newBg;
            bgColor.classList.add('fade-in');
        }

        if(e.target.parentElement.classList.contains('fade-out')){
            setTimeout(function(){ 
                e.target.parentElement.remove();
              }, 300);
        }
        if(bgColor.classList.contains('fade-in')){
            setTimeout(function(){ 
                bgColor.classList.remove('fade-in');
              }, 300);
        }


        
        });

       