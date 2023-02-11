import "./App.css";
import Profile from "./img/rique.jpg";
import "./animate.css";

function App() {
  return (
    <div className="profile">
      <h2>
        <u>Meu Curriculo</u>
      </h2>

      <div className="dados">
        <div className="img">
          <img src={Profile} alt="" />
        </div>

      <div className="name">
        <h4>Henrique</h4>
      </div>

        <div className="info-social-media">
          <div className="number">
            <p>15 997577400</p>
          </div>

          <div className="social-media">
            <a href="https://github.com/Hrqlv">
              <u>
                <b>Github</b>
              </u>
            </a>
          </div>
          <div className="social-media">
            <a href="https://www.linkedin.com/in/henriqu e-lopes-velozo-272206234/">
              <u>
                <b>Linkedin</b>
              </u>
            </a>
          </div>
          <div className="social-media">
            <a href="mailto:henriquelopesvelozo@gmail.com">
              <u>
                <b>Email</b>
              </u>
            </a>
          </div>
        </div>
        <div className="list-dados">
          <li>Itapeva-SP</li>
          <li>18 Anos</li>
          <li>Solteiro</li>
        </div>
      </div>

      <div className="objective">
        <h3 className="objetivo">Obejtivo: </h3>
        <p>
          Analista de Testes de Software - Junior ou Desenvolvedor (Frontend) -
          Junior
        </p>
      </div>
      <div className="qualifications">
        <h4>
          <u className="title">Resumo de Qualificaçoes:</u>
        </h4>
        <p>Planejamento de testes;</p>
        <p>Identificação, registro e gestão de defeitos;</p>
        <p>Elaboração de cenários de testes;</p>
        <p>Elaboração de cenários de comportamento (BDD);</p>
        <p>Execução de testes;</p>
        <p>Mapeamento de riscos de negócios e priorização de testes;</p>
        <p>Automação WEB e API (Framework-Playwright);</p>
        <p>
          Conhecimentos em linguagens de programação: C#, C,Java-Script e
          TypeScript;
        </p>
        <p>Conhecimentos em biblioteca: ReactJS e Angular-ionic;</p>
        <p>Habilidades em HTML, CSS e Bootstrap;</p>
        <p>Habilidades básicas em Git;</p>
        <p>Habilidades básicos em SQL;</p>
        <p>Conhecimentos em frameworks de automação como Playwright e Cypress;</p>
        <p>Conhecimentos em frameworks ágeis como Scrum e Kanban.</p>
      </div>
      <div className="academicEducation">
        <h4>
          <u className="title">Formação Academica:</u>
        </h4>
        <p className="course">Ensino Médio Completo - 2 grau Completo</p>
        <p>- E.E Zulmira de Oliveira - Itapeva-SP</p>
        <p className="course">Técnico em Desenvolvimento de Sistemas</p>
        <p>- E.T.E.C. Dr. Demétrio Azevedo Jr - Itapeva-SP</p>
        <p className="course">Analista de Testes de Software (QA)</p>
        <p>- NextQA(TechSchool) - Itapeva-SP</p>
      </div>
      <div className="language">
        <h4>
          <u className="title">Idioma:</u>
        </h4>
        <p>Ingles - Intermediário</p>
      </div>
      <div className="informatic-tools">
        <h4>
          <u className="title">Informatica/Ferramentas</u>
        </h4>
        <p>Microsoft Test Manager – Avançado.</p>
        <p>HP Quality Center - ALM – Avançado</p>
        <p>Selenium Browser Automation – Avançado</p>
        <p>HP QuickTestPro – Avançado.</p>
        <p>Fiddler – Avançado.</p>
        <p>SOAPUI – Avançado.</p>
        <p>JMeter – Avançado.</p>
        <p>Mantis Bug Tracker – Intermediário.</p>
        <p>TestLink – Intermediário.</p>
        <p>Pacote Office - Básico</p>
      </div>
      <div className="aboutMe">
        <h4>
          <u className="title">Sobre Mim:</u>
        </h4>
        <p>- Prestativo</p>
        <p>- Comunicativo</p>
        <p>- Esforçado</p>
        <p>- Disciplinado</p>
        <p>- Gosto de ajudar a equipe de trabalho</p>
        <p>- Apaixonado por Tecnologias e Esportes em geral</p>
        <p className="message">
          “Minha carreira está no início, mas estou em busca de uma oportunidade
          para demonstrar meu talento e minhas habilidades. Acredito que possa
          compensar a falta de experiência com dedicação e empenho.”
        </p>
      </div>
    </div>
  );
}

export default App;
