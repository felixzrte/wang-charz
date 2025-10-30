<template>
  <v-app class="print-layout">
    <nuxt />
  </v-app>
</template>

<script>
export default {
  components: { },
  head() {
    return {
      link: [
      ],
    };
  },
  mounted() {
    // Force light theme for printing
    this.$vuetify.theme.dark = false;
  },
  data() {
    return {};
  },
  computed: {
  },
  methods: {
  },
};
</script>

<style>
/* Force white background and black text for printing */
.print-layout.v-application {
  background-color: #ffffff !important;
  color: #000000 !important;
}

.print-layout .v-sheet,
.print-layout .v-card {
  background-color: #ffffff !important;
  color: #000000 !important;
}

.print-layout .v-data-table {
  background-color: #ffffff !important;
  color: #000000 !important;
}

.print-layout .v-simple-table {
  background-color: #ffffff !important;
  color: #000000 !important;
}

.print-layout table tbody tr td,
.print-layout table thead tr th {
  color: #000000 !important;
}

.print-layout .v-chip {
  background-color: #f5f5f5 !important;
  color: #000000 !important;
}

@media print {
  body, .v-application {
    background-color: #ffffff !important;
  }
  
  .v-sheet, .v-card, .v-data-table {
    background-color: #ffffff !important;
    color: #000000 !important;
  }
}
</style>
