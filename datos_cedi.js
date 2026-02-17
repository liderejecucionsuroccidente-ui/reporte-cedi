const data_cedi = {
    config: {
        meses_disponibles: ["Diciembre", "Enero"],
        meses_nombres: ["Diciembre", "Enero", "Diciembre", "Enero"]
    },
    labels: ['Dic 2024', 'Ene 2025', 'Dic 2025', 'Ene 2026'],
    s1: { 
        s: [162928016, 46223472, 113978044, 38481853], p: [2757, 782, 1764, 619],
        t: [145563950, 81027591, 270797124, 81808371], d: [1450, 810, 2700, 818]
    },
    s2: { 
        s: [60011598, 10362806, 15457684, 3468993], p: [1015, 175, 249, 56],
        t: [63078819, 11356591, 45111742, 44147117], d: [630, 113, 451, 441]
    },
    s3: { 
        s: [102916418, 35860666, 98520360, 35012860], p: [1742, 607, 1515, 563],
        t: [82485131, 69671000, 225685382, 37661254], d: [824, 696, 2256, 376]
    },
    kpis: {
        s1: { s: { mom: -66.2, yoy: -16.7, bim: -27.1 }, t: { mom: -69.8, yoy: 1.0, bim: 55.6 } },
        s2: { s: { mom: -77.5, yoy: -66.5, bim: -73.1 }, t: { mom: -2.1, yoy: 288.7, bim: 19.5 } },
        s3: { s: { mom: -64.4, yoy: -2.4, bim: -3.6 }, t: { mom: -83.3, yoy: -45.9, bim: 73.1 } }
    },
    aging: {
        ranges: ['0-1 M', '1-3 M', '3-6 M', '6-9 M', '>9 M'],
        mod: { 
            v: [912279374, 143764796, 737315843, 292886357, 53490473], 
            q: [2909, 8168, 7167, 19585, 16186], 
            // OBSERVACIONES ACTUALIZADAS DESDE EXCEL
            o: ['Inventario Sano', 'Rotación Estándar', 'Analizar Descuentos', 'Producto Próximo a Vencer', 'Baja Prioridad / Obsoleto'], 
            imgs: ['m1.jpg', 'm2.jpg', 'm3.jpg', 'm4.jpg', 'm5.jpg'] 
        },
        trad: { 
            v: [224673891, 1012707863, 380197897, 1244371230, 848376251], 
            q: [1204, 137626, 393381, 361449, 89664], 
            // OBSERVACIONES ACTUALIZADAS DESDE EXCEL
            o: ['Abastecimiento Full', 'Alerta Stock Alto', 'Salida Lenta', 'Bloqueo por Antigüedad', 'Remate Necesario'], 
            imgs: ['t1.jpg', 't2.jpg', 't3.jpg', 't4.jpg', 't5.jpg'] 
        }
    }
};