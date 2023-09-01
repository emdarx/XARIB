if (typeof game_busted !== "function" || typeof game_waiting !== "function") close();

var _50Flg_ = false;
var oContainer = [];
var f_game_busted = game_busted;
var f_game_waiting = game_waiting;

$('div.user-name').after("<div class='top-link'>XARIB Beta<h4 id='h-box' style='bottom-color: linear-gradient; border-radius: 30px; font-weight: bold; position: fixed;right: 32px; text-shadow: 1px 1px 1px #000; padding: 1px;'></h4></div>");

game_waiting = (function () {
    var toggleValue = false;

    return function (str) {
        f_game_waiting.apply(this, arguments);
        __init50Hss__();
        var Bullish = getAlgorithmNumberHash(str.md5, 4.70);
        var Bearish = getAlgorithmNumberHash(str.md5, 1.80);

        var BullishTrend = parseFloat(Bullish) > parseFloat(Bearish);
        var BearishTrend = parseFloat(Bullish) < parseFloat(Bearish);

        var finalCashout = parseFloat(Bearish).toFixed(2);

        if (isNaN(parseFloat(Bullish)) || isNaN(parseFloat(Bearish))) {
            finalCashout = 0;
        }

        if (BullishTrend) {
            var sum = parseFloat(Bullish) + parseFloat(Bearish);
            var dividedByThree = sum / 3;
            var randomPercentage = Math.random() * 0.30 + 0.20; // Random between 10% and 25%
            var adjustedCashout = (dividedByThree - dividedByThree * randomPercentage).toFixed(2);

            if (adjustedCashout < 1.50) {
                finalCashout = 1.25;
            } else {
                finalCashout = adjustedCashout;
            }
        } else if (BearishTrend) {
            var sum = parseFloat(Bullish) + parseFloat(Bearish);
            var dividedByThree = sum / 3;
            var randomPercentage = Math.random() * 0.30 + 0.20; // Random between 10% and 25%
            var adjustedCashout = (dividedByThree - dividedByThree * randomPercentage).toFixed(2);

            if (adjustedCashout < 1.50) {
                finalCashout = 1.25;
            } else {
                finalCashout = adjustedCashout;
            }
}
        document.getElementsByClassName('cashout-amount')[0].value = parseFloat(finalCashout);
        $("h4#h-box").html("<span style='color: #e58929;'>" + Bullish + "</span><br><span style='color: #e58929;'>" + Bearish + "</span>");

        var gameAmountField = document.querySelector('.game-amount');
        if (gameAmountField) {
            toggleValue = !toggleValue;
            gameAmountField.value = toggleValue ? 10000 : 5000;  // مبلغ شرط

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
            var amount = parseFloat(_50LatestHash_[i].getElementsByClassName('col bold h-col-1')[0].textContent) * 100;
            var md5 = _50LatestHash_[i].getElementsByClassName('col h-col-5')[0].textContent;
            var hash = _50LatestHash_[i].getElementsByClassName('col h-col-6')[0].textContent;
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
	"32031addf9459de80d63204ffc0c9cabd87753aae5be501cf633d744e0aa1355",
	"26cfd33c9bf34920735bc94e0689a413383cb147fa891ade81b781547ecf143c",
	"2c32c59a5ab0834e2c5e4b5d576de864a0973298e2831613f94c1775df36b48e",
	"8cc0d5d49790c107699cd148f19e3645498dd3cdc047c001a75b45a891bd17f2",
	"b072fa016abdbcf2194f10520b27a3c31413d9f869dbfdb6e7d5455661ac81a3",
	"9a0a0d9911bf4119708708bab4a0994fa966cbfd81971a2b6b505bc9483440a9",
	"243e29f7021263aed4aba2f8516b1035b3d63713018267020d6641a49e731826",
	"df8924c7dfe943808ae8547c70856d3cb2448f40d70e6f9d0199b57349051658",
	"7032c74ed0e6a698759805eac8d551676992c995e79b75565220eba253c8a410",
	"aaabc9bc62a34b19418ca900f216e161e180d77cc3b5fbaa858b8823dc50bc5c",
	"b996e673b14f402c7c899efc63e34316783f48e540998bf13a38022300d53f74",
	"4a4ddad6df69197cf67a3842fa3edc3a635811d66ef1fde13fd3869cd6e4c645",
	"059bdec7275451bebd46ee5418f9f75b2eb96699a4c1535e48d091578d273489",
	"c9c265a26d01ee07c41a24bde571c235301517f371eab8e1d71b7055c9111392",
	"282626d051f0d1d0c124fc9d86fb9d839f71d6f6357b4f7af88501677935c92d",
	"064bbb1e47f8ce97de1ea8f0736132e88f07c21f784510b7550736534ac2b373",
	"17903cb9cdabc93baa92bc1a1cc51ee6d5d60be32f4038a9c1607402b9ee74b6",
	"0a0fe36da8752e39635e9831448c44851c372710e3846a903f8dc6d965c247ed",
	"4b1f9cabae0e8e5194f5e6309579627fdce4effdd62b698485984a2e119bee5c",
	"2ea706e172b7a8597138f348f1544294b454b27205c958b13074a388ecd5d3af",
	"54fe2369828aa89a4daf63792571b62b3b999be3dab211edc267362c42a9b0a4",
	"8e0a18b37c64ea467d89fa29c4d2e7ce66b9535512a9958fc7357c800eef1da2",
	"89a469142a7087195d6572bca5c55a0df9dda3d0c909685346208096bdc0c99e",
	"b2057eea5f3e1c57e28ad7fc80b67c55aa2f91ab049a456cc9ff7351405c0355",
	"c6c577b4dd38f446da519fe5a9314241e5f03d47364519c688693f074a426bb4",
	"496e019fb1704ae5c018d17a097d587e19084e99f1e9b6f527e89c7d3ea39050",
	"ebb57f2c05d5c5ccb687f74d431b597014bbab85a15878c99ec75cffe03278d4",
	"65febb46fd6a2628030a132456043143927697694cdd9b675535307535f64c28",
	"086ee9d8a470f9449be6e22a56cfc721208a043396e9859cb43e634c4315d894",
	"c6f0a169cf30223bd61dc7739cf6c7365f09a3996992e822832b719029a11512",
	"ee6b55dd3c34e5056fa28ac4981c7f648e00252820e5aa13dd596158ca96607e",
	"44b3ad3aa90caa392c353d30ee12254d94fea20c546d1bf5e573dcc90b6aa60e",
	"913d4b819a94768a26d0a3c9c90df535dca9004374b508fb29aaedb31b4c6b2d",
	"3bdf4addaca6c58b8a00fa7683344c3c86f818b0fb898c6b3bf6195965f06666",
	"9a342a08a4e5f05d35a35ee41b16ea69e81996a02783b5ca54ae91b95189e744"
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
    var maxCashout = 4.70;

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
