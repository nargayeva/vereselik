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
                <form class="mt-3" @submit.prevent="onSubmit">
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <input
                                    type="text"
                                    class="form-control needsvalidation"
                                    id="fullname"
                                    placeholder="Ad və soyad"
                                    v-model="name"
                            >
                            <div v-if="!nameValidated" class="error">
                                Zəhmət olmasa, adınızı və soyadınızı düzgün daxil edin.
                            </div>
                        </div>
                        <div class="form-group col-md-6">
                            <input
                                    type="text"
                                    class="form-control needsvalidation"
                                    id="fin"
                                    placeholder="FİN"
                                    v-model="fin"
                            >
                            <div v-if="!finValidated" class="error">
                                Zəhmət olmasa, düzgün FIN daxil edin.
                            </div>
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <input type="email" class="form-control needsvalidation" id="email" placeholder="E-poçt" v-model="email">
                            <div v-if="!emailValidated" class="error">
                                Zəhmət olmasa, düzgün email daxil edin.
                            </div>
                            <div class="valid-feedback" />
                        </div>
                        <div class="form-group col-md-6">
                            <input type="tel" class="form-control needsvalidation" id="phone" placeholder="Telefon" v-model="phone">
                            <div v-if="!phoneValidated" class="error">
                                Zəhmət olmasa, düzgün telefon nömrəsi daxil edin.
                            </div>
                            <div id="valid-feedback" />
                        </div>
                    </div>

                    <div class="input-group mb-3">
                        <textarea class="form-control mw-5" aria-label="With textarea" placeholder="Sual" v-model="question" />
                    </div>

                    <button class="flex-button-send border-0" id="send-button">GÖNDƏR</button>
                </form>
            </div>
        </div>
    </div>

</template>

<script>
    import '../assets/css/index.css'
    import '../assets/css/meslehet.css';

    export default {
        name: "Meslehet",
        data() {
            return {
                name: null,
                fin: null,
                email: null,
                phone: null,
                question: null
            }
        },
        computed: {
            nameValidated() {
                if (this.name === null) {
                    return true;
                }

                const name = this.name.trim();
                const rawParts = name.split(/[ ,]+/);
                const validatedParts = rawParts.filter(p => p.trim());

                return validatedParts.length >= 2;
            },
            finValidated() {
                if (this.fin === null) {
                    return true;
                }

                const fin = this.fin.trim();
                return !(fin.length !== 7 || !fin.match(/^[A-Za-z0-9]+$/));
            },
            emailValidated() {
                if (this.email === null) {
                    return true;
                }

                const email = this.email.trim();
                return email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
            },
            phoneValidated() {
                if (this.phone === null) {
                    return true;
                }

                const phone = this.phone.trim();
                return phone.match(/^\+(994)(50|51|55|70|77|71|99)\d{7}$/);
            }
        },
        methods: {
            onSubmit() {
                let newline = '%0D%0A';

                const to = 'someone@yoursite.com';
                const subject = 'Salam';
                const body = `${this.question}${newline}${newline}${newline}Ad Soyad: ${this.name}${newline}Fin: ${this.fin}${newline}Email: ${this.email}${newline}Phone number: ${this.phone}`;

                if (this.name && this.fin && this.email && this.phone && this.question &&
                    this.nameValidated && this.finValidated && this.phoneValidated && this.emailValidated) {
                    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
                }
            }
        }
    }
</script>

<style scoped>
    .error {
        width: 100%;
        margin-top: 0.25rem;
        font-size: 80%;
        color: #dc3545;
    }
</style>
