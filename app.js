// ================================================================
// 省市区数据
// ================================================================
var regionData = {
    "北京": { "北京市": ["东城区","西城区","朝阳区","丰台区","石景山区","海淀区","门头沟区","房山区","通州区","顺义区","昌平区","大兴区","怀柔区","平谷区","密云区","延庆区"] },
    "上海": { "上海市": ["黄浦区","徐汇区","长宁区","静安区","普陀区","虹口区","杨浦区","闵行区","宝山区","嘉定区","浦东新区","金山区","松江区","青浦区","奉贤区","崇明区"] },
    "江苏": {
        "南京市": ["玄武区","秦淮区","建邺区","鼓楼区","浦口区","栖霞区","雨花台区","江宁区","六合区","溧水区","高淳区"],
        "无锡市": ["锡山区","惠山区","滨湖区","梁溪区","新吴区","江阴市","宜兴市"],
        "徐州市": ["鼓楼区","云龙区","贾汪区","泉山区","铜山区","丰县","沛县","睢宁县","新沂市","邳州市"],
        "常州市": ["天宁区","钟楼区","新北区","武进区","金坛区","溧阳市"],
        "苏州市": ["虎丘区","吴中区","相城区","姑苏区","吴江区","常熟市","张家港市","昆山市","太仓市"],
        "南通市": ["崇川区","通州区","海门区","如东县","启东市","如皋市","海安市"],
        "连云港市": ["连云区","海州区","赣榆区","东海县","灌云县","灌南县"],
        "淮安市": ["淮安区","淮阴区","清江浦区","洪泽区","涟水县","盱眙县","金湖县"],
        "盐城市": ["亭湖区","盐都区","大丰区","响水县","滨海县","阜宁县","射阳县","建湖县","东台市"],
        "扬州市": ["广陵区","邗江区","江都区","宝应县","仪征市","高邮市"],
        "镇江市": ["京口区","润州区","丹徒区","丹阳市","扬中市","句容市"],
        "泰州市": ["海陵区","高港区","姜堰区","兴化市","靖江市","泰兴市"],
        "宿迁市": ["宿城区","宿豫区","沭阳县","泗阳县","泗洪县"]
    },
    "浙江": {
        "杭州市": ["上城区","拱墅区","西湖区","滨江区","萧山区","余杭区","富阳区","临安区","桐庐县","淳安县","建德市"],
        "宁波市": ["海曙区","江北区","北仑区","镇海区","鄞州区","奉化区","象山县","宁海县","余姚市","慈溪市"],
        "温州市": ["鹿城区","龙湾区","瓯海区","洞头区","永嘉县","平阳县","苍南县","文成县","泰顺县","瑞安市","乐清市"],
        "嘉兴市": ["南湖区","秀洲区","嘉善县","海盐县","海宁市","平湖市","桐乡市"],
        "湖州市": ["吴兴区","南浔区","德清县","长兴县","安吉县"],
        "绍兴市": ["越城区","柯桥区","上虞区","新昌县","诸暨市","嵊州市"],
        "金华市": ["婺城区","金东区","武义县","浦江县","磐安县","兰溪市","义乌市","东阳市","永康市"],
        "衢州市": ["柯城区","衢江区","常山县","开化县","龙游县","江山市"],
        "舟山市": ["定海区","普陀区","岱山县","嵊泗县"],
        "台州市": ["椒江区","黄岩区","路桥区","三门县","天台县","仙居县","温岭市","临海市","玉环市"],
        "丽水市": ["莲都区","青田县","缙云县","遂昌县","松阳县","云和县","庆元县","景宁畲族自治县","龙泉市"]
    },
    "广东": {
        "广州市": ["荔湾区","越秀区","海珠区","天河区","白云区","黄埔区","番禺区","花都区","南沙区","从化区","增城区"],
        "深圳市": ["罗湖区","福田区","南山区","宝安区","龙岗区","盐田区","龙华区","坪山区","光明区"],
        "珠海市": ["香洲区","斗门区","金湾区"],
        "汕头市": ["龙湖区","金平区","濠江区","潮阳区","潮南区","澄海区","南澳县"],
        "佛山市": ["禅城区","南海区","顺德区","三水区","高明区"],
        "韶关市": ["武江区","浈江区","曲江区","始兴县","仁化县","翁源县","乳源瑶族自治县","新丰县","乐昌市","南雄市"],
        "湛江市": ["赤坎区","霞山区","坡头区","麻章区","遂溪县","徐闻县","廉江市","雷州市","吴川市"],
        "肇庆市": ["端州区","鼎湖区","高要区","广宁县","怀集县","封开县","德庆县","四会市"],
        "江门市": ["蓬江区","江海区","新会区","台山市","开平市","鹤山市","恩平市"],
        "茂名市": ["茂南区","电白区","高州市","化州市","信宜市"],
        "惠州市": ["惠城区","惠阳区","博罗县","惠东县","龙门县"],
        "梅州市": ["梅江区","梅县区","大埔县","丰顺县","五华县","平远县","蕉岭县","兴宁市"],
        "汕尾市": ["城区","海丰县","陆河县","陆丰市"],
        "河源市": ["源城区","紫金县","龙川县","连平县","和平县","东源县"],
        "阳江市": ["江城区","阳东区","阳西县","阳春市"],
        "清远市": ["清城区","清新区","佛冈县","阳山县","连山壮族瑶族自治县","连南瑶族自治县","英德市","连州市"],
        "东莞市": ["东莞市"],
        "中山市": ["中山市"],
        "潮州市": ["湘桥区","潮安区","饶平县"],
        "揭阳市": ["榕城区","揭东区","揭西县","惠来县","普宁市"],
        "云浮市": ["云城区","云安区","新兴县","郁南县","罗定市"]
    },
    "四川": {
        "成都市": ["锦江区","青羊区","金牛区","武侯区","成华区","龙泉驿区","青白江区","新都区","温江区","双流区","郫都区","新津区","金堂县","大邑县","蒲江县","都江堰市","彭州市","邛崃市","崇州市","简阳市"],
        "自贡市": ["自流井区","贡井区","大安区","沿滩区","荣县","富顺县"],
        "攀枝花市": ["东区","西区","仁和区","米易县","盐边县"],
        "泸州市": ["江阳区","纳溪区","龙马潭区","泸县","合江县","叙永县","古蔺县"],
        "德阳市": ["旌阳区","罗江区","中江县","广汉市","什邡市","绵竹市"],
        "绵阳市": ["涪城区","游仙区","安州区","三台县","盐亭县","梓潼县","北川羌族自治县","平武县","江油市"],
        "广元市": ["利州区","昭化区","朝天区","旺苍县","青川县","剑阁县","苍溪县"],
        "遂宁市": ["船山区","安居区","蓬溪县","大英县","射洪市"],
        "内江市": ["市中区","东兴区","威远县","资中县","隆昌市"],
        "乐山市": ["市中区","沙湾区","五通桥区","金口河区","犍为县","井研县","夹江县","沐川县","峨边彝族自治县","马边彝族自治县","峨眉山市"],
        "南充市": ["顺庆区","高坪区","嘉陵区","南部县","营山县","蓬安县","仪陇县","西充县","阆中市"],
        "眉山市": ["东坡区","彭山区","仁寿县","洪雅县","丹棱县","青神县"],
        "宜宾市": ["翠屏区","南溪区","叙州区","江安县","长宁县","高县","珙县","筠连县","兴文县","屏山县"],
        "广安市": ["广安区","前锋区","岳池县","武胜县","邻水县","华蓥市"],
        "达州市": ["通川区","达川区","宣汉县","开江县","大竹县","渠县","万源市"],
        "雅安市": ["雨城区","名山区","荥经县","汉源县","石棉县","天全县","芦山县","宝兴县"],
        "巴中市": ["巴州区","恩阳区","通江县","南江县","平昌县"],
        "资阳市": ["雁江区","安岳县","乐至县"],
        "阿坝藏族羌族自治州": ["马尔康市","汶川县","理县","茂县","松潘县","九寨沟县","金川县","小金县","黑水县","壤塘县","阿坝县","若尔盖县","红原县"],
        "甘孜藏族自治州": ["康定市","泸定县","丹巴县","九龙县","雅江县","道孚县","炉霍县","甘孜县","新龙县","德格县","白玉县","石渠县","色达县","理塘县","巴塘县","乡城县","稻城县","得荣县"],
        "凉山彝族自治州": ["西昌市","盐源县","德昌县","会理市","会东县","宁南县","普格县","布拖县","金阳县","昭觉县","喜德县","冕宁县","越西县","甘洛县","美姑县","雷波县","木里藏族自治县"]
    },
    "山东": {
        "济南市": ["历下区","市中区","槐荫区","天桥区","历城区","长清区","章丘区","济阳区","莱芜区","钢城区","平阴县","商河县"],
        "青岛市": ["市南区","市北区","黄岛区","崂山区","李沧区","城阳区","即墨区","胶州市","平度市","莱西市"],
        "淄博市": ["淄川区","张店区","博山区","临淄区","周村区","桓台县","高青县","沂源县"],
        "枣庄市": ["市中区","薛城区","峄城区","台儿庄区","山亭区","滕州市"],
        "东营市": ["东营区","河口区","垦利区","利津县","广饶县"],
        "烟台市": ["芝罘区","福山区","牟平区","莱山区","蓬莱区","龙口市","莱阳市","莱州市","招远市","栖霞市","海阳市","长岛县"],
        "潍坊市": ["潍城区","寒亭区","坊子区","奎文区","临朐县","昌乐县","青州市","诸城市","寿光市","安丘市","高密市","昌邑市"],
        "济宁市": ["任城区","兖州区","微山县","鱼台县","金乡县","嘉祥县","汶上县","泗水县","梁山县","曲阜市","邹城市"],
        "泰安市": ["泰山区","岱岳区","宁阳县","东平县","新泰市","肥城市"],
        "威海市": ["环翠区","文登区","荣成市","乳山市"],
        "日照市": ["东港区","岚山区","五莲县","莒县"],
        "临沂市": ["兰山区","罗庄区","河东区","沂南县","郯城县","沂水县","兰陵县","费县","平邑县","莒南县","蒙阴县","临沭县"],
        "德州市": ["德城区","陵城区","宁津县","庆云县","临邑县","齐河县","平原县","夏津县","武城县","乐陵市","禹城市"],
        "聊城市": ["东昌府区","阳谷县","莘县","茌平区","东阿县","冠县","高唐县","临清市"],
        "滨州市": ["滨城区","沾化区","惠民县","阳信县","无棣县","博兴县","邹平市"],
        "菏泽市": ["牡丹区","定陶区","曹县","单县","成武县","巨野县","郓城县","鄄城县","东明县"]
    }
};

