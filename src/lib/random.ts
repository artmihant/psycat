
const animals = ['ant', 'antelope', 'badger', 'bear', 'bee', 'bison', 'boar', 'bream', 'bull', 'butterfly', 'camel', 'canary', 'carp', 'cat', 'catfish', 'chick', 'chicken', 'chimpanzee', 'chipmunk', 'cock', 'cockroach', 'cod', 'cow', 'crab', 'crocodile', 'crow', 'crucian', 'cuckoo', 'dog', 'dolphin', 'donkey', 'duck', 'elephant', 'ferret', 'flounder', 'fly', 'foal', 'fox', 'frog', 'gerbil', 'giraffe', 'goat', 'goldfish', 'goose', 'grasshopper', 'hamster', 'hare', 'hedgehog', 'herring', 'hippopotamus', 'horse', 'iguana', 'jellyfish', 'kingfisher', 'lark', 'lion', 'lizard', 'lynx', 'mackerel', 'mantis', 'minnow', 'monkey', 'moose', 'mosquito', 'mouse', 'nightingale', 'octopus', 'ostrich', 'ostrich', 'owl', 'panther', 'parrot', 'peacock', 'pig', 'pigeon', 'pike', 'pollock', 'rabbit', 'ram', 'scad', 'seabass', 'seal', 'sheep', 'sparrow', 'spider', 'sprat', 'squid', 'squirrel', 'starfish', 'stingray', 'swan', 'swordfish', 'tiger', 'tuna', 'turtle', 'vulture', 'wasp', 'whale', 'wolf', 'zebra']
const qualities = ['able', 'arrogant', 'audacious', 'avid', 'bitter', 'boastful', 'bold', 'bored', 'candid', 'carefree', 'civil', 'committed', 'competitive', 'complacency', 'considerate', 'content', 'cool', 'courteous', 'covetous', 'cowardly', 'credulous', 'critical', 'curt', 'daring', 'dauntless', 'dedicated', 'dense', 'depressed', 'desirous', 'determined', 'dexterous', 'dimwitted', 'discriminating', 'easygoing', 'egocentric', 'emotional', 'enthusiastic', 'fainthearted', 'faithful', 'foolish', 'frankness', 'gentle', 'greedy', 'gullible', 'heartbroken', 'idle', 'illmannered', 'impudent', 'inapt', 'indecisive', 'inept', 'inert', 'insolent', 'intelligent', 'introspective', 'jittery', 'keen', 'lazy', 'levelheaded', 'lighthearted', 'magnanimous', 'masterly', 'mean', 'melancholic', 'mild', 'narrowminded', 'nasty', 'nimble', 'obstinate', 'parsimonious', 'passion', 'pensive', 'relaxed', 'reticent', 'selfishness', 'selfreliant', 'selfsatisfied', 'sensitivity', 'slow', 'slow', 'smallminded', 'sociable', 'spineless', 'straightforward', 'strongwilled', 'stubborn', 'temperamental', 'thoughtful', 'thoughtful', 'tight', 'timidity', 'tolerance', 'touchy', 'truthful', 'unkind', 'unreliable', 'vulgar', 'wellbalanced', 'wildrash', 'wily']
const colors = ['alizarin', 'amaranth', 'amber', 'amethyst', 'apricot', 'aquamarine', 'asparagus', 'auburn', 'azure', 'bistre', 'blue', 'bronze', 'brown', 'buff', 'burgundy', 'cardinal', 'carmine', 'celadon', 'cerise', 'cerulean', 'champagne', 'charcoal', 'chartreuse', 'chestnut', 'chocolate', 'cinnabar', 'copper', 'coral', 'corn', 'cornflower', 'cream', 'crimson', 'cyan', 'dandelion', 'denim', 'ecru', 'eggplant', 'emerald', 'flax', 'fuchsia', 'gamboge', 'gold', 'goldenrod', 'grey', 'harlequin', 'heliotrope', 'indigo', 'ivory', 'khaki', 'lavender', 'lilac', 'lime', 'linen', 'magenta', 'magnolia', 'maroon', 'mauve', 'myrtle', 'ochre', 'olive', 'olivine', 'orange', 'orchid', 'peach', 'pear', 'periwinkle', 'persimmon', 'pink', 'platinum', 'puce', 'pumpkin', 'purple', 'razzmatazz', 'red', 'rose', 'russet', 'rust', 'salmon', 'sangria', 'sapphire', 'scarlet', 'seashell', 'sepia', 'silver', 'smalt', 'tan', 'tangerine', 'taupe', 'teal', 'thistle', 'tomato', 'turquoise', 'ultramarine', 'vermilion', 'violet', 'viridian', 'wheat', 'white', 'yellow', 'zucchini']


export function generateNiceRandomKey(){
    const r1 = Math.floor(Math.random() * qualities.length)
    const r2 = Math.floor(Math.random() * colors.length)
    const r3 = Math.floor(Math.random() * animals.length)

    const code = (r1 < 10 ? `0${r1}` : `${r1}`) + 
            (r2 < 10 ? `0${r2}` : `${r2}`) + 
            (r3 < 10 ? `0${r3}` : `${r3}`)

    const uid = qualities[r1] + '_' + colors[r2] + '_' + animals[r3]

    return {code, uid}
}


export const shaffles = [
    [3, 7, 5, 8, 1, 9, 11, 10, 6, 2, 4, 0],
    [6, 10, 9, 8, 7, 4, 5, 0, 2, 1, 3, 11],
    [5, 1, 0, 6, 9, 7, 3, 8, 2, 11, 10, 4],
    [5, 8, 6, 3, 1, 9, 7, 2, 4, 10, 0, 11],
    [7, 10, 0, 4, 5, 6, 9, 1, 3, 8, 11, 2],
    [5, 11, 7, 9, 4, 8, 6, 1, 2, 3, 0, 10],
    [0, 4, 1, 10, 7, 5, 11, 9, 3, 6, 8, 2],
    [2, 3, 7, 11, 10, 9, 8, 5, 1, 4, 6, 0],
    [5, 1, 3, 10, 11, 9, 7, 6, 2, 8, 0, 4],
    [3, 0, 2, 6, 8, 5, 7, 1, 9, 11, 4, 10],
    [6, 2, 8, 1, 9, 7, 4, 10, 5, 0, 3, 11],
    [8, 2, 7, 9, 6, 11, 3, 4, 1, 5, 0, 10],
    [7, 10, 11, 2, 9, 6, 4, 5, 3, 8, 0, 1],
    [8, 3, 7, 2, 4, 6, 9, 10, 1, 11, 0, 5],
    [8, 3, 1, 4, 0, 7, 11, 6, 9, 5, 2, 10],
    [8, 3, 6, 11, 4, 7, 2, 0, 5, 1, 10, 9],
    [11, 8, 0, 5, 1, 4, 2, 7, 6, 9, 3, 10],
    [2, 1, 9, 5, 6, 7, 3, 8, 11, 4, 10, 0],
    [8, 5, 3, 0, 1, 11, 9, 10, 6, 4, 2, 7],
    [11, 6, 9, 3, 1, 8, 2, 5, 10, 7, 0, 4]
]

export function randomInt(max:number) {
    return Math.floor(Math.random() * max);
}

shaffles.forEach(shaffle => shaffle.unshift(randomInt(12)))

export function getRandomCard(s:number, t:number){
    const shaffle = shaffles[s % shaffles.length]
    const card = shaffle[t % shaffle.length]
    return card
}