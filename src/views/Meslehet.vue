<template>
    <!-- Banner -->
    <div id="banner" class="mt-3 mt-sm-5">
        <div class="container">
            <div class="row">
                <div class="col-2">
					<span class="banner-title">
						İnteraktiv məsləhət
					</span>
                </div>
            </div>
        </div>
    </div>

    <!-- Form -->
    <div class="container mt-5 mb-5">
        <div class="row d-flex justify-content-between">
            <div class="col-md-4 d-flex flex-column">

                <span class="contact contact-header">Əlaqə:</span>

                <div class="d-inline mt-3 mb-3">
                    <i class="fas fa-phone-alt contact"></i>
                    <span class="contact">+994 12 404 42 28</span>
                </div>

                <span class="contact contact-header mt-3">Ünvan:</span>

                <div class="d-inline mt-3 mb-5">
                    <i class="fas fa-map contact"></i>
                    <span class="contact">Bakı şəhəri, AZ1073, İnşaatçılar prospekti 1</span>
                </div>

            </div>


            <div class="col-md-6 col-12">
                <span class="contact-header">Müraciət forması:</span>
                <form class="mt-3">
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <input type="text" class="form-control needsvalidation" id="fullname"
                                   placeholder="Ad və soyad">
                            <div class="invalid-feedback">
                                Zəhmət olmasa, adınızı və soyadınızı düzgün daxil edin.
                            </div>
                        </div>
                        <div class="form-group col-md-6">
                            <input type="text" class="form-control needsvalidation" id="fin" placeholder="FİN">
                            <div class="invalid-feedback">
                                Zəhmət olmasa, düzgün FIN daxil edin.
                            </div>
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <input type="email" class="form-control needsvalidation" id="email" placeholder="E-poçt">
                            <div class="invalid-feedback">
                                Zəhmət olmasa, düzgün email daxil edin.
                            </div>
                            <div class="valid-feedback">
                                Doğrudur.
                            </div>
                        </div>
                        <div class="form-group col-md-6">
                            <input type="tel" class="form-control needsvalidation" id="phone" placeholder="Telefon">
                            <div class="invalid-feedback">
                                Zəhmət olmasa, düzgün telefon nömrəsi daxil edin.
                            </div>
                            <div id="valid-feedback">

                            </div>
                        </div>
                    </div>

                    <div class="input-group mb-3">
                        <textarea class="form-control mw-5" aria-label="With textarea" placeholder="Sual"></textarea>
                    </div>

                    <span class="flex-button-send" id="send-button">GÖNDƏR</span>
                </form>
            </div>
        </div>
    </div>

</template>

<script>
    import '../assets/css/index.css'
    import '../assets/css/meslehet.css';

    export default {
        name: "Meslehet"
    }
</script>

<style scoped>

</style>
