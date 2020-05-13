"use strict";

const DOMcontainer = document.querySelector('.container');

const DOMglobals = DOMcontainer.querySelector('.global-actions');
const BTNremoveAll = DOMglobals.querySelector('.action.remove');

const DOMform = DOMcontainer.querySelector('.form');
const DOMtaskTextarea = DOMform.querySelector('textarea[name="task"]');
const DOMdeadlineInput = DOMform.querySelector('input[name="deadline"]');
const DOMformActions = DOMform.querySelector('.actions');
const DOMformAdd = DOMformActions.querySelector('.btn.add');
const DOMformClear = DOMformActions.querySelector('.btn.clear');

let DOMitems = null;

function renderList( list ) {
    for ( let i=0; i<list.length; i++ ) {
        renderTodoItem( list[i] );
    }
}

function renderTodoItem( data ) {
    const id = 'todo_'+data.id;
    const HTML = `
        <div class="item" id="${id}">
            <div class="status ${data.status}"></div>
            <p class="description">${data.description}</p>
            <div class="deadline">${data.deadline}</div>
            <div class="actions">
                <div class="action remove">Remove</div>
            </div>
        </div>`;
    
    DOMcontainer.insertAdjacentHTML('beforeend', HTML);
    DOMitems = DOMcontainer.querySelectorAll('.item');

    const item = DOMcontainer.querySelector('#'+id);
    
    // registruojame event listener'i
    item.querySelector('.action.remove')
        .addEventListener('click', () => {
            let currentlyAddedItemIndex = 0;

            // randu kelintas siuo metu sarase yra norimas mano TODO item
            for ( let i=0; i<DOMitems.length; i++ ) {
                if ( DOMitems[i].id === id ) {
                    currentlyAddedItemIndex = i;
                    break;
                }
            }

            removeTodo( currentlyAddedItemIndex );
        });
    return;
}

function formatedDate( deltaTime = 0 ) {
    let now = new Date();

    if ( deltaTime !== 0 ) {
        now = new Date( Date.now() + deltaTime );
    }

    let minutes = now.getMinutes();
    let hours = now.getHours();
    let days = now.getDate();
    let month = now.getMonth() + 1;
    const year = now.getFullYear();
    
    if ( minutes < 10 ) {
        minutes = '0'+minutes;
    }
    if ( hours < 10 ) {
        hours = '0'+hours;
    }
    if ( days < 10 ) {
        days = '0'+days;
    }
    if ( month < 10 ) {
        month = '0'+month;
    }

    return year+'-'+month+'-'+days+' '+hours+':'+minutes;
}

function removeAllTodos() {
    for ( let i=4-1; i>=0; i-- ) {
        removeTodo(i);
    }
}

function removeTodo( todoIndex ) {
    // remove item from DOM
    DOMitems[todoIndex].remove();
    DOMitems = DOMcontainer.querySelectorAll('.item');

    // remove item from todo_list (global variable)
    let leftTodos = [];
    for ( let i=0; i<todo_list.length; i++ ) {
        if ( i !== todoIndex ) {
            leftTodos.push( todo_list[i] );
        }
    }
    
    todo_list = leftTodos;
    return;
}

/*******************************
    GENERATE CONTENT
*******************************/
renderList(todo_list);

DOMdeadlineInput.value = formatedDate( 86400000 );

/*******************************
    INIT ACTIONS
*******************************/

BTNremoveAll.addEventListener('click', removeAllTodos);





function suma(a, b) {
    return a+b;
}
console.log('function suma:', suma(2, 5));


const atimtis = function(a, b) {
    return a-b;
}
console.log('bevarde funkcija atimtis:', atimtis(8, 3));


// const daugyba = function(a, b) { return a*b; }
const daugyba = (a, b) => a*b;
console.log('arrow function daugyba:', daugyba(3, 16));


// don't try this at home :(
const sudekIrAtimk = (a, b, c) => {
    const sudek = (e, f) => e + f;
    const atimk = (g, h) => g - h;

    return atimk(sudek(a, b), c);
};
console.log('sudekIrAtimk:', sudekIrAtimk(4, 6, 3));