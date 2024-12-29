type TechnicalData = {
  year: {
    label: string
    value: string
  }
  berths: {
    label: string
    value: string
  }
  length: {
    label: string
    value: string
  }
  width: {
    label: string
    value: string
  }
  height: {
    label: string
    value: string
  }
  people: {
    label: string
    value: string
  }
  engine: {
    label: string
    value: string
  }
  depth: {
    label: string
    value: string
  }
  mass: {
    label: string
    value: string
  }
  balast: {
    label: string
    value: string
  }
  sails: {
    label: string
    value: string
  }
  keelType: {
    label: string
    value: string
  }
  keelWeight: {
    label: string
    value: string
  }
  stere: {
    label: string
    value: string
  }
}

const technicalDataLabels = {
  year: "Rok produkcji",
  berths: "Koje",
  length: "Długość całkowita",
  width: "Szerokość całkowita",
  height: "Wysokość w kabionie",
  people: "Załoga",
  engine: "Silnik",
  depth: "Zanurzenie",
  mass: "Masa",
  balast: "Balast denny",
  sails: "Powierzchnia żagli",
  keelType: "Miecz",
  keelWeight: "Waga miecza",
  stere: "Ster",
}

const technicalDataValues = {
  stere: "płetwa na pawęży",
  keelType: "uchylny",
}

type Equipment = {
  sailing: string[]
  galleyAndMess: string[]
  powerAndMultimedia: string[]
  security: string[]
  exploitation: string[]
  other: string[]
}

export type PriceListSaturday = {
  "16.04 - 30.04": string
  "30.04 - 04.05": string
  "04.05 - 31.05": string
  "31.05 - 14.06": string
  "14.06 - 21.06": string
  "21.06 - 28.06": string
  "28.06 - 05.07": string
  "05.07 - 12.07": string
  "12.07 - 16.08": string
  "16.08 - 23.08": string
  "23.08 - 06.09": string
  "06.09 - 30.09": string
}

export type PriceListSunday = {
  "16.04 - 30.04": string
  "30.04 - 04.05": string
  "04.05 - 01.06": string
  "01.06 - 15.06": string
  "15.06 - 22.06": string
  "22.06 - 29.06": string
  "29.06 - 06.07": string
  "06.07 - 13.07": string
  "13.07 - 17.08": string
  "17.08 - 23.08": string
  "28.08 - 07.09": string
  "07.09 - 30.09": string
}

export type Yacht = {
  id: string
  url: string
  technicalData: TechnicalData
  equipment: Equipment
  previewGallery?: string[]
  gallery?: string[]
  video?: string[]
  priceList: PriceListSaturday | PriceListSunday
}

