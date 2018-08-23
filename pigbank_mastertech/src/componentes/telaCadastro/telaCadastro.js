import React, { Component } from 'react';
import '../telaCadastro/telaCadastro.css';

class TelaCadastro extends Component {
    render() {
        return (
            <section className='sectionCadastroInicial' id="telaCadastro">
            <h3 className="TituloTelaCadastro">Cadastro do responsável</h3>
            
            <div className="CadastroResponsavelInicial">
            {/* <form action="/action_page.php"> */}
            <label for="fname">Nome</label>
            <input type="text" className="informacoesCadastroInicial" name="nome" placeholder="Digite Seu nome"/>
            
            <label for="lname">Sobrenome</label>
            <input type="text" className="informacoesCadastroInicial" name="sobrenome" placeholder="Digite seu sobrenome"/>
            
            <label for="lname">E-mail</label>
            <input type="text" className="informacoesCadastroInicial" name="email" placeholder="Digite seu e-mail"/>
            
            <label for="lname">Senha</label>
            <input type="text" className="informacoesCadastroInicial" name="senha" placeholder="Crie uma senha de 6 a 8 dígitos"/>
            
            <label for="lname">Confirme sua senha</label>
            <input type="text" className="informacoesCadastroInicial" name="confirmacaoSenha" placeholder="A senha não pode ser diferente da criada anteriormente"/>
            
            <input type="submit" className="botoesCadastrarTelaInicial" value="Cadastrar"/>
            {/* </form> */}
            </div>
            
            <h3 className="TituloCadastroCrianca">Adicionar criança</h3>
            
            <div className="CadastroResponsavelInicial">
            {/* <form action="/action_page.php"> */}
            <label for="fname">Nome</label>
            <input type="text" className="informacoesCadastroInicial" name="nomeCrianca" placeholder="Quem você vai ensinar a conquistar sonhos pela educação financeira?"/>
            
            <label for="lname">Data de nascimento</label>
            <input type="text" className="informacoesCadastroInicial" name="niverCrianca" placeholder="Digite a data de nascimento da criança"/>
            
            <label for="lname">E-mail</label>
            <input type="text" className="informacoesCadastroInicial" name="emailCrianca" placeholder="Digite seu e-mail"/>
            
            <label for="lname">Senha</label>
            <input type="text" className="informacoesCadastroInicial" name="senhaCrianca" placeholder="Crie uma senha de 6 a 8 dígitos"/>
            <input type="submit" className="botoesCadastrarTelaInicial" value="Cadastrar"/>
            {/* </form> */}
            </div>
            </section>
        );
    }
}

export default TelaCadastro;