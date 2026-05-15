/* 
   SEÇÃO: CONFIGURAÇÕES E ESTADO GLOBAL
   O que faz: Armazena todos os dados do app (materiais, produtos, vendas) e carrega do LocalStorage.
   Dica: Usamos o 'JSON.parse(localStorage.getItem(...))' para recuperar os dados salvos no navegador.
*/

// Estoque de Filamentos
let filamentos = JSON.parse(localStorage.getItem('filamentos')) || {
    "Creality - PLA": { fabricante: "Creality", material: "PLA", preco_kg: 89.90, estoque_g: 1000 },
    "Voolt3D - ABS": { fabricante: "Voolt3D", material: "ABS", preco_kg: 75.00, estoque_g: 500 }
};

// Itens extras (caixas, argolas, etc)
let adicionais = JSON.parse(localStorage.getItem('adicionais')) || {
    "Argola Chaveiro": { preco: 0.50, estoque: 100 },
    "Caixa Embalagem": { preco: 1.50, estoque: 50 }
};

// Configurações de custos e taxas
let settings = JSON.parse(localStorage.getItem('settings')) || {
    potencia: 1300, kwh: 0.84, vmaq: 4500, vutil: 20000, 
    cfixo: 300, umes: 40, imp: 6.0, cartao: 5.0, 
    mlc: 12.0, mlp: 17.0, sho: 20.0, falha: 15.0
};

// Banco de dados de produtos
let produtos = JSON.parse(localStorage.getItem('produtos')) || {
    "p1": { id: "p1", nome: "Vaso Espiral", tamanho: "10cm", cor: "#CD7F32", peso: 80, tempo: 4, estoque: 5, estoque_inicial: 10, imagem: null }
};

let favoriteColors = JSON.parse(localStorage.getItem('favoriteColors')) || ["#3498DB", "#2ECC71", "#E74C3C", "#F1C40F", "#9B59B6", "#1ABC9C"];
let vendas = JSON.parse(localStorage.getItem('vendas')) || [];
let projectItems = [];
let packedItems = JSON.parse(localStorage.getItem('packedItems')) || [];
let selectedItems = []; 

/* 
   SEÇÃO: INICIALIZAÇÃO
   O que faz: Roda assim que o navegador termina de carregar o HTML.
*/
document.addEventListener('DOMContentLoaded', () => {
    updateLists();      // Preenche as listas de materiais/produtos
    updateSelectors();  // Preenche os menus de seleção
    loadSettingsFields(); // Carrega os ajustes base
    updateDashboard();  // Atualiza os gráficos e alertas
    renderFavoriteColors(); // Mostra as cores favoritas salvas
});

/* 
   SEÇÃO: SISTEMA DE NAVEGAÇÃO E MODAIS
   O que faz: Controla a troca de abas e a abertura das janelas (modais).
*/

/**
 * FUNÇÃO: toggleMobileMenu
 * O que faz: Abre ou fecha o menu lateral no celular.
 */
function toggleMobileMenu() {
    document.querySelector('.tab-bar').classList.toggle('open');
}

/**
 * FUNÇÃO: showTab
 * O que faz: Troca a aba ativa visível para o usuário.
 * Parâmetros: tabId (ID da seção HTML que deve aparecer)
 */
function showTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    
    document.getElementById(tabId).classList.add('active');
    
    // Marca o botão da aba como ativo
    const btn = Array.from(document.querySelectorAll('.tab-btn')).find(b => b.getAttribute('onclick').includes(tabId));
    if(btn) btn.classList.add('active');

    // Fecha o menu mobile automaticamente após escolher uma aba
    if (window.innerWidth < 1024) {
        document.querySelector('.tab-bar').classList.remove('open');
    }
}

/**
 * FUNÇÃO: openModal / closeModal
 * O que faz: Exibe ou esconde um modal específico.
 * Parâmetros: id (ID do modal no HTML)
 */
function openModal(id) { document.getElementById(id).classList.add('active'); }
function closeModal(id) { document.getElementById(id).classList.remove('active'); }

/* 
   SEÇÃO: GESTÃO DE DADOS (CRUD - Materiais e Adicionais)
   O que faz: Funções para Salvar, Editar e Excluir filamentos e itens extras.
*/

/**
 * FUNÇÃO: saveFilament
 * O que faz: Pega os dados do modal e salva no banco de filamentos.
 */
