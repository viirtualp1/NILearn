<template>
  <div class="il-auth-form">
    <v-card>
      <v-card-title>Вход</v-card-title>
      <v-divider />

      <v-card-text>
        <v-form :readonly="isLoading">
          <v-row>
            <template v-if="isFirstAuthStep">
              <v-col cols="12">
                <v-text-field
                  v-model="user.email"
                  type="email"
                  label="Email"
                  outlined
                  hide-details="auto"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="user.password"
                  type="password"
                  label="Пароль"
                  outlined
                  hide-details="auto"
                ></v-text-field>
              </v-col>
            </template>
            <template v-else>
              <v-col cols="12">
                <v-text-field
                  v-model="user.fullName"
                  type="text"
                  label="Полное имя"
                  outlined
                  hide-details="auto"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="user.school"
                  type="text"
                  label="Школа"
                  outlined
                  hide-details="auto"
                ></v-text-field>
              </v-col>
            </template>
          </v-row>
        </v-form>
      </v-card-text>

      <v-card-actions>
        <v-col cols="12">
          <v-btn
            v-if="!isFirstAuthStep"
            :loading="isLoading"
            color="success"
            @click="auth"
          >
            Войти
          </v-btn>

          <v-btn
            :color="isFirstAuthStep ? 'success' : 'primary'"
            @click="nextAuthStep"
          >
            {{ isFirstAuthStep ? 'Далее' : 'Назад' }}
          </v-btn>
          <v-btn icon @click="isShowAlert = !isShowAlert">
            <v-icon>mdi-information-outline</v-icon>
          </v-btn>

          <v-alert v-if="isShowAlert" class="mt-3" type="info">
            Не волнуйтесь, если вы впервые на сайте, вы будете автоматически
            зарегистрированы после заполнения формы
          </v-alert>
        </v-col>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  ref,
  useRouter,
  useStore,
  PropType,
} from '@nuxtjs/composition-api'
import { UserType } from '~/types/user'
import { signUp, getPureUser } from '@/services/auth'

export default defineComponent({
  props: {
    userType: {
      type: String as PropType<UserType>,
      default: UserType.STUDENT,
      required: true,
    },
  },

  setup(props) {
    const router = useRouter()
    const store = useStore()

    const user = reactive({ ...getPureUser(), type: props.userType })
    const isFirstAuthStep = ref(true)
    const isShowAlert = ref(true)
    const isLoading = ref(false)

    function nextAuthStep() {
      isFirstAuthStep.value = !isFirstAuthStep.value
    }

    async function auth() {
      isLoading.value = true

      try {
        await signUp(user)
        await store.dispatch('main/setNewUser', user)
        localStorage.setItem('user', JSON.stringify(user))

        router.push('/')
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error(err)
      } finally {
        isLoading.value = false
      }
    }

    return {
      isFirstAuthStep,
      isLoading,
      isShowAlert,
      user,
      nextAuthStep,
      auth,
    }
  },
})
</script>

<style lang="scss" src="./AuthForm.scss"></style>
