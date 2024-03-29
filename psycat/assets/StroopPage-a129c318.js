import{g as B,u as F,h as S,j as w,i as h,k as q,o as k,c as E,l as u,v as f,b as e,n as p,e as j,t as v,F as P,r as T,d as D,w as C,f as M,m as Q}from"./index-d87a4e48.js";import{_ as R}from"./TextButton-3192ee09.js";const U={class:"h-screen flex w-full justify-center",style:{"background-color":"#fff"}},$={class:"h-screen justify-center flex flex-col flex-1"},G={class:"mt-3 text-center"},H=Q('<p> В этом тесте вам будут показывать слова, обозначающие цвета.</p><p> Если слово и его цвет совпадают, нажмите стрелку <b>◄влево◄</b></p><p> Если слово и его цвет различаются, нажмите стрелку <b>►вправо►</b></p><p> Например:</p><p><span class="text-red-600 font-bold">красный</span> — влево ◄ </p><p><span class="text-green-600 font-bold">синий</span> — вправо ► </p><p><b>Постарайтесь выполнить тест как можно быстрее и без ошибок.</b></p>',7),I={class:"h-screen justify-center flex flex-col flex-1"},J={class:"h-screen justify-center flex flex-col flex-0"},O=e("h1",null," Приготовьтесь... ",-1),W=e("p",null,"(нажмите любую клавишу)",-1),X=[O,W],Y={class:"h-screen justify-center flex flex-col flex-0"},Z=e("h1",null,"Итоговый счет ",-1),oo={class:"border border-neutral-700"},eo=e("tr",null,[e("th",{class:"pr-3 border"}),e("th",{class:"pr-3 border text-center"},"справа"),e("th",{class:"pr-3 border text-center"},"центр"),e("th",{class:"pr-3 border text-center"},"слева"),e("th",{class:"pr-3 border text-center"},"направление"),e("th",{class:"pr-3 border text-center"},"реакция")],-1),to={class:"pr-3 border"},ro={class:"pr-3 border text-center"},co={class:"pr-3 border text-center"},so={class:"mt-3 text-center font-bold"},ao=B({__name:"StroopPage",setup(no){const z=F(),s=S("init"),r=[{title:"красный",color:"#f5222d"},{title:"зеленый",color:"#52c41a"},{title:"синий",color:"#1890ff"}];let L=[{first_color:2,second_color:1,congruents:0,direction:1},{first_color:1,second_color:0,congruents:0,direction:1},{first_color:2,second_color:1,congruents:0,direction:1},{first_color:1,second_color:2,congruents:0,direction:1},{first_color:0,second_color:1,congruents:1,direction:0},{first_color:0,second_color:2,congruents:0,direction:1},{first_color:1,second_color:2,congruents:1,direction:0},{first_color:0,second_color:1,congruents:0,direction:1},{first_color:1,second_color:0,congruents:1,direction:0},{first_color:1,second_color:2,congruents:1,direction:0},{first_color:1,second_color:2,congruents:0,direction:1},{first_color:0,second_color:2,congruents:1,direction:0},{first_color:0,second_color:2,congruents:0,direction:1},{first_color:0,second_color:1,congruents:0,direction:1},{first_color:2,second_color:0,congruents:0,direction:1},{first_color:1,second_color:0,congruents:1,direction:0},{first_color:2,second_color:1,congruents:1,direction:0},{first_color:2,second_color:0,congruents:1,direction:0},{first_color:2,second_color:0,congruents:1,direction:0},{first_color:2,second_color:0,congruents:0,direction:1},{first_color:1,second_color:0,congruents:0,direction:1},{first_color:2,second_color:1,congruents:1,direction:0},{first_color:0,second_color:2,congruents:1,direction:0},{first_color:0,second_color:1,congruents:1,direction:0}];L.sort(()=>Math.random()-.5),w(()=>{let l=!0;return n.forEach(t=>{l=l&&t.correctly}),l}),w(()=>{let l=0,t=0;return n.slice(1,-1).forEach(i=>{i.direction?t+=i.reaction_time:l+=i.reaction_time}),{left:l,right:t}}),S(0);const c=h({title:"",color:0,vision:!0,colorize:!0}),d=h({color:0,vision:!0,colorize:!0}),a=h({color:0,vision:!0,colorize:!0}),n=h([]);n.length&&(s.value="score");let K=24,g=0,N=w(()=>1e7),x=()=>{document.removeEventListener("keyup",x),V()},b=()=>{for(document.documentElement.requestFullscreen(),document.removeEventListener("keyup",b),g=0;n.length>0;)n.pop();s.value="prepare",document.addEventListener("keyup",x)},V=()=>{if(g<K){s.value="play";let l=Date.now(),t=L[g];n.push(t);let i=n.length-1,o=i>=0?n[i]:null;o?(t.congruents?(c.title=r[t.first_color].title,c.color=r[t.first_color].color):(c.title=r[t.second_color].title,c.color=r[t.first_color].color),c.vision=!0,d.color=r[o.direction?o.first_color:o.second_color].color,d.vision=!0,a.color=r[o.direction?o.second_color:o.first_color].color,a.vision=!0):(t.congruents?(c.title=r[t.first_color].title,c.color=r[t.first_color].color):(c.title=r[t.second_color].title,c.color=r[t.first_color].color),c.vision=!0,d.vision=!1,a.vision=!1);let m=_=>{let y;if(_.code=="ArrowLeft"||_.code=="KeyA"||_.code=="KeyQ")y=0;else if(_.code=="ArrowRight"||_.code=="KeyD"||_.code=="KeyP")y=1;else return;if(document.removeEventListener("keydown",m),c.vision=!1,d.vision=!1,a.vision=!1,o){let A=Date.now()-l;o.reaction_time=Date.now()-l,A<N.value&&(g+=1),o.correctly=y==o.direction}document.addEventListener("keyup",x)};document.addEventListener("keydown",m)}else z.saveStroopTest(n),s.value="score"};return(l,t)=>{const i=q("router-link");return k(),E("div",U,[u(e("div",{class:"lg:w-40 md:w-24 sm:w-16 w-12",style:p({"background-color":a.color})},null,4),[[f,s.value=="play"&&a.vision&&!1]]),u(e("div",$,[e("div",G,[H,e("button",{onClick:t[0]||(t[0]=(...o)=>j(b)&&j(b)(...o)),class:"rounded-lg border p-2 border-neutral-700 bg-white text-neutral-900"},"Начать тест")])],512),[[f,s.value=="init"]]),u(e("div",I,[e("div",{class:"lg:text-6xl md:text-5xl sm:text-4xl text-3xl text-center font-bold",style:p({color:c.color})},v(c.title.toUpperCase()),5)],512),[[f,s.value=="play"&&c.vision]]),u(e("div",{class:"lg:w-40 md:w-24 sm:w-16 w-12",style:p({"background-color":d.color})},null,4),[[f,s.value=="play"&&d.vision&&!1]]),u(e("div",J,X,512),[[f,s.value=="prepare"]]),u(e("div",Y,[Z,e("table",oo,[eo,(k(!0),E(P,null,T(n,(o,m)=>(k(),E("tr",null,[e("td",to,v(m+1)+" "+v(o.correctly?"✔️":"❌"),1),e("td",{class:"pr-3 border",style:p({"background-color":r[o.direction?o.second_color:o.first_color].color})},null,4),e("td",{class:"pr-3 border text-center",style:p({color:r[o.first_color].color})},v(r[o.congruents?o.first_color:o.second_color].title),5),e("td",{class:"pr-3 border",style:p({"background-color":r[o.direction?o.first_color:o.second_color].color})},null,4),e("td",ro,v(o.direction?">":"<"),1),e("td",co,v(o.reaction_time),1)]))),256))]),e("div",so,[D(i,{to:"ishihara"},{default:C(()=>[D(R,null,{default:C(()=>[M("Далее")]),_:1})]),_:1})])],512),[[f,s.value=="score"]])])}}});export{ao as default};