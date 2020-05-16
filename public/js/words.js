const words = {
  english: ["the", "be", "of", "and", "a", "to", "in", "he", "have", "it", "that", "for", "they", "I", "with", "as", "not", "on", "she", "at", "by", "this", "we", "you", "do", "but", "from", "or", "which", "one", "would", "all", "will", "there", "say", "who", "make", "when", "can", "more", "if", "no", "man", "out", "other", "so", "what", "time", "up", "go", "about", "than", "into", "could", "state", "only", "new", "year", "some", "take", "come", "these", "know", "see", "use", "get", "like", "then", "first", "any", "work", "now", "may", "such", "give", "over", "think", "most", "even", "find", "day", "also", "after", "way", "many", "must", "look", "before", "great", "back", "through", "long", "where", "much", "should", "well", "people", "down", "own", "just", "because", "good", "each", "those", "feel", "seem", "how", "high", "too", "place", "little", "world", "very", "still", "nation", "hand", "old", "life", "tell", "write", "become", "here", "show", "house", "both", "between", "need", "mean", "call", "develop", "under", "last", "right", "move", "thing", "general", "school", "never", "same", "another", "begin", "while", "number", "part", "turn", "real", "leave", "might", "want", "point", "form", "off", "child", "few", "small", "since", "against", "ask", "late", "home", "interest", "large", "person", "end", "open", "public", "follow", "during", "present", "without", "again", "hold", "govern", "around", "possible", "head", "consider", "word", "program", "problem", "however", "lead", "system", "set", "order", "eye", "plan", "run", "keep", "face", "fact", "group", "play", "stand", "increase", "early", "course", "change", "help", "line"],
  english_expanded: ["the", "of", "to", "and", "a", "in", "is", "it", "you", "that", "he", "was", "for", "on", "are", "with", "as", "I", "his", "they", "be", "at", "one", "have", "this", "from", "or", "had", "by", "not", "word", "but", "what", "some", "we", "can", "out", "other", "were", "all", "there", "when", "up", "use", "your", "how", "said", "an", "each", "she", "which", "do", "their", "time", "if", "will", "way", "about", "many", "then", "them", "write", "would", "like", "so", "these", "her", "long", "make", "thing", "see", "him", "two", "has", "look", "more", "day", "could", "go", "come", "did", "number", "sound", "no", "most", "people", "my", "over", "know", "water", "than", "call", "first", "who", "may", "down", "side", "been", "now", "find", "any", "new", "work", "part", "take", "get", "place", "made", "live", "where", "after", "back", "little", "only", "round", "man", "year", "came", "show", "every", "good", "me", "give", "our", "under", "name", "very", "through", "just", "form", "sentence", "great", "think", "say", "help", "low", "line", "differ", "turn", "cause", "much", "mean", "before", "move", "right", "boy", "old", "too", "same", "tell", "does", "set", "three", "want", "air", "well", "also", "play", "small", "end", "put", "home", "read", "hand", "port", "large", "spell", "add", "even", "land", "here", "must", "big", "high", "such", "follow", "act", "why", "ask", "men", "change", "went", "light", "kind", "off", "need", "house", "picture", "try", "us", "again", "animal", "point", "mother", "world", "near", "build", "self", "earth", "father", "head", "stand", "own", "page", "should", "country", "found", "answer", "school", "grow", "study", "still", "learn", "plant", "cover", "food", "sun", "four", "between", "state", "keep", "eye", "never", "last", "let", "thought", "city", "tree", "cross", "farm", "hard", "start", "might", "story", "saw", "far", "sea", "draw", "left", "late", "run", "don't", "while", "press", "close", "night", "real", "life", "few", "north", "open", "seem", "together", "next", "white", "children", "begin", "got", "walk", "example", "ease", "paper", "group", "always", "music", "those", "both", "mark", "often", "letter", "until", "mile", "river", "car", "feet", "care", "second", "book", "carry", "took", "science", "eat", "room", "friend", "began", "idea", "fish", "mountain", "stop", "once", "base", "hear", "horse", "cut", "sure", "watch", "color", "face", "wood", "main", "enough", "plain", "girl", "usual", "young", "ready", "above", "ever", "red", "list", "though", "feel", "talk", "bird", "soon", "body", "dog", "family", "direct", "pose", "leave", "song", "measure", "door", "product", "black", "short", "numeral", "class", "wind", "question", "happen", "complete", "ship", "area", "half", "rock", "order", "fire", "south", "problem", "piece", "told", "knew", "pass", "since", "top", "whole", "king", "space", "heard", "best", "hour", "better", "true", "during", "hundred", "five", "remember", "step", "early", "hold", "west", "ground", "interest", "reach", "fast", "verb", "sing", "listen", "six", "table", "travel", "less", "morning", "ten", "simple", "several", "vowel", "toward", "war", "lay", "against", "pattern", "slow", "center", "love", "person", "money", "serve", "appear", "road", "map", "rain", "rule", "govern", "pull", "cold", "notice", "voice", "unit", "power", "town", "fine", "certain", "fly", "fall", "lead", "cry", "dark", "machine", "note", "wait", "plan", "figure", "star", "box", "noun", "field", "rest", "correct", "able", "pound", "done", "beauty", "drive", "stood", "contain", "front", "teach", "week", "final", "gave", "green", "oh", "quick", "develop", "ocean", "warm", "free", "minute", "strong", "special", "mind", "behind", "clear", "tail", "produce", "fact", "street", "inch", "multiply", "nothing", "course", "stay", "wheel", "full", "force", "blue", "object", "decide", "surface", "deep", "moon", "island", "foot", "system", "busy", "test", "record", "boat", "common", "gold", "possible", "plane", "stead", "dry", "wonder", "laugh", "thousand", "ago", "ran", "check", "game", "shape", "equate", "hot", "miss", "brought", "heat", "snow", "tire", "bring", "yes", "distant", "fill", "east", "paint", "language", "among", "grand", "ball", "yet", "wave", "drop", "heart", "am", "present", "heavy", "dance", "engine", "position", "arm", "wide", "sail", "material", "size", "vary", "settle", "speak", "weight", "general", "ice", "matter", "circle", "pair", "include", "divide", "syllable", "felt", "perhaps", "pick", "sudden", "count", "square", "reason", "length", "represent", "art", "subject", "region", "energy", "hunt", "probable", "bed", "brother", "egg", "ride", "cell", "believe", "fraction", "forest", "sit", "race", "window", "store", "summer", "train", "sleep", "prove", "lone", "leg", "exercise", "wall", "catch", "mount", "wish", "sky", "board", "joy", "winter", "sat", "written", "wild", "instrument", "kept", "glass", "grass", "cow", "job", "edge", "sign", "visit", "past", "soft", "fun", "bright", "gas", "weather", "month", "million", "bear", "finish", "happy", "hope", "flower", "clothe", "strange", "gone", "jump", "baby", "eight", "village", "meet", "root", "buy", "raise", "solve", "metal", "whether", "push", "seven", "paragraph", "third", "shall", "held", "hair", "describe", "cook", "floor", "either", "result", "burn", "hill", "safe", "cat", "century", "consider", "type", "law", "bit", "coast", "copy", "phrase", "silent", "tall", "sand", "soil", "roll", "temperature", "finger", "industry", "value", "fight", "lie", "beat", "excite", "natural", "view", "sense", "ear", "else", "quite", "broke", "case", "middle", "kill", "son", "lake", "moment", "scale", "loud", "spring", "observe", "child", "straight", "consonant", "nation", "dictionary", "milk", "speed", "method", "organ", "pay", "age", "section", "dress", "cloud", "surprise", "quiet", "stone", "tiny", "climb", "cool", "design", "poor", "lot", "experiment", "bottom", "key", "iron", "single", "stick", "flat", "twenty", "skin", "smile", "crease", "hole", "trade", "melody", "trip", "office", "receive", "row", "mouth", "exact", "symbol", "die", "least", "trouble", "shout", "except", "wrote", "seed", "tone", "join", "suggest", "clean", "break", "lady", "yard", "rise", "bad", "blow", "oil", "blood", "touch", "grew", "cent", "mix", "team", "wire", "cost", "lost", "brown", "wear", "garden", "equal", "sent", "choose", "fell", "fit", "flow", "fair", "bank", "collect", "save", "control", "decimal", "gentle", "woman", "captain", "practice", "separate", "difficult", "doctor", "please", "protect", "noon", "whose", "locate", "ring", "character", "insect", "caught", "period", "indicate", "radio", "spoke", "atom", "human", "history", "effect", "electric", "expect", "crop", "modern", "element", "hit", "student", "corner", "party", "supply", "bone", "rail", "imagine", "provide", "agree", "thus", "capital", "won't", "chair", "danger", "fruit", "rich", "thick", "soldier", "process", "operate", "guess", "necessary", "sharp", "wing", "create", "neighbor", "wash", "bat", "rather", "crowd", "corn", "compare", "poem", "string", "bell", "depend", "meat", "rub", "tube", "famous", "dollar", "stream", "fear", "sight", "thin", "triangle", "planet", "hurry", "chief", "colony", "clock", "mine", "tie", "enter", "major", "fresh", "search", "send", "yellow", "gun", "allow", "print", "dead", "spot", "desert", "suit", "current", "lift", "rose", "continue", "block", "chart", "hat", "sell", "success", "company", "subtract", "event", "particular", "deal", "swim", "term", "opposite", "wife", "shoe", "shoulder", "spread", "arrange", "camp", "invent", "cotton", "born", "determine", "quart", "nine", "truck", "noise", "level", "chance", "gather", "shop", "stretch", "throw", "shine", "property", "column", "molecule", "select", "wrong", "gray", "repeat", "require", "broad", "prepare", "salt", "nose", "plural", "anger", "claim", "continent", "oxygen", "sugar", "death", "pretty", "skill", "women", "season", "solution", "magnet", "silver", "thank", "branch", "match", "suffix", "especially", "fig", "afraid", "huge", "sister", "steel", "discuss", "forward", "similar", "guide", "experience", "score", "apple", "bought", "led", "pitch", "coat", "mass", "card", "band", "rope", "slip", "win", "dream", "evening", "condition", "feed", "tool", "total", "basic", "smell", "valley", "nor", "double", "seat", "arrive", "master", "track", "parent", "shore", "division", "sheet", "substance", "favor", "connect", "post", "spend", "chord", "fat", "glad", "original", "share", "station", "dad", "bread", "charge", "proper", "bar", "offer", "segment", "slave", "duck", "instant", "market", "degree", "populate", "chick", "dear", "enemy", "reply", "drink", "occur", "support", "speech", "nature", "range", "steam", "motion", "path", "liquid", "log", "meant", "quotient", "teeth", "shell", "neck"],
  german: ["wie", "ich", "seine", "dass", "er", "war", "für", "auf", "sind", "mit", "sie", "sein", "bei", "ein", "haben", "dies", "aus", "durch", "heiß", "Wort", "aber", "was", "einige", "ist", "es", "Sie", "oder", "hatte", "die", "von", "zu", "und", "ein", "bei", "wir", "können", "aus", "andere", "waren", "die", "tun", "ihre", "Zeit", "wenn", "werden", "wie", "sagte", "ein", "jeder", "sagen", "tut", "Satz", "drei", "wollen", "Luft", "gut", "auch", "spielen", "klein", "Ende", "setzen", "Zuhause", "lesen", "seits", "Hafen", "groß", "buchstabieren", "hinzufügen", "auch", "Lande", "hier", "muss", "groß", "hoch", "so", "folgen", "Akt", "warum", "fragen", "Männer", "Veränderung", "ging", "Licht", "Art", "aus", "müssen", "Haus", "Bild", "versuchen", "uns", "wieder", "Tier", "Punkt", "Mutter", "Welt", "in der Nähe von", "bauen", "selbst", "Erde", "Vater", "jeder", "neu", "Arbeit", "Teil", "nehmen", "erhalten", "Ort", "gemacht", "leben", "wo", "nach", "zurück", "wenig", "nur", "Runde", "Mann", "Jahr", "kam", "zeigen", "jeder", "gut", "mir", "geben", "unsere", "unter", "Name", "sehr", "durch", "nur", "Formular", "Satz", "groß", "denken", "sagen", "Hilfe", "niedrig", "Linie", "abweichen", "wiederum", "Ursache", "viel", "bedeuten", "vor", "Umzug", "Recht", "Junge", "alt", "zu", "gleich", "sie", "alle", "da", "wenn", "nach oben", "Verwendung", "Ihre", "Weg", "über", "viele", "dann", "sie", "schreiben", "würde", "wie", "so", "diese", "sie", "lange", "machen", "Sache", "sehen", "ihm", "zwei", "hat", "suchen", "mehr", "Tag", "könnte", "gehen", "kommen", "tat", "Anzahl", "klingen", "nicht", "am meisten", "Menschen", "meine", "über", "wissen", "Wasser", "als", "Anruf", "erste", "die", "können", "nach unten", "Seite", "gewesen", "jetzt", "finden"],
  spanish: ["como", "I", "su", "que", "él", "era", "para", "en", "son", "con", "ellos", "ser", "en", "uno", "tener", "este", "desde", "por", "caliente", "palabra", "pero", "qué", "algunos", "es", "lo", "usted", "o", "tenido", "la", "de", "a", "y", "un", "en", "nos", "lata", "fuera", "otros", "eran", "que", "hacer", "su", "tiempo", "si", "lo hará", "cómo", "dicho", "un", "cada", "decir", "hace", "conjunto", "tres", "querer", "aire", "así", "también", "jugar", "pequeño", "fin", "poner", "casa", "leer", "mano", "puerto", "grande", "deletrear", "añadir", "incluso", "tierra", "aquí", "debe", "grande", "alto", "tal", "siga", "acto", "por qué", "preguntar", "hombres", "cambio", "se fue", "luz", "tipo", "fuera", "necesitará", "casa", "imagen", "tratar", "nosotros", "de nuevo", "animal", "punto", "madre", "mundo", "cerca", "construir", "auto", "tierra", "padre", "cualquier", "nuevo", "trabajo", "parte", "tomar", "conseguir", "lugar", "hecho", "vivir", "donde", "después", "espalda", "poco", "sólo", "ronda", "hombre", "años", "vino", "show", "cada", "buena", "me", "dar", "nuestro", "bajo", "nombre", "muy", "a través de", "sólo", "forma", "frase", "gran", "pensar", "decir", "ayudar", "bajo", "línea", "ser distinto", "a su vez", "causa", "mucho", "significará", "antes", "movimiento", "derecho", "niño", "viejo", "demasiado", "misma", "ella", "todo", "hay", "cuando", "hasta", "uso", "su", "camino", "acerca", "muchos", "entonces", "ellos", "escribir", "haría", "como", "así", "éstos", "su", "largo", "hacer", "cosa", "ver", "él", "dos", "tiene", "buscar", "más", "día", "podía", "ir", "venir", "hizo", "número", "sonar", "no", "más", "personas", "mi", "sobre", "saber", "agua", "que", "llamada", "primero", "que", "puede", "abajo", "lado", "estado", "ahora", "encontrar"],
  dutch: ["als", "I", "zijn", "dat", "hij", "was", "voor", "op", "zijn", "met", "ze", "zijn", "bij", "een", "hebben", "deze", "van", "door", "heet", "woord", "maar", "wat", "sommige", "is", "het", "u", "of", "had", "de", "van", "aan", "en", "een", "in", "we", "kan", "uit", "andere", "waren", "die", "doen", "hun", "tijd", "indien", "zal", "hoe", "zei", "een", "elk", "vertellen", "doet", "set", "drie", "willen", "lucht", "goed", "ook", "spelen", "klein", "end", "zetten", "thuis", "lezen", "de hand", "poort", "grote", "spell", "toevoegen", "zelfs", "land", "hier", "moet", "grote", "hoog", "dergelijke", "volgen", "act", "waarom", "vragen", "mannen", "verandering", "ging", "licht", "soort", "uitgeschakeld", "nodig hebben", "huis", "afbeelding", "proberen", "ons", "weer", "dier", "punt", "moeder", "wereld", "dichtbij", "bouwen", "zelf", "aarde", "vader", "een", "nieuwe", "werk", "deel", "nemen", "krijgen", "plaats", "gemaakt", "wonen", "waar", "na", "terug", "weinig", "alleen", "ronde", "man", "jaar", "kwam", "Show", "elke", "goed", "mij", "geven", "onze", "onder", "naam", "zeer", "door", "gewoon", "vorm", "zin", "grote", "denken", "zeggen", "helpen", "laag", "lijn", "verschillen", "beurt", "oorzaak", "veel", "betekenen", "voor", "verhuizing", "rechts", "jongen", "oude", "ook", "hetzelfde", "ze", "alle", "er", "wanneer", "omhoog", "gebruiken", "uw", "manier", "over", "veel", "dan", "hen", "schrijven", "zou", "zoals", "dus", "deze", "haar", "lang", "maken", "ding", "zien", "hem", "twee", "heeft", "kijken", "meer", "dag", "kon", "gaan", "komen", "deed", "aantal", "klinken", "geen", "meest", "mensen", "mijn", "meer dan", "weten", "water", "dan", "roep", "eerste", "die", "kan", "naar beneden", "kant", "geweest", "nu", "vinden"],
  french: ["comme", "je", "son", "que", "il", "était", "pour", "sur", "sont", "avec", "ils", "être", "à", "un", "avoir", "ce", "à partir de", "par", "chaud", "mot", "mais", "que", "certains", "est", "il", "vous", "ou", "eu", "la", "de", "à", "et", "un", "dans", "nous", "boîte", "dehors", "autre", "étaient", "qui", "faire", "leur", "temps", "si", "volonté", "comment", "dit", "un", "chaque", "dire", "ne", "ensemble", "trois", "vouloir", "air", "bien", "aussi", "jouer", "petit", "fin", "mettre", "maison", "lire", "main", "port", "grand", "épeler", "ajouter", "même", "terre", "ici", "il faut", "grand", "haut", "tel", "suivre", "acte", "pourquoi", "interroger", "hommes", "changement", "est allé", "lumière", "genre", "de", "besoin", "maison", "image", "essayer", "nous", "encore", "animal", "point", "mère", "monde", "près de", "construire", "soi", "terre", "père", "tout", "nouveau", "travail", "partie", "prendre", "obtenir", "lieu", "fabriqué", "vivre", "où", "après", "arrière", "peu", "seulement", "tour", "homme", "année", "est venu", "montrer", "tous", "bon", "moi", "donner", "notre", "sous", "nom", "très", "par", "juste", "forme", "phrase", "grand", "penser", "dire", "aider", "faible", "ligne", "différer", "tour", "la cause", "beaucoup", "signifier", "avant", "déménagement", "droit", "garçon", "vieux", "trop", "même", "elle", "tous", "là", "quand", "jusqu’à", "utiliser", "votre", "manière", "sur", "beaucoup", "puis", "les", "écrire", "voudrais", "comme", "si", "ces", "son", "long", "faire", "chose", "voir", "lui", "deux", "a", "regarder", "plus", "jour", "pourrait", "aller", "venir", "fait", "nombre", "son", "aucun", "plus", "personnes", "ma", "sur", "savoir", "eau", "que", "appel", "première", "qui", "peut", "vers le bas", "côté", "été", "maintenant", "trouver"],
  polish: ["jak","I","jego","że","on","było","dla","na","są","zespół","oni","być","w","jeden","mieć","tego","z","przez","gorący","słowo","ale","co","niektóre","jest","to","ty","lub","miał","kilka","stopa","do","i","ciągnąć","w","my","puszka","na zewnątrz","inne","były","który","zrobić","ich","czas","jeśli","będzie","jak","powiedział","próba","każda","powiedzieć","nie","zestaw","trzy","chcą","powietrze","dobrze","również","grać","mały","koniec","wkładać","Strona główna","czytaj","ręka","port","duży","zaklęcie","dodać","nawet","ziemia","tutaj","musi","duży","wysoki","takie","śledzić","akt","dlaczego","zapytaj","mężczyźni","zmiana","poszedł","światła","rodzaj","z","potrzeba","dom","obraz","spróbuj","nas","ponownie","zwierząt","punkt","matka","świat","blisko","budować","własny","ziemia","ojciec","dowolny","nowy","praca","część","wziąć","dostać","miejsce","wykonane","żyć","gdzie","później","z powrotem","mało","tylko","okrągły","mężczyzna","rok","spokojnie","pokaż","każdy","dobry","mnie","dać","nasze","pod","Nazwa","bardzo","przez","tylko","formularz","zdanie","wielki","myśleć","powiedzieć","pomoc","niski","linia","różnią","kolej","przyczyna","wiele","oznaczać","przed","ruch","prawo","chłopiec","stary","zbyt","sam","ona","wszystko","tam","kiedy","w górę","zastosowanie","Twój","sposób","o","wiele","następnie","im","pisać","byłoby","jak","tak","te","ją","długo","zrobić","rzecz","zobaczyć","mu","dwa","ma","szukać","więcej","dzień","może","iść","przyjść","nie","liczba","brzmieć","nie","najbardziej","ludzie","My","ponad","wiem","woda","niż","wezwanie","pierwszy","kto","może","w dół","bok","było","teraz","odnaleźć"],
  chinese: ["一","人","里","会","没","她","吗","去","也","有","这","那","不","什","个","来","要","就","我","你","的","是","了","他","么","们","在","说","为","好","吧","知道","我的","和","你的","想","只","很","都","对","把","啊","怎","得","还","过","不是","到","样","飞","远","身","任何","生活","够","号","兰","瑞","达","或","愿","蒂","別","军","正","是不是","证","不用","三","乐","吉","男人","告訴","路","搞","可是","与","次","狗","决","金","史","姆","部","正在","活","刚","回家","贝","如何","须","战","不會","夫","喂","父","亚","肯定","女孩","世界","不要","些","不知道","不能","因","觉","发","像","太","但是","多","打","机","來","好了","用","他的","诉","德","叫","什麼","真","干","心","走","比","死","嘿","出","车","一下","中","好吧","需要","经","妈","候","长","而","错","好的","间","又","国","起","动","杀","于","种","去了","担","名","混蛋","礼","幹","不了","有些","過","後","击","漂亮","神","多少","海","每","哥","教","走吧","好像","单","公","林","女","忙","火","钟","家伙","科","回去","最后","水","不管","麦","泻","鬼","還","船","永","安全","那個","爾","這麼","满","风","皮","威","据","鲁","转","相"],
  korean: ["로","나는","그의","그","그","했다","에 대한","에","아르","와","그들","있다","에","일","이","이","부터","에 의해","뜨거운","단어","하지만","무엇","다소","이다","그","당신","또는","했다","에","의","에","과","이","에","우리","수","아웃","다른","했다","하는","할","자신의","시간","면","것","방법","말했다","이","각","이야기","하지","세트","세","필요","공기","잘","또한","재생","작은","끝","넣어","홈","읽기","손","포트","큰","철자","추가","도","땅","여기","해야","큰","높은","이러한","따라","행위","이유","문의","남자","변경","갔다","빛","종류","오프","필요가있다","집","사진","시험","우리","다시","동물","포인트","어머니","세계","가까운","구축","자기","지구","아버지","모든","새로운","일","일부","소요","도착","장소","만든","살고있다","어디에","후","다시","작은","만","둥근","사람","년","온","쇼","모든","좋은","나를","제공","우리의","아래의","이름","대단히","를 통해","단지","양식","문장","큰","생각","말","도움","낮은","온라인","차이","회전","원인","많은","의미","이전","움직임","바로","소년","늙은","너무","동일","그녀","모든","그곳에","때","올라","사용","당신의","방법","에 대한","많은","다음","그","쓰기","것","같은","그래서","이들","그녀의","긴","확인","일","참조","그","두","이","봐","더","일","수","이동","올","한","수","소리","없음","가장","사람들","내","이상","알고","물","보다","통화","첫째","사람","수도","아래로","측면","하고","지금","발견"]
};