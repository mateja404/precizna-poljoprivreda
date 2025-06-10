const dataKurs = [
  {
    id: "osnove-precizne-poljoprivrede",
    title: "OSNOVE PRECIZNE POLJOPRIVREDE",
    description: `Precizna poljoprivreda kao tehnološki koncept značajno odstupa od tradicionalne poljoprivrede jer se procedure prilagođavaju vremenskom i prostornom domenu, a odluke donose na osnovu pouzdanih prostornih informacija, znanja iz više naučnih disciplina i najsavremenije opreme. Poljoprivredni proizvođači kao budući korisnici savremene opreme (za đubrenje i detekciju različitih parametara na njivi) koja se koristi u preciznoj poljoprivredi, u velikoj meri nisu dovoljno inforisani o samom konceptu i raspoloživim alatima, te postoji realna potreba za njihovom permanentnom edukacijom. Učesnici kursa bi dobili osnovne informacije na temu savremenih alata u poljoprivredi koji bi im mogli koristiti u svakodnevnom radu. Na osnovu bogatog iskustva, predavača sa Poljoprivrednog fakulteta Univerziteta u Novom Sadu u korišćenju dronskih sistema (dornova za prskanje i daljinsku detekciju), različitih senzorskih sistema za detekciju parametara zemljišta i biljaka, korišćenja GPS i GIS platformi, razvoju algoritama za predikciju prinosa i đubrenja azotom na osnovi NDVI i multispektralnih snimaka, oformili smo specijalizovan kurs "Osnove precizna poljoprivrede".`,
    durationTitle: "TRAJANJE KURSA",
    durationLong: `Sveobuhvatni 10-dnevni kurs "Osnove precizna poljoprivrede", koji traje dve uzastopne nedelje sa po 4 školska časa dnevno (ukupno 40 časova). Nastava se održava u večernjim satima, čime se omogućava polaznicima da pohađaju bez ometanja njihovih dnevnih obaveza.`,
    cenaKursa: "55.000 rsd",
  },
  {
    id: "dronovi-u-poljoprivredi",
    title: "DRONOVI U POLJOPRIVREDI",
    description: `Kurs " Dronovi u poljoprivredi " pruža sveobuhvatno znanje o primeni dronova u poljoprivredi. Naučićete kako koristiti dronove za efikasno praćenje stanja i zaštitu biljaka, optimizirajući proizvodnju i smanjujući upotrebu hemikalija i resursa. Pridružite nam se i postanite stručnjak u ovoj naprednoj tehnologiji za unapređenje poljoprivredne proizvodnje.`,
    durationTitle: "TRAJANJE KURSA",
    durationLong: `Sveobuhvatni 10-dnevni kurs "Dronovi u poljoprivredi", koji objedinjuje module zaštite biljaka i monitoringa, traje dve uzastopne nedelje sa po 4 školska časa dnevno (ukupno 40 časova). Nastava se održava u večernjim satima, čime se omogućava polaznicima da pohađaju bez ometanja njihovih dnevnih obaveza.`,
    cenaKursa: "359.000 rsd",
  },
  {
    id: "dronovi-za-zaštitu-biljaka",
    title: "DRONOVI ZA ZAŠTITU BILJAKA",
    description: `Kurs "Dronovi u zaštiti biljaka" omogućava duboko razumevanje kako dronovi revolucioniziraju poljoprivrednu zaštitu bilja. Naučite kako koristiti dronove za efikasnu i preciznu distribuciju pesticida, optimizirajući potrošnju resursa i smanjujući ekološki uticaj. Postanite ekspert u ovom inovativnom pristupu zaštiti biljaka.`,
    durationTitle: "TRAJANJE KURSA",
    durationLong: `Kurs "Dronovi za prskanje u poljoprivredi" organizuje se tokom 5 radnih dana, sa po četiri školska časa dnevno, svaki traje 45 minuta. Kursevi se održavaju u večernjim satima, čime se omogućava polaznicima da uče bez narušavanja njihovih redovnih aktivnosti. Ovaj kurs pokriva sve od tehničkih aspekata upotrebe dronova za prskanje, preko sigurnosnih procedura, do naprednih tehnika za efikasno distribuiranje pesticida. Učesnici kursa stiču praktično znanje i iskustvo potrebno za optimizaciju zaštite biljaka i unapređenje poljoprivredne produktivnosti.`,
    cenaKursa: "211.500 rsd",
  },
  {
    id: "dronovi-za-monitoring-u-poljoprivredi",
    title: "DRONOVI ZA MONITORING U POLJOPRIVREDI",
    description: `Kurs "Dronovi za monitoring u poljoprivredi" pruža praktično i teorijsko znanje o upotrebi dronova u optimizaciji poljoprivredne proizvodnje. Polaznici će naučiti kako efikasno koristiti dronove za praćenje stanja useva, detekciju bolesti i štetočina, kao i za kreiranje varijabilnih mapa. Ovaj kurs omogućava povećanje efikasnosti poljoprivredne proizvodnje uz smanjenje resursa.`,
    durationTitle: "TRAJANJE KURSA",
    durationLong: `Kurs "Dronovi za monitoring u poljoprivredi" traje ukupno pet radnih dana, sa četiri časa nastave svakog dana. Svaki čas traje 45 minuta, što čini ukupno 20 nastavnih jedinica. Nastava se organizuje u večernjim časovima kako bi omogućila polaznicima da učestvuju bez ometanja njihovih dnevnih obaveza. Ovaj intenzivni kurs pruža temeljno razumevanje korišćenja dronova u poljoprivredi i obuhvata različite aspekte, uključujući praćenje useva, detekciju bolesti i štetočina, kao i precizno prskanje. Tokom pet dana, polaznici će steći praktične veštine i teorijsko znanje koje će im omogućiti da primene ove tehnike u stvarnim poljoprivrednim situacijama. Kurs je osmišljen kako bi polaznicima pružio sveobuhvatno obrazovanje u ovoj oblasti, uz naglasak na praktičnoj primeni dronova u poljoprivredi.`,
    cenaKursa: "179.000 rsd",
  },
  {
    id: "kurs-za-rukovaoce-sušara-u-poljoprivredi",
    title: "KURS ZA RUKOVAOCE SUŠARA U POLJOPRIVREDI",
    description: `Departman za poljoprivrednu tehniku dvadeset godina radi na posebnoj obuci stručnjaka koji brinu o sušenju i skladištenju svega onoga što se u domaćoj poljoprivredi proizvede.
    Blizu 1000 rukovaoca sušara iz Srbije i regiona do sada je pohađalo kurs. Predavači su profesori Poljoprivrednog fakulteta sa višedecenijskim iskustvom kako u obrazovanju tako i u praksi.
    Pozivamo Vas da uputite vaše rukovaoce sušarom na obuku kod nas, pa čak i ako su ga pohađali pre nekoliko godina, Vaša firma će imati višestruke koristi jer ćete biti sigurni da će se:
    Znatno smanjiti opasnost od požara,
    Potrošiti manje goriva za sušenje,
    Imati bolji kvalitet proizvoda koji sušite i
    Povećati odgovornost rukovaoca sušare.
    `,
    durationTitle: "TRAJANJE KURSA",
    durationLong: `Obuke se održavaju tokom prve nedelje februara i juna tekuće godine na Poljoprivrednom fakultetu Univerziteta u Novom Sadu, tokom 5 radnih dana.`,
    cenaKursa:
      "Cena obuke zavisi od broja učesnika iz jedne firme. U cenu je uračunato: pohađanje nastave, potrebna literatura u formi knjige, konsultacije, polaganje ispita i izdavanje sertifikata. Za dodatne informacije i pitanja kontaktirajte rukovodioca obuke.",
  },
];

