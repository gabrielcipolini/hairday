import { apiConfig } from "./api-config.js"

export async function scheduleNew({ id, name, when }) {
  try {
    // Fazendo requisição para enviar os dados.
    await fetch(`${apiConfig.baseURL}/schedules`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, name, when }),
    })

    // Exibe a mensagem de sucesso.
    alert("Agendamento realizado com sucesso!")
  } catch (error) {
    alert("Não foi possível agendar. Tente novamente mais tarde!")
    console.log(error)
  }
}
