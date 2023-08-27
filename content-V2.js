/*
* 
* xarib
*
*/

if (typeof game_busted !== "function" || typeof game_waiting !== "function") close();

var _50Flg_ = false;
var oContainer = [];
var f_game_busted = game_busted;
var f_game_waiting = game_waiting;

$('div.user-name').after("<div class='top-link'>XARIB v1.0<h4 id='hadi-box' style='bottom-color: linear-gradient; border-radius: 30px; font-weight: bold; position: fixed;right: 32px; text-shadow: 1px 1px 1px #000; padding: 1px;'></h4></div>");

game_waiting = (function () {
    return function (str) {
        f_game_waiting.apply(this, arguments);
        __init50Hss__();
        var resultUpTo1_80 = getAlgorithmNumberHash(str.md5, 1.05, 2);
        var resultUpTo5_00 = getAlgorithmNumberHash(str.md5, 5);
        
        var isLowerCoefficient = parseFloat(resultUpTo1_80) < parseFloat(resultUpTo5_00);
        var isGreaterCoefficient = parseFloat(resultUpTo1_80) > parseFloat(resultUpTo5_00);
        
        var finalCashout = parseFloat(resultUpTo1_80).toFixed(2);
        
        if (isLowerCoefficient) {
            var randomPercentage = (Math.random() * (0.75 - 0.40) + 0.40); // Random reduction between 40% and 75%
            var adjustedCashout = (parseFloat(resultUpTo1_80) * randomPercentage).toFixed(2);
            finalCashout = Math.max(adjustedCashout, 1.01); // Ensure final cashout is at least 1.01
        } else if (isGreaterCoefficient) {
            var randomPercentage = (Math.random() * (0.75 - 0.40) + 0.40); // Random reduction between 40% and 75%
            var adjustedCashout = (parseFloat(resultUpTo1_80) * randomPercentage).toFixed(2);
            finalCashout = Math.max(adjustedCashout, 1.01); // Ensure final cashout is at least 1.01
        }
        
        if (finalCashout < 1) {
            var randomValue = (Math.random() * (1.20 - 1.01) + 1.01); // Random value between 1.01 and 1.2
            finalCashout = randomValue.toFixed(2);
        }
        
        document.getElementsByClassName('cashout-amount')[0].value = parseFloat(finalCashout);
        $("h4#hadi-box").html("<span style='color: green;'>" + resultUpTo5_00 + "</span><br><span style='color: red;'>" + resultUpTo1_80 + "</span>");
    };
})();



