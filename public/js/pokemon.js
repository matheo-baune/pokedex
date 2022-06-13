
Vue.component('pokemon', {
    props : ['pokemon'],
    template: `<v-container fluid col-4><v-card>
                <v-container d-flex :class="pokemon.types[0].couleur">
                  <v-card-title><v-chip dark>{{pokemon.id}}</v-chip><span class="ms-2">{{pokemon.nom}}</v-card-title>
                </v-container>
                <v-container d-flex>
                  <div class="col-6">
                    <v-img :src="'assets/images/'+pokemon.image"></v-img>
                    <v-container d-flex justify-content-evenly mt-2>
                        <v-sheet v-for="type in pokemon.types" :color="type.couleur" class="p-2" style="border-radius: 40px"> {{type.nom}}</v-sheet>
                    </v-container>
                  </div>
                  <div class="col-6">
                    <v-container>{{pokemon.description}}</v-container>
                    <v-simple-table>
                        <tbody>
                          <tr v-for="(stats,name) in pokemon.base">
                            <td>{{name}}</td>
                            <td>{{stats}}</td>
                          </tr>
                        </tbody>
                    </v-simple-table>
                  </div>
                </v-container>
              </v-card></v-container>
    `
})

