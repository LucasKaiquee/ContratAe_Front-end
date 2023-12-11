export default function FormCadastro(props) {
  return (
    <div className="form-container">
      <h3 className="">
        Criar conta: <br />
      </h3>
      <input name="nome" placeholder="Nome" ref={props.nameUser} />
      <input type="text" name="email" placeholder="Email" ref={props.emailUser} />
      <input type="text" name="cpf" placeholder="CPF" ref={props.cpfUser} />
      <input
        type="password"
        name="senha"
        placeholder="Senha"
        ref={props.senhaUser}
      />
      <input
        type="password"
        name="confirmarSenha"
        placeholder="Confirmar Senha"
        ref={props.confirmarSenhaUser}
      />
      <button onClick={props.create}>Criar conta</button>
    </div>
  );
}
