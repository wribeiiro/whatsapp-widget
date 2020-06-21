async function initWidget(params)  {
    const wpp = document.createElement('div')
    wpp.setAttribute("id", "whatsapp-widget")
    wpp.classList.add('whatsapp-widget')

    const body = document.querySelector('body')
    body.appendChild(wpp)

    await createElements(params)
    await loadFont()
}

async function loadFont() {
    const link = document.createElement("link"); 
    link.href = "https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;1,100&display=swap"
    link.rel  = "stylesheet"

    document.head.appendChild(link); 
}

async function createElements(params) {
    const mainWhatsappWidget  = document.querySelector('#whatsapp-widget')

    const strTarget = ` <a href="#" id="whatsapp-widget-target" class="whatsapp-widget-target pulse">
                            <img id="whatsapp-widget-icon" class="whatsapp-widget-icon" src="http://200.98.129.191:8080/dashboard/assets/img/whatsapp-icon.png"/>
                        </a>`

    const strChat = `<div class="whatsapp-widget-chat" id="whatsapp-widget-chat">
                    
                        <div class="whatsapp-widget-chat-header" id ="whatsapp-widget-chat-header">
                            <div class="whatsapp-widget-chat-header close" id="close">x</div>
                            <div class="whatsapp-widget-chat-header bot">
                                <img class="whatsapp-widget-chat-header bot-img" src="https://img.icons8.com/plasticine/2x/bot.png" />
                                <div style="margin-left: 16px; margin-right: 16px">
                                    <div class="whatsapp-widget-chat-header name">BOT USER</div>
                                    <div class="whatsapp-widget-chat-header status">ONLINE</div>
                                </div>
                            </div>
                        </div>

                        <div class="whatsapp-widget-chat-chat" id="whatsapp-widget-chat-chat">
                            <div class="whatsapp-widget-chat-chat message">
                                <div class="whatsapp-widget-chat-chat header" id="userBot"></div>
                                <div class="whatsapp-widget-chat-chat msg" id="msgBot"></div>
                                <div class="whatsapp-widget-chat-chat date" id="dateBot"></div>
                            </div>
                        </div>

                        <div class="whatsapp-widget-chat-footer" id="whatsapp-widget-chat-footer">
                            <a href="#" id="whatsapp-widget-open-modal" class="whatsapp-widget-open-modal pulse">   
                                Open chat       
                            </a>
                        </div>
                    </div>`

    mainWhatsappWidget.innerHTML = strTarget + strChat
    
    await setStyles()
}

