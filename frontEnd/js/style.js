// button clone list
function cloneTodo(){
    let node = document.getElementById('cloneList');
    let clone = node.cloneNode(true);
    document.getElementById("displayCloneList").append(clone);
  }
  