const yachts: Yacht[] = [
  {
    id: "Twister 800N Strzyga",
    url: "twister-800n-strzyga",
    technicalData: {
      year: {
        label: technicalDataLabels.year,
        value: "2024",
      },
      berths: {
        label: technicalDataLabels.berths,
        value: "2 podwójne + 2 w mesie",
      },
      length: {
        label: technicalDataLabels.length,
        value: "8,00 m",
      },
      width: {
        label: technicalDataLabels.width,
        value: "2,70 m",
      },
      height: {
        label: technicalDataLabels.height,
        value: "1,80 m",
      },
      people: {
        label: technicalDataLabels.people,
        value: "6+2",
      },
      engine: {
        label: technicalDataLabels.engine,
        value: "zaburtowy Tohatsu 6 KM",
      },
      depth: {
        label: technicalDataLabels.depth,
        value: "0,35/1,50 m",
      },
      mass: {
        label: technicalDataLabels.mass,
        value: "2200 kg",
      },
      balast: {
        label: technicalDataLabels.balast,
        value: "500 kg",
      },
      sails: {
        label: technicalDataLabels.sails,
        value: "34 m<sup>2</sup>",
      },
      keelType: {
        label: technicalDataLabels.keelType,
        value: technicalDataValues.keelType,
      },
      keelWeight: {
        label: technicalDataLabels.keelWeight,
        value: "90 kg",
      },
      stere: {
        label: technicalDataLabels.stere,
        value: technicalDataValues.stere,
      },
    },
    equipment: {
      sailing: [
        "echosonda",
        "patent do stawiania masztu typu ramka",
        "rolfok na sztywnym sztagu",
        "podpórka podmasztowa",
        "lazy jack",
        "2 refbanty",
        "relingi",
        "odpinane pasy boczne",
        "tent przeciwdeszczowy",
        "grot na pełzaczach",
        "drabinka rufowa",
        "stopień na koszu dziobowym",
        "stolik kokpitowy",
      ],
      galleyAndMess: [
        "lodówka",
        "ogrzewanie Webasto",
        "instalacja wodna w kambuzie i WC",
        "kuchenka 2 palnikowa",
        "zlewozmywak",
        "naczynia kuchenne",
        "zastawa stołowa",
        "sztućce",
        "miska",
      ],
      powerAndMultimedia: [
        "oświetlenie elektryczne LED",
        "radio MP3, USB",
        "automatyczny prostownik",
        "gniazda 12V i 230V",
        "przedłużacz",
        "akumulator 2 x 120 Ah",
      ],
      security: [
        "komplet środków ratunkowych 8 kamizelek + koło",
        "gaśnica",
        "ubezpieczenie OC, CASCO i NW",
      ],
      exploitation: [
        "zbiorniki na wodę 2 x 30 l",
        "paliwo pełny do pełnego",
        "butla gazowa 2-3 kg",
      ],
      other: [
        "WC chemiczne w osobnej kabinie",
        "skrzynka narzędziowa",
        "siekiera",
        "saperka",
        "wiadro",
        "szczotka do pokładu",
        "szufelka ze zmiotką",
        "1 pagaj, 1 bosak",
        "2 kotwice z długimi linami",
        "2 długie cumy",
        "1 szpring",
        "6 odbijaczy",
        "krawaty",
        "komplet poduszek 8 szt",
      ],
    },
    priceList: {
      "16.04 - 30.04": "270",
      "30.04 - 04.05": "370",
      "04.05 - 01.06": "320",
      "01.06 - 15.06": "300",
      "15.06 - 22.06": "370",
      "22.06 - 29.06": "320",
      "29.06 - 06.07": "350",
      "06.07 - 13.07": "360",
      "13.07 - 17.08": "370",
      "17.08 - 23.08": "350",
      "28.08 - 07.09": "300",
      "07.09 - 30.09": "280",
    },
    previewGallery: [
      "twister-800n-strzyga/strzyga1.jpg",
      "twister-800n-strzyga/strzyga4.jpg",
    ],
    gallery: [
      "twister-800n-strzyga/strzyga1.jpg",
      "twister-800n-strzyga/strzyga2.jpg",
      "twister-800n-strzyga/strzyga3.jpg",
      "twister-800n-strzyga/strzyga4.jpg",
      "twister-800n-strzyga/strzyga5.jpg",
      "twister-800n-strzyga/strzyga6.jpg",
      "twister-800n-strzyga/strzyga7.jpg",
      "twister-800n-strzyga/strzyga8.jpg",
      "twister-800n-strzyga/strzyga9.jpg",
      "twister-800n-strzyga/strzyga10.jpg",
      "twister-800n-strzyga/strzyga11.jpg",
      "twister-800n-strzyga/strzyga12.jpg",
      "twister-800n-strzyga/strzyga13.jpg",
      "twister-800n-strzyga/strzyga14.jpg",
      "twister-800n-strzyga/strzyga15.jpg",
      "twister-800n-strzyga/strzyga16.jpg",
      "twister-800n-strzyga/strzyga17.jpg",
    ],
  },
  {
    id: "Twister 800N Harpia",
    url: "twister-800n-harpia",
    technicalData: {
      year: {
        label: technicalDataLabels.year,
        value: "2019",
      },
      berths: {
        label: technicalDataLabels.berths,
        value: "2 podwójne + 2 w mesie",
      },
      length: {
        label: technicalDataLabels.length,
        value: "8,00 m",
      },
      width: {
        label: technicalDataLabels.width,
        value: "2,70 m",
      },
      height: {
        label: technicalDataLabels.height,
        value: "1,80 m",
      },
      people: {
        label: technicalDataLabels.people,
        value: "6+2",
      },
      engine: {
        label: technicalDataLabels.engine,
        value: "zaburtowy Tohatsu 6 KM",
      },
      depth: {
        label: technicalDataLabels.depth,
        value: "0,35/1,50 m",
      },
      mass: {
        label: technicalDataLabels.mass,
        value: "2200 kg",
      },
      balast: {
        label: technicalDataLabels.balast,
        value: "500 kg",
      },
      sails: {
        label: technicalDataLabels.sails,
        value: "34 m<sup>2</sup>",
      },
      keelType: {
        label: technicalDataLabels.keelType,
        value: technicalDataValues.keelType,
      },
      keelWeight: {
        label: technicalDataLabels.keelWeight,
        value: "90 kg",
      },
      stere: {
        label: technicalDataLabels.stere,
        value: technicalDataValues.stere,
      },
    },
    equipment: {
      sailing: [
        "patent do stawiania masztu typu ramka",
        "rolfok na sztywnym sztagu",
        "podpórka podmasztowa",
        "lazy jack",
        "2 refbanty",
        "relingi",
        "odpinane pasy boczne",
        "tent przeciwdeszczowy",
        "grot na pełzaczach",
        "drabinka rufowa",
        "stopień na koszu dziobowym",
        "stolik kokpitowy",
      ],
      galleyAndMess: [
        "lodówka",
        "ogrzewanie Webasto",
        "instalacja wodna w kambuzie i WC",
        "kuchenka 2 palnikowa",
        "zlewozmywak",
        "naczynia kuchenne",
        "zastawa stołowa",
        "sztućce",
      ],
      powerAndMultimedia: [
        "oświetlenie elektryczne LED",
        "radio MP3, USB",
        "automatyczny prostownik",
        "gniazda 12V i 230V",
        "przedłużacz",
        "akumulator 2 x 120 Ah",
      ],
      security: [
        "komplet środków ratunkowych 8 kamizelek + koło",
        "gaśnica",
        "ubezpieczenie OC, CASCO i NW",
      ],
      exploitation: [
        "zbiorniki na wodę 2 x 30 l",
        "paliwo pełny do pełnego",
        "butla gazowa 2-3 kg",
      ],
      other: [
        "WC chemiczne w osobnej kabinie",
        "skrzynka narzędziowa",
        "siekiera",
        "saperka",
        "wiadro",
        "miska",
        "szczotka do pokładu",
        "szufelka ze zmiotką",
        "1 pagaj, 1 bosak",
        "2 kotwice z długimi linami",
        "2 długie cumy",
        "1 szpring",
        "6 odbijaczy",
        "krawaty",
        "komplet poduszek 8 szt",
      ],
    },
    previewGallery: [
      "twister-800n-harpia/harpia1.jpg",
      "twister-800n-harpia/harpia4.jpg",
    ],
    gallery: [
      "twister-800n-harpia/harpia1.jpg",
      "twister-800n-harpia/harpia2.jpg",
      "twister-800n-harpia/harpia3.jpg",
      "twister-800n-harpia/harpia4.jpg",
      "twister-800n-harpia/harpia5.jpg",
      "twister-800n-harpia/harpia6.jpg",
      "twister-800n-harpia/harpia7.jpg",
      "twister-800n-harpia/harpia8.jpg",
      "twister-800n-harpia/harpia9.jpg",
      "twister-800n-harpia/harpia10.jpg",
      "twister-800n-harpia/harpia11.jpg",
      "twister-800n-harpia/harpia12.jpg",
      "twister-800n-harpia/harpia13.jpg",
      "twister-800n-harpia/harpia14.jpg",
      "twister-800n-harpia/harpia15.jpg",
    ],
    video: [
      "https://www.youtube.com/embed/znomBJYCzOY",
      "https://www.youtube.com/embed/jSIGqZXQVEE",
    ],
    priceList: {
      "16.04 - 30.04": "250",
      "30.04 - 04.05": "350",
      "04.05 - 01.06": "300",
      "01.06 - 15.06": "280",
      "15.06 - 22.06": "350",
      "22.06 - 29.06": "300",
      "29.06 - 06.07": "330",
      "06.07 - 13.07": "340",
      "13.07 - 17.08": "350",
      "17.08 - 23.08": "340",
      "28.08 - 07.09": "300",
      "07.09 - 30.09": "280",
    },
  },
  {
    id: "Antila 24.4 Borneo",
    url: "antila-244-borneo",
    technicalData: {
      year: {
        label: technicalDataLabels.year,
        value: "2021",
      },
      berths: {
        label: technicalDataLabels.berths,
        value: "2 podwójne + 2 w mesie",
      },
      length: {
        label: technicalDataLabels.length,
        value: "8,20 m",
      },
      width: {
        label: technicalDataLabels.width,
        value: "2,70 m",
      },
      height: {
        label: technicalDataLabels.height,
        value: "1,88 m",
      },
      people: {
        label: technicalDataLabels.people,
        value: "6+2",
      },
      engine: {
        label: technicalDataLabels.engine,
        value: "zaburtowy 6 KM",
      },
      depth: {
        label: technicalDataLabels.depth,
        value: "0,32/1,36 m",
      },
      mass: {
        label: technicalDataLabels.mass,
        value: "1800 kg",
      },
      balast: {
        label: technicalDataLabels.balast,
        value: "450 kg",
      },
      sails: {
        label: technicalDataLabels.sails,
        value: "30 m<sup>2</sup>",
      },
      keelType: {
        label: technicalDataLabels.keelType,
        value: technicalDataValues.keelType,
      },
      keelWeight: {
        label: technicalDataLabels.keelWeight,
        value: "80 kg",
      },
      stere: {
        label: technicalDataLabels.stere,
        value: technicalDataValues.stere,
      },
    },
    equipment: {
      sailing: [
        "szprycbuda",
        "patent do stawiania masztu typu ramka",
        "rolfok na sztywnym sztagu",
        "podpórka podmasztowa",
        "lazy jack",
        "2 refbanty",
        "relingi",
        "odpinane pasy boczne",
        "tent przeciwdeszczowy",
        "grot na pełzaczach",
        "drabinka rufowa",
        "stopień na koszu dziobowym",
        "stolik kokpitowy",
      ],
      galleyAndMess: [
        "lodówka",
        "ogrzewanie Webasto",
        "instalacja wodna w kambuzie i WC",
        "kuchenka 2 palnikowa",
        "zlewozmywak",
        "naczynia kuchenne",
        "zastawa stołowa",
        "sztućce",
      ],
      powerAndMultimedia: [
        "oświetlenie elektryczne LED",
        "radio MP3, USB",
        "automatyczny prostownik",
        "gniazda 12V i 230V",
        "przedłużacz",
        "akumulator 2 x 100 Ah",
      ],
      security: [
        "komplet środków ratunkowych 8 kamizelek + koło",
        "gaśnica",
        "ubezpieczenie OC, CASCO i NW",
      ],
      exploitation: [
        "zbiorniki na wodę 80 l",
        "paliwo pełny do pełnego",
        "butla gazowa 3 kg",
      ],
      other: [
        "WC chemiczne w osobnej kabinie",
        "skrzynka narzędziowa",
        "siekiera",
        "saperka",
        "wiadro",
        "miska",
        "szczotka do pokładu",
        "szufelka ze zmiotką",
        "1 pagaj, 1 bosak",
        "2 kotwice z długimi linami",
        "2 długie cumy",
        "1 szpring",
        "6 odbijaczy",
        "krawaty",
        "komplet poduszek 6 szt",
      ],
    },
    previewGallery: [
      "antila-244-borneo/borneo1.jpg",
      "antila-244-borneo/borneo5.jpg",
    ],
    gallery: [
      "antila-244-borneo/borneo1.jpg",
      "antila-244-borneo/borneo2.jpg",
      "antila-244-borneo/borneo3.jpg",
      "antila-244-borneo/borneo4.jpg",
      "antila-244-borneo/borneo5.jpg",
      "antila-244-borneo/borneo6.jpg",
      "antila-244-borneo/borneo7.jpg",
      "antila-244-borneo/borneo8.jpg",
      "antila-244-borneo/borneo9.jpg",
      "antila-244-borneo/borneo10.jpg",
      "antila-244-borneo/borneo11.jpg",
      "antila-244-borneo/borneo12.jpg",
    ],
    priceList: {
      "16.04 - 30.04": "270",
      "30.04 - 04.05": "400",
      "04.05 - 01.06": "300",
      "01.06 - 15.06": "310",
      "15.06 - 22.06": "400",
      "22.06 - 29.06": "320",
      "29.06 - 06.07": "350",
      "06.07 - 13.07": "370",
      "13.07 - 17.08": "400",
      "17.08 - 23.08": "350",
      "28.08 - 07.09": "320",
      "07.09 - 30.09": "300",
    },
  },
  {
    id: "Aquatic 25T Morrigan",
    url: "aquatic-25t-morrigan",
    technicalData: {
      year: {
        label: technicalDataLabels.year,
        value: "2017",
      },
      berths: {
        label: technicalDataLabels.berths,
        value: "2 podwójne + 2 w mesie",
      },
      length: {
        label: technicalDataLabels.length,
        value: "7,50 m",
      },
      width: {
        label: technicalDataLabels.width,
        value: "2,88 m",
      },
      height: {
        label: technicalDataLabels.height,
        value: "1,85 m",
      },
      people: {
        label: technicalDataLabels.people,
        value: "6+2",
      },
      engine: {
        label: technicalDataLabels.engine,
        value: "zaburtowy Tohatsu 6 KM SailPro",
      },
      depth: {
        label: technicalDataLabels.depth,
        value: "0,33/1,40 m",
      },
      mass: {
        label: technicalDataLabels.mass,
        value: "2000 kg",
      },
      balast: {
        label: technicalDataLabels.balast,
        value: "500 kg",
      },
      sails: {
        label: technicalDataLabels.sails,
        value: "33 m<sup>2</sup>",
      },
      keelType: {
        label: technicalDataLabels.keelType,
        value: technicalDataValues.keelType,
      },
      keelWeight: {
        label: technicalDataLabels.keelWeight,
        value: "90 kg",
      },
      stere: {
        label: technicalDataLabels.stere,
        value: technicalDataValues.stere,
      },
    },
    equipment: {
      sailing: [
        "patent do stawiania masztu typu ramka",
        "rolfok na sztywnym sztagu",
        "podpórka podmasztowa",
        "lazy jack",
        "2 refbanty",
        "relingi",
        "odpinane pasy boczne",
        "tent przeciwdeszczowy",
        "grot na pełzaczach",
        "drabinka rufowa",
        "stopień na koszu dziobowym",
        "stolik kokpitowy",
      ],
      galleyAndMess: [
        "lodówka",
        "ogrzewanie Webasto",
        "instalacja wodna w kambuzie i WC",
        "kuchenka 2 palnikowa",
        "zlewozmywak",
        "naczynia kuchenne",
        "zastawa stołowa",
        "sztućce",
      ],
      powerAndMultimedia: [
        "oświetlenie elektryczne LED",
        "radio MP3, USB",
        "automatyczny prostownik",
        "gniazda 12V i 230V",
        "przedłużacz",
        "akumulator 2 x 100 Ah",
      ],
      security: [
        "komplet środków ratunkowych 8 kamizelek + koło",
        "gaśnica",
        "ubezpieczenie OC, CASCO i NW",
      ],
      exploitation: [
        "zbiorniki na wodę 2 x 20 l",
        "paliwo pełny do pełnego",
        "butla gazowa 3 kg",
      ],
      other: [
        "WC chemiczne w osobnej kabinie",
        "skrzynka narzędziowa",
        "siekiera",
        "saperka",
        "wiadro",
        "miska",
        "szczotka do pokładu",
        "szufelka ze zmiotką",
        "2 pagaje, 1 bosak",
        "2 kotwice z długimi linami",
        "2 długie cumy",
        "1 szpring",
        "6 odbijaczy",
        "krawaty",
        "komplet poduszek 8 szt",
      ],
    },
    previewGallery: [
      "aquatic-25t-morrigan/morrigan1.jpg",
      "aquatic-25t-morrigan/morrigan4.jpg",
    ],
    gallery: [
      "aquatic-25t-morrigan/morrigan1.jpg",
      "aquatic-25t-morrigan/morrigan2.jpg",
      "aquatic-25t-morrigan/morrigan3.jpg",
      "aquatic-25t-morrigan/morrigan4.jpg",
      "aquatic-25t-morrigan/morrigan5.jpg",
      "aquatic-25t-morrigan/morrigan6.jpg",
      "aquatic-25t-morrigan/morrigan7.jpg",
      "aquatic-25t-morrigan/morrigan8.jpg",
      "aquatic-25t-morrigan/morrigan9.jpg",
      "aquatic-25t-morrigan/morrigan10.jpg",
      "aquatic-25t-morrigan/morrigan11.jpg",
      "aquatic-25t-morrigan/morrigan12.jpg",
      "aquatic-25t-morrigan/morrigan13.jpg",
      "aquatic-25t-morrigan/morrigan14.jpg",
      "aquatic-25t-morrigan/morrigan15.jpg",
    ],
    video: [
      "https://www.youtube.com/watch?v=3CTPkgGoBqo&ab_channel=JachtyPruszy%C5%84ski",
    ],
    priceList: {
      "16.04 - 30.04": "220",
      "30.04 - 04.05": "380",
      "04.05 - 01.06": "300",
      "01.06 - 15.06": "320",
      "15.06 - 22.06": "350",
      "22.06 - 29.06": "320",
      "29.06 - 06.07": "330",
      "06.07 - 13.07": "340",
      "13.07 - 17.08": "350",
      "17.08 - 23.08": "330",
      "28.08 - 07.09": "320",
      "07.09 - 30.09": "300",
    },
  },
  {
    id: "Phobos 25 Saskia",
    url: "phobos-25-saskia",
    technicalData: {
      year: {
        label: technicalDataLabels.year,
        value: "2022",
      },
      berths: {
        label: technicalDataLabels.berths,
        value: "2 podwójne + 2 w mesie",
      },
      length: {
        label: technicalDataLabels.length,
        value: "7,92 m",
      },
      width: {
        label: technicalDataLabels.width,
        value: "2,86 m",
      },
      height: {
        label: technicalDataLabels.height,
        value: "1,80 m",
      },
      people: {
        label: technicalDataLabels.people,
        value: "6+2",
      },
      engine: {
        label: technicalDataLabels.engine,
        value: "zaburtowy Tohatsu 6 KM",
      },
      depth: {
        label: technicalDataLabels.depth,
        value: "0,34/1,44 m",
      },
      mass: {
        label: technicalDataLabels.mass,
        value: "2100 kg",
      },
      balast: {
        label: technicalDataLabels.balast,
        value: "500 kg",
      },
      sails: {
        label: technicalDataLabels.sails,
        value: "30 m<sup>2</sup>",
      },
      keelType: {
        label: technicalDataLabels.keelType,
        value: technicalDataValues.keelType,
      },
      keelWeight: {
        label: technicalDataLabels.keelWeight,
        value: "80 kg",
      },
      stere: {
        label: technicalDataLabels.stere,
        value: technicalDataValues.stere,
      },
    },
    equipment: {
      sailing: [
        "patent do stawiania masztu typu ramka",
        "rolfok na sztywnym sztagu",
        "podpórka podmasztowa",
        "lazy jack",
        "2 refbanty",
        "relingi",
        "odpinane pasy boczne",
        "tent przeciwdeszczowy",
        "grot na pełzaczach",
        "drabinka rufowa",
        "stopień na koszu dziobowym",
        "stolik kokpitowy",
      ],
      galleyAndMess: [
        "lodówka",
        "ogrzewanie",
        "instalacja wodna w kambuzie i WC",
        "kuchenka 2 palnikowa",
        "zlewozmywak",
        "naczynia kuchenne",
        "zastawa stołowa",
        "sztućce",
      ],
      powerAndMultimedia: [
        "oświetlenie elektryczne LED",
        "radio MP3, USB",
        "automatyczny prostownik",
        "gniazda 12V i 230V",
        "przedłużacz",
        "akumulator 110 Ah",
      ],
      security: [
        "komplet środków ratunkowych 8 kamizelek + koło",
        "gaśnica",
        "ubezpieczenie OC, CASCO i NW",
      ],
      exploitation: [
        "zbiornik na wodę 80 l",
        "paliwo 12 l, pełny do pełnego",
        "butla gazowa 2 kg",
      ],
      other: [
        "WC chemiczne w osobnej kabinie",
        "skrzynka narzędziowa",
        "siekiera",
        "saperka",
        "wiadro",
        "miska",
        "szczotka do pokładu",
        "szufelka ze zmiotką",
        "2 pagaje, 1 bosak",
        "2 kotwice z długimi linami",
        "2 długie cumy",
        "1 szpring",
        "6 odbijaczy",
        "krawaty",
        "komplet poduszek 8 szt",
      ],
    },
    previewGallery: [
      "phobos-25-saskia/saskia1.jpg",
      "phobos-25-saskia/saskia4.jpg",
    ],
    gallery: [
      "phobos-25-saskia/saskia1.jpg",
      "phobos-25-saskia/saskia2.jpg",
      "phobos-25-saskia/saskia3.jpg",
      "phobos-25-saskia/saskia4.jpg",
      "phobos-25-saskia/saskia5.jpg",
      "phobos-25-saskia/saskia6.jpg",
      "phobos-25-saskia/saskia7.jpg",
      "phobos-25-saskia/saskia8.jpg",
      "phobos-25-saskia/saskia9.jpg",
      "phobos-25-saskia/saskia10.jpg",
      "phobos-25-saskia/saskia11.jpg",
      "phobos-25-saskia/saskia12.jpg",
      "phobos-25-saskia/saskia13.jpg",
      "phobos-25-saskia/saskia14.jpg",
      "phobos-25-saskia/saskia15.jpg",
      "phobos-25-saskia/saskia16.jpg",
      "phobos-25-saskia/saskia17.jpg",
      "phobos-25-saskia/saskia18.jpg",
    ],
    video: ["https://www.youtube.com/watch?v=Imoj39lAcFM"],
    priceList: {
      "16.04 - 30.04": "300",
      "30.04 - 04.05": "400",
      "04.05 - 31.05": "350",
      "31.05 - 14.06": "300",
      "14.06 - 21.06": "400",
      "21.06 - 28.06": "320",
      "28.06 - 05.07": "380",
      "05.07 - 12.07": "390",
      "12.07 - 16.08": "400",
      "16.08 - 23.08": "350",
      "23.08 - 06.09": "300",
      "06.09 - 30.09": "280",
    },
  },
  {
    id: "Antila 26CC Driada",
    url: "antila-26cc-driada",
    technicalData: {
      year: {
        label: technicalDataLabels.year,
        value: "2023",
      },
      berths: {
        label: technicalDataLabels.berths,
        value: "3 podwójne + 2 w mesie",
      },
      length: {
        label: technicalDataLabels.length,
        value: "8,30 m",
      },
      width: {
        label: technicalDataLabels.width,
        value: "2,90 m",
      },
      height: {
        label: technicalDataLabels.height,
        value: "1,86 m",
      },
      people: {
        label: technicalDataLabels.people,
        value: "6+2",
      },
      engine: {
        label: technicalDataLabels.engine,
        value: "zaburtowy Tohatsu 9,8 KM",
      },
      depth: {
        label: technicalDataLabels.depth,
        value: "0,39/1,62 m",
      },
      mass: {
        label: technicalDataLabels.mass,
        value: "2650 kg",
      },
      balast: {
        label: technicalDataLabels.balast,
        value: "800 kg",
      },
      sails: {
        label: technicalDataLabels.sails,
        value: "35,5 m<sup>2</sup>",
      },
      keelType: {
        label: technicalDataLabels.keelType,
        value: technicalDataValues.keelType,
      },
      keelWeight: {
        label: technicalDataLabels.keelWeight,
        value: "100 kg",
      },
      stere: {
        label: technicalDataLabels.stere,
        value: technicalDataValues.stere,
      },
    },
    equipment: {
      sailing: [
        "szprycbuda",
        "patent do stawiania masztu typu ramka",
        "rolfok na sztywnym sztagu",
        "podpórka podmasztowa",
        "lazy jack",
        "2 refbanty",
        "relingi",
        "odpinane pasy boczne",
        "tent przeciwdeszczowy",
        "grot na pełzaczach",
        "drabinka rufowa",
        "stopień na koszu dziobowym",
        "stolik kokpitowy",
      ],
      galleyAndMess: [
        "lodówka",
        "ogrzewanie Webasto",
        "instalacja wodna w kambuzie i WC",
        "kuchenka 2 palnikowa",
        "zlewozmywak",
        "naczynia kuchenne",
        "zastawa stołowa",
        "sztućce",
      ],
      powerAndMultimedia: [
        "radio MP3, USB, Bluetooth",
        "automatyczny prostownik",
        "gniazda 12V i 230V",
        "przedłużacz",
        "akumulator 2 x 100 Ah",
      ],
      security: [
        "komplet środków ratunkowych 8 kamizelek + koło",
        "gaśnica",
        "ubezpieczenie OC, CASCO i NW",
      ],
      exploitation: [
        "zbiorniki na wodę 80 l",
        "paliwo pełny do pełnego",
        "butla gazowa 3 kg",
      ],
      other: [
        "WC chemiczne w osobnej kabinie",
        "skrzynka narzędziowa",
        "siekiera",
        "saperka",
        "wiadro",
        "miska",
        "szczotka do pokładu",
        "szufelka ze zmiotką",
        "1 pagaj, 1 bosak",
        "2 kotwice z długimi linami",
        "2 długie cumy",
        "1 szpring",
        "6 odbijaczy",
        "krawaty",
        "komplet poduszek 10 szt",
      ],
    },
    previewGallery: [
      "antila-26cc-driada/driada1.jpg",
      "antila-26cc-driada/driada4.jpg",
    ],
    gallery: [
      "antila-26cc-driada/driada1.jpg",
      "antila-26cc-driada/driada2.jpg",
      "antila-26cc-driada/driada3.jpg",
      "antila-26cc-driada/driada4.jpg",
      "antila-26cc-driada/driada5.jpg",
      "antila-26cc-driada/driada6.jpg",
      "antila-26cc-driada/driada7.jpg",
      "antila-26cc-driada/driada8.jpg",
      "antila-26cc-driada/driada9.jpg",
      "antila-26cc-driada/driada10.jpg",
      "antila-26cc-driada/driada11.jpg",
      "antila-26cc-driada/driada12.jpg",
      "antila-26cc-driada/driada13.jpg",
      "antila-26cc-driada/driada14.jpg",
      "antila-26cc-driada/driada15.jpg",
    ],
    priceList: {
      "16.04 - 30.04": "320",
      "30.04 - 04.05": "460",
      "04.05 - 31.05": "380",
      "31.05 - 14.06": "350",
      "14.06 - 21.06": "450",
      "21.06 - 28.06": "400",
      "28.06 - 05.07": "420",
      "05.07 - 12.07": "450",
      "12.07 - 16.08": "500",
      "16.08 - 23.08": "450",
      "23.08 - 06.09": "400",
      "06.09 - 30.09": "300",
    },
  },
  {
    id: "Antila 26CC Solaris",
    url: "antila-26cc-solaris",
    technicalData: {
      year: {
        label: technicalDataLabels.year,
        value: "2015",
      },
      berths: {
        label: technicalDataLabels.berths,
        value: "2 podwójne + 2 w mesie",
      },
      length: {
        label: technicalDataLabels.length,
        value: "8,30 m",
      },
      width: {
        label: technicalDataLabels.width,
        value: "2,90 m",
      },
      height: {
        label: technicalDataLabels.height,
        value: "1,86 m",
      },
      people: {
        label: technicalDataLabels.people,
        value: "6+2",
      },
      engine: {
        label: technicalDataLabels.engine,
        value: "zaburtowy 10 KM",
      },
      depth: {
        label: technicalDataLabels.depth,
        value: "0,39/1,62 m",
      },
      mass: {
        label: technicalDataLabels.mass,
        value: "2650 kg",
      },
      balast: {
        label: technicalDataLabels.balast,
        value: "800 kg",
      },
      sails: {
        label: technicalDataLabels.sails,
        value: "35,5 m<sup>2</sup>",
      },
      keelType: {
        label: technicalDataLabels.keelType,
        value: technicalDataValues.keelType,
      },
      keelWeight: {
        label: technicalDataLabels.keelWeight,
        value: "100 kg",
      },
      stere: {
        label: technicalDataLabels.stere,
        value: technicalDataValues.stere,
      },
    },
    equipment: {
      sailing: [
        "szprycbuda",
        "echo sonda",
        "patent do stawiania masztu typu ramka, elektrycznie za pomocą wciągarki",
        "rolfok na sztywnym sztagu",
        "podpórka podmasztowa",
        "lazy jack",
        "2 refbanty",
        "relingi",
        "odpinane pasy boczne",
        "tent przeciwdeszczowy",
        "grot na pełzaczach",
        "drabinka rufowa",
        "stopień na koszu dziobowym",
        "stolik kokpitowy",
      ],
      galleyAndMess: [
        "lodówka",
        "ogrzewanie Webasto",
        "instalacja wodna w kambuzie i WC",
        "kuchenka 2 palnikowa",
        "zlewozmywak",
        "naczynia kuchenne",
        "zastawa stołowa",
        "sztućce",
      ],
      powerAndMultimedia: [
        "radio MP3, USB",
        "automatyczny prostownik",
        "gniazda 12V i 230V",
        "przedłużacz",
        "akumulator 3 x 100 Ah",
      ],
      security: [
        "komplet środków ratunkowych 8 kamizelek + koło",
        "gaśnica",
        "ubezpieczenie OC, CASCO i NW",
      ],
      exploitation: [
        "zbiorniki na wodę 100 l",
        "paliwo pełny do pełnego",
        "butla gazowa 3 kg",
      ],
      other: [
        "TV",
        "WC chemiczne w osobnej kabinie",
        "skrzynka narzędziowa",
        "siekiera",
        "saperka",
        "wiadro",
        "miska",
        "szczotka do pokładu",
        "szufelka ze zmiotką",
        "1 pagaj, 1 bosak",
        "2 kotwice z długimi linami",
        "2 długie cumy",
        "1 szpring",
        "6 odbijaczy",
        "krawaty",
        "komplet poduszek 8 szt",
      ],
    },
    previewGallery: [
      "antila-26cc-solaris/solaris1.jpg",
      "antila-26cc-solaris/solaris4.jpg",
    ],
    gallery: [
      "antila-26cc-solaris/solaris1.jpg",
      "antila-26cc-solaris/solaris2.jpg",
      "antila-26cc-solaris/solaris3.jpg",
      "antila-26cc-solaris/solaris4.jpg",
      "antila-26cc-solaris/solaris5.jpg",
      "antila-26cc-solaris/solaris6.jpg",
      "antila-26cc-solaris/solaris7.jpg",
      "antila-26cc-solaris/solaris8.jpg",
      "antila-26cc-solaris/solaris9.jpg",
      "antila-26cc-solaris/solaris10.jpg",
      "antila-26cc-solaris/solaris11.jpg",
      "antila-26cc-solaris/solaris12.jpg",
      "antila-26cc-solaris/solaris13.jpg",
      "antila-26cc-solaris/solaris14.jpg",
      "antila-26cc-solaris/solaris15.jpg",
    ],
    video: [
      "https://www.youtube.com/watch?v=SQ2xbbU4NGA&ab_channel=JachtyPruszy%C5%84ski",
      "https://www.youtube.com/watch?v=Ir0VlpDxc9M&ab_channel=JachtyPruszy%C5%84ski",
    ],
    priceList: {
      "16.04 - 30.04": "300",
      "30.04 - 04.05": "440",
      "04.05 - 31.05": "350",
      "31.05 - 14.06": "360",
      "14.06 - 21.06": "420",
      "21.06 - 28.06": "380",
      "28.06 - 05.07": "400",
      "05.07 - 12.07": "420",
      "12.07 - 16.08": "430",
      "16.08 - 23.08": "400",
      "23.08 - 06.09": "350",
      "06.09 - 30.09": "300",
    },
  },
  {
    id: "Antila 27 Biały Wilk",
    url: "antila-27-bialy-wilk",
    technicalData: {
      year: {
        label: technicalDataLabels.year,
        value: "2021",
      },
      berths: {
        label: technicalDataLabels.berths,
        value: "3 podwójne + 2 w mesie",
      },
      length: {
        label: technicalDataLabels.length,
        value: "8,24 m",
      },
      width: {
        label: technicalDataLabels.width,
        value: "2,70 m",
      },
      height: {
        label: technicalDataLabels.height,
        value: "1,88 m",
      },
      people: {
        label: technicalDataLabels.people,
        value: "6+2",
      },
      engine: {
        label: technicalDataLabels.engine,
        value: "zaburtowy 10 KM",
      },
      depth: {
        label: technicalDataLabels.depth,
        value: "0,32/1,36 m",
      },
      mass: {
        label: technicalDataLabels.mass,
        value: "3200 kg",
      },
      balast: {
        label: technicalDataLabels.balast,
        value: "900 kg",
      },
      sails: {
        label: technicalDataLabels.sails,
        value: "38 m<sup>2</sup>",
      },
      keelType: {
        label: technicalDataLabels.keelType,
        value: technicalDataValues.keelType,
      },
      keelWeight: {
        label: technicalDataLabels.keelWeight,
        value: "100 kg",
      },
      stere: {
        label: technicalDataLabels.stere,
        value: technicalDataValues.stere,
      },
    },
    equipment: {
      sailing: [
        "szprycbuda",
        "patent do stawiania masztu typu ramka",
        "rolfok na sztywnym sztagu",
        "podpórka podmasztowa",
        "lazy jack",
        "2 refbanty",
        "relingi",
        "odpinane pasy boczne",
        "tent przeciwdeszczowy",
        "grot na pełzaczach",
        "drabinka rufowa",
        "stopień na koszu dziobowym",
        "stolik kokpitowy",
      ],
      galleyAndMess: [
        "lodówka",
        "ogrzewanie Webasto",
        "instalacja wodna w kambuzie i WC",
        "kuchenka 2 palnikowa",
        "zlewozmywak",
        "naczynia kuchenne",
        "zastawa stołowa",
        "sztućce",
      ],
      powerAndMultimedia: [
        "radio MP3, USB, Bluetooth",
        "automatyczny prostownik",
        "gniazda 12V i 230V",
        "przedłużacz",
        "akumulator 2 x 100 Ah",
      ],
      security: [
        "komplet środków ratunkowych 8 kamizelek + koło",
        "gaśnica",
        "ubezpieczenie OC, CASCO i NW",
      ],
      exploitation: [
        "zbiorniki na wodę 80 l",
        "paliwo pełny do pełnego",
        "butla gazowa 3 kg",
      ],
      other: [
        "WC chemiczne w osobnej kabinie",
        "skrzynka narzędziowa",
        "siekiera",
        "saperka",
        "wiadro",
        "miska",
        "szczotka do pokładu",
        "szufelka ze zmiotką",
        "1 pagaj, 1 bosak",
        "2 kotwice z długimi linami",
        "2 długie cumy",
        "1 szpring",
        "6 odbijaczy",
        "krawaty",
        "komplet poduszek 10 szt",
      ],
    },
    previewGallery: [
      "antila-27-bialy-wilk/bialywilk1.jpg",
      "antila-27-bialy-wilk/bialywilk4.jpg",
    ],
    gallery: [
      "antila-27-bialy-wilk/bialywilk1.jpg",
      "antila-27-bialy-wilk/bialywilk2.jpg",
      "antila-27-bialy-wilk/bialywilk3.jpg",
      "antila-27-bialy-wilk/bialywilk4.jpg",
      "antila-27-bialy-wilk/bialywilk5.jpg",
      "antila-27-bialy-wilk/bialywilk6.jpg",
      "antila-27-bialy-wilk/bialywilk7.jpg",
      "antila-27-bialy-wilk/bialywilk8.jpg",
      "antila-27-bialy-wilk/bialywilk9.jpg",
      "antila-27-bialy-wilk/bialywilk10.jpg",
      "antila-27-bialy-wilk/bialywilk11.jpg",
      "antila-27-bialy-wilk/bialywilk12.jpg",
    ],
    priceList: {
      "16.04 - 30.04": "370",
      "30.04 - 04.05": "480",
      "04.05 - 31.05": "400",
      "31.05 - 14.06": "400",
      "14.06 - 21.06": "480",
      "21.06 - 28.06": "420",
      "28.06 - 05.07": "500",
      "05.07 - 12.07": "520",
      "12.07 - 16.08": "550",
      "16.08 - 23.08": "480",
      "23.08 - 06.09": "450",
      "06.09 - 30.09": "350",
    },
  },
  {
    id: "Antila 27 Skellige",
    url: "antila-27-skellige",
    technicalData: {
      year: {
        label: technicalDataLabels.year,
        value: "2022",
      },
      berths: {
        label: technicalDataLabels.berths,
        value: "3 podwójne + 2 w mesie",
      },
      length: {
        label: technicalDataLabels.length,
        value: "8,24 m",
      },
      width: {
        label: technicalDataLabels.width,
        value: "2,70 m",
      },
      height: {
        label: technicalDataLabels.height,
        value: "1,88 m",
      },
      people: {
        label: technicalDataLabels.people,
        value: "6+2",
      },
      engine: {
        label: technicalDataLabels.engine,
        value: "zaburtowy 10 KM",
      },
      depth: {
        label: technicalDataLabels.depth,
        value: "0,32/1,36 m",
      },
      mass: {
        label: technicalDataLabels.mass,
        value: "3200 kg",
      },
      balast: {
        label: technicalDataLabels.balast,
        value: "900 kg",
      },
      sails: {
        label: technicalDataLabels.sails,
        value: "38 m<sup>2</sup>",
      },
      keelType: {
        label: technicalDataLabels.keelType,
        value: technicalDataValues.keelType,
      },
      keelWeight: {
        label: technicalDataLabels.keelWeight,
        value: "100 kg",
      },
      stere: {
        label: technicalDataLabels.stere,
        value: technicalDataValues.stere,
      },
    },
    equipment: {
      sailing: [
        "szprycbuda",
        "patent do stawiania masztu typu ramka",
        "rolfok na sztywnym sztagu",
        "podpórka podmasztowa",
        "lazy jack",
        "2 refbanty",
        "relingi",
        "odpinane pasy boczne",
        "tent przeciwdeszczowy",
        "grot na pełzaczach",
        "drabinka rufowa",
        "stopień na koszu dziobowym",
        "stolik kokpitowy",
      ],
      galleyAndMess: [
        "lodówka",
        "ogrzewanie Webasto",
        "instalacja wodna w kambuzie i WC",
        "kuchenka 2 palnikowa",
        "zlewozmywak",
        "naczynia kuchenne",
        "zastawa stołowa",
        "sztućce",
      ],
      powerAndMultimedia: [
        "radio MP3, USB, Bluetooth",
        "automatyczny prostownik",
        "gniazda 12V i 230V",
        "przedłużacz",
        "akumulator 2 x 100 Ah",
      ],
      security: [
        "komplet środków ratunkowych 8 kamizelek + koło",
        "gaśnica",
        "ubezpieczenie OC, CASCO i NW",
      ],
      exploitation: [
        "zbiorniki na wodę 80 l",
        "paliwo pełny do pełnego",
        "butla gazowa 3 kg",
      ],
      other: [
        "WC chemiczne w osobnej kabinie",
        "skrzynka narzędziowa",
        "siekiera",
        "saperka",
        "wiadro",
        "miska",
        "szczotka do pokładu",
        "szufelka ze zmiotką",
        "1 pagaj, 1 bosak",
        "2 kotwice z długimi linami",
        "2 długie cumy",
        "1 szpring",
        "6 odbijaczy",
        "krawaty",
        "komplet poduszek 10 szt",
      ],
    },
    previewGallery: [
      "antila-27-skellige/skellige1.jpg",
      "antila-27-skellige/skellige4.jpg",
    ],
    gallery: [
      "antila-27-skellige/skellige1.jpg",
      "antila-27-skellige/skellige2.jpg",
      "antila-27-skellige/skellige3.jpg",
      "antila-27-skellige/skellige4.jpg",
      "antila-27-skellige/skellige5.jpg",
      "antila-27-skellige/skellige6.jpg",
      "antila-27-skellige/skellige7.jpg",
      "antila-27-skellige/skellige8.jpg",
      "antila-27-skellige/skellige9.jpg",
      "antila-27-skellige/skellige10.jpg",
      "antila-27-skellige/skellige11.jpg",
      "antila-27-skellige/skellige12.jpg",
      "antila-27-skellige/skellige13.jpg",
      "antila-27-skellige/skellige14.jpg",
      "antila-27-skellige/skellige15.jpg",
    ],
    priceList: {
      "16.04 - 30.04": "370",
      "30.04 - 04.05": "500",
      "04.05 - 31.05": "400",
      "31.05 - 14.06": "400",
      "14.06 - 21.06": "500",
      "21.06 - 28.06": "450",
      "28.06 - 05.07": "500",
      "05.07 - 12.07": "540",
      "12.07 - 16.08": "570",
      "16.08 - 23.08": "500",
      "23.08 - 06.09": "450",
      "06.09 - 30.09": "350",
    },
  },
  {
    id: "Antila 27 Aldonika",
    url: "antila-27-aldonika",
    technicalData: {
      year: {
        label: technicalDataLabels.year,
        value: "2023",
      },
      berths: {
        label: technicalDataLabels.berths,
        value: "3 podwójne + 2 w mesie",
      },
      length: {
        label: technicalDataLabels.length,
        value: "8,24 m",
      },
      width: {
        label: technicalDataLabels.width,
        value: "2,70 m",
      },
      height: {
        label: technicalDataLabels.height,
        value: "1,88 m",
      },
      people: {
        label: technicalDataLabels.people,
        value: "6+2",
      },
      engine: {
        label: technicalDataLabels.engine,
        value: "zaburtowy Tohatsu 9,8 KM",
      },
      depth: {
        label: technicalDataLabels.depth,
        value: "0,32/1,36 m",
      },
      mass: {
        label: technicalDataLabels.mass,
        value: "3200 kg",
      },
      balast: {
        label: technicalDataLabels.balast,
        value: "900 kg",
      },
      sails: {
        label: technicalDataLabels.sails,
        value: "38 m<sup>2</sup>",
      },
      keelType: {
        label: technicalDataLabels.keelType,
        value: technicalDataValues.keelType,
      },
      keelWeight: {
        label: technicalDataLabels.keelWeight,
        value: "100 kg",
      },
      stere: {
        label: technicalDataLabels.stere,
        value: technicalDataValues.stere,
      },
    },
    equipment: {
      sailing: [
        "szprycbuda",
        "patent do stawiania masztu typu ramka",
        "rolfok na sztywnym sztagu",
        "podpórka podmasztowa",
        "lazy jack",
        "2 refbanty",
        "relingi",
        "odpinane pasy boczne",
        "tent przeciwdeszczowy",
        "grot na pełzaczach",
        "drabinka rufowa",
        "stopień na koszu dziobowym",
        "stolik kokpitowy",
      ],
      galleyAndMess: [
        "lodówka",
        "ogrzewanie Webasto",
        "instalacja wodna w kambuzie i WC",
        "kuchenka 2 palnikowa",
        "zlewozmywak",
        "naczynia kuchenne",
        "zastawa stołowa",
        "sztućce",
      ],
      powerAndMultimedia: [
        "radio MP3, USB",
        "automatyczny prostownik",
        "gniazda 12V i 230V",
        "przedłużacz",
        "akumulator 2 x 100 Ah",
      ],
      security: [
        "komplet środków ratunkowych 8 kamizelek + koło",
        "gaśnica",
        "ubezpieczenie OC, CASCO i NW",
      ],
      exploitation: [
        "zbiorniki na wodę 80 l",
        "paliwo pełny do pełnego",
        "butla gazowa 3 kg",
      ],
      other: [
        "WC chemiczne w osobnej kabinie",
        "skrzynka narzędziowa",
        "siekiera",
        "saperka",
        "wiadro",
        "miska",
        "szczotka do pokładu",
        "szufelka ze zmiotką",
        "1 pagaj, 1 bosak",
        "2 kotwice z długimi linami",
        "2 długie cumy",
        "1 szpring",
        "6 odbijaczy",
        "krawaty",
        "komplet poduszek 10 szt",
      ],
    },
    previewGallery: [
      "antila-27-aldonika/aldonika1.jpg",
      "antila-27-aldonika/aldonika4.jpg",
    ],
    gallery: [
      "antila-27-aldonika/aldonika1.jpg",
      "antila-27-aldonika/aldonika2.jpg",
      "antila-27-aldonika/aldonika3.jpg",
      "antila-27-aldonika/aldonika4.jpg",
      "antila-27-aldonika/aldonika5.jpg",
      "antila-27-aldonika/aldonika6.jpg",
      "antila-27-aldonika/aldonika7.jpg",
      "antila-27-aldonika/aldonika8.jpg",
      "antila-27-aldonika/aldonika9.jpg",
      "antila-27-aldonika/aldonika10.jpg",
      "antila-27-aldonika/aldonika11.jpg",
      "antila-27-aldonika/aldonika12.jpg",
      "antila-27-aldonika/aldonika13.jpg",
      "antila-27-aldonika/aldonika14.jpg",
      "antila-27-aldonika/aldonika15.jpg",
      "antila-27-aldonika/aldonika16.jpg",
      "antila-27-aldonika/aldonika17.jpg",
      "antila-27-aldonika/aldonika18.jpg",
    ],
    priceList: {
      "16.04 - 30.04": "370",
      "30.04 - 04.05": "500",
      "04.05 - 31.05": "400",
      "31.05 - 14.06": "400",
      "14.06 - 21.06": "500",
      "21.06 - 28.06": "450",
      "28.06 - 05.07": "520",
      "05.07 - 12.07": "540",
      "12.07 - 16.08": "570",
      "16.08 - 23.08": "500",
      "23.08 - 06.09": "450",
      "06.09 - 30.09": "350",
    },
  },
  {
    id: "Antila 33.3 Przygoda",
    url: "antila-333-przygoda",
    technicalData: {
      year: {
        label: technicalDataLabels.year,
        value: "2021",
      },
      berths: {
        label: technicalDataLabels.berths,
        value: "3 podwójne + 2 w mesie",
      },
      length: {
        label: technicalDataLabels.length,
        value: "10,30 m",
      },
      width: {
        label: technicalDataLabels.width,
        value: "3,24 m",
      },
      height: {
        label: technicalDataLabels.height,
        value: "1,95 m",
      },
      people: {
        label: technicalDataLabels.people,
        value: "6+4",
      },
      engine: {
        label: technicalDataLabels.engine,
        value: "stacjonarny 21 KM",
      },
      depth: {
        label: technicalDataLabels.depth,
        value: "0,45/1,80 m",
      },
      mass: {
        label: technicalDataLabels.mass,
        value: "4750 kg",
      },
      balast: {
        label: technicalDataLabels.balast,
        value: "1450 kg",
      },
      sails: {
        label: technicalDataLabels.sails,
        value: "52 m<sup>2</sup>",
      },
      keelType: {
        label: technicalDataLabels.keelType,
        value: technicalDataValues.keelType,
      },
      keelWeight: {
        label: technicalDataLabels.keelWeight,
        value: "120 kg",
      },
      stere: {
        label: technicalDataLabels.stere,
        value: technicalDataValues.stere,
      },
    },
    equipment: {
      sailing: [
        "ster strumieniowy 3KW na dziobie",
        "szprycbuda",
        "echosonda",
        "patent do stawiania masztu typu ramka + elektryczny kabestan",
        "rolfok na sztywnym sztagu",
        "podpórka podmasztowa",
        "lazy jack",
        "2 refbanty",
        "relingi",
        "odpinane pasy boczne",
        "tent przeciwdeszczowy",
        "grot na pełzaczach",
        "drabinka rufowa",
        "stopień na koszu dziobowym",
        "stolik kokpitowy",
      ],
      galleyAndMess: [
        "lodówka",
        "ogrzewanie Webasto",
        "instalacja wodna w kambuzie i WC",
        "kuchenka 2 palnikowa",
        "zlewozmywak",
        "naczynia kuchenne",
        "zastawa stołowa",
        "sztućce",
      ],
      powerAndMultimedia: [
        "oświetlenie elektryczne LED",
        "radio MP3, USB",
        "automatyczny prostownik",
        "gniazda 12V i 230V",
        "przedłużacz",
        "akumulator 2 x 100 Ah",
      ],
      security: [
        "komplet środków ratunkowych 8 kamizelek + koło",
        "gaśnica",
        "ubezpieczenie OC, CASCO i NW",
      ],
      exploitation: [
        "zbiorniki na wodę 100 l",
        "paliwo pełny do pełnego",
        "butla gazowa 3 kg",
      ],
      other: [
        "WC chemiczne w osobnej kabinie",
        "skrzynka narzędziowa",
        "siekiera",
        "saperka",
        "wiadro",
        "miska",
        "szczotka do pokładu",
        "szufelka ze zmiotką",
        "2 pagaje, 1 bosak",
        "2 kotwice z długimi linami",
        "2 długie cumy",
        "1 szpring",
        "8 odbijaczy",
        "krawaty",
      ],
    },
    previewGallery: [
      "antila-333-przygoda/przygoda1.jpg",
      "antila-333-przygoda/przygoda4.jpg",
    ],
    gallery: [
      "antila-333-przygoda/przygoda1.jpg",
      "antila-333-przygoda/przygoda2.jpg",
      "antila-333-przygoda/przygoda3.jpg",
      "antila-333-przygoda/przygoda4.jpg",
      "antila-333-przygoda/przygoda5.jpg",
      "antila-333-przygoda/przygoda6.jpg",
      "antila-333-przygoda/przygoda7.jpg",
      "antila-333-przygoda/przygoda8.jpg",
    ],
    priceList: {
      "16.04 - 30.04": "500",
      "30.04 - 04.05": "800",
      "04.05 - 01.06": "600",
      "01.06 - 15.06": "620",
      "15.06 - 22.06": "650",
      "22.06 - 29.06": "700",
      "29.06 - 06.07": "720",
      "06.07 - 13.07": "750",
      "13.07 - 17.08": "800",
      "17.08 - 23.08": "700",
      "28.08 - 07.09": "600",
      "07.09 - 30.09": "500",
    },
  },
  {
    id: "Antila 28.2 Galapagos",
    url: "antila-282-galapagos",
    technicalData: {
      year: {
        label: technicalDataLabels.year,
        value: "2023",
      },
      berths: {
        label: technicalDataLabels.berths,
        value: "3 podwójne + 2 w mesie",
      },
      length: {
        label: technicalDataLabels.length,
        value: "8,85 m",
      },
      width: {
        label: technicalDataLabels.width,
        value: "3,07 m",
      },
      height: {
        label: technicalDataLabels.height,
        value: "1,86 m",
      },
      people: {
        label: technicalDataLabels.people,
        value: "8+2",
      },
      engine: {
        label: technicalDataLabels.engine,
        value: "zaburtowy Tohatsu 9,8 KM",
      },
      depth: {
        label: technicalDataLabels.depth,
        value: "0,43/1,75 m",
      },
      mass: {
        label: technicalDataLabels.mass,
        value: "4000 kg",
      },
      balast: {
        label: technicalDataLabels.balast,
        value: "1000 kg",
      },
      sails: {
        label: technicalDataLabels.sails,
        value: "39 m<sup>2</sup>",
      },
      keelType: {
        label: technicalDataLabels.keelType,
        value: technicalDataValues.keelType,
      },
      keelWeight: {
        label: technicalDataLabels.keelWeight,
        value: "90 kg",
      },
      stere: {
        label: technicalDataLabels.stere,
        value: technicalDataValues.stere,
      },
    },
    equipment: {
      sailing: [
        "szprycbuda",
        "patent do stawiania masztu typu ramka",
        "rolfok na sztywnym sztagu",
        "podpórka podmasztowa",
        "lazy jack",
        "2 refbanty",
        "relingi",
        "odpinane pasy boczne",
        "tent przeciwdeszczowy",
        "grot na pełzaczach",
        "drabinka rufowa",
        "stopień na koszu dziobowym",
        "stolik kokpitowy",
      ],
      galleyAndMess: [
        "lodówka",
        "ogrzewanie Webasto",
        "instalacja wodna w kambuzie i WC",
        "kuchenka 2 palnikowa",
        "zlewozmywak",
        "naczynia kuchenne",
        "zastawa stołowa",
        "sztućce",
      ],
      powerAndMultimedia: [
        "radio MP3, USB, Bluetooth",
        "automatyczny prostownik",
        "gniazda 12V i 230V",
        "przedłużacz",
        "akumulator 2 x 10 Ah",
      ],
      security: [
        "komplet środków ratunkowych 8 kamizelek + koło",
        "gaśnica",
        "ubezpieczenie OC, CASCO i NW",
      ],
      exploitation: [
        "zbiorniki na wodę 80 l",
        "paliwo pełny do pełnego",
        "butla gazowa 3 kg",
      ],
      other: [
        "WC chemiczne w osobnej kabinie",
        "skrzynka narzędziowa",
        "siekiera",
        "saperka",
        "wiadro",
        "miska",
        "szczotka do pokładu",
        "szufelka ze zmiotką",
        "1 pagaj, 1 bosak",
        "2 kotwice z długimi linami",
        "2 długie cumy",
        "1 szpring",
        "6 odbijaczy",
        "krawaty",
        "komplet poduszek 10 szt",
      ],
    },
    previewGallery: [
      "antila-282-galapagos/galapagos1.jpg",
      "antila-282-galapagos/galapagos4.jpg",
    ],
    gallery: [
      "antila-282-galapagos/galapagos1.jpg",
      "antila-282-galapagos/galapagos2.jpg",
      "antila-282-galapagos/galapagos3.jpg",
      "antila-282-galapagos/galapagos4.jpg",
      "antila-282-galapagos/galapagos5.jpg",
      "antila-282-galapagos/galapagos6.jpg",
      "antila-282-galapagos/galapagos7.jpg",
      "antila-282-galapagos/galapagos8.jpg",
      "antila-282-galapagos/galapagos9.jpg",
      "antila-282-galapagos/galapagos10.jpg",
      "antila-282-galapagos/galapagos11.jpg",
      "antila-282-galapagos/galapagos12.jpg",
    ],
    priceList: {
      "16.04 - 30.04": "400",
      "30.04 - 04.05": "550",
      "04.05 - 31.05": "450",
      "31.05 - 14.06": "480",
      "14.06 - 21.06": "520",
      "21.06 - 28.06": "470",
      "28.06 - 05.07": "550",
      "05.07 - 12.07": "600",
      "12.07 - 16.08": "650",
      "16.08 - 23.08": "600",
      "23.08 - 06.09": "500",
      "06.09 - 30.09": "400",
    },
  },
]

