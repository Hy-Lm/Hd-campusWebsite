		var vm = new Vue({
			el: '#box',
			data: {
				// 隐藏的列表
				banner_list:'true',
				banner_list_items:['课程中心','师资力量','课程大纲','辉达精神','关于辉达']
			},
			mounted() {},
			methods: {
				bannerBg(){
					this.banner_list=!this.banner_list
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