// ================================================================
// 任务4：深色模式 —— 脚本最顶部立即执行，渲染前就应用，避免闪烁
// ================================================================
(function () {
    try {
        var saved = localStorage.getItem('theme');
        if (saved === 'dark') {
            document.body.classList.add('dark-theme');
        }
    } catch (e) {}
})();

// ================================================================
// 页面切换
// ================================================================
function showPage(id) {
    var pages = ['register-page', 'login-page', 'home', 'liuyan'];
    for (var i = 0; i < pages.length; i++) {
        document.getElementById(pages[i]).style.display = 'none';
    }
    if (id) {
        document.getElementById(id).style.display = 'block';
    }
    var logoutBtn = document.getElementById('logoutBtn');
    if (id === 'home' || id === 'liuyan') {
        logoutBtn.style.display = 'block';
    } else {
        logoutBtn.style.display = 'none';
    }
    var loginTip = document.getElementById('loginTip');
    if (loginTip) {
        loginTip.style.display = isLogin() ? 'none' : 'block';
    }
    renderNav(id);
}

function showRegister() { showPage('register-page'); }
function showLogin() { showPage('login-page'); }
function showHome() {
    showPage('home');
    refreshVisitorInfo();
    playWelcome();
    animateSkills();   // 技能条动画填充
}

