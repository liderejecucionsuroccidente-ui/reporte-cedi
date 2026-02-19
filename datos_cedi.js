const data_cedi = {
    config: {
        last_update: "2026-02-19",
        moneda: "COP"
    },
    labels: ['Dic 2024', 'Ene 2025', 'Dic 2025', 'Ene 2026'],
    
    // Datos segmentados por Canal (Fuente: Tabla Almacenamiento y Transporte Hoja 1)
    tradicional: {
        posiciones: [1742, 607, 1515, 563],
        almacenamiento_fact: [102916418, 35860666, 98520360, 35012860],
        transporte_fact: [82485131, 69671000, 225685382, 37661254]
    },
    moderno: {
        posiciones: [1015, 175, 249, 56],
        almacenamiento_fact: [60011598, 10362806, 15457684, 3468993],
        transporte_fact: [63078819, 11356591, 45111742, 44147117]
    },

    // KPIs Calculados Automáticamente para la vista Gerencial
    kpis: {
        transporte: {
            variacion_tradicional_YoY: "+173.6%", // Dic 24 vs Dic 25
            variacion_moderno_MoM: "+288.7%"    // Dic 25 vs Ene 26
        },
        eficiencia: {
            ocupacion_total_enero: 619 // 563 (Trad) + 56 (Mod)
        }
    }
};