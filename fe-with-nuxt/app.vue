<script lang="ts" setup>
import gql from "graphql-tag";
const query = gql`
  query getDashboard {
    getDashboard {
      id
      name
    }
  }
`;
// const variables = { limit: 5 };
const { data } = await useAsyncQuery(query);
</script>

<template>
  <div>
    <NuxtWelcome />
  </div>
  <pre v-if="data">{{ data }}</pre>
</template>