/* 技能条动画：回到首页时把进度条从 0 填充到目标百分比 */
var skillAnimated = false;
function animateSkills() {
    var fills = document.querySelectorAll('.skill-fill');
    if (!fills.length) return;
    fills.forEach(function (bar) {
        bar.style.width = '0';           // 先归零
    });
    // 下一帧再设置目标宽度，触发 transition 动画
    requestAnimationFrame(function () {
        setTimeout(function () {
            fills.forEach(function (bar) {
                bar.style.width = bar.getAttribute('style').match(/--w:\s*([0-9]+)%/)
                    ? bar.getAttribute('style').match(/--w:\s*([0-9]+)%/)[1] + '%'
                    : bar.style.getPropertyValue('--w');
            });
        }, 60);
    });
}
// 进入留言板前先校验登录态
function showLiuyan() {
    if (!isLogin()) {
        showToast('请先登录后再留言', 'error');
        showPage('login-page');
        return;
    }
    showPage('liuyan');
    loadMessages();
}
function isLogin() {
    return !!localStorage.getItem('currentUser');
}

// ================================================================
// 顶部导航条
// ================================================================
var navConfig = {
    'home': [
        { label: '🏠 个人简介', target: 'home' },
        { label: '💬 给我留言', target: 'liuyan-check' },
        { label: '🔐 登录 / 注册', target: 'login' }
    ],
    'liuyan': [
        { label: '🏠 个人简介', target: 'home' },
        { label: '💬 给我留言', target: 'liuyan-check' },
        { label: '🔐 登录 / 注册', target: 'login' }
    ],
    'login-page': [
        { label: '🏠 个人简介', target: 'home' },
        { label: '💬 给我留言', target: 'liuyan-check' },
        { label: '🔐 登录', target: 'login' }
    ],
    'register-page': [
        { label: '🏠 个人简介', target: 'home' },
        { label: '💬 给我留言', target: 'liuyan-check' },
        { label: '🔐 注册', target: 'register' }
    ]
};

