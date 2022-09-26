var Corv,texv,namev;
function troca(op,cor){
    if(op==1){
        document.body.style.backgroundColor=cor;
        Corv=cor;
    }else{
        document.body.style.color=cor;
        texv=cor;
    }
}

function gravar(){
    var namev=document.getElementById('fname').value;
    localStorage.vcor=Corv;
    localStorage.tex=texv;
    localStorage.vname=namev;
}

