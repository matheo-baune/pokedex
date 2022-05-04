

Vue.component('v-card', {
    props : ['pokemon'],
    template: `<v-container>
                <v-container d-flex>
                  <v-card-title><v-chip>{{pokemon.id}}</v-chip><span>{{pokemon.nom}}</v-card-title>
                </v-container>
                <v-container d-flex>
                  <div class="col-6">
                    <v-img :src="'assets/images/'+pokemon.image"></v-img>
                    <v-sheet v-for="type in pokemon.types" :color="type.couleur"> {{type.nom}}</v-sheet>
                  </div>
                  <div class="col-6">
                    <v-container>{{pokemon.description}}</v-container>
                    <v-simple-table>
                      <template v-slot:default>
                        <tbody>
                          <tr v-for="(stats,name) in pokemon.base">
                            <td>{{name}}</td>
                            <td>{{stats}}</td>
                          </tr>
                        </tbody>
                      </template>
                    </v-simple-table>
                  </div>
                </v-container>
              </v-container>
    `
})