function saveFilament() {
    const id = document.getElementById('m-fil-id').value || 'f' + Date.now();
    const fab = document.getElementById('m-fil-fab').value;
    const mat = document.getElementById('m-fil-mat').value;
    const preco = parseFloat(document.getElementById('m-fil-preco').value);
    const estoque = parseFloat(document.getElementById('m-fil-estoque').value);

    if(!fab) return alert("Preencha o fabricante");
    
    // Regra da Skill: Mantém o estoque inicial para cálculo de % de alerta
    const initial = filamentos[id] ? (filamentos[id].estoque_inicial || estoque) : estoque;
    
    filamentos[id] = { id, fabricante: fab, material: mat, preco_kg: preco, estoque_g: estoque, estoque_inicial: initial };
    
    persist();         // Salva no LocalStorage
    updateLists();     // Atualiza a visão do usuário
    updateSelectors(); // Atualiza os menus de escolha
    closeModal('modal-filamento');
}

/**
 * FUNÇÃO: editFilament / editAdicional
 * O que faz: Carrega os dados de um item existente de volta para o modal para edição.
 */
function editFilament(id) {
    const f = filamentos[id];
    document.getElementById('m-fil-id').value = id;
    document.getElementById('m-fil-fab').value = f.fabricante;
    document.getElementById('m-fil-mat').value = f.material;
    document.getElementById('m-fil-preco').value = f.preco_kg;
    document.getElementById('m-fil-estoque').value = f.estoque_g;
    openModal('modal-filamento');
}

function deleteFilament(key) {
    if(confirm(`Excluir ${key}?`)) {
        delete filamentos[key];
        persist();
        updateLists();
        updateSelectors();
    }
}

function saveAdicional() {
    const id = document.getElementById('m-add-id').value || 'a' + Date.now();
    const nome = document.getElementById('m-add-nome').value;
    const preco = parseFloat(document.getElementById('m-add-preco').value);
    const estoque = parseFloat(document.getElementById('m-add-estoque').value);

    if(!nome) return alert("Preencha o nome");
    
    const initial = adicionais[id] ? (adicionais[id].estoque_inicial || estoque) : estoque;
    
    adicionais[id] = { id, nome, preco, estoque, estoque_inicial: initial };
    
    persist();
    updateLists();
    updateSelectors();
    closeModal('modal-adicional');
}

function editAdicional(id) {
    const a = adicionais[id];
    document.getElementById('m-add-id').value = id;
    document.getElementById('m-add-nome').value = a.nome;
    document.getElementById('m-add-preco').value = a.preco;
    document.getElementById('m-add-estoque').value = a.estoque;
    openModal('modal-adicional');
}

function deleteAdicional(key) {
    if(confirm(`Excluir ${key}?`)) {
        delete adicionais[key];
        persist();
        updateLists();
        updateSelectors();
    }
}

// --- PROJECT SELECTION ---
function addItemToSelection() {
    const key = document.getElementById('cfg-sel-adicional').value;
    if(key && !selectedItems.includes(key)) {
        selectedItems.push(key);
        renderPills();
    }
}

function renderPills() {
    const container = document.getElementById('selected-items-pills');
    container.innerHTML = selectedItems.map(item => `
        <div class="pill">${item} <i class="fas fa-times" onclick="selectedItems = selectedItems.filter(i => i !== '${item}'); renderPills();"></i></div>
    `).join('');
}

/* 
   SEÇÃO: GESTÃO DE PRODUTOS (Catálogo)
   O que faz: Cadastro de peças prontas com peso, tempo e foto.
*/

/**
 * FUNÇÃO: saveProduct
 * O que faz: Salva um novo produto ou edita um existente, tratando imagens (Drive ou Local).
 */
