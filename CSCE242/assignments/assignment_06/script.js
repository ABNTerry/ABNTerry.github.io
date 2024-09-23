//Variables
    const openMenu = () => {
        document.getElementById("ex_one").classList.toggle("hidden");
        document.getElementById("ex_two").classList.toggle("hidden");
        document.getElementById("menu_arrow").classList.toggle("open_menu");
        document.getElementById("menu_arrow").classList.toggle("close_menu");
    };

    const openSlider = () => {
        document.getElementById("color_slider").classList.remove("hidden");
        document.getElementById("picture_chooser").classList.add("hidden");
    };

    const openPicChooser = () => {
        document.getElementById("picture_chooser").classList.remove("hidden");
        document.getElementById("color_slider").classList.add("hidden");
    };

    const colorSlider = document.getElementById("color_slider");
    //const pictureChooser = document.getElementById("picture_chooser");

//Processes
    //On Load
    window.onload = () => {
        document.getElementById("menu_arrow").onclick = openMenu;
        document.getElementById("ex_one").onclick = openSlider;
        document.getElementById("ex_two").onclick = openPicChooser;
    };

    //Color Slider
    colorSlider.oninput = () => {
        const sliderValue = document.getElementById("slider_bar").value;
        //document.getElementById("color_mood").innerHTML = ("--color_slider: rgb(" + sliderValue + ", 0, 0)");
        const colorChangeVar = document.documentElement.style.setProperty("--color_slider", "rgb(" + sliderValue + ", 0, 0)");
        if (sliderValue < 85) {
            document.getElementById("color_mood").innerHTML = ("Despair");
        }
        else if (sliderValue >= 85 && sliderValue < 170) {
            document.getElementById("color_mood").innerHTML = ("Hope");
        }
        else {
            document.getElementById("color_mood").innerHTML = ("Passion");
        }
    }

    //Picture Chooser
        const pictureChooser = document.querySelector("#buttons");
        pictureChooser.addEventListener("click", (e) => {
            let bttnCheck = e.target.id;
            console.log(bttnCheck + " start");
            if (e.target !== e.currentTarget){
                bttnCheck = e.target.id;
                //console.log(bttnCheck);
                if (bttnCheck === 's_bttn') {
                    document.getElementById("pic_one").classList.remove("hidden");
                    document.getElementById("pic_two").classList.add("hidden");
                    document.getElementById("pic_three").classList.add("hidden");
                    //console.log("complete s" + bttnCheck);
                }
                else if (bttnCheck === "m_bttn") {
                    document.getElementById("pic_one").classList.add("hidden");
                    document.getElementById("pic_two").classList.remove("hidden");
                    document.getElementById("pic_three").classList.add("hidden");
                    //console.log("complete m" + bttnCheck);
                }
                else if (bttnCheck === "l_bttn") {
                    document.getElementById("pic_one").classList.add("hidden");
                    document.getElementById("pic_two").classList.add("hidden");
                    document.getElementById("pic_three").classList.remove("hidden");
                    //console.log("complete l" + bttnCheck);
                };
                //console.log(bttnCheck + " end");
            }
        });