function renderNav(currentId) {
    var cfg = navConfig[currentId] || navConfig['home'];
    for (var key in navConfig) {
        var slot = navConfig[key];
        for (var i = 0; i < slot.length; i++) {
            var item = slot[i];
            if (item.label.indexOf('🔐') === 0 && key === 'login-page') item._label = '🔐 登录';
            else if (item.label.indexOf('🔐') === 0 && key === 'register-page') item._label = '🔐 注册';
            else if (item.label.indexOf('🔐') === 0 && key !== 'login-page' && key !== 'register-page') item._label = '🔐 登录 / 注册';
        }
    }
    for (var id in navConfig) {
        var box = document.getElementById('nav-' + id);
        if (!box) continue;
        box.innerHTML = '<span class="nav-brand">📋 个人简介系统</span>';
        var items = navConfig[id];
        for (var j = 0; j < items.length; j++) {
            var it = items[j];
            var btn = document.createElement('button');
            btn.className = 'nav-btn' + (id === currentId && it.target === navTargetOf(id, j) ? ' active' : '');
            btn.textContent = it._label || it.label;
            btn.onclick = (function(t) { return function() { handleNav(t); }; })(it.target);
            box.appendChild(btn);
        }
    }
}

function navTargetOf(pageId, idx) {
    var t = navConfig[pageId][idx].target;
    if (t === 'liuyan-check') return 'liuyan';
    if (t === 'login' || t === 'register') return t;
    return t;
}

function handleNav(target) {
    if (target === 'home') showHome();
    else if (target === 'liuyan-check') showLiuyan();
    else if (target === 'login') showLogin();
    else if (target === 'register') showRegister();
}

// ================================================================
// 三级联动
// ================================================================
function onProvChange() {
    var prov = document.getElementById('reg-prov').value;
    var citySel = document.getElementById('reg-city');
    var distSel = document.getElementById('reg-dist');
    citySel.innerHTML = '<option value="">-- 城市 --</option>';
    distSel.innerHTML = '<option value="">-- 城区 --</option>';
    if (prov && regionData[prov]) {
        for (var city in regionData[prov]) {
            var opt = document.createElement('option');
            opt.value = city; opt.text = city;
            citySel.appendChild(opt);
        }
    }
    checkAddr();
}

function onCityChange() {
    var prov = document.getElementById('reg-prov').value;
    var city = document.getElementById('reg-city').value;
    var distSel = document.getElementById('reg-dist');
    distSel.innerHTML = '<option value="">-- 城区 --</option>';
    if (prov && city && regionData[prov] && regionData[prov][city]) {
        for (var i = 0; i < regionData[prov][city].length; i++) {
            var opt = document.createElement('option');
            opt.value = regionData[prov][city][i]; opt.text = regionData[prov][city][i];
            distSel.appendChild(opt);
        }
    }
    checkAddr();
}

