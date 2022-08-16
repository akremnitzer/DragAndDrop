
const fill = document.querySelector('.fill');
const boxes = document.querySelectorAll('.empty');

// Fill Listeners
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

//Loop through boxes and call drag events
for(const empty of boxes) {
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
}

//Drag Functions
function dragStart () {
    console.log('start');
    this.className += ' hold';
   setTimeout(() => this.className = 'invisible', 0); 
}

function dragEnd () {
    console.log('end');
    this.className = 'fill';
}

function dragOver (e) {
    e.preventDefault();
    console.log('over');
}

function dragEnter (e) {
    e.preventDefault();
    this.className += ' hovered';
    console.log('enter');
}

function dragLeave () {
    console.log('leave');
    this.className = 'empty';
}

function dragDrop() {
    console.log('drop');
    this.className = 'empty';
    this.append(fill);
}