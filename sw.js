// Evolvere — service worker: funciona offline + lembretes
const CACHE = 'evolvere-v8';
const SHELL = ['./', './index.html', './config.js', './app.js', './manifest.json', './icons/icon-192.png', './icons/icon-512.png', './icons/logo.png', './icons/apple-180.png'];
const MSGS = [
  'Eae{n}! Gaste menos e invista mais, comprou algo e esqueceu de registrar?',
  'Eae{n}! Comprou alguma coisa e esqueceu de registrar? Gaste menos e invista mais.',
  'Fala{n}! Menos gastos, mais investimentos. Ficou alguma compra sem registrar?',
  'Eae{n}! Já registrou o que gastou hoje? Gaste menos e invista mais.',
  'Ei{n}, gaste menos e invista mais! Passou no caixa e esqueceu de anotar?',
  'Eae{n}! Investir mais começa por gastar menos. Esqueceu de registrar algo?'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE && k !== 'evolvere-meta').map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
// rede primeiro (pega atualizações), cache se estiver offline
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const u = new URL(e.request.url);
  if (u.origin !== self.location.origin && !/fonts\.(googleapis|gstatic)\.com$/.test(u.hostname)) return;
  e.respondWith(
    fetch(e.request).then(res => {
      if (res && (res.ok || res.type === 'opaque')) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); }
      return res;
    }).catch(() => caches.match(e.request).then(r => r || caches.match('./index.html')))
  );
});
// lembrete periódico (Chrome Android com o app instalado)
self.addEventListener('periodicsync', e => {
  if (e.tag !== 'evolvere-lembrete') return;
  e.waitUntil(caches.open('evolvere-meta').then(c => c.match('./__meta')).then(r => r ? r.json() : {}).catch(() => ({})).then(meta => self.registration.showNotification('Evolvere', {
    body: MSGS[Math.floor(Math.random() * MSGS.length)].replace('{n}', meta.name ? ' ' + meta.name : ''),
    icon: 'icons/icon-192.png', badge: 'icons/icon-192.png', tag: 'evolvere-lembrete', renotify: true
  })));
});
// tocar na notificação abre o app
self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil(self.clients.matchAll({type: 'window', includeUncontrolled: true}).then(list => {
    for (const c of list) if ('focus' in c) return c.focus();
    return self.clients.openWindow('./');
  }));
});
