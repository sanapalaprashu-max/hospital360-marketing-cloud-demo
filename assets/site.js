(function(){
  const config=window.HOSPITAL_CONFIG||{};
  const toggle=document.querySelector('.mobile-toggle');
  const menu=document.querySelector('.menu');
  if(toggle&&menu){toggle.addEventListener('click',()=>{const on=menu.classList.toggle('open');toggle.setAttribute('aria-expanded',String(on));});}
  document.querySelectorAll('[data-cloudpage]').forEach(el=>{
    const key=el.getAttribute('data-cloudpage');
    const url=(config[key]||'').trim();
    if(url && /^https:\/\//i.test(url)){
      el.setAttribute('href',url);
      el.setAttribute('target','_blank');
      el.setAttribute('rel','noopener noreferrer');
    }else{
      el.setAttribute('href','#integration-status');
      el.classList.add('unconfigured');
      el.addEventListener('click',e=>{if(!document.getElementById('integration-status')){e.preventDefault();window.location.href='lab.html#integration-status';}});
      el.setAttribute('title','CloudPages link not configured. Configure it in assets/config.js.');
    }
  });
  document.querySelectorAll('form[data-demo]').forEach(form=>{
    form.addEventListener('submit',e=>{
      e.preventDefault();
      const result=form.querySelector('.preview-msg');
      if(result){result.classList.add('show'); result.textContent='Demo only: form validation passed. No information was saved or sent. To capture real test submissions in Marketing Cloud, create a CloudPages form and set its public URL in assets/config.js.';}
    });
  });
  document.querySelectorAll('[data-connection-status]').forEach(el=>{
    const key=el.getAttribute('data-connection-status');
    const configured=typeof config[key]==='string' && /^https:\/\//.test(config[key]);
    el.textContent=configured?'Public CloudPage link configured':'Not yet connected';
    el.className=configured?'status-ready':'status-pending';
  });
})();
