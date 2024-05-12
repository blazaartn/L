function change(color) {
    const Code=document.getElementById('code');
    const text=document.getElementById('text');
    text.style.color=color;
    Code.textContent=color;
}
function copie(txt) {
    const container = document.querySelector(txt);
    const code = container.textContent;
    navigator.clipboard.writeText(code);
    alert("Code copied successfully!");
}