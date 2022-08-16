<template>
  <TabMenu :model="items"></TabMenu>
</template>

<script>
import TabMenu from 'primevue/tabmenu';

export default {
    components: {TabMenu},
    data() {
		return {
			items: [
                {label: 'Создать', icon: 'pi pi-fw pi-plus'},
                {label: 'Calendar', icon: 'pi pi-fw pi-calendar'},
                {label: 'Edit', icon: 'pi pi-fw pi-pencil'},
                {label: 'Documentation', icon: 'pi pi-fw pi-file'},
                {label: 'Settings', icon: 'pi pi-fw pi-cog'}
            ]
		}
	}
}
</script>

<style>
.p-tabmenu-nav{
  border-bottom: none !important;
}
.p-tabmenu{
  background-color: #1e1e1e;
}
.p-menuitem-text{
  font-weight: 600;
}
</style>