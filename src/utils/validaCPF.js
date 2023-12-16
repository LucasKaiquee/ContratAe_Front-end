const validaCPF = (cpf) => {
    const cpfRegex = /^\d{3}\d{3}\d{3}\d{2}$/;
    return cpfRegex.test(cpf);
}

export default validaCPF
  