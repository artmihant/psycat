import{_ as r}from"./LinkButton-deb11134.js";import{r as u,o as a,c,a as e,b as t,t as i,u as _,d as f,e as s,w as o}from"./index-6cd84630.js";const h={class:"h-screen flex justify-center bg-white text-black"},p={class:"h-screen justify-center"},m={class:"h-screen w-full justify-center flex flex-col flex-1"},b={class:"max-w-[600px]"},x=e("p",null,[e("b",null,"Уважаемые респонденты!")],-1),w=e("p",null,"Я студентка 4 курса направления «Клиническая психология» Первого МГМУ им. И.М. Сеченова, провожу исследование на тему «…». ",-1),k=e("p",null,"Выполнение займет у вас 20-30 минут. ",-1),v=e("p",null," Все сведения, полученные от Вас, конфиденциальны и будут использованы исключительно в научных целях в обобщенном виде, что не позволит идентифицировать Вас как участников данного исследования. ",-1),y=e("p",null," При желании Вы можете получить результаты как тестов так и самого исследования. ",-1),N={key:0},V={class:"mt-3 text-center font-bold"},g={class:"w-full"},R={__name:"HomePage",setup(j){const n=window.browserInfo.mobile;return(d,B)=>{const l=u("RouterLink");return a(),c("div",h,[e("div",p,[e("div",m,[e("div",b,[t(i(d.user)+" ",1),x,w,k,v,y,_(n)?(a(),c("p",N,[e("b",null,"К сожалению, вы не сможете пройти наш психологический тест с мобильного устройста "+i()+" Пожалуйста, зайдите на эту страницу с компьютера. Спасибо!",1)])):f("",!0)]),e("div",V,[s(r,{disabled:_(n),to:"anketa"},{default:o(()=>[t(" Принять участие")]),_:1},8,["disabled"])]),e("div",g,[e("ul",null,[e("li",null,[s(l,{to:"anketa"},{default:o(()=>[t("Анкета ")]),_:1})]),e("li",null,[s(l,{to:"annet"},{default:o(()=>[t("Тест Аннет")]),_:1})]),e("li",null,[s(l,{to:"ishihara"},{default:o(()=>[t("Тест Ишихары")]),_:1})]),e("li",null,[s(l,{to:"stroop"},{default:o(()=>[t("Тест Струпа")]),_:1})]),e("li",null,[s(l,{to:"delaystroop"},{default:o(()=>[t("Отложенный тест Струпа")]),_:1})])])])])])])}}};export{R as default};
