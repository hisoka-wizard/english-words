export class Word {
    id: number;
    word: string;
    transcript: string;
    translate: string[];

    constructor(id: number, word: string, transcript: string, translate: string[]) {
        this.id = id;
        this.word = word;
        this.transcript = transcript;
        this.translate = translate;
    }
};

export const Words: Word[] = [
    new Word(-100, '', '[]', ['', '', '', '', '', '', '', '', '', '']),
    new Word(0, 'hi', '[хай]', ['привет', 'здравствуй', 'здорова', 'салют', 'йоу', 'хай', 'здравствуйте', '', '', '']),
    new Word(1, 'hello', '[хэлОу]', ['здравствуйте', 'привет', '', '', '', '', '', '', '', '']),
    new Word(2, 'sorry', '[сОри]', ['извините', 'простите', 'извини', 'прошу прощения', 'прости', '', '', '', '', '']),
    new Word(3, 'please', '[пли:з]', ['пожалуйста', 'угождать', '', '', '', '', '', '', '', '']),
    new Word(4, 'thank you', '[сэнк ю]', ['спасибо', '', '', '', '', '', '', '', '', '']),
    new Word(5, 'you are welcome', '[ю: а уЭлкэм]', ['пожалуйста', 'не за что', '', '', '', '', '', '', '', '']),
    new Word(6, 'what a pity', '[уот э пИти]', ['как жаль', 'какая жалость', 'как жалко', 'жалко', 'какая печаль', '', '', '', '', '']),
    new Word(7, 'good bye', '[гуд бАй]', ['до свидания', 'пока', 'прощай', 'до встречи', '', '', '', '', '', '']),
    new Word(8, 'people', '[пи:пл]', ['люди', '', '', '', '', '', '', '', '', '']),
    new Word(9, 'man', '[мэн]', ['мужчина', '', '', '', '', '', '', '', '', '']),

    new Word(10, 'woman', '[уУмэн]', ['женщина', '', '', '', '', '', '', '', '', '']),
    new Word(11, 'child', '[чайлд]', ['ребенок', '', '', '', '', '', '', '', '', '']),
    new Word(12, 'boy', '[бой]', ['мальчик', '', '', '', '', '', '', '', '', '']),
    new Word(13, 'girl', '[гё:рл]', ['девочка', '', '', '', '', '', '', '', '', '']),
    new Word(14, 'guy', '[гай]', ['парень', '', '', '', '', '', '', '', '', '']),
    new Word(15, 'friend', '[фрэнд]', ['друг', '', '', '', '', '', '', '', '', '']),
    new Word(16, 'acquaintance', '[экуЭйнтэнс]', ['знакомый', 'знакомство', '', '', '', '', '', '', '', '']),
    new Word(17, 'neighbor', '[нЭйбэр]', ['сосед', 'соседка', '', '', '', '', '', '', '', '']),
    new Word(18, 'guest', '[гэст]', ['гость', '', '', '', '', '', '', '', '', '']),
    new Word(19, 'chief', '[чи:ф]', ['шеф', 'начальник', 'босс', 'главный', '', '', '', '', '', '']),

    new Word(20, 'boss', '[босс]', ['начальник', 'начальник', 'вождь', 'босс', '', '', '', '', '', '']),
    new Word(21, 'competitor', '[кэмпЭтитэр]', ['соперник', 'конкурент', '', '', '', '', '', '', '', '']),
    new Word(22, 'client', '[клАйэнт]', ['клиент', '', '', '', '', '', '', '', '', '']),
    new Word(23, 'colleague', '[кОли:г]', ['коллега', '', '', '', '', '', '', '', '', '']),
    new Word(24, 'family', '[фЭмили]', ['семья', '', '', '', '', '', '', '', '', '']),
    new Word(25, 'parents', '[пЭэрэнтс]', ['родители', '', '', '', '', '', '', '', '', '']),
    new Word(26, 'father', '[фА:зер]', ['отец', 'папа', '', '', '', '', '', '', '', '']),
    new Word(27, 'dad(dy)', '[дЭд(и)]', ['папа', '', '', '', '', '', '', '', '', '']),
    new Word(28, 'mother', '[мА:зэр]', ['мать', 'мама', '', '', '', '', '', '', '', '']),
    new Word(29, 'mum(my)', '[мам(и)]', ['мама', '', '', '', '', '', '', '', '', '']),

    new Word(30, 'husband', '[хАзбэнд]', ['муж', '', '', '', '', '', '', '', '', '']),
    new Word(31, 'wife', '[уАйф]', ['жена', '', '', '', '', '', '', '', '', '']),
    new Word(32, 'son', '[сан]', ['сын', '', '', '', '', '', '', '', '', '']),
    new Word(33, 'daughter', '[дО:тэр]', ['дочь', 'дочка', '', '', '', '', '', '', '', '']),
    new Word(34, 'brother', '[брАзэр]', ['брат', '', '', '', '', '', '', '', '', '']),
    new Word(35, 'sister', '[сИстэр]', ['сестра', '', '', '', '', '', '', '', '', '']),
    new Word(36, 'grandfather', '[грЭнфА:зэр]', ['дед', 'дедушка', '', '', '', '', '', '', '', '']),
    new Word(37, 'father-in-law', '[фА:зэр ин лО:]', ['тесть', 'свекор', '', '', '', '', '', '', '', '']),
    new Word(38, 'uncle', '[анкл]', ['дядя', '', '', '', '', '', '', '', '', '']),
    new Word(39, 'aunt', '[а:нт]', ['тетя', '', '', '', '', '', '', '', '', '']),

    new Word(40, 'bride', '[брАйд]', ['невеста в день свадьбы', 'невеста', '', '', '', '', '', '', '', '']),
    new Word(41, 'cousin', '[казн]', ['двоюродный брат', 'двоюродная сестра', 'кузен', 'кузина', '', '', '', '', '', '']),
    new Word(42, 'nephew', '[нЭфъю:]', ['племянник', '', '', '', '', '', '', '', '', '']),
    new Word(43, 'niece', '[ни:с]', ['племянница', '', '', '', '', '', '', '', '', '']),
    new Word(44, 'job', '[джоб]', ['работа', '', '', '', '', '', '', '', '', '']),
    new Word(45, 'bisinessman', '[бИзнэсмэн]', ['бизнесмен', 'предприниматель', '', '', '', '', '', '', '', '']),
    new Word(46, 'teacher', '[тИ:чер]', ['учитель', 'педагог', 'преподаватель', '', '', '', '', '', '', '']),
    new Word(47, 'driver', '[дрАйвэр]', ['водитель', '', '', '', '', '', '', '', '', '']),
    new Word(48, 'worker', '[уО:ркэр]', ['рабочий', '', '', '', '', '', '', '', '', '']),
    new Word(49, 'engineer', '[энджинИ:эр]', ['инженер', '', '', '', '', '', '', '', '', '']),

    new Word(50, 'doctor', '[дОктэр]', ['врач', 'доктор', '', '', '', '', '', '', '', '']),
    new Word(51, 'lawyer', '[лО:ер]', ['адвокат', 'юрист', '', '', '', '', '', '', '', '']),
    new Word(52, 'journalist', '[джЁ:рнэлист]', ['журналист', '', '', '', '', '', '', '', '', '']),
    new Word(53, 'nurse', '[нё:рс]', ['медсестра', '', '', '', '', '', '', '', '', '']),
    new Word(54, 'shop assistаnt', '[шОп эсИстэнт]', ['продавец', 'кассир', '', '', '', '', '', '', '', '']),
    new Word(55, 'waiter', '[уЭйтэр]', ['официант', '', '', '', '', '', '', '', '', '']),
    new Word(56, 'accountant', '[экАунтэнт]', ['бухгалтер', '', '', '', '', '', '', '', '', '']),
    new Word(57, 'artist', '[А:ртист]', ['художник', '', '', '', '', '', '', '', '', '']),
    new Word(58, 'musician', '[мъю:зИшн]', ['музыкант', '', '', '', '', '', '', '', '', '']),
    new Word(59, 'actor', '[Эктэр]', ['актер', '', '', '', '', '', '', '', '', '']),

    new Word(60, 'student', '[стъЮдэнт]', ['студент', '', '', '', '', '', '', '', '', '']),
    new Word(61, 'pupil', '[пъюпл]', ['школьник', 'ученик', '', '', '', '', '', '', '', '']),
    new Word(62, 'animal', '[Энимэл]', ['животное', '', '', '', '', '', '', '', '', '']),
    new Word(63, 'cat', '[кэт]', ['кошка', 'котик', 'кот', '', '', '', '', '', '', '']),
    new Word(64, 'dog', '[дог]', ['собака', 'пес', '', '', '', '', '', '', '', '']),
    new Word(65, 'bird', '[бё:рд]', ['птица', 'птичка', '', '', '', '', '', '', '', '']),
    new Word(66, 'squirrel', '[скуИрэл]', ['белка', 'белочка', 'бельчёнок', '', '', '', '', '', '', '']),
    new Word(67, 'wolf', '[уулф]', ['волк', '', '', '', '', '', '', '', '', '']),
    new Word(68, 'goose', '[гу:с]', ['гусь', 'geese - гуси - мн. число', '', '', '', '', '', '', '', '']),
    new Word(69, 'giraffe', '[джирА:ф]', ['жираф', '', '', '', '', '', '', '', '', '']),

    new Word(70, 'rabbit', '[рЭбит]', ['кролик', 'заяц', '', '', '', '', '', '', '', '']),
    new Word(71, 'cow', '[кАу]', ['корова', '', '', '', '', '', '', '', '', '']),
    new Word(72, 'rat', '[рЭт]', ['крыса', '', '', '', '', '', '', '', '', '']),
    new Word(73, 'fox', '[фокс]', ['лиса', 'лисица', '', '', '', '', '', '', '', '']),
    new Word(74, 'horse', '[хо:рс]', ['лошадь', 'лошадка', '', '', '', '', '', '', '', '']),
    new Word(75, 'frog', '[фрог]', ['лягушка', '', '', '', '', '', '', '', '', '']),
    new Word(76, 'bear', '[бЭэр]', ['медведь', '', '', '', '', '', '', '', '', '']),
    new Word(77, 'mouse', '[мАус]', ['мышь', 'mice - мыши - мн. число', '', '', '', '', '', '', '', '']),
    new Word(78, 'monkey', '[мАнки]', ['обезьяна', '', '', '', '', '', '', '', '', '']),
    new Word(79, 'pig', '[пиг]', ['свинья', '', '', '', '', '', '', '', '', '']),

    new Word(80, 'elephant', '[Элэфэнт]', ['слон', '', '', '', '', '', '', '', '', '']),
    new Word(81, 'duck', '[дак]', ['утка', '', '', '', '', '', '', '', '', '']),
    new Word(82, 'country', '[кантри]', ['страна', 'сельская местность', 'пригород', 'село', 'деревня', '', '', '', '', '']),
    new Word(83, 'plant', '[плА:нт]', ['растение', 'завод', 'сажать', '', '', '', '', '', '', '']),
    new Word(84, 'tree', '[три:]', ['дерево', '', '', '', '', '', '', '', '', '']),
    new Word(85, 'grass', '[гра:с]', ['трава', '', '', '', '', '', '', '', '', '']),
    new Word(86, 'flower', '[флАуэр]', ['цветок', '', '', '', '', '', '', '', '', '']),
    new Word(87, 'leaf', '[ли:ф]', ['лист', 'лист(дерева)', '', '', '', '', '', '', '', '']),
    new Word(88, 'flat', '[флэт]', ['квартира', '', '', '', '', '', '', '', '', '']),
    new Word(89, 'room', '[рум]', ['комната', '', '', '', '', '', '', '', '', '']),

    new Word(90, 'living room', '[лИвинг рум]', ['зал', 'гостинная', '', '', '', '', '', '', '', '']),
    new Word(91, 'bedroom', '[бЭдрум]', ['спальня', '', '', '', '', '', '', '', '', '']),
    new Word(92, 'bathroom', '[бА:срум]', ['ванная', 'ванная комната', '', '', '', '', '', '', '', '']),
    new Word(93, 'shower', '[шАуэр]', ['душ', '', '', '', '', '', '', '', '', '']),
    new Word(94, 'kitchen', '[кИтчин]', ['кухня', '', '', '', '', '', '', '', '', '']),
    new Word(95, 'hall', '[хо:л]', ['коридор', 'холл', '', '', '', '', '', '', '', '']),
    new Word(96, 'balcony', '[бЭлкони]', ['балкон', '', '', '', '', '', '', '', '', '']),
    new Word(97, 'floor', '[фло:р]', ['пол', 'этаж', '', '', '', '', '', '', '', '']),
    new Word(98, 'ceiling', '[сИ:линг]', ['потолок', '', '', '', '', '', '', '', '', '']),
    new Word(99, 'wall', '[уО:лрум]', ['стена', '', '', '', '', '', '', '', '', '']),

    new Word(100, 'toilet', '[тОйлит]', ['туалет', '', '', '', '', '', '', '', '', '']),
    new Word(101, 'stairs', '[стЭэрз]', ['ступеньки', 'лестница', '', '', '', '', '', '', '', '']),
    new Word(102, 'door', '[до:р]', ['дверь', '', '', '', '', '', '', '', '', '']),
    new Word(103, 'window', '[уИндоу]', ['окно', 'окошко', '', '', '', '', '', '', '', '']),
    new Word(104, 'windowsill', '[уИндоусил]', ['подоконник', '', '', '', '', '', '', '', '', '']),
    new Word(105, 'curtain', '[кЁртэн]', ['занавес', 'занавеска', 'штора', '', '', '', '', '', '', '']),
    new Word(106, 'switch', '[cуИч]',
    ['выключатель', 'переключать', 'переключатель', 'включатель', 'выключать', 'включать', '', '', '', '']),
    new Word(107, 'socket', '[сОкит]', ['розетка', '', '', '', '', '', '', '', '', '']),
    new Word(108, 'faucet', '[фО:сит]', ['кран', 'водопроводный кран', '', '', '', '', '', '', '', '']),
    new Word(109, 'pipe', '[пайп]', ['труба', 'трубка', '', '', '', '', '', '', '', '']),

    new Word(110, 'chimney', '[чИмни]', ['дымовая труба', 'дымоход', '', '', '', '', '', '', '', '']),
    new Word(111, 'city', '[сИти]', ['город', '', '', '', '', '', '', '', '', '']),
    new Word(112, 'house', '[хАус]', ['здание', 'дом', '', '', '', '', '', '', '', '']),
    new Word(113, 'home', '[хОум]', ['дом', 'место проживания', '', '', '', '', '', '', '', '']),
    new Word(114, 'building', '[бИлдинг]', ['здание', 'строительство', '', '', '', '', '', '', '', '']),
    new Word(115, 'place', '[плэйс]', ['место', 'помещать', '', '', '', '', '', '', '', '']),
    new Word(116, 'entrance', '[Энтрэнс]', ['вход', '', '', '', '', '', '', '', '', '']),
    new Word(117, 'exit', '[Эгзит]', ['выход', '', '', '', '', '', '', '', '', '']),
    new Word(118, 'center', '[сЭнтэр]', ['центр', 'середина', '', '', '', '', '', '', '', '']),
    new Word(119, 'yard', '[я:рд]', ['двор', 'сад', 'парк', 'ярд', '', '', '', '', '', '']),

    new Word(120, 'roof', '[чИмни]', ['крыша', '', '', '', '', '', '', '', '', '']),
    new Word(121, 'fence', '[фэнс]', ['забор', '', '', '', '', '', '', '', '', '']),
    new Word(122, 'land', '[лэнд]', ['земля', 'участок', '', '', '', '', '', '', '', '']),
    new Word(123, 'village', '[вИлидж]', ['деревня', 'поселок', '', '', '', '', '', '', '', '']),
    new Word(124, 'school', '[ску:л]', ['школа', '', '', '', '', '', '', '', '', '']),
    new Word(125, 'university', '[юнивЁ:рсити]', ['университет', '', '', '', '', '', '', '', '', '']),
    new Word(126, 'theater', '[сИ:этэр]', ['театр', '', '', '', '', '', '', '', '', '']),
    new Word(127, 'church', '[чё:рч]', ['церковь', '', '', '', '', '', '', '', '', '']),
    new Word(128, 'restaurant', '[рЭстронт]', ['ресторан', '', '', '', '', '', '', '', '', '']),
    new Word(129, 'cafe', '[кЭфэй]', ['кафе', '', '', '', '', '', '', '', '', '']),

    new Word(130, 'hotel', '[хоутЭл]', ['гостиница', '', '', '', '', '', '', '', '', '']),
    new Word(131, 'bank', '[бэнк]', ['банк', '', '', '', '', '', '', '', '', '']),
    new Word(132, 'cinema', '[сИнэмэ]', ['кинотеатр', '', '', '', '', '', '', '', '', '']),
    new Word(133, 'hospital', '[хОспитл]', ['больница', '', '', '', '', '', '', '', '', '']),
    new Word(134, 'police', '[пОлис]', ['полиция', '', '', '', '', '', '', '', '', '']),
    new Word(135, 'post office', '[пОуст Офис]', ['почта', '', '', '', '', '', '', '', '', '']),
    new Word(136, 'station', '[стэйшн]', ['станция', 'вокзал', '', '', '', '', '', '', '', '']),
    new Word(137, 'airport', '[Ээпо:рт]', ['аэропорт', '', '', '', '', '', '', '', '', '']),
    new Word(138, 'shop', '[шоп]', ['магазин', '', '', '', '', '', '', '', '', '']),
    new Word(139, 'pharmacy', '[фА:рмаси]', ['аптека', '', '', '', '', '', '', '', '', '']),

    new Word(140, 'market', '[мА:ркит]', ['рынок', '', '', '', '', '', '', '', '', '']),
    new Word(141, 'office', '[Офис]', ['офис', '', '', '', '', '', '', '', '', '']),
    new Word(142, 'company', '[кОмпэни]', ['компания', 'фирма', '', '', '', '', '', '', '', '']),
    new Word(143, 'factory', '[фЭктэри]', ['предприятие', 'завод', 'фабрика', '', '', '', '', '', '', '']),
    new Word(144, 'square', '[скуЭэр]', ['площадь', '', '', '', '', '', '', '', '', '']),
    new Word(145, 'street', '[стри:т]', ['улица', '', '', '', '', '', '', '', '', '']),
    new Word(146, 'road', '[рОуд]', ['дорога', '', '', '', '', '', '', '', '', '']),
    new Word(147, 'crossroads', '[крОсроудз]', ['перекрёсток', '', '', '', '', '', '', '', '', '']),
    new Word(148, 'stop', '[стоп]', ['остановка', 'останавливаться', '', '', '', '', '', '', '', '']),
    new Word(149, 'sidewalk', '[сАйдуо:к]', ['тротуар', '', '', '', '', '', '', '', '', '']),

    new Word(150, 'path', '[па:с]', ['тропа', 'тропинка', '', '', '', '', '', '', '', '']),
    new Word(151, 'garden', '[га:рдн]', ['сад', '', '', '', '', '', '', '', '', '']),
    new Word(152, 'park', '[па:рк]', ['парк', '', '', '', '', '', '', '', '', '']),
    new Word(153, 'bridge', '[бридж]', ['мост', '', '', '', '', '', '', '', '', '']),
    new Word(154, 'river', '[рИвэр]', ['река', '', '', '', '', '', '', '', '', '']),
    new Word(155, 'forest', '[фОрист]', ['лес', '', '', '', '', '', '', '', '', '']),
    new Word(156, 'field', '[фи:лд]', ['поле', '', '', '', '', '', '', '', '', '']),
    new Word(157, 'mountain', '[мАунтин]', ['гора', '', '', '', '', '', '', '', '', '']),
    new Word(158, 'lake', '[лэйк]', ['озеро', '', '', '', '', '', '', '', '', '']),
    new Word(159, 'sea', '[си:]', ['море', '', '', '', '', '', '', '', '', '']),

    new Word(160, 'ocean', '[Оушн]', ['океан', '', '', '', '', '', '', '', '', '']),
    new Word(161, 'coast', '[кОуст]', ['морской берег', 'побережье', '', '', '', '', '', '', '', '']),
    new Word(162, 'beach', '[би:ч]', ['пляж', '', '', '', '', '', '', '', '', '']),
    new Word(163, 'sand', '[сэнд]', ['песок', '', '', '', '', '', '', '', '', '']),
    new Word(164, 'island', '[Айлэнд]', ['остров', 'земля', '', '', '', '', '', '', '', '']),
    new Word(165, 'border', '[бО:рдэр]', ['граница', '', '', '', '', '', '', '', '', '']),
    new Word(166, 'customs', '[кАстэмз]', ['таможня', '', '', '', '', '', '', '', '', '']),
    new Word(167, 'garbage', '[гА:рбидж]', ['мусор', '', '', '', '', '', '', '', '', '']),
    new Word(168, 'waste', '[уэйст]', ['отходы', 'тратить впустую', '', '', '', '', '', '', '', '']),
    new Word(169, 'stone', '[стОун]', ['камень', '', '', '', '', '', '', '', '', '']),

    new Word(160, 'furniture', '[фЁ:ничэ]', ['мебель', '', '', '', '', '', '', '', '', '']),
    new Word(161, 'table', '[тэйбл]', ['стол', '', '', '', '', '', '', '', '', '']),
    new Word(162, 'chair', '[чЭэр]', ['стул', '', '', '', '', '', '', '', '', '']),
    new Word(163, 'armchair', '[А:рмчээр]', ['кресло', '', '', '', '', '', '', '', '', '']),
    new Word(164, 'sofa', '[сОуфа]', ['диван', '', '', '', '', '', '', '', '', '']),
    new Word(165, 'bed', '[бэд]', ['кровать', '', '', '', '', '', '', '', '', '']),
    new Word(166, 'wardrobe', '[уО:дроуб]', ['платяной шкаф', 'шкаф', '', '', '', '', '', '', '', '']),
    new Word(167, 'cabinet', '[кЭбинэт]', ['шкаф', 'шкафчик', '', '', '', '', '', '', '', '']),
    new Word(168, 'shelf', '[шэлф]', ['полка', '', '', '', '', '', '', '', '', '']),
    new Word(169, 'mirror', '[мИрор]', ['зеркало', '', '', '', '', '', '', '', '', '']),

    new Word(170, 'carpet', '[кА:рпит]', ['ковер', '', '', '', '', '', '', '', '', '']),
    new Word(171, 'fridge', '[фридж]', ['холодильник', '', '', '', '', '', '', '', '', '']),
    new Word(172, 'microwave', '[мАйкроууэйв]', ['микроволновка', '', '', '', '', '', '', '', '', '']),
    new Word(173, 'oven', '[Авэн]', ['печь', 'духовка', '', '', '', '', '', '', '', '']),
    new Word(174, 'stove', '[стОув]', ['кухонная плита', '', '', '', '', '', '', '', '', '']),
    new Word(175, 'dish', '[диш]', ['блюдо', 'dishes [дИшиз]- посуда', '', '', '', '', '', '', '', '']),
    new Word(176, 'cup', '[кап]', ['чашка', '', '', '', '', '', '', '', '', '']),
    new Word(177, 'glass', '[гла:с]', ['стакан', 'стекло', '', '', '', '', '', '', '', '']),
    new Word(178, 'mug', '[маг]', ['кружка', '', '', '', '', '', '', '', '', '']),
    new Word(179, 'plate', '[плэйт]', ['тарелка', '', '', '', '', '', '', '', '', '']),

    new Word(180, 'spoon', '[фЁ:ничэ]', ['ложка', '', '', '', '', '', '', '', '', '']),
    new Word(181, 'fork', '[тэйбл]', ['вилка', '', '', '', '', '', '', '', '', '']),
    new Word(182, 'knife', '[чЭэр]', ['нож', '', '', '', '', '', '', '', '', '']),
    new Word(183, 'saucer', '[А:рмчээр]', ['блюдце', '', '', '', '', '', '', '', '', '']),
    new Word(184, 'bottle', '[сОуфа]', ['бутылка', '', '', '', '', '', '', '', '', '']),
    new Word(185, 'napkin', '[бэд]', ['салфетка', '', '', '', '', '', '', '', '', '']),
    new Word(186, 'pan', '[уО:дроуб]', ['кастрюля', '', '', '', '', '', '', '', '', '']),
    new Word(187, 'frying pan', '[кЭбинэт]', ['сковородка', '', '', '', '', '', '', '', '', '']),
    new Word(188, 'kettle', '[шэлф]', ['чайник', 'котел', '', '', '', '', '', '', '', '']),
    new Word(189, 'meal', '[мИрор]', ['принятие пищи', 'еда', '', '', '', '', '', '', '', '']),

    new Word(190, 'breakfast', '[брЭкфэст]', ['завтрак', '', '', '', '', '', '', '', '', '']),
    new Word(191, 'lunch', '[ланч]', ['обед', '', '', '', '', '', '', '', '', '']),
    new Word(192, 'dinner', '[дИнэр]', ['ужин', '', '', '', '', '', '', '', '', '']),
    new Word(193, 'transport', '[трЭнспо:рт]', ['перевозить', 'транспортировать', 'транспорт', '', '', '', '', '', '', '']),
    new Word(194, 'plane', '[плэйн]', ['самолет', '', '', '', '', '', '', '', '', '']),
    new Word(195, 'car', '[ка:р]', ['автомобиль', '', '', '', '', '', '', '', '', '']),
    new Word(196, 'tram', '[трэм]', ['трамвай', '', '', '', '', '', '', '', '', '']),
    new Word(197, 'bus', '[бас]', ['автобус', '', '', '', '', '', '', '', '', '']),
    new Word(198, 'train', '[трэйн]', ['поезд', '', '', '', '', '', '', '', '', '']),
    new Word(199, 'ship', '[шип]', ['корабль', '', '', '', '', '', '', '', '', '']),

    new Word(200, 'bicycle', '[бAйсикл]', ['велосипед', '', '', '', '', '', '', '', '', '']),
];
