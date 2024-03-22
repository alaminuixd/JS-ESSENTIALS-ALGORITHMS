/* 
    1) reverse: "hello world!"
    2) remove space and reverse: "hello world!"
*/

/* ***************************************
1) reverse: "hello world!"
******************************************/
// a) using for loop:
function revBasic1(elm) {
  let reversed = "";
  for (let i = 0; i < elm.length; i++) {
    //* Note: "for of" Array loop is a better & cleaner solution for this.
    reversed = elm[i] + reversed;
  }
  return reversed;
}
let str1 = "Hello World!";
let basicRevStr1 = revBasic1(str1);
console.log(basicRevStr1); // result: "!dlroW olleH"
/*
Above working like so:
    let str1 = "cow";
    let rev = "";
    rev = str1[0] + rev; 
        -- rev = "" --> rev = str1[0]/["c"] + rev[""] --> SO rev/"" = "c" + "" = "c"
    rev = str1[1] + rev;
    -- rev = "c" --> rev = str1[1]/["o"] + rev["c"] --> SO rev/"c" =  "o" + "c" = "oc"
    rev = str1[2] + rev;
    -- rev = "oc" --> rev = str1[2]/["w"] + rev["oc"] --> SO rev/"oc" = "w" + "oc" = "woc"
 */

// b) using string methods string.reverse();
function revBasic2(elm) {
  // split and make an Array from the "elm" where each character will be an Array item.
  elm = elm.split("");
  // reverse the Array items
  elm = elm.reverse();
  // join each array items and return a single string.
  elm = elm.join("");
  return elm;
  //* Note: you can also chain them: return elm.split("").reverse().join("");
}
let str2 = "Hello world!";
let basicRevStr2 = revBasic2(str2);
console.log(basicRevStr2); // result: "!dlrow olleH"

/* ***************************************
2) remove space and reverse: "hello world!"
******************************************/
function revRmSpace(elm) {
  // split and make an Array from the "elm" where each character will be an Array item.
  elm = elm.split("");
  // reverse the Array items
  elm = elm.reverse();
  // join each array items and return a single string.
  elm = elm.join("");
  // string.replace will replace any spaces in the text with an empty string ""
  // replace(1st part, 2nd part): | 1st part (selector): s+ select spaces and g mean global/all spaces
  // 2nd part (replace with): "" an empty string
  elm = elm.replace(/\s+/g, "");
  return elm;
  //* Note: you can also chain them: return elm.split("").reverse().join("").replace(/\s+/g, "");
}
let str3 = "Hello world!";
let revStr2 = revRmSpace(str3);
console.log(revStr2); // result: !dlrowolleH
