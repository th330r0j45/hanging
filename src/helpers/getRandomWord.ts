

let words:string[] = [
    'MATEO',
    'CORAL',
    'LAURA',
    'PAPAYA',
    'AGUACATE',
]

export function getRandomWord() {
    
    const randomIndex = Math.floor(Math.random() * words.length);

    return words[randomIndex];
}