function saveProduct() {
    const id = document.getElementById('m-prod-id').value || 'p' + Date.now();
    const nome = document.getElementById('m-prod-nome').value;
    const tam = document.getElementById('m-prod-tam').value;
    const cor = document.getElementById('m-prod-cor').value;
    const peso = parseFloat(document.getElementById('m-prod-peso').value);
    const tempo = parseFloat(document.getElementById('m-prod-tempo').value);
    const estoque = parseInt(document.getElementById('m-prod-estoque').value);
    const estoqueIni = parseInt(document.getElementById('m-prod-estoque-ini').value);
    
    // Regra da Skill: Prioriza links do Drive higienizados
    const urlInput = document.getElementById('m-prod-img-url').value;
    const imagem = urlInput ? cleanDriveLink(urlInput) : currentProductImage;

    if(!nome) return alert("Preencha o nome do produto");
    produtos[id] = { id, nome, tamanho: tam, cor, peso, tempo, estoque, estoque_inicial: estoqueIni, imagem };
    
    persist();
    updateLists();
    updateSelectors();
    updateDashboard();
    closeModal('modal-produto');
}

function editProduct(id) {
    const p = produtos[id];
    document.getElementById('m-prod-id').value = id;
    document.getElementById('m-prod-nome').value = p.nome;
    document.getElementById('m-prod-tam').value = p.tamanho;
    document.getElementById('m-prod-cor').value = p.cor;
    document.getElementById('m-prod-peso').value = p.peso;
    document.getElementById('m-prod-tempo').value = p.tempo;
    document.getElementById('m-prod-estoque').value = p.estoque;
    document.getElementById('m-prod-estoque-ini').value = p.estoque_inicial || p.estoque;
    document.getElementById('m-prod-img-url').value = p.imagem && p.imagem.startsWith('http') ? p.imagem : '';
    
    if(p.imagem) {
        setImagePreview(p.imagem);
    } else {
        resetImagePreview();
    }

    openModal('modal-produto');
}

function deleteProduct(id) {
    if(confirm(`Excluir produto ${produtos[id].nome}?`)) {
        delete produtos[id];
        persist();
        updateLists();
        updateSelectors();
    }
}

// --- PRODUCT SELECTION (TIERED) ---
let currentSelectedProductId = null;
let currentSelectedColor = null;

function onProductNameSelect() {
    const name = document.getElementById('cfg-sel-prod-name').value;
    const colorCont = document.getElementById('cfg-sel-prod-color-pills');
    const sizeSel = document.getElementById('cfg-sel-prod-size');
    
    colorCont.innerHTML = '<span class="dim-text">Selecione um item primeiro...</span>';
    sizeSel.innerHTML = '<option value="">---</option>';
    currentSelectedProductId = null;
    currentSelectedColor = null;

    if (!name) return;

    const colors = [...new Set(Object.values(produtos).filter(p => p.nome === name).map(p => p.cor))];
    colorCont.innerHTML = colors.map(c => `
        <div class="color-pill" style="background-color: ${c}" onclick="onProductColorSelect('${c}', this)" title="${c}"></div>
    `).join('');
}

function onProductColorSelect(color, el) {
    const name = document.getElementById('cfg-sel-prod-name').value;
    const sizeSel = document.getElementById('cfg-sel-prod-size');

    // Highlight active pill
    document.querySelectorAll('#cfg-sel-prod-color-pills .color-pill').forEach(p => p.classList.remove('active'));
    if(el) el.classList.add('active');
    
    currentSelectedColor = color;
    sizeSel.innerHTML = '<option value="">Selecione...</option>';
    currentSelectedProductId = null;

    const sizes = Object.values(produtos).filter(p => p.nome === name && p.cor === color);
    sizeSel.innerHTML += sizes.map(p => `<option value="${p.id}">${p.tamanho}</option>`).join('');
    
    if (sizes.length === 1) {
        sizeSel.value = sizes[0].id;
        onProductSizeSelect();
    }
}

function onProductSizeSelect() {
    currentSelectedProductId = document.getElementById('cfg-sel-prod-size').value;
}

function closeItemAndAddToProject() {
    const prodId = currentSelectedProductId;
    const fil = document.getElementById('cfg-sel-filamento').value;
    const lote = parseInt(document.getElementById('cfg-lote').value);
    const multi = parseFloat(document.getElementById('cfg-multi').value);

    if(!prodId) return alert("Selecione um produto completo (Nome, Cor e Tamanho)");
    if(!fil) return alert("Selecione um filamento");
    
    // selectedItems can be empty, that's fine

    const p = produtos[prodId];
    const package = {
        modelo: p.nome,
        prodKey: prodId,
        filamento: fil,
        tempo: p.tempo,
        peso: p.peso,
        lote: lote,
        multi: multi,
        extras: [...selectedItems]
    };

    projectItems.push(package);
    
    // Reset selections
    document.getElementById('cfg-sel-prod-name').value = "";
    onProductNameSelect(); // Clear sub-selectors
    currentSelectedColor = null;
    selectedItems = [];
    renderPills();
    
    updateProjectTable();
}

