export default {
	template: `
	<input type="text" v-model="data.form.telefone"/>
	<input type="text" v-model="data.form.email"/>
	<br/>
	Nome: {{data.form.nome}} <br/>
    Endereço: {{data.form.endereco}}
	`,
	props:['data']
}