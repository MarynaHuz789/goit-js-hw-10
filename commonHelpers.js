import"./assets/styles-c404c2b4.js";import{f as C,i as S}from"./assets/vendor-651d7991.js";const x=document.querySelector("#datetime-picker"),r=document.querySelector("[data-start]"),i=document.querySelector("[data-days]"),d=document.querySelector("[data-hours]"),m=document.querySelector("[data-minutes]"),l=document.querySelector("[data-seconds]");let s;function e(t){return String(t).padStart(2,"0")}function p(t){const o=Math.floor(t/864e5),f=Math.floor(t%864e5/36e5),h=Math.floor(t%864e5%36e5/6e4),y=Math.floor(t%864e5%36e5%6e4/1e3);return{days:o,hours:f,minutes:h,seconds:y}}function D(){const t=new Date().getTime(),n=s-t;if(n<=0){i.textContent="00",d.textContent="00",m.textContent="00",l.textContent="00";return}const{days:a,hours:c,minutes:u,seconds:o}=p(n);i.textContent=e(a),d.textContent=e(c),m.textContent=e(u),l.textContent=e(o)}function T(){setInterval(D,1e3)}C(x,{enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){s=t[0],s.getTime()<=new Date().getTime()?(S.error({title:"Error",message:"Please choose a date in the future"}),r.setAttribute("disabled","true")):r.removeAttribute("disabled")}});r.addEventListener("click",()=>{T()});
//# sourceMappingURL=commonHelpers.js.map