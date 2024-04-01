function gas(){
    var n1 = document.querySelectorAll("input")[0].value;
    var n2 = document.querySelectorAll("input")[1].value;
    var div = n1/n2
    var tot = div * 5.75
    alert("O seu consumo total será: R$" + tot)
}

function et(){
    var n1 = document.querySelectorAll("input")[0].value;
    var n2 = document.querySelectorAll("input")[1].value;
    var div = n1/n2
    var tot = div * 3.42
    alert("O seu consumo total será: R$" + tot)
}