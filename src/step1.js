export default {
	template: `
	<input type="text" v-model="data.form.nome"/>
	<input type="text" v-model="data.form.endereco"/>
	<button type="button" @click="next">Next</button>
	`,
	props:['data'],
	methods: {
		next(){
			this.$parent.next();
		}
	}
}