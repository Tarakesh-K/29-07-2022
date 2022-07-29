//to create labels
function getLabel(tag,attname,attvalue,cont) {
    let ele = document.createElement(tag);
    ele.setAttribute(attname,attvalue);
    ele.innerHTML = cont;
    return ele;
}

//to create input fields
function getInput(tag,attname,attvalue,attname1,attvalue1) {
    let inp = document.createElement(tag);
    inp.setAttribute(attname,attvalue);
    inp.setAttribute(attname1,attvalue1);
    return inp;
}

//to create line breaks
function linebr(breaked) {
    let b = document.createElement(breaked);
    return b;
}

var fname = getLabel("label","for","fname","First Name");
var b1 = linebr("br");
var inputfname = getInput("input","type","text","id","fname");
var b2 = linebr("br");
var lname = getLabel("label","for","lname","Last Name");
var b3 = linebr("br");
var inputlname = getInput("input","type","text","id","lname");
var b4 = linebr("br");
var email = getLabel("label","for","email","Email");
var b5 = linebr("br");
var inputEmail = getInput("input","type","email","id","email");
var b6 = linebr("br");
var phone = getLabel("label","for","pno","Phone Number");
var b7 = linebr("br");
var inputPhone = getInput("input","type","number","id","pno");

document.body.append(fname,b1,inputfname,b2,lname,b3,inputlname,b4,email,b5,inputEmail,b6,phone,b7,inputPhone);