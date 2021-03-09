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
            <div class="col-md-4 col-12 d-flex flex-column mb-3">
                <tree-select v-if="notarius_data"
                             v-model="selectedRegion"
                             option-key="name"
                             :search-keys="['name', 'region']"
                             value-key="region"
                             value-format="object"
                             :options="[...notarius_data].filter((v,i,a) => a.findIndex(t => (t.region === v.region)) === i)
"
                />

                <tree-select v-if="selectedRegion"
                             v-model="selectedNotariat"
                             option-key="name"
                             :search-keys="['name', 'region']"
                             value-key="name"
                             value-format="object"
                             :options="[...notarius_data].filter(d => d.region === selectedRegion.region)"
                />

                <div v-if="selectedNotariat">
                    <span>{{selectedNotariat.name}}</span>
                    <div v-if="selectedNotariat.info">
                        <p>{{selectedNotariat.info['person_name']}}</p>
                        <p>{{selectedNotariat.info['email']}}</p>
                        <p>{{selectedNotariat.info['phone']}}</p>
                        <p>{{selectedNotariat.info['telephone']}}</p>
                        <p>{{selectedNotariat.info['address']}}</p>
                    </div>
                </div>

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
    import TreeSelect from "@/components/common/TreeSelect";

    export default {
        name: "Xerite",
        components: {
            TreeSelect,
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
            },
            selectedRegion: {
                handler(region) {
                    if (!region) {
                        this.selectedNotariat = null;
                    }
                },
                deep: true
            }
        }
    }
</script>

<style scoped>

</style>
