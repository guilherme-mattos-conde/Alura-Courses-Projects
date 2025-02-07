<script lang="ts">
import { obterReceitas } from '@/http';
import CardReceita from './CardReceita.vue';
import type IReceita from '@/interfaces/IReceita';
import BotaoPrincipal from './BotaoPrincipal.vue';
import type { PropType } from 'vue';
import { comparaListas } from '@/operacoes/listas';

export default {
    props: {
        ingredientes: { type: Array as PropType<string[]>, required: true}
    },
    data() {
        return {
            receitas: [] as IReceita[]
        }
    },
    async created() {
        this.receitas = await obterReceitas();
        
        this.receitas = this.receitas.filter((receita) => {
            return comparaListas(receita.ingredientes, this.ingredientes)
        })
    },
    components: { CardReceita, BotaoPrincipal },
    emits: [ 'SelecionarIngredientes' ]
}
</script>

<template>
    <section class="mostrar-receitas">
        <h1 class="cabecalho titulo-receitas">Receitas</h1>
        <p class="paragrafo-lg resultados">Resultados encontrados: {{ receitas.length }}</p>

        <section v-if="receitas.length">
            <p class="paragrafo-lg instrucoes">Veja as opções de receitas que encontramos com os ingredientes que você tem por aí!</p>
            <ul class="receitas">
                <li v-for="receita in receitas" :key="receita.nome">
                    <CardReceita :receita="receita" />
                </li>
            </ul>
        </section>

        <section v-else>
            <p class="paragrafo-lg instrucoes">Ops, não encontramos resultados para sua combinação. Vamos tentar de novo?</p>
            <img class="imagem__sem-resultado" src="../../src/assets/images/sem-receitas.png" alt="">
        </section>
    </section>
    
    <BotaoPrincipal :texto="'Editar Lista'" @click="$emit('SelecionarIngredientes')" />
</template>

<style>
.mostrar-receitas {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.titulo-receitas {
    color: var(--verde-medio, #3D6D4A);
    display: block;
    margin-bottom: 1.5rem;
}

.resultados {
    margin-bottom: .5rem;
    color: var(--verde-medio, #3D6D4A); 
}

.instrucoes {
    text-align: center;
    margin-bottom: 2rem;
}

.imagem__sem-resultado {
    margin: 0 50%;
    transform: translateX(-50%);
}

.receitas {
    margin-bottom: 1rem;
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    flex-wrap: wrap;
}
</style>