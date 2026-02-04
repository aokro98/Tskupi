

function rollDice(){
    document.getElementById('white-logo').style.display = 'none';
    const numOfDice = document.getElementById('numOfDice').value;
    const diceResult = document.getElementById('diceResult');
    const diceImages = document.getElementById('diceImages');
    const values = [];
    const images = [];

    for(let i = 0; i < numOfDice; i++){
        const valueD = Math.floor(Math.random() * 6) + 1;
        values.push(valueD);
        images.push(`<img src='dice_sides/${valueD}.png' class='die-sides' alt='die of ${valueD}'>`);
    }

    diceResult.textContent = `dice: ${values.join(', ')}`;
    diceImages.innerHTML = images.join('');
}

function getNumber(){
    document.getElementById('white-logo').style.display = 'none';
    const min = Number(document.getElementById('min').value);
    const max = Number(document.getElementById('max').value);
    const oddEven = document.getElementById('oddEven').value;
    const divisibleBy = Number(document.getElementById("divisible").value);
    const numberResult = document.getElementById("numberResult");
    const numberDisplay = document.getElementById('numberDisplay');

    if (isNaN(min) || isNaN(max) || isNaN(divisibleBy)) {
    numberResult.textContent = "Please enter valid numbers!";
    return;
    }
    if (min > max){
        numberResult.textContent = `Min can't be bigger than Max!`
        return;
    }
    if (divisibleBy < 1) {
        numberResult.textContent = "Divisible by must be 1 or higher!";
        numberDisplay.textContent = "";
        return;
    }
     if (
        (oddEven === "odd" && divisibleBy % 2 === 0 && divisibleBy !== 1) ||
        (oddEven === "even" && divisibleBy % 2 === 0 && min % 2 !== 0 && max % 2 !== 0)
    ) {
        numberResult.textContent = "Tskupi can't offer any possible numbers with these rules!";
        numberDisplay.textContent = "";
        return;
    }
    if (divisibleBy === 0) {
    numberResult.textContent = "Tskupi can't divide by 0!";
    return;
    }
    if (
    min < Number.MIN_SAFE_INTEGER ||
    max > Number.MAX_SAFE_INTEGER
    ) {
    numberResult.textContent = "That number range is too large for Tskupi!";
    return;
    }
    if (isNaN(min) || isNaN(max) || isNaN(divisibleBy)) {
    numberResult.textContent = "Please enter valid numbers!";
    return;
    }
    let randomNumber;
    do {
        randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    } while (
        (oddEven === "odd" && randomNumber % 2 === 0) ||
        (oddEven === "even" && randomNumber % 2 !== 0) ||
        (divisibleBy > 1 && randomNumber % divisibleBy !== 0)
    );
    numberResult.textContent = `Your number is:`
    numberDisplay.textContent = randomNumber;
}

function flipCoin(){
    document.getElementById('white-logo').style.display = 'none';
    const coinImages = document.getElementById('coinImages');
    const coinResult = document.getElementById('coinResult');
    const side = Math.random() < 0.5 ? 'heads' : 'tails';
    coinResult.textContent = `Result: ${side}`;
    coinImages.innerHTML = `<img src="pictures&icons/${side}.png" alt="${side}" class="coin-sides">`;

}