export const saturdayDates: string[] = [
  "16.04 - 30.04",
  "30.04 - 04.05",
  "04.05 - 31.05",
  "31.05 - 14.06",
  "14.06 - 21.06",
  "21.06 - 28.06",
  "28.06 - 05.07",
  "05.07 - 12.07",
  "12.07 - 16.08",
  "16.08 - 23.08",
  "23.08 - 06.09",
  "06.09 - 30.09",
]

export const sundayDates: string[] = [
  "16.04 - 30.04",
  "30.04 - 04.05",
  "04.05 - 01.06",
  "01.06 - 15.06",
  "15.06 - 22.06",
  "22.06 - 29.06",
  "29.06 - 06.07",
  "06.07 - 13.07",
  "13.07 - 17.08",
  "17.08 - 23.08",
  "28.08 - 07.09",
  "07.09 - 30.09",
]

export const saturdayYachts: Yacht[] = yachts.filter(
  (y) =>
    y.id === "Antila 27 Biały Wilk" ||
    y.id === "Antila 27 Skellige" ||
    y.id === "Antila 26CC Solaris" ||
    y.id === "Phobos 25 Saskia" ||
    y.id === "Antila 26CC Driada" ||
    y.id === "Antila 27 Aldonika" ||
    y.id === "Antila 28.2 Galapagos"
)

export const sundayYachts: Yacht[] = yachts.filter(
  (y) =>
    y.id === "Twister 800N Strzyga" ||
    y.id === "Twister 800N Harpia" ||
    y.id === "Antila 24.4 Borneo" ||
    y.id === "Antila 33.3 Przygoda" ||
    y.id === "Aquatic 25T Morrigan"
)

export default yachts
