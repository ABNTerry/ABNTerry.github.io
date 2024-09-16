const partOne = document.getElementById("part_one");
const partTwo = document.getElementById("part_two");
const partThree = document.getElementById("part_three");

partOne.onclick = () => {
    document.getElementById("counter").innerHTML ++;
}

partTwo.onclick = () => {
    window.location.reload();
};

partThree.oninput = () => {
    const sliderValue = document.getElementById("slider_bar").value;
    const imageMax = document.getElementById("part_three").offsetWidth - 2;
    document.getElementById("test").innerHTML = imageMax;
    //could not create correct formula for exact distances and ran out of time
    document.getElementById("slider_bar").min = imageMax * -.25;
    document.getElementById("slider_bar").max = imageMax * .25;
    //end of the hair pullingly frustrating section. Will go back because I want this to work right
    document.getElementById("slider_image").style.left = sliderValue + "px";
};
