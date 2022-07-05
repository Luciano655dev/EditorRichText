function createBubbles(qnt=20){
    for(let i=1; i<=qnt; i++){
        let bubble = document.createElement('div')
        bubble.classList.add('bubble')

        bubble.classList.add('rellax')

        let x = Math.round(Math.random() * (95 - 5) + 5)
        let y = Math.round(Math.random() * (95 - 5) + 5)

        bubble.style.left = `${x}%`
        bubble.style.top = `${y}%`

        let animDuration = Math.round(Math.random() * (5 - 3) + 3)
        bubble.style.animation = `bubbleAnim ${animDuration}s infinite`

        document.body.appendChild(bubble)
    }
}

createBubbles()