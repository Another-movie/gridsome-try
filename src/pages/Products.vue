<template>
  <Layout>
    <h1>Products</h1> 
    <div v-for="edge in $page.allContentfulProduct.edges" :key="edge.node.id">
      <h2 style="margin-bottom:2rem;">{{ edge.node.name }}</h2>
      <span>{{edge.node.price}}</span>
      <g-image :src="edge.node.image.file.url" style="width: 100%; height: 300px; object-fit: contain" :alt="edge.node.image.title"/>

   </div>
  </Layout>
</template>

<page-query>
{
  allContentfulProduct {
    edges {
      node {
        id
        name
        date
        price
        image {
          title
         	file {
            url
          }
        }
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Products',
    meta: [
      { charset: 'utf-8' },
      { name: 'author', content: "Another movie" },
      { name: 'description', content: 'gridsome' },
      { name: 'keywords', content: 'product'}
    ]
  }
}
</script>