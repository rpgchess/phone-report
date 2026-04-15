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
- **Servidor web** (opcional para desenvolvimento)

### Execução

**Opção 1: Servidor local**

```bash
# Usando Python
python -m http.server 8000

# Ou Node.js
npx http-server

# Acessar http://localhost:8000
```

**Opção 2: Abrir diretamente**

1. Abrir `index.html` no navegador
2. (Pode ter restrições CORS se consumir APIs)

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

**Alterdata**: Empresa de software de gestão empresarial. Este projeto provavelmente integra com sistemas Alterdata para relatórios de telefonia.

## 👨‍💻 Autor

Claudio Almeida

## 📝 Licença

Projeto corporativo/interno.

---

> **Nota**: Este é provavelmente um projeto interno ou de integração com sistemas Alterdata.

