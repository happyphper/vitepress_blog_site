<template>
  <ParentLayout>
    <template #home-footer>
      <section class="footer">
        <div class="container">
          <span class="text">MIT Licensed | Copyright © 2021-present WangMaMa</span>
          <div class="row">
            <img src="/images/police.png" alt="备案">
            <a class="text" href="https://beian.miit.gov.cn/">{{ $frontmatter.record }}</a>
          </div>
        </div>
      </section>
    </template>
  </ParentLayout>
</template>

<script>
import DefaultTheme from 'vitepress/theme'
const { Layout: ParentLayout } = DefaultTheme

export default {
  name: "Layout",
  components: {
    ParentLayout,
  },
};
</script>

<style scoped>
.footer {
  margin: 0 auto;
  max-width: 960px;
  padding: 3rem 1.5rem 3.25rem;
}

@media (min-width: 720px) {
  .footer {
    padding: 0 1.5rem;
  }
}

.container {
  padding: 1rem;
}

.home-hero + .footer .container,
.home-features + .footer .container,
.home-content + .footer .container {
  border-top: 1px solid var(--c-divider);
}
.row {
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
}

@media (min-width: 420px) {
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}

.text {
  margin: 0;
  text-align: center;
  line-height: 1.4;
  font-size: 0.9rem;
  color: var(--c-text-light);
}
</style>
