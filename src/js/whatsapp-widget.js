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

let timer

function initWidget(params)  {

    document.addEventListener("DOMContentLoaded", function(e) {

        const wpp = document.createElement('div')
        wpp.setAttribute("id", "whatsapp-widget")
        wpp.classList.add('whatsapp-widget')

        const body = document.querySelector('body')
        body.appendChild(wpp)

        createElements(params)
    })
}

function createElements(params) {
    const mainWhatsappWidget  = document.querySelector('#whatsapp-widget')

    if (params) 
        paramsDefault = params

    const strTarget = ` <a href="#" id="whatsapp-widget-target" class="whatsapp-widget-target pulse">
                            <img id="whatsapp-widget-icon" class="whatsapp-widget-icon" src="https://imagepng.org/wp-content/uploads/2017/08/WhatsApp-icone.png"/>
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
                                    <div class="whatsapp-widget-chat-header status" id="statusBot">ONLINE 🟢</div>
                                </div>
                            </div>
                        </div>
                        <div class="whatsapp-widget-chat-chat" id="whatsapp-widget-chat-chat">
                            <div class="whatsapp-widget-chat-chat message" id="messageBot">
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
    const close = document.getElementById("close")
    const modal = document.getElementById("whatsapp-widget-open-modal")
    const widgetChat = document.getElementById("whatsapp-widget-chat")
    const widgetTarget = document.getElementById("whatsapp-widget-target")

    const setEventClickClose = () => {
        close.addEventListener("click", function() {
            widgetChat.style.cssText = "visibility: hidden; opacity: 0"
        })
    }

    const setEventClickModal = () => {
        modal.addEventListener("click", function(e) {
            e.preventDefault()
            modalWhatsapp()
            widgetChat.style.cssText = "visibility: hidden; opacity: 0"
        })
    }

    const setEventClickWhatsappIcon = () => {
        const simulateMessage = () => {
            const messageBot = document.querySelector('#messageBot') 
            const userBot   = document.querySelector('#userBot')
            const msgBot    = document.querySelector('#msgBot')
            const dateBot   = document.querySelector('#dateBot')
            const statusBot = document.querySelector('#statusBot')
            
            messageBot.style.display = 'none'
            userBot.innerHTML = ``
            msgBot.innerHTML = ``
            statusBot.innerHTML  = paramsDefault.optionsBot.messageTyping
            dateBot.innerHTML = ``
            
            clearTimeout(timer)

            timer = setTimeout(() => {
                messageBot.style.display = 'block'
                userBot.innerHTML  = paramsDefault.optionsBot.name
                msgBot.innerHTML   = paramsDefault.optionsBot.messageDefault
                statusBot.innerHTML = `Online`
                dateBot.innerHTML  = timeNow()
            }, 2000)
        }

        widgetTarget.addEventListener("click", function(e) {
            e.preventDefault()

            if (window.getComputedStyle(widgetChat).getPropertyValue("opacity") == '0') {
                widgetChat.style.cssText = "visibility: visible; opacity: 1"
                simulateMessage()
            } else {
                widgetChat.style.cssText = "visibility: hidden; opacity: 0"
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

    window.open(paramsDefault.optionsChat.buttonTarget, ``,`height=550,width=800,left=${x},top=${y}`)
}

function timeNow() {
    const timeString = new Date().toTimeString()

    return timeString.substring(0, 5)
}