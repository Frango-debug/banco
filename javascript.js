const minefield = document.getElementById('minefield');

const items = [
    { type: 'bd', name: 'id', answer: 'Número único de cada registro.' },
    { type: 'bd', name: 'tag_name', answer: 'Nome da etiqueta ou tag.' },
    { type: 'bd', name: 'tag_category', answer: 'Grupo ou categoria da tag.' },
    { type: 'bd', name: 'created_at', answer: 'Data e hora que foi criado.' },
    { type: 'bd', name: 'updated_at', answer: 'Data e hora da última mudança.' },
    { type: 'bd', name: 'created_by', answer: 'Quem ou o que criou o dado.' },
    { type: 'bd', name: 'status', answer: 'Situação (ativo, inativo ou pendente).' },
    { type: 'bd', name: 'description', answer: 'Texto explicando os detalhes.' },
    { type: 'bd', name: 'version', answer: 'Número da versão (ex: 1.0).' },
    { type: 'bd', name: 'type', answer: 'Tipo do arquivo ou registro.' },
    { type: 'bd', name: 'slug', answer: 'Texto simples para links de sites.' },
    { type: 'bd', name: 'owner', answer: 'Dono ou responsável pelo dado.' },
    { type: 'bd', name: 'department', answer: 'Setor ou área da empresa.' },
    { type: 'bd', name: 'visibility', answer: 'Quem pode ver (público ou privado).' },
    { type: 'bd', name: 'role', answer: 'Cargo ou função com acesso.' },
    { type: 'bd', name: 'access_level', answer: 'Nível de permissão por número.' },
    { type: 'bd', name: 'tenant_id', answer: 'Código do cliente ou empresa.' },
    { type: 'bd', name: 'audit_log', answer: 'Histórico de tudo o que mudou.' },
    { type: 'bd', name: 'deleted_at', answer: 'Data e hora que foi apagado.' },
    { type: 'bd', name: 'is_active', answer: 'Diz se está funcionando (sim ou não).' },
    { type: 'bd', name: 'priority', answer: 'Ordem de importância na fila.' },
    { type: 'bd', name: 'session_id', answer: 'Código do acesso atual do usuário.' },
    { type: 'bd', name: 'execution_time', answer: 'Tempo que o sistema demorou para rodar.' },
    { type: 'bd', name: 'environment', answer: 'Local de teste ou sistema real.' },
    { type: 'bd', name: 'region', answer: 'Lugar onde fica o servidor.' }


    //{ type: 'bd', name: 'text-shadow', answer: 'Texto multilinhas.' },
    //{ type: 'bd', name: 'opacity', answer: 'Lista de seleção.' },
    //{ type: 'bd', name: 'accent-color', answer: 'Item do select.' },
    //{ type: 'bd', name: 'flex', answer: 'Cria uma tabela.' },
    //{ type: 'bd', name: 'justify-content', answer: 'Linha da tabela.' },
    //{ type: 'bd', name: 'align-items', answer: 'Célula da tabela.' },
    //{ type: 'bd', name: 'flex-direction', answer: 'Título da coluna.' },
    //{ type: 'bd', name: 'flex-wrap', answer: 'Topo da tabela.' },
    //{ type: 'bd', name: 'gap', answer: 'Corpo da tabela.' },
    //{ type: 'bd', name: 'grid-template-columns', answer: 'Base da tabela.' },
    //{ type: 'bd', name: 'grid-template-rows', answer: 'Quebra de linha.' },
    //{ type: 'bd', name: 'grid-area', answer: 'Linha horizontal.' },
    //{ type: 'bd', name: 'position', answer: 'Destaque importante.' },
    //{ type: 'bd', name: 'top / right / bottom / left', answer: 'Ênfase em itálico.' },
    //{ type: 'bd', name: 'z-index', answer: 'Citação longa.' },
    //{ type: 'bd', name: 'visibility', answer: 'Trecho de código.' },
    //{ type: 'bd', name: 'cursor', answer: 'Texto formatado.' },
    //{ type: 'bd', name: 'transition', answer: 'Frame externo.' },
    //{ type: 'bd', name: 'transform', answer: 'Raiz do documento.' },
    //{ type: 'bd', name: 'animation', answer: 'Cabeça do documento.' },
    //{ type: 'bd', name: '@keyframes', answer: 'Título da aba.' },
    //{ type: 'bd', name: '@media', answer: 'Metadados técnicos.' },
    //{ type: 'bd', name: '@container', answer: 'Link de arquivo bd.' },
    //{ type: 'bd', name: 'var()', answer: 'Estilos internos.' },
    //{ type: 'bd', name: 'object-fit', answer: 'Código JavaScript.' },
]

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

shuffle(items);

items.forEach((item, index) => {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.textContent = index + 1;
    cell.dataset.name = item.name;
    cell.dataset.answer = item.answer;
    cell.dataset.type = item.type;

    cell.addEventListener('click', function () {
        if (this.classList.contains('revealed')) return;

        if (this.classList.contains('named')) {
            this.classList.remove('named', 'type-html');
            this.classList.add('revealed');
            this.textContent = this.dataset.answer;
            return;
        }

        this.classList.add('named', 'type-html');
        this.textContent = this.dataset.name;
    });

    minefield.appendChild(cell);
});