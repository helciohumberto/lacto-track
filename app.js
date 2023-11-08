const form = document.querySelector("form")
const resp1 = document.querySelector("#resp1")
const resp2 = document.querySelector("#resp2")
const resp3 = document.querySelector("#resp3")
const resp4 = document.querySelector("#resp4")

form.addEventListener("submit", (e) => {
  
  const numVacasRebanho = Number(form.inNVR.value)
  const producaoVacaDia = Number(form.inPML.value)
  const precoLitroLeite = Number(form.inPLL.value)
  const numeroDiasMes = Number(form.inNDM.value)

  const producaoDiaria = numVacasRebanho * producaoVacaDia
  const producaoMensal = producaoDiaria * numeroDiasMes
  const faturamentoMensal = producaoMensal * precoLitroLeite

  const in1 = Number(form.in1.value)
  const in2 = Number(form.in2.value)
  const in3 = Number(form.in3.value)
  const in4 = Number(form.in4.value)
  const in5 = Number(form.in5.value)

  const custoTotal = in1 + in2 + in3 + in4 + in5
  const lucroTotal = faturamentoMensal - custoTotal
  
  resp1.textContent = `Quantidade mensal de leite produzida: ${producaoMensal} litros`
  resp2.textContent = `Faturamento mensal = R$: ${faturamentoMensal.toFixed(2)} `
  resp3.textContent = `Gastos/Custos = R$: ${custoTotal.toFixed(2)}`
  resp4.textContent = `Lucro Total = R$: ${lucroTotal.toFixed(2)}`
  e.preventDefault()
})

form.addEventListener("reset", () => {
  resp1.textContent = ""
  resp2.textContent = ""
})