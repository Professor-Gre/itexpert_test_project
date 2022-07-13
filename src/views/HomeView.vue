<template>
  <div class="hove-view">
    <section>
      <div class="nav-block">
        <base-button
          :class="{
            'disabled': isLoading
          }"
          :text="getButtonText"
          @click="loadHandler"
        />
      </div>
      <Transition name="fade" mode="out-in">
        <div
          class="loader-block"
          v-if="isLoading"
        >
          <loader-element/>
        </div>
        <div
          class="content-block"
          v-else
        >
          <content-element
            v-for="element in GET_SORTEDDATA"
            :key="element.userId"
            :userId="element.userId"
            :completed="element.completed"
            :uncompleted="element.uncompleted"
            :titles="element.titles"
          />
        </div>
      </Transition>
    </section>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import BaseButton from '@/components/ui/BaseButton'
import LoaderElement from '@/components/elements/LoaderElement'
import ContentElement from '@/components/elements/ContentElement'
export default {
  name: 'HomeView',
  components: {
    BaseButton,
    LoaderElement,
    ContentElement
  },
  data () {
    return {
      isLoading: false
    }
  },
  computed: {
    ...mapGetters({
      GET_DATA: 'data/GET_DATA',
      GET_SORTEDDATA: 'data/GET_SORTEDDATA'
    }),
    getButtonText () {
      if (this.GET_DATA.length) {
        return 'Перезагрузить данные'
      } else {
        return 'Загрузить данные'
      }
    }
  },
  methods: {
    ...mapActions({
      fetchGetData: 'data/fetchGetData',
      sortData: 'data/sortData'
    }),
    loadHandler () {
      if (!this.isLoading) {
        Promise.allSettled([
          this.fetchGetData(),
          this.isLoading = true
        ]).then(() => {
          this.sortData()
          this.isLoading = false
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .hove-view {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding-top: 120px;
    padding-bottom: 50px;
  }
  .nav-block {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
  }
  .loader-block {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 60px;
  }
  .content-block {
    width: 100%;
    display: grid;
    grid-template-columns: 380px 380px 380px;
    gap: 30px;
    margin-top: 60px;
    @media screen and (max-width: 1300px) {
      grid-template-columns: 300px 300px;
      gap: 20px;
    }
    @media screen and (max-width: 680px) {
      grid-template-columns: 300px;
    }
  }
  .fade-enter-active {
    animation: fade-in 0.15s;
  }
  .fade-leave-active {
    animation: fade-out 0.15s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  .fade-enter-to, .fade-leave {
    opacity: 1;
  }

  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes fade-out {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
</style>
