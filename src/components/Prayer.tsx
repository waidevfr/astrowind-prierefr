interface Prayer {
  name: PrayerName;
  time: string;
  rakaatNumber: 1 | 2 | 3 | 4;
  type: 'FARIDA' | 'SUNNA MUAKADA' | 'SUNNA';
  rakaat: Rakaat[]
}

interface Rakaat {
    rank: 1 | 2 | 3 | 4;
    step: RakaatStep[]
}

interface RakaatStep {
    bodyPosition: BodyPosition
    prayerPhase: PrayerPhase
    bodyMove: Movement
    wordToSay: toSayInPrayer
}

const FAJR: Prayer = {
    name: PrayerName.,

}

const OBLIGATORY_PRAYERS = []

export const PRAYERS: Prayer[]  = [{rakaat: [{}]}]

enum PrayerPhase {
    Entree = "Entrée",
    Recitation = "Récitation",
    Inclinaison = "Inclinaison",
    LeveeInclinaison = "Levée de l'inclinaison",
    Prosternation = "Prosternation",
    AssisEntreProsternations = "Position assise entre deux prosternations",
    AssisAvantSortie = "Position assise avant la sortie",
    Sortie = "Sortie"
}

enum BodyPosition {
    Debout = "Debout",
    Assis = "Assis",
    Incline = "Incliné",
    Prosterne = "Prosterné"
}

enum Movement {
    LeverLesMains = "Lever les mains",
    CroiserLesBras = "Croiser les bras",
    SeBaisserPourSIncliner = "Se baisser pour s'incliner",
    SeBaisserPourSeProsterner = "Se baisser pour se prosterner",
    PlacerLesBrasTendusSurLesGenoux = "Placer les bras tendus sur les genoux",
    TenirSonDosDroit = "Tenir son dos droit",
    SeRedresser = "Se redresser",
    SAsseoirApresUneProsternation = "S'asseoir après une prosternation",
    LeverLIndexDroitEtLePlacerSurLeGenouDroit = "Lever l'index droit et le placer sur le genou droit",
    PlacerSaMainGaucheSurSonGenou = "Placer sa main gauche sur son genou",
    TournerLaTeteDroite = "Tourner la tête (droite)",
    TournerLaTeteGauche = "Tourner la tête (gauche)"
}

enum toSayInPrayer {
    Takbir = "Takbir",
    Isti3adha = "Isti3adha",
    Basmala = "Basmala",
    Iftihtah = "Iftihtah",
    Fatiha = "Fatiha",
    SunnaSourate = "Sunna Sourate",
    SoubhanaRabiAlAdhim = "Soubhana Rabi al Adhim",
    SoubhanaRabiAlAlaa = "Soubhana Rabi Al A'laa",
    SunnaRuku = "Sunna Ruku'",
    Sami3AllahLimanHamidahu = "Sami3 Allah liman hamidahu",
    RabbanaWaLakaAlHamd = "Rabbana wa laka al hamd",
    SunnaSujud = "Sunna Sujud",
    RabbiIghfirLiSunna = "Rabbi ighfir li + Sunna",
    Tachahoud = "Tachahoud",
    SalatIbrahimiyya = "Salat Ibrahimiyya",
    SunnaTachahoud = "Sunna Tachahoud",
    Taslim = "Taslim"
}

enum PrayerName {
    CinqQuotidiennes = "5 prières quotidiennes",
    RawaatibRatachee = "Rawaatib ratachée",
    NawafilNonPrecise = "Nawafil non précise",
    DeFete = "Prière de fête",
    Eclipse = "Prière pendant une éclipse",
    Tahajjud = "Tahajjud",
    Janaza = "Prière pour les funérailles (Janaza)",
    Voyageur = "Prière du voyageur",
    ApresAblutions = "Prière après les ablutions",
    EntreeMosquee = "Prière quand on entre à la mosquée",
    MaqamIbrahim = "Prière au Maqam Ibrahim (Hajj & Omra)",
    Arafat = "Prière à Arafat (Hajj)",
    Istikhara = "Prière d'Istikhara",
    PendantPluie = "Prière pendant la pluie",
    Detresse = "Prière en cas de détresse",
    Qunoot = "Qunoot",
    Tarawih = "Tarawih",
    Witr = "Witr"
}