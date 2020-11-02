const addbtn = document.querySelector('#add');
const textfield = document.querySelector('#ftodo');
const list = document.querySelector('#mylist');
let j = 0 ;
function removeLocalStorageValues(target) {
        let i = localStorage.length;
        while (i-- > 0) {
            let key = localStorage.key(i);
            if (localStorage.getItem(key) === target) {
                localStorage.removeItem(key);
            }
        }
    }


    

/* try to display prevoius list */
        let i = localStorage.length;
        while (i-- > 0) {
            let key = localStorage.key(i);
            const item = document.createElement('li')
            const todo = document.createElement('span')
            const removebtn = document.createElement('button')
            const editbtn = document.createElement('button')
            todo.textContent = localStorage.getItem(key);
            item.classList.add('item-design')
            removebtn.classList.add('removebtn-design')
            editbtn.classList.add('editbtn-design')  
            item.appendChild(removebtn);
            item.appendChild(editbtn);
            item.appendChild(todo);
            list.appendChild(item)
            /*remove button */
            removebtn.addEventListener('click' , e => {
                console.dir(e.target);
            //     try
    
            console.dir(e.target);
            const to_edit = e.target.parentElement;
            const to_edit_span =to_edit.childNodes;
            const myvalue =to_edit_span[2].innerHTML;
            removeLocalStorageValues(myvalue);
            // end try
                list.removeChild(e.target.parentElement)
    
        })

        /*edit button*/
        editbtn.addEventListener('click' , e => {
                console.dir(e.target);
                const to_edit = e.target.parentElement;
                const to_edit_span =to_edit.childNodes;
                // console.log(to_edit_span[2]);
                const myvalue =to_edit_span[2].innerHTML;
                removeLocalStorageValues(myvalue);
                list.removeChild(e.target.parentElement)
                document.getElementById('ftodo').value = to_edit_span[2].innerHTML;   
        
        })

        }


/*end*/

addbtn.addEventListener('click', () => {
    const value = textfield.value;
    document.getElementById('ftodo').value = ''
    const item = document.createElement('li')
    const todo = document.createElement('span')
    todo.textContent = value;
    const removebtn = document.createElement('button')
    const editbtn = document.createElement('button')
    item.classList.add('item-design')
    removebtn.classList.add('removebtn-design')
    editbtn.classList.add('editbtn-design')  
    item.appendChild(removebtn);
    item.appendChild(editbtn);
    item.appendChild(todo);
    



    removebtn.addEventListener('click' , e => {
            console.dir(e.target);
        //     try

        console.dir(e.target);
        const to_edit = e.target.parentElement;
        const to_edit_span =to_edit.childNodes;
        const myvalue =to_edit_span[2].innerHTML;
        removeLocalStorageValues(myvalue);
        // end try
            list.removeChild(e.target.parentElement)

    })




    editbtn.addEventListener('click' , e => {
        console.dir(e.target);
        const to_edit = e.target.parentElement;
        const to_edit_span =to_edit.childNodes;
        // console.log(to_edit_span[2]);
        const myvalue =to_edit_span[2].innerHTML;
        removeLocalStorageValues(myvalue);
        list.removeChild(e.target.parentElement)
        document.getElementById('ftodo').value = to_edit_span[2].innerHTML;   

})



        localStorage.setItem(j, todo.innerHTML)
        j++;
        list.appendChild(item)

})
















































// localStorage.setItem('hi', 'smsm');
// console.log(localStorage)


// window.onload=function(){
//     const addbtn = document.querySelector('#add');
//     const textfield = document.querySelector('#ftodo');
//     const list = document.querySelector('#mylist');
//     addbtn.addEventListener("click", handler);
// }

// function handler() {
//     const value = textfield.value;
//     console.log(value)
//     const item = document.createElement('li')
//     const todo = document.createElement('span')
//     todo.textContent(value)
//     const removebtn = document.createElement('button')
//     const editbtn = document.createElement('button')
//     item.appendChild(removebtn);
//     item.appendChild(editbtn);
//     item.appendChild(todo);
//         list.appendChild(item)}