document.querySelector("#formula").addEventListener('submit', function(e) {
  e.preventDefault()
  const formula = this.elements[0].value
  if (!formula) return
  let result
  try {
    result = parse(formula)
  } catch (e) {
    result = e
  }
  document.querySelector("#result").innerText = result
})