let aliasWords = [
  'Fire','Rain','Student','Rabbit','Communication','Nightmare','Actor','Worry','Mirror',
  'Stupid','Pillow','Spring','Taste','Allergy','Curtain','Braces','Candle','Hiking',
  'Earthquake','Linux','Internet','Hunger','Wool','Mist','Gymnastics','Nostalgia',
  'Opera','Fever','Python','Sun','Clay','Ghost','Dinosaur','Cabbage','Message', 'Oil',
  'Silver', 'Consequence', 'Truth', 'Paradox', 'Story', 'Radiate', 'Simple', 'Myth', 
  'Saddle', 'Lantern', 'Reputation', 'Jazz', 'Nationality', 'Flesh', 'Moss', 'Sudden',
  'Furniture', 'Jewel', 'Cereal', 'Stay', 'Harmful', 'Nonchalant', 'Seahorse', 'Divorce',
  'Understand', 'Cousin', 'Enter', 'Shadow', 'Sweet', 'Bait', 'Shy', 'Boil', 'Poem', 'Gamble',
  'Graphite', 'Victory', 'Primate', 'Waterfall', 'Army', 'Skip', 'Negotiation', 'Crops', 
  'Escape', 'Cinema', 'Suspicius', 'Clown', 'Bat', 'Fig', 'Fold', 'Multiple', 'Hallucination',
  'Theory', 'Grasshopper', 'Mechanical', 'Portable', 'Excuse', 'Control', 'Doubt', 'Gill',
  'Infinite', 'Capture', 'Life', 'Knight', 'Chess', 'Skate', 'Fur', 'Twig', 'Mud', 'Salt',
  'Map', 'Pure', 'Coal', 'Miniature', 'Dragon', 'Champion', 'Insect', 'Luxurious', 'Highlighter',
  'Film', 'Boredom', 'Unique', 'Self', 'Aggressive', 'Real', 'Visual', 'Flat', 'Some', 'Gesture',
  'Viking', 'Comic', 'Chainsaw', 'Careful', 'Manipulate', 'Silent', 'Direction', 'Windsheild',
  'Cave', 'Sand', 'Dry', 'Calculate', 'Storm', 'Cactus', 'Shrimp', 'Bun', 'Key', 'Bank', 
  'Performance', 'Troll', 'Frame', 'Moisturize', 'Vine', 'Impossible', 'Saliva', 'Exercise',
  'Creep', 'Disgusting', 'Vacuum', 'Gas', 'Drift', 'Towel', 'Poke', 'Flip', 'Middle', 'Piglet',
  'Bloom', 'Blade', 'Liver', 'Dimple', 'Deny', 'Inside', 'Citrus', 'Flour', 'Measure', 'Fluffy',
  'Similar', 'Temperature', 'Donkey', 'Blender', 'Machine', 'Captain', 'Exotic', 'Insecure',
  'Extinct', 'Stripe', 'Soon', 'Carry', 'Puppet', 'Explain', 'Mushroom', 'Castle', 'Genius',
  'Beer', 'Party', 'Kindergarden', 'Lawyer', 'Confused', 'Punctual', 'Seagull', 'Drums', 
  'Shelf', 'Director', 'Calendar', 'Twin', 'Umbrella', 'Legal', 'Voice', 'Cowboy', 'Guilt',
  'Determined', 'Wise', 'Caviar', 'Greenhouse', 'Astronaut', 'Muse', 'Jellyfish', 'Laconic', 
  'Ready', 'Fail', 'Fix', 'Nap', 'Drive', 'Double', 'Mammal', 'Instead', 'Humor', 'Birth', 
  'Goodbye', 'Sink', 'Tornado', 'Leather', 'Flexible', 'Peak', 'Web', 'Refuse', 'Prey', 
  'Scorpion', 'Album', 'Astronomy', 'Constellation', 'Helmet', 'Protein', 'Rubber','Armor', 
  'Alert', 'Geometry', 'Wish', 'Art', 'Politics', 'Market', 'Skill', 'Wrinkle', 'Orbit',
  'Shatter', 'Cable', 'Raccoon', 'Alcohol', 'Centipede', 'Electricity', 'Potential', 'Gravity',
  'Wax', 'Drowning', 'Half', 'Sympathy', 'Rage', 'Caricature', 'Horn', 'Elevator', 'Undergound',
  'Perpendicular', 'Lobster', 'Sunshine', 'Vampire', 'Engagement', 'Example', 'Dilemma',
  'Annoying', 'Mercy', 'Supper', 'Election', 'Layer', 'Pomegranate', 'Innocent', 'Duel', 'Furnace',
  'Close', 'Practical', 'Thorn', 'Glacier', 'Opposite', 'Upgrade', 'Violence', 'Exorcise', 'Pain',
  'Keyboard', 'Force', 'Talented', 'Midnight', 'Eraser', 'Drunk', 'Apocalypse', 'Private', 
  'Moment', 'Crawl', 'Socialise', 'Capital', 'Value', 'Gap', 'Acetone', 'Ink', 'Ultraviolet',
  'Vase', 'Accessory', 'Virtual', 'Medicine', 'Transparent', 'Reptile', 'Toad', 'Silk', 'Smooth',
  'Comedy', 'Catastrophe', 'Concert', 'Trauma', 'Tattoo', 'Transformation', 'Parachute', 'Ostrich',
  'Pyramid', 'Lasso', 'Watermelon', 'Church', 'Cape', 'Sunglasses', 'Paranoid', 'Jar', 'Symphony',
  'Radio', 'Vein', 'Straw', 'Symbol', 'Conflict', 'Collect', 'Cockroach', 'Glove', 'Shock', 
  'Mint', 'Ceiling', 'Arithmetics', 'Peripheral', 'Mumble', 'Bruise', 'Hedgehog', 'Perfume',
  'Protagonist', 'Harmony', 'Concrete', 'Information', 'Childish', 'Progress', 'Crack'
];

let timerInterval;

function startAlias() {
    const whiteLogo = document.getElementById('white-logo');
    const aliasBtn = document.getElementById('aliasBtn');
    const timer = document.getElementById('timer');
    const wordContainer = document.getElementById('wordContainer');

    whiteLogo.style.display = 'none';
    aliasBtn.style.display = 'none';


    let timeLeft = 30;
    timer.textContent = timeLeft + 's';

    showWords();

    timerInterval = setInterval(() => {
        timeLeft--;
        timer.textContent = timeLeft + 's';

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            timer.textContent = "Time's up!"
        }
    }, 1000);
}

function showWords() {
    const wordContainer = document.getElementById('wordContainer');
    wordContainer.innerHTML = '';
    const selectedAlias = getRandomWords(aliasWords, 5);

    selectedAlias.forEach(word => {
        const div = document.createElement('div');
        div.textContent = word;
        div.classList.add('alWord');
        div.addEventListener('click', () => {
            div.classList.toggle('guessed');
        });
        wordContainer.appendChild(div);
    });

    const quitBtn = document.createElement('button');
    quitBtn.textContent = 'QUIT';
    quitBtn.id = 'quitBtn';
    quitBtn.style.marginTop = '20px';
    quitBtn.onclick = endAlias;
    wordContainer.appendChild(quitBtn);

}

function getRandomWords(words, count) {
    const selected = [];
    const usedIndices = new Set();

    while (selected.length < count) {
        const randomIndex = Math.floor(Math.random() * words.length);
        if (!usedIndices.has(randomIndex)) {
            usedIndices.add(randomIndex);
            selected.push(words[randomIndex]);
        }
    }

    return selected;
}

function endAlias() {
    clearInterval(timerInterval);

    document.getElementById('aliasBtn').style.display = 'block';
    document.getElementById('wordContainer').innerHTML = '';
    document.getElementById('timer').textContent = '';
    document.getElementById('white-logo').style.display = 'block';
}

