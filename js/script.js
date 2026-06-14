// Bear Ninja Hunter Revisited
// Game data is declared outside functions so it persists across button clicks.
const gameChoices = ['Bear', 'Ninja', 'Hunter'];

let playerWins = 0;
let computerWins = 0;

function getComputerChoice()
{
    const randomIndex = Math.floor(Math.random() * gameChoices.length);
    return gameChoices[randomIndex];
}

function determineWinner(playerChoice, computerChoice)
{
    if (playerChoice === computerChoice)
    {
        return 'tie';
    }

    if (
        (playerChoice === 'Bear' && computerChoice === 'Ninja') ||
        (playerChoice === 'Ninja' && computerChoice === 'Hunter') ||
        (playerChoice === 'Hunter' && computerChoice === 'Bear')
    )
    {
        return 'player';
    }

    return 'computer';
}

function playGame(playerChoice)
{
    const computerChoice = getComputerChoice();
    const winner = determineWinner(playerChoice, computerChoice);
    let resultMessage = '';

    if (winner === 'player')
    {
        playerWins++;
        resultMessage = 'You win this game!';
    }
    else if (winner === 'computer')
    {
        computerWins++;
        resultMessage = 'The computer wins this game!';
    }
    else
    {
        resultMessage = 'This game is a tie!';
    }

    displayResults(playerChoice, computerChoice, resultMessage);
}

function displayResults(playerChoice, computerChoice, resultMessage)
{
    const resultsSection = document.getElementById('resultsSection');
    const gameResults = document.getElementById('gameResults');
    const scoreResults = document.getElementById('scoreResults');

    gameResults.innerHTML =
        'You chose: ' + playerChoice + '<br>' +
        'The computer chose: ' + computerChoice + '<br>' +
        resultMessage;

    scoreResults.innerHTML =
        '<strong>Game Session Wins</strong><br>' +
        'Player Wins: ' + playerWins + '<br>' +
        'Computer Wins: ' + computerWins;

    resultsSection.classList.remove('hidden');
}

function showInitialPage()
{
    const resultsSection = document.getElementById('resultsSection');
    const gameResults = document.getElementById('gameResults');
    const scoreResults = document.getElementById('scoreResults');

    gameResults.innerHTML = '';
    scoreResults.innerHTML = '';
    resultsSection.classList.add('hidden');
}

function resetSession()
{
    playerWins = 0;
    computerWins = 0;
    showInitialPage();
}
