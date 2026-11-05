
var b=document.querySelector('.burger'),n=document.querySelector('nav');
b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o)});
document.querySelectorAll('form.qf').forEach(function(fm){fm.addEventListener('submit',function(e){e.preventDefault();
var f=new FormData(fm),t='Име: '+f.get('n')+'\nТелефон: '+f.get('p')+'\nАвтомобил: '+f.get('m')+' '+f.get('mo')+' '+f.get('y')+'\nУслуга: '+f.get('s')+'\n'+(f.get('t')||'');
location.href='mailto:office@bulprofit.bg?subject='+encodeURIComponent('Заявка за оферта')+'&body='+encodeURIComponent(t);
var o=fm.querySelector('.ok');if(o)o.style.display='block'})});
