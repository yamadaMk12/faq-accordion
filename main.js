const sec1 = document.getElementById("hidden-section-1")
const sec2 = document.getElementById("hidden-section-2")
const sec3 = document.getElementById("hidden-section-3")
const sec4 = document.getElementById("hidden-section-4")
const img1 = document.getElementById("img1")
const img2 = document.getElementById("img2")
const img3 = document.getElementById("img3")
const img4 = document.getElementById("img4")

function toggleHiddenSection(num) {
    switch (num) {
        case 1:
            sec1.style.maxHeight == "0px" ? (sec1.style.maxHeight = "1000px", img1.src = "assets/images/icon-minus.svg") : (sec1.style.maxHeight = "0px", img1.src = "assets/images/icon-plus.svg");
            break;
        case 2:
            sec2.style.maxHeight == "0px" ? (sec2.style.maxHeight = "1000px", img2.src = "assets/images/icon-minus.svg") : (sec2.style.maxHeight = "0px", img2.src = "assets/images/icon-plus.svg");
            break
        case 3:
            sec3.style.maxHeight == "0px" ? (sec3.style.maxHeight = "1000px", img3.src = "assets/images/icon-minus.svg") : (sec3.style.maxHeight = "0px", img3.src = "assets/images/icon-plus.svg");
            break;
        case 4:
            sec4.style.maxHeight == "0px" ? (sec4.style.maxHeight = "1000px", img4.src = "assets/images/icon-minus.svg") : (sec4.style.maxHeight = "0px", img4.src = "assets/images/icon-plus.svg");
            break;
        default:
            break;
    }
}