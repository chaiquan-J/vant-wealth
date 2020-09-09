<template>
	<div class="discovery">
		<div class="discovery_body">
			<div class="top_bg">
			</div>
			<div class="top_box">
				<div class="search_box"></div>
				<div class="top_grid">
					<van-grid square :border="false" :column-num="5">
						<template v-for="(item,index) in top_grid">
							<van-grid-item>
								<div class="gtid_cont" :key="index">
									<img :src="item.src" :alt="item.title">
									<span>{{item.title}}</span>
								</div>
							</van-grid-item>
						</template>
					</van-grid>
				</div>
				<div class="bottom_box">
					<div class="roll_box">
						<van-swipe class="roll-swipe" :vertical="true" :show-indicators="false" :autoplay="4000" indicator-color="white">
							<template v-for="(item,index) in roll_box">
								<van-swipe-item :key="index">
									<div class="item_box">
										<div class="left_box">
											<span>A股</span>
											<span>|</span>
											<span>{{item.title}}</span>
											<span>{{item.lnum}}</span>
										</div>
										<div class="right_box">
											<span>{{item.rnum}}</span>
											<span>{{item.rnum2}}%</span>
											<van-tag color="#F5F5F5" text-color="#999999">{{item.type}}</van-tag>
										</div>
									</div>
								</van-swipe-item>
							</template>
						</van-swipe>
					</div>
					<div class="hotspot_box">
						<van-tag color="#F05636" text-color="#FFF">标签</van-tag>
						<template v-for="(item,index) in hotspot">
							<span class="hotspot_text" :key="index">#{{item}}</span>
						</template>
					</div>
				</div>
			</div>
			<div class="tab_one">
				<van-tabs v-model="tab_one_active" swipeable line-width="12px" color="#2772FF" title-active-size="20px"
				 title-active-color="#2772FF" title-inactive-color="#000">
					<template v-for="(item,key) in tab_one">
						<van-tab :title="item" :key="key">
							<div class="cont_box">
								
							</div>
						</van-tab>
					</template>
				</van-tabs>
			</div>
			<div class="wealth_train"></div>
		</div>
		<tab-bar></tab-bar>
	</div>
</template>

<script>
	import TabBar from '@/components/Tabbar.vue'
	export default {
		data() {
			return {
				top_grid: [{
						src: 'https://s1.ax1x.com/2020/09/08/wMSXFK.png',
						title: '余额宝'
					},
					{
						src: 'https://s1.ax1x.com/2020/09/08/wMSXFK.png',
						title: '余额宝'
					},
					{
						src: 'https://s1.ax1x.com/2020/09/08/wMSXFK.png',
						title: '余额宝'
					},
					{
						src: 'https://s1.ax1x.com/2020/09/08/wMSXFK.png',
						title: '余额宝'
					},
					{
						src: 'https://s1.ax1x.com/2020/09/08/wMSXFK.png',
						title: '余额宝'
					},
					{
						src: 'https://s1.ax1x.com/2020/09/08/wMSXFK.png',
						title: '余额宝'
					},
					{
						src: 'https://s1.ax1x.com/2020/09/08/wMSXFK.png',
						title: '余额宝'
					},
					{
						src: 'https://s1.ax1x.com/2020/09/08/wMSXFK.png',
						title: '余额宝'
					},
					{
						src: 'https://s1.ax1x.com/2020/09/08/wMSXFK.png',
						title: '余额宝'
					}
				],
				roll_box: [{
						title: '创业板指',
						lnum: 2540.28,
						rnum: -108.40,
						rnum2: -4.05,
						type: '交易中'
					},
					{
						title: '上证指数',
						lnum: 3272.61,
						rnum: -43.65,
						rnum2: -1.34,
						type: '交易中'
					},
					{
						title: '深证指数',
						lnum: 12964.90,
						rnum: -328.46,
						rnum2: -2.47,
						type: '交易中'
					}
				],
				hotspot: ['创业板暴跌', '3股停牌检查', '苹果发布会'],
				tab_one_active: 0,
				tab_one: [
					'投资顺风车',
					'攒点金子',
					'稳健理财',
					'精选组合',
					'进攻优选',
					'保险优选'
				]
			}
		},
		methods: {

		},
		components: {
			TabBar
		}
	}