// ================================================================
// 表单校验
// ================================================================
function checkUser() {
    var v = document.getElementById('reg-user').value.trim();
    var hint = document.getElementById('hint-user');
    if (!v) { hint.className = 'hint err'; hint.textContent = '用户名不能为空'; return false; }
    if (!/^[a-zA-Z0-9_]{1,16}$/.test(v)) { hint.className = 'hint err'; hint.textContent = '只能包含字母、数字、下划线，最多16字符'; return false; }
    hint.className = 'hint ok'; hint.textContent = '✓ 用户名可用'; return true;
}
function checkPwd() {
    var v = document.getElementById('reg-pwd').value;
    var hint = document.getElementById('hint-pwd');
    if (!v) { hint.className = 'hint err'; hint.textContent = '密码不能为空'; return false; }
    if (v.length < 6 || v.length > 12) { hint.className = 'hint err'; hint.textContent = '密码长度6-12位'; return false; }
    hint.className = 'hint ok'; hint.textContent = '✓ 密码格式正确'; return true;
}
function checkPwd2() {
    var v1 = document.getElementById('reg-pwd').value;
    var v2 = document.getElementById('reg-pwd2').value;
    var hint = document.getElementById('hint-pwd2');
    if (!v2) { hint.className = 'hint err'; hint.textContent = '请确认密码'; return false; }
    if (v1 !== v2) { hint.className = 'hint err'; hint.textContent = '两次密码不一致'; return false; }
    hint.className = 'hint ok'; hint.textContent = '✓ 密码一致'; return true;
}
function checkName() {
    var v = document.getElementById('reg-name').value.trim();
    var hint = document.getElementById('hint-name');
    if (!v) { hint.className = 'hint err'; hint.textContent = '姓名不能为空'; return false; }
    if (!/^[\u4e00-\u9fa5a-zA-Z]{2,20}$/.test(v)) { hint.className = 'hint err'; hint.textContent = '2-20位中文或英文'; return false; }
    hint.className = 'hint ok'; hint.textContent = '✓'; return true;
}
function checkIdCard() {
    var v = document.getElementById('reg-idcard').value.trim().toUpperCase();
    var hint = document.getElementById('hint-idcard');
    if (!v) { hint.className = 'hint err'; hint.textContent = '身份证号不能为空'; return false; }
    if (!/^[1-9][0-9]{16}[0-9X]$/.test(v)) { hint.className = 'hint err'; hint.textContent = '身份证格式不正确'; return false; }
    var year = parseInt(v.substr(6,4));
    var month = parseInt(v.substr(10,2));
    var day = parseInt(v.substr(12,2));
    var d = new Date(year, month-1, day);
    if (d.getFullYear() !== year || d.getMonth() !== month-1 || d.getDate() !== day) {
        hint.className = 'hint err'; hint.textContent = '身份证出生日期不合法'; return false;
    }
    var weights = [7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2];
    var checkMap = ['1','0','X','9','8','7','6','5','4','3','2'];
    var sum = 0;
    for (var i = 0; i < 17; i++) sum += parseInt(v[i]) * weights[i];
    if (v[17] !== checkMap[sum % 11]) { hint.className = 'hint err'; hint.textContent = '身份证校验码错误'; return false; }
    var provCode = v.substr(0,2);
    var provMap = {"11":"北京","12":"天津","13":"河北","14":"山西","15":"内蒙古","21":"辽宁","22":"吉林","23":"黑龙江","31":"上海","32":"江苏","33":"浙江","34":"安徽","35":"福建","36":"江西","37":"山东","41":"河南","42":"湖北","43":"湖南","44":"广东","45":"广西","46":"海南","50":"重庆","51":"四川","52":"贵州","53":"云南","54":"西藏","61":"陕西","62":"甘肃","63":"青海","64":"宁夏","65":"新疆"};
    var idProv = provMap[provCode];
    var selProv = document.getElementById('reg-prov').value;
    if (idProv && selProv && idProv !== selProv) {
        hint.className = 'hint err'; hint.textContent = '身份证归属地（'+idProv+'）与联系地址省份（'+selProv+'）不一致'; return false;
    }
    hint.className = 'hint ok'; hint.textContent = '✓ 身份证验证通过'; return true;
}
function checkPhone() {
    var v = document.getElementById('reg-phone').value.trim();
    var hint = document.getElementById('hint-phone');
    if (!v) { hint.className = 'hint err'; hint.textContent = '手机号不能为空'; return false; }
    if (!/^1[3-9]\d{9}$/.test(v)) { hint.className = 'hint err'; hint.textContent = '手机号格式不正确'; return false; }
    hint.className = 'hint ok'; hint.textContent = '✓'; return true;
}
function checkAddr() {
    var p = document.getElementById('reg-prov').value;
    var c = document.getElementById('reg-city').value;
    var d = document.getElementById('reg-dist').value;
    var hint = document.getElementById('hint-addr');
    if (!p || !c || !d) { hint.className = 'hint err'; hint.textContent = '请完整选择省、市、区'; return false; }
    hint.className = 'hint ok'; hint.textContent = '✓ 地址选择正确'; return true;
}

