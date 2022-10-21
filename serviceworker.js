let i=0
function service() {
    i=i+1
    postMessage(i)
    setTimeout(service(),5000)
}
service()