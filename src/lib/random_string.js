
const animals = [
    "Antelope", "Badger", "Bear", "Bison", "Boar", "Bat", "Bull", "Cat", "Chimpanzee", "Chipmunk", "Camel", "Crocodile", "Cow", "Calf", "Deer", "Dog", "Donkey", "Duck", "Elephant", "Ferret", "Fox", "Frog", "Foal", "Giraffe", "Gerbil", "Goat", "Hare", "Hamster", "Hedgehog", "Hippopotamus", "Horse", "Iguana", "Lion", "Lynx", "Lizard", "Mouse", "Mantis", "Monkey", "Moose", "Mongoose", "Ostrich", "Panther", "Pig", "Rabbit", "Raccoon", "Ram", "Rabbit", "Sable", "Snake", "Squirrel", "Sheep", "Tiger", "Turtle", "Wolf", "Zebra", "Duck", "Crow", "Canary", "Chicken", "Cock", "Chick", "Cuckoo", "Crane", "Eagle", "Flamingo", "Goose", "Hen", "Kingfisher", "Lark", "Nightingale", "Parrot", "Peacock", "Pigeon", "Owl", "Ostrich", "Sparrow", "Swan", "Vulture", "Bream", "Carp", "Crucian", "Catfish", "Minnow", "Perch", "Pike", "Ruff", "Roach", "Zander", "Cod", "Crab", "Dolphin", "Fur seal", "Flounder", "Goldfish", "Herring", "Jellyfish", "Mackerel", "Octopus", "Pollock", "Shark", "Salmon", "Sprat", "Scad", "Swordfish", "Seal", "Squid", "Stingray", "Starfish", "Seabass", "Tuna", "Whale", "Ant", "Butterfly", "Bee", "Cockroach", "Fly", "Grasshopper", "Spider", "Mosquito", "Wasp"
]

const qualities = [
    "outgoing", "extravert", "carefree", "lighthearted", "truthful", "candid", "frank", "easygoing", "outspoken", "straightforward", "forthright", "shy", "timid", "reserved", "reticent", "taciturn", "tightlipped", "sensitive", "imaginative", "creative", "emotional", "unstable", "indecisive", "strongwilled", "determined", "selfassured", "strongminded", "selfconfident", "dominant", "ambitious", "demanding", "mannerly", "energetic", "competitive", "selfreliant", "illbred", "illmannered", "badmannered", "unmannerly", "rude", "impolite", "uncivil", "vulgar", "coarse", "inactive", "inert", "sluggish", "torpid", "slow", "languid", "proud", "arrogant", "pompous", "boastful", "selfish", "selfseeking", "selfcentered", "vain", "egocentric", "snobbish", "narrowminded", "critical", "petty", "fussy", "stubborn", "obstinate", "materialistic", "smallminded", "unpredictable", "twofaced", "hypocritical", "dishonest", "changeable", "temperamental", "insincere", "unreliable", "weakwilled", "cowardly", "unrefined", "ungentlemanly", "unladylike", "devoted", "loyal", "true", "faithful", "dedicated", "devout", "committed", "craven", "fainthearted", "lilylivered", "spineless", "chickenhearted", "brave", "courageous", "dauntless", "daring", "fearless", "bold", "plucky", "greedy", "mercenary", "avaricious", "covetous", "desirous", "grasping", "avid", "mean", "miserly", "niggardly", "stingy", "parsimonious", "close", "tightfisted", "tight", "unkind", "nasty", "unpleasant", "malicious", "eager", "desirous", "ardent", "fervent", "enthusiastic", "keen", "anxious", "zealous", "callous", "cruel", "base", "low", "pitiless", "merciless", "kind", "gentle", "kindhearted", "warm", "affectionate", "goodnatured", "compassionate", "sympathetic", "mild", "good", "friendly", "amiable", "considerate", "tender", "thoughtful", "tolerant", "generous", "liberal", "lavish", "openhanded", "magnanimous", "sensible", "levelheaded", "wellbalanced", "practical", "indifferent", "apathetic", "unconcerned", "uninterested", "nonchalant", "cool", "aloof", "detached", "impassive", "incapable", "touchy", "nervous", "alert", "jittery", "calm", "fairminded", "realistic", "rational", "logical", "stupid", "brainless", "witless", "dimwitted", "feebleminded", "foolish", "silly", "imprudent", "dull", "dense", "clumsy", "awkward", "slow", "clever", "bright", "intelligent", "brainy", "quickwitted", "smart", "shrewd", "astute", "sharp", "keen", "acute", "discriminating", "sagacious", "inapt", "inept", "incompetent", "maladroit", "skillful", "adroit", "dexterous", "able", "masterly", "expert", "cunning", "artful", "crafty", "sly", "wily", "foxy", "credulous", "gullible", "na?ve", "trustful", "deceivable", "simple", "impertinent", "impudent", "insolent", "rude", "curt", "pert", "saucy", "audacious", "wellbred", "wellmannered", "civil", "polite", "courteous", "gentlemanly", "ladylike", "refined", "handy", "nimble", "lazy", "slothful", "idle", "indolent", "sociable", "merry", "playful", "frivolous", "selfsatisfied", "vanity", "complacency", "obstinacy", "arrogance", "hypocrisy", "selfishness", "snobbishness", "meanness", "pomposity", "dishonesty", "stubbornness", "pettiness", "possessiveness", "aggressiveness", "creativity", "compassion", "tolerance", "sincerity", "modesty", "timidity", "rashness", "vivacity", "patience", "imagination", "sensitivity", "frankness", "generosity", "passion", "courage", "selfassurance", "ambition", "humility", "Moods", "melancholic", "pensive", "thoughtful", "nostalgic", "longing", "sentimental", "bored", "miserable", "moody", "resentful", "frustrated", "confused", "uncertain", "introspective", "restless", "unsure", "edgy", "confident", "calm", "refreshed", "relaxed", "content", "optimistic", "positive", "excited", "active", "enthusiastic", "ecstatic", "cheerful", "wildrash", "weary", "drained", "exhausted", "empty", "disappointed", "heartbroken", "disillusioned", "gloomy", "depressed", "disheartened", "bewildered", "dejected", "distressed", "lonely", "hostile", "bitter", "insecure", "amazed", "overwhelmed"
]

const colors = ["Red", "Blue", "Green", "Orange", "White", "Black", "Yellow", "Purple", "Silver", "Brown", "Gray", "Pink", "Olive", "Maroon", "Violet", "Charcoal", "Magenta", "Bronze", "Cream", "Gold", "Tan", "Teal", "Mustard", "Coral", "Burgundy", "Lavender", "Mauve", "Peach", "Rust", "Indigo", "Ruby", "Clay", "Cyan", "Azure", "Beige", "Turquoise", "Amber", "Mint"]



export const generateRandomQuality = () => {
    return qualities[Math.floor(Math.random() * qualities.length)].toLowerCase()
};


export const generateRandomAnimale = () => {
    return animals[Math.floor(Math.random() * animals.length)].toLowerCase()
};


export const generateRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)].toLowerCase()
};


export const generateNiceRandomString = () => {

    let quality= qualities[Math.floor(Math.random() * qualities.length)]
    let animal = animals[Math.floor(Math.random() * animals.length)]
    let color = colors[Math.floor(Math.random() * colors.length)]

    return (quality + '_' + color + '_' + animal).toLowerCase()
};