async function setStyles() {
    const mainWhatsappWidget  = document.querySelector('#whatsapp-widget')
    const targetWhasappWidget = mainWhatsappWidget.querySelector('#whatsapp-widget-target')
    const iconWhasappWidget   = targetWhasappWidget.querySelector('#whatsapp-widget-icon')
    const chatWhatsappWidget  = mainWhatsappWidget.querySelector('#whatsapp-widget-chat')

    const setStyleMain = () => {
        mainWhatsappWidget.style.fontFamily     = "Roboto"
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

    const setStyleChat = () => {

        const setStyleChatMain = () => {
            chatWhatsappWidget.style.position        = "absolute"
            chatWhatsappWidget.style.opacity         = "0"
            chatWhatsappWidget.style.display         = "flex"
            chatWhatsappWidget.style.flexDirection   = "column"
            chatWhatsappWidget.style.marginBottom    = "96px"
            chatWhatsappWidget.style.width           = "320px"
            chatWhatsappWidget.style.height          = "80px"
            chatWhatsappWidget.style.right           = "40px"
            chatWhatsappWidget.style.zIndex          = "999999"
            chatWhatsappWidget.style.bottom          = "250px"
            chatWhatsappWidget.style.boxShadow       = "rgba(0, 0, 0, 0.2) 0px 12px 24px 0px";
            chatWhatsappWidget.style.transition      = "opacity 0.3s ease 0s, margin 0.3s ease 0s, visibility 0.3s ease 0s";
        }

        const setStyleChatHeader = () => {
            const chatHeader     = chatWhatsappWidget.querySelector('#whatsapp-widget-chat-header')
            const chatClose      = chatHeader.querySelector('.close')
            const chatBot        = chatHeader.querySelector('.bot')
            const chatBotImg     = chatBot.querySelector('.bot-img')
            const chatBotName    = chatBot.querySelector('.name')
            const chatBotStatus  = chatBot.querySelector('.status')

            chatHeader.style.background             = "#095E54"
            chatHeader.style.height                 = "220px"
            chatHeader.style.borderTopLeftRadius    = "10px"
            chatHeader.style.borderTopRightRadius   = "10px"
            chatHeader.style.color                  = "#fff"

            chatClose.style.display         = "flex"
            chatClose.style.color           = "#ffffff"
            chatClose.style.cursor          = "pointer"
            chatClose.style.top             = "8px"
            chatClose.style.position        = "absolute"
            chatClose.style.right           = "8px"
            chatClose.style.width           = "20px"
            chatClose.style.height          = "20px"
            chatClose.style.justifyContent  = "center"
            chatClose.style.alignItems      = "center"

            chatBot.style.padding           = "24px 20px"
            chatBot.style.display           = "flex"
            chatBot.style.alignItems        = "center"

            chatBotImg.style.width           = "52px"
            chatBotImg.style.height          = "52px"
            chatBotImg.style.display         = "block"
            chatBotImg.style.position        = "relative"
            chatBotImg.style.borderRadius    = "50%"
            chatBotImg.style.background      = "#ffffff"

            chatBotName.style.fontSize       = "16px"
            chatBotName.style.fontWeight     = "700"
            chatBotName.style.lineHeight     = "20px"
            chatBotName.style.color          = "#fff"
            chatBotStatus.style.fontSize     = "13px"
            chatBotStatus.style.marginTop    = "4px"
            chatBotStatus.style.lineHeight   = "18px"
            chatBotStatus.style.color        = "#fff"
        }

        const setStyleChatMessage = () => {
            const chatChat       = chatWhatsappWidget.querySelector('#whatsapp-widget-chat-chat')
            const chatMessage    = chatChat.querySelector('.message')
            const chatMheader    = chatMessage.querySelector('.header')
            const chatMmsg       = chatMessage.querySelector('.msg')
            const chatDate       = chatMessage.querySelector('.date')

            chatChat.style.position          = "absolute"
            chatChat.style.maxHeight         = "500px"
            chatChat.style.height            = "250px"
            chatChat.style.width             = "100%"
            chatChat.style.top               = "100px";
            //chatChat.style.padding           = "20px 20px 20px 10px"
            chatChat.style.overflow          = "auto"
            chatChat.style.zIndex            = "0"
            chatChat.style.backgroundImage   = "url(https://i.redd.it/qwd83nc4xxf41.jpg)"

            chatMessage.style.marginTop          = "15px"
            chatMessage.style.position           = "relative"
            chatMessage.style.padding            = "7px 15px 15px"
            chatMessage.style.borderRadius       = "0px 8px 8px"
            chatMessage.style.marginLeft         = "15px"
            chatMessage.style.backgroundColor    = "#E6DDD4"
            chatMessage.style.maxWidth           = "calc(100% - 66px)"

            chatMheader.style.fontSize            = "13px"
            chatMheader.style.fontWeight          = "700"
            chatMheader.style.lineHeight          = "18px"
            chatMheader.style.color               = "color: rgba(0, 0, 0, 0.4)"

            chatMmsg.style.fontSize               = "14px"
            chatMmsg.style.marginTop              = "4px"
            chatMmsg.style.lineHeight             = "19px"
            chatMmsg.style.color                  = "color: rgb(17, 17, 17)"

            chatDate.style.position               = "absolute"
            chatDate.style.fontSize               = "11px"
            chatDate.style.marginTop              = "2px"
            chatDate.style.lineHeight             = "19px"
            chatDate.style.color                  = "color: rgb(17, 17, 17)"
            chatDate.style.right                  = "15px"
            chatDate.style.bottom                  = "0"
        }

        const setStyleChatFooter = () => {
            const chatFooter     = chatWhatsappWidget.querySelector('#whatsapp-widget-chat-footer')
            const buttonChat     = chatFooter.querySelector('#whatsapp-widget-open-modal')

            chatFooter.style.position    = "absolute"
            chatFooter.style.bottom      = "-270px"
            chatFooter.style.height      = "80px"
            chatFooter.style.width       = "100%"
            chatFooter.style.background  = "#fff"


            buttonChat.style.padding         = "10px"
            buttonChat.style.display         = "flex"
            buttonChat.style.flexDirection   = "column"
            buttonChat.style.color           = "#fff"
            buttonChat.style.textDecoration  = "none"
            buttonChat.style.background      = "#24CD63"
            buttonChat.style.justifyContent  = "center"
            buttonChat.style.alignItems      = "center"
            buttonChat.style.marginTop       = "25px"
            buttonChat.style.marginLeft      = "25px"
            buttonChat.style.width           = "250px"
            buttonChat.style.borderRadius    = "25px"

        }

        setStyleChatMain()
        setStyleChatHeader()
        setStyleChatMessage()
        setStyleChatFooter()
    }

    setStyleMain()
    setStyleAnchor()
    setStyleIcon()
    setStyleChat()

    setEvents()
}

function setEvents() {

    const setEventClickClose = () => {
        document.getElementById("close").addEventListener("click", function() {
            document.getElementById("whatsapp-widget-chat").style.opacity = 0;
        })
    }

    const setEventClickModal = () => {
        document.getElementById("whatsapp-widget-open-modal").addEventListener("click", function() {
            modalWhatsapp()
        })
    }

    const setEventClickWhatsappIcon = () => {
        const simulateMessage = () => {
            const userBot   = document.querySelector('#userBot')
            const msgBot    = document.querySelector('#msgBot')
            const dateBot   = document.querySelector('#dateBot')
            
            userBot.innerHTML = ``
            msgBot.innerHTML  = `Bot is typing...`
            dateBot.innerHTML = ``
    
            setTimeout(() => {
                userBot.innerHTML  = `Bot User`
                msgBot.innerHTML   = `Hi, 👋 how can I help you? `
                dateBot.innerHTML  = timeNow()
            }, 2000);
        }

        document.getElementById("whatsapp-widget-target").addEventListener("click", function() {
            
            const mainWhatsappChat = document.querySelector('#whatsapp-widget-chat')

            if (mainWhatsappChat.style.opacity == 0) {
                mainWhatsappChat.style.opacity = 1;
                simulateMessage()
            } else {
                mainWhatsappChat.style.opacity = 0;
            }
        })
    }
    
    setEventClickModal()
    setEventClickWhatsappIcon()
    setEventClickClose()
}

function modalWhatsapp() {
    const x = screen.width  / 2 - 800 / 2;
    const y = screen.height / 2 - 550 / 2;

    window.open(`https://api.whatsapp.com/send?phone=+55479961424114&text=${encodeURIComponent("Hello everyone")}`, 'Whatsapp','height=550,width=800,left='+x+',top='+y);
}

function timeNow() {
    const hour    = new Date().getHours() <= 9 ? `0${new Date().getHours()}` : new Date().getHours() 
    const minutes = new Date().getMinutes() <= 9 ? `0${new Date().getMinutes()}` : new Date().getMinutes() 

    return `${hour}:${minutes}`
}