document.getElementById('reg-user').onblur = checkUser;
document.getElementById('reg-pwd').onblur = checkPwd;
document.getElementById('reg-pwd2').onblur = checkPwd2;
document.getElementById('reg-name').onblur = checkName;
document.getElementById('reg-idcard').onblur = checkIdCard;
document.getElementById('reg-phone').onblur = checkPhone;
document.getElementById('reg-dist').onchange = checkAddr;

// ================================================================
// 注册
// ================================================================
function doRegister() {
    var ok = checkUser() & checkPwd() & checkPwd2() & checkName() & checkIdCard() & checkPhone() & checkAddr();
    if (!ok) { showToast('请检查表单中的错误项', 'error'); return; }
    var user = {
        username: document.getElementById('reg-user').value.trim(),
        password: document.getElementById('reg-pwd').value,
        realname: document.getElementById('reg-name').value.trim(),
        idcard: document.getElementById('reg-idcard').value.trim().toUpperCase(),
        province: document.getElementById('reg-prov').value,
        city: document.getElementById('reg-city').value,
        district: document.getElementById('reg-dist').value,
        email: document.getElementById('reg-email').value.trim(),
        phone: document.getElementById('reg-phone').value.trim()
    };
    var users = JSON.parse(localStorage.getItem('users') || '{}');
    if (users[user.username]) { showToast('用户名已存在！', 'error'); return; }
    users[user.username] = user;
    localStorage.setItem('users', JSON.stringify(users));
    showToast('注册成功！请登录', 'success');
    setTimeout(showLogin, 1200);
}

// ================================================================
// 登录
// ================================================================
function doLogin() {
    var u = document.getElementById('login-user').value.trim();
    var p = document.getElementById('login-pwd').value;
    if (!u || !p) { showToast('请输入用户名和密码', 'error'); return; }
    var users = JSON.parse(localStorage.getItem('users') || '{}');
    if (!users[u]) { showToast('该用户尚未注册，请先注册', 'error'); return; }
    if (users[u].password !== p) { showToast('用户名或密码错误', 'error'); return; }
    localStorage.setItem('currentUser', u);
    showToast('登录成功！', 'success');
    setTimeout(function() { showHome(); }, 800);
}

// ================================================================
// 退出
// ================================================================
function doLogout() {
    localStorage.removeItem('currentUser');
    showToast('已退出登录', 'success');
    setTimeout(showHome, 800);
}

// ================================================================
// 任务2：留言持久化（localStorage + confirm）
// ================================================================
function getMessageList() {
    return JSON.parse(localStorage.getItem('messages') || '[]');
}
function setMessageList(list) {
    localStorage.setItem('messages', JSON.stringify(list));
}

function saveTxt() {
    // 前置校验：必须登录
    if (!isLogin()) {
        showToast('请先登录后再留言', 'error');
        showPage('login-page');
        return;
    }
    var text = document.getElementById('msgInput').value.trim();
    if (text === '') { showToast('请先输入内容！', 'error'); return; }

    var currentUser = localStorage.getItem('currentUser');
    var users = JSON.parse(localStorage.getItem('users') || '{}');
    var realname = (currentUser && users[currentUser]) ? users[currentUser].realname : currentUser || '匿名';

    var msgs = getMessageList();
    msgs.push({
        user: realname,
        text: text,
        time: new Date().toLocaleString('zh-CN')
    });
    setMessageList(msgs);

    document.getElementById('msgInput').value = '';
    showToast('留言发送成功！', 'success');
    loadMessages();
}

// 删除留言：confirm 二次确认后才移除
function delMessage(index) {
    if (!confirm('确定要删除这条留言吗？')) return;
    var msgs = getMessageList();
    if (index < 0 || index >= msgs.length) return;
    msgs.splice(index, 1);
    setMessageList(msgs);
    loadMessages();
}

// 渲染留言列表（含删除按钮）
function loadMessages() {
    var msgs = getMessageList();
    var html = '';
    for (var i = msgs.length - 1; i >= 0; i--) {
        html += '<div class="msg-item">'
             +  '<div class="msg-meta">' + escapeHtml(msgs[i].user) + ' · ' + escapeHtml(msgs[i].time) + '</div>'
             +  '<div class="msg-body"><div class="msg-text">' + escapeHtml(msgs[i].text) + '</div>'
             +  '<button class="msg-del" onclick="delMessage(' + i + ')">🗑 删除</button></div>'
             + '</div>';
    }
    document.getElementById('msgList').innerHTML = html;
}

