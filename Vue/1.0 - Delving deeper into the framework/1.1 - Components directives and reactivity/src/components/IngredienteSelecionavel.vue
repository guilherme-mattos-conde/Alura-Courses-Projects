<script lang="ts">
import Tag from './Tag.vue';

export default {
    props: {
        ingrediente: { type: String, required: true }
    },
    data() {
        return {
            selecionado: false
        }
    },
    methods: {
        aoClicar() {
            this.selecionado = !this.selecionado;

            if(this.selecionado) {
                this.$emit('adicionarIngrediente', this.ingrediente);
            } else {
                this.$emit('removerIngrediente', this.ingrediente);
            }
        }
    },
    emits: ['adicionarIngrediente', 'removerIngrediente'],
    components: { Tag }
}
</script>

<template>
    <button
        class="ingrediente"
        @click="aoClicar"
    >
        <Tag :texto="ingrediente" :ativa="selecionado" />
    </button>
</template>

<style scoped>
.ingrediente {
    cursor: pointer;
}
</style>
