import { Cabecalho } from "./componentes/Cabecalho/Cabecalho";
import { CampoTexto } from "./componentes/CampoTexto/CampoTexto";
import { Card } from "./componentes/Card/Card";
import { Estilos } from "./componentes/EstilosGlobais/Estilos";
import { ProvedorTema } from "./componentes/ProvedorTema/ProvedorTema";
import { Tipografia } from "./componentes/Tipografia/Tipografia";

function App() {
  return (
    <ProvedorTema>
      <Estilos />
      <Cabecalho>
        <h1>freelando</h1>
        <h1>Contrate</h1>
        <h1>Encontre Trabalho</h1>
        <h1>Meus projetos</h1>
        <h1>Login</h1>
        <h1>Sair</h1>
      </Cabecalho>
      <Card>
        <Tipografia variante="h1" componente="h1">
          Freelando
        </Tipografia>
        <Tipografia variante="body" componente="body">
          Crie seu perfil gratuitamente para começar a trabalhar com os melhores
          freelancers. Em seguida, você poderá dar mais detalhes sobre suas
          demandas e sobre sua forma de trabalho.
        </Tipografia>
        <CampoTexto titulo="Nome Completo" />
        <CampoTexto titulo="Estado" />
        <CampoTexto titulo="Cidade" />
        <CampoTexto titulo="Emailo" />
        <CampoTexto titulo="Senha" />
        <CampoTexto titulo="Repita a senha" />
      </Card>
    </ProvedorTema>
  );
}

export default App;
