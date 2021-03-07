<template>
    <div class="footer">
        <div class="container h-100 pt-5 pb-5">
            <div class="row h-100">
                <div class="col-md-4 d-flex flex-column">
                    <span id="footer-title">Faydalı linklər</span>
                    <a href="https://www.justice.gov.az/idareler/71" target="_blank" class="footer-text pt-3">Qeydiyyat və notariat baş idarəsi</a>
                    <a href="https://aznotary.az/az" target="_blank" class="footer-text pt-2">Azərbaycan Notariat Palatası</a>
                    <a href=# class="footer-text pt-2">Notarius olmaq istəyən şəxslər üçün</a>
                </div>

                <hr class="d-sm-block d-md-none" />

                <div class="col-md-4 d-flex flex-column">

                    <span class="footer-text pb-2">Qaynar Xətt:</span>

                    <div class="d-inline">
                        <i class="fas fa-phone-alt footer-icons mr-1"></i>
                        <span class="footer-text">+994 12 539 76 75</span>
                    </div>

                    <span class="footer-text pt-4 pb-2">Ünvan:</span>

                    <div class="d-inline">
                        <i class="fas fa-map footer-icons mr-1"></i>
                        <span class="footer-text">Bakı şəhəri, AZ1073, İnşaatçılar prospekti 1</span>
                    </div>

                </div>

                <hr class="d-sm-block d-md-none" />

                <div class="col-md-4 d-flex flex-column align-items-md-center align-items-sm-start">

                    <img :src="require('/public/images/edliyye - logo.png')" class="img-fluid d-flex mb-3" id="logo" alt="">

                    <div class="d-inline">
                        <i class="fab fa-instagram footer-icons"></i>
                        <i class="fab fa-facebook footer-icons ml-3"></i>
                        <i class="fab fa-twitter footer-icons ml-3"></i>
                        <i class="fab fa-youtube footer-icons ml-3"></i>
                    </div>

                </div>
            </div>
        </div>

        <div class="container text-center">
            <small>Bütün hüquqlar qorunur | 2021</small>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped>

</style>
