const qr = document.getElementById('qr');
const input = document.getElementById('input');
const btn = document.getElementById('btn')

btn.addEventListener('click', (e) => {
  e.preventDefault()

  const value = input.value
  
  new QRCode(qr, {
    text: `${value}`,
    correctLevel : QRCode.CorrectLevel.H,
  })
})

