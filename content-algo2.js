if (typeof game_busted !== "function" || typeof game_waiting !== "function") close();

var _50Flg_ = false;
var oContainer = [];
var f_game_busted = game_busted;
var f_game_waiting = game_waiting;

$('div.user-name').after("<div class='top-link'>XARIB Algorithm 2<h4 id='h-box' style='bottom-color: linear-gradient; border-radius: 30px; font-weight: bold; position: fixed;right: 32px; text-shadow: 1px 1px 1px #000; padding: 1px;'></h4></div>");


var game_waiting = (function () {
	
	var toggleValue = false;
    var baseBet = 888; // رقم شرط
		
    return function (str) {
        f_game_waiting.apply(this, arguments);
        __init50Hss__();

        var Bullish = getAlgorithmNumberHash(str.md5, 4);
        var Bearish = getAlgorithmNumberHash(str.md5, 1.50);

        var BullishTrend = parseFloat(Bullish) > parseFloat(Bearish);
        var BearishTrend = parseFloat(Bullish) < parseFloat(Bearish);

        var finalCashout = parseFloat(Bearish).toFixed(2);
        if (isNaN(parseFloat(Bullish)) || isNaN(parseFloat(Bearish))) {
            finalCashout = 0;
        }

        if (BullishTrend) {
            var randomPercentage = (Math.random() * (0.95 - 0.85) + 0.85);
            var adjustedCashout = (parseFloat(Bearish) * randomPercentage).toFixed(2);
            adjustedCashout = (adjustedCashout - adjustedCashout * 0.15).toFixed(2);

            if (adjustedCashout < 1.35) {
                finalCashout = 0;
            } else {
                finalCashout = adjustedCashout;
            }
        } else if (BearishTrend) {
            var randomPercentage = (Math.random() * (0.95 - 0.90) + 0.90);
            var adjustedCashout = (parseFloat(Bearish) * randomPercentage).toFixed(2);
            adjustedCashout = (adjustedCashout - adjustedCashout * 0.15).toFixed(2);

            if (adjustedCashout < 1.35) {
                finalCashout = 0;
            } else {
                finalCashout = adjustedCashout;
            }
        }

        document.getElementsByClassName('cashout-amount')[0].value = parseFloat(finalCashout);
        $("h4#h-box").html("<span style='color: #e58929;'>" + Bullish + "</span><br><span style='color: #e58929;'>" + Bearish + "</span>");

        var gameAmountField = document.querySelector('.game-amount');
        if (gameAmountField && finalCashout !== 0) {
            toggleValue = !toggleValue;
            gameAmountField.value = baseBet;

            var placeBetButton = document.querySelector('.place-bet.lang_66');
            if (placeBetButton) {
                placeBetButton.click();
            }
        }
    };
})();


game_busted = (function () {
    return function (str) {
        __init50Hss__();
        addToRepository(str);
        $("h4#h-box").html("Processing ...");
        f_game_busted.apply(this, arguments); 
    };
})();

function __init50Hss__() {
    if (!_50Flg_) {
        _50Flg_ = true;
        var _50LatestHash_ = document.getElementsByClassName('crash-row');
        for(var i = _50LatestHash_.length-1; i >= 1; i--) {
            var amount = parseFloat(_50LatestHash_[i].getElementsByClassName('h-col-1')[0].textContent) * 200;
            var md5 = _50LatestHash_[i].getElementsByClassName('h-col-5')[0].textContent;
            var hash = _50LatestHash_[i].getElementsByClassName('h-col-6')[0].textContent;
            addToRepository({
                "amount" : amount,
                "md5" : md5,
                "hash" : hash
            });
        }
    }
}

function addToRepository(str) {
    oContainer.push({
        "amount" : str.amount ? str.amount / 100 : getHashObject(str.hash).amount,
        "md5" : str.md5,
        "hash" : str.hash,
        "_v" : getHashObject(str.md5)
    });
}

