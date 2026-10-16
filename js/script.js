const WA='5511948661405';
const MSG={def:'Olá! Vim pelo site da TTS e gostaria de solicitar um dos serviços, poderia me ajudar? Por gentileza.',est:'Olá! Vim pelo site da TTS e gostaria de solicitar um dos serviços de estruturas metálicas, poderia me ajudar? Por gentileza.',man:'Olá! Vim pelo site da TTS e gostaria de solicitar um dos serviços de manutenção industrial, poderia me ajudar? Por gentileza.',ter:'Olá! Vim pelo site da TTS e gostaria de solicitar um dos serviços de terraplanagem, poderia me ajudar? Por gentileza.',lcs:'Olá! Vim pelo site da TTS e gostaria de solicitar a locação de máquinas de corte e solda, poderia me ajudar? Por gentileza.',loc:'Olá! Vim pelo site da TTS e tenho interesse em alugar máquinas de corte e solda. Podem me passar mais informações?'};
document.querySelectorAll('[data-wa]').forEach(a=>{a.href='https://wa.me/'+WA+'?text='+encodeURIComponent(MSG[a.dataset.wa]||MSG.def);a.target='_blank';a.rel='noopener'});
const rm=matchMedia('(prefers-reduced-motion:reduce)').matches,B=document.body;

function open(){B.classList.add('go');setTimeout(()=>{B.classList.add('done');B.classList.remove('lock')},rm?0:2100)}
(document.readyState==='complete')?requestAnimationFrame(open):addEventListener('load',()=>requestAnimationFrame(open));
setTimeout(()=>{if(!B.classList.contains('go'))open()},4000);

setTimeout(()=>{const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.15,rootMargin:'0px 0px -6% 0px'});document.querySelectorAll('.rv,.mk').forEach(el=>io.observe(el))},rm?0:600);

const hd=document.getElementById('hd'),pg=document.getElementById('pg'),hb=document.getElementById('hb'),wb=document.getElementById('wb');let t=0;
function up(){t=0;const y=scrollY,h=document.documentElement.scrollHeight-innerHeight;hd.classList.toggle('sc',y>40);pg.style.transform='scaleX('+(h>0?y/h:0)+')';if(!rm&&y<innerHeight*1.3)hb.style.transform='translate3d(0,'+(y*.2)+'px,0)';wb.classList.toggle('on',y>innerHeight*.7)}
addEventListener('scroll',()=>{t||(t=requestAnimationFrame(up))},{passive:true});up();

const bg=document.getElementById('bg');
function mo(v){B.classList.toggle('mo',v);bg.setAttribute('aria-expanded',v);bg.setAttribute('aria-label',v?'Fechar menu':'Abrir menu')}
bg.addEventListener('click',()=>mo(!B.classList.contains('mo')));
document.querySelectorAll('.mn a').forEach(a=>a.addEventListener('click',()=>mo(false)));
addEventListener('keydown',e=>{if(e.key==='Escape')mo(false)});

const cb=document.getElementById('cb'),cm=document.getElementById('cm');let ct;
async function cp(x){try{await navigator.clipboard.writeText(x);return true}catch(e){const t=document.createElement('textarea');t.value=x;t.setAttribute('readonly','');t.style.cssText='position:fixed;opacity:0';document.body.appendChild(t);t.select();let ok=false;try{ok=document.execCommand('copy')}catch(_){}t.remove();return ok}}
cb.addEventListener('click',async()=>{const ok=await cp(cb.dataset.copy);cm.textContent=ok?'E-mail copiado!':'Não foi possível copiar. Selecione o texto.';cm.classList.add('on');cb.classList.toggle('ok',ok);clearTimeout(ct);ct=setTimeout(()=>{cm.classList.remove('on');cb.classList.remove('ok')},2400)});
