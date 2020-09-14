<template>
	<div class="function-box">
		<template v-for="(item, index) in fun_data">
			<van-cell-group :border="item.border" :key="index">
				<van-cell class="cont_box">
					<template #title>
						<div class="title">
							<van-icon :name="item.icon" size="20" :color="item.color" />
							<span>{{ item.title }}</span>
						</div>
					</template>
					<template #default>
						<div class="default">
							<span>{{ item.value }}</span>
							<van-icon name="arrow" color="#BBBBBB" size="10" />
						</div>
					</template>
				</van-cell>
			</van-cell-group>
		</template>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				fun_data: [
					{
						title: '账单',
						icon: 'balance-list',
						color: '#1A8EFF',
						value: '',
						border: true
					},
					{
						title: '银行卡',
						icon: 'card',
						color: '#FFC903',
						value: '3',
						border: false
					},
					{
						title: '券包',
						icon: 'coupon',
						color: '#FF761D',
						value: '',
						border: true
					},
					{
						title: '活动',
						icon: 'point-gift',
						color: '#FF4D4D',
						value: '',
						border: false
					}
				]
			}
		}
	}
</script>

<style lang="less" scoped>
	.function-box {
		height: 100%;
		width: 100%;
	
		.cont_box {
			height: 50px;
			width: auto;
	
			.title {
				height: 100%;
				width: auto;
				display: flex;
				align-items: center;
	
				span {
					font-size: 17px;
					font-weight: 800;
					margin-left: 10px;
					margin-bottom: 4px;
				}
			}
	
			.default {
				height: 100%;
				width: auto;
				display: flex;
				align-items: center;
				justify-content: flex-end;
				font-size: 10px;
	
				span {
					margin-top: 0.28px;
					margin-right: 5px;
				}
			}
		}
	}
</style>
