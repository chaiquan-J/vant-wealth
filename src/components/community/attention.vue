<template>
	<div class="attention_box">
		<div class="cont-box">
			<img src="../../assets/logo.png" alt="" />
			<span>你还没有关注的人</span>
			<span>赶紧去社区找找牛人吧！</span>
		</div>
	</div>
</template>

<script>
</script>

<style lang="less" scoped>
	.attention_box{
		height: 425px;
		width: 100%;
		background-color: #FAFAFA;
		
		.cont-box{
			height: 150px;
			width: 150px;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: space-around;
			font-size: 10px;
			color: #B4B4B4;
			margin: 0 auto;
			
			img{
				height: 70px;
				width: 70px;
			}
		}
	}
</style>
