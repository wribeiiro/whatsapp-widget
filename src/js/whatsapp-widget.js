let paramsDefault = {
    optionsPopup: {
        background: '#095E54',
        color: '#FFFFFF'
    },
    optionsIcon: {
        background: '#24CD63',
        color: '#FFFFFF'
    },
    optionsChat: {
        buttonTarget: `https://api.whatsapp.com/send?phone=+55479999999999&text=${encodeURIComponent("Hello everyone")}`,
        text: 'Open chat'
    },
    optionsBot: {
        name: 'Bot',
        image: 'https://img.icons8.com/plasticine/2x/bot.png',
        messageDefault: 'Hi, 👋 how can I help you?',
        messageTyping: 'is typing...'
    }
}

function initWidget(params)  {
    const wpp = document.createElement('div')
    wpp.setAttribute("id", "whatsapp-widget")
    wpp.classList.add('whatsapp-widget')

    const body = document.querySelector('body')
    body.appendChild(wpp)

    createElements(params)
}

function createElements(params) {
    const mainWhatsappWidget  = document.querySelector('#whatsapp-widget')

    if (params) {
        paramsDefault = params;
    }

    const strTarget = ` <a href="#" id="whatsapp-widget-target" class="whatsapp-widget-target pulse">
                            <img id="whatsapp-widget-icon" class="whatsapp-widget-icon" src="http://200.98.129.191:8080/dashboard/assets/img/whatsapp-icon.png"/>
                        </a>`

    const strChat = `<div class="whatsapp-widget-chat" id="whatsapp-widget-chat">
                    
                        <div class="whatsapp-widget-chat-header" id="whatsapp-widget-chat-header" style="background: ${paramsDefault.optionsPopup.background}; color: ${paramsDefault.optionsPopup.color}">
                            <div class="whatsapp-widget-chat-header close" id="close">x</div>
                            <div class="whatsapp-widget-chat-header bot">
                                <div class="bot-img" id="bot-img">
                                    <img class="whatsapp-widget-chat-header" src="${paramsDefault.optionsBot.image}" />
                                </div>
                                
                                <div style="margin-left: 16px; margin-right: 16px">
                                    <div class="whatsapp-widget-chat-header name" id="nameBot">${paramsDefault.optionsBot.name}</div>
                                    <div class="whatsapp-widget-chat-header status">ONLINE 🟢</div>
                                </div>
                            </div>
                        </div>

                        <div class="whatsapp-widget-chat-chat" id="whatsapp-widget-chat-chat">
                            <div class="whatsapp-widget-chat-chat message">
                                <div class="whatsapp-widget-chat-chat header" id="userBot"></div>
                                <div class="whatsapp-widget-chat-chat msg" id="msgBot"></div>
                                <div class="whatsapp-widget-chat-chat date" id="dateBot"></div>
                            </div>

                            <div class="whatsapp-widget-chat-footer" id="whatsapp-widget-chat-footer">
                                <a href="#" id="whatsapp-widget-open-modal" class="whatsapp-widget-open-modal">   
                                    ${paramsDefault.optionsChat.text}       
                                </a>
                            </div>
                        </div>
                    </div>`

    mainWhatsappWidget.innerHTML = strTarget + strChat

    setEvents()
}
    
function setEvents() {

    const setEventClickClose = () => {
        document.getElementById("close").addEventListener("click", function() {
            document.getElementById("whatsapp-widget-chat").style.opacity = 0
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
            msgBot.innerHTML  = `${paramsDefault.optionsBot.name} ${paramsDefault.optionsBot.messageTyping}`
            dateBot.innerHTML = ``
    
            setTimeout(() => {
                userBot.innerHTML  = paramsDefault.optionsBot.name
                msgBot.innerHTML   = paramsDefault.optionsBot.messageDefault
                dateBot.innerHTML  = timeNow()
            }, 2000);
        }

        document.getElementById("whatsapp-widget-target").addEventListener("click", function(e) {
            e.preventDefault()

            const mainWhatsappChat = document.querySelector('#whatsapp-widget-chat')

            if (mainWhatsappChat.style.opacity == 0) {
                mainWhatsappChat.style.opacity = 1
                simulateMessage()
            } else {
                mainWhatsappChat.style.opacity = 0
            }
        })
    }
    
    setEventClickModal()
    setEventClickWhatsappIcon()
    setEventClickClose()
}

function modalWhatsapp() {
    const x = screen.width  / 2 - 800 / 2
    const y = screen.height / 2 - 550 / 2

    window.open(paramsDefault.optionsChat.buttonTarget, ``,'height=550,width=800,left='+x+',top='+y)
}

function timeNow() {
    const timeString = new Date().toTimeString()

    return timeString.substring(0, 5)
}