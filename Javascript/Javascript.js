function submitForm() {
    var form = document.getElementById("questionnaire");
    var rep1 = form.elements["question1"].value;
    var rep2 = form.elements["question2"].value;
    var rep3 = form.elements["question3"].value;
    var rep4 = form.elements["question4"].value;
    var rep5 = form.elements["question5"].value;
    var rep6 = form.elements["question6"].value;
    var rep7 = form.elements["question7"].value;
    var rep8 = form.elements["question8"].value;
    var rep9 = form.elements["question9"].value;
    var rep10 = form.elements["question10"].value;
    var result=0;
    if(rep1 === "paris"){
        result++;
    }
   
    if(rep2 === "yaounde"){
        result++;
    }
  
    if(rep3 === "detective"){
        result++;
    }
    
    if(rep4 === "etudiant","lyceen","kira"){
        result++;
    }
    
    if(rep5 === "sa copine", "copine de light","deuxieme kira"){
        result++;
    }
    if(rep6 === "dieu de la mort"){
        result++;
    }
    
    if(rep7 === "dieu de la mort"){
        result++;
    }
   
    if(rep8 === "death note"){
        result++;
    }
   
    if(rep9 === "kira", "light yagami"){
        result++;
    }
   
    if(rep10 === "rouge"){
        result++;
    }
    alert("Vous avez " + result + " réponses correctes");
  }