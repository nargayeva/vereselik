<template>
  <div class="container mt-4">
    <div class="row">
      <div
        class="col-md-5 col-6 d-flex justify-content-end justify-content-md-start"
      >
        <router-link to="/"
          ><img
            :src="require('/public/images/edliyye - logo.png')"
            class="float-center float-sm-left align-self-center img-fluid logo"
        /></router-link>
        <div class="d-flex h-100">
          <span
            class="ml-4 justify-content-center align-self-center d-none d-sm-block name"
            >AZƏRBAYCAN RESPUBLİKASININ
            <span class="d-block">ƏDLİYYƏ NAZİRLİYİ</span></span
          >
        </div>
      </div>

      <div class="col-md-5 col-6">
        <router-link to="/"
          ><img
            :src="require('/public/images/notariat - logo.png')"
            class="float-center float-sm-left align-self-center img-fluid logo"
        /></router-link>
        <div class="d-flex h-100">
          <span
            class="ml-4 justify-content-center align-self-center d-none d-sm-block name"
            >AZƏRBAYCAN <span class="d-block">NOTARİAT PALATASI</span></span
          >
        </div>
      </div>

      <div
        class="col-2 d-none d-sm-flex justify-content-end align-self-start"
        id="languages" @click="toggleLanguage"
      >
        <span v-if="lang === 'az'" id="en">EN</span>
        <span v-else id="az">AZ</span>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Header",
        data() {
            return {
                lang: "az"
            }
        },
        methods: {
            toggleLanguage(){
                if(this.lang === "az"){ this.lang = "en" }
                else this.lang = "az"
            }
        }
    }

</script>

<style scoped>
</style>
