
export type ViewFigure = {
    color: string
    figure: string
}

export type Test = {
    position: number
    direction: 'r' | 'l'
    answer: 'r' | 'l' | ''
    correctly: boolean
    reaction_time: number
}

export type Series = {
    tests: Test[],
    figure: string,
    ground: string,
    target: string,
}
