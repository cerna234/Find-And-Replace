


function SubmitText(){
    let inputText = document.getElementById("inputText").value;
    let text = document.getElementById("ogText");
    console.log(text.innerHTML = inputText);
   
}

function replaceWord(){

    let inputText = document.getElementById("inputText").value;
    let original = document.getElementById("original").value;
    let replacement = document.getElementById("replacement").value;
    let after = document.getElementById("after");

        if(inputText.includes(original) == true)
    {
        after.innerHTML = inputText.replaceAll(original,replacement);
    }
    else{
       alert("word not found");
    }



}


