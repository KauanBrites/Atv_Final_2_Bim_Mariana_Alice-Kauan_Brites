const cashename = "album-v1.1"
const files = [
  '/Atv_Final_2_Bim_Mariana_Alice-Kauan_Brites/index.html',
  '/Atv_Final_2_Bim_Mariana_Alice-Kauan_Brites/script.js',
  '/Atv_Final_2_Bim_Mariana_Alice-Kauan_Brites/estilo.css',
  '/Atv_Final_2_Bim_Mariana_Alice-Kauan_Brites/img',
  '/Atv_Final_2_Bim_Mariana_Alice-Kauan_Brites/img-scr',
  '/Atv_Final_2_Bim_Mariana_Alice-Kauan_Brites/PROJETOS',
  'https://code.jquery.com/jquery-3.2.1.slim.min.js',
  'https://unpkg.com/popper.js@1.12.6/dist/umd/popper.js',
  'https://unpkg.com/bootstrap-material-design@4.1.1/dist/js/bootstrap-material-design.js',
  'https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css',
  'https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js'

]

self.addEventListener('install', function(evt){
  evt.waitUntil(
  cashe.open(casheName).then(function(cashe){
    console.log('colocando arquivos na cashe')
    cashe.addAll(files)
  })
  )
})
self.addEventListener('activate', function(evt){
  console.log("activate sw");
  evt.waitUntil(
  cashes.keys().then(function(keys){
    return Promise.all(
      keys
      .filter(key => key !== casheName)
      .map(key => cashes.delete(key))
    )
  })
  )
})
self.addEventListener('fetch', function(evt){
  console.log("fetch sw");
  evt.responseWith(
    cashe.match(evt.request).then(function(res){
      return res || fetch(evt.request)
    })
  )
})
