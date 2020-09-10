<template>
	<div class="discovery">
		<div class="discovery_body">
			<div class="top_bg"></div>
			<div class="top_box">
				<div class="search_box"></div>
				<div class="top_grid">
					<van-grid square :border="false" :column-num="5">
						<template v-for="(item, index) in top_grid">
							<van-grid-item>
								<div class="gtid_cont" :key="index">
									<img :src="item.src" :alt="item.title" />
									<span>{{ item.title }}</span>
								</div>
							</van-grid-item>
						</template>
					</van-grid>
				</div>
				<div class="bottom_box">
					<div class="roll_box">
						<van-swipe class="roll-swipe" :vertical="true" :touchable="false" :show-indicators="false" :autoplay="4000" indicator-color="white">
							<template v-for="(item, index) in roll_box">
								<van-swipe-item :key="index">
									<div class="item_box">
										<div class="left_box">
											<span>A股</span>
											<span>|</span>
											<span>{{ item.title }}</span>
											<span>{{ item.lnum }}</span>
										</div>
										<div class="right_box">
											<span>{{ item.rnum }}</span>
											<span>{{ item.rnum2 }}%</span>
											<van-tag color="#F5F5F5" text-color="#999999">{{ item.type }}</van-tag>
										</div>
									</div>
								</van-swipe-item>
							</template>
						</van-swipe>
					</div>
					<div class="hotspot_box">
						<van-tag color="#F05636" text-color="#FFF">标签</van-tag>
						<template v-for="(item, index) in hotspot">
							<span class="hotspot_text" :key="index">#{{ item }}</span>
						</template>
					</div>
				</div>
			</div>
			<div class="tab_one"><disc-tab-one></disc-tab-one></div>
			<div class="wealth_train">
				<div class="title_box">
					<span>财富直通车</span>
					<span>最近使用</span>
				</div>
				<div class="wealth_swiper">
					<van-swipe class="my-swipe" width="300" :loop="false" indicator-color="white">
						<template v-for="index in 4">
							<van-swipe-item>
								<div class="item_cont" :key="index">
									<div class="title_box">
										<div class="text_icon">
											<img src="../assets/bnt.png" alt="" />
											<span>帮你投</span>
										</div>
										<van-icon name="arrow" size="10px" color="#A3A8AC" />
									</div>
									<div class="cont_box">
										<div class="cont_left">
											<span>人人可享的顶级投顾服务来了</span>
											<span>省心理财交给我</span>
											<div class="btn">匹配专属策略</div>
										</div>
										<div class="cont_right"><img src="../assets/bnt-2.png" alt="" /></div>
									</div>
								</div>
							</van-swipe-item>
						</template>
						<!-- <van-swipe-item><div class="item_cont"></div></van-swipe-item>
						<van-swipe-item><div class="item_cont"></div></van-swipe-item>
						<van-swipe-item><div class="item_cont"></div></van-swipe-item> -->
					</van-swipe>
				</div>
			</div>
			<div class="tab_two">
				<van-sticky>
					<van-tabs
						v-model="tab_two_active"
						swipeable
						line-width="12px"
						color="#2772FF"
						title-active-size="20px"
						title-active-color="#2772FF"
						title-inactive-color="#000"
					>
						<van-tab title="快讯">快讯</van-tab>
						<van-tab title="热点">热点</van-tab>
						<van-tab title="问答">问答</van-tab>
						<van-tab title="基金">基金</van-tab>
						<van-tab title="行情">行情</van-tab>
					</van-tabs>
				</van-sticky>
			</div>
		</div>
		<tab-bar></tab-bar>
	</div>
</template>

<script>
import TabBar from '@/components/Tabbar.vue';
import DiscTabOne from '@/components/disc_tabone.vue';
export default {
	data() {
		return {
			top_grid: [
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
				},
				{
					src: 'https://s1.ax1x.com/2020/09/08/wMSXFK.png',
					title: '余额宝'
				}
			],
			roll_box: [
				{
					title: '创业板指',
					lnum: 2540.28,
					rnum: -108.4,
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
					lnum: 12964.9,
					rnum: -328.46,
					rnum2: -2.47,
					type: '交易中'
				}
			],
			hotspot: ['创业板暴跌', '3股停牌检查', '苹果发布会'],
			tab_one_active: 0,
			tab_one: ['投资顺风车', '攒点金子', '稳健理财', '精选组合', '进攻优选', '保险优选'],
			value: 4,
			tab_two_active: 1,
			current: 0
		};
	},
	methods: {
		onChange(index) {
			this.current = index;
		}
	},
	components: {
		TabBar,
		DiscTabOne
	}
};
</script>

<style lang="less">
@import url(../common/less/vuestyle.less);
</style>
<style lang="less" scoped>
@import url(../common/less/discovery.less);
</style>
