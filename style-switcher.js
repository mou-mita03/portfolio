
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click" , () => 
{
    document.querySelector(".style-switcher").classList.toggle("open");
} )
window.addEventListener("scroll" , () =>
{
    if (document.querySelector(".style-switcher").classList.contains("open"))
    {
        document.querySelector(".style-switcher").classList.remove("open");
    }
})
const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color)
{
    alternateStyles.forEach((style) =>
    {
        if(color === style.getAttribute("title"))
        {
           style.removeAttribute("disabled"); 
        }
        else
        {
          style.setAttribute("disabled" , "true");
        }
    })
}
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click" , () =>
{
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i") .classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})
window.addEventListener("load" , () =>
{
    if(document.body.classList.contains("dark"))
    {
       dayNight.querySelector("i") .classList.add("fa-sun");
    }
    else
    {
        dayNight.querySelector("i") .classList.add("fa-moon");
    }
})




 document.querySelectorAll('.gallery-item img').forEach(img => {
        img.addEventListener('click', function() {
            const modal = document.createElement('div');
            modal.classList.add('modal');
            modal.innerHTML = `<div class='modal-content'><img src='${this.src}'><span class='close'>&times;</span></div>`;
            document.body.appendChild(modal);
            document.querySelector('.close').addEventListener('click', () => modal.remove());
        });
    });
    
    const style = document.createElement('style');
    style.innerHTML = `
        .modal {
            position: fixed;
            top: 0; left: 0; width: 100%; height: 100%;
            background: rgba(0, 0, 0, 0.8);
            display: flex; align-items: center; justify-content: center;
            z-index: 1000;
        }
        .modal-content {
            position: relative;
            max-width: 80%;
        }
        .modal-content img {
            width: 100%;
            border-radius: 10px;
        }
        .close {
            position: absolute;
            top: 10px; right: 10px;
            color: white;
            font-size: 30px;
            cursor: pointer;
        }
    `;
    document.head.appendChild(style);




    const darkModeToggle = document.querySelector("#dark-mode-toggle");

darkModeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});

