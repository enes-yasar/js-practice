// Anlık tarih ve saat bilgisi
function showTime() {
    let now = new Date(); 
    let hours = now.getHours().toString().padStart(2, '0'); // Saat (0-23 arası) - 2 haneli yapmak için
    let minutes = now.getMinutes().toString().padStart(2, '0'); // Dakika (0-59 arası) - 2 haneli yapmak için
    let seconds = now.getSeconds().toString().padStart(2, '0'); // Saniye (0-59 arası) - 2 haneli yapmak için
    let daysOfWeek = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    let day = daysOfWeek[now.getDay()];
    
    let date = document.querySelector("#myClock");
    date.innerHTML = ` ${hours}:${minutes}:${seconds}, ${day}`;
}

setInterval(showTime, 1000);
showTime();

//Kullanıcıdan isim alma
let isim = prompt("İsminizi giriniz!");
let getName = document.querySelector("#myName");
getName.innerHTML = `${isim}`;

// Sayfanın herhangi bir yerine tıklandığında arka plan rengini değiştir
let changeBG = document.querySelector("#changeBackGround");
changeBG.addEventListener("click", function changeBackGround() {
    let info = document.querySelector("#info");
    if (info.innerHTML === "") {
        info.innerHTML = "Tıklayarak Backgroundu değiştirebilirsin!";
    }
    let colors = ["#7FA1C3", "#FFFBE6", "#86AB89", "#E7FBE6", "#F8EDE3", "#5B99C2", "#CBE2B5", "#BB9AB1"];
    let randomColor = Math.floor(Math.random() * colors.length);
    changeBG.style.setProperty("background-color", colors[randomColor], "important");
});
