

const addBtn = document.querySelector('.add-btn');
addBtn.addEventListener('click', ()=>{
    const newTask = document.createElement('div');
    newTask.classList.add('task');
    const newTaskText = document.createElement('input');
    newTaskText.classList.add('task-text');
    newTaskText.type='text';
    newTaskText.placeholder='New Task';
    
    const newBtnContainer = document.createElement('div');
    newBtnContainer.classList.add('btn-container');
    const newEditBtn = document.createElement('div');
    newEditBtn.classList.add('edit-btn');
    newEditBtn.classList.add('btn');
    newEditBtn.innerText='Save'
    const newDeleteBtn = document.createElement('div');
    newDeleteBtn.classList.add('delete-btn');
    newDeleteBtn.classList.add('btn');
    newDeleteBtn.innerText='X';
    newTask.appendChild(newTaskText);
    newTask.appendChild(newBtnContainer);
    newBtnContainer.append(newEditBtn);
    newBtnContainer.appendChild(newDeleteBtn);
    const tasks = document.querySelector('.tasks');
    tasks.appendChild(newTask);
    console.log('Clicked');
    newTaskText.focus();
});



 document.body.addEventListener('click', (event) => {
    if(event.target.classList.contains('edit-btn')){
        
    if(event.target.innerText==='Edit'){
        event.target.innerText='Save'    ;
        event.target.parentElement.previousElementSibling.removeAttribute('readonly');
        event.target.parentElement.previousElementSibling.focus();
        return
    }
    if(event.target.innerText==='Save'){
        if(event.target.parentElement.previousElementSibling.value!==''){
            event.target.parentElement.previousElementSibling.setAttribute('readonly',true);
            event.target.innerText='Edit'
        }
        else{
            alert('Task cannot be empty 😏');
            event.target.parentElement.previousElementSibling.focus();
            
        }
    }

    }
      });


document.body.addEventListener('click', (event)=>{
    if(event.target.classList.contains('delete-btn')){
        event.target.parentElement.parentElement.setAttribute('style', 'display:none')
    }
})

const searchBar = document.querySelector('.search-bar');
searchBar.addEventListener('input',(e)=>{
    const searchedWord = e.target.value.toLowerCase();
   
    const tasksParent = document.querySelector('.tasks');
    const allChildren = tasksParent.children;
    for(child of allChildren){
        child.setAttribute('style', 'display:flex');
        const isVisible = child.firstChild.value.toLowerCase().includes(searchedWord);
        if(!isVisible){
            child.setAttribute('style', 'display:none');
        } 
    }
} )