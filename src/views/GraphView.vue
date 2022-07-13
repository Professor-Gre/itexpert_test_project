<template>
  <div class="graph-view">
    <section>
      <div
        v-if="!GET_SORTEDDATA.length"
        class="loader-block"
      >
        <span class="content-element__text">
          Вы еще не загрузили данные.
        </span>
        <span class="content-element__text">
          Пожалуйста, вернитесь на главную страницу и загрузите данные.
        </span>
      </div>
      <div
        v-else
        class="graph-block"
      >
        <bar-chart
          :chart-data="chartData"
        />
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import BarChart from '@/components/elements/BarChart'
export default {
  name: 'GraphView',
  components: {
    BarChart
  },
  computed: {
    ...mapGetters({
      GET_SORTEDDATA: 'data/GET_SORTEDDATA'
    }),
    chartData () {
      const chartData = {
        labels: [],
        datasets: [
          {
            label: 'Успешно',
            backgroundColor: '#7986F8',
            data: []
          },
          {
            label: 'Всего',
            backgroundColor: '#f87979',
            data: []
          }
        ]
      }
      this.GET_SORTEDDATA.forEach(dataPart => {
        chartData.labels.push(`User${dataPart.userId}`)
        chartData.datasets[0].data.push(dataPart.completed)
        chartData.datasets[1].data.push(dataPart.completed + dataPart.uncompleted)
      })
      return chartData
    }
  }
}
</script>

<style lang="scss" scoped>
  .graph-view {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding-top: 120px;
    padding-bottom: 50px;
  }
</style>
