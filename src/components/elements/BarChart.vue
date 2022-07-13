<template>
  <Bar
    :chart-options="chartOptions"
    :chart-data="chartData"
    :chart-id="chartId"
    :dataset-id-key="datasetIdKey"
    :width="width"
    :height="height"
  />
</template>

<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
  props: {
    chartData: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false
      },
      chartId: 'bar-chart',
      datasetIdKey: 'label',
      width: 400,
      height: 400
    }
  }
}
</script>
