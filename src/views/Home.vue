<template>
    <!-- Banner -->
    <div id="banner" class="mt-3 mt-sm-5">
        <div class="container">
            <div class="row">
                <div class="col-10 col-md-6">
					<span class="banner-title">
						Hərbi qulluqçularla bağlı vərəsəlik
						şəhadətnamələrinin verilməsi
					</span>
                </div>
            </div>
        </div>
    </div>

    <!-- Boxes -->
    <div class="container mt-5">
        <div class="row">
            <div class="col-12 mb-3">
                <span class="title">Əsas xidmətlər</span>
            </div>
        </div>

        <div class="row mb-4 box-container justify-content-md-between justify-content-center">
            <div class="col-md-3 col-9 box text-center mb-5" id="sual">
                <span class="flex-title">Sual-Cavab</span>
                <span class="flex-text">Vərəsəlik şəhadətnaməsinin verilməsinə dair ən çox verilən sualların cavabları
					ilə bu bölmədə tanış ola bilərsiniz. </span>
                <router-link to="sual-cavab" class="flex-button">ƏTRAFLI</router-link>
            </div>

            <div class="col-md-3 col-9 box text-center mb-5" id="meslehet">
                <span class="flex-title">İnteraktiv məsləhət</span>
                <span class="flex-text">Vərəsəlik şəhadətnaməsinin verilməsinə dair suallarınızı bu xidmət vasitəsilə
					Ədliyyə Nazirliyinə ünvanlaya bilərsiniz.</span>
                <router-link to="meslehet" class="flex-button" href="pages/meslehet.html">ƏTRAFLI</router-link>
            </div>

            <div class="col-md-3 col-9 box text-center mb-5 mb-sm-0" id="xidmet">
                <span class="flex-title">Elektron xidmət</span>
                <span class="flex-text">Vərəsəlik işinin açılıb-açılmaması barədə məlumat əldə edilməsi.</span>
                <a class="flex-button" target="_blank" href="https://exidmet.justice.gov.az:8284/Notariat/InheritanceInfo">ƏTRAFLI</a>
            </div>
        </div>

        <div class="row mb-4 box-container justify-content-center">
            <div class="col-md-3 col-9 box text-center mb-5 mr-md-5 ml-sm-0" id="ofis">
                <span class="flex-title">Notariat ofisləri</span>
                <span class="flex-text">Ölkə üzrə sizə ən yaxın notariat ofislərini buradan müəyyən edə
					bilərsiniz.</span>
                <router-link to="xerite" class="flex-button" href="pages/xerite.html">ƏTRAFLI</router-link>
            </div>

            <div class="col-md-3 col-9 box text-center mb-5 ml-md-5 ml-sm-0" id="herbi">
                <span class="flex-title">Vərəsəlik şəhadətnamələri</span>
                <span class="flex-text">Həlak olmuş hərbi qulluqçuların vərəsələrinə sığorta ödənişlərinin həyata
					keçirilməsi üçün vərəsəlik şəhadətnamələrinin verilməsi barədə.</span>
                <router-link to="herbi" class="flex-button" href="pages/herbi.html">ƏTRAFLI</router-link>
            </div>
        </div>
    </div>

</template>

<script>
    import '../assets/css/index.css'
    import '../assets/css/main.css'

    export default {
        name: "Home"
    }
</script>

<style scoped>

</style>
