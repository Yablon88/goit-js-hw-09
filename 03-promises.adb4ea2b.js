function e(e,t){return new Promise(((o,n)=>{const r=Math.random()>.3;setTimeout((()=>{r?o({position:e,delay:t}):n({position:e,delay:t})}),t)}))}document.querySelector(".form").addEventListener("submit",(function(t){t.preventDefault();const{elements:{delay:o,step:n,amount:r}}=t.currentTarget;let l=Number(o.value),i=Number(n.value),s=Number(r.value);for(let t=1;t<s;t++)e(t,l).then((({position:e,delay:t})=>{console.log(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{console.log(`❌ Rejected promise ${e} in ${t}ms`)})),l+=i;t.currentTarget.reset()}));
//# sourceMappingURL=03-promises.adb4ea2b.js.map