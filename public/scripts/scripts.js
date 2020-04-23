function onSubmit() {
    
    var input = document.getElementById("input").value;
    alert("Coming here " + input);
    document.getElementById("book").innerHTML = input;
}