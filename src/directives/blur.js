const blur = {}

function setBlur (el, binding, newNode, oldNode) {
  // el binding -> etapa similar al hook monunted del componente
  // hay tambien etapas en las directivas
  el.style.filter = !binding.value ? 'blur(3px)' : '(none)'
  el.style.cursor = !binding.value ? 'not-allowed' : 'inherit'
  el.querySelectorAll('button').forEach(button => {
    if (!binding.value) {
      button.setAttribute('disabled', true)
    } else {
      button.removeAttribute('disabled')
    }
  })
}

blur.install = function (Vue) {
  Vue.directive('blur', {
    bind (el, binding) {
      setBlur(el, binding)
    }
  })
}

// atributos de los hooks
/*
  el -> elemento HTML
  binding -> informacion sobre el valor de la directiva (modifiers, atributos)
  newNode -> referencia al nodo del VDOM
  oldNode -> referencia previa al nodo del VDOM
*/

export default blur

// dire
