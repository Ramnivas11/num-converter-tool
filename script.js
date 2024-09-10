function updateInputType()
{
    let fromtype=document.getElementById("from-type").value;
    let inputField=document.getElementById("val");
    if(fromtype==="Hexa-decimal")
    {
        inputField.type="text";
        
    }
    else{
        inputField.type="number";
    }
}
function clearInput() {
    document.getElementById("val").value = '';
}
function main() {
    let fromtype = document.getElementById("from-type").value;
    let totype = document.getElementById("to-type").value;

    if (fromtype === "Decimal" && totype === "Binary") {
        dtob();
    } else if (fromtype === "Binary" && totype === "Decimal") {
        btod();
    } else if (fromtype === "Decimal" && totype === "Octal") {
        dtoo();
    } else if (fromtype === "Octal" && totype === "Decimal") {
        otod();
    } else if (fromtype === "Decimal" && totype === "Hexa-decimal") {
        dtoh();
    } else if (fromtype === "Hexa-decimal" && totype === "Decimal") {
        htod();
    }else if (fromtype === "Binary" && totype === "Octal") {
        btoo(); 
    }else if (fromtype === "Binary" && totype === "Hexa-decimal") {
        btoh(); 
    }else if (fromtype === "Octal" && totype === "Binary") {
        otob();
    } else if (fromtype === "Hexa-decimal" && totype === "Octal") {
        htoo();
    } else if (fromtype === "Hexa-decimal" && totype === "Binary") {
        htob();  
    }

    if (fromtype === totype) {
        let result = document.querySelector("#val").value ;
        document.getElementById("display").innerHTML = `Result = ${result}`;
        
    }


}
//Decimal to binary---
function dtob() {
    let val = parseInt(document.querySelector("#val").value);
    let result = val.toString(2);
    document.getElementById("display").innerHTML = `Decimal to binary = ${result}`;
}
//decimal to octal
function dtoo() {
    let val = parseInt(document.querySelector("#val").value);
    let octal = "";
    if (val === 0) {
        octal = "0";
    } else {
        while (val > 0) {
            octal = (val % 8) + octal;
            val = Math.floor(val / 8);
        }
    }
    document.getElementById("display").innerHTML = `Decimal to Octal = ${octal}`;
}
//decimal to hexa-decimal
function dtoh() {
    let val = parseInt(document.querySelector("#val").value);
    let hex = "";
    const hexDigits = "0123456789ABCDEF";
    if (val === 0) {
        hex = "0";
    } else {
        while (val > 0) {
            let remainder = val % 16;
            hex = hexDigits[remainder] + hex;
            val = Math.floor(val / 16);
        }
    }
    document.getElementById("display").innerHTML = `Decimal to Hexa-decimal = ${hex}`;
}
//binary to decimal----
function btod() {
    let val = document.querySelector("#val").value;
    let result = parseInt(val, 2);
    document.getElementById("display").innerHTML = `Binary to Decimal = ${result}`;
}
//binary to octal
function btoo() {
    let val = document.querySelector("#val").value;
    if (!/^[01]+$/.test(val)) {
        document.getElementById("display").innerHTML = "Please enter a valid binary number.";
        return;
    }
     while (val.length % 3 !== 0) {
        val = '0' + val;
    }
   let result = '';
    for (let i = 0; i < val.length; i += 3) {
        let binaryGroup = val.substring(i, i + 3);
        let octalDigit = parseInt(binaryGroup, 2).toString(8);
        result += octalDigit;
    }
    document.getElementById("display").innerHTML = `Binary to Octal = ${result}`;
}

//binary to hexa-decimal
function btoh() {
    let val = document.querySelector("#val").value;
    if (!/^[01]+$/.test(val)) {
        document.getElementById("display").innerHTML = "Please enter a valid binary number.";
        return;
    }
  while (val.length % 4 !== 0) {
        val = '0' + val;
    }
 let result = '';
    for (let i = 0; i < val.length; i += 4) {
        let binaryGroup = val.substring(i, i + 4);
        let hexDigit = parseInt(binaryGroup, 2).toString(16).toUpperCase();
        result += hexDigit;
    }
    document.getElementById("display").innerHTML = `Binary to Hexadecimal = ${result}`;
}

//octal to decimal----
function otod() {
    let val = document.querySelector("#val").value;
    let result = parseInt(val, 8);
    document.getElementById("display").innerHTML = `Octal to Decimal = ${result}`;
}
//octal to binary
function otob(){
    let val = document.querySelector("#val").value;
    if (!/^[0-7]+$/.test(val)) {
        document.getElementById("display").innerHTML = "Please enter a valid octal number.";
        return;
    }
 let binary = '';
    for (let i = 0; i < val.length; i++) {
        let binaryGroup = parseInt(val[i], 8).toString(2).padStart(3, '0');
        binary += binaryGroup;
    }
    document.getElementById("display").innerHTML = `Octal to Binary = ${binary}`;
}

//octal to hexa-decimal
function otoh(){
    let val = document.querySelector("#val").value;
    if (!/^[0-7]+$/.test(val)) {
        document.getElementById("display").innerHTML = "Please enter a valid octal number.";
        return;
    }
    let binary = '';
    for (let i = 0; i < val.length; i++) {
        let binaryGroup = parseInt(val[i], 8).toString(2).padStart(3, '0');
        binary += binaryGroup;
    }
    while (binary.length % 4 !== 0) {
        binary = '0' + binary;
    }
    let hex = '';
    for (let i = 0; i < binary.length; i += 4) {
        let binaryGroup = binary.substring(i, i + 4);
        let hexDigit = parseInt(binaryGroup, 2).toString(16).toUpperCase();
        hex += hexDigit;
    }
    document.getElementById("display").innerHTML = `Octal to Hexadecimal = ${hex}`;
}
//hexa-decimal to decimal ----
function htod() {
    let val = document.querySelector("#val").value;
    let result = parseInt(val, 16);
    document.getElementById("display").innerHTML = `Hexa-decimal to Decimal = ${result}`;
}
//hexa to binary
function htob() {
    let val = document.querySelector("#val").value;
    if (!/^[0-9A-Fa-f]+$/.test(val)) {
        document.getElementById("display").innerHTML = "Please enter a valid hexadecimal number.";
        return;
    }
 let binary = '';
    for (let i = 0; i < val.length; i++) {
        let binaryGroup = parseInt(val[i], 16).toString(2).padStart(4, '0');
        binary += binaryGroup;
    }
    document.getElementById("display").innerHTML = `Hexadecimal to Binary = ${binary}`;

}
//hexa to octal
function htoo(){
    let val = document.querySelector("#val").value;
    if (!/^[0-9A-Fa-f]+$/.test(val)) {
        document.getElementById("display").innerHTML = "Please enter a valid hexadecimal number.";
        return;
    }

    let binary = '';
    for (let i = 0; i < val.length; i++) {
        let binaryGroup = parseInt(val[i], 16).toString(2).padStart(4, '0');
        binary += binaryGroup;
    }
    let octal = '';
    while (binary.length % 3 !== 0) {
        binary = '0' + binary;  
    }

    for (let i = 0; i < binary.length; i += 3) {
        let binaryGroup = binary.substring(i, i + 3);
        let octalDigit = parseInt(binaryGroup, 2).toString(8);
        octal += octalDigit;
    }
    document.getElementById("display").innerHTML = `Hexadecimal to Octal = ${octal}`;
}