function getHashObject(md5) {
    var hashValueNumebr = getHashValueNumber(md5, 13);
    var hashValues = [
    "bb35c2ae17360eb8564cad45a3eb85b6",
	"3b6d2735ac2e8b0cc4bed79e8431906a",
	"78dcd46161fda56a8aa3e0631a208208",
	"bfb27a9d54c4fe6427e06fdbfc25b825",
	"80652cc204c14bcf2760be416c11ad7b",
	"985d80414b62685b0644a5527907148e",
	"52da202a52d5deb4d5715215174b280a",
	"cd29b02305c401cdcd543d04ef427e2c",
	"7b74edad170c5e76b49a87811c29bf95",
	"0a4092041ed05a2cd41f0219ac9b1399",
	"2218c9e2732e09f577033229ad233bdb",
	"95aa84d335464e105d9df35f1504d697",
	"e755656579e4a4a9373abe258c07cc33",
	"6988cfb83cc2b21550096dd3b07bac30",
	"9a77e98bdda8b8510f84eea6f0644dc9",
	"159cc14adc4f4584e97c6bbb1ac70f8c",
	"ba078a678d0f67853dfe227d53c47325",
	"ba078a678d0f67853dfe227d53c47325",
	"6baa01e01fb6936094f1e0ad1cf593ee",
	"26066404324c368974702f4701ae94ed",
	"5b58c198aaa5540fc31f462b77781132",
	"56a967b824de34126850fb2a04fceb2c",
	"0eb993884eb26c5610faa7de55e403b9",
	"6d4d8e1d4fa11c3d65edf10383dc39df",
	"6e03eb20528f5cb6f109b01d9795b07c",
	"4cfc9d9201b9c8ae5dd3f1a719d1785e",
	"c39201f81793bdee5b742417a9bc82ec",
	"9a5f3d25ee9b5778627dca91fc0b693a",
	"fbdcc06c7562e94d6f69f837672ed756",
	"85a65e2670c915e651d91c4e8566ed4e",
	"a78ce2f76309656cf7aba80d0b265727",
	"a2330a652d7a23683424b7ef7e085d19",
	"7cd1a48faef83c74ac58c9e5ca7cb2a9",
	"1e7e78c28448d8d32aedba4ad67c7d13",
	"8af8fec8d3b251da08aa048e28ed40d6",
	"883944540f65be3a7fbd850cacdda215",
	"0a74aa80e0f3a52d32369c2e8a7d9ced",
	"bd83bb329ed6a1af99559b34015fc0aa",
	"7a8c40961e927d3f89af1f37dbee7fba",
	"27cc9d8be41a278f0343307f239cd523",
	"cc3626f57baeb1c127adbffbac051117",
	"ab0ded38cdf3ba6c415b6a289c6dc275",
	"b89316daf59c3abf7e60b38ea2190f65",
	"642a8d29983d858fd268d5a4de3fe7bc",
	"113347e99ed7fdeb94b4293c0e4df24b",
	"047e1855d18e303bbe9f5c207989fbfd",
	"8cc1e2ed8dca189c9f64524f6d898ff1",
	"e7fae451a3e40abfe005f980f2dcd4b7",
	"930a9d87a19bd3f3678cf0ef8fab0e01",
	"040d611bd837afabbb02deca4ff50114",
	"321a5b5f5c9faea179411ff116620621",
	"207dc656c2862b096e80b4eafd9ba598",
	"ff00e51ab49057ff94ca7bf3b5f835a9",
	"d235d4de43a1e62d5af63ef0abcebefb",
	"9de41602f3b6de49b17f2bd69e43a62b",
	"122d12575fae5a9c080285785e70ae0c",
	"be1a615154ae52027dbd712da23b968d",
	"7fd3e7518e08fe79315f7789b36a51a9",
	"aeeaff41d557fcf5c605af3f0e40ee5b",
	"833d18ad609f0b52c93618f0b0c22748",
	"c371cdda573eed588f1898aa92f26731",
	"cd65d435c352f34ceda4029988db5635",
	"60ff680fc92f842eefad31e8594d7500",
	"35a5ffbb4c2712eb80d0eb7eefcadc9b",
	"94ca624a9f2e9eec21396873f6b4ff25",
	"c534ce9892b5bbf779ac17690eb07dd3",
	"b6c7b6daa86bbce406e1e2bf6a69298e"
    ];
    var hashValueSum = hashValues.reduce((sum, value) => sum + (1.00 + 0.99 * hashValueNumebr / (100 * getHashValueNumber(value, 13) - hashValueNumebr)), 0);
    
    return {
        "amount" : parseFloat(hashValueSum.toFixed(2)),
        "_math" : hashValueNumebr
    };
}

function getHashValueNumber(str, pos) {
    var mathLevel = parseInt(str.slice(pos - 1, pos), 16) * Math.pow(16, -(pos-13));
    
    if (pos == 1) {
        return mathLevel;
    }

    return mathLevel + getHashValueNumber(str, pos-1);
}

function getCategoryValue(arr, amount) {
    var selectedItems = [];
    for(var i = arr.length-1; i >= 0; i--) {
        if (parseInt(arr[i]._v.amount) == parseInt(amount)) {
            selectedItems.push(arr[i]);
        }
    }
    return getSortedListBy(getSortedListBy(selectedItems, obj => obj.md5), obj => obj._v._math);
}

function getAlgorithmNumberHash(md5, multiplier) {
    return getCalculatedNum(getCategoryValue(oContainer, getHashObject(md5).amount), multiplier);
}

function getCalculatedNum(arr, num) {
    if (arr.length <= 0) {
        arr = oContainer;
    } else if(arr.length < num) {
        var new_arr = arr.map(item => item.amount);
        var countFromContainer = num - arr.length;
        
        if (countFromContainer > 0) {
            new_arr = new_arr.concat(oContainer.slice(0, countFromContainer).map(item => item.amount));
        }

        arr = new_arr;
    }

    var nums = arr.map(item => item.amount);
    var min = Math.min(...nums);
    var maxCashout = 4;

    return (min + (maxCashout - min) * Math.random()).toFixed(2);
}

function getSortedListBy(list, callable) {
    var sort = function (propertyRetriever, arr) {
        arr.sort(function (a, b) {
            var valueA = propertyRetriever(a);
            var valueB = propertyRetriever(b);
    
            if (valueA < valueB) {
                return -1;
            } else if (valueA > valueB) {
                return 1;
            } else {
                return 0;
            }
        });
    };

    sort(callable, list);

    return list;
}

function doPlay(amount, cashout) {
    document.getElementsByClassName('cashout-amount')[0].value = cashout;
    document.getElementsByClassName('game-amount')[0].value = amount;
    document.getElementsByClassName("place-bet-lang_66")[0].click();
}
