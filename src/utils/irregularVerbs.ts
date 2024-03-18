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
    sentence1: 'The sun arises every morning in the east',
    sentence2: "I always arise at 7 o'clock to start my day",
    sentence3: 'She rarely arises early on weekends because she likes to sleep',
    sentence4: 'They never arise before the alarm clock goes off',
    sentence5:
      'We usually arise with the sound of birds chirping outside our window',
    sentence6: 'He seldom arises before the crack of dawn',
    sentence7: 'Do you often arise feeling refreshed and energized?',
    sentence8: 'My grandparents usually arise before anyone else in the house',
    sentence9:
      'The students in our class sometimes arise late and rush to school',
    sentence10:
      'On special occasions, the entire family arises early to watch the sunrise',
    word: 'arise',
    mean: 'ortaya çıkmak',
  },
  {
    sentence1: "I wake up at 7 o'clock every morning",
    sentence2: 'She always wakes up feeling refreshed',
    sentence3: 'We usually wake up early on weekends',
    sentence4: 'The alarm clock wakes me up every day',
    sentence5: 'They never wake up late for school',
    sentence6: 'My cat always wakes me up at 6 am',
    sentence7: 'The sun wakes us up every day',
    sentence8: 'I wake up feeling motivated to start the day',
    sentence9: 'He rarely wakes up in a bad mood',
    sentence10: 'The sound of birds wakes me up in the morning',
    word: 'awake',
    mean: 'uyanmak, uyandırmak',
  },
  {
    sentence1: 'I am at home right now',
    sentence2: 'She is always very kind to everyone',
    sentence3: 'We are never late for class',
    sentence4: 'They are usually busy on Sundays',
    sentence5: 'He is often tired after work',
    sentence6: 'The cat is always hungry in the morning',
    sentence7: 'The children are rarely quiet during playtime',
    sentence8: 'The store is open every day of the week',
    sentence9: 'My parents are usually at work in the afternoon',
    sentence10: 'The students are always excited for the weekend',
    word: 'be',
    mean: 'olmak',
  },
  {
    sentence1: 'She bears the weight of her school bag every day',
    sentence2: 'The polar bear bears the cold Arctic climate',
    sentence3: 'He bears a lucky charm wherever he goes',
    sentence4: 'The tree bears colorful flowers in spring',
    sentence5: 'They bear gifts for their friend’s birthday',
    sentence6: 'The bridge bears the weight of passing cars',
    sentence7: 'She bears a resemblance to her older sister',
    sentence8: 'We bear the responsibility of keeping our room tidy',
    sentence9: 'He bears the noise from the construction site next door',
    sentence10: 'The library bears a sign saying “Silence, please',
    word: 'bear',
    mean: 'taşımak, tahammül etmek',
  },
  {
    sentence1:
      'Mike beats his opponents in chess every Saturday at the local club',
    sentence2:
      'My brother beats all his high scores in video games within just a few minutes',
    sentence3:
      'Jennifer rarely beats her alarm clock, as she always wakes up early in the morning',
    sentence4:
      'The champion beats his own record every year during the swimming competition',
    sentence5: 'The drummers beat their drums rhythmically during the parade',
    sentence6:
      'We often beat the rush hour traffic by leaving for work early in the morning',
    sentence7:
      'The heart beats at a steady pace, pumping blood throughout the body',
    sentence8:
      'Jack usually beats his friends at basketball whenever they play in the park',
    sentence9:
      'The clock in the living room beats loudly every hour, indicating the time',
    sentence10: 'Lisa beats her stress by practicing yoga and meditation daily',
    word: 'beat',
    mean: 'vurmak, dövmek, yenmek',
  },
  {
    sentence1:
      'I become more confident when I practice speaking English every day',
    sentence2: 'She becomes tired after working long hours',
    sentence3: 'They become best friends after meeting at a summer camp',
    sentence4: 'We become happier when we spend time with our loved ones',
    sentence5: 'He becomes nervous before giving a presentation',
    sentence6: 'The flowers become more beautiful as they bloom in the spring',
    sentence7: 'The cake becomes delicious when you add a pinch of cinnamon',
    sentence8: 'The weather becomes colder in the winter',
    sentence9: 'The baby becomes sleepy after playing for a long time',
    sentence10: 'Our skills become better with practice and determination',
    word: 'become',
    mean: 'olmak',
  },
  {
    sentence1: 'I begin my day by waking up early in the morning',
    sentence2: 'She always begins her meals with a bowl of soup',
    sentence3: 'We usually begin our meetings at 9 am sharp',
    sentence4: 'They never begin their homework until late in the evening',
    sentence5: 'The concert begins at 7:30 pm tonight',
    sentence6: 'He often begins his sentences with the phrase In my opinion',
    sentence7:
      'My parents always begin their weekend by going for a long walk in the park',
    sentence8: 'The teacher begins the class by reviewing the previous lesson',
    sentence9:
      'The race will begin in five minutes, so make sure you are ready',
    sentence10:
      'I begin my exercise routine with a stretching session to warm up',
    word: 'begin',
    mean: 'başlamak, başlatmak',
  },
  {
    sentence1: 'I often bend down to tie my shoes before leaving the house',
    sentence2: 'She usually bends her knees when picking up heavy objects',
    sentence3: 'He never bends the rules, no matter what the situation is',
    sentence4:
      'The dancer frequently bends her body in graceful movements during her performance',
    sentence5: "We sometimes bend the truth to spare someone's feelings",
    sentence6:
      'The gymnast always bends her body in incredible ways during her routine',
    sentence7: 'You rarely bend your elbows when doing push-ups',
    sentence8:
      'The workers always bend the metal bars to create the perfect shape for the project',
    sentence9:
      'The yoga instructor often teaches us how to bend our bodies for better flexibility',
    sentence10: 'I never bend the pages of my books, I always use bookmarks',
    word: 'bend',
    mean: 'eğmek, eğilmek, bükmek',
  },
  {
    sentence1: 'I always bet on my favorite football team to win the game',
    sentence2: 'He often bets on horse racing races at the weekend',
    sentence3: "She rarely bets on sports because she's not interested in them",
    sentence4: 'We sometimes bet on the outcome of reality TV shows',
    sentence5: 'They never bet more money than they can afford to lose',
    sentence6:
      'The students frequently bet among themselves on who will get the highest score in the test',
    sentence7: 'My grandmother usually bets on the lottery every week',
    sentence8:
      'The online gamblers always bet with caution and only invest a small amount',
    sentence9:
      'The local bookmaker occasionally bets with his customers to build rapport',
    sentence10:
      'I usually bet on the underdog to increase my chances of winning',
    word: 'bet',
    mean: 'bahse girmek',
  },
  {
    sentence1: 'I always bind my notebooks with colorful ribbons',
    sentence2: 'She rarely binds her hair in a ponytail',
    sentence3:
      'Every day, we bind the newspapers together before distributing them',
    sentence4:
      'He never binds his shoelaces properly, which is why he often trips',
    sentence5: 'The bookbinder always carefully binds the pages of the novel',
    sentence6: 'They usually bind their receipts in a folder to stay organized',
    sentence7:
      'On weekends, she often binds her scrapbook with decorative tapes',
    sentence8: 'I sometimes bind my thoughts in a journal to reflect on later',
    sentence9: 'The bakery always binds their bread with a distinctive tie',
    sentence10:
      'We occasionally bind our essays with a title page for a professional touch',
    word: 'bind',
    mean: 'bağlamak, yarayı sarmak',
  },
  {
    sentence1: "I always bite my nails when I'm nervous",
    sentence2: 'My dog bites his chew toy every morning',
    sentence3: "She rarely bites into spicy food because she doesn't like it",
    sentence4: 'He usually bites into a juicy apple for breakfast',
    sentence5:
      'We often bite into a delicious piece of chocolate cake after dinner',
    sentence6: "You occasionally bite your lip when you're concentrating",
    sentence7: 'They sometimes bite into a juicy burger for lunch',
    sentence8: 'The mosquito bites my skin every time I go camping',
    sentence9: "My sister never bites her tongue when she's talking",
    sentence10: 'The baby frequently bites on his teething toy',
    word: 'bite',
    mean: 'ısırmak, sokmak',
  },
  {
    sentence1: 'I bleed every time I accidentally cut myself',
    sentence2: "The patient's wound bleeds continuously",
    sentence3: 'My nose always starts to bleed when the weather gets too dry',
    sentence4: 'She often bleeds during her monthly cycle',
    sentence5: "Tom's nose bleeds occasionally due to allergies",
    sentence6: 'Dogs can bleed if they injure their paws on sharp objects',
    sentence7:
      'It rarely happens, but sometimes people can bleed from their ears',
    sentence8:
      "The color of the liquid coming out of the wound can indicate if it's bleeding heavily or not",
    sentence9: 'A small cut on your finger usually stops bleeding quickly',
    sentence10:
      'The child cried when his knee started to bleed after falling off his bike',
    word: 'bleed',
    mean: 'kanamak, içi sızlamak',
  },
  {
    sentence1: 'The wind blows fiercely in the middle of the ocean',
    sentence2: 'She blows out the candles on her birthday cake every year',
    sentence3: 'The referee blows the whistle to start the soccer game',
    sentence4: 'Every morning, he blows his nose before breakfast',
    sentence5: 'My hair always blows in the wind when I ride my bike',
    sentence6:
      'The construction worker blows the horn to signal the start of work',
    sentence7: 'The balloon blows up quickly with the help of a pump',
    sentence8: 'The little girl loves to blow bubbles with her bubble wand',
    sentence9: 'The dust blows around the room when I start to clean',
    sentence10: 'My neighbor always blows his grass clippings onto my lawn',
    word: 'blow',
    mean: 'esmek, üflemek',
  },
  {
    sentence1: 'She breaks her pencil accidentally during class',
    sentence2: 'The children break their toys when playing too roughly',
    sentence3: 'He breaks the silence by telling a funny joke',
    sentence4: 'The baker breaks the fresh bread into smaller pieces',
    sentence5: 'They break for lunch at noon every day',
    sentence6: 'The glass bottle breaks when it falls off the table',
    sentence7: 'She breaks the news gently to her friend',
    sentence8: 'We break for a short walk after working for hours',
    sentence9: 'He breaks the habit of biting his nails',
    sentence10:
      'The alarm clock breaks the morning quiet with its loud ringing',
    word: 'break',
    mean: 'kırmak, kırılmak, bırakmak',
  },
  {
    sentence1: 'Dogs breed once a year',
    sentence2: 'She breeds rabbits and sells them at the market every month',
    sentence3: 'The farm breeds cows and pigs for meat',
    sentence4: 'He breeds tropical fish in his aquarium',
    sentence5: 'The company breeds new varieties of vegetables every season',
    sentence6:
      'The school breeds all their own animals for their agriculture program',
    sentence7: 'My neighbor breeds racehorses and trains them every day',
    sentence8: 'They breed chickens for eggs and meat',
    sentence9: 'We breed cats and often have kittens available for adoption',
    sentence10:
      'The zoo breeds endangered species to help increase their population',
    word: 'breed',
    mean: 'yavrulamak, neden olmak, üretmek',
  },
  {
    sentence1: 'I bring my lunch to work every day',
    sentence2: 'She often brings her dog to the park in the afternoon',
    sentence3: 'He rarely brings his own computer to class',
    sentence4: 'They always bring a gift for the host when they go to a party',
    sentence5: 'We usually bring a bottle of wine when we visit friends',
    sentence6: 'The waiter brings us the menu as soon as we sit down',
    sentence7: 'My sister sometimes brings me coffee in bed on weekends',
    sentence8: 'You never bring your phone charger when you travel',
    sentence9:
      'The company policy states that employees must bring their ID cards to access the building',
    sentence10: 'The teacher always reminds us to bring our textbooks to class',
    word: 'bring',
    mean: 'getirmek',
  },
  {
    sentence1: 'The radio station broadcasts news every hour',
    sentence2: 'He broadcasts his show on social media every day',
    sentence3: "They always broadcast the weather report at six o'clock",
    sentence4:
      'The company broadcasts its weekly meetings via video conferencing',
    sentence5:
      'The local station broadcasts a variety of music throughout the day',
    sentence6:
      'The news anchor always broadcasts the headlines first thing in the morning',
    sentence7: 'She broadcasts her favorite music on her online channel',
    sentence8: 'They broadcast live sports events on television',
    sentence9: 'The weather report broadcasts the forecast for the week',
    sentence10: 'He broadcasts his podcast to listeners worldwide',
    // sentence11: 'The TV station broadcasts educational programs in the morning',
    // sentence12: 'The local radio broadcasts community announcements',
    // sentence14: 'She broadcasts her opinions on social media',
    // sentence15: 'They broadcast the concert live from the stadium',
    word: 'broadcast',
    mean: 'yayınlamak, yaymak',
  },
  {
    sentence1: 'I build a model airplane every Saturday',
    sentence2: 'She often builds sandcastles at the beach during summer',
    sentence3: 'We occasionally build forts in the living room',
    sentence4: 'He rarely builds puzzles because he finds them boring',
    sentence5: 'They always build a bonfire when they go camping',
    sentence6:
      'The construction workers usually build houses in this neighborhood',
    sentence7: 'My friend and I sometimes build snowmen after it snows',
    sentence8: 'The kids usually build blocks towers before bedtime',
    sentence9:
      'The company regularly builds new shopping malls in different cities',
    sentence10: 'My dad never builds furniture; he prefers to buy it pre-made',
    word: 'build',
    mean: 'inşa etmek, geliştirmek',
  },
  {
    sentence1: 'The candle burns silently in the dark',
    sentence2: 'I burn the toast almost every morning',
    sentence3: 'The sun burns brightly in the sky',
    sentence4: 'My skin burns easily in the sun',
    sentence5: 'She burns the incense every evening',
    sentence6: 'The fire burns slowly, warming the room',
    sentence7: 'He burns the leaves in the backyard every week',
    sentence8: 'The stove burns hot when I cook',
    sentence9: 'The wood burns quickly in the fireplace',
    sentence10: 'The paper burns easily when touched by a flame',
    word: 'burn',
    mean: 'yanmak, yakmak',
  },
  {
    sentence1: 'I burst out laughing every time I watch that comedy show',
    sentence2: 'My sister bursts into tears whenever she reads a sad story',
    sentence3: 'The balloon bursts quickly if you prick it with a needle',
    sentence4:
      'James, our neighbor, always bursts through the door without knocking',
    sentence5:
      'The children burst into applause when the magician finished his tricks',
    sentence6: 'The bubble bursts as soon as you touch it',
    sentence7:
      'The crowded room burst into laughter when the comedian told a joke',
    sentence8:
      'The flowers burst into bloom in the springtime, creating a beautiful sight',
    sentence9: 'The athlete burst across the finish line, winning the race',
    sentence10: '',
    word: 'burst',
    mean: 'patlamak, patlatmak',
  },
  {
    sentence1: 'I usually buy groceries every week at the supermarket',
    sentence2: 'She rarely buys new clothes because she prefers to save money',
    sentence3:
      "We sometimes buy takeout for dinner when we're too tired to cook",
    sentence4:
      'He always buys a cup of coffee on his way to work in the mornings',
    sentence5: 'They often buy tickets to concerts and enjoy live music',
    sentence6:
      'The teacher buys new books for the classroom every semester to update the materials',
    sentence7:
      'My parents never buy expensive gifts for birthdays; they prefer simple and thoughtful presents',
    sentence8:
      'We frequently buy snacks and drinks for movie nights with friends',
    sentence9:
      'She hardly ever buys magazines because she prefers to read books instead',
    sentence10:
      'The company regularly buys office supplies in bulk to save costs',
    word: 'buy',
    mean: 'satın almak',
  },
  {
    sentence1: "I catch the bus every morning at 8 o'clock to go to work",
    sentence2: 'She catches the train twice a week to visit her parents',
    sentence3: 'He always catches the ball during our soccer practice',
    sentence4: 'We usually catch a movie on Friday nights',
    sentence5: 'They often catch a cold during the winter months',
    sentence6: 'The teacher catches the students cheating on the exam',
    sentence7: 'My dog likes to catch the frisbee in the park',
    sentence8:
      'Sarah never catches the bus on time and is always late for class',
    sentence9:
      'The fisherman tries to catch a big fish every time he goes to the lake',
    sentence10: 'The police officer catches the thief and arrests him',
    word: 'catch',
    mean: 'tutmak, yakalamak, yetişmek',
  },
  {
    sentence1: 'I choose to eat breakfast every morning before starting my day',
    sentence2:
      'My sister chooses to go to the gym twice a week to stay healthy',
    sentence3:
      'We choose to watch a movie every Friday evening as a family tradition',
    sentence4:
      'He always chooses to wear casual clothes to work because he finds them more comfortable',
    sentence5: 'She chooses to read a book before going to bed every night',
    sentence6:
      'They usually choose to eat out at a restaurant on special occasions',
    sentence7:
      'I frequently choose to take a walk in the park during my lunch break to clear my mind',
    sentence8:
      'My mom often chooses to cook a delicious dinner for the whole family on Sundays',
    sentence9:
      'My best friend sometimes chooses to go on spontaneous road trips to explore new places',
    sentence10:
      'The students usually choose to study together in the library before important exams',
    word: 'choose',
    mean: 'seçmek',
  },
  {
    sentence1: 'I often cling to my childhood memories when I feel homesick',
    sentence2:
      'She rarely clings to negative thoughts and always looks for the silver lining',
    sentence3:
      "They sometimes cling to outdated technology because it's familiar to them",
    sentence4:
      "He usually clings to his mother's hand when they're in a crowded place",
    sentence5:
      'We frequently cling to our routines because they provide a sense of stability',
    sentence6: 'The baby constantly clings to his stuffed animal for comfort',
    sentence7:
      'You hardly ever cling to unrealistic hopes and are always grounded in reality',
    sentence8:
      'My pet cat occasionally clings to my leg when she wants attention',
    sentence9:
      'The climbers always cling to the rocks to maintain their balance during the ascent',
    sentence10:
      'Students often cling to their textbooks as a source of knowledge and guidance',
    word: 'cling',
    mean: 'yapışmak, sıkı sıkı tutmak, sarılmak',
  },
  {
    sentence1: 'I come to school every day',
    sentence2: 'She comes to visit her grandmother on Sundays',
    sentence3: "We come to the office at 9 o'clock every morning",
    sentence4: 'They come to the park with their friends in the afternoon',
    sentence5: 'The bus comes at 8:30 in the morning',
    sentence6: "He comes home from work at 6 o'clock",
    sentence7: 'The mail comes at noon',
    sentence8: 'The teacher comes to class early every day',
    sentence9: 'The cat comes home for dinner every night',
    sentence10: 'My parents come to see me on the weekends',
    word: 'come',
    mean: 'gelmek',
  },
  {
    sentence1: 'The movie ticket costs $10',
    sentence2: 'I like to buy things on sale because it costs less',
    sentence3: "I don't eat out often because it costs too much money",
    sentence4:
      'Public transportation is a good option because it costs less than owning a car',
    sentence5: "Learning a new language can cost time, but it's rewarding",
    sentence6:
      "It doesn't cost anything to enjoy a beautiful sunset or a walk in the park",
    sentence7: 'The new smartphone costs too much for my budget',
    sentence8: 'The concert tickets cost more on weekends',
    sentence9: 'She costs her parents a fortune in dance lessons',
    sentence10: 'They cost extra for express shipping',
    // sentence11: 'The hotel room costs less during off-peak seasons',
    word: 'cost',
    mean: 'mal olmak, etmek',
  },
  {
    sentence1: 'She cuts her hair every month at the salon',
    sentence2: 'My brother cuts the vegetables for dinner every evening',
    sentence3: 'We often cut coupons from the newspaper to save money',
    sentence4: "The barber cuts men's hair quickly and efficiently",
    sentence5: 'They rarely cut down trees in our neighborhood',
    sentence6: 'I always cut the cake into equal slices for everyone to enjoy',
    sentence7: 'He usually cuts the grass in the front yard on Saturdays',
    sentence8: 'She never cuts corners when it comes to quality in her work',
    sentence9: 'My sister sometimes cuts fabric to make beautiful dresses',
    sentence10: 'The chef cuts the steak into thin slices before serving',
    word: 'cut',
    mean: 'kesmek, kısmak',
  },
  {
    sentence1: 'I dig in my garden every weekend to plant new flowers',
    sentence2:
      "She usually digs a hole in the backyard every morning to bury her dog's bones",
    sentence3:
      'My brother digs a big trench for the sprinkler system once a year',
    sentence4:
      'They sometimes dig in the sand at the beach to build sandcastles',
    sentence5:
      'We often dig for buried treasure in our imaginary pirate adventures',
    sentence6: 'He never digs in the dirt because he is afraid of bugs',
    sentence7:
      'The construction workers dig deep holes to lay the foundation for the new building',
    sentence8: 'You rarely dig holes in the ground for planting seeds',
    sentence9:
      'The archaeologist diligently digs up ancient artifacts at the ancient ruins',
    sentence10:
      'My parents occasionally dig up the weeds in our vegetable garden to keep it neat and tidy',
    word: 'dig',
    mean: 'kazmak',
  },
  {
    sentence1: 'I dive into the pool every Sunday',
    sentence2: 'He dives with his friends at the beach on weekends',
    sentence3: 'She often dives into the deep end of the pool',
    sentence4: 'We rarely dive in the winter months',
    sentence5: 'They usually dive for seashells in the summer',
    sentence6: 'Do you dive in the ocean during your vacation?',
    sentence7: 'The instructor always dives to check the coral reef',
    sentence8: 'The kids never dive without adult supervision',
    sentence9: 'The professional divers regularly dive to inspect shipwrecks',
    sentence10: 'My brother sometimes dives for treasure in the lake',
    word: 'dive',
    mean: '(suya) dalmak',
  },
  {
    sentence1: 'I do my homework every day after school',
    sentence2: "She doesn't like to do the dishes",
    sentence3: 'Does he do his laundry every weekend?',
    sentence4: 'We usually do grocery shopping on Sundays',
    sentence5: "My parents don't do any exercise regularly",
    sentence6: 'Do you do yoga in the mornings?',
    sentence7: 'They do a lot of volunteer work in their free time',
    sentence8: 'My sister does her makeup before going out',
    sentence9: "He doesn't do any cooking, he always orders takeout",
    sentence10: 'I do my best to stay motivated at work',
    word: 'do',
    mean: 'yapmak, etmek',
  },
  {
    sentence1: 'I often draw pictures of animals in my free time',
    sentence2: 'She rarely draws because she prefers other hobbies',
    sentence3: 'We usually draw together on Sunday afternoons',
    sentence4: 'My little sister always draws on the walls with crayons',
    sentence5: 'He never draws landscapes because he finds them boring',
    sentence6: 'They sometimes draw portraits of their friends as gifts',
    sentence7: 'Emma draws beautifully and often wins art competitions',
    sentence8:
      'Every morning, I draw a sun in my journal to start my day with positivity',
    sentence9:
      'Our art teacher frequently draws sketches on the board to explain different techniques',
    sentence10:
      'The children in the park are often seen drawing on the sidewalks with colorful chalk',
    word: 'draw',
    mean: 'çizmek',
  },
  {
    sentence1: 'I often dream about traveling to exotic destinations',
    sentence2: 'My sister rarely dreams during the night',
    sentence3: 'Peter usually dreams of becoming a famous musician',
    sentence4: 'Every night, my parents dream about winning the lottery',
    sentence5: 'She sometimes dreams of living in a bustling city',
    sentence6: 'Our cat frequently dreams about chasing birds in the garden',
    sentence7: 'On weekends, we often dream of sleeping in late',
    sentence8: 'My best friend always dreams of owning a luxurious beach house',
    sentence9: 'They never dream about their past mistakes',
    sentence10:
      'The children often dream of meeting their favorite cartoon characters',
    word: 'dream',
    mean: 'rüya görmek, düşlemek, hayal etmek',
  },
  {
    sentence1: 'I drink coffee every morning before starting my day',
    sentence2: 'He drinks tea in the afternoon to relax',
    sentence3: 'She rarely drinks alcohol, only on special occasions',
    sentence4: 'We usually drink water during our workouts to stay hydrated',
    sentence5: 'They often drink soda when they go out to eat',
    sentence6: 'The students drink milk during their lunch break at school',
    sentence7: 'My brother never drinks coffee, he prefers herbal tea',
    sentence8: 'Sarah sometimes drinks orange juice for breakfast',
    sentence9:
      'The athletes frequently drink energy drinks before competitions',
    sentence10:
      'The doctor advised me to drink plenty of water throughout the day',
    word: 'drink',
    mean: 'içmek',
  },
  {
    sentence1: 'I drive to work every day',
    sentence2: 'She drives her kids to school in the morning',
    sentence3: 'We often drive to the beach on the weekends',
    sentence4: 'Does your dad drive a big car?',
    sentence5: 'The bus usually drives past our house at 7 AM',
    sentence6: 'He drives carefully to avoid accidents',
    sentence7: 'The taxi driver always drives too fast',
    sentence8: 'I drive my friends to the mall sometimes',
    sentence9: 'She drives her brother to soccer practice after school',
    sentence10: 'Do you drive to the grocery store?',
    word: 'drive',
    mean: 'araba sürmek, itmek, yürütmek',
  },
  {
    sentence1: 'She dwells in a small village near the mountains',
    sentence2: 'They dwell by the seaside, enjoying the sound of the waves',
    sentence3: 'He dwells in an old farmhouse surrounded by fields',
    sentence4: 'The indigenous tribe dwells deep within the rainforest',
    sentence5: 'We dwell in a bustling city with skyscrapers and traffic',
    sentence6: 'She dwells in a cozy apartment overlooking the park',
    sentence7: 'They dwell on the outskirts of town, close to nature',
    sentence8: 'He dwells in a remote cabin, far away from civilization',
    sentence9:
      'The nomadic people dwell in tents as they move across the desert',
    sentence10:
      'We dwell in harmony with the wildlife in our forested neighborhood',
    word: 'dwell',
    mean: 'oturmak, ikamet etmek, derinlemesine düşünmek (on)',
  },
  {
    sentence1: 'I eat breakfast every morning at 7am',
    sentence2: 'She always eats lunch at the same time',
    sentence3: 'They usually eat dinner together at home',
    sentence4: 'He rarely eats fast food because it is unhealthy',
    sentence5: 'We sometimes eat fruit for dessert',
    sentence6: 'The children never eat vegetables willingly',
    sentence7: 'My parents often eat out at restaurants on weekends',
    sentence8: 'The students usually eat lunch in the school cafeteria',
    sentence9: 'She occasionally eats snacks in between meals',
    sentence10: 'He always eats a piece of chocolate after dinner as a treat',
    word: 'eat',
    mean: 'yemek yemek',
  },
  {
    sentence1: 'The leaves fall from the trees in autumn',
    sentence2: "I fall asleep at sentence10 o'clock every night",
    sentence3: 'She falls in love easily',
    sentence4: "He falls behind in his work when he's not focused",
    sentence5: 'We often fall for the same marketing tactics',
    sentence6: 'The rain falls softly on the roof',
    sentence7: 'The raindrops fall on my head',
    sentence8: 'The snow falls heavily during winter storms',
    sentence9: 'They fall out of touch with each other over the years',
    sentence10: 'Do you ever fall while iceskating?',
    word: 'fall',
    mean: 'düşmek, azalmak',
  },
  {
    sentence1: 'I feed my cat every morning before I go to work',
    sentence2: "She always feeds the fish at 6 o'clock in the evening",
    sentence3: 'He feeds the chickens every day after school',
    sentence4: 'Do you feed your dog before or after your evening walk?',
    sentence5: 'We usually feed the birds in the park on Saturdays',
    sentence6:
      'The farmer feeds the pigs twice a day, in the morning and in the evening',
    sentence7: "The baby bird learns to feed itself from its mother's beak",
    sentence8: "It's important to feed the plants regularly to help them grow",
    sentence9:
      "The zookeeper feeds the lions at sentence2 o'clock every afternoon",
    sentence10: 'She never feeds the stray cats in our neighbourhood',
    word: 'feed',
    mean: 'beslemek',
  },
  {
    sentence1: 'I feel tired every morning when I wake up',
    sentence2: 'She always feels happy when she sees her friends',
    sentence3: 'We often feel nervous before exams',
    sentence4: 'He rarely feels sad because he has a positive outlook on life',
    sentence5: 'They sometimes feel overwhelmed by all their responsibilities',
    sentence6: 'The children usually feel excited on Christmas morning',
    sentence7: 'My mom feels proud whenever I accomplish something great',
    sentence8:
      'The students feel motivated after receiving praise from their teacher',
    sentence9:
      'Sarah feels anxious when she has to give a presentation in front of a large audience',
    sentence10: 'People in this town often feel safe due to low crime rates',
    word: 'feel',
    mean: 'hissetmek, duymak',
  },
  {
    sentence1: 'I often fight with my younger brother over the remote control',
    sentence2: 'John sometimes fights with his neighbor about parking spaces',
    sentence3:
      'Every Saturday, the children in our neighborhood fight over who gets to play with the new toy',
    sentence4: 'She never fights back when someone insults her',
    sentence5: "We usually fight in the evening when we're tired and irritable",
    sentence6:
      'Sarah and Mark are constantly fighting about their different opinions on politics',
    sentence7:
      'My parents rarely fight because they believe in resolving conflicts peacefully',
    sentence8:
      'The two football teams often fight for possession of the ball during a match',
    sentence9:
      'The students sometimes fight over who gets to use the computer first in the school library',
    sentence10:
      'James and Emma are occasionally seen fighting over their favorite ice cream flavor at the local shop',
    word: 'fight',
    mean: 'savaşmak, dövüşmek',
  },
  {
    sentence1: 'I find it difficult to focus on my work in the mornings',
    sentence2: 'My sister often finds her keys in her bag',
    sentence3: 'John usually finds time to exercise every day',
    sentence4: 'We sometimes find it hard to make decisions together',
    sentence5: 'Sarah always finds something to complain about',
    sentence6: 'They rarely find a good restaurant when they travel',
    sentence7: 'The students often find the course materials confusing',
    sentence8: 'He usually finds his favorite shirt in the laundry hamper',
    sentence9: 'We occasionally find new recipes to try on the internet',
    sentence10: 'My parents never find enough time to relax',
    word: 'find',
    mean: 'bulmak',
  },
  {
    sentence1: 'She fits her clothes perfectly after losing weight',
    sentence2: 'They fit comfortably into their small apartment',
    sentence3: 'He fits the puzzle pieces together to complete the picture',
    sentence4: 'The new sofa fits well in the living room',
    sentence5: 'We fit exercise into our daily routine',
    sentence6: 'She fits the description of a dedicated student',
    sentence7: 'They fit the pieces of the jigsaw puzzle',
    sentence8: 'He fits the role of a team leader',
    sentence9: 'The shoes fit snugly without any discomfort',
    sentence10: 'We fit family time into our busy schedules',
    word: 'fit',
    mean: 'uymak, uydurmak, sığmak',
  },
  {
    sentence1: 'I flee from spiders whenever I see them crawling near me',
    sentence2:
      'She always flees from crowded places because she feels overwhelmed',
    sentence3:
      "We often flee to the countryside on weekends to escape the city's hustle and bustle",
    sentence4: 'He never flees from challenges; instead, he faces them head-on',
    sentence5:
      'They rarely flee from danger, as they believe in standing their ground',
    sentence6:
      'The cat quickly flees from the loud noise of thunder during a storm',
    sentence7:
      'Sarah occasionally flees from social events because she prefers her own company',
    sentence8:
      'The rabbit instinctively flees from predators to ensure its survival',
    sentence9:
      'My friend seldom flees from conflicts and prefers to resolve them peacefully',
    sentence10:
      'The children regularly flee from their boring chores to play in the park',
    word: 'flee',
    mean: 'kaçmak',
  },
  {
    sentence1:
      'I often fling my jacket on the couch when I come home from work',
    sentence2: 'She always flings her books down on the table after class',
    sentence3:
      "The cat occasionally flings toys around the room when it's bored",
    sentence4: "We sometimes fling our arms in the air when we're excited",
    sentence5:
      'He rarely flings his clothes into the laundry basket, preferring to leave them on the floor',
    sentence6:
      'They never fling their trash in the garbage can, instead, they leave it around the house',
    sentence7:
      'Every morning, I fling open the curtains to let in the sunlight',
    sentence8:
      'She usually flings herself onto the bed after a long day at school',
    sentence9:
      'We frequently fling our backpacks on the floor as soon as we enter the house',
    sentence10:
      'He often flings his car keys onto the kitchen counter when he gets home',
    word: 'fling',
    mean: 'fırlatıp atmak, savurmak',
  },
  {
    sentence1: 'I fly to work every day by taking the bus',
    sentence2: 'My dad flies to New York for business once a month',
    sentence3: 'The birds fly in the sky all the time',
    sentence4: 'I often fly my kite in the park on Sundays',
    sentence5: 'The planes fly over our house regularly',
    sentence6: 'She always flies to visit her family during the holidays',
    sentence7: 'We usually fly to our vacation destination instead of driving',
    sentence8: 'The butterflies fly from flower to flower in the garden',
    sentence9: 'The superhero can fly through the air with ease',
    sentence10: 'He never flies on airplanes due to his fear of heights',
    word: 'fly',
    mean: 'uçmak, uçurmak',
  },
  {
    sentence1: 'My parents forbid me from staying out late on school nights',
    sentence2:
      'I always forbid my children from eating too much candy before dinner',
    sentence3: 'The sign on the door forbids smoking in this building',
    sentence4: 'The teacher forbids us from using our phones during class',
    sentence5:
      'They frequently forbid their employees from discussing sensitive company information outside of work',
    sentence6:
      'The rules at the library strictly forbid talking loudly or making noise',
    sentence7: 'My doctor forbids me from eating foods high in cholesterol',
    sentence8: 'The law forbids parking in front of fire hydrants',
    sentence9:
      'The teacher forbids using phones during the exam to ensure a fair testing environment',
    sentence10: 'The company policy forbids dating between colleagues',
    word: 'forbid',
    mean: 'yasaklamak',
  },
  {
    sentence1: 'The meteorologist forecasts sunny skies for the weekend',
    sentence2: 'The economist forecasts a rise in inflation next year',
    sentence3:
      'The farmer forecasts a good harvest due to the favorable weather',
    sentence4: 'The company forecasts an increase in sales this quarter',
    sentence5: 'The travel agency forecasts a surge in holiday bookings',
    sentence6: 'The sports analyst forecasts a win for the home team',
    sentence7: 'The fashion designer forecasts bold colors to be in trend',
    sentence8: 'The government forecasts a decrease in unemployment rates',
    sentence9: 'The tech firm forecasts the release of new gadgets',
    sentence10: 'The environmentalist forecasts a rise in sea levels',
    word: 'forecast',
    mean: 'tahmin etmek',
  },
  {
    sentence1: 'I foresee the future as a bright and promising place',
    sentence2:
      'She often foresees the possible outcomes before making a decision',
    sentence3: 'We rarely foresee the challenges that lie ahead',
    sentence4: 'He always accurately foresees the consequences of his actions',
    sentence5:
      'They occasionally foresee the potential risks and take necessary precautions',
    sentence6:
      'The teacher frequently foresees the difficulties students may encounter during the lesson',
    sentence7:
      'My parents seldom foresee the consequences of their impulsive decisions',
    sentence8:
      'The experts carefully foresee the potential impact of climate change on the environment',
    sentence9:
      'I sometimes foresee the difficulties and find alternative solutions',
    sentence10:
      'The fortune teller claims to possess the ability to foresee events before they happen',
    word: 'foresee',
    mean: 'önceden görmek',
  },
  {
    sentence1: 'She foretells the future through her dreams',
    sentence2:
      'The meteorologist often foretells the weather for the next week',
    sentence3:
      'He does not believe in anyone who can foretell the future accurately',
    sentence4:
      'Every day, my sister foretells the outcome of her favorite TV show',
    sentence5: 'The psychic foretells that I will meet my soulmate soon',
    sentence6: 'The fortune teller foretells a great success in my future',
    sentence7: 'My grandmother believes that dreams foretell the future events',
    sentence8:
      'The astrologer foretells that my horoscope indicates a prosperous future',
    sentence9:
      "John's intuition often foretells the success of a business deal",
    sentence10:
      'The weatherman on the news program foretells the weather conditions for the week',
    word: 'foretell',
    mean: 'önceden haber vermek',
  },
  {
    sentence1: 'I often forget to bring my umbrella when it rains',
    sentence2: 'She never forgets to say goodbye before leaving',
    sentence3: 'The children always forget to do their homework',
    sentence4: 'He usually forgets to lock the front door before going to bed',
    sentence5:
      'We sometimes forget to turn off the lights when we leave the house',
    sentence6: 'They rarely forget to feed their pets in the morning',
    sentence7:
      "Jenny frequently forgets to set her alarm clock, so she's often late for work",
    sentence8: 'My brother always forgets to buy milk on his way home',
    sentence9: 'Sarah occasionally forgets to pick up her children from school',
    sentence10: 'The students often forget to bring their textbooks to class',
    word: 'forget',
    mean: 'unutmak',
  },
  {
    sentence1: 'I forgive my friend for his mistake every time he apologizes',
    sentence2: 'She always forgives her brother for his pranks',
    sentence3: 'My mom often forgives my forgetfulness because she loves me',
    sentence4: 'They never forgive people who hurt them intentionally',
    sentence5:
      'We usually forgive our classmates for their jokes during breaks',
    sentence6: 'The teacher forgives her students for coming late occasionally',
    sentence7:
      'He forgives his boss for his strictness because he values his job',
    sentence8:
      'My sister always forgives me for borrowing her clothes without asking',
    sentence9:
      'My grandparents forgive each other for their small disagreements every day',
    sentence10:
      'Sarah forgives her parents for their strict rules because she understands they only want the best for her',
    word: 'forgive',
    mean: 'bağışlamak',
  },
  {
    sentence1: 'The water freezes in the winter',
    sentence2: 'She freezes whenever she goes outside without a jacket',
    sentence3: 'They always freeze in fear when they see a spider',
    sentence4: 'My hands usually freeze when I forget to wear gloves',
    sentence5: 'He often freezes when he has to give a presentation',
    sentence6: 'We sometimes freeze vegetables to preserve them for later',
    sentence7:
      'The temperature frequently freezes at night during the winter months',
    sentence8: 'The lake usually freezes over completely by February',
    sentence9: 'I rarely freeze leftovers, preferring to eat them the next day',
    sentence10:
      'The ice cream shop closes in the winter because the machines freeze',
    word: 'freeze',
    mean: 'donmak, dondurmak',
  },
  {
    sentence1: 'The students frequently overthrow their textbooks during class',
    sentence2: 'She rarely overthrows her opponent in the game',
    sentence3: 'We always try to overthrow unfair rules and regulations',
    sentence4: "He never overthrows his boss's decisions",
    sentence5:
      'They sometimes overthrow the government in times of political unrest',
    sentence6: 'I usually overthrow my opponents in chess',
    sentence7:
      'The workers constantly overthrow the ideas proposed by the management',
    sentence8: 'Jenny often overthrows her diet by indulging in sweets',
    sentence9:
      "The team occasionally overthrows their coach's strategy during matches",
    sentence10: 'The protesters planned to overthrow the corrupt regime',
    word: 'overthrow',
    mean: '(hükümet) devirmek, yıkmak, düşürmek',
  },
  {
    sentence1: 'I pay my rent every month',
    sentence2: 'She pays for the groceries every week',
    sentence3: 'They pay their bills on time',
    sentence4: 'He pays his employees twice a month',
    sentence5: 'We pay for our dinner at the restaurant',
    sentence6: 'The company pays its employees a competitive salary',
    sentence7: 'Mary always pays attention in class',
    sentence8: 'My brother often pays for our movie tickets',
    sentence9: 'Sarah never pays for her own drinks at the bar',
    sentence10: "The customer pays for the products at the cashier's counter",
    word: 'pay',
    mean: 'ödemek',
  },
  {
    sentence1:
      'She pleads with her parents every day to let her stay out later',
    sentence2: 'He pleads for his boss to give him a raise at work',
    sentence3: 'The children plead with their teacher for extra recess time',
    sentence4: 'The lawyer pleads for leniency during the court case',
    sentence5: 'The dog pleads for a treat with big puppy eyes',
    sentence6:
      'The protestors plead for justice outside the government building',
    sentence7: 'She pleads with her husband to take out the trash more often',
    sentence8: 'The students plead for more time to complete their assignment',
    sentence9:
      'The coach pleads with the referee for a penalty for the opposing team',
    sentence10:
      'The politician pleads for support from the public in the upcoming election',
    word: 'plead',
    mean: 'yalvarmak, dilemek',
  },
  {
    sentence1: 'I prove my point every time we have a debate',
    sentence2:
      'She often proves her expertise in mathematics during our tutoring sessions',
    sentence3:
      'They always prove their loyalty by standing up for their friends',
    sentence4: 'He never proves his innocence when accused of a crime',
    sentence5:
      'We regularly prove our dedication by working overtime to meet deadlines',
    sentence6:
      'The company frequently proves its commitment to quality by conducting rigorous product testing',
    sentence7:
      'You seldom prove your worth in this industry without relevant experience',
    sentence8:
      'It sometimes proves difficult to find a solution that satisfies everyone',
    sentence9:
      'She rarely proves her reliability by consistently completing tasks on time',
    sentence10:
      'Students commonly prove their understanding of a subject through exams and assignments',
    word: 'prove',
    mean: 'kanıtlamak',
  },
  {
    sentence1: 'I always put my keys in the same place',
    sentence2: 'He usually puts on his glasses before reading',
    sentence3: 'We often put the groceries away as soon as we get home',
    sentence4: 'She rarely puts any effort into her homework',
    sentence5: 'They sometimes put too much sugar in their coffee',
    sentence6: 'The teacher never puts his glasses on the table',
    sentence7: 'I put my phone on silent during important meetings',
    sentence8: 'He always puts his jacket on before going outside',
    sentence9: 'She often puts her makeup on before leaving the house',
    sentence10: 'We rarely put any stock in rumors',
    word: 'put',
    mean: 'koymak, yerleştirmek, (on) giyinmek',
  },
  {
    sentence1: 'He quits his job every month',
    sentence2: 'She often quits smoking but then starts again',
    sentence3: 'We never quit when facing challenges',
    sentence4: 'They usually quit playing video games before dinner',
    sentence5: 'He quits his exercise routine after a few weeks',
    sentence6: 'She rarely quits studying until late at night',
    sentence7: 'We sometimes quit our complaints and focus on solutions',
    sentence8: 'They always quit the party early to avoid traffic',
    sentence9:
      'He usually quits his favorite TV show halfway through the season',
    sentence10: 'She never quits asking questions to expand her knowledge',
    word: 'quit',
    mean: 'bırakmak, terketmek',
  },
  {
    sentence1: 'I read the newspaper every morning before work',
    sentence2: 'She reads books to improve her English skills',
    sentence3: 'We often read magazines during our lunch break',
    sentence4: 'He reads his favorite novel at night before going to bed',
    sentence5: 'They never read newspapers because they get their news online',
    sentence6: 'The students usually read textbooks for their assignments',
    sentence7: 'My sister often reads to her children before they sleep',
    sentence8: "The professor reads the students' essays to provide feedback",
    sentence9: 'We sometimes read poetry to relax after a long day',
    sentence10: 'The librarian reads stories to the children during storytime',
    word: 'read',
    mean: 'okumak',
  },
  {
    sentence1: 'I rebuild my Lego tower every day after school',
    sentence2: 'He always rebuilds his computer whenever it crashes',
    sentence3: 'She never rebuilds her relationship with her ex-boyfriend',
    sentence4: 'We usually rebuild the fence in the backyard during the summer',
    sentence5: 'They occasionally rebuild old cars as a hobby',
    sentence6: 'John sometimes rebuilds old bicycles and sells them',
    sentence7: 'The workers are rebuilding the bridge this week',
    sentence8: 'The company often rebuilds old houses and sells them',
    sentence9: 'The team rebuilds their strategy before every game',
    sentence10:
      'Martha rarely rebuilds her wardrobe, she prefers to buy new clothes',
    word: 'rebuild',
    mean: 'yeniden inşa etmek',
  },
  {
    sentence1: "I usually redo my work if it's not perfect",
    sentence2: 'She often redoes her hair before going out',
    sentence3: 'We always redo the puzzle when we finish it',
    sentence4: 'He rarely redoes his homework before turning it in',
    sentence5:
      "The teacher usually redoes the lesson if the students don't understand",
    sentence6: 'I sometimes redo my outfit before leaving the house',
    sentence7: 'They never redo their chores without being asked',
    sentence8: 'She always redoes her makeup before going on a date',
    sentence9: "The chef often redoes the recipe if it doesn't turn out right",
    sentence10: 'We rarely redo our mistakes once they are made',
    word: 'redo',
    mean: 'yeniden yapmak',
  },
  {
    sentence1: 'I remake my bed every morning before I leave for work',
    sentence2: 'She always remakes the puzzle after completing it',
    sentence3:
      'We often remake the recipe to see if it tastes better with different spices',
    sentence4: 'They usually remake their favorite movies with new actors',
    sentence5: 'He rarely remakes his decisions once he has made up his mind',
    sentence6:
      'The teacher frequently remakes the seating arrangement in the classroom',
    sentence7:
      'My sister sometimes remakes her clothes to give them a new look',
    sentence8: 'We never remake the same mistakes twice',
    sentence9:
      'The fashion industry deliberately remakes old trends to bring them back into style',
    sentence10:
      'The company regularly remakes their logo to keep it modern and appealing',
    word: 'remake',
    mean: 'yeniden yapmak',
  },
  {
    sentence1: 'I repay my friend for the lunch every week',
    sentence2: 'She always repays her debts on time',
    sentence3: 'He repays his parents by helping out around the house',
    sentence4: 'We repay our loans at the end of each month',
    sentence5: 'The company repays its employees with bonuses',
    sentence6: 'The students repay their teacher with gratitude and respect',
    sentence7: 'My sister repays me by lending me her clothes',
    sentence8:
      'The government repays its citizens by providing public services',
    sentence9:
      "They often repay their friends' kindness by offering to help them",
    sentence10:
      "The customers repay the restaurant's delicious food with their loyalty",
    word: 'repay',
    mean: '(para) geri vermek, ödemek',
  },
  {
    sentence1: 'John frequently resells old books to make a profit',
    sentence2:
      'She rarely resells her used clothes, preferring to donate them to charity',
    sentence3: 'The company often resells returned merchandise to cut losses',
    sentence4: 'My neighbor occasionally resells secondhand furniture online',
    sentence5: 'They never resell items for more than they were purchased for',
    sentence6: 'He usually resells vintage vinyl records at local flea markets',
    sentence7:
      'She sometimes resells her handmade crafts to friends and family',
    sentence8:
      'The store regularly resells refurbished electronics at a discounted price',
    sentence9: "We often resell concert tickets if we can't attend the event",
    sentence10:
      'The online marketplace allows users to easily resell goods to other buyers',
    word: 'resell',
    mean: 'tekrar satmak, satmak',
  },
  {
    sentence1: 'I reset my alarm clock every night before going to bed',
    sentence2: 'She resets her password every month for security reasons',
    sentence3: 'We reset the router whenever the internet connection is slow',
    sentence4:
      'The computer software resets automatically every time it crashes',
    sentence5: "He resets his watch every morning at 8 o'clock",
    sentence6:
      'They reset the classroom layout at the beginning of each semester',
    sentence7: 'The therapist resets the exercise equipment after each use',
    sentence8: 'Cats often reset their sleeping positions throughout the day',
    sentence9: 'The server resets every Sunday at midnight for maintenance',
    sentence10: 'The plant automatically resets its growth cycle in the spring',
    word: 'reset',
    mean: 'yeniden ayarlamak',
  },
  {
    sentence1: 'I often rethink my decisions before making a final choice',
    sentence2:
      'She rarely rethinks her plans and prefers to stick to her initial ideas',
    sentence3:
      'The teacher frequently reminds us to rethink our answers before submitting the exam',
    sentence4:
      'We sometimes need to rethink our approach in order to achieve better results',
    sentence5:
      'He never forgets to rethink his strategy before entering a new business venture',
    sentence6:
      'They occasionally reconsider their options when faced with challenging situations',
    sentence7:
      'My parents always encourage me to rethink my career goals and aspirations',
    sentence8:
      'The team leader constantly urges his team members to rethink their methods for increased efficiency',
    sentence9:
      'It is important to regularly rethink our actions in order to avoid unnecessary mistakes',
    sentence10:
      'The professor often advises his students to rethink their thesis statements for stronger arguments',
    word: 'rethink',
    mean: 'tekrar düşünmek',
  },
  {
    sentence1: 'I rewrite my essays every week to make sure they are perfect',
    sentence2:
      'She often rewrites her to-do list in the morning to stay organized',
    sentence3:
      'He never rewrites his notes, which is why he always struggles to understand them later',
    sentence4:
      'We rarely rewrite our class presentations because we practice them thoroughly beforehand',
    sentence5: 'They sometimes rewrite their songs before performing them live',
    sentence6:
      'My sister usually rewrites her recipes when she wants to add her own twist to them',
    sentence7:
      'The teacher always asks us to rewrite our homework if there are too many mistakes',
    sentence8:
      'My brother frequently rewrites his speeches to make sure they are persuasive and impactful',
    sentence9:
      'Sarah seldom needs to rewrite her emails because she always proofreads them before sending',
    sentence10:
      'I occasionally rewrite my diary entries to reflect on my emotions and experiences',
    word: 'rewrite',
    mean: 'yeniden yazmak',
  },
  {
    sentence1: 'I ride my bike to work every day',
    sentence2: 'She rides horses at the stable on weekends',
    sentence3: 'We ride the bus to school in the morning',
    sentence4: 'He never rides a motorbike because he finds it dangerous',
    sentence5: 'They often ride their skateboards in the park after school',
    sentence6: 'My sister rides her scooter to the grocery store sometimes',
    sentence7:
      'The children usually ride their bicycles to the park in the afternoon',
    sentence8:
      'The tourists ride the double-decker bus to explore the city sights',
    sentence9:
      'Maria enjoys riding roller coasters at the amusement park during summer vacations',
    sentence10:
      'Roberto occasionally rides his motorcycle to visit his friends in the neighboring town',
    word: 'ride',
    mean: 'binmek(at, bisiklet)',
  },
  {
    sentence1: 'I usually ring my mother every Sunday evening',
    sentence2: 'He often rings his best friend before going to bed',
    sentence3: 'She sometimes rings her grandparents on their birthdays',
    sentence4:
      "We rarely ring our neighbors, but we do when there's an emergency",
    sentence5: 'They always ring the doorbell when they visit us',
    sentence6: 'The alarm clock rings every morning at 7 am',
    sentence7: 'My sister frequently rings her boyfriend during lunch breaks',
    sentence8: "Tom's phone rings constantly during work hours",
    sentence9: 'The doorbell rings every time someone enters the house',
    sentence10:
      'Sarah often rings the customer service hotline to inquire about her order',
    word: 'ring',
    mean: '(zil vb) çalmak, telefonla aramak',
  },
  {
    sentence1: 'The sun rises every morning in the east',
    sentence2: 'She rises early every day to get ready for work',
    sentence3: 'My heart rate rises when I am nervous',
    sentence4: 'The price of groceries rises every year',
    sentence5: 'He rises from his chair and walks to the window',
    sentence6: 'They rise to the occasion whenever there is a challenge',
    sentence7: 'This dough needs time to rise before baking it',
    sentence8: 'The tide rises and falls with the lunar cycle',
    sentence9: 'The temperature rises in the summer months',
    sentence10: 'The protest movement rises in response to social injustice',
    word: 'rise',
    mean: 'doğmak, yükselmek',
  },
  {
    sentence1: 'I run every morning before work',
    sentence2: 'He usually runs in the park on weekends',
    sentence3: 'She often goes running after school',
    sentence4: 'We sometimes run together in the evenings',
    sentence5: 'They rarely run but prefer other forms of exercise',
    sentence6: 'The dog always runs excitedly when he sees his leash',
    sentence7: "My sister never runs because she doesn't enjoy it",
    sentence8: 'Tom and Mary run twice a week to stay fit',
    sentence9: 'Jack used to run every day, but now he only runs occasionally',
    sentence10: 'Running quickly becomes a habit if you do it consistently',
    word: 'run',
    mean: 'koşmak, işletmek, akmak',
  },
  {
    sentence1: 'He saws the wood carefully to make a table',
    sentence2: 'She saws the branches off the tree in her garden',
    sentence3: 'My father saws the logs every weekend',
    sentence4: 'The carpenter saws the plank into two pieces',
    sentence5: 'He saws through the pipe to fix the leak',
    sentence6: 'She saws the old shelf to reuse the wood',
    sentence7: 'Every morning, he saws the wooden blocks for his project',
    sentence8: 'The artist saws the sculpture out of a single piece of wood',
    sentence9: 'She saws the door frame to fit the new door',
    sentence10: 'The worker saws the metal rods for the construction',
    word: 'saw',
    mean: 'testereyle kesmek',
  },
  {
    sentence1: '"I say ""good morning"" to my neighbor every day"',
    sentence2: 'My teacher often says that practice makes perfect',
    sentence3: 'Sometimes, I say hello to strangers on the street',
    sentence4: 'He always says he will do his homework, but he never does',
    sentence5: '"We usually say ""thank you"" when someone helps us"',
    sentence6:
      'She rarely says anything in class, but she always listens attentively',
    sentence7: '"Do you ever say ""sorry"" when you make a mistake?"',
    sentence8: 'They say that laughter is the best medicine',
    sentence9:
      'The radio announcer often says the weather forecast for the day',
    sentence10: 'My parents often say that being kind to others is important',
    word: 'say',
    mean: 'demek, söylemek',
  },
  {
    sentence1: 'I see my best friend every day after school',
    sentence2: 'She sees her grandparents every Sunday for dinner',
    sentence3:
      'My brother sees his favorite movie star at every book signing event',
    sentence4: 'We see our teachers in the morning before classes start',
    sentence5: 'The doctor sees patients at the clinic every weekday',
    sentence6: 'They see each other once a month for a coffee catch-up',
    sentence7:
      'My mom sees her reflection in the mirror when she gets ready in the morning',
    sentence8:
      'He sees his favorite sports team play on television every weekend',
    sentence9:
      'Our neighbor sees squirrels running around in their backyard every afternoon',
    sentence10:
      'The bus driver sees many passengers boarding the bus during rush hour',
    word: 'see',
    mean: 'görmek, meanak',
  },
  {
    sentence1: 'I seek guidance from my mentor every week',
    sentence2: 'She seeks new opportunities in her career',
    sentence3: 'We seek the truth in every situation',
    sentence4: 'He seeks advice from his parents before making a decision',
    sentence5: 'The company seeks new employees to join their team',
    sentence6: 'The detective seeks clues to solve the mystery',
    sentence7: 'They seek adventure in their travels',
    sentence8: 'The student seeks knowledge through studying',
    sentence9: 'She seeks comfort in her favorite book',
    sentence10: 'I seek relaxation by taking a walk in the park every evening',
    word: 'seek',
    mean: 'aramak, araştırmak',
  },
  {
    sentence1: 'I sell handmade jewelry at the local market every weekend',
    sentence2: 'My sister sells vegetables at the grocery store twice a week',
    sentence3: 'He often sells second-hand books online to make extra money',
    sentence4:
      'They never sell their old clothes, but prefer to donate them to charity',
    sentence5:
      'My parents sometimes sell homemade cakes and pastries at events and fairs',
    sentence6:
      'We usually sell our products through our website and social media platforms',
    sentence7:
      'The store sells various types of electronics, such as laptops and smartphones',
    sentence8:
      "She sells organic fruits and vegetables from her garden at a nearby farmers' market",
    sentence9:
      'He rarely sells his artwork, as he prefers to keep them as personal collections',
    sentence10:
      'The company frequently sells out of their popular products due to high demand',
    word: 'sell',
    mean: 'satmak',
  },
  {
    sentence1: 'I send emails to my boss every day',
    sentence2: 'She sends text messages to her friends regularly',
    sentence3:
      'We always send postcards to our grandparents when we go on vacation',
    sentence4: 'They never send thank you notes after receiving a gift',
    sentence5:
      'He usually sends his resume to multiple companies when job hunting',
    sentence6: 'The company sends out a newsletter every month',
    sentence7: 'My sister sometimes sends funny memes to our family group chat',
    sentence8: 'The teacher often sends homework assignments via email',
    sentence9: 'I rarely send letters by mail anymore',
    sentence10: 'The doctor always sends a reminder for my annual check-up',
    word: 'send',
    mean: 'göndermek',
  },
  {
    sentence1: 'I set the alarm for 7:00 every morning',
    sentence2: 'She sets the table for dinner at 6:00 every evening',
    sentence3: 'We set the meeting for next Friday at sentence3:00 PM',
    sentence4: 'He sets the thermostat to 72 degrees during the winter',
    sentence5:
      'The doctor sets appointments for patients on Mondays and Wednesdays',
    sentence6: 'They set aside time to study for their exams every day',
    sentence7: 'The teacher sets homework for the students every weekend',
    sentence8:
      'The chef sets the oven to sentence350 degrees before baking the cake',
    sentence9:
      'The company sets goals for the employees to achieve each quarter',
    sentence10: 'I set aside money from each paycheck for savings',
    word: 'set',
    mean: 'hazırlamak, kurmak',
  },
  {
    sentence1: 'I sew every day to make sure my clothes are well-maintained',
    sentence2: 'She usually sews in the evenings while listening to music',
    sentence3: 'He never sews by hand; he always uses a sewing machine',
    sentence4: 'We often sew together as a family activity on weekends',
    sentence5:
      'They rarely sew their own clothes; they prefer to buy them from stores',
    sentence6:
      'My grandmother sews beautifully and she has been doing it for years',
    sentence7:
      "The tailor sews quickly and efficiently to meet his customers' deadlines",
    sentence8:
      'Lisa sometimes sews dresses for her dolls using leftover fabric',
    sentence9: 'You should sew a button on that shirt before it falls off',
    sentence10:
      "I often sew small gifts for my friends' birthdays, like personalized pillows or pouches",
    word: 'sew',
    mean: 'dikiş dikmek',
  },
  {
    sentence1:
      'I often shake my head in disbelief when I hear his outrageous claims',
    sentence2: 'She never shakes hands with strangers as a safety precaution',
    sentence3: 'We usually shake salt on our popcorn before watching a movie',
    sentence4:
      'He shakes his body vigorously during his morning exercise routine',
    sentence5:
      'They rarely shake things up and prefer to stick to their daily routine',
    sentence6:
      'The bartender carefully shakes the cocktail before serving it to the customer',
    sentence7:
      'My little sister shakes her rattle to get my attention when she wants to play',
    sentence8: 'The earthquake shakes cities at around sentence3:00 at night',
    sentence9:
      'Every morning, the construction workers shake the scaffolding to ensure its stability',
    sentence10:
      'The fear of public speaking makes his legs shake uncontrollably during presentations',
    word: 'shake',
    mean: 'sallamak, sallanmak, tokalaşmak',
  },
  {
    sentence1: 'I usually shave every morning before work',
    sentence2: 'He never shaves on weekends',
    sentence3: 'She shaves her legs once a week',
    sentence4: 'They always shave before going out',
    sentence5: 'We sometimes forget to shave before an important event',
    sentence6:
      'You should shave your beard if you want to look more professional',
    sentence7: "The barber shaves his customers' beards and mustaches",
    sentence8: 'She only shaves her armpits once a month',
    sentence9: 'He frequently shaves his head because he likes the feeling',
    sentence10: 'We never let our son shave yet as he is still too young',
    word: 'shave',
    mean: 'tıraş olmak, tıraş etmek',
  },
  {
    sentence1: 'I often shed tears when I watch sad movies',
    sentence2: 'My dog sheds its fur every spring',
    sentence3: 'She rarely sheds light on complicated topics during class',
    sentence4:
      'We usually shed our winter clothes as soon as the weather gets warmer',
    sentence5:
      'He sheds his responsibilities and goes on vacation every summer',
    sentence6: 'The snake sheds its skin in order to grow',
    sentence7: 'I sometimes shed a tear when I listen to emotional music',
    sentence8: 'They often shed their inhibitions and dance freely at parties',
    sentence9:
      'My cat sheds hair all over the house, especially during shedding season',
    sentence10: 'The tree sheds its leaves in the autumn',
    word: 'shed',
    mean: 'dökmek, saçmak, akıtmak',
  },
  {
    sentence1:
      'The sun shines brightly every morning, giving us a warm start to the day',
    sentence2:
      'She always shines at work, consistently delivering exceptional results',
    sentence3:
      'The moon shines beautifully in the night sky, creating a romantic atmosphere',
    sentence4:
      'We often shine our shoes before going out to make them look clean and polished',
    sentence5:
      'My grandmother likes to shine her silverware regularly to keep it looking shiny and new',
    sentence6:
      'The stars shine brilliantly on a clear night, illuminating the darkness',
    sentence7: 'He rarely shines in sports, but he enjoys playing them for fun',
    sentence8:
      'The light bulb shines brightly in the room, providing enough illumination for us to see',
    sentence9:
      "My sister's smile always shines with happiness whenever she sees her friends",
    sentence10:
      'The streetlights shine dimly during the day, but become much brighter at night',
    word: 'shine',
    mean: 'parlamak, parlatmak',
  },
  {
    sentence1: 'He shoots basketball hoops every afternoon',
    sentence2: 'The hunters shoot animals once a week',
    sentence3: 'She shoots a bow and arrow at the archery range on Saturdays',
    sentence4:
      'The police officers shoot their guns at the shooting range every month',
    sentence5: 'The photographer shoots amazing photos at sunset',
    sentence6: 'The movie director shoots scenes for the film every day',
    sentence7: 'My brother shoots his toy gun in the backyard every morning',
    sentence8: 'The soldiers shoot their rifles during training exercises',
    sentence9: 'The videographer shoots wedding videos on weekends',
    sentence10:
      'The athletes shoot arrows at the target during the competition',
    word: 'shoot',
    mean: 'ateş etmek, vurmak, (foto, video) çekmek',
  },
  {
    sentence1: 'She shows her drawings to her friends every Friday',
    sentence2: 'The magician shows a new trick at every performance',
    sentence3: 'We show our support for the team by attending every game',
    sentence4: 'He shows his love for cooking by making dinner every night',
    sentence5: 'The teacher shows a new lesson every Monday',
    sentence6: 'The actor always shows his talent in every movie',
    sentence7: 'The band shows their new songs at every concert',
    sentence8: 'The museum shows ancient artifacts from the Roman Empire',
    sentence9: 'The cinema shows a new film every Friday',
    sentence10: 'The teacher shows the students how to solve the equation',
    // sentence11: 'The gallery shows paintings by local artists',
    // sentence12: 'The shop window shows the latest fashion trends',
    // sentence14: 'The documentary shows the life of pandas in the wild',
    // sentence15: 'The monitor shows the results of the computer analysis',
    // sentence16: 'The website shows different recipes for homemade bread',
    // sentence17: 'The sign shows the way to the nearest exit',
    word: 'show',
    mean: 'göstermek',
  },
  {
    sentence1: 'The sweater shrinks after being washed in hot water',
    sentence2: 'The company shrinks its budget due to financial constraints',
    sentence3: 'He notices that his jeans shrink a little after every wash',
    sentence4: 'The ice caps shrink each year because of global warming',
    sentence5: 'She shrinks the image to fit it into the document',
    sentence6: 'The tumor shrinks after several rounds of treatment',
    sentence7: 'The population of the town shrinks as people move to the city',
    sentence8: 'The fabric shrinks if it is not pre-washed before sewing',
    sentence9: 'The shadows shrink as the sun rises higher in the sky',
    sentence10: 'The gap between the two teams shrinks as the game progresses',
    word: 'shrink',
    mean: 'çekmek, büzülmek',
  },
  {
    sentence1: 'I always shut the windows before going to bed',
    sentence2: 'He usually shuts his computer down after finishing work',
    sentence3: 'She often shuts the door to keep the noise out',
    sentence4: 'We sometimes shut the curtains when it gets too bright outside',
    sentence5: 'They rarely shut the gate properly, and the dog escapes',
    sentence6: 'The teacher always shuts the classroom door during lessons',
    sentence7: "He never shuts up about his new car, it's really annoying",
    sentence8: 'She frequently shuts off her phone to have some quiet time',
    sentence9: 'We occasionally shut off the lights to save electricity',
    sentence10: "The shop owner always shuts the store at 9 o'clock",
    word: 'shut',
    mean: 'kapamak',
  },
  {
    sentence1: 'I sing in the shower every morning',
    sentence2: 'She sings karaoke at the local bar every Saturday night',
    sentence3: 'They often sing along to their favorite songs on the radio',
    sentence4: 'He usually sings in the church choir on Sundays',
    sentence5: 'We sometimes sing lullabies to our baby before bedtime',
    sentence6: "My sister never sings in public, she's too shy",
    sentence7: 'The birds sing beautifully in the park during the spring',
    sentence8:
      'The children always sing the national anthem at school assemblies',
    sentence9:
      'You can hear street performers singing on the busy city streets',
    sentence10:
      'My friends and I frequently sing duets at our weekly karaoke nights',
    word: 'sing',
    mean: 'şarkı söylemek, ötmek',
  },
  {
    sentence1: 'The boat sinks slowly after hitting a rock',
    sentence2: 'The sun sinks below the horizon at dusk',
    sentence3: 'She watches as the leaves sink to the bottom of the pond',
    sentence4: 'He sinks into his chair, feeling very tired',
    sentence5: 'The anchor sinks to the seabed to hold the ship in place',
    sentence6: 'The stone sinks quickly in the river',
    sentence7: 'The city sinks under the weight of the heavy snow',
    sentence8: 'She sinks her feet into the warm sand at the beach',
    sentence9: 'The old treasure chest sinks into the ocean depths',
    sentence10:
      'The rain sinks into the soil, providing moisture for the plants',
    word: 'sink',
    mean: 'batmak, batırmak',
  },
  {
    sentence1: 'I sit on the comfortable couch every evening',
    sentence2: 'She usually sits quietly in the library during her lunch break',
    sentence3: 'We often sit together for family meals',
    sentence4: 'He seldom sits during the long meetings at work',
    sentence5: 'The students always sit in a circle during discussion time',
    sentence6: 'Mary sometimes sits under the tree to read her favorite book',
    sentence7: 'They never sit at the front row during concerts',
    sentence8:
      'The teacher frequently sits next to the students to offer guidance',
    sentence9:
      'Alex and I usually sit at the back of the classroom during lectures',
    sentence10:
      'My cat loves to sit on the window sill and watch the birds outside',
    word: 'sit',
    mean: 'oturmak',
  },
  {
    sentence1: 'Heroes in fairy tales often slay dragons to save the kingdom',
    sentence2:
      'In video games, players sometimes slay monsters to complete quests',
    sentence3: 'The knight vows to slay the beast terrorizing the village',
    sentence4:
      'In the story, the warrior slays the evil sorcerer to bring peace',
    sentence5: 'She slays the audience with her amazing singing performance',
    sentence6: 'He slays all the difficult questions in the quiz show',
    sentence7: 'The comedian slays the crowd with his hilarious jokes',
    sentence8: 'In the movie, the hero slays the villain in the final battle',
    sentence9: 'The fashion blogger slays with her incredible sense of style',
    sentence10: 'They slay the competition with their innovative ideas',
    word: 'slay',
    mean: 'katletmek',
  },
  {
    sentence1: 'I usually sleep for eight hours every night',
    sentence2: 'My sister rarely sleeps during the day',
    sentence3: 'He often falls asleep while watching television',
    sentence4: 'We sometimes sleep in on the weekends',
    sentence5: 'They never sleep before midnight',
    sentence6: 'She always sleeps in the afternoon',
    sentence7: 'The baby usually sleeps through the night',
    sentence8: 'My parents occasionally sleep in separate bedrooms',
    sentence9: 'We can hardly ever sleep when there is too much noise',
    sentence10: 'He typically sleeps on his stomach',
    word: 'sleep',
    mean: 'uyumak',
  },
  {
    sentence1: 'The children slide down the playground slide with glee',
    sentence2: 'She slides her glasses back up her nose when they slip down',
    sentence3:
      'The baseball player slides into second base to avoid being tagged out',
    sentence4: 'He slides the book back onto the shelf after reading',
    sentence5:
      'The waiter slides the plate of food onto the table without spilling a drop',
    sentence6:
      'The photographer slides the lens cover on before putting the camera away',
    sentence7: 'The ice skater slides across the ice with effortless grace',
    sentence8: 'The sun slides below the horizon, signaling the end of the day',
    sentence9:
      'The secretary slides the documents into the envelope for mailing',
    sentence10: 'The snake slides through the grass, barely making a sound',
    word: 'slide',
    mean: 'kaymak, kaydırmak',
  },
  {
    sentence1: 'I always smell the roses in my garden in the morning',
    sentence2: 'My sister rarely smells the food before eating it',
    sentence3: 'They often smell the fresh bread at the bakery',
    sentence4: 'Martha sometimes smells the perfume before buying it',
    sentence5:
      'We usually smell the fresh air when we go hiking in the mountains',
    sentence6: 'He never smells the coffee before pouring himself a cup',
    sentence7: 'The dog always smells the food before eating it',
    sentence8: 'I often smell the freshly cut grass in the park',
    sentence9: 'Sarah rarely smells the flowers in our backyard',
    sentence10: 'The baby sometimes smells the soap before taking a bath',
    word: 'smell',
    mean: 'koklamak, kokmak',
  },
  {
    sentence1: 'The farmer sows the seeds in the field every spring',
    sentence2: 'She usually sows the vegetables on Sunday mornings',
    sentence3: 'They often sow a variety of flowers in their garden',
    sentence4: 'He always sows the crops before the rainy season starts',
    sentence5: 'I never sow the seeds too close together',
    sentence6: 'We sometimes sow new grass in our backyard',
    sentence7: 'The workers sow the rice in the paddy fields every year',
    sentence8: 'She usually sows the seeds in neat rows for better growth',
    sentence9: 'They always sow the corn after preparing the soil properly',
    sentence10: 'The gardener never sows the seeds too deep in the ground',
    word: 'sow',
    mean: '(tohum) ekmek',
  },
  {
    sentence1: 'I speak English every day',
    sentence2: 'He seldom speaks in class',
    sentence3: 'We usually speak on the phone in the evenings',
    sentence4: 'Do you often speak to your parents?',
    sentence5: 'They hardly ever speak to their neighbors',
    sentence6: 'She speaks Spanish fluently',
    sentence7: 'The teacher always speaks clearly during the lesson',
    sentence8: 'My sister and I speak French at home',
    sentence9: 'He never speaks loudly in public',
    sentence10: 'I sometimes speak in a British accent',
    word: 'speak',
    mean: 'konuşmak',
  },
  {
    sentence1: 'I always spell my name correctly',
    sentence2: 'She sometimes forgets how to spell difficult words',
    sentence3: 'He rarely spells anything in his writing',
    sentence4: 'They usually use a spelling checker to avoid typos',
    sentence5: 'We often practice spelling new vocabulary words',
    sentence6: 'The teacher frequently asks the students to spell words aloud',
    sentence7: 'You never seem to have trouble with spelling',
    sentence8: 'The app automatically corrects spelling of words',
    sentence9: 'She hardly ever has to ask for help with spelling',
    sentence10: 'We occasionally play spelling games to improve our skills',
    word: 'spell',
    mean: 'harf harf söylemek',
  },
  {
    sentence1: 'I usually spend my weekends with my family',
    sentence2: 'He spends a lot of time studying every day',
    sentence3: 'She rarely spends money on unnecessary things',
    sentence4: 'We often spend our evenings watching movies',
    sentence5: 'They usually spend their summer vacations at the beach',
    sentence6: 'My friend always spends his lunch break in the park',
    sentence7:
      'The company spends a considerable amount of money on advertising',
    sentence8: 'Maria spends most of her time practicing the piano',
    sentence9: 'We never spend more than we earn',
    sentence10: 'My parents spend a lot of time taking care of the garden',
    word: 'spend',
    mean: 'harcamak, geçirmek',
  },
  {
    sentence1: 'I often spill coffee on my desk in the mornings',
    sentence2: "She rarely spills water on the floor when she's drinking",
    sentence3: 'We usually spill something while cooking dinner',
    sentence4: 'They never spill their drinks at the restaurant',
    sentence5:
      'My little brother occasionally spills his food at the dining table',
    sentence6: 'He spills milk on his clothes every morning during breakfast',
    sentence7:
      'She always spills sauce on her white shirt when she eats spaghetti',
    sentence8: 'We sometimes spill paint while working on our art projects',
    sentence9: 'They seldom spill their drinks when walking',
    sentence10: 'I often spill my pen ink on important documents',
    word: 'spill',
    mean: 'dökmek, dökülmek, sızmak',
  },
  {
    sentence1:
      'I always spin the globe in my office to find the next travel destination',
    sentence2: 'Jane rarely spins the wheel of fortune at the casino',
    sentence3:
      'Peter sometimes spins his fidget spinner when he is feeling nervous',
    sentence4:
      'They usually spin the laundry in the washing machine every Sunday morning',
    sentence5:
      'We often spin around in the merry-go-round at the amusement park',
    sentence6: 'My grandmother never spins wool anymore due to her arthritis',
    sentence7:
      'The DJ frequently spins the latest hits at the nightclub on weekends',
    sentence8: 'Cindy occasionally spins a yarn about her adventures abroad',
    sentence9: 'He seldom spins the top on his desk during work hours',
    sentence10:
      'The children always spin the bottle to decide who goes first in the game',
    word: 'spin',
    mean: 'hızla dönmek, döndürmek',
  },
  {
    sentence1: "I get up at 7 o'clock every morning",
    sentence2: 'She gets to work by bus on weekdays',
    sentence3: 'Tom gets good grades in school',
    sentence4: 'The cat gets fed twice a day',
    sentence5: 'We get our groceries from the store on Sundays',
    sentence6: 'The mailman gets to our house at noon',
    sentence7: 'He gets a haircut every month',
    sentence8: 'They get along well with their neighbors',
    sentence9: 'She gets her hair done at the salon every Friday',
    sentence10: 'I get nervous before a big test',
    word: 'get',
    mean: 'almak, elde etmek, varmak, (up) kalkmak,(on well) anlaşmak',
  },
  {
    sentence1: 'I give my dog a bath every Friday evening',
    sentence2: 'She gives her children a kiss before they go to bed',
    sentence3: 'The teacher gives us homework every day',
    sentence4: 'The chef gives the food a final sprinkle of salt',
    sentence5: 'They give presentations at work twice a month',
    sentence6: 'He gives his girlfriend a hug goodbye every morning',
    sentence7: 'The gardener gives the plants water every morning',
    sentence8: 'The doctor gives his patients advice on healthy living',
    sentence9: 'My parents give me money for my allowance every week',
    sentence10:
      'The volunteer gives her time to help the homeless every Saturday',
    word: 'give',
    mean: 'vermek',
  },
  {
    sentence1: 'I go to the park every morning to walk my dog',
    sentence2: 'She usually goes to bed early on weeknights',
    sentence3: 'We often go to the movies on the weekends',
    sentence4: 'He never goes out without his phone',
    sentence5: 'They sometimes go shopping together in the afternoon',
    sentence6: 'I always go to the gym after work',
    sentence7: 'She rarely goes to parties because she prefers staying home',
    sentence8: 'We usually go on vacation in the summer',
    sentence9: 'He often goes for a run in the morning before work',
    sentence10: 'They seldom go to the beach during the winter months',
    word: 'go',
    mean: 'gitmek',
  },
  {
    sentence1: 'I grind my coffee beans every morning before breakfast',
    sentence2: 'He usually grinds his teeth while he sleeps',
    sentence3: 'She often grinds the spices for our meals',
    sentence4: 'They rarely grind their own flour for baking',
    sentence5: 'We sometimes grind our own coffee at home',
    sentence6: 'The miller grinds the wheat into flour at the local mill',
    sentence7: 'You always grind your pencil down to its stub',
    sentence8: 'The dancer gracefully grinds her feet into the stage floor',
    sentence9: 'My dentist recommended that I not grind my teeth',
    sentence10: 'The chef carefully grinds fresh pepper onto the salad',
    word: 'grind',
    mean: 'öğütmek, bilemek',
  },
  {
    sentence1: 'I grow tomatoes in my backyard every summer',
    sentence2: 'She grows flowers in her garden all year round',
    sentence3: 'We grow herbs on our windowsill',
    sentence4: 'He usually grows vegetables in his allotment',
    sentence5: 'They grow their own fruit in their orchard',
    sentence6: 'My parents grow sunflowers in their field',
    sentence7: 'We often grow a variety of plants in our greenhouse',
    sentence8: 'She always grows beautiful roses in her flowerbeds',
    sentence9: 'Every spring, we grow new plants from seeds',
    sentence10: 'My neighbor grows bonsai trees in his living room',
    word: 'grow',
    mean: '(bitki vb) yetişmek, yetiştirmek',
  },
  {
    sentence1: 'I hang my clothes in the closet every evening after work',
    sentence2: 'My sister hangs her artwork on the wall every weekend',
    sentence3: 'We often hang out at the park on Sundays',
    sentence4: 'Susan hangs her keys by the front door so she never loses them',
    sentence5: 'David hangs his laundry outside to dry in the sun',
    sentence6:
      'They usually hang decorations around their house during the holidays',
    sentence7:
      "The restaurant hangs a sign outside when it's open for business",
    sentence8: 'He never hangs up his phone without saying goodbye',
    sentence9: 'Every morning, she hangs her coat on the hook by the entrance',
    sentence10:
      'We hang our pictures on the living room wall to brighten up the space',
    word: 'hang',
    mean: 'asmak, asılmak',
  },
  {
    sentence1: "I have lunch at sentence12 o'clock every day",
    sentence2: 'She has a lot of homework to do tonight',
    sentence3: 'We have English class twice a week',
    sentence4: 'They have a meeting at 9am tomorrow morning',
    sentence5: 'He has a habit of reading before bed',
    sentence6: 'My brother and I have breakfast together every morning',
    sentence7: 'The dog has to be walked three times a day',
    sentence8: 'My sister has a dentist appointment next week',
    sentence9: 'She has a talent for playing the piano',
    sentence10: 'They have a party to attend on Saturday night',
    word: 'have',
    mean: 'sahip olmak, yemek içmek, yapmak',
  },
  {
    sentence1: 'I hear the alarm every morning when it goes off',
    sentence2: 'She often hears her favorite song on the radio',
    sentence3: 'We sometimes hear strange noises at night',
    sentence4:
      'The students always hear their teacher give instructions in class',
    sentence5: 'He rarely hears any complaints from his customers',
    sentence6:
      'They usually hear birds chirping outside their window in the morning',
    sentence7: 'My parents hear the phone ring when someone calls them',
    sentence8:
      'The baby often hears his parents singing him lullabies before bedtime',
    sentence9: 'We never hear any thunder during the winter months',
    sentence10: 'She frequently hears her neighbors arguing loudly',
    word: 'hear',
    mean: 'duymak, işitmek',
  },
  {
    sentence1: 'I hide my favorite toys under the bed',
    sentence2: 'Sometimes, I hide in the closet to scare my sister',
    sentence3: 'My dog often hides his bones in the backyard',
    sentence4: 'She always hides her emotions behind a smile',
    sentence5: 'The treasure map hides a secret location in the forest',
    sentence6: 'The children hide from the rain under the big tree',
    sentence7: 'I never hide the truth from my friends',
    sentence8: 'The magician hides a rabbit in his hat',
    sentence9: 'My cat likes to hide behind the curtains',
    sentence10: 'We usually hide from the sun under a parasol at the beach',
    word: 'hide',
    mean: 'saklamak, saklanmak',
  },
  {
    sentence1: 'I hit the tennis ball every morning before work',
    sentence2: 'She hits the gym twice a week to stay fit',
    sentence3: 'We hit the snooze button on our alarm clock every morning',
    sentence4: 'He hits the road early every Sunday for a long bike ride',
    sentence5: 'They hit the books every evening to study for their exams',
    sentence6: 'The car hits the road at exactly 7 AM every weekday',
    sentence7: 'You hit the nail on the head with that clever idea',
    sentence8:
      'The weatherman predicts that a storm will hit the city this evening',
    sentence9:
      "My neighbor's dog hits the postman's leg whenever he delivers the mail",
    sentence10:
      "The famous singer's new album is expected to hit the charts next week",
    word: 'hit',
    mean: 'vurmak, çarpmak, uğramak',
  },
  {
    sentence1: 'I hold the door open for my sister every morning',
    sentence2: 'The students hold an assembly every Friday at sentence10:00 am',
    sentence3: 'She always holds her baby tightly when they walk in the park',
    sentence4:
      'The team holds a meeting every Monday to discuss their progress',
    sentence5: 'He holds his breath underwater for as long as he can',
    sentence6:
      'The company holds a training session for new employees every month',
    sentence7:
      'My mom holds a cooking class at the community center every Tuesday',
    sentence8: 'The bus holds up traffic on the way to work every morning',
    sentence9:
      'The police officer holds a gun in his hand while patrolling the neighborhood',
    sentence10:
      'The little girl holds her teddy bear while she falls asleep every night',
    word: 'hold',
    mean: 'tutmak,tutturmak, yapmak',
  },
  {
    sentence1: 'I hurt my finger yesterday while I was cooking',
    sentence2: 'Sometimes, my back hurts after a long day at work',
    sentence3: 'She hurts herself often while playing sports',
    sentence4: 'My knee hurts every time I walk up the stairs',
    sentence5: 'It always hurts when I have a cavity filled at the dentist',
    sentence6:
      'Doctors say that it hurts less if you take the medicine before the pain gets worse',
    sentence7: 'He never hurts himself while exercising at the gym',
    sentence8: 'The wound hurts whenever I touch it',
    sentence9: "My head hurts whenever I don't get enough sleep",
    sentence10: 'It hurts to see her cry',
    word: 'hurt',
    mean: 'acıtmak, acımak',
  },
  {
    sentence1: 'I input my password to access my computer',
    sentence2: 'Please input your name and address on the form',
    sentence3: 'She inputs the data into the spreadsheet for analysis',
    sentence4:
      'The cashier inputs the price of the items into the cash register',
    sentence5: 'I need to input the correct code to unlock the door',
    sentence6:
      'The scientist inputs the experiment results into the computer program',
    sentence7: 'Can you input the meeting details into the calendar for me?',
    sentence8:
      'The user must input the required information to create a new account',
    sentence9:
      'The receptionist will input your reservation into the hotel system',
    sentence10: 'Make sure to input the correct date for your appointment',
    word: 'input',
    mean: 'bilgisayara veri girmek',
  },
  {
    sentence1: 'I keep a daily journal to document my thoughts and experiences',
    sentence2: 'My sister keeps her room very neat and organized',
    sentence3:
      'He keeps forgetting to feed the fish, so they always look hungry',
    sentence4:
      'We keep in touch with our extended family through weekly video calls',
    sentence5:
      "They keep a strict schedule for their children's extracurricular activities",
    sentence6:
      'The bakery down the street keeps their shelves stocked with fresh bread every morning',
    sentence7: 'She keeps her promises and never breaks them',
    sentence8:
      'We keep our car well-maintained by regularly taking it for service',
    sentence9: 'He keeps a positive attitude even in challenging situations',
    sentence10:
      'They keep asking me for advice on cooking because I love experimenting in the kitchen',
    word: 'keep',
    mean: 'saklamak, korumak, muhafaza etmek, devam etmek',
  },
  {
    sentence1: 'She kneels in front of the altar every evening to pray',
    sentence2: 'He often kneels down to tie his shoelaces',
    sentence3: 'The kids never kneel during the school assembly',
    sentence4:
      'The servant always kneels before the king when he enters the room',
    sentence5: 'Do you kneel when you propose in your culture?',
    sentence6: 'The student kneels on the floor to look for his lost pencil',
    sentence7: "My grandmother seldom kneels because it's difficult for her",
    sentence8:
      'The athlete always kneels before the race to stretch his muscles',
    sentence9:
      'People sometimes kneel to get a better look at something low to the ground',
    sentence10: 'The knight kneels before the queen to pledge his loyalty',
    word: 'kneel',
    mean: 'diz çökmek',
  },
  {
    sentence1: 'I knit a sweater every week',
    sentence2: 'She often knits scarves for her friends',
    sentence3: 'He usually knits in the evenings',
    sentence4: 'We sometimes knit together on weekends',
    sentence5: 'You always knit with such precision',
    sentence6: 'They never knit in the summer months',
    sentence7: 'My grandmother knits to relax after work',
    sentence8: 'The knitting club meets once a month',
    sentence9: 'Do you often knit while watching TV?',
    sentence10: "My sister doesn't know how to knit, but I'm teaching her",
    word: 'knit',
    mean: 'örmek',
  },
  {
    sentence1: 'I know how to swim very well',
    sentence2: 'She knows the answer to every question',
    sentence3: 'We know each other since childhood',
    sentence4: 'They know when the party starts',
    sentence5: 'He knows how to play the guitar',
    sentence6: "The teacher knows the students' names",
    sentence7: 'I know that movie very well',
    sentence8: 'She knows where the supermarket is located',
    sentence9: 'They know the rules of the game',
    sentence10: 'He knows how to cook delicious meals',
    word: 'know',
    mean: 'bilmek, tanımak',
  },
  {
    sentence1: 'Every morning, the hen lays an egg in the coop',
    sentence2: 'The mason lays bricks carefully to build a strong wall',
    sentence3: 'The librarian lays out the new books on the display table',
    sentence4: 'The cat lays in the sunbeam, basking in the warmth',
    sentence5: 'She lays her keys on the counter as soon as she gets home',
    sentence6:
      'The artist lays his brushes down when he takes a break from painting',
    sentence7: 'The child lays his head on the pillow when it’s time for a nap',
    sentence8: 'He lays the tablecloth on the table before dinner',
    sentence9: 'The gardener lays mulch around the plants to protect them',
    sentence10: 'The dog lays at the foot of the bed every night',
    word: 'lay',
    mean: 'yaymak, sermek',
  },
  {
    sentence1: 'I lead a team of professionals at work',
    sentence2: 'She leads a healthy lifestyle by exercising regularly',
    sentence3: 'He usually leads the discussion during our weekly meetings',
    sentence4: 'They lead a fulfilling life by prioritizing their passions',
    sentence5:
      'We often lead the way when it comes to implementing new technology',
    sentence6: 'The company leads the market in innovative product designs',
    sentence7:
      'She leads a busy life, always juggling work and family responsibilities',
    sentence8:
      'I rarely lead group projects because I prefer working independently',
    sentence9: 'He leads a successful career as a motivational speaker',
    sentence10:
      'They sometimes lead group exercises during their fitness classes',
    word: 'lead',
    mean: 'yönlendirmek, rehberlik etmek',
  },
  {
    sentence1:
      'I lean against the wall every morning while waiting for the bus',
    sentence2: 'She usually leans on her desk when she is tired',
    sentence3: 'We often lean back in our chairs during lunch breaks',
    sentence4:
      'He never leans on others for support; he prefers to solve his own problems',
    sentence5: 'They sometimes lean forward to get a better view of the screen',
    sentence6: 'The cat always leans against my leg when I sit down',
    sentence7: 'You rarely lean forward when you listen to someone talking',
    sentence8:
      'My friend usually leans over the balcony to watch the street below',
    sentence9: 'The tree trunk leans slightly to the left due to strong winds',
    sentence10: 'The old man always leans on his cane while walking slowly',
    word: 'lean',
    mean: 'yana yatmak, yaslanmak',
  },
  {
    sentence1: 'My dog leaps over the tall fence every morning',
    sentence2: 'She rarely leaps off the sofa in the living room',
    sentence3: 'We often watch as the acrobat leaps through the air with grace',
    sentence4: 'The athlete leaps high into the sky during her long jump event',
    sentence5:
      'They sometimes leap into the lake to cool off on hot summer days',
    sentence6: 'He never misses a chance to leap onto the stage and perform',
    sentence7: 'The frog leaps from one lily pad to another in the pond',
    sentence8: 'Mary eagerly leaps out of bed to start her day early',
    sentence9:
      'The horse confidently leaps over the obstacles in the show jumping competition',
    sentence10:
      'I always feel a surge of excitement whenever I see someone leap with ease',
    word: 'leap',
    mean: 'sıçramak, üstünden atlamak',
  },
  {
    sentence1: 'I learn English every day after school',
    sentence2: 'My sister learns to play the guitar on Mondays and Thursdays',
    sentence3: 'She learns new words in Spanish every week',
    sentence4: 'He learns about history at the museum every Saturday',
    sentence5: 'The students learn math in the morning',
    sentence6: 'We learn about different cultures in our geography class',
    sentence7: 'You learn how to cook from your mother',
    sentence8: 'They learn about animals at the zoo every month',
    sentence9: 'The baby learns to walk and talk every day',
    sentence10: 'The team learns new techniques at practice',
    word: 'learn',
    mean: 'öğrenmek',
  },
  {
    sentence1: 'I always leave for work at 7:30 in the morning',
    sentence2: 'She sometimes leaves her homework until the last minute',
    sentence3: "We usually leave the house at around 9 o'clock on weekends",
    sentence4: 'The bus often leaves the station later than scheduled',
    sentence5: 'He rarely leaves his office before 6 p',
    sentence6: 'm',
    sentence7:
      'They never leave the party early; they always enjoy every moment',
    sentence8: 'Do you ever leave your phone charger at home?',
    sentence9:
      'My sister and I usually leave for school together in the morning',
    sentence10: 'The train always leaves the platform exactly on time',
    // sentence11: 'How often does your boss leave work early?',
    word: 'leave',
    mean: 'ayrılmak, bırakmak',
  },
  {
    sentence1: 'I often lend my books to my friends',
    sentence2: 'She rarely lends money to strangers',
    sentence3: 'He usually lends his car to his brother on weekends',
    sentence4: 'We sometimes lend a helping hand to our neighbors',
    sentence5: 'They never lend their clothes to anyone',
    sentence6: 'My parents always lend a listening ear whenever I need to talk',
    sentence7:
      'Maria frequently lends her notes to her classmates before exams',
    sentence8: 'The teacher occasionally lends pens to forgetful students',
    sentence9: 'Our neighbor kindly lends us her lawnmower when ours is broken',
    sentence10: 'The library lends books to its members for free',
    word: 'lend',
    mean: 'ödünç vermek',
  },
  {
    sentence1: 'I let my sister use my laptop every afternoon after school',
    sentence2:
      'We let our dog play in the park twice a day, in the morning and in the evening',
    sentence3: 'He lets his daughter watch TV for half an hour before dinner',
    sentence4:
      'She lets her children have ice cream once a week as a special treat',
    sentence5: 'They let me borrow their car whenever I need it',
    sentence6:
      'We let our plants receive sunlight for at least six hours every day',
    sentence7:
      'My parents let me stay out with friends until sentence10 PM on weekends',
    sentence8:
      "He lets his employees take a coffee break every morning at sentence10 o'clock",
    sentence9: 'She lets her toddler take a nap in the early afternoon',
    sentence10: 'We let our cat sleep on the bed at night',
    word: 'let',
    mean: 'izin vermek, bırakmak',
  },
  {
    sentence1: 'I lie down in my bed every night before going to sleep',
    sentence2: 'She always lies about her age when people ask her',
    sentence3: 'He never lies to his parents about his whereabouts',
    sentence4: 'The cat often lies in the sun on the porch in the afternoon',
    sentence5: 'We sometimes lie to ourselves about our true feelings',
    sentence6: 'You usually lie on the beach when you go on vacation',
    sentence7: 'The children frequently lie to get out of trouble',
    sentence8: 'My dog always lies near the fireplace in the winter',
    sentence9: 'The books lie untouched on the shelf for years',
    sentence10: 'The flowers lie beautifully in the vase on the dining table',
    word: 'lie',
    mean: 'uzanmak, yalan söylemek',
  },
  {
    sentence1: 'She lights a candle to create a cozy atmosphere',
    sentence2: 'The street lamps light up the avenue as dusk falls',
    sentence3: 'Every evening, he lights the fireplace to warm the living room',
    sentence4:
      'The technician lights the pilot of the furnace for the winter season',
    sentence5: 'The chef lights the stove to start preparing dinner',
    sentence6: 'The campers light a bonfire to cook their food and keep warm',
    sentence7:
      'The city lights the Christmas tree in the town square every year',
    sentence8: 'The match lights instantly with a single strike',
    sentence9: 'The fireworks light the sky during the festival',
    sentence10: 'The lighthouse lights the way for ships at sea',
    word: 'light',
    mean: 'yakmak, yanmak, aydınlatmak',
  },
  {
    sentence1: 'He loses his keys almost every other day',
    sentence2: 'She loses patience when the internet is slow',
    sentence3: 'The team loses focus if they don’t practice regularly',
    sentence4: 'The traveler loses his way in the new city without a map',
    sentence5: 'The businessman loses money when the market is down',
    sentence6: 'The child often loses socks in the laundry',
    sentence7: 'The gardener loses plants if he forgets to water them',
    sentence8:
      'The student loses track of time when studying interesting subjects',
    sentence9: 'The tourist loses interest in the tour when it’s too long',
    sentence10:
      'The actor loses himself in the role to deliver a convincing performance',
    word: 'lose',
    mean: 'kaybetmek, yenilmek',
  },
  {
    sentence1: 'She makes dinner every evening',
    sentence2: 'They make their beds every morning before leaving for work',
    sentence3: 'He makes a cup of coffee for himself every afternoon',
    sentence4: 'We make plans for the weekend every Friday evening',
    sentence5:
      'The teacher makes an announcement at the beginning of every class',
    sentence6: 'My sister makes her own clothes using a sewing machine',
    sentence7: 'John makes his bed as soon as he wakes up in the morning',
    sentence8: 'They make time for exercise at least three times a week',
    sentence9: 'The factory makes sentence100 units of the product per day',
    sentence10: 'I make a grocery list before going to the supermarket',
    word: 'make',
    mean: 'yapmak, hazırlamak',
  },
  {
    sentence1: 'This sign means there is a pedestrian crossing ahead',
    sentence2: 'He means well, even if he doesn’t always say the right thing',
    sentence3: 'The red light means stop, and the green light means go',
    sentence4: 'To her, family means everything',
    sentence5: 'The word “benevolent',
    sentence6: 'means kind and generous',
    sentence7: 'A tight budget means we have to be careful with our spending',
    sentence8: 'In mathematics, the term “average',
    sentence9: 'means the sum divided by the count',
    sentence10: 'A nod usually means agreement or approval',
    // sentence11: 'That loud alarm means the building is being evacuated',
    word: 'mean',
    mean: 'meanına gelmek, kast etmek, istemek',
  },
  {
    sentence1: 'I meet my friends at the park every Saturday',
    sentence2: 'She meets her boss for coffee every morning before work',
    sentence3:
      'The teacher meets with the students every Monday for a group discussion',
    sentence4: 'They meet up with their family for dinner once a week',
    sentence5: 'We meet at the gym to exercise together on Fridays',
    sentence6: 'The club meets at the library every month to discuss new books',
    sentence7:
      'He meets with his study group to review the material before exams',
    sentence8: 'The team meets for practice every evening after school',
    sentence9: 'My parents meet with their friends for brunch on Sundays',
    sentence10:
      'The neighbors meet for a barbecue in the backyard during the summer',
    word: 'meet',
    mean: 'karşılaşmak, tanışmak, karşılamak',
  },
  {
    sentence1: 'I often mishear what my boss says in meetings',
    sentence2: 'She always mishears the lyrics of the song',
    sentence3: "The students sometimes mishear the teacher's instructions",
    sentence4: 'He rarely mishears his wife when she speaks clearly',
    sentence5: 'We never mishear the alarm clock in the morning',
    sentence6: 'They frequently mishear the announcements at the train station',
    sentence7: "The children occasionally mishear their parents' instructions",
    sentence8:
      "The receptionist usually mishears the caller's name on the phone",
    sentence9: 'I seldom mishear the dialogue in movies',
    sentence10: 'My friend always mishears the punchline of jokes',
    word: 'mishear',
    mean: 'yanlış duymak',
  },
  {
    sentence1: 'She often misleads her classmates during group projects',
    sentence2:
      'He never misleads his customers about the quality of his products',
    sentence3:
      "They rarely mislead their clients regarding their company's financial status",
    sentence4:
      "The company's CEO sometimes misleads the public with false statements",
    sentence5: 'My neighbor always misleads me with his unreliable advice',
    sentence6:
      'Our teacher occasionally misleads us with tricky quiz questions',
    sentence7:
      'The politician frequently misleads the public with misleading campaign promises',
    sentence8:
      'The marketing team deliberately misleads consumers through their misleading advertisements',
    sentence9:
      'The gossip magazines consistently mislead readers with fabricated stories',
    sentence10:
      'The salesperson constantly misleads potential buyers by exaggerating product features',
    word: 'mislead',
    mean: 'saptırmak, yanıltmak, yanlış yönlendirmek',
  },
  {
    sentence1: 'I often misread instructions on first attempt',
    sentence2: 'She rarely misreads road signs while driving',
    sentence3: "Tim sometimes misreads his teacher's handwriting",
    sentence4: "We occasionally misread the directions when we're in a hurry",
    sentence5:
      'Jenny frequently misreads the time on her alarm clock and wakes up late',
    sentence6: "Tom and his sister always misread each other's text messages",
    sentence7:
      'The students usually misread the questions during exams due to nervousness',
    sentence8:
      'My grandpa misreads the small print in newspapers without his glasses',
    sentence9:
      'The toddler misreads his favorite storybook, but still enjoys the pictures',
    sentence10:
      "The detective never misreads people's body language, which helps solve crimes",
    word: 'misread',
    mean: 'yanlış okumak',
  },
  {
    sentence1: 'She often mistakes his silence for anger',
    sentence2:
      'The teacher mistakes the shy student’s hesitation for a lack of knowledge',
    sentence3: 'He mistakes kindness for weakness, which is not the case',
    sentence4:
      'The tourist mistakes the local customs and ends up offending the hosts',
    sentence5: 'She mistakes the sarcasm in his voice for sincerity',
    sentence6: 'The child mistakes the edible berries for poisonous ones',
    sentence7:
      'The driver mistakes the gas pedal for the brake in a moment of panic',
    sentence8: 'The waiter mistakes the order and brings the wrong dish',
    sentence9: 'The young birdwatcher mistakes a sparrow for a finch',
    sentence10: 'He mistakes the meeting time and arrives an hour early',
    word: 'mistake',
    mean: 'yanlış meanak, karıştırmak',
  },
  {
    sentence1:
      'I often misunderstand his instructions during our weekly team meetings',
    sentence2: "She rarely misunderstands the teacher's explanations in class",
    sentence3:
      'We sometimes misunderstand each other when we communicate via text messages',
    sentence4:
      'My parents never misunderstand my intentions when I try to help them',
    sentence5:
      'The customer frequently misunderstands the terms and conditions of our service',
    sentence6:
      'Jenny always misunderstands the instructions on the recipe and ends up cooking the wrong dish',
    sentence7:
      'They usually misunderstand my sense of humor and think I am being serious',
    sentence8:
      'Jack occasionally misunderstands the foreign language and struggles to communicate with the locals',
    sentence9:
      'We seldom misunderstand the context of the situation because we pay attention to the details',
    sentence10:
      'The audience often misunderstands the message portrayed in the film, leading to mixed reviews',
    word: 'misunderstand',
    mean: 'yanlış meanak',
  },
  {
    sentence1: 'John mows the lawn every Saturday',
    sentence2: 'She usually mows the grass in the morning',
    sentence3: "They never mow the neighbor's yard",
    sentence4: 'We always mow our own garden',
    sentence5: 'The gardener mows the field once a month',
    sentence6: 'He rarely mows the front yard',
    sentence7: 'She often mows the back area of her house',
    sentence8: 'The landscaper mows the park every week',
    sentence9: "I sometimes mow my grandparents' lawn",
    sentence10: 'They frequently mow the school soccer field',
    word: 'mow',
    mean: 'biçmek',
  },
  {
    sentence1: 'My company outsells its competitors every month',
    sentence2:
      'The new smartphone model outsells all other products in the market',
    sentence3:
      'Our sales team consistently outsells the other teams in the department',
    sentence4: 'The popular brand outsells the generic brand by a large margin',
    sentence5:
      'The online retailer outsells the traditional brick-and-mortar stores',
    sentence6: 'The limited edition item outsells all other items in the store',
    sentence7:
      'The sales representative outsells his colleagues by reaching out to more customers',
    sentence8:
      'The new marketing strategy helps the company outsell its previous performance',
    sentence9:
      'The discounted products outsell the regular-priced items during the sale',
    sentence10:
      'The high-quality product outsells its cheaper alternatives in the market',
    word: 'outsell',
    mean: 'daha fazla satmak',
  },
  {
    sentence1:
      'I overcome my fear of public speaking every time I practice in front of a mirror',
    sentence2:
      'She always overcomes obstacles with perseverance and determination',
    sentence3:
      'We often overcome challenges through teamwork and collaboration',
    sentence4: 'He rarely overcomes his shyness when meeting new people',
    sentence5:
      'They sometimes overcome their differences to find common ground',
    sentence6:
      'The team has to overcome various difficulties during every game',
    sentence7:
      'The students usually overcome their exam anxiety by studying in advance',
    sentence8:
      'I overcome my laziness by setting goals and creating a schedule',
    sentence9:
      'She frequently overcomes her fear of heights by engaging in adventurous activities',
    sentence10:
      'We occasionally overcome our procrastination by breaking tasks into smaller, manageable steps',
    word: 'overcome',
    mean: 'üstesinden gelmek',
  },
  {
    sentence1: 'I overdo my work sometimes, but usually, I know when to stop',
    sentence2: 'He often overdoes his workouts and ends up feeling exhausted',
    sentence3:
      'She rarely overdoes her makeup because she prefers a natural look',
    sentence4:
      'We occasionally overdo our celebrations and end up with a terrible hangover',
    sentence5:
      'They always overdo their portion sizes when cooking, resulting in a lot of leftovers',
    sentence6:
      'My sister frequently overdoes her shopping and ends up with a huge credit card bill',
    sentence7:
      'The children never overdo their chores; they always do just the right amount',
    sentence8:
      'Mary often overdoes her perfume, which can be overwhelming for others',
    sentence9: 'John sometimes overdoes his jokes and ends up offending people',
    sentence10:
      'We usually overdo our time spent on social media and need to take breaks',
    word: 'overdo',
    mean: 'abartmak',
  },
  {
    sentence1:
      'I often overeat at dinner time because the food is so delicious',
    sentence2:
      "She never overeats during the week, but on weekends she can't resist indulging in sweets",
    sentence3:
      'We rarely overeat at lunch because we prefer to have a light and healthy meal',
    sentence4:
      'He seldom overeats at parties, trying to maintain a balanced diet',
    sentence5:
      'They sometimes overeat when they are stressed or emotionally overwhelmed',
    sentence6:
      'The children always overeat at birthday parties, excited by the variety of treats',
    sentence7:
      'My friend usually overeats at buffets, as she wants to try every dish available',
    sentence8:
      'You never overeat before exercising, as it can lead to discomfort during the workout',
    sentence9:
      'The dog occasionally overeats if we leave food accessible to him',
    sentence10:
      'My father hardly ever overeats as he is mindful of his health and weight',
    word: 'overeat',
    mean: 'aşırı yemek',
  },
  {
    sentence1:
      'I often overhear my colleagues talking about their weekend plans',
    sentence2: 'She rarely overhears any interesting conversations on the bus',
    sentence3:
      'We sometimes overhear students discussing their homework in the library',
    sentence4: 'He occasionally overhears his neighbors arguing loudly',
    sentence5:
      'They frequently overhear their parents discussing financial matters',
    sentence6:
      'My sister never overhears anything important while walking her dog',
    sentence7:
      'The children always overhear their teacher explaining new concepts in class',
    sentence8:
      'Alex and his friends often overhear people gossiping at the coffee shop',
    sentence9:
      'My grandparents usually overhear their neighbors playing loud music at night',
    sentence10:
      'We rarely overhear strangers sharing personal stories in public places',
    word: 'overhear',
    mean: 'kulak misafiri olmak',
  },
  {
    sentence1:
      'I never overpay for anything; I always make sure to find the best deals',
    sentence2:
      "My sister often overpays when she shops online because she doesn't compare prices",
    sentence3:
      'The company president always overpays his employees to ensure their loyalty and satisfaction',
    sentence4:
      'We sometimes overpay for groceries when we forget to check our shopping list',
    sentence5:
      'Sarah rarely overpays for clothes; she is a savvy shopper and always finds great discounts',
    sentence6:
      'My parents never overpay for utilities as they are conscientious about conserving energy',
    sentence7:
      'The government frequently overpays contractors for public projects, leading to financial waste',
    sentence8:
      'I often overpay for food delivery as I enjoy the convenience of having meals brought to my door',
    sentence9:
      'Tom rarely overpays for his car repairs; he knows a trustworthy mechanic who offers fair prices',
    sentence10:
      "It's important not to overpay for rent, so make sure to negotiate with your landlord if necessary",
    word: 'overpay',
    mean: 'fazla ödemek',
  },
  {
    sentence1:
      'I always override my alarm clock and end up being late for work',
    sentence2:
      "He often overrides my opinion and makes decisions without considering others' input",
    sentence3:
      "She rarely overrides her children's requests and prefers to listen to their needs",
    sentence4:
      'They sometimes override the rules and try to get away with their actions',
    sentence5:
      'We never override safety protocols and prioritize the well-being of our employees',
    sentence6:
      'You usually override my preferences and choose what you want to do',
    sentence7:
      'The manager frequently overrides the default settings on the computer to customize the system according to our needs',
    sentence8:
      'My sister occasionally overrides her fear of heights and climbs mountains with her friends',
    sentence9:
      'The president seldom overrides the decision of the Supreme Court and respects the separation of powers',
    sentence10:
      "Teachers should not override the authority of parents in making decisions regarding their children's education",
    word: 'override',
    mean: 'umursamamak, geçersiz kılmak',
  },
  {
    sentence1: 'The river overruns its banks during heavy rains',
    sentence2: 'The kid always overruns his playtime by an hour',
    sentence3:
      'The project often overruns its deadline due to unforeseen circumstances',
    sentence4: 'Our expenses frequently overrun the budget we have set',
    sentence5:
      'The traffic congestion in this area regularly overruns the usual waiting time',
    sentence6:
      'The company usually overruns its production targets by the end of the month',
    sentence7:
      "My teenage brother's room is always overrun with dirty clothes and clutter",
    sentence8:
      'The party was incredible, with guests overrun with laughter and joy',
    sentence9:
      'The garden is sometimes overrun with weeds if not properly maintained',
    sentence10:
      'The email inbox of the office administrator is constantly overrun with messages from colleagues',
    word: 'overrun',
    mean: 'istila etmek, aşmak',
  },
  {
    sentence1: 'She oversees the project every day to ensure its success',
    sentence2: "The manager oversees the team's progress on a weekly basis",
    sentence3: 'My supervisor oversees my work and provides feedback regularly',
    sentence4:
      'The company CEO oversees all operations and makes key decisions',
    sentence5:
      "The teacher oversees the students' homework completion every evening",
    sentence6: 'Our coach oversees our training sessions twice a week',
    sentence7:
      "The librarian oversees the library's organization and maintenance",
    sentence8:
      "The principal oversees the school's daily activities and ensures discipline",
    sentence9:
      "The supervisor oversees the employees' performance and offers guidance",
    sentence10: 'The boss oversees the production process to guarantee quality',
    word: 'oversee',
    mean: 'göz kulak olmak, denetlemek',
  },
  {
    sentence1: 'I often oversleep on the weekends',
    sentence2: 'She always oversleeps and arrives late to class',
    sentence3: 'My brother frequently oversleeps and misses his morning jog',
    sentence4: 'They sometimes oversleep and have to rush to work',
    sentence5: 'We rarely oversleep because we set multiple alarms',
    sentence6:
      'The alarm clock never fails to wake me up, so I rarely oversleep',
    sentence7:
      'Jack usually oversleeps and has to skip breakfast to catch the bus',
    sentence8:
      'My sister occasionally oversleeps and has to call in sick to work',
    sentence9:
      'The students in my class seldom oversleep and are always punctual',
    sentence10: 'I hardly ever oversleep, but today I woke up late',
    word: 'oversleep',
    mean: 'uyuya kalmak',
  },
  {
    sentence1: 'Cars often overtake one another on the highway',
    sentence2: 'He usually overtakes other runners during the race',
    sentence3: 'She rarely overtakes anyone in the crowded city traffic',
    sentence4: 'The cyclist quickly overtook the jogger on the biking path',
    sentence5:
      'Their car unexpectedly overtook ours while we were driving to the beach',
    sentence6:
      'The motorcycle always overtakes the slow-moving trucks on the road',
    sentence7:
      'The ambitious student strives to overtake his classmates in academics',
    sentence8:
      'The fast runner managed to overtake his competitors in the final lap',
    sentence9:
      'We occasionally overtake slower walkers when hiking in the mountains',
    sentence10:
      'The Olympic swimmer effortlessly overtook her opponents in the pool',
    word: 'overtake',
    mean: 'yetişip geçmek, sollamak',
  },
  {
    sentence1: 'I never spit in public',
    sentence2: 'She spits when she talks too fast',
    sentence3: 'He always spits after brushing his teeth',
    sentence4: 'We usually spit out our gum in the trash',
    sentence5: 'The baby sometimes spits up after feeding',
    sentence6: 'They rarely spit when they are angry',
    sentence7: "The dog often spits out its food if it doesn't like it",
    sentence8: 'The athlete occasionally spits while running',
    sentence9: "I usually spit out my coffee if it's too cold",
    sentence10: 'She never spits in front of others',
    word: 'spit',
    mean: 'tükürmek',
  },
  {
    sentence1: 'I split my time between work and spending time with my family',
    sentence2: 'She always splits her lunch break into two short breaks',
    sentence3:
      'We usually split the cost of groceries when we go shopping together',
    sentence4: 'The children take turns to split the toys and games',
    sentence5: 'He often splits his free time between reading and watching TV',
    sentence6: 'They never split the bill when they go out for dinner',
    sentence7: 'The friends always split the driving on long road trips',
    sentence8: 'She seldom splits her focus between work and personal tasks',
    sentence9: 'We sometimes split the chores around the house to make it fair',
    sentence10: 'The company regularly splits profits with its employees',
    word: 'split',
    mean: 'yarmak, bölmek',
  },
  {
    sentence1: 'The warm weather spoils the milk if it’s left out too long',
    sentence2: 'She always spoils her grandchildren with gifts and treats',
    sentence3: 'Leaving food uncovered can spoil it quickly',
    sentence4: 'The rain spoils our plans for a picnic in the park',
    sentence5: 'Overusing a particular phrase can spoil its impact',
    sentence6:
      'The sun spoils delicate fabrics if they’re exposed for too long',
    sentence7: 'He never lets a rainy day spoil his mood',
    sentence8:
      'The excessive use of artificial preservatives can spoil the taste of food',
    sentence9:
      'The surprise party was almost spoiled when she accidentally saw the decorations',
    sentence10:
      'The ending of the movie was spoiled by someone who revealed the plot twist',
    word: 'spoil',
    mean: 'berbat etmek, bozmak, şımartmak',
  },
  {
    sentence1: 'I spread butter on my toast every morning',
    sentence2: 'He spreads gossip about everyone in the office',
    sentence3: 'She spreads out her books on the table before studying',
    sentence4: 'They spread a blanket on the grass for a picnic',
    sentence5:
      'We spread the news about the upcoming event through social media',
    sentence6: 'The virus spreads rapidly in crowded places',
    sentence7:
      'The teacher spreads the assignments evenly throughout the semester',
    sentence8: 'My grandmother spreads love and kindness wherever she goes',
    sentence9:
      'He often spreads himself too thin by taking on too many projects',
    sentence10: 'The wildfire spreads quickly, endangering nearby homes',
    word: 'spread',
    mean: 'yaymak, yayılmak',
  },
  {
    sentence1: 'Flowers spring up in the garden during April',
    sentence2: 'The cat loves to spring onto the windowsill to watch birds',
    sentence3: 'We often spring clean our house before summer',
    sentence4: 'The sun springs out from behind the clouds after a rainy day',
    sentence5: 'He always springs out of bed early in the morning',
    sentence6: 'The squirrel likes to spring from tree to tree in the park',
    sentence7: 'The river springs from the mountains and flows into the valley',
    sentence8: 'She usually springs surprises on her friends during birthdays',
    sentence9: 'The grasshopper can spring high into the air',
    sentence10:
      'The season of rebirth and growth is when nature springs back to life',
    word: 'spring',
    mean: 'ortaya çıkıvermek, yerden bitmek',
  },
  {
    sentence1: 'I often stand in the morning to stretch my legs',
    sentence2: 'She always stands in front of the mirror to fix her hair',
    sentence3: 'We usually stand in line for tickets before the concert starts',
    sentence4: 'He occasionally stands on his tiptoes to reach high shelves',
    sentence5: 'They sometimes stand by the window to watch the sunset',
    sentence6: "The students often stand up to answer the teacher's questions",
    sentence7: 'My parents frequently stand in the kitchen to prepare dinner',
    sentence8:
      'The bus driver never stands idle; he is always serving passengers',
    sentence9:
      'I usually stand next to my best friend during assembly at school',
    sentence10:
      'The security guard always stands at the entrance to monitor who enters the building',
    word: 'stand',
    mean: 'ayakta durmak',
  },
  {
    sentence1: 'I never steal because it is against the law',
    sentence2: "Maria steals from her sister's closet every week",
    sentence3:
      'We always steal a few minutes to have a chat during our lunch break',
    sentence4: 'He often steals my ideas and presents them as his own',
    sentence5: 'The cat constantly steals food from the kitchen counter',
    sentence6:
      'They sometimes steal glances at each other when they think no one is looking',
    sentence7: 'The thieves frequently steal jewelry from high-end stores',
    sentence8: 'My little brother occasionally steals my toys without asking',
    sentence9: 'Carla rarely steals the spotlight during family gatherings',
    sentence10:
      'The shopkeeper never leaves the valuable items unattended, fearing someone might steal them',
    word: 'steal',
    mean: 'çalmak',
  },
  {
    sentence1: 'I stick to my daily routine every morning',
    sentence2: 'He always sticks to his promises',
    sentence3: 'She sticks to her healthy diet most of the time',
    sentence4: 'We usually stick to our study schedule during weekdays',
    sentence5: 'You never stick to the rules in games',
    sentence6: 'They often stick with their favorite TV show on weekends',
    sentence7:
      'The dog always sticks close to its owner whenever they go outside',
    sentence8:
      'The teacher sometimes sticks to the textbook for lesson planning',
    sentence9:
      'The company policy requires employees to stick to the dress code at all times',
    sentence10: 'My sister rarely sticks to the same hairstyle for too long',
    word: 'stick',
    mean: 'yapışmak, yapıştırmak, sadık kalmak',
  },
  {
    sentence1: 'The bee stings when it feels threatened',
    sentence2: 'She accidentally stings herself with a nettle while gardening',
    sentence3: 'The wasp stings anyone who gets too close to its nest',
    sentence4: 'The jellyfish tentacles can sting swimmers in the ocean',
    sentence5: 'The ant stings when disturbed',
    sentence6: 'His harsh words sting and hurt her feelings',
    sentence7: 'The cold wind stings our faces during winter walks',
    sentence8: 'The memory of their breakup still stings after all these years',
    sentence9: 'The vinegar-soaked cotton ball can help relieve a bee sting',
    sentence10:
      'The defeat in the championship game stings for the soccer team',
    word: 'sting',
    mean: 'sokmak, arı yılan vs. ısırmak, acıtmak',
  },
  {
    sentence1: 'The garbage always stinks when it is not taken out regularly',
    sentence2: 'She never takes a shower and always stinks of sweat',
    sentence3: 'The fish at the market stinks as always',
    sentence4: 'My dog stinks after rolling in something dead outside',
    sentence5: 'The trash in the alley stinks and needs to be cleaned up',
    sentence6: 'He often forgets to use deodorant and then stinks all day',
    sentence7:
      'The bathroom often stinks of mildew if it is not cleaned regularly',
    sentence8: 'The sewer stinks when it gets backed up',
    sentence9: "My sister's feet always stink after she takes off her shoes",
    sentence10:
      'The room always stinks of cigarette smoke because my roommate smokes inside',
    word: 'stink',
    mean: 'pis kokmak',
  },
  {
    sentence1:
      'The workers in the factory strike every Monday for better wages and working conditions',
    sentence2:
      'My brother strikes his favorite gong every morning as part of his meditation routine',
    sentence3:
      'Sarah strikes the tennis ball with precision and strength during her weekly training sessions',
    sentence4: 'Our cat often strikes at birds that venture into our garden',
    sentence5:
      'The lightning strike in the distance illuminates the dark sky during the storm',
    sentence6:
      "The clock in the living room strikes six times every evening to signal it's dinner time for our pets",
    sentence7: 'Every time I eat ice cream, a headache strikes shortly after',
    sentence8:
      'Jessica strikes up a conversation with strangers wherever she goes, regardless of the time or place',
    sentence9:
      'The soccer team always strikes a pose for a group photo before each match',
    sentence10:
      'When the match strikes the surface, it ignites the firework and creates a colorful display in the sky',
    word: 'strike',
    mean: 'vurmak, çarpmak, grev yapmak',
  },
  {
    sentence1: 'I strive to improve my English skills every day',
    sentence2: 'She strives to be a better employee by working hard',
    sentence3:
      'We strive to maintain a healthy diet by eating fruits and vegetables daily',
    sentence4:
      'He strives to achieve his goals by putting in consistent effort',
    sentence5:
      'They strive to make a positive impact on the environment by recycling regularly',
    sentence6:
      'The company strives to provide excellent customer service at all times',
    sentence7: 'I always strive to arrive on time to my appointments',
    sentence8:
      'She frequently strives to learn new things and expand her knowledge',
    sentence9: 'We often strive to balance our work and personal life',
    sentence10:
      'He sometimes strives to overcome his fears and take on new challenges',
    word: 'strive',
    mean: 'çalışmak, çabalamak',
  },
  {
    sentence1: "I usually swear when I'm frustrated or angry",
    sentence2: 'My boss never swears at work',
    sentence3: 'She rarely swears in front of her children',
    sentence4: 'We often swear at each other during arguments',
    sentence5: 'He hardly ever swears in public',
    sentence6: "They sometimes swear when they're joking around",
    sentence7: "My friend always swears when he's playing video games",
    sentence8: 'The students never swear in the classroom',
    sentence9: "She occasionally swears when she's telling a funny story",
    sentence10: 'We frequently hear people swear on the street',
    word: 'swear',
    mean: 'küfretmek, yemin etmek',
  },
  {
    sentence1: 'I sweep the floor every day before breakfast',
    sentence2: 'She always sweeps the living room on Sundays',
    sentence3: 'My father usually sweeps the backyard in the evenings',
    sentence4: 'We often sweep the porch after dinner',
    sentence5: 'They sometimes sweep leaves off the driveway',
    sentence6: 'Mary never sweeps the garage, so it gets messy',
    sentence7: 'The cleaning lady frequently sweeps the stairs in our building',
    sentence8: 'He rarely sweeps the kitchen, which annoys his roommate',
    sentence9: 'Peter and John usually take turns sweeping the hallway',
    sentence10: 'Jenny sweeps her bedroom once a week',
    word: 'sweep',
    mean: 'süpürmek',
  },
  {
    sentence1: 'After the heavy rain, the river swells and overflows its banks',
    sentence2: 'His ankle swells after he twists it during a soccer match',
    sentence3: 'The stormy sea swells with powerful waves',
    sentence4: 'The infection causes the lymph nodes to swell',
    sentence5: 'Her heart swells with pride when she sees her children succeed',
    sentence6:
      'The musician’s fingers swell after playing the guitar for hours',
    sentence7: 'The crowd swells as people gather for the concert',
    sentence8: 'The pastry dough will swell when baked',
    sentence9: 'The balloon swells as more air is blown into it',
    sentence10: 'The anticipation of the surprise party makes her heart swell',
    word: 'swell',
    mean: 'şişmek, kabartmak',
  },
  {
    sentence1: 'I swim every morning at the local pool',
    sentence2: 'She usually swims in the evening after work',
    sentence3: 'We hardly ever swim in the lake during winter',
    sentence4: 'They always swim competitively on Saturdays',
    sentence5: 'He rarely swims for more than sentence30 minutes',
    sentence6: 'The children sometimes swim together at the beach',
    sentence7: 'My friends and I often swim for exercise',
    sentence8: 'Amanda never swims in deep water',
    sentence9: 'The swimming instructor usually teaches beginners',
    sentence10: 'Do you swim regularly at your gym?',
    word: 'swim',
    mean: 'yüzmek',
  },
  {
    sentence1: 'I swing at the park every evening after work',
    sentence2:
      'She swings on the swing set at the playground every Saturday morning',
    sentence3: 'We often swing together in the backyard during the weekends',
    sentence4: 'They sometimes swing high in the air at the amusement park',
    sentence5: "He rarely swings because he's afraid of heights",
    sentence6:
      'The children always swing back and forth gleefully at the neighborhood park',
    sentence7:
      'My sister and I frequently swing side by side, enjoying the breeze',
    sentence8: 'On sunny days, the kids usually swing for hours at the beach',
    sentence9:
      'Jenny and her friends swing joyfully during their lunch break at school',
    sentence10:
      'After a long day, I usually find solace in swinging gently under the old oak tree',
    word: 'swing',
    mean: 'sallamak, sallanmak',
  },
  {
    sentence1: 'I take the bus to work every morning',
    sentence2: 'She takes a shower every evening before bed',
    sentence3: 'My brother takes his dog for a walk in the park twice a day',
    sentence4: "We take a break at sentence12 o'clock for lunch",
    sentence5: 'They take their kids to school every weekday',
    sentence6: 'He takes his coffee with milk and sugar every morning',
    sentence7: 'She takes her vitamins with breakfast every day',
    sentence8: 'We take the trash out on Tuesday evenings',
    sentence9: 'The supermarket takes credit cards for payment',
    sentence10: "They take their lunch break at sentence1 o'clock",
    word: 'take',
    mean: 'almak, götürmek',
  },
  {
    sentence1: 'I teach English to children every Monday and Wednesday',
    sentence2: 'She teaches math at the local high school every morning',
    sentence3: 'We teach Spanish online every Tuesday and Thursday',
    sentence4: 'He teaches guitar lessons to beginners on Saturdays',
    sentence5: 'They teach science experiments to their students every week',
    sentence6: 'The teacher often teaches grammar rules during the first class',
    sentence7: 'My parents teach me how to cook delicious meals on weekends',
    sentence8: 'The coach teaches tennis skills to young players twice a week',
    sentence9:
      'Maria teaches dance classes at the community center every evening',
    sentence10: 'The professor teaches philosophy courses at the university',
    word: 'teach',
    mean: 'öğretmek',
  },
  {
    sentence1:
      'She accidentally tears the paper while trying to remove the staple',
    sentence2: 'The strong wind tears the leaves from the trees in autumn',
    sentence3: 'He carefully tears open the envelope to read the letter',
    sentence4:
      'The child tears the wrapping paper excitedly during his birthday',
    sentence5: 'The emotional movie scene makes her tear up',
    sentence6: 'The fabric tears easily if pulled too hard',
    sentence7: 'The dog playfully tears apart its chew toy',
    sentence8: 'The athlete tears a muscle during intense training',
    sentence9: 'The old book’s pages are fragile and can easily tear',
    sentence10: 'The storm tears through the neighborhood, causing damage',
    word: 'tear',
    mean: 'yırtmak, (up) ağlamak',
  },
  {
    sentence1: 'I always tell my friends the truth',
    sentence2: 'She usually tells her mom about her day at school',
    sentence3: 'Peter often tells funny jokes during lunch break',
    sentence4: 'They sometimes tell stories about their travels',
    sentence5: "We rarely tell lies because it's not right",
    sentence6: 'The teacher never tells us the answers to the test in advance',
    sentence7:
      'He usually tells his sister bedtime stories before she falls asleep',
    sentence8: "My dad always tells me to wear a jacket when it's cold outside",
    sentence9: 'The news anchor tells us the latest updates every evening',
    sentence10: 'I often tell my dog how much I love him',
    word: 'tell',
    mean: 'söylemek, anlatmak',
  },
  {
    sentence1: 'I think about my future every day',
    sentence2: 'She thinks that coffee tastes bitter',
    sentence3: 'We often think of our family when we are far apart',
    sentence4: 'They rarely think about the consequences of their actions',
    sentence5: 'He always thinks before he speaks',
    sentence6: 'The teacher often thinks of creative lesson plans',
    sentence7: 'My parents never think I can handle big responsibilities',
    sentence8: "We sometimes think it's better to stay home on a rainy day",
    sentence9: "She usually thinks it's important to be kind to others",
    sentence10:
      'They hardly ever think about the impact of their decisions on the environment',
    word: 'think',
    mean: 'düşünmek, sanmak',
  },
  {
    sentence1:
      'I thrive on challenges and enjoy seeking new opportunities every day',
    sentence2:
      'She always thrives in a structured and organized work environment',
    sentence3:
      'We often thrive when surrounded by positive and supportive individuals',
    sentence4: 'He rarely thrives in chaotic and stressful situations',
    sentence5:
      'My plants thrive when they are watered regularly and receive enough sunlight',
    sentence6:
      'They consistently thrive in their academic studies due to their dedication and hard work',
    sentence7:
      'The company continues to thrive despite the tough economic conditions',
    sentence8:
      'The team thrives during important games and performs exceptionally well under pressure',
    sentence9:
      'Students thrive when they have a balanced routine and prioritize their studies',
    sentence10:
      'Our relationship thrives when we communicate openly and honestly with each other',
    word: 'thrive',
    mean: 'iyiye gitmek, başarılı olmak',
  },
  {
    sentence1: 'I throw the ball every morning in the park',
    sentence2: 'She throws her clothes into the laundry basket',
    sentence3:
      'The students throw their papers in the recycling bin after class',
    sentence4: 'We often throw parties for our friends on the weekends',
    sentence5: "He usually throws a tantrum when he doesn't get his way",
    sentence6:
      'The chef throws in some extra spices to enhance the flavor of the dish',
    sentence7: 'They throw their garbage away in the designated bins outside',
    sentence8: 'My little brother throws a fit whenever he has to go to bed',
    sentence9:
      'The athlete throws the javelin with great precision during competitions',
    sentence10: 'I throw away expired food from my fridge every week',
    word: 'throw',
    mean: 'atmak, fırlatmak',
  },
  {
    sentence1: 'I usually unbind my notebook to take out the pages',
    sentence2: 'She rarely unbinds her hair and prefers to keep it tied up',
    sentence3: 'Every morning, they unbind their dog and take it for a walk',
    sentence4:
      'The students often unbind their textbooks to photocopy important pages',
    sentence5:
      'He never unbinds the books from his personal library, as he likes to keep them in pristine condition',
    sentence6:
      'We sometimes unbind the files to sort and organize them properly',
    sentence7:
      'The chef frequently unbinds the recipe book to prepare delicious meals',
    sentence8:
      'My sister always unbinds her shoelaces before taking off her shoes',
    sentence9:
      'They occasionally unbind the old photographs from the album to reminisce about their childhood',
    sentence10: 'I rarely unbind my thoughts and share them with others',
    word: 'unbind',
    mean: 'çözmek, açmak, salmak',
  },
  {
    sentence1: 'I understand the importance of studying English every day',
    sentence2: 'She always understands the instructions given by the teacher',
    sentence3: 'John often helps me understand difficult concepts in math',
    sentence4: 'We usually understand each other without speaking a word',
    sentence5: 'My parents always understand me when I need their support',
    sentence6: 'They never understand why I enjoy watching horror movies',
    sentence7:
      'The doctor understands that exercise is crucial for a healthy body',
    sentence8:
      "Sarah rarely understands sarcasm, so it's best to be direct with her",
    sentence9:
      'The students often understand the topic better after a group discussion',
    sentence10:
      'I understand the risks involved, but I still want to pursue my dreams',
    word: 'understand',
    mean: 'meanak',
  },
  {
    sentence1: 'I undertake my daily chores every morning before going to work',
    sentence2:
      'She often undertakes the responsibility of organizing events at her school',
    sentence3:
      'We usually undertake a thorough analysis of the data before making any conclusions',
    sentence4:
      'He seldom undertakes risky activities because he prefers to stay safe',
    sentence5:
      'The company frequently undertakes market research to understand consumer preferences',
    sentence6:
      'They always undertake the task of cleaning the office at the end of the day',
    sentence7:
      'I rarely undertake long journeys by car as I prefer to use public transportation',
    sentence8:
      'She sometimes undertakes volunteer work to give back to the community',
    sentence9:
      'We never undertake any major construction projects without consulting an engineer',
    sentence10:
      'He occasionally undertakes hiking trips during his summer vacations',
    word: 'undertake',
    mean: 'üzerine almak, üstlenmek',
  },
  {
    sentence1: 'I always undo my shoelaces before taking off my shoes',
    sentence2:
      'She never fails to undo the knots in her hair before going to bed',
    sentence3:
      'On Sundays, they usually undo the game console to spend more time with family',
    sentence4:
      'He often forgets to undo the lock on his phone, causing frustration',
    sentence5: 'We rarely undo our plans once we have made them',
    sentence6:
      'The teacher instructs his students to always undo their mistakes before moving forward',
    sentence7:
      'They sometimes undo their decision to eat out and cook at home instead',
    sentence8:
      'She frequently undoes her seatbelt in the car, even before reaching her destination',
    sentence9:
      "We occasionally undo the changes made to our work when it doesn't meet our standards",
    sentence10:
      'He usually undoes his tie as soon as he gets home from work to relax',
    word: 'undo',
    mean: 'çözmek, yok etmek, yaptığını geri almak',
  },
  {
    sentence1: 'I uphold my principles every day',
    sentence2: 'He upholds the law with great dedication',
    sentence3: 'She always upholds her promise to finish her work on time',
    sentence4: 'We often uphold our values in difficult situations',
    sentence5: 'They seldom uphold the traditions of their ancestors',
    sentence6:
      'My sister regularly upholds the family tradition of attending church on Sundays',
    sentence7:
      'The company consistently upholds high ethical standards in its business practices',
    sentence8: 'He rarely upholds his end of the bargain',
    sentence9:
      'We usually uphold our responsibilities as citizens by voting in elections',
    sentence10:
      'The judge upholds the rights of all individuals in the courtroom',
    word: 'uphold',
    mean: 'desteklemek, sürdürmek, ayakta tutmak',
  },
  {
    sentence1: "I wake up every morning at 7 o'clock to start my day",
    sentence2: 'She usually wakes up early on weekends to go for a run',
    sentence3: 'My alarm clock wakes me up every day without fail',
    sentence4: 'They often wake up late on Sundays, as they like to sleep in',
    sentence5:
      'The loud noise from the construction site wakes up the whole neighborhood every morning',
    sentence6: 'He hardly ever wakes up before 9 am, even on weekdays',
    sentence7:
      'We sometimes wake up in the middle of the night due to our noisy neighbor',
    sentence8:
      'The smell of coffee brewing in the morning always wakes me up instantly',
    sentence9: 'She rarely wakes up feeling refreshed and energized',
    sentence10:
      'I usually wake up feeling groggy and tired, but a cup of tea helps me feel awake',
    word: 'wake',
    mean: 'uyanmak, uyandırmak',
  },
  {
    sentence1: 'I wear my favorite t-shirt every weekend',
    sentence2: 'She wears earrings to work every day',
    sentence3: 'We always wear jackets during winter',
    sentence4: 'The students wear uniforms to school every morning',
    sentence5: 'He rarely wears a tie to meetings',
    sentence6: 'She wears sunscreen when she goes to the beach',
    sentence7: 'They wear safety helmets when riding their bikes',
    sentence8: 'You wear glasses to help you see better',
    sentence9: 'The fashion model wears designer clothes on the runway',
    sentence10: 'We often wear comfortable clothes on weekends',
    word: 'wear',
    mean: 'giymek, takmak',
  },
  {
    sentence1: 'He weaves baskets every Sunday afternoon',
    sentence2:
      'She often weaves beautiful tapestries using traditional methods',
    sentence3:
      'The artisan weaves intricate patterns into his pottery on a daily basis',
    sentence4:
      'They usually weave their own clothing using a small loom at home',
    sentence5:
      'We weave together different colored threads to create unique patterns',
    sentence6:
      'The women in the village frequently gather to weave baskets for their community members',
    sentence7: 'My grandmother taught me how to weave rugs when I was a child',
    sentence8:
      'He rarely weaves silk fabrics by hand as it is a time-consuming process',
    sentence9:
      'The skilled craftsman patiently weaves fishing nets for the local fishermen',
    sentence10:
      'The artist regularly weaves natural fibers into sculptures inspired by nature',
    word: 'weave',
    mean: 'dokumak, örmek',
  },
  {
    sentence1: 'I weep every night when I watch sad movies',
    sentence2: 'My sister weeps whenever she receives bad news',
    sentence3: 'We often weep with joy when we reunite with loved ones',
    sentence4: 'Mary rarely weeps, even when faced with difficult situations',
    sentence5: 'He usually weeps when he reads emotional poetry',
    sentence6:
      "The little girl always weeps when she doesn't get what she wants",
    sentence7:
      'They never weep in public; they prefer to keep their emotions private',
    sentence8:
      'My grandmother sometimes weeps when she remembers her late husband',
    sentence9: 'John weeps every time he listens to a touching song',
    sentence10: 'My dog seldom weeps, but he becomes sad when I leave for work',
    word: 'weep',
    mean: 'gözyaşı dökmek',
  },
  {
    sentence1: 'The rain wets the ground, making it slippery',
    sentence2: 'She accidentally wets her sleeve while washing her hands',
    sentence3: 'The dog shakes off water after it wets itself in the lake',
    sentence4: 'The dew in the morning wets the grass',
    sentence5: 'He carefully wets the paintbrush before starting to paint',
    sentence6: 'The ocean waves wet our feet as we walk along the shore',
    sentence7:
      'The umbrella protects us from rain, otherwise it wets us in the downpour',
    sentence8: 'The swimmer dives into the pool, fully wetting her hair',
    sentence9: 'After you wet the clothes, you need to hung them up to dry',
    sentence10: 'The sudden splash wets everyone nearby',
    word: 'wet',
    mean: 'ıslatmak, işemek',
  },
  {
    sentence1: 'The autumn breeze gently winds through the colorful leaves',
    sentence2: 'She carefully winds the clock every evening to keep it ticking',
    sentence3:
      'The river winds its way through the valley, creating a picturesque scene',
    sentence4:
      'The hiking trail winds up the mountain, offering breathtaking views',
    sentence5: 'The snake silently winds around the tree branch',
    sentence6: 'He skillfully winds the fishing line onto the reel',
    sentence7: 'The road winds through the forest, leading to a hidden cabin',
    sentence8: 'The dancer gracefully winds across the stage',
    sentence9: 'The old staircase winds upward, creaking with each step',
    sentence10: 'The melody winds its way into our hearts, evoking memories',
    word: 'wind',
    mean: 'sarmak, dolamak',
  },
  {
    sentence1: 'She wins the game every Saturday at the local chess club',
    sentence2: 'He always wins the lottery with his lucky numbers',
    sentence3: 'We rarely win against the rival team in soccer matches',
    sentence4: 'The company usually wins the bid for construction projects',
    sentence5:
      'Mary often wins awards for her outstanding achievements at work',
    sentence6: 'He sometimes wins arguments with his strong persuasion skills',
    sentence7: 'The team never wins when they play away matches',
    sentence8: 'They frequently win medals in swimming competitions',
    sentence9: 'The students regularly win spelling bees in their school',
    sentence10:
      'My brother occasionally wins tickets to concerts through radio contests',
    word: 'win',
    mean: 'kazanmak',
  },
  {
    sentence1: 'I withdraw money from the ATM every week',
    sentence2: 'She always withdraws cash from the bank after work',
    sentence3:
      'We often withdraw funds from our savings account for emergencies',
    sentence4:
      'They sometimes withdraw large sums of money for their business ventures',
    sentence5: 'He never withdraws more than sentence100 dollars at a time',
    sentence6:
      'Mary usually withdraws money on Fridays to cover her weekend expenses',
    sentence7:
      'The company regularly withdraws funds to invest in new projects',
    sentence8:
      'My parents occasionally withdraw money from their retirement savings',
    sentence9: 'Sarah rarely withdraws cash as she prefers using credit cards',
    sentence10:
      'Our friends frequently withdraw money from their joint account for vacations',
    word: 'withdraw',
    mean: 'geri çekilmek, para çekmek',
  },
  {
    sentence1:
      'I withstand the hot weather every summer by staying hydrated and wearing light clothing',
    sentence2:
      'My car withstands long drives with ease, thanks to regular maintenance and oil changes',
    sentence3:
      'We often withstand challenging times by relying on each other for support and encouragement',
    sentence4:
      'She frequently withstands busy schedules and stressful deadlines at work',
    sentence5:
      'The athlete withstands intense training sessions to improve his performance on the field',
    sentence6:
      'They rarely withstand early mornings, preferring to sleep in whenever they can',
    sentence7:
      'He always withstands criticism with a positive attitude and uses it to grow and improve',
    sentence8:
      "We usually withstand long waits at the doctor's office by bringing a book or listening to music",
    sentence9:
      'The old house has managed to withstand the test of time and remains standing after many years',
    sentence10:
      'The fabric of this shirt is designed to withstand frequent washing and maintain its color and shape',
    word: 'withstand',
    mean: 'karşı koymak, direnmek',
  },
  {
    sentence1: 'I write in my diary every evening before going to bed',
    sentence2: 'She writes letters to her friends every month',
    sentence3: 'We write emails to our professor every week',
    sentence4: 'He writes poems in his free time',
    sentence5: 'They write reports for their boss every day',
    sentence6: 'My sister writes articles for a magazine twice a year',
    sentence7: 'The students write essays for their English class once a month',
    sentence8: 'We write shopping lists before going to the grocery store',
    sentence9: 'He writes his grandmother a letter on her birthday',
    sentence10: 'She writes postcards to her family while on vacation',
    word: 'write',
    mean: 'yazmak',
  },
];

