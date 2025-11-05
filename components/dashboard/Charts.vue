<template>
  <Line :data="data" :options="options" />
</template>

<script setup>
const yearlyData = [
  { name: "Jan", value: 148 },
  { name: "Feb", value: 100 },
  { name: "Marc", value: 205 },
  { name: "April", value: 110 },
  { name: "May", value: 165 },
  { name: "Jun", value: 145 },
  { name: "July", value: 180 },
  { name: "Agust", value: 156 },
  { name: "Sept", value: 148 },
  { name: "Oct", value: 220 },
  { name: "Now", value: 180 },
  { name: "Dec", value: 245 },
];

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "vue-chartjs";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
);

const data = {
  labels: yearlyData.map((elm) => elm.name),
  datasets: [
    {
      label: "Cubic interpolation (monotone)",
      backgroundColor: "#6440FB",
      data: yearlyData.map((elm) => elm.value),
      fill: "#CE5A25",
      cubicInterpolationMode: "monotone",
      tension: 0.4,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
};
</script>

<style lang="scss" scoped></style>
