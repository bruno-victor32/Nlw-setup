const form =
  document.querySelector(
    "#form-habits"
  ) /*Colocar em uma variavel o formulario*/
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener(
  "click",
  add
) /*Quando eu clicar no botão vai disparar a função "add"*/
form.addEventListener("change", save)

function add() {
  const today = new Date()
    .toLocaleDateString("pt-br").slice(0, -5) /*A 1° linha da função vai colocar a data 01/01 para uma variavel chamada today*/
  const dayExists =
    nlwSetup.dayExists(
      today
    ) /*Vai verificar se o today existe,se existir ele vai atribuir o valor de TRUE na constante dayExists */

  if (dayExists) {
    /*A primeira vez que cliquei no botão o valor e falso,si ele for falso ele não entra nesse codigo */
    alert("Dia já incluso")
    return
  }

  alert("Adicionado com sucesso ✔")
  nlwSetup.addDay(today) /*Aqui está adicionando o dia */
}

function save() {
  localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data))
}


const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}
nlwSetup.setData(data)
nlwSetup.load()
