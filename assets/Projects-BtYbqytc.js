function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/AudioFilesAnalyzer--PDxr06L.js","assets/github-142-svgrepo-com-C_v_Q6R0.js","assets/index-Ds8LaMqs.js","assets/index--SowBzNQ.css","assets/AudioFilesAnalyzer-DsW3t2Y8.css","assets/PushSwap-juQVb-mB.js","assets/PushSwap-Dqk9WgwO.css","assets/Snake-DpsPk7fQ.js","assets/Snake-Be6wWtcW.css","assets/Fractol-BqMLhmm5.js","assets/Fractol-CfeJfXf2.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{d as e,_ as o,a as l,r as s,o as i,c as d,b as t,e as n,F as p}from"./index-Ds8LaMqs.js";const m={components:{AudioFilesAnalyzer:e(()=>o(()=>import("./AudioFilesAnalyzer--PDxr06L.js"),__vite__mapDeps([0,1,2,3,4]))),PushSwap:e(()=>o(()=>import("./PushSwap-juQVb-mB.js"),__vite__mapDeps([5,1,2,3,6]))),Snake:e(()=>o(()=>import("./Snake-DpsPk7fQ.js"),__vite__mapDeps([7,1,2,3,8]))),Fractol:e(()=>o(()=>import("./Fractol-BqMLhmm5.js"),__vite__mapDeps([9,1,2,3,10])))},methods:{scrollToProject(){this.$emit("scroll-to-project","projects")}}},u=t("h2",{class:"sm:text-4xl md:text-5xl text-wrap md:text-no-wrap text-4xl font-bold text-center mt-20 title"},"Projets",-1),x=t("div",{class:"flex justify-center"},[t("span",{class:"separator"})],-1),v={class:"grid grid-cols-1 gap-12 m-14"};function A(P,f,h,E,F,j){const r=s("AudioFilesAnalyzer"),_=s("PushSwap"),a=s("Fractol"),c=s("Snake");return i(),d(p,null,[u,x,t("div",v,[t("div",null,[n(r)]),t("div",null,[n(_)]),t("div",null,[n(a)]),t("div",null,[n(c)])])],64)}const V=l(m,[["render",A]]);export{V as default};