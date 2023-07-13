let plusButton = document.getElementById("plusButton");

function popup() {
    document.getElementById("myModal").style.display = "block";
}

function closePopup() {
    document.getElementById("myModal").style.display = "none";
}

function addNote() {


    let titleText = document.getElementById("titleText").value;
    let bodyText = document.getElementById("bodyText").value;
    let notes = document.getElementById("notes");

    let div = document.createElement("div");
    div.className = "singleNote";
    let ul = document.createElement("ul");
    let liButtons = document.createElement("li");
    liButtons.className = "buttonsLi";
    let liTitle = document.createElement("li");
    liTitle.innerHTML = titleText;
    let liBody = document.createElement("li");
    liBody.innerHTML = bodyText;

    let deleteImg = document.createElement("img");
    deleteImg.src = "images/deleteImg.png";
    deleteImg.className = "image";
    liButtons.appendChild(deleteImg);

    let viewImg = document.createElement("img");
    viewImg.src = "images/view.png";
    viewImg.className = "image";
    liButtons.appendChild(viewImg);

    let editImg = document.createElement("img");
    editImg.src = "images/editing.png";
    editImg.className = "image";
    liButtons.appendChild(editImg);

    liTitle.className = "titleLi"
    liBody.className = "bodyLi";
    ul.appendChild(liButtons);
    ul.appendChild(liTitle);
    ul.appendChild(liBody);
    div.append(ul);
    notes.appendChild(div);

    deleteImg.addEventListener("click", function(){
        div.remove();
    });

    var myviewModal = document.getElementById("myViewModal");

    var span = document.getElementsByClassName("close")[0];

    viewImg.addEventListener("click", function() {
        document.getElementById("myViewModal").style.display = "block";
        document.getElementById("modalTitleText").contentEditable = "false";
        document.getElementById("modalBodyText").contentEditable = "false";
        document.getElementById("modalTitleText").innerHTML = liTitle.innerHTML;
        document.getElementById("modalBodyText").innerHTML = liBody.innerHTML;
        
    });

    editImg.addEventListener("click", function() {
        document.getElementById("myViewModal").style.display = "block";
        document.getElementById("modalTitleText").innerHTML = liTitle.innerHTML;
        document.getElementById("modalBodyText").innerHTML = liBody.innerHTML;
        document.getElementById("modalTitleText").contentEditable = "true";
        document.getElementById("modalBodyText").contentEditable = "true";

        let addChangesBtn = document.createElement("button");
        addChangesBtn.innerHTML = "Add Changes";
        addChangesBtn.id = "addChangesBtnId";
        addChangesBtn.onclick = function() {
            liTitle.innerHTML = document.getElementById("modalTitleText").innerText;
            liBody.innerHTML = document.getElementById("modalBodyText").innerText;
            myviewModal.style.display = "none";
            document.getElementById("addChangesBtnId").remove();
        }
        myviewModal.appendChild(addChangesBtn);
        myviewModal.style.height = "auto";

    });

    span.onclick = function() {
        myviewModal.style.display = "none";
        document.getElementById("addChangesBtnId").remove();
      }

    window.onclick = function(event) {
        if (event.target == myviewModal) {
            myviewModal.style.display = "none";
            document.getElementById("addChangesBtnId").remove();
        }
      }

    document.getElementById("titleText").value = "";
    document.getElementById("bodyText").value = "";

}

function filter() {
    let filterInput = document.getElementById("myInput");
    let filterValue = filterInput.value.toLowerCase(); 

    let singleNotes = document.getElementsByClassName("singleNote");
    Array.from(singleNotes).forEach(function(note) {
        let title = note.getElementsByClassName("titleLi")[0].innerText.toLowerCase();
        let body = note.getElementsByClassName("bodyLi")[0].innerText.toLowerCase();
        if (title.includes(filterValue) || body.includes(filterValue)) {
            note.style.display = "inline-block";
        } else {
            note.style.display = "none";
        }
    });
}