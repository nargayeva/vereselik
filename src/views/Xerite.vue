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

                <!-- Regions -->
                <select v-model="selectedRegion">
                    <optgroup label="Bakı">
                        <option
                                v-for="(datum, i) in [...notarius_data].filter(d => d.region)"
                                :value="datum"
                                :key="i"
                        >
                            {{datum.region}}
                        </option>
                    </optgroup>
                </select>

                <!-- Notariats -->
                <select
                        v-if="notariats.length"
                        class="js-example-basic-multiple"
                        v-model="selectedNotariat"
                >
                    <option
                            v-for="(datum, i) in notariats"
                            :value="datum"
                            :key="i"
                    >
                        {{datum.name}}
                    </option>
                </select>

            </div>
            <div class="col-md-8 col-12 map-container mb-5 googleMap">
                <g-map
                    :center="center"
                    :markers="notarius_data"
                />
            </div>
        </div>
    </div>
</template>

<script>
    import '../assets/css/index.css';
    import '../assets/css/xerite.css';
    import json from '../assets/data'

    import GMap from "../components/GMap";

    export default {
        name: "Xerite",
        components: {
            GMap
        },
        data() {
            return {
                center: {
                    lat: 40.348194,
                    lng: 49.835208
                },
                selectedRegion: null,
                selectedNotariat: null
            }
        },
        computed: {
            notarius_data() {
                return json;
            },
            notariats() {
                return this.selectedRegion ?
                    [...this.notarius_data].filter(d => d.region === this.selectedRegion.region) :
                    [];
            }
        },
        methods: {
            updateCenter(location) {
                this.center = location;
            }
        },
        watch: {
            selectedNotariat: {
                handler(notariat) {
                    if (notariat) {
                        this.updateCenter(notariat.loc);
                    }
                },
                deep: true
            }
        }
    }
</script>

<style scoped>

</style>
