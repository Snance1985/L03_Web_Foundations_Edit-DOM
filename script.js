 function idchange() {
    document.getElementById("demoid").innerHTML = "This is a paragraph that was edited by id on click";
}

//Example 2
function classchange() {
    let classcontent = document.getElementsByClassName("item");

    for (var i = 0; i < classcontent.length; i++) {
        console.log(classcontent[i].innerHTML);
    }

    document.getElementsByClassName("item")[0].innerHTML = "Changed List Item via innerHTML";
}

//Example 3
function tagchange() {
    let tagcontent = document.getElementsByTagName("h4");
    for (var i = 0; i < tagcontent.length; i++) {
        console.log(tagcontent[i].innerHTML);
    }

    document.getElementsByTagName("h4")[0].innerHTML = "Changed Heading Tag via innerHTML";
}