function escapeHtml(str) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
}

// ================================================================
// Toast
// ================================================================
function showToast(msg, type) {
    var t = document.getElementById('toast');
    t.textContent = msg;
    t.className = 'toast ' + (type || '') + ' show';
    setTimeout(function() { t.className = 'toast ' + (type || ''); }, 2500);
}

// ================================================================
// 访客信息（浏览器识别 / 分辨率 / 窗口 / 时间 / 小屏提示）
// ================================================================
function detectBrowser() {
    var ua = navigator.userAgent;
    var browserName = '未知浏览器';
    var browserVersion = '';
    // 判定顺序很重要：Edge 的 UA 里也含 "Chrome"，必须先判 Edge
    if (/Edg\/([\d.]+)/.test(ua)) {
        browserName = 'Microsoft Edge'; browserVersion = RegExp.$1;
    } else if (/Firefox\/([\d.]+)/.test(ua)) {
        browserName = 'Mozilla Firefox'; browserVersion = RegExp.$1;
    } else if (/Chrome\/([\d.]+)/.test(ua) && !/Chromium/.test(ua)) {
        browserName = 'Google Chrome'; browserVersion = RegExp.$1;
    } else if (/Safari\/([\d.]+)/.test(ua) && /Version\/([\d.]+)/.test(ua)) {
        browserName = 'Safari'; browserVersion = RegExp.$2;
    } else if (/MSIE ([\d.]+)/.test(ua) || /Trident\/.*rv:([\d.]+)/.test(ua)) {
        browserName = 'Internet Explorer'; browserVersion = RegExp.$1 || RegExp.$2;
    }
    return browserVersion ? browserName + ' ' + browserVersion : browserName;
}

function refreshVisitorInfo() {
    var elBrowser  = document.getElementById('vfBrowser');
    var elScreen   = document.getElementById('vfScreen');
    var elViewport = document.getElementById('vfViewport');
    var elTime     = document.getElementById('vfTime');
    var elUpdate   = document.getElementById('vfUpdate');
    if (!elBrowser) return; // 当前不在首页则跳过

    elBrowser.textContent  = detectBrowser();
    elScreen.textContent   = screen.width + ' × ' + screen.height;
    elViewport.textContent = window.innerWidth + ' × ' + window.innerHeight;

    var now = new Date();
    var pad = function(n) { return n < 10 ? '0' + n : '' + n; };
    elTime.textContent = pad(now.getHours()) + ':' + pad(now.getMinutes()) + ':' + pad(now.getSeconds());

    if (elUpdate) elUpdate.textContent = '实时更新中';
}

var smallScreenTipped = false;
function checkSmallScreen() {
    if (window.innerWidth < 768 && !smallScreenTipped) {
        smallScreenTipped = true;
        showToast('检测到您使用小屏设备，建议横屏或使用手机版浏览', 'error');
    }
}

// ================================================================
// 任务3：访问统计与停留计时
// ================================================================
var visitCountKey = 'visitCount';
var timerInterval = null;
var elapsedSeconds = 0;

function initVisitCounter() {
    var elCount = document.getElementById('vfCount');
    if (!elCount) return;
    var counted = sessionStorage.getItem('visitCounted');
    var count = parseInt(localStorage.getItem(visitCountKey) || '0', 10);
    if (!counted) {
        count += 1;
        localStorage.setItem(visitCountKey, String(count));
        sessionStorage.setItem('visitCounted', '1');
    }
    elCount.textContent = '第 ' + count + ' 次';
}

function fmtTime(totalSec) {
    var m = Math.floor(totalSec / 60);
    var s = totalSec % 60;
    return (m < 10 ? '0' + m : '' + m) + ':' + (s < 10 ? '0' + s : '' + s);
}

function tickTimer() {
    elapsedSeconds += 1;
    var elTimer = document.getElementById('vfTimer');
    if (elTimer) elTimer.textContent = fmtTime(elapsedSeconds);
}

function startStayTimer() {
    if (timerInterval !== null) return;
    timerInterval = setInterval(tickTimer, 1000);
}

function pauseStayTimer() {
    if (timerInterval !== null) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
}

