let list = 0
// we have 7 but it starts a 0


function getwords() {
    list = list + 1;
    
    document.getElementById('count').innerHTML = 8 - list;
    if (list == 8) {
        console.log('all are fileld')
        document.getElementById('main').style.display = "inline";
        document.getElementById('WT').innerHTML = "";
        document.getElementById('box').innerHTML = "<input type='button' value='Restart' onclick='restart()' />";
    } else {
        document.getElementById('main').style.display = "none";
        if (list == 2 || list == 6) {
            if (list == 2) {
                document.getElementById('WT').innerHTML = "Place";
                var vword = document.getElementById('fname').value;
                document.getElementById(list).innerHTML = vword;
            } else {
                document.getElementById('WT').innerHTML = "Verb ending in -ing";
                var vword = document.getElementById('fname').value;
                document.getElementById(list).innerHTML = vword;
            }

        } else {
            document.getElementById('WT').innerHTML = "Noun";
            var vword = document.getElementById('fname').value;
            document.getElementById(list).innerHTML = vword;
        }
    }

    document.getElementById('fname').value = ''
}

function onload() {
    document.getElementById('main').style.display = "none";

}

function restart() {
    window.location.reload();
}

function test() {
    if (event.key == 13)document.getElementById('btnSearch').click()
}







//OLD CODE
// function getwords() {

//     if (list == 6){


//     } else {
//         list = list + 1;
//         document.getElementById('WT').innerHTML = "Noun";
//         var vword = document.getElementById('fname').value;
//         document.getElementById('n1').innerHTML = vword;
//         if (list==2) {
//             list = list + 1;
//             document.getElementById('WT').innerHTML = "Place"; 
//             var vword = document.getElementById('fname').value;
//             document.getElementById('p1').innerHTML = vword; 
//         } 
//     }

//   }