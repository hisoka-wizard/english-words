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
    new Word(0, 'hi', '[хай]', ['привет', 'здравствуй', 'здорова', 'салют', 'йоу', 'хай', 'здравствуйте', '', '', '']),
    new Word(1, 'hello', '[хэлОу]', ['здравствуйте', 'привет', '', '', '', '', '', '', '', '']),
    new Word(2, 'sorry', '[сОри]', ['извините', 'простите', 'извини', 'прошу прощения', '', '', '', '', '', '']),
    new Word(3, 'please', '[пли:з]', ['пожалуйста', 'угождать', '', '', '', '', '', '', '', '']),
    new Word(4, 'thank you', '[сэнк ю]', ['спасибо', '', '', '', '', '', '', '', '', '']),
    new Word(5, 'you are welcome', '[ю: а уЭлкэм]', ['пожалуйста', 'не за что', '', '', '', '', '', '', '', '']),
    new Word(6, 'what a pity', '[уот э пИти]', ['как жаль', '', '', '', '', '', '', '', '', '']),
    new Word(7, 'good bye', '[гуд бАй]', ['до свидания', 'пока', '', '', '', '', '', '', '', '']),
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

    new Word(20, 'boss', '[босс]', ['начальник', 'начальник', 'вождь', '', '', '', '', '', '', '']),
    new Word(21, 'competitor', '[кэмпЭтитэр]', ['соперник', 'конкурент', '', '', '', '', '', '', '', '']),
    new Word(22, 'client', '[клАйэнт]', ['клиент', '', '', '', '', '', '', '', '', '']),
    new Word(23, 'colleague', '[кОли:г]', ['коллега', '', '', '', '', '', '', '', '', '']),
    new Word(24, 'family', '[фЭмили]', ['семья', '', '', '', '', '', '', '', '', '']),
    new Word(25, 'parents', '[пЭэрэнтс]', ['родители', '', '', '', '', '', '', '', '', '']),
    new Word(26, 'father', '[фА:зер]', ['отец', '', '', '', '', '', '', '', '', '']),
    new Word(27, 'dad(dy)', '[дЭд(и)]', ['папа', '', '', '', '', '', '', '', '', '']),
    new Word(28, 'mother', '[мА:зэр]', ['мать', '', '', '', '', '', '', '', '', '']),
    new Word(29, 'mum(my)', '[мам(и)]', ['мама', '', '', '', '', '', '', '', '', '']),

    new Word(30, 'husband', '[хАзбэнд]', ['муж', '', '', '', '', '', '', '', '', '']),
    new Word(31, 'wife', '[уАйф]', ['жена', '', '', '', '', '', '', '', '', '']),
    new Word(32, 'son', '[сан]', ['сын', '', '', '', '', '', '', '', '', '']),
    new Word(33, 'daughter', '[дО:тэр]', ['дочь', '', '', '', '', '', '', '', '', '']),
    new Word(34, 'brother', '[брАзэр]', ['брат', '', '', '', '', '', '', '', '', '']),
    new Word(35, 'sister', '[сИстэр]', ['сестра', '', '', '', '', '', '', '', '', '']),
    new Word(36, 'grandfather', '[грЭнфА:зэр]', ['дед', '', '', '', '', '', '', '', '', '']),
    new Word(37, 'father-in-law', '[фА:зэр ин лО:]', ['тесть', 'свекор', '', '', '', '', '', '', '', '']),
    new Word(38, 'uncle', '[анкл]', ['дядя', '', '', '', '', '', '', '', '', '']),
    new Word(39, 'aunt', '[а:нт]', ['тетя', '', '', '', '', '', '', '', '', '']),

    new Word(40, 'bride', '[брАйд]', ['невеста в день свадьбы', '', '', '', '', '', '', '', '', '']),
    new Word(41, 'cousin', '[казн]', ['двоюродный брат', 'двоюродная сестра', 'кузен', '', '', '', '', '', '', '']),
    new Word(42, 'nephew', '[нЭфъю:]', ['племянник', '', '', '', '', '', '', '', '', '']),
    new Word(43, 'niece', '[ни:с]', ['племянница', '', '', '', '', '', '', '', '', '']),
    new Word(44, 'job', '[джоб]', ['работа', '', '', '', '', '', '', '', '', '']),
    new Word(45, 'bisinessman', '[бИзнэсмэн]', ['бизнесмен', 'предприниматель', '', '', '', '', '', '', '', '']),
    new Word(46, 'teacher', '[тИ:чер]', ['учитель', '', '', '', '', '', '', '', '', '']),
    new Word(47, 'driver', '[дрАйвэр]', ['водитель', '', '', '', '', '', '', '', '', '']),
    new Word(48, 'worker', '[уО:ркэр]', ['рабочий', '', '', '', '', '', '', '', '', '']),
    new Word(49, 'engineer', '[энджинИ:эр]', ['инженер', '', '', '', '', '', '', '', '', '']),
];