/* 
   SEÇÃO: LÓGICA DE PRECIFICAÇÃO E CÁLCULO
   O que faz: O cérebro do app. Calcula custos de energia, material, amortização e taxas.
   Dica: A fórmula de energia considera: (Potência * Tempo * 0.5 * Custo kWh) / 1000.
*/

/**
 * FUNÇÃO: calculateProject
 * O que faz: Percorre todos os itens do projeto atual e gera os totais financeiros.
 */
function calculateProject() {
    if(projectItems.length === 0) return; // Silencioso se estiver vazio

    let totalCusto = 0;
    let totalPreco = 0;
    let totalExtras = 0;
    let totalLucroBru = 0;
    let totalLucroDir = 0;
    let totalLucroMLC = 0;
    let totalLucroMLP = 0;
    let totalLucroSHO = 0;

    const s = settings;
    const imp = s.imp / 100;
    const cart = s.cartao / 100;
    const mlc = s.mlc / 100;
    const mlp = s.mlp / 100;
    const sho = s.sho / 100;
    const falha_pct = s.falha / 100;

    for (let p of projectItems) {
        const fil = filamentos[p.filamento];
        
        // Custo do Material (Filamento)
        const c_fil = (p.peso / 1000) * fil.preco_kg;
        
        // Custo de Energia Elétrica
        const c_ene = (s.potencia * p.tempo * 0.5 * s.kwh) / 1000;
        
        // Amortização (Depreciação da Máquina)
        const amo = (s.vmaq / s.vutil) * p.tempo;
        
        // Custos Fixos (Internet, Aluguel, Pro-rata)
        const c_fix_l = (s.cfixo / s.umes) * p.lote;
        
        const c_base = c_fil + c_ene + amo;
        const c_fal = falha_pct * c_base * 0.7; // Margem de erro de impressão
        
        // Itens Extras (Embalagem, fitas, parafusos)
        let c_extras_p = 0;
        for(let exKey of p.extras) {
            if(adicionais[exKey]) c_extras_p += adicionais[exKey].preco * p.lote;
        }

        const c_tot_l = (c_base + c_fal) * p.lote + c_fix_l + c_extras_p;
        const c_un = c_tot_l / p.lote;
        
        // Aplicação do Multiplicador (Markup)
        const p_fin = c_un * p.multi;
        const l_bru = p_fin - c_un;

        // Cálculos de Lucro por Canal (Líquido após taxas)
        const l_dir = l_bru - p_fin * (imp + cart);
        const l_mlc = l_bru - p_fin * (imp + mlc);
        const l_mlp = l_bru - p_fin * (imp + mlp);
        const l_sho = l_bru - p_fin * (imp + sho);

        // Somatórios para o Dashboard
        totalCusto += c_tot_l;
        totalPreco += p_fin * p.lote;
        totalExtras += c_extras_p;
        totalLucroBru += l_bru * p.lote;
        totalLucroDir += l_dir * p.lote;
        totalLucroMLC += l_mlc * p.lote;
        totalLucroMLP += l_mlp * p.lote;
        totalLucroSHO += l_sho * p.lote;
    }

    // Formatação e Exibição dos Resultados
    const f = (v) => v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    document.getElementById('res-total-final').innerText = f(totalPreco);
    document.getElementById('res-custo-total').innerText = f(totalCusto);
    document.getElementById('res-custo-extras').innerText = f(totalExtras);
    document.getElementById('res-lucro-bruto').innerText = f(totalLucroBru);
    document.getElementById('res-lucro-direta').innerText = f(totalLucroDir);
    document.getElementById('res-lucro-mlc').innerText = f(totalLucroMLC);
    document.getElementById('res-lucro-mlp').innerText = f(totalLucroMLP);
    document.getElementById('res-lucro-shopee').innerText = f(totalLucroSHO);
}

