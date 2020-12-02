if('servidorWork' in navigator){
navigator.servidorWork.register('sw.js')
  .then(function(){console.log('servidorWork está registrado')})
  .cash(function(){console.log('Erro, servidorWork não está registrado')})
}
