
// Dados para Hexágono Externo (HE)
const nomes_HE = ['HE33RE', 'HE41BR', 'HE325TR', 'HE50RE', 'HE33BR', 'HE33TF', 'HE50TF', 'S48MU', 'S48ES'];
const categorias_HE = ['RI', 'HEX', 'LARG', 'ALT'];
const dicionario_HE = {
    'HE33RE': {'RI': 1.80, 'HEX': 2.40, 'LARG': 3.30, 'ALT': 1.00},
    'HE33RE': {'RI': 1.80, 'HEX': 2.40, 'LARG': 3.30, 'ALT': 1.00},
    'HE41BR': {'RI': 2.00, 'HEX': 2.70, 'LARG': 4.10, 'ALT': 0.70},
    'HE325TR': {'RI': 2.00, 'HEX': 2.55, 'LARG': 3.40, 'ALT': 0.70},
    'HE50RE': {'RI': 2.50, 'HEX': 3.30, 'LARG': 5.00, 'ALT': 1.00},
    'HE33BR': {'RI': 1.60, 'HEX': 2.40, 'LARG': 3.50, 'ALT': 0.70},
    'HE33TF': {'RI': 1.70, 'HEX': 2.40, 'LARG': 3.50, 'ALT': 1.00},
    'HE50TF': {'RI': 2.50, 'HEX': 3.40, 'LARG': 5.10, 'ALT': 1.00},
    'S48MU': {'RI': 1.40, 'HEX': 0, 'LARG': 4.80, 'ALT': 0},
    'S48ES': {'RI': 1.40, 'HEX': 3.30, 'LARG': 4.80, 'ALT': 0}}

// Dados para Hexágono Interno (HI)
const nomes_HI = ['HI33UN', 'HI375-43UN', 'HI38-43TP', 'HI35-43SU', 'HI40TF', 'HI33CL', 'HI375-40DF', 'HI37-42MI', 'HI35CT', 'HI41CT', 'HI35RS', 'HI43RS', 'HI50RS', 'HI38SI', 'HI48MU', 'HI48ES'];
const categorias_HI = ['RI', 'HEX', '2HEX', 'LARG'];
const dicionario_HI = {
 'HI33UN': {'RI': 1.8, 'HEX': 2.3, '2HEX': 0.0, 'LARG': 3.5},
 'HI375-43UN': {'RI': 2.0, 'HEX': 2.5, '2HEX': 0.0, 'LARG': 4.0},
 'HI38-43TP': {'RI': 1.6, 'HEX': 2.5, '2HEX': 0.0, 'LARG': 4.3},
 'HI35-43SU': {'RI': 1.8, 'HEX': 2.5, '2HEX': 0.0, 'LARG': 3.5},
 'HI40TF': {'RI': 1.4, 'HEX': 2.4, '2HEX': 0.0, 'LARG': 4.0},
 'HI33CL': {'RI': 2.0, 'HEX': 2.4, '2HEX': 0.0, 'LARG': 3.3},
 'HI375-40DF': {'RI': 2.0, 'HEX': 2.5, '2HEX': 0.0, 'LARG': 4.0},
 'HI37-42MI': {'RI': 1.8, 'HEX': 2.4, '2HEX': 0.0, 'LARG': 3.8},
 'HI35CT': {'RI': 1.6, 'HEX': 2.2, '2HEX': 2.2, 'LARG': 3.5},
 'HI41CT': {'RI': 1.6, 'HEX': 2.7, '2HEX': 2.2, 'LARG': 4.1},
 'HI35RS': {'RI': 1.8, 'HEX': 0.0, '2HEX': 0.0, 'LARG': 3.5},
 'HI43RS': {'RI': 2.0, 'HEX': 0.0, '2HEX': 0.0, 'LARG': 4.3},
 'HI50RS': {'RI': 1.8, 'HEX': 0.0, '2HEX': 0.0, 'LARG': 5.0},
 'HI38SI': {'RI': 1.8, 'HEX': 2.5, '2HEX': 0.0, 'LARG': 3.8},
 'HI48MU': {'RI': 1.4, 'HEX': 0.0, '2HEX': 0.0, 'LARG': 4.8},
 'HI48ES': {'RI': 1.4, 'HEX': 3.3, '2HEX': 0.0, 'LARG': 4.8}}

