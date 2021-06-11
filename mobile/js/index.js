		var vm = new Vue({
			el: '#box',
			data: {
				// 路径
				url:'http://www.hd512.com/admin/php/',
				// 图片路径
				urlImg:'http://www.hd512.com/admin/php/images/',
				// 隐藏的列表
				banner_list:'true',
				banner_list_items:['课程中心','师资力量','课程大纲','辉达精神','关于辉达'],
				// 相关信息
				crotchety_item:[
					{
						img:'./images/send%20inquiry.png',
						con:'学费价格'
					},
					{
					img:'./images/confirm.png',
						con:'开班信息'
					},
					{
					img:'./images/operation.png',
						con:'入学攻略'
					},
					{
					img:'./images/image-text.png',
						con:'学员信息'
					}
				],
				// 课程中心
				course_item:[
					{
						img:'./images/Java大数据插图.png',
						con:'Java大数据'
					},
					{
					img:'./images/web前端插图.png',
						con:'Web前端'
					},
					{
					img:'./images/UIUE设计插图.png',
						con:'UIUE设计'
					},
					{
					img:'./images/软件测试插图.png',
						con:'软件测试'
					}
				],
				// 项目特色
				outline_feature_item:[
					{
						img:"./images/icon-rgb_全行业.png",
						con:'全行业',
						content1:'20+热门行业覆盖',
						content2:'领跑行业'
					},
					{
						img:"./images/icon-rgb_高标准.png",
						con:'高标准',
						content1:'大型研发项目',
						content2:'大厂深度共建'
					},
					{
						img:"./images/icon-rgb_真场景.png",
						con:'真场景',
						content1:'完整商业模式',
						content2:'真实业务模型'
					},
					{
						img:"./images/icon-rgb_深技术.png",
						con:'深技术',
						content1:'深度技术刨析',
						content2:'贴合市场主流'
					},
					{
						img:"./images/icon-rgb_快更新.png",
						con:'快更新',
						content1:'热门项目月更新',
						content2:'前沿技术周更新'
					},
					{
						img:"./images/icon-rgb_严保障.png",
						con:'严保障',
						content1:'12项评审流程',
						content2:'4项验收标准'
					}
				],
				// 教研信息
				research_con_info_item:[
					{
						con1:'22',
						con_1:'位',
						con2:'硬核讲师',
						con3:'技术领域专精'
					},
					{
						con1:'3',
						con_1:'%',
						con2:'录取率',
						con3:'严选专职讲师'
					},
					{
						con1:'5',
						con_1:'大',
						con2:'独创教学法',
						con3:'轻松理解技术难点'
					},
					{
						con1:'10',
						con_1:'年',
						con2:'教学经验',
						con3:'授课经验丰富'
					}
				],
				// 学员
				student_imgs_item:[
					{
						con:'一份面试可用的作品',
						img:'images/data.png'
					},
					{
						con:'教学资料 笔记资源赠送',
						img:'images/design.png'
					},
					{
						con:'学长学姐 就业经验分享',
						img:'images/code.png'
					},
					{
						con:'主题讲座 定期分享',
						img:'images/delivery.png'
					},
					{
						con:'线下学员 分享会',
						img:'images/we-are-hiring.png'
					},
					{
						con:'大学式教学 公开课',
						img:'images/no-messages.png'
					},
					{
						con:'及时获取 课程内容更新',
						img:'images/success.png'
					},
					{
						con:'企业内推 就业机会',
						img:'images/product-launch.png'
					},
					{
						con:'高质量 人脉圈子',
						img:'images/error.png'
					},
					{
						con:'就业后工作问题 跟踪解答',
						img:'images/searching.png'
					},
					{
						con:'九大基站 就业帮助服务',
						img:'images/design.png'
					},
					{
						con:'点击   查看更多...',
						img:'images/design.png'
					}
				],
				// 校园环境
				campus_imgs_items:[],
				//新闻动态
				dynamic_info_bottom_item:[],
				dynamic_info_img:'',
				dynamic_info_top_con_item:'',
				// 课程大纲
				outline:[],
				outline_nav_title:'',
				outline_nav_cons_s:[],
				outline_img:['./images/UI设计icon.png','./images/java-script.png','./images/web前端icon.png','./images/软件测试icon.png'],
				// 师资力量
				research_lun:[]
			},
			mounted() {	
				this.dynamics()
				this.environment()
				this.courseCenter()
				this.faculty()
			},
			methods: {
				bannerBg(){
					this.banner_list=!this.banner_list
				},
				//校园环境
				environment(){
					axios.get(this.url+'environment.php',{
						params:{name:'all'}
					}).then(res=>{
						var arr=res.data
						this.campus_imgs_items=arr.filter((arr,index)=>{
							return index<4
						})
						this.campus_imgs_items=this.campus_imgs_items.filter((arr,index)=>{
							arr['img']=arr['img'].filter((arrr,index)=>{
								return index<4
							})
							return arr;
						})
						// console.log(this.campus_imgs_items)
					})
				},
				//辉达动态
				dynamics(){
					axios.get(this.url+'dynamic.php').then(res=>{
						// console.log(res)
						this.dynamic_info_bottom_item=res.data
						this.dynamic_info_img=res.data[0].img
						this.dynamic_info_top_con_item=res.data[0].mesArr
					})
				},
				// 点击辉达动态
				dynamicBtn(index){
					// console.log(index)
					this.dynamic_info_img=this.dynamic_info_bottom_item[index].img
					this.dynamic_info_top_con_item=this.dynamic_info_bottom_item[index].mesArr
				},
				// 课程大纲
				courseCenter(){
					axios.get(this.url+'course_center.php',{
						params:{id:'all'}
					}).then(res=>{
						this.outline=res.data
						this.outline.forEach(arr=>{
							arr['isActive']=false
						})
						this.outline_nav_title=res.data[0].bodyTitle
						this.outline_nav_cons_s=res.data[0].bodyItem
						this.outline[0].isActive=true
						// console.log(this.outline)
					})
				},
				//点击课程大纲
				outlineNavs(index){
					this.outline.forEach(arr=>{
						arr['isActive']=false
					})
					this.outline[index].isActive=true
					this.outline_nav_title=this.outline[index].bodyTitle
					this.outline_nav_cons_s=this.outline[index].bodyItem
				},
				//师资力量
				faculty(){
					axios.get(this.url+'faculty.php').then(res=>{
						console.log(res)
						this.research_lun=res.data
					})
				}
			}
		})
		var swiper = new Swiper('.swiper-container', {
			pagination: '.swiper-pagination',
			slidesPerView: 2,
			paginationClickable: true,
			spaceBetween: 30,
			freeMode: true
		});
			  var swiper = new Swiper('.swiper-container1', {
			        pagination: '.swiper-pagination',
			        slidesPerView: 'auto',
			        paginationClickable: true,
			        spaceBetween: 10
			    });