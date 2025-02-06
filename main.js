const TEXT_AREA_MAX_LINE_COUNT = 4.5;

function chatInputAutoResizeTA(textarea) {
    const countOfLines = textarea.value.split('\n').length;

    const lineHeight = parseFloat(textarea.style.lineHeight);
    const minHeight = parseFloat(textarea.style.minHeight);
    const maxHeight = minHeight + lineHeight * (TEXT_AREA_MAX_LINE_COUNT - 1.5);
    
    const height = minHeight + lineHeight * (countOfLines - 1);
    
    if (height <= maxHeight) {
        textarea.style.height = height + 'px';
    }
    else {
        textarea.style.height = maxHeight + 'px';
    }
}

// function chatSendBtnUpdateText() {
//     const chatSendBtn = document.querySelector('.send-btn');
//     if (window.innerWidth <= 768) {
//         chatSendBtn.innerHTML = '<img src="https://img.icons8.com/?size=24&id=87599&format=png&color=ffffff" alt="send-msg-icon">';
//     }
//     else {
//         chatSendBtn.innerHTML = 'Отправить';
//     }
// }

// window.addEventListener('load', chatSendBtnUpdateText);
// window.addEventListener('resize', chatSendBtnUpdateText);