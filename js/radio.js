/**
 * ...
 * @author zhengshuo
 */
(function() {
	var t1 = Date.parse(new Date) / 1E3;
	var start = t1 - 172800;
	var end = t1 + 172800;
		
	var config = {"全国":{"中央人民广播电台中国之声-FM106.1":"1043387760","中央人民广播电台经济之声-FM96.6":"1042929490","中央人民广播电台音乐之声-FM90.0":"1043390840","中央人民广播电台都市之声 -FM101.8":"1042929510","中央人民广播电台文艺之声-FM106.6":"1042929530","中央人民广播电台华夏之声-FM87.8":"1042930620","中央人民广播电台老年之声-AM1053":"1042929540","中央人民广播电台娱乐广播-AM747":"1042929500","中央人民广播电台香港之声-HK32":"1042930850","中国国际广播电台轻松调频-FM91.5":"1042927970","中国国际广播电台HITFM-FM88.7":"1042928000","中国国际广播电台环球资讯广播-FM90.5":"1042928530","中国国际广播电台英语环球广播-AM846":"1043391320","中国国际广播电台中文环球广播-ZWHQ0318":"1042930650","车语电台-AUTORADIO2011":"1042930500","中央人民广播电台乡村之声-AM720":"1043388270"},"北京":{"北京文艺广播-FM87.6":"1042927940","北京新闻广播-FM100.6":"1043387470","北京交通广播-FM103.9":"1043386320","北京音乐广播-FM97.4":"1042927950","北京城市服务管理广播-FM107.3":"1043387480","北京外语广播-AM774":"1042927960","北京故事广播-AM603":"1042927910","北京爱家广播-AM927":"1042928860","北京体育广播-FM102.5":"1042927930","北京数字广播古典音乐频率-CFM98.6":"1042931820","北京数字广播怀旧金曲频率-CFM107.5":"1042931830","北京数字广播欢乐时光频率-CFM106.5":"1042931840","北京数字广播长书频率-CFM104.3":"1042931850"},"河北":{"河北音乐广播-FM102.4":"1043388160","唐山音乐广播-FM94":"1042928100","河北文艺广播-FM90.7":"1042928540","河北交通广播-FM99.2":"1042929020","石家庄音乐广播-FM106.7":"1042929300","河北新闻广播-FM104.3":"1042929810","河北经济广播-FM107.9":"1042930770","保定新闻广播-FM93.7":"1042930590","保定城市服务广播-FM101.6":"1042931440","河北电台农民广播-FM98.1":"1042931720","保定交通广播-FM104.8":"1043391100"},"天津":{"天津交通广播-FM106.8":"1042928040","天津文艺广播-FM104.6":"1042928240","天津滨海广播-FM87.8":"1042927990","天津音乐广播-FM99":"1042928620","天津小说广播-AM666":"1042928800","天津经济广播-FM101.4":"1042929830","天津MYFM100.5-FM100.5":"1043388080"},"上海":{"上海新闻广播-FM93.4":"1042929980","东广新闻台-FM90.9":"1042929990","第一财经广播-FM97.7":"1042930310","五星体育广播-FM94.0":"1042931520","浦江之声-AM1422":"1042929910","嘉定人民广播电台-FM100.3":"1042930610","奉贤人民广播电台阳光959-FM95.9":"1042931370","闵行人民广播电台-FM102.7":"1043389150"},"四川":{"四川城市之音-FM102.6":"1043391680","四川交通广播-FM101.7":"1042930000","四川旅游生活广播-FM97.0":"1042930680","四川电台经济频率-FM89.4":"1042930940","成都交通广播-FM91.4":"1042928890","成都经济广播-FM105.6":"1042928710","成都文化休闲广播-FM94.6":"1042928750","成都新闻广播-FM99.8":"1042928690","攀枝花汽车电台-FM91.0":"1042930490","岷江音乐iradio-FM95.5":"1042928080","四川文艺广播MYRadio-FM90.0":"1042931160","成都唯一音乐广播-FM103.2":"1042928990","攀枝花新闻广播-FM88.5":"1043390070","四川财富广播-FM94.0":"1043391460","乐山新闻综合广播-FM102.8":"1043386490"},"陕西":{"陕西音乐广播-FM98.8":"1042928020","西安音乐广播-FM93.1":"1043389760","陕西秦腔广播-FM101.1":"1042930020","陕西896汽车调频-FM89.6":"1042928490","陕西故事广播-AM603":"1042928340","西安交通旅游广播-FM104.3":"1043389770","陕西交通广播-FM91.6":"1042928400","西安新闻广播-AM810":"1043389780","西安资讯广播-FM106.1":"1043389790","西安综艺广播-FM102.4":"1043389800","陕西戏曲广播-AM747":"1042929820","陕西青春广播MYFM-FM105.5":"1042930640"},"广东":{"广东电台音乐之声-FM99.3":"1043390490","珠江经济广播电台-FM97.4":"1043390500","深圳私家车广播-FM94.2":"1042928630","广东电台新闻台-FM91.4":"1043390510","优悦广播URADIO-FM105.7":"1043390570","广东电台城市之声-FM103.6":"1043390520","广东电台股市台-FM95.3":"1043390560","深圳电台先锋898-FM89.8":"1042929210","广东电台经典1077-FM107.7":"1043390550","江门旅游之声-FM93.3":"1042929630","中山电台快乐888-FM88.8":"1042930570","广东台山电台-FM90.4":"1042931670","中山电台综合新闻资讯频率-FM96.7":"1042932140","珠海电台先锋951-FM95.1":"1043386290","羊城交通广播-FM105.2":"1043390540","南方生活广播-FM93.6":"1043390530"},"福建":{"福建汽车音乐调频-FM91.3":"1042928210","厦门旅游广播-FM94.0":"1042928050","厦门音乐广播-FM90.9":"1042928090","福州左海之声-FM90.1":"1042928170","福建新闻广播-FM103.6":"1042930930","厦门闽南之声-FM101.2":"1042928830","海峡之声汽车生活广播-FM90.6":"1042928940","厦门经济交通广播-FM107":"1042929030","福建经济电台-FM96.1":"1042929400","福州FM893女主播电台-FM89.3":"1042929470","福州交通之声-FM87.6":"1043389310","福建都市生活广播-FM98.7":"1042931280","海峡之声都市阳光调频-FM99.6":"1042928930"},"江西":{"江西都市广播-FM106.5":"1042929440","江西音乐广播-FM103.4":"1042928450","江西交通广播-FM105.4":"1042928060","江西电台绿色之声-FM98.5":"1042928520","江西旅游广播-FM97.4":"1042928320","南昌交通广播-FM95.1":"1042929570","南昌故事广播-FM90.6":"1042929620","快乐联盟大眼睛897电台-FM89.7":"1042928150","江西游友之声-FM100.7":"1042930110","江西MYFM96.9-FM96.9":"1042929710","江西民生广播-FM101.9":"1042931510"},"湖南":{"湖南交通频道-FM91.8":"1042928120","湖南新闻频道-FM102.8":"1042929390","都市105长沙新闻广播-FM105.0":"1042928370","金鹰955电台-FM95.5":"1042928730","893汽车音乐电台-FM89.3":"1042928110","FM1017城市之声-FM101.7":"1042930240","湖南经济广播-FM90.1":"1042929290","湖南快乐1045电台-FM104.5":"1043388400","长沙交通音乐广播-FM106.1":"1043387870","青春975-FM97.5":"1042929120","湖南旅游频道-FM106.9":"1042929000","快乐886电台-FM88.6":"1042928840","News938潇湘之声-FM93.8":"1042929410","大眼睛湘潭1065电台-FM106.5":"1042929920","邵阳交通频道-FM95.4":"1042930760","邵阳音乐频道-FM92.8":"1042930870","芒果radio永州之声-FM94.8":"1043391450","芒果Radio张家界之声-FM93.2":"1042931690","芒果radio郴州之声-FM88.3":"1042931800","长沙品味音乐广播-FM102.2":"1042931810","常德鼎广电台-FM106.8":"1043390810"},"新疆":{"新疆交通广播-FM94.9":"1042928130","新疆绿色广播-FM89.5":"1042928250","新疆城市广播-FM92.9":"1042928270","新疆新闻广播-FM96.1":"1042928280","新疆故事广播-FM102.8":"1042928290","乌鲁木齐交通广播-FM97.4":"1042928410","新疆音乐广播-FM103.9":"1042928470","乌鲁木齐旅游音乐广播-FM106.5":"1042930480","新疆维吾尔语综合广播-FM101.7":"1042930510","新疆维吾尔语文艺广播-FM107.4":"1042930520","新疆哈萨克语综合广播-FM98.2":"1042930530","乌鲁木齐经济广播-AM927":"1042930580","新疆蒙古语广播-AM1233":"1042930720","乌鲁木齐新闻广播-FM100.7":"1043387600","新疆1053音乐广播-FM105.3":"1043390480","乌鲁木齐交通文艺广播-FM103.3":"1043390340"},"广西":{"950MusicRadio广西音乐台-FM95.0":"1042928200","970女主播电台-FM97.0":"1042928140","广西交通广播-FM100.3":"1042928260","广西私家车广播-FM93.0":"1042929140","南宁新闻广播-FM101.4":"1042930560","1074交通台-FM107.4":"1042930540","南宁生活广播-FM104.9":"1042930550","桂林旅游音乐广播-FM88.3":"1042929700","梧州电台交通音乐之声-FM107.5":"1042930740","玉林新闻广播-FM97.8":"1042929860","钦州电台新闻综合广播-FM98.6":"1042929950","海豚之声-FM89.2":"1043389560","广西电台新闻广播-FM91.0":"1042931460","895汽车故事广播-FM89.5":"1043386550","柳州乡村生活广播-FM105.9":"1043386620","北海交通广播-FM99.1":"1043391210"},"湖北":{"湖北之声-FM104.6":"1042929840","楚天资讯广播-AM1179":"1042929790","楚天音乐广播-FM105.8":"1042928160","湖北经典音乐广播-FM103.8":"1042928220","湖北私家车广播-FM107.8":"1042928380","湖北生活广播-FM96.6":"1042928230","湖北经济广播-FM99.8":"1042929070","襄阳交通广播-FM89":"1042928900","湖北农村广播-FM91.2":"1043387500","荆州交通音乐台-FM96.3":"1042930260","荆州汽车电台-FM90.1":"1042930250","襄阳新闻广播-FM104":"1042929430","武汉交通广播-FM89.6":"1042931110","楚天交通广播-FM92.7":"1042931120","襄阳汽车广播-FM105.3":"1042929460","湖北时尚女性广播-FM102.6":"1042931550","宜昌汽车广播-FM100.6":"1042931570","武汉新闻广播-FM88.4":"1043387540","长江经济广播-FM100.6":"1043387550","品味936-FM93.6":"1043387560","襄阳经济广播-FM90.9":"1043390280","武汉经典音乐广播-FM101.8":"1043387770","荆门交通音乐频率-FM99.3":"1043388930","十堰交通音乐广播-FM101.9":"1043391470","十堰车城之声广播-FM99.1":"1043391480"},"海南":{"海南音乐广播-FM94.5":"1042930010","海南国际旅游岛之声-FM103.8":"1042928350","海南新闻广播-FM88.6":"1042930070","海南交通广播-FM100.3":"1042930160"},"河南":{"郑州音乐广播-FM94.4":"1042928180","河南音乐广播-FM88.1":"1043389110","郑州新闻广播-FM98.6":"1042928300","郑州经济广播-FM93.1":"1042928330","郑州都市交通广播-FM91.2":"1043387490","郑州电台城市889-FM88.9":"1042928460","河南电台My Radio-FM90.0":"1043388940","河南交通广播-FM104.1":"1042930130","河南教育广播-FM106.6":"1042930140","飞扬920新乡音乐电台-FM92.0":"1042929560","安阳汽车音乐台-FM100.8":"1042930790","洛阳经济广播-FM106.5":"1042931530","郑州文化娱乐广播-FM91.8":"1042931700","洛阳新闻广播-FM88.1":"1043387530","安阳交通广播-FM89.0":"1043387590","南阳电台交通音乐台-FM97.7":"1043390170","郑州电台经典1079-FM107.9":"1043387890","濮阳音乐广播-FM99.2":"1043387900","新乡交通广播-FM99.1":"1043389190","河南电台私家车广播-FM99.9":"1043389210"},"江苏":{"江苏新闻广播-FM93.7":"1043388420","江苏交通广播-FM101.1":"1043388410","江苏音乐台-FM89.7":"1043388440","江苏经典流行音乐台-FM97.5":"1043388450","江苏汽车调频-FM99.7":"1043388860","江苏故事广播-AM585":"1043388870","江苏文艺广播-AM1053":"1043388880","江苏健康广播-AM846":"1043388890","江苏财经广播-AM1206":"1043388900","江苏新闻综合广播-AM702":"1043388910","常州电台音乐频率-FM93.5":"1042928190","常州新闻广播-FM103.4":"1042929110","扬州新闻广播-FM98.5":"1042930320","镇江交通广播-FM88.8":"1042929200","江阴汽车广播-FM90.7":"1042929760","南京MYFM103.5-FM103.5":"1042929900","泰州新闻广播-FM103.7":"1042929930","YesFM949扬州音乐广播-FM94.9":"1042930430","常熟新闻广播-AM1116":"1042930440","虞城交通广播-FM100.8":"1042930450","琴川音乐广播-FM91.9":"1042930460","扬州交通广播-FM103.5":"1042930470","镇江城市广播-FM90.5":"1042930960","连云港经济广播-FM90.2":"1042930980","无锡新闻广播-FM93.7":"1042928960","镇江音乐台-FM96.3":"1042931020","丹阳人民广播电台-FM97.9":"1042931290","镇江私家车电台-FM102.7":"1042931410","南京新闻广播-FM106.9":"1042931590","南京新闻综合广播-AM1008":"1042931600","南京城市管理广播-AM1170":"1042931610","南京交通广播-FM102.4":"1042931620","南京经济频率私家车广播-FM98.1":"1042931630","南京经济广播-AM900":"1042931640","南京音乐广播-FM105.8":"1042931650","南京体育广播-FM104.3":"1042931660","苏州生活广播-FM96.5":"1042931860","苏州音乐广播-FM94.8":"1043387520","无锡交通广播-FM106.9":"1043386440","宜兴交通台-FM96.1":"1043387920","南京炫动106.6-FM106.6":"1043388010","如皋汽车广播-FM98.3":"1043391330"},"重庆":{"重庆音乐广播-FM88.1":"1042930040","重庆电台私家车938-FM93.8":"1042930060","重庆文艺广播-FM103.5":"1042930080","重庆交通广播-FM95.5":"1042930100","重庆经济广播-FM101.5":"1042930920"},"甘肃":{"甘肃青春调频-FM104.8":"1042930910","兰州交通音乐广播-FM99.5":"1042928310","兰州生活文艺广播-FM100.8":"1042928810"},"山西":{"太原音乐广播-FM102.6":"1042928360","太原交通广播-FM107":"1042928430","太原私家车Radio-FM104.4":"1042929130","山西音乐广播-FM94.0":"1042931560","太原新闻广播-FM91.2":"1043387580"},"宁夏":{"宁夏新闻广播-FM106.1":"1042928480","宁夏经济广播-FM92.8":"1042929010","宁夏都市广播-FM103.7":"1042931000","宁夏交通广播-FM98.4":"1043387630","银川都市经济广播-FM95.0":"1043387750"},"山东":{"济南交通广播-FM103.1":"1042929330","济南电台Music88.7-FM88.7":"1042929600","青岛交通广播-FM89.7":"1042929050","青岛音乐体育广播-FM91.5":"1042928950","青岛新闻广播-FM107.6":"1042929850","烟台交通广播-FM103":"1042929240","烟台音乐广播-FM91.2":"1042929360","潍坊908音乐广播-FM90.8":"1042928510","潍坊音乐广播-FM88.7":"1042929100","926音乐广播-FM92.6":"1042929770","济宁经典890音乐广播-FM89.0":"1042929680","即墨电台新闻交通广播-FM101.7":"1043389170","寿光汽车电台-FM105.6":"1042930630","淄博交通文艺广播-FM100":"1042930670","青岛经济广播-FM102.9":"1042930700","淄博私家车广播-FM106.7":"1042930950","青岛故事广播-FM95.2":"1042931140","临沂经济广播-FM93.2":"1042931180","德州交通音乐广播-FM94.1":"1042931190","临沂交通音乐广播-FM89.9":"1042931420","青岛私家车电台 -FM96.4":"1042931480","临沂都市之声广播-FM101":"1042931490","潍坊欢乐调频-FM89.9":"1043386430","邹平新闻交通广播-FM95.7":"1043390130","邹平故事音乐广播-FM103.5":"1043390160","936私家车广播-FM93.6":"1043391440","滨州交通广播-FM93.1":"1043387610","山东广播经济频道-FM98.6":"1043387910","济宁音乐广播-FM103.1":"1043390320"},"吉林":{"吉林交通广播-FM103.8":"1042930730","吉林教育广播-FM96.3":"1042930150","吉林乡村广播-FM97.6":"1042930360","吉林资讯广播-FM100.1":"1042930380","长春私家车RADIO-FM106.4":"1042930090","吉林市汽车台-FM88.3":"1042930780","生活故事广播-FM90.0":"1042930800","长春新闻广播-FM88.9":"1042930810","吉林市交通台-FM105.3":"1042929890","吉林市经济广播都市110-FM90.3":"1042931070","吉林市经济广播旅游893-FM89.3":"1042931080","吉林市经济广播-AM603":"1042931090","吉林市经济广播老友之声1251-AM1251":"1042931100","长春人民广播电台MYFM88.0-MYFM88.0":"1042931320","长春交通之声-FM96.8":"1043389400","长春乡声广播-FM99.6":"1043389410"},"浙江":{"浙江之声-FM88":"1042929220","杭州西湖之声-FM105.4":"1042928550","杭州交通广播-FM91.8":"1042928560","台州音乐广播-FM100.1":"1042928870","温州私家车音乐广播-FM100.3":"1042929190","浙江音乐调频-FM96.8":"1042931500","杭州新闻广播-FM89":"1042928970","浙江城市之声-FM107":"1042929230","宁波私家车音乐台-FM104.7":"1042929280","浙江财富广播-FM95":"1042929310","温州之声-FM94.9":"1042930290","浙江交通广播-FM93":"1042929320","温州经济生活广播-FM88.8":"1043389030","温州交通广播-FM103.9":"1042930330","台州交通广播-FM102.7":"1043389120","宁波交通广播-FM93.9":"1042929670","宁波音乐广播-FM98.6":"1042929730","浙江电台民生996-FM99.6":"1043389590","FM1045女主播电台-FM104.5":"1042929880","仙居电台IBOX音乐调频-FM101":"1042930690","杭州新闻综合频率-AM954":"1042930990","浙江温岭电台-FM103.6":"1042931050","舟山交通经济广播-FM97":"1042931130","北仑人民广播电台-FM100.8":"1042931270","宁波都市生活广播-FM102.9":"1042931430","经典汽车106-FM106":"1043387510","嘉兴生活广播-FM88.2":"1043387730","宁波甬江之声-FM100.1":"1043390710","嘉兴新闻广播-FM104.1":"1043391580"},"贵州":{"贵州新闻广播-FM94.6":"1042928640","贵州经济广播-FM98.9":"1042928600","贵州音乐广播-FM91.6":"1042928610","V-FM1062汽车音乐广播-FM106.2":"1042928570","贵州交通广播-FM95.2":"1042928590","贵州旅游广播 -FM97.2":"1042928660","贵州故事广播-FM90.0":"1042928580","贵阳都市女性广播-FM104":"1042928670","贵阳交通广播-FM102.7":"1042928790","黔东南人民广播电台-FM104.9":"1042929690","贵阳新闻综合广播-FM88.9":"1043387710"},"内蒙古":{"内蒙古交通之声-FM105.6":"1042928760","内蒙古音乐之声-FM93.6":"1042930660","包头音乐广播-FM100.1":"1042928720","包头生活娱乐广播-FM105.9":"1042928500","巴彦淖尔交通广播-FM95.8":"1042931310","土默特左旗人民广播电台-FM103.9":"1042931380","鄂尔多斯新闻综合广播-FM89.6":"1043390310"},"辽宁":{"辽宁986路上好朋友-FM98.6":"1042930170","大连体育广播-FM105.7":"1042928780","大连交通广播-FM100.8":"1042929040","大连财经广播-FM93.1":"1042928820","U Radio音乐广播-FM100.6":"1042928770","大连新闻广播-FM103.3":"1042928980","大连新城乡广播-FM95.6":"1042929090","991汽车生活广播-FM99.1":"1042929450","大连音乐广播-FM106.7":"1042929610","营口交通文艺广播-FM95.1":"1042930840","辽宁交通广播-FM97.5":"1042931220","辽宁经济广播-FM88.8":"1042931230","辽宁文艺广播-FM95.9":"1042931240","辽宁综合广播-FM102.9":"1042931250","辽宁乡村广播-FM96.9":"1042931540","辽宁都市广播-FM92.1":"1043388430","海城交通娱乐广播-FM106.9":"1043391710"},"云南":{"昆明都市调频-FM102.8":"1042929270","昆明汽车广播-FM95.4":"1042928880","大理城市电台汽车广播-FM99.9":"1042928850","云南经济广播-FM88.7":"1042929150","云南教育广播-FM100":"1042929160","香格里拉之声-FM99":"1042929170","云南交通广播-FM91.8":"1042929180","云南少儿广播-FM101.7":"1042929340","蒙自广播电台-FM98.4":"1043390290","云南音乐广播-FM97":"1042929420","昆明阳光频率-FM100.8":"1042929740","昆明幸福频道-FM105":"1042931030","云南红河交通广播-FM99.7":"1043390420","普洱电台综合广播-FM106.9":"1042930890","普洱电台新闻广播-FM93.1":"1042930900"},"安徽":{"安徽音乐广播-FM89.5":"1042929080","安徽交通广播-FM90.8":"1042929480","安徽生活广播-FM105.5":"1042929590","魅力音乐广播-FM88.6":"1042929750","安徽经济广播-FM97.1":"1042929970","安徽MYFM96.1-FM96.1":"1042930710","合肥故事广播-FM98.8":"1042931400","合肥徽商广播-FM1003":"1043389160"},"黑龙江":{"龙广高校台-FM99.3":"1042931150","龙广私家车频道-FM104.5":"1043389540","龙广女性台-FM102.1":"1043389550","龙广音乐台-FM95.8":"1043391260"},"香港":{"鳳凰URadio綜合台-URADIOHK22":"1042931040"},"网络":{"CRI怀旧金曲频道-CRIONLINE2012":"1043389200","视讯中国手机电视In乐台-INMUSIC2012":"1042930750","青檬音乐台-QMOON911":"1043388190","话匣子电台-HUAXIAZI2012":"1042930860","积木音乐台-IZEMO1026":"1042931010","萤火虫网络电台-FMYHC1022":"1042931170","Tiktok音悦台-TIKTOK999":"1042931200","亚洲音乐台-ASIAFM2012":"1042931210","芝麻电台-ZHIMADIANTAI2012":"1042931360","新丝路网络电台丝路之声-XJ163":"1042931470","Wradio社交电台-WRADIOFM133":"1042931710","iRadio网络音乐台-IRADIO520":"1043387570","完美音乐在线-PLAYRADIO666":"1043391720","新浪音频直播室-SINAZHIBOSHI01":"1043386200","520电台-RADIO520":"1043389140","青苹果音乐台-QPG1320":"1043388170","瓢虫台-PIAOCHONGTAI2012":"1043389100","嫦娥时尚广播-CESSGB2013":"1043390620","清晨音乐电台-QINGC1256":"1043391630","麦田之声音乐台-MAITIAN4697":"1043389180","随身听音乐台-SST2013":"1043390330","麦田之声广播剧频道-RADIO4697":"1043391340"}};
	var str = '[{id:"n1",text:"网络电台",expended:true},{id:"n2",text:"按地区"}';
	
	var index = 21;
	for(var i in config){
		if(i != '网络'){
			str += ',{id:"n'+index+'",pid:"n2",text:"'+i+'"}';
			index++;
		}
	}
	index = 110;
	
	for(var i in config){
		if(i == '网络'){
			for(var k in config[i]){
				str += ',{id:\"n'+index+'\",pid:\"n1\",text:\"'+k+'\",link:\"dataURL=http%3A%2F%2Fcdn.kandian.com%2Fmovies%3Fcmd%3Dplay%26id%3D'+config[i][k]+'%26start%3D'+start+'%26end%3D'+end+'&amp;volumn=0.99&amp;uid=0&amp;eid='+config[i][k]+'&amp;pageURL=\"}';
				index++;
			}
		}
	}
	
	index = 21;
	var index2 = 211;
	for(var i in config){
		if(i != '网络'){
			for(var j in config[i]){
				str += ',{id:\"n'+index2+'\",pid:\"n'+index+'\",text:\"'+j+'\",link:\"dataURL=http%3A%2F%2Fcdn.kandian.com%2Fmovies%3Fcmd%3Dplay%26id%3D'+config[i][j]+'%26start%3D'+start+'%26end%3D'+end+'&amp;volumn=0.99&amp;uid=0&amp;eid='+config[i][j]+'&amp;pageURL=\"}';
				index2++;
			}
			index++;
		}
	}
	str+=']';
	console.log(str);
	var data = eval(str);
	
	/*var data = [{id:"n1",text:"热门电台",expanded:true},
			 {id:"n2",text:"按地区"},
			 {id:"n21",pid:"n2",text:"全国"},
			 {id:"n22",pid:"n2",text:"北京"},
			 {id:"n23",pid:"n2",text:"上海"},
			 {id:"n24",pid:"n2",text:"天津"},
			 {id:"n25",pid:"n2",text:"河北"},
			 {id:"n26",pid:"n2",text:"四川"},
			 {id:"n27",pid:"n2",text:"陕西"},
			 {id:"n28",pid:"n2",text:"广东"},
			 {id:"n29",pid:"n2",text:"福建"},
			 {id:"n30",pid:"n2",text:"江西"},
			 {id:"n31",pid:"n2",text:"湖南"},
			 {id:"n32",pid:"n2",text:"新疆"},
			 {id:"n33",pid:"n2",text:"广西"},
			 {id:"n34",pid:"n2",text:"湖北"},
			 {id:"n35",pid:"n2",text:"海南"},
			 {id:"n36",pid:"n2",text:"河南"},
			 {id:"n37",pid:"n2",text:"江苏"},
			 {id:"n38",pid:"n2",text:"重庆"},
			 {id:"n39",pid:"n2",text:"甘肃"},
			 {id:"n40",pid:"n2",text:"山西"},
			 {id:"n41",pid:"n2",text:"宁夏"},
			 {id:"n42",pid:"n2",text:"山东"},
			 {id:"n43",pid:"n2",text:"吉林"},
			 {id:"n44",pid:"n2",text:"浙江"},
			 {id:"n45",pid:"n2",text:"贵州"},
			 {id:"n46",pid:"n2",text:"内蒙古"},
			 {id:"n47",pid:"n2",text:"辽宁"},
			 {id:"n48",pid:"n2",text:"云南"},
			 {id:"n49",pid:"n2",text:"安徽"},
			 {id:"n50",pid:"n2",text:"黑龙江"},
			 {id:"n51",pid:"n2",text:"香港"},
			 {id:"n52",pid:"n2",text:"网络"},
			 {id:"n11",pid:"n1",text:"CRI怀旧金曲",name:'dataURL=http%3A%2F%2Fcdn.kandian.com%2Fmovies%3Fcmd%3Dplay%26id%3D1043389200%26start%3D'+start+'%26end%3D'+end+'&amp;volumn=0.5&amp;uid=1052710881&amp;eid=1043389200&amp;pageURL=http://radio.weibo.com/online/crionline2012?source=radioarea_lastlisten'},
			 {id:"n12",pid:"n1",text:"中央人民广播电台中国之声-FM106.1",name:'dataURL=http%3A%2F%2Fcdn.kandian.com%2Fmovies%3Fcmd%3Dplay%26id%3D1043387760%26start%3D1367510401%26end%3D1370334002&volumn=0.5&uid=1052710881&eid=1043387760&pageURL=http://radio.weibo.com/china/fm1061?source=radio_change'},
			 {id:"n13",pid:"n1",text:"中央人民广播电台音乐之声-FM90.0",name:'dataURL=http%3A%2F%2Fcdn.kandian.com%2Fmovies%3Fcmd%3Dplay%26id%3D1043390840%26start%3D1367510401%26end%3D1373874601&volumn=0.5&uid=1052710881&eid=1043390840&pageURL=http://radio.weibo.com/china/fm900?source=radio_change'},
			 {id:"n14",pid:"n1",text:"中央人民广播电台经济之声-FM96.6",name:'dataURL=http%3A%2F%2Fcdn.kandian.com%2Fmovies%3Fcmd%3Dplay%26id%3D1042929490%26start%3D1367510401%26end%3D1371297268&volumn=0.5&uid=1052710881&eid=1042929490&pageURL=http://radio.weibo.com/china/fm966?source=radio_change'},
			 {id:"n211",pid:"n21",text:"中央人民广播电台中国之声-FM106.1",name:'dataURL=http%3A%2F%2Fcdn.kandian.com%2Fmovies%3Fcmd%3Dplay%26id%3D1043387760%26start%3D1367510401%26end%3D1370334002&volumn=0.5&uid=1052710881&eid=1043387760&pageURL=http://radio.weibo.com/china/fm1061?source=radio_change'},
			 {id:"n212",pid:"n21",text:"中央人民广播电台经济之声-FM96.6",name:'dataURL=http%3A%2F%2Fcdn.kandian.com%2Fmovies%3Fcmd%3Dplay%26id%3D1042929490%26start%3D1367510401%26end%3D1371297268&volumn=0.5&uid=1052710881&eid=1042929490&pageURL=http://radio.weibo.com/china/fm966?source=radio_change'},
			 {id:"n213",pid:"n21",text:"中央人民广播电台音乐之声-FM90.0",name:'dataURL=http%3A%2F%2Fcdn.kandian.com%2Fmovies%3Fcmd%3Dplay%26id%3D1043390840%26start%3D1367510401%26end%3D1373874601&volumn=0.5&uid=1052710881&eid=1043390840&pageURL=http://radio.weibo.com/china/fm900?source=radio_change'},
			 {id:"n214",pid:"n21",text:"中央人民广播电台都市之声",name:'dataURL=http%3A%2F%2Fcdn.kandian.com%2Fmovies%3Fcmd%3Dplay%26id%3D1042929510%26start%3D1369024879%26end%3D1369370479&volumn=0.5&uid=1052710881&eid=1043390840&pageURL=http://radio.weibo.com/china/fm900?source=radio_change'},
			 {id:"n215",pid:"n21",text:"中央人民广播电台文艺之声",name:'dataURL=http%3A%2F%2Fcdn.kandian.com%2Fmovies%3Fcmd%3Dplay%26id%3D1042929530%26start%3D1369025189%26end%3D1369370789&volumn=0.5&uid=1052710881&eid=1043390840&pageURL=http://radio.weibo.com/china/fm900?source=radio_change'},
			 {id:"n216",pid:"n21",text:"中央人民广播电台乡村之声",name:'dataURL=http%3A%2F%2Fcdn.kandian.com%2Fmovies%3Fcmd%3Dplay%26id%3D1043388270%26start%3D1369042135%26end%3D1369387735&volumn=0.5&uid=1052710881&eid=1043390840&pageURL=http://radio.weibo.com/china/fm900?source=radio_change'},
			 {id:"n217",pid:"n21",text:"中央人民广播电台华夏之声",name:'dataURL=http%3A%2F%2Fcdn.kandian.com%2Fmovies%3Fcmd%3Dplay%26id%3D1042930620%26start%3D1369041253%26end%3D1369386853&volumn=0.5&uid=1052710881&eid=1043390840&pageURL=http://radio.weibo.com/china/fm900?source=radio_change'},
			 {id:"n218",pid:"n21",text:"中央人民广播电台老年之声",name:'dataURL=http%3A%2F%2Fcdn.kandian.com%2Fmovies%3Fcmd%3Dplay%26id%3D1042929540%26start%3D1369041296%26end%3D1369386896&volumn=0.5&uid=1052710881&eid=1043390840&pageURL=http://radio.weibo.com/china/fm900?source=radio_change'},
			 {id:"n219",pid:"n21",text:"中央人民广播电台娱乐广播",name:'dataURL=http%3A%2F%2Fcdn.kandian.com%2Fmovies%3Fcmd%3Dplay%26id%3D1042929500%26start%3D1369041366%26end%3D1369386966&volumn=0.5&uid=1052710881&eid=1043390840&pageURL=http://radio.weibo.com/china/fm900?source=radio_change'},
			 {id:"n220",pid:"n21",text:"中央人民广播电台香港之声",name:'dataURL=http%3A%2F%2Fcdn.kandian.com%2Fmovies%3Fcmd%3Dplay%26id%3D1042930850%26start%3D1369041535%26end%3D1369387135&volumn=0.5&uid=1052710881&eid=1043390840&pageURL=http://radio.weibo.com/china/fm900?source=radio_change'},
			 {id:"n221",pid:"n21",text:"中国国际广播电台轻松调频",name:'dataURL=http%3A%2F%2Fcdn.kandian.com%2Fmovies%3Fcmd%3Dplay%26id%3D1042927970%26start%3D1369041612%26end%3D1369387212&volumn=0.5&uid=1052710881&eid=1043390840&pageURL=http://radio.weibo.com/china/fm900?source=radio_change'},
			 {id:"n222",pid:"n21",text:"中国国际广播电台HITFM",name:'dataURL=http%3A%2F%2Fcdn.kandian.com%2Fmovies%3Fcmd%3Dplay%26id%3D1042928000%26start%3D1369041690%26end%3D1369387290&volumn=0.5&uid=1052710881&eid=1043390840&pageURL=http://radio.weibo.com/china/fm900?source=radio_change'},
			 {id:"n223",pid:"n21",text:"中国国际广播环球咨询",name:'dataURL=http%3A%2F%2Fcdn.kandian.com%2Fmovies%3Fcmd%3Dplay%26id%3D1042928530%26start%3D1369041855%26end%3D1369387455&volumn=0.5&uid=1052710881&eid=1043390840&pageURL=http://radio.weibo.com/china/fm900?source=radio_change'},
			 {id:"n224",pid:"n21",text:"中国国际广播英语环球",name:'dataURL=http%3A%2F%2Fcdn.kandian.com%2Fmovies%3Fcmd%3Dplay%26id%3D1043391320%26start%3D1369041934%26end%3D1369387534&volumn=0.5&uid=1052710881&eid=1043390840&pageURL=http://radio.weibo.com/china/fm900?source=radio_change'},
			 {id:"n225",pid:"n21",text:"中国国际广播中文环球",name:'dataURL=http%3A%2F%2Fcdn.kandian.com%2Fmovies%3Fcmd%3Dplay%26id%3D1042930650%26start%3D1369042005%26end%3D1369387605&volumn=0.5&uid=1052710881&eid=1043390840&pageURL=http://radio.weibo.com/china/fm900?source=radio_change'},
			 {id:"n226",pid:"n21",text:"车语电台",name:'dataURL=http%3A%2F%2Fcdn.kandian.com%2Fmovies%3Fcmd%3Dplay%26id%3D1042930500%26start%3D1369042071%26end%3D1369387671&volumn=0.5&uid=1052710881&eid=1043390840&pageURL=http://radio.weibo.com/china/fm900?source=radio_change'},
			 {id:"n227",pid:"n22",text:"北京文艺广播FM87.6",name:'dataURL=http%3A%2F%2Fcdn.kandian.com%2Fmovies%3Fcmd%3Dplay%26id%3D1042927940%26start%3D1369042556%26end%3D1369388156&volumn=0.5&uid=1052710881&eid=1043390840&pageURL=http://radio.weibo.com/china/fm900?source=radio_change'},
			 {id:"n228",pid:"n22",text:"北京新闻广播FM100.6",name:'dataURL=http%3A%2F%2Fcdn.kandian.com%2Fmovies%3Fcmd%3Dplay%26id%3D1043387470%26start%3D1369042664%26end%3D1369388264&volumn=0.5&uid=1052710881&eid=1043390840&pageURL=http://radio.weibo.com/china/fm900?source=radio_change'},
			 {id:"n229",pid:"n22",text:"北京交通广播FM103.9",name:'dataURL=http%3A%2F%2Fcdn.kandian.com%2Fmovies%3Fcmd%3Dplay%26id%3D1043386320%26start%3D1369042733%26end%3D1369388333&volumn=0.5&uid=1052710881&eid=1043390840&pageURL=http://radio.weibo.com/china/fm900?source=radio_change'},
			 {id:"n230",pid:"n22",text:"北京音乐广播FM97.4",name:'dataURL=http%3A%2F%2Fcdn.kandian.com%2Fmovies%3Fcmd%3Dplay%26id%3D1042927950%26start%3D1369042814%26end%3D1369388414&volumn=0.5&uid=1052710881&eid=1043390840&pageURL=http://radio.weibo.com/china/fm900?source=radio_change'},
			 {id:"n231",pid:"n22",text:"北京城市服务管理广播FM107.3",name:'dataURL=http%3A%2F%2Fcdn.kandian.com%2Fmovies%3Fcmd%3Dplay%26id%3D1043387480%26start%3D1369042880%26end%3D1369388480&volumn=0.5&uid=1052710881&eid=1043390840&pageURL=http://radio.weibo.com/china/fm900?source=radio_change'},
			 {id:"n232",pid:"n22",text:"北京外语广播AM774",name:'dataURL=http%3A%2F%2Fcdn.kandian.com%2Fmovies%3Fcmd%3Dplay%26id%3D1042927960%26start%3D1369042953%26end%3D1369388553&volumn=0.5&uid=1052710881&eid=1043390840&pageURL=http://radio.weibo.com/china/fm900?source=radio_change'},
			 {id:"n233",pid:"n22",text:"北京故事广播AM603",name:'dataURL=http%3A%2F%2Fcdn.kandian.com%2Fmovies%3Fcmd%3Dplay%26id%3D1042927910%26start%3D1369043057%26end%3D1369388657&volumn=0.5&uid=1052710881&eid=1043390840&pageURL=http://radio.weibo.com/china/fm900?source=radio_change'},
			 {id:"n234",pid:"n22",text:"北京爱家广播AM927",name:'dataURL=http%3A%2F%2Fcdn.kandian.com%2Fmovies%3Fcmd%3Dplay%26id%3D1042928860%26start%3D1369043137%26end%3D1369388737&volumn=0.5&uid=1052710881&eid=1043390840&pageURL=http://radio.weibo.com/china/fm900?source=radio_change'},
			 {id:"n235",pid:"n22",text:"北京体育广播FM102.5",name:'dataURL=http%3A%2F%2Fcdn.kandian.com%2Fmovies%3Fcmd%3Dplay%26id%3D1042927930%26start%3D1369043249%26end%3D1369388849&volumn=0.5&uid=1052710881&eid=1043390840&pageURL=http://radio.weibo.com/china/fm900?source=radio_change'},
			 {id:"n236",pid:"n22",text:"北京数字广播古典音乐频率",name:'dataURL=http%3A%2F%2Fcdn.kandian.com%2Fmovies%3Fcmd%3Dplay%26id%3D1042931820%26start%3D1369043286%26end%3D1369388886&volumn=0.5&uid=1052710881&eid=1043390840&pageURL=http://radio.weibo.com/china/fm900?source=radio_change'},
			 {id:"n237",pid:"n22",text:"北京数字广播怀旧金曲频率",name:'dataURL=http%3A%2F%2Fcdn.kandian.com%2Fmovies%3Fcmd%3Dplay%26id%3D1042931830%26start%3D1369043369%26end%3D1369388969&volumn=0.5&uid=1052710881&eid=1043390840&pageURL=http://radio.weibo.com/china/fm900?source=radio_change'},
			 {id:"n238",pid:"n22",text:"北京数字广播欢乐时光频率",name:'dataURL=http%3A%2F%2Fcdn.kandian.com%2Fmovies%3Fcmd%3Dplay%26id%3D1042931840%26start%3D1369043421%26end%3D1369389021&volumn=0.5&uid=1052710881&eid=1043390840&pageURL=http://radio.weibo.com/china/fm900?source=radio_change'},
			 {id:"n239",pid:"n22",text:"北京数字广播长书频率CFM-104.3",name:'dataURL=http%3A%2F%2Fcdn.kandian.com%2Fmovies%3Fcmd%3Dplay%26id%3D1042931850%26start%3D1369043472%26end%3D1369389072&volumn=0.5&uid=1052710881&eid=1043390840&pageURL=http://radio.weibo.com/china/fm900?source=radio_change'},
			 {id:"n240",pid:"n23",text:"上海新闻广播FM93.4",name:'dataURL=http%3A%2F%2Fcdn.kandian.com%2Fmovies%3Fcmd%3Dplay%26id%3D1042929980%26start%3D1369043796%26end%3D1369389396&volumn=0.5&uid=1052710881&eid=1043390840&pageURL=http://radio.weibo.com/china/fm900?source=radio_change'},
			 {id:"n241",pid:"n23",text:"东广新闻台FM90.9",name:'dataURL=http%3A%2F%2Fcdn.kandian.com%2Fmovies%3Fcmd%3Dplay%26id%3D1042929990%26start%3D1369043848%26end%3D1369389448&volumn=0.5&uid=1052710881&eid=1043390840&pageURL=http://radio.weibo.com/china/fm900?source=radio_change'},
			 {id:"n242",pid:"n23",text:"第一财经广播FM97.7",name:'dataURL=http%3A%2F%2Fcdn.kandian.com%2Fmovies%3Fcmd%3Dplay%26id%3D1042930310%26start%3D1369043946%26end%3D1369389546&volumn=0.5&uid=1052710881&eid=1043390840&pageURL=http://radio.weibo.com/china/fm900?source=radio_change'},
			 {id:"n243",pid:"n23",text:"五星体育广播FM94.0",name:'dataURL=http%3A%2F%2Fcdn.kandian.com%2Fmovies%3Fcmd%3Dplay%26id%3D1042931520%26start%3D1369043992%26end%3D1369389592&volumn=0.5&uid=1052710881&eid=1043390840&pageURL=http://radio.weibo.com/china/fm900?source=radio_change'},
			 {id:"n244",pid:"n23",text:"浦江之声AM1422",name:'dataURL=http%3A%2F%2Fcdn.kandian.com%2Fmovies%3Fcmd%3Dplay%26id%3D1042929910%26start%3D1369044065%26end%3D1369389665&volumn=0.5&uid=1052710881&eid=1043390840&pageURL=http://radio.weibo.com/china/fm900?source=radio_change'},
			 {id:"n245",pid:"n23",text:"嘉定人民广播电台FM100.3",name:'dataURL=http%3A%2F%2Fcdn.kandian.com%2Fmovies%3Fcmd%3Dplay%26id%3D1042930610%26start%3D1369044129%26end%3D1369389729&volumn=0.5&uid=1052710881&eid=1043390840&pageURL=http://radio.weibo.com/china/fm900?source=radio_change'},
			 {id:"n246",pid:"n23",text:"奉贤人民广播电台阳光959FM95.9",name:'dataURL=http%3A%2F%2Fcdn.kandian.com%2Fmovies%3Fcmd%3Dplay%26id%3D1042931370%26start%3D1369044193%26end%3D1369389793&volumn=0.5&uid=1052710881&eid=1043390840&pageURL=http://radio.weibo.com/china/fm900?source=radio_change'},
			 {id:"n247",pid:"n23",text:"闵行人民广播电台FM102.7",name:'dataURL=http%3A%2F%2Fcdn.kandian.com%2Fmovies%3Fcmd%3Dplay%26id%3D1043389150%26start%3D1369044274%26end%3D1369389874&volumn=0.5&uid=1052710881&eid=1043390840&pageURL=http://radio.weibo.com/china/fm900?source=radio_change'},
			 {id:"n248",pid:"n24",text:"天津交通广播FM106.8",name:'dataURL=http%3A%2F%2Fcdn.kandian.com%2Fmovies%3Fcmd%3Dplay%26id%3D1042928040%26start%3D1369044355%26end%3D1369389955&volumn=0.5&uid=1052710881&eid=1043390840&pageURL=http://radio.weibo.com/china/fm900?source=radio_change'},
			 {id:"n249",pid:"n24",text:"天津文艺广播FM104.6",name:'dataURL=http%3A%2F%2Fcdn.kandian.com%2Fmovies%3Fcmd%3Dplay%26id%3D1042928240%26start%3D1369044440%26end%3D1369390040&volumn=0.5&uid=1052710881&eid=1043390840&pageURL=http://radio.weibo.com/china/fm900?source=radio_change'},
			 {id:"n250",pid:"n24",text:"天津滨海广播FM87.8",name:'dataURL=http%3A%2F%2Fcdn.kandian.com%2Fmovies%3Fcmd%3Dplay%26id%3D1042927990%26start%3D1369044483%26end%3D1369390083&volumn=0.5&uid=1052710881&eid=1043390840&pageURL=http://radio.weibo.com/china/fm900?source=radio_change'},
			 {id:"n251",pid:"n24",text:"天津音乐广播FM99",name:'dataURL=http%3A%2F%2Fcdn.kandian.com%2Fmovies%3Fcmd%3Dplay%26id%3D1042928620%26start%3D1369044537%26end%3D1369390137&volumn=0.5&uid=1052710881&eid=1043390840&pageURL=http://radio.weibo.com/china/fm900?source=radio_change'},
			 {id:"n252",pid:"n24",text:"天津小说广播AM666",name:'dataURL=http%3A%2F%2Fcdn.kandian.com%2Fmovies%3Fcmd%3Dplay%26id%3D1042928800%26start%3D1369044585%26end%3D1369390185&volumn=0.5&uid=1052710881&eid=1043390840&pageURL=http://radio.weibo.com/china/fm900?source=radio_change'},
			 {id:"n253",pid:"n24",text:"天津经济广播FM101.4",name:'dataURL=http%3A%2F%2Fcdn.kandian.com%2Fmovies%3Fcmd%3Dplay%26id%3D1042929830%26start%3D1369044642%26end%3D1369390242&volumn=0.5&uid=1052710881&eid=1043390840&pageURL=http://radio.weibo.com/china/fm900?source=radio_change'},
			 {id:"n254",pid:"n24",text:"天津MYFM100.5",name:'dataURL=http%3A%2F%2Fcdn.kandian.com%2Fmovies%3Fcmd%3Dplay%26id%3D1043388080%26start%3D1369044693%26end%3D1369390293&volumn=0.5&uid=1052710881&eid=1043390840&pageURL=http://radio.weibo.com/china/fm900?source=radio_change'},
			 {id:"n255",pid:"n25",text:"河北音乐广播FM102.4",name:'dataURL=http%3A%2F%2Fcdn.kandian.com%2Fmovies%3Fcmd%3Dplay%26id%3D1043388160%26start%3D1369045045%26end%3D1369390645&volumn=0.5&uid=1052710881&eid=1043390840&pageURL=http://radio.weibo.com/china/fm900?source=radio_change'},
			 {id:"n256",pid:"n25",text:"唐山音乐广播FM94",name:'dataURL=http%3A%2F%2Fcdn.kandian.com%2Fmovies%3Fcmd%3Dplay%26id%3D1042928100%26start%3D1369045121%26end%3D1369390721&volumn=0.5&uid=1052710881&eid=1043390840&pageURL=http://radio.weibo.com/china/fm900?source=radio_change'},
			 {id:"n257",pid:"n25",text:"河北文艺广播FM90.7",name:'dataURL=http%3A%2F%2Fcdn.kandian.com%2Fmovies%3Fcmd%3Dplay%26id%3D1042928540%26start%3D1369045183%26end%3D1369390783&volumn=0.5&uid=1052710881&eid=1043390840&pageURL=http://radio.weibo.com/china/fm900?source=radio_change'},
			 {id:"n258",pid:"n25",text:"河北交通广播FM99.2",name:'dataURL=http%3A%2F%2Fcdn.kandian.com%2Fmovies%3Fcmd%3Dplay%26id%3D1042929020%26start%3D1369045245%26end%3D1369390845&volumn=0.5&uid=1052710881&eid=1043390840&pageURL=http://radio.weibo.com/china/fm900?source=radio_change'},
			 {id:"n259",pid:"n25",text:"石家庄音乐广播FM106.7",name:'dataURL=http%3A%2F%2Fcdn.kandian.com%2Fmovies%3Fcmd%3Dplay%26id%3D1042929300%26start%3D1369045297%26end%3D1369390897&volumn=0.5&uid=1052710881&eid=1043390840&pageURL=http://radio.weibo.com/china/fm900?source=radio_change'},
			 {id:"n260",pid:"n25",text:"河北新闻广播FM104.3",name:'dataURL=http%3A%2F%2Fcdn.kandian.com%2Fmovies%3Fcmd%3Dplay%26id%3D1042929810%26start%3D1369045360%26end%3D1369390960&volumn=0.5&uid=1052710881&eid=1043390840&pageURL=http://radio.weibo.com/china/fm900?source=radio_change'},
			 {id:"n261",pid:"n25",text:"河北经济广播FM107.9",name:'dataURL=http%3A%2F%2Fcdn.kandian.com%2Fmovies%3Fcmd%3Dplay%26id%3D1042930770%26start%3D1369045445%26end%3D1369391045&volumn=0.5&uid=1052710881&eid=1043390840&pageURL=http://radio.weibo.com/china/fm900?source=radio_change'},
			 {id:"n262",pid:"n25",text:"保定新闻广播FM93.7",name:'dataURL=http%3A%2F%2Fcdn.kandian.com%2Fmovies%3Fcmd%3Dplay%26id%3D1042930590%26start%3D1369045509%26end%3D1369391109&volumn=0.5&uid=1052710881&eid=1043390840&pageURL=http://radio.weibo.com/china/fm900?source=radio_change'},
			 {id:"n263",pid:"n25",text:"保定城市服务广播FM101.6",name:'dataURL=http%3A%2F%2Fcdn.kandian.com%2Fmovies%3Fcmd%3Dplay%26id%3D1042931440%26start%3D1369045573%26end%3D1369391173&volumn=0.5&uid=1052710881&eid=1043390840&pageURL=http://radio.weibo.com/china/fm900?source=radio_change'},
			 {id:"n264",pid:"n25",text:"河北电台农民广播FM98.1",name:'dataURL=http%3A%2F%2Fcdn.kandian.com%2Fmovies%3Fcmd%3Dplay%26id%3D1042931720%26start%3D1369045634%26end%3D1369391234&volumn=0.5&uid=1052710881&eid=1043390840&pageURL=http://radio.weibo.com/china/fm900?source=radio_change'},
			 {id:"n265",pid:"n25",text:"保定交通广播FM104.8",name:'dataURL=http%3A%2F%2Fcdn.kandian.com%2Fmovies%3Fcmd%3Dplay%26id%3D1043391100%26start%3D1369045695%26end%3D1369391295&volumn=0.5&uid=1052710881&eid=1043390840&pageURL=http://radio.weibo.com/china/fm900?source=radio_change'},
			 {id:"n266",pid:"n26",text:"四川城市之音FM102.6",name:'dataURL=http%3A%2F%2Fcdn.kandian.com%2Fmovies%3Fcmd%3Dplay%26id%3D1043391680%26start%3D1369045919%26end%3D1369391519&volumn=0.5&uid=1052710881&eid=1043390840&pageURL=http://radio.weibo.com/china/fm900?source=radio_change'},
			 {id:"n267",pid:"n26",text:"四川交通广播FM101.7",name:'dataURL=http%3A%2F%2Fcdn.kandian.com%2Fmovies%3Fcmd%3Dplay%26id%3D1042930000%26start%3D1369045991%26end%3D1369391591&volumn=0.5&uid=1052710881&eid=1043390840&pageURL=http://radio.weibo.com/china/fm900?source=radio_change'},
			 {id:"n268",pid:"n26",text:"四川旅游生活广播FM97.0",name:'dataURL=http%3A%2F%2Fcdn.kandian.com%2Fmovies%3Fcmd%3Dplay%26id%3D1042930680%26start%3D1369046048%26end%3D1369391648&volumn=0.5&uid=1052710881&eid=1043390840&pageURL=http://radio.weibo.com/china/fm900?source=radio_change'},
			 {id:"n269",pid:"n26",text:"四川电台经济频率FM89.4",name:'dataURL=http%3A%2F%2Fcdn.kandian.com%2Fmovies%3Fcmd%3Dplay%26id%3D1042930940%26start%3D1369046102%26end%3D1369391702&volumn=0.5&uid=1052710881&eid=1043390840&pageURL=http://radio.weibo.com/china/fm900?source=radio_change'},
			 {id:"n270",pid:"n26",text:"成都交通广播FM91.4",name:'dataURL=http%3A%2F%2Fcdn.kandian.com%2Fmovies%3Fcmd%3Dplay%26id%3D1042928890%26start%3D1369046170%26end%3D1369391770&volumn=0.5&uid=1052710881&eid=1043390840&pageURL=http://radio.weibo.com/china/fm900?source=radio_change'},
			 {id:"n271",pid:"n26",text:"成都经济广播FM105.6",name:'dataURL=http%3A%2F%2Fcdn.kandian.com%2Fmovies%3Fcmd%3Dplay%26id%3D1042928710%26start%3D1369046236%26end%3D1369391836&volumn=0.5&uid=1052710881&eid=1043390840&pageURL=http://radio.weibo.com/china/fm900?source=radio_change'},
			 {id:"n272",pid:"n26",text:"成都文化休闲广播FM94.6",name:'dataURL=http%3A%2F%2Fcdn.kandian.com%2Fmovies%3Fcmd%3Dplay%26id%3D1042928750%26start%3D1369046317%26end%3D1369391917&volumn=0.5&uid=1052710881&eid=1043390840&pageURL=http://radio.weibo.com/china/fm900?source=radio_change'},
			 {id:"n273",pid:"n26",text:"成都新闻广播FM99.8",name:'dataURL=http%3A%2F%2Fcdn.kandian.com%2Fmovies%3Fcmd%3Dplay%26id%3D1042928690%26start%3D1369046391%26end%3D1369391991&volumn=0.5&uid=1052710881&eid=1043390840&pageURL=http://radio.weibo.com/china/fm900?source=radio_change'},
			 {id:"n274",pid:"n26",text:"攀枝花汽车电台FM91.0",name:'dataURL=http%3A%2F%2Fcdn.kandian.com%2Fmovies%3Fcmd%3Dplay%26id%3D1042930490%26start%3D1369046444%26end%3D1369392044&volumn=0.5&uid=1052710881&eid=1043390840&pageURL=http://radio.weibo.com/china/fm900?source=radio_change'},
			 {id:"n275",pid:"n26",text:"岷江音乐iradio-FM95.5",name:'dataURL=http%3A%2F%2Fcdn.kandian.com%2Fmovies%3Fcmd%3Dplay%26id%3D1042928080%26start%3D1369046518%26end%3D1369392118&volumn=0.5&uid=1052710881&eid=1043390840&pageURL=http://radio.weibo.com/china/fm900?source=radio_change'},
			 {id:"n276",pid:"n26",text:"四川文艺广播MYRadio-FM90.0",name:'dataURL=http%3A%2F%2Fcdn.kandian.com%2Fmovies%3Fcmd%3Dplay%26id%3D1042931160%26start%3D1369046601%26end%3D1369392201&volumn=0.5&uid=1052710881&eid=1043390840&pageURL=http://radio.weibo.com/china/fm900?source=radio_change'},
			 {id:"n277",pid:"n26",text:"成都唯一音乐广播FM103.2",name:'dataURL=http%3A%2F%2Fcdn.kandian.com%2Fmovies%3Fcmd%3Dplay%26id%3D1042928990%26start%3D1369046685%26end%3D1369392285&volumn=0.5&uid=1052710881&eid=1043390840&pageURL=http://radio.weibo.com/china/fm900?source=radio_change'},
			 {id:"n278",pid:"n26",text:"攀枝花新闻广播FM88.5",name:'dataURL=http%3A%2F%2Fcdn.kandian.com%2Fmovies%3Fcmd%3Dplay%26id%3D1043390070%26start%3D1369046748%26end%3D1369392348&volumn=0.5&uid=1052710881&eid=1043390840&pageURL=http://radio.weibo.com/china/fm900?source=radio_change'},
			 {id:"n279",pid:"n26",text:"四川财富广播FM94.0",name:'dataURL=http%3A%2F%2Fcdn.kandian.com%2Fmovies%3Fcmd%3Dplay%26id%3D1043391460%26start%3D1369046816%26end%3D1369392416&volumn=0.5&uid=1052710881&eid=1043390840&pageURL=http://radio.weibo.com/china/fm900?source=radio_change'},
			 {id:"n280",pid:"n26",text:"乐山新闻综合广播FM102.8",name:'dataURL=http%3A%2F%2Fcdn.kandian.com%2Fmovies%3Fcmd%3Dplay%26id%3D1043386490%26start%3D1369046870%26end%3D1369392470&volumn=0.5&uid=1052710881&eid=1043390840&pageURL=http://radio.weibo.com/china/fm900?source=radio_change'},
			 {id:"n281",pid:"n27",text:"陕西音乐广播FM98.8",name:'dataURL=http%3A%2F%2Fcdn.kandian.com%2Fmovies%3Fcmd%3Dplay%26id%3D1042928020%26start%3D1369046940%26end%3D1369392540&volumn=0.5&uid=1052710881&eid=1043390840&pageURL=http://radio.weibo.com/china/fm900?source=radio_change'},
			 {id:"n282",pid:"n27",text:"西安音乐广播FM93.1",name:'dataURL=http%3A%2F%2Fcdn.kandian.com%2Fmovies%3Fcmd%3Dplay%26id%3D1043389760%26start%3D1369046999%26end%3D1369392599&volumn=0.5&uid=1052710881&eid=1043390840&pageURL=http://radio.weibo.com/china/fm900?source=radio_change'},
			 {id:"n283",pid:"n27",text:"陕西秦腔广播FM101.1",name:'dataURL=http%3A%2F%2Fcdn.kandian.com%2Fmovies%3Fcmd%3Dplay%26id%3D1042930020%26start%3D1369047064%26end%3D1369392664&volumn=0.5&uid=1052710881&eid=1043390840&pageURL=http://radio.weibo.com/china/fm900?source=radio_change'},
			 {id:"n284",pid:"n27",text:"陕西896汽车调频FM89.6",name:'dataURL=http%3A%2F%2Fcdn.kandian.com%2Fmovies%3Fcmd%3Dplay%26id%3D1042928490%26start%3D1369047115%26end%3D1369392715&volumn=0.5&uid=1052710881&eid=1043390840&pageURL=http://radio.weibo.com/china/fm900?source=radio_change'},
			 {id:"n285",pid:"n27",text:"陕西故事广播AM603",name:'dataURL=http%3A%2F%2Fcdn.kandian.com%2Fmovies%3Fcmd%3Dplay%26id%3D1042928340%26start%3D1369047171%26end%3D1369392771&volumn=0.5&uid=1052710881&eid=1043390840&pageURL=http://radio.weibo.com/china/fm900?source=radio_change'},
			 {id:"n286",pid:"n27",text:"西安交通旅游广播FM104.3",name:'dataURL=http%3A%2F%2Fcdn.kandian.com%2Fmovies%3Fcmd%3Dplay%26id%3D1043389770%26start%3D1369047284%26end%3D1369392884&volumn=0.5&uid=1052710881&eid=1043390840&pageURL=http://radio.weibo.com/china/fm900?source=radio_change'},
			 {id:"n287",pid:"n27",text:"陕西交通广播FM91.6",name:'dataURL=http%3A%2F%2Fcdn.kandian.com%2Fmovies%3Fcmd%3Dplay%26id%3D1042928400%26start%3D1369047331%26end%3D1369392931&volumn=0.5&uid=1052710881&eid=1043390840&pageURL=http://radio.weibo.com/china/fm900?source=radio_change'},
			 {id:"n288",pid:"n27",text:"西安新闻广播AM810",name:'dataURL=http%3A%2F%2Fcdn.kandian.com%2Fmovies%3Fcmd%3Dplay%26id%3D1043389780%26start%3D1369047397%26end%3D1369392997&volumn=0.5&uid=1052710881&eid=1043390840&pageURL=http://radio.weibo.com/china/fm900?source=radio_change'},
			 {id:"n289",pid:"n27",text:"西安资讯广播FM106.1",name:'dataURL=http%3A%2F%2Fcdn.kandian.com%2Fmovies%3Fcmd%3Dplay%26id%3D1043389790%26start%3D1369047457%26end%3D1369393057&volumn=0.5&uid=1052710881&eid=1043390840&pageURL=http://radio.weibo.com/china/fm900?source=radio_change'},
			 {id:"n290",pid:"n27",text:"西安综艺广播FM102.4",name:'dataURL=http%3A%2F%2Fcdn.kandian.com%2Fmovies%3Fcmd%3Dplay%26id%3D1043389800%26start%3D1369047524%26end%3D1369393124&volumn=0.5&uid=1052710881&eid=1043390840&pageURL=http://radio.weibo.com/china/fm900?source=radio_change'},
			 {id:"n291",pid:"n27",text:"陕西戏曲广播AM747",name:'dataURL=http%3A%2F%2Fcdn.kandian.com%2Fmovies%3Fcmd%3Dplay%26id%3D1042929820%26start%3D1369047583%26end%3D1369393183&volumn=0.5&uid=1052710881&eid=1043390840&pageURL=http://radio.weibo.com/china/fm900?source=radio_change'},
			 {id:"n292",pid:"n27",text:"陕西青春广播FM105.5",name:'dataURL=http%3A%2F%2Fcdn.kandian.com%2Fmovies%3Fcmd%3Dplay%26id%3D1042930640%26start%3D1369047649%26end%3D1369393249&volumn=0.5&uid=1052710881&eid=1043390840&pageURL=http://radio.weibo.com/china/fm900?source=radio_change'},
			 {id:"n293",pid:"n28",text:"广东电台音乐之声FM99.3",name:'dataURL=http%3A%2F%2Fcdn.kandian.com%2Fmovies%3Fcmd%3Dplay%26id%3D1043390490%26start%3D1369047863%26end%3D1369393463&volumn=0.5&uid=1052710881&eid=1043390840&pageURL=http://radio.weibo.com/china/fm900?source=radio_change'},
			 {id:"n294",pid:"n28",text:"珠江经济广播电台FM97.4",name:'dataURL=http%3A%2F%2Fcdn.kandian.com%2Fmovies%3Fcmd%3Dplay%26id%3D1043390500%26start%3D1369047906%26end%3D1369393506&volumn=0.5&uid=1052710881&eid=1043390840&pageURL=http://radio.weibo.com/china/fm900?source=radio_change'},
			 {id:"n295",pid:"n28",text:"深圳私家车广播FM94.2",name:'dataURL=http%3A%2F%2Fcdn.kandian.com%2Fmovies%3Fcmd%3Dplay%26id%3D1042928630%26start%3D1369047968%26end%3D1369393568&volumn=0.5&uid=1052710881&eid=1043390840&pageURL=http://radio.weibo.com/china/fm900?source=radio_change'},
			 {id:"n296",pid:"n28",text:"广东电台新闻台FM91.4",name:'dataURL=http%3A%2F%2Fcdn.kandian.com%2Fmovies%3Fcmd%3Dplay%26id%3D1043390510%26start%3D1369048032%26end%3D1369393632&volumn=0.5&uid=1052710881&eid=1043390840&pageURL=http://radio.weibo.com/china/fm900?source=radio_change'},
			 {id:"n297",pid:"n28",text:"优悦广播URADIO-FM105.7",name:'dataURL=http%3A%2F%2Fcdn.kandian.com%2Fmovies%3Fcmd%3Dplay%26id%3D1043390570%26start%3D1369048094%26end%3D1369393694&volumn=0.5&uid=1052710881&eid=1043390840&pageURL=http://radio.weibo.com/china/fm900?source=radio_change'},
			 {id:"n298",pid:"n28",text:"广东电台城市之声FM103.6",name:'dataURL=http%3A%2F%2Fcdn.kandian.com%2Fmovies%3Fcmd%3Dplay%26id%3D1043390520%26start%3D1369048172%26end%3D1369393772&volumn=0.5&uid=1052710881&eid=1043390840&pageURL=http://radio.weibo.com/china/fm900?source=radio_change'},
			 {id:"n299",pid:"n28",text:"广东电台股市台FM95.3",name:'dataURL=http%3A%2F%2Fcdn.kandian.com%2Fmovies%3Fcmd%3Dplay%26id%3D1043390560%26start%3D1369048251%26end%3D1369393851&volumn=0.5&uid=1052710881&eid=1043390840&pageURL=http://radio.weibo.com/china/fm900?source=radio_change'},
			 {id:"n300",pid:"n28",text:"深圳电台先锋FM898",name:'dataURL=http%3A%2F%2Fcdn.kandian.com%2Fmovies%3Fcmd%3Dplay%26id%3D1042929210%26start%3D1369048300%26end%3D1369393900&volumn=0.5&uid=1052710881&eid=1043390840&pageURL=http://radio.weibo.com/china/fm900?source=radio_change'},
			 {id:"n301",pid:"n28",text:"广东电台经典FM107.7",name:'dataURL=http%3A%2F%2Fcdn.kandian.com%2Fmovies%3Fcmd%3Dplay%26id%3D1043390550%26start%3D1369048377%26end%3D1369393977&volumn=0.5&uid=1052710881&eid=1043390840&pageURL=http://radio.weibo.com/china/fm900?source=radio_change'},
			 {id:"n302",pid:"n28",text:"江门旅游之声FM93.3",name:'dataURL=http%3A%2F%2Fcdn.kandian.com%2Fmovies%3Fcmd%3Dplay%26id%3D1042929630%26start%3D1369048444%26end%3D1369394044&volumn=0.5&uid=1052710881&eid=1043390840&pageURL=http://radio.weibo.com/china/fm900?source=radio_change'},
			 {id:"n303",pid:"n28",text:"中山电台快乐FM88.8",name:'dataURL=http%3A%2F%2Fcdn.kandian.com%2Fmovies%3Fcmd%3Dplay%26id%3D1042930570%26start%3D1369048504%26end%3D1369394104&volumn=0.5&uid=1052710881&eid=1043390840&pageURL=http://radio.weibo.com/china/fm900?source=radio_change'},
			 {id:"n304",pid:"n28",text:"广东台山电台FM90.4",name:'dataURL=http%3A%2F%2Fcdn.kandian.com%2Fmovies%3Fcmd%3Dplay%26id%3D1042931670%26start%3D1369048559%26end%3D1369394159&volumn=0.5&uid=1052710881&eid=1043390840&pageURL=http://radio.weibo.com/china/fm900?source=radio_change'},
			 {id:"n305",pid:"n28",text:"中山电台综合新闻资讯频率FM96.7",name:'dataURL=http%3A%2F%2Fcdn.kandian.com%2Fmovies%3Fcmd%3Dplay%26id%3D1042932140%26start%3D1369048632%26end%3D1369394232&volumn=0.5&uid=1052710881&eid=1043390840&pageURL=http://radio.weibo.com/china/fm900?source=radio_change'},
			 {id:"n306",pid:"n28",text:"珠海电台先锋FM95.1",name:'dataURL=http%3A%2F%2Fcdn.kandian.com%2Fmovies%3Fcmd%3Dplay%26id%3D1043386290%26start%3D1369048705%26end%3D1369394305&volumn=0.5&uid=1052710881&eid=1043390840&pageURL=http://radio.weibo.com/china/fm900?source=radio_change'},
			 {id:"n307",pid:"n28",text:"羊城交通广播FM105.2",name:'dataURL=http%3A%2F%2Fcdn.kandian.com%2Fmovies%3Fcmd%3Dplay%26id%3D1043390540%26start%3D1369048852%26end%3D1369394452&volumn=0.5&uid=1052710881&eid=1043390840&pageURL=http://radio.weibo.com/china/fm900?source=radio_change'},
			 {id:"n308",pid:"n28",text:"南方生活广播FM93.6",name:'dataURL=http%3A%2F%2Fcdn.kandian.com%2Fmovies%3Fcmd%3Dplay%26id%3D1043390530%26start%3D1369048989%26end%3D1369394589&volumn=0.5&uid=1052710881&eid=1043390840&pageURL=http://radio.weibo.com/china/fm900?source=radio_change'},
			 {id:"n309",pid:"n29",text:"福建汽车音乐调频FM91.3",name:'dataURL=http%3A%2F%2Fcdn.kandian.com%2Fmovies%3Fcmd%3Dplay%26id%3D1042928210%26start%3D1369061002%26end%3D1369406602&volumn=0.5&uid=1052710881&eid=1043390840&pageURL=http://radio.weibo.com/china/fm900?source=radio_change'},
			 {id:"n310",pid:"n29",text:"厦门旅游广播FM94.0",name:'dataURL=http%3A%2F%2Fcdn.kandian.com%2Fmovies%3Fcmd%3Dplay%26id%3D1042928050%26start%3D1369061349%26end%3D1369406949&volumn=0.5&uid=1052710881&eid=1043390840&pageURL=http://radio.weibo.com/china/fm900?source=radio_change'},
			 {id:"n311",pid:"n29",text:"厦门音乐广播FM90.9",name:'dataURL=http%3A%2F%2Fcdn.kandian.com%2Fmovies%3Fcmd%3Dplay%26id%3D1042928090%26start%3D1369061463%26end%3D1369407063&volumn=0.5&uid=1052710881&eid=1043390840&pageURL=http://radio.weibo.com/china/fm900?source=radio_change'},
			 {id:"n312",pid:"n29",text:"福建左海之声FM90.1",name:'dataURL=http%3A%2F%2Fcdn.kandian.com%2Fmovies%3Fcmd%3Dplay%26id%3D1042928170%26start%3D1369061579%26end%3D1369407179&volumn=0.5&uid=1052710881&eid=1043390840&pageURL=http://radio.weibo.com/china/fm900?source=radio_change'},
			 {id:"n313",pid:"n29",text:"福建新闻广播FM103.6",name:'dataURL=http%3A%2F%2Fcdn.kandian.com%2Fmovies%3Fcmd%3Dplay%26id%3D1042930930%26start%3D1369061715%26end%3D1369407315&volumn=0.5&uid=1052710881&eid=1043390840&pageURL=http://radio.weibo.com/china/fm900?source=radio_change'},
			 {id:"n314",pid:"n29",text:"厦门闽南之声FM101.2",name:'dataURL=http%3A%2F%2Fcdn.kandian.com%2Fmovies%3Fcmd%3Dplay%26id%3D1042928830%26start%3D1369061777%26end%3D1369407377&volumn=0.5&uid=1052710881&eid=1043390840&pageURL=http://radio.weibo.com/china/fm900?source=radio_change'},
			 {id:"n315",pid:"n29",text:"海峡之声汽车生活广播FM90.6",name:'dataURL=http%3A%2F%2Fcdn.kandian.com%2Fmovies%3Fcmd%3Dplay%26id%3D1042928940%26start%3D1369061925%26end%3D1369407525&volumn=0.5&uid=1052710881&eid=1043390840&pageURL=http://radio.weibo.com/china/fm900?source=radio_change'},
			 {id:"n316",pid:"n29",text:"厦门经济交通广播FM107",name:'dataURL=http%3A%2F%2Fcdn.kandian.com%2Fmovies%3Fcmd%3Dplay%26id%3D1042929030%26start%3D1369061997%26end%3D1369407597&volumn=0.5&uid=1052710881&eid=1043390840&pageURL=http://radio.weibo.com/china/fm900?source=radio_change'},
			 {id:"n317",pid:"n29",text:"福建经济电台FM96.1",name:'dataURL=http%3A%2F%2Fcdn.kandian.com%2Fmovies%3Fcmd%3Dplay%26id%3D1042929400%26start%3D1369062116%26end%3D1369407716&volumn=0.5&uid=1052710881&eid=1043390840&pageURL=http://radio.weibo.com/china/fm900?source=radio_change'},
			 {id:"n318",pid:"n29",text:"福建女主播电台FM89.3",name:'dataURL=http%3A%2F%2Fcdn.kandian.com%2Fmovies%3Fcmd%3Dplay%26id%3D1042929470%26start%3D1369062233%26end%3D1369407833&volumn=0.5&uid=1052710881&eid=1043390840&pageURL=http://radio.weibo.com/china/fm900?source=radio_change'},
			 {id:"n319",pid:"n29",text:"福建交通之声FM87.6",name:'dataURL=http%3A%2F%2Fcdn.kandian.com%2Fmovies%3Fcmd%3Dplay%26id%3D1043389310%26start%3D1369062338%26end%3D1369407938&volumn=0.5&uid=1052710881&eid=1043390840&pageURL=http://radio.weibo.com/china/fm900?source=radio_change'},
			 {id:"n320",pid:"n29",text:"福建都市生活广播FM98.7",name:'dataURL=http%3A%2F%2Fcdn.kandian.com%2Fmovies%3Fcmd%3Dplay%26id%3D1042931280%26start%3D1369062587%26end%3D1369408187&volumn=0.5&uid=1052710881&eid=1043390840&pageURL=http://radio.weibo.com/china/fm900?source=radio_change'},
			 {id:"n321",pid:"n29",text:"海峡之声都市阳光调频FM99.6",name:'dataURL=http%3A%2F%2Fcdn.kandian.com%2Fmovies%3Fcmd%3Dplay%26id%3D1042928930%26start%3D1369062678%26end%3D1369408278&volumn=0.5&uid=1052710881&eid=1043390840&pageURL=http://radio.weibo.com/china/fm900?source=radio_change'},
			 {id:"n322",pid:"n30",text:"江西都市广播FM106.5",name:'dataURL=http%3A%2F%2Fcdn.kandian.com%2Fmovies%3Fcmd%3Dplay%26id%3D1042929440%26start%3D1369062751%26end%3D1369408351&volumn=0.5&uid=1052710881&eid=1043390840&pageURL=http://radio.weibo.com/china/fm900?source=radio_change'},
			 {id:"n323",pid:"n30",text:"江西音乐广播FM103.4",name:'dataURL=http%3A%2F%2Fcdn.kandian.com%2Fmovies%3Fcmd%3Dplay%26id%3D1042928450%26start%3D1369062842%26end%3D1369408442&volumn=0.5&uid=1052710881&eid=1043390840&pageURL=http://radio.weibo.com/china/fm900?source=radio_change'},
			 {id:"n324",pid:"n30",text:"江西交通广播FM105.4",name:'dataURL=http%3A%2F%2Fcdn.kandian.com%2Fmovies%3Fcmd%3Dplay%26id%3D1042928060%26start%3D1369062909%26end%3D1369408509&volumn=0.5&uid=1052710881&eid=1043390840&pageURL=http://radio.weibo.com/china/fm900?source=radio_change'},
			 {id:"n325",pid:"n30",text:"江西电台绿色之声FM98.5",name:'dataURL=http%3A%2F%2Fcdn.kandian.com%2Fmovies%3Fcmd%3Dplay%26id%3D1042928520%26start%3D1369062993%26end%3D1369408593&volumn=0.5&uid=1052710881&eid=1043390840&pageURL=http://radio.weibo.com/china/fm900?source=radio_change'},
			 {id:"n326",pid:"n30",text:"南昌交通广播FM95.1",name:'dataURL=http%3A%2F%2Fcdn.kandian.com%2Fmovies%3Fcmd%3Dplay%26id%3D1042929570%26start%3D1369063187%26end%3D1369408787&volumn=0.5&uid=1052710881&eid=1043390840&pageURL=http://radio.weibo.com/china/fm900?source=radio_change'},
			 {id:"n327",pid:"n30",text:"南昌故事广播FM90.6",name:'dataURL=http%3A%2F%2Fcdn.kandian.com%2Fmovies%3Fcmd%3Dplay%26id%3D1042929620%26start%3D1369063269%26end%3D1369408869&volumn=0.5&uid=1052710881&eid=1043390840&pageURL=http://radio.weibo.com/china/fm900?source=radio_change'},
			 {id:"n328",pid:"n30",text:"快乐联盟大眼睛FM89.7",name:'dataURL=http%3A%2F%2Fcdn.kandian.com%2Fmovies%3Fcmd%3Dplay%26id%3D1042928150%26start%3D1369063357%26end%3D1369408957&volumn=0.5&uid=1052710881&eid=1043390840&pageURL=http://radio.weibo.com/china/fm900?source=radio_change'},
			 {id:"n329",pid:"n30",text:"江西旅友之声FM100.7",name:'dataURL=http%3A%2F%2Fcdn.kandian.com%2Fmovies%3Fcmd%3Dplay%26id%3D1042930110%26start%3D1369063474%26end%3D1369409074&volumn=0.5&uid=1052710881&eid=1043390840&pageURL=http://radio.weibo.com/china/fm900?source=radio_change'},
			 {id:"n330",pid:"n30",text:"江西MYFM96.9",name:'dataURL=http%3A%2F%2Fcdn.kandian.com%2Fmovies%3Fcmd%3Dplay%26id%3D1042929710%26start%3D1369063562%26end%3D1369409162&volumn=0.5&uid=1052710881&eid=1043390840&pageURL=http://radio.weibo.com/china/fm900?source=radio_change'},
			 {id:"n331",pid:"n30",text:"江西民生广播FM101.9",name:'dataURL=http%3A%2F%2Fcdn.kandian.com%2Fmovies%3Fcmd%3Dplay%26id%3D1042931510%26start%3D1369063633%26end%3D1369409233&volumn=0.5&uid=1052710881&eid=1043390840&pageURL=http://radio.weibo.com/china/fm900?source=radio_change'},
			 {id:"n332",pid:"n30",text:"江西民生广播FM101.9",name:'dataURL=http%3A%2F%2Fcdn.kandian.com%2Fmovies%3Fcmd%3Dplay%26id%3D1042931510%26start%3D1369063633%26end%3D1369409233&volumn=0.5&uid=1052710881&eid=1043390840&pageURL=http://radio.weibo.com/china/fm900?source=radio_change'}
			];*/
			 
	function get(id){
		return document.getElementById(id);
	}
	
	function add(target,type,fun){
		if(target.addEventListener){
			target.addEventListener(type,fun);
		}else{
			target.attachEvent('on'+type,fun);
		}
	}
	
	function remove(target,type,fun){
		if(target.removeEventListener){
			target.removeEventListener(type,fun);
		}else{
			target.detachEvent('on'+type,fun);
		}
	}
	
	function once(target,type,fun){
		add(target,type,function(){
			fun();
			remove(target,type,arguments.callee);
		});
	}
	
	function getFlash(id){
		if (navigator.appName.indexOf("Microsoft") != -1) {
			if(document.documentMode == 10 || document.documentMode == 9){
				return document.getElementById(id);
			}else{
				return window[id];
			}
		} else {
			return document[id];
		}
	}
	
	window.radioReady = function(){
		setTimeout(init,100);
	}
	
	function init(){
		getFlash('radioAudio').goplay('dataURL=http%3A%2F%2Fcdn.kandian.com%2Fmovies%3Fcmd%3Dplay%26id%3D1043389200%26start%3D'+start+'%26end%3D'+end+'&amp;volumn=0.5&amp;uid=1052710881&amp;eid=1043389200&amp;pageURL=http://radio.weibo.com/online/crionline2012?source=radioarea_lastlisten');
		var playBtn = get('playBtn');
		var volume = 0.5;//音量
		var isPlay = true;//是否在播放
		var isMute = false;
		playBtn.onclick = function(){
			if(playBtn.className == 'ico_rdoPlay ico_stop_gray'){
				playBtn.className = 'ico_rdoPlay ico_play_gray';
				getFlash('radioAudio').setVolume(0);
				isPlay = false;
			}else{
				playBtn.className = 'ico_rdoPlay ico_stop_gray';
				if(!isMute)
					getFlash('radioAudio').setVolume(volume);
				isPlay = true;
			}
		}
		var muteBtn = get('muteBtn');
		muteBtn.onclick = function(){
			if(muteBtn.className == 'ico_rdoPlay ico_sound_on'){
				muteBtn.className = 'ico_rdoPlay ico_sound_off';
				getFlash('radioAudio').setVolume(0);
				get('volume').style.width = '0px';
				volumeBtn.style.left = "0px";
				isMute = true;
			}else{
				muteBtn.className = 'ico_rdoPlay ico_sound_on';
				if(isPlay)
					getFlash('radioAudio').setVolume(volume);
				volumeBtn.style.left = volume*100 + "px";
				get('volume').style.width = volume*100 + 'px';
				isMute = false;
			}
		}
		var volumeBtn = get('radio_vol');
		var startX;
		function mousemove(e){
			var pos = e.clientX - startX;
			volumeBtn.style.left = pos + "px";
			muteBtn.className = 'ico_rdoPlay ico_sound_on';
			if(pos <= 0){
				volumeBtn.style.left = '0px';
				muteBtn.className = 'ico_rdoPlay ico_sound_off';
				pos = 0;
			}
			
			if(pos >= 100){
				volumeBtn.style.left = '100px';
				pos = 100;
			}
			volume = pos/100;
			if(isPlay)
				getFlash('radioAudio').setVolume(pos/100);
			get('volume').style.width = volumeBtn.style.left;
		}
		volumeBtn.onmousedown = function(e){
			add(document,'mousemove',mousemove);
			once(document,'mouseup',function(){
				remove(document,'mousemove',mousemove);
			});
			startX = e.clientX - parseInt(volumeBtn.style.left);
		}
		
		$("#mytree2").omTree({
			dataSource : data,
			simpleDataModel: true,
			onSelect: function(node,event) {
				playBtn.className = 'ico_rdoPlay ico_stop_gray';
				getFlash('radioAudio').goplay(node.link);
			}
		});
	}
})(window);
