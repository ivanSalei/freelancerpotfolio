const btnDarkMode = document.querySelector(".dark-mode-btn");


//Проверка темної теми в local storage


if (localStorage.getItem('darkMode') === 'dark') {
    btnDarkMode.classList.add("dark-mode-btn--active");
    document.body.classList.add('dark');

}


//Проверка темной теми на устройстке

if (window.matchMedia && window.matchMedia("(prefers-color-scheme:dark)").matches){
    btnDarkMode.classList.add("dark-mode-btn--active");
    document.body.classList.add('dark');

}

//zroj vsyz.nmcz cbcntvys yfcnhjqrb vsyz'v ntve

// window.matchMedia("(prefers-color-scheme:dark)").addEventListener("change"),(event) =>{
// const  newColorScheme= event.matches ? "dark" : "light";}

// if(newColorScheme ==="dark"){
//     if (localStorage.getItem('darkMode') === 'dark') 
//         btnDarkMode.classList.add("dark-mode-btn--active");
//         document.body.classList.add('dark');
    
//     // } else{
//     //     // if (localStorage.getItem('darkMode') === 'dark') {
//     //     //     btnDarkMode.classList.remove("dark-mode-btn--active");
//     //     //     document.body.classList.remove('dark');
        
//     //     // }
//     // }

// }
// // включення ночного режиму по кнопці

btnDarkMode.onclick = function () {

    btnDarkMode.classList.toggle("dark-mode-btn--active");
    const isDark = document.body.classList.toggle('dark');

    if (isDark) {
        localStorage.setItem('darkMode', 'dark');
    } else {
        localStorage.setItem('darkMode', 'light');

    }


}