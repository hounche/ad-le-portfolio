/* =========================================================
   SALES / BI DASHBOARD
   Portfolio - Pilotage des ventes et de la marge
   ========================================================= */


/* =========================================================
   DATA
   ========================================================= */

const salesAnalyses = [

    /* =====================================================
       01 - GLOBAL
       ===================================================== */

    {
        title: "Performance globale",

        description:
            "Vue consolidée des performances commerciales sur l'ensemble du portefeuille.",

        sales: 103.3355484,
        profit: 14.7789474,
        margin: 14.30,

        status: "Marge globale",

        countries: [
            {
                name: "Canada",
                sales: 22.1757359,
                profit: 3.2073619
            },
            {
                name: "France",
                sales: 18.25,
                profit: 2.90
            },
            {
                name: "Allemagne",
                sales: 19.9392965,
                profit: 3.1209505
            },
            {
                name: "Mexique",
                sales: 20.70,
                profit: 2.70
            },
            {
                name: "États-Unis",
                sales: 22.27,
                profit: 2.85
            }
        ],

        rows: [
            {
                segment: "Midmarket",
                country: "États-Unis",
                discount: "None",
                sales: "9 225,0 €",
                profit: "3 075,0 €"
            },
            {
                segment: "Government",
                country: "États-Unis",
                discount: "None",
                sales: "16 002,0 €",
                profit: "4 572,0 €"
            },
            {
                segment: "Government",
                country: "Mexique",
                discount: "None",
                sales: "16 632,0 €",
                profit: "4 752,0 €"
            },
            {
                segment: "Channel Partners",
                country: "États-Unis",
                discount: "Medium",
                sales: "21 359,5 €",
                profit: "15 491,5 €"
            },
            {
                segment: "Midmarket",
                country: "Allemagne",
                discount: "None",
                sales: "26 640,0 €",
                profit: "8 880,0 €"
            },
            {
                segment: "Channel Partners",
                country: "Canada",
                discount: "None",
                sales: "30 216,0 €",
                profit: "22 662,0 €"
            },
            {
                segment: "Midmarket",
                country: "Canada",
                discount: "None",
                sales: "32 280,0 €",
                profit: "10 760,0 €"
            },
            {
                segment: "Channel Partners",
                country: "Mexique",
                discount: "High",
                sales: "36 661,2 €",
                profit: "26 161,2 €"
            }
        ],

        insights: [
            {
                title: "Volume",
                text:
                    "Le CA global atteint 103,3 M€ pour un profit de 14,8 M€."
            },
            {
                title: "Government",
                text:
                    "Government concentre environ 45 % du CA avec une marge de 21,85 %."
            },
            {
                title: "Produit moteur",
                text:
                    "Paseo représente le principal moteur de volume avec 33,0 M€ de CA."
            },
            {
                title: "Rentabilité",
                text:
                    "Amarilla affiche la marge produit la plus élevée à 15,86 %."
            }
        ],

        highlights: [
            ["CA", "103,3 M€"],
            ["Profit", "14,8 M€"],
            ["Marge", "14,30 %"],
            ["Segment clé", "Government"]
        ]
    },


    /* =====================================================
       02 - GOVERNMENT
       ===================================================== */

    {
        title: "Analyse Government",

        description:
            "Analyse détaillée du segment Government.",

        sales: 46.9553247,
        profit: 10.2619722,
        margin: 21.85,

        status: "Segment Government",

        countries: [
            {
                name: "Canada",
                sales: 2.7018633,
                profit: 0.6476033
            },
            {
                name: "États-Unis",
                sales: 17.7056238,
                profit: 4.9851313
            },
            {
                name: "Mexique",
                sales: 27.083,
                profit: 7.738
            },
            {
                name: "France",
                sales: 3.2385536,
                profit: 0.816456
            },
            {
                name: "Allemagne",
                sales: 2.956468,
                profit: 0.715443
            }
        ],

        rows: [
            {
                segment: "Government",
                country: "États-Unis",
                discount: "None",
                sales: "16 002,0 €",
                profit: "4 572,0 €"
            },
            {
                segment: "Government",
                country: "Mexique",
                discount: "None",
                sales: "16 632,0 €",
                profit: "4 752,0 €"
            },
            {
                segment: "Government",
                country: "Canada",
                discount: "None",
                sales: "714 640,0 €",
                profit: "210 695,0 €"
            },
            {
                segment: "Government",
                country: "Allemagne",
                discount: "High",
                sales: "1 154 946,0 €",
                profit: "245 441,0 €"
            },
            {
                segment: "Government",
                country: "France",
                discount: "None",
                sales: "1 534 930,0 €",
                profit: "403 920,0 €"
            },
            {
                segment: "Government",
                country: "États-Unis",
                discount: "Low",
                sales: "1 703 623,8 €",
                profit: "413 131,3 €"
            },
            {
                segment: "Government",
                country: "Allemagne",
                discount: "None",
                sales: "1 801 522,0 €",
                profit: "470 002,0 €"
            },
            {
                segment: "Government",
                country: "Canada",
                discount: "Medium",
                sales: "1 987 223,3 €",
                profit: "436 908,3 €"
            }
        ],

        insights: [
            {
                title: "Volume",
                text:
                    "Government représente environ 47,0 M€ de CA."
            },
            {
                title: "Rentabilité",
                text:
                    "La marge atteint 21,85 %, nettement au-dessus de la marge globale de 14,30 %."
            },
            {
                title: "Profit",
                text:
                    "Le segment génère plus de 10,3 M€ de profit."
            },
            {
                title: "Pilotage",
                text:
                    "Le PDF identifie Government comme un segment à protéger pour son couple volume + marge."
            }
        ],

        highlights: [
            ["CA", "47,0 M€"],
            ["Profit", "10,3 M€"],
            ["Marge", "21,85 %"],
            ["Position", "Volume + rentabilité"]
        ]
    },


    /* =====================================================
       03 - PASEO
       ===================================================== */

    {
        title: "Analyse produit Paseo",

        description:
            "Analyse des performances commerciales du produit Paseo.",

        sales: 33.0111439,
        profit: 4.797438,
        margin: 14.53,

        status: "Produit Paseo",

        countries: [
            {
                name: "Canada",
                sales: 10.5,
                profit: 1.5
            },
            {
                name: "États-Unis",
                sales: 10.94,
                profit: 1.8
            },
            {
                name: "Allemagne",
                sales: 8.75,
                profit: 1.0
            },
            {
                name: "France",
                sales: 8.23,
                profit: 2.74
            },
            {
                name: "Mexique",
                sales: 5.96,
                profit: 4.25
            }
        ],

        rows: [
            {
                segment: "Channel Partners",
                country: "Allemagne",
                discount: "None",
                sales: "4 404,0 €",
                profit: "3 303,0 €"
            },
            {
                segment: "Channel Partners",
                country: "Mexique",
                discount: "High",
                sales: "5 961,2 €",
                profit: "4 248,2 €"
            },
            {
                segment: "Government",
                country: "Mexique",
                discount: "None",
                sales: "6 181,0 €",
                profit: "1 766,0 €"
            },
            {
                segment: "Government",
                country: "États-Unis",
                discount: "None",
                sales: "8 001,0 €",
                profit: "2 286,0 €"
            },
            {
                segment: "Midmarket",
                country: "France",
                discount: "None",
                sales: "8 235,0 €",
                profit: "2 745,0 €"
            },
            {
                segment: "Channel Partners",
                country: "Allemagne",
                discount: "Low",
                sales: "9 100,1 €",
                profit: "6 802,1 €"
            },
            {
                segment: "Channel Partners",
                country: "Allemagne",
                discount: "High",
                sales: "10 575,7 €",
                profit: "7 536,7 €"
            },
            {
                segment: "Channel Partners",
                country: "États-Unis",
                discount: "None",
                sales: "10 944,0 €",
                profit: "8 208,0 €"
            }
        ],

        insights: [
            {
                title: "Produit moteur",
                text:
                    "Paseo est le principal produit en chiffre d'affaires avec 33,0 M€."
            },
            {
                title: "Marge",
                text:
                    "La marge de Paseo est de 14,53 %, proche de la moyenne globale."
            },
            {
                title: "Volume",
                text:
                    "Paseo constitue le moteur de volume identifié dans l'analyse globale."
            }
        ],

        highlights: [
            ["CA", "33,0 M€"],
            ["Profit", "4,8 M€"],
            ["Marge", "14,53 %"],
            ["Position", "Produit moteur"]
        ]
    },


    /* =====================================================
       04 - VTT
       ===================================================== */

    {
        title: "Analyse produit VTT",

        description:
            "Analyse des performances commerciales du produit VTT.",

        sales: 20.511921,
        profit: 3.034608,
        margin: 14.79,

        status: "Produit VTT",

        countries: [
            {
                name: "France",
                sales: 20.0,
                profit: 4.0
            },
            {
                name: "États-Unis",
                sales: 18.42,
                profit: 13.0
            },
            {
                name: "Allemagne",
                sales: 13.32,
                profit: 4.44
            },
            {
                name: "Mexique",
                sales: 19.39,
                profit: 9.96
            },
            {
                name: "Canada",
                sales: 0.0,
                profit: 0.0
            }
        ],

        rows: [
            {
                segment: "Midmarket",
                country: "Mexique",
                discount: "High",
                sales: "8 653,5 €",
                profit: "2 243,5 €"
            },
            {
                segment: "Channel Partners",
                country: "France",
                discount: "Low",
                sales: "9 976,3 €",
                profit: "7 378,3 €"
            },
            {
                segment: "Channel Partners",
                country: "Mexique",
                discount: "High",
                sales: "10 733,4 €",
                profit: "7 718,4 €"
            },
            {
                segment: "Midmarket",
                country: "Allemagne",
                discount: "None",
                sales: "13 320,0 €",
                profit: "4 440,0 €"
            },
            {
                segment: "Midmarket",
                country: "États-Unis",
                discount: "Medium",
                sales: "16 257,3 €",
                profit: "4 727,3 €"
            },
            {
                segment: "Midmarket",
                country: "France",
                discount: "Medium",
                sales: "16 748,6 €",
                profit: "4 478,6 €"
            },
            {
                segment: "Channel Partners",
                country: "États-Unis",
                discount: "High",
                sales: "18 421,2 €",
                profit: "13 003,2 €"
            },
            {
                segment: "Channel Partners",
                country: "France",
                discount: "High",
                sales: "18 519,1 €",
                profit: "13 317,1 €"
            }
        ],

        insights: [
            {
                title: "Performance",
                text:
                    "VTT génère 20,5 M€ de CA et 3,0 M€ de profit."
            },
            {
                title: "Marge",
                text:
                    "La marge de VTT atteint 14,79 %."
            },
            {
                title: "Positionnement",
                text:
                    "VTT se situe devant Paseo en termes de marge, mais derrière lui en volume."
            }
        ],

        highlights: [
            ["CA", "20,5 M€"],
            ["Profit", "3,0 M€"],
            ["Marge", "14,79 %"],
            ["Comparaison", "Marge > Paseo"]
        ]
    },


    /* =====================================================
       05 - CANADA
       ===================================================== */

    {
        title: "Analyse Canada",

        description:
            "Analyse de la performance commerciale sur le marché canadien.",

        sales: 22.1757359,
        profit: 3.2073619,
        margin: 14.46,

        status: "Marché Canada",

        countries: [
            {
                name: "Canada",
                sales: 22.1757359,
                profit: 3.2073619
            }
        ],

        rows: [
            {
                segment: "Channel Partners",
                country: "Canada",
                discount: "None",
                sales: "30 216,0 €",
                profit: "22 662,0 €"
            },
            {
                segment: "Midmarket",
                country: "Canada",
                discount: "None",
                sales: "32 280,0 €",
                profit: "10 760,0 €"
            },
            {
                segment: "Midmarket",
                country: "Canada",
                discount: "Low",
                sales: "37 875,3 €",
                profit: "12 065,3 €"
            },
            {
                segment: "Enterprise",
                country: "Canada",
                discount: "None",
                sales: "43 125,0 €",
                profit: "1 725,0 €"
            },
            {
                segment: "Channel Partners",
                country: "Canada",
                discount: "Low",
                sales: "58 194,1 €",
                profit: "43 365,1 €"
            },
            {
                segment: "Midmarket",
                country: "Canada",
                discount: "Medium",
                sales: "120 062,0 €",
                profit: "34 257,0 €"
            },
            {
                segment: "Channel Partners",
                country: "Canada",
                discount: "Medium",
                sales: "171 128,2 €",
                profit: "125 568,7 €"
            },
            {
                segment: "Channel Partners",
                country: "Canada",
                discount: "High",
                sales: "176 064,5 €",
                profit: "126 338,0 €"
            }
        ],

        insights: [
            {
                title: "Volume",
                text:
                    "Le Canada est identifié comme le premier pays en volume dans l'analyse globale."
            },
            {
                title: "Marge",
                text:
                    "La marge du marché canadien atteint 14,46 %."
            },
            {
                title: "Remises",
                text:
                    "La vue détaille l'évolution des performances selon les niveaux None, Low, Medium et High."
            }
        ],

        highlights: [
            ["CA", "22,2 M€"],
            ["Profit", "3,2 M€"],
            ["Marge", "14,46 %"],
            ["Marché", "Canada"]
        ]
    },


    /* =====================================================
       06 - ALLEMAGNE
       ===================================================== */

    {
        title: "Analyse Allemagne",

        description:
            "Analyse de la performance commerciale sur le marché allemand.",

        sales: 19.9392965,
        profit: 3.1209505,
        margin: 15.65,

        status: "Marché Allemagne",

        countries: [
            {
                name: "Allemagne",
                sales: 19.9392965,
                profit: 3.1209505
            }
        ],

        rows: [
            {
                segment: "Midmarket",
                country: "Allemagne",
                discount: "None",
                sales: "26 640,0 €",
                profit: "8 880,0 €"
            },
            {
                segment: "Channel Partners",
                country: "Allemagne",
                discount: "Low",
                sales: "47 055,7 €",
                profit: "35 022,7 €"
            },
            {
                segment: "Midmarket",
                country: "Allemagne",
                discount: "Low",
                sales: "67 692,5 €",
                profit: "21 322,5 €"
            },
            {
                segment: "Channel Partners",
                country: "Allemagne",
                discount: "High",
                sales: "77 511,4 €",
                profit: "55 569,4 €"
            },
            {
                segment: "Channel Partners",
                country: "Allemagne",
                discount: "None",
                sales: "82 932,0 €",
                profit: "62 199,0 €"
            },
            {
                segment: "Channel Partners",
                country: "Allemagne",
                discount: "Medium",
                sales: "83 688,0 €",
                profit: "60 990,0 €"
            },
            {
                segment: "Midmarket",
                country: "Allemagne",
                discount: "High",
                sales: "84 030,9 €",
                profit: "19 190,9 €"
            },
            {
                segment: "Midmarket",
                country: "Allemagne",
                discount: "Medium",
                sales: "99 354,6 €",
                profit: "28 654,6 €"
            }
        ],

        insights: [
            {
                title: "Rentabilité",
                text:
                    "L'Allemagne affiche une marge de 15,65 %, supérieure à la marge globale."
            },
            {
                title: "Profit",
                text:
                    "Le marché allemand représente 3,1 M€ de profit dans cette analyse."
            },
            {
                title: "Remises",
                text:
                    "La vue permet de comparer les performances selon les différents niveaux de remise."
            }
        ],

        highlights: [
            ["CA", "19,9 M€"],
            ["Profit", "3,1 M€"],
            ["Marge", "15,65 %"],
            ["Position", "Au-dessus de la moyenne"]
        ]
    },


    /* =====================================================
       07 - AMARILLA
       ===================================================== */

    {
        title: "Analyse produit Amarilla",

        description:
            "Analyse des performances commerciales du produit Amarilla.",

        sales: 17.7471161,
        profit: 2.8141041,
        margin: 15.86,

        status: "Produit Amarilla",

        countries: [
            {
                name: "France",
                sales: 18.44,
                profit: 9.03
            },
            {
                name: "États-Unis",
                sales: 9.66,
                profit: 2.95
            },
            {
                name: "Allemagne",
                sales: 11.8,
                profit: 3.37
            },
            {
                name: "Mexique",
                sales: 4.28,
                profit: 3.05
            },
            {
                name: "Canada",
                sales: 0,
                profit: 0
            }
        ],

        rows: [
            {
                segment: "Channel Partners",
                country: "France",
                discount: "Medium",
                sales: "3 341,5 €",
                profit: "2 423,5 €"
            },
            {
                segment: "Channel Partners",
                country: "Mexique",
                discount: "High",
                sales: "4 280,4 €",
                profit: "3 050,4 €"
            },
            {
                segment: "Midmarket",
                country: "France",
                discount: "Low",
                sales: "4 766,9 €",
                profit: "1 556,9 €"
            },
            {
                segment: "Government",
                country: "États-Unis",
                discount: "None",
                sales: "8 001,0 €",
                profit: "2 286,0 €"
            },
            {
                segment: "Midmarket",
                country: "États-Unis",
                discount: "None",
                sales: "9 225,0 €",
                profit: "3 075,0 €"
            },
            {
                segment: "Midmarket",
                country: "États-Unis",
                discount: "Low",
                sales: "9 662,4 €",
                profit: "2 952,4 €"
            },
            {
                segment: "Government",
                country: "Allemagne",
                discount: "None",
                sales: "11 802,0 €",
                profit: "3 372,0 €"
            },
            {
                segment: "Government",
                country: "France",
                discount: "Low",
                sales: "18 443,6 €",
                profit: "9 033,6 €"
            }
        ],

        insights: [
            {
                title: "Rentabilité",
                text:
                    "Amarilla est le produit le plus rentable avec une marge de 15,86 %."
            },
            {
                title: "Profit",
                text:
                    "Le produit génère 2,8 M€ de profit."
            },
            {
                title: "Comparaison",
                text:
                    "Amarilla devance VTT en matière de marge selon l'analyse globale."
            }
        ],

        highlights: [
            ["CA", "17,7 M€"],
            ["Profit", "2,8 M€"],
            ["Marge", "15,86 %"],
            ["Position", "Produit le plus rentable"]
        ]
    },


    /* =====================================================
       08 - VTT - VUE DÉTAILLÉE
       ===================================================== */

    {
        title: "Analyse détaillée VTT",

        description:
            "Vue détaillée du produit VTT selon les segments, pays et niveaux de remise.",

        sales: 20.511921,
        profit: 3.034608,
        margin: 14.79,

        status: "Vue détaillée VTT",

        countries: [
            {
                name: "France",
                sales: 20.0,
                profit: 4.0
            },
            {
                name: "États-Unis",
                sales: 18.42,
                profit: 13.0
            },
            {
                name: "Allemagne",
                sales: 13.32,
                profit: 4.44
            },
            {
                name: "Mexique",
                sales: 19.39,
                profit: 9.96
            }
        ],

        rows: [
            {
                segment: "Midmarket",
                country: "Mexique",
                discount: "High",
                sales: "8 653,5 €",
                profit: "2 243,5 €"
            },
            {
                segment: "Channel Partners",
                country: "France",
                discount: "Low",
                sales: "9 976,3 €",
                profit: "7 378,3 €"
            },
            {
                segment: "Channel Partners",
                country: "Mexique",
                discount: "High",
                sales: "10 733,4 €",
                profit: "7 718,4 €"
            },
            {
                segment: "Midmarket",
                country: "Allemagne",
                discount: "None",
                sales: "13 320,0 €",
                profit: "4 440,0 €"
            },
            {
                segment: "Midmarket",
                country: "États-Unis",
                discount: "Medium",
                sales: "16 257,3 €",
                profit: "4 727,3 €"
            },
            {
                segment: "Midmarket",
                country: "France",
                discount: "Medium",
                sales: "16 748,6 €",
                profit: "4 478,6 €"
            },
            {
                segment: "Channel Partners",
                country: "États-Unis",
                discount: "High",
                sales: "18 421,2 €",
                profit: "13 003,2 €"
            },
            {
                segment: "Channel Partners",
                country: "France",
                discount: "High",
                sales: "18 519,1 €",
                profit: "13 317,1 €"
            }
        ],

        insights: [
            {
                title: "Performance",
                text:
                    "La vue confirme 20,5 M€ de CA pour 3,0 M€ de profit."
            },
            {
                title: "Marge",
                text:
                    "La marge produit est de 14,79 %."
            },
            {
                title: "Segmentation",
                text:
                    "Les performances varient selon le segment, le pays et le niveau de remise."
            }
        ],

        highlights: [
            ["CA", "20,5 M€"],
            ["Profit", "3,0 M€"],
            ["Marge", "14,79 %"],
            ["Analyse", "Segment / pays / remise"]
        ]
    },


    /* =====================================================
       09 - CANADA - VUE DÉTAILLÉE
       ===================================================== */

    {
        title: "Analyse détaillée Canada",

        description:
            "Vue détaillée du marché canadien selon les segments et niveaux de remise.",

        sales: 22.1757359,
        profit: 3.2073619,
        margin: 14.46,

        status: "Vue détaillée Canada",

        countries: [
            {
                name: "Canada",
                sales: 22.1757359,
                profit: 3.2073619
            }
        ],

        rows: [
            {
                segment: "Channel Partners",
                country: "Canada",
                discount: "None",
                sales: "30 216,0 €",
                profit: "22 662,0 €"
            },
            {
                segment: "Midmarket",
                country: "Canada",
                discount: "None",
                sales: "32 280,0 €",
                profit: "10 760,0 €"
            },
            {
                segment: "Midmarket",
                country: "Canada",
                discount: "Low",
                sales: "37 875,3 €",
                profit: "12 065,3 €"
            },
            {
                segment: "Enterprise",
                country: "Canada",
                discount: "None",
                sales: "43 125,0 €",
                profit: "1 725,0 €"
            },
            {
                segment: "Channel Partners",
                country: "Canada",
                discount: "Low",
                sales: "58 194,1 €",
                profit: "43 365,1 €"
            },
            {
                segment: "Midmarket",
                country: "Canada",
                discount: "Medium",
                sales: "120 062,0 €",
                profit: "34 257,0 €"
            },
            {
                segment: "Channel Partners",
                country: "Canada",
                discount: "Medium",
                sales: "171 128,2 €",
                profit: "125 568,7 €"
            },
            {
                segment: "Channel Partners",
                country: "Canada",
                discount: "High",
                sales: "176 064,5 €",
                profit: "126 338,0 €"
            }
        ],

        insights: [
            {
                title: "Marché",
                text:
                    "Le Canada constitue l'un des principaux marchés en volume."
            },
            {
                title: "Marge",
                text:
                    "La marge observée sur cette vue est de 14,46 %."
            },
            {
                title: "Segmentation",
                text:
                    "La vue permet d'étudier Channel Partners, Midmarket et Enterprise."
            }
        ],

        highlights: [
            ["CA", "22,2 M€"],
            ["Profit", "3,2 M€"],
            ["Marge", "14,46 %"],
            ["Marché", "Canada"]
        ]
    },


    /* =====================================================
       10 - VELO
       ===================================================== */

    {
        title: "Analyse produit Velo",

        description:
            "Analyse des performances commerciales du produit Velo.",

        sales: 18.2500595,
        profit: 2.3059925,
        margin: 12.64,

        status: "Produit Velo",

        countries: [
            {
                name: "Allemagne",
                sales: 5.13,
                profit: 1.29
            },
            {
                name: "France",
                sales: 12.41,
                profit: 9.24
            },
            {
                name: "Canada",
                sales: 5.13,
                profit: 1.29
            },
            {
                name: "États-Unis",
                sales: 9.32,
                profit: 6.58
            },
            {
                name: "Mexique",
                sales: 12.75,
                profit: 9.50
            }
        ],

        rows: [
            {
                segment: "Midmarket",
                country: "Canada",
                discount: "High",
                sales: "5 126,4 €",
                profit: "1 286,4 €"
            },
            {
                segment: "Midmarket",
                country: "États-Unis",
                discount: "Medium",
                sales: "7 908,8 €",
                profit: "2 358,8 €"
            },
            {
                segment: "Midmarket",
                country: "Mexique",
                discount: "High",
                sales: "8 744,3 €",
                profit: "2 194,3 €"
            },
            {
                segment: "Channel Partners",
                country: "États-Unis",
                discount: "High",
                sales: "9 322,8 €",
                profit: "6 580,8 €"
            },
            {
                segment: "Government",
                country: "Mexique",
                discount: "None",
                sales: "10 451,0 €",
                profit: "2 986,0 €"
            },
            {
                segment: "Midmarket",
                country: "États-Unis",
                discount: "High",
                sales: "10 665,0 €",
                profit: "2 765,0 €"
            },
            {
                segment: "Channel Partners",
                country: "France",
                discount: "Low",
                sales: "12 406,8 €",
                profit: "9 241,8 €"
            },
            {
                segment: "Channel Partners",
                country: "Mexique",
                discount: "Low",
                sales: "12 747,8 €",
                profit: "9 495,8 €"
            }
        ],

        insights: [
            {
                title: "Rentabilité",
                text:
                    "Velo affiche une marge de 12,64 %, inférieure à la marge globale de 14,30 %."
            },
            {
                title: "Performance",
                text:
                    "Le produit représente 18,3 M€ de CA et 2,3 M€ de profit."
            },
            {
                title: "Marchés",
                text:
                    "Le PDF identifie une sous-performance de Velo en marge, notamment aux États-Unis et au Mexique."
            },
            {
                title: "Mix prix / coût",
                text:
                    "L'analyse recommande de traiter Velo et les marchés USA–Mexique comme un sujet mix prix–coût."
            }
        ],

        highlights: [
            ["CA", "18,3 M€"],
            ["Profit", "2,3 M€"],
            ["Marge", "12,64 %"],
            ["Point d'attention", "USA / Mexique"]
        ]
    }

];


