<template>
	<div style="height: 1000px;">
		<el-steps direction="vertical" :active="1">
			<el-step title="Vue.js" description="这是一段很长很长很长的描述性文字"></el-step>
			<el-step title="JavaScript"></el-step>
      <el-step title="HTML/CSS"></el-step>
		</el-steps>
	</div>
</template>

<script>
export default {
	name: "",
	props: [""],
	data() {
		return {};
	},
	methods: {}
};
</script>

<style scoped>
</style>