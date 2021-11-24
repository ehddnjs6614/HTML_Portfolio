let menu = document.querySelector('#menu-btn')
let header = document.querySelector('.header')

menu.onclick = () => {
  menu.classList.toggle('fa-times')
  header.classList.toggle('active')
}

window.onscroll = () => {
  menu.classList.remove('fa-times')
  header.classList.remove('active')
}

let themeToggler = document.querySelector('#theme-toggler')

themeToggler.onclick = () => {
  themeToggler.classList.toggle('fa-sun')
  if (themeToggler.classList.contains('fa-sun')) {
    document.body.classList.add('active')
  } else {
    document.body.classList.remove('active')
  }
}

let target = document.querySelector('#dynamic')

function randomString() {
  let stringArr = [
    '생각하며 , 행동하는 !',
    '코딩을 즐길줄 아는 ',
    '에러와 친한',
    '배움을 두려워 하지 않는 !',
  ]
  let selectString = stringArr[Math.floor(Math.random() * stringArr.length)]
  let selectStringArr = selectString.split('')

  return selectStringArr
}

//타이핑리셋
function resetTyping() {
  target.textContent = ''
  dynamic(randomString())
}

//한글자씩 텍스트 출력 함수
function dynamic(randomArr) {
  if (randomArr.length > 0) {
    target.textContent += randomArr.shift()
    setTimeout(function () {
      dynamic(randomArr)
    }, 80)
  } else {
    setTimeout(resetTyping, 3000)
  }
}
dynamic(randomString())

//커서 깜빡임 효과
function blink() {
  target.classList.toggle('active')
}
setInterval(blink, 500)
