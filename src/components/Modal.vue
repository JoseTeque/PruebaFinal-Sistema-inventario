<template>
  <div>
    <v-row justify="center">
      <v-dialog v-model="dialog" persistent max-width="290">
        <v-card>
          <v-card-title
            >¿Estas Seguro de {{mensaje}} el juguete ?
          </v-card-title>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green darken-1" text @click="cancelar">
              Cancelar
            </v-btn>
            <v-btn color="green darken-1" text @click="aceptar">
              Aceptar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
    computed:{
        ...mapState(['dialog','mensaje', 'toy', 'loading', 'IdToy'])
    },
    methods:{
        ...mapActions(["openDialog", "loadingLogin","crearToy", "limpiarToy", "eliminarToy","editarToy"]),
        cancelar(){
            this.openDialog(false)
        },
        aceptar(){
            if(this.mensaje == "Agregar"){
                this.openDialog(false)
                this.loadingLogin(true)
                this.crearToy(this.toy)
                this.reset()
                this.$router.push("/home")
            }else if(this.mensaje == "Eliminar"){
                this.openDialog(false)
                this.loadingLogin(true)
                this.eliminarToy(this.IdToy)
            }else if(this.mensaje == "Editar"){
                 this.openDialog(false)
                 this.loadingLogin(true)
                 this.editarToy(this.toy)
                 this.reset()
                 this.$router.push("/home")
            }
        },
        reset(){

            this.limpiarToy({})
        }
    }
};
</script>

<style></style>
