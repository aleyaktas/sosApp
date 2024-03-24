import {IVerbsSentences} from '../types/IVerb';

export const irregularVerbs = [
  {
    v1: 'arise',
    v2: 'arose',
    v3: 'arisen',
    mean: 'ortaya çıkmak, doğmak',
  },
  {
    v1: 'awake',
    v2: 'awoke',
    v3: 'awoken',
    mean: 'uyanmak, uyandırmak',
  },
  {
    v1: 'be',
    v2: 'was/were',
    v3: 'been',
    mean: 'olmak',
  },
  {
    v1: 'bear',
    v2: 'bore',
    v3: 'born/borne',
    mean: 'taşımak, aklında olmak',
  },
  {
    v1: 'beat',
    v2: 'beat',
    v3: 'beaten/beat',
    mean: 'vurmak, dövmek',
  },
  {
    v1: 'become',
    v2: 'became',
    v3: 'become',
    mean: 'olmak',
  },
  {
    v1: 'begin',
    v2: 'began',
    v3: 'begun',
    mean: 'başlamak, başlatmak',
  },
  {
    v1: 'bend',
    v2: 'bent',
    v3: 'bent',
    mean: 'eğmek, eğilmek, bükmek',
  },
  {
    v1: 'bet',
    v2: 'bet',
    v3: 'bet',
    mean: 'bahse girmek',
  },
  {
    v1: 'bind',
    v2: 'bound',
    v3: 'bound',
    mean: 'bağlamak, yarayı sarmak',
  },
  {
    v1: 'bite',
    v2: 'bit',
    v3: 'bitten/bit',
    mean: 'ısırmak, sokmak',
  },
  {
    v1: 'bleed',
    v2: 'bled',
    v3: 'bled',
    mean: 'kanamak, içi sızlamak',
  },
  {
    v1: 'blow',
    v2: 'blew',
    v3: 'blown',
    mean: 'esmek, üflemek',
  },
  {
    v1: 'break',
    v2: 'broke',
    v3: 'broken',
    mean: 'kırmak, kırılmak',
  },
  {
    v1: 'breed',
    v2: 'bred',
    v3: 'bred',
    mean: 'yavrulamak, neden olmak',
  },
  {
    v1: 'bring',
    v2: 'brought',
    v3: 'brought',
    mean: 'getirmek, neden olmak',
  },
  {
    v1: 'broadcast',
    v2: 'broadcast',
    v3: 'broadcast',
    mean: 'yayınlamak, yaymak',
  },
  {
    v1: 'build',
    v2: 'built',
    v3: 'built',
    mean: 'inşa etmek, geliştirmek',
  },
  {
    v1: 'burn',
    v2: 'burnt',
    v3: 'burnt',
    mean: 'yanmak, yakmak',
  },
  {
    v1: 'burst',
    v2: 'burst',
    v3: 'burst',
    mean: 'patlamak, patlatmak',
  },
  {
    v1: 'buy',
    v2: 'bought',
    v3: 'bought',
    mean: 'satın almak',
  },
  {
    v1: 'catch',
    v2: 'caught',
    v3: 'caught',
    mean: 'tutmak,yakalamak,yetişmek',
  },
  {
    v1: 'choose',
    v2: 'chose',
    v3: 'chosen',
    mean: 'seçmek, karar vermek',
  },
  {
    v1: 'cling',
    v2: 'clung',
    v3: 'clung',
    mean: 'yapışmak, sıkı sıkı tutmak',
  },
  {
    v1: 'come',
    v2: 'came',
    v3: 'come',
    mean: 'gelmek',
  },
  {
    v1: 'cost',
    v2: 'cost',
    v3: 'cost',
    mean: 'mal olmak, etmek',
  },
  {
    v1: 'cut',
    v2: 'cut',
    v3: 'cut',
    mean: 'kesmek, kısmak',
  },
  {
    v1: 'dig',
    v2: 'dug',
    v3: 'dug',
    mean: 'kazmak, meanak',
  },
  {
    v1: 'dive',
    v2: 'dove',
    v3: 'dived',
    mean: '(suya) dalmak',
  },
  {
    v1: 'do',
    v2: 'did',
    v3: 'done',
    mean: 'yapmak, etmek',
  },
  {
    v1: 'draw',
    v2: 'drew',
    v3: 'drawn',
    mean: 'resim çizmek, berabere bitirmek',
  },
  {
    v1: 'dream',
    v2: 'dreamt',
    v3: 'dreamt',
    mean: 'rüya görmek, düşlemek, hayal etmek',
  },
  {
    v1: 'drink',
    v2: 'drank',
    v3: 'drunk',
    mean: 'içmek',
  },
  {
    v1: 'drive',
    v2: 'drove',
    v3: 'driven',
    mean: 'taşıt sürmek, yürütmek',
  },
  {
    v1: 'dwell',
    v2: 'dwelt',
    v3: 'dwelt',
    mean: 'oturmak, ikamet etmek',
  },
  {
    v1: 'eat',
    v2: 'ate',
    v3: 'eaten',
    mean: 'yemek yemek',
  },
  {
    v1: 'fall',
    v2: 'fell',
    v3: 'fallen',
    mean: 'düşmek, azalmak, yenilmek',
  },
  {
    v1: 'feed',
    v2: 'fed',
    v3: 'fed',
    mean: 'beslemek',
  },
  {
    v1: 'feel',
    v2: 'felt',
    v3: 'felt',
    mean: 'hissetmek, duymak',
  },
  {
    v1: 'fight',
    v2: 'fought',
    v3: 'fought',
    mean: 'savaşmak, dövüşmek',
  },
  {
    v1: 'find',
    v2: 'found',
    v3: 'found',
    mean: 'bulmak',
  },
  {
    v1: 'fit',
    v2: 'fit',
    v3: 'fit',
    mean: '(giysi) uymak',
  },
  {
    v1: 'flee',
    v2: 'fled',
    v3: 'fled',
    mean: 'kaçmak',
  },
  {
    v1: 'fling',
    v2: 'flung',
    v3: 'flung',
    mean: 'fırlatıp atmak, savurmak',
  },
  {
    v1: 'fly',
    v2: 'flew',
    v3: 'flown',
    mean: 'uçmak, uçurmak',
  },
  {
    v1: 'forbid',
    v2: 'forbade',
    v3: 'forbidden',
    mean: 'yasaklamak',
  },
  {
    v1: 'forecast',
    v2: 'forecast',
    v3: 'forecast',
    mean: 'tahmin etmek',
  },
  {
    v1: 'foresee',
    v2: 'foresaw',
    v3: 'foreseen',
    mean: 'önceden görmek',
  },
  {
    v1: 'foretell',
    v2: 'foretold',
    v3: 'foretold',
    mean: 'önceden haber vermek',
  },
  {
    v1: 'forget',
    v2: 'forgot',
    v3: 'forgotten',
    mean: 'unutmak',
  },
  {
    v1: 'forgive',
    v2: 'forgave',
    v3: 'forgiven',
    mean: 'bağışlamak',
  },
  {
    v1: 'freeze',
    v2: 'froze',
    v3: 'frozen',
    mean: 'donmak, dondurmak',
  },
  {
    v1: 'overthrow',
    v2: 'overthrew',
    v3: 'overthrown',
    mean: '(hükümet) devirmek, yıkmak',
  },
  {
    v1: 'pay',
    v2: 'paid',
    v3: 'paid',
    mean: 'ödemek',
  },
  {
    v1: 'plead',
    v2: 'pled',
    v3: 'pled',
    mean: 'yalvarmak, dilemek',
  },
  {
    v1: 'prove',
    v2: 'proved',
    v3: 'proven',
    mean: 'kanıtlamak',
  },
  {
    v1: 'put',
    v2: 'put',
    v3: 'put',
    mean: 'koymak, yerleştirmek',
  },
  {
    v1: 'quit',
    v2: 'quit',
    v3: 'quit',
    mean: 'bırakıp gitmek',
  },
  {
    v1: 'read',
    v2: 'read',
    v3: 'read',
    mean: 'okumak',
  },
  {
    v1: 'rebuild',
    v2: 'rebuilt',
    v3: 'rebuilt',
    mean: 'yeniden inşa etmek',
  },
  {
    v1: 'redo',
    v2: 'redid',
    v3: 'redone',
    mean: 'yeniden yapmak',
  },
  {
    v1: 'remake',
    v2: 'remade',
    v3: 'remade',
    mean: 'yeniden yapmak',
  },
  {
    v1: 'repay',
    v2: 'repaid',
    v3: 'repaid',
    mean: '(para) geri vermek, ödemek',
  },
  {
    v1: 'resell',
    v2: 'resold',
    v3: 'resold',
    mean: 'tekrar satmak, satmak',
  },
  {
    v1: 'reset',
    v2: 'reset',
    v3: 'reset',
    mean: 'yeniden ayarlamak',
  },
  {
    v1: 'rethink',
    v2: 'rethought',
    v3: 'rethought',
    mean: 'tekrar düşünmek',
  },
  {
    v1: 'rewrite',
    v2: 'rewrote',
    v3: 'rewritten',
    mean: 'yeniden yazmak',
  },
  {
    v1: 'ride',
    v2: 'rode',
    v3: 'ridden',
    mean: 'binmek(at, bisiklet)',
  },
  {
    v1: 'ring',
    v2: 'rang',
    v3: 'rung',
    mean: '(zil vb) çalmak',
  },
  {
    v1: 'rise',
    v2: 'rose',
    v3: 'risen',
    mean: 'doğmak, yükselmek',
  },
  {
    v1: 'run',
    v2: 'ran',
    v3: 'run',
    mean: 'koşmak',
  },
  {
    v1: 'saw',
    v2: 'sawed',
    v3: 'sawn',
    mean: 'testereyle kesmek',
  },
  {
    v1: 'say',
    v2: 'said',
    v3: 'said',
    mean: 'demek, söylemek',
  },
  {
    v1: 'see',
    v2: 'saw',
    v3: 'seen',
    mean: 'görmek, kavramak',
  },
  {
    v1: 'seek',
    v2: 'sought',
    v3: 'sought',
    mean: 'aramak, araştırmak',
  },
  {
    v1: 'sell',
    v2: 'sold',
    v3: 'sold',
    mean: 'satmak',
  },
  {
    v1: 'send',
    v2: 'sent',
    v3: 'sent',
    mean: 'göndermek',
  },
  {
    v1: 'set',
    v2: 'set',
    v3: 'set',
    mean: 'hazırlamak, kurmak',
  },
  {
    v1: 'sew',
    v2: 'sewed',
    v3: 'sewn',
    mean: 'dikiş dikmek',
  },
  {
    v1: 'shake',
    v2: 'shook',
    v3: 'shaken',
    mean: 'sallamak, sallanmak',
  },
  {
    v1: 'shave',
    v2: 'shaved',
    v3: 'shaven',
    mean: 'tıraş olmak, tıraş etmek',
  },
  {
    v1: 'shed',
    v2: 'shed',
    v3: 'shed',
    mean: 'dökmek, saçmak, akıtmak',
  },
  {
    v1: 'shine',
    v2: 'shone',
    v3: 'shone',
    mean: 'parlamak',
  },
  {
    v1: 'shoot',
    v2: 'shot',
    v3: 'shot',
    mean: 'ateş etmek, vurmak',
  },
  {
    v1: 'show',
    v2: 'showed',
    v3: 'shown',
    mean: 'göstermek',
  },
  {
    v1: 'shrink',
    v2: 'shrank',
    v3: 'shrunk',
    mean: 'çekmek, büzülmek',
  },
  {
    v1: 'shut',
    v2: 'shut',
    v3: 'shut',
    mean: 'kapamak',
  },
  {
    v1: 'sing',
    v2: 'sang',
    v3: 'sung',
    mean: 'şarkı söylemek, ötmek',
  },
  {
    v1: 'sink',
    v2: 'sank',
    v3: 'sunk',
    mean: 'batmak, batırmak',
  },
  {
    v1: 'sit',
    v2: 'sat',
    v3: 'sat',
    mean: 'oturmak',
  },
  {
    v1: 'slay',
    v2: 'slew',
    v3: 'slain',
    mean: 'katletmek',
  },
  {
    v1: 'sleep',
    v2: 'slept',
    v3: 'slept',
    mean: 'uyumak',
  },
  {
    v1: 'slide',
    v2: 'slid',
    v3: 'slid',
    mean: 'kaymak, kaydırmak',
  },
  {
    v1: 'smell',
    v2: 'smelt',
    v3: 'smelt',
    mean: 'koklamak, kokmak',
  },
  {
    v1: 'sow',
    v2: 'sowed',
    v3: 'sown',
    mean: '(tohum) ekmek',
  },
  {
    v1: 'speak',
    v2: 'spoke',
    v3: 'spoken',
    mean: 'konuşmak',
  },
  {
    v1: 'spell',
    v2: 'spelt',
    v3: 'spelt',
    mean: 'harf harf söylemek',
  },
  {
    v1: 'spend',
    v2: 'spent',
    v3: 'spent',
    mean: 'harcamak, geçirmek',
  },
  {
    v1: 'spill',
    v2: 'spilt',
    v3: 'spilt',
    mean: 'dökmek, dökülmek, sızmak',
  },
  {
    v1: 'spin',
    v2: 'spun',
    v3: 'spun',
    mean: 'hızla dönmek',
  },
  {
    v1: 'get',
    v2: 'got',
    v3: 'got',
    mean: 'almak, elde etmek, varmak',
  },
  {
    v1: 'give',
    v2: 'gave',
    v3: 'given',
    mean: 'vermek',
  },
  {
    v1: 'go',
    v2: 'went',
    v3: 'gone',
    mean: 'gitmek',
  },
  {
    v1: 'grind',
    v2: 'ground',
    v3: 'ground',
    mean: 'öğütmek, bilemek',
  },
  {
    v1: 'grow',
    v2: 'grew',
    v3: 'grown',
    mean: '(bitki vb) yetişmek, yetiştirmek',
  },
  {
    v1: 'hang',
    v2: 'hung',
    v3: 'hung',
    mean: 'asmak, asılmak',
  },
  {
    v1: 'have',
    v2: 'had',
    v3: 'had',
    mean: 'sahip olmak, yemek içmek',
  },
  {
    v1: 'hear',
    v2: 'heard',
    v3: 'heard',
    mean: 'duymak, işitmek',
  },
  {
    v1: 'hide',
    v2: 'hid',
    v3: 'hidden',
    mean: 'saklamak, saklanmak',
  },
  {
    v1: 'hit',
    v2: 'hit',
    v3: 'hit',
    mean: 'vurmak, çarpmak',
  },
  {
    v1: 'hold',
    v2: 'held',
    v3: 'held',
    mean: 'tutmak,tutturmak',
  },
  {
    v1: 'hurt',
    v2: 'hurt',
    v3: 'hurt',
    mean: 'acıtmak, acımak',
  },
  {
    v1: 'input',
    v2: 'input',
    v3: 'input',
    mean: 'bilgisayara veri girmek',
  },
  {
    v1: 'keep',
    v2: 'kept',
    v3: 'kept',
    mean: 'saklamak, korumak',
  },
  {
    v1: 'kneel',
    v2: 'knelt',
    v3: 'knelt',
    mean: 'diz çökmek',
  },
  {
    v1: 'knit',
    v2: 'knit',
    v3: 'knit',
    mean: 'örmek',
  },
  {
    v1: 'know',
    v2: 'knew',
    v3: 'known',
    mean: 'bilmek, tanımak',
  },
  {
    v1: 'lay',
    v2: 'laid',
    v3: 'laid',
    mean: 'yaymak, sermek',
  },
  {
    v1: 'lead',
    v2: 'led',
    v3: 'led',
    mean: 'götürmek, rehberlik etmek',
  },
  {
    v1: 'lean',
    v2: 'leant',
    v3: 'leant',
    mean: 'yana yatmak, yaslanmak',
  },
  {
    v1: 'leap',
    v2: 'leapt',
    v3: 'leapt',
    mean: 'sıçramak, üstünden atlamak',
  },
  {
    v1: 'learn',
    v2: 'learnt',
    v3: 'learnt',
    mean: 'öğrenmek',
  },
  {
    v1: 'leave',
    v2: 'left',
    v3: 'left',
    mean: 'ayrılmak, bırakmak',
  },
  {
    v1: 'lend',
    v2: 'lent',
    v3: 'lent',
    mean: 'ödünç vermek',
  },
  {
    v1: 'let',
    v2: 'let',
    v3: 'let',
    mean: 'izin vermek, bırakmak',
  },
  {
    v1: 'lie',
    v2: 'lay',
    v3: 'lain',
    mean: 'uzanmak, yalan söylemek',
  },
  {
    v1: 'light',
    v2: 'lit',
    v3: 'lit',
    mean: 'yakmak, yanmak',
  },
  {
    v1: 'lose',
    v2: 'lost',
    v3: 'lost',
    mean: 'kaybetmek, yenilmek',
  },
  {
    v1: 'make',
    v2: 'made',
    v3: 'made',
    mean: 'yapmak, hazırlamak',
  },
  {
    v1: 'mean',
    v2: 'meant',
    v3: 'meant',
    mean: 'meanına gelmek',
  },
  {
    v1: 'meet',
    v2: 'met',
    v3: 'met',
    mean: 'karşılaşmak, tanışmak, karşılamak',
  },
  {
    v1: 'mishear',
    v2: 'misheard',
    v3: 'misheard',
    mean: 'yanlış duymak',
  },
  {
    v1: 'mislead',
    v2: 'misled',
    v3: 'misled',
    mean: 'saptırmak, yanıltmak',
  },
  {
    v1: 'misread',
    v2: 'misread',
    v3: 'misread',
    mean: 'yanlış okumak',
  },
  {
    v1: 'mistake',
    v2: 'mistook',
    v3: 'mistaken',
    mean: 'yanlış meanak, karıştırmak',
  },
  {
    v1: 'misunderstand',
    v2: 'misunderstood',
    v3: 'misunderstood',
    mean: 'yanlış meanak',
  },
  {
    v1: 'mow',
    v2: 'mowed',
    v3: 'mown',
    mean: 'biçmek',
  },
  {
    v1: 'outsell',
    v2: 'outsold',
    v3: 'outsold',
    mean: 'daha fazla satmak',
  },
  {
    v1: 'overcome',
    v2: 'overcame',
    v3: 'overcome',
    mean: 'üstesinden gelmek',
  },
  {
    v1: 'overdo',
    v2: 'overdid',
    v3: 'overdone',
    mean: 'abartmak',
  },
  {
    v1: 'overeat',
    v2: 'overate',
    v3: 'overeaten',
    mean: 'aşırı yemek',
  },
  {
    v1: 'overhear',
    v2: 'overheard',
    v3: 'overheard',
    mean: 'kulak misafiri olmak',
  },
  {
    v1: 'overpay',
    v2: 'overpaid',
    v3: 'overpaid',
    mean: 'fazla ödemek',
  },
  {
    v1: 'override',
    v2: 'overrode',
    v3: 'overridden',
    mean: 'umursamamak',
  },
  {
    v1: 'overrun',
    v2: 'overran',
    v3: 'overrun',
    mean: 'istila etmek, aşmak',
  },
  {
    v1: 'oversee',
    v2: 'oversaw',
    v3: 'overseen',
    mean: 'göz kulak olmak',
  },
  {
    v1: 'oversleep',
    v2: 'overslept',
    v3: 'overslept',
    mean: 'uyuya kalmak',
  },
  {
    v1: 'overtake',
    v2: 'overtook',
    v3: 'overtaken',
    mean: 'yetişip geçmek, sollamak',
  },
  {
    v1: 'spit',
    v2: 'spit',
    v3: 'spit',
    mean: 'tükürmek',
  },
  {
    v1: 'split',
    v2: 'split',
    v3: 'split',
    mean: 'yarmak, bölmek',
  },
  {
    v1: 'spoil',
    v2: 'spoilt',
    v3: 'spoilt',
    mean: 'berbat etmek, mahvetmek',
  },
  {
    v1: 'spread',
    v2: 'spread',
    v3: 'spread',
    mean: 'yaymak, yayılmak',
  },
  {
    v1: 'spring',
    v2: 'sprang',
    v3: 'sprung',
    mean: 'ortaya çıkıvermek, yerden bitmek',
  },
  {
    v1: 'stand',
    v2: 'stood',
    v3: 'stood',
    mean: 'ayakta durmak',
  },
  {
    v1: 'steal',
    v2: 'stole',
    v3: 'stolen',
    mean: 'çalmak',
  },
  {
    v1: 'stick',
    v2: 'stuck',
    v3: 'stuck',
    mean: 'saplamak, saplanmak',
  },
  {
    v1: 'sting',
    v2: 'stung',
    v3: 'stung',
    mean: 'sokmak, arı yılan vs. ısırmak, acıtmak',
  },
  {
    v1: 'stink',
    v2: 'stank',
    v3: 'stunk',
    mean: 'pis kokmak',
  },
  {
    v1: 'strike',
    v2: 'struck',
    v3: 'struck',
    mean: 'vurmak, çarpmak, grev yapmak',
  },
  {
    v1: 'strive',
    v2: 'strove',
    v3: 'striven',
    mean: 'çalışmak, çabalamak',
  },
  {
    v1: 'swear',
    v2: 'swore',
    v3: 'sworn',
    mean: 'küfretmek, yemin etmek',
  },
  {
    v1: 'sweep',
    v2: 'swept',
    v3: 'swept',
    mean: 'süpürmek',
  },
  {
    v1: 'swell',
    v2: 'swelled',
    v3: 'swollen',
    mean: 'şişmek, kabartmak',
  },
  {
    v1: 'swim',
    v2: 'swam',
    v3: 'swum',
    mean: 'yüzmek',
  },
  {
    v1: 'swing',
    v2: 'swung',
    v3: 'swung',
    mean: 'sallamak, sallanmak',
  },
  {
    v1: 'take',
    v2: 'took',
    v3: 'taken',
    mean: 'almak, götürmek',
  },
  {
    v1: 'teach',
    v2: 'taught',
    v3: 'taught',
    mean: 'öğretmek',
  },
  {
    v1: 'tear',
    v2: 'tore',
    v3: 'torn',
    mean: 'yırtmak',
  },
  {
    v1: 'tell',
    v2: 'told',
    v3: 'told',
    mean: 'söylemek, anlatmak',
  },
  {
    v1: 'think',
    v2: 'thought',
    v3: 'thought',
    mean: 'düşünmek',
  },
  {
    v1: 'thrive',
    v2: 'throve',
    v3: 'thrived',
    mean: 'iyiye gitmek',
  },
  {
    v1: 'throw',
    v2: 'threw',
    v3: 'thrown',
    mean: 'atmak, fırlatmak',
  },
  {
    v1: 'unbind',
    v2: 'unbound',
    v3: 'unbound',
    mean: 'çözmek, açmak, salmak',
  },
  {
    v1: 'understand',
    v2: 'understood',
    v3: 'understood',
    mean: 'meanak',
  },
  {
    v1: 'undertake',
    v2: 'undertook',
    v3: 'undertaken',
    mean: 'üzerine almak,üstlenmek',
  },
  {
    v1: 'undo',
    v2: 'undid',
    v3: 'undone',
    mean: 'çözmek, yok etmek',
  },
  {
    v1: 'uphold',
    v2: 'upheld',
    v3: 'upheld',
    mean: 'desteklemek',
  },
  {
    v1: 'wake',
    v2: 'woke',
    v3: 'woken',
    mean: 'uyanmak, uyandırmak',
  },
  {
    v1: 'wear',
    v2: 'wore',
    v3: 'worn',
    mean: 'giymek, takmak',
  },
  {
    v1: 'weave',
    v2: 'wove',
    v3: 'woven',
    mean: 'dokumak, örmek',
  },
  {
    v1: 'weep',
    v2: 'wept',
    v3: 'wept',
    mean: 'gözyaşı dökmek',
  },
  {
    v1: 'wet',
    v2: 'wet',
    v3: 'wet',
    mean: 'ıslatmak, işemek',
  },
  {
    v1: 'wind',
    v2: 'wound',
    v3: 'wound',
    mean: 'sarmak, dolamak',
  },
  {
    v1: 'win',
    v2: 'won',
    v3: 'won',
    mean: 'kazanmak',
  },
  {
    v1: 'withdraw',
    v2: 'withdrew',
    v3: 'withdrawn',
    mean: 'geri çekilmek',
  },
  {
    v1: 'withstand',
    v2: 'withstood',
    v3: 'withstood',
    mean: 'karşı koymak, direnmek',
  },
  {
    v1: 'write',
    v2: 'wrote',
    v3: 'written',
    mean: 'yazmak',
  },
];

