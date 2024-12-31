import { schedulesDay } from "./load.js"
import { scheduleCancel } from "../../services/schedule-cancel"

const periods = document.querySelectorAll(".period")

// Gera evento de click para cada lista (manhã, tarde e noite)
periods.forEach((period) => {
  // Captura o evento de clique na lista.
  period.addEventListener("click", async (event) => {
    if (event.target.classList.contains("cancel-icon")) {
      // Obtém a li pai do elemento clicado.
      const item = event.target.closest("li")

      // Pega o id do agendamento.
      const { id } = item.dataset

      // Confirma que o id foi selecionado.
      if (id) {
        // Conforma se o usuário quer cancelar.
        const isConfirm = confirm(
          "Tem certeza que deseja cancelar o agendamento?"
        )

        if (isConfirm) {
          // Faz a requisição para cancelar.
          await scheduleCancel({ id })

          // Recarrega os agendamentos.
          schedulesDay()
        }
      }
    }
  })
})