game_busted = (function () {
    return function (str) {
        __init50Hss__();
        addToRepository(str);
        $("h4#hadi-box").html("XARIB Processing");
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
        "c0eb05cd3a2272a6a83eb6535b04adc1b9e7359ed2c512c596b2318a2accb0dd",
        "cb2f85928f18b1c4d6e2daa723fed34fc528caa5c122e6e943b9c500b7c950c8",
        "413b6ec6df7c77c964b93527246ab853f0e85b8c12834252b0d4f375d913f136",
        "234d43a15f6691bd7a4a60dde37f04d4bde7cc8c37666f704bfafbdfec3e0c93",
        "39b9ef839d0168a4e36a17bdc96e49b4041faf2c87a30c1fc39bba697ee5afa3",
        "bf422072574ec483ef5e420775eefe20cb676112f8dad4e07ce98ef18acfedba",
        "f79c81d35124d15a0613056c1b40a6c50220a69db471503fda4b1fb48242f2ee",
        "66b547cdb9377fa4cd3fe2f9fbb1304b70955e4832557e0cd708b96ef23ffc24",
        "a012cbd25cb6694969d90d95daa0dba75d36a8d0e6ebab11c3e8c61c3327f9bc",
        "4c4613a24a73cc3e773fcdd2d6a35fc1c64e1e04abb3ae5ef4142c650d0aa6b2",
        "8b6f83adeed47151a9a22614666432abe6cdaa47d436c83b441aa79de19f548d",
        "4d231c8f90a14f954f3fe6fd1e609189c51e64258fc5b882f1e494a7bdd19487",
        "61b4497021d7ba738b19a41a040f12b2b14b7474090d2f571cf95bd26df21a26",
		"46019d4b07e6b5f21729ff748019ac26c5b4932ef0fb0760255419b683a8744d",
		"3749b4dd94533256eb887565610b06c60fada91ff27475ad6fb9241fb2f2cf3a",
		"fceea007f1ea03969cb0e8d394b66be4546ce62aa23209a0d183425cdb576769",
		"2c8790855487c2b2689f723eaa24691d5040abc762f6596cd64c4e90cd0626d8",
		"bbb24032661444e006106219642368821f86d650d865fd8b4322e50582bf328e",
		"8297aa568576d52b128112904f764180d59a828540673325a3938bfef22eee68",	
		"76c8b13eab657487d2d858230907a6a231055f6c92b8672bd931751cf0b40940",
		"5516f25a3671286b20d7d4f42c543b37ae0b43a0a071dd665e1199be6c070555",
		"1ec4da489caf31f5f33b55adb2707d648ffecfba8601dda0630162a6b8d05ea4",
		"1d1030fa31d918d3892f4824af2039c1535280965490e8d2c0994c0989e590a0",
		"37e748ae18d207a569bc3c2e8c5f5ae3ed56c0c9c417306496b292d698502e78",
		"aa82247185ed79452c87222b71decfa8b84714dca6c7abd398c6b8d141837ef8",
		"31cc25e3d9da3e1821ad67568ab98efb31bc0136f89f5347b275ac6a6a205a5b",
		"75ea18b8e4e3cb8b547393f4540f4da8a28102213c0feef5c8891ab06fe6b8b3",
		"7766000862e7d3afc7986ee0b0340b8dc8af0ee11672414051de326a76476926",
		"ce0572dfe9cc4c1005219031327a1f7c481ee4e0acd96f2280006170a75be23e",
		"cb6288d72b2d53a9bfecdc8dac9f5312c2e37456e470fca8f628a76aa3d2cdd8",
		"e9293a191788b3a4177bbb948d599673f3cbdb7ee8f4d9471262990cc606267b",
		"8f5c9d47b7230354a7c3b75ec1b0139f4b370f1caed7579fd25fa0b07cdab3c0",
		"1555c720d5eac2f9c2155de66ae897410e682cf9a56fd724f1904ed3a148e08f",
		"1555c720d5eac2f9c2155de66ae897410e682cf9a56fd724f1904ed3a148e08f",
		"b365f375f4023c7d0bbaca363cbf569bf6e75ddeded79a451737844cc14b9a02",
		"ddefcf76ae916ec483225b03368ec8e8ab5842749adcbadafad248193b591657",
		"e5b96ced5c04b73a1dc094e19f551e87444d9b8f0263b85bbd9872897f1513a8",
		"2743105023c507ff1acf3765ab1dd8afd78adec8182d63749b5d623f3bb4ccac",
		"54104041d31c74f9a14a2b84fce78691358c7d45be40d32d1abb28341b957b25",
		"cd0ce0a6497af9699ab26e6eb4dbfe27b59fd90a4d83cab5317d44a2dc2a3243",
		"f42ff3ff892f6fa200920d8c5279dcbe1f27aa40796a7f4bd1259eeb89e038d1",
		"f2e6a87e7c0aab06047e2e8c1d29e602f2e612bf282587e662bec6662eac935e",
		"c49426eb455500f66d8f1e11cae6eb8bb85146a3f679b22ed046a14e1397c185",
		"9427bd224aea27422cb1694f0d9c637f3dd7dd7a30a81433d90a37bb4e9bb206",
		"3b1571f1d20991234f494e4ddc6b1558b5ac2bff85c72bb17eb946c122d5d1cd",
		"7e46ce70285fa5a71ee49de8777b07e29d3ab7aa659c85da2f66ae980041cf93",
		"71bd5a043407929b18d9622afe7f248e2edeab0c9ef2b672949fbf6ed1fedd66",
		"4306fee32557bc1a0247d6c370c938c2fdcc9ddb9f009e74736a0a1ed535bc2f",
		"8b8745f70cc4ad00049c9cb7a0a634fa518a9cc5d8db74a66e5b2dc6f654bbbd",
		"2f0853d0d1b27ff081c6b858bd88054e94652f0ef7f56746df06353d241152d5",
		"39a76fd8e180ceb886345ecb63a5cbbb112994d816b3800c306cd029fe3ca16b",
		"32031addf9459de80d63204ffc0c9cabd87753aae5be501cf633d744e0aa1355"
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
    var maxCashout = 5;

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
