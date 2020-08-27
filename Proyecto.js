var i = 0;
var p = 0;

const modal = document.getElementById('modal1');
const span  = document.getElementsByClassName("close")[0];

document.getElementById("go");
    
function close_modal() {
    
    modal.style.display = "none";
    clear_modal();
}

function clear_modal() {
    
    document.getElementById("int").value = "";
    document.getElementById("indesc").value = "";
    document.getElementById("time").value = "";
}

function write_note(){
    
    var title = document.getElementById("int").value;
    var desc  = document.getElementById("indesc").value;
    var time  = document.getElementById("time").value;
    
    if (title == "" || desc == "" || time ==""){
        alert("Todos los campos son obligatorios.");
        
    } else {
    
        let note = {
            head: title,
            date: time,
            description: desc
        };
        
        if (p != 0) {
            
            var del = document.getElementById(`card${i}`);
            del.remove()
            localStorage.setItem(`note_${i}`, JSON.stringify(note));
    
            print_note();
            close_modal();
        
            i++;
            p++;
            
        } else {
            localStorage.setItem(`note_${i}`, JSON.stringify(note));
    
            print_note(i);
            close_modal();
        
            i++;
        }
    }
    
}

function write_note2(o){
    
    var title = document.getElementById("int").value;
    var desc  = document.getElementById("indesc").value;
    var time  = document.getElementById("time").value;
    
    if (title == "" || desc == "" || time ==""){
        alert("Todos los campos son obligatorios.");
        
    } else {
    
        let note = {
            head: title,
            date: time,
            description: desc
        }
        
    var del = document.getElementById(`card${o}`);
    del.remove();
            
    localStorage.setItem(`note_${o}`, JSON.stringify(note));
    
    print_note(o);
    close_modal();
    
    }
}

function print_note(o){
    
    var note = JSON.parse(localStorage.getItem(`note_${o}`));
    
    var create = `<div class="card" id="card${o}">
        <p class="cardtitle">`+ note.head +`</p>
        <p class="cardtime">`+ note.date +`</p>
        <div class="carddesc">`+ note.description +`</div>
        <button class="editbt" onclick=edit_note(${o})>Edit</button>
        <button class="deletebt" onclick=delete_note(${o})>Delete</button>
        
        </div>`; 
    
    
    
    var grid = document.getElementById("grid").innerHTML = 
        document.getElementById("grid").innerHTML + create;
    
    
}

function delete_note(o){

    var del = document.getElementById(`card${o}`);
    del.remove();
    
    localStorage.removeItem(`note_${o}`);
    
}

function edit_note(o){
    open_modal2(o);
    
}

function open_modal() {
    modal.style.display = "block";
    document.getElementById("go").onclick = write_note;
}

function open_modal2(o){
    
    var note = JSON.parse(localStorage.getItem(`note_${o}`));
    
    modal.style.display = "block";
    var title = document.getElementById("int").value = 
        note.head;
    var desc  = document.getElementById("indesc").value = 
        note.description;
    var time  = document.getElementById("time").value =
        note.date;
        
    document.getElementById("go").textContent = "Edit";
    document.getElementById("go").onclick = function(){
        write_note2(o);
    }
}









