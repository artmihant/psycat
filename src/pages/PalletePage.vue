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

const step = 5
const N = 360/step




palletes['hsl'] = []

for(let h=0; h < 360; h+= step){
    const color = new Color("hsl", [h, 100, 50])
    palletes['hsl'].push(color)
}


palletes['lch'] = []

for(let h=0; h < 360; h+= step){
    const color = new Color("lch", [60, 132, h])
    palletes['lch'].push(color.to("p3"))
}


palletes['oklch'] = []

for(let h=0; h < 360; h+= step){
    const color = new Color("oklch", [0.8, 0.5, h])
    palletes['oklch'].push(color.to("p3"))
}



function genGradPallete(keyColorPairs, N, config){

    let deltasum = 0 

    keyColorPairs.forEach((pair) => {
        pair.delta = Color.deltaE(pair.left, pair.right, config.delta)
        deltasum += pair.delta
    })

    let couner = 0

    keyColorPairs.forEach((pair) => {
        pair.count = Math.floor(N*pair.delta/deltasum)
        couner += pair.count
    })


    keyColorPairs.forEach((pair) => {
        if(couner < N){
            pair.count += 1
            couner += 1
        }
    })
    
    let pallet = []

    keyColorPairs.forEach((pair) => {
        let gradient = pair.left.range(pair.right, {space: config.space});
        for(let i=0; i < pair.count ; i++){
            let color = gradient(i/pair.count)
            pallet.push(color.to("p3"))
        }
    })

    return pallet
}


const keyColorsP3 = {
    red: new Color("srgb", [1,0,0]).to('oklch'),
    yellow: new Color("srgb",[1,1,0]).to('oklch'),
    green: new Color("srgb",[0,1,0]).to('oklch'),
    cian: new Color("srgb",[0,1,1]).to('oklch'),
    blue: new Color("srgb",[0,0,1]).to('oklch'),
    magenta: new Color("srgb",[1,0,1]).to('oklch'),
}


palletes['lch2000'] = genGradPallete([
    {left: keyColorsP3['red'], right: keyColorsP3['yellow']},
    {left: keyColorsP3['yellow'],right: keyColorsP3['green']},
    {left: keyColorsP3['green'], right: keyColorsP3['cian']},
    {left: keyColorsP3['cian'], right: keyColorsP3['blue']},
    {left: keyColorsP3['blue'], right: keyColorsP3['magenta']},
    {left: keyColorsP3['magenta'], right: keyColorsP3['red']},
], N, {space: "lch", delta: "2000"})


palletes['lch2000'] = genGradPallete([
    {left: keyColorsP3['red'], right: keyColorsP3['yellow']},
    {left: keyColorsP3['yellow'],right: keyColorsP3['green']},
    {left: keyColorsP3['green'], right: keyColorsP3['cian']},
    {left: keyColorsP3['cian'], right: keyColorsP3['blue']},
    {left: keyColorsP3['blue'], right: keyColorsP3['magenta']},
    {left: keyColorsP3['magenta'], right: keyColorsP3['red']},
], N, {space: "lch", delta: "2000"})

palletes['ok'] = genGradPallete([
    {left: keyColorsP3['red'], right: keyColorsP3['yellow']},
    {left: keyColorsP3['yellow'],right: keyColorsP3['green']},
    {left: keyColorsP3['green'], right: keyColorsP3['cian']},
    {left: keyColorsP3['cian'], right: keyColorsP3['blue']},
    {left: keyColorsP3['blue'], right: keyColorsP3['magenta']},
    {left: keyColorsP3['magenta'], right: keyColorsP3['red']},
], N, {space: "oklch", delta: "OK"})


palletes['redlch'] = genGradPallete([
    {left: keyColorsP3['magenta'], right: keyColorsP3['red']},
], N, {space: "lch", delta: "2000"})

palletes['redOK'] = genGradPallete([
    {left: keyColorsP3['magenta'], right: keyColorsP3['red']},
], N, {space: "oklch", delta: "OK"})

palletes['yellow2000'] = genGradPallete([
    {left: keyColorsP3['red'], right: keyColorsP3['yellow']},
], N, {space: "lch", delta: "2000"})

palletes['yellowOK'] = genGradPallete([
    {left: keyColorsP3['red'], right: keyColorsP3['yellow']},
], N, {space: "oklch", delta: "OK"})


palletes['green2000'] = genGradPallete([
    {left: keyColorsP3['yellow'], right: keyColorsP3['green']},
], N, {space: "lch", delta: "2000"})

palletes['greenOK'] = genGradPallete([
    {left: keyColorsP3['yellow'], right: keyColorsP3['green']},
], N, {space: "oklch", delta: "OK"})


palletes['cian2000'] = genGradPallete([
    {left: keyColorsP3['green'], right: keyColorsP3['cian']},
], N, {space: "lch", delta: "2000"})

palletes['cianOK'] = genGradPallete([
    {left: keyColorsP3['green'], right: keyColorsP3['cian']},
], N, {space: "oklch", delta: "OK"})


palletes['blue2000'] = genGradPallete([
    {left: keyColorsP3['cian'], right: keyColorsP3['blue']},
], N, {space: "lch", delta: "2000"})

palletes['blueOK'] = genGradPallete([
    {left: keyColorsP3['cian'], right: keyColorsP3['blue']},
], N, {space: "oklch", delta: "OK"})


palletes['magenta2000'] = genGradPallete([
    {left: keyColorsP3['blue'], right: keyColorsP3['magenta']},
], N, {space: "lch", delta: "2000"})

palletes['magentaOK'] = genGradPallete([
    {left: keyColorsP3['blue'], right: keyColorsP3['magenta']},
], N, {space: "oklch", delta: "OK"})


const c1 = new Color('#ff3b28')
const c2 = new Color('#ff2b6e')
const c3 = new Color('#ff00a0')

console.log(
    Color.deltaE(c1, c2, "OK")*100,
    Color.deltaE(c2, c3, "OK")*100,
)


const c4 = new Color('#FF0065')
const c5 = new Color('#FF0000')
const c6 = new Color('#FD5b00')

console.log(
    Color.deltaE(c4, c5, "OK")*100,
    Color.deltaE(c5, c6, "OK")*100
)


const c7 = new Color('#FF0044')
const c8 = new Color('#FF0000')
const c9 = new Color('#FD6000')

console.log(
    Color.deltaE(c7, c8, "2000"),
    Color.deltaE(c8, c9, "2000")
)



</script>
