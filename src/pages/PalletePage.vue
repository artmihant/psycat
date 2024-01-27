<template>
<div class="w-screen h-screen flex-col justify-items-stretch">

    <div v-for="pallete, key in palletes" class="w-screen flex h-1/6 relative">
        <div class="absolute text-lg">{{key}}</div>
        <div v-for="color in pallete" :style="{
                'background-color': color.toString(),
            }"
            class="flex-1"
        />
    </div> 

</div>

</template>

<script setup>
import Color from "colorjs.io";


const palletes = {}

const step = 10
const N = 360/step

palletes['oklch'] = []

for(let h=0; h < 360; h+= step){
    palletes['oklch'].push(new Color("oklch", [0.5, 0.4, h]))
}


palletes['lch'] = []

for(let h=0; h < 360; h+= step){
    palletes['lch'].push(new Color("lch", [50, 150, h]))
}


palletes['hsl'] = []

for(let h=0; h < 360; h+= step){
    const color = new Color("hsl", [h, 100, 50])
    palletes['hsl'].push(color)
}


const keyColorsLchP3 = {
    red: new Color("lch", [57.79, 132.84, 47.7]),
    yellow: new Color("lch", [96.91, 120.26, 99.53]),
    green: new Color("lch", [85.91, 143.07, 135.53]),
    cian: new Color("lch", [87.94, 67.67, 196.94]),
    blue: new Color("lch", [30.71, 129.64, 300.71]),
    magenta: new Color("lch", [60, 120.69, 327.18]),
    pink: new Color("lch", [58.24, 96.67, 0]),
}

const keyColorsRGB = {
    red: new Color("#ff0000").to('lch'),
    yellow: new Color("#ffff00").to('lch'),
    green: new Color("#00ff00").to('lch'),
    cian: new Color("#00ffff").to('lch'),
    blue: new Color("#0000ff").to('lch'),
    magenta: new Color("#ff00ff").to('lch'),
}

const keyColorRGBPairs = [
    {left: keyColorsRGB['red'], right: keyColorsRGB['yellow']},
    {left: keyColorsRGB['yellow'],right: keyColorsRGB['green']},
    {left: keyColorsRGB['green'], right: keyColorsRGB['cian']},
    {left: keyColorsRGB['cian'], right: keyColorsRGB['blue']},
    {left: keyColorsRGB['blue'], right: keyColorsRGB['magenta']},
    {left: keyColorsRGB['magenta'], right: keyColorsRGB['red']},
]

let deltasum = 0 

keyColorRGBPairs.forEach((pair) => {
    pair.delta = Color.deltaE76(pair.left, pair.right)
    deltasum += pair.delta
})

let couner = 0

keyColorRGBPairs.forEach((pair) => {
    pair.count = Math.floor(N*pair.delta/deltasum)
    couner += pair.count
})

keyColorRGBPairs.forEach((pair) => {
    if(couner < N){
        pair.count += 1
        couner += 1
    }
})

palletes['dlch1'] = []


keyColorRGBPairs.forEach((pair) => {

    let gradient = pair.left.range(pair.right, {space: "lch"});

    for(let i=0; i < pair.count ; i++){
        palletes['dlch1'].push(gradient(i/pair.count))
    }
})




const keyColorsRGB2 = {
    red: new Color("p3", [1,0,0]).to('oklch'),
    yellow: new Color("p3",[1,1,0]).to('oklch'),
    green: new Color("p3",[0,1,0]).to('oklch'),
    cian: new Color("p3",[0,1,1]).to('oklch'),
    blue: new Color("p3",[0,0,1]).to('oklch'),
    magenta: new Color("p3",[1,0,1]).to('oklch'),
}


const keyColorRGBPairs2 = [
    {left: keyColorsRGB2['red'], right: keyColorsRGB2['yellow']},
    {left: keyColorsRGB2['yellow'],right: keyColorsRGB2['green']},
    {left: keyColorsRGB2['green'], right: keyColorsRGB2['cian']},
    {left: keyColorsRGB2['cian'], right: keyColorsRGB2['blue']},
    {left: keyColorsRGB2['blue'], right: keyColorsRGB2['magenta']},
    {left: keyColorsRGB2['magenta'], right: keyColorsRGB2['red']},
]

let deltasum2 = 0 

keyColorRGBPairs2.forEach((pair) => {
    pair.delta = Color.deltaE(pair.left, pair.right, "OK")
    // pair.delta = 10
    deltasum2 += pair.delta
})

let couner2 = 0

keyColorRGBPairs2.forEach((pair) => {
    pair.count = Math.floor(N*pair.delta/deltasum2)
    couner2 += pair.count
})

keyColorRGBPairs2.forEach((pair) => {
    if(couner2 < N){
        pair.count += 1
        couner2 += 1
    }
})

palletes['dlch2'] = []

keyColorRGBPairs2.forEach((pair) => {

    let gradient = pair.left.range(pair.right, {space: "oklch",  hue: "shorter"});
    for(let i=0; i < pair.count ; i++){
        let color = gradient(i/pair.count)
        palletes['dlch2'].push(color)
    }
})




const keyColorsRGB3 = {
    red: new Color("p3", [1,0,0]).to('oklch'),
    yellow: new Color("p3",[1,1,0]).to('oklch'),
    green: new Color("p3",[0,1,0]).to('oklch'),
    cian: new Color("p3",[0,1,1]).to('oklch'),
    blue: new Color("p3",[0,0,1]).to('oklch'),
    magenta: new Color("p3",[1,0,1]).to('oklch'),
}


const keyColorRGBPairs3 = [
    {left: keyColorsRGB3['red'], right: keyColorsRGB3['yellow']},
    {left: keyColorsRGB3['yellow'],right: keyColorsRGB3['green']},
    {left: keyColorsRGB3['green'], right: keyColorsRGB3['cian']},
    {left: keyColorsRGB3['cian'], right: keyColorsRGB3['blue']},
    {left: keyColorsRGB3['blue'], right: keyColorsRGB3['magenta']},
    {left: keyColorsRGB3['magenta'], right: keyColorsRGB3['red']},
]

let deltasum3 = 0 

keyColorRGBPairs3.forEach((pair) => {
    pair.delta = Color.deltaE(pair.left, pair.right, "OK")
    deltasum3 += pair.delta
})

let couner3 = 0

keyColorRGBPairs3.forEach((pair) => {
    pair.count = Math.floor(N*pair.delta/deltasum3)
    couner3 += pair.count
})

keyColorRGBPairs3.forEach((pair) => {
    if(couner3 < N){
        pair.count += 1
        couner3 += 1
    }
})

palletes['dlch3'] = []


keyColorRGBPairs3.forEach((pair) => {

    let gradient = pair.left.range(pair.right, {space: "oklch",  hue: "shorter"});
    for(let i=0; i < pair.count ; i++){
        let color = gradient(i/pair.count)
        palletes['dlch3'].push(color.to("p3"))
    }
})



// for(const key in palletes){
//     const pallete = palletes[key]
//     let old_color = null

//     console.log(key)

//     for(let color of pallete){
//         if(old_color!= null){
//             console.log(100*Color.deltaE(color, old_color, "OK"), color.toString())
//         }
//         old_color = color
//     }
// }
</script>