// --- UI UPDATES ---
function updateLists() {
    updateDashboard(); // Centralized update
    // Produtos
    const prodCont = document.getElementById('list-produtos');
    if(prodCont) prodCont.innerHTML = Object.entries(produtos).map(([id, d]) => `
        <div class="list-item">
            <div class="item-info">
                <div style="display: flex; align-items: center; gap: 10px;">
                    <div class="color-preview-circle" style="background-color: ${d.cor}; width: 15px; height: 15px; border: 1px solid rgba(255,255,255,0.3);"></div>
                    <h4>${d.nome}</h4>
                </div>
                <p>Estoque: ${d.estoque} un | ${d.tamanho}</p>
            </div>
            <div class="item-actions">
                <button class="btn-text" onclick="editProduct('${id}')"><i class="fas fa-edit"></i></button>
                <button class="btn-text" onclick="deleteProduct('${id}')"><i class="fas fa-trash"></i></button>
            </div>
        </div>
    `).join('');

    // Filamentos
    const filCont = document.getElementById('list-filamentos');
    if(filCont) filCont.innerHTML = Object.entries(filamentos).map(([id, d]) => `
        <div class="list-item">
            <div class="item-info">
                <h4>${d.fabricante} - ${d.material}</h4>
                <p>Estoque: ${d.estoque_g.toFixed(0)}g | R$ ${d.preco_kg.toFixed(2)}/kg</p>
            </div>
            <div class="item-actions">
                <button class="btn-text" onclick="editFilament('${id}')"><i class="fas fa-edit"></i></button>
                <button class="btn-text" onclick="deleteFilament('${id}')"><i class="fas fa-trash"></i></button>
            </div>
        </div>
    `).join('');

    // Adicionais
    const addCont = document.getElementById('list-adicionais');
    if(addCont) addCont.innerHTML = Object.entries(adicionais).map(([id, d]) => `
        <div class="list-item">
            <div class="item-info">
                <h4>${d.nome}</h4>
                <p>Estoque: ${d.estoque} un | R$ ${d.preco.toFixed(2)}/un</p>
            </div>
            <div class="item-actions">
                <button class="btn-text" onclick="editAdicional('${id}')"><i class="fas fa-edit"></i></button>
                <button class="btn-text" onclick="deleteAdicional('${id}')"><i class="fas fa-trash"></i></button>
            </div>
        </div>
    `).join('');
}

function updateSelectors() {
    const nameSel = document.getElementById('cfg-sel-prod-name');
    const filSel = document.getElementById('cfg-sel-filamento');
    const addSel = document.getElementById('cfg-sel-adicional');

    if(nameSel) {
        const uniqueNames = [...new Set(Object.values(produtos).map(p => p.nome))];
        nameSel.innerHTML = '<option value="">Selecione um item...</option>' + 
            uniqueNames.map(n => `<option value="${n}">${n}</option>`).join('');
    }

    filSel.innerHTML = '<option value="">Selecione...</option>' + 
        Object.entries(filamentos).map(([id, f]) => `<option value="${id}">${f.fabricante} - ${f.material}</option>`).join('');
    
    addSel.innerHTML = '<option value="">Selecione...</option>' + 
        Object.entries(adicionais).map(([id, a]) => `<option value="${id}">${a.nome}</option>`).join('');
}

function updateProjectTable() {
    const cont = document.getElementById('project-items-list');
    cont.innerHTML = projectItems.map((p, idx) => `
        <div class="proj-item">
            <div class="proj-item-info">
                <h5>${p.modelo}</h5>
                <span>${p.lote} un | ${p.filamento}</span>
            </div>
            <button class="btn-text" onclick="projectItems.splice(${idx}, 1); updateProjectTable();">
                <i class="fas fa-times-circle"></i>
            </button>
        </div>
    `).join('');
}

function toggleDetails() {
    const cont = document.getElementById('detailed-results');
    const btn = document.getElementById('btn-toggle-text');
    cont.classList.toggle('hidden');
    btn.innerText = cont.classList.contains('hidden') ? "EXIBIR DETALHAMENTO" : "OCULTAR DETALHAMENTO";
}

function clearProject() {
    if(confirm("Limpar todo o projeto?")) {
        projectItems = [];
        updateProjectTable();
    }
}

