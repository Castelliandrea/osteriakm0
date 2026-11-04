const toggle = document.querySelector('.toggle');
const navigation = document.querySelector('.navlinks');
function closeNav(){ navigation.classList.remove('open'); toggle.setAttribute('aria-expanded','false'); }
toggle?.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(open));navigation.classList.toggle('open',open);});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeNav();});
navigation?.addEventListener('click',e=>{if(e.target.closest('a'))closeNav();});
const menu=window.OSTERIA_MENU;
if(menu?.published && menu.categories?.length){
 const content=document.getElementById('menu-content'), filters=document.getElementById('menu-filters');
 document.getElementById('menu-notice').textContent=menu.notice; filters.hidden=false;
 const sections=[];
 const button=(label,key)=>{const b=document.createElement('button');b.type='button';b.className='filter';b.textContent=label;b.setAttribute('aria-pressed',String(key==='all'));b.addEventListener('click',()=>{filters.querySelectorAll('button').forEach(x=>x.setAttribute('aria-pressed',String(x===b)));sections.forEach((s,i)=>s.hidden=key!=='all' && key!==i);});filters.append(b);};
 button('Tutto','all');
 menu.categories.forEach((category,index)=>{button(category.name,index);const section=document.createElement('section');section.className='menu-group';const h=document.createElement('h2');h.textContent=category.name;section.append(h);(category.items||[]).forEach(item=>{const row=document.createElement('article');row.className='menu-item';const text=document.createElement('div'),title=document.createElement('h3'),description=document.createElement('p'),price=document.createElement('span');title.textContent=item.name;description.textContent=item.description||'';price.className='price';price.textContent=typeof item.price==='number'?new Intl.NumberFormat('it-IT',{style:'currency',currency:'EUR'}).format(item.price):item.price||'';text.append(title,description);row.append(text,price);section.append(row);});sections.push(section);content.append(section);});
}
const form=document.getElementById('booking-form');
if(form){
 const date=form.elements.date;const now=new Date();const localDate=new Date(now.getTime()-now.getTimezoneOffset()*60000).toISOString().slice(0,10);date.min=localDate;
 form.addEventListener('submit',e=>{e.preventDefault();if(date.value<localDate){date.setCustomValidity('Seleziona una data futura o odierna.');date.reportValidity();return;}date.setCustomValidity('');const d=new Date(date.value+'T12:00:00').toLocaleDateString('it-IT');document.getElementById('booking-text').value=`Buongiorno, sono ${form.elements.guest.value.trim()}. Vorrei chiedere disponibilità per ${form.elements.people.value} persone il ${d} alle ${form.elements.time.value}.${form.elements.notes.value.trim()?' Note: '+form.elements.notes.value.trim():''} Grazie!`;document.getElementById('booking-result').hidden=false;document.getElementById('booking-status').textContent='Promemoria generato, non inviato. Chiama il ristorante per confermare.';});
 date.addEventListener('input',()=>date.setCustomValidity(''));
 document.getElementById('copy-booking').addEventListener('click',async()=>{const text=document.getElementById('booking-text');try{await navigator.clipboard.writeText(text.value);document.getElementById('booking-status').textContent='Testo copiato. La richiesta non è stata inviata.';}catch{ text.focus();text.select();document.getElementById('booking-status').textContent='Seleziona e copia il testo manualmente. La richiesta non è stata inviata.';}});
}
