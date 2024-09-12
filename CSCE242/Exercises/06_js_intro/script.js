const doThings = () => {
    alert("Hello World");
};

const myButton = document.getElementById("btn_click");
const myButton2 = document.getElementById("btn_click_off");
const myButton3 = document.getElementById("btn_hide");
//myButton.onclick = doThings;

myButton.onclick = () => {
    document.getElementById("message").innerHTML = "Hello Everyone";
    document.getElementById("stuff").classList.add("special");
}; 

myButton2.onclick = () => {
    document.getElementById("gb_message").innerHTML = "Goodbye";
    document.getElementById("stuff").classList.remove("special");
};

myButton3.onclick = () => {
    document.getElementById("hidden").classList.add("hidden");
};

//Showing data from an inout field

/*
document.getElementById("txt_first_name").onkeyup = () => {
    const textBox = document.getElementById("txt_first_name");
    //console.log(textBox.value);
    document.getElementById("result").innerHTML = textBox.value;
};
*/

document.getElementById("txt_first_name").onkeyup = (event) => {
    document.getElementById("result").innerHTML = event.target.value;
};