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

function delta(a,b){
    return Color.deltaE(a, b, "OK")*100
}

function delta2(a,b){
    return Color.deltaE(a, b, "2000")
}


const cr0 = new Color('color(display-p3 0.9244 0.2464 0.4044)')

const cr1 = new Color('color(display-p3 0.9336 0.268 0.2039)')

const cr2 = new Color('color(display-p3 0.8913 0.2542 0.571)')

const cr3 = new Color('color(display-p3 0.9316 0.2799 0.1176)')
const cr4 = new Color('color(display-p3 0.9298 0.2869 0.0417)')

const dr1 = delta(cr0, cr1) 
const dr2 = delta(cr0, cr2) 

const dr3 = delta(cr0, cr3) 
const dr4 = delta(cr0, cr4) 


// console.log(
//     dr1, dr2
// )

const cb0 = new Color('color(display-p3 0.0772 0.7146 0.7601)')

const cb1 = new Color('color(display-p3 0.2086 0.6784 0.8873)')

const cb2 = new Color('color(display-p3 0.2336 0.727 0.5989)')


const cb3 = new Color('color(display-p3 0.2622 0.6645 0.9147)')
const cb4 = new Color('color(display-p3 0.2891 0.657 0.9268)')

const db1 = delta(cb0, cb1) 
const db2 = delta(cb0, cb2) 
const db3 = delta(cb0, cb3) 
const db4 = delta(cb0, cb4) 

// console.log(
//     db1, db2
// )


const cy0 = new Color('color(display-p3 0.9362 0.7218 0.0842)')

const cy1 = new Color('color(display-p3 0.8169 0.7855 0.1726)') //7

const cy2 = new Color('color(display-p3 0.9805 0.6286 0.1624)') 


const cy3 = new Color('color(display-p3 0.9985 0.6455 0.1872)')
const cy4 = new Color('color(display-p3 0.7553 0.8107 0.2471)')

const dy1 = delta(cy0, cy1) 
const dy2 = delta(cy0, cy2) 
const dy3 = delta(cy0, cy3) 
const dy4 = delta(cy0, cy4) 

console.log(
    dy1, dy2
)

// const cr3 = new Color('color(display-p3 0.9487 0.1226 0.3412)')
// const cr4 = new Color('color(display-p3 0.9534 0.1301 0.2743)')
// const cr5 = new Color('color(display-p3 0.9557 0.1437 0.1956)')


// const dr3 = delta(cr2, cr3) 
// const dr4 = delta(cr3, cr4) 
// const dr5 = delta(cr4, cr5) 








// const cp1 = new Color('color(display-p3 0.8902 0.2467 0.5919)')
// const cp2 = new Color('color(display-p3 0.9338 0.237 0.3626)')
// const cp3 = new Color('color(display-p3 0.9352 0.2775 0.0037)')
// const cp4 = new Color('color(display-p3 0.9276 0.2347 0.4178)')

// console.log(
//     Color.deltaE(cp1, cp2, "2000"),
//     Color.deltaE(cp2, cp3, "2000"),
//     Color.deltaE(cp2, cp4, "2000")
// )

// 9.548782584966787 
// 8.69037782293132

// const c1 = new Color('''#ff1100')
// const c2 = new Color('#ff4400')
// const c3 = new Color('#ff5f00')

// console.log(
//     Color.deltaE(c1, c2, "OK")*100,
//     Color.deltaE(c2, c3, "OK")*100,
// )


// const c4 = new Color('#6bff00')
// const c5 = new Color('#a1ff00')
// const c6 = new Color('#d7ff00')

// console.log(
//     Color.deltaE(c4, c5, "OK")*100,
//     Color.deltaE(c5, c6, "OK")*100
// )


// const c7 = new Color('#0051ff')
// const c8 = new Color('#0081ff')
// const c9 = new Color('#00bcff')

// console.log(
//     Color.deltaE(c7, c8, "2000"),
//     Color.deltaE(c8, c9, "2000")
// )



</script>