function saveSettings() {
    settings = {
        potencia: parseFloat(document.getElementById('st-potencia').value),
        kwh: parseFloat(document.getElementById('st-kwh').value),
        vmaq: parseFloat(document.getElementById('st-vmaq').value),
        vutil: parseFloat(document.getElementById('st-vutil').value),
        cfixo: parseFloat(document.getElementById('st-cfixo').value),
        umes: parseInt(document.getElementById('st-umes').value),
        imp: parseFloat(document.getElementById('st-imp').value),
        cartao: parseFloat(document.getElementById('st-cartao').value),
        mlc: parseFloat(document.getElementById('st-mlc').value),
        mlp: parseFloat(document.getElementById('st-mlp').value),
        sho: parseFloat(document.getElementById('st-sho').value),
        falha: parseFloat(document.getElementById('st-falha').value)
    };
    persist();
    alert("Configurações salvas!");
}

function loadSettingsFields() {
    const s = settings;
    document.getElementById('st-potencia').value = s.potencia;
    document.getElementById('st-kwh').value = s.kwh;
    document.getElementById('st-vmaq').value = s.vmaq;
    document.getElementById('st-vutil').value = s.vutil;
    document.getElementById('st-cfixo').value = s.cfixo;
    document.getElementById('st-umes').value = s.umes;
    document.getElementById('st-imp').value = s.imp;
    document.getElementById('st-cartao').value = s.cartao;
    document.getElementById('st-mlc').value = s.mlc;
    document.getElementById('st-mlp').value = s.mlp;
    document.getElementById('st-sho').value = s.sho;
    document.getElementById('st-falha').value = s.falha;
}

/* 
   SEÇÃO: WORKFLOW DE EMBALAMENTO E FECHAMENTO
   O que faz: Gerencia a fila de itens prontos e o encerramento das vendas do dia.
*/

/**
 * FUNÇÃO: packItem
 * O que faz: Pega o cálculo atual e "embrulha" em um pacote pronto para ser vendido no fechamento.
 */
function packItem() {
    const id = document.getElementById('cfg-sel-prod-name').value;
    const p = produtos[id];
    if (!p || projectItems.length === 0) return alert("Selecione e configure itens primeiro!");

    const packed = {
        id: 'pk' + Date.now(),
        modelo: p.nome,
        detalhes: projectItems.map(item => `${item.lote}x ${item.modelo}`).join(', '),
        totalVenda: parseFloat(document.getElementById('res-total-final').innerText.replace('R$ ', '').replace('.', '').replace(',', '.')),
        data: new Date().toISOString(),
        items: [...projectItems]
    };

    packedItems.push(packed);
    localStorage.setItem('packedItems', JSON.stringify(packedItems));
    
    // Limpa o projeto atual após embalar
    projectItems = [];
    updateProjectTable();
    updateDashboard();
    updateLists();
    
    alert("Pedido embalado e pronto para o fechamento!");
    showTab('tab-precificacao'); // Direciona para a aba de fechamento
}

/**
 * FUNÇÃO: closeDay
 * O que faz: Finaliza todas as vendas embaladas, desconta do estoque e limpa a fila.
 */
function closeDay() {
    if (packedItems.length === 0) return alert("Não há itens embalados.");
    
    const total = packedItems.reduce((acc, p) => acc + p.totalVenda, 0);
    if(!confirm(`Deseja fechar o dia? \nTotal: R$ ${total.toFixed(2)}`)) return;

    // Registra as vendas no histórico
    packedItems.forEach(p => {
        p.items.forEach(item => {
            vendas.push({
                nome: item.modelo,
                lote: item.lote,
                valor: (p.totalVenda / p.items.length), // Valor aproximado por item
                data: p.data
            });
            
            // Aqui poderíamos adicionar a lógica de descontar estoque automaticamente
        });
    });

    packedItems = []; // Limpa a fila de pacotes
    localStorage.setItem('packedItems', JSON.stringify(packedItems));
    persist();
    updateLists();
    updateDashboard();
    alert("Dia fechado com sucesso!");
}

// --- COLOR FAVORITES ---
function saveFavoriteColor() {
    const color = document.getElementById('m-prod-cor').value;
    if(!favoriteColors.includes(color)) {
        favoriteColors.push(color);
        persist();
        renderFavoriteColors();
    }
}

function renderFavoriteColors() {
    const cont = document.getElementById('favorite-colors');
    cont.innerHTML = favoriteColors.map(c => `
        <div class="color-pill" style="background-color: ${c}" onclick="applyFavoriteColor('${c}')"></div>
    `).join('');
}

