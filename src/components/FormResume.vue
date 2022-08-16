<template>
  <form class="form_resume"  @submit.prevent="submit">
    <div class="container">
        <Dropdown class="dropdown" v-model="selectedType" :options="types" optionLabel="name" placeholder="Выберите"></Dropdown>
        <Textarea class="textarea" v-model="value" :autoResize="true" rows="10" cols="40" @keyup.enter="submit"></Textarea>
    </div>
    <Button label="Добавить" :disabled="!isValid" @click="submit"></Button>
  </form>
</template>

<script>
import Dropdown from 'primevue/dropdown';
import Textarea from 'primevue/textarea';
import Button from 'primevue/button';



export default {
    components: {Dropdown, Textarea, Button},
    emits: ['block-added'],
    data() {
	return {
		selectedType: '',
        value: '',
		types: [
			{name: 'Текст', name_block: 'Text'},
            {name: 'Заголовок', name_block: 'Title'},
			{name: 'Подзаголовок', name_block: 'Subtitle'},
            {name: 'Элемент списка', name_block: 'List'},
			{name: 'Аватар', name_block: 'Avatar'},
		  ]
	    }
    },
    methods: {
         submit() {
            this.$emit('block-added', {
            type: this.selectedType.name_block,
            value: this.value,
            })
            this.value = ''
            console.log(this.selectedType.name)


        }
    },
    computed: {
    isValid() {
      return this.value.length > 1
    }
  },

}
</script>

<style>
.form_resume{
    width:100%;
    display: flex;
    align-items:flex-start;
    flex-direction: column;
    padding:20px;
}
.container{
    display: flex;
    flex-direction: column;
}
.dropdown{
    margin-bottom: 20px;
    border: none !important;
}
.dropdown:not(.p-disabled).p-focus{
    box-shadow: none !important;
    border: none !important;
}
.textarea{
    margin-bottom: 20px !important;
    border: none !important;
    box-shadow: none !important;
}
.p-button-label{
    font-size: 18px ;
}
</style>


