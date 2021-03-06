function get(id){
    return document.getElementById(id);
}

function soundClick() {
    let audio = new Audio();
    audio.src = 'source/finishSound.mp3';
    audio.autoplay = true;
}


function timer() {
    let obj = get('timer_inp');
    obj.innerHTML--;

    if (obj.innerHTML == 0) {
        soundClick();
        get("successWord").style.display = "none";
        get("nextWord").style.display = "none";
        get('playCards').style.display = "none";
        get('teamScore1').innerHTML = score1;
        get('teamScore2').innerHTML = score2;
        get('wordNumber').innerHTML = '';
        checkResults();
        setTimeout(function () {
        }, 1000);
    }
    else {
        setTimeout(timer, 1000);
    }
}


function randomWords(arr) {
    let replace = [];
    for (let i = 0; i < arr.length; i++){
        replace[i] = arr[i];
    }
    for (let i = 1; i < 9; i++) {
        let pos = Math.floor(Math.random() * replace.length + 0);
        get("word"+i).innerHTML = replace[pos];
        replace.splice(pos,1);
    }
}


function randomColor(arr){
    let colorIndex = Math.floor(Math.random()*arr.length + 0);
    get("cardHead").style.backgroundColor = ""+arr[colorIndex];
    get("cardFoot").style.backgroundColor = ""+arr[colorIndex];
    get("playCards").style.borderColor = ""+arr[colorIndex];
    get("wordsList").style.color = ""+arr[colorIndex];
}


function startButton(arr,time) {
    get("btn").onclick = function () {
        teamIdentification *= (-1);
        get("playCards").style.display = "block";
        get("successWord").style.display = "block";
        get("nextWord").style.display = "block";
        get('timer_inp').innerHTML = time;
        get('wordNumber').innerHTML = Math.floor(Math.random() * 8 + 1);
        randomWords(arr);
        randomColor(colors);
        setTimeout(timer, 1000);
    };
}


function successWord(arr){
    get("successWord").onclick = function () {
        if (teamIdentification == 1)
            score1++;
        else score2++;
        get("playCards").style.display = "block";
        randomWords(arr);
        randomColor(colors);
    };
}


function anotherWord(arr) {
    get("nextWord").onclick = function () {
        if (teamIdentification == 1)
            score1--;
        else score2--;
        get("playCards").style.display = "block";
        randomWords(arr);
        randomColor(colors);
    };
}


function gameTime() {
    let time;
    for (let i = 0; i < get("gameTime").length; i++) {
        if (get("gameTime").options.selectedIndex == 1)
            time = Number(get("30seconds").innerHTML);
        else if (get("gameTime").options.selectedIndex == 2)
            time = Number(get("45seconds").innerHTML);
        else if (get("gameTime").options.selectedIndex == 3)
            time = Number(get("60seconds").innerHTML);
    }
    return time;
}

function gameResults(){
    let score;
    for (let i = 0; i < get("gameWin").length; i++) {
        if (get("gameWin").options.selectedIndex == 1)
            score = Number(get("30words").innerHTML);
        else if (get("gameWin").options.selectedIndex == 2)
            score = Number(get("40words").innerHTML);
        else if (get("gameWin").options.selectedIndex == 3)
            score = Number(get("50words").innerHTML);
        else if (get("gameWin").options.selectedIndex == 4)
            score = Number(get("60words").innerHTML);
    }
    return score;
}


get('firstDataSave').onclick = function () {
    if (get('firstTeamInput').value === '')
        alert('Введите название первой команды');
    else {
        get('firstTeamName').innerHTML = get('firstTeamInput').value;
        get('firstDataSave').style.visibility = "hidden";
        get('firstTeamInput').style.display = "none";
    }
};

get('secondDataSave').onclick = function () {
    get('firstStep').style.display = "none";
    if (get('secondTeamInput').value === '')
        alert('Введите название второй команды');
    else {
        get('secondTeamName').innerHTML = get('secondTeamInput').value;
        get('secondDataSave').style.visibility = "hidden";
        get('secondTeamInput').style.display = "none";
    }
};

get('checkRules').onclick = function () {
    get('secondStep').style.display = "none";
    get('checkRules').style.visibility = "hidden";
};

