import{_ as m,a as b,b as p,c as h,d as g,e as v,f as d,g as $,h as x,i as y,j as k}from"./SunFigure.vue_vue_type_script_setup_true_lang-9d6b85cf.js";import{h as a,i as q,o as c,c as t,b as i,F as z,r as B,d as M,n as P,q as j,s as w}from"./index-314841d3.js";const F={class:"h-screen justify-center items-center flex flex-col flex-1 m-auto"},I={class:"relative"},L={__name:"PictoPage",setup(N){const u={apple:b,banana:p,blob:h,circule:g,heart:v,hex:d,leaf:$,lemon:x,square:y,sun:k},o=a(70),_=a(10),r=a(1),e={neutral:"#b2b2b2",cross:"#222222",apple:"#ff0000",banana:"#ffff00",blob:"#0090ff",circule:"#000000",heart:"#ff0030",hex:"#000000",leaf:"#00ff00",lemon:"#ffff00",square:"#000000",sun:"#ffff00"},s=a(12),n=q([{figure:"heart",color:e.heart},{figure:"banana",color:e.banana},{figure:"blob",color:e.blob},{figure:"circule",color:e.circule},{figure:"apple",color:e.apple},{figure:"leaf",color:e.leaf},{figure:"lemon",color:e.lemon},{figure:"square",color:e.square},{figure:"sun",color:e.sun}]);return s.value=n.length,(V,C)=>(c(),t("div",{class:"h-screen flex w-full justify-center",style:P({"background-color":e.neutral})},[i("div",F,[i("div",I,[(c(!0),t(z,null,B(n,(f,l)=>(c(),j(w(u[f.figure]),{key:l,color:f.color,top:-o.value*Math.cos(2*Math.PI/s.value*(l+.5)),left:o.value*Math.sin(2*Math.PI/s.value*(l+.5)),scale:r.value},null,8,["color","top","left","scale"]))),128)),M(m,{size:_.value*r.value,color:e.cross},null,8,["size","color"])])])],4))}};export{L as default};