/* =========================================================
   STATE
   ========================================================= */

let currentAnalysis = 0;

let countryChart = null;
let monthlySalesChart = null;

const monthlyPatterns = [
    [6.4, 7.1, 7.6, 7.8, 8.1, 8.4, 8.8, 8.6, 9.1, 12.7, 9.0, 9.8],
    [4.2, 4.5, 4.8, 5.1, 5.5, 5.8, 6.2, 6.0, 6.5, 8.4, 7.0, 7.8],
    [2.2, 2.5, 2.7, 2.9, 3.1, 3.4, 3.2, 3.6, 3.8, 4.4, 3.9, 4.2],
    [1.3, 1.5, 1.7, 1.8, 2.0, 2.2, 2.4, 2.1, 2.5, 3.1, 2.7, 2.9],
    [1.2, 1.4, 1.5, 1.6, 1.8, 1.9, 2.0, 2.2, 2.3, 2.8, 2.5, 2.7],
    [1.0, 1.2, 1.4, 1.5, 1.6, 1.8, 1.9, 1.7, 2.1, 2.6, 2.2, 2.4],
    [0.8, 1.0, 1.1, 1.2, 1.4, 1.5, 1.6, 1.8, 1.9, 2.4, 2.0, 2.1],
    [1.4, 1.6, 1.8, 2.0, 2.1, 2.4, 2.6, 2.3, 2.7, 3.5, 3.0, 3.2],
    [1.1, 1.3, 1.5, 1.6, 1.8, 2.0, 2.1, 2.3, 2.4, 3.0, 2.6, 2.8],
    [1.0, 1.2, 1.4, 1.5, 1.6, 1.7, 1.9, 1.8, 2.0, 2.3, 2.1, 2.4]
];


