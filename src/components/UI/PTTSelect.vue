<template>
  <div class="ptt__select">
    <slot></slot>
    <div class="ptt__select-input" :class="{ 'border': !props.borders }">
      <input type="text" v-model="searchString" :placeholder="props.placeholder">
      <img id="open-select" src="@/assets/images/icons/select-arrow.svg" alt="Select"
        @click="selectVisible = !selectVisible">
    </div>
    <div class="ptt__select-list" :class="{ 'top': displayPosition, 'bottom': !displayPosition }" v-if="isSelectVisible"
      v-click-outside="handleClick">
      <div class="ptt__select-list-container">
        <transition-group name="list">
          <PTTSelectItem v-for="user in users" :user="user" :key="user.id" @click="handleUserClick" />
        </transition-group>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, Ref, computed, watch } from 'vue'
import { AxiosError, AxiosResponse } from 'axios'
import PTTSelectItem from './PTTSelectItem.vue'
import { User } from '../../common/types'
import userRequests from '../../api/users'

const props = defineProps(['placeholder', 'borders'])
const emit = defineEmits(['userSelect', 'userRemove'])
const searchString = ref('');
const displayPosition = ref(true);
const prevEmail: Ref<string | undefined> = ref('');
const selectVisible = ref(false);
const users: Ref<User[]> = ref([]);
const user: Ref<User | undefined> = ref();

const loadUsers = () => {
  return userRequests.getUsers(searchString.value).then(({ data: response }: AxiosResponse) => {
    users.value = response.data;
  }).catch((error: AxiosError) => {
    console.log(error);
  })
}

loadUsers();

const isUserValid = computed(() => {
  return users.value.filter((u: User) => { return u.email === searchString.value })
})

const isSelectVisible = computed(() => {
  return (searchString.value.length > 0 && isUserValid.value.length !== 1) || selectVisible.value;
})

const handleClick = (e: any) => {
  if (e.target.id !== 'open-select') {
    searchString.value = ''
    selectVisible.value = false
  }
}

const handleUserClick = (u: User) => {
  searchString.value = u.email
  selectVisible.value = false
  user.value = u
}

watch(searchString, (newSearchString, oldSearchString) => {
  if (prevEmail.value === oldSearchString && oldSearchString !== '') {
    emit('userRemove', prevEmail.value);
  }
  searchString.value = newSearchString.replace(' ', '_');
  loadUsers();
  if (isUserValid.value.length === 1) {
    prevEmail.value = user.value?.email;
    emit('userSelect', user.value)
  }
})
</script>

<style lang="scss" scoped>
@use '@/assets/scss/style';

.ptt__select {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: .25rem;

  &-input {
    min-width: 20.5rem;
    width: 100%;
    padding: 0 .5rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    & input {
      width: calc(100% - 1rem);
      padding: .5rem 0;
      border: none;
      background: none;
      color: style.$text-color;
      font-size: .8125rem;
      font-weight: 600;

      &::placeholder {
        color: rgba($color: style.$text-color, $alpha: .5)
      }
    }
  }

  &-list {
    position: absolute;
    z-index: 2;
    top: calc(100% + .5rem);
    left: 5%;
    background: style.$background-color;
    border: 1px solid rgba($color: style.$text-color, $alpha: .3);
    border-radius: .5rem;
    overflow: hidden;

    &-container {
      max-height: 8rem;
      overflow-y: scroll;
    }
  }
}

.border {
  border: 1px solid rgba($color: style.$text-color, $alpha: .3);
  border-radius: .5rem;

  & input {
    &::placeholder {
      color: rgba($color: style.$text-color, $alpha: .3)
    }
  }
}
</style>