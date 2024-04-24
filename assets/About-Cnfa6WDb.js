function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/FadeElement-DRcbaI2u.js","assets/index-B7HXB4BH.js","assets/index-CIJic-7b.css","assets/FadeElement--r9p9NtO.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{d as n,_ as r,a,r as i,o as d,c as x,b as e,e as p,F as u,f as m,g as t}from"./index-B7HXB4BH.js";const _={components:{FadeElement:n(()=>r(()=>import("./FadeElement-DRcbaI2u.js"),__vite__mapDeps([0,1,2,3])))},methods:{scrollToTechnologie(){this.$emit("scroll-to-section","/")},scrollToProject(){this.$emit("scroll-to-project","projects")}}},f={class:"flex flex-col h-full mt-10"},v=m('<div class="flex flex-col justify-center"><h1 class="text-center text-4xl sm:text-5xl lg:text-6xl text-wrap font-bold">À propos de moi</h1><div class="flex justify-center"><span class="separator"></span></div><p class="text-center lg:mt-6 m-6 text-lg text-gray-600"> Vous trouverez ci-dessous une présentation détaillée de ma personne,<br> de mes activités et de mes compétences actuelles dans le domaine de la programmation et des technologies. </p></div>',1),g={class:"lg:ml-44 lg:mr-44 m-14 lg:mt-16"},b={class:"grid lg:grid-cols-3 grid-cols-1 grid-flow-col"},h={class:"flex flex-col"},j=e("p",{class:"text-2xl md:text-xl text-center font-bold"},"À savoir sur moi",-1),E=e("div",{class:"flex justify-center"},[e("span",{class:"separator"})],-1),y=e("p",{class:"text-center lg:text-justify text-lg text-gray-600 mt-8"},[t(" Étudiante à l'école 42, j'ai pour objectif de me spécialiser dans le "),e("b",null,"développement d'application web et mobile"),t("."),e("br"),e("br"),t(" Toujours en constante évolution, je me forme quotidiennement de sorte à toujours être au courant et à jour des nouveaux outils."),e("br"),e("br"),t(" Je vous invite à jeter un oeil sur mes "),e("b",null,"projets"),t(" pour en savoir plus."),e("br")],-1),w={class:"flex justify-center mt-14"},T={class:"lg:col-start-3 lg:row-start-1 row-start-2 lg:pt-0 pt-24"},C=e("p",{class:"text-2xl md:text-xl text-center font-bold"},"Connaissances techniques",-1),P=e("div",{class:"flex justify-center"},[e("span",{class:"separator"})],-1),V=e("div",{class:"flex justify-center pt-12 invisible xl:visible"},[e("span",{class:"end-bar"})],-1);function F(A,s,N,$,k,o){const l=i("FadeElement");return d(),x(u,null,[e("div",f,[v,e("div",g,[e("div",b,[e("div",h,[j,E,y,e("div",w,[e("button",{type:"button",class:"bg-yellow-500 hover:bg-yellow-600 w-52 h-12 font-bold rounded-lg text-xl shadow-lg",onClick:s[0]||(s[0]=(...c)=>o.scrollToProject&&o.scrollToProject(...c))},"Projets")])]),e("div",T,[C,P,p(l)])])])]),V],64)}const q=a(_,[["render",F]]);export{q as default};