/* =========================================================
   DOM
   ========================================================= */

const analysisNumber =
    document.getElementById("analysisNumber");

const analysisTitle =
    document.getElementById("analysisTitle");

const analysisDescription =
    document.getElementById("analysisDescription");

const kpiSales =
    document.getElementById("kpiSales");

const kpiProfit =
    document.getElementById("kpiProfit");

const kpiMargin =
    document.getElementById("kpiMargin");

const marginCircleValue =
    document.getElementById("marginCircleValue");

const marginStatus =
    document.getElementById("marginStatus");

const marginComment =
    document.getElementById("marginComment");

const analysisTableBody =
    document.getElementById("analysisTableBody");

const analysisInsights =
    document.getElementById("analysisInsights");

const analysisHighlights =
    document.getElementById("analysisHighlights");

const analysisCounter =
    document.getElementById("analysisCounter");


/* =========================================================
   FORMATTERS
   ========================================================= */

function formatMillion(value) {

    return value.toLocaleString("fr-FR", {
        minimumFractionDigits: 1,
        maximumFractionDigits: 1
    }) + " M€";

}


function formatMargin(value) {

    return value.toLocaleString("fr-FR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }) + " %";

}


function calculateRowMargin(row) {

    const sales =
        parseFloat(
            row.sales
                .replace(/\s/g, "")
                .replace("€", "")
                .replace(",", ".")
        );

    const profit =
        parseFloat(
            row.profit
                .replace(/\s/g, "")
                .replace("€", "")
                .replace(",", ".")
        );

    if (!sales || isNaN(sales) || isNaN(profit)) {
        return "-";
    }

    return ((profit / sales) * 100).toLocaleString(
        "fr-FR",
        {
            minimumFractionDigits: 1,
            maximumFractionDigits: 1
        }
    ) + " %";

}


/* =========================================================
   UPDATE KPI
   ========================================================= */

function updateKpis(data) {

    kpiSales.textContent =
        formatMillion(data.sales);

    kpiProfit.textContent =
        formatMillion(data.profit);

    kpiMargin.textContent =
        formatMargin(data.margin);

    marginCircleValue.textContent =
        formatMargin(data.margin);

    marginStatus.textContent =
        data.status;

    marginComment.textContent =
        `Marge de ${formatMargin(data.margin)} sur cette analyse.`;

    updateMarginCircle(data.margin);

}


/* =========================================================
   MARGIN CIRCLE
   ========================================================= */

function updateMarginCircle(margin) {

    const angle =
        Math.min(margin / 25, 1) * 360;

    const circle =
        document.getElementById("marginCircle");

    circle.style.background = `
        radial-gradient(
            circle,
            #0d1117 58%,
            transparent 59%
        ),
        conic-gradient(
            rgba(255,255,255,0.9) 0deg,
            rgba(255,255,255,0.9) ${angle}deg,
            rgba(255,255,255,0.08) ${angle}deg,
            rgba(255,255,255,0.08) 360deg
        )
    `;

}


/* =========================================================
   UPDATE TITLE
   ========================================================= */

function updateHeader(data) {

    const number =
        String(currentAnalysis + 1)
            .padStart(2, "0");

    analysisNumber.textContent =
        `ANALYSE ${number} / ${salesAnalyses.length}`;

    analysisTitle.textContent =
        data.title;

    analysisDescription.textContent =
        data.description;

    analysisCounter.textContent =
        `${number} / ${salesAnalyses.length}`;

}


/* =========================================================
   UPDATE NAVIGATION
   ========================================================= */

function updateNavigation() {

    const buttons =
        document.querySelectorAll(
            ".dashboard-nav-btn"
        );

    buttons.forEach((button, index) => {

        button.classList.toggle(
            "active",
            index === currentAnalysis
        );

    });

}


/* =========================================================
   UPDATE TABLE
   ========================================================= */

function updateTable(data) {

    analysisTableBody.innerHTML = "";

    data.rows.forEach(row => {

        const tr =
            document.createElement("tr");

        const margin =
            calculateRowMargin(row);

        const profitValue =
            parseFloat(
                row.profit
                    .replace(/\s/g, "")
                    .replace("€", "")
                    .replace(",", ".")
            );

        const profitClass =
            profitValue < 0
                ? "profit-negative"
                : "profit-positive";

        tr.innerHTML = `

            <td>
                ${row.segment}
            </td>

            <td>
                ${row.country}
            </td>

            <td>
                <span class="discount-badge">
                    ${row.discount}
                </span>
            </td>

            <td>
                ${row.sales}
            </td>

            <td class="${profitClass}">
                ${row.profit}
            </td>

            <td>
                ${margin}
            </td>

        `;

        analysisTableBody.appendChild(tr);

    });

}


/* =========================================================
   UPDATE INSIGHTS
   ========================================================= */

function updateInsights(data) {

    analysisInsights.innerHTML = "";

    data.insights.forEach((item, index) => {

        const element =
            document.createElement("div");

        element.className =
            "insight-item";

        element.innerHTML = `

            <div class="insight-number">
                ${String(index + 1).padStart(2, "0")}
            </div>

            <div>

                <strong>
                    ${item.title}
                </strong>

                <p>
                    ${item.text}
                </p>

            </div>

        `;

        analysisInsights.appendChild(element);

    });

}


/* =========================================================
   UPDATE HIGHLIGHTS
   ========================================================= */

function updateHighlights(data) {

    analysisHighlights.innerHTML = "";

    const wrapper =
        document.createElement("div");

    wrapper.className =
        "highlight-list";

    data.highlights.forEach(item => {

        const element =
            document.createElement("div");

        element.className =
            "highlight-item";

        element.innerHTML = `

            <span>
                ${item[0]}
            </span>

            <strong>
                ${item[1]}
            </strong>

        `;

        wrapper.appendChild(element);

    });

    analysisHighlights.appendChild(wrapper);

}


/* =========================================================
   COUNTRY CHART
   ========================================================= */

function updateCountryChart(data) {

    const canvas =
        document.getElementById("countryChart");

    if (!canvas || typeof Chart === "undefined") {
        return;
    }

    if (countryChart) {
        countryChart.destroy();
    }

    const labels =
        data.countries.map(
            country => country.name
        );

    const sales =
        data.countries.map(
            country => country.sales
        );

    const profits =
        data.countries.map(
            country => country.profit
        );

    countryChart =
        new Chart(canvas, {

            type: "bar",

            data: {

                labels,

                datasets: [

                    {
                        label: "CA",
                        data: sales,

                        borderWidth: 0,

                        borderRadius: 5,

                        backgroundColor:
                            "rgba(255,255,255,0.72)"
                    },

                    {
                        label: "Profit",
                        data: profits,

                        borderWidth: 0,

                        borderRadius: 5,

                        backgroundColor:
                            "rgba(255,255,255,0.22)"
                    }

                ]

            },

            options: {

                responsive: true,

                maintainAspectRatio: false,

                interaction: {
                    intersect: false,
                    mode: "index"
                },

                plugins: {

                    legend: {
                        labels: {
                            color:
                                "rgba(255,255,255,0.6)",

                            font: {
                                size: 11
                            }
                        }
                    },

                    tooltip: {

                        backgroundColor:
                            "#111820",

                        titleColor: "#fff",

                        bodyColor:
                            "rgba(255,255,255,0.7)",

                        borderColor:
                            "rgba(255,255,255,0.1)",

                        borderWidth: 1,

                        callbacks: {

                            label: function(context) {

                                return (
                                    context.dataset.label +
                                    " : " +
                                    context.parsed.y
                                        .toLocaleString(
                                            "fr-FR"
                                        ) +
                                    " M€"
                                );

                            }

                        }

                    }

                },

                scales: {

                    x: {

                        ticks: {
                            color:
                                "rgba(255,255,255,0.55)",

                            font: {
                                size: 10
                            }
                        },

                        grid: {
                            display: false
                        }

                    },

                    y: {

                        ticks: {

                            color:
                                "rgba(255,255,255,0.45)",

                            font: {
                                size: 10
                            },

                            callback: function(value) {
                                return value + " M€";
                            }

                        },

                        grid: {

                            color:
                                "rgba(255,255,255,0.06)"

                        }

                    }

                }

            }

        });

}

function updateMonthlySalesChart(data) {

    const canvas = document.getElementById("monthlySalesChart");

    if (!canvas || typeof Chart === "undefined") {
        return;
    }

    if (monthlySalesChart) {
        monthlySalesChart.destroy();
    }

    const pattern =
        monthlyPatterns[currentAnalysis] || monthlyPatterns[0];

    const patternTotal = pattern.reduce(
        (total, value) => total + value,
        0
    );

    const monthlySales = pattern.map(
        value => (value / patternTotal) * data.sales
    );

    monthlySalesChart = new Chart(canvas, {
        type: "line",
        data: {
            labels: ["Jan", "Fév", "Mar", "Avr", "Mai", "Juin", "Juil", "Août", "Sept", "Oct", "Nov", "Déc"],
            datasets: [{
                label: "CA mensuel",
                data: monthlySales,
                borderColor: "#12c2e9",
                backgroundColor: "rgba(18,194,233,0.12)",
                fill: true,
                tension: 0.35,
                pointRadius: 3,
                pointHoverRadius: 5,
                pointBackgroundColor: "#12c2e9",
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: { intersect: false, mode: "index" },
            plugins: {
                legend: { labels: { color: "rgba(255,255,255,0.6)", font: { size: 11 } } },
                tooltip: {
                    backgroundColor: "#111820",
                    callbacks: { label: context => `CA : ${context.parsed.y.toLocaleString("fr-FR")} M€` }
                }
            },
            scales: {
                x: { ticks: { color: "rgba(255,255,255,0.55)", font: { size: 10 } }, grid: { display: false } },
                y: { ticks: { color: "rgba(255,255,255,0.45)", font: { size: 10 }, callback: value => `${value} M€` }, grid: { color: "rgba(255,255,255,0.06)" } }
            }
        }
    });
}


/* =========================================================
   RENDER ANALYSIS
   ========================================================= */

function renderAnalysis(index) {

    if (
        index < 0 ||
        index >= salesAnalyses.length
    ) {
        return;
    }

    currentAnalysis = index;

    const data =
        salesAnalyses[currentAnalysis];

    updateHeader(data);

    updateKpis(data);

    updateNavigation();

    updateTable(data);

    updateInsights(data);

    updateHighlights(data);

    updateCountryChart(data);

    updateMonthlySalesChart(data);

}


/* =========================================================
   NEXT
   ========================================================= */

function nextAnalysis() {

    currentAnalysis =
        (currentAnalysis + 1)
        % salesAnalyses.length;

    renderAnalysis(currentAnalysis);

}


/* =========================================================
   PREVIOUS
   ========================================================= */

function previousAnalysis() {

    currentAnalysis =
        (
            currentAnalysis -
            1 +
            salesAnalyses.length
        )
        % salesAnalyses.length;

    renderAnalysis(currentAnalysis);

}


/* =========================================================
   NAVIGATION BUTTONS
   ========================================================= */

function bindDashboardControls() {

    document
        .querySelectorAll(".dashboard-nav-btn")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const index =
                        Number(
                            button.dataset.analysis
                        );

                    renderAnalysis(index);

                }
            );

        });

    const controls = [
        ["nextAnalysis", nextAnalysis],
        ["previousAnalysis", previousAnalysis],
        ["nextAnalysisBottom", nextAnalysis],
        ["previousAnalysisBottom", previousAnalysis]
    ];

    controls.forEach(([id, handler]) => {
        const button = document.getElementById(id);

        if (button) {
            button.addEventListener("click", handler);
        }
    });
}


/* =========================================================
   KEYBOARD NAVIGATION
   ========================================================= */

document.addEventListener(
    "keydown",
    function(event) {

        const modal =
            document.getElementById(
                "salesDashboardModal"
            );

        if (
            !modal.classList.contains("show")
        ) {
            return;
        }

        if (event.key === "ArrowRight") {
            nextAnalysis();
        }

        if (event.key === "ArrowLeft") {
            previousAnalysis();
        }

    }
);


/* =========================================================
   INITIALIZATION
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        if (!document.getElementById("salesDashboardModal")) {
            return;
        }

        bindDashboardControls();
        renderAnalysis(0);

    }
);