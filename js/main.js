// 要素取得
const limit = document.querySelector("#today");
const addForm = document.querySelector('.add_form');
const todoList = document.querySelector('#todo');
const doneList = document.querySelector('#done');
const bgColor = document.querySelector('.bg');

// 期限を今日に設定
setToday(limit);

// タスク追加ボタンが押されたとき
addForm.addEventListener('submit', e => {
    e.preventDefault();
    createTodoList(todoList, addForm.add.value.trim(), addForm.date.value, addForm.note.value);
    addForm.reset();
    // 期限を今日に設定
    setToday(limit);
});

// タスク完了ボタンが押されたとき
todoList.addEventListener('click', e => {
    if (e.target.classList.contains('delete')) {
        // タスクをやることリストから完了に移動
        archiveTask(e, doneList);
        // バックグラウンドの色を変更
        changeBgColor(bgColor);
    }
});


//完了タスクをクリックしたとき
doneList.addEventListener('click', e => {
    if (e.target.classList.contains('doneTask')) {
        //クリックされた要素を削除
        deleteTask(e);
    }
});

function createTodoList(todoList, task, limit, note=none) {
    if (task.length = 0) return;
    const html = `<li class="addedTask"><div class="task_name">${task}</div><br class="br-sp"><span>${limit}</span><small>${note}</small><img class="delete" src="img/flower.svg"></li>`;
    todoList.innerHTML += html;
}

function setToday(limit) {
    // 今日の日付を#todayへ入れる
    const date = new Date();
    const yyyy = date.getFullYear();
    const mm = ("0"+(date.getMonth()+1)).slice(-2);
    const dd = ("0"+date.getDate()).slice(-2);
    limit.value = `${yyyy}-${mm}-${dd}`;
}

function archiveTask(e, doneList) {
    // タスクを完了に移動
    const donehtml = `<li class="doneTask">${e.target.parentElement.firstChild.innerHTML}</li>`;
    doneList.innerHTML += donehtml;
    // リスト内のタスクをフェードアウト
    e.target.parentElement.classList.add('fade-out');
    // リストからタスクを完全に消去
    setTimeout(function() {
        e.target.parentElement.remove();
    }, 300);
}

function changeBgColor(bgColor) {
    // 色変更
    const newBgColorClass = `bg${randomInt(1, 10)}`;
    bgColor.className = newBgColorClass;
    // フェードイン
    bgColor.classList.add('fade-in');
    setTimeout(function() {
        bgColor.classList.remove('fade-in');
    }, 300);
}

function deleteTask(e) {
    e.target.remove();
}

function randomInt(min, max) {
    return Math.floor( Math.random() * (max + 1 - min) ) + min;
}