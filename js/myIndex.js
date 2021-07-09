var vm = new Vue({
				el: '#app',
				data: {
					// imgUrl:"http://www.hd512.com/admin/php/images/",
					// url:"http://localhost/hd_guanwang/admin/php/",
					url:"https://www.hd512.com/admin/php/",
					imgSrc:'./admin/php/images/',
					uploadShow:false,
					teamTalents: [ //人才培训及发展计划
						{
							img: "./images/平台管理.svg",
							text: "平台、组件技术开源历练"
						},
						{
							img: "./images/技术服务.svg",
							text: "技术分享会"
						},
						{
							img: "./images/赞.svg",
							text: "大牛技术沙龙"
						},

						{
							img: "./images/共享_常规.svg",
							text: "大厂资源技术共享"
						},

					],
					teamTalentsShow: true,
					teamItem: [
						"科研人员素质考核",
						"课程设计考核",
						"大纲设计考核",
						"讲义撰写考核",
						"视频录制考核",
						"课程设计考核",
						"产品全方位审评",
						"考核答辩"
					],
					teamBoxItem: [ //人才筛选4项标准
						{
							title: "标准化研发人才画像",
							text: "大厂背景，技术深度、广度，大型项目经验"
						},
						{
							title: "多维面试（五面）",
							text: "背景调查，技术360°鉴定，新课题设计，课程随机演绎，职业定位、发展规划"
						},
						{
							title: "研究院小组诊断测评",
							text: "教育情怀、价值观，进取精神、培养潜力"
						},
						{
							title: "全链路面试流程监控",
							text: "校长审核，信息存档"
						}
					],
					teacherItem:[],
					teamTextItem: [{
							number: "22",
							unit: "位",
							monad: "",
							title: "硬核讲师",
							text: "授课经验丰富"
						},
						{
							number: "3",
							unit: "%",
							monad: "",
							title: "录取率",
							text: "严选专职讲师"
						},
						{
							number: "10",
							unit: "年",
							monad: "+",
							title: "教学经验",
							text: "授课经验丰富"
						},
						{
							number: "5",
							unit: "大",
							monad: "",
							title: "独创教学法",
							text: "轻松理解技术难点"
						}

					],
					footingBoxLeftAB: ["Java大数据", "web前端", "UI/UE设计", "软件测试"],
					footingBoxLeftC: ["辉达概况", "联系我们", "对外合作", "1024程序员节"],
					footingBoxLeftD: ["学费价格", "校区分布", "教学团队"],
					footingBoxLeftF: ["报名流程", "来校地图", "住宿环境"],
					campusImgs:[],//当前选中
					campusNav:["学习环境","校区环境","餐饮环境","宿舍环境","基地环境"],//所有的校园环境图片
	
					dynamic:{},
			
					dynamicItem:[],//新闻动态数据
				
					diligentlyshow: true,
					echaItemShow:true,
					echaItem: {},//地图初始化默认显示基地
					baseImgItem:[],//所有的基地数据
					echartsItem: [{ //地图标点
							name: "北京",
							value: 278,
						},
						{
							name: "天津",
							value: 13,
							
						},
						{
							name: "河北",
							value: 29,

						},
						{
							name: "山西",
							value: 12,
							
						},
						{
							name: "内蒙古",
							value: 0,
						},
						{
							name: "辽宁",
							value: 0,
						},
						{
							name: "吉林",
							value: 0,
						},
						{
							name: "黑龙江",
							value: 0,
						},
						{
							name: "上海",
							value: 39,
							
						},
						{
							name: "江苏",
							value: 26,
						},
						{
							name: "浙江",
							value: 0,
						},
						{
							name: "安徽",
							value: 0,
						},
						{
							name: "福建",
							value: 0,
						},
						{
							name: "江西",
							value: 0,
						},
						{
							name: "山东",
							value: 0,
						},
						{
							name: "河南",
							value: 49,
							
						},
						{
							name: "湖北",
							value: 0,
						},
						{
							name: "湖南",
							value: 0,
						},
						{
							name: "重庆",
							value: 2,
						},
						{
							name: "四川",
							value: 2,
						},
						{
							name: "贵州",
							value: 0,
						},
						{
							name: "云南",
							value: 0,
						},
						{
							name: "西藏",
							value: 0,
						},
						{
							name: "陕西",
							value: 21,
						},
						{
							name: "甘肃",
							value: 0,
						},
						{
							name: "青海",
							value: 0,
						},
						{
							name: "宁夏",
							value: 0,
						},
						{
							name: "新疆",
							value: 0,
						},
						{
							name: "广东",
							value: 0,
						},
						{
							name: "广西",
							value: 0,
						},
						{
							name: "海南",
							value: 0,
						},
						{
							name: "台湾",
							value: 0,
							text: ''
						},
					],
					diligentlyItemA: [{
							icon: 'images/data.svg',
							textA: "一份面试",
							textB: "可用的作品"
						},
						{
							icon: 'images/delivery.svg',
							textA: "教学资料笔记",
							textB: "资源赠送"
						},

						{
							icon: 'images/design.svg',
							textA: "学长学姐",
							textB: "就业经验分享"
						},
						{
							icon: 'images/code.svg',
							textA: "一份面试",
							textB: "可用的作品"
						},
						{
							icon: 'images/we-are-hiring.svg',
							textA: "教学资料笔记",
							textB: "资源赠送"
						},
						{
							icon: 'images/no-messages.svg',
							textA: "学长学姐",
							textB: "就业经验分享"
						},
					],
					diligentlyItemB: [{
							icon: 'images/success.svg',
							textA: "及时获取",
							textB: "课程内容更新"
						},
						{
							icon: 'images/product-launch.svg',
							textA: "企业内推",
							textB: "就业机会"
						},

						{
							icon: 'images/error.svg',
							textA: "高质量",
							textB: "人脉圈子"
						},
						{
							icon: 'images/searching.svg',
							textA: "就业后工作问题",
							textB: "跟踪解答"
						},
						{
							icon: 'images/location.svg',
							textA: "九大基站",
							textB: "就业帮助服务"
						},

					],

					advantagesItems: [{
							icon: "./images/icon-rgb_运营数据集成.svg",
							title: "全行业",
							textA: "20+热门行业覆盖",
							textB: "领跑行业"
						}, {
							icon: "./images/icon-rgb_架构智能分析-1.svg",
							title: "高标准",
							textA: "'亿元级'研发投入",
							textB: "大厂深度共建"
						},
						{
							icon: "./images/icon-rgb_smv-1.svg",
							title: "真场景",
							textA: "商业模式真实",
							textB: "业务模型完整"
						},
						{
							icon: "./images/icon-rgb_指标智能管理 (1).svg",
							title: "深技术",
							textA: "深度技术剖析",
							textB: "贴合市场主流"

						},
						{
							icon: "./images/icon-rgb_dmv.svg",
							title: "快更新",
							textA: "热门项目'月'更新",
							textB: "前沿技术'周'更新"
						},
						{
							icon: "./images/icon-rgb_运营化.svg",
							title: "严保障",
							textA: "12项评审流程",
							textB: "4项验收标准"
						}
					],
					styleWidth: '',
					outlineItems: [],
					outlinebodyTitleA: "",
					outlinebodyTitleItem: [],
					courseItems:[
						{
							"title":"Java大数据",
							"iconA":"./images/java-script.svg",
							"iconB":"./images/java-scripts.svg",
							"img":"./images/java-script.svg",
						},{
							"title":"Web前端",
							"iconA":"./images/8_3前端开发.svg",
							"iconB":"./images/8_3前端开发s.svg",
							"img":"./images/8_3前端开发s.svg",
						},{
							"title":"UI/UE设计",
							"iconA":"./images/画笔.svg",
							"iconB":"./images/画笔s.svg",
							"img":"./images/画笔s.svg",
						},{
							"title":"软件测试",
							"iconA":"./images/测试.svg",
							"iconB":"./images/测试s.svg",
							"img":"./images/画笔s.svg",
						}
						
						],
					outlinebodyTitleItemNext: [],
					content: [ //课程中心内容
						{
							title: "Java大数据",
							body: "世界第一编程语言",
							images: "./images/大数据插图.svg",
							color:"#19227D"
						},
						{
							title: "Web前端",
							body: "培养实战型企业核心人才",
							images: "./images/web前端插图.svg",
							color:"#189BA3"
						},
						{
							title: "UI/UE设计",
							body: "了解业务的全链路设计师",
							images: "./images/UIUE设计插图.svg",
							color:"#E7483F"
						},
						{
							title: "软件测试",
							body: "软件质量的额捍卫者",
							images: "./images/软件测试.svg",
							color:"#9879D0"
						}
					],
					bannerNextshow: true,
					bannerNext: [ //banner下收费标准
						{
							course: "学费价格",
							icon: './images/send inquiry.svg'
						},
						{
							course: "开班信息",
							icon: './images/confirm.svg'
						},
						{
							course: "入学攻略",
							icon: './images/operation.svg'
						},
						{
							course: "学员信息",
							icon: './images/image-text.svg'
						},

					],

					courseItemShow: true, //导航课程是否显示
					courseItem: [ //导航课程
						{
							course: "Java大数据",
							icon: './images/icon_java.svg'
						},
						{
							course: "Web前端",
							icon: './images/icon_web.svg'
						},
						{
							course: "UI/UE设计",
							icon: './images/icon_uiue.svg'
						},
						{
							course: "软件测试",
							icon: './images/icon_software test.svg'
						},
						{
							course: "更多课程",
							icon: './images/icon _more.svg'
						}

					],
					topTextShow: false, //是否显示
					textShow: true, //大小屏切换
					srcImg: [ ],//轮播图
					itemNam: [ //nav
						"课程中心",
						"师资力量",
						"就业服务基站",
						"辉达精神",
						"关于辉达"
					],
					dataItem:[]//课程大纲的所有数据
					
				},
				methods: {
					swiper(){
						setTimeout(function() {
							new Swiper('.swiper-container', {
								loop: true,
								pagination: '.swiper-pagination',
								autoplay: 3000,
								paginationClickable: true,
								autoplayDisableOnInteraction: false,
								observer: true,
								observerParents: true
							})
						}, 500)
					},
					skip(index){
						console.log(index)
						console.log($(document).scrollTop())
						if(index==0) $(document).scrollTop("720")
						if(index==1) $(document).scrollTop("2580")
						if(index==2) $(document).scrollTop("5370")
						if(index==3) $(document).scrollTop("6500")
						if(index==4) $(document).scrollTop("7300")
					},
					dynamicItems(){//获取所有的新闻动态的数据
						let dynamic=this.url+"dynamic.php"
						axios.get(dynamic).then(data => {
							let datas=data.data
							datas.forEach(item=>{
								item.img=this.imgSrc+item.img
							})
							this.dynamicItem=datas
							this.dynamic=datas[0]
							console.log(this.dynamic,"222")
						})
					},
					dynamicItemClick(val) {
						this.dynamic = val
					},
					campusItem(val){//校园环境数据
						let campus=this.url+"environment.php?name="+val
						axios.get(campus).then(data => {
							this.campusImgs=[]
							let datas=data.data.img
							datas.forEach(item=>{
								this.campusImgs.push(this.imgSrc+item)
							})
						})
					},
					campusNavClick(val, index) {
						$(".campusNavTopDiv").css({
							"border": "none",
							"padding-top": "10px",
							"color":"#000"
						})
						$(".campusNavTopDiv").eq(index).css({
							"padding-top": "6px",
							"border-top": "4px solid #3258E5",
							"color":"#3258E5"
						})
						this.campusItem(val)
					},
					
					baseItem(){//请求基站数据
						let base=this.url+"echarts.php "
						axios.get(base).then(data => {
							console.log(data,"121212")
							let datas=data.data
							console.log(datas,"2")
							datas.forEach(item=>{
								item.baseImg=this.imgSrc+item.baseImg
							})
							console.log(datas,"2s")
							this.baseImgItem=datas
							this.echaItem=this.baseImgItem[0]
						})
					},
					baseImgItemClick(val, index) {//点击地图右边图片
						$(".baseImgItemBox").css({
							"opacity": 0.5
						})
						$(".baseImgItemBox").eq(index).css({
							"opacity": 1
						})
						this.echaItem=val
					},
					base() {//地图点
						// this.echartsItem的值应该通过axios来获取
						var thas = this
						let myChart = echarts.init(this.$refs.echarts)
						var mapName = 'china' //查找./map/js/china.js 下中国地图相关坐标
						var data = this.echartsItem
						var geoCoordMap = {};

						/*获取地图数据*/
						myChart.showLoading();
						var mapFeatures = echarts.getMap(mapName).geoJson.features;
						myChart.hideLoading();
						mapFeatures.forEach(function(v) {
							// 地区名称
							var name = v.properties.name;
							// 地区经纬度
							geoCoordMap[name] = v.properties.cp;

						});

						console.log(data)
						var max = 500,
							min = 10; // todo 
						var maxSize4Pin = 50,
							minSize4Pin = 20;

						var convertData = function(data) {
							
							var res = [];
							for (var i = 0; i < data.length; i++) {
								var geoCoord = geoCoordMap[data[i].name];
								if (geoCoord) {
									res.push({
										name: data[i].name,
										value: geoCoord.concat(data[i].value),
									});
								}
							}
							// console.log(res,"1222222222222222222222222")
							return res;
						};
						let option = {
							tooltip: {
								trigger: 'item',
								formatter: function(params) {
									return params.data.name
								}
							},
							visualMap: {
								show: false,
								min: 0,
								max: 500,
								left: 'left',
								top: 'bottom',
								text: ['高', '低'], // 文本，默认为数值文本
								calculable: true,
								seriesIndex: [1],
								inRange: {
									color: ['#00467F', '#A5CC82'] // 蓝绿
								}
							},
							geo: {
								show: true,
								map: mapName,
								label: {
									normal: {
										show: false
									},
									emphasis: {
										show: false,
									}
								},
								roam: false, //是否可以通过鼠标滑轮放大缩小地图
								itemStyle: {
									normal: {
										areaColor: '#031525',
										borderColor: '#3B5077',
									},
									emphasis: {
										areaColor: '#2B91B7',
									}
								}
							},
							series: [{
									name: '散点',
									type: 'scatter',
									coordinateSystem: 'geo',
									data: convertData(data),
									symbolSize: function(val) {
										return val[2] / 10;
									},
									label: {
										normal: {
											formatter: '{b}',
											position: 'right',
											show: true
										},
										emphasis: {
											show: true
										}
									},
									itemStyle: {
										normal: {
											color: '#05C3F9'
										}
									}
								},
								{
									type: 'map',
									map: mapName,
									geoIndex: 0,
									aspecttext: 0.75, //长宽比
									showLegendSymbol: false, // 存在legend时显示
									label: {
										normal: {
											show: true
										},
										emphasis: {
											show: false,
											textStyle: {
												color: '#fff'
											}
										}
									},
									roam: true,
									itemStyle: {
										normal: {
											areaColor: '#031525',
											borderColor: '#3B5077',
										},
										emphasis: {
											areaColor: '#2B91B7'
										}
									},
									animation: false,
									data: data
								},
								{
									name: '点',
									type: 'scatter',
									coordinateSystem: 'geo',
									symbol: 'pin', //气泡
									symbolSize: function(val) {
										var a = (maxSize4Pin - minSize4Pin) / (max - min);
										var b = minSize4Pin - a * min;
										b = maxSize4Pin - a * max;
										return a * val[2] + b;
									},
									label: {
										normal: {
											// formatter: '{@[2]}',
											show: true,
											textStyle: {
												color: '#fff',
												fontSize: 9,
											}
										}
									},
									itemStyle: {
										normal: {
											color: '#F62157', //标志颜色
										}
									},
									zlevel: 6,
									data: convertData(data),
								},
								{
									name: 'Top 5',
									type: 'effectScatter',
									coordinateSystem: 'geo',
									data: convertData(data.sort(function(a, b) {
										return b.value - a.value;
									}).slice(0, 5)),
									symbolSize: function(val) {
										return val[2] / 25;
									},
									showEffectOn: 'render',
									rippleEffect: {
										brushType: 'stroke'
									},
									hoverAnimation: true,
									label: {
										normal: {
											formatter: '{b}',
											position: 'right',
											show: true
										}
									},
									itemStyle: {
										normal: {
											color: 'yellow',
											shadowBlur: 10,
											shadowColor: 'yellow'
										}
									},
									zlevel: 1
								},

							]
						};
						myChart.setOption(option);
						myChart.on('click', function(params) { //事件委托给所有的子元素添加点击事件
							let i=thas.echaItem
							thas.echaItemShow=false
							thas.echaItem=params.data
							thas.baseImgItem.forEach((item, index) => {
								if (params.data.name == item.name) {
									thas.echaItem = item
									$(".baseImgItemBox").css({
										"opacity": 0.5
									})
									$(".baseImgItemBox").eq(index).css({
										"opacity": 1
									})
									thas.echaItemShow=true
								}
							})
							
							
						})
					},
					outlineItem(val) {
						this.dataItem.forEach(item=>{
							if(val.title==item.title){
								this.outlinebodyTitleA=item.bodyTitle
								this.outlinebodyTitleItem=item.bodyItem
							}
						})
						
					},
					topText() {
						this.topTextShow = true
					},
					topTextshow() {
						this.topTextShow = false
						return false
					},
					topTextClick(val) {
						alert("点击了" + val)
						
					},
					courseItemClick(index) {
						if(index<5){
							window.open("./coursePage.html?id="+index);
						}else{
							// console.log(22)
							this.IcsWebSdkJs()
						}
					},
					contentEnter(index) {
						$('.synopsis_content_b').eq(index).animate({
							"top": "-1px"
						}, 200)
					},
					contentOut(index) {
						console.log(index)
						$('.synopsis_content_b').eq(index).animate({
							"top": "-444px"
						}, 200)
					},
					teamEnter(index) {
						console.log(index)
						$('.teamTopItem-boxFu').eq(index).animate({
							"top": "0"
						}, 200)
					},
					teamOut(index) {
						console.log(index)
						$('.teamTopItem-boxFu').eq(index).animate({
							"top": "400px"
						}, 200)
					},
					outlineTabboxDiv(item, index) {
						$(".box").css({
							"border-bottom": "10px solid #fff"
						}).find("span").css({
							"color": "#B0BDD0"
						})
						$(".box").eq(index).css({
							"border-bottom": "10px solid #3258E5",
						}).find("span").css({
							"color": "#3258E5"
						})
						console.log(item,index)
						this.outlineItem(item)
						this.courseItems.forEach((items,indexs) => {
								if (items.title==item.title) {
									items.img=items.iconA
								} else {
									items.img=items.iconB
								}
						})
						
					},
					
					IcsWebSdkJs(){
						
					}
				},
				mounted() {
					
					var system = {};
					 
					var p = navigator.platform;
					 
					console.log(p);
					 
					system.win = p.indexOf("Win") == 0;
					 
					system.mac = p.indexOf("Mac") == 0;
					 
					if (system.win || system.mac) {//如果是电脑
					 
						
					 
					} else { //如果是手机,
						this.uploadShow=false
						location.replace("https://www.hd512.com/mobile")
						return false
					 
					}
					
					
					
					
					console.log($(".code-msg"),"OAUS哦还afahdsofahof")
					$(document).scroll(function(){
						let scroll=$(document).scrollTop()
						if(scroll>100){
							$("#nav").css({
								"display":"flex",
							})
						}else{
							$("#nav").css({
								"display":"none",
							})
						}
						if(scroll<2570){
							$(".nav_box").css({
								"color":"#000",
								"background":"#fff"
							}).eq(0).css({
								"color":"#fff",
								"background":"linear-gradient(to left, rgba(132, 158, 255,.8), rgb(59, 98, 246))"
							})
						}
						if(scroll>2570 && scroll<5350){
							$(".nav_box").css({
								"color":"#000",
								"background":"#fff"
							}).eq(1).css({
								"color":"#fff",
								"background":"linear-gradient(to left, rgba(132, 158, 255,.8), rgb(59, 98, 246))"
							})
						}
						if(scroll>5350 && scroll<6490){
							$(".nav_box").css({
								"color":"#000",
								"background":"#fff"
							}).eq(2).css({
								"color":"#fff",
								"background":"linear-gradient(to left, rgba(132, 158, 255,.8), rgb(59, 98, 246))"
							})
						}
						if(scroll>6490 && scroll<7290){
							$(".nav_box").css({
								"color":"#000",
								"background":"#fff"
							}).eq(3).css({
								"color":"#fff",
								"background":"linear-gradient(to left, rgba(132, 158, 255,.8), rgb(59, 98, 246))"
							})
						}
						if(scroll>7190){
							$(".nav_box").css({
								"color":"#000",
								"background":"#fff"
							}).eq(4).css({
								"color":"#fff",
								"background":"linear-gradient(to left, rgba(132, 158, 255,.8), rgb(59, 98, 246))"
							})
						}
					})
					// 页面初始动画
					$('#upload').addClass('animated tada')
						let set=setInterval(function(){
						    $('#upload').addClass('tada');
							setTimeout(function(){
							    $('#upload').removeClass('tada');
							}, 1000)
						}, 2000)
					// 接口地址
					// 轮播图
					
					let carouse=this.url+"banners.php?id=5"
					axios.get(carouse).then(data => {
						if(data.status==200){
							this.srcImg=[]
							this.uploadShow=true
							console.log(this.uploadShow)
							clearInterval(set)
							let datas=data.data.imgUrls
							datas.forEach(item=>{
								this.srcImg.push(this.imgSrc+item)
							})
							// console.log(this.srcImg,"222222222222222222")
						}
					})
					// 师资
					let teacherUrl=this.url+"faculty.php"
					axios.get(teacherUrl).then(data => {
						// console.log(data.data,"资")
						let datas=data.data
						datas.forEach(item=>{
							item.img=this.imgSrc+item.img
						})
						// console.log(datas)
						this.teacherItem=datas
						this.swiper()
					})
					// 课程大纲
					let url=this.url+"course_center.php?id=all"
					axios.get(url).then(data=>{
						this.dataItem=data.data
						// 页面初始化是默认数据
						console.log(this.dataItem,"this.dataItem")
						this.dataItem.forEach(item=>{
							if(this.courseItems[0].title==item.title){
								this.outlinebodyTitleA=item.bodyTitle
								this.outlinebodyTitleItem=item.bodyItem
							}
						})
						
					})
					
					let thas = this
					if (document.body.clientWidth <= 1250) {
						this.textShow = false
						this.courseItemShow = false
						this.bannerNextshow = false
						this.teamTalentsShow = false

					}
					if (document.body.clientWidth <= 1300) {}
					window.onresize = function() {
						console.log(document.body.clientWidth)
						if (document.body.clientWidth <= 1200) {

						} else {

						}
						if (document.body.clientWidth <= 1250) {
							thas.teamTalentsShow = false
							thas.textShow = false
							thas.courseItemShow = false
							thas.bannerNextshow = false
						} else {
							thas.teamTalentsShow = true
							thas.textShow = true
							thas.courseItemShow = true
							thas.bannerNextshow = true
						}

					}
					this.outlineItem(1)
					this.base()
					this.baseItem()//请求后台接口基站数据
					this.dynamicItems()//新闻动态数据
					this.campusItem("学习环境")//校园环境
				},

			})