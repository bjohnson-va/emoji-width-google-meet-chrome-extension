var found = false;

setInterval(() => {
    if (found) {
        return;
    }
    document.querySelectorAll("i.google-material-icons").forEach(v => {
        let s = v.textContent.trim();
        console.log('textContent', s)
        if (s !== "mood") {
            return;
        }
        v.closest("button").style.width = '100px';
        found = true;
    });
}, 1000);
