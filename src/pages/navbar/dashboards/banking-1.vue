<script setup lang="ts">
import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Banking 1')

useHead({
  title: 'Banking 1 - Navbar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <BankingDashboardV1 />
  </div>
</template>