// Dados para Cone Morse (CM)
const nomes_CM = ['CM35-43-50ND', 'UNND', 'CM48GTND', 'CM38-45-55SISW', 'CM35-375-40CN', 'NC33ST', 'RC41ST', 'RN48ST', 'WN65ST', 'RBWB375-65ST', 'CM35-43-50GMND', 'CM30CCNB', 'CM35NPNB', 'CM43RPNB', 'CM35-43-50DB', 'CM35-40AT', 'CM45-50AT', 'CM375-42C1MI', '48MU'];
const categorias_CM = ['RI', 'HEX', 'LARG'];
const dicionario_CM = {
 'CM35-43-50ND': {'RI': 1.8, 'HEX': 2.1, 'LARG': 3.5},
 'UNND': {'RI': 0.0, 'HEX': 0.0, 'LARG': 0.0},
 'CM48GTND': {'RI': 0.0, 'HEX': 0.0, 'LARG': 0.0},
 'CM38-45-55SISW': {'RI': 1.6, 'HEX': 2.0, 'LARG': 4.0},
 'CM35-375-40CN': {'RI': 1.6, 'HEX': 2.25, 'LARG': 3.5},
 'NC33ST': {'RI': 1.6, 'HEX': 0.0, 'LARG': 3.5},
 'RC41ST': {'RI': 1.6, 'HEX': 0.0, 'LARG': 4.1},
 'RN48ST': {'RI': 2.0, 'HEX': 0.0, 'LARG': 4.8},
 'WN65ST': {'RI': 2.0, 'HEX': 0.0, 'LARG': 6.5},
 'RBWB375-65ST': {'RI': 2.0, 'HEX': 0.0, 'LARG': 4.0},
 'CM35-43-50GMND': {'RI': 1.6, 'HEX': 2.0, 'LARG': 3.5},
 'CM30CCNB': {'RI': 1.4, 'HEX': 0.0, 'LARG': 3.0},
 'CM35NPNB': {'RI': 1.6, 'HEX': 2.25, 'LARG': 3.5},
 'CM43RPNB': {'RI': 2.0, 'HEX': 2.65, 'LARG': 4.3},
 'CM35-43-50DB': {'RI': 1.8, 'HEX': 1.9, 'LARG': 3.5},
 'CM35-40AT': {'RI': 1.6, 'HEX': 2.1, 'LARG': 3.5},
 'CM45-50AT': {'RI': 2.0, 'HEX': 2.5, 'LARG': 4.5},
 'CM375-42C1MI': {'RI': 1.8, 'HEX': 0.0, 'LARG': 3.75},
 '48MU': {'RI': 1.4, 'HEX': 0.0, 'LARG': 4.8}}

function calcularCompatibilidade(medidasUsuario, medidasComponente, tolerancia = 0.21) {
    let compatibilidade = 100;
    for (let categoria in medidasUsuario) {
        if (!(categoria in medidasComponente)) {
            continue;
        }

        let diff = Math.abs(medidasUsuario[categoria] - medidasComponente[categoria]);
        if (diff > tolerancia) {
            return 0;
        } else if (diff !== 0) {
            let penalidade = (diff / tolerancia) * 10;
            compatibilidade -= penalidade;
        }
    }
    return compatibilidade;
}

function encontrarComponentes(tipo, medidas, tolerancia = 0.21) {
    let dicionario;
    if (tipo === 'HE') {
        dicionario = dicionario_HE;
    } else if (tipo === 'HI') {
        dicionario = dicionario_HI;
    } else if (tipo === 'CM') {
        dicionario = dicionario_CM;
    } else {
        return [];
    }

    let resultados = [];
    for (let nome in dicionario) {
        let medidasComponente = dicionario[nome];
        let compatibilidade = calcularCompatibilidade(medidas, medidasComponente, tolerancia);
        if (compatibilidade > 0) {
            resultados.push({ nome, compatibilidade });
        }
    }

    resultados.sort((a, b) => b.compatibilidade - a.compatibilidade);
    return resultados;
}