get('startGame').onclick = function () {
    get('timer').style.display = 'block';
    get('fourthStep').style.display = "none";
    get('teamName1').innerHTML = get('firstTeamName').innerHTML;
    get('teamName2').innerHTML = get('secondTeamName').innerHTML;
    get('resultsTable').style.display = "block";
    get('startGame').style.display = "none";
    get('successWord').style.display = 'block';
    get('nextWord').style.display = 'block';
};

let score1 = 0, score2 = 0;
let teamIdentification = -1;
const colors = ['#9ED112','#50B517','#486EAF','#179067','#9F49AC','#CC42A2','#FF3BA7','#FF8100','#FF5800','#FEAC00','#FFCC01','#960E53','#5C1293','#F3796C','#658D3C','#1A4C8B','#93114C','#6775DD','#BCBD1A','#FED612','#990066','#660099','#336699','#008000','#CCCC00','#FF9900','#62CF4D','#025271','#5B1D9F','#F87F74'];
const classic = ['дом','мост','лупа','перец','город','морж','пират','море','яблоко','акула','солнце','шарик','пластилин','ведро','начальник','пылесос','аквариум','монитор','чеснок','страус','дверь','расстояние','лень','дым','укус','рыба','занятие','комар','спортсмен','провод','мотор','жена','сок','береза','ваза','какао','мелодия','аплодисменты','урок','салфетка','тычинка','неон','миндаль','войско','шампунь','мафия','дельфин','пирожное','ожог','снегопад','павлин','барьер','критика','динозавр','злость','корова','рыцарь','футбол','знаменитость','экскалатор','карандаш','роща','календула','мамонт','алюминий','герцог','леопард','троллейбус','родник','тёща','фиалка','петуния','питомец','казак','фильм','ватрушка','пенсионер','свояченица','миллионер','скоморох','пирамида','белорус','танго','лесть','планета','кориандр','мушкетер','горошек','бейсбол','баллада','росомаха','ракетка','интрига','предложение','велосипед','водитель','сирень','брошь','пастила','виноград','кимоно','свекровь','сервиз','грейпфрут','теплоход','паровоз','пума','фестиваль','скалка','пластилин','наушники','экскурсия','икра','медуза','факир','зерно','белый медведь','пыльца','необоснованный','моряк','скамья','Чили','солнечное затмение','негодяй','спасение','переводчик','метание','олень','желание','контактные линзы','планшет','язва желудка','марочный','молочный зуб','хищник','ворс','кинотеатр','суп-пюре','развитие','баран','паук','предплечье','холодильник','выстрел','перфекционист','роликовые коньки','сушеный гриб','берег','медовый месяц','кофейная чашка','белый','ведущий','ребенок','синий','защита','стихотворение','компромат','перечислить','тюлень','товарообмен','пьяный','мультфильм','пожарная машина','бревно','плеваться','детский стул','контур','снег','береза','пыль','лягушка','зарядное устройство','пряник','вулкан','дым','фундамент','горло','хлопья','медсестра','интернет','ангар','орел','водопроводчик','тарелка','степлер','изумруд','косичка','нос','купальный халат','антенна','отражени','компостер','скандалист','головная боль','извержение','оперение','кратер','аромат','пулемёт','лидерство','блин','масштаб','погода','язычник','ржаветь','голень','бензин','книжный шкаф','конюшня','фокус','мнение','замужество','карман','маленький','восхищение','вор','остриё','террорист','будильник','гроза','наколенник','девушка','пчела','мул','сапожник','диаметр','напоминать','трогать','таз','порошок','защита','цент','планка','сахар','флюгер','мельница','машинист','запертый','бедный','камин','Средние Века','бильярдный','пресмыкаться','топор','веточка','черника','резервуар','шершавый','близорукий','гончая','доставка','роман','парламент','магазин','джунгли','вампир','сало','борщ','наследник','принц','право голоса','импичмент','легитимный','право голоса','воротник','звание','король','властелин','терять время','авиация','фондю','охрана','полиция','склон','попытка','грузовик','клавиатура','таблица','пара','занятие','спектр','скорость','серпантин','деньги','буквы','предложения','дневник','учебник','ссылка','следить','наблюдать','шпион','сыщик','подушка','линолеум','одеяло','канал','труба','стекло','духовой шкаф','торт','плотность','кисель','желе','пипетка','рентген','папка','реферат','диктант','изысканный','барная стойка','терминал','запятая','переулок','сцена','занавес','пленка','кастрюля','гарячий','университет','программа','светодиод','хобби','бренды','воображение','восприятие','выносливость','нефть','стук','глава','фантастический','подлинный','дрёма','легкомысленный','ошибка','щебень','ценность','запрещённый','зрение','парик','хулиган','затворник','призма','женщина','сеть','паук','грузовое судно','добыча','улица','инжир','воробей','крокодил','двусмысленный','беженец','щётка','неожиданный','сознание','разум','смета','вера','снаряжение','утончённый','окно','чинить','мастерство','тотемный столб','гром','молния','хлам','гибрид','схватить','запонки','спичечный коробок','температура','градусник','задира','спрятанный','сумчатый','кенгуру','трактор','брезгливый','мыло','новости','карта','морская болезнь','час','минута','свежый','сахар','конфеты','черёмуха','притеснять','государство','математика','ядро','атом','молекула','активность','источник','энергия','мечта','молчать','произносить','борода','хипстер','продукты','одежда','носки','собака','лицо','платье','подделка','копировать','оператор','змея','племена','веселье','камера','перелом','носилки','дикий','бобер','пальма','путешествие','рюкзак','инструктаж','укус','мазь','чаща','перчатки','рукавицы','флакон','знания','передача','обувь','продюсер','догнать','вытащить','болото','рукопожатие','переплыть','холодный','согреться','бегать','иний','морозильная камера','костер','удобства','свинина','картофель','фортуна','традиции','друзья','уникальный','случай','арбалет','напарник','соперник','прощание','приветствие','вечерний','ужин','обед','завтрак','танец','костюм','встречать','декабрь','студия','импровизация','фонарь','усталость','зажигать','сиять','гореть','сигнал','звонок','салют','снежинка','перемена','политика','воровство','морковь','столица','заявление','находчивый','заседание','представление','хомяк','морская свинка','цветы','гаджеты','постель','финал','банкет','корпоратив','кепка','анаболики','углеводы','достижения','бадминтон','унылый','бесплатный','тележка','толстый','Кремль','секретный','спорить','фартук','уволиться','банджо','четверг','бедро','влюбчивый','хохотать','искать','безвредный','нимб','анорексия','практика','фейерверк','идеалист','ничья','рисовать','случай','водостойкий','смог','дядя','красота','разводиться','стареть','макет','перхоть','скворечник','точилка','сесть','миксер','идея','ржаветь','визит','серп','средний','родинка','джаз','забор','оборона','исследование','действовать','трусливый','ордер','подросток','жабо','завидовать','вертолёт','восточный','луна-парк','холм','маска','Байкал','битва','миллионер','человечество','обморок','крокодил','весло','другой','кабриолет','клавиши','грелка','монастырь','костёр','точить','коньки','сани','входной билет','воротник','сторожевая собака','природа','вогнутый','оппозиция','кукла','лото','жёлтый','солод','лампа','штат','остановка','группа','дятел','мизинец','фонарь','бдительный','сохранить','эгоист','невеста','надзиратель','шоссе','уголь','голос','брат','календарь','вор','вулкан','боксёр','день','ветер','двор','верблюд','взмах','металл','бегун','бобр','алкоголь','берег','барабан','вечер','банан','амбар','бархат','подарок','батарея','музыка','ботинки','зонт','рамка','вратарь','ворота','балкон','кладовка','игрушка','конструктор','ярлык','кошелёк','нумерация','стрелка','пакет','занавески','чехол','витрина','бампер','сигнализация','ковёр','ленточка','пуанты','степлер','чек','оливки','ванная комната','грамота','альбом'];
const celebrities = ['Криштиану Роналду','Эминем','Лионель Месси','Брюс Ли','Джеки Чан','Бенедикт Кэмбербетч','Марк Цукерберг','Бил Гейтс','Стивен Джобс','Стив Возняк','Вин Дизель','Адам Сэндлер','Пол Маккартни','Том Круз','Неймар','Дарио Срна','Ерик Кантона','Дэвид Бекхем','Джон Терри','Bon Jovi','Рианна','Усейн Болт','Гарет Бейл','Бритни Спирс','Златан Ибрагимович','Поль Погба','Уитни Хьюстон','Джим Керри','Джеймс Камерон','Стивен Спилберг','Анджелина Джоли','Бред Питт','Дженифер Лопес','Эмма Уотсон','Елизавета Боярская','Леди Гага','Кристина Асмус','Перис Хилтон','Татьяна Навка','Светлана Лобода','Тина Кароль','Татьяна Тарасова','Брюс Уиллис','Орландо Блум','Валерий Меладзе','Филипп Киркоров','Киану Ривз','Джони Депп','Николас Кейдж','Павел Воля','Дмитрий Нагиев','Владимир Зеленский','Евгений Кошевой','Джоан Роулинг','ЛеБрон Джеймс','Арнольд Шварцнегер','Джейсон Стэтхэм','Марк Уолберг','Сильвестр Сталлоне','Микки Рурк','Уилл Смит','Стивен Сигал','Роберт Де Ниро','Жерар Депардье','Жан Рено','Пьер Ришар','Луи де Фюнес','Ален Делон','Пол Уокер','Антонио Бандерас','Чак Норрис','Морган Фримен','Джефф Голдблюм','Владимир Кличко','Дмитрий Монатик','Алексей Потапенко','Ольга Фрэймут','Наталья Могилевская','Святослав Вакарчук','Олег Винник','Стас Михайлов','Бумбокс','Иван Дорн','Ирина Билык','Джамала','Макс Барских','Сергей Бабкин','Вера Брежнева','Анантолий Тимощук','Лилия Подкопаева','Василий Ломаченко','Виталий Кличко','Яна Клочкова','Сергей Бубка','Андрей Шевченко','Степан Казанин','Александр Пикалов','Елена Кравец','Юрий Корявченков','Мика Фаталов','Юрий Крапов','Валерий Жидков','Гарик Мартиросян','Гарик Харламов','Тимур Батрудинов','Константин Хабенский','Ольга Полякова','Михаил Галустян','Сергей Светлаков','Александр Ревва','Игорь Ласточкин','Антон Лирник','Анастасия Волчоков','Мадонна','Шакира','Майкл Джексон','Элвис Пресли','Курт Кобейн','Наталия Богунова','Федор Добронравов','Анатолий Папанов','Владимир Высоцкий','Наталья Андрейченко','Анантолий Васильев','Лайма Вайкуле','Надежда Бабкина','Олег Меньшиков','Битлз','Александр Домогаров','Квентин Тарантино','Кэмэрон Диас','Гордон Браун','Максим Галкин','Дарья Донцова','Владислав Галкин','Элизабет Тейлор','Тина Канделаки','Анастасия Стоцкая','Александр Абдулов','Виктория Бэкхем','Джулия Робертс','Тина Тернер','Юрий Никулин','Иосиф Кобзон','Линдси Лохан','Евгений Плющенко','Андрей Миронов','Шэрон Стоун','Тимати','Рики Мартин','Чарли Чаплин','Робби Уильямз','Александр Масляков','Земфира','Бен Аффлек','Оззи Осборн','Кевин Костнер','Николай Басков','Сильвио Берлускони','Сергей Безруков','Мэрайя Кэри','Анжелика Варум','Лариса Долина','Жан-Клод Ван Дамм','Дмитрий Маликов','Евгений Петросян','Стас Пьеха','Ирина Слуцкая','Эми Уайнхаус','Джон Леннон','Нелли Уварова','Барак Обама','Дональд Трамп','Лев Лещенко','Нaталья Подольская','Рената Литвинова','Анастасия Заворотнюк','Татьяна Овсиенко','Григорий Лепс','София Ротару','Стивен Кинг','Бари Алибасов','Хью Джекман','Роман Павлюченко','Дэвид Линч','Валдис Пельш','Николь Ричи','Макколей Калкин','Эдита Пьеха','Леонид Ярмольник','Скарлет Йохансон','Дэнни Де Вито','Ридли Скотт','Надежда Дорофеева','Анастасия Каменских','Василий Вирастюк','Анна Бессонова','Руслана','Илья Ковальчук','Олег Скрипка','Опра Уинфри','Бейонсе Ноулз','Сандра Баллок','Саймон Коуэлл','Майли Сайрус','Коби Брайант','Брюс Спрингстин','Майкл Джордан','Дженифер Энистон','Флойд Майвезер','Джей Лено','Роберт Паттинсон','Шакил О`нил','Мэнни Пакьяо','Джордж Клуни','Камерон Диаз','Серена Вильямс','Леонардо ДиКаприо','Роберт Дауни-младший','Джулия Робертс','Мария Шарапова','Дэниэл Рэдклифф','Роман Абрамович','Мэл Гибсон','Михаэль Шумахер','Дэвид Коперфильд','Никол Кидман','Хосеп Гвардиола','Жозе Моуриньо','Билл Клинтон','Роналдо','Роналдинь','Тони Блэр','Стивен Хокинг','Майкл Фелпс','Мохаммед Али','Майк Тайсон','Пеле','Юрия Горбунов','Екатерина Осадчая'];
const english = ['microscopic','stallion','coastline','safe mode','field glasses','maniac','noise','cheeky','spread','mixer','ogre','apply','dovecote','iceberg','highwayman','wolf car','toy car','lobster','harpist','evaporate','fisherman','pilot','face','tropical','will','tax-free','chilly','fresh','headphones','a cat','to offer','to underestimate','typical','a shooting star','slim','a symbol','canned food','a family','a receipt','a candidate','game','console','an elder brother','fatherland','a collar','a trial test','snow white','a visiting card','magnificent','a palace','kingdom','reserved','mother in law','hesitate','academician','search','gambler','candidate','jungle','star','moon','son','sun','daughter','finger','tunable','greedy','waistline','eat','bacteria','air','fork','glue','gold','chair','glass','knife','spoon','steel','timer','paper','pencil','dice','judge','quiz','question','hobby','apartment','parents','child','father','brother','sister','grandmother','grandfather','school','institute','principal','dean','pupil','teacher','student','examination','mark','diploma','actor','author','driver','cook','doctor','nurse','builder','hairdresser','secretary','waiter','dancing','singing','sports','reading','bowling','chess','drawing','collecting','gardening','hunting','entertainment','television','cinema','movie','theatre','concert','music','party','museum','exhibition','casino','emotions','pleased','proud','depressed','angry','calm','surprised','afraid','cheerful','annoyed','dull','bread','butter','egg','cheese','bacon','coffee','tea','milk','water','yogurt','transport','car','motorcycle','bicycle','cab','bus','tram','underground','train','airplane','boat','state','country','city','capital','town','village','vacation','airport','railway station','ticket','reservation','baggage','map','attractions','hotel','hotel room','home','park','place','street','computer','camera','photo','present','party','breakfast','dinner','supper','juice','meat','milk','tea','keyboard','angle','ant','arch','arm','bag','ball','berry','bee','brush','blade','bone','boat','button','bulb','account','act','addition','adjust','amount','amusement','animal','balance','back','base','behavior','belief','bite','brass','business','burst','acid','angry','boiling','bright','bitter','glasses','box','bedroom','watch'];

function checkType() {
    for (let i = 0; i < get("gameType").length; i++) {
        if (get("gameType").options.selectedIndex == 1) {
            startButton(classic, gameTime());
            successWord(classic);
            anotherWord(classic);
        }
        else if (get("gameType").options.selectedIndex == 2) {
            startButton(celebrities, gameTime());
            successWord(celebrities);
            anotherWord(celebrities);
            get("additionalBox").style.fontSize = '85%';
            get("typeOfGame").innerHTML = "Celebrities";
        }
        else if (get("gameType").options.selectedIndex == 3) {
            startButton(english, gameTime());
            successWord(english);
            anotherWord(english);
            get("typeOfGame").innerHTML = "English";
        }
    }
}

function checkResults(){
    if (score1 == gameResults())
        alert("Команда " + get('firstTeamName').innerHTML + " одержала победу");
    else if (score2 == gameResults())
        alert("Команда " + get('secondTeamName').innerHTML + " одержала победу")
}

get("selectSettings").onclick = function () {
    checkType();
    gameResults();
    get("selectSettings").style.display = "none";
    get("timer_inp").innerHTML = gameTime();
    get("thirdStep").style.display = "none";
};




