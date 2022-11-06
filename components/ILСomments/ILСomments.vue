<template>
    <div class="il-comments">
        <div v-if="!comments"></div>
        <div v-else v-for="(comment, idx) in comments" :key="idx" class="il-comments__comment">
            <i-l-comment :comment="comment" />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'
import { format } from 'date-fns'
import { CommentData } from '@/types/note'
import ILComment from '~/components/ILСomments/IlComment/ILComment.vue'

export default defineComponent({
    components: {
        ILComment
    },
    setup() {
        const comments = ref<CommentData[]>([
            {
                text: 'Привет Привет Привет <br/> Привет Привет Привет ',
                name: 'Никита',
                date: 1666494322514,
                id: 0,
            },
            {
                text: 'Привет Привет Привет <br/> Привет Привет Привет ',
                name: 'Никита',
                date: 1666494322514,
                id: 1,
            },
        ])

        const commentDate = function (date: number | Date) {
            if (!date) {
                return
            }

            return format(date, 'dd.MM.yyyy')
        }

        return {
            comments,
            commentDate,
        }
    },
})
</script>
