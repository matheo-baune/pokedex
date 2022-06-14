Vue.component('pokemon', {
    props: ['pokemon','darkmode'],
    template: `<v-container fluid col-4><v-card>
                <v-container d-flex :class="pokemon.types[0].couleur">
                  <v-card-title><v-chip dark>{{pokemon.id}}</v-chip><span class="ms-2">{{pokemon.nom}}</span></v-card-title>
                </v-container>
                <v-container  :class="((!darkmode)?'white':'black')+' d-flex'">
                    <v-col cols="6">
                        <v-img :src="'assets/images/'+pokemon.image"></v-img>
                        <v-container d-flex class="justify-md-space-around mt-2">
                            <v-sheet v-for="type in pokemon.types" :color="type.couleur" class="pa-2" style="border-radius: 40px"> {{type.nom}}</v-sheet>
                        </v-container>
                    </v-col>
                  <v-col cols="6">
                    <v-container :style="'color:'+((!darkmode)?'black':'white')">{{pokemon.description}}</v-container>
                    <v-simple-table :dark="darkmode">
                        <tbody>
                          <tr v-for="(stats,name) in pokemon.base">
                            <td>{{name}}</td>
                            <td>{{stats}}</td>
                          </tr>
                        </tbody>
                    </v-simple-table>
                  </v-col>
                </v-container>
              </v-card></v-container>
    `
})

