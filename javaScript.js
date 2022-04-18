/*Estructuramos una función que llevara un modelo objeto, osea DOM
  para acceder y manipular algunos datos*/
function agregarhijos(){
    let agg = document.getElementById("agg");
    let myform = document.getElementById("myform");

    let labelName = document.createElement("label");
    let textName = document.createTextNode("Titulo del Blog");
    labelName.appendChild(textName);
    myform.insertBefore(labelName, agg);

    let input = document.createElement("input");
    myform.insertBefore(input, agg);

    let p1 = document.createElement("p");
    myform.insertBefore(p1,agg);

    let labelContenido = document.createElement("label");
    let textLabel = document.createTextNode("Contenido del Blog");
    labelContenido.appendChild(textLabel);
    myform.insertBefore(textLabel,agg);

    let texArea = document.createElement("textarea");
    myform.insertBefore(texArea,agg);

    let p2 = document.createElement("p");
    myform.insertBefore(p2,agg);

    let labelAutor = document.createElement("label");
    let textAutor = document.createTextNode("Autor del Blog");
    labelAutor.appendChild(textAutor);
    myform.insertBefore(labelAutor, agg);

    let input2 = document.createElement("input");
    myform.insertBefore(input2,agg);

    let p3 = document.createElement("p");
    myform.insertBefore(p3,agg);

    let labeldate = document.createElement("label");
    let dateF = document.createTextNode("Fecha de publicación");
    labeldate.appendChild(dateF);
    myform.insertBefore(labeldate,agg);


    let input3 = document.createElement("input");
    myform.insertBefore(input3,agg);

    let p4 = document.createElement("p");
    myform.insertBefore(p4,agg);

}

