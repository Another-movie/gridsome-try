<template>
  <Layout>  
    <h1>Blogs</h1>
    <article v-for="edge in $page.allPost.edges" :key="edge.node.id">
      <h2>{{ edge.node.title }}</h2>
      <g-image :src="edge.node.cover_image" style="width: 100%"/>
      <p>{{ edge.node.excerpt }}</p>
      <p>Post date {{ edge.node.date }} * {{ edge.node.timeToRead }} min read</p>
      <div>
        <g-link style="padding: .25em" v-for="tag in edge.node.tags" :key="tag.id" :to="tag.path">#{{tag.id}}</g-link>
      </div>
      <g-link :to="edge.node.path">Read post</g-link> 
    </article>
    <div style="text-align:center; width: 100%;"> 
      <Pager :info="$page.allPost.pageInfo" linkClass="pager"/>
    </div>
  </Layout>
</template>

<page-query>
query ($page: Int) {
  allPost (perPage: 2, page: $page) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        excerpt
        date (format: "MMMM Do, YYYY")
        tags {
          id
          path
        }
        timeToRead
        path
        cover_image (width: 1000, height: 300, fit: cover)
      }
    }
  }
}

</page-query>

<script>
import  {Pager} from 'gridsome'
export default {
  components: {
    Pager
  }
}
</script>

<style scoped>
  article {
    background: rgb(240, 235, 235);
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
    border-radius: 8px;
    padding: 24px;
    margin: 10px 0;
  }
  .pager {
    text-align: center;
    font-size: 1.5rem;
    letter-spacing: 0.5px;
    padding: 40px 20px;
  }
</style>