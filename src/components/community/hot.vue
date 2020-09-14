<template>
	<div class="host_box">
		<template v-for="index in 4">
			<div class="cont_box" :key="index">
				<div class="user_box">
					<div class="user_left">
						<van-image class="user_img" radius="3" src="https://img.yzcdn.cn/vant/cat.jpeg" />
						<span>龙行天下虎</span>
					</div>
					<div class="user_right"><span>+关注</span></div>
				</div>
				<div class="cont_box">
					<div class="title_box"><span>收评│有什么我们就说什么关于A股</span></div>
					<div class="description_box">
						<div class="text_box">先来看看今天行情的情况，周四两市高开低走，盘面上白酒、保险、消费、地产等板块上涨大萨达所大奥所大所多</div>
						<img src="https://img.yzcdn.cn/vant/cat.jpeg" alt="" />
					</div>
				</div>
				<div class="bottom_box">
					<div class="left_box"><span>1小时前</span></div>
					<div class="right_box">
						<van-icon name="ellipsis" size="20" color="#ADADAD" />
						<div class="like_box">
							<van-icon name="good-job-o" size="20" />
							<span>278</span>
						</div>
						<div class="comment_box">
							<van-icon name="comment-o" size="20" />
							<span>175</span>
						</div>
					</div>
				</div>
			</div>
		</template>
	</div>
</template>

<script>
	
</script>

<style lang="less" scoped>
	.host_box {
		height: auto;
		width: 100%;
		margin-top: 1px;
		background-color: #f5f4f9;
	
		.cont_box {
			height: 235px;
			width: 100%;
			background-color: #fff;
			display: flex;
			flex-direction: column;
			align-items: center;
			margin-bottom: 10px;
	
			.user_box {
				height: 40px;
				width: 90%;
				margin-top: 15px;
				margin-bottom: 10px;
				display: flex;
				align-items: center;
				justify-content: space-between;
	
				.user_left {
					height: auto;
					width: auto;
					display: flex;
					align-items: center;
	
					.user_img {
						height: 25px;
						width: 25px;
						margin-right: 10px;
					}
	
					span {
						font-size: 15px;
						font-weight: 800;
					}
				}
	
				.user_right {
					height: auto;
					width: auto;
					display: flex;
					align-items: center;
	
					span {
						display: block;
						height: 25px;
						width: 65px;
						text-align: center;
						line-height: 27px;
						border-radius: 3px;
						font-size: 10px;
						color: #118ee8;
						background-color: #ecf7fd;
					}
				}
			}
	
			.cont_box {
				height: auto;
				width: 90%;
	
				.title_box {
					height: auto;
					width: 100%;
					font-weight: 600;
					margin-bottom: 15px;
	
					span {
						display: block;
						height: auto;
						width: 100%;
						font-size: 20px;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
						text-align: left;
					}
				}
	
				.description_box {
					height: 70px;
					width: 100%;
					display: flex;
					justify-content: space-between;
	
					.text_box {
						height: 100%;
						width: 210px;
						font-size: 15px;
						text-align: left;
						display: -webkit-box;
						-webkit-box-orient: vertical;
						-webkit-line-clamp: 3;
						overflow: hidden;
						line-height: 22px;
					}
	
					img {
						height: 100%;
						width: 120px;
						border-radius: 5px;
					}
				}
			}
	
			.bottom_box {
				height: 40px;
				width: 90%;
				// background-color: #a26cee;
				display: flex;
				align-items: center;
				justify-content: space-between;
	
				.left_box {
					color: #999999;
					font-size: 10px;
				}
	
				.right_box {
					height: 100%;
					width: auto;
					display: flex;
					align-items: center;
	
					.like_box {
						height: 100%;
						width: auto;
						font-size: 13px;
						display: flex;
						align-items: center;
						margin-left: 15px;
						color: #000;
					}
	
					.comment_box {
						height: 100%;
						width: auto;
						font-size: 13px;
						display: flex;
						align-items: center;
						color: #000;
						margin-left: 10px;
					}
				}
			}
		}
	}
</style>
