import{o as s,c as l,a as e,u as n,b as i,d,w as _,g as r,e as u,f as h}from"./index-3e24f392.js";import{_ as m}from"./LinkButton-d0c47520.js";const f={class:"h-screen flex justify-center bg-white text-black"},x={class:"h-screen justify-center"},p={class:"h-screen w-full justify-center flex flex-col flex-1"},w={class:"max-w-[550px]"},b=e("p",null,[e("b",null,"Уважаемые респонденты!")],-1),g=e("p",null,"Меня зовут Екатерина Чаунина. Я студентка 4 курса направления «Клиническая психология» Первого МГМУ им. И.М. Сеченова, провожу исследование, посвященное полушарным различиям восприятия цвета. ",-1),k=e("p",null,"Мы вас попросим выполнить несколько методик. Это займет у вас не более 15 минут. ",-1),v=e("p",null," Все сведения, полученные от вас, конфиденциальны и будут использованы исключительно в научных целях в анонимном виде, что не позволит идентифицировать вас как участников данного исследования. ",-1),y=e("p",null," При желании вы можете получить обратную связь по результатам исследования . ",-1),C={key:0},N=e("b",null,"К сожалению, вы не сможете пройти наш психологический тест с мобильного устройства. Пожалуйста, зайдите на эту страницу с компьютера. Спасибо!",-1),V=[N],j={class:"mt-3 text-center font-bold"},B=e("div",{class:"w-full text-neutral-400"},[e("ul")],-1),A={__name:"HomePage",setup(I){const t=window.browserInfo.mobile,c=()=>{let o=window.localStorage.getItem("cid")+"_"+r()+"_"+u();window.localStorage.setItem("uid",o),window.location.reload()};return(a,o)=>(s(),l("div",f,[e("div",x,[e("div",p,[e("div",w,[b,g,k,v,y,n(t)?(s(),l("p",C,V)):i("",!0)]),e("div",j,[d(m,{disabled:n(t),to:"anketa"},{default:_(()=>[h(" Принять участие")]),_:1},8,["disabled"])]),B,e("button",{onClick:c,class:"absolute bottom-5 right-5 cursor-pointer text-neutral-500 text-xl"},"Ψ")])])]))}};export{A as default};
