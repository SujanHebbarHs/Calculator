let a=Array.from(document.getElementsByTagName("button"));
let op=document.getElementById("ans");
let array=[],num=null,c,d,e,result;

let operation=()=>{
    for(let val=0;val<array.length;val=val+3){
        c=array[val];
        d=array[val+2];
        e=array[val+1];
        switch(e){
            case "+":result=c + d;
            break;
            case "-":result=c - d;
            break;
            case "*":result=c * d;
            break;
            case "/":result=c / d;
            break;
            default:result="ERROR";
                alert("Invald input");
            break;
            
        }
        op.innerHTML=result;
    }
    array=[];
    num=result;
}

a.forEach((elem)=>{
    elem.onclick=()=>{
        if(elem.value=="ac"){
            op.innerHTML=null;
            num=undefined;
            array=[];
        }
        else if(elem.value=="="){
            num=Number.parseInt(num);
                array.push(num);
                num=null;
            op.innerHTML=null;
            operation();
        }
        else{
            
            op.innerHTML=op.innerHTML + elem.innerHTML;
            if(elem.value=="+" || elem.value=="-" || elem.value=="*" || elem.value=="/"){
                num=Number.parseInt(num);
                array.push(num);
                num=null;
                array.push(elem.value);

            }
            else{
                if(num==undefined){
                    num=elem.value;
                }
                else{

                    num=num+elem.value;
                                }

            }

        }
    }
})