// ================================================================
// 挑战1：标签页切换时改 title；挑战2：滚动显示回到顶部
// ================================================================
var originalTitle = document.title;

document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        // 页面隐藏：改标题 + 暂停停留计时
        try { originalTitle = document.title; } catch(e) {}
        document.title = '?? 别走，快回来～';
        pauseStayTimer();
    } else {
        // 页面恢复：还原标题 + 续跑计时
        document.title = originalTitle || '个人简介 - 会员注册';
        startStayTimer();
    }
});

// 回到顶部按钮：滚动超过一屏淡入，点击平滑回顶
function getScrollTop() {
    // 兼容不同浏览器的滚动距离获取
    return window.scrollY || window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
}

function toggleBackToTop() {
    var btn = document.getElementById('backToTop');
    if (!btn) return;
    var st = getScrollTop();
    // 阈值：超过一屏 或 超过 600px（横屏兜底），满足其一即显示
    var threshold = Math.min(window.innerHeight, 600);
    if (st > threshold) {
        btn.classList.add('show');
    } else {
        btn.classList.remove('show');
    }
}
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.addEventListener('scroll', toggleBackToTop, { passive: true });
window.addEventListener('resize', toggleBackToTop);
window.addEventListener('load', toggleBackToTop);
var backToTopBtn = document.getElementById('backToTop');
if (backToTopBtn) {
    backToTopBtn.onclick = scrollToTop;
}

// ================================================================
// 任务5：打字机欢迎语（setTimeout 递归）
// ================================================================
var welcomeSentences = [
    '欢迎来到我的个人主页 🎉',
    '很高兴你能来 ✨',
    '我是一名热爱程序设计的学生 💻',
    '愿代码与你同行 🚀'
];
var twIndex = 0;
var twCharPos = 0;
var twTimer = null;

function typeWriter() {
    var el = document.getElementById('welcomeText');
    if (!el) return; // 已切走，自动停止
    var sentence = welcomeSentences[twIndex];
    if (twCharPos <= sentence.length) {
        el.textContent = sentence.slice(0, twCharPos);
        twCharPos++;
        twTimer = setTimeout(typeWriter, 110);
    } else {
        // 打完一句，停 2 秒换下一句，循环播放
        twTimer = setTimeout(function() {
            twIndex = (twIndex + 1) % welcomeSentences.length;
            twCharPos = 0;
            typeWriter();
        }, 2000);
    }
}

function playWelcome() {
    // 每次重启动画前清理旧定时器，防止快速切换导致多个并行
    if (twTimer !== null) { clearTimeout(twTimer); twTimer = null; }
    twIndex = 0;
    twCharPos = 0;
    var el = document.getElementById('welcomeText');
    if (el) el.textContent = '';
    typeWriter();
}

// 任务5：两种返回方式的对比实现
function goBack() {
    // history.back()：调用浏览器历史栈回退一步
    // 若本站是入口页（history.length === 1），会直接离开本站
    if (window.history.length > 1) {
        window.history.back();
    } else {
        showToast('已是第一页，无法再后退，返回首页', 'error');
        goHome();
    }
}
function goHome() {
    // 站内切换：始终停在本站首页，可控、确定
    showHome();
}

// ================================================================
// 任务4：深色模式切换
// ================================================================
function toggleTheme() {
    var isDark = document.body.classList.toggle('dark-theme');
    try {
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    } catch (e) {}
    var btn = document.getElementById('themeToggle');
    if (btn) btn.textContent = isDark ? '☀️ 日间' : '🌙 夜间';
}

// 初始化主题按钮文字
(function initThemeBtn() {
    var isDark = document.body.classList.contains('dark-theme');
    var btn = document.getElementById('themeToggle');
    if (btn) btn.textContent = isDark ? '☀️ 日间' : '🌙 夜间';
})();

// ================================================================
// 页面加载初始化
// ================================================================
window.addEventListener('load', function() {
    refreshVisitorInfo();
    checkSmallScreen();
    initVisitCounter();
    startStayTimer();
    toggleBackToTop();
});

window.addEventListener('resize', function() {
    refreshVisitorInfo();
    if (window.innerWidth < 768 && !smallScreenTipped) {
        smallScreenTipped = true;
        showToast('检测到您使用小屏设备，建议横屏或使用手机版浏览', 'error');
    }
    toggleBackToTop();
});

window.onload = function() {
    showHome();
    loadMessages();
};
