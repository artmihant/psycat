import{i as V,h as D,s as p,r as F,j as J,o as s,c as a,k as m,x,a as e,f as i,t as l,u as h,F as f,y as w,d as k,w as y,J as P,m as A,n as C,p as S}from"./index-3e24f392.js";import{_ as j}from"./LinkButton-d0c47520.js";const E={class:"p-4 w-screen md:min-h-screen flex items-center justify-center"},I={class:"w-fit h-fit"},L=e("h1",null,"Тест Ишихары",-1),M={class:"border border-neutral-900 rounded p-3 flex items-center flex-col md:flex-row"},O=["src"],Q={class:"grid m-5 w-[300px]"},$={id:"numberbuttons",class:"grid grid-cols-3"},q=e("h1",null,"Тест Ишихары - результаты",-1),z={class:"border border-neutral-700"},G=e("tr",{class:"bg-neutral-200 border-neutral-700"},[e("th",{class:"pr-3 border border-neutral-700"},"id"),e("th",{class:"pr-3 border border-neutral-700 text-center"},"Значение"),e("th",{class:"pr-3 border border-neutral-700 text-center"},"Ответ"),e("th",{class:"pr-3 border border-neutral-700 text-center"},"Результат")],-1),H={class:"pr-3 border border-neutral-700"},K={class:"pr-3 border border-neutral-700 text-center"},R={class:"pr-3 border border-neutral-700 text-center"},U={class:"pr-3 border border-neutral-700 text-center"},W={class:"pr-3 border border-neutral-700 text-center"},X={key:0,class:"mt-3 text-center font-bold"},Y={key:1,class:"mt-3 text-center font-bold"},se={__name:"IshiharaPage",async setup(Z){let n,v;const B=[1,2,3,4,5,6,7,8,9],_=V("uid"),d=([n,v]=D(()=>P(A(C,"users",_))),n=await n,v(),n).data(),r=p([{src:"8-dark",value:8},{src:"7-dark",value:7},{src:"8-light",value:8},{src:"2-light",value:2},{src:"1-light",value:1},{src:"6-dark",value:6},{src:"6-light",value:6},{src:"3-light",value:3},{src:"3-dark",value:3},{src:"4-med",value:4},{src:"9-light",value:9},{src:"8-light2",value:8},{src:"5-med",value:5},{src:"2-dark",value:2},{src:"9-dark",value:9},{src:"1-light2",value:1},{src:"1-dark",value:1},{src:"7-light",value:7},{src:"4-med2",value:4},{src:"3-med",value:3},{src:"4-light2",value:4},{src:"5-light",value:5},{src:"4-light",value:4}]);r.value.sort(()=>Math.random()-.5);const c=p(!1),o=F(d.ishihara?d.ishihara:[]);o.length&&(c.value=!0);const N=r.value.length,b=J(()=>r.value[0]?r.value[0]:"");function u(g){o.push({...b.value,userAnswer:g.target.innerText}),r.value.splice(0,1),r.value.length===0&&(S(A(C,"users",_),{ishihara:o}),c.value=!0)}return(g,ee)=>(s(),a("div",E,[m(e("div",I,[e("div",null,[L,i(" Какую цифру вы видите? "+l(o.length+1+" / "+h(N)),1)]),e("div",M,[e("div",null,[e("img",{src:"/psycat/ishihara/"+h(b).src+".png",class:"h-[350px] w-[350px] md:h-[400px] md:w-[400px] lg:h-[450px] lg:w-[450px] xl:h-[500px] xl:w-[500px]"},null,8,O)]),e("div",Q,[e("div",$,[(s(),a(f,null,w(B,t=>e("button",{onClick:u,class:"rounded-lg border m-2 p-2 border-neutral-700 bg-white text-neutral-900 hover:bg-neutral-100"},l(t),1)),64))]),e("div",{id:"otherbuttons",class:"grid grid-cols-2"},[e("button",{onClick:u,class:"rounded-lg border m-2 p-2 border-neutral-700 bg-white text-neutral-900 hover:bg-neutral-100"}," Не знаю "),e("button",{onClick:u,class:"rounded-lg border m-2 p-2 border-neutral-700 bg-white text-neutral-900 hover:bg-neutral-100"}," Здесь нет цифры ")])])])],512),[[x,!c.value]]),m(e("div",null,[q,e("table",z,[G,(s(!0),a(f,null,w(o,(t,T)=>(s(),a("tr",H,[e("td",K,l(T+1),1),e("td",R,l(t.value),1),e("td",U,l(t.userAnswer),1),e("td",W,l(t.userAnswer==t.value?"✔":"❌"),1)]))),256))]),h(d).stroop?(s(),a("div",X,[k(j,{to:"stroop"},{default:y(()=>[i("Далее")]),_:1})])):(s(),a("div",Y,[k(j,{to:"strooptraining"},{default:y(()=>[i("Далее")]),_:1})]))],512),[[x,c.value]])]))}};export{se as default};
