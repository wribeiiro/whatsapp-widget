# whatsapp-widget 
Simple floating plugin in the footer of your website:

# Screenshot
![gif3](https://user-images.githubusercontent.com/20648572/112698263-5eb59b80-8e9a-11eb-8619-223a06a2ade4.gif)

See the [project page](https://www.wribeiiro.com/whatsapp-widget/) for a demonstration.

## Quick start

1\.  Add whatsapp-widget files:

```html
<link  href="/path/to/whatsapp-widget.css" rel="stylesheet">
<script src="/path/to/whatsapp-widget.js"></script>
```


2\.  Call function, without parameters:
```javascript
initWidget({})
```

4\. Standard parameters! But you can pass a new configuration object, see below:
```javascript
const config = {
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

initWidget(config)
```
