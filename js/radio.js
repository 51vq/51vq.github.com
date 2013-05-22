/**
 * ...
 * @author zhengshuo
 */
(function() {
	var data = [{id:"n1",text:"热门电台",expanded:true},
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
			 {id:"n11",pid:"n1",text:"CRI怀旧金曲",name:'dataURL=http%3A%2F%2Fcdn.kandian.com%2Fmovies%3Fcmd%3Dplay%26id%3D1043389200%26start%3D1367510401%26end%3D1372662685&amp;volumn=0.5&amp;uid=1052710881&amp;eid=1043389200&amp;pageURL=http://radio.weibo.com/online/crionline2012?source=radioarea_lastlisten'},
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
			];
			 
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
		getFlash('radioAudio').goplay('dataURL=http%3A%2F%2Fcdn.kandian.com%2Fmovies%3Fcmd%3Dplay%26id%3D1043389200%26start%3D1367510401%26end%3D1372662685&amp;volumn=0.5&amp;uid=1052710881&amp;eid=1043389200&amp;pageURL=http://radio.weibo.com/online/crionline2012?source=radioarea_lastlisten');
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
				getFlash('radioAudio').goplay(node.name);
			}
		});
	}
})(window);
