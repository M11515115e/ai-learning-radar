(() => {
  const payload = window.KNOWLEDGE_RADAR_DATA || { notes: [], generatedAt: "" };
  const all = Array.isArray(payload.notes) ? payload.notes : [];
  const $ = (id) => document.getElementById(id);
  const search = $("search"), topic = $("topic-filter"), importance = $("importance-filter"), sort = $("sort");
  const labels = {critical:"關鍵",high:"高",medium:"中",low:"低"};
  const rank = {critical:4,high:3,medium:2,low:1};
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  const formatDate = (value) => { const d=new Date(value); return Number.isNaN(d.getTime()) ? value : new Intl.DateTimeFormat("zh-TW",{year:"numeric",month:"short",day:"numeric"}).format(d); };
  const topics = [...new Set(all.flatMap(n=>n.topics||[]))].sort((a,b)=>a.localeCompare(b,"zh-Hant"));
  topics.forEach(t=>topic.insertAdjacentHTML("beforeend",`<option value="${esc(t)}">${esc(t)}</option>`));
  $("note-count").textContent=all.length;
  $("topic-count").textContent=topics.length;
  $("updated-date").textContent=payload.generatedAt ? formatDate(payload.generatedAt) : "—";
  function render(){
    const q=search.value.trim().toLocaleLowerCase();
    let items=all.filter(n=>{
      const hay=[n.title,n.summary,n.source,...(n.topics||[]),...(n.tags||[]),...(n.keyPoints||[]),...(n.actionableInsights||[])].join(" ").toLocaleLowerCase();
      return (!q||hay.includes(q))&&(!topic.value||(n.topics||[]).includes(topic.value))&&(!importance.value||n.importance===importance.value);
    });
    items.sort((a,b)=>sort.value==="oldest"?String(a.date).localeCompare(String(b.date)):sort.value==="importance"?(rank[b.importance]||0)-(rank[a.importance]||0)||String(b.date).localeCompare(String(a.date)):String(b.date).localeCompare(String(a.date)));
    $("result-count").textContent=`${items.length} 筆結果`;
    $("empty").hidden=items.length!==0;
    $("notes").innerHTML=items.map(n=>`<article class="card"><div class="card-top"><span class="source">${esc(n.source)}</span><span class="importance ${esc(n.importance)}">重要性 ${esc(labels[n.importance]||n.importance)}</span></div><h2>${esc(n.title)}</h2><p class="summary">${esc(n.summary)}</p><div class="tags">${[...(n.topics||[]),...(n.tags||[])].slice(0,6).map(t=>`<span class="tag">${esc(t)}</span>`).join("")}</div><div class="card-footer"><time>${esc(formatDate(n.date))}</time>${n.originalUrl?`<a href="${esc(n.originalUrl)}" target="_blank" rel="noopener noreferrer">查看原始來源 ↗</a>`:"<span>本機筆記</span>"}</div></article>`).join("");
  }
  [search,topic,importance,sort].forEach(el=>el.addEventListener(el===search?"input":"change",render));
  $("clear-filters").addEventListener("click",()=>{search.value="";topic.value="";importance.value="";sort.value="newest";render();});
  render();
})();
