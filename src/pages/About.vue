<template>
  <Layout>
    <h1>About us</h1>
  </Layout>
</template>

<static-query>
{
  metaData {
    siteName
    siteDescription
  }
}
</static-query>

<script>
export default {
  metaInfo() {
      return {
      title: 'About us',
      meta: [
        { name: 'description', content: this.$static.metaData.siteDescription}
      ]
    }
  }
}
</script>