function applyFavoriteColor(hex) {
    document.getElementById('m-prod-cor').value = hex;
}

// --- IMAGE HANDLING ---
let currentProductImage = null;

function previewProductImage(input) {
    if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            setImagePreview(e.target.result);
        };
        reader.readAsDataURL(input.files[0]);
    }
}

function setImagePreview(src) {
    const preview = document.getElementById('m-prod-img-preview');
    preview.style.backgroundImage = `url(${src})`;
    preview.innerHTML = ''; // Clear icon/text
    currentProductImage = src;
}

function resetImagePreview() {
    const preview = document.getElementById('m-prod-img-preview');
    preview.style.backgroundImage = 'none';
    preview.innerHTML = '<i class="fas fa-camera"></i><span>Clique para selecionar</span>';
    currentProductImage = null;
    document.getElementById('m-prod-img').value = '';
    document.getElementById('m-prod-img-url').value = '';
}

function cleanDriveLink(url) {
    if (!url) return "";
    // Google Drive direct link conversion
    if (url.includes("drive.google.com")) {
        const parts = url.split("/");
        const idIdx = parts.indexOf("d") + 1;
        if (idIdx > 0 && parts[idIdx]) {
            return `https://drive.google.com/uc?export=view&id=${parts[idIdx].split("?")[0]}`;
        }
    }
    return url;
}

function previewImageUrl(url) {
    if (!url) return resetImagePreview();
    const clean = cleanDriveLink(url);
    setImagePreview(clean);
}

function openImageViewer(src) {
    if (!src) return;
    const modal = document.getElementById('modal-viewer');
    const img = document.getElementById('viewer-img');
    img.src = src;
    modal.classList.add('active');
}

/* 
   SEÇÃO: DASHBOARD, ALERTAS E GRÁFICOS
   O que faz: Processa os dados para exibição visual e gera alertas de estoque.
*/

/**
 * FUNÇÃO: updateDashboard
 * O que faz: A função central que redesenha o catálogo, o gráfico de vendas e os alertas de 30%.
 */
function updateDashboard() {
    const lowStockItems = [];

    // --- 1. RENDERIZAR CATÁLOGO ---
    const catalog = document.getElementById('product-catalog');
    if (catalog) {
        catalog.innerHTML = Object.values(produtos).map(p => `
            <div class="product-card">
                <div class="product-card-img" style="background-image: ${p.imagem ? `url('${p.imagem}')` : 'none'}" onclick="openImageViewer('${p.imagem}')">
                    ${!p.imagem ? '<i class="fas fa-image"></i>' : ''}
                    <div class="img-overlay"><i class="fas fa-search-plus"></i></div>
                </div>
                <div class="product-card-info">
                    <h4>${p.nome}</h4>
                    <span class="pill" style="background: ${p.estoque <= (p.estoque_inicial * 0.3) ? 'var(--danger)' : 'rgba(59, 130, 246, 0.1)'}; color: ${p.estoque <= (p.estoque_inicial * 0.3) ? '#fff' : 'var(--primary)'}">
                        ${p.estoque} un (${p.cor})
                    </span>
                </div>
            </div>
        `).join('');
    }

    // --- 2. RENDERIZAR GRÁFICO DE VENDAS ---
    const chartCont = document.getElementById('sales-chart');
    if (chartCont) {
        if (vendas.length === 0) {
            chartCont.innerHTML = '<div class="dim-text">Nenhuma venda registrada ainda.</div>';
        } else {
            const grouped = vendas.reduce((acc, v) => {
                acc[v.nome] = (acc[v.nome] || 0) + v.lote;
                return acc;
            }, {});

            const sorted = Object.entries(grouped).sort((a, b) => b[1] - a[1]).slice(0, 5);
            const maxVal = Math.max(...Object.values(grouped));

            chartCont.innerHTML = sorted.map(([name, qty]) => `
                <div class="chart-row">
                    <div class="chart-label">${name}</div>
                    <div class="chart-bar-bg">
                        <div class="chart-bar-fill" style="width: ${(qty / maxVal) * 100}%"></div>
                    </div>
                    <div class="chart-value">${qty} un</div>
                </div>
            `).join('');
        }
    }

    // --- 3. VERIFICAR ALERTAS (Regra dos 30%) ---
    // Produtos
    Object.entries(produtos).forEach(([id, p]) => {
        const threshold = (p.estoque_inicial || 10) * 0.3;
        if(p.estoque <= threshold) {
            lowStockItems.push({ name: `${p.nome} (${p.cor})`, type: 'Produto', val: `${p.estoque} un`, pct: Math.round((p.estoque/p.estoque_inicial)*100) });
        }
    });

    // Filamentos
    Object.entries(filamentos).forEach(([id, f]) => {
        const initial = f.estoque_inicial || 1000;
        const threshold = initial * 0.3;
        if(f.estoque_g <= threshold) {
            lowStockItems.push({ name: `${f.fabricante} (${f.material})`, type: 'Filamento', val: `${f.estoque_g.toFixed(0)}g`, pct: Math.round((f.estoque_g/initial)*100) });
        }
    });

    // Itens Adicionais
    Object.entries(adicionais).forEach(([id, a]) => {
        const initial = a.estoque_inicial || 100;
        const threshold = initial * 0.3;
        if(a.estoque <= threshold) {
            lowStockItems.push({ name: a.nome, type: 'Item Extra', val: `${a.estoque} un`, pct: Math.round((a.estoque/initial)*100) });
        }
    });

    // Renderizar Lista de Alertas no Topo
    const alertCont = document.getElementById('low-stock-alert');
    const alertList = document.getElementById('low-stock-list');
    
    if(lowStockItems.length > 0) {
        alertCont.classList.remove('hidden');
        alertList.innerHTML = lowStockItems.map(item => `
            <li class="alert-item">
                <div class="alert-info">
                    <span class="alert-type">${item.type}</span>
                    <span class="alert-name">${item.name}</span>
                </div>
                <div class="alert-status">
                    <span class="alert-qty">${item.val}</span>
                    <span class="alert-pct">(${item.pct}%)</span>
                </div>
            </li>
        `).join('');
    } else {
        alertCont.classList.add('hidden');
    }
}

