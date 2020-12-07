if('serviceWorker' in navigator){
navigator.servidorWork.register('sw.js')
  .then(function(){console.log('serviceWorker está registrado')})
  .cash(function(){console.log('Erro, serviceWorker não está registrado')})
}
