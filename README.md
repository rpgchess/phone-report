# Phone Report - Relatório Alterdata 📊

## 📌 Sobre o Projeto

Aplicação web desenvolvida com AngularJS para visualização de relatórios de telefonia. Dashboard interativo para análise de dados de chamadas telefônicas.

## 🎯 Objetivo

Fornecer interface web para visualização e análise de dados de telefonia:
- Relatórios de chamadas
- Custos de telefonia
- Gráficos e estatísticas
- Filtros e pesquisas

## 🚀 Tecnologias Utilizadas

- **HTML5** - Estrutura
- **CSS3** - Estilização
- **JavaScript** - Lógica
- **AngularJS 1.5.6** - Framework SPA
- **Bootstrap** (provavelmente) - UI Framework

## 📁 Estrutura do Projeto

```
phone-report/
├── index.html              # Página principal
├── css/
│   └── style.css           # Estilos customizados
├── js/
│   └── report.module.js    # Módulo AngularJS
└── README.md
```

## 🔧 Funcionalidades

- ✅ Visualização de relatórios de telefonia
- ✅ Filtros por período, ramal, tipo de chamada
- ✅ Gráficos interativos
- ✅ Exportação de dados
- ✅ Cálculos de custos
- ✅ Interface responsiva
- ✅ Single Page Application (SPA)

## 💻 Como Usar

### Pré-requisitos

- **Navegador moderno** (Chrome, Firefox, Edge)
## 💻 Como Usar

### Pré-requisitos

- **Navegador moderno** (Chrome, Firefox, Edge, Safari)
- **Servidor web** (opcional, recomendado para evitar CORS)
- **Node.js e npm** (opcional, para usar scripts)

### Opção 1: Com npm (Recomendado)

```bash
# Instalar dependências de desenvolvimento
npm install

# Iniciar servidor com abertura automática
npm start

# Ou apenas servir (sem abrir navegador)
npm run serve

# Ou com live reload
npm run dev

# Acessar http://localhost:8080
```

### Opção 2: Servidor Python

```bash
# Python 3
python -m http.server 8080

# Python 2
python -m SimpleHTTPServer 8080

# Acessar http://localhost:8080
```

### Opção 3: Servidor Node.js

```bash
# Instalar http-server globalmente
npm install -g http-server

# Executar
http-server -p 8080

# Acessar http://localhost:8080
```

### Opção 4: Live Server (VS Code)

1. Instalar extensão "Live Server"
2. Clicar com botão direito em `index.html`
3. Selecionar "Open with Live Server"

### Opção 5: Abrir diretamente

1. Abrir `index.html` no navegador
2. ⚠️ **Atenção**: Pode ter restrições CORS se consumir APIs externas

## 📊 Estrutura de Dados

### Chamada Telefônica

```javascript
{
  "id": 123,
  "ramal": "1001",
  "numero": "+5511999999999",
  "data": "2024-04-15T10:30:00",
  "duracao": 180,
  "tipo": "local", // local, DDD, DDI, celular
  "custo": 1.50
}
```

## 🎨 AngularJS Module

```javascript
angular.module('Report', [])
  .controller('ReportCtrl', function($scope, $http) {
    $scope.calls = [];
    $scope.totalCost = 0;
    
    $scope.loadReport = function() {
      $http.get('/api/calls')
        .then(function(response) {
          $scope.calls = response.data;
          $scope.calculateTotal();
        });
    };
    
    $scope.calculateTotal = function() {
      $scope.totalCost = $scope.calls
        .reduce((sum, call) => sum + call.custo, 0);
    };
  });
```

## 🔌 Integração com Backend

A aplicação consome dados de um backend (provavelmente API REST):

```javascript
// Endpoints esperados
GET /api/calls?start=2024-01-01&end=2024-12-31
GET /api/calls/:id
GET /api/summary
GET /api/cost-by-department
```

## 📊 Exemplos de Relatórios

### Chamadas por Tipo

```
Local:    50 chamadas - R$ 50,00
DDD:      30 chamadas - R$ 120,00
DDI:      10 chamadas - R$ 200,00
Celular:  40 chamadas - R$ 160,00
```

### Chamadas por Período

```
Janeiro:  100 chamadas - R$ 300,00
Fevereiro: 90 chamadas - R$ 270,00
Março:    110 chamadas - R$ 330,00
```

## 🔗 Contexto

**Alterdata**: Empresa de software de gestão empresarial. Este projeto provavelmente integra com sistemas Alterdata para relatórios de telefonia corporativa.

## 💡 Conceitos Demonstrados

- **AngularJS 1.x**: Framework SPA (Single Page Application)
- **Two-way data binding**: Sincronização automática view-model
- **Controllers**: Gerenciamento de lógica de apresentação
- **Services**: Comunicação HTTP com backend
- **Directives**: ng-repeat, ng-model, ng-submit
- **Filtros**: Formatação de dados (currency, date)
- **Promises**: Requisições assíncronas com $http

## ⚙️ Melhorias Implementadas

### ✅ Configuração
- **package.json** criado com scripts npm
- **EditorConfig** adicionado para encoding UTF-8
- Configuração de indentação HTML/CSS/JS

### ✅ Documentação
- README expandido com 5 formas de executar
- Estrutura de dados documentada
- Exemplos de código AngularJS
- Integração com backend explicada
- Conceitos técnicos listados
- Contexto Alterdata adicionado

### ✅ Scripts npm
- `npm start`: Servidor com abertura automática
- `npm run serve`: Servidor sem abrir navegador
- `npm run dev`: Servidor com live reload

## 🚀 Melhorias Futuras

- [ ] Migrar para Angular moderno (14+)
- [ ] Adicionar TypeScript
- [ ] Implementar testes (Jest/Jasmine)
- [ ] Gráficos interativos (Chart.js)
- [ ] Export para Excel/PDF
- [ ] Autenticação de usuário
- [ ] Filtros avançados (data range picker)
- [ ] Paginação de resultados
- [ ] Dashboard com widgets
- [ ] Modo escuro (dark theme)

## 📚 Dependências

### AngularJS 1.5.6

Carregado via CDN:
```html
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.6/angular.min.js"></script>
```

**Alternativas modernas:**
- Migrar para **Angular** (versão atual)
- Migrar para **React** ou **Vue.js**
- Usar **Svelte** para SPA leve

## 👨‍💻 Autor

Claudio Almeida

## 📝 Licença

Projeto corporativo/interno.

---

> **Nota**: Este é provavelmente um projeto interno ou de integração com sistemas Alterdata.

