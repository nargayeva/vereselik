<template>
    <!-- Banner -->
    <div id="banner" class="mt-3 mt-sm-5">
        <div class="container">
            <div class="row">
                <div class="col-6">
					<span class="banner-title">
						Sizə ən yaxın <br> notariat ofisləri
					</span>
                </div>
            </div>
        </div>
    </div>

    <!-- Map -->
    <div class="container mt-5">
        <div class="row d-flex justify-content-between">
            <div class="col-md-4 col-12 d-flex flex-column mb-5">

<!--                <multiselect-->
<!--                        v-model="value"-->
<!--                        :options="options"-->
<!--                        custom-label="Test"-->
<!--                        placeholder="Select one"-->
<!--                        label="name"-->
<!--                        track-by="name"-->
<!--                />-->
                <select class="js-example-basic-multiple" name="states[]" multiple="multiple">
                    <optgroup label="Bakı">
                        <option value="city_bineqedi">Binəqədi</option>
                        <option value="city_narimanov">Nərimanov</option>
                        <option value="city_nasimi">Nəsimi</option>
                        <option value="city_nizami">Nizami</option>
                        <option value="city_garadagh">Qaradağ</option>
                        <option value="city_sabunchu">Sabunçu</option>

                        <option value="city_sebail">Səbail</option>
                        <option value="city_suraxani">Suraxanı</option>
                        <option value="city_xatai">Xətai</option>
                        <option value="city_xazar">Xəzər</option>
                        <option value="city_yasamal">Yasamal</option>
                    </optgroup>

                    <optgroup label="Regionlar">
                        <option value="city_absheron">Abşeron</option>
                        <option value="city_astara">Astara</option>
                        <option value="city_aghcabedi">Ağcabədi</option>
                        <option value="city_aghdam">Ağdam</option>
                        <option value="city_aghdash">Ağdaş</option>
                        <option value="city_aghstafa">Ağstafa</option>

                        <option value="city_aghsu">Ağsu</option>
                        <option value="city_balaken">Balakən</option>
                        <option value="city_beylegan">Beyləqan</option>
                        <option value="city_bilesuvar">Biləsuvar</option>
                        <option value="city_berde">Bərdə</option>
                        <option value="city_celilabad">Cəlilabad</option>

                        <option value="city_dashkesen">Daşkəsən</option>
                        <option value="city_fuzuli">Füzuli</option>
                        <option value="city_goranboy">Goranboy</option>
                        <option value="city_goygol">Göygöl</option>
                        <option value="city_goychay">Göyçay</option>
                        <option value="city_gedebey">Gədəbəy</option>

                        <option value="city_gence"></option>
                        <option value="city_aghsu">Ağsu</option>
                        <option value="city_balaken">Balakən</option>
                        <option value="city_beylegan">Beyləqan</option>
                        <option value="city_bilesuvar">Biləsuvar</option>

                        <option value="city_haciqabul">Hacıqabul</option>
                        <option value="city_kurdemir">Kürdəmir</option>
                        <option value="city_lerik">Lerik</option>
                        <option value="city_lenkeran">Lənkəran</option>
                        <option value="city_masalli">Masallı</option>

                        <option value="city_mingechevir">Mingəçevir</option>
                        <option value="city_naftalan">Naftalan</option>
                        <option value="city_neftchala">Neftçala</option>
                        <option value="city_oghuz">Oğuz</option>
                        <option value="city_gax">Qax</option>
                        <option value="city_gazax">Qazax</option>

                        <option value="city_gobustan">Qobustan</option>
                        <option value="city_gusar">Qusar</option>
                        <option value="city_guba">Quba</option>
                        <option value="city_gebele">Qəbələ</option>
                        <option value="city_saatli">Saatlı</option>
                        <option value="city_sabirabad">Sabirabad</option>

                        <option value="city_salyan">Salyan</option>
                        <option value="city_samux">Samux</option>
                        <option value="city_sumgayit">Sumqayıt</option>
                        <option value="city_siyezen">Siyəzən</option>
                        <option value="city_tovuz">Tovuz</option>
                        <option value="city_terter">Tərtər</option>

                        <option value="city_ucar">Ucar</option>
                        <option value="city_xachmaz">Xaçmaz</option>
                        <option value="city_xizi">Xızı</option>
                        <option value="city_yardimli">Yardımlı</option>
                        <option value="city_yevlax">Yevlax</option>
                        <option value="city_zagatala">Zaqatala</option>

                        <option value="city_zerdab">Zərdab</option>
                        <option value="city_imishli">İmişli</option>
                        <option value="city_ismayilli">İsmayıllı</option>
                        <option value="city_shabran">Şabran</option>
                        <option value="city_shamaxi">Şamaxı</option>
                        <option value="city_shirvan">Şirvan</option>

                        <option value="city_sheki">Şəki</option>
                        <option value="city_shemkir">Şəmkir</option>


                    </optgroup>
                </select>

            </div>
            <g-map
                    class="col-md-8 col-12 z-depth-1-half map-container mb-5 googleMap"
                    :disableUI="false"
                    :zoom="12"
                    mapType="roadmap"
                    :center="{ lat: 38.44975, lng: 48.87516 }">
            </g-map>
        </div>
    </div>
</template>

<script>
    import '../assets/css/index.css'
    import '../assets/css/xerite.css';
    import GMap from "../components/GMap";

    export default {
        name: "Xerite",
        components: {
            GMap
        },
        data () {
            return {
                value: { name: 'Vue.js', language: 'JavaScript' },
                options: [
                    { name: 'Vue.js', language: 'JavaScript' },
                    { name: 'Rails', language: 'Ruby' },
                    { name: 'Sinatra', language: 'Ruby' },
                    { name: 'Laravel', language: 'PHP' },
                    { name: 'Phoenix', language: 'Elixir' }
                ]
            }
        },
    }
</script>

<style scoped>

</style>
