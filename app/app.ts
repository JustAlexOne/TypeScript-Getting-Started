function startGame() {
    // starting new game
    var messagesElement = document.getElementById('messages');
    messagesElement!.innerText = 'Welcome to JustAlex MultiMath! Starting new game...';
}

document.getElementById('startGame')!.addEventListener('click', startGame);