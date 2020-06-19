const mainWhatsappWidget  = document.querySelector('#whatsapp-widget')

document.addEventListener("DOMContentLoaded", function(event) {
    createElements()
});

async function createElements() {
    const strElement = `<a href="#" id="whatsapp-widget-target" class="whatsapp-widget-target pulse">
                            <img id="whatsapp-widget-icon" class="whatsapp-widget-icon" src="http://200.98.129.191:8080/dashboard/assets/img/whatsapp-icon.png"/>
                        </a>`

    mainWhatsappWidget.innerHTML = strElement

    await setStyles()
}

async function setStyles() {
    const targetWhasappWidget = mainWhatsappWidget.querySelector('#whatsapp-widget-target')
    const iconWhasappWidget   = targetWhasappWidget.querySelector('#whatsapp-widget-icon')

    const setStyleMain = () => {
        mainWhatsappWidget.style.position       = "fixed"
        mainWhatsappWidget.style.bottom         = "20px"
        mainWhatsappWidget.style.right          = "40px"
        mainWhatsappWidget.style.zIndex         = "999"
        mainWhatsappWidget.style.transition     = "0.5s"
    }
    
    const setStyleAnchor = () => {
        targetWhasappWidget.style.width         = "60px"
        targetWhasappWidget.style.height        = "60px"
        targetWhasappWidget.style.display       = "table"
        targetWhasappWidget.style.background    = "#24CD63"
        targetWhasappWidget.style.color         = "#fff"
        targetWhasappWidget.style.textAlign     = "center"
        targetWhasappWidget.style.borderRadius  = "50%"
    }

    const setStyleIcon = () => {
        iconWhasappWidget.style.position        = "absolute"
        iconWhasappWidget.style.display         = "table-cell"
        iconWhasappWidget.style.verticalAlign   = "middle"
        iconWhasappWidget.style.maxWidth        = "30x"
        iconWhasappWidget.style.maxHeight       = "30px"
        iconWhasappWidget.style.top             = "25%"
        iconWhasappWidget.style.left            = "25%"
    }

    setStyleMain()
    setStyleAnchor()
    setStyleIcon()
}

function modalWhatsapp() {
    const x = screen.width  / 2 - 800 / 2;
    const y = screen.height / 2 - 550 / 2;

    window.open(`https://api.whatsapp.com/send?phone=+5547984239994&text=${encodeURIComponent("Ola, contato site")}`, 'Whatsapp','height=550,width=800,left='+x+',top='+y);
}