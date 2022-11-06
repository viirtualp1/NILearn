<template>
    <v-card v-if="comment">
        <v-card-title>{{ comment.name }}</v-card-title>
        <v-card-subtitle>{{ comment.date }}</v-card-subtitle>

        <v-card-text>
            {{ comment.text }}
        </v-card-text>
    </v-card>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'
import { CommentData } from '@/types/note'

export default defineComponent({
    props: {
        comment: {
            type: Object as PropType<CommentData>,
            default: () => { },
        },
    },
})
</script>