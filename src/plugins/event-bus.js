// emisor de eventos entre componentes
// eventos on y emit, enviar o recibir informacion

const eventBus = {}
// la funcion install sirve declararlo e inyectarlo en todos los componentes
eventBus.install = function (Vue) {
  // instancia de Vue para inyectarlo (parametros)
  // extender con prototype
  Vue.prototype.$bus = new Vue()
  // el $bus identifica un plugin de Vue y no una prop del vue-model
}
export default eventBus
