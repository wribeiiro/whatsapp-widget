# whatsapp-widget 
Simple floating plugin in the footer of your website:

# Screenshot
https://user-images.githubusercontent.com/20648572/214288484-611b9f5f-4193-40c8-b82b-592f8e083177.mp4

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
        buttonTarget: `https://api.whatsapp.com/send?`,
        message:'Hello everyone',
        phone:'+55479999999999',
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
