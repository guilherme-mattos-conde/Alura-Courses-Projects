<script lang="ts">
import type IReceita from '@/interfaces/IReceita';
import type { PropType } from 'vue';

export default {
    props: {
        receita: { type: Object as PropType<IReceita>, required: true }
    }
}
</script>

<template>
    <article class="receita">
        <img :src="`/public/imagens/receitas/${ receita.imagem }`" alt="Foto da receita" class="receita__imagem">
        <h2 class="paragrafo-lg receita__nome">{{ receita.nome }}</h2>
    </article>
</template>

<style>
    .receita {
    width: 19.5rem;
    border-radius: 1rem;
    background: var(--branco, #FFF);
    box-shadow: 4px 4px 10px 0px rgba(68, 68, 68, 0.05);
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    }

    .receita__imagem {
    width: 100%;
    height: 150px;
    margin: 0;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    }

    .receita__nome {
    text-align: center;
    font-weight: 700;
    margin: 1rem;
    }
</style>