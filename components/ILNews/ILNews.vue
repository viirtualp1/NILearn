<template>
  <div class="il-news">
    <v-card v-for="article in articles" :key="article.id" class="mx-auto mb-6" max-width="560px">
      <v-card-title>{{ article.title }}</v-card-title>
      <v-card-subtitle>
        {{ article.author }} - {{ articleDate(article.date) }}
      </v-card-subtitle>

      <v-card-text>
        <div v-html="article.text"></div>
      </v-card-text>
    </v-card>

    <ILComments />

  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'
import { format } from 'date-fns'
import { ArticleData } from '@/types/article'
import ILComments from '@/components/ILСomments/ILСomments.vue'

export default defineComponent({
  components: {
    ILComments
  },
  setup() {
    const articles = ref<ArticleData[]>([
      {
        title: 'Сколько лет?',
        text: 'Привет Привет Привет <br/> Привет Привет Привет ',
        author: 'Никита',
        rating: '4.5',
        date: 1666494322514,
        id: 0,
      },
      {
        title: 'Сколько лет?',
        text: 'Привет Привет Привет <br/> Привет Привет Привет ',
        author: 'Никита',
        rating: '4.5',
        date: 1666494322514,
        id: 1,
      },
    ])

    const articleDate = function (date: number | Date) {
      if (!date) {
        return
      }

      return format(date, 'dd.MM.yyyy')
    }

    return {
      articles,
      articleDate,
    }
  },
})
</script>
