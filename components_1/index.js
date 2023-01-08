function collapseFunc(id) {
    let collapseDiv1 = document.getElementById(id);
    if (collapseDiv1.className.indexOf("show") == -1) {
      collapseDiv1.className += "show";
    } else {
      collapseDiv1.className = collapseDiv1.className.replace("show", "");
    }
  }
