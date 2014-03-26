
function calculate(form) {
    var fc = form.children,
        n1 = parseInt(fc[0].children[0].children[0].value || 0,10),
        n2 = parseInt(fc[1].children[0].children[0].value || 0,10);
    fc[3].children[0].firstChild.nodeValue = n1+n2;
    fc[4].children[0].firstChild.nodeValue = n1-n2;
    fc[5].children[0].firstChild.nodeValue = n1*n2;
    fc[6].children[0].firstChild.nodeValue = n1/n2;
}