export default function FormCadastro({
  nameUser,
  emailUser,
  cpfUser,
  senhaUser,
  confirmarSenhaUser,
  create,
}) {
  return (
    <div className="form-container">
      <h3 className="">
        Criar conta: <br />
      </h3>
      <input name="nome" placeholder="Nome" ref={nameUser} />
      <input
        type="text"
        name="email"
        placeholder="Email"
        ref={emailUser}
      />
      <input type="text" name="cpf" placeholder="CPF" ref={cpfUser} />
      <input
        type="password"
        name="senha"
        placeholder="Senha"
        ref={senhaUser}
      />
      <input
        type="password"
        name="confirmarSenha"
        placeholder="Confirmar Senha"
        ref={confirmarSenhaUser}
      />
      <button onClick={create}>Criar conta</button>
    </div>
  );
}
