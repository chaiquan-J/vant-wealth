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
					<van-swipe class="my-swipe" width="300" height="200" :loop="false" indicator-color="#1678FF">
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
					</van-swipe>
				</div>
			</div>
			<div class="tab_two">
				<van-tabs
					sticky
					v-model="tab_two_active"
					swipeable
					line-width="12px"
					color="#2772FF"
					title-active-size="20px"
					title-active-color="#2772FF"
					title-inactive-color="#000"
					animated
				>
					<van-tab title="快讯"><flash></flash></van-tab>
					<van-tab title="热点"><hotspot></hotspot></van-tab>
					<van-tab title="问答"><questions></questions></van-tab>
					<van-tab title="基金"><funds></funds></van-tab>
					<van-tab title="行情"><market></market></van-tab>
				</van-tabs>
			</div>
		</div>
		<tab-bar></tab-bar>
	</div>
</template>

<script>
import TabBar from '@/components/Tabbar.vue';
import DiscTabOne from '@/components/discovery/disc_tabone.vue';
import Hotspot from '@/components/discovery/hotspot.vue';
import Questions from '@/components/discovery/questions.vue';
import Funds from '@/components/discovery/funds.vue';
import Market from '@/components/discovery/market.vue';
import Flash from '@/components/discovery/flash.vue';

export default {
	data() {
		return {
			top_grid: [
				{
					src: 'https://s1.ax1x.com/2020/09/12/wdu1iQ.png',
					title: '余额宝'
				},
				{
					src: 'https://s1.ax1x.com/2020/09/12/wdtyqJ.png',
					title: '理财'
				},
				{
					src: 'https://s1.ax1x.com/2020/09/12/wduKZ8.png',
					title: '黄金'
				},
				{
					src: 'https://s1.ax1x.com/2020/09/12/wduVxI.png',
					title: '基金'
				},
				{
					src: 'https://s1.ax1x.com/2020/09/12/wduMdS.png',
					title: '尊享'
				},
				{
					src: 'https://s1.ax1x.com/2020/09/12/wduERA.png',
					title: '股票'
				},
				{
					src: 'https://s1.ax1x.com/2020/09/12/wdumsP.png',
					title: '财富号'
				},
				{
					src: 'https://s1.ax1x.com/2020/09/12/wdtcZ9.png',
					title: '年金险'
				},
				{
					src: 'https://s1.ax1x.com/2020/09/12/wduQIg.png',
					title: '帮你投'
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
			// 第二个标签栏起始页
			tab_two_active: 0,
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
		DiscTabOne,
		Hotspot,
		Questions,
		Funds,
		Market,
		Flash
	}
};
</script>

<style lang="less">
@import url(../common/less/vuestyle.less);
</style>
<style lang="less" scoped>
@import url(../common/discovery/discovery.less);
</style>
