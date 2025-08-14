// Yılı bas
document.getElementById("year").textContent = new Date().getFullYear();

// Anchor'lara yumuşak kaydırma
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', (e)=>{
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if(!el) return;
    e.preventDefault();
    el.scrollIntoView({behavior:"smooth", block:"start"});
    history.replaceState(null, "", `#${id}`);
  });
});

