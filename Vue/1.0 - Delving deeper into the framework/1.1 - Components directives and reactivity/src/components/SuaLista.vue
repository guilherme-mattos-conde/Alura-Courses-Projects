<script lang="ts">
import Tag from './Tag.vue';

export default {
    props: {
        ingredientes: { type: Array as () => string[], required: true }
    },
    components: { Tag }
}
</script>

<template>
    <section>
        <span class="subtitulo-lg sua-lista-texto">
        </span>

        <ul v-if="ingredientes.length" class="ingredientes-sua-lista">
            <li v-for="(ingrediente, index) in ingredientes" :key="index">
                <Tag :texto="ingrediente" :ativa="true" />
            </li>
        </ul>

        <p v-else class="paragrafo lista-vazia">
            <img src="../assets/images/icones/lista-vazia.svg" alt="Ícone de pesquisa">
            Sua lista está vazia, selecione itens para iniciar.
        </p>
    </section>
</template>