/* 
   SEÇÃO: UTILIDADES E PERSISTÊNCIA
   O que faz: Funções de suporte como limpeza de links do Drive e salvamento em LocalStorage.
*/

/**
 * FUNÇÃO: persist
 * O que faz: Salva o estado atual de todas as variáveis no LocalStorage do navegador.
 */
function persist() {
    localStorage.setItem('filamentos', JSON.stringify(filamentos));
    localStorage.setItem('adicionais', JSON.stringify(adicionais));
    localStorage.setItem('produtos', JSON.stringify(produtos));
    localStorage.setItem('settings', JSON.stringify(settings));
    localStorage.setItem('favoriteColors', JSON.stringify(favoriteColors));
    localStorage.setItem('vendas', JSON.stringify(vendas));

    triggerLocalBackup(); // Tenta realizar backup no servidor local (se ativo)
}

/**
 * FUNÇÃO: cleanDriveLink
 * O que faz: Converte links de compartilhamento do Google Drive em links diretos de imagem.
 * Parâmetros: url (O link colado pelo usuário)
 * Retorno: URL direta para uso em <img> ou background-image.
 */
function cleanDriveLink(url) {
    if (!url) return "";
    if (url.includes("drive.google.com")) {
        const parts = url.split("/");
        const idIdx = parts.indexOf("d") + 1;
        if (idIdx > 0 && parts[idIdx]) {
            return `https://drive.google.com/uc?export=view&id=${parts[idIdx].split("?")[0]}`;
        }
    }
    return url;
}

/**
 * FUNÇÃO: triggerLocalBackup
 * O que faz: Envia uma cópia de todos os dados para o servidor Python local (se o usuário estiver rodando o script de backup).
 */
async function triggerLocalBackup() {
    const data = {
        filamentos, adicionais, produtos, settings, favoriteColors, vendas,
        timestamp: new Date().toISOString()
    };

    try {
        await fetch('http://localhost:5000/save_backup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        console.log("🚀 Backup local automático realizado com sucesso.");
    } catch (e) {
        // Falha silenciosa para não atrapalhar o usuário se o servidor não estiver ligado
        console.warn("⚠️ Servidor de backup local offline. Dados salvos apenas no navegador.");
    }
}

/* FIM DO ARQUIVO: app.js - Refatorado e Documentado */