//dropdowns

export const dropdownsKurs = [
  {
    id: "osnove-precizne-poljoprivrede",
    title: "SADRŽAJ KURSA",
    options: [
      <li className="kurs-item">
        <b>Uvod u Preciznu Poljoprivredu:</b> Razumevanje koncepta i značaja
        precizne poljoprivrede.
      </li>,
      <li className="kurs-item">
        <b>Prostorne Informacije u Poljoprivredi:</b> Upotreba GIS platformi za
        bolje prostorno planiranje.
      </li>,
      <li className="kurs-item">
        <b>Dronovi u Praksi:</b> Praktična primena dronova za prskanje i
        daljinsku detekciju u poljoprivredi.
      </li>,
      <li className="kurs-item">
        <b>Senzorski Sistemi:</b> Korišćenje naprednih senzora za precizno
        merenje parametara zemljišta i biljaka.
      </li>,
      <li className="kurs-item">
        <b>GPS Tehnologija u Navigaciji:</b> Integracija GPS sistema za preciznu
        navigaciju na poljoprivrednom zemljištu.
      </li>,
      <li className="kurs-item">
        <b>Algoritmi za Prinos:</b> Razvoj algoritama za precizno predviđanje
        prinosa na osnovu NDVI i multispektralnih snimaka.
      </li>,
      <li className="kurs-item">
        <b>Đubrenje Azotom:</b> Efikasno đubrenje azotom kroz napredne
        tehnologije.
      </li>,
      <li className="kurs-item">
        <b>Edukacija o Korišćenju Savremenih Alata:</b> Edukacija
        poljoprivrednika o dostupnim tehnologijama.
      </li>,
      <li className="kurs-item">
        <b>Praktična Primena Kursa:</b> Implementacija stečenih znanja u
        svakodnevnom radu na poljoprivrednom gazdinstvu.
      </li>,
      <li className="kurs-item">
        <b>Optimizacija Poljoprivredne Proizvodnje:</b> Postizanje efikasnije i
        održive poljoprivredne proizvodnje kroz primenu preciznih tehnologija.
      </li>,
    ],
  },
  {
    id: "osnove-precizne-poljoprivrede",
    title: "SERTIFIKACIJA",
    options: [`Uskoro Obaveštenje.`],
  },
  {
    id: "osnove-precizne-poljoprivrede",
    title: "PREDAVAČI",
    options: [
      <ol className="predavaci-list">
        <li>
          <b>
            1. Dr Marko Kostić, vanredni profesor, Poljoprivredni fakultet, Novi
            Sad
          </b>
        </li>

        <li>
          <b>
            2. Dr Zoran Stamenković, docent, Poljoprivredni fakultet, Novi Sad
          </b>
        </li>

        <li>
          <b>
            3. MSc Krstan Kešelj, asistent, Poljoprivredni fakultet, Novi Sad
          </b>
        </li>
      </ol>,
    ],
  },
  {
    id: "dronovi-u-poljoprivredi",
    title: "SADRŽAJ KURSA",
    options: [
      <li className="kurs-item">
        Razumevanje i rukovanje dronovima specijalizovanim za prskanje i
        monitoring u poljoprivredi.
      </li>,
      <li className="kurs-item">
        Ovladavanje sigurnosnim standardima i procedurama upotrebe dronova.
      </li>,
      <li className="kurs-item">
        Mapiranje poljoprivrednih površina i kreiranje efikasnih planova
        prskanja, kao i varijabilnih mapa za precizno poljoprivredno delovanje.
      </li>,
      <li className="kurs-item">
        Multispektralna analiza i obrada slika za detaljan monitoring useva.
      </li>,
      <li className="kurs-item">
        Tehnike za efikasno distribuiranje pesticida, detekciju bolesti i
        štetočina putem dronova.
      </li>,
      <li className="kurs-item">
        Praktične veštine letenja i upravljanja dronom za različite
        poljoprivredne misije.
      </li>,
      <li className="kurs-item">
        Pravni, etički i ekonomski aspekti korišćenja dronova u poljoprivredi.
      </li>,
    ],
  },
  {
    id: "dronovi-u-poljoprivredi",
    title: "ZAVRŠNI PROJEKAT I SERTIFIKACIJA",
    options: [`Uskoro Obaveštenje.`],
  },
  {
    id: "dronovi-u-poljoprivredi",
    title: "PREDAVAČI",
    options: [
      <ol className="predavaci-list">
        <li>
          <b>
            1. Dr Zoran Stamenković, docent, Poljoprivredni fakultet, Novi Sad
          </b>
        </li>

        <li>
          <b>
            2. MSc Krstan Kešelj, asistent, Poljoprivredni fakultet, Novi Sad
          </b>
        </li>
      </ol>,
    ],
  },
  {
    id: "dronovi-za-zaštitu-biljaka",
    title: "SADRŽAJ KURSA",
    options: [
      <li className="kurs-item">
        Polaznici će naučiti kako efikasno upravljati dronovima namenjenim za
        prskanje u poljoprivredne svrhe
      </li>,
      <li className="kurs-item">
        Upoznaće se sa ključnim aspektima dronova u zaštiti bilja i sa
        sigurnosnim standardima za njihovo korišćenje.
      </li>,
      <li className="kurs-item">
        Razumeće kako se različiti tipovi prskalica i senzora integrišu u sistem
        za prskanje dronovima.
      </li>,
      <li className="kurs-item">
        Ovladaće veštinama mapiranja poljoprivrednih površina i kreiranja
        efikasnih planova prskanja.
      </li>,
      <li className="kurs-item">
        Steći će iskustvo u izvođenju letova za prskanje, s posebnim fokusom na
        praktične veštine upravljanja dronom.
      </li>,
      <li className="kurs-item">
        Naučiće kako analizirati efekte prskanja i optimizovati distribuciju
        sredstava za zaštitu bilja.
      </li>,
      <li className="kurs-item">
        Upoznaće se sa najnovijim tehnološkim dostignućima u oblasti prskanja
        dronovima, uključujući automatizaciju i varijabilno doziranje.
      </li>,
    ],
  },
  {
    id: "dronovi-za-zaštitu-biljaka",
    title: "ZAVRŠNI PROJEKAT I SERTIFIKACIJA",
    options: [`Uskoro Obaveštenje.`],
  },
  {
    id: "dronovi-za-zaštitu-biljaka",
    title: "PREDAVAČI",
    options: [
      <ol className="predavaci-list">
        <li>
          <b>
            1. Dr Zoran Stamenković, docent, Poljoprivredni fakultet, Novi Sad
          </b>
        </li>

        <li>
          <b>
            2. MSc Krstan Kešelj, asistent, Poljoprivredni fakultet, Novi Sad
          </b>
        </li>
      </ol>,
    ],
  },
  {
    id: "dronovi-za-monitoring-u-poljoprivredi",
    title: "SADRŽAJ KURSA",
    options: [
      <li className="kurs-item">
        Polaznici će biti obučeni za upravljane i letenje dronom.
      </li>,
      <li className="kurs-item">
        Steći će uvid o ulozi dronova u poljoprivredi i osnovama njihovog
        sigurnog rukovanja i precedura koje to prate.
      </li>,
      <li className="kurs-item">
        Ovladaće tehnikama obrade slika i softverima neophodnim za analizu
        podataka prikupljenih dronom.
      </li>,
      <li className="kurs-item">
        Steći će praktično iskustvo u planiranju letačkih misija i prikupljanju
        podataka pomoću drona.
      </li>,
      <li className="kurs-item">
        Naučiće kako interpretirati dobijene podatke radi preciznog uvida u
        stanje useva.
      </li>,
      <li className="kurs-item">
        Biće upoznati s naprednim tehnologijama i metodama, kao što su
        multispektralna analiza stanja useva, mapiranje parcela i kreiranje
        varjabilnih mapa.
      </li>,
      <li className="kurs-item">
        Razumeće pravne, etičke i ekonomske aspekte upotrebe dronova u
        poljoprivredi, kao i načine integracije dron tehnologija u postojeće
        poljoprivredne operacije.
      </li>,
    ],
  },
  {
    id: "dronovi-za-monitoring-u-poljoprivredi",
    title: "ZAVRŠNI PROJEKAT I SERTIFIKACIJA",
    options: [`Uskoro Obaveštenje.`],
  },
  {
    id: "dronovi-za-monitoring-u-poljoprivredi",
    title: "PREDAVAČI",
    options: [
      <ol className="predavaci-list">
        <li>
          <b>
            1. Dr Zoran Stamenković, docent, Poljoprivredni fakultet, Novi Sad
          </b>
        </li>

        <li>
          <b>
            2. MSc Krstan Kešelj, asistent, Poljoprivredni fakultet, Novi Sad
          </b>
        </li>
      </ol>,
    ],
  },
  {
    id: "kurs-za-rukovaoce-sušara-u-poljoprivredi",
    title: "SADRŽAJ KURSA",
    options: [
      <div>
        <p style={{ marginBottom: "10px", fontWeight: "bold" }}>
          Plan i program kursa obuhvata:
        </p>
        <li className="kurs-item">goriva,</li>,
        <li className="kurs-item">gorionike,</li>,
        <li className="kurs-item">energetiku,</li>,
        <li className="kurs-item">tehnologije sušenja i skladištenja,</li>,
        <li className="kurs-item">konstrukcije sušara,</li>,
        <li className="kurs-item">opremu na centru,</li>,
        <li className="kurs-item">rukovanje sušarom,</li>,
        <li className="kurs-item">automatiku,</li>,
        <li className="kurs-item">evidenciju rada,</li>,
        <li className="kurs-item">održavanje,</li>,
        <li className="kurs-item">protivpožarne i bezbednosne mere i dr.</li>,
      </div>,
    ],
  },
  {
    id: "kurs-za-rukovaoce-sušara-u-poljoprivredi",
    title: "ZAVRŠNI ISPIT I SERTIFIKACIJA",
    options: [`Uskoro Obaveštenje.`],
  },
  {
    id: "kurs-za-rukovaoce-sušara-u-poljoprivredi",
    title: "PREDAVAČI",
    options: [
      <ol className="predavaci-list">
        <li>
          <b>
            1. Dr Ivan Pavkov, redovni profesor, Poljoprivredni fakultet, Novi
            Sad
          </b>
        </li>

        <li>
          <b>
            2. Dr Zoran Stamenković, docent, Poljoprivredni fakultet, Novi Sad
          </b>
        </li>

        <li>
          <b>
            3. MSc Krstan Kešelj, asistent, Poljoprivredni fakultet, Novi Sad
          </b>
        </li>
      </ol>,
    ],
  },
];

export default dataKurs;
