import { FormEvent, useState } from "react";
import { Container } from "./styles";
import toast from "react-hot-toast";

export function Form() {
  const [name, setName] = useState("");
  const [email, setMail] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      toast.error("Preencha todos os campos", {
        style: {
          fontSize: "1.5rem",
          fontWeight: "bold",
        },
      });
      return;
    }
    try {
      console.log(name, email, message);
      setName("");
      setMail("");
      setMessage("");
      toast.success("Mensagem enviada", {
        style: {
          fontSize: "1.5rem",
          fontWeight: "bold",
        },
      });
    } catch {
      toast.error("Erro ao enviar mensagem", {
        style: {
          fontSize: "1.5rem",
          fontWeight: "bold",
        },
      });
    }
  }
  return (
    <Container>
      <form action="" onSubmit={handleSubmit}>
        <input
          placeholder="Nome"
          value={name}
          onChange={({ target }) => setName(target.value)}
        />
        <input
          placeholder="E-mail"
          type="email"
          value={email}
          onChange={({ target }) => setMail(target.value)}
        />
        <textarea
          placeholder="Mensagem"
          value={message}
          onChange={({ target }) => setMessage(target.value)}
        ></textarea>
        <button type="submit">Enviar</button>
      </form>
    </Container>
  );
}
