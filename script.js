let str="";
let buttons=document.querySelectorAll('.button');
// function addToMemory() {
//     console.log("hi")
//     const currentValue = document.querySelector('input').value || 0;
//     memory += currentValue;
//     let myString = myInteger.toString()
//     str=myString;
//     str=str + e.target.innerHTML;
//             document.querySelector('input').value = str
// }
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{

        if(e.target.innerHTML == '='){
            str=eval(str)
            document.querySelector('input').value = str;
        }
        // else if(e.target.innerHTML == 'M+' ||e.target.innerHTML == 'M-'){
        
        //  }
        else if(e.target.innerHTML == 'C'){
            str=" ";
            document.querySelector('input').value = str;
        }
        else{

            console.log(e.target);
            str=str + e.target.innerHTML;
            document.querySelector('input').value = str;
        }
    })
})