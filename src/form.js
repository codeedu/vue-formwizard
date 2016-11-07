import Step1from from './step1';
import Step2from from './step2';

export default {
	components: {
		'step1': Step1from,
		'step2': Step2from
	},
	template: `
	<div v-if="data.view == 'step1'">
	   <step1 :data="data"></step1>
	</div>
	<div v-if="data.view == 'step2'">
	   <step2 :data="data"></step2>
	</div>
	`,
	data(){
		return {
			data: {
			  form:{
			    nome: "Fulano da Silva",
			    endereco: "Rua X",
			    telefone: "(31) 3131-3131",
			    email: "fulano@dasilva.com.br"
			  },
			  view: 'step1'
		   }
		}
	},
	methods: {
		next(){
			switch(this.data.view){
				case 'step1':
					this.data.view = 'step2'
					break;
			}
		}
	}
}