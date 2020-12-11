function add(num1, num2 = 0){
    //jodi kunotar value dite vule jao tahole if ar ai condition ta use vaki value gulo output hisabe paoya jabe
  
    if ( num2 == undefined){
        num2 = 0;
    }
    //second mathod 
    num2 = num2 || 0;

    //final mathod jeta use korte hobe for easy

    // function add(num1, num2 = 0);

    return num1 + num2;
}
//const total = add(15, 17);
const total = add(15,);
console.log(total);