</script>

<style lang="less" scoped>
	.discovery {
		height: 100%;
		width: 100%;
		background-color: #FDFEFE;

		.discovery_body {
			height: auto;
			width: 100%;
			display: flex;
			flex-direction: column;
			align-items: center;
			position: relative;

			.top_bg {
				width: 100%;
				height: 150px;
				position: absolute;
				top: 0;
				z-index: 0;
				background-color: #2591FD;
			}

			.top_box {
				height: auto;
				width: 345px;
				z-index: 999;
				display: flex;
				flex-direction: column;
				margin-bottom: 5px;

				.search_box {
					height: 100px;
					width: 100%;
					// background-color: #28ee28;
				}

				.top_grid {
					height: 155px;
					width: 100%;
					background-color: #FFFFFF;
					border-radius: 5px;
					box-shadow: 0px 0px 10px #d9dadd;
					overflow: hidden;
					margin-bottom: 15px;

					.gtid_cont {
						height: auto;
						display: flex;
						flex-direction: column;
						align-items: center;

						img {
							height: 25px;
							width: 25px;
							margin-bottom: 15px;
						}

						span {
							font-size: 13px;
						}
					}
				}

				.bottom_box {
					height: 80px;
					width: 100%;
					border-radius: 5px;
					background-color: #FFFFFF;
					box-shadow: 0px 0px 10px #d9dadd;
					display: flex;
					flex-direction: column;
					overflow: hidden;

					.roll_box {
						flex: 1;
						width: 100%;
						overflow: hidden;

						.roll-swipe {
							height: 100%;
							width: 100%;

							.item_box {
								height: 100%;
								width: 100%;
								display: flex;
								justify-content: space-between;
								align-items: center;

								.left_box {
									height: 20px;
									width: auto;
									margin-left: 15px;
									display: flex;
									align-items: center;
									font-size: 10px;

									span:nth-child(1) {
										font-weight: 600;
									}

									span:nth-child(2) {
										font-weight: 600;
										font-size: 10px;
										margin-left: 5px;
										margin-right: 5px;
									}

									span:nth-child(3) {
										font-weight: 600;
									}

									span:nth-child(4) {
										margin-left: 10px;
										color: #2CB3A7;
										font-weight: 500;
									}
								}

								.right_box {
									height: 20px;
									width: auto;
									margin-right: 8px;
									display: flex;
									align-items: center;
									justify-content: space-between;
									font-size: 10px;

									span:nth-child(1) {
										color: #2CB3A7;
										margin-right: 10px;
										font-weight: 500;
									}

									span:nth-child(2) {
										color: #2CB3A7;
										margin-right: 5px;
										font-weight: 500;
									}
								}
							}
						}

					}

					.hotspot_box {
						flex: 1;
						width: 100%;
						background-color: #F9F9F9;
						display: flex;
						justify-content: space-around;
						align-items: center;
						font-size: 10px;

						span:nth-child(1) {
							margin-left: 5px;
						}

						.hotspot_text {
							width: 75px;
							color: #189CFF;
							overflow: hidden;
							text-overflow: ellipsis;
							white-space: nowrap;
						}
					}
				}
			}

			.tab_one {
				height: 260px;
				width: 100%;
				background-color: #eee;

				.title {
					font-size: 15px;
				}

				.cont_box {
					height: 180px;
					width: 340px;
					background-color: #cb6c5f;
					margin: 0 auto;
					margin-top: 15px;
					border-radius: 5px;
				}
			}
			
			.wealth_train{
				height: 200px;
				width: 100%;
				background-color: #ee1573;
			}
		}
	}
</style>