export const irregularV1Sentences: IVerbsSentences[] = [
  {
    sentences: [
      'The sun arises every morning in the east',
      "I always arise at 7 o'clock to start my day",
      'She rarely arises early on weekends because she likes to sleep',
      'They never arise before the alarm clock goes off',
      'We usually arise with the sound of birds chirping outside our window',
      'He seldom arises before the crack of dawn',
      'Do you often arise feeling refreshed and energized?',
      'My grandparents usually arise before anyone else in the house',
      'The students in our class sometimes arise late and rush to school',
      'On special occasions, the entire family arises early to watch the sunrise',
    ],
    word: 'arise',
    mean: 'ortaya çıkmak',
  },
  {
    sentences: [
      "I wake up at 7 o'clock every morning",
      'She always wakes up feeling refreshed',
      'We usually wake up early on weekends',
      'The alarm clock wakes me up every day',
      'They never wake up late for school',
      'My cat always wakes me up at 6 am',
      'The sun wakes us up every day',
      'I wake up feeling motivated to start the day',
      'He rarely wakes up in a bad mood',
      'The sound of birds wakes me up in the morning',
    ],
    word: 'awake',
    mean: 'uyanmak, uyandırmak',
  },
  {
    sentences: [
      'I am at home right now',
      'She is always very kind to everyone',
      'We are never late for class',
      'They are usually busy on Sundays',
      'He is often tired after work',
      'The cat is always hungry in the morning',
      'The children are rarely quiet during playtime',
      'The store is open every day of the week',
      'My parents are usually at work in the afternoon',
      'The students are always excited for the weekend',
    ],
    word: 'be',
    mean: 'olmak',
  },
  {
    sentences: [
      'She bears the weight of her school bag every day',
      'The polar bear bears the cold Arctic climate',
      'He bears a lucky charm wherever he goes',
      'The tree bears colorful flowers in spring',
      'They bear gifts for their friend’s birthday',
      'The bridge bears the weight of passing cars',
      'She bears a resemblance to her older sister',
      'We bear the responsibility of keeping our room tidy',
      'He bears the noise from the construction site next door',
      'The library bears a sign saying “Silence, please',
    ],
    word: 'bear',
    mean: 'taşımak, tahammül etmek',
  },
  {
    sentences: [
      'Mike beats his opponents in chess every Saturday at the local club',

      'My brother beats all his high scores in video games within just a few minutes',

      'Jennifer rarely beats her alarm clock, as she always wakes up early in the morning',

      'The champion beats his own record every year during the swimming competition',
      'The drummers beat their drums rhythmically during the parade',

      'We often beat the rush hour traffic by leaving for work early in the morning',

      'The heart beats at a steady pace, pumping blood throughout the body',

      'Jack usually beats his friends at basketball whenever they play in the park',

      'The clock in the living room beats loudly every hour, indicating the time',
      'Lisa beats her stress by practicing yoga and meditation daily',
    ],
    word: 'beat',
    mean: 'vurmak, dövmek, yenmek',
  },
  {
    sentences: [
      'I become more confident when I practice speaking English every day',
      'She becomes tired after working long hours',
      'They become best friends after meeting at a summer camp',
      'We become happier when we spend time with our loved ones',
      'He becomes nervous before giving a presentation',
      'The flowers become more beautiful as they bloom in the spring',
      'The cake becomes delicious when you add a pinch of cinnamon',
      'The weather becomes colder in the winter',
      'The baby becomes sleepy after playing for a long time',
      'Our skills become better with practice and determination',
    ],
    word: 'become',
    mean: 'olmak',
  },
  {
    sentences: [
      'I begin my day by waking up early in the morning',
      'She always begins her meals with a bowl of soup',
      'We usually begin our meetings at 9 am sharp',
      'They never begin their homework until late in the evening',
      'The concert begins at 7:30 pm tonight',
      'He often begins his sentences with the phrase In my opinion',

      'My parents always begin their weekend by going for a long walk in the park',
      'The teacher begins the class by reviewing the previous lesson',

      'The race will begin in five minutes, so make sure you are ready',

      'I begin my exercise routine with a stretching session to warm up',
    ],
    word: 'begin',
    mean: 'başlamak, başlatmak',
  },
  {
    sentences: [
      'I often bend down to tie my shoes before leaving the house',
      'She usually bends her knees when picking up heavy objects',
      'He never bends the rules, no matter what the situation is',

      'The dancer frequently bends her body in graceful movements during her performance',
      "We sometimes bend the truth to spare someone's feelings",

      'The gymnast always bends her body in incredible ways during her routine',
      'You rarely bend your elbows when doing push-ups',

      'The workers always bend the metal bars to create the perfect shape for the project',

      'The yoga instructor often teaches us how to bend our bodies for better flexibility',
      'I never bend the pages of my books, I always use bookmarks',
    ],
    word: 'bend',
    mean: 'eğmek, eğilmek, bükmek',
  },
  {
    sentences: [
      'I always bet on my favorite football team to win the game',
      'He often bets on horse racing races at the weekend',
      "She rarely bets on sports because she's not interested in them",
      'We sometimes bet on the outcome of reality TV shows',
      'They never bet more money than they can afford to lose',

      'The students frequently bet among themselves on who will get the highest score in the test',
      'My grandmother usually bets on the lottery every week',

      'The online gamblers always bet with caution and only invest a small amount',

      'The local bookmaker occasionally bets with his customers to build rapport',

      'I usually bet on the underdog to increase my chances of winning',
    ],
    word: 'bet',
    mean: 'bahse girmek',
  },
  {
    sentences: [
      'I always bind my notebooks with colorful ribbons',
      'She rarely binds her hair in a ponytail',

      'Every day, we bind the newspapers together before distributing them',

      'He never binds his shoelaces properly, which is why he often trips',
      'The bookbinder always carefully binds the pages of the novel',
      'They usually bind their receipts in a folder to stay organized',

      'On weekends, she often binds her scrapbook with decorative tapes',
      'I sometimes bind my thoughts in a journal to reflect on later',
      'The bakery always binds their bread with a distinctive tie',

      'We occasionally bind our essays with a title page for a professional touch',
    ],
    word: 'bind',
    mean: 'bağlamak, yarayı sarmak',
  },
  {
    sentences: [
      "I always bite my nails when I'm nervous",
      'My dog bites his chew toy every morning',
      "She rarely bites into spicy food because she doesn't like it",
      'He usually bites into a juicy apple for breakfast',

      'We often bite into a delicious piece of chocolate cake after dinner',
      "You occasionally bite your lip when you're concentrating",
      'They sometimes bite into a juicy burger for lunch',
      'The mosquito bites my skin every time I go camping',
      "My sister never bites her tongue when she's talking",
      'The baby frequently bites on his teething toy',
    ],
    word: 'bite',
    mean: 'ısırmak, sokmak',
  },
  {
    sentences: [
      'I bleed every time I accidentally cut myself',
      "The patient's wound bleeds continuously",
      'My nose always starts to bleed when the weather gets too dry',
      'She often bleeds during her monthly cycle',
      "Tom's nose bleeds occasionally due to allergies",
      'Dogs can bleed if they injure their paws on sharp objects',

      'It rarely happens, but sometimes people can bleed from their ears',

      "The color of the liquid coming out of the wound can indicate if it's bleeding heavily or not",
      'A small cut on your finger usually stops bleeding quickly',

      'The child cried when his knee started to bleed after falling off his bike',
    ],
    word: 'bleed',
    mean: 'kanamak, içi sızlamak',
  },
  {
    sentences: [
      'The wind blows fiercely in the middle of the ocean',
      'She blows out the candles on her birthday cake every year',
      'The referee blows the whistle to start the soccer game',
      'Every morning, he blows his nose before breakfast',
      'My hair always blows in the wind when I ride my bike',

      'The construction worker blows the horn to signal the start of work',
      'The balloon blows up quickly with the help of a pump',
      'The little girl loves to blow bubbles with her bubble wand',
      'The dust blows around the room when I start to clean',
      'My neighbor always blows his grass clippings onto my lawn',
    ],
    word: 'blow',
    mean: 'esmek, üflemek',
  },
  {
    sentences: [
      'She breaks her pencil accidentally during class',
      'The children break their toys when playing too roughly',
      'He breaks the silence by telling a funny joke',
      'The baker breaks the fresh bread into smaller pieces',
      'They break for lunch at noon every day',
      'The glass bottle breaks when it falls off the table',
      'She breaks the news gently to her friend',
      'We break for a short walk after working for hours',
      'He breaks the habit of biting his nails',

      'The alarm clock breaks the morning quiet with its loud ringing',
    ],
    word: 'break',
    mean: 'kırmak, kırılmak, bırakmak',
  },
  {
    sentences: [
      'Dogs breed once a year',
      'She breeds rabbits and sells them at the market every month',
      'The farm breeds cows and pigs for meat',
      'He breeds tropical fish in his aquarium',
      'The company breeds new varieties of vegetables every season',

      'The school breeds all their own animals for their agriculture program',
      'My neighbor breeds racehorses and trains them every day',
      'They breed chickens for eggs and meat',
      'We breed cats and often have kittens available for adoption',

      'The zoo breeds endangered species to help increase their population',
    ],
    word: 'breed',
    mean: 'yavrulamak, neden olmak, üretmek',
  },
  {
    sentences: [
      'I bring my lunch to work every day',
      'She often brings her dog to the park in the afternoon',
      'He rarely brings his own computer to class',
      'They always bring a gift for the host when they go to a party',
      'We usually bring a bottle of wine when we visit friends',
      'The waiter brings us the menu as soon as we sit down',
      'My sister sometimes brings me coffee in bed on weekends',
      'You never bring your phone charger when you travel',

      'The company policy states that employees must bring their ID cards to access the building',
      'The teacher always reminds us to bring our textbooks to class',
    ],
    word: 'bring',
    mean: 'getirmek',
  },
  {
    sentences: [
      'The radio station broadcasts news every hour',
      'He broadcasts his show on social media every day',
      "They always broadcast the weather report at six o'clock",
      'The company broadcasts its weekly meetings via video conferencing',
      'The local station broadcasts a variety of music throughout the day',
      'The news anchor always broadcasts the headlines first thing in the morning',
      'She broadcasts her favorite music on her online channel',
      'They broadcast live sports events on television',
      'The weather report broadcasts the forecast for the week',
      'He broadcasts his podcast to listeners worldwide',
      'The TV station broadcasts educational programs in the morning',
      'The local radio broadcasts community announcements',
      'She broadcasts her opinions on social media',
      'They broadcast the concert live from the stadium',
    ],
    word: 'broadcast',
    mean: 'yayınlamak, yaymak',
  },
  {
    sentences: [
      'I build a model airplane every Saturday',
      'She often builds sandcastles at the beach during summer',
      'We occasionally build forts in the living room',
      'He rarely builds puzzles because he finds them boring',
      'They always build a bonfire when they go camping',
      'The construction workers usually build houses in this neighborhood',
      'My friend and I sometimes build snowmen after it snows',
      'The kids usually build blocks towers before bedtime',
      'The company regularly builds new shopping malls in different cities',
      'My dad never builds furniture; he prefers to buy it pre-made',
    ],
    word: 'build',
    mean: 'inşa etmek, geliştirmek',
  },
  {
    sentences: [
      'The candle burns silently in the dark',
      'I burn the toast almost every morning',
      'The sun burns brightly in the sky',
      'My skin burns easily in the sun',
      'She burns the incense every evening',
      'The fire burns slowly, warming the room',
      'He burns the leaves in the backyard every week',
      'The stove burns hot when I cook',
      'The wood burns quickly in the fireplace',
      'The paper burns easily when touched by a flame',
    ],
    word: 'burn',
    mean: 'yanmak, yakmak',
  },
  {
    sentences: [
      'I burst out laughing every time I watch that comedy show',
      'My sister bursts into tears whenever she reads a sad story',
      'The balloon bursts quickly if you prick it with a needle',

      'James, our neighbor, always bursts through the door without knocking',

      'The children burst into applause when the magician finished his tricks',
      'The bubble bursts as soon as you touch it',

      'The crowded room burst into laughter when the comedian told a joke',

      'The flowers burst into bloom in the springtime, creating a beautiful sight',
      'The athlete burst across the finish line, winning the race',
      '',
    ],
    word: 'burst',
    mean: 'patlamak, patlatmak',
  },
  {
    sentences: [
      'I usually buy groceries every week at the supermarket',
      'She rarely buys new clothes because she prefers to save money',

      "We sometimes buy takeout for dinner when we're too tired to cook",

      'He always buys a cup of coffee on his way to work in the mornings',
      'They often buy tickets to concerts and enjoy live music',

      'The teacher buys new books for the classroom every semester to update the materials',

      'My parents never buy expensive gifts for birthdays; they prefer simple and thoughtful presents',

      'We frequently buy snacks and drinks for movie nights with friends',

      'She hardly ever buys magazines because she prefers to read books instead',

      'The company regularly buys office supplies in bulk to save costs',
    ],
    word: 'buy',
    mean: 'satın almak',
  },
  {
    sentences: [
      "I catch the bus every morning at 8 o'clock to go to work",
      'She catches the train twice a week to visit her parents',
      'He always catches the ball during our soccer practice',
      'We usually catch a movie on Friday nights',
      'They often catch a cold during the winter months',
      'The teacher catches the students cheating on the exam',
      'My dog likes to catch the frisbee in the park',

      'Sarah never catches the bus on time and is always late for class',

      'The fisherman tries to catch a big fish every time he goes to the lake',
      'The police officer catches the thief and arrests him',
    ],
    word: 'catch',
    mean: 'tutmak, yakalamak, yetişmek',
  },
  {
    sentences: [
      'I choose to eat breakfast every morning before starting my day',

      'My sister chooses to go to the gym twice a week to stay healthy',

      'We choose to watch a movie every Friday evening as a family tradition',

      'He always chooses to wear casual clothes to work because he finds them more comfortable',
      'She chooses to read a book before going to bed every night',

      'They usually choose to eat out at a restaurant on special occasions',

      'I frequently choose to take a walk in the park during my lunch break to clear my mind',

      'My mom often chooses to cook a delicious dinner for the whole family on Sundays',

      'My best friend sometimes chooses to go on spontaneous road trips to explore new places',

      'The students usually choose to study together in the library before important exams',
    ],
    word: 'choose',
    mean: 'seçmek',
  },
  {
    sentences: [
      'I often cling to my childhood memories when I feel homesick',

      'She rarely clings to negative thoughts and always looks for the silver lining',

      "They sometimes cling to outdated technology because it's familiar to them",

      "He usually clings to his mother's hand when they're in a crowded place",

      'We frequently cling to our routines because they provide a sense of stability',
      'The baby constantly clings to his stuffed animal for comfort',

      'You hardly ever cling to unrealistic hopes and are always grounded in reality',

      'My pet cat occasionally clings to my leg when she wants attention',

      'The climbers always cling to the rocks to maintain their balance during the ascent',

      'Students often cling to their textbooks as a source of knowledge and guidance',
    ],
    word: 'cling',
    mean: 'yapışmak, sıkı sıkı tutmak, sarılmak',
  },
  {
    sentences: [
      'I come to school every day',
      'She comes to visit her grandmother on Sundays',
      "We come to the office at 9 o'clock every morning",
      'They come to the park with their friends in the afternoon',
      'The bus comes at 8:30 in the morning',
      "He comes home from work at 6 o'clock",
      'The mail comes at noon',
      'The teacher comes to class early every day',
      'The cat comes home for dinner every night',
      'My parents come to see me on the weekends',
    ],
    word: 'come',
    mean: 'gelmek',
  },
  {
    sentences: [
      'The movie ticket costs $10',
      'I like to buy things on sale because it costs less',
      "I don't eat out often because it costs too much money",

      'Public transportation is a good option because it costs less than owning a car',
      "Learning a new language can cost time, but it's rewarding",

      "It doesn't cost anything to enjoy a beautiful sunset or a walk in the park",
      'The new smartphone costs too much for my budget',
      'The concert tickets cost more on weekends',
      'She costs her parents a fortune in dance lessons',
      'They cost extra for express shipping',
      'The hotel room costs less during off-peak seasons',
    ],
    word: 'cost',
    mean: 'mal olmak, etmek',
  },
  {
    sentences: [
      'She cuts her hair every month at the salon',
      'My brother cuts the vegetables for dinner every evening',
      'We often cut coupons from the newspaper to save money',
      "The barber cuts men's hair quickly and efficiently",
      'They rarely cut down trees in our neighborhood',
      'I always cut the cake into equal slices for everyone to enjoy',
      'He usually cuts the grass in the front yard on Saturdays',
      'She never cuts corners when it comes to quality in her work',
      'My sister sometimes cuts fabric to make beautiful dresses',
      'The chef cuts the steak into thin slices before serving',
    ],
    word: 'cut',
    mean: 'kesmek, kısmak',
  },
  {
    sentences: [
      'I dig in my garden every weekend to plant new flowers',

      "She usually digs a hole in the backyard every morning to bury her dog's bones",

      'My brother digs a big trench for the sprinkler system once a year',

      'They sometimes dig in the sand at the beach to build sandcastles',

      'We often dig for buried treasure in our imaginary pirate adventures',
      'He never digs in the dirt because he is afraid of bugs',

      'The construction workers dig deep holes to lay the foundation for the new building',
      'You rarely dig holes in the ground for planting seeds',

      'The archaeologist diligently digs up ancient artifacts at the ancient ruins',

      'My parents occasionally dig up the weeds in our vegetable garden to keep it neat and tidy',
    ],
    word: 'dig',
    mean: 'kazmak',
  },
  {
    sentences: [
      'I dive into the pool every Sunday',
      'He dives with his friends at the beach on weekends',
      'She often dives into the deep end of the pool',
      'We rarely dive in the winter months',
      'They usually dive for seashells in the summer',
      'Do you dive in the ocean during your vacation?',
      'The instructor always dives to check the coral reef',
      'The kids never dive without adult supervision',
      'The professional divers regularly dive to inspect shipwrecks',
      'My brother sometimes dives for treasure in the lake',
    ],
    word: 'dive',
    mean: '(suya) dalmak',
  },
  {
    sentences: [
      'I do my homework every day after school',
      "She doesn't like to do the dishes",
      'Does he do his laundry every weekend?',
      'We usually do grocery shopping on Sundays',
      "My parents don't do any exercise regularly",
      'Do you do yoga in the mornings?',
      'They do a lot of volunteer work in their free time',
      'My sister does her makeup before going out',
      "He doesn't do any cooking, he always orders takeout",
      'I do my best to stay motivated at work',
    ],
    word: 'do',
    mean: 'yapmak, etmek',
  },
  {
    sentences: [
      'I often draw pictures of animals in my free time',
      'She rarely draws because she prefers other hobbies',
      'We usually draw together on Sunday afternoons',
      'My little sister always draws on the walls with crayons',
      'He never draws landscapes because he finds them boring',
      'They sometimes draw portraits of their friends as gifts',
      'Emma draws beautifully and often wins art competitions',

      'Every morning, I draw a sun in my journal to start my day with positivity',

      'Our art teacher frequently draws sketches on the board to explain different techniques',

      'The children in the park are often seen drawing on the sidewalks with colorful chalk',
    ],
    word: 'draw',
    mean: 'çizmek',
  },
  {
    sentences: [
      'I often dream about traveling to exotic destinations',
      'My sister rarely dreams during the night',
      'Peter usually dreams of becoming a famous musician',
      'Every night, my parents dream about winning the lottery',
      'She sometimes dreams of living in a bustling city',
      'Our cat frequently dreams about chasing birds in the garden',
      'On weekends, we often dream of sleeping in late',
      'My best friend always dreams of owning a luxurious beach house',
      'They never dream about their past mistakes',

      'The children often dream of meeting their favorite cartoon characters',
    ],
    word: 'dream',
    mean: 'rüya görmek, düşlemek, hayal etmek',
  },
  {
    sentences: [
      'I drink coffee every morning before starting my day',
      'He drinks tea in the afternoon to relax',
      'She rarely drinks alcohol, only on special occasions',
      'We usually drink water during our workouts to stay hydrated',
      'They often drink soda when they go out to eat',
      'The students drink milk during their lunch break at school',
      'My brother never drinks coffee, he prefers herbal tea',
      'Sarah sometimes drinks orange juice for breakfast',

      'The athletes frequently drink energy drinks before competitions',

      'The doctor advised me to drink plenty of water throughout the day',
    ],
    word: 'drink',
    mean: 'içmek',
  },
  {
    sentences: [
      'I drive to work every day',
      'She drives her kids to school in the morning',
      'We often drive to the beach on the weekends',
      'Does your dad drive a big car?',
      'The bus usually drives past our house at 7 AM',
      'He drives carefully to avoid accidents',
      'The taxi driver always drives too fast',
      'I drive my friends to the mall sometimes',
      'She drives her brother to soccer practice after school',
      'Do you drive to the grocery store?',
    ],
    word: 'drive',
    mean: 'araba sürmek, itmek, yürütmek',
  },
  {
    sentences: [
      'She dwells in a small village near the mountains',
      'They dwell by the seaside, enjoying the sound of the waves',
      'He dwells in an old farmhouse surrounded by fields',
      'The indigenous tribe dwells deep within the rainforest',
      'We dwell in a bustling city with skyscrapers and traffic',
      'She dwells in a cozy apartment overlooking the park',
      'They dwell on the outskirts of town, close to nature',
      'He dwells in a remote cabin, far away from civilization',

      'The nomadic people dwell in tents as they move across the desert',

      'We dwell in harmony with the wildlife in our forested neighborhood',
    ],
    word: 'dwell',
    mean: 'oturmak, ikamet etmek, derinlemesine düşünmek (on)',
  },
  {
    sentences: [
      'I eat breakfast every morning at 7am',
      'She always eats lunch at the same time',
      'They usually eat dinner together at home',
      'He rarely eats fast food because it is unhealthy',
      'We sometimes eat fruit for dessert',
      'The children never eat vegetables willingly',
      'My parents often eat out at restaurants on weekends',
      'The students usually eat lunch in the school cafeteria',
      'She occasionally eats snacks in between meals',
      'He always eats a piece of chocolate after dinner as a treat',
    ],
    word: 'eat',
    mean: 'yemek yemek',
  },
  {
    sentences: [
      'The leaves fall from the trees in autumn',
      "I fall asleep at sentence10 o'clock every night",
      'She falls in love easily',
      "He falls behind in his work when he's not focused",
      'We often fall for the same marketing tactics',
      'The rain falls softly on the roof',
      'The raindrops fall on my head',
      'The snow falls heavily during winter storms',
      'They fall out of touch with each other over the years',
      'Do you ever fall while iceskating?',
    ],
    word: 'fall',
    mean: 'düşmek, azalmak',
  },
  {
    sentences: [
      'I feed my cat every morning before I go to work',
      "She always feeds the fish at 6 o'clock in the evening",
      'He feeds the chickens every day after school',
      'Do you feed your dog before or after your evening walk?',
      'We usually feed the birds in the park on Saturdays',

      'The farmer feeds the pigs twice a day, in the morning and in the evening',
      "The baby bird learns to feed itself from its mother's beak",
      "It's important to feed the plants regularly to help them grow",

      "The zookeeper feeds the lions at sentence2 o'clock every afternoon",
      'She never feeds the stray cats in our neighbourhood',
    ],
    word: 'feed',
    mean: 'beslemek',
  },
  {
    sentences: [
      'I feel tired every morning when I wake up',
      'She always feels happy when she sees her friends',
      'We often feel nervous before exams',
      'He rarely feels sad because he has a positive outlook on life',
      'They sometimes feel overwhelmed by all their responsibilities',
      'The children usually feel excited on Christmas morning',
      'My mom feels proud whenever I accomplish something great',

      'The students feel motivated after receiving praise from their teacher',

      'Sarah feels anxious when she has to give a presentation in front of a large audience',
      'People in this town often feel safe due to low crime rates',
    ],
    word: 'feel',
    mean: 'hissetmek, duymak',
  },
  {
    sentences: [
      'I often fight with my younger brother over the remote control',
      'John sometimes fights with his neighbor about parking spaces',

      'Every Saturday, the children in our neighborhood fight over who gets to play with the new toy',
      'She never fights back when someone insults her',
      "We usually fight in the evening when we're tired and irritable",

      'Sarah and Mark are constantly fighting about their different opinions on politics',

      'My parents rarely fight because they believe in resolving conflicts peacefully',

      'The two football teams often fight for possession of the ball during a match',

      'The students sometimes fight over who gets to use the computer first in the school library',

      'James and Emma are occasionally seen fighting over their favorite ice cream flavor at the local shop',
    ],
    word: 'fight',
    mean: 'savaşmak, dövüşmek',
  },
  {
    sentences: [
      'I find it difficult to focus on my work in the mornings',
      'My sister often finds her keys in her bag',
      'John usually finds time to exercise every day',
      'We sometimes find it hard to make decisions together',
      'Sarah always finds something to complain about',
      'They rarely find a good restaurant when they travel',
      'The students often find the course materials confusing',
      'He usually finds his favorite shirt in the laundry hamper',
      'We occasionally find new recipes to try on the internet',
      'My parents never find enough time to relax',
    ],
    word: 'find',
    mean: 'bulmak',
  },
  {
    sentences: [
      'She fits her clothes perfectly after losing weight',
      'They fit comfortably into their small apartment',
      'He fits the puzzle pieces together to complete the picture',
      'The new sofa fits well in the living room',
      'We fit exercise into our daily routine',
      'She fits the description of a dedicated student',
      'They fit the pieces of the jigsaw puzzle',
      'He fits the role of a team leader',
      'The shoes fit snugly without any discomfort',
      'We fit family time into our busy schedules',
    ],
    word: 'fit',
    mean: 'uymak, uydurmak, sığmak',
  },
  {
    sentences: [
      'I flee from spiders whenever I see them crawling near me',

      'She always flees from crowded places because she feels overwhelmed',

      "We often flee to the countryside on weekends to escape the city's hustle and bustle",
      'He never flees from challenges; instead, he faces them head-on',

      'They rarely flee from danger, as they believe in standing their ground',

      'The cat quickly flees from the loud noise of thunder during a storm',

      'Sarah occasionally flees from social events because she prefers her own company',

      'The rabbit instinctively flees from predators to ensure its survival',

      'My friend seldom flees from conflicts and prefers to resolve them peacefully',

      'The children regularly flee from their boring chores to play in the park',
    ],
    word: 'flee',
    mean: 'kaçmak',
  },
  {
    sentences: [
      'I often fling my jacket on the couch when I come home from work',
      'She always flings her books down on the table after class',

      "The cat occasionally flings toys around the room when it's bored",
      "We sometimes fling our arms in the air when we're excited",

      'He rarely flings his clothes into the laundry basket, preferring to leave them on the floor',

      'They never fling their trash in the garbage can, instead, they leave it around the house',

      'Every morning, I fling open the curtains to let in the sunlight',

      'She usually flings herself onto the bed after a long day at school',

      'We frequently fling our backpacks on the floor as soon as we enter the house',

      'He often flings his car keys onto the kitchen counter when he gets home',
    ],
    word: 'fling',
    mean: 'fırlatıp atmak, savurmak',
  },
  {
    sentences: [
      'I fly to work every day by taking the bus',
      'My dad flies to New York for business once a month',
      'The birds fly in the sky all the time',
      'I often fly my kite in the park on Sundays',
      'The planes fly over our house regularly',
      'She always flies to visit her family during the holidays',
      'We usually fly to our vacation destination instead of driving',
      'The butterflies fly from flower to flower in the garden',
      'The superhero can fly through the air with ease',
      'He never flies on airplanes due to his fear of heights',
    ],
    word: 'fly',
    mean: 'uçmak, uçurmak',
  },
  {
    sentences: [
      'My parents forbid me from staying out late on school nights',

      'I always forbid my children from eating too much candy before dinner',
      'The sign on the door forbids smoking in this building',
      'The teacher forbids us from using our phones during class',

      'They frequently forbid their employees from discussing sensitive company information outside of work',

      'The rules at the library strictly forbid talking loudly or making noise',
      'My doctor forbids me from eating foods high in cholesterol',
      'The law forbids parking in front of fire hydrants',

      'The teacher forbids using phones during the exam to ensure a fair testing environment',
      'The company policy forbids dating between colleagues',
    ],
    word: 'forbid',
    mean: 'yasaklamak',
  },
  {
    sentences: [
      'The meteorologist forecasts sunny skies for the weekend',
      'The economist forecasts a rise in inflation next year',

      'The farmer forecasts a good harvest due to the favorable weather',
      'The company forecasts an increase in sales this quarter',
      'The travel agency forecasts a surge in holiday bookings',
      'The sports analyst forecasts a win for the home team',
      'The fashion designer forecasts bold colors to be in trend',
      'The government forecasts a decrease in unemployment rates',
      'The tech firm forecasts the release of new gadgets',
      'The environmentalist forecasts a rise in sea levels',
    ],
    word: 'forecast',
    mean: 'tahmin etmek',
  },
  {
    sentences: [
      'I foresee the future as a bright and promising place',

      'She often foresees the possible outcomes before making a decision',
      'We rarely foresee the challenges that lie ahead',
      'He always accurately foresees the consequences of his actions',

      'They occasionally foresee the potential risks and take necessary precautions',

      'The teacher frequently foresees the difficulties students may encounter during the lesson',

      'My parents seldom foresee the consequences of their impulsive decisions',

      'The experts carefully foresee the potential impact of climate change on the environment',

      'I sometimes foresee the difficulties and find alternative solutions',

      'The fortune teller claims to possess the ability to foresee events before they happen',
    ],
    word: 'foresee',
    mean: 'önceden görmek',
  },
  {
    sentences: [
      'She foretells the future through her dreams',

      'The meteorologist often foretells the weather for the next week',

      'He does not believe in anyone who can foretell the future accurately',

      'Every day, my sister foretells the outcome of her favorite TV show',
      'The psychic foretells that I will meet my soulmate soon',
      'The fortune teller foretells a great success in my future',
      'My grandmother believes that dreams foretell the future events',

      'The astrologer foretells that my horoscope indicates a prosperous future',

      "John's intuition often foretells the success of a business deal",

      'The weatherman on the news program foretells the weather conditions for the week',
    ],
    word: 'foretell',
    mean: 'önceden haber vermek',
  },
  {
    sentences: [
      'I often forget to bring my umbrella when it rains',
      'She never forgets to say goodbye before leaving',
      'The children always forget to do their homework',
      'He usually forgets to lock the front door before going to bed',

      'We sometimes forget to turn off the lights when we leave the house',
      'They rarely forget to feed their pets in the morning',

      "Jenny frequently forgets to set her alarm clock, so she's often late for work",
      'My brother always forgets to buy milk on his way home',
      'Sarah occasionally forgets to pick up her children from school',
      'The students often forget to bring their textbooks to class',
    ],
    word: 'forget',
    mean: 'unutmak',
  },
  {
    sentences: [
      'I forgive my friend for his mistake every time he apologizes',
      'She always forgives her brother for his pranks',
      'My mom often forgives my forgetfulness because she loves me',
      'They never forgive people who hurt them intentionally',

      'We usually forgive our classmates for their jokes during breaks',
      'The teacher forgives her students for coming late occasionally',

      'He forgives his boss for his strictness because he values his job',

      'My sister always forgives me for borrowing her clothes without asking',

      'My grandparents forgive each other for their small disagreements every day',

      'Sarah forgives her parents for their strict rules because she understands they only want the best for her',
    ],
    word: 'forgive',
    mean: 'bağışlamak',
  },
  {
    sentences: [
      'The water freezes in the winter',
      'She freezes whenever she goes outside without a jacket',
      'They always freeze in fear when they see a spider',
      'My hands usually freeze when I forget to wear gloves',
      'He often freezes when he has to give a presentation',
      'We sometimes freeze vegetables to preserve them for later',

      'The temperature frequently freezes at night during the winter months',
      'The lake usually freezes over completely by February',
      'I rarely freeze leftovers, preferring to eat them the next day',

      'The ice cream shop closes in the winter because the machines freeze',
    ],
    word: 'freeze',
    mean: 'donmak, dondurmak',
  },
  {
    sentences: [
      'The students frequently overthrow their textbooks during class',
      'She rarely overthrows her opponent in the game',
      'We always try to overthrow unfair rules and regulations',
      "He never overthrows his boss's decisions",

      'They sometimes overthrow the government in times of political unrest',
      'I usually overthrow my opponents in chess',

      'The workers constantly overthrow the ideas proposed by the management',
      'Jenny often overthrows her diet by indulging in sweets',

      "The team occasionally overthrows their coach's strategy during matches",
      'The protesters planned to overthrow the corrupt regime',
    ],
    word: 'overthrow',
    mean: '(hükümet) devirmek, yıkmak, düşürmek',
  },
  {
    sentences: [
      'I pay my rent every month',
      'She pays for the groceries every week',
      'They pay their bills on time',
      'He pays his employees twice a month',
      'We pay for our dinner at the restaurant',
      'The company pays its employees a competitive salary',
      'Mary always pays attention in class',
      'My brother often pays for our movie tickets',
      'Sarah never pays for her own drinks at the bar',
      "The customer pays for the products at the cashier's counter",
    ],
    word: 'pay',
    mean: 'ödemek',
  },
  {
    sentences: [
      'She pleads with her parents every day to let her stay out later',
      'He pleads for his boss to give him a raise at work',
      'The children plead with their teacher for extra recess time',
      'The lawyer pleads for leniency during the court case',
      'The dog pleads for a treat with big puppy eyes',

      'The protestors plead for justice outside the government building',
      'She pleads with her husband to take out the trash more often',
      'The students plead for more time to complete their assignment',

      'The coach pleads with the referee for a penalty for the opposing team',

      'The politician pleads for support from the public in the upcoming election',
    ],
    word: 'plead',
    mean: 'yalvarmak, dilemek',
  },
  {
    sentences: [
      'I prove my point every time we have a debate',

      'She often proves her expertise in mathematics during our tutoring sessions',

      'They always prove their loyalty by standing up for their friends',
      'He never proves his innocence when accused of a crime',

      'We regularly prove our dedication by working overtime to meet deadlines',

      'The company frequently proves its commitment to quality by conducting rigorous product testing',

      'You seldom prove your worth in this industry without relevant experience',

      'It sometimes proves difficult to find a solution that satisfies everyone',

      'She rarely proves her reliability by consistently completing tasks on time',

      'Students commonly prove their understanding of a subject through exams and assignments',
    ],
    word: 'prove',
    mean: 'kanıtlamak',
  },
  {
    sentences: [
      'I always put my keys in the same place',
      'He usually puts on his glasses before reading',
      'We often put the groceries away as soon as we get home',
      'She rarely puts any effort into her homework',
      'They sometimes put too much sugar in their coffee',
      'The teacher never puts his glasses on the table',
      'I put my phone on silent during important meetings',
      'He always puts his jacket on before going outside',
      'She often puts her makeup on before leaving the house',
      'We rarely put any stock in rumors',
    ],
    word: 'put',
    mean: 'koymak, yerleştirmek, (on) giyinmek',
  },
  {
    sentences: [
      'He quits his job every month',
      'She often quits smoking but then starts again',
      'We never quit when facing challenges',
      'They usually quit playing video games before dinner',
      'He quits his exercise routine after a few weeks',
      'She rarely quits studying until late at night',
      'We sometimes quit our complaints and focus on solutions',
      'They always quit the party early to avoid traffic',

      'He usually quits his favorite TV show halfway through the season',
      'She never quits asking questions to expand her knowledge',
    ],
    word: 'quit',
    mean: 'bırakmak, terketmek',
  },
  {
    sentences: [
      'I read the newspaper every morning before work',
      'She reads books to improve her English skills',
      'We often read magazines during our lunch break',
      'He reads his favorite novel at night before going to bed',
      'They never read newspapers because they get their news online',
      'The students usually read textbooks for their assignments',
      'My sister often reads to her children before they sleep',
      "The professor reads the students' essays to provide feedback",
      'We sometimes read poetry to relax after a long day',
      'The librarian reads stories to the children during storytime',
    ],
    word: 'read',
    mean: 'okumak',
  },
  {
    sentences: [
      'I rebuild my Lego tower every day after school',
      'He always rebuilds his computer whenever it crashes',
      'She never rebuilds her relationship with her ex-boyfriend',
      'We usually rebuild the fence in the backyard during the summer',
      'They occasionally rebuild old cars as a hobby',
      'John sometimes rebuilds old bicycles and sells them',
      'The workers are rebuilding the bridge this week',
      'The company often rebuilds old houses and sells them',
      'The team rebuilds their strategy before every game',

      'Martha rarely rebuilds her wardrobe, she prefers to buy new clothes',
    ],
    word: 'rebuild',
    mean: 'yeniden inşa etmek',
  },
  {
    sentences: [
      "I usually redo my work if it's not perfect",
      'She often redoes her hair before going out',
      'We always redo the puzzle when we finish it',
      'He rarely redoes his homework before turning it in',

      "The teacher usually redoes the lesson if the students don't understand",
      'I sometimes redo my outfit before leaving the house',
      'They never redo their chores without being asked',
      'She always redoes her makeup before going on a date',
      "The chef often redoes the recipe if it doesn't turn out right",
      'We rarely redo our mistakes once they are made',
    ],
    word: 'redo',
    mean: 'yeniden yapmak',
  },
  {
    sentences: [
      'I remake my bed every morning before I leave for work',
      'She always remakes the puzzle after completing it',

      'We often remake the recipe to see if it tastes better with different spices',
      'They usually remake their favorite movies with new actors',
      'He rarely remakes his decisions once he has made up his mind',

      'The teacher frequently remakes the seating arrangement in the classroom',

      'My sister sometimes remakes her clothes to give them a new look',
      'We never remake the same mistakes twice',

      'The fashion industry deliberately remakes old trends to bring them back into style',

      'The company regularly remakes their logo to keep it modern and appealing',
    ],
    word: 'remake',
    mean: 'yeniden yapmak',
  },
  {
    sentences: [
      'I repay my friend for the lunch every week',
      'She always repays her debts on time',
      'He repays his parents by helping out around the house',
      'We repay our loans at the end of each month',
      'The company repays its employees with bonuses',
      'The students repay their teacher with gratitude and respect',
      'My sister repays me by lending me her clothes',

      'The government repays its citizens by providing public services',

      "They often repay their friends' kindness by offering to help them",

      "The customers repay the restaurant's delicious food with their loyalty",
    ],
    word: 'repay',
    mean: '(para) geri vermek, ödemek',
  },
  {
    sentences: [
      'John frequently resells old books to make a profit',

      'She rarely resells her used clothes, preferring to donate them to charity',
      'The company often resells returned merchandise to cut losses',
      'My neighbor occasionally resells secondhand furniture online',
      'They never resell items for more than they were purchased for',
      'He usually resells vintage vinyl records at local flea markets',

      'She sometimes resells her handmade crafts to friends and family',

      'The store regularly resells refurbished electronics at a discounted price',
      "We often resell concert tickets if we can't attend the event",

      'The online marketplace allows users to easily resell goods to other buyers',
    ],
    word: 'resell',
    mean: 'tekrar satmak, satmak',
  },
  {
    sentences: [
      'I reset my alarm clock every night before going to bed',
      'She resets her password every month for security reasons',
      'We reset the router whenever the internet connection is slow',

      'The computer software resets automatically every time it crashes',
      "He resets his watch every morning at 8 o'clock",

      'They reset the classroom layout at the beginning of each semester',
      'The therapist resets the exercise equipment after each use',
      'Cats often reset their sleeping positions throughout the day',
      'The server resets every Sunday at midnight for maintenance',
      'The plant automatically resets its growth cycle in the spring',
    ],
    word: 'reset',
    mean: 'yeniden ayarlamak',
  },
  {
    sentences: [
      'I often rethink my decisions before making a final choice',

      'She rarely rethinks her plans and prefers to stick to her initial ideas',

      'The teacher frequently reminds us to rethink our answers before submitting the exam',

      'We sometimes need to rethink our approach in order to achieve better results',

      'He never forgets to rethink his strategy before entering a new business venture',

      'They occasionally reconsider their options when faced with challenging situations',

      'My parents always encourage me to rethink my career goals and aspirations',

      'The team leader constantly urges his team members to rethink their methods for increased efficiency',

      'It is important to regularly rethink our actions in order to avoid unnecessary mistakes',

      'The professor often advises his students to rethink their thesis statements for stronger arguments',
    ],
    word: 'rethink',
    mean: 'tekrar düşünmek',
  },
  {
    sentences: [
      'I rewrite my essays every week to make sure they are perfect',

      'She often rewrites her to-do list in the morning to stay organized',

      'He never rewrites his notes, which is why he always struggles to understand them later',

      'We rarely rewrite our class presentations because we practice them thoroughly beforehand',
      'They sometimes rewrite their songs before performing them live',

      'My sister usually rewrites her recipes when she wants to add her own twist to them',

      'The teacher always asks us to rewrite our homework if there are too many mistakes',

      'My brother frequently rewrites his speeches to make sure they are persuasive and impactful',

      'Sarah seldom needs to rewrite her emails because she always proofreads them before sending',

      'I occasionally rewrite my diary entries to reflect on my emotions and experiences',
    ],
    word: 'rewrite',
    mean: 'yeniden yazmak',
  },
  {
    sentences: [
      'I ride my bike to work every day',
      'She rides horses at the stable on weekends',
      'We ride the bus to school in the morning',
      'He never rides a motorbike because he finds it dangerous',
      'They often ride their skateboards in the park after school',
      'My sister rides her scooter to the grocery store sometimes',

      'The children usually ride their bicycles to the park in the afternoon',

      'The tourists ride the double-decker bus to explore the city sights',

      'Maria enjoys riding roller coasters at the amusement park during summer vacations',

      'Roberto occasionally rides his motorcycle to visit his friends in the neighboring town',
    ],
    word: 'ride',
    mean: 'binmek(at, bisiklet)',
  },
  {
    sentences: [
      'I usually ring my mother every Sunday evening',
      'He often rings his best friend before going to bed',
      'She sometimes rings her grandparents on their birthdays',

      "We rarely ring our neighbors, but we do when there's an emergency",
      'They always ring the doorbell when they visit us',
      'The alarm clock rings every morning at 7 am',
      'My sister frequently rings her boyfriend during lunch breaks',
      "Tom's phone rings constantly during work hours",
      'The doorbell rings every time someone enters the house',

      'Sarah often rings the customer service hotline to inquire about her order',
    ],
    word: 'ring',
    mean: '(zil vb) çalmak, telefonla aramak',
  },
  {
    sentences: [
      'The sun rises every morning in the east',
      'She rises early every day to get ready for work',
      'My heart rate rises when I am nervous',
      'The price of groceries rises every year',
      'He rises from his chair and walks to the window',
      'They rise to the occasion whenever there is a challenge',
      'This dough needs time to rise before baking it',
      'The tide rises and falls with the lunar cycle',
      'The temperature rises in the summer months',
      'The protest movement rises in response to social injustice',
    ],
    word: 'rise',
    mean: 'doğmak, yükselmek',
  },
  {
    sentences: [
      'I run every morning before work',
      'He usually runs in the park on weekends',
      'She often goes running after school',
      'We sometimes run together in the evenings',
      'They rarely run but prefer other forms of exercise',
      'The dog always runs excitedly when he sees his leash',
      "My sister never runs because she doesn't enjoy it",
      'Tom and Mary run twice a week to stay fit',
      'Jack used to run every day, but now he only runs occasionally',
      'Running quickly becomes a habit if you do it consistently',
    ],
    word: 'run',
    mean: 'koşmak, işletmek, akmak',
  },
  {
    sentences: [
      'He saws the wood carefully to make a table',
      'She saws the branches off the tree in her garden',
      'My father saws the logs every weekend',
      'The carpenter saws the plank into two pieces',
      'He saws through the pipe to fix the leak',
      'She saws the old shelf to reuse the wood',
      'Every morning, he saws the wooden blocks for his project',
      'The artist saws the sculpture out of a single piece of wood',
      'She saws the door frame to fit the new door',
      'The worker saws the metal rods for the construction',
    ],
    word: 'saw',
    mean: 'testereyle kesmek',
  },
  {
    sentences: [
      '"I say ""good morning"" to my neighbor every day"',
      'My teacher often says that practice makes perfect',
      'Sometimes, I say hello to strangers on the street',
      'He always says he will do his homework, but he never does',
      '"We usually say ""thank you"" when someone helps us"',

      'She rarely says anything in class, but she always listens attentively',
      '"Do you ever say ""sorry"" when you make a mistake?"',
      'They say that laughter is the best medicine',

      'The radio announcer often says the weather forecast for the day',
      'My parents often say that being kind to others is important',
    ],
    word: 'say',
    mean: 'demek, söylemek',
  },
  {
    sentences: [
      'I see my best friend every day after school',
      'She sees her grandparents every Sunday for dinner',

      'My brother sees his favorite movie star at every book signing event',
      'We see our teachers in the morning before classes start',
      'The doctor sees patients at the clinic every weekday',
      'They see each other once a month for a coffee catch-up',

      'My mom sees her reflection in the mirror when she gets ready in the morning',

      'He sees his favorite sports team play on television every weekend',

      'Our neighbor sees squirrels running around in their backyard every afternoon',

      'The bus driver sees many passengers boarding the bus during rush hour',
    ],
    word: 'see',
    mean: 'görmek, meanak',
  },
  {
    sentences: [
      'I seek guidance from my mentor every week',
      'She seeks new opportunities in her career',
      'We seek the truth in every situation',
      'He seeks advice from his parents before making a decision',
      'The company seeks new employees to join their team',
      'The detective seeks clues to solve the mystery',
      'They seek adventure in their travels',
      'The student seeks knowledge through studying',
      'She seeks comfort in her favorite book',
      'I seek relaxation by taking a walk in the park every evening',
    ],
    word: 'seek',
    mean: 'aramak, araştırmak',
  },
  {
    sentences: [
      'I sell handmade jewelry at the local market every weekend',
      'My sister sells vegetables at the grocery store twice a week',
      'He often sells second-hand books online to make extra money',

      'They never sell their old clothes, but prefer to donate them to charity',

      'My parents sometimes sell homemade cakes and pastries at events and fairs',

      'We usually sell our products through our website and social media platforms',

      'The store sells various types of electronics, such as laptops and smartphones',

      "She sells organic fruits and vegetables from her garden at a nearby farmers' market",

      'He rarely sells his artwork, as he prefers to keep them as personal collections',

      'The company frequently sells out of their popular products due to high demand',
    ],
    word: 'sell',
    mean: 'satmak',
  },
  {
    sentences: [
      'I send emails to my boss every day',
      'She sends text messages to her friends regularly',

      'We always send postcards to our grandparents when we go on vacation',
      'They never send thank you notes after receiving a gift',

      'He usually sends his resume to multiple companies when job hunting',
      'The company sends out a newsletter every month',
      'My sister sometimes sends funny memes to our family group chat',
      'The teacher often sends homework assignments via email',
      'I rarely send letters by mail anymore',
      'The doctor always sends a reminder for my annual check-up',
    ],
    word: 'send',
    mean: 'göndermek',
  },
  {
    sentences: [
      'I set the alarm for 7:00 every morning',
      'She sets the table for dinner at 6:00 every evening',
      'We set the meeting for next Friday at00 PM',
      'He sets the thermostat to 72 degrees during the winter',

      'The doctor sets appointments for patients on Mondays and Wednesdays',
      'They set aside time to study for their exams every day',
      'The teacher sets homework for the students every weekend',

      'The chef sets the oven to sentence350 degrees before baking the cake',

      'The company sets goals for the employees to achieve each quarter',
      'I set aside money from each paycheck for savings',
    ],
    word: 'set',
    mean: 'hazırlamak, kurmak',
  },
  {
    sentences: [
      'I sew every day to make sure my clothes are well-maintained',
      'She usually sews in the evenings while listening to music',
      'He never sews by hand; he always uses a sewing machine',
      'We often sew together as a family activity on weekends',

      'They rarely sew their own clothes; they prefer to buy them from stores',

      'My grandmother sews beautifully and she has been doing it for years',

      "The tailor sews quickly and efficiently to meet his customers' deadlines",

      'Lisa sometimes sews dresses for her dolls using leftover fabric',
      'You should sew a button on that shirt before it falls off',

      "I often sew small gifts for my friends' birthdays, like personalized pillows or pouches",
    ],
    word: 'sew',
    mean: 'dikiş dikmek',
  },
  {
    sentences: [
      'I often shake my head in disbelief when I hear his outrageous claims',
      'She never shakes hands with strangers as a safety precaution',
      'We usually shake salt on our popcorn before watching a movie',

      'He shakes his body vigorously during his morning exercise routine',

      'They rarely shake things up and prefer to stick to their daily routine',

      'The bartender carefully shakes the cocktail before serving it to the customer',

      'My little sister shakes her rattle to get my attention when she wants to play',
      'The earthquake shakes cities at around00 at night',

      'Every morning, the construction workers shake the scaffolding to ensure its stability',

      'The fear of public speaking makes his legs shake uncontrollably during presentations',
    ],
    word: 'shake',
    mean: 'sallamak, sallanmak, tokalaşmak',
  },
  {
    sentences: [
      'I usually shave every morning before work',
      'He never shaves on weekends',
      'She shaves her legs once a week',
      'They always shave before going out',
      'We sometimes forget to shave before an important event',

      'You should shave your beard if you want to look more professional',
      "The barber shaves his customers' beards and mustaches",
      'She only shaves her armpits once a month',
      'He frequently shaves his head because he likes the feeling',
      'We never let our son shave yet as he is still too young',
    ],
    word: 'shave',
    mean: 'tıraş olmak, tıraş etmek',
  },
  {
    sentences: [
      'I often shed tears when I watch sad movies',
      'My dog sheds its fur every spring',
      'She rarely sheds light on complicated topics during class',

      'We usually shed our winter clothes as soon as the weather gets warmer',

      'He sheds his responsibilities and goes on vacation every summer',
      'The snake sheds its skin in order to grow',
      'I sometimes shed a tear when I listen to emotional music',
      'They often shed their inhibitions and dance freely at parties',

      'My cat sheds hair all over the house, especially during shedding season',
      'The tree sheds its leaves in the autumn',
    ],
    word: 'shed',
    mean: 'dökmek, saçmak, akıtmak',
  },
  {
    sentences: [
      'The sun shines brightly every morning, giving us a warm start to the day',

      'She always shines at work, consistently delivering exceptional results',

      'The moon shines beautifully in the night sky, creating a romantic atmosphere',

      'We often shine our shoes before going out to make them look clean and polished',

      'My grandmother likes to shine her silverware regularly to keep it looking shiny and new',

      'The stars shine brilliantly on a clear night, illuminating the darkness',
      'He rarely shines in sports, but he enjoys playing them for fun',

      'The light bulb shines brightly in the room, providing enough illumination for us to see',

      "My sister's smile always shines with happiness whenever she sees her friends",

      'The streetlights shine dimly during the day, but become much brighter at night',
    ],
    word: 'shine',
    mean: 'parlamak, parlatmak',
  },
  {
    sentences: [
      'He shoots basketball hoops every afternoon',
      'The hunters shoot animals once a week',
      'She shoots a bow and arrow at the archery range on Saturdays',

      'The police officers shoot their guns at the shooting range every month',
      'The photographer shoots amazing photos at sunset',
      'The movie director shoots scenes for the film every day',
      'My brother shoots his toy gun in the backyard every morning',
      'The soldiers shoot their rifles during training exercises',
      'The videographer shoots wedding videos on weekends',

      'The athletes shoot arrows at the target during the competition',
    ],
    word: 'shoot',
    mean: 'ateş etmek, vurmak, (foto, video) çekmek',
  },
  {
    sentences: [
      'She shows her drawings to her friends every Friday',
      'The magician shows a new trick at every performance',
      'We show our support for the team by attending every game',
      'He shows his love for cooking by making dinner every night',
      'The teacher shows a new lesson every Monday',
      'The actor always shows his talent in every movie',
      'The band shows their new songs at every concert',
      'The museum shows ancient artifacts from the Roman Empire',
      'The cinema shows a new film every Friday',
      'The teacher shows the students how to solve the equation',
      'The gallery shows paintings by local artists',
      'The shop window shows the latest fashion trends',
      'The documentary shows the life of pandas in the wild',
      'The monitor shows the results of the computer analysis',
      'The website shows different recipes for homemade bread',
      'The sign shows the way to the nearest exit',
    ],
    word: 'show',
    mean: 'göstermek',
  },
  {
    sentences: [
      'The sweater shrinks after being washed in hot water',
      'The company shrinks its budget due to financial constraints',
      'He notices that his jeans shrink a little after every wash',
      'The ice caps shrink each year because of global warming',
      'She shrinks the image to fit it into the document',
      'The tumor shrinks after several rounds of treatment',
      'The population of the town shrinks as people move to the city',
      'The fabric shrinks if it is not pre-washed before sewing',
      'The shadows shrink as the sun rises higher in the sky',
      'The gap between the two teams shrinks as the game progresses',
    ],
    word: 'shrink',
    mean: 'çekmek, büzülmek',
  },
  {
    sentences: [
      'I always shut the windows before going to bed',
      'He usually shuts his computer down after finishing work',
      'She often shuts the door to keep the noise out',
      'We sometimes shut the curtains when it gets too bright outside',
      'They rarely shut the gate properly, and the dog escapes',
      'The teacher always shuts the classroom door during lessons',
      "He never shuts up about his new car, it's really annoying",
      'She frequently shuts off her phone to have some quiet time',
      'We occasionally shut off the lights to save electricity',
      "The shop owner always shuts the store at 9 o'clock",
    ],
    word: 'shut',
    mean: 'kapamak',
  },
  {
    sentences: [
      'I sing in the shower every morning',
      'She sings karaoke at the local bar every Saturday night',
      'They often sing along to their favorite songs on the radio',
      'He usually sings in the church choir on Sundays',
      'We sometimes sing lullabies to our baby before bedtime',
      "My sister never sings in public, she's too shy",
      'The birds sing beautifully in the park during the spring',

      'The children always sing the national anthem at school assemblies',

      'You can hear street performers singing on the busy city streets',

      'My friends and I frequently sing duets at our weekly karaoke nights',
    ],
    word: 'sing',
    mean: 'şarkı söylemek, ötmek',
  },
  {
    sentences: [
      'The boat sinks slowly after hitting a rock',
      'The sun sinks below the horizon at dusk',
      'She watches as the leaves sink to the bottom of the pond',
      'He sinks into his chair, feeling very tired',
      'The anchor sinks to the seabed to hold the ship in place',
      'The stone sinks quickly in the river',
      'The city sinks under the weight of the heavy snow',
      'She sinks her feet into the warm sand at the beach',
      'The old treasure chest sinks into the ocean depths',

      'The rain sinks into the soil, providing moisture for the plants',
    ],
    word: 'sink',
    mean: 'batmak, batırmak',
  },
  {
    sentences: [
      'I sit on the comfortable couch every evening',
      'She usually sits quietly in the library during her lunch break',
      'We often sit together for family meals',
      'He seldom sits during the long meetings at work',
      'The students always sit in a circle during discussion time',
      'Mary sometimes sits under the tree to read her favorite book',
      'They never sit at the front row during concerts',

      'The teacher frequently sits next to the students to offer guidance',

      'Alex and I usually sit at the back of the classroom during lectures',

      'My cat loves to sit on the window sill and watch the birds outside',
    ],
    word: 'sit',
    mean: 'oturmak',
  },
  {
    sentences: [
      'Heroes in fairy tales often slay dragons to save the kingdom',

      'In video games, players sometimes slay monsters to complete quests',
      'The knight vows to slay the beast terrorizing the village',

      'In the story, the warrior slays the evil sorcerer to bring peace',
      'She slays the audience with her amazing singing performance',
      'He slays all the difficult questions in the quiz show',
      'The comedian slays the crowd with his hilarious jokes',
      'In the movie, the hero slays the villain in the final battle',
      'The fashion blogger slays with her incredible sense of style',
      'They slay the competition with their innovative ideas',
    ],
    word: 'slay',
    mean: 'katletmek',
  },
  {
    sentences: [
      'I usually sleep for eight hours every night',
      'My sister rarely sleeps during the day',
      'He often falls asleep while watching television',
      'We sometimes sleep in on the weekends',
      'They never sleep before midnight',
      'She always sleeps in the afternoon',
      'The baby usually sleeps through the night',
      'My parents occasionally sleep in separate bedrooms',
      'We can hardly ever sleep when there is too much noise',
      'He typically sleeps on his stomach',
    ],
    word: 'sleep',
    mean: 'uyumak',
  },
  {
    sentences: [
      'The children slide down the playground slide with glee',
      'She slides her glasses back up her nose when they slip down',

      'The baseball player slides into second base to avoid being tagged out',
      'He slides the book back onto the shelf after reading',

      'The waiter slides the plate of food onto the table without spilling a drop',

      'The photographer slides the lens cover on before putting the camera away',
      'The ice skater slides across the ice with effortless grace',
      'The sun slides below the horizon, signaling the end of the day',

      'The secretary slides the documents into the envelope for mailing',
      'The snake slides through the grass, barely making a sound',
    ],
    word: 'slide',
    mean: 'kaymak, kaydırmak',
  },
  {
    sentences: [
      'I always smell the roses in my garden in the morning',
      'My sister rarely smells the food before eating it',
      'They often smell the fresh bread at the bakery',
      'Martha sometimes smells the perfume before buying it',

      'We usually smell the fresh air when we go hiking in the mountains',
      'He never smells the coffee before pouring himself a cup',
      'The dog always smells the food before eating it',
      'I often smell the freshly cut grass in the park',
      'Sarah rarely smells the flowers in our backyard',
      'The baby sometimes smells the soap before taking a bath',
    ],
    word: 'smell',
    mean: 'koklamak, kokmak',
  },
  {
    sentences: [
      'The farmer sows the seeds in the field every spring',
      'She usually sows the vegetables on Sunday mornings',
      'They often sow a variety of flowers in their garden',
      'He always sows the crops before the rainy season starts',
      'I never sow the seeds too close together',
      'We sometimes sow new grass in our backyard',
      'The workers sow the rice in the paddy fields every year',
      'She usually sows the seeds in neat rows for better growth',
      'They always sow the corn after preparing the soil properly',
      'The gardener never sows the seeds too deep in the ground',
    ],
    word: 'sow',
    mean: '(tohum) ekmek',
  },
  {
    sentences: [
      'I speak English every day',
      'He seldom speaks in class',
      'We usually speak on the phone in the evenings',
      'Do you often speak to your parents?',
      'They hardly ever speak to their neighbors',
      'She speaks Spanish fluently',
      'The teacher always speaks clearly during the lesson',
      'My sister and I speak French at home',
      'He never speaks loudly in public',
      'I sometimes speak in a British accent',
    ],
    word: 'speak',
    mean: 'konuşmak',
  },
  {
    sentences: [
      'I always spell my name correctly',
      'She sometimes forgets how to spell difficult words',
      'He rarely spells anything in his writing',
      'They usually use a spelling checker to avoid typos',
      'We often practice spelling new vocabulary words',
      'The teacher frequently asks the students to spell words aloud',
      'You never seem to have trouble with spelling',
      'The app automatically corrects spelling of words',
      'She hardly ever has to ask for help with spelling',
      'We occasionally play spelling games to improve our skills',
    ],
    word: 'spell',
    mean: 'harf harf söylemek',
  },
  {
    sentences: [
      'I usually spend my weekends with my family',
      'He spends a lot of time studying every day',
      'She rarely spends money on unnecessary things',
      'We often spend our evenings watching movies',
      'They usually spend their summer vacations at the beach',
      'My friend always spends his lunch break in the park',

      'The company spends a considerable amount of money on advertising',
      'Maria spends most of her time practicing the piano',
      'We never spend more than we earn',
      'My parents spend a lot of time taking care of the garden',
    ],
    word: 'spend',
    mean: 'harcamak, geçirmek',
  },
  {
    sentences: [
      'I often spill coffee on my desk in the mornings',
      "She rarely spills water on the floor when she's drinking",
      'We usually spill something while cooking dinner',
      'They never spill their drinks at the restaurant',

      'My little brother occasionally spills his food at the dining table',
      'He spills milk on his clothes every morning during breakfast',

      'She always spills sauce on her white shirt when she eats spaghetti',
      'We sometimes spill paint while working on our art projects',
      'They seldom spill their drinks when walking',
      'I often spill my pen ink on important documents',
    ],
    word: 'spill',
    mean: 'dökmek, dökülmek, sızmak',
  },
  {
    sentences: [
      'I always spin the globe in my office to find the next travel destination',
      'Jane rarely spins the wheel of fortune at the casino',

      'Peter sometimes spins his fidget spinner when he is feeling nervous',

      'They usually spin the laundry in the washing machine every Sunday morning',

      'We often spin around in the merry-go-round at the amusement park',
      'My grandmother never spins wool anymore due to her arthritis',

      'The DJ frequently spins the latest hits at the nightclub on weekends',
      'Cindy occasionally spins a yarn about her adventures abroad',
      'He seldom spins the top on his desk during work hours',

      'The children always spin the bottle to decide who goes first in the game',
    ],
    word: 'spin',
    mean: 'hızla dönmek, döndürmek',
  },
  {
    sentences: [
      "I get up at 7 o'clock every morning",
      'She gets to work by bus on weekdays',
      'Tom gets good grades in school',
      'The cat gets fed twice a day',
      'We get our groceries from the store on Sundays',
      'The mailman gets to our house at noon',
      'He gets a haircut every month',
      'They get along well with their neighbors',
      'She gets her hair done at the salon every Friday',
      'I get nervous before a big test',
    ],
    word: 'get',
    mean: 'almak, elde etmek, varmak, (up) kalkmak,(on well) anlaşmak',
  },
  {
    sentences: [
      'I give my dog a bath every Friday evening',
      'She gives her children a kiss before they go to bed',
      'The teacher gives us homework every day',
      'The chef gives the food a final sprinkle of salt',
      'They give presentations at work twice a month',
      'He gives his girlfriend a hug goodbye every morning',
      'The gardener gives the plants water every morning',
      'The doctor gives his patients advice on healthy living',
      'My parents give me money for my allowance every week',

      'The volunteer gives her time to help the homeless every Saturday',
    ],
    word: 'give',
    mean: 'vermek',
  },
  {
    sentences: [
      'I go to the park every morning to walk my dog',
      'She usually goes to bed early on weeknights',
      'We often go to the movies on the weekends',
      'He never goes out without his phone',
      'They sometimes go shopping together in the afternoon',
      'I always go to the gym after work',
      'She rarely goes to parties because she prefers staying home',
      'We usually go on vacation in the summer',
      'He often goes for a run in the morning before work',
      'They seldom go to the beach during the winter months',
    ],
    word: 'go',
    mean: 'gitmek',
  },
  {
    sentences: [
      'I grind my coffee beans every morning before breakfast',
      'He usually grinds his teeth while he sleeps',
      'She often grinds the spices for our meals',
      'They rarely grind their own flour for baking',
      'We sometimes grind our own coffee at home',
      'The miller grinds the wheat into flour at the local mill',
      'You always grind your pencil down to its stub',
      'The dancer gracefully grinds her feet into the stage floor',
      'My dentist recommended that I not grind my teeth',
      'The chef carefully grinds fresh pepper onto the salad',
    ],
    word: 'grind',
    mean: 'öğütmek, bilemek',
  },
  {
    sentences: [
      'I grow tomatoes in my backyard every summer',
      'She grows flowers in her garden all year round',
      'We grow herbs on our windowsill',
      'He usually grows vegetables in his allotment',
      'They grow their own fruit in their orchard',
      'My parents grow sunflowers in their field',
      'We often grow a variety of plants in our greenhouse',
      'She always grows beautiful roses in her flowerbeds',
      'Every spring, we grow new plants from seeds',
      'My neighbor grows bonsai trees in his living room',
    ],
    word: 'grow',
    mean: '(bitki vb) yetişmek, yetiştirmek',
  },
  {
    sentences: [
      'I hang my clothes in the closet every evening after work',
      'My sister hangs her artwork on the wall every weekend',
      'We often hang out at the park on Sundays',
      'Susan hangs her keys by the front door so she never loses them',
      'David hangs his laundry outside to dry in the sun',

      'They usually hang decorations around their house during the holidays',

      "The restaurant hangs a sign outside when it's open for business",
      'He never hangs up his phone without saying goodbye',
      'Every morning, she hangs her coat on the hook by the entrance',

      'We hang our pictures on the living room wall to brighten up the space',
    ],
    word: 'hang',
    mean: 'asmak, asılmak',
  },
  {
    sentences: [
      "I have lunch at sentence12 o'clock every day",
      'She has a lot of homework to do tonight',
      'We have English class twice a week',
      'They have a meeting at 9am tomorrow morning',
      'He has a habit of reading before bed',
      'My brother and I have breakfast together every morning',
      'The dog has to be walked three times a day',
      'My sister has a dentist appointment next week',
      'She has a talent for playing the piano',
      'They have a party to attend on Saturday night',
    ],
    word: 'have',
    mean: 'sahip olmak, yemek içmek, yapmak',
  },
  {
    sentences: [
      'I hear the alarm every morning when it goes off',
      'She often hears her favorite song on the radio',
      'We sometimes hear strange noises at night',

      'The students always hear their teacher give instructions in class',
      'He rarely hears any complaints from his customers',

      'They usually hear birds chirping outside their window in the morning',
      'My parents hear the phone ring when someone calls them',

      'The baby often hears his parents singing him lullabies before bedtime',
      'We never hear any thunder during the winter months',
      'She frequently hears her neighbors arguing loudly',
    ],
    word: 'hear',
    mean: 'duymak, işitmek',
  },
  {
    sentences: [
      'I hide my favorite toys under the bed',
      'Sometimes, I hide in the closet to scare my sister',
      'My dog often hides his bones in the backyard',
      'She always hides her emotions behind a smile',
      'The treasure map hides a secret location in the forest',
      'The children hide from the rain under the big tree',
      'I never hide the truth from my friends',
      'The magician hides a rabbit in his hat',
      'My cat likes to hide behind the curtains',
      'We usually hide from the sun under a parasol at the beach',
    ],
    word: 'hide',
    mean: 'saklamak, saklanmak',
  },
  {
    sentences: [
      'I hit the tennis ball every morning before work',
      'She hits the gym twice a week to stay fit',
      'We hit the snooze button on our alarm clock every morning',
      'He hits the road early every Sunday for a long bike ride',
      'They hit the books every evening to study for their exams',
      'The car hits the road at exactly 7 AM every weekday',
      'You hit the nail on the head with that clever idea',

      'The weatherman predicts that a storm will hit the city this evening',

      "My neighbor's dog hits the postman's leg whenever he delivers the mail",

      "The famous singer's new album is expected to hit the charts next week",
    ],
    word: 'hit',
    mean: 'vurmak, çarpmak, uğramak',
  },
  {
    sentences: [
      'I hold the door open for my sister every morning',
      'The students hold an assembly every Friday at00 am',
      'She always holds her baby tightly when they walk in the park',

      'The team holds a meeting every Monday to discuss their progress',
      'He holds his breath underwater for as long as he can',

      'The company holds a training session for new employees every month',

      'My mom holds a cooking class at the community center every Tuesday',
      'The bus holds up traffic on the way to work every morning',

      'The police officer holds a gun in his hand while patrolling the neighborhood',

      'The little girl holds her teddy bear while she falls asleep every night',
    ],
    word: 'hold',
    mean: 'tutmak,tutturmak, yapmak',
  },
  {
    sentences: [
      'I hurt my finger yesterday while I was cooking',
      'Sometimes, my back hurts after a long day at work',
      'She hurts herself often while playing sports',
      'My knee hurts every time I walk up the stairs',
      'It always hurts when I have a cavity filled at the dentist',

      'Doctors say that it hurts less if you take the medicine before the pain gets worse',
      'He never hurts himself while exercising at the gym',
      'The wound hurts whenever I touch it',
      "My head hurts whenever I don't get enough sleep",
      'It hurts to see her cry',
    ],
    word: 'hurt',
    mean: 'acıtmak, acımak',
  },
  {
    sentences: [
      'I input my password to access my computer',
      'Please input your name and address on the form',
      'She inputs the data into the spreadsheet for analysis',

      'The cashier inputs the price of the items into the cash register',
      'I need to input the correct code to unlock the door',

      'The scientist inputs the experiment results into the computer program',
      'Can you input the meeting details into the calendar for me?',

      'The user must input the required information to create a new account',

      'The receptionist will input your reservation into the hotel system',
      'Make sure to input the correct date for your appointment',
    ],
    word: 'input',
    mean: 'bilgisayara veri girmek',
  },
  {
    sentences: [
      'I keep a daily journal to document my thoughts and experiences',
      'My sister keeps her room very neat and organized',

      'He keeps forgetting to feed the fish, so they always look hungry',

      'We keep in touch with our extended family through weekly video calls',

      "They keep a strict schedule for their children's extracurricular activities",

      'The bakery down the street keeps their shelves stocked with fresh bread every morning',
      'She keeps her promises and never breaks them',

      'We keep our car well-maintained by regularly taking it for service',
      'He keeps a positive attitude even in challenging situations',

      'They keep asking me for advice on cooking because I love experimenting in the kitchen',
    ],
    word: 'keep',
    mean: 'saklamak, korumak, muhafaza etmek, devam etmek',
  },
  {
    sentences: [
      'She kneels in front of the altar every evening to pray',
      'He often kneels down to tie his shoelaces',
      'The kids never kneel during the school assembly',

      'The servant always kneels before the king when he enters the room',
      'Do you kneel when you propose in your culture?',
      'The student kneels on the floor to look for his lost pencil',
      "My grandmother seldom kneels because it's difficult for her",

      'The athlete always kneels before the race to stretch his muscles',

      'People sometimes kneel to get a better look at something low to the ground',
      'The knight kneels before the queen to pledge his loyalty',
    ],
    word: 'kneel',
    mean: 'diz çökmek',
  },
  {
    sentences: [
      'I knit a sweater every week',
      'She often knits scarves for her friends',
      'He usually knits in the evenings',
      'We sometimes knit together on weekends',
      'You always knit with such precision',
      'They never knit in the summer months',
      'My grandmother knits to relax after work',
      'The knitting club meets once a month',
      'Do you often knit while watching TV?',
      "My sister doesn't know how to knit, but I'm teaching her",
    ],
    word: 'knit',
    mean: 'örmek',
  },
  {
    sentences: [
      'I know how to swim very well',
      'She knows the answer to every question',
      'We know each other since childhood',
      'They know when the party starts',
      'He knows how to play the guitar',
      "The teacher knows the students' names",
      'I know that movie very well',
      'She knows where the supermarket is located',
      'They know the rules of the game',
      'He knows how to cook delicious meals',
    ],
    word: 'know',
    mean: 'bilmek, tanımak',
  },
  {
    sentences: [
      'Every morning, the hen lays an egg in the coop',
      'The mason lays bricks carefully to build a strong wall',
      'The librarian lays out the new books on the display table',
      'The cat lays in the sunbeam, basking in the warmth',
      'She lays her keys on the counter as soon as she gets home',

      'The artist lays his brushes down when he takes a break from painting',
      'The child lays his head on the pillow when it’s time for a nap',
      'He lays the tablecloth on the table before dinner',
      'The gardener lays mulch around the plants to protect them',
      'The dog lays at the foot of the bed every night',
    ],
    word: 'lay',
    mean: 'yaymak, sermek',
  },
  {
    sentences: [
      'I lead a team of professionals at work',
      'She leads a healthy lifestyle by exercising regularly',
      'He usually leads the discussion during our weekly meetings',
      'They lead a fulfilling life by prioritizing their passions',

      'We often lead the way when it comes to implementing new technology',
      'The company leads the market in innovative product designs',

      'She leads a busy life, always juggling work and family responsibilities',

      'I rarely lead group projects because I prefer working independently',
      'He leads a successful career as a motivational speaker',

      'They sometimes lead group exercises during their fitness classes',
    ],
    word: 'lead',
    mean: 'yönlendirmek, rehberlik etmek',
  },
  {
    sentences: [
      'I lean against the wall every morning while waiting for the bus',
      'She usually leans on her desk when she is tired',
      'We often lean back in our chairs during lunch breaks',

      'He never leans on others for support; he prefers to solve his own problems',
      'They sometimes lean forward to get a better view of the screen',
      'The cat always leans against my leg when I sit down',
      'You rarely lean forward when you listen to someone talking',

      'My friend usually leans over the balcony to watch the street below',
      'The tree trunk leans slightly to the left due to strong winds',
      'The old man always leans on his cane while walking slowly',
    ],
    word: 'lean',
    mean: 'yana yatmak, yaslanmak',
  },
  {
    sentences: [
      'My dog leaps over the tall fence every morning',
      'She rarely leaps off the sofa in the living room',
      'We often watch as the acrobat leaps through the air with grace',
      'The athlete leaps high into the sky during her long jump event',

      'They sometimes leap into the lake to cool off on hot summer days',
      'He never misses a chance to leap onto the stage and perform',
      'The frog leaps from one lily pad to another in the pond',
      'Mary eagerly leaps out of bed to start her day early',

      'The horse confidently leaps over the obstacles in the show jumping competition',

      'I always feel a surge of excitement whenever I see someone leap with ease',
    ],
    word: 'leap',
    mean: 'sıçramak, üstünden atlamak',
  },
  {
    sentences: [
      'I learn English every day after school',
      'My sister learns to play the guitar on Mondays and Thursdays',
      'She learns new words in Spanish every week',
      'He learns about history at the museum every Saturday',
      'The students learn math in the morning',
      'We learn about different cultures in our geography class',
      'You learn how to cook from your mother',
      'They learn about animals at the zoo every month',
      'The baby learns to walk and talk every day',
      'The team learns new techniques at practice',
    ],
    word: 'learn',
    mean: 'öğrenmek',
  },
  {
    sentences: [
      'I always leave for work at 7:30 in the morning',
      'She sometimes leaves her homework until the last minute',
      "We usually leave the house at around 9 o'clock on weekends",
      'The bus often leaves the station later than scheduled',
      'He rarely leaves his office before 6 p',
      'm',

      'They never leave the party early; they always enjoy every moment',
      'Do you ever leave your phone charger at home?',

      'My sister and I usually leave for school together in the morning',
      'The train always leaves the platform exactly on time',
      'How often does your boss leave work early?',
    ],
    word: 'leave',
    mean: 'ayrılmak, bırakmak',
  },
  {
    sentences: [
      'I often lend my books to my friends',
      'She rarely lends money to strangers',
      'He usually lends his car to his brother on weekends',
      'We sometimes lend a helping hand to our neighbors',
      'They never lend their clothes to anyone',
      'My parents always lend a listening ear whenever I need to talk',

      'Maria frequently lends her notes to her classmates before exams',
      'The teacher occasionally lends pens to forgetful students',
      'Our neighbor kindly lends us her lawnmower when ours is broken',
      'The library lends books to its members for free',
    ],
    word: 'lend',
    mean: 'ödünç vermek',
  },
  {
    sentences: [
      'I let my sister use my laptop every afternoon after school',

      'We let our dog play in the park twice a day, in the morning and in the evening',
      'He lets his daughter watch TV for half an hour before dinner',

      'She lets her children have ice cream once a week as a special treat',
      'They let me borrow their car whenever I need it',

      'We let our plants receive sunlight for at least six hours every day',

      'My parents let me stay out with friends until sentence10 PM on weekends',

      "He lets his employees take a coffee break every morning at sentence10 o'clock",
      'She lets her toddler take a nap in the early afternoon',
      'We let our cat sleep on the bed at night',
    ],
    word: 'let',
    mean: 'izin vermek, bırakmak',
  },
  {
    sentences: [
      'I lie down in my bed every night before going to sleep',
      'She always lies about her age when people ask her',
      'He never lies to his parents about his whereabouts',
      'The cat often lies in the sun on the porch in the afternoon',
      'We sometimes lie to ourselves about our true feelings',
      'You usually lie on the beach when you go on vacation',
      'The children frequently lie to get out of trouble',
      'My dog always lies near the fireplace in the winter',
      'The books lie untouched on the shelf for years',
      'The flowers lie beautifully in the vase on the dining table',
    ],
    word: 'lie',
    mean: 'uzanmak, yalan söylemek',
  },
  {
    sentences: [
      'She lights a candle to create a cozy atmosphere',
      'The street lamps light up the avenue as dusk falls',
      'Every evening, he lights the fireplace to warm the living room',

      'The technician lights the pilot of the furnace for the winter season',
      'The chef lights the stove to start preparing dinner',
      'The campers light a bonfire to cook their food and keep warm',

      'The city lights the Christmas tree in the town square every year',
      'The match lights instantly with a single strike',
      'The fireworks light the sky during the festival',
      'The lighthouse lights the way for ships at sea',
    ],
    word: 'light',
    mean: 'yakmak, yanmak, aydınlatmak',
  },
  {
    sentences: [
      'He loses his keys almost every other day',
      'She loses patience when the internet is slow',
      'The team loses focus if they don’t practice regularly',
      'The traveler loses his way in the new city without a map',
      'The businessman loses money when the market is down',
      'The child often loses socks in the laundry',
      'The gardener loses plants if he forgets to water them',

      'The student loses track of time when studying interesting subjects',
      'The tourist loses interest in the tour when it’s too long',

      'The actor loses himself in the role to deliver a convincing performance',
    ],
    word: 'lose',
    mean: 'kaybetmek, yenilmek',
  },
  {
    sentences: [
      'She makes dinner every evening',
      'They make their beds every morning before leaving for work',
      'He makes a cup of coffee for himself every afternoon',
      'We make plans for the weekend every Friday evening',

      'The teacher makes an announcement at the beginning of every class',
      'My sister makes her own clothes using a sewing machine',
      'John makes his bed as soon as he wakes up in the morning',
      'They make time for exercise at least three times a week',
      'The factory makes sentence100 units of the product per day',
      'I make a grocery list before going to the supermarket',
    ],
    word: 'make',
    mean: 'yapmak, hazırlamak',
  },
  {
    sentences: [
      'This sign means there is a pedestrian crossing ahead',
      'He means well, even if he doesn’t always say the right thing',
      'The red light means stop, and the green light means go',
      'To her, family means everything',
      'The word “benevolent',
      'means kind and generous',
      'A tight budget means we have to be careful with our spending',
      'In mathematics, the term “average',
      'means the sum divided by the count',
      'A nod usually means agreement or approval',
      'That loud alarm means the building is being evacuated',
    ],
    word: 'mean',
    mean: 'meanına gelmek, kast etmek, istemek',
  },
  {
    sentences: [
      'I meet my friends at the park every Saturday',
      'She meets her boss for coffee every morning before work',

      'The teacher meets with the students every Monday for a group discussion',
      'They meet up with their family for dinner once a week',
      'We meet at the gym to exercise together on Fridays',
      'The club meets at the library every month to discuss new books',

      'He meets with his study group to review the material before exams',
      'The team meets for practice every evening after school',
      'My parents meet with their friends for brunch on Sundays',

      'The neighbors meet for a barbecue in the backyard during the summer',
    ],
    word: 'meet',
    mean: 'karşılaşmak, tanışmak, karşılamak',
  },
  {
    sentences: [
      'I often mishear what my boss says in meetings',
      'She always mishears the lyrics of the song',
      "The students sometimes mishear the teacher's instructions",
      'He rarely mishears his wife when she speaks clearly',
      'We never mishear the alarm clock in the morning',
      'They frequently mishear the announcements at the train station',
      "The children occasionally mishear their parents' instructions",

      "The receptionist usually mishears the caller's name on the phone",
      'I seldom mishear the dialogue in movies',
      'My friend always mishears the punchline of jokes',
    ],
    word: 'mishear',
    mean: 'yanlış duymak',
  },
  {
    sentences: [
      'She often misleads her classmates during group projects',

      'He never misleads his customers about the quality of his products',

      "They rarely mislead their clients regarding their company's financial status",

      "The company's CEO sometimes misleads the public with false statements",
      'My neighbor always misleads me with his unreliable advice',

      'Our teacher occasionally misleads us with tricky quiz questions',

      'The politician frequently misleads the public with misleading campaign promises',

      'The marketing team deliberately misleads consumers through their misleading advertisements',

      'The gossip magazines consistently mislead readers with fabricated stories',

      'The salesperson constantly misleads potential buyers by exaggerating product features',
    ],
    word: 'mislead',
    mean: 'saptırmak, yanıltmak, yanlış yönlendirmek',
  },
  {
    sentences: [
      'I often misread instructions on first attempt',
      'She rarely misreads road signs while driving',
      "Tim sometimes misreads his teacher's handwriting",
      "We occasionally misread the directions when we're in a hurry",

      'Jenny frequently misreads the time on her alarm clock and wakes up late',
      "Tom and his sister always misread each other's text messages",

      'The students usually misread the questions during exams due to nervousness',

      'My grandpa misreads the small print in newspapers without his glasses',

      'The toddler misreads his favorite storybook, but still enjoys the pictures',

      "The detective never misreads people's body language, which helps solve crimes",
    ],
    word: 'misread',
    mean: 'yanlış okumak',
  },
  {
    sentences: [
      'She often mistakes his silence for anger',

      'The teacher mistakes the shy student’s hesitation for a lack of knowledge',
      'He mistakes kindness for weakness, which is not the case',

      'The tourist mistakes the local customs and ends up offending the hosts',
      'She mistakes the sarcasm in his voice for sincerity',
      'The child mistakes the edible berries for poisonous ones',

      'The driver mistakes the gas pedal for the brake in a moment of panic',
      'The waiter mistakes the order and brings the wrong dish',
      'The young birdwatcher mistakes a sparrow for a finch',
      'He mistakes the meeting time and arrives an hour early',
    ],
    word: 'mistake',
    mean: 'yanlış meanak, karıştırmak',
  },
  {
    sentences: [
      'I often misunderstand his instructions during our weekly team meetings',
      "She rarely misunderstands the teacher's explanations in class",

      'We sometimes misunderstand each other when we communicate via text messages',

      'My parents never misunderstand my intentions when I try to help them',

      'The customer frequently misunderstands the terms and conditions of our service',

      'Jenny always misunderstands the instructions on the recipe and ends up cooking the wrong dish',

      'They usually misunderstand my sense of humor and think I am being serious',

      'Jack occasionally misunderstands the foreign language and struggles to communicate with the locals',

      'We seldom misunderstand the context of the situation because we pay attention to the details',

      'The audience often misunderstands the message portrayed in the film, leading to mixed reviews',
    ],
    word: 'misunderstand',
    mean: 'yanlış meanak',
  },
  {
    sentences: [
      'John mows the lawn every Saturday',
      'She usually mows the grass in the morning',
      "They never mow the neighbor's yard",
      'We always mow our own garden',
      'The gardener mows the field once a month',
      'He rarely mows the front yard',
      'She often mows the back area of her house',
      'The landscaper mows the park every week',
      "I sometimes mow my grandparents' lawn",
      'They frequently mow the school soccer field',
    ],
    word: 'mow',
    mean: 'biçmek',
  },
  {
    sentences: [
      'My company outsells its competitors every month',

      'The new smartphone model outsells all other products in the market',

      'Our sales team consistently outsells the other teams in the department',
      'The popular brand outsells the generic brand by a large margin',

      'The online retailer outsells the traditional brick-and-mortar stores',
      'The limited edition item outsells all other items in the store',

      'The sales representative outsells his colleagues by reaching out to more customers',

      'The new marketing strategy helps the company outsell its previous performance',

      'The discounted products outsell the regular-priced items during the sale',

      'The high-quality product outsells its cheaper alternatives in the market',
    ],
    word: 'outsell',
    mean: 'daha fazla satmak',
  },
  {
    sentences: [
      'I overcome my fear of public speaking every time I practice in front of a mirror',

      'She always overcomes obstacles with perseverance and determination',

      'We often overcome challenges through teamwork and collaboration',
      'He rarely overcomes his shyness when meeting new people',

      'They sometimes overcome their differences to find common ground',

      'The team has to overcome various difficulties during every game',

      'The students usually overcome their exam anxiety by studying in advance',

      'I overcome my laziness by setting goals and creating a schedule',

      'She frequently overcomes her fear of heights by engaging in adventurous activities',

      'We occasionally overcome our procrastination by breaking tasks into smaller, manageable steps',
    ],
    word: 'overcome',
    mean: 'üstesinden gelmek',
  },
  {
    sentences: [
      'I overdo my work sometimes, but usually, I know when to stop',
      'He often overdoes his workouts and ends up feeling exhausted',

      'She rarely overdoes her makeup because she prefers a natural look',

      'We occasionally overdo our celebrations and end up with a terrible hangover',

      'They always overdo their portion sizes when cooking, resulting in a lot of leftovers',

      'My sister frequently overdoes her shopping and ends up with a huge credit card bill',

      'The children never overdo their chores; they always do just the right amount',

      'Mary often overdoes her perfume, which can be overwhelming for others',
      'John sometimes overdoes his jokes and ends up offending people',

      'We usually overdo our time spent on social media and need to take breaks',
    ],
    word: 'overdo',
    mean: 'abartmak',
  },
  {
    sentences: [
      'I often overeat at dinner time because the food is so delicious',

      "She never overeats during the week, but on weekends she can't resist indulging in sweets",

      'We rarely overeat at lunch because we prefer to have a light and healthy meal',

      'He seldom overeats at parties, trying to maintain a balanced diet',

      'They sometimes overeat when they are stressed or emotionally overwhelmed',

      'The children always overeat at birthday parties, excited by the variety of treats',

      'My friend usually overeats at buffets, as she wants to try every dish available',

      'You never overeat before exercising, as it can lead to discomfort during the workout',

      'The dog occasionally overeats if we leave food accessible to him',

      'My father hardly ever overeats as he is mindful of his health and weight',
    ],
    word: 'overeat',
    mean: 'aşırı yemek',
  },
  {
    sentences: [
      'I often overhear my colleagues talking about their weekend plans',
      'She rarely overhears any interesting conversations on the bus',

      'We sometimes overhear students discussing their homework in the library',
      'He occasionally overhears his neighbors arguing loudly',

      'They frequently overhear their parents discussing financial matters',

      'My sister never overhears anything important while walking her dog',

      'The children always overhear their teacher explaining new concepts in class',

      'Alex and his friends often overhear people gossiping at the coffee shop',

      'My grandparents usually overhear their neighbors playing loud music at night',

      'We rarely overhear strangers sharing personal stories in public places',
    ],
    word: 'overhear',
    mean: 'kulak misafiri olmak',
  },
  {
    sentences: [
      'I never overpay for anything; I always make sure to find the best deals',

      "My sister often overpays when she shops online because she doesn't compare prices",

      'The company president always overpays his employees to ensure their loyalty and satisfaction',

      'We sometimes overpay for groceries when we forget to check our shopping list',

      'Sarah rarely overpays for clothes; she is a savvy shopper and always finds great discounts',

      'My parents never overpay for utilities as they are conscientious about conserving energy',

      'The government frequently overpays contractors for public projects, leading to financial waste',

      'I often overpay for food delivery as I enjoy the convenience of having meals brought to my door',

      'Tom rarely overpays for his car repairs; he knows a trustworthy mechanic who offers fair prices',

      "It's important not to overpay for rent, so make sure to negotiate with your landlord if necessary",
    ],
    word: 'overpay',
    mean: 'fazla ödemek',
  },
  {
    sentences: [
      'I always override my alarm clock and end up being late for work',

      "He often overrides my opinion and makes decisions without considering others' input",

      "She rarely overrides her children's requests and prefers to listen to their needs",

      'They sometimes override the rules and try to get away with their actions',

      'We never override safety protocols and prioritize the well-being of our employees',

      'You usually override my preferences and choose what you want to do',

      'The manager frequently overrides the default settings on the computer to customize the system according to our needs',

      'My sister occasionally overrides her fear of heights and climbs mountains with her friends',

      'The president seldom overrides the decision of the Supreme Court and respects the separation of powers',

      "Teachers should not override the authority of parents in making decisions regarding their children's education",
    ],
    word: 'override',
    mean: 'umursamamak, geçersiz kılmak',
  },
  {
    sentences: [
      'The river overruns its banks during heavy rains',
      'The kid always overruns his playtime by an hour',

      'The project often overruns its deadline due to unforeseen circumstances',
      'Our expenses frequently overrun the budget we have set',

      'The traffic congestion in this area regularly overruns the usual waiting time',

      'The company usually overruns its production targets by the end of the month',

      "My teenage brother's room is always overrun with dirty clothes and clutter",

      'The party was incredible, with guests overrun with laughter and joy',

      'The garden is sometimes overrun with weeds if not properly maintained',

      'The email inbox of the office administrator is constantly overrun with messages from colleagues',
    ],
    word: 'overrun',
    mean: 'istila etmek, aşmak',
  },
  {
    sentences: [
      'She oversees the project every day to ensure its success',
      "The manager oversees the team's progress on a weekly basis",
      'My supervisor oversees my work and provides feedback regularly',

      'The company CEO oversees all operations and makes key decisions',

      "The teacher oversees the students' homework completion every evening",
      'Our coach oversees our training sessions twice a week',

      "The librarian oversees the library's organization and maintenance",

      "The principal oversees the school's daily activities and ensures discipline",

      "The supervisor oversees the employees' performance and offers guidance",
      'The boss oversees the production process to guarantee quality',
    ],
    word: 'oversee',
    mean: 'göz kulak olmak, denetlemek',
  },
  {
    sentences: [
      'I often oversleep on the weekends',
      'She always oversleeps and arrives late to class',
      'My brother frequently oversleeps and misses his morning jog',
      'They sometimes oversleep and have to rush to work',
      'We rarely oversleep because we set multiple alarms',

      'The alarm clock never fails to wake me up, so I rarely oversleep',

      'Jack usually oversleeps and has to skip breakfast to catch the bus',

      'My sister occasionally oversleeps and has to call in sick to work',

      'The students in my class seldom oversleep and are always punctual',
      'I hardly ever oversleep, but today I woke up late',
    ],
    word: 'oversleep',
    mean: 'uyuya kalmak',
  },
  {
    sentences: [
      'Cars often overtake one another on the highway',
      'He usually overtakes other runners during the race',
      'She rarely overtakes anyone in the crowded city traffic',
      'The cyclist quickly overtook the jogger on the biking path',

      'Their car unexpectedly overtook ours while we were driving to the beach',

      'The motorcycle always overtakes the slow-moving trucks on the road',

      'The ambitious student strives to overtake his classmates in academics',

      'The fast runner managed to overtake his competitors in the final lap',

      'We occasionally overtake slower walkers when hiking in the mountains',

      'The Olympic swimmer effortlessly overtook her opponents in the pool',
    ],
    word: 'overtake',
    mean: 'yetişip geçmek, sollamak',
  },
  {
    sentences: [
      'I never spit in public',
      'She spits when she talks too fast',
      'He always spits after brushing his teeth',
      'We usually spit out our gum in the trash',
      'The baby sometimes spits up after feeding',
      'They rarely spit when they are angry',
      "The dog often spits out its food if it doesn't like it",
      'The athlete occasionally spits while running',
      "I usually spit out my coffee if it's too cold",
      'She never spits in front of others',
    ],
    word: 'spit',
    mean: 'tükürmek',
  },
  {
    sentences: [
      'I split my time between work and spending time with my family',
      'She always splits her lunch break into two short breaks',

      'We usually split the cost of groceries when we go shopping together',
      'The children take turns to split the toys and games',
      'He often splits his free time between reading and watching TV',
      'They never split the bill when they go out for dinner',
      'The friends always split the driving on long road trips',
      'She seldom splits her focus between work and personal tasks',
      'We sometimes split the chores around the house to make it fair',
      'The company regularly splits profits with its employees',
    ],
    word: 'split',
    mean: 'yarmak, bölmek',
  },
  {
    sentences: [
      'The warm weather spoils the milk if it’s left out too long',
      'She always spoils her grandchildren with gifts and treats',
      'Leaving food uncovered can spoil it quickly',
      'The rain spoils our plans for a picnic in the park',
      'Overusing a particular phrase can spoil its impact',

      'The sun spoils delicate fabrics if they’re exposed for too long',
      'He never lets a rainy day spoil his mood',

      'The excessive use of artificial preservatives can spoil the taste of food',

      'The surprise party was almost spoiled when she accidentally saw the decorations',

      'The ending of the movie was spoiled by someone who revealed the plot twist',
    ],
    word: 'spoil',
    mean: 'berbat etmek, bozmak, şımartmak',
  },
  {
    sentences: [
      'I spread butter on my toast every morning',
      'He spreads gossip about everyone in the office',
      'She spreads out her books on the table before studying',
      'They spread a blanket on the grass for a picnic',

      'We spread the news about the upcoming event through social media',
      'The virus spreads rapidly in crowded places',

      'The teacher spreads the assignments evenly throughout the semester',
      'My grandmother spreads love and kindness wherever she goes',

      'He often spreads himself too thin by taking on too many projects',
      'The wildfire spreads quickly, endangering nearby homes',
    ],
    word: 'spread',
    mean: 'yaymak, yayılmak',
  },
  {
    sentences: [
      'Flowers spring up in the garden during April',
      'The cat loves to spring onto the windowsill to watch birds',
      'We often spring clean our house before summer',
      'The sun springs out from behind the clouds after a rainy day',
      'He always springs out of bed early in the morning',
      'The squirrel likes to spring from tree to tree in the park',
      'The river springs from the mountains and flows into the valley',
      'She usually springs surprises on her friends during birthdays',
      'The grasshopper can spring high into the air',

      'The season of rebirth and growth is when nature springs back to life',
    ],
    word: 'spring',
    mean: 'ortaya çıkıvermek, yerden bitmek',
  },
  {
    sentences: [
      'I often stand in the morning to stretch my legs',
      'She always stands in front of the mirror to fix her hair',
      'We usually stand in line for tickets before the concert starts',
      'He occasionally stands on his tiptoes to reach high shelves',
      'They sometimes stand by the window to watch the sunset',
      "The students often stand up to answer the teacher's questions",
      'My parents frequently stand in the kitchen to prepare dinner',

      'The bus driver never stands idle; he is always serving passengers',

      'I usually stand next to my best friend during assembly at school',

      'The security guard always stands at the entrance to monitor who enters the building',
    ],
    word: 'stand',
    mean: 'ayakta durmak',
  },
  {
    sentences: [
      'I never steal because it is against the law',
      "Maria steals from her sister's closet every week",

      'We always steal a few minutes to have a chat during our lunch break',
      'He often steals my ideas and presents them as his own',
      'The cat constantly steals food from the kitchen counter',

      'They sometimes steal glances at each other when they think no one is looking',
      'The thieves frequently steal jewelry from high-end stores',
      'My little brother occasionally steals my toys without asking',
      'Carla rarely steals the spotlight during family gatherings',

      'The shopkeeper never leaves the valuable items unattended, fearing someone might steal them',
    ],
    word: 'steal',
    mean: 'çalmak',
  },
  {
    sentences: [
      'I stick to my daily routine every morning',
      'He always sticks to his promises',
      'She sticks to her healthy diet most of the time',
      'We usually stick to our study schedule during weekdays',
      'You never stick to the rules in games',
      'They often stick with their favorite TV show on weekends',

      'The dog always sticks close to its owner whenever they go outside',

      'The teacher sometimes sticks to the textbook for lesson planning',

      'The company policy requires employees to stick to the dress code at all times',
      'My sister rarely sticks to the same hairstyle for too long',
    ],
    word: 'stick',
    mean: 'yapışmak, yapıştırmak, sadık kalmak',
  },
  {
    sentences: [
      'The bee stings when it feels threatened',
      'She accidentally stings herself with a nettle while gardening',
      'The wasp stings anyone who gets too close to its nest',
      'The jellyfish tentacles can sting swimmers in the ocean',
      'The ant stings when disturbed',
      'His harsh words sting and hurt her feelings',
      'The cold wind stings our faces during winter walks',
      'The memory of their breakup still stings after all these years',
      'The vinegar-soaked cotton ball can help relieve a bee sting',

      'The defeat in the championship game stings for the soccer team',
    ],
    word: 'sting',
    mean: 'sokmak, arı yılan vs. ısırmak, acıtmak',
  },
  {
    sentences: [
      'The garbage always stinks when it is not taken out regularly',
      'She never takes a shower and always stinks of sweat',
      'The fish at the market stinks as always',
      'My dog stinks after rolling in something dead outside',
      'The trash in the alley stinks and needs to be cleaned up',
      'He often forgets to use deodorant and then stinks all day',

      'The bathroom often stinks of mildew if it is not cleaned regularly',
      'The sewer stinks when it gets backed up',
      "My sister's feet always stink after she takes off her shoes",

      'The room always stinks of cigarette smoke because my roommate smokes inside',
    ],
    word: 'stink',
    mean: 'pis kokmak',
  },
  {
    sentences: [
      'The workers in the factory strike every Monday for better wages and working conditions',

      'My brother strikes his favorite gong every morning as part of his meditation routine',

      'Sarah strikes the tennis ball with precision and strength during her weekly training sessions',
      'Our cat often strikes at birds that venture into our garden',

      'The lightning strike in the distance illuminates the dark sky during the storm',

      "The clock in the living room strikes six times every evening to signal it's dinner time for our pets",
      'Every time I eat ice cream, a headache strikes shortly after',

      'Jessica strikes up a conversation with strangers wherever she goes, regardless of the time or place',

      'The soccer team always strikes a pose for a group photo before each match',

      'When the match strikes the surface, it ignites the firework and creates a colorful display in the sky',
    ],
    word: 'strike',
    mean: 'vurmak, çarpmak, grev yapmak',
  },
  {
    sentences: [
      'I strive to improve my English skills every day',
      'She strives to be a better employee by working hard',

      'We strive to maintain a healthy diet by eating fruits and vegetables daily',

      'He strives to achieve his goals by putting in consistent effort',

      'They strive to make a positive impact on the environment by recycling regularly',

      'The company strives to provide excellent customer service at all times',
      'I always strive to arrive on time to my appointments',

      'She frequently strives to learn new things and expand her knowledge',
      'We often strive to balance our work and personal life',

      'He sometimes strives to overcome his fears and take on new challenges',
    ],
    word: 'strive',
    mean: 'çalışmak, çabalamak',
  },
  {
    sentences: [
      "I usually swear when I'm frustrated or angry",
      'My boss never swears at work',
      'She rarely swears in front of her children',
      'We often swear at each other during arguments',
      'He hardly ever swears in public',
      "They sometimes swear when they're joking around",
      "My friend always swears when he's playing video games",
      'The students never swear in the classroom',
      "She occasionally swears when she's telling a funny story",
      'We frequently hear people swear on the street',
    ],
    word: 'swear',
    mean: 'küfretmek, yemin etmek',
  },
  {
    sentences: [
      'I sweep the floor every day before breakfast',
      'She always sweeps the living room on Sundays',
      'My father usually sweeps the backyard in the evenings',
      'We often sweep the porch after dinner',
      'They sometimes sweep leaves off the driveway',
      'Mary never sweeps the garage, so it gets messy',
      'The cleaning lady frequently sweeps the stairs in our building',
      'He rarely sweeps the kitchen, which annoys his roommate',
      'Peter and John usually take turns sweeping the hallway',
      'Jenny sweeps her bedroom once a week',
    ],
    word: 'sweep',
    mean: 'süpürmek',
  },
  {
    sentences: [
      'After the heavy rain, the river swells and overflows its banks',
      'His ankle swells after he twists it during a soccer match',
      'The stormy sea swells with powerful waves',
      'The infection causes the lymph nodes to swell',
      'Her heart swells with pride when she sees her children succeed',

      'The musician’s fingers swell after playing the guitar for hours',
      'The crowd swells as people gather for the concert',
      'The pastry dough will swell when baked',
      'The balloon swells as more air is blown into it',
      'The anticipation of the surprise party makes her heart swell',
    ],
    word: 'swell',
    mean: 'şişmek, kabartmak',
  },
  {
    sentences: [
      'I swim every morning at the local pool',
      'She usually swims in the evening after work',
      'We hardly ever swim in the lake during winter',
      'They always swim competitively on Saturdays',
      'He rarely swims for more than sentence30 minutes',
      'The children sometimes swim together at the beach',
      'My friends and I often swim for exercise',
      'Amanda never swims in deep water',
      'The swimming instructor usually teaches beginners',
      'Do you swim regularly at your gym?',
    ],
    word: 'swim',
    mean: 'yüzmek',
  },
  {
    sentences: [
      'I swing at the park every evening after work',

      'She swings on the swing set at the playground every Saturday morning',
      'We often swing together in the backyard during the weekends',
      'They sometimes swing high in the air at the amusement park',
      "He rarely swings because he's afraid of heights",

      'The children always swing back and forth gleefully at the neighborhood park',

      'My sister and I frequently swing side by side, enjoying the breeze',
      'On sunny days, the kids usually swing for hours at the beach',

      'Jenny and her friends swing joyfully during their lunch break at school',

      'After a long day, I usually find solace in swinging gently under the old oak tree',
    ],
    word: 'swing',
    mean: 'sallamak, sallanmak',
  },
  {
    sentences: [
      'I take the bus to work every morning',
      'She takes a shower every evening before bed',
      'My brother takes his dog for a walk in the park twice a day',
      "We take a break at sentence12 o'clock for lunch",
      'They take their kids to school every weekday',
      'He takes his coffee with milk and sugar every morning',
      'She takes her vitamins with breakfast every day',
      'We take the trash out on Tuesday evenings',
      'The supermarket takes credit cards for payment',
      "They take their lunch break at sentence1 o'clock",
    ],
    word: 'take',
    mean: 'almak, götürmek',
  },
  {
    sentences: [
      'I teach English to children every Monday and Wednesday',
      'She teaches math at the local high school every morning',
      'We teach Spanish online every Tuesday and Thursday',
      'He teaches guitar lessons to beginners on Saturdays',
      'They teach science experiments to their students every week',
      'The teacher often teaches grammar rules during the first class',
      'My parents teach me how to cook delicious meals on weekends',
      'The coach teaches tennis skills to young players twice a week',

      'Maria teaches dance classes at the community center every evening',
      'The professor teaches philosophy courses at the university',
    ],
    word: 'teach',
    mean: 'öğretmek',
  },
  {
    sentences: [
      'She accidentally tears the paper while trying to remove the staple',
      'The strong wind tears the leaves from the trees in autumn',
      'He carefully tears open the envelope to read the letter',

      'The child tears the wrapping paper excitedly during his birthday',
      'The emotional movie scene makes her tear up',
      'The fabric tears easily if pulled too hard',
      'The dog playfully tears apart its chew toy',
      'The athlete tears a muscle during intense training',
      'The old book’s pages are fragile and can easily tear',
      'The storm tears through the neighborhood, causing damage',
    ],
    word: 'tear',
    mean: 'yırtmak, (up) ağlamak',
  },
  {
    sentences: [
      'I always tell my friends the truth',
      'She usually tells her mom about her day at school',
      'Peter often tells funny jokes during lunch break',
      'They sometimes tell stories about their travels',
      "We rarely tell lies because it's not right",
      'The teacher never tells us the answers to the test in advance',

      'He usually tells his sister bedtime stories before she falls asleep',
      "My dad always tells me to wear a jacket when it's cold outside",
      'The news anchor tells us the latest updates every evening',
      'I often tell my dog how much I love him',
    ],
    word: 'tell',
    mean: 'söylemek, anlatmak',
  },
  {
    sentences: [
      'I think about my future every day',
      'She thinks that coffee tastes bitter',
      'We often think of our family when we are far apart',
      'They rarely think about the consequences of their actions',
      'He always thinks before he speaks',
      'The teacher often thinks of creative lesson plans',
      'My parents never think I can handle big responsibilities',
      "We sometimes think it's better to stay home on a rainy day",
      "She usually thinks it's important to be kind to others",

      'They hardly ever think about the impact of their decisions on the environment',
    ],
    word: 'think',
    mean: 'düşünmek, sanmak',
  },
  {
    sentences: [
      'I thrive on challenges and enjoy seeking new opportunities every day',

      'She always thrives in a structured and organized work environment',

      'We often thrive when surrounded by positive and supportive individuals',
      'He rarely thrives in chaotic and stressful situations',

      'My plants thrive when they are watered regularly and receive enough sunlight',

      'They consistently thrive in their academic studies due to their dedication and hard work',

      'The company continues to thrive despite the tough economic conditions',

      'The team thrives during important games and performs exceptionally well under pressure',

      'Students thrive when they have a balanced routine and prioritize their studies',

      'Our relationship thrives when we communicate openly and honestly with each other',
    ],
    word: 'thrive',
    mean: 'iyiye gitmek, başarılı olmak',
  },
  {
    sentences: [
      'I throw the ball every morning in the park',
      'She throws her clothes into the laundry basket',

      'The students throw their papers in the recycling bin after class',
      'We often throw parties for our friends on the weekends',
      "He usually throws a tantrum when he doesn't get his way",

      'The chef throws in some extra spices to enhance the flavor of the dish',
      'They throw their garbage away in the designated bins outside',
      'My little brother throws a fit whenever he has to go to bed',

      'The athlete throws the javelin with great precision during competitions',
      'I throw away expired food from my fridge every week',
    ],
    word: 'throw',
    mean: 'atmak, fırlatmak',
  },
  {
    sentences: [
      'I usually unbind my notebook to take out the pages',
      'She rarely unbinds her hair and prefers to keep it tied up',
      'Every morning, they unbind their dog and take it for a walk',

      'The students often unbind their textbooks to photocopy important pages',

      'He never unbinds the books from his personal library, as he likes to keep them in pristine condition',

      'We sometimes unbind the files to sort and organize them properly',

      'The chef frequently unbinds the recipe book to prepare delicious meals',

      'My sister always unbinds her shoelaces before taking off her shoes',

      'They occasionally unbind the old photographs from the album to reminisce about their childhood',
      'I rarely unbind my thoughts and share them with others',
    ],
    word: 'unbind',
    mean: 'çözmek, açmak, salmak',
  },
  {
    sentences: [
      'I understand the importance of studying English every day',
      'She always understands the instructions given by the teacher',
      'John often helps me understand difficult concepts in math',
      'We usually understand each other without speaking a word',
      'My parents always understand me when I need their support',
      'They never understand why I enjoy watching horror movies',

      'The doctor understands that exercise is crucial for a healthy body',

      "Sarah rarely understands sarcasm, so it's best to be direct with her",

      'The students often understand the topic better after a group discussion',

      'I understand the risks involved, but I still want to pursue my dreams',
    ],
    word: 'understand',
    mean: 'meanak',
  },
  {
    sentences: [
      'I undertake my daily chores every morning before going to work',

      'She often undertakes the responsibility of organizing events at her school',

      'We usually undertake a thorough analysis of the data before making any conclusions',

      'He seldom undertakes risky activities because he prefers to stay safe',

      'The company frequently undertakes market research to understand consumer preferences',

      'They always undertake the task of cleaning the office at the end of the day',

      'I rarely undertake long journeys by car as I prefer to use public transportation',

      'She sometimes undertakes volunteer work to give back to the community',

      'We never undertake any major construction projects without consulting an engineer',

      'He occasionally undertakes hiking trips during his summer vacations',
    ],
    word: 'undertake',
    mean: 'üzerine almak, üstlenmek',
  },
  {
    sentences: [
      'I always undo my shoelaces before taking off my shoes',

      'She never fails to undo the knots in her hair before going to bed',

      'On Sundays, they usually undo the game console to spend more time with family',

      'He often forgets to undo the lock on his phone, causing frustration',
      'We rarely undo our plans once we have made them',

      'The teacher instructs his students to always undo their mistakes before moving forward',

      'They sometimes undo their decision to eat out and cook at home instead',

      'She frequently undoes her seatbelt in the car, even before reaching her destination',

      "We occasionally undo the changes made to our work when it doesn't meet our standards",

      'He usually undoes his tie as soon as he gets home from work to relax',
    ],
    word: 'undo',
    mean: 'çözmek, yok etmek, yaptığını geri almak',
  },
  {
    sentences: [
      'I uphold my principles every day',
      'He upholds the law with great dedication',
      'She always upholds her promise to finish her work on time',
      'We often uphold our values in difficult situations',
      'They seldom uphold the traditions of their ancestors',

      'My sister regularly upholds the family tradition of attending church on Sundays',

      'The company consistently upholds high ethical standards in its business practices',
      'He rarely upholds his end of the bargain',

      'We usually uphold our responsibilities as citizens by voting in elections',

      'The judge upholds the rights of all individuals in the courtroom',
    ],
    word: 'uphold',
    mean: 'desteklemek, sürdürmek, ayakta tutmak',
  },
  {
    sentences: [
      "I wake up every morning at 7 o'clock to start my day",
      'She usually wakes up early on weekends to go for a run',
      'My alarm clock wakes me up every day without fail',
      'They often wake up late on Sundays, as they like to sleep in',

      'The loud noise from the construction site wakes up the whole neighborhood every morning',
      'He hardly ever wakes up before 9 am, even on weekdays',

      'We sometimes wake up in the middle of the night due to our noisy neighbor',

      'The smell of coffee brewing in the morning always wakes me up instantly',
      'She rarely wakes up feeling refreshed and energized',

      'I usually wake up feeling groggy and tired, but a cup of tea helps me feel awake',
    ],
    word: 'wake',
    mean: 'uyanmak, uyandırmak',
  },
  {
    sentences: [
      'I wear my favorite t-shirt every weekend',
      'She wears earrings to work every day',
      'We always wear jackets during winter',
      'The students wear uniforms to school every morning',
      'He rarely wears a tie to meetings',
      'She wears sunscreen when she goes to the beach',
      'They wear safety helmets when riding their bikes',
      'You wear glasses to help you see better',
      'The fashion model wears designer clothes on the runway',
      'We often wear comfortable clothes on weekends',
    ],
    word: 'wear',
    mean: 'giymek, takmak',
  },
  {
    sentences: [
      'He weaves baskets every Sunday afternoon',

      'She often weaves beautiful tapestries using traditional methods',

      'The artisan weaves intricate patterns into his pottery on a daily basis',

      'They usually weave their own clothing using a small loom at home',

      'We weave together different colored threads to create unique patterns',

      'The women in the village frequently gather to weave baskets for their community members',
      'My grandmother taught me how to weave rugs when I was a child',

      'He rarely weaves silk fabrics by hand as it is a time-consuming process',

      'The skilled craftsman patiently weaves fishing nets for the local fishermen',

      'The artist regularly weaves natural fibers into sculptures inspired by nature',
    ],
    word: 'weave',
    mean: 'dokumak, örmek',
  },
  {
    sentences: [
      'I weep every night when I watch sad movies',
      'My sister weeps whenever she receives bad news',
      'We often weep with joy when we reunite with loved ones',
      'Mary rarely weeps, even when faced with difficult situations',
      'He usually weeps when he reads emotional poetry',

      "The little girl always weeps when she doesn't get what she wants",

      'They never weep in public; they prefer to keep their emotions private',

      'My grandmother sometimes weeps when she remembers her late husband',
      'John weeps every time he listens to a touching song',
      'My dog seldom weeps, but he becomes sad when I leave for work',
    ],
    word: 'weep',
    mean: 'gözyaşı dökmek',
  },
  {
    sentences: [
      'The rain wets the ground, making it slippery',
      'She accidentally wets her sleeve while washing her hands',
      'The dog shakes off water after it wets itself in the lake',
      'The dew in the morning wets the grass',
      'He carefully wets the paintbrush before starting to paint',
      'The ocean waves wet our feet as we walk along the shore',

      'The umbrella protects us from rain, otherwise it wets us in the downpour',
      'The swimmer dives into the pool, fully wetting her hair',
      'After you wet the clothes, you need to hung them up to dry',
      'The sudden splash wets everyone nearby',
    ],
    word: 'wet',
    mean: 'ıslatmak, işemek',
  },
  {
    sentences: [
      'The autumn breeze gently winds through the colorful leaves',
      'She carefully winds the clock every evening to keep it ticking',

      'The river winds its way through the valley, creating a picturesque scene',

      'The hiking trail winds up the mountain, offering breathtaking views',
      'The snake silently winds around the tree branch',
      'He skillfully winds the fishing line onto the reel',
      'The road winds through the forest, leading to a hidden cabin',
      'The dancer gracefully winds across the stage',
      'The old staircase winds upward, creaking with each step',
      'The melody winds its way into our hearts, evoking memories',
    ],
    word: 'wind',
    mean: 'sarmak, dolamak',
  },
  {
    sentences: [
      'She wins the game every Saturday at the local chess club',
      'He always wins the lottery with his lucky numbers',
      'We rarely win against the rival team in soccer matches',
      'The company usually wins the bid for construction projects',

      'Mary often wins awards for her outstanding achievements at work',
      'He sometimes wins arguments with his strong persuasion skills',
      'The team never wins when they play away matches',
      'They frequently win medals in swimming competitions',
      'The students regularly win spelling bees in their school',

      'My brother occasionally wins tickets to concerts through radio contests',
    ],
    word: 'win',
    mean: 'kazanmak',
  },
  {
    sentences: [
      'I withdraw money from the ATM every week',
      'She always withdraws cash from the bank after work',

      'We often withdraw funds from our savings account for emergencies',

      'They sometimes withdraw large sums of money for their business ventures',
      'He never withdraws more than sentence100 dollars at a time',

      'Mary usually withdraws money on Fridays to cover her weekend expenses',

      'The company regularly withdraws funds to invest in new projects',

      'My parents occasionally withdraw money from their retirement savings',
      'Sarah rarely withdraws cash as she prefers using credit cards',

      'Our friends frequently withdraw money from their joint account for vacations',
    ],
    word: 'withdraw',
    mean: 'geri çekilmek, para çekmek',
  },
  {
    sentences: [
      'I withstand the hot weather every summer by staying hydrated and wearing light clothing',

      'My car withstands long drives with ease, thanks to regular maintenance and oil changes',

      'We often withstand challenging times by relying on each other for support and encouragement',

      'She frequently withstands busy schedules and stressful deadlines at work',

      'The athlete withstands intense training sessions to improve his performance on the field',

      'They rarely withstand early mornings, preferring to sleep in whenever they can',

      'He always withstands criticism with a positive attitude and uses it to grow and improve',

      "We usually withstand long waits at the doctor's office by bringing a book or listening to music",

      'The old house has managed to withstand the test of time and remains standing after many years',

      'The fabric of this shirt is designed to withstand frequent washing and maintain its color and shape',
    ],
    word: 'withstand',
    mean: 'karşı koymak, direnmek',
  },
  {
    sentences: [
      'I write in my diary every evening before going to bed',
      'She writes letters to her friends every month',
      'We write emails to our professor every week',
      'He writes poems in his free time',
      'They write reports for their boss every day',
      'My sister writes articles for a magazine twice a year',
      'The students write essays for their English class once a month',
      'We write shopping lists before going to the grocery store',
      'He writes his grandmother a letter on her birthday',
      'She writes postcards to her family while on vacation',
    ],
    word: 'write',
    mean: 'yazmak',
  },
];

export const irregularV2Sentences: IVerbsSentences[] = [
  {
    sentences: [
      'Yesterday, I arose early to catch the sunrise',
      'The sun arose early this morning',
      'Two days ago, a rare opportunity arose for me to travel abroad',
      'Last week, an unexpected problem arose at work',
      'On Saturday, I woke up late because I arose later than usual',

      'Sometimes, difficulties arose during the project, but we managed to overcome them',

      'Last month, a new opportunity arose for me to learn a new skill',

      'Yesterday evening, a sense of excitement arose when I received good news',

      'Often, challenges arose during my studies, but I persevered and succeeded',

      'In the past, many conflicts arose between the two neighboring countries, but now they have resolved their differences',
    ],
    word: 'arose',
    mean: 'ortaya çıkmak',
  },
  {
    sentences: [
      'I awoke early to catch the morning train',
      'She awoke feeling refreshed after a good night’s sleep',
      'The loud noise awoke everyone in the house',
      'He awoke to the sound of birds singing outside his window',
      'The alarm clock awoke me abruptly from my dream',
      'We awoke to a beautiful sunrise over the mountains',
      'The baby awoke crying in the middle of the night',
      'They awoke to find their car covered in snow',
      'When the sun awoke, the frost melted from the grass',
      'The hiker awoke to discover a deer standing nearby',
    ],
    word: 'awoke',
    mean: 'uyanmak, uyandırmak',
  },
  {
    sentences: [
      'I was at the park yesterday',
      'She was my best friend in high school',
      'The weather was sunny last weekend',
      'He was late for the meeting',
      'We were excited about the concert',
      'The cat was curious about the new toy',
      'They were happy to see each other',
      'It was a beautiful sunset',
      'The book was interesting from start to finish',
      'The museum exhibit was informative and fun',
    ],
    word: 'was/were',
    mean: 'olmak',
  },
  {
    sentences: [
      'Yesterday, I bore witness to an incredible event',

      'Last week, I bore the weight of my responsibilities with dignity',
      'The branches bore the weight of the snow',
      'She bore his snooring',
      'I hardly bore his manner during the meeting',
      'The wall bore the weight of the roof',
      'I bore in mind your advice when I made my decision',

      'They bore in mind the needs of their customers when they designed the product',

      'I bore in mind the weather forecast when I packed my suitcase for the trip',

      'The teacher bore in mind the different learning styles of her students when she planned her lessons',
    ],
    word: 'bore',
    mean: 'taşımak, tahammül etmek',
  },
  {
    sentences: [
      'Yesterday, I beat my personal record in running',

      'During the game, our team beat the opponents by sentence4-0 score',

      'Last week, my younger brother beat me in chess for the first time',
      'We beat the traffic and arrived at the party on time',
      'I beat the rush hour by leaving early for work this morning',
      'His heart beat fast when he saw his girlfriend',

      'She beat the stress of her job by practicing yoga and meditation',

      'My grandma beat eggs by hand to make the most delicious omelettes when I was a child',

      'Yesterday, I beat my fear of public speaking and delivered a successful presentation',
      'As a child, I beat my own drums and annoy my siblings',
    ],
    word: 'beat',
    mean: 'vurmak, dövmek, yenmek',
  },
  {
    sentences: [
      'Yesterday, I became very good at playing the piano',
      'I often became tired after running for a long time',
      'Last month, she became a successful businesswoman',
      'My brother became a doctor after studying for many years',
      'Every morning, he became anxious before his big presentation',
      'I always became happy when I visited my grandparents',
      'Last year, I became interested in learning a new language',
      'After practicing for hours, I became skilled at drawing',
      'Whenever it rained, the roads became slippery and dangerous',

      'During the summer, the garden became colorful with blooming flowers',
    ],
    word: 'became',
    mean: 'olmak',
  },
  {
    sentences: [
      'I began my journey to Paris last summer',
      "We began cooking dinner at 6 o'clock yesterday evening",
      'She began her new job on Monday morning',
      'They began a discussion about the project during lunchtime',
      'He began the football match with a powerful goal',
      'The movie began at 9 PM, and we watched it till midnight',

      'Yesterday, I opened the book and began reading the first chapter',
      'The concert began promptly at 7:30 PM and lasted for two hours',
      'She began on her trip to Australia last month',

      "At 8 o'clock this morning, the teachers entered the classroom and began the lecture",
    ],
    word: 'began',
    mean: 'başlamak, başlatmak',
  },
  {
    sentences: [
      'Yesterday, I bent down to pick up the fallen pen',
      'Last week, I bent the wire into a small loop',
      'She often bent the rules to help her friends',
      'He rarely bent his knees while dancing',
      'They always bent the truth to avoid getting in trouble',
      'The trees bent in the strong wind last night',
      'The old chair leg finally bent after years of use',
      'She bent over backwards to make sure everyone was happy',
      'The road bent sharply to the left at the top of the hill',

      'The gymnast gracefully bent her body into a perfect arc during her routine',
    ],
    word: 'bent',
    mean: 'eğmek, eğilmek, bükmek',
  },
  {
    sentences: [
      'I bet on the horse race last weekend and won a lot of money',
      'She bet on her favorite team last week, but they lost the game',

      'They bet on the lottery last chrismas, hoping to win a big prize',

      'He bet his friend that he could finish the race in under sentence30 minutes, and he did it',

      'We bet on the outcome of the football game with our friends, which was foolish',

      'Yesterday, my brother bet on the roulette table and lost all his money',

      'She bet on the number seven in roulette, as it was her lucky number',

      'Last month, they bet on the poker game and came out as the winners',

      'We bet on the results of the quiz show and enjoyed guessing right',

      'He rarely bet on sports events, as he prefered to save his money for other activities',
    ],
    word: 'bet',
    mean: 'bahse girmek',
  },
  {
    sentences: [
      'I bound the book yesterday',
      'She bound her notebooks with colorful covers',
      'They bound their reports in proper order',
      'He bound his documents with great care',
      'We eventually bound the documents together after much effort',
      'The librarian bound the old newspapers for preservation',

      'The students quickly bound their group project before the deadline',
      'I bound my assignments with sturdy paper clips',
      'She slowly bound the loose pages with string',
      'They never bound their research papers in time for submission',
    ],
    word: 'bound',
    mean: 'bağlamak, yarayı sarmak',
  },
  {
    sentences: [
      'Yesterday, I bit into a juicy apple',
      "Last week, my dog bit my neighbor's shoe",
      'When I was little, my sister bit me while we were playing',
      'On my vacation, a bird bit my cheek at the beach',
      'Every time I ate spicy food, I bit my tongue',
      'In the past, my cat bit my fingers when I played with her',
      "The shark bit the surfer's leg",
      'Two days ago, my brother accidentally bit into a sour lemon',
      'Last week, some ants bit me when I was walking in the park',
      'The child bit her finger while eating a carrot',
    ],
    word: 'bit',
    mean: 'ısırmak, sokmak',
  },
  {
    sentences: [
      'Yesterday, I bled a little when I cut my finger while cooking',
      'Last week, I bled a lot when I fell off my bike',

      'I often bled when I was a child because I had frequent nosebleeds',

      'When I was younger, I bled every time I brushed my teeth too hard',

      'Last night, I bled again when I accidentally scratched myself with a sharp object',

      'My cat bled a little when it hurt its paw on a thorn last month',

      'When I was in high school, I bled during my first aid class while practicing bandaging techniques',

      'Last winter, I bled from a small wound when I slipped on the ice',

      'I rarely bled when I was pregnant, but it did happen once or twice',

      'Two years ago, I bled a lot when I had a bad fall while hiking in the mountains',
    ],
    word: 'bled',
    mean: 'kanamak, içi sızlamak',
  },
  {
    sentences: [
      'Yesterday, the wind blew so strongly that I had to hold onto my hat',

      'I always blew out the birthday candles in one breath when I was a child',
      'Last week, the flowers in the garden blew away in the storm',
      'After the game, he blew on his hands to warm them up',
      'Every time I blew up a balloon, it popped',

      'The wind blew constantly throughout the night, keeping me awake',
      'I once blew all my money on a shopping spree',
      'She blew on her soup to cool it down before taking a sip',
      'Last year, I blew out my birthday candles at the beach',
      'He blew away the competition with his incredible performance',
    ],
    word: 'blew',
    mean: 'esmek, üflemek',
  },
  {
    sentences: [
      'Last night, I broke my favorite mug while washing the dishes',
      'Yesterday morning, I broke my pencil by accident during class',
      'Two days ago, I broke a vase when I bumped into the table',

      'Last week, I broke my phone screen after it fell out of my pocket',
      'On Monday, I broke my shoelace while running in the park',
      'Last month, I broke the window with a baseball by mistake',

      'Yesterday evening, I broke a plate when I dropped it on the kitchen floor',

      'In the past year, I broke three pairs of sunglasses due to being careless',
      'Last summer, I broke my arm while riding my bike downhill',

      'The last time I played sports, I broke something, mainly my glasses',
    ],
    word: 'broke',
    mean: 'kırmak, kırılmak, bırakmak',
  },
  {
    sentences: [
      'I bred rabbits last year as a hobby',
      'She bred dogs for show competitions when I was in Sivas',
      'We bred chickens on our farm',
      'He bred horses with strong pedigrees',
      'They never bred cats because of allergies',

      'I often bred tropical fish in my spare time when I was at secondary school',
      'She rarely bred birds due to the noise they made',
      'We bred cows for their milk',
      'He occasionally bred snakes for sale in his pet store',
      'They bred guinea pigs for research purposes',
    ],
    word: 'bred',
    mean: 'yavrulamak, neden olmak, üretmek',
  },
  {
    sentences: [
      'I brought my lunch to work every day last week',
      'She brought her passport when we traveled abroad',
      'They brought a delicious cake to the party yesterday',
      'He brought his umbrella to the park because it was raining',
      'We brought our pets to the vet for their annual check-up',
      'My friend brought a gift for my birthday last year',
      'The teacher brought a whiteboard marker to write on the board',
      'Sarah always brought her laptop to class to take notes',

      'I brought my camera to the concert to capture memorable moments',

      'We brought our board games to the family gathering and had a great time playing together',
    ],
    word: 'brought',
    mean: 'getirmek',
  },
  {
    sentences: [
      'The radio station broadcast the news every hour',
      'She broadcast her live cooking show on social media',
      'The TV network broadcast the football game last night',

      'He broadcast a message to all employees about the upcoming meeting',

      'The emergency alert system broadcast a weather warning yesterday',
      'They broadcast the concert live from the stadium',

      'The local news channel broadcast updates on the traffic situation',
      'The podcast host broadcast interviews with famous authors',

      'The satellite phone broadcast distress signals during the shipwreck',
      'The weather station broadcast the forecast for the week',
    ],
    word: 'broadcast',
    mean: 'yayınlamak, yaymak',
  },
  {
    sentences: [
      'I built a sandcastle on the beach yesterday',
      'She often built model airplanes when she was younger',
      'We quickly built a fire to keep warm in the woods',

      'He rarely built things with his hands, but he enjoyed the experience',
      'They nervously built a makeshift shelter during the storm',

      'The children enthusiastically built a tower out of blocks at the daycare',

      'My grandfather skillfully built a wooden bookshelf for our living room',

      'She frequently built puzzles in her free time to relax and unwind',
      'We painstakingly built a gingerbread house for the holidays',
      "He happily built a birdhouse for his grandmother's backyard",
    ],
    word: 'built',
    mean: 'inşa etmek, geliştirmek',
  },
  {
    sentences: [
      'Yesterday, I burnt the cookies in the oven',
      'Last week, we burnt the old documents in the backyard',
      'My sister accidentally burnt her hand while cooking dinner',
      'When I was a kid, I burnt my tongue on hot soup',

      'On the camping trip, we burnt marshmallows over the campfire every night',
      'The house caught fire and burnt to the ground last year',

      'During the fireworks show, we burnt through a pack of sparklers in minutes',
      'They burnt the bridge to prevent the enemy from crossing',
      'The police burnt the drugs they had confiscated',
      'He burnt the letter after reading it',
    ],
    word: 'burnt',
    mean: 'yanmak, yakmak',
  },
  {
    sentences: [
      'Yesterday, I burst into laughter when I heard a really funny joke',
      'Last week, the balloon burst with a loud noise',

      'Every morning, the children burst out of their bedrooms and into the kitchen for breakfast',

      'On that day, the dam burst and caused widespread flooding in the area',

      'During the party, the children burst into the room, excited to see the surprise',

      'After waiting for hours, my patience finally burst, and I started to complain',

      'Last night, fireworks burst and lit up the sky in celebration of a special event',
      'When the soap bubble became too big, it burst and disappear',

      'The water pipe burst, causing a flood in the basement of the house last month',

      "As soon as I saw her, all my emotions burst forth, and I couldn't control my happiness",
    ],
    word: 'burst',
    mean: 'patlamak, patlatmak',
  },
  {
    sentences: [
      'Yesterday, I bought a new dress at the mall',
      'My mother always bought fresh fruit at the market on Sundays',

      'When I was in college, I bought a used car to get around campus',

      'Last month, my friend bought tickets to see her favorite band in concert',

      'Every week, my dad bought flowers for my mom because he loved her',
      'I bought a gift for my sister on her birthday last year',

      'During the holiday season, many people bought gifts for their loved ones',

      'I never bought anything online until last week when I ordered a new phone',

      'In the past, I always bought lunch at work, but now I bring my own',

      'When I was younger, my parents often bought me toys to play with',
    ],
    word: 'bought',
    mean: 'satın almak',
  },
  {
    sentences: [
      'I caught the ball during the game yesterday',
      "He caught the flu last week, but he's feeling better now",
      'They caught the bus just in time to make it to the movie',
      'She caught a glimpse of her favorite celebrity at the concert',
      'We caught up with old friends at the reunion last month',
      'The cat caught a mouse in the backyard last night',
      'The teacher caught me copying homework, and I got in trouble',
      'I caught my sister singing in the shower this morning',
      'He caught the train every day to get to work on time',
      'We caught a beautiful sunset at the beach on our vacation',
    ],
    word: 'caught',
    mean: 'tutmak, yakalamak, yetişmek',
  },
  {
    sentences: [
      'Last night, I chose a new book to read before bed',
      'I frequently chose to have breakfast at my favorite café',
      'Yesterday, I chose to take a different route to work',
      'Every weekend, I chose to spend time with my family',
      'In the past, I often chose to go for a run in the mornings',
      'Last month, I chose to learn how to play the guitar',
      'Whenever I had free time, I chose to watch movies',

      'During my vacation, I frequently chose to visit museums and historical sites',

      'Yesterday evening, I chose to cook a delicious meal for my friends',
      'In the past, I often chose to go hiking in the mountains',
    ],
    word: 'chose',
    mean: 'seçmek',
  },
  {
    sentences: [
      'Last night, I clung to my favorite pillow as I fell asleep',

      'During the storm, we all clung tightly to each other for safety',

      "When I was a child, I often clung to my mother's leg when I was feeling shy",

      'After the race, the exhausted runner clung to the finish line for support',
      'The kitten clung to the tree branch as it learned to climb',

      'Throughout the concert, the fans clung to every word the singer sang',
      "In the haunted house, I clung to my friend's arm in fear",

      'Every morning, the spider clung to its web and waited for prey to come by',

      'At the amusement park, the children clung to their parents as they went on the roller coaster',

      'During the earthquake, people in the buildings clung to their desks for protection',
    ],
    word: 'clung',
    mean: 'yapışmak, sıkı sıkı tutmak, sarılmak',
  },
  {
    sentences: [
      'She came to the party last night',
      'The train came right on time',
      'We came home after a long day at work',
      'He came to visit us during the holidays',
      'The idea came to me while I was walking',
      'They came to the beach for a relaxing vacation',
      'The storm came suddenly, catching everyone off guard',
      'The cat came running when it heard the food bowl',
      'The news came as a surprise to everyone',
      'The sun came out after days of rain',
    ],
    word: 'came',
    mean: 'gelmek',
  },
  {
    sentences: [
      'The shirt I bought last week cost me $20',

      'I usually bought groceries from that store, but it cost more than usual yesterday',
      'The concert tickets cost a lot, but it was worth it',
      'Last month, the repairs on my car cost a fortune',

      "He always bought expensive gifts for his girlfriend, but last year it didn't cost him much",
      'The repair work on the house cost me a lot of time and effort',
      'The new laptop I bought two days ago cost me a small fortune',
      'My parents went on a vacation that cost them a lot of money',

      'The dinner at the fancy restaurant last night cost us a fortune',

      'I remember when I was a student, books for my courses cost a lot',
    ],
    word: 'cost',
    mean: 'mal olmak, etmek',
  },
  {
    sentences: [
      'I cut my hair last week',
      'She cut the cake at the party yesterday',
      'We cut the vegetables for dinner earlier today',
      'He cut his finger while chopping the wood',
      'They cut the grass last Sunday',
      'The tailor cut the fabric to make a new dress for me',
      'I cut my nails on the weekend',
      "She cut her hair because she didn't like it long",
      'I cut paper for my art projects on my own when I was younger',

      'The chef cut the ingredients finely to create a delicious dish',
    ],
    word: 'cut',
    mean: 'kesmek, kısmak',
  },
  {
    sentences: [
      'Yesterday, I dug a hole in my backyard to plant some flowers',
      'She dug a trench all by herself last weekend',

      'We often dug up potatoes from our vegetable patch when I was a kid',
      'My grandfather dug a well on his farm many years ago',

      'When I was vacationing in Mexico, I dug for seashells on the beach every morning',
      'Last summer, my friends and I dug a campfire pit in the woods',

      'My little brother dug a hole in the sandbox, but forgot to cover it up before leaving',

      'After the storm, the workers dug out the fallen trees from the road',

      'Once, I dug through some old boxes in my attic and found some forgotten treasures',

      'When I was studying archaeology, we dug up some fascinating artifacts from ancient civilizations',
    ],
    word: 'dug',
    mean: 'kazmak',
  },
  {
    sentences: [
      'Last summer, I frequently dove into the crystal-clear waters of the Caribbean',

      'Two days ago, I bravely dove off the high diving board at the local swimming pool',

      'Yesterday, I leisurely dove into the deep end of the pool, enjoying the refreshing sensation',

      'Every weekend during my vacation, I happily dove into the turquoise ocean to explore its colorful marine life',

      'Last month, I rarely dove into the pool because the water was too cold',

      'Three years ago, I excitedly dove into the ocean for the first time and instantly fell in love with underwater adventures',

      'Last week, I eagerly dove into the clear waters of a cenote in Mexico, admiring the breathtaking limestone formations',

      'On my birthday, I joyfully dove into the pool and celebrated with my friends',

      'Every summer, I regularly dove into the ocean and discovered hidden treasures beneath the waves',

      'Yesterday morning, I confidently dove into the pool and won first place in the diving competition',
    ],
    word: 'dove',
    mean: '(suya) dalmak',
  },
  {
    sentences: [
      'I did my homework last night',
      'She did her chores every day',
      'He did his work yesterday',
      'They did their exercise this morning',
      'We did the dishes after dinner',
      'Maria did her laundry last weekend',
      'John did his best in the exam',
      'The students did their presentations successfully',
      'I did a lot of shopping last week',
      'The team did a great job in the match yesterday',
    ],
    word: 'did',
    mean: 'yapmak, etmek',
  },
  {
    sentences: [
      'I drew a beautiful picture yesterday',
      'She often drew landscapes when she was younger',
      'They frequently drew together during their art class',
      'He never drew anything from memory',
      'We always drew with colored pencils instead of markers',
      'The artist drew a portrait of his friend last week',
      'She drew cartoons during her free time in high school',
      'They occasionally drew cartoons for the school newspaper',

      'He rarely drew animals, but this time he decided to give it a try',
      'We sometimes drew still life objects during our art lessons',
    ],
    word: 'drew',
    mean: 'çizmek',
  },
  {
    sentences: [
      'I dreamt about going on a vacation last night',
      'She dreamt of becoming a famous singer when she was a child',
      'He often dreamt of winning the lottery',
      'We dreamt about living in a big house when we were younger',
      'They dreamt of traveling around the world after retirement',

      'I never dreamt that I would meet my favorite celebrity in person',
      'She always dreamt of studying abroad during her college years',
      'He once dreamt of being a professional soccer player',
      'We sometimes dreamt about our future together as a family',
      'They frequently dreamt about starting their own business',
    ],
    word: 'dreamt',
    mean: 'rüya görmek, düşlemek, hayal etmek',
  },
  {
    sentences: [
      'I drank a cup of coffee yesterday morning',
      'She often drank water during her workout sessions',
      'They frequently drank tea in the evenings in the past',
      'Last week, I drank a glass of orange juice every morning',
      'He rarely drank alcohol at parties',
      'We sometimes drank milk before going to bed',
      'Yesterday, I drank a can of soda with my lunch',

      'As a child, she always drank a glass of warm milk before sleeping',
      'They occasionally drank beer while watching football games',
      'Last night, we drank champagne to celebrate our anniversary',
    ],
    word: 'drank',
    mean: 'içmek',
  },
  {
    sentences: [
      'Yesterday, I drove to the supermarket to buy groceries',
      'I frequently drove my friends to school last semester',

      'Last week, I drove to the beach and enjoyed a relaxing day in the sun',

      'Every weekend, I drove to the park to play sports with my friends',
      'Yesterday evening, I drove my sister to her piano class',
      'They drove to the beach for a vacation',

      'Last month, I drove my family to visit our relatives in a different city',

      'I often drove my neighbors to the train station when they needed a ride',
      "On my birthday, I drove my parents' car for the first time",

      "Last Saturday, I drove to my grandparents' house to have dinner with them",
    ],
    word: 'drove',
    mean: 'araba sürmek, itmek, yürütmek',
  },
  {
    sentences: [
      'I dwelt in that house for many years',
      'She frequently dwelt on the past events',
      'They rarely dwelt on their mistakes',
      'We often dwelt in the countryside during our summer vacations',
      'He dwelt on his guilt for days after the incident',
      'The family dwelt happily in their new home',
      'The thought of her mistake dwelt in her mind all night',
      'The memory of that place dwelt in my heart',
      'She always dwelt in the memories of her childhood',
      'The joy of their friendship dwelt in their hearts forever',
    ],
    word: 'dwelt',
    mean: 'oturmak, ikamet etmek, derinlemesine düşünmek (on)',
  },
  {
    sentences: [
      'Yesterday, I ate a delicious pizza for dinner',
      'Last week, my family and I ate at our favorite restaurant',
      'Every morning, I ate a bowl of cereal for breakfast',
      'I often ate fruits and vegetables with my meals',
      'On Sunday, we ate a big barbecue with our friends',
      'When I was a child, I ate ice cream every summer',

      'After school, I always ate a snack to hold me over until dinner',
      'I rarely ate fast food because I preferred homemade meals',
      'During the holidays, we ate a lot of traditional dishes',

      'In the past, I used to eat a lot of junk food, but now I eat healthier',
    ],
    word: 'ate',
    mean: 'yemek yemek',
  },
  {
    sentences: [
      'The leaves fell from the trees in autumn',
      'She slipped on the wet pavement and fell',
      'The snow fell gently, covering the ground',
      'He fell asleep while reading a book',
      'The temperature fell dramatically overnight',
      'The vase fell off the shelf and broke',
      'They fell in love during their trip',
      'The stock market fell after the economic report',
      'The rain fell heavily during the storm',
      'The sun fell below the horizon, ending the day',
    ],
    word: 'fell',
    mean: 'düşmek, azalmak',
  },
  {
    sentences: [
      'Yesterday, I fed my cat her favorite dry food',
      'Last week, I fed the stray dogs in the park',

      'Yesterday morning, I fed the fish in my aquarium before leaving for work',
      'On Sunday, I fed the birds in my backyard',
      'Two days ago, I fed the rabbits at the petting zoo',
      'Last night, I fed my baby brother his dinner',
      'Every evening, I fed the horses at the stable',
      "On Friday, I fed the chickens in my neighbor's backyard",
      'Last month, I fed the ducks at the pond near my house',
      'Yesterday evening, I fed the squirrels in the park',
    ],
    word: 'fed',
    mean: 'beslemek',
  },
  {
    sentences: [
      'I felt happy yesterday when I saw my friends',
      'She felt excited when she heard the good news',
      'We felt relaxed after we finished our work',
      'They felt proud when they saw their children perform on stage',
      'He felt grateful when his boss praised his hard work',
      'The students felt relieved when they passed their exams',
      'The family felt joyful when they went on vacation together',

      'My sister felt surprised when she received a gift from her friend',
      'The team felt satisfied after completing the project on time',

      'My grandparents felt content when they celebrated their sentence50th wedding anniversary',
    ],
    word: 'felt',
    mean: 'hissetmek, duymak',
  },
  {
    sentences: [
      'Yesterday, I fought with my brother over who would get to use the computer first',

      'Last week, I fought with my best friend, but we quickly made up and apologized to each other',

      'On Saturday mornings, my parents always fought about what to have for breakfast',

      'Two days ago, my classmates and I fought to be the first ones on the bus for our field trip',
      'Yesterday, my brother and I fought over the TV remote',
      'During the game, the players fought hard for the victory',

      'When I was younger, I often fought with my siblings over who got the biggest slice of cake',

      'Yesterday evening, my dog fought with another dog at the park, but luckily no one got hurt',

      'Throughout my childhood, my parents frequently fought about money and expenses',

      'The siblings often fought about who would use the computer first',
    ],
    word: 'fought',
    mean: 'savaşmak, dövüşmek',
  },
  {
    sentences: [
      'I found my lost keys yesterday after searching for them all morning',
      "She found a new job last month and she's really happy about it",

      'We found a great restaurant on our vacation and ate there every night',

      'He found a rare coin in his garden while he was planting flowers',
      'Mary found her passport in the drawer where she had left it',

      'They found a new apartment in the city center and moved in last week',
      "The detective found the missing clue in the victim's diary",

      "Yesterday, I found an interesting book at the library and couldn't put it down",

      'My sister found a cute puppy in the park and decided to keep it as a pet',

      "We found the perfect gift for our parents' anniversary during the weekend shopping trip",
    ],
    word: 'found',
    mean: 'bulmak',
  },
  {
    sentences: [
      'The dress fit perfectly for the special occasion',
      'He tried on several shoes, but none of them fit comfortably',
      'The puzzle pieces fit together to reveal a beautiful picture',
      'She fit all her belongings into a single suitcase for the trip',
      'The key fit the lock, and the door opened smoothly',
      'The new sofa fit well in the living room',
      'The team’s strategy fit the game plan perfectly',
      'His explanation fit the evidence presented in court',
      'The tailor fit the suit to his measurements',
      '',
    ],
    word: 'fit',
    mean: 'uymak, uydurmak, sığmak',
  },
  {
    sentences: [
      'Yesterday, I fled from the scary dog at the park',
      'Last month, my sister and I fled from the burning building',
      'Last night, the cat fled from the loud noise of the thunder',

      'On weekends, we often fled from the crowded city to enjoy nature',
      'After the loud explosion, the frightened crowd fled in panic',
      'During the storm, the birds fled to find shelter',
      'When the alarm sounded, everyone quickly fled the building',
      'The rabbit fled from the fox as soon as it spotted it',

      'Once a year, the villagers fled to higher ground to escape the floods',

      'Early in the morning, the deer fled from the hunters in the forest',
    ],
    word: 'fled',
    mean: 'kaçmak',
  },
  {
    sentences: [
      'She flung her coat onto the chair as she entered the room',
      'He angrily flung the book across the room',
      'The wind flung leaves into the air during the storm',
      'They flung their arms around each other in celebration',
      'The chef flung the pizza dough high into the air',
      'The cat playfully flung its toy mouse around the room',
      'The angry protester flung a sign at the police',
      'The dancer gracefully flung her scarf during the performance',

      'The door suddenly opened, and the wind flung it against the wall',
      'The mischievous child flung water balloons at the neighbors',
    ],
    word: 'flung',
    mean: 'fırlatıp atmak, savurmak',
  },
  {
    sentences: [
      'Last week, I flew to a beautiful island for my vacation',
      'She flew to visit her grandparents during the holiday',
      'Yesterday, we flew to Paris for a weekend getaway',
      'They often flew to different countries for business meetings',

      'Two years ago, I flew for the first time and it was an amazing experience',

      'Every summer, my family flew to our favorite beach destination for a relaxing vacation',
      'Last night, the birds flew gracefully across the sunset sky',

      'She flew to New York every year to attend the fashion week when I worked for a daily magazine',

      'They rarely flew on weekends as they preferred to spend time with family',
      'When I was younger, I flew kites with my friends in the park',
    ],
    word: 'flew',
    mean: 'uçmak, uçurmak',
  },
  {
    sentences: [
      'My parents forbade me from going out late at night',
      'She forbade her children to eat too much candy',
      'The teacher forbade us to use our phones during class',
      'He forbade his employees from taking long breaks',
      'The sign on the door forbade smoking in the building',
      'My doctor forbade me from eating junk food',

      'The school principal forbade students from wearing hats inside the school',

      'The rules of the competition forbade using any electronic devices',

      'The company policy forbade employees from sharing confidential information',
      'The law forbade parking in front of the fire hydrant',
    ],
    word: 'forbade',
    mean: 'yasaklamak',
  },
  {
    sentences: [
      'The meteorologist accurately forecast heavy rain for the weekend',
      'She forecast a drop in temperatures as winter approached',

      'The weather app forecast sunny skies for the last few days but it rained',

      'The economist forecast a recession based on market trends last year',

      'The financial analyst forecast a rise in stock prices two days ago',
      'The farmer forecast a good harvest due to favorable conditions',

      'The travel agency forecast increased bookings for summer vacations',

      'The business consultant forecast growth for the startup company last month',

      'The climate scientist forecast more frequent extreme weather events at the beginning of the decade',

      'The sales team forecast higher sales during the holiday season',
    ],
    word: 'forecast',
    mean: 'tahmin etmek',
  },
  {
    sentences: [
      'I foresaw the outcome of the game',
      'She never foresaw the challenges ahead',
      'They rarely foresaw the consequences of their actions',
      'He foresaw the potential risks in investments and he was right',
      'We previously foresaw the need for additional resources',

      'The team frequently foresaw potential problems and found solutions in advance',
      'Jenny often foresaw the difficulties and prepared accordingly',

      'He occasionally foresaw changes in the market and adapted his strategies',

      'The company always foresaw future trends and stayed ahead of the competition',
      'We never foresaw such a positive response from the audience',
    ],
    word: 'foresaw',
    mean: 'önceden görmek',
  },
  {
    sentences: [
      'I often foretold the outcome of the soccer matches correctly',

      'Last year, she foretold that a major earthquake would hit the region',
      'The fortune teller foretold our future with great accuracy',
      'They frequently foretold the success of their business venture',
      'Yesterday, he foretold the happening of a significant event',

      'My grandmother often foretold the weather based on her joint pain',
      'The ancient prophecy foretold the rise of a powerful leader',

      'The psychic foretold that I would meet someone special in the near future',

      "The astrologer foretold my financial success during last week's reading",
      "The oracle foretold the heroine's journey to save the kingdom",
    ],
    word: 'foretold',
    mean: 'önceden haber vermek',
  },
  {
    sentences: [
      'I forgot to buy milk yesterday',
      'She often forgot to lock the door before leaving',
      'He never forgot to bring his umbrella on rainy days',

      'We forgot to turn off the lights before going to bed last night',
      'They rarely forgot to feed their pet cat',
      'My grandmother forgot where she put her glasses again',
      'The teacher forgot to give us homework yesterday',

      'The children never forgot to say thank you after receiving a gift in the past',
      'He usually forgot to set his alarm clock and woke up late',
      'My sister often forgot to return my borrowed books',
    ],
    word: 'forgot',
    mean: 'unutmak',
  },
  {
    sentences: [
      'I forgave my friend for forgetting my birthday last year',
      'She forgave her sister for breaking her favorite mug',
      'We forgave each other for our mistakes and moved on',
      'He forgave himself for making the wrong decision',
      'The teacher forgave the students for being late to class',

      'They forgave their neighbor for accidentally damaging their garden',
      'I forgave myself for not studying enough for the exam',
      'She forgave her parents for not understanding her feelings',
      'We forgave our boss for being angry with us',
      'He forgave his friend for losing his keys',
    ],
    word: 'forgave',
    mean: 'bağışlamak',
  },
  {
    sentences: [
      'Last winter, the temperature suddenly dropped below zero and everything froze',

      'Yesterday morning, I went outside and realized that the ground froze overnight',

      'Last winter, the lake froze completely, allowing people to ice skate on it',

      'Last week, we had a snowstorm and the entire town froze under a thick layer of ice',

      'Our car froze overnight, and we had to wait for it to thaw before driving',

      'The windows were covered in frost because the glass froze overnight',

      'In the evenings, I enjoyed curling up on the couch with a warm blanket while the rest of the world froze outside',

      'During the trip to the mountains, we hiked to the top of the peak and froze as we admired the breathtaking view',

      'Whenever I opened the freezer, I would see that the ice cubes froze in their tray',

      'On the coldest day of the year, I accidentally left my car windows open and when I returned, everything inside froze',
    ],
    word: 'froze',
    mean: 'donmak, dondurmak',
  },
  {
    sentences: [
      'Last week, the people successfully overthrew the oppressive regime',
      'John overthrew his opponent in the chess game yesterday',
      'They overthrew the corrupt government two years ago',

      "The rebellion overthrew the dictator's rule in a matter of days",

      'Last month, the citizens overthrew the unjust laws that were in place',

      'The revolutionaries overthrew the monarchy and established a democratic system',

      'She overthrew her bad habits and started leading a healthier lifestyle',

      'Yesterday, the team overthrew their rivals and won the championship',

      'The protests in the capital overthrew the president and led to a change in government',

      'The students overthrew the unfair grading system and secured equal opportunities for all',
    ],
    word: 'overthrew',
    mean: '(hükümet) devirmek, yıkmak, düşürmek',
  },
  {
    sentences: [
      'I paid my rent last week',
      'She always paid her bills on time',
      'We paid for the groceries at the supermarket yesterday',
      'He often paid for dinner when we went out',
      'They paid for their movie tickets with cash',
      'The company paid its employees a bonus last month',
      'I paid for my new phone with a credit card',
      'She paid for her vacation in installments',
      'We paid the restaurant bill with a gift card',
      'He never paid for parking in the city',
    ],
    word: 'paid',
    mean: 'ödemek',
  },
  {
    sentences: [
      'Last week, I pled with my boss for a day off and she agreed',

      'She pled with her parents to let her go to the concert and they finally said yes',
      'He pled with the police officer to let him off with a warning',

      'They pled with the judge for a lighter sentence and were grateful when he agreed',

      'Yesterday, I pled for forgiveness and my friend kindly accepted my apology',

      'She pled for help when she got lost in the city and a stranger came to her rescue',

      'We pled with our teacher to give us more time to finish the assignment and he gave us an extra day',

      'Last month, I pled my case in front of the jury and they ruled in my favor',

      'He pled for a second chance and his boss gave him another opportunity',

      'The children pled with their parents to take them to the theme park and they finally relented',
    ],
    word: 'pled',
    mean: 'yalvarmak, dilemek',
  },
  {
    sentences: [
      'Last night, he proved his dedication to his team by scoring the winning goal',

      "During the school year, she proved her intelligence by receiving straight A's on every test",

      'Yesterday, we proved our friendship by supporting each other through a difficult time',

      'Every week, he proved his reliability by always arriving on time for work',

      'In the past, she proved her bravery by skydiving from an airplane',

      'Last month, they proved their love for each other by getting married',

      'Throughout his career, he proved his talent by consistently delivering impressive performances',

      'Last week, she proved her creativity by designing a stunning piece of artwork',

      'In the past, they proved their trustworthiness by always keeping their promises',

      'Throughout their journey, they proved their determination by overcoming every obstacle in their path',
    ],
    word: 'proved',
    mean: 'kanıtlamak',
  },
  {
    sentences: [
      'Yesterday, I put the groceries on the kitchen counter',
      'Last week, she put her clothes in the suitcase for the trip',
      'They put their toys back in the toy box after playing',

      'On Monday morning, he put the keys in his pocket before leaving the house',

      'In the evening, we put the dishes in the dishwasher after dinner',
      'My mother put fresh flowers in a vase on the dining table',

      'Last night, he put the book on the bedside table before going to sleep',
      'On her birthday, she put on her favorite dress to celebrate',
      'When we arrived at the party, we put our coats in the closet',

      'After finishing his homework, the student put his books in his backpack',
    ],
    word: 'put',
    mean: 'koymak, yerleştirmek, (on) giyinmek',
  },
  {
    sentences: [
      "I quit my job last year because I wasn't happy",
      'She quit smoking two months ago and feels much healthier now',
      'We quit playing basketball after we sprained our ankles',
      'They quit the band a while ago due to creative differences',
      'He quit his bad habits after his health scare',
      'I quit eating fast food after realizing how unhealthy it was',
      'She quit the gym when she moved to a new city',
      'We quit watching that TV show because it became boring',

      'They quit studying late at night after realizing it affected their sleep',

      'He quit using social media after realizing it was consuming too much of his time',
    ],
    word: 'quit',
    mean: 'bırakmak, terketmek',
  },
  {
    sentences: [
      'Last night, I read an interesting book that kept me engaged until midnight',
      'Jake read the newspaper while enjoying his coffee',

      'Yesterday, she read a heartwarming poem that brought tears to her eyes',

      'On their holiday, the family read a captivating novel by the beach',

      'During the summer, I read several inspirational biographies that motivated me',
      'After dinner, he always read a bedtime story to his children',
      'Last Sunday, I read my favorite magazine in the park',

      'Last weekend, they read an informative article about healthy eating habits',

      'In the library, I read a newspaper article that grabbed my attention immediately',

      'During my vacation in Europe, we read historical facts about each place we visited',
    ],
    word: 'read',
    mean: 'okumak',
  },
  {
    sentences: [
      'Last year, the town council rebuilt the old bridge',
      'She rebuilt her confidence slowly over time',
      'They rebuilt their friendship after the argument',
      'The company rebuilt the website in just a few weeks',
      'He rebuilt his car engine himself with some help from a friend',
      'After the fire, they rebuilt their house from the ground up',
      'The team rebuilt their strategy and won the game',
      'She rebuilt her life after the divorce',

      'They rebuilt the relationship with their neighbors by hosting a dinner',

      'The city rebuilt the park playground for the children to enjoy',
    ],
    word: 'rebuilt',
    mean: 'yeniden inşa etmek',
  },
  {
    sentences: [
      'Yesterday, I redid my math homework and got a better grade',
      'Last weekend, she redid her room and it looks amazing now',
      'I redid the puzzle and finished it in just an hour',

      'After making a mistake, he quickly redid the experiment to get the correct results',
      'I redid the recipe and it turned out delicious this time',

      'She redid her presentation for the third time and finally felt confident about it',
      'They redid the race course and set a new record',
      'Last month, we redid the garden and now it looks beautiful',

      'He redid the drawing and it looked much better than the first one',

      'When I realized I forgot a crucial step, I quickly redid the project before the deadline',
    ],
    word: 'redid',
    mean: 'yeniden yapmak',
  },
  {
    sentences: [
      'I watched a movie that they remade last year',
      "She remade the cake for her friend's birthday",
      'We remade our plans to meet at the park',
      'They remade the old house into a beautiful hotel',
      'He remade his resume last month',
      'The artist remade the painting in a different style',
      'I remade my bed with fresh sheets this morning',
      'The chef remade the dish to make it more flavorful',
      'The company remade their logo for the new marketing campaign',
      'After making a mistake, she remade the project to fix it',
    ],
    word: 'remade',
    mean: 'yeniden yapmak',
  },
  {
    sentences: [
      'I repaid my friend the money I owed yesterday',
      'He repaid the loan in full last month',
      'She repaid the kindness by helping him with his project',
      'We repaid our parents by cleaning the house every weekend',
      'The company repaid its debt to the bank last year',
      'They repaid their gratitude by inviting us to dinner',
      'The customer repaid the store for the damaged goods',

      'The student repaid the professor by excelling in the final exam',

      'The neighbor repaid our generosity by offering to help with the yard work',

      "The team repaid the coach's faith in them with a victory at the championship game",
    ],
    word: 'repaid',
    mean: '(para) geri vermek, ödemek',
  },
  {
    sentences: [
      'Yesterday, I resold my old textbooks to other students',
      "Last week, I resold my brother's bicycle to a neighbor",

      'I frequently resold tickets for concerts and sports events last year',
      'Two days ago, I resold my used laptop at a garage sale',

      'I often resold clothes that no longer fit me to second-hand shops',

      "Last month, I resold my friend's unused phone on an online marketplace",

      'Every summer, I resold my old camping gear to fellow outdoor enthusiasts',

      'I regularly resold video games to my classmates before switching to a digital library',

      'In the past, I resold collectible items that I found at flea markets',
      'I resold my handmade jewelry at local craft fairs',
    ],
    word: 'resold',
    mean: 'tekrar satmak, satmak',
  },
  {
    sentences: [
      'Last week, I reset my phone to fix the problem',

      'I reset the alarm clock yesterday to make sure I woke up on time',
      'She reset her password after she forgot it',

      'When the computer froze, I reset it and it started working again',
      'I reset the television when the picture became blurry',

      'Last month, I reset the modem to improve the internet connection',
      'He reset the game to try to beat his high score',
      'The technician reset the printer to resolve the issue',
      'After the power outage, I reset all the clocks in the house',

      'When the experiment failed, the scientist reset the equipment and tried again',
    ],
    word: 'reset',
    mean: 'yeniden ayarlamak',
  },
  {
    sentences: [
      'I often rethought my decision before taking action',
      'Yesterday, I rethought my plans before executing them',
      'Last week, I rethought my options before making a choice',

      'He frequently rethought his strategy before presenting it to the team',
      'They rethought their options before making a final decision',
      'She regularly rethought her approach to problem-solving',
      'Last month, we rethought our previous decisions',
      'They rethought their actions before it was too late',
      'My friends rethought their plans before going on a vacation',
      'I usually rethought my actions before regretting them',
    ],
    word: 'rethought',
    mean: 'tekrar düşünmek',
  },
  {
    sentences: [
      'Yesterday, I rewrote my essay to improve its clarity',

      'Last week, I rewrote my resume to highlight my skills and achievements',

      'After school, I often rewrote my notes to ensure I understood the material',
      'Every evening, I rewrote my to-do list for the next day',

      'I frequently rewrote my diary entries to make them more descriptive',

      'Every weekend, I rewrote my favourite recipes to include healthier ingredients',

      'During the summer holidays, I regularly rewrote my class notes to review for the upcoming exams',

      'In the past, I occasionally rewrote my cover letters to tailor them to specific job applications',

      'Last night, I rewrote my presentation to include more visual aids',

      'Whenever I made mistakes in my writing, I always rewrote the sentences to correct them',
    ],
    word: 'rewrote',
    mean: 'yeniden yazmak',
  },
  {
    sentences: [
      'I rode my bike to school yesterday morning',
      'She rode her horse in the countryside',
      'We rode the roller coaster at the amusement park',
      'He rode the bus to work every day last month',
      'They rarely rode their motorcycles in the rain',
      'The children rode the carousel at the fair last weekend',
      'We rode the Ferris wheel at night to see the city lights',
      'She rode her scooter to the grocery store',
      'He always rode his skateboard to the skate park',

      'The tourists often rode the double-decker tour bus to explore the city',
    ],
    word: 'rode',
    mean: 'binmek(at, bisiklet)',
  },
  {
    sentences: [
      'Yesterday, I rang my friend to invite her to the party',

      'I always rang my grandmother on her birthday when she was alive',
      'Last week, I rang the doorbell but no one answered',
      'I rarely rang the bell at the church',

      'She often rang the bell to call her children for dinner when they lived in the country',
      'I rang my son to wake him up early',

      'Every morning, I rang the school bell to start the classes when I was a student',
      'I rang the hotel reception for room service during my vacation',
      'He never rang the fire alarm at work',

      'I once rang the bell to get the attention of the waiter at the restaurant',
    ],
    word: 'rang',
    mean: '(zil vb) çalmak, telefonla aramak',
  },
  {
    sentences: [
      'The sun rose at 6 am yesterday',
      'I rose early every morning last week',
      'She rose to the challenge and succeeded',
      'They rose to the occasion and performed exceptionally well',

      'The demand for the product rose significantly after the advertising campaign',

      'Our team rose to the top of the leaderboard after winning the last match',
      'The temperature rose steadily throughout the day',
      'I rose from my seat and walked to the front of the room',
      'The number of attendees at the event rose each year',
      'The bread dough rose perfectly while baking in the oven',
    ],
    word: 'rose',
    mean: 'doğmak, yükselmek',
  },
  {
    sentences: [
      'I ran to the store yesterday',
      'She often ran in the park after work',
      'We ran a marathon last year',
      'I ran sentence5 miles this morning',
      'Yesterday, he ran to catch the bus',
      'They ran through the fields as children',
      'The dog always ran to greet me when I came home',
      'I ran to the supermarket last week',
      'She ran out of the house to catch the ice cream truck',
      'We ran a race against the other team and won',
    ],
    word: 'ran',
    mean: 'koşmak, işletmek, akmak',
  },
  {
    sentences: [
      'He sawed the wood carefully to make a table yesterday',
      'She sawed the branches off the tree in her garden last week',
      'My father sawed the logs every weekend when he was young',
      'The carpenter sawed the plank into two pieces',
      'He sawed through the pipe to fix the leak',
      'She sawed the old shelf to reuse the wood',
      'Yesterday morning, he sawed the wooden blocks for his project',
      'The artist sawed the sculpture out of a single piece of wood',
      'She sawed the door frame to fit the new door',
      'The worker sawed the metal rods for the construction',
    ],
    word: 'sawed',
    mean: 'testereyle kesmek',
  },
  {
    sentences: [
      'Yesterday, I said hello to my neighbor as I walked by',
      'She said she was going to the store last week',
      'They said they enjoyed the party on Saturday',
      'He said thank you when I held the door open for him',
      'My teacher said I did a good job on my project last month',
      'We said our goodbyes before leaving for the weekend',
      'The children said please when asking for more cookies',
      'I said sorry for being late to the meeting yesterday',
      'She said yes when I asked her to go to the movies with me',
      'We said our prayers before going to bed each night',
    ],
    word: 'said',
    mean: 'demek, söylemek',
  },
  {
    sentences: [
      'I saw a beautiful sunset yesterday evening',
      'Last week, I saw my favorite celebrity at the mall',
      'He saw his friends every day during summer vacation',
      'We saw a lot of animals when we went on a safari last month',
      'She saw a shooting star for the first time in her life',
      'They saw a romantic movie together on their first date',
      'Yesterday, I saw a rainbow after the rain stopped',
      'Last night, he saw a ghost in his dreams',
      'We saw a rare bird species during our trip to the forest',
      'She saw her grandparents every Sunday when she was a child',
    ],
    word: 'saw',
    mean: 'görmek, anlamak',
  },
  {
    sentences: [
      'Yesterday I sought advice from a colleague about a work project',

      'Last week, John sought help from a tutor to improve his math skills',

      'When I was in college, I often sought guidance from my professors',

      'On Friday, Sarah sought clarification from her boss about a new policy',

      'In the past, I have sought explanations from my doctor about my health issues',

      'During the meeting, we sought opinions from all team members regarding the new proposal',

      'Last year, I sought comfort from my family when I was going through a difficult time',

      'During his trip to Europe, Jack sought recommendations from locals about the best restaurants',

      'When I was younger, I frequently sought permission from my parents to go out with friends',

      'Yesterday, we sought answers from our supervisor about the delay in the project',
    ],
    word: 'sought',
    mean: 'aramak, araştırmak',
  },
  {
    sentences: [
      'Last week, I sold my old bicycle to a neighbor',
      'I sold my used textbooks at the school book fair',
      'I often sold my handmade jewelry at the local craft market',
      'Yesterday, I sold some of my clothes at a garage sale',

      'When I was in college, I sold magazine subscriptions door-to-door',
      'My brother sold his car last month',
      'I rarely sold items online, but I did it once and it went well',
      'I sold my old smartphone to a friend who needed a new one',

      'After a lot of advertising, I finally sold my artwork at the art show',
      'The store sold out of the new video game within a few hours',
    ],
    word: 'sold',
    mean: 'satmak',
  },
  {
    sentences: [
      'I sent an email to my friend yesterday',
      'She sent me a text message last week',
      'We often sent postcards while on vacation',
      'He rarely sent letters to his grandparents',
      'They frequently sent packages to their family',
      'The company always sent me monthly updates',
      'My mom sent me a care package when I was in college',
      'My dad sent me a birthday card every year',
      'We regularly sent invitations for our parties',
      'She sometimes sent me funny videos',
    ],
    word: 'sent',
    mean: 'göndermek',
  },
  {
    sentences: [
      'Last week, I set the table for dinner every evening',
      'Yesterday, I set my alarm clock to wake up at 7 am',

      'When I was younger, I often set goals for myself and worked hard to achieve them',

      'My grandmother always set a good example for me by being kind and understanding',

      'During our vacation, we regularly set aside time for sightseeing and relaxation',

      'Two years ago, I set a reminder on my phone to drink enough water throughout the day',

      'After finishing the puzzle, I set it aside and started reading a book',

      'Last night, I set the thermostat to a comfortable temperature before going to bed',
      "When I cooked, I set a timer so I didn't burn the food",

      'Despite the rainy weather, we still set up a picnic in the park yesterday',
    ],
    word: 'set',
    mean: 'hazırlamak, kurmak',
  },
  {
    sentences: [
      'I sewed a beautiful dress for myself last month',
      'She often sewed her own curtains when she had free time',
      'We frequently sewed together as a hobby in the past',
      'My grandmother sewed all of my baby clothes when I was little',

      'They rarely sewed their own clothes because they preferred to buy them',
      'He sewed buttons onto his shirts whenever they fell off',
      'We always sewed on the weekends to relax and unwind',

      'She sometimes sewed blankets for charity events in our community',
      'My mother sewed a patch onto my denim jacket after it ripped',

      'I frequently sewed costumes for school plays during my high school years',
    ],
    word: 'sewed',
    mean: 'dikiş dikmek',
  },
  {
    sentences: [
      "Yesterday, I shook my friend's hand to greet him",
      'Last week, I shook the bottle of ketchup before using it',
      'When we saw each other, we shook hands happily',
      'In the morning, I shook the rug to remove the dust',
      'On Monday, I shook my head in disbelief when I heard the news',
      "When I'm nervous, I shook my leg uncontrollably",
      'After the earthquake, the whole building shook violently',

      'At the concert, the excitement was so overwhelming that everyone shook with their arms with joy',

      'When I rode a roller coaster for the first time, my whole body shook with fear',

      'During the thunderstorm, the windows shook loudly with each clap of thunder',
    ],
    word: 'shook',
    mean: 'sallamak, sallanmak, tokalaşmak',
  },
  {
    sentences: [
      'Last week, I shaved my beard for the first time in a month',
      'He shaved his head every day when he was in the military',
      'Yesterday, I shaved my legs before going to the beach',

      'My dad shaved his mustache last night and now he looks completely different',

      'Every Saturday morning, my grandfather shaved using a traditional straight razor',

      'Sarah shaved her eyebrows off accidentally while trying to trim them',

      'Last month, my brother shaved off his long hair to donate it to charity',

      'After finding a grey hair, she panicked and immediately shaved her entire head',

      'On vacation, I always make sure to shaved my legs and armpits before going swimming',

      'The barber accidentally shaved off a chunk of my hair while cutting it',
    ],
    word: 'shaved',
    mean: 'tıraş olmak, tıraş etmek',
  },
  {
    sentences: [
      'Last week, I shed a tear when I watched a heartwarming movie',
      'Yesterday, my snake shed her old skin and felt rejuvenated',
      'Every morning, my dog sheds fur all over the house',
      'Two days ago, we shed light on the mysterious disappearance',
      'Last month, he shed the extra weight by exercising regularly',
      'Yesterday evening, the snake shed its skin for the first time',
      'Every evening, the tree sheds its leaves before winter',
      'Last year, they shed tears of joy at their wedding ceremony',
      'Last night, the clouds shed rain and filled the dry riverbeds',

      'Last spring, the cherry blossoms shed their petals, creating a beautiful sight',
    ],
    word: 'shed',
    mean: 'dökmek, saçmak, akıtmak',
  },
  {
    sentences: [
      'The sun shone brightly yesterday',

      'I looked out the window and saw that the stars shone in the night sky',
      'They enjoyed a picnic at the park while the sun shone overhead',

      'After the rain, the streets shone from the reflection of the streetlights',

      'The full moon shone through my bedroom window while I was reading a book',

      'We went swimming in the sparkling ocean when the sun shone all afternoon',

      'She smiled as the spotlight shone on her during the performance',

      'Last weekend, we had a barbeque in the backyard while the sun shone down on us',

      'The diamond ring on her finger shone beautifully under the bright lights',

      'The disco ball in the nightclub shone brightly, lighting up the dance floor',
    ],
    word: 'shone',
    mean: 'parlamak, parlatmak',
  },
  {
    sentences: [
      'Yesterday, I shot a basketball into the hoop and made a perfect shot',

      'Last week, I shot a video of my friends at the park playing soccer',
      'On Saturday morning, I shot a target with my new bow and arrow',

      'Every evening, my dad and I practiced and shot the ball into hoops in the backyard',

      'In the past, I shot at cans with my BB gun during camping trips',

      'Last month, I shot my first bullet at the shooting range and hit the bullseye',

      'During my childhood, I often shot water guns at my siblings and had a lot of fun',

      'Yesterday, I shot a stunning photograph of a beautiful sunset at the beach',
      'When I played video games, I always shot the enemy in the game',

      'In my younger days, I shot wild animals with my camera while on a safari',
    ],
    word: 'shot',
    mean: 'ateş etmek, vurmak, (foto, video) çekmek',
  },
  {
    sentences: [
      'Yesterday, I showed my friend how to use a new app on her phone',

      'Last week, I showed my parents the latest episode of my favorite TV show',

      'Every Monday, I showed my respect to my teacher in my English class',

      'Two days ago, I showed my sister how to bake cookies from scratch',

      'In the summer, I showed my cousins the beautiful beaches near our hometown',
      'Last night, I showed my younger brother how to play chess',

      "Every morning, I showed my appreciation for my mom's delicious breakfast",

      'Two weeks ago, I showed my colleagues a presentation on our new project',

      'Yesterday, I showed my neighbor the quickest way to get to the supermarket',

      'In the past, I always showed kindness towards strangers in need',
    ],
    word: 'showed',
    mean: 'göstermek',
  },
  {
    sentences: [
      'I shrunk my sweater in the wash yesterday',

      'She rarely shrunk her clothes because she was careful with the laundry',
      'He quickly shrunk the photo to fit in the frame',
      'They accidentally shrunk their favorite jeans last week',
      'We always shrunk our clothes on purpose to get a better fit',
      'The heat caused the plastic bottle to shrunk in the sun',
      'The sweater shrunk after it was washed in hot water',
      'My mom shrunk my clothes intentionally when I was younger',
      'The sweater magically shrunk overnight in the dryer',
      'The jeans shrunk after being washed in hot water',
    ],
    word: 'shrank',
    mean: 'çekmek, büzülmek',
  },
  {
    sentences: [
      'I shut the door after coming inside the house',
      'She shut her laptop before going to bed',
      'We shut the windows before leaving the room',
      'They shut the gate when they saw the dog approaching',
      'He shut the book and went to sleep',
      'The shop shut early on Sundays',
      'I shut my eyes tightly during the scary movie',
      'She shut the car door gently to avoid making a noise',
      'We shut the blinds before going to sleep',
      'They shut down the computer before leaving the office',
    ],
    word: 'shut',
    mean: 'kapamak',
  },
  {
    sentences: [
      'I sang a beautiful song at the karaoke last night',
      'She often sang in the choir when she was younger',
      'We all sang happy birthday to our friend at her party',
      'They never sang together before the school talent show',
      'He sang a few lines from his favorite song during the concert',
      'The children sang a catchy tune during their school assembly',
      'I sang in the shower every morning when I was a teenager',
      'My grandmother sang lullabies to me when I was a baby',
      'Last weekend, they sang their hearts out at the music festival',

      "She rarely sang in public, but she made an exception for her best friend's wedding",
    ],
    word: 'sang',
    mean: 'şarkı söylemek, ötmek',
  },
  {
    sentences: [
      'Yesterday, I sank my old socks in the bathtub to clean them',

      'Last week, my brother accidentally sank his phone in the swimming pool',

      'Every summer, we used to go to the lake and sank our feet in the cool water',

      'The boat sank due to a leak, but everyone on board was safely rescued',
      'The Titanic sank after hitting an iceberg in sentence1912',

      'Two days ago, I accidentally sank my pen in the inkwell and made a big mess',

      'When I was younger, I enjoyed participating in diving competitions and sank gracefully into the pool',

      'Last summer, a friend and I watched when a boat sank in the lake during a storm',
      'The gun sank into the lake after thrown by the gangster',

      'The old ship sank slowly, leaving only its mast above the water',
    ],
    word: 'sank',
    mean: 'batmak, batırmak',
  },
  {
    sentences: [
      'Yesterday, I sat on the comfortable couch and watched my favorite TV show',

      'Every morning, my mom sat at the kitchen table and had a cup of coffee',

      'Last night, I sat next to my best friend at the concert and enjoyed the amazing music',
      'Sometimes, I sat in the park and read a book to relax',

      'Last summer, we often sat around the campfire and shared stories during our camping trips',

      'After a long day at work, I sat in the bathtub and soaked in the warm water',

      'Every weekend, my family and I sat together for a delicious dinner and talked about our week',

      'When I was a child, I sat in the front row at school and listened attentively to my teacher',

      'During the flight, I sat next to a friendly stranger who told me interesting stories',

      'While waiting for my appointment, I sat in the reception area and read a magazine',
    ],
    word: 'sat',
    mean: 'oturmak',
  },
  {
    sentences: [
      'The knight slew the dragon to save the kingdom',
      'She slew the monstrous beast that terrorized the villagers',
      'The hero slew the evil warlock in the epic battle',
      'He slew the giant serpent to retrieve the golden apple',
      'The warriors slew their enemies and protected their land',
      'She slew the vampire that haunted the old castle',
      'Long ago, the champion slew the ogre that was invincible',
      'They slew the mythical creature to end its reign of terror',
      'The adventurer slew the trolls to clear the path',
      'The legend says he slew a hundred foes with a single sword',
    ],
    word: 'slew',
    mean: 'katletmek',
  },
  {
    sentences: [
      'I slept for eight hours last night',
      'He always slept soundly after a long day at work',
      'We rarely slept in on weekends when we were younger',
      'She usually slept peacefully through the night',
      'The baby slept peacefully after being rocked to sleep',
      'They often slept late on Sunday mornings',
      'My grandparents always slept in separate beds',
      'My sister and I sometimes slept in bunk beds when we were kids',
      'The students slept soundly after a tiring field trip',
      'My dog usually slept at the foot of my bed',
    ],
    word: 'slept',
    mean: 'uyumak',
  },
  {
    sentences: [
      'He slid down the snowy hill on his sled',
      'She slid the glass door open to step outside',
      'The children slid across the ice with ease',
      'He slid into the seat just as the show started',
      'The books slid off the shelf during the earthquake',
      'She slid the letter into the envelope',
      'The waiter slid the plate onto the table without a sound',
      'They slid into the booth at the diner',
      'The cat slid through the small opening of the fence',
      'He slid the key into the lock and opened the door',
    ],
    word: 'slid',
    mean: 'kaymak, kaydırmak',
  },
  {
    sentences: [
      'He smelt the roses in the garden yesterday',
      'She smelt something burning and called the fire department',
      'The dog smelt the ground to find the bone',
      'We smelt the fresh bread as we walked past the bakery',
      'The children smelt the cookies and knew they were ready',
      'He smelt the perfume and remembered his grandmother',
      'She smelt the air after the rain and smiled',
      'The chef smelt the soup to check if it needed more spices',
      'They smelt the sea breeze as they arrived at the beach',
      'I smelt the pizza and couldn’t wait to eat it',
    ],
    word: 'smelt',
    mean: 'koklamak, kokmak',
  },
  {
    sentences: [
      'He sowed the seeds in the garden last spring',
      'She sowed the wildflower seeds across the meadow',
      'The farmer sowed the wheat in the fields',
      'We sowed the vegetable seeds in neat rows',
      'The gardener sowed the grass seed before the rain',
      'They sowed the oats by hand, scattering them wide',
      'She sowed the herb garden with a variety of spices',
      'He sowed the barley early to harvest in summer',
      'The community sowed the park with new trees',

      'I sowed the patches of bare earth with clover to enrich the soil',
    ],
    word: 'sowed',
    mean: '(tohum) ekmek',
  },
  {
    sentences: [
      'He spoke softly to avoid waking the baby',
      'She spoke passionately about her research',
      'The teacher spoke to the class about honesty',
      'We spoke on the phone for hours last night',
      'The children spoke to their grandparents on Skype',
      'He spoke at the conference yesterday',
      'She spoke to the manager about the issue',

      'The tourists spoke with the locals to learn more about the culture',
      'They spoke about their vacation plans excitedly',
      'I spoke with my friend about meeting up next weekend',
    ],
    word: 'spoke',
    mean: 'konuşmak',
  },
  {
    sentences: [
      'Yesterday, I spelt my name correctly for the first time',
      'I frequently spelt words wrong when I was younger',
      'Last week, I spelt all the words correctly in the spelling bee',
      "I always spelt my sister's name wrong until she corrected me",
      '"Two days ago, I spelt the word ""cat"" without any mistakes"',

      'I often spelt difficult words correctly with the help of a dictionary',

      'Last month, I spelt every word on the test correctly and received a perfect score',

      "I usually spelt my teacher's name wrong, but yesterday I got it right for the first time",

      "I always spelt my friend's name incorrectly until he showed me the correct spelling",

      '"Yesterday, I spelt the word ""elephant"" wrong, but today I remembered the correct way to spell it"',
    ],
    word: 'spelt',
    mean: 'harf harf söylemek',
  },
  {
    sentences: [
      'I spent last weekend visiting my grandparents in the countryside',
      'She spent a lot of money at the mall yesterday',
      'My family and I spent our summer vacation at the beach',
      'They spent three hours studying for the exam',
      'We spent most of the day cleaning the house',

      'He spent a few minutes talking to his boss before leaving the office',

      'Last night, I spent some time catching up on my favorite TV show',
      'They spent the entire morning planning the party',

      'My sister spent her birthday dinner with her friends at a fancy restaurant',
      'We spent our childhood playing in the park near our house',
    ],
    word: 'spent',
    mean: 'harcamak, geçirmek',
  },
  {
    sentences: [
      'Yesterday, I accidentally spilt my coffee all over my desk',
      'Last week, Tom spilt a glass of water on the floor',
      'She spilt her soup when she eats too quickly',
      'David frequently spilt his juice during the meal',
      'While I was drinking soda, I spilt some on my shirt',
      'My little sister spilt her paint all over the table yesterday',
      'On Saturday, he spilt a plate of spaghetti on his lap',
      'I often spilt milk when I pour it into a glass',
      'Last month, we spilt tea on the carpet and had to clean it up',

      'While she triee to pour herself a glass of wine, she spilt some',
    ],
    word: 'spilt',
    mean: 'dökmek, dökülmek, sızmak',
  },
  {
    sentences: [
      'I spun around three times at the playground yesterday',
      'She spun her favorite toy every evening before bed',
      'We spun the  whirligig during the holiday season last year',

      'The ballerina spun gracefully on her toes during the performance',
      'They spun the roulette wheel at the casino last week',

      'He spun the top with all his might and watched it spin for minutes',
      'I spun the bottle and it landed on my best friend at the party',
      'The cyclist spun their wheels as they raced down the hill',

      'The dancer spun in circles to the music at the wedding reception',
      'The DJ spun the record and the crowd danced all night',
    ],
    word: 'spun',
    mean: 'hızla dönmek, döndürmek',
  },
  {
    sentences: [
      'I got a good grade on my math test last week',
      'She got a promotion at work last month',
      'They got married two years ago',
      'We got to the concert on time last night',
      'He got a new car for his birthday',
      'The kids got to the cinema late yesterday',
      'I got a delicious cup of coffee this morning',
      'She got a fantastic gift from her friend last Christmas',
      'They got a great deal on their vacation last summer',
      'We got lost in the city last weekend',
    ],
    word: 'got',
    mean: 'almak, elde etmek, varmak, (up) kalkmak,(on well) anlaşmak',
  },
  {
    sentences: [
      'I gave my dog some treats yesterday',
      'She gave me a book for my birthday',
      'He gave a great speech at the conference last week',
      'They gave generously to the charity fundraiser',
      'We gave our parents a surprise visit over the weekend',
      'The teacher gave us a quiz on Monday',
      'The restaurant gave us complimentary dessert after our meal',
      'My neighbor gave me a ride to the airport last month',
      'The doctor gave me some medicine for my cold',
      'I gave a presentation at work twice last month',
    ],
    word: 'gave',
    mean: 'vermek',
  },
  {
    sentences: [
      'Last week, I went to the movies with my friends',
      'Yesterday, I went to the park and played basketball',
      'Every morning, I went for a run in the park',
      'On Saturday, I went shopping and bought a new dress',

      'Two days ago, I went to visit my grandparents and had a great time',
      'Last month, I went on a vacation to a beautiful beach',
      'Every weekend, I went swimming at the local pool',
      'Last year, I went on a school trip to a historical museum',

      'Yesterday evening, I went to a concert and enjoyed the live music',
      'Every evening, I went for a walk in the neighborhood',
    ],
    word: 'went',
    mean: 'gitmek',
  },
  {
    sentences: [
      'I ground the coffee beans yesterday morning',
      'She ground the spices for the recipe last night',
      'He ground his teeth when he was nervous',
      'My father ground his own coffee every morning',
      'The old mill ground the grains into flour years ago',
      'They ground the gears of the car while learning to drive',
      'We ground the chili peppers to make a spicy sauce',
      'She ground her own flour before buying it pre-made',
      'He ground the mirror carefully to achieve a smooth surface',
      'The coffee shop ground fresh coffee beans for their customers',
    ],
    word: 'ground',
    mean: 'öğütmek, bilemek',
  },
  {
    sentences: [
      'I grew up in a small village in the countryside',
      'I grew tomatoes in my backyard two years ago',
      'Last summer, my younger sister grew taller than me',

      'Every spring, wildflowers grew in abundance in the nearby meadow',
      'When I was a child, I grew sunflowers in my school garden',
      'Last year, my family grew our own vegetables to save money',
      'During my teenage years, I grew closer to my best friend',
      'In the past, our town grew rapidly due to industrialization',
      'Every morning, I grew more excited to start my new job',

      'When I visited my grandparents, I always grew nostalgic for my childhood days',
    ],
    word: 'grew',
    mean: '(bitki vb) yetişmek, yetiştirmek',
  },
  {
    sentences: [
      'Yesterday, we hung up the new curtains in the living room',
      'I rarely hung out with my friends after school last year',

      'Yesterday, I hung my wet clothes on the clothesline to dry in the sun',
      'He often hung pictures on the wall to decorate his bedroom',
      'Last weekend, they hung a new sign outside their shop',

      'After the party, we hung balloons from the ceiling to make the room festive',

      'My brother frequently hung his coat on the door handle instead of the coat rack',

      'They always hung the American flag outside their house on Independence Day',
      'During the winter, she hung lights on the balcony railing',
      'I sometimes hung my artwork on the fridge for everyone to see',
    ],
    word: 'hung',
    mean: 'asmak, asılmak',
  },
  {
    sentences: [
      'I had a delicious breakfast yesterday',
      'She had a great time at the party last night',
      'We had a productive meeting last week',
      'He had a lot of fun on his vacation',
      'They had a wonderful dinner at the new restaurant',
      'The students had a difficult test yesterday',
      'My sister had a successful job interview last month',
      'We had a fantastic time at the concert on Saturday',
      'The team had a challenging match last week',
      'I had a headache this morning',
    ],
    word: 'had',
    mean: 'sahip olmak, yemek içmek, yapmak',
  },
  {
    sentences: [
      'Yesterday, I heard a beautiful song on the radio',
      'Last week, I heard my favorite band play live in concert',
      'She heard a strange noise coming from the basement last night',

      'On my vacation, I heard the sound of crashing waves at the beach',
      'During the storm, we heard thunder and saw lightning',
      'Last night, I heard a loud noise coming from the next room',
      'Last month, I heard a rumor about my favorite celebrity',

      "Usually, I heard the sound of laughter when I'm with my friends",

      'I often heard the sound of rain hitting against my window during storms',

      'Yesterday, as I walked through the forest, I heard the rustling of leaves under my feet',
    ],
    word: 'heard',
    mean: 'duymak, işitmek',
  },
  {
    sentences: [
      'Yesterday, she hid behind the couch when her friends came over',

      'Last week, the children hid in the backyard during the game of hide-and-seek',
      'After school, he often hid his homework from his parents',
      'Every day, the squirrel hid its acorns in the tree trunk',

      'On the beach, they frequently hid under their umbrellas to avoid the sun',
      'During the storm, we hid in the basement for safety',
      'Last night, the cat hid under the bed when it heard thunder',

      'Sometimes, he hid his feelings to protect himself from getting hurt',
      'When they played tag, the children often hid in the bushes',

      'On Saturdays, they hid in the library to read their favorite books',
    ],
    word: 'hid',
    mean: 'saklamak, saklanmak',
  },
  {
    sentences: [
      'Yesterday, he hit the ball very hard during the baseball game',

      'Last week, they hit the target perfectly during archery practice',

      'My friend hit the nail on the head when he gave me advice yesterday',
      "Every morning, the alarm clock hit seven o'clock sharp",
      'On her birthday, she hit the jackpot and won a big prize',
      'Last night, the storm hit our town and caused a lot of damage',
      'Every summer, my family hits the beach for a relaxing vacation',

      'Yesterday, I hit a home run in the softball game and helped my team win',

      'After a long day at work, he hit the gym to relieve stress and stay healthy',

      'Last month, they hit the road and went on a memorable road trip across the country',
    ],
    word: 'hit',
    mean: 'vurmak, çarpmak, uğramak',
  },
  {
    sentences: [
      'She held her baby gently in her arms',
      'He held a colorful balloon during the parade',
      'The teacher held the book and read to the students',
      'We held hands while walking in the park',
      'The waiter held a tray with glasses of water',
      'They held a meeting in the conference room',
      'I held my friend’s birthday gift tightly',
      'The firefighter held the hose to put out the fire',
      'She held the umbrella to stay dry in the rain',
      'He held the flag during the national anthem',
    ],
    word: 'held',
    mean: 'tutmak,tutturmak, yapmak',
  },
  {
    sentences: [
      'Yesterday, I hurt my leg while playing football',
      'I frequently hurt myself while cooking',

      'Last week, my sister accidentally hurt her hand while gardening',
      'I hurt my ankle two days ago when I slipped on the stairs',
      'My friend hurt his back last month while lifting heavy boxes',

      'I hurt my finger this morning when I slammed it in the car door',
      'I often hurt my knees when running on uneven surfaces',
      'Last year, I hurt my wrist while skateboarding in the park',

      'My brother hurt his shoulder yesterday during his workout at the gym',

      'I hurt my toe last night when I stubbed it against the furniture',
    ],
    word: 'hurt',
    mean: 'acıtmak, acımak',
  },
  {
    sentences: [
      'I input the data into the computer yesterday',
      'She input the information carefully last week',
      'He input the code correctly',
      'We input the numbers into the spreadsheet last month',
      'The team input the new strategy into action two days ago',
      'I input the login details quickly',
      'She input her ideas into the discussion regularly',
      'He input the commands into the system last night',
      'They input the feedback into the survey on time',
      'We input the changes into the report yesterday morning',
    ],
    word: 'input',
    mean: 'bilgisayara veri girmek',
  },
  {
    sentences: [
      'I kept my promise and finished my homework on time yesterday',
      'Tom always kept his room clean when he was a child',

      'We frequently kept in touch with each other after we moved away',

      'Last summer, we kept ourselves entertained by going to the beach every weekend',

      'She often kept the windows open to let fresh air circulate in her house',
      'The children kept asking me for more candy during the party',
      'Every morning, I kept waking up early to go for a run',

      'The team kept winning every match during their undefeated season',
      'We rarely kept any leftovers because everyone loved my cooking',

      'Despite the rain, they kept playing soccer in the park yesterday afternoon',
    ],
    word: 'kept',
    mean: 'saklamak, korumak, muhafaza etmek, devam etmek',
  },
  {
    sentences: [
      'Last night, I knelt down to pray before going to bed',
      'I often knelt in front of the altar when I was younger',
      'Yesterday, I knelt down to tie my shoelaces and they broke!',

      'After a long day of gardening, I knelt on the ground to take a break',

      'During the ceremony, the knights knelt before the king to swear their loyalty',
      'When I heard the gunshot, I quickly knelt for cover',

      'Every Sunday, the congregation knelt down during the church service',

      'As a sign of respect, the crowd at the concert knelt down when the national anthem played',

      'Every morning, I knelt beside my bed and said a quick prayer before starting my day"',

      'When the bride walked down the aisle, all the guests knelt in reverence',
    ],
    word: 'knelt',
    mean: 'diz çökmek',
  },
  {
    sentences: [
      'She knit a scarf last winter',
      'They knit socks for their family members two weeks ago',
      'He always knit in the evenings after work',
      'We knit a blanket for the baby last year',
      'She knit a hat for her sister on her birthday',
      'They knit a sweater for their dad last Christmas',
      'He knit every weekend when he was younger',
      'She knit a pair of gloves last month',
      'We knit matching scarves for our best friends last fall',
      "They knit a colorful blanket for their grandmother's birthday",
    ],
    word: 'knit',
    mean: 'örmek',
  },
  {
    sentences: [
      'Yesterday, I knew the answer to the quiz',
      'When I was younger, I knew how to play piano',

      'She frequently knew the right thing to say in difficult situations',
      'Last week, I knew the way to the new restaurant in town',
      'Every time we watched the movie, he knew all the lines',

      'When we were in school together, she knew all the math formulas',
      'He rarely knew when to stop talking',
      'Last night, I knew the name of the song on the radio',
      'My grandma always knew how to make the best cookies',
      'I often knew the lyrics to my favorite songs',
    ],
    word: 'knew',
    mean: 'bilmek, tanımak',
  },
  {
    sentences: [
      'She laid the book on the table',
      'He laid the blanket on the bed',
      'The hen laid an egg in the nest',
      'We laid the picnic blanket on the grass',
      'The builder laid bricks to build the wall',
      'They laid the foundation for the house',
      'I laid my keys on the kitchen counter',
      'The farmer laid seeds in the soil',
      'She laid out the ingredients for baking',
      'He laid the cards on the table for a game',
    ],
    word: 'laid',
    mean: 'yaymak, sermek, yumurtlamak',
  },
  {
    sentences: [
      'I led the meeting yesterday',

      'Sarah and I led the school group during the field trip last week',
      'He led his team to victory in the championship game',
      'The tour guide led us through the historical landmarks',

      'We led a successful fundraising campaign for the local charity in May',

      'She led the dance class last month and taught us some new moves',

      'They led the research project and presented their findings to the committee',

      'My grandfather led a peaceful protest in his community many years ago',

      'The teacher led the class in a fun science experiment on Wednesday',

      "The conductor led the orchestra in a magnificent performance of Mozart's Symphony No",
    ],
    word: 'led',
    mean: 'yönlendirmek, rehberlik etmek',
  },
  {
    sentences: [
      'I leant against the wall yesterday at the party',

      'He always leant on his friend for support during difficult times',
      'She frequently leant back in her chair while studying',

      'We often leant out of the car window to feel the wind on our faces',

      'They leant over the railing to get a better view of the concert',
      'The cat leant against my leg and purred happily',

      "The teacher leant forward and listened intently to the student's answer",

      'My grandparents leant in to give me a warm hug as I arrived home',

      'The little boy leant sideways to peek around the corner and see what was happening',

      'The tree branches leant downwards under the weight of the heavy snow',
    ],
    word: 'leant',
    mean: 'yana yatmak, yaslanmak',
  },
  {
    sentences: [
      'Last month, I leapt across the wide river without any hesitation',

      'Yesterday, I successfully leapt over the high hurdle during the race',

      'In the afternoon, I happily leapt into the refreshing pool to cool off',

      'Every morning, I eagerly leapt out of bed to start my day with energy',

      'This morning, I playfully leapt over the puddles on my way to work',

      'During my childhood, I fondly leapt around in the playground with my friends',

      'On Saturday, I excitedly leapt into the arms of my loved ones after a long absence',

      'Last week, I effortlessly leapt over the small fence to explore the neighboring garden',

      'Every weekend, I joyfully leapt into my favorite hobby of dancing',

      'Yesterday evening, I proudly leapt onto the stage to perform in front of a large audience',
    ],
    word: 'leapt',
    mean: 'sıçramak, üstünden atlamak',
  },
  {
    sentences: [
      'Yesterday, I learnt how to ride a bicycle',
      'Last week, I learnt a new recipe and cooked it for dinner',
      'Every day after school, I learnt English with my tutor',
      'In the summer, I learnt how to swim in the pool',

      'Last night, I learnt the multiplication tables for my math test',
      'On the weekend, I learnt how to play the guitar',
      'I frequently learnt about different cultures by reading books',

      'Throughout my childhood, I learnt how to ride various types of transportation',
      'On my vacation, I learnt how to surf in the ocean',
      'I learnt ballet when I was younger',
    ],
    word: 'learnt',
    mean: 'öğrenmek',
  },
  {
    sentences: [
      'I left the party early yesterday',
      'My friends and I left the cinema after watching the movie',
      "She left the office at sentence5 o'clock this evening",
      'He left the restaurant before I arrived',
      'We left the beach when it started to rain heavily',
      'They left the concert halfway through because they were tired',
      'The bus left the station on time yesterday morning',

      'I left my keys at home this morning and had to go back to get them',
      'Susan left her phone at the coffee shop yesterday',
      'My family and I left for our vacation last summer',
    ],
    word: 'left',
    mean: 'ayrılmak, bırakmak',
  },
  {
    sentences: [
      'I lent my friend some money last week',
      'My neighbor lent me his lawnmower yesterday',

      'We frequently lent our old textbooks to classmates during college',
      'She often lent her car to her sister when she needed it',
      'My parents never lent me their car when I was a teenager',
      'I only lent my phone to my brother once and he broke it',
      'The library lent books to students for free',
      'He rarely lent his tools to others because they were expensive',

      'Last month, she reluctantly lent her favorite dress to her friend for a party',

      'We occasionally lent our bicycle to our neighbors for a quick ride',
    ],
    word: 'lent',
    mean: 'ödünç vermek',
  },
  {
    sentences: [
      'Yesterday, I let my friend borrow my car for a few hours',

      'Last week, I let my sister use my computer to finish her assignment',

      'When I was on vacation, I let my neighbor take care of my plants',
      'On Saturday, I let my dog run freely in the park',
      'I let my brother use the bathroom first',

      'I often let my parents choose the restaurant we went to for dinner',
      'During the party, I let my friend DJ play her favorite songs',
      'Last night, I let my sister choose the movie we watched',

      'After finishing my work, I let myself relax and enjoy some free time',

      'Whenever I visited my grandparents, I let them spoil me with delicious homemade food',
    ],
    word: 'let',
    mean: 'izin vermek, bırakmak',
  },
  {
    sentences: [
      'She lay down on the grass to rest',
      'He lay in bed and read a book',
      'The cat lay in the sunbeam for warmth',
      'We lay on the beach and listened to the waves',
      'The dog lay by the fireplace to keep cozy',
      'They lay under the stars and talked',
      'I lay my head on the pillow and fell asleep',
      'The flowers lay in the vase on the table',
      'She lay still during the massage',
      'He lay on the couch and watched TV',
    ],
    word: 'lay',
    mean: 'uzanmak, yalan söylemek',
  },
  {
    sentences: [
      'Yesterday, I lit a candle to add some warmth to the room',
      'The streetlights lit us as the sun set in the evening',

      'She lit the fireplace to create a cozy atmosphere in the living room',

      'During the power outage, we lit some candles to see in the dark',
      'The lanterns lit the way through the garden at night',
      'He lit a match to start the campfire',

      'The city skyline beautifully lit with colorful lights during the festival',

      'I accidentally lit the wrong end of the sparkler during the celebration',
      'The lighthouse lit the way to guide ships safely to the harbor',

      'The Christmas tree lit the room with twinkling lights and ornaments',
    ],
    word: 'lit',
    mean: 'yakmak, yanmak, aydınlatmak',
  },
  {
    sentences: [
      'Last week, I lost my keys at the grocery store',
      'Yesterday, she lost her phone on the train',
      'My brother frequently lost his homework at primary school',
      'After the game, our team lost against the strong opponents',
      'I often lost my way when I traveled alone',
      'Last night, my friend lost her wallet while shopping',
      'Every summer, my family lost their sunglasses at the beach',

      'In the past, he lost his temper easily, but now he has learned to control it',
      'On Saturday, we lost the match against our rivals',

      'My sister always lost her patience when dealing with difficult customers at her previous job',
    ],
    word: 'lost',
    mean: 'kaybetmek, yenilmek',
  },
  {
    sentences: [
      'Yesterday, I made a delicious cake for my family',
      'Last week, she made a beautiful painting for her art class',
      'On Sunday, we made a decision to go camping next weekend',
      'He made his bed before leaving for work',

      'Yesterday afternoon, they made a mistake during their presentation',
      'Last month, we made a reservation at our favorite restaurant',

      'On Saturday, she made a promise to visit her grandparents next month',
      'Every morning, he made breakfast for his siblings',
      'Last night, we made plans to watch a movie at the theater',

      'Yesterday evening, they made an effort to clean the entire house',
    ],
    word: 'made',
    mean: 'yapmak, hazırlamak',
  },
  {
    sentences: [
      'She meant to apologize for her mistake',
      'He meant what he said during the argument',
      'The confusing sign meant “Exit” instead of “Entrance"',
      'We meant to arrive early, but the traffic delayed us',
      'They meant to express gratitude for the gift',
      'The word “kindness” meant compassion and generosity',
      'I meant my promise sincerely',
      'The red traffic light meant stop',
      'His silence meant disagreement',
      'The teacher’s feedback meant a lot to the student',
    ],
    word: 'meant',
    mean: 'anlamına gelmek, kast etmek, istemek',
  },
  {
    sentences: [
      'I met my friend yesterday at the park',
      'She often met her colleagues for lunch during her break',
      'We frequently met at the library to study for exams',
      'Jack and I met at the airport last week',
      'They met their grandparents every Sunday for dinner',
      'Sarah met a famous actor at the movie premiere last month',
      'He rarely met new people at social events',

      'My parents met in college and have been married for sentence30 years',

      'My sister and I met our cousins at the family reunion last summer',

      'The students often met their teacher after school for extra help',
    ],
    word: 'met',
    mean: 'karşılaşmak, tanışmak, karşılamak',
  },
  {
    sentences: [
      "Last night, I misheard my friend's name and called her by the wrong name",

      "A week ago, I misheard my boss's instructions and ended up making a mistake at work",
      "I misheard people when I'm in a noisy environment",

      'Yesterday, I misheard the lyrics to my favorite song and sang the wrong words',

      "During the meeting, I misheard one of my colleague's suggestions and had to ask for clarification",
      'Because I was tired, I misheard things more often',

      "Last month, I misheard my partner's phone number and had to ask them to repeat it",

      'Occasionally, I misheard my alarm clock in the morning and oversleep',

      "Last weekend, I misheard my friend's plans and ended up going to the wrong restaurant",

      'Despite misheard some of the details, I was able to understand the main idea of the presentation',
    ],
    word: 'misheard',
    mean: 'yanlış duymak',
  },
  {
    sentences: [
      'She misled me about the location of the meeting yesterday',
      'They misled us by the false advertising last week',

      'He repeatedly misled his employees about their chances of promotion',

      'The politician frequently misled the public during his campaign',

      'The teacher knowingly misled the students on the exam questions',

      'They consistently misled their customers by providing inaccurate information',
      'It was disappointing to learn that the news article misled us',

      "The salesperson inadvertently misled the customer about the product's features",

      'Despite his promises, he ultimately misled us about his intentions',

      "The company's advertisements deliberately misled and made claims to attract customers",
    ],
    word: 'misled',
    mean: 'saptırmak, yanıltmak, yanlış yönlendirmek',
  },
  {
    sentences: [
      'Yesterday, I misread the instructions and ended up cooking the meal for too long',
      'Last week, I misread the map and got lost in the city',

      'I rarely misread text messages, but this time, I misunderstood what my friend was trying to say',

      'Two months ago, I misread the schedule and missed my flight to Spain',

      'Sometimes I misread words on the menu, but I always ask the waiter to clarify it for me',

      'Last night, I misread the time and showed up to the meeting an hour early',

      'Luckily, I misread the price tag and got the jacket I wanted for half the price',

      'I always double-check my work to be sure but I misread any critical information last week',

      'Last semester, I misread the exam question and answered it incorrectly',

      'Occasionally, I misread the signals people give me, but I try to communicate clearly to avoid misunderstandings',
    ],
    word: 'misread',
    mean: 'yanlış okumak',
  },
  {
    sentences: [
      "Last night, I mistook my friend's house for my own and rang the wrong doorbell",
      'She mistook the time of the meeting and arrived an hour early',

      'During the game, he mistook his teammate for an opponent and passed the ball to the wrong person',

      'I mistook salt for sugar while baking cookies, and they turned out too salty',
      'The hiker mistook the trail markers and got lost in the forest',

      "He mistook the professor's office hours and went to meet him when he wasn't there",
      'Sarah mistook my brother for me because they look very similar',

      'The tourist mistook the local currency and had trouble paying for the souvenirs',
      'I mistook the bus stop and had to walk back to the correct one',

      'The teacher kindly corrected the student when he mistook the capital of France during the geography quiz',
    ],
    word: 'mistook',
    mean: 'yanlış anlamak, karıştırmak',
  },
  {
    sentences: [
      "Yesterday, I misunderstood my friend's instructions for the assignment",

      "Last week, I frequently misunderstood the teacher's explanation in math class",
      'Every time the phone rang, I misunderstood who was calling me',

      'Unfortunately, I often misunderstood the directions while driving to the new city',

      'On Friday, I completely misunderstood the plot of the movie and got confused',

      'When I visited my grandparents, I occasionally misunderstood their stories from the past',

      "In the past, I sometimes misunderstood my sister's jokes and took them seriously",

      "During the meeting, I mistakenly misunderstood my colleague's suggestion and disagreed",

      "In the past month, I rarely misunderstood my boss's instructions for the project",

      'Yesterday, I briefly misunderstood the time the concert started and arrived late',
    ],
    word: 'misunderstood',
    mean: 'yanlış anlamak',
  },
  {
    sentences: [
      'Last week, I mowed the lawn in my backyard',
      'Every Saturday, my father mowed the lawn in front of our house',
      'Yesterday, I mowed the grass in the park',

      'Two days ago, my brother and I mowed the fields near our neighborhood',
      "When I was younger, I mowed the neighbor's lawn every summer",
      'Last month, the gardener mowed the grass in the public gardens',
      'Every morning, the landscape company mowed the football field',
      'In the spring, my grandfather mowed the grass in the garden',
      'I mowed the lawn before the summer family barbecue',

      'After the heavy rainfall, the villagers took turns and mowed the flooded fields',
    ],
    word: 'mowed',
    mean: 'biçmek',
  },
  {
    sentences: [
      'My company outsold its competitors last quarter',

      'The new product line outsold the previous one within the first month',

      'He outsold all the other sales representatives in the region by far',

      'The bookstore outsold its inventory of the popular novel in a matter of days',

      'They were surprised when the limited edition merchandise outsold the regular items',
      'We outsold our fundraising goal by increasing our efforts',

      "The bakery outsold its usual amount of cakes on Valentine's Day",

      'Despite the rain, the street vendor outsold his inventory of umbrellas',
      'She quickly outsold her colleagues at the car dealership',

      'The new restaurant in town outsold all the other ones in its first weekend',
    ],
    word: 'outsold',
    mean: 'daha fazla satmak',
  },
  {
    sentences: [
      'I overcame my fear of heights last summer',
      'She often overcame difficult challenges in her career',
      'We successfully overcame the obstacles in our path',

      'He rarely overcame his procrastination and missed many deadlines',

      'The team triumphantly overcame a four-goal deficit in the final minutes of the game',

      'They frequently overcame language barriers while traveling abroad',

      'I eventually overcame my stage fright and performed in front of a large audience',
      'She occasionally overcame her shyness and spoke up in class',

      'We skillfully overcame the technical difficulties and completed the project on time',
      'He once overcame a serious illness and made a full recovery',
    ],
    word: 'overcame',
    mean: 'üstesinden gelmek',
  },
  {
    sentences: [
      'Yesterday, I overdid it at the gym and now my muscles are sore',

      'Last week, I overdid my studying and ended up feeling burned out',

      'I accidentally overdid the seasoning in the soup I made last night',
      'I overdid it with the chocolate and now I feel sick',

      'I overdid my spending last month, so I need to be more careful with my budget',
      'I overdid my cleaning and now my back is hurting',
      "I overdid it with the sunbathing and now I'm sunburned",

      'When I was in college, I overdid it with partying and neglected my studies',

      'Last summer, I overdid it with my gardening and ended up with blisters',

      "I overdid my workout yesterday and now I'm feeling really tired",
    ],
    word: 'overdid',
    mean: 'abartmak',
  },
  {
    sentences: [
      'Yesterday, I overate at the party and felt sick afterwards',

      'On my vacation, I frequently overate at the all-you-can-eat buffet',
      'Last week, we overate when we visited our favorite restaurant',

      'Every Friday, we overate at our team lunch when we lived in the USA',

      'During the holiday season, I often overate due to all the delicious food in the hotel',
      'Once a month, I overete at the family gathering as a child',
      'In the past, I occasionally overate when I felt stressed',
      'When I was younger, I overate at birthday parties',

      "Last night, I accidentally overate at dinner and couldn't sleep well",
      'On special occasions, I overate tasty treats',
    ],
    word: 'overate',
    mean: 'aşırı yemek',
  },
  {
    sentences: [
      'Yesterday, I overheard the juiciest gossip while I was walking to the store',

      'Last week, I overheard my neighbors talking about their vacation plans',

      'She overheard her coworkers discussing the new project during the lunch break',

      'I overheard my sister telling her friend about her exciting weekend',
      'Last night, I overheard a couple arguing outside my window',

      'He overheard the teacher discussing the upcoming exam with a colleague',

      'I overheard the manager talking about possible promotions for the team members',

      'We overheard the children giggling and whispering in the next room',

      'She overheard her parents planning a surprise party for her birthday',

      'When I was in the library, I overheard two students talking about an interesting book',
    ],
    word: 'overheard',
    mean: 'kulak misafiri olmak',
  },
  {
    sentences: [
      'Last month, I overpaid my rent by mistake',
      'She overpaid for the cake at the bakery yesterday',
      'I realized I overpaid my phone bill last week',
      'My dad often overpaid for groceries when he was in a rush',

      'Every year, the company overpaid its taxes by a significant amount',
      'The customer overpaid for the item because of the high demand',
      'I never overpaid for a haircut until I visited that salon',

      'They overpaid for their hotel room because they booked it last minute',

      'My neighbor always overpaid for her car repairs at that mechanic',

      'I overpaid for that concert ticket once I saw how empty the venue was',
    ],
    word: 'overpaid',
    mean: 'fazla ödemek',
  },
  {
    sentences: [
      'I overrode the computer system yesterday',
      'She always overrode my decisions in the past',
      'He overrode my concerns and went ahead with the plan',
      'We overrode the default settings on the machine last week',

      'The manager overrode the automatic shutdown procedure last month',
      'They overrode the lock and entered the building',
      'The team overrode the safety protocols during the experiment',
      'She overrode her fear and took the leap',
      'I overrode the alarm and entered the building',
      'We overrode the veto and passed the bill',
    ],
    word: 'overrode',
    mean: 'umursamamak, geçersiz kılmak',
  },
  {
    sentences: [
      "The team quickly overran their opponents in last week's soccer match",

      'We overran our budget for the month and had to find ways to save money',

      "The teacher's lecture overran by sentence10 minutes because she had so much to cover",

      'The children overran the playground every afternoon after school',

      'I overran my daily step goal by walking an extra mile yesterday',
      'The meeting overran by half an hour due to a lively discussion',

      'Our picnic overran into the evening as we enjoyed the beautiful sunset',

      'The marathon runners overran the finish line with unstoppable determination',

      'His enthusiasm for the project overran his initial doubts and fears',
      "The crowd overran the streets to celebrate the team's victory",
    ],
    word: 'overran',
    mean: 'istila etmek, aşmak',
  },
  {
    sentences: [
      'I oversaw the project last week',
      'She oversaw the operation yesterday',
      'The manager oversaw the entire team last month',
      'He oversaw the construction of the building last year',
      'They oversaw the event last Friday',
      'The committee oversaw the budget last quarter',
      'I oversaw the production process during my internship',
      'She oversaw the renovation of the house two weeks ago',
      'The supervisor oversaw the training session last Monday',
      'He oversaw the implementation of the new policy last semester',
    ],
    word: 'oversaw',
    mean: 'göz kulak olmak, denetlemek',
  },
  {
    sentences: [
      'I overslept last night and missed my morning class',
      'He frequently overslept when he was in high school',
      'We seldom overslept during our vacation last summer',
      'Jenny rarely overslept when she had early morning meetings',
      "The alarm didn't ring, so I overslept and was late for work",

      'They occasionally overslept on weekends and enjoyed a lazy morning',

      'My brother always overslept on school days and had to rush to catch the bus',

      'She overslept at first, but now she sets multiple alarms to wake up on time',

      'Last week, I overslept and had to skip breakfast to catch my flight',
      'We never overslept when we were on a tight schedule',
    ],
    word: 'overslept',
    mean: 'uyuya kalmak',
  },
  {
    sentences: [
      'I overtook the slow car on the highway yesterday',
      'She overtook her classmates in the race last week',
      'We overtook the other team in the final minutes of the game',
      'The cyclist overtook the other riders at the last turn',
      'He overtook me in the marathon after the halfway point',
      'They overtook the leading company in sales last month',
      'The race car overtook the competition on the straightaway',

      'The team overtook their rivals in the standings after a string of victories',
      'She overtook her personal best time in the sentence100m dash',

      'The train overtook the slow-moving freight train on the tracks',
    ],
    word: 'overtook',
    mean: 'yetişip geçmek, sollamak',
  },
  {
    sentences: [
      'Yesterday, I spit out my gum after chewing it for hours',

      'Last week, I accidentally spit while talking and it was embarrassing',

      "When I was a child, I often spit out my vegetables when my parents weren't looking",
      'After tasting the sour lemon, I immediately spit it out',

      'I never liked the taste of black coffee, so I always spit it out after trying it',

      'While playing baseball, I spit out my gum before stepping up to bat',

      "Whenever I ate something that I didn't like, I spit it out quickly",
      'Once, I spit out my drink because it was too hot',
      'Once in a while, I accidentally spit while laughing too hard',

      "The last time I tried a new food, I spit it out because I didn't like it",
    ],
    word: 'spit',
    mean: 'tükürmek',
  },
  {
    sentences: [
      'Yesterday, I split my time between work and studying',
      'I split a delicious sandwich with my friend last week',

      'He always split the bill with his colleagues when they went out for lunch',

      'We split up the tasks equally in our group after I became the project manager',
      'She split her free time between reading and practicing yoga',
      'When he was younger, he often split firewood for his family',

      'I split my attention between listening to music and doing my homework before I decided not to listen while studying',

      'Mandy split her meals into small portions before she served them',
      'They split the cost of renting a vacation home last summer',

      'Before starting the project, we split into two teams and assigned specific tasks',
    ],
    word: 'split',
    mean: 'yarmak, bölmek',
  },
  {
    sentences: [
      'Yesterday, I spoilt my little sister by buying her a new toy',
      'Last week, my mom spoilt me with my favorite dessert',
      'During the party, we spoilt ourselves with food and drinks',
      'He spoilt his chance to win the game by making a silly mistake',

      'My dad once spoilt our vacation by forgetting the hotel reservations',
      'Yesterday morning, I spoilt my breakfast by burning my toast',

      'Last month, I spoilt my clothes by accidentally spilling sauce on them',
      'He spoilt her mood by being rude to her during the meeting',

      'Despite the rain, we spoilt our date night by watching a movie at home',
      'Last year, I spoilt my diet by eating too much junk food',
    ],
    word: 'spoilt',
    mean: 'berbat etmek, bozmak, şımartmak',
  },
  {
    sentences: [
      'Yesterday, I spread butter on my toast for breakfast',
      'I spread jam on my toast this morning',
      'Last week, my mom spread the picnic blanket in the park',
      'On Friday night, Sarah spread the news about her engagement',

      'We always spread mayonnaise on our sandwiches before eating them',

      'In the afternoon, the kids spread out their toys all over the living room',

      'Last summer, we spread sunscreen on our bodies before going to the beach',
      'Last night, the cat spread out on the couch and sleep',
      'Paul spread his papers across the table when he studied',
      'Over the weekend, the flu spread rapidly in our community',
    ],
    word: 'spread',
    mean: 'yaymak, yayılmak',
  },
  {
    sentences: [
      'The flowers sprang up after the rain',
      'He sprang out of bed when the alarm went off',
      'The cat sprang onto the windowsill to catch a bird',
      'We sprang a surprise party for her birthday',
      'The squirrel sprang from branch to branch in the tree',
      'They sprang into action when they heard the fire alarm',
      'I sprang the lock on the old treasure chest',
      'The jack-in-the-box sprang open, surprising the child',
      'She sprang forward to catch the falling vase',
      'The athlete sprang over the high hurdle effortlessly',
    ],
    word: 'sprang',
    mean: 'ortaya çıkıvermek, yerden bitmek',
  },
  {
    sentences: [
      'Yesterday, I stood in line for tickets to the concert',
      "She stood by her decision and didn't change her mind",
      'They always stood together during difficult times',
      'Last week, we stood in awe of the beautiful sunset',
      'I often stood at the bus stop waiting for the bus to arrive',

      'The teacher stood at the front of the classroom and explained the lesson',
      "He stood up for his beliefs and didn't back down",

      'Every morning, she stood in front of the mirror to do her makeup',
      'My parents always stood behind me and supported my decisions',

      'The team stood united after their victory in the championship game',
    ],
    word: 'stood',
    mean: 'ayakta durmak',
  },
  {
    sentences: [
      'Yesterday, I stole a candy from the store',
      'Last week, my brother stole my headphones',
      'I often stole a glance at him during the concert',
      'Two days ago, I stole some time to relax and read a book',

      'Every Friday, my friends and I stole away to the beach for a picnic',
      'Last night, I stole a kiss from my partner',
      'During the party, someone stole my wallet',

      'In the past, she stole the show with her incredible dance moves',
      'On Monday, my neighbor stole my newspaper by mistake',
      'Several times, I stole a moment to enjoy the beautiful sunset',
    ],
    word: 'stole',
    mean: 'çalmak',
  },
  {
    sentences: [
      'She stuck the stamp on the envelope',
      'He stuck the poster to the wall with tape',
      'The glue stuck the pieces of paper together',
      'We stuck the photo in our scrapbook',
      'The magnet stuck the note to the fridge',
      'They stuck the label on the gift box',
      'I stuck the drawing on the classroom board',
      'The sticker stuck to the notebook cover',
      'She stuck the needle into the fabric',
      'He stuck the straw into the juice box',
    ],
    word: 'stuck',
    mean: 'yapışmak, yapıştırmak, sadık kalmak',
  },
  {
    sentences: [
      'The bee stung me on the arm',
      'She accidentally stung herself with a nettle leaf',
      'The wasp stung the picnic-goer near the sandwich',
      'He screamed when the scorpion stung his foot',
      'The jellyfish stung the swimmer in the ocean',
      'The mosquito stung my leg during the night',
      'The hornet stung the gardener while he was pruning',
      'Be careful not to sting yourself on the rose thorns',
      'The ant stung my finger when I touched its nest',
      'The pain from the bee’s sting lasted for hours',
    ],
    word: 'stung',
    mean: 'sokmak, arı yılan vs. ısırmak, acıtmak',
  },
  {
    sentences: [
      'The garbage stank after sitting in the sun all day',
      'The old sneakers stank up the entire room',
      'The fish market stank of seafood',
      'The spoiled milk stank when I opened the carton',
      'The bathroom stank after someone forgot to flush',
      'The gym locker room stank of sweat',
      'The compost pile stank from decomposing food',
      'The dirty socks stank in the laundry basket',
      'The sewer drain stank when it rained',
      'The skunk sprayed, and the whole area stank for hours',
    ],
    word: 'stank',
    mean: 'pis kokmak',
  },
  {
    sentences: [
      'The lightning struck the tall tree during the storm',
      'She accidentally struck her finger with the hammer',
      'The clock tower struck twelve at midnight',
      'He struck the ball with his foot during the game',
      'The match struck against the rough surface and lit up',
      'They struck up a conversation at the bus stop',
      'I struck a deal with the seller for a lower price',
      'The idea struck me suddenly while walking',
      'She struck the nail to hang the picture frame',
      'The bell struck to signal the end of class',
    ],
    word: 'struck',
    mean: 'vurmak, çarpmak, grev yapmak',
  },
  {
    sentences: [
      'I strove to finish my homework before dinner yesterday',
      'She strove to improve her grades in math',
      'We strove to meet our sales targets last year',

      'He rarely strove to be the center of attention in social situations',
      'They strove to create a peaceful atmosphere in their home',
      'The team strove to win the championship last season',
      'I strove to overcome my fear of public speaking',
      'She strove to wake up early on weekends',
      'We strove to provide excellent customer service',
      'He tirelessly strove to become a better musician',
    ],
    word: 'strove',
    mean: 'çalışmak, çabalamak',
  },
  {
    sentences: [
      'She swore to tell the truth in court',
      'He accidentally swore when he dropped his phone',
      'The sailor swore loudly during the storm',
      'We swore to keep the secret safe',
      'The angry driver swore at the other car',
      'They swore allegiance to their country',
      'I swore I would never eat that spicy dish again',
      'She swore off sweets after the dentist visit',
      'He swore by his lucky charm',
      'The witness swore on the Bible before testifying',
    ],
    word: 'swore',
    mean: 'küfretmek, yemin etmek',
  },
  {
    sentences: [
      'Yesterday, I swept the floor in my bedroom',
      'Every Saturday, my mom swept the front porch',
      'Last week, my little sister swept the kitchen after dinner',
      'Two days ago, the janitor swept the hallways at school',
      'On Tuesday, my dad swept the leaves from the driveway',
      'Last month, the cleaning lady swept the entire house',
      'In the evening, she always swept the dust off the bookshelves',
      'My brother rarely swept the backyard, but yesterday he did it',

      'Yesterday morning, our neighbor swept the stairs in our apartment building',

      "I swept the garage every Sunday, but last weekend I didn't have time",
    ],
    word: 'swept',
    mean: 'süpürmek',
  },
  {
    sentences: [
      'Her ankle swelled after she twisted it',
      'The river swelled with heavy rain',
      'His pride swelled when he received the award',
      'The injured area swelled and turned red',
      'The crowd swelled as more people arrived',
      'The musician’s heart swelled with joy during the performance',
      'The balloon swelled until it burst',
      'The storm clouds swelled ominously',
      'The infection made her finger swell',
      'His eyes swelled from crying',
    ],
    word: 'swelled',
    mean: 'şişmek, kabartmak',
  },
  {
    sentences: [
      'Last summer, I swam in the ocean every day',
      'Yesterday, I swam in the pool with my friends',
      'I swam in the lake every weekend when I was a child',
      'Two weeks ago, I swam in the river for the first time',
      'Last night, I swam for an hour to relax after a long day',

      "During my vacation, I swam in the hotel's rooftop pool every morning",
      'On Sundays, I usually swam in the local community center',

      'Yesterday evening, I quickly swam a few laps before it started to rain',
      'During the summer holidays, I often swam in the nearby beach',
      'The dog swam after the stick thrown into the lake',
    ],
    word: 'swam',
    mean: 'yüzmek',
  },
  {
    sentences: [
      'The children swung on the playground swings',
      'He swung the baseball bat and hit the ball',
      'She swung her arms while dancing',
      'The pendulum clock swung back and forth',
      'They swung from the tree branches like monkeys',
      'I swung the door open to enter the room',
      'The wind swung the garden gate shut',
      'She swung the rope over the river to cross',
      'The ship swung with the waves during the storm',
      'The little girl swung on the tire swing in the park',
      // sentence11: 'He swung the hammer to drive the nail into the wood',
    ],
    word: 'swung',
    mean: 'sallamak, sallanmak',
  },
  {
    sentences: [
      'Yesterday, I took my dog for a walk in the park',
      'Last week, my brother took the day off work to go fishing',
      'I often took the bus to school when I was younger',
      'We took a lot of photos on our vacation in Hawaii',
      'At the party, I took a piece of cake and a glass of champagne',
      'He took a risk and invested his money in a new startup',

      'When I was studying abroad, I took a cooking class to learn how to make paella',

      'My friend took me to her favorite coffee shop and we tried their special espresso drink',

      'They took their time to finish the project, but it turned out great in the end',

      'We took a trip to the beach last summer and swam in the ocean every day',
    ],
    word: 'took',
    mean: 'almak, götürmek',
  },
  {
    sentences: [
      'She taught English at the local school',
      'He taught me how to ride a bike',
      'The professor taught history to the students',
      'We taught our dog basic commands',
      'The piano teacher taught her students to play scales',
      'They taught swimming lessons at the community pool',
      'I taught my younger sister how to tie her shoelaces',
      'The coach taught soccer skills during practice',
      'She taught the children about recycling',
      'He taught himself to play the guitar',
    ],
    word: 'taught',
    mean: 'öğretmek',
  },
  {
    sentences: [
      'I tore my shirt while playing football yesterday',
      'She often tore the pages of her book when she got angry',

      'Tom accidentally tore his pants while climbing the tree last week',

      'They frequently tore the wrapping paper on their presents during birthdays',
      'My little sister tore her drawing in frustration',
      "Lisa's dog tore her favorite teddy bear yesterday",
      'The wind tore the leaves off the trees last autumn',

      'The children tore open their Christmas presents with excitement',

      'He tore the paper into small pieces before throwing it in the bin',
      'Jane tore up when she received the award for her performance',
    ],
    word: 'tore',
    mean: 'yırtmak, (up) ağlamak',
  },
  {
    sentences: [
      'Yesterday, I told my best friend a secret',
      'I always told my mom when I arrived home from school',
      'Last week, he told me a funny joke',

      'Every morning, she told her husband she loved him before leaving for work',
      'During the meeting, the boss told us about the new project',
      'I rarely told lies when I was a child',
      'They told us to hurry up if we wanted to catch the bus',
      'He told me that he enjoyed playing basketball in high school',
      'Yesterday, she told me she had passed her driving test',
      'I told my colleagues that I would be on vacation next week',
    ],
    word: 'told',
    mean: 'söylemek, anlatmak',
  },
  {
    sentences: [
      'I thought about my future career every day last week',
      'Sarah often thought about her family while studying abroad',

      'We thought of a solution to the problem after hours of brainstorming',

      'Yesterday, he thought of calling his best friend from childhood',
      'She rarely thought about her past mistakes until today',

      'Tom thought he had left his phone at home, but it was actually in his bag',
      'My parents always thought highly of my academic achievements',

      'Last month, the team thought of a new strategy to increase sales',

      'They thought their vacation would be relaxing, but it turned out to be quite stressful',

      'Tina thought she had seen the movie before, but it was actually a different one',
    ],
    word: 'thought',
    mean: 'düşünmek, sanmak',
  },
  {
    sentences: [
      'The plant throve in the sunny garden',
      'He changed his diet, and his health throve',
      'The business throve during the busy season',
      'We throve in the supportive community',
      'The coral reef throve in clear waters',
      'They throve on hard work and determination',
      'I throve in my new job role',
      'The forest throve with diverse wildlife',
      'She recovered from illness and throve afterward',
      'The company throve under strong leadership',
    ],
    word: 'throve',
    mean: 'iyiye gitmek, başarılı olmak',
  },
  {
    sentences: [
      'I threw the ball to my friend yesterday',
      'She threw the garbage in the bin this morning',
      'We threw a surprise party for him last week',
      'He threw the paper airplane high up in the sky',
      'The athlete threw the javelin with great accuracy',
      'My dad threw a frisbee to our dog at the park yesterday',
      'They threw their old clothes in the donation box',
      'The chef threw the vegetables into the stir fry',
      'The children threw water balloons during the summer festival',
      'Sarah threw the dice and won the board game',
    ],
    word: 'threw',
    mean: 'atmak, fırlatmak',
  },
  {
    sentences: [
      'I unbound the book yesterday',
      'She frequently unbound her hair after work',

      'They always unbound their shoelaces before taking off their shoes',
      'He unbound his hands and escaped from the captors',

      'We sometimes unbound the bundle of papers to organize them better',

      'The librarian unbound the old newspapers for preservation purposes',
      'Sarah regularly unbound the stack of letters she had received',

      'The children eagerly unbound their presents on Christmas morning',

      'The magician effortlessly unbound the ropes around his assistant',
      'I rarely unbound my hair for special occasions',
    ],
    word: 'unbound',
    mean: 'çözmek, açmak, salmak',
  },
  {
    sentences: [
      'I understood the lesson yesterday',
      'The teacher explained the concept, and I quickly understood',
      'I always understood math problems easily when I was in school',
      'Last week, I understood the instructions for the experiment',

      'My sister always understood my feelings, even without me explaining',
      'I understood the movie plot when I watched it with subtitles',
      'I understood the concept after studying it for a few hours',
      'Whenever I had doubts, my mom understoond',
      'Yesterday, I finally understood how to solve the puzzle',
      'I understood the novel after reading it twice',
    ],
    word: 'understood',
    mean: 'anlamak',
  },
  {
    sentences: [
      'I undertook the task of cleaning my room yesterday',

      'Last week, I undertook the responsibility of organizing the class party',
      'She undertook a challenging project for her final year thesis',

      'They undertook a journey to visit their grandparents over the weekend',

      'On Saturday, Tom undertook the difficult task of repairing the car engine',

      'Sarah undertook the role of team captain during the championship match',

      'Last month, I undertook a new hobby of learning to play the guitar',

      'He undertook the task of painting the house before the arrival of the guests',

      'Yesterday, John undertook the challenge of climbing the highest mountain in the region',

      "We undertook the responsibility of taking care of our neighbor's pets while they were on vacation",
    ],
    word: 'undertook',
    mean: 'üzerine almak, üstlenmek',
  },
  {
    sentences: [
      'Yesterday, I undid the knot in my shoelaces before putting on my shoes',

      'Last week, I undid all the work I had completed on my project because of a mistake',

      'Last night, I undid the buttons on my shirt before getting into bed',
      'I often undid my braids before going to sleep',

      "Yesterday, I undid the damages caused by the previous night's storm",

      'Last Saturday, I undid the zipper on my backpack to get my phone out',

      'I frequently undid the packaging of my snacks before consuming them',

      'Earlier today, I undid the screws on my chair to adjust its height',
      'she undid her hair and let it breathe',

      'Last year, I undid all my prior assumptions about a particular topic after doing extensive research',
    ],
    word: 'undid',
    mean: 'çözmek, yok etmek, yaptığını geri almak',
  },
  {
    sentences: [
      'Yesterday, she upheld her promise to help me with my project',
      'He always upheld his family traditions during the holidays',

      'Last week, they upheld their commitment to volunteer at the local shelter',

      'Every morning, I upheld my morning routine of stretching and meditation',

      'The company upheld their reputation for excellent customer service',

      'On Saturdays, she upheld her tradition of going for a long run in the park',

      'Every year, the school upheld its tradition of organizing a charity event',

      'Last night, he upheld his role as team captain by motivating his teammates to victory',

      'Throughout the years, our friendship upheld strong bonds of trust and loyalty',

      'Despite the challenges, they upheld their belief in themselves and achieved their goals',
    ],
    word: 'upheld',
    mean: 'desteklemek, sürdürmek, ayakta tutmak',
  },
  {
    sentences: [
      "I woke up at 7 o'clock this morning",
      "She woke up feeling refreshed after a good night's sleep",
      'We woke up early on Saturday to go for a hike',
      'The alarm clock woke me up every day at 6 am',
      'I woke up late yesterday and missed my bus to work',
      'He woke up suddenly to the sound of his phone ringing',
      'The smell of coffee woke me up with its pleasant aroma',
      'I woke up feeling excited for the day ahead',

      'She woke up with a smile on her face, knowing it was a beautiful day',
      'I woke up to the sound of birds chirping outside my window',
    ],
    word: 'woke',
    mean: 'uyanmak, uyandırmak',
  },
  {
    sentences: [
      'I wore a beautiful dress to the party last night',
      'She wore her favorite necklace on special occasions',
      'They wore matching outfits to school',
      'We wore our uniforms to work when we were at high school',
      'He wore a hat, even in the hot sun as a child',

      'The kids enthusiastically wore costumes for Halloween last year',
      'My sister and I wore matching pajamas when we were younger',

      'The fashion models confidently wore the latest trends on the runway',
      'John reluctantly wore a suit and tie to the wedding',

      'Jenny proudly wore her graduation cap and gown during the ceremony',
    ],
    word: 'wore',
    mean: 'giymek, takmak',
  },
  {
    sentences: [
      'Yesterday, I wove a beautiful scarf for my sister',
      'Last week, she often wove colorful ribbons into her hair',

      'Yesterday morning, the children wove intricate patterns with their colored pencils',
      'When I was younger, I often wove carpets on a small loom',

      'During the craft class, the kids wove paper strips to make colorful mats',

      'I wove a story about my imaginary adventures when I was a child',

      'Sarah wove a basket using willow branches during the nature workshop',
      'The bird wove its nest with small twigs',
      'We wove colorful bracelets at camp',
      'The spider wove a web in the corner of the window',
    ],
    word: 'wove',
    mean: 'dokumak, örmek',
  },
  {
    sentences: [
      'Last night, I wept uncontrollably after watching a sad movie',
      'I wept with joy when I received my exam results',
      'Yesterday, I wept softly while listening to a touching song',
      'Tom wept bitterly after losing his favorite toy',

      'The last time I watched a heartwarming video, I wept tears of happiness',
      'During her graduation ceremony, Mary wept tears of pride',
      'I wept uncontrollably for hours when my pet passed away',
      'When I read the heartfelt novel, I usually wept',
      'Last week, I wept with relief when I found my lost wallet',

      "Sarah wept tears of disappointment when she didn't get the job offer",
    ],
    word: 'wept',
    mean: 'gözyaşı dökmek',
  },
  {
    sentences: [
      'I wet my hair before shampooing it',
      'She wet the cloth to clean the table',
      'He wet his lips with his tongue',
      'The rain wet the streets last night',
      'We wet our feet in the lake',
      'You wet the brush before painting',
      'They wet the garden every evening',
      'The dog wet the floor after the bath',
      'She wet her new plants yesterday',
      'The boat wet the dock as it passed by',
    ],
    word: 'wet',
    mean: 'ıslatmak, işemek',
  },
  {
    sentences: [
      'I wound the clock before going to bed',
      'She wound the yarn into a ball',
      'He wound up the toy and it moved',
      'The road wound through the mountains',
      'We wound the ribbon around the gift',
      'You wound your watch every morning',
      'They wound the bandage around his arm',
      'The river wound through the valley',
      'She wound the scarf around her neck',
      'The cat wound itself around my legs',
    ],
    word: 'wound',
    mean: 'sarmak, dolamak',
  },
  {
    sentences: [
      'I won the lottery last weekend',
      'She won the spelling bee competition in her school',
      'They won the basketball championship in their league',
      'He won a gold medal in the swimming competition last summer',
      'We won the games during our soccer season',
      'The team won the match by scoring three goals',

      'My sister won a scholarship for her outstanding academic performance',

      'The company won a prestigious award for their innovative products',
      'Sarah won a trip to Paris in a radio contest last year',
      'I never won any bets in the casino',
    ],
    word: 'won',
    mean: 'kazanmak',
  },
  {
    sentences: [
      'I withdrew money from the bank yesterday',
      'She frequently withdrew cash from the ATM',
      'We always withdrew our savings before a big trip',
      'They often withdrew funds from their joint account',
      'He rarely withdrew money from his debit card',
      'The company withdrew its financial support last month',
      'I frequently withdrew coins from the piggy bank to buy candy',
      'My parents occasionally withdrew cash from the local branch',

      'She regularly withdrew money from the joint account without informing her spouse',
      'We sometimes withdrew funds from the online banking platform',
    ],
    word: 'withdrew',
    mean: 'geri çekilmek, para çekmek',
  },
  {
    sentences: [
      'The bridge withstood the strong winds',
      'Our tent withstood the heavy rain',
      'The old tree withstood many storms',
      'She withstood the cold with a warm coat',
      'He withstood the heat in the shade',
      'The building withstood the earthquake',
      'We withstood the noise during the concert',
      'You withstood the long wait patiently',
      'They withstood the challenge successfully',
      'The ship withstood the rough waves',
    ],
    word: 'withstood',
    mean: 'karşı koymak, direnmek',
  },
  {
    sentences: [
      'Yesterday, I wrote a thank-you note to my teacher',
      'Last week, I wrote a poem about love',
      'I wrote in my journal about my day',
      'On Monday, I wrote a letter to my best friend',
      'Usually, I wrote stories in English class',
      'Last night, I wrote a letter to Santa Claus',
      'Every morning, I wrote a to-do list for the day',
      'On my birthday, I wrote a wish list of gifts I wanted',
      'Sometimes, I wrote messages on sticky notes to remind myself',

      'In the evening, I wrote a message on a birthday card for my mom',
    ],
    word: 'wrote',
    mean: 'yazmak',
  },
];
