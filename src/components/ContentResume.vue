<template>
    <div class="content">
      <ScrollPanel style="width: 100%; height: 550px">
       <div v-if="blocks.length">
        <component 
        v-for="block in blocks"
        :key="block.id"
        :is="block.type + 'Resume'"
        v-bind="{value: block.value}"
        ></component>
       </div>        
       <h1 v-else>Вы пока ничего не добавили</h1>
      </ScrollPanel>
    </div>
</template>

<script>
import ScrollPanel from 'primevue/scrollpanel';

import TitleResume from './elems/TitleResume.vue';
import AvatarResume from './elems/AvatarResume.vue';
import SubtitleResume from './elems/SubtitleResume.vue';
import ListResume from './elems/ListResume.vue';
import TextResume from './elems/TextResume.vue';


export default {
    components: { ScrollPanel, TitleResume, AvatarResume, SubtitleResume, ListResume, TextResume },
    props: ['blocks'],
}
</script>