export const irregularV2Sentences: IVerbsSentences[] = [
  {
    sentence1: 'Yesterday, I arose early to catch the sunrise',
    sentence2: 'The sun arose early this morning',
    sentence3: 'Two days ago, a rare opportunity arose for me to travel abroad',
    sentence4: 'Last week, an unexpected problem arose at work',
    sentence5: 'On Saturday, I woke up late because I arose later than usual',
    sentence6:
      'Sometimes, difficulties arose during the project, but we managed to overcome them',
    sentence7:
      'Last month, a new opportunity arose for me to learn a new skill',
    sentence8:
      'Yesterday evening, a sense of excitement arose when I received good news',
    sentence9:
      'Often, challenges arose during my studies, but I persevered and succeeded',
    sentence10:
      'In the past, many conflicts arose between the two neighboring countries, but now they have resolved their differences',
    word: 'arose',
    mean: 'ortaya çıkmak',
  },
  {
    sentence1: 'I awoke early to catch the morning train',
    sentence2: 'She awoke feeling refreshed after a good night’s sleep',
    sentence3: 'The loud noise awoke everyone in the house',
    sentence4: 'He awoke to the sound of birds singing outside his window',
    sentence5: 'The alarm clock awoke me abruptly from my dream',
    sentence6: 'We awoke to a beautiful sunrise over the mountains',
    sentence7: 'The baby awoke crying in the middle of the night',
    sentence8: 'They awoke to find their car covered in snow',
    sentence9: 'When the sun awoke, the frost melted from the grass',
    sentence10: 'The hiker awoke to discover a deer standing nearby',
    word: 'awoke',
    mean: 'uyanmak, uyandırmak',
  },
  {
    sentence1: 'I was at the park yesterday',
    sentence2: 'She was my best friend in high school',
    sentence3: 'The weather was sunny last weekend',
    sentence4: 'He was late for the meeting',
    sentence5: 'We were excited about the concert',
    sentence6: 'The cat was curious about the new toy',
    sentence7: 'They were happy to see each other',
    sentence8: 'It was a beautiful sunset',
    sentence9: 'The book was interesting from start to finish',
    sentence10: 'The museum exhibit was informative and fun',
    word: 'was/were',
    mean: 'olmak',
  },
  {
    sentence1: 'Yesterday, I bore witness to an incredible event',
    sentence2:
      'Last week, I bore the weight of my responsibilities with dignity',
    sentence3: 'The branches bore the weight of the snow',
    sentence4: 'She bore his snooring',
    sentence5: 'I hardly bore his manner during the meeting',
    sentence6: 'The wall bore the weight of the roof',
    sentence7: 'I bore in mind your advice when I made my decision',
    sentence8:
      'They bore in mind the needs of their customers when they designed the product',
    sentence9:
      'I bore in mind the weather forecast when I packed my suitcase for the trip',
    sentence10:
      'The teacher bore in mind the different learning styles of her students when she planned her lessons',
    word: 'bore',
    mean: 'taşımak, tahammül etmek',
  },
  {
    sentence1: 'Yesterday, I beat my personal record in running',
    sentence2:
      'During the game, our team beat the opponents by sentence4-0 score',
    sentence3:
      'Last week, my younger brother beat me in chess for the first time',
    sentence4: 'We beat the traffic and arrived at the party on time',
    sentence5: 'I beat the rush hour by leaving early for work this morning',
    sentence6: 'His heart beat fast when he saw his girlfriend',
    sentence7:
      'She beat the stress of her job by practicing yoga and meditation',
    sentence8:
      'My grandma beat eggs by hand to make the most delicious omelettes when I was a child',
    sentence9:
      'Yesterday, I beat my fear of public speaking and delivered a successful presentation',
    sentence10: 'As a child, I beat my own drums and annoy my siblings',
    word: 'beat',
    mean: 'vurmak, dövmek, yenmek',
  },
  {
    sentence1: 'Yesterday, I became very good at playing the piano',
    sentence2: 'I often became tired after running for a long time',
    sentence3: 'Last month, she became a successful businesswoman',
    sentence4: 'My brother became a doctor after studying for many years',
    sentence5: 'Every morning, he became anxious before his big presentation',
    sentence6: 'I always became happy when I visited my grandparents',
    sentence7: 'Last year, I became interested in learning a new language',
    sentence8: 'After practicing for hours, I became skilled at drawing',
    sentence9: 'Whenever it rained, the roads became slippery and dangerous',
    sentence10:
      'During the summer, the garden became colorful with blooming flowers',
    word: 'became',
    mean: 'olmak',
  },
  {
    sentence1: 'I began my journey to Paris last summer',
    sentence2: "We began cooking dinner at 6 o'clock yesterday evening",
    sentence3: 'She began her new job on Monday morning',
    sentence4: 'They began a discussion about the project during lunchtime',
    sentence5: 'He began the football match with a powerful goal',
    sentence6: 'The movie began at 9 PM, and we watched it till midnight',
    sentence7:
      'Yesterday, I opened the book and began reading the first chapter',
    sentence8: 'The concert began promptly at 7:30 PM and lasted for two hours',
    sentence9: 'She began on her trip to Australia last month',
    sentence10:
      "At 8 o'clock this morning, the teachers entered the classroom and began the lecture",
    word: 'began',
    mean: 'başlamak, başlatmak',
  },
  {
    sentence1: 'Yesterday, I bent down to pick up the fallen pen',
    sentence2: 'Last week, I bent the wire into a small loop',
    sentence3: 'She often bent the rules to help her friends',
    sentence4: 'He rarely bent his knees while dancing',
    sentence5: 'They always bent the truth to avoid getting in trouble',
    sentence6: 'The trees bent in the strong wind last night',
    sentence7: 'The old chair leg finally bent after years of use',
    sentence8: 'She bent over backwards to make sure everyone was happy',
    sentence9: 'The road bent sharply to the left at the top of the hill',
    sentence10:
      'The gymnast gracefully bent her body into a perfect arc during her routine',
    word: 'bent',
    mean: 'eğmek, eğilmek, bükmek',
  },
  {
    sentence1: 'I bet on the horse race last weekend and won a lot of money',
    sentence2: 'She bet on her favorite team last week, but they lost the game',
    sentence3:
      'They bet on the lottery last chrismas, hoping to win a big prize',
    sentence4:
      'He bet his friend that he could finish the race in under sentence30 minutes, and he did it',
    sentence5:
      'We bet on the outcome of the football game with our friends, which was foolish',
    sentence6:
      'Yesterday, my brother bet on the roulette table and lost all his money',
    sentence7:
      'She bet on the number seven in roulette, as it was her lucky number',
    sentence8:
      'Last month, they bet on the poker game and came out as the winners',
    sentence9:
      'We bet on the results of the quiz show and enjoyed guessing right',
    sentence10:
      'He rarely bet on sports events, as he prefered to save his money for other activities',
    word: 'bet',
    mean: 'bahse girmek',
  },
  {
    sentence1: 'I bound the book yesterday',
    sentence2: 'She bound her notebooks with colorful covers',
    sentence3: 'They bound their reports in proper order',
    sentence4: 'He bound his documents with great care',
    sentence5: 'We eventually bound the documents together after much effort',
    sentence6: 'The librarian bound the old newspapers for preservation',
    sentence7:
      'The students quickly bound their group project before the deadline',
    sentence8: 'I bound my assignments with sturdy paper clips',
    sentence9: 'She slowly bound the loose pages with string',
    sentence10: 'They never bound their research papers in time for submission',
    word: 'bound',
    mean: 'bağlamak, yarayı sarmak',
  },
  {
    sentence1: 'Yesterday, I bit into a juicy apple',
    sentence2: "Last week, my dog bit my neighbor's shoe",
    sentence3: 'When I was little, my sister bit me while we were playing',
    sentence4: 'On my vacation, a bird bit my cheek at the beach',
    sentence5: 'Every time I ate spicy food, I bit my tongue',
    sentence6: 'In the past, my cat bit my fingers when I played with her',
    sentence7: "The shark bit the surfer's leg",
    sentence8: 'Two days ago, my brother accidentally bit into a sour lemon',
    sentence9: 'Last week, some ants bit me when I was walking in the park',
    sentence10: 'The child bit her finger while eating a carrot',
    word: 'bit',
    mean: 'ısırmak, sokmak',
  },
  {
    sentence1: 'Yesterday, I bled a little when I cut my finger while cooking',
    sentence2: 'Last week, I bled a lot when I fell off my bike',
    sentence3:
      'I often bled when I was a child because I had frequent nosebleeds',
    sentence4:
      'When I was younger, I bled every time I brushed my teeth too hard',
    sentence5:
      'Last night, I bled again when I accidentally scratched myself with a sharp object',
    sentence6:
      'My cat bled a little when it hurt its paw on a thorn last month',
    sentence7:
      'When I was in high school, I bled during my first aid class while practicing bandaging techniques',
    sentence8:
      'Last winter, I bled from a small wound when I slipped on the ice',
    sentence9:
      'I rarely bled when I was pregnant, but it did happen once or twice',
    sentence10:
      'Two years ago, I bled a lot when I had a bad fall while hiking in the mountains',
    word: 'bled',
    mean: 'kanamak, içi sızlamak',
  },
  {
    sentence1:
      'Yesterday, the wind blew so strongly that I had to hold onto my hat',
    sentence2:
      'I always blew out the birthday candles in one breath when I was a child',
    sentence3: 'Last week, the flowers in the garden blew away in the storm',
    sentence4: 'After the game, he blew on his hands to warm them up',
    sentence5: 'Every time I blew up a balloon, it popped',
    sentence6:
      'The wind blew constantly throughout the night, keeping me awake',
    sentence7: 'I once blew all my money on a shopping spree',
    sentence8: 'She blew on her soup to cool it down before taking a sip',
    sentence9: 'Last year, I blew out my birthday candles at the beach',
    sentence10: 'He blew away the competition with his incredible performance',
    word: 'blew',
    mean: 'esmek, üflemek',
  },
  {
    sentence1: 'Last night, I broke my favorite mug while washing the dishes',
    sentence2: 'Yesterday morning, I broke my pencil by accident during class',
    sentence3: 'Two days ago, I broke a vase when I bumped into the table',
    sentence4:
      'Last week, I broke my phone screen after it fell out of my pocket',
    sentence5: 'On Monday, I broke my shoelace while running in the park',
    sentence6: 'Last month, I broke the window with a baseball by mistake',
    sentence7:
      'Yesterday evening, I broke a plate when I dropped it on the kitchen floor',
    sentence8:
      'In the past year, I broke three pairs of sunglasses due to being careless',
    sentence9: 'Last summer, I broke my arm while riding my bike downhill',
    sentence10:
      'The last time I played sports, I broke something, mainly my glasses',
    word: 'broke',
    mean: 'kırmak, kırılmak, bırakmak',
  },
  {
    sentence1: 'I bred rabbits last year as a hobby',
    sentence2: 'She bred dogs for show competitions when I was in Sivas',
    sentence3: 'We bred chickens on our farm',
    sentence4: 'He bred horses with strong pedigrees',
    sentence5: 'They never bred cats because of allergies',
    sentence6:
      'I often bred tropical fish in my spare time when I was at secondary school',
    sentence7: 'She rarely bred birds due to the noise they made',
    sentence8: 'We bred cows for their milk',
    sentence9: 'He occasionally bred snakes for sale in his pet store',
    sentence10: 'They bred guinea pigs for research purposes',
    word: 'bred',
    mean: 'yavrulamak, neden olmak, üretmek',
  },
  {
    sentence1: 'I brought my lunch to work every day last week',
    sentence2: 'She brought her passport when we traveled abroad',
    sentence3: 'They brought a delicious cake to the party yesterday',
    sentence4: 'He brought his umbrella to the park because it was raining',
    sentence5: 'We brought our pets to the vet for their annual check-up',
    sentence6: 'My friend brought a gift for my birthday last year',
    sentence7: 'The teacher brought a whiteboard marker to write on the board',
    sentence8: 'Sarah always brought her laptop to class to take notes',
    sentence9:
      'I brought my camera to the concert to capture memorable moments',
    sentence10:
      'We brought our board games to the family gathering and had a great time playing together',
    word: 'brought',
    mean: 'getirmek',
  },
  {
    sentence1: 'The radio station broadcast the news every hour',
    sentence2: 'She broadcast her live cooking show on social media',
    sentence3: 'The TV network broadcast the football game last night',
    sentence4:
      'He broadcast a message to all employees about the upcoming meeting',
    sentence5:
      'The emergency alert system broadcast a weather warning yesterday',
    sentence6: 'They broadcast the concert live from the stadium',
    sentence7:
      'The local news channel broadcast updates on the traffic situation',
    sentence8: 'The podcast host broadcast interviews with famous authors',
    sentence9:
      'The satellite phone broadcast distress signals during the shipwreck',
    sentence10: 'The weather station broadcast the forecast for the week',
    word: 'broadcast',
    mean: 'yayınlamak, yaymak',
  },
  {
    sentence1: 'I built a sandcastle on the beach yesterday',
    sentence2: 'She often built model airplanes when she was younger',
    sentence3: 'We quickly built a fire to keep warm in the woods',
    sentence4:
      'He rarely built things with his hands, but he enjoyed the experience',
    sentence5: 'They nervously built a makeshift shelter during the storm',
    sentence6:
      'The children enthusiastically built a tower out of blocks at the daycare',
    sentence7:
      'My grandfather skillfully built a wooden bookshelf for our living room',
    sentence8:
      'She frequently built puzzles in her free time to relax and unwind',
    sentence9: 'We painstakingly built a gingerbread house for the holidays',
    sentence10: "He happily built a birdhouse for his grandmother's backyard",
    word: 'built',
    mean: 'inşa etmek, geliştirmek',
  },
  {
    sentence1: 'Yesterday, I burnt the cookies in the oven',
    sentence2: 'Last week, we burnt the old documents in the backyard',
    sentence3: 'My sister accidentally burnt her hand while cooking dinner',
    sentence4: 'When I was a kid, I burnt my tongue on hot soup',
    sentence5:
      'On the camping trip, we burnt marshmallows over the campfire every night',
    sentence6: 'The house caught fire and burnt to the ground last year',
    sentence7:
      'During the fireworks show, we burnt through a pack of sparklers in minutes',
    sentence8: 'They burnt the bridge to prevent the enemy from crossing',
    sentence9: 'The police burnt the drugs they had confiscated',
    sentence10: 'He burnt the letter after reading it',
    word: 'burnt',
    mean: 'yanmak, yakmak',
  },
  {
    sentence1:
      'Yesterday, I burst into laughter when I heard a really funny joke',
    sentence2: 'Last week, the balloon burst with a loud noise',
    sentence3:
      'Every morning, the children burst out of their bedrooms and into the kitchen for breakfast',
    sentence4:
      'On that day, the dam burst and caused widespread flooding in the area',
    sentence5:
      'During the party, the children burst into the room, excited to see the surprise',
    sentence6:
      'After waiting for hours, my patience finally burst, and I started to complain',
    sentence7:
      'Last night, fireworks burst and lit up the sky in celebration of a special event',
    sentence8: 'When the soap bubble became too big, it burst and disappear',
    sentence9:
      'The water pipe burst, causing a flood in the basement of the house last month',
    sentence10:
      "As soon as I saw her, all my emotions burst forth, and I couldn't control my happiness",
    word: 'burst',
    mean: 'patlamak, patlatmak',
  },
  {
    sentence1: 'Yesterday, I bought a new dress at the mall',
    sentence2: 'My mother always bought fresh fruit at the market on Sundays',
    sentence3:
      'When I was in college, I bought a used car to get around campus',
    sentence4:
      'Last month, my friend bought tickets to see her favorite band in concert',
    sentence5:
      'Every week, my dad bought flowers for my mom because he loved her',
    sentence6: 'I bought a gift for my sister on her birthday last year',
    sentence7:
      'During the holiday season, many people bought gifts for their loved ones',
    sentence8:
      'I never bought anything online until last week when I ordered a new phone',
    sentence9:
      'In the past, I always bought lunch at work, but now I bring my own',
    sentence10:
      'When I was younger, my parents often bought me toys to play with',
    word: 'bought',
    mean: 'satın almak',
  },
  {
    sentence1: 'I caught the ball during the game yesterday',
    sentence2: "He caught the flu last week, but he's feeling better now",
    sentence3: 'They caught the bus just in time to make it to the movie',
    sentence4: 'She caught a glimpse of her favorite celebrity at the concert',
    sentence5: 'We caught up with old friends at the reunion last month',
    sentence6: 'The cat caught a mouse in the backyard last night',
    sentence7: 'The teacher caught me copying homework, and I got in trouble',
    sentence8: 'I caught my sister singing in the shower this morning',
    sentence9: 'He caught the train every day to get to work on time',
    sentence10: 'We caught a beautiful sunset at the beach on our vacation',
    word: 'caught',
    mean: 'tutmak, yakalamak, yetişmek',
  },
  {
    sentence1: 'Last night, I chose a new book to read before bed',
    sentence2: 'I frequently chose to have breakfast at my favorite café',
    sentence3: 'Yesterday, I chose to take a different route to work',
    sentence4: 'Every weekend, I chose to spend time with my family',
    sentence5: 'In the past, I often chose to go for a run in the mornings',
    sentence6: 'Last month, I chose to learn how to play the guitar',
    sentence7: 'Whenever I had free time, I chose to watch movies',
    sentence8:
      'During my vacation, I frequently chose to visit museums and historical sites',
    sentence9:
      'Yesterday evening, I chose to cook a delicious meal for my friends',
    sentence10: 'In the past, I often chose to go hiking in the mountains',
    word: 'chose',
    mean: 'seçmek',
  },
  {
    sentence1: 'Last night, I clung to my favorite pillow as I fell asleep',
    sentence2:
      'During the storm, we all clung tightly to each other for safety',
    sentence3:
      "When I was a child, I often clung to my mother's leg when I was feeling shy",
    sentence4:
      'After the race, the exhausted runner clung to the finish line for support',
    sentence5: 'The kitten clung to the tree branch as it learned to climb',
    sentence6:
      'Throughout the concert, the fans clung to every word the singer sang',
    sentence7: "In the haunted house, I clung to my friend's arm in fear",
    sentence8:
      'Every morning, the spider clung to its web and waited for prey to come by',
    sentence9:
      'At the amusement park, the children clung to their parents as they went on the roller coaster',
    sentence10:
      'During the earthquake, people in the buildings clung to their desks for protection',
    word: 'clung',
    mean: 'yapışmak, sıkı sıkı tutmak, sarılmak',
  },
  {
    sentence1: 'She came to the party last night',
    sentence2: 'The train came right on time',
    sentence3: 'We came home after a long day at work',
    sentence4: 'He came to visit us during the holidays',
    sentence5: 'The idea came to me while I was walking',
    sentence6: 'They came to the beach for a relaxing vacation',
    sentence7: 'The storm came suddenly, catching everyone off guard',
    sentence8: 'The cat came running when it heard the food bowl',
    sentence9: 'The news came as a surprise to everyone',
    sentence10: 'The sun came out after days of rain',
    word: 'came',
    mean: 'gelmek',
  },
  {
    sentence1: 'The shirt I bought last week cost me $20',
    sentence2:
      'I usually bought groceries from that store, but it cost more than usual yesterday',
    sentence3: 'The concert tickets cost a lot, but it was worth it',
    sentence4: 'Last month, the repairs on my car cost a fortune',
    sentence5:
      "He always bought expensive gifts for his girlfriend, but last year it didn't cost him much",
    sentence6: 'The repair work on the house cost me a lot of time and effort',
    sentence7: 'The new laptop I bought two days ago cost me a small fortune',
    sentence8: 'My parents went on a vacation that cost them a lot of money',
    sentence9:
      'The dinner at the fancy restaurant last night cost us a fortune',
    sentence10:
      'I remember when I was a student, books for my courses cost a lot',
    word: 'cost',
    mean: 'mal olmak, etmek',
  },
  {
    sentence1: 'I cut my hair last week',
    sentence2: 'She cut the cake at the party yesterday',
    sentence3: 'We cut the vegetables for dinner earlier today',
    sentence4: 'He cut his finger while chopping the wood',
    sentence5: 'They cut the grass last Sunday',
    sentence6: 'The tailor cut the fabric to make a new dress for me',
    sentence7: 'I cut my nails on the weekend',
    sentence8: "She cut her hair because she didn't like it long",
    sentence9: 'I cut paper for my art projects on my own when I was younger',
    sentence10:
      'The chef cut the ingredients finely to create a delicious dish',
    word: 'cut',
    mean: 'kesmek, kısmak',
  },
  {
    sentence1: 'Yesterday, I dug a hole in my backyard to plant some flowers',
    sentence2: 'She dug a trench all by herself last weekend',
    sentence3:
      'We often dug up potatoes from our vegetable patch when I was a kid',
    sentence4: 'My grandfather dug a well on his farm many years ago',
    sentence5:
      'When I was vacationing in Mexico, I dug for seashells on the beach every morning',
    sentence6: 'Last summer, my friends and I dug a campfire pit in the woods',
    sentence7:
      'My little brother dug a hole in the sandbox, but forgot to cover it up before leaving',
    sentence8:
      'After the storm, the workers dug out the fallen trees from the road',
    sentence9:
      'Once, I dug through some old boxes in my attic and found some forgotten treasures',
    sentence10:
      'When I was studying archaeology, we dug up some fascinating artifacts from ancient civilizations',
    word: 'dug',
    mean: 'kazmak',
  },
  {
    sentence1:
      'Last summer, I frequently dove into the crystal-clear waters of the Caribbean',
    sentence2:
      'Two days ago, I bravely dove off the high diving board at the local swimming pool',
    sentence3:
      'Yesterday, I leisurely dove into the deep end of the pool, enjoying the refreshing sensation',
    sentence4:
      'Every weekend during my vacation, I happily dove into the turquoise ocean to explore its colorful marine life',
    sentence5:
      'Last month, I rarely dove into the pool because the water was too cold',
    sentence6:
      'Three years ago, I excitedly dove into the ocean for the first time and instantly fell in love with underwater adventures',
    sentence7:
      'Last week, I eagerly dove into the clear waters of a cenote in Mexico, admiring the breathtaking limestone formations',
    sentence8:
      'On my birthday, I joyfully dove into the pool and celebrated with my friends',
    sentence9:
      'Every summer, I regularly dove into the ocean and discovered hidden treasures beneath the waves',
    sentence10:
      'Yesterday morning, I confidently dove into the pool and won first place in the diving competition',
    word: 'dove',
    mean: '(suya) dalmak',
  },
  {
    sentence1: 'I did my homework last night',
    sentence2: 'She did her chores every day',
    sentence3: 'He did his work yesterday',
    sentence4: 'They did their exercise this morning',
    sentence5: 'We did the dishes after dinner',
    sentence6: 'Maria did her laundry last weekend',
    sentence7: 'John did his best in the exam',
    sentence8: 'The students did their presentations successfully',
    sentence9: 'I did a lot of shopping last week',
    sentence10: 'The team did a great job in the match yesterday',
    word: 'did',
    mean: 'yapmak, etmek',
  },
  {
    sentence1: 'I drew a beautiful picture yesterday',
    sentence2: 'She often drew landscapes when she was younger',
    sentence3: 'They frequently drew together during their art class',
    sentence4: 'He never drew anything from memory',
    sentence5: 'We always drew with colored pencils instead of markers',
    sentence6: 'The artist drew a portrait of his friend last week',
    sentence7: 'She drew cartoons during her free time in high school',
    sentence8: 'They occasionally drew cartoons for the school newspaper',
    sentence9:
      'He rarely drew animals, but this time he decided to give it a try',
    sentence10: 'We sometimes drew still life objects during our art lessons',
    word: 'drew',
    mean: 'çizmek',
  },
  {
    sentence1: 'I dreamt about going on a vacation last night',
    sentence2: 'She dreamt of becoming a famous singer when she was a child',
    sentence3: 'He often dreamt of winning the lottery',
    sentence4: 'We dreamt about living in a big house when we were younger',
    sentence5: 'They dreamt of traveling around the world after retirement',
    sentence6:
      'I never dreamt that I would meet my favorite celebrity in person',
    sentence7: 'She always dreamt of studying abroad during her college years',
    sentence8: 'He once dreamt of being a professional soccer player',
    sentence9: 'We sometimes dreamt about our future together as a family',
    sentence10: 'They frequently dreamt about starting their own business',
    word: 'dreamt',
    mean: 'rüya görmek, düşlemek, hayal etmek',
  },
  {
    sentence1: 'I drank a cup of coffee yesterday morning',
    sentence2: 'She often drank water during her workout sessions',
    sentence3: 'They frequently drank tea in the evenings in the past',
    sentence4: 'Last week, I drank a glass of orange juice every morning',
    sentence5: 'He rarely drank alcohol at parties',
    sentence6: 'We sometimes drank milk before going to bed',
    sentence7: 'Yesterday, I drank a can of soda with my lunch',
    sentence8:
      'As a child, she always drank a glass of warm milk before sleeping',
    sentence9: 'They occasionally drank beer while watching football games',
    sentence10: 'Last night, we drank champagne to celebrate our anniversary',
    word: 'drank',
    mean: 'içmek',
  },
  {
    sentence1: 'Yesterday, I drove to the supermarket to buy groceries',
    sentence2: 'I frequently drove my friends to school last semester',
    sentence3:
      'Last week, I drove to the beach and enjoyed a relaxing day in the sun',
    sentence4:
      'Every weekend, I drove to the park to play sports with my friends',
    sentence5: 'Yesterday evening, I drove my sister to her piano class',
    sentence6: 'They drove to the beach for a vacation',
    sentence7:
      'Last month, I drove my family to visit our relatives in a different city',
    sentence8:
      'I often drove my neighbors to the train station when they needed a ride',
    sentence9: "On my birthday, I drove my parents' car for the first time",
    sentence10:
      "Last Saturday, I drove to my grandparents' house to have dinner with them",
    word: 'drove',
    mean: 'araba sürmek, itmek, yürütmek',
  },
  {
    sentence1: 'I dwelt in that house for many years',
    sentence2: 'She frequently dwelt on the past events',
    sentence3: 'They rarely dwelt on their mistakes',
    sentence4: 'We often dwelt in the countryside during our summer vacations',
    sentence5: 'He dwelt on his guilt for days after the incident',
    sentence6: 'The family dwelt happily in their new home',
    sentence7: 'The thought of her mistake dwelt in her mind all night',
    sentence8: 'The memory of that place dwelt in my heart',
    sentence9: 'She always dwelt in the memories of her childhood',
    sentence10: 'The joy of their friendship dwelt in their hearts forever',
    word: 'dwelt',
    mean: 'oturmak, ikamet etmek, derinlemesine düşünmek (on)',
  },
  {
    sentence1: 'Yesterday, I ate a delicious pizza for dinner',
    sentence2: 'Last week, my family and I ate at our favorite restaurant',
    sentence3: 'Every morning, I ate a bowl of cereal for breakfast',
    sentence4: 'I often ate fruits and vegetables with my meals',
    sentence5: 'On Sunday, we ate a big barbecue with our friends',
    sentence6: 'When I was a child, I ate ice cream every summer',
    sentence7:
      'After school, I always ate a snack to hold me over until dinner',
    sentence8: 'I rarely ate fast food because I preferred homemade meals',
    sentence9: 'During the holidays, we ate a lot of traditional dishes',
    sentence10:
      'In the past, I used to eat a lot of junk food, but now I eat healthier',
    word: 'ate',
    mean: 'yemek yemek',
  },
  {
    sentence1: 'The leaves fell from the trees in autumn',
    sentence2: 'She slipped on the wet pavement and fell',
    sentence3: 'The snow fell gently, covering the ground',
    sentence4: 'He fell asleep while reading a book',
    sentence5: 'The temperature fell dramatically overnight',
    sentence6: 'The vase fell off the shelf and broke',
    sentence7: 'They fell in love during their trip',
    sentence8: 'The stock market fell after the economic report',
    sentence9: 'The rain fell heavily during the storm',
    sentence10: 'The sun fell below the horizon, ending the day',
    word: 'fell',
    mean: 'düşmek, azalmak',
  },
  {
    sentence1: 'Yesterday, I fed my cat her favorite dry food',
    sentence2: 'Last week, I fed the stray dogs in the park',
    sentence3:
      'Yesterday morning, I fed the fish in my aquarium before leaving for work',
    sentence4: 'On Sunday, I fed the birds in my backyard',
    sentence5: 'Two days ago, I fed the rabbits at the petting zoo',
    sentence6: 'Last night, I fed my baby brother his dinner',
    sentence7: 'Every evening, I fed the horses at the stable',
    sentence8: "On Friday, I fed the chickens in my neighbor's backyard",
    sentence9: 'Last month, I fed the ducks at the pond near my house',
    sentence10: 'Yesterday evening, I fed the squirrels in the park',
    word: 'fed',
    mean: 'beslemek',
  },
  {
    sentence1: 'I felt happy yesterday when I saw my friends',
    sentence2: 'She felt excited when she heard the good news',
    sentence3: 'We felt relaxed after we finished our work',
    sentence4: 'They felt proud when they saw their children perform on stage',
    sentence5: 'He felt grateful when his boss praised his hard work',
    sentence6: 'The students felt relieved when they passed their exams',
    sentence7: 'The family felt joyful when they went on vacation together',
    sentence8:
      'My sister felt surprised when she received a gift from her friend',
    sentence9: 'The team felt satisfied after completing the project on time',
    sentence10:
      'My grandparents felt content when they celebrated their sentence50th wedding anniversary',
    word: 'felt',
    mean: 'hissetmek, duymak',
  },
  {
    sentence1:
      'Yesterday, I fought with my brother over who would get to use the computer first',
    sentence2:
      'Last week, I fought with my best friend, but we quickly made up and apologized to each other',
    sentence3:
      'On Saturday mornings, my parents always fought about what to have for breakfast',
    sentence4:
      'Two days ago, my classmates and I fought to be the first ones on the bus for our field trip',
    sentence5: 'Yesterday, my brother and I fought over the TV remote',
    sentence6: 'During the game, the players fought hard for the victory',
    sentence7:
      'When I was younger, I often fought with my siblings over who got the biggest slice of cake',
    sentence8:
      'Yesterday evening, my dog fought with another dog at the park, but luckily no one got hurt',
    sentence9:
      'Throughout my childhood, my parents frequently fought about money and expenses',
    sentence10:
      'The siblings often fought about who would use the computer first',
    word: 'fought',
    mean: 'savaşmak, dövüşmek',
  },
  {
    sentence1:
      'I found my lost keys yesterday after searching for them all morning',
    sentence2: "She found a new job last month and she's really happy about it",
    sentence3:
      'We found a great restaurant on our vacation and ate there every night',
    sentence4:
      'He found a rare coin in his garden while he was planting flowers',
    sentence5: 'Mary found her passport in the drawer where she had left it',
    sentence6:
      'They found a new apartment in the city center and moved in last week',
    sentence7: "The detective found the missing clue in the victim's diary",
    sentence8:
      "Yesterday, I found an interesting book at the library and couldn't put it down",
    sentence9:
      'My sister found a cute puppy in the park and decided to keep it as a pet',
    sentence10:
      "We found the perfect gift for our parents' anniversary during the weekend shopping trip",
    word: 'found',
    mean: 'bulmak',
  },
  {
    sentence1: 'The dress fit perfectly for the special occasion',
    sentence2: 'He tried on several shoes, but none of them fit comfortably',
    sentence3: 'The puzzle pieces fit together to reveal a beautiful picture',
    sentence4: 'She fit all her belongings into a single suitcase for the trip',
    sentence5: 'The key fit the lock, and the door opened smoothly',
    sentence6: 'The new sofa fit well in the living room',
    sentence7: 'The team’s strategy fit the game plan perfectly',
    sentence8: 'His explanation fit the evidence presented in court',
    sentence9: 'The tailor fit the suit to his measurements',
    sentence10: '',
    word: 'fit',
    mean: 'uymak, uydurmak, sığmak',
  },
  {
    sentence1: 'Yesterday, I fled from the scary dog at the park',
    sentence2: 'Last month, my sister and I fled from the burning building',
    sentence3: 'Last night, the cat fled from the loud noise of the thunder',
    sentence4:
      'On weekends, we often fled from the crowded city to enjoy nature',
    sentence5: 'After the loud explosion, the frightened crowd fled in panic',
    sentence6: 'During the storm, the birds fled to find shelter',
    sentence7: 'When the alarm sounded, everyone quickly fled the building',
    sentence8: 'The rabbit fled from the fox as soon as it spotted it',
    sentence9:
      'Once a year, the villagers fled to higher ground to escape the floods',
    sentence10:
      'Early in the morning, the deer fled from the hunters in the forest',
    word: 'fled',
    mean: 'kaçmak',
  },
  {
    sentence1: 'She flung her coat onto the chair as she entered the room',
    sentence2: 'He angrily flung the book across the room',
    sentence3: 'The wind flung leaves into the air during the storm',
    sentence4: 'They flung their arms around each other in celebration',
    sentence5: 'The chef flung the pizza dough high into the air',
    sentence6: 'The cat playfully flung its toy mouse around the room',
    sentence7: 'The angry protester flung a sign at the police',
    sentence8: 'The dancer gracefully flung her scarf during the performance',
    sentence9:
      'The door suddenly opened, and the wind flung it against the wall',
    sentence10: 'The mischievous child flung water balloons at the neighbors',
    word: 'flung',
    mean: 'fırlatıp atmak, savurmak',
  },
  {
    sentence1: 'Last week, I flew to a beautiful island for my vacation',
    sentence2: 'She flew to visit her grandparents during the holiday',
    sentence3: 'Yesterday, we flew to Paris for a weekend getaway',
    sentence4: 'They often flew to different countries for business meetings',
    sentence5:
      'Two years ago, I flew for the first time and it was an amazing experience',
    sentence6:
      'Every summer, my family flew to our favorite beach destination for a relaxing vacation',
    sentence7: 'Last night, the birds flew gracefully across the sunset sky',
    sentence8:
      'She flew to New York every year to attend the fashion week when I worked for a daily magazine',
    sentence9:
      'They rarely flew on weekends as they preferred to spend time with family',
    sentence10: 'When I was younger, I flew kites with my friends in the park',
    word: 'flew',
    mean: 'uçmak, uçurmak',
  },
  {
    sentence1: 'My parents forbade me from going out late at night',
    sentence2: 'She forbade her children to eat too much candy',
    sentence3: 'The teacher forbade us to use our phones during class',
    sentence4: 'He forbade his employees from taking long breaks',
    sentence5: 'The sign on the door forbade smoking in the building',
    sentence6: 'My doctor forbade me from eating junk food',
    sentence7:
      'The school principal forbade students from wearing hats inside the school',
    sentence8:
      'The rules of the competition forbade using any electronic devices',
    sentence9:
      'The company policy forbade employees from sharing confidential information',
    sentence10: 'The law forbade parking in front of the fire hydrant',
    word: 'forbade',
    mean: 'yasaklamak',
  },
  {
    sentence1:
      'The meteorologist accurately forecast heavy rain for the weekend',
    sentence2: 'She forecast a drop in temperatures as winter approached',
    sentence3:
      'The weather app forecast sunny skies for the last few days but it rained',
    sentence4:
      'The economist forecast a recession based on market trends last year',
    sentence5:
      'The financial analyst forecast a rise in stock prices two days ago',
    sentence6: 'The farmer forecast a good harvest due to favorable conditions',
    sentence7:
      'The travel agency forecast increased bookings for summer vacations',
    sentence8:
      'The business consultant forecast growth for the startup company last month',
    sentence9:
      'The climate scientist forecast more frequent extreme weather events at the beginning of the decade',
    sentence10:
      'The sales team forecast higher sales during the holiday season',
    word: 'forecast',
    mean: 'tahmin etmek',
  },
  {
    sentence1: 'I foresaw the outcome of the game',
    sentence2: 'She never foresaw the challenges ahead',
    sentence3: 'They rarely foresaw the consequences of their actions',
    sentence4: 'He foresaw the potential risks in investments and he was right',
    sentence5: 'We previously foresaw the need for additional resources',
    sentence6:
      'The team frequently foresaw potential problems and found solutions in advance',
    sentence7: 'Jenny often foresaw the difficulties and prepared accordingly',
    sentence8:
      'He occasionally foresaw changes in the market and adapted his strategies',
    sentence9:
      'The company always foresaw future trends and stayed ahead of the competition',
    sentence10: 'We never foresaw such a positive response from the audience',
    word: 'foresaw',
    mean: 'önceden görmek',
  },
  {
    sentence1: 'I often foretold the outcome of the soccer matches correctly',
    sentence2:
      'Last year, she foretold that a major earthquake would hit the region',
    sentence3: 'The fortune teller foretold our future with great accuracy',
    sentence4: 'They frequently foretold the success of their business venture',
    sentence5: 'Yesterday, he foretold the happening of a significant event',
    sentence6:
      'My grandmother often foretold the weather based on her joint pain',
    sentence7: 'The ancient prophecy foretold the rise of a powerful leader',
    sentence8:
      'The psychic foretold that I would meet someone special in the near future',
    sentence9:
      "The astrologer foretold my financial success during last week's reading",
    sentence10: "The oracle foretold the heroine's journey to save the kingdom",
    word: 'foretold',
    mean: 'önceden haber vermek',
  },
  {
    sentence1: 'I forgot to buy milk yesterday',
    sentence2: 'She often forgot to lock the door before leaving',
    sentence3: 'He never forgot to bring his umbrella on rainy days',
    sentence4:
      'We forgot to turn off the lights before going to bed last night',
    sentence5: 'They rarely forgot to feed their pet cat',
    sentence6: 'My grandmother forgot where she put her glasses again',
    sentence7: 'The teacher forgot to give us homework yesterday',
    sentence8:
      'The children never forgot to say thank you after receiving a gift in the past',
    sentence9: 'He usually forgot to set his alarm clock and woke up late',
    sentence10: 'My sister often forgot to return my borrowed books',
    word: 'forgot',
    mean: 'unutmak',
  },
  {
    sentence1: 'I forgave my friend for forgetting my birthday last year',
    sentence2: 'She forgave her sister for breaking her favorite mug',
    sentence3: 'We forgave each other for our mistakes and moved on',
    sentence4: 'He forgave himself for making the wrong decision',
    sentence5: 'The teacher forgave the students for being late to class',
    sentence6:
      'They forgave their neighbor for accidentally damaging their garden',
    sentence7: 'I forgave myself for not studying enough for the exam',
    sentence8: 'She forgave her parents for not understanding her feelings',
    sentence9: 'We forgave our boss for being angry with us',
    sentence10: 'He forgave his friend for losing his keys',
    word: 'forgave',
    mean: 'bağışlamak',
  },
  {
    sentence1:
      'Last winter, the temperature suddenly dropped below zero and everything froze',
    sentence2:
      'Yesterday morning, I went outside and realized that the ground froze overnight',
    sentence3:
      'Last winter, the lake froze completely, allowing people to ice skate on it',
    sentence4:
      'Last week, we had a snowstorm and the entire town froze under a thick layer of ice',
    sentence5:
      'Our car froze overnight, and we had to wait for it to thaw before driving',
    sentence6:
      'The windows were covered in frost because the glass froze overnight',
    sentence7:
      'In the evenings, I enjoyed curling up on the couch with a warm blanket while the rest of the world froze outside',
    sentence8:
      'During the trip to the mountains, we hiked to the top of the peak and froze as we admired the breathtaking view',
    sentence9:
      'Whenever I opened the freezer, I would see that the ice cubes froze in their tray',
    sentence10:
      'On the coldest day of the year, I accidentally left my car windows open and when I returned, everything inside froze',
    word: 'froze',
    mean: 'donmak, dondurmak',
  },
  {
    sentence1:
      'Last week, the people successfully overthrew the oppressive regime',
    sentence2: 'John overthrew his opponent in the chess game yesterday',
    sentence3: 'They overthrew the corrupt government two years ago',
    sentence4:
      "The rebellion overthrew the dictator's rule in a matter of days",
    sentence5:
      'Last month, the citizens overthrew the unjust laws that were in place',
    sentence6:
      'The revolutionaries overthrew the monarchy and established a democratic system',
    sentence7:
      'She overthrew her bad habits and started leading a healthier lifestyle',
    sentence8:
      'Yesterday, the team overthrew their rivals and won the championship',
    sentence9:
      'The protests in the capital overthrew the president and led to a change in government',
    sentence10:
      'The students overthrew the unfair grading system and secured equal opportunities for all',
    word: 'overthrew',
    mean: '(hükümet) devirmek, yıkmak, düşürmek',
  },
  {
    sentence1: 'I paid my rent last week',
    sentence2: 'She always paid her bills on time',
    sentence3: 'We paid for the groceries at the supermarket yesterday',
    sentence4: 'He often paid for dinner when we went out',
    sentence5: 'They paid for their movie tickets with cash',
    sentence6: 'The company paid its employees a bonus last month',
    sentence7: 'I paid for my new phone with a credit card',
    sentence8: 'She paid for her vacation in installments',
    sentence9: 'We paid the restaurant bill with a gift card',
    sentence10: 'He never paid for parking in the city',
    word: 'paid',
    mean: 'ödemek',
  },
  {
    sentence1: 'Last week, I pled with my boss for a day off and she agreed',
    sentence2:
      'She pled with her parents to let her go to the concert and they finally said yes',
    sentence3: 'He pled with the police officer to let him off with a warning',
    sentence4:
      'They pled with the judge for a lighter sentence and were grateful when he agreed',
    sentence5:
      'Yesterday, I pled for forgiveness and my friend kindly accepted my apology',
    sentence6:
      'She pled for help when she got lost in the city and a stranger came to her rescue',
    sentence7:
      'We pled with our teacher to give us more time to finish the assignment and he gave us an extra day',
    sentence8:
      'Last month, I pled my case in front of the jury and they ruled in my favor',
    sentence9:
      'He pled for a second chance and his boss gave him another opportunity',
    sentence10:
      'The children pled with their parents to take them to the theme park and they finally relented',
    word: 'pled',
    mean: 'yalvarmak, dilemek',
  },
  {
    sentence1:
      'Last night, he proved his dedication to his team by scoring the winning goal',
    sentence2:
      "During the school year, she proved her intelligence by receiving straight A's on every test",
    sentence3:
      'Yesterday, we proved our friendship by supporting each other through a difficult time',
    sentence4:
      'Every week, he proved his reliability by always arriving on time for work',
    sentence5:
      'In the past, she proved her bravery by skydiving from an airplane',
    sentence6:
      'Last month, they proved their love for each other by getting married',
    sentence7:
      'Throughout his career, he proved his talent by consistently delivering impressive performances',
    sentence8:
      'Last week, she proved her creativity by designing a stunning piece of artwork',
    sentence9:
      'In the past, they proved their trustworthiness by always keeping their promises',
    sentence10:
      'Throughout their journey, they proved their determination by overcoming every obstacle in their path',
    word: 'proved',
    mean: 'kanıtlamak',
  },
  {
    sentence1: 'Yesterday, I put the groceries on the kitchen counter',
    sentence2: 'Last week, she put her clothes in the suitcase for the trip',
    sentence3: 'They put their toys back in the toy box after playing',
    sentence4:
      'On Monday morning, he put the keys in his pocket before leaving the house',
    sentence5:
      'In the evening, we put the dishes in the dishwasher after dinner',
    sentence6: 'My mother put fresh flowers in a vase on the dining table',
    sentence7:
      'Last night, he put the book on the bedside table before going to sleep',
    sentence8: 'On her birthday, she put on her favorite dress to celebrate',
    sentence9: 'When we arrived at the party, we put our coats in the closet',
    sentence10:
      'After finishing his homework, the student put his books in his backpack',
    word: 'put',
    mean: 'koymak, yerleştirmek, (on) giyinmek',
  },
  {
    sentence1: "I quit my job last year because I wasn't happy",
    sentence2: 'She quit smoking two months ago and feels much healthier now',
    sentence3: 'We quit playing basketball after we sprained our ankles',
    sentence4: 'They quit the band a while ago due to creative differences',
    sentence5: 'He quit his bad habits after his health scare',
    sentence6: 'I quit eating fast food after realizing how unhealthy it was',
    sentence7: 'She quit the gym when she moved to a new city',
    sentence8: 'We quit watching that TV show because it became boring',
    sentence9:
      'They quit studying late at night after realizing it affected their sleep',
    sentence10:
      'He quit using social media after realizing it was consuming too much of his time',
    word: 'quit',
    mean: 'bırakmak, terketmek',
  },
  {
    sentence1:
      'Last night, I read an interesting book that kept me engaged until midnight',
    sentence2: 'Jake read the newspaper while enjoying his coffee',
    sentence3:
      'Yesterday, she read a heartwarming poem that brought tears to her eyes',
    sentence4:
      'On their holiday, the family read a captivating novel by the beach',
    sentence5:
      'During the summer, I read several inspirational biographies that motivated me',
    sentence6: 'After dinner, he always read a bedtime story to his children',
    sentence7: 'Last Sunday, I read my favorite magazine in the park',
    sentence8:
      'Last weekend, they read an informative article about healthy eating habits',
    sentence9:
      'In the library, I read a newspaper article that grabbed my attention immediately',
    sentence10:
      'During my vacation in Europe, we read historical facts about each place we visited',
    word: 'read',
    mean: 'okumak',
  },
  {
    sentence1: 'Last year, the town council rebuilt the old bridge',
    sentence2: 'She rebuilt her confidence slowly over time',
    sentence3: 'They rebuilt their friendship after the argument',
    sentence4: 'The company rebuilt the website in just a few weeks',
    sentence5: 'He rebuilt his car engine himself with some help from a friend',
    sentence6: 'After the fire, they rebuilt their house from the ground up',
    sentence7: 'The team rebuilt their strategy and won the game',
    sentence8: 'She rebuilt her life after the divorce',
    sentence9:
      'They rebuilt the relationship with their neighbors by hosting a dinner',
    sentence10:
      'The city rebuilt the park playground for the children to enjoy',
    word: 'rebuilt',
    mean: 'yeniden inşa etmek',
  },
  {
    sentence1: 'Yesterday, I redid my math homework and got a better grade',
    sentence2: 'Last weekend, she redid her room and it looks amazing now',
    sentence3: 'I redid the puzzle and finished it in just an hour',
    sentence4:
      'After making a mistake, he quickly redid the experiment to get the correct results',
    sentence5: 'I redid the recipe and it turned out delicious this time',
    sentence6:
      'She redid her presentation for the third time and finally felt confident about it',
    sentence7: 'They redid the race course and set a new record',
    sentence8: 'Last month, we redid the garden and now it looks beautiful',
    sentence9:
      'He redid the drawing and it looked much better than the first one',
    sentence10:
      'When I realized I forgot a crucial step, I quickly redid the project before the deadline',
    word: 'redid',
    mean: 'yeniden yapmak',
  },
  {
    sentence1: 'I watched a movie that they remade last year',
    sentence2: "She remade the cake for her friend's birthday",
    sentence3: 'We remade our plans to meet at the park',
    sentence4: 'They remade the old house into a beautiful hotel',
    sentence5: 'He remade his resume last month',
    sentence6: 'The artist remade the painting in a different style',
    sentence7: 'I remade my bed with fresh sheets this morning',
    sentence8: 'The chef remade the dish to make it more flavorful',
    sentence9: 'The company remade their logo for the new marketing campaign',
    sentence10: 'After making a mistake, she remade the project to fix it',
    word: 'remade',
    mean: 'yeniden yapmak',
  },
  {
    sentence1: 'I repaid my friend the money I owed yesterday',
    sentence2: 'He repaid the loan in full last month',
    sentence3: 'She repaid the kindness by helping him with his project',
    sentence4: 'We repaid our parents by cleaning the house every weekend',
    sentence5: 'The company repaid its debt to the bank last year',
    sentence6: 'They repaid their gratitude by inviting us to dinner',
    sentence7: 'The customer repaid the store for the damaged goods',
    sentence8:
      'The student repaid the professor by excelling in the final exam',
    sentence9:
      'The neighbor repaid our generosity by offering to help with the yard work',
    sentence10:
      "The team repaid the coach's faith in them with a victory at the championship game",
    word: 'repaid',
    mean: '(para) geri vermek, ödemek',
  },
  {
    sentence1: 'Yesterday, I resold my old textbooks to other students',
    sentence2: "Last week, I resold my brother's bicycle to a neighbor",
    sentence3:
      'I frequently resold tickets for concerts and sports events last year',
    sentence4: 'Two days ago, I resold my used laptop at a garage sale',
    sentence5:
      'I often resold clothes that no longer fit me to second-hand shops',
    sentence6:
      "Last month, I resold my friend's unused phone on an online marketplace",
    sentence7:
      'Every summer, I resold my old camping gear to fellow outdoor enthusiasts',
    sentence8:
      'I regularly resold video games to my classmates before switching to a digital library',
    sentence9:
      'In the past, I resold collectible items that I found at flea markets',
    sentence10: 'I resold my handmade jewelry at local craft fairs',
    word: 'resold',
    mean: 'tekrar satmak, satmak',
  },
  {
    sentence1: 'Last week, I reset my phone to fix the problem',
    sentence2:
      'I reset the alarm clock yesterday to make sure I woke up on time',
    sentence3: 'She reset her password after she forgot it',
    sentence4:
      'When the computer froze, I reset it and it started working again',
    sentence5: 'I reset the television when the picture became blurry',
    sentence6:
      'Last month, I reset the modem to improve the internet connection',
    sentence7: 'He reset the game to try to beat his high score',
    sentence8: 'The technician reset the printer to resolve the issue',
    sentence9: 'After the power outage, I reset all the clocks in the house',
    sentence10:
      'When the experiment failed, the scientist reset the equipment and tried again',
    word: 'reset',
    mean: 'yeniden ayarlamak',
  },
  {
    sentence1: 'I often rethought my decision before taking action',
    sentence2: 'Yesterday, I rethought my plans before executing them',
    sentence3: 'Last week, I rethought my options before making a choice',
    sentence4:
      'He frequently rethought his strategy before presenting it to the team',
    sentence5: 'They rethought their options before making a final decision',
    sentence6: 'She regularly rethought her approach to problem-solving',
    sentence7: 'Last month, we rethought our previous decisions',
    sentence8: 'They rethought their actions before it was too late',
    sentence9: 'My friends rethought their plans before going on a vacation',
    sentence10: 'I usually rethought my actions before regretting them',
    word: 'rethought',
    mean: 'tekrar düşünmek',
  },
  {
    sentence1: 'Yesterday, I rewrote my essay to improve its clarity',
    sentence2:
      'Last week, I rewrote my resume to highlight my skills and achievements',
    sentence3:
      'After school, I often rewrote my notes to ensure I understood the material',
    sentence4: 'Every evening, I rewrote my to-do list for the next day',
    sentence5:
      'I frequently rewrote my diary entries to make them more descriptive',
    sentence6:
      'Every weekend, I rewrote my favourite recipes to include healthier ingredients',
    sentence7:
      'During the summer holidays, I regularly rewrote my class notes to review for the upcoming exams',
    sentence8:
      'In the past, I occasionally rewrote my cover letters to tailor them to specific job applications',
    sentence9:
      'Last night, I rewrote my presentation to include more visual aids',
    sentence10:
      'Whenever I made mistakes in my writing, I always rewrote the sentences to correct them',
    word: 'rewrote',
    mean: 'yeniden yazmak',
  },
  {
    sentence1: 'I rode my bike to school yesterday morning',
    sentence2: 'She rode her horse in the countryside',
    sentence3: 'We rode the roller coaster at the amusement park',
    sentence4: 'He rode the bus to work every day last month',
    sentence5: 'They rarely rode their motorcycles in the rain',
    sentence6: 'The children rode the carousel at the fair last weekend',
    sentence7: 'We rode the Ferris wheel at night to see the city lights',
    sentence8: 'She rode her scooter to the grocery store',
    sentence9: 'He always rode his skateboard to the skate park',
    sentence10:
      'The tourists often rode the double-decker tour bus to explore the city',
    word: 'rode',
    mean: 'binmek(at, bisiklet)',
  },
  {
    sentence1: 'Yesterday, I rang my friend to invite her to the party',
    sentence2:
      'I always rang my grandmother on her birthday when she was alive',
    sentence3: 'Last week, I rang the doorbell but no one answered',
    sentence4: 'I rarely rang the bell at the church',
    sentence5:
      'She often rang the bell to call her children for dinner when they lived in the country',
    sentence6: 'I rang my son to wake him up early',
    sentence7:
      'Every morning, I rang the school bell to start the classes when I was a student',
    sentence8: 'I rang the hotel reception for room service during my vacation',
    sentence9: 'He never rang the fire alarm at work',
    sentence10:
      'I once rang the bell to get the attention of the waiter at the restaurant',
    word: 'rang',
    mean: '(zil vb) çalmak, telefonla aramak',
  },
  {
    sentence1: 'The sun rose at 6 am yesterday',
    sentence2: 'I rose early every morning last week',
    sentence3: 'She rose to the challenge and succeeded',
    sentence4: 'They rose to the occasion and performed exceptionally well',
    sentence5:
      'The demand for the product rose significantly after the advertising campaign',
    sentence6:
      'Our team rose to the top of the leaderboard after winning the last match',
    sentence7: 'The temperature rose steadily throughout the day',
    sentence8: 'I rose from my seat and walked to the front of the room',
    sentence9: 'The number of attendees at the event rose each year',
    sentence10: 'The bread dough rose perfectly while baking in the oven',
    word: 'rose',
    mean: 'doğmak, yükselmek',
  },
  {
    sentence1: 'I ran to the store yesterday',
    sentence2: 'She often ran in the park after work',
    sentence3: 'We ran a marathon last year',
    sentence4: 'I ran sentence5 miles this morning',
    sentence5: 'Yesterday, he ran to catch the bus',
    sentence6: 'They ran through the fields as children',
    sentence7: 'The dog always ran to greet me when I came home',
    sentence8: 'I ran to the supermarket last week',
    sentence9: 'She ran out of the house to catch the ice cream truck',
    sentence10: 'We ran a race against the other team and won',
    word: 'ran',
    mean: 'koşmak, işletmek, akmak',
  },
  {
    sentence1: 'He sawed the wood carefully to make a table yesterday',
    sentence2: 'She sawed the branches off the tree in her garden last week',
    sentence3: 'My father sawed the logs every weekend when he was young',
    sentence4: 'The carpenter sawed the plank into two pieces',
    sentence5: 'He sawed through the pipe to fix the leak',
    sentence6: 'She sawed the old shelf to reuse the wood',
    sentence7: 'Yesterday morning, he sawed the wooden blocks for his project',
    sentence8: 'The artist sawed the sculpture out of a single piece of wood',
    sentence9: 'She sawed the door frame to fit the new door',
    sentence10: 'The worker sawed the metal rods for the construction',
    word: 'sawed',
    mean: 'testereyle kesmek',
  },
  {
    sentence1: 'Yesterday, I said hello to my neighbor as I walked by',
    sentence2: 'She said she was going to the store last week',
    sentence3: 'They said they enjoyed the party on Saturday',
    sentence4: 'He said thank you when I held the door open for him',
    sentence5: 'My teacher said I did a good job on my project last month',
    sentence6: 'We said our goodbyes before leaving for the weekend',
    sentence7: 'The children said please when asking for more cookies',
    sentence8: 'I said sorry for being late to the meeting yesterday',
    sentence9: 'She said yes when I asked her to go to the movies with me',
    sentence10: 'We said our prayers before going to bed each night',
    word: 'said',
    mean: 'demek, söylemek',
  },
  {
    sentence1: 'I saw a beautiful sunset yesterday evening',
    sentence2: 'Last week, I saw my favorite celebrity at the mall',
    sentence3: 'He saw his friends every day during summer vacation',
    sentence4: 'We saw a lot of animals when we went on a safari last month',
    sentence5: 'She saw a shooting star for the first time in her life',
    sentence6: 'They saw a romantic movie together on their first date',
    sentence7: 'Yesterday, I saw a rainbow after the rain stopped',
    sentence8: 'Last night, he saw a ghost in his dreams',
    sentence9: 'We saw a rare bird species during our trip to the forest',
    sentence10: 'She saw her grandparents every Sunday when she was a child',
    word: 'saw',
    mean: 'görmek, anlamak',
  },
  {
    sentence1:
      'Yesterday I sought advice from a colleague about a work project',
    sentence2:
      'Last week, John sought help from a tutor to improve his math skills',
    sentence3:
      'When I was in college, I often sought guidance from my professors',
    sentence4:
      'On Friday, Sarah sought clarification from her boss about a new policy',
    sentence5:
      'In the past, I have sought explanations from my doctor about my health issues',
    sentence6:
      'During the meeting, we sought opinions from all team members regarding the new proposal',
    sentence7:
      'Last year, I sought comfort from my family when I was going through a difficult time',
    sentence8:
      'During his trip to Europe, Jack sought recommendations from locals about the best restaurants',
    sentence9:
      'When I was younger, I frequently sought permission from my parents to go out with friends',
    sentence10:
      'Yesterday, we sought answers from our supervisor about the delay in the project',
    word: 'sought',
    mean: 'aramak, araştırmak',
  },
  {
    sentence1: 'Last week, I sold my old bicycle to a neighbor',
    sentence2: 'I sold my used textbooks at the school book fair',
    sentence3: 'I often sold my handmade jewelry at the local craft market',
    sentence4: 'Yesterday, I sold some of my clothes at a garage sale',
    sentence5:
      'When I was in college, I sold magazine subscriptions door-to-door',
    sentence6: 'My brother sold his car last month',
    sentence7: 'I rarely sold items online, but I did it once and it went well',
    sentence8: 'I sold my old smartphone to a friend who needed a new one',
    sentence9:
      'After a lot of advertising, I finally sold my artwork at the art show',
    sentence10: 'The store sold out of the new video game within a few hours',
    word: 'sold',
    mean: 'satmak',
  },
  {
    sentence1: 'I sent an email to my friend yesterday',
    sentence2: 'She sent me a text message last week',
    sentence3: 'We often sent postcards while on vacation',
    sentence4: 'He rarely sent letters to his grandparents',
    sentence5: 'They frequently sent packages to their family',
    sentence6: 'The company always sent me monthly updates',
    sentence7: 'My mom sent me a care package when I was in college',
    sentence8: 'My dad sent me a birthday card every year',
    sentence9: 'We regularly sent invitations for our parties',
    sentence10: 'She sometimes sent me funny videos',
    word: 'sent',
    mean: 'göndermek',
  },
  {
    sentence1: 'Last week, I set the table for dinner every evening',
    sentence2: 'Yesterday, I set my alarm clock to wake up at 7 am',
    sentence3:
      'When I was younger, I often set goals for myself and worked hard to achieve them',
    sentence4:
      'My grandmother always set a good example for me by being kind and understanding',
    sentence5:
      'During our vacation, we regularly set aside time for sightseeing and relaxation',
    sentence6:
      'Two years ago, I set a reminder on my phone to drink enough water throughout the day',
    sentence7:
      'After finishing the puzzle, I set it aside and started reading a book',
    sentence8:
      'Last night, I set the thermostat to a comfortable temperature before going to bed',
    sentence9: "When I cooked, I set a timer so I didn't burn the food",
    sentence10:
      'Despite the rainy weather, we still set up a picnic in the park yesterday',
    word: 'set',
    mean: 'hazırlamak, kurmak',
  },
  {
    sentence1: 'I sewed a beautiful dress for myself last month',
    sentence2: 'She often sewed her own curtains when she had free time',
    sentence3: 'We frequently sewed together as a hobby in the past',
    sentence4: 'My grandmother sewed all of my baby clothes when I was little',
    sentence5:
      'They rarely sewed their own clothes because they preferred to buy them',
    sentence6: 'He sewed buttons onto his shirts whenever they fell off',
    sentence7: 'We always sewed on the weekends to relax and unwind',
    sentence8:
      'She sometimes sewed blankets for charity events in our community',
    sentence9: 'My mother sewed a patch onto my denim jacket after it ripped',
    sentence10:
      'I frequently sewed costumes for school plays during my high school years',
    word: 'sewed',
    mean: 'dikiş dikmek',
  },
  {
    sentence1: "Yesterday, I shook my friend's hand to greet him",
    sentence2: 'Last week, I shook the bottle of ketchup before using it',
    sentence3: 'When we saw each other, we shook hands happily',
    sentence4: 'In the morning, I shook the rug to remove the dust',
    sentence5: 'On Monday, I shook my head in disbelief when I heard the news',
    sentence6: "When I'm nervous, I shook my leg uncontrollably",
    sentence7: 'After the earthquake, the whole building shook violently',
    sentence8:
      'At the concert, the excitement was so overwhelming that everyone shook with their arms with joy',
    sentence9:
      'When I rode a roller coaster for the first time, my whole body shook with fear',
    sentence10:
      'During the thunderstorm, the windows shook loudly with each clap of thunder',
    word: 'shook',
    mean: 'sallamak, sallanmak, tokalaşmak',
  },
  {
    sentence1: 'Last week, I shaved my beard for the first time in a month',
    sentence2: 'He shaved his head every day when he was in the military',
    sentence3: 'Yesterday, I shaved my legs before going to the beach',
    sentence4:
      'My dad shaved his mustache last night and now he looks completely different',
    sentence5:
      'Every Saturday morning, my grandfather shaved using a traditional straight razor',
    sentence6:
      'Sarah shaved her eyebrows off accidentally while trying to trim them',
    sentence7:
      'Last month, my brother shaved off his long hair to donate it to charity',
    sentence8:
      'After finding a grey hair, she panicked and immediately shaved her entire head',
    sentence9:
      'On vacation, I always make sure to shaved my legs and armpits before going swimming',
    sentence10:
      'The barber accidentally shaved off a chunk of my hair while cutting it',
    word: 'shaved',
    mean: 'tıraş olmak, tıraş etmek',
  },
  {
    sentence1: 'Last week, I shed a tear when I watched a heartwarming movie',
    sentence2: 'Yesterday, my snake shed her old skin and felt rejuvenated',
    sentence3: 'Every morning, my dog sheds fur all over the house',
    sentence4: 'Two days ago, we shed light on the mysterious disappearance',
    sentence5: 'Last month, he shed the extra weight by exercising regularly',
    sentence6: 'Yesterday evening, the snake shed its skin for the first time',
    sentence7: 'Every evening, the tree sheds its leaves before winter',
    sentence8: 'Last year, they shed tears of joy at their wedding ceremony',
    sentence9: 'Last night, the clouds shed rain and filled the dry riverbeds',
    sentence10:
      'Last spring, the cherry blossoms shed their petals, creating a beautiful sight',
    word: 'shed',
    mean: 'dökmek, saçmak, akıtmak',
  },
  {
    sentence1: 'The sun shone brightly yesterday',
    sentence2:
      'I looked out the window and saw that the stars shone in the night sky',
    sentence3: 'They enjoyed a picnic at the park while the sun shone overhead',
    sentence4:
      'After the rain, the streets shone from the reflection of the streetlights',
    sentence5:
      'The full moon shone through my bedroom window while I was reading a book',
    sentence6:
      'We went swimming in the sparkling ocean when the sun shone all afternoon',
    sentence7:
      'She smiled as the spotlight shone on her during the performance',
    sentence8:
      'Last weekend, we had a barbeque in the backyard while the sun shone down on us',
    sentence9:
      'The diamond ring on her finger shone beautifully under the bright lights',
    sentence10:
      'The disco ball in the nightclub shone brightly, lighting up the dance floor',
    word: 'shone',
    mean: 'parlamak, parlatmak',
  },
  {
    sentence1:
      'Yesterday, I shot a basketball into the hoop and made a perfect shot',
    sentence2:
      'Last week, I shot a video of my friends at the park playing soccer',
    sentence3: 'On Saturday morning, I shot a target with my new bow and arrow',
    sentence4:
      'Every evening, my dad and I practiced and shot the ball into hoops in the backyard',
    sentence5:
      'In the past, I shot at cans with my BB gun during camping trips',
    sentence6:
      'Last month, I shot my first bullet at the shooting range and hit the bullseye',
    sentence7:
      'During my childhood, I often shot water guns at my siblings and had a lot of fun',
    sentence8:
      'Yesterday, I shot a stunning photograph of a beautiful sunset at the beach',
    sentence9: 'When I played video games, I always shot the enemy in the game',
    sentence10:
      'In my younger days, I shot wild animals with my camera while on a safari',
    word: 'shot',
    mean: 'ateş etmek, vurmak, (foto, video) çekmek',
  },
  {
    sentence1:
      'Yesterday, I showed my friend how to use a new app on her phone',
    sentence2:
      'Last week, I showed my parents the latest episode of my favorite TV show',
    sentence3:
      'Every Monday, I showed my respect to my teacher in my English class',
    sentence4:
      'Two days ago, I showed my sister how to bake cookies from scratch',
    sentence5:
      'In the summer, I showed my cousins the beautiful beaches near our hometown',
    sentence6: 'Last night, I showed my younger brother how to play chess',
    sentence7:
      "Every morning, I showed my appreciation for my mom's delicious breakfast",
    sentence8:
      'Two weeks ago, I showed my colleagues a presentation on our new project',
    sentence9:
      'Yesterday, I showed my neighbor the quickest way to get to the supermarket',
    sentence10:
      'In the past, I always showed kindness towards strangers in need',
    word: 'showed',
    mean: 'göstermek',
  },
  {
    sentence1: 'I shrunk my sweater in the wash yesterday',
    sentence2:
      'She rarely shrunk her clothes because she was careful with the laundry',
    sentence3: 'He quickly shrunk the photo to fit in the frame',
    sentence4: 'They accidentally shrunk their favorite jeans last week',
    sentence5: 'We always shrunk our clothes on purpose to get a better fit',
    sentence6: 'The heat caused the plastic bottle to shrunk in the sun',
    sentence7: 'The sweater shrunk after it was washed in hot water',
    sentence8: 'My mom shrunk my clothes intentionally when I was younger',
    sentence9: 'The sweater magically shrunk overnight in the dryer',
    sentence10: 'The jeans shrunk after being washed in hot water',
    word: 'shrank',
    mean: 'çekmek, büzülmek',
  },
  {
    sentence1: 'I shut the door after coming inside the house',
    sentence2: 'She shut her laptop before going to bed',
    sentence3: 'We shut the windows before leaving the room',
    sentence4: 'They shut the gate when they saw the dog approaching',
    sentence5: 'He shut the book and went to sleep',
    sentence6: 'The shop shut early on Sundays',
    sentence7: 'I shut my eyes tightly during the scary movie',
    sentence8: 'She shut the car door gently to avoid making a noise',
    sentence9: 'We shut the blinds before going to sleep',
    sentence10: 'They shut down the computer before leaving the office',
    word: 'shut',
    mean: 'kapamak',
  },
  {
    sentence1: 'I sang a beautiful song at the karaoke last night',
    sentence2: 'She often sang in the choir when she was younger',
    sentence3: 'We all sang happy birthday to our friend at her party',
    sentence4: 'They never sang together before the school talent show',
    sentence5: 'He sang a few lines from his favorite song during the concert',
    sentence6: 'The children sang a catchy tune during their school assembly',
    sentence7: 'I sang in the shower every morning when I was a teenager',
    sentence8: 'My grandmother sang lullabies to me when I was a baby',
    sentence9: 'Last weekend, they sang their hearts out at the music festival',
    sentence10:
      "She rarely sang in public, but she made an exception for her best friend's wedding",
    word: 'sang',
    mean: 'şarkı söylemek, ötmek',
  },
  {
    sentence1: 'Yesterday, I sank my old socks in the bathtub to clean them',
    sentence2:
      'Last week, my brother accidentally sank his phone in the swimming pool',
    sentence3:
      'Every summer, we used to go to the lake and sank our feet in the cool water',
    sentence4:
      'The boat sank due to a leak, but everyone on board was safely rescued',
    sentence5: 'The Titanic sank after hitting an iceberg in sentence1912',
    sentence6:
      'Two days ago, I accidentally sank my pen in the inkwell and made a big mess',
    sentence7:
      'When I was younger, I enjoyed participating in diving competitions and sank gracefully into the pool',
    sentence8:
      'Last summer, a friend and I watched when a boat sank in the lake during a storm',
    sentence9: 'The gun sank into the lake after thrown by the gangster',
    sentence10:
      'The old ship sank slowly, leaving only its mast above the water',
    word: 'sank',
    mean: 'batmak, batırmak',
  },
  {
    sentence1:
      'Yesterday, I sat on the comfortable couch and watched my favorite TV show',
    sentence2:
      'Every morning, my mom sat at the kitchen table and had a cup of coffee',
    sentence3:
      'Last night, I sat next to my best friend at the concert and enjoyed the amazing music',
    sentence4: 'Sometimes, I sat in the park and read a book to relax',
    sentence5:
      'Last summer, we often sat around the campfire and shared stories during our camping trips',
    sentence6:
      'After a long day at work, I sat in the bathtub and soaked in the warm water',
    sentence7:
      'Every weekend, my family and I sat together for a delicious dinner and talked about our week',
    sentence8:
      'When I was a child, I sat in the front row at school and listened attentively to my teacher',
    sentence9:
      'During the flight, I sat next to a friendly stranger who told me interesting stories',
    sentence10:
      'While waiting for my appointment, I sat in the reception area and read a magazine',
    word: 'sat',
    mean: 'oturmak',
  },
  {
    sentence1: 'The knight slew the dragon to save the kingdom',
    sentence2: 'She slew the monstrous beast that terrorized the villagers',
    sentence3: 'The hero slew the evil warlock in the epic battle',
    sentence4: 'He slew the giant serpent to retrieve the golden apple',
    sentence5: 'The warriors slew their enemies and protected their land',
    sentence6: 'She slew the vampire that haunted the old castle',
    sentence7: 'Long ago, the champion slew the ogre that was invincible',
    sentence8: 'They slew the mythical creature to end its reign of terror',
    sentence9: 'The adventurer slew the trolls to clear the path',
    sentence10: 'The legend says he slew a hundred foes with a single sword',
    word: 'slew',
    mean: 'katletmek',
  },
  {
    sentence1: 'I slept for eight hours last night',
    sentence2: 'He always slept soundly after a long day at work',
    sentence3: 'We rarely slept in on weekends when we were younger',
    sentence4: 'She usually slept peacefully through the night',
    sentence5: 'The baby slept peacefully after being rocked to sleep',
    sentence6: 'They often slept late on Sunday mornings',
    sentence7: 'My grandparents always slept in separate beds',
    sentence8: 'My sister and I sometimes slept in bunk beds when we were kids',
    sentence9: 'The students slept soundly after a tiring field trip',
    sentence10: 'My dog usually slept at the foot of my bed',
    word: 'slept',
    mean: 'uyumak',
  },
  {
    sentence1: 'He slid down the snowy hill on his sled',
    sentence2: 'She slid the glass door open to step outside',
    sentence3: 'The children slid across the ice with ease',
    sentence4: 'He slid into the seat just as the show started',
    sentence5: 'The books slid off the shelf during the earthquake',
    sentence6: 'She slid the letter into the envelope',
    sentence7: 'The waiter slid the plate onto the table without a sound',
    sentence8: 'They slid into the booth at the diner',
    sentence9: 'The cat slid through the small opening of the fence',
    sentence10: 'He slid the key into the lock and opened the door',
    word: 'slid',
    mean: 'kaymak, kaydırmak',
  },
  {
    sentence1: 'He smelt the roses in the garden yesterday',
    sentence2: 'She smelt something burning and called the fire department',
    sentence3: 'The dog smelt the ground to find the bone',
    sentence4: 'We smelt the fresh bread as we walked past the bakery',
    sentence5: 'The children smelt the cookies and knew they were ready',
    sentence6: 'He smelt the perfume and remembered his grandmother',
    sentence7: 'She smelt the air after the rain and smiled',
    sentence8: 'The chef smelt the soup to check if it needed more spices',
    sentence9: 'They smelt the sea breeze as they arrived at the beach',
    sentence10: 'I smelt the pizza and couldn’t wait to eat it',
    word: 'smelt',
    mean: 'koklamak, kokmak',
  },
  {
    sentence1: 'He sowed the seeds in the garden last spring',
    sentence2: 'She sowed the wildflower seeds across the meadow',
    sentence3: 'The farmer sowed the wheat in the fields',
    sentence4: 'We sowed the vegetable seeds in neat rows',
    sentence5: 'The gardener sowed the grass seed before the rain',
    sentence6: 'They sowed the oats by hand, scattering them wide',
    sentence7: 'She sowed the herb garden with a variety of spices',
    sentence8: 'He sowed the barley early to harvest in summer',
    sentence9: 'The community sowed the park with new trees',
    sentence10:
      'I sowed the patches of bare earth with clover to enrich the soil',
    word: 'sowed',
    mean: '(tohum) ekmek',
  },
  {
    sentence1: 'He spoke softly to avoid waking the baby',
    sentence2: 'She spoke passionately about her research',
    sentence3: 'The teacher spoke to the class about honesty',
    sentence4: 'We spoke on the phone for hours last night',
    sentence5: 'The children spoke to their grandparents on Skype',
    sentence6: 'He spoke at the conference yesterday',
    sentence7: 'She spoke to the manager about the issue',
    sentence8:
      'The tourists spoke with the locals to learn more about the culture',
    sentence9: 'They spoke about their vacation plans excitedly',
    sentence10: 'I spoke with my friend about meeting up next weekend',
    word: 'spoke',
    mean: 'konuşmak',
  },
  {
    sentence1: 'Yesterday, I spelt my name correctly for the first time',
    sentence2: 'I frequently spelt words wrong when I was younger',
    sentence3: 'Last week, I spelt all the words correctly in the spelling bee',
    sentence4: "I always spelt my sister's name wrong until she corrected me",
    sentence5: '"Two days ago, I spelt the word ""cat"" without any mistakes"',
    sentence6:
      'I often spelt difficult words correctly with the help of a dictionary',
    sentence7:
      'Last month, I spelt every word on the test correctly and received a perfect score',
    sentence8:
      "I usually spelt my teacher's name wrong, but yesterday I got it right for the first time",
    sentence9:
      "I always spelt my friend's name incorrectly until he showed me the correct spelling",
    sentence10:
      '"Yesterday, I spelt the word ""elephant"" wrong, but today I remembered the correct way to spell it"',
    word: 'spelt',
    mean: 'harf harf söylemek',
  },
  {
    sentence1:
      'I spent last weekend visiting my grandparents in the countryside',
    sentence2: 'She spent a lot of money at the mall yesterday',
    sentence3: 'My family and I spent our summer vacation at the beach',
    sentence4: 'They spent three hours studying for the exam',
    sentence5: 'We spent most of the day cleaning the house',
    sentence6:
      'He spent a few minutes talking to his boss before leaving the office',
    sentence7:
      'Last night, I spent some time catching up on my favorite TV show',
    sentence8: 'They spent the entire morning planning the party',
    sentence9:
      'My sister spent her birthday dinner with her friends at a fancy restaurant',
    sentence10: 'We spent our childhood playing in the park near our house',
    word: 'spent',
    mean: 'harcamak, geçirmek',
  },
  {
    sentence1: 'Yesterday, I accidentally spilt my coffee all over my desk',
    sentence2: 'Last week, Tom spilt a glass of water on the floor',
    sentence3: 'She spilt her soup when she eats too quickly',
    sentence4: 'David frequently spilt his juice during the meal',
    sentence5: 'While I was drinking soda, I spilt some on my shirt',
    sentence6: 'My little sister spilt her paint all over the table yesterday',
    sentence7: 'On Saturday, he spilt a plate of spaghetti on his lap',
    sentence8: 'I often spilt milk when I pour it into a glass',
    sentence9: 'Last month, we spilt tea on the carpet and had to clean it up',
    sentence10:
      'While she triee to pour herself a glass of wine, she spilt some',
    word: 'spilt',
    mean: 'dökmek, dökülmek, sızmak',
  },
  {
    sentence1: 'I spun around three times at the playground yesterday',
    sentence2: 'She spun her favorite toy every evening before bed',
    sentence3: 'We spun the  whirligig during the holiday season last year',
    sentence4:
      'The ballerina spun gracefully on her toes during the performance',
    sentence5: 'They spun the roulette wheel at the casino last week',
    sentence6:
      'He spun the top with all his might and watched it spin for minutes',
    sentence7: 'I spun the bottle and it landed on my best friend at the party',
    sentence8: 'The cyclist spun their wheels as they raced down the hill',
    sentence9:
      'The dancer spun in circles to the music at the wedding reception',
    sentence10: 'The DJ spun the record and the crowd danced all night',
    word: 'spun',
    mean: 'hızla dönmek, döndürmek',
  },
  {
    sentence1: 'I got a good grade on my math test last week',
    sentence2: 'She got a promotion at work last month',
    sentence3: 'They got married two years ago',
    sentence4: 'We got to the concert on time last night',
    sentence5: 'He got a new car for his birthday',
    sentence6: 'The kids got to the cinema late yesterday',
    sentence7: 'I got a delicious cup of coffee this morning',
    sentence8: 'She got a fantastic gift from her friend last Christmas',
    sentence9: 'They got a great deal on their vacation last summer',
    sentence10: 'We got lost in the city last weekend',
    word: 'got',
    mean: 'almak, elde etmek, varmak, (up) kalkmak,(on well) anlaşmak',
  },
  {
    sentence1: 'I gave my dog some treats yesterday',
    sentence2: 'She gave me a book for my birthday',
    sentence3: 'He gave a great speech at the conference last week',
    sentence4: 'They gave generously to the charity fundraiser',
    sentence5: 'We gave our parents a surprise visit over the weekend',
    sentence6: 'The teacher gave us a quiz on Monday',
    sentence7: 'The restaurant gave us complimentary dessert after our meal',
    sentence8: 'My neighbor gave me a ride to the airport last month',
    sentence9: 'The doctor gave me some medicine for my cold',
    sentence10: 'I gave a presentation at work twice last month',
    word: 'gave',
    mean: 'vermek',
  },
  {
    sentence1: 'Last week, I went to the movies with my friends',
    sentence2: 'Yesterday, I went to the park and played basketball',
    sentence3: 'Every morning, I went for a run in the park',
    sentence4: 'On Saturday, I went shopping and bought a new dress',
    sentence5:
      'Two days ago, I went to visit my grandparents and had a great time',
    sentence6: 'Last month, I went on a vacation to a beautiful beach',
    sentence7: 'Every weekend, I went swimming at the local pool',
    sentence8: 'Last year, I went on a school trip to a historical museum',
    sentence9:
      'Yesterday evening, I went to a concert and enjoyed the live music',
    sentence10: 'Every evening, I went for a walk in the neighborhood',
    word: 'went',
    mean: 'gitmek',
  },
  {
    sentence1: 'I ground the coffee beans yesterday morning',
    sentence2: 'She ground the spices for the recipe last night',
    sentence3: 'He ground his teeth when he was nervous',
    sentence4: 'My father ground his own coffee every morning',
    sentence5: 'The old mill ground the grains into flour years ago',
    sentence6: 'They ground the gears of the car while learning to drive',
    sentence7: 'We ground the chili peppers to make a spicy sauce',
    sentence8: 'She ground her own flour before buying it pre-made',
    sentence9: 'He ground the mirror carefully to achieve a smooth surface',
    sentence10: 'The coffee shop ground fresh coffee beans for their customers',
    word: 'ground',
    mean: 'öğütmek, bilemek',
  },
  {
    sentence1: 'I grew up in a small village in the countryside',
    sentence2: 'I grew tomatoes in my backyard two years ago',
    sentence3: 'Last summer, my younger sister grew taller than me',
    sentence4:
      'Every spring, wildflowers grew in abundance in the nearby meadow',
    sentence5: 'When I was a child, I grew sunflowers in my school garden',
    sentence6: 'Last year, my family grew our own vegetables to save money',
    sentence7: 'During my teenage years, I grew closer to my best friend',
    sentence8: 'In the past, our town grew rapidly due to industrialization',
    sentence9: 'Every morning, I grew more excited to start my new job',
    sentence10:
      'When I visited my grandparents, I always grew nostalgic for my childhood days',
    word: 'grew',
    mean: '(bitki vb) yetişmek, yetiştirmek',
  },
  {
    sentence1: 'Yesterday, we hung up the new curtains in the living room',
    sentence2: 'I rarely hung out with my friends after school last year',
    sentence3:
      'Yesterday, I hung my wet clothes on the clothesline to dry in the sun',
    sentence4: 'He often hung pictures on the wall to decorate his bedroom',
    sentence5: 'Last weekend, they hung a new sign outside their shop',
    sentence6:
      'After the party, we hung balloons from the ceiling to make the room festive',
    sentence7:
      'My brother frequently hung his coat on the door handle instead of the coat rack',
    sentence8:
      'They always hung the American flag outside their house on Independence Day',
    sentence9: 'During the winter, she hung lights on the balcony railing',
    sentence10: 'I sometimes hung my artwork on the fridge for everyone to see',
    word: 'hung',
    mean: 'asmak, asılmak',
  },
  {
    sentence1: 'I had a delicious breakfast yesterday',
    sentence2: 'She had a great time at the party last night',
    sentence3: 'We had a productive meeting last week',
    sentence4: 'He had a lot of fun on his vacation',
    sentence5: 'They had a wonderful dinner at the new restaurant',
    sentence6: 'The students had a difficult test yesterday',
    sentence7: 'My sister had a successful job interview last month',
    sentence8: 'We had a fantastic time at the concert on Saturday',
    sentence9: 'The team had a challenging match last week',
    sentence10: 'I had a headache this morning',
    word: 'had',
    mean: 'sahip olmak, yemek içmek, yapmak',
  },
  {
    sentence1: 'Yesterday, I heard a beautiful song on the radio',
    sentence2: 'Last week, I heard my favorite band play live in concert',
    sentence3: 'She heard a strange noise coming from the basement last night',
    sentence4:
      'On my vacation, I heard the sound of crashing waves at the beach',
    sentence5: 'During the storm, we heard thunder and saw lightning',
    sentence6: 'Last night, I heard a loud noise coming from the next room',
    sentence7: 'Last month, I heard a rumor about my favorite celebrity',
    sentence8:
      "Usually, I heard the sound of laughter when I'm with my friends",
    sentence9:
      'I often heard the sound of rain hitting against my window during storms',
    sentence10:
      'Yesterday, as I walked through the forest, I heard the rustling of leaves under my feet',
    word: 'heard',
    mean: 'duymak, işitmek',
  },
  {
    sentence1: 'Yesterday, she hid behind the couch when her friends came over',
    sentence2:
      'Last week, the children hid in the backyard during the game of hide-and-seek',
    sentence3: 'After school, he often hid his homework from his parents',
    sentence4: 'Every day, the squirrel hid its acorns in the tree trunk',
    sentence5:
      'On the beach, they frequently hid under their umbrellas to avoid the sun',
    sentence6: 'During the storm, we hid in the basement for safety',
    sentence7: 'Last night, the cat hid under the bed when it heard thunder',
    sentence8:
      'Sometimes, he hid his feelings to protect himself from getting hurt',
    sentence9: 'When they played tag, the children often hid in the bushes',
    sentence10:
      'On Saturdays, they hid in the library to read their favorite books',
    word: 'hid',
    mean: 'saklamak, saklanmak',
  },
  {
    sentence1: 'Yesterday, he hit the ball very hard during the baseball game',
    sentence2:
      'Last week, they hit the target perfectly during archery practice',
    sentence3:
      'My friend hit the nail on the head when he gave me advice yesterday',
    sentence4: "Every morning, the alarm clock hit seven o'clock sharp",
    sentence5: 'On her birthday, she hit the jackpot and won a big prize',
    sentence6: 'Last night, the storm hit our town and caused a lot of damage',
    sentence7: 'Every summer, my family hits the beach for a relaxing vacation',
    sentence8:
      'Yesterday, I hit a home run in the softball game and helped my team win',
    sentence9:
      'After a long day at work, he hit the gym to relieve stress and stay healthy',
    sentence10:
      'Last month, they hit the road and went on a memorable road trip across the country',
    word: 'hit',
    mean: 'vurmak, çarpmak, uğramak',
  },
  {
    sentence1: 'She held her baby gently in her arms',
    sentence2: 'He held a colorful balloon during the parade',
    sentence3: 'The teacher held the book and read to the students',
    sentence4: 'We held hands while walking in the park',
    sentence5: 'The waiter held a tray with glasses of water',
    sentence6: 'They held a meeting in the conference room',
    sentence7: 'I held my friend’s birthday gift tightly',
    sentence8: 'The firefighter held the hose to put out the fire',
    sentence9: 'She held the umbrella to stay dry in the rain',
    sentence10: 'He held the flag during the national anthem',
    word: 'held',
    mean: 'tutmak,tutturmak, yapmak',
  },
  {
    sentence1: 'Yesterday, I hurt my leg while playing football',
    sentence2: 'I frequently hurt myself while cooking',
    sentence3:
      'Last week, my sister accidentally hurt her hand while gardening',
    sentence4: 'I hurt my ankle two days ago when I slipped on the stairs',
    sentence5: 'My friend hurt his back last month while lifting heavy boxes',
    sentence6:
      'I hurt my finger this morning when I slammed it in the car door',
    sentence7: 'I often hurt my knees when running on uneven surfaces',
    sentence8: 'Last year, I hurt my wrist while skateboarding in the park',
    sentence9:
      'My brother hurt his shoulder yesterday during his workout at the gym',
    sentence10:
      'I hurt my toe last night when I stubbed it against the furniture',
    word: 'hurt',
    mean: 'acıtmak, acımak',
  },
  {
    sentence1: 'I input the data into the computer yesterday',
    sentence2: 'She input the information carefully last week',
    sentence3: 'He input the code correctly',
    sentence4: 'We input the numbers into the spreadsheet last month',
    sentence5: 'The team input the new strategy into action two days ago',
    sentence6: 'I input the login details quickly',
    sentence7: 'She input her ideas into the discussion regularly',
    sentence8: 'He input the commands into the system last night',
    sentence9: 'They input the feedback into the survey on time',
    sentence10: 'We input the changes into the report yesterday morning',
    word: 'input',
    mean: 'bilgisayara veri girmek',
  },
  {
    sentence1: 'I kept my promise and finished my homework on time yesterday',
    sentence2: 'Tom always kept his room clean when he was a child',
    sentence3:
      'We frequently kept in touch with each other after we moved away',
    sentence4:
      'Last summer, we kept ourselves entertained by going to the beach every weekend',
    sentence5:
      'She often kept the windows open to let fresh air circulate in her house',
    sentence6: 'The children kept asking me for more candy during the party',
    sentence7: 'Every morning, I kept waking up early to go for a run',
    sentence8:
      'The team kept winning every match during their undefeated season',
    sentence9: 'We rarely kept any leftovers because everyone loved my cooking',
    sentence10:
      'Despite the rain, they kept playing soccer in the park yesterday afternoon',
    word: 'kept',
    mean: 'saklamak, korumak, muhafaza etmek, devam etmek',
  },
  {
    sentence1: 'Last night, I knelt down to pray before going to bed',
    sentence2: 'I often knelt in front of the altar when I was younger',
    sentence3: 'Yesterday, I knelt down to tie my shoelaces and they broke!',
    word: 'knelt',
    mean: 'diz çökmek',
  },
  {
    sentence1:
      'After a long day of gardening, I knelt on the ground to take a break',
    sentence2:
      'During the ceremony, the knights knelt before the king to swear their loyalty',
    sentence3: 'When I heard the gunshot, I quickly knelt for cover',
    sentence4:
      'Every Sunday, the congregation knelt down during the church service',
    sentence5:
      'As a sign of respect, the crowd at the concert knelt down when the national anthem played',
    sentence6: '',
    sentence7: '',
    sentence8: '',
    word: 'Every morning, I knelt beside my bed and said a quick prayer before starting my day"',
    mean: 'When the bride walked down the aisle, all the guests knelt in reverence',
  },
  {
    sentence1: 'She knit a scarf last winter',
    sentence2: 'They knit socks for their family members two weeks ago',
    sentence3: 'He always knit in the evenings after work',
    sentence4: 'We knit a blanket for the baby last year',
    sentence5: 'She knit a hat for her sister on her birthday',
    sentence6: 'They knit a sweater for their dad last Christmas',
    sentence7: 'He knit every weekend when he was younger',
    sentence8: 'She knit a pair of gloves last month',
    sentence9: 'We knit matching scarves for our best friends last fall',
    sentence10: "They knit a colorful blanket for their grandmother's birthday",
    word: 'knit',
    mean: 'örmek',
  },
  {
    sentence1: 'Yesterday, I knew the answer to the quiz',
    sentence2: 'When I was younger, I knew how to play piano',
    sentence3:
      'She frequently knew the right thing to say in difficult situations',
    sentence4: 'Last week, I knew the way to the new restaurant in town',
    sentence5: 'Every time we watched the movie, he knew all the lines',
    sentence6:
      'When we were in school together, she knew all the math formulas',
    sentence7: 'He rarely knew when to stop talking',
    sentence8: 'Last night, I knew the name of the song on the radio',
    sentence9: 'My grandma always knew how to make the best cookies',
    sentence10: 'I often knew the lyrics to my favorite songs',
    word: 'knew',
    mean: 'bilmek, tanımak',
  },
  {
    sentence1: 'She laid the book on the table',
    sentence2: 'He laid the blanket on the bed',
    sentence3: 'The hen laid an egg in the nest',
    sentence4: 'We laid the picnic blanket on the grass',
    sentence5: 'The builder laid bricks to build the wall',
    sentence6: 'They laid the foundation for the house',
    sentence7: 'I laid my keys on the kitchen counter',
    sentence8: 'The farmer laid seeds in the soil',
    sentence9: 'She laid out the ingredients for baking',
    sentence10: 'He laid the cards on the table for a game',
    word: 'laid',
    mean: 'yaymak, sermek, yumurtlamak',
  },
  {
    sentence1: 'I led the meeting yesterday',
    sentence2:
      'Sarah and I led the school group during the field trip last week',
    sentence3: 'He led his team to victory in the championship game',
    sentence4: 'The tour guide led us through the historical landmarks',
    sentence5:
      'We led a successful fundraising campaign for the local charity in May',
    sentence6:
      'She led the dance class last month and taught us some new moves',
    sentence7:
      'They led the research project and presented their findings to the committee',
    sentence8:
      'My grandfather led a peaceful protest in his community many years ago',
    sentence9:
      'The teacher led the class in a fun science experiment on Wednesday',
    sentence10:
      "The conductor led the orchestra in a magnificent performance of Mozart's Symphony No",
    word: 'led',
    mean: 'yönlendirmek, rehberlik etmek',
  },
  {
    sentence1: 'I leant against the wall yesterday at the party',
    sentence2:
      'He always leant on his friend for support during difficult times',
    sentence3: 'She frequently leant back in her chair while studying',
    sentence4:
      'We often leant out of the car window to feel the wind on our faces',
    sentence5:
      'They leant over the railing to get a better view of the concert',
    sentence6: 'The cat leant against my leg and purred happily',
    sentence7:
      "The teacher leant forward and listened intently to the student's answer",
    sentence8:
      'My grandparents leant in to give me a warm hug as I arrived home',
    sentence9:
      'The little boy leant sideways to peek around the corner and see what was happening',
    sentence10:
      'The tree branches leant downwards under the weight of the heavy snow',
    word: 'leant',
    mean: 'yana yatmak, yaslanmak',
  },
  {
    sentence1:
      'Last month, I leapt across the wide river without any hesitation',
    sentence2:
      'Yesterday, I successfully leapt over the high hurdle during the race',
    sentence3:
      'In the afternoon, I happily leapt into the refreshing pool to cool off',
    sentence4:
      'Every morning, I eagerly leapt out of bed to start my day with energy',
    sentence5:
      'This morning, I playfully leapt over the puddles on my way to work',
    sentence6:
      'During my childhood, I fondly leapt around in the playground with my friends',
    sentence7:
      'On Saturday, I excitedly leapt into the arms of my loved ones after a long absence',
    sentence8:
      'Last week, I effortlessly leapt over the small fence to explore the neighboring garden',
    sentence9:
      'Every weekend, I joyfully leapt into my favorite hobby of dancing',
    sentence10:
      'Yesterday evening, I proudly leapt onto the stage to perform in front of a large audience',
    word: 'leapt',
    mean: 'sıçramak, üstünden atlamak',
  },
  {
    sentence1: 'Yesterday, I learnt how to ride a bicycle',
    sentence2: 'Last week, I learnt a new recipe and cooked it for dinner',
    sentence3: 'Every day after school, I learnt English with my tutor',
    sentence4: 'In the summer, I learnt how to swim in the pool',
    sentence5:
      'Last night, I learnt the multiplication tables for my math test',
    sentence6: 'On the weekend, I learnt how to play the guitar',
    sentence7: 'I frequently learnt about different cultures by reading books',
    sentence8:
      'Throughout my childhood, I learnt how to ride various types of transportation',
    sentence9: 'On my vacation, I learnt how to surf in the ocean',
    sentence10: 'I learnt ballet when I was younger',
    word: 'learnt',
    mean: 'öğrenmek',
  },
  {
    sentence1: 'I left the party early yesterday',
    sentence2: 'My friends and I left the cinema after watching the movie',
    sentence3: "She left the office at sentence5 o'clock this evening",
    sentence4: 'He left the restaurant before I arrived',
    sentence5: 'We left the beach when it started to rain heavily',
    sentence6: 'They left the concert halfway through because they were tired',
    sentence7: 'The bus left the station on time yesterday morning',
    sentence8:
      'I left my keys at home this morning and had to go back to get them',
    sentence9: 'Susan left her phone at the coffee shop yesterday',
    sentence10: 'My family and I left for our vacation last summer',
    word: 'left',
    mean: 'ayrılmak, bırakmak',
  },
  {
    sentence1: 'I lent my friend some money last week',
    sentence2: 'My neighbor lent me his lawnmower yesterday',
    sentence3:
      'We frequently lent our old textbooks to classmates during college',
    sentence4: 'She often lent her car to her sister when she needed it',
    sentence5: 'My parents never lent me their car when I was a teenager',
    sentence6: 'I only lent my phone to my brother once and he broke it',
    sentence7: 'The library lent books to students for free',
    sentence8: 'He rarely lent his tools to others because they were expensive',
    sentence9:
      'Last month, she reluctantly lent her favorite dress to her friend for a party',
    sentence10:
      'We occasionally lent our bicycle to our neighbors for a quick ride',
    word: 'lent',
    mean: 'ödünç vermek',
  },
  {
    sentence1: 'Yesterday, I let my friend borrow my car for a few hours',
    sentence2:
      'Last week, I let my sister use my computer to finish her assignment',
    sentence3:
      'When I was on vacation, I let my neighbor take care of my plants',
    sentence4: 'On Saturday, I let my dog run freely in the park',
    sentence5: 'I let my brother use the bathroom first',
    sentence6:
      'I often let my parents choose the restaurant we went to for dinner',
    sentence7: 'During the party, I let my friend DJ play her favorite songs',
    sentence8: 'Last night, I let my sister choose the movie we watched',
    sentence9:
      'After finishing my work, I let myself relax and enjoy some free time',
    sentence10:
      'Whenever I visited my grandparents, I let them spoil me with delicious homemade food',
    word: 'let',
    mean: 'izin vermek, bırakmak',
  },
  {
    sentence1: 'She lay down on the grass to rest',
    sentence2: 'He lay in bed and read a book',
    sentence3: 'The cat lay in the sunbeam for warmth',
    sentence4: 'We lay on the beach and listened to the waves',
    sentence5: 'The dog lay by the fireplace to keep cozy',
    sentence6: 'They lay under the stars and talked',
    sentence7: 'I lay my head on the pillow and fell asleep',
    sentence8: 'The flowers lay in the vase on the table',
    sentence9: 'She lay still during the massage',
    sentence10: 'He lay on the couch and watched TV',
    word: 'lay',
    mean: 'uzanmak, yalan söylemek',
  },
  {
    sentence1: 'Yesterday, I lit a candle to add some warmth to the room',
    sentence2: 'The streetlights lit us as the sun set in the evening',
    sentence3:
      'She lit the fireplace to create a cozy atmosphere in the living room',
    sentence4:
      'During the power outage, we lit some candles to see in the dark',
    sentence5: 'The lanterns lit the way through the garden at night',
    sentence6: 'He lit a match to start the campfire',
    sentence7:
      'The city skyline beautifully lit with colorful lights during the festival',
    sentence8:
      'I accidentally lit the wrong end of the sparkler during the celebration',
    sentence9: 'The lighthouse lit the way to guide ships safely to the harbor',
    sentence10:
      'The Christmas tree lit the room with twinkling lights and ornaments',
    word: 'lit',
    mean: 'yakmak, yanmak, aydınlatmak',
  },
  {
    sentence1: 'Last week, I lost my keys at the grocery store',
    sentence2: 'Yesterday, she lost her phone on the train',
    sentence3: 'My brother frequently lost his homework at primary school',
    sentence4: 'After the game, our team lost against the strong opponents',
    sentence5: 'I often lost my way when I traveled alone',
    sentence6: 'Last night, my friend lost her wallet while shopping',
    sentence7: 'Every summer, my family lost their sunglasses at the beach',
    sentence8:
      'In the past, he lost his temper easily, but now he has learned to control it',
    sentence9: 'On Saturday, we lost the match against our rivals',
    sentence10:
      'My sister always lost her patience when dealing with difficult customers at her previous job',
    word: 'lost',
    mean: 'kaybetmek, yenilmek',
  },
  {
    sentence1: 'Yesterday, I made a delicious cake for my family',
    sentence2: 'Last week, she made a beautiful painting for her art class',
    sentence3: 'On Sunday, we made a decision to go camping next weekend',
    sentence4: 'He made his bed before leaving for work',
    sentence5:
      'Yesterday afternoon, they made a mistake during their presentation',
    sentence6: 'Last month, we made a reservation at our favorite restaurant',
    sentence7:
      'On Saturday, she made a promise to visit her grandparents next month',
    sentence8: 'Every morning, he made breakfast for his siblings',
    sentence9: 'Last night, we made plans to watch a movie at the theater',
    sentence10:
      'Yesterday evening, they made an effort to clean the entire house',
    word: 'made',
    mean: 'yapmak, hazırlamak',
  },
  {
    sentence1: 'She meant to apologize for her mistake',
    sentence2: 'He meant what he said during the argument',
    sentence3: 'The confusing sign meant “Exit” instead of “Entrance',
    sentence4: '"”',
    word: 'meant',
    mean: 'anlamına gelmek, kast etmek, istemek',
  },
  {
    sentence1: 'They meant to express gratitude for the gift',
    sentence2: 'The word “kindness” meant compassion and generosity',
    sentence3: 'I meant my promise sincerely',
    sentence4: 'The red traffic light meant stop',
    sentence5: 'His silence meant disagreement',
    sentence6: '',
    sentence7: '',
    word: 'We meant to arrive early, but the traffic delayed us"',
    mean: 'The teacher’s feedback meant a lot to the student',
  },
  {
    sentence1: 'I met my friend yesterday at the park',
    sentence2: 'She often met her colleagues for lunch during her break',
    sentence3: 'We frequently met at the library to study for exams',
    sentence4: 'Jack and I met at the airport last week',
    sentence5: 'They met their grandparents every Sunday for dinner',
    sentence6: 'Sarah met a famous actor at the movie premiere last month',
    sentence7: 'He rarely met new people at social events',
    sentence8:
      'My parents met in college and have been married for sentence30 years',
    sentence9:
      'My sister and I met our cousins at the family reunion last summer',
    sentence10:
      'The students often met their teacher after school for extra help',
    word: 'met',
    mean: 'karşılaşmak, tanışmak, karşılamak',
  },
  {
    sentence1:
      "Last night, I misheard my friend's name and called her by the wrong name",
    sentence2:
      "A week ago, I misheard my boss's instructions and ended up making a mistake at work",
    sentence3: "I misheard people when I'm in a noisy environment",
    sentence4:
      'Yesterday, I misheard the lyrics to my favorite song and sang the wrong words',
    sentence5:
      "During the meeting, I misheard one of my colleague's suggestions and had to ask for clarification",
    sentence6: 'Because I was tired, I misheard things more often',
    sentence7:
      "Last month, I misheard my partner's phone number and had to ask them to repeat it",
    sentence8:
      'Occasionally, I misheard my alarm clock in the morning and oversleep',
    sentence9:
      "Last weekend, I misheard my friend's plans and ended up going to the wrong restaurant",
    sentence10:
      'Despite misheard some of the details, I was able to understand the main idea of the presentation',
    word: 'misheard',
    mean: 'yanlış duymak',
  },
  {
    sentence1: 'She misled me about the location of the meeting yesterday',
    sentence2: 'They misled us by the false advertising last week',
    sentence3:
      'He repeatedly misled his employees about their chances of promotion',
    sentence4:
      'The politician frequently misled the public during his campaign',
    sentence5:
      'The teacher knowingly misled the students on the exam questions',
    sentence6:
      'They consistently misled their customers by providing inaccurate information',
    sentence7: 'It was disappointing to learn that the news article misled us',
    sentence8:
      "The salesperson inadvertently misled the customer about the product's features",
    sentence9:
      'Despite his promises, he ultimately misled us about his intentions',
    sentence10:
      "The company's advertisements deliberately misled and made claims to attract customers",
    word: 'misled',
    mean: 'saptırmak, yanıltmak, yanlış yönlendirmek',
  },
  {
    sentence1:
      'Yesterday, I misread the instructions and ended up cooking the meal for too long',
    sentence2: 'Last week, I misread the map and got lost in the city',
    sentence3:
      'I rarely misread text messages, but this time, I misunderstood what my friend was trying to say',
    sentence4:
      'Two months ago, I misread the schedule and missed my flight to Spain',
    sentence5:
      'Sometimes I misread words on the menu, but I always ask the waiter to clarify it for me',
    sentence6:
      'Last night, I misread the time and showed up to the meeting an hour early',
    sentence7:
      'Luckily, I misread the price tag and got the jacket I wanted for half the price',
    sentence8:
      'I always double-check my work to be sure but I misread any critical information last week',
    sentence9:
      'Last semester, I misread the exam question and answered it incorrectly',
    sentence10:
      'Occasionally, I misread the signals people give me, but I try to communicate clearly to avoid misunderstandings',
    word: 'misread',
    mean: 'yanlış okumak',
  },
  {
    sentence1:
      "Last night, I mistook my friend's house for my own and rang the wrong doorbell",
    sentence2: 'She mistook the time of the meeting and arrived an hour early',
    sentence3:
      'During the game, he mistook his teammate for an opponent and passed the ball to the wrong person',
    sentence4:
      'I mistook salt for sugar while baking cookies, and they turned out too salty',
    sentence5: 'The hiker mistook the trail markers and got lost in the forest',
    sentence6:
      "He mistook the professor's office hours and went to meet him when he wasn't there",
    sentence7: 'Sarah mistook my brother for me because they look very similar',
    sentence8:
      'The tourist mistook the local currency and had trouble paying for the souvenirs',
    sentence9: 'I mistook the bus stop and had to walk back to the correct one',
    sentence10:
      'The teacher kindly corrected the student when he mistook the capital of France during the geography quiz',
    word: 'mistook',
    mean: 'yanlış anlamak, karıştırmak',
  },
  {
    sentence1:
      "Yesterday, I misunderstood my friend's instructions for the assignment",
    sentence2:
      "Last week, I frequently misunderstood the teacher's explanation in math class",
    sentence3: 'Every time the phone rang, I misunderstood who was calling me',
    sentence4:
      'Unfortunately, I often misunderstood the directions while driving to the new city',
    sentence5:
      'On Friday, I completely misunderstood the plot of the movie and got confused',
    sentence6:
      'When I visited my grandparents, I occasionally misunderstood their stories from the past',
    sentence7:
      "In the past, I sometimes misunderstood my sister's jokes and took them seriously",
    sentence8:
      "During the meeting, I mistakenly misunderstood my colleague's suggestion and disagreed",
    sentence9:
      "In the past month, I rarely misunderstood my boss's instructions for the project",
    sentence10:
      'Yesterday, I briefly misunderstood the time the concert started and arrived late',
    word: 'misunderstood',
    mean: 'yanlış anlamak',
  },
  {
    sentence1: 'Last week, I mowed the lawn in my backyard',
    sentence2: 'Every Saturday, my father mowed the lawn in front of our house',
    sentence3: 'Yesterday, I mowed the grass in the park',
    sentence4:
      'Two days ago, my brother and I mowed the fields near our neighborhood',
    sentence5: "When I was younger, I mowed the neighbor's lawn every summer",
    sentence6: 'Last month, the gardener mowed the grass in the public gardens',
    sentence7: 'Every morning, the landscape company mowed the football field',
    sentence8: 'In the spring, my grandfather mowed the grass in the garden',
    sentence9: 'I mowed the lawn before the summer family barbecue',
    sentence10:
      'After the heavy rainfall, the villagers took turns and mowed the flooded fields',
    word: 'mowed',
    mean: 'biçmek',
  },
  {
    sentence1: 'My company outsold its competitors last quarter',
    sentence2:
      'The new product line outsold the previous one within the first month',
    sentence3:
      'He outsold all the other sales representatives in the region by far',
    sentence4:
      'The bookstore outsold its inventory of the popular novel in a matter of days',
    sentence5:
      'They were surprised when the limited edition merchandise outsold the regular items',
    sentence6: 'We outsold our fundraising goal by increasing our efforts',
    sentence7:
      "The bakery outsold its usual amount of cakes on Valentine's Day",
    sentence8:
      'Despite the rain, the street vendor outsold his inventory of umbrellas',
    sentence9: 'She quickly outsold her colleagues at the car dealership',
    sentence10:
      'The new restaurant in town outsold all the other ones in its first weekend',
    word: 'outsold',
    mean: 'daha fazla satmak',
  },
  {
    sentence1: 'I overcame my fear of heights last summer',
    sentence2: 'She often overcame difficult challenges in her career',
    sentence3: 'We successfully overcame the obstacles in our path',
    sentence4:
      'He rarely overcame his procrastination and missed many deadlines',
    sentence5:
      'The team triumphantly overcame a four-goal deficit in the final minutes of the game',
    sentence6:
      'They frequently overcame language barriers while traveling abroad',
    sentence7:
      'I eventually overcame my stage fright and performed in front of a large audience',
    sentence8: 'She occasionally overcame her shyness and spoke up in class',
    sentence9:
      'We skillfully overcame the technical difficulties and completed the project on time',
    sentence10: 'He once overcame a serious illness and made a full recovery',
    word: 'overcame',
    mean: 'üstesinden gelmek',
  },
  {
    sentence1: 'Yesterday, I overdid it at the gym and now my muscles are sore',
    sentence2:
      'Last week, I overdid my studying and ended up feeling burned out',
    sentence3:
      'I accidentally overdid the seasoning in the soup I made last night',
    sentence4: 'I overdid it with the chocolate and now I feel sick',
    sentence5:
      'I overdid my spending last month, so I need to be more careful with my budget',
    sentence6: 'I overdid my cleaning and now my back is hurting',
    sentence7: "I overdid it with the sunbathing and now I'm sunburned",
    sentence8:
      'When I was in college, I overdid it with partying and neglected my studies',
    sentence9:
      'Last summer, I overdid it with my gardening and ended up with blisters',
    sentence10:
      "I overdid my workout yesterday and now I'm feeling really tired",
    word: 'overdid',
    mean: 'abartmak',
  },
  {
    sentence1: 'Yesterday, I overate at the party and felt sick afterwards',
    sentence2:
      'On my vacation, I frequently overate at the all-you-can-eat buffet',
    sentence3: 'Last week, we overate when we visited our favorite restaurant',
    sentence4:
      'Every Friday, we overate at our team lunch when we lived in the USA',
    sentence5:
      'During the holiday season, I often overate due to all the delicious food in the hotel',
    sentence6: 'Once a month, I overete at the family gathering as a child',
    sentence7: 'In the past, I occasionally overate when I felt stressed',
    sentence8: 'When I was younger, I overate at birthday parties',
    sentence9:
      "Last night, I accidentally overate at dinner and couldn't sleep well",
    sentence10: 'On special occasions, I overate tasty treats',
    word: 'overate',
    mean: 'aşırı yemek',
  },
  {
    sentence1:
      'Yesterday, I overheard the juiciest gossip while I was walking to the store',
    sentence2:
      'Last week, I overheard my neighbors talking about their vacation plans',
    sentence3:
      'She overheard her coworkers discussing the new project during the lunch break',
    sentence4:
      'I overheard my sister telling her friend about her exciting weekend',
    sentence5: 'Last night, I overheard a couple arguing outside my window',
    sentence6:
      'He overheard the teacher discussing the upcoming exam with a colleague',
    sentence7:
      'I overheard the manager talking about possible promotions for the team members',
    sentence8:
      'We overheard the children giggling and whispering in the next room',
    sentence9:
      'She overheard her parents planning a surprise party for her birthday',
    sentence10:
      'When I was in the library, I overheard two students talking about an interesting book',
    word: 'overheard',
    mean: 'kulak misafiri olmak',
  },
  {
    sentence1: 'Last month, I overpaid my rent by mistake',
    sentence2: 'She overpaid for the cake at the bakery yesterday',
    sentence3: 'I realized I overpaid my phone bill last week',
    sentence4: 'My dad often overpaid for groceries when he was in a rush',
    sentence5:
      'Every year, the company overpaid its taxes by a significant amount',
    sentence6: 'The customer overpaid for the item because of the high demand',
    sentence7: 'I never overpaid for a haircut until I visited that salon',
    sentence8:
      'They overpaid for their hotel room because they booked it last minute',
    sentence9:
      'My neighbor always overpaid for her car repairs at that mechanic',
    sentence10:
      'I overpaid for that concert ticket once I saw how empty the venue was',
    word: 'overpaid',
    mean: 'fazla ödemek',
  },
  {
    sentence1: 'I overrode the computer system yesterday',
    sentence2: 'She always overrode my decisions in the past',
    sentence3: 'He overrode my concerns and went ahead with the plan',
    sentence4: 'We overrode the default settings on the machine last week',
    sentence5:
      'The manager overrode the automatic shutdown procedure last month',
    sentence6: 'They overrode the lock and entered the building',
    sentence7: 'The team overrode the safety protocols during the experiment',
    sentence8: 'She overrode her fear and took the leap',
    sentence9: 'I overrode the alarm and entered the building',
    sentence10: 'We overrode the veto and passed the bill',
    word: 'overrode',
    mean: 'umursamamak, geçersiz kılmak',
  },
  {
    sentence1:
      "The team quickly overran their opponents in last week's soccer match",
    sentence2:
      'We overran our budget for the month and had to find ways to save money',
    sentence3:
      "The teacher's lecture overran by sentence10 minutes because she had so much to cover",
    sentence4:
      'The children overran the playground every afternoon after school',
    sentence5:
      'I overran my daily step goal by walking an extra mile yesterday',
    sentence6: 'The meeting overran by half an hour due to a lively discussion',
    sentence7:
      'Our picnic overran into the evening as we enjoyed the beautiful sunset',
    sentence8:
      'The marathon runners overran the finish line with unstoppable determination',
    sentence9:
      'His enthusiasm for the project overran his initial doubts and fears',
    sentence10: "The crowd overran the streets to celebrate the team's victory",
    word: 'overran',
    mean: 'istila etmek, aşmak',
  },
  {
    sentence1: 'I oversaw the project last week',
    sentence2: 'She oversaw the operation yesterday',
    sentence3: 'The manager oversaw the entire team last month',
    sentence4: 'He oversaw the construction of the building last year',
    sentence5: 'They oversaw the event last Friday',
    sentence6: 'The committee oversaw the budget last quarter',
    sentence7: 'I oversaw the production process during my internship',
    sentence8: 'She oversaw the renovation of the house two weeks ago',
    sentence9: 'The supervisor oversaw the training session last Monday',
    sentence10: 'He oversaw the implementation of the new policy last semester',
    word: 'oversaw',
    mean: 'göz kulak olmak, denetlemek',
  },
  {
    sentence1: 'I overslept last night and missed my morning class',
    sentence2: 'He frequently overslept when he was in high school',
    sentence3: 'We seldom overslept during our vacation last summer',
    sentence4: 'Jenny rarely overslept when she had early morning meetings',
    sentence5: "The alarm didn't ring, so I overslept and was late for work",
    sentence6:
      'They occasionally overslept on weekends and enjoyed a lazy morning',
    sentence7:
      'My brother always overslept on school days and had to rush to catch the bus',
    sentence8:
      'She overslept at first, but now she sets multiple alarms to wake up on time',
    sentence9:
      'Last week, I overslept and had to skip breakfast to catch my flight',
    sentence10: 'We never overslept when we were on a tight schedule',
    word: 'overslept',
    mean: 'uyuya kalmak',
  },
  {
    sentence1: 'I overtook the slow car on the highway yesterday',
    sentence2: 'She overtook her classmates in the race last week',
    sentence3: 'We overtook the other team in the final minutes of the game',
    sentence4: 'The cyclist overtook the other riders at the last turn',
    sentence5: 'He overtook me in the marathon after the halfway point',
    sentence6: 'They overtook the leading company in sales last month',
    sentence7: 'The race car overtook the competition on the straightaway',
    sentence8:
      'The team overtook their rivals in the standings after a string of victories',
    sentence9: 'She overtook her personal best time in the sentence100m dash',
    sentence10:
      'The train overtook the slow-moving freight train on the tracks',
    word: 'overtook',
    mean: 'yetişip geçmek, sollamak',
  },
  {
    sentence1: 'Yesterday, I spit out my gum after chewing it for hours',
    sentence2:
      'Last week, I accidentally spit while talking and it was embarrassing',
    sentence3:
      "When I was a child, I often spit out my vegetables when my parents weren't looking",
    sentence4: 'After tasting the sour lemon, I immediately spit it out',
    sentence5:
      'I never liked the taste of black coffee, so I always spit it out after trying it',
    sentence6:
      'While playing baseball, I spit out my gum before stepping up to bat',
    sentence7:
      "Whenever I ate something that I didn't like, I spit it out quickly",
    sentence8: 'Once, I spit out my drink because it was too hot',
    sentence9: 'Once in a while, I accidentally spit while laughing too hard',
    sentence10:
      "The last time I tried a new food, I spit it out because I didn't like it",
    word: 'spit',
    mean: 'tükürmek',
  },
  {
    sentence1: 'Yesterday, I split my time between work and studying',
    sentence2: 'I split a delicious sandwich with my friend last week',
    sentence3:
      'He always split the bill with his colleagues when they went out for lunch',
    sentence4:
      'We split up the tasks equally in our group after I became the project manager',
    sentence5: 'She split her free time between reading and practicing yoga',
    sentence6: 'When he was younger, he often split firewood for his family',
    sentence7:
      'I split my attention between listening to music and doing my homework before I decided not to listen while studying',
    sentence8:
      'Mandy split her meals into small portions before she served them',
    sentence9: 'They split the cost of renting a vacation home last summer',
    sentence10:
      'Before starting the project, we split into two teams and assigned specific tasks',
    word: 'split',
    mean: 'yarmak, bölmek',
  },
  {
    sentence1: 'Yesterday, I spoilt my little sister by buying her a new toy',
    sentence2: 'Last week, my mom spoilt me with my favorite dessert',
    sentence3: 'During the party, we spoilt ourselves with food and drinks',
    sentence4: 'He spoilt his chance to win the game by making a silly mistake',
    sentence5:
      'My dad once spoilt our vacation by forgetting the hotel reservations',
    sentence6: 'Yesterday morning, I spoilt my breakfast by burning my toast',
    sentence7:
      'Last month, I spoilt my clothes by accidentally spilling sauce on them',
    sentence8: 'He spoilt her mood by being rude to her during the meeting',
    sentence9:
      'Despite the rain, we spoilt our date night by watching a movie at home',
    sentence10: 'Last year, I spoilt my diet by eating too much junk food',
    word: 'spoilt',
    mean: 'berbat etmek, bozmak, şımartmak',
  },
  {
    sentence1: 'Yesterday, I spread butter on my toast for breakfast',
    sentence2: 'I spread jam on my toast this morning',
    sentence3: 'Last week, my mom spread the picnic blanket in the park',
    sentence4: 'On Friday night, Sarah spread the news about her engagement',
    sentence5:
      'We always spread mayonnaise on our sandwiches before eating them',
    sentence6:
      'In the afternoon, the kids spread out their toys all over the living room',
    sentence7:
      'Last summer, we spread sunscreen on our bodies before going to the beach',
    sentence8: 'Last night, the cat spread out on the couch and sleep',
    sentence9: 'Paul spread his papers across the table when he studied',
    sentence10: 'Over the weekend, the flu spread rapidly in our community',
    word: 'spread',
    mean: 'yaymak, yayılmak',
  },
  {
    sentence1: 'The flowers sprang up after the rain',
    sentence2: 'He sprang out of bed when the alarm went off',
    sentence3: 'The cat sprang onto the windowsill to catch a bird',
    sentence4: 'We sprang a surprise party for her birthday',
    sentence5: 'The squirrel sprang from branch to branch in the tree',
    sentence6: 'They sprang into action when they heard the fire alarm',
    sentence7: 'I sprang the lock on the old treasure chest',
    sentence8: 'The jack-in-the-box sprang open, surprising the child',
    sentence9: 'She sprang forward to catch the falling vase',
    sentence10: 'The athlete sprang over the high hurdle effortlessly',
    word: 'sprang',
    mean: 'ortaya çıkıvermek, yerden bitmek',
  },
  {
    sentence1: 'Yesterday, I stood in line for tickets to the concert',
    sentence2: "She stood by her decision and didn't change her mind",
    sentence3: 'They always stood together during difficult times',
    sentence4: 'Last week, we stood in awe of the beautiful sunset',
    sentence5: 'I often stood at the bus stop waiting for the bus to arrive',
    sentence6:
      'The teacher stood at the front of the classroom and explained the lesson',
    sentence7: "He stood up for his beliefs and didn't back down",
    sentence8:
      'Every morning, she stood in front of the mirror to do her makeup',
    sentence9: 'My parents always stood behind me and supported my decisions',
    sentence10:
      'The team stood united after their victory in the championship game',
    word: 'stood',
    mean: 'ayakta durmak',
  },
  {
    sentence1: 'Yesterday, I stole a candy from the store',
    sentence2: 'Last week, my brother stole my headphones',
    sentence3: 'I often stole a glance at him during the concert',
    sentence4: 'Two days ago, I stole some time to relax and read a book',
    sentence5:
      'Every Friday, my friends and I stole away to the beach for a picnic',
    sentence6: 'Last night, I stole a kiss from my partner',
    sentence7: 'During the party, someone stole my wallet',
    sentence8:
      'In the past, she stole the show with her incredible dance moves',
    sentence9: 'On Monday, my neighbor stole my newspaper by mistake',
    sentence10: 'Several times, I stole a moment to enjoy the beautiful sunset',
    word: 'stole',
    mean: 'çalmak',
  },
  {
    sentence1: 'She stuck the stamp on the envelope',
    sentence2: 'He stuck the poster to the wall with tape',
    sentence3: 'The glue stuck the pieces of paper together',
    sentence4: 'We stuck the photo in our scrapbook',
    sentence5: 'The magnet stuck the note to the fridge',
    sentence6: 'They stuck the label on the gift box',
    sentence7: 'I stuck the drawing on the classroom board',
    sentence8: 'The sticker stuck to the notebook cover',
    sentence9: 'She stuck the needle into the fabric',
    sentence10: 'He stuck the straw into the juice box',
    word: 'stuck',
    mean: 'yapışmak, yapıştırmak, sadık kalmak',
  },
  {
    sentence1: 'The bee stung me on the arm',
    sentence2: 'She accidentally stung herself with a nettle leaf',
    sentence3: 'The wasp stung the picnic-goer near the sandwich',
    sentence4: 'He screamed when the scorpion stung his foot',
    sentence5: 'The jellyfish stung the swimmer in the ocean',
    sentence6: 'The mosquito stung my leg during the night',
    sentence7: 'The hornet stung the gardener while he was pruning',
    sentence8: 'Be careful not to sting yourself on the rose thorns',
    sentence9: 'The ant stung my finger when I touched its nest',
    sentence10: 'The pain from the bee’s sting lasted for hours',
    word: 'stung',
    mean: 'sokmak, arı yılan vs. ısırmak, acıtmak',
  },
  {
    sentence1: 'The garbage stank after sitting in the sun all day',
    sentence2: 'The old sneakers stank up the entire room',
    sentence3: 'The fish market stank of seafood',
    sentence4: 'The spoiled milk stank when I opened the carton',
    sentence5: 'The bathroom stank after someone forgot to flush',
    sentence6: 'The gym locker room stank of sweat',
    sentence7: 'The compost pile stank from decomposing food',
    sentence8: 'The dirty socks stank in the laundry basket',
    sentence9: 'The sewer drain stank when it rained',
    sentence10: 'The skunk sprayed, and the whole area stank for hours',
    word: 'stank',
    mean: 'pis kokmak',
  },
  {
    sentence1: 'The lightning struck the tall tree during the storm',
    sentence2: 'She accidentally struck her finger with the hammer',
    sentence3: 'The clock tower struck twelve at midnight',
    sentence4: 'He struck the ball with his foot during the game',
    sentence5: 'The match struck against the rough surface and lit up',
    sentence6: 'They struck up a conversation at the bus stop',
    sentence7: 'I struck a deal with the seller for a lower price',
    sentence8: 'The idea struck me suddenly while walking',
    sentence9: 'She struck the nail to hang the picture frame',
    sentence10: 'The bell struck to signal the end of class',
    word: 'struck',
    mean: 'vurmak, çarpmak, grev yapmak',
  },
  {
    sentence1: 'I strove to finish my homework before dinner yesterday',
    sentence2: 'She strove to improve her grades in math',
    sentence3: 'We strove to meet our sales targets last year',
    sentence4:
      'He rarely strove to be the center of attention in social situations',
    sentence5: 'They strove to create a peaceful atmosphere in their home',
    sentence6: 'The team strove to win the championship last season',
    sentence7: 'I strove to overcome my fear of public speaking',
    sentence8: 'She strove to wake up early on weekends',
    sentence9: 'We strove to provide excellent customer service',
    sentence10: 'He tirelessly strove to become a better musician',
    word: 'strove',
    mean: 'çalışmak, çabalamak',
  },
  {
    sentence1: 'She swore to tell the truth in court',
    sentence2: 'He accidentally swore when he dropped his phone',
    sentence3: 'The sailor swore loudly during the storm',
    sentence4: 'We swore to keep the secret safe',
    sentence5: 'The angry driver swore at the other car',
    sentence6: 'They swore allegiance to their country',
    sentence7: 'I swore I would never eat that spicy dish again',
    sentence8: 'She swore off sweets after the dentist visit',
    sentence9: 'He swore by his lucky charm',
    sentence10: 'The witness swore on the Bible before testifying',
    word: 'swore',
    mean: 'küfretmek, yemin etmek',
  },
  {
    sentence1: 'Yesterday, I swept the floor in my bedroom',
    sentence2: 'Every Saturday, my mom swept the front porch',
    sentence3: 'Last week, my little sister swept the kitchen after dinner',
    sentence4: 'Two days ago, the janitor swept the hallways at school',
    sentence5: 'On Tuesday, my dad swept the leaves from the driveway',
    sentence6: 'Last month, the cleaning lady swept the entire house',
    sentence7: 'In the evening, she always swept the dust off the bookshelves',
    sentence8: 'My brother rarely swept the backyard, but yesterday he did it',
    sentence9:
      'Yesterday morning, our neighbor swept the stairs in our apartment building',
    sentence10:
      "I swept the garage every Sunday, but last weekend I didn't have time",
    word: 'swept',
    mean: 'süpürmek',
  },
  {
    sentence1: 'Her ankle swelled after she twisted it',
    sentence2: 'The river swelled with heavy rain',
    sentence3: 'His pride swelled when he received the award',
    sentence4: 'The injured area swelled and turned red',
    sentence5: 'The crowd swelled as more people arrived',
    sentence6: 'The musician’s heart swelled with joy during the performance',
    sentence7: 'The balloon swelled until it burst',
    sentence8: 'The storm clouds swelled ominously',
    sentence9: 'The infection made her finger swell',
    sentence10: 'His eyes swelled from crying',
    word: 'swelled',
    mean: 'şişmek, kabartmak',
  },
  {
    sentence1: 'Last summer, I swam in the ocean every day',
    sentence2: 'Yesterday, I swam in the pool with my friends',
    sentence3: 'I swam in the lake every weekend when I was a child',
    sentence4: 'Two weeks ago, I swam in the river for the first time',
    sentence5: 'Last night, I swam for an hour to relax after a long day',
    sentence6:
      "During my vacation, I swam in the hotel's rooftop pool every morning",
    sentence7: 'On Sundays, I usually swam in the local community center',
    sentence8:
      'Yesterday evening, I quickly swam a few laps before it started to rain',
    sentence9: 'During the summer holidays, I often swam in the nearby beach',
    sentence10: 'The dog swam after the stick thrown into the lake',
    word: 'swam',
    mean: 'yüzmek',
  },
  {
    sentence1: 'The children swung on the playground swings',
    sentence2: 'He swung the baseball bat and hit the ball',
    sentence3: 'She swung her arms while dancing',
    sentence4: 'The pendulum clock swung back and forth',
    sentence5: 'They swung from the tree branches like monkeys',
    sentence6: 'I swung the door open to enter the room',
    sentence7: 'The wind swung the garden gate shut',
    sentence8: 'She swung the rope over the river to cross',
    sentence9: 'The ship swung with the waves during the storm',
    sentence10: 'The little girl swung on the tire swing in the park',
    // sentence11: 'He swung the hammer to drive the nail into the wood',
    word: 'swung',
    mean: 'sallamak, sallanmak',
  },
  {
    sentence1: 'Yesterday, I took my dog for a walk in the park',
    sentence2: 'Last week, my brother took the day off work to go fishing',
    sentence3: 'I often took the bus to school when I was younger',
    sentence4: 'We took a lot of photos on our vacation in Hawaii',
    sentence5: 'At the party, I took a piece of cake and a glass of champagne',
    sentence6: 'He took a risk and invested his money in a new startup',
    sentence7:
      'When I was studying abroad, I took a cooking class to learn how to make paella',
    sentence8:
      'My friend took me to her favorite coffee shop and we tried their special espresso drink',
    sentence9:
      'They took their time to finish the project, but it turned out great in the end',
    sentence10:
      'We took a trip to the beach last summer and swam in the ocean every day',
    word: 'took',
    mean: 'almak, götürmek',
  },
  {
    sentence1: 'She taught English at the local school',
    sentence2: 'He taught me how to ride a bike',
    sentence3: 'The professor taught history to the students',
    sentence4: 'We taught our dog basic commands',
    sentence5: 'The piano teacher taught her students to play scales',
    sentence6: 'They taught swimming lessons at the community pool',
    sentence7: 'I taught my younger sister how to tie her shoelaces',
    sentence8: 'The coach taught soccer skills during practice',
    sentence9: 'She taught the children about recycling',
    sentence10: 'He taught himself to play the guitar',
    word: 'taught',
    mean: 'öğretmek',
  },
  {
    sentence1: 'I tore my shirt while playing football yesterday',
    sentence2: 'She often tore the pages of her book when she got angry',
    sentence3:
      'Tom accidentally tore his pants while climbing the tree last week',
    sentence4:
      'They frequently tore the wrapping paper on their presents during birthdays',
    sentence5: 'My little sister tore her drawing in frustration',
    sentence6: "Lisa's dog tore her favorite teddy bear yesterday",
    sentence7: 'The wind tore the leaves off the trees last autumn',
    sentence8:
      'The children tore open their Christmas presents with excitement',
    sentence9:
      'He tore the paper into small pieces before throwing it in the bin',
    sentence10: 'Jane tore up when she received the award for her performance',
    word: 'tore',
    mean: 'yırtmak, (up) ağlamak',
  },
  {
    sentence1: 'Yesterday, I told my best friend a secret',
    sentence2: 'I always told my mom when I arrived home from school',
    sentence3: 'Last week, he told me a funny joke',
    sentence4:
      'Every morning, she told her husband she loved him before leaving for work',
    sentence5: 'During the meeting, the boss told us about the new project',
    sentence6: 'I rarely told lies when I was a child',
    sentence7: 'They told us to hurry up if we wanted to catch the bus',
    sentence8: 'He told me that he enjoyed playing basketball in high school',
    sentence9: 'Yesterday, she told me she had passed her driving test',
    sentence10: 'I told my colleagues that I would be on vacation next week',
    word: 'told',
    mean: 'söylemek, anlatmak',
  },
  {
    sentence1: 'I thought about my future career every day last week',
    sentence2: 'Sarah often thought about her family while studying abroad',
    sentence3:
      'We thought of a solution to the problem after hours of brainstorming',
    sentence4:
      'Yesterday, he thought of calling his best friend from childhood',
    sentence5: 'She rarely thought about her past mistakes until today',
    sentence6:
      'Tom thought he had left his phone at home, but it was actually in his bag',
    sentence7: 'My parents always thought highly of my academic achievements',
    sentence8:
      'Last month, the team thought of a new strategy to increase sales',
    sentence9:
      'They thought their vacation would be relaxing, but it turned out to be quite stressful',
    sentence10:
      'Tina thought she had seen the movie before, but it was actually a different one',
    word: 'thought',
    mean: 'düşünmek, sanmak',
  },
  {
    sentence1: 'The plant throve in the sunny garden',
    sentence2: 'He changed his diet, and his health throve',
    sentence3: 'The business throve during the busy season',
    sentence4: 'We throve in the supportive community',
    sentence5: 'The coral reef throve in clear waters',
    sentence6: 'They throve on hard work and determination',
    sentence7: 'I throve in my new job role',
    sentence8: 'The forest throve with diverse wildlife',
    sentence9: 'She recovered from illness and throve afterward',
    sentence10: 'The company throve under strong leadership',
    word: 'throve',
    mean: 'iyiye gitmek, başarılı olmak',
  },
  {
    sentence1: 'I threw the ball to my friend yesterday',
    sentence2: 'She threw the garbage in the bin this morning',
    sentence3: 'We threw a surprise party for him last week',
    sentence4: 'He threw the paper airplane high up in the sky',
    sentence5: 'The athlete threw the javelin with great accuracy',
    sentence6: 'My dad threw a frisbee to our dog at the park yesterday',
    sentence7: 'They threw their old clothes in the donation box',
    sentence8: 'The chef threw the vegetables into the stir fry',
    sentence9: 'The children threw water balloons during the summer festival',
    sentence10: 'Sarah threw the dice and won the board game',
    word: 'threw',
    mean: 'atmak, fırlatmak',
  },
  {
    sentence1: 'I unbound the book yesterday',
    sentence2: 'She frequently unbound her hair after work',
    sentence3:
      'They always unbound their shoelaces before taking off their shoes',
    sentence4: 'He unbound his hands and escaped from the captors',
    sentence5:
      'We sometimes unbound the bundle of papers to organize them better',
    sentence6:
      'The librarian unbound the old newspapers for preservation purposes',
    sentence7: 'Sarah regularly unbound the stack of letters she had received',
    sentence8:
      'The children eagerly unbound their presents on Christmas morning',
    sentence9:
      'The magician effortlessly unbound the ropes around his assistant',
    sentence10: 'I rarely unbound my hair for special occasions',
    word: 'unbound',
    mean: 'çözmek, açmak, salmak',
  },
  {
    sentence1: 'I understood the lesson yesterday',
    sentence2: 'The teacher explained the concept, and I quickly understood',
    sentence3: 'I always understood math problems easily when I was in school',
    sentence4: 'Last week, I understood the instructions for the experiment',
    sentence5:
      'My sister always understood my feelings, even without me explaining',
    sentence6: 'I understood the movie plot when I watched it with subtitles',
    sentence7: 'I understood the concept after studying it for a few hours',
    sentence8: 'Whenever I had doubts, my mom understoond',
    sentence9: 'Yesterday, I finally understood how to solve the puzzle',
    sentence10: 'I understood the novel after reading it twice',
    word: 'understood',
    mean: 'anlamak',
  },
  {
    sentence1: 'I undertook the task of cleaning my room yesterday',
    sentence2:
      'Last week, I undertook the responsibility of organizing the class party',
    sentence3: 'She undertook a challenging project for her final year thesis',
    sentence4:
      'They undertook a journey to visit their grandparents over the weekend',
    sentence5:
      'On Saturday, Tom undertook the difficult task of repairing the car engine',
    sentence6:
      'Sarah undertook the role of team captain during the championship match',
    sentence7:
      'Last month, I undertook a new hobby of learning to play the guitar',
    sentence8:
      'He undertook the task of painting the house before the arrival of the guests',
    sentence9:
      'Yesterday, John undertook the challenge of climbing the highest mountain in the region',
    sentence10:
      "We undertook the responsibility of taking care of our neighbor's pets while they were on vacation",
    word: 'undertook',
    mean: 'üzerine almak, üstlenmek',
  },
  {
    sentence1:
      'Yesterday, I undid the knot in my shoelaces before putting on my shoes',
    sentence2:
      'Last week, I undid all the work I had completed on my project because of a mistake',
    sentence3:
      'Last night, I undid the buttons on my shirt before getting into bed',
    sentence4: 'I often undid my braids before going to sleep',
    sentence5:
      "Yesterday, I undid the damages caused by the previous night's storm",
    sentence6:
      'Last Saturday, I undid the zipper on my backpack to get my phone out',
    sentence7:
      'I frequently undid the packaging of my snacks before consuming them',
    sentence8:
      'Earlier today, I undid the screws on my chair to adjust its height',
    sentence9: 'she undid her hair and let it breathe',
    sentence10:
      'Last year, I undid all my prior assumptions about a particular topic after doing extensive research',
    word: 'undid',
    mean: 'çözmek, yok etmek, yaptığını geri almak',
  },
  {
    sentence1: 'Yesterday, she upheld her promise to help me with my project',
    sentence2: 'He always upheld his family traditions during the holidays',
    sentence3:
      'Last week, they upheld their commitment to volunteer at the local shelter',
    sentence4:
      'Every morning, I upheld my morning routine of stretching and meditation',
    sentence5:
      'The company upheld their reputation for excellent customer service',
    sentence6:
      'On Saturdays, she upheld her tradition of going for a long run in the park',
    sentence7:
      'Every year, the school upheld its tradition of organizing a charity event',
    sentence8:
      'Last night, he upheld his role as team captain by motivating his teammates to victory',
    sentence9:
      'Throughout the years, our friendship upheld strong bonds of trust and loyalty',
    sentence10:
      'Despite the challenges, they upheld their belief in themselves and achieved their goals',
    word: 'upheld',
    mean: 'desteklemek, sürdürmek, ayakta tutmak',
  },
  {
    sentence1: "I woke up at 7 o'clock this morning",
    sentence2: "She woke up feeling refreshed after a good night's sleep",
    sentence3: 'We woke up early on Saturday to go for a hike',
    sentence4: 'The alarm clock woke me up every day at 6 am',
    sentence5: 'I woke up late yesterday and missed my bus to work',
    sentence6: 'He woke up suddenly to the sound of his phone ringing',
    sentence7: 'The smell of coffee woke me up with its pleasant aroma',
    sentence8: 'I woke up feeling excited for the day ahead',
    sentence9:
      'She woke up with a smile on her face, knowing it was a beautiful day',
    sentence10: 'I woke up to the sound of birds chirping outside my window',
    word: 'woke',
    mean: 'uyanmak, uyandırmak',
  },
  {
    sentence1: 'I wore a beautiful dress to the party last night',
    sentence2: 'She wore her favorite necklace on special occasions',
    sentence3: 'They wore matching outfits to school',
    sentence4: 'We wore our uniforms to work when we were at high school',
    sentence5: 'He wore a hat, even in the hot sun as a child',
    sentence6:
      'The kids enthusiastically wore costumes for Halloween last year',
    sentence7: 'My sister and I wore matching pajamas when we were younger',
    sentence8:
      'The fashion models confidently wore the latest trends on the runway',
    sentence9: 'John reluctantly wore a suit and tie to the wedding',
    sentence10:
      'Jenny proudly wore her graduation cap and gown during the ceremony',
    word: 'wore',
    mean: 'giymek, takmak',
  },
  {
    sentence1: 'Yesterday, I wove a beautiful scarf for my sister',
    sentence2: 'Last week, she often wove colorful ribbons into her hair',
    sentence3:
      'Yesterday morning, the children wove intricate patterns with their colored pencils',
    sentence4: 'When I was younger, I often wove carpets on a small loom',
    sentence5:
      'During the craft class, the kids wove paper strips to make colorful mats',
    sentence6:
      'I wove a story about my imaginary adventures when I was a child',
    sentence7:
      'Sarah wove a basket using willow branches during the nature workshop',
    sentence8: 'The bird wove its nest with small twigs',
    sentence9: 'We wove colorful bracelets at camp',
    sentence10: 'The spider wove a web in the corner of the window',
    word: 'wove',
    mean: 'dokumak, örmek',
  },
  {
    sentence1: 'Last night, I wept uncontrollably after watching a sad movie',
    sentence2: 'I wept with joy when I received my exam results',
    sentence3: 'Yesterday, I wept softly while listening to a touching song',
    sentence4: 'Tom wept bitterly after losing his favorite toy',
    sentence5:
      'The last time I watched a heartwarming video, I wept tears of happiness',
    sentence6: 'During her graduation ceremony, Mary wept tears of pride',
    sentence7: 'I wept uncontrollably for hours when my pet passed away',
    sentence8: 'When I read the heartfelt novel, I usually wept',
    sentence9: 'Last week, I wept with relief when I found my lost wallet',
    sentence10:
      "Sarah wept tears of disappointment when she didn't get the job offer",
    word: 'wept',
    mean: 'gözyaşı dökmek',
  },
  {
    sentence1: 'I wet my hair before shampooing it',
    sentence2: 'She wet the cloth to clean the table',
    sentence3: 'He wet his lips with his tongue',
    sentence4: 'The rain wet the streets last night',
    sentence5: 'We wet our feet in the lake',
    sentence6: 'You wet the brush before painting',
    sentence7: 'They wet the garden every evening',
    sentence8: 'The dog wet the floor after the bath',
    sentence9: 'She wet her new plants yesterday',
    sentence10: 'The boat wet the dock as it passed by',
    word: 'wet',
    mean: 'ıslatmak, işemek',
  },
  {
    sentence1: 'I wound the clock before going to bed',
    sentence2: 'She wound the yarn into a ball',
    sentence3: 'He wound up the toy and it moved',
    sentence4: 'The road wound through the mountains',
    sentence5: 'We wound the ribbon around the gift',
    sentence6: 'You wound your watch every morning',
    sentence7: 'They wound the bandage around his arm',
    sentence8: 'The river wound through the valley',
    sentence9: 'She wound the scarf around her neck',
    sentence10: 'The cat wound itself around my legs',
    word: 'wound',
    mean: 'sarmak, dolamak',
  },
  {
    sentence1: 'I won the lottery last weekend',
    sentence2: 'She won the spelling bee competition in her school',
    sentence3: 'They won the basketball championship in their league',
    sentence4: 'He won a gold medal in the swimming competition last summer',
    sentence5: 'We won the games during our soccer season',
    sentence6: 'The team won the match by scoring three goals',
    sentence7:
      'My sister won a scholarship for her outstanding academic performance',
    sentence8:
      'The company won a prestigious award for their innovative products',
    sentence9: 'Sarah won a trip to Paris in a radio contest last year',
    sentence10: 'I never won any bets in the casino',
    word: 'won',
    mean: 'kazanmak',
  },
  {
    sentence1: 'I withdrew money from the bank yesterday',
    sentence2: 'She frequently withdrew cash from the ATM',
    sentence3: 'We always withdrew our savings before a big trip',
    sentence4: 'They often withdrew funds from their joint account',
    sentence5: 'He rarely withdrew money from his debit card',
    sentence6: 'The company withdrew its financial support last month',
    sentence7: 'I frequently withdrew coins from the piggy bank to buy candy',
    sentence8: 'My parents occasionally withdrew cash from the local branch',
    sentence9:
      'She regularly withdrew money from the joint account without informing her spouse',
    sentence10: 'We sometimes withdrew funds from the online banking platform',
    word: 'withdrew',
    mean: 'geri çekilmek, para çekmek',
  },
  {
    sentence1: 'The bridge withstood the strong winds',
    sentence2: 'Our tent withstood the heavy rain',
    sentence3: 'The old tree withstood many storms',
    sentence4: 'She withstood the cold with a warm coat',
    sentence5: 'He withstood the heat in the shade',
    sentence6: 'The building withstood the earthquake',
    sentence7: 'We withstood the noise during the concert',
    sentence8: 'You withstood the long wait patiently',
    sentence9: 'They withstood the challenge successfully',
    sentence10: 'The ship withstood the rough waves',
    word: 'withstood',
    mean: 'karşı koymak, direnmek',
  },
  {
    sentence1: 'Yesterday, I wrote a thank-you note to my teacher',
    sentence2: 'Last week, I wrote a poem about love',
    sentence3: 'I wrote in my journal about my day',
    sentence4: 'On Monday, I wrote a letter to my best friend',
    sentence5: 'Usually, I wrote stories in English class',
    sentence6: 'Last night, I wrote a letter to Santa Claus',
    sentence7: 'Every morning, I wrote a to-do list for the day',
    sentence8: 'On my birthday, I wrote a wish list of gifts I wanted',
    sentence9: 'Sometimes, I wrote messages on sticky notes to remind myself',
    sentence10:
      'In the evening, I wrote a message on a birthday card for my mom',
    word: 'wrote',
    mean: 'yazmak',
  },
];
