

let words:string[] = [
    'MATEO',
    'CORAL',
    'LAURA',
]

export function getRandomWord() {
    
    const randomIndex = Math.floor(Math.random() * words.length);

    return words[randomIndex];
}