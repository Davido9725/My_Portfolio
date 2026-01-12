//Smooth scrolling
document.querySelectorAll('nav a').forEach(link=>
{
    link.addEventListener('click',function(e){
        document.querySelector(this.getASttribute('href'))
        .scrollIntoView({behavior:'smooth'})
    })
})
//Change theme color
function changeTheme(){
    document.body.style.backgroundColor=
    document.body.style.backgroundColor===
    'white'
    ?'#f4f4f4'
    :'white';
}
//WhatsApp alert
function showAlert() {
    alert("You are being redirected to WhatsApp");
}
alert("Welcome to